(ns hummingchat.views
  (:use hiccup.core))


; A Basic Layout
(defn basic_layout [content title]
  (html [:head
           [:title title]
           [:link {:rel "stylesheet"
                   :type "text/css"
                   :href "/css/main.css"}]]
           [:script {:type "text/javascript"
                     :src "js/hummingcat/core.js"}]
         [:body content]))

; For quick testing.
(defn say 
  ([message] (basic_layout [:div [:h1 "Hello there"]
    [:p message]] "Hello there"))
  ([title message] (basic_layout [:div [:h1 title] [:p message]] title)))
  


; Sample responses

(def this (say "/this"))
(def that (say "/that"))
(def home (say "Humming-Chat" 
               [:div 
                [:p "A sample app using hummingcat"] 
                [:input {:type "text" :placeholder "input"}]]))
(def number (say "This is a number page."))
