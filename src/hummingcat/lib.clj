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

(defn add_match_to [response match]
  [(first response) (conj (apply list (second response)) match)])

(defn parse-match 
  ([url path]
    (let [sections (map 
                     #(re-pattern (str \^ %)) 
                     (string/split path #"\|\|"))]
      (parse-match url path sections)))
  ([url path sections] 
    (let [_1st_regex (first sections) 
          match (re-find _1st_regex url)
          chopped_url (apply str (drop (count match) url))
          chopped_sections (drop 1 sections)
          match_zero (empty? match)
          url_zero (empty? chopped_url)
          section_zero (empty? chopped_sections)]
      (cond 
        match_zero 
          [false []] ; Simply doesn't match
        (and url_zero section_zero)
          [true [match]] ; Something should go here
        (or url_zero section_zero)
          [false []] ; Does not match —  Leftover sections. or text.
        :else
          (add_match_to 
            (parse-match chopped_url path chopped_sections) match)))))

(defn def-route [handler method path res]
  (fn [request]
    (let [[match params] (parse-match (:uri request) (str path))]
      (if
        (and (= (:request-method request) method) match)
        (content-type (response res) "text/html")
        (handler request)))))

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

