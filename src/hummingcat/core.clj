(ns hummingcat.core
  (:use hiccup.core)
  (:require [hummingcat.lib :as hummingcat]))

; Sample responses.

(defn basic_layout [content title] 
  [:html [:head 
          [:title title]
          [:link {:rel "stylesheet" :type "text/css" :href "/css/main.css"}]]
  [:body content]])
 
(defn say [message] (html (basic_layout [:div [:h1 "Hello there"]
    [:p message]] "Hello there")))

(def this (say "/this"))
(def that (say "/that"))
(def home (say "/"))
(def number (say "This is a number page."))

; Define the Handler
(hummingcat/def-handler handler [request]
  (hummingcat/get "^/$" home) 
  (hummingcat/get "^/url/.*$" (say (second (:url-params request))))
  (hummingcat/get "/this" this)
  (hummingcat/get "/that$" that)
  (hummingcat/get #"/number/\d+" number)
  (hummingcat/get #"^/\d+" number))

; A sample start
(defn -main [& args]
  (hummingcat/run handler 8000))
