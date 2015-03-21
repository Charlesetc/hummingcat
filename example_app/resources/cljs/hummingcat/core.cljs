
;; Super Important:
;
; Javascript does NOT compile when vim is open.
; because of the .swp
; fix this eventually, but important to note.

; by the way, this means the directory configuration
; here might be unnecessary



(ns hummingchat.core)
  ; (:require [chord.client :refer [ws-ch]]
  ;                       [cljs.core.async :refer [<! >! put! close!]])
  ; (:require-macros [cljs.core.async.macros :refer [go]]))


; (set! (.-onload js/window)
;       (fn []
; 
;         (go
;         (when-let [{:keys [ws-channel error]} (<! (ws-ch "ws://localhost:3000/ws"
;                                                   {:format :json}))]
; 
;           (if error (println error))))))
; 



; (go
;     (let [{:keys [ws-channel error]} (<! (ws-ch "ws://localhost:8000/ws"))]
;           (if-not error
;                   (>! ws-channel "Hello server from client!" {:format :string})
;                   (js/console.log "Error:" (pr-str error)))))
;


(enable-console-print!)

(println "Hello there!")
