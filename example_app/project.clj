(defproject hummingchat "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [hummingcat "1.2.2"]
                 [org.clojure/clojurescript "0.0-3058"]
                 [jarohen/chord "0.6.0"]]
  :main ^:skip-aot hummingchat.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}
  })
