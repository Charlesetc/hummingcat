(ns hummingcat.lib
  (:use hiccup.core
    ring.adapter.jetty
    ring.util.response
    ring.middleware.reload
    ring.middleware.stacktrace
    ring.middleware.resource
    ring.middleware.content-type
    ring.middleware.not-modified
    ring.middleware.params
    ring.util.io
    ring.middleware.session
    ring.middleware.cookies)
  (:require [clojure.string :as string]))


  ; A 404 request. `hummingcat.lib/status_404`
(defn status_404 [request]
  {:status 404
   :headers {"Content-Type" "text/plain"}
   :body "404"})



  ; This is for the macro def-handler 
  ; It takes a list and puts them around each other
  ; Kind of like this:
  ; (()()()()) --> ((((()))))
(defn r_insert [_all]
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
(defmacro def-handler [variable parameter & args]
  (let [full_list (conj (vec args) status_404)]
  `(defn ~variable ~parameter
    ~(list (r_insert full_list) (first parameter)))))

(defn def-route
  "To define a route, passing in a method and a path to match."
  [handler method path res]
  (fn [request]
    (let [request_matched (= (:request-method request) method)
          url (:uri request)
          regex_matched (not (empty? (re-find (re-pattern path) url)))]
      (if
        (and request_matched regex_matched)
        (content-type (response res) "text/html") ; Wraps the response
        (handler request)))))

(defn get [handler path res] (def-route handler :get path res))
(defn post [handler path res] (def-route handler :post path res))


; Custom url-parametrization
(defn wrap-url-params [handler]
  (fn [request] 
    (let [url (:uri request) 
          url-params (filter not-empty (string/split url #"/"))]
      (handler (assoc request :url-params url-params)))))

(defn wrap-app
  "This is to wrap the request with middleware"
  [handler]
  (->
    handler
    (wrap-url-params) ; Custom url-parametrization
    (wrap-params)
    (wrap-session)
    (wrap-cookies)
    (wrap-resource "./")
    (wrap-content-type)
    (wrap-not-modified)
    (wrap-reload '(bloge.core))
    (wrap-stacktrace)))

(defn run
  ([handler port the_rest]
    (run-jetty (wrap-app handler) (assoc the_rest :port port)))
  ([handler port]
    (run-jetty (wrap-app handler) {:port port})))

