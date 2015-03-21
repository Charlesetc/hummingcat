(ns hummingchat.core
  (:use hummingchat.views)
  (:require [hummingcat.core :as hummingcat]
            [chord.http-kit :refer [with-channel]]
            [clojure.core.async :refer [<! >! put! close! go]]))


; (defn ws-handle [req]
;     (with-channel req ws-ch
;           (go
;                   (let [{:keys [message]} (<! ws-ch)]
;                             (prn "Message received:" message)
;                             (>! ws-ch "Hello client from server!")
;                             (close! ws-ch)))))


; Define the Handler
(hummingcat/def-handler handle [request]

;  (hummingcat/get #"/ws" (ws-handle request))

  (hummingcat/get "^/$" home)
  (hummingcat/get "^/url/.*$" (say (second (:url-params request))))

  (hummingcat/get "/this" this)
  (hummingcat/get "/that$" that)

  (hummingcat/get "^/set" (say "Set" ""))

  (hummingcat/get "^/get" (say "Get" (-> request :cookies str)))

  (hummingcat/get #"/number/\d+" number)
  (hummingcat/get #"^/\d+" number))




; A sample start
(defn -main [& args]
  (hummingcat/run handle {:port 8000 ; Eventually allow for more.
                           :cljs-input "resources/cljs/hummingcat/core.cljs" 
                           :cljs-output "resources/js/hummingcat/core.js" 
                           }))
