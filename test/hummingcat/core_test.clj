(ns hummingcat.core-test
  (:require [clojure.test :refer :all]
            [hummingcat.core :refer :all]
            [clj-webdriver.taxi :as t]))

(defn selenium-fixture
  [& browsers]
  (fn [test] 
    (doseq [browser browsers]
      (println (str "\n[ Testing " browser " ]"))
      (t/set-driver! {:browser browser})
      (test)
      (t/quit))))
     
(use-fixtures :once (selenium-fixture :chrome))

; (deftest browser
;   (t/to "http://www.google.com")
;   (is (= (t/title) "Google")))
; 
; (deftest a-test
;   (testing "FIXME, I fail."
;     (is (= 1 1))))
