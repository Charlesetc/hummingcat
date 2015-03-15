
# URL Parameters 

With Hummingcat, URLs are automatically parsed for you. Take this handler:

```clojure
(hummingcat/def-handler my_handler [request]
	(hummingcat/get #"^/$" "Hello World")) 
```

This matches the website's root, and returns "Hello World".

But what if we want to get information for what was matched? Simple.

```clojure
(hummingcat/def-handler my_handler [request]
	(hummingcat/get #"^/\d\d$" (first (:url-params request))))
```

This processes any request of two numbers. So `/32` would match this route. The `:url-params` key in the request object is a list of each item seperated by a `/`. So a url like `/user/12/index` would result in a `:url-params` value of `["user" "12" "index"]`. Note that each item is a string.

