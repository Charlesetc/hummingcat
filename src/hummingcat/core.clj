(ns hummingcat.core
  (:gen-class)
  (:use hiccup.core
    ; ring.adapter.jetty
    ; ring.middleware.reload
    org.httpkit.server
    ring.middleware.stacktrace
    ring.middleware.resource
    ring.middleware.file-info
    ring.middleware.content-type
    ring.middleware.not-modified
    ring.middleware.keyword-params
    ring.middleware.params
    ring.util.io
    ring.middleware.session
    ring.middleware.cookies)
  (:require [clojure.string :as string]
            cljs.closure 
            [ring.util.response :as ring]))


  ; A 404 request. `hummingcat/default_404`

(defn response 
  "
  This function helps produce custom response-objects. 
  Furthermore, you can using response-objects to implement 
  cookies and the like, whereas passing in a string to `get`
  or `def-route` does not enable this.

  If you just want a response object to manipulate, but 
  don't want to specify custom settings, just pass a string
  to the function:

  (response \"Not found!\")

  However, if you want to make a custom status, add another
  parameter:

  (response \"Not found!\" 404)

  You can also specify the content-type with an additional 
  string:

  (response \"Not found!\" 404 \"text/plain\")

  Lastly, instead of passing in a string as the last 
  argument, you can put all the header-settings into a 
  hash-map as the third argument:

  (response \"Not found!\" 404 i{\"Content-Type\" \"text/plain\"})
  "
  ([body] (response body 200))
  ([body status] (response body status "text/html"))
  ([body status header] 
    (let [h (if (string? header) {"Content-Type" header} header)]
    {:body body
     :status status
     :headers h})))


; This is just a copy of the ring redirect.
; It's a function and not just a definition
; so that it's documentation is more readable.
(defn redirect 
  "
  A function that returns a response for an HTTP redirect, given a url.

  Example:
  
  (hummingcat/def-handler my_handler [request]
    (hummingcat/get \"/some_URL\" (redirect \"/this_one\")))
  "
  [request]
  (ring/redirect request))


(defn default_404 
  "
  A 404 (Not Found) response.

  Used internally when no route matches a url.
  "
  [request]
  (response "404" 404 "text/plain"))


  ; This is for the macro def-handler 
  ; It takes a list and puts them around each other
  ; Kind of like this:
  ; (()()()()) --> ((((()))))
(defn ^:private r_insert [_all]
  (let [_1 (first _all) _rest (rest _all)]
    (if (empty? _rest)
      _1
      (concat (list (first _1) (r_insert _rest)) (rest _1)))))

;; To handle requests:

  ;  (def-handler handler [request]
  ;    (get "/this" this)
  ;    (get "/that" that)
  ;  )

  ; Define a response to a request with a method and a route
  ; Put the default 404 option in here: as another parameter.
(defmacro def-handler 
  "
  Define a handler by passing in a series of routes. 
  These can either be made with `def-route`, `get`, or `post`. 
  Note that, while each of these methods take a handler as the 
  first parameter, this handler is supplied by `def-handler`. 

  Example: 
  
    (def-handler my_handler [request]
      (get #\"^/hello_world$\" \"Hello World!\"))
  "
  [variable parameter & args]
  (let [full_list (conj (vec args) default_404)]
  `(defn ~variable ~parameter
    ~(list (r_insert full_list) (first parameter)))))

(defn def-route
  "
  This is used to define a route, passing in a method and a
  path to match, and also a response to return.

  This response can either be a string or a hash like this: 
    
    {:status 200, :body \"<html></html>\", :headers {\"Content-Type\" \"text/html\"}} 

  This response hash is equivalent to just the string 
  \"<html></html>\". Note, this means the defaults are 200, 
  for the status, and text/html for the content-type.

  If you want to create http responses that do not use these
  defaults, hummingcat provides the methods `response` and
  `redirect`, among others. There is documentation for these too.
  
  Example:
    
    ; This is equivalent to hummingcat/get.
    (defn get [handler path response] (def-route handler :get path response))
  "
  [handler method path response_a]
  (let [response (if (string? response_a) 
                    (ring/response response_a) 
                    response_a)]
  (fn [request]
    (let [request_matched (= (:request-method request) method)
          url (:uri request)
          regex_matched (not (empty? (re-find (re-pattern path) url)))]
      (if
        (and request_matched regex_matched)
        (ring/content-type response "text/html")
        (handler request))))))

(defn get 
  "
  Used to match a get request, usually within the context of def-handler.
  
  Keep in mind that this does not change the handler passed in, 
  `get` just returns a new handler that will match the 'path' parameter.
  "
  [handler path res] 
  (def-route handler :get path res))

(defn post 
  "
  Used to match a post request, usually within the context of def-handler.
  
  Keep in mind that this does not change the handler passed in, 
  `post` just returns a new handler that will match the 'path' parameter.
  "
  [handler path res] 
  (def-route handler :post path res))

; Custom url-parametrization
(defn ^:private wrap-url-params [handler]
  (fn [request] 
    (let [url (:uri request) 
          url-params (filter not-empty (string/split url #"/"))]
      (handler (assoc request :url-params url-params)))))

(defn ^:private wrap-app
  "This is to wrap the request with middleware"
  ; All the middleware in one place.
  [handler settings]
  (->
    handler
    (wrap-url-params) ; Custom url-parametrization
    (wrap-keyword-params)
    (wrap-params)
    (wrap-session)
    (wrap-cookies)
    (wrap-resource "./out") ; Obviously only one of these is correct...
    (wrap-resource "../out")
    (wrap-resource (or (:static settings) "./"))
    (wrap-file-info)
    (wrap-content-type)
    (wrap-not-modified)
    ; (wrap-reload '(hummingcat.lib)) ; Not sure this works
    (wrap-stacktrace)))             ; Maybe take it out?


; This function is used within hummingcat/run.
(defn ^:private convert_relative [input_file input_path output_path]
  (list input_file (string/replace (str output_path (string/replace input_file input_path "")) #"\.cljs$" ".js")))

(defn run
  "
  The `run` function takes a handler and an options hash and runs
  your hummingcat app!

  If the only option you have is a port, there's no need to wrap
  it in a hash. 
  Thus, both of these are valid:

  (hummingcat/run my_handler 2000)
  (hummingcat/run my_handler {:port 2000})

  Just remember to define `my_handler` with `hummingcat/def-handler`
  "
  [handler options]
    (if (number? options)
        (run-server (wrap-app handler {}) {:port options})

        ; This just parses the settings and puts them where I want them.
        ; Some go into the wrap-app function (settings)
        ; Some are redirected to compile clojurescript
        ; The rest are passed on as options to the Ring server.
        ; All are optional. Pass in just a number if you want.
        (let [settings {:static (:static options)} 
              new-options (dissoc options 
                                  :static
                                  :cljs-input
                                  :cljs-output)
              static (:static options)
              input-path (or (:cljs-input options) static)
              output-path (or (:cljs-output options) static)]
          (do
          (if 
            (and input-path output-path) 
            (cljs.closure/build input-path {:output-to (output-path) 
                                            :optimizations :advanced})
            (when 
              (or input-path output-path) 
              (throw "You need both a :cljs-input and a :cljs-output")))
          (run-server (wrap-app handler settings) new-options)))))


; (def-handler handle [request]
;   (get "/\\d+" (first (:url-params request)))
;   (get "/hi" "HELLO WORLD"))
; 
; 
