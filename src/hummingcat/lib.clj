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
    ring.middleware.cookies))

(defn status_404 [request]
  {:status 404
   :headers {"Content-Type" "text/plain"}
   :body "404"})

(defn r_insert [_all]
  (let [_1 (first _all) _rest (rest _all)]
    (if (empty? _rest)
      _1
      (concat (list (first _1) (r_insert _rest)) (rest _1)))))

;; All Equivilent:

  ;  (def-handler handler [request]
  ;    (get "/this" this)
  ;    (get "/that" that)
  ;  )

  ; (defn handler [request]
  ;   ((->
  ;     hummingcat/status_404
  ;     (get "/this" this)
  ;     (get "/that" that)) request))

  ; (hummingcat/def-handler handler [request]
  ;  (hummingcat/get "/this" this)
  ;  (hummingcat/get "/that" that))

  ; (defn handler [request]
  ;  ((hummingcat/string-together
  ;    (hummingcat/get "/this" this)
  ;    (hummingcat/get "/that" that)
  ;    hummingcat/status_404) request))

(defmacro def-handler [variable parameter & args]
  (let [full_list (conj (vec args) status_404)]
  `(defn ~variable ~parameter ~(list (r_insert full_list) (first parameter))))
  )

(defn def-route [handler method path res]
  (fn [request]
    (if
      (and (= (:request-method request) method) (= (:uri request) path))
      (content-type (response res) "text/html")
      (handler request))))

(defn get [handler path res] (def-route handler :get path res))
(defn post [handler path res] (def-route handler :post path res))

(defn wrap-app [handler]
  (->
    handler
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
