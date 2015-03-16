(ns hummingcat.core
  (:use hiccup.core
    ring.adapter.jetty
    ring.util.response
    ring.middleware.reload
    ring.middleware.stacktrace
    ring.middleware.resource
    ring.middleware.file-info
    ring.middleware.content-type
    ring.middleware.not-modified
    ring.middleware.params
    ring.util.io
    ring.middleware.session
    ring.middleware.cookies)
  (:require [clojure.string :as string]))


  ; A 404 request. `hummingcat.lib/status_404`
(defn status_404 
  "
  A 404 (Not Found) response.

  Used internally when no route matches a url.
  "
  [request]
  {:status 404
   :headers {"Content-Type" "text/plain"}
   :body "404"})



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
  (let [full_list (conj (vec args) status_404)]
  `(defn ~variable ~parameter
    ~(list (r_insert full_list) (first parameter)))))

(defn def-route
  "
  This is used to define a route, passing in a method and a path to match.
  
  Example:
    
    ; This is equivalent to hummingcat/get.
    (defn get [handler path response] (def-route handler :get path response))
  "
  [handler method path res]
  (fn [request]
    (let [request_matched (= (:request-method request) method)
          url (:uri request)
          regex_matched (not (empty? (re-find (re-pattern path) url)))]
      (if
        (and request_matched regex_matched)
        (content-type (response res) "text/html") ; Wraps the response
        (handler request)))))

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
  [handler]
  (->
    handler
    (wrap-url-params) ; Custom url-parametrization
    (wrap-params)
    (wrap-session)
    (wrap-cookies)
    (wrap-resource "./")
    (wrap-file-info)
    (wrap-content-type)
    (wrap-not-modified)
    (wrap-reload '(hummingcat.lib))
    (wrap-stacktrace)))

(defn run
  "
  The `run` function takes a handler and a port and runs your hummingcat app!

  Optionally, provide a hash of ring options as the third argument. (Don't forget the port, in this case.)
  "
  ([handler port the_rest]
    (run-jetty (wrap-app handler) (assoc the_rest :port port)))
  ([handler port]
    (run-jetty (wrap-app handler) {:port port})))
