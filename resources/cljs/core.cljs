
(ns hummingcat.core
  (:require [chord.client :refer [ws-ch]]
            [cljs.core.async :refer [<! >! put! close!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)
(println "HELLO!!!!")

