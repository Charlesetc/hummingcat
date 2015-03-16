# Hummingcat 
Faster than a cat.

## Installation

[![Clojars Project](http://clojars.org/hummingcat/latest-version.svg)](http://clojars.org/hummingcat)

### Leiningen

Add this to the dependencies in your project.clj file.
```clojure
[hummingcat "0.1.1"]
```

### Maven

Add this to the dependancies in your project.

```xml
<dependency>
  <groupId>hummingcat</groupId>
  <artifactId>hummingcat</artifactId>
  <version>0.1.1</version>
</dependency>
```

## Usage

First, require the project:
```clojure 
(use 'hiccup.core) # Hiccup is for html generation
(require '[hummingcat.lib :as hcat])
```

Now that we've gotten that taken care of, we can define some views. This view is intended to display the url:

```clojure
(defn display_url [url] # Takes the url as a parameter
  (html
    [:head
      [:title "What url was that?"]]
    [:body
      [:h1 "URL"]
      [:p (str "You just requested " url)]]))
```

Now we can decide exactly which requests get which views:

```clojure
(hcat/def-handler my_hander [request]
  (hcat/get "/this_specific_url" "omg you requested this one!")
  (hcat/get #".*" (display_url (:uri request))))
```

This will take a request from the user. If it's a `GET` for the url `/this_specific_url` the user will see `omg you requested this one!`. Any other request will display the view `display_url`, including the url which they are requesting.

The nice thing about hummingcat is that it includes this functionality without forcing you to conform to a specific structure. You can place your views in whatever folder or file you want. Same with your handlers. 

Lastly, we need to run the server:

```clojure
(defn -main [& args]
  (hcat/run my_handler 8000)) # Passing in the handler and the port.
```

That's hummingcat!

See the [tutorial](tutorial/) for more information.

## License

Copyright © 2015 Charlesetc

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
