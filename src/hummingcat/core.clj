(ns hummingcat.core
  (:use hiccup.core)
  (:require [hummingcat.lib :as hummingcat]))

; Sample responses.
(def this "THIS")
(def number "That's a number")

(defn basic_layout [content title] 
  [:html [:head [:title title]]
  [:body content]])
 
(def that (html (basic_layout [:div [:h1 "Hello there"]
    [:p "This is the /that page"]] "Hello!")))

; Define the Handler
(hummingcat/def-handler handler [request]
  (hummingcat/get "/this" this)
  (hummingcat/get "/that" that)
  (hummingcat/get #"/number/||\d+" number) ; Each of these starts 
                                           ; a new regex.
  (hummingcat/get #"^/\d+" number)
  ); (hummingcat/get "/.*" this))

; A sample start
(defn -main [& args]
  (hummingcat/run handler 8000))
