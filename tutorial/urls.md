
# URLs

## Matching Requests

In Hummingcat, you define a handler, and within the handlder you string together different routes you want to match. The macro `def-handler` defines the handler, and the functions `get` and `post` specify the routes. These functions take three parameters: a handler, a (regex) string, and the response you wish to return. Within the context of `def-handler` the 'handler' part of these functions is defined for you. This means you only have to specify the path you wish to match and the resonse. Here's an example:

```clojure
(hummingcat/def-handler my_handler [request] 
	(hummingcat/get #"^/hello" "Hello World"))
```

This will serve all urls starting with hello: /hello, /hello-there, /hello/123. If we wanted to serve only /hello, we would have to use #"^/hello$" instead. With this functionality, you have complete control over which urls get served.

## URL Parameters 

But what if we want to get information for what was matched? Simple.

Take this handler:

```clojure
(hummingcat/def-handler my_handler [request]
	(hummingcat/get #"^/user/\d\d$" "User requested"))
```

This processes a request of any two numbers: /user/32, /user/47, /user/00.

Now let's say we want to display the number in the url. We certainly could parse the url ourselves: `(last (clojure.string/split (:uri request) #"/"))`. But that's cumbersome and requires boilerplate code each time. Hummingcat does it for you: 

```
(hummingcat/def-handler my_handler [request]
	(hummingcat/get #"^/user/\d\d$" (str "User: " (second (:url-params request)))))
```

The `:url-params` key in the request object is a list of each item seperated by a `/`. So a url like `/user/12/index` would result in a `:url-params` value of `["user" "12" "index"]`. Note that each item is a string.

And that's how url parametrization works in Hummingcat
