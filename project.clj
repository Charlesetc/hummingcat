(defproject hummingcat "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [ring "1.3.2"]
                 ]
  :plugins [[lein-ring "0.8.11"]]
  :ring {:handler bloge.core/app}
  :main ^:skip-aot hummingcat.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}
             :dev {:dependencies [[clj-webdriver "0.6.0"]
                                  ]}}
  :test-selectors {:default (complement :browser)
                   :browser :browser})
