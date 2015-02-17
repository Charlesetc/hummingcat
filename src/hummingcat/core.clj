(ns hummingcat.core
  (:use hiccup.core)
  (:require [hummingcat.lib :as hummingcat]))

; Sample responses.
(def this "THIS")
(def that (html
            [:head
              [:title "THAT"]]
            [:body
              [:h1 "Hello there"]
              [:p "This is the /that page"]]))


(hummingcat/def-handler handler [request]
  (hummingcat/get "/this" this)
  (hummingcat/get "/that" that)
  )

;(def handler #(str %))

; A sample start
(defn -main [& args]
  (hummingcat/run handler 8000))
