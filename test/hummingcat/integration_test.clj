(ns hummingcat.integration-test
  (:require [clojure.test :refer :all]
            [hummingcat.lib :as h]
            [hiccup.core :refer :all]
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


; Setting up Server...

(h/def-handler handler [request]
  (h/get "/this" (html
                    [:head
                      [:title "THIS"]]
                    [:body
                      [:h1 "Clojure"]
                      [:p "...is a fun language!"]])))


(h/def-handler handler2 [request]
  (h/get "/this" (html
                    [:head
                      [:title "THIS"]]
                    [:body
                      [:h1 "Clojure"]
                      [:p "...is a fun language!"]]))
  (h/get "/that" (html
                    [:head
                      [:title "THAT"]]
                    [:body
                      [:h1 "Clojure"]
                      [:p "...is a fun language!"]])))


; These tests are bulky but not for the users.
; Make sure we can get anything at all
(deftest basic-browser
  (t/to "http://www.google.com")
  (is (= (t/title) "Google")))

; Make sure we get the proper page
(deftest basic-get
  (def f (future (h/run handler 8000)))
  (t/to "localhost:8000/this")
  (is (= (t/title) "THIS"))
  (future-cancel f))

(deftest ensure-similarity
  (def f (future (h/run handler2 8000)))
  (t/to "localhost:8000/this")
  (is (= (t/title) "THIS"))
  (t/to "localhost:8000/that")
  (is (= (t/title) "THAT"))
  (future-cancel f)
  )

; (deftest testing-htest
;   (test-handler handler
;     (t/to "localhost:8000/this")
;     (is (= (t/title) "THIS"))))
