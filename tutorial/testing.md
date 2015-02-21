
# Testing

Testing your hummingcat app:

	Start your app on a seperate thread.
	Direct your browser to the url.
	Examine the reslt.
	Stop your app.

Example:

```
(ns your-ab.integration-test
  (:require [clojure.test :refer :all]
            [hummingcat.lib :as h]
            [clj-webdriver.taxi :as t]))

; Set up the Selenium Browser
(defn selenium-fixture
  [& browsers]
  (fn [test]
    (doseq [browser browsers]
      (println (str "\n[ Testing " browser " ]"))
      (t/set-driver! {:browser browser})
      (test)
      (t/quit))))

(use-fixtures :once (selenium-fixture :chrome))

; Start your app
(def f (future (h/run handler 8000)))

; Here's your test!
(deftest basic-get
  (t/to "localhost:8000/")
  (is (= (t/title) "Your Hopepage's Title")))

; Here's another test!
(deftest basic-get2
  (t/to "localhost:8000/test")
  (is (= (t/title) "TEST")))
```

To learn more about how to use 'clj-webdriver', check out their [wiki](https://github.com/semperos/clj-webdriver/wiki/Introduction%3A-Taxi)
