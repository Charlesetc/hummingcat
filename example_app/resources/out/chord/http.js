// Compiled by ClojureScript 0.0-3058 {}
goog.provide('chord.http');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.crypt.base64');
goog.require('goog.net.EventType');
goog.require('cemerick.url');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
goog.require('chord.http_format');
chord.http.with_default = (function chord$http$with_default(default$){
return (function (s){
if(cljs.core.truth_((function (){var or__13083__auto__ = clojure.string.blank_QMARK_(s);
if(cljs.core.truth_(or__13083__auto__)){
return or__13083__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),s);
}
})())){
return default$;
} else {
return s;
}
});
});
chord.http.full_url = (function chord$http$full_url(url_or_path){
var default_protocol = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(location.protocol,(0),(cljs.core.count(location.protocol) - (1)));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cemerick.url.url.cljs$core$IFn$_invoke$arity$1(url_or_path),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_protocol], null),chord.http.with_default(default_protocol)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_host], null),chord.http.with_default(location.hostname)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_port], null),chord.http.with_default(location.port));
});
chord.http.with_query_params = (function chord$http$with_query_params(p__18900){
var map__18902 = p__18900;
var map__18902__$1 = ((cljs.core.seq_QMARK_(map__18902))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18902):map__18902);
var req = map__18902__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18902__$1,cljs.core.constant$keyword$_COLON_query_params);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18902__$1,cljs.core.constant$keyword$_COLON_url);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(req,cljs.core.constant$keyword$_COLON_url,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(chord.http.full_url(url),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_query], null),cljs.core.merge,query_params));
});
chord.http.with_headers = (function chord$http$with_headers(p__18903){
var map__18905 = p__18903;
var map__18905__$1 = ((cljs.core.seq_QMARK_(map__18905))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18905):map__18905);
var req = map__18905__$1;
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18905__$1,cljs.core.constant$keyword$_COLON_headers);
var xhr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18905__$1,cljs.core.constant$keyword$_COLON_xhr);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_headers], null),cljs.core.clj__GT_js);
});
chord.http.resp_headers = (function chord$http$resp_headers(xhr){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__13839__auto__ = (function chord$http$resp_headers_$_iter__18916(s__18917){
return (new cljs.core.LazySeq(null,(function (){
var s__18917__$1 = s__18917;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__18917__$1);
if(temp__4126__auto__){
var s__18917__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18917__$2)){
var c__13837__auto__ = cljs.core.chunk_first(s__18917__$2);
var size__13838__auto__ = cljs.core.count(c__13837__auto__);
var b__18919 = cljs.core.chunk_buffer(size__13838__auto__);
if((function (){var i__18918 = (0);
while(true){
if((i__18918 < size__13838__auto__)){
var vec__18924 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__13837__auto__,i__18918);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18924,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18924,(1),null);
cljs.core.chunk_append(b__18919,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(k)),v], null));

var G__18926 = (i__18918 + (1));
i__18918 = G__18926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18919),chord$http$resp_headers_$_iter__18916(cljs.core.chunk_rest(s__18917__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18919),null);
}
} else {
var vec__18925 = cljs.core.first(s__18917__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18925,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18925,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(k)),v], null),chord$http$resp_headers_$_iter__18916(cljs.core.rest(s__18917__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13839__auto__(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(xhr.getResponseHeaders()));
})());
});
chord.http.with_basic_auth = (function chord$http$with_basic_auth(p__18927){
var map__18931 = p__18927;
var map__18931__$1 = ((cljs.core.seq_QMARK_(map__18931))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18931):map__18931);
var req = map__18931__$1;
var basic_auth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18931__$1,cljs.core.constant$keyword$_COLON_basic_auth);
var temp__4124__auto__ = basic_auth;
if(cljs.core.truth_(temp__4124__auto__)){
var vec__18932 = temp__4124__auto__;
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18932,(0),null);
var pass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18932,(1),null);
return cljs.core.assoc_in(req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_headers,cljs.core.constant$keyword$_COLON_authorization], null),[cljs.core.str("Basic "),cljs.core.str((function (){var G__18933 = [cljs.core.str(user),cljs.core.str(":"),cljs.core.str(pass)].join('');
return goog.crypt.base64.encodeString(G__18933);
})())].join(''));
} else {
return req;
}
});
chord.http.request = (function chord$http$request(req){
var resp_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var map__18952 = chord.http.with_headers(chord.http.with_basic_auth(chord.http_format.with_formatted_body(chord.http.with_query_params(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(req,cljs.core.constant$keyword$_COLON_xhr,(new goog.net.XhrIo()))))));
var map__18952__$1 = ((cljs.core.seq_QMARK_(map__18952))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18952):map__18952);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18952__$1,cljs.core.constant$keyword$_COLON_headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18952__$1,cljs.core.constant$keyword$_COLON_body);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18952__$1,cljs.core.constant$keyword$_COLON_method);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18952__$1,cljs.core.constant$keyword$_COLON_url);
var xhr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18952__$1,cljs.core.constant$keyword$_COLON_xhr);
var G__18953_18970 = xhr;
var G__18954_18971 = goog.net.EventType.COMPLETE;
var G__18955_18972 = ((function (G__18953_18970,G__18954_18971,resp_ch,map__18952,map__18952__$1,headers,body,method,url,xhr){
return (function (e){
var resp = chord.http_format.with_parsed_body(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_status,xhr.getStatus(),cljs.core.constant$keyword$_COLON_headers,chord.http.resp_headers(xhr),cljs.core.constant$keyword$_COLON_body,xhr.getResponseText()], null),req);
var c__15155__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15155__auto__,resp,G__18953_18970,G__18954_18971,resp_ch,map__18952,map__18952__$1,headers,body,method,url,xhr){
return (function (){
var f__15156__auto__ = (function (){var switch__15058__auto__ = ((function (c__15155__auto__,resp,G__18953_18970,G__18954_18971,resp_ch,map__18952,map__18952__$1,headers,body,method,url,xhr){
return (function (state_18960){
var state_val_18961 = (state_18960[(1)]);
if((state_val_18961 === (2))){
var inst_18957 = (state_18960[(2)]);
var inst_18958 = cljs.core.async.close_BANG_(resp_ch);
var state_18960__$1 = (function (){var statearr_18962 = state_18960;
(statearr_18962[(7)] = inst_18957);

return statearr_18962;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18960__$1,inst_18958);
} else {
if((state_val_18961 === (1))){
var state_18960__$1 = state_18960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18960__$1,(2),resp_ch,resp);
} else {
return null;
}
}
});})(c__15155__auto__,resp,G__18953_18970,G__18954_18971,resp_ch,map__18952,map__18952__$1,headers,body,method,url,xhr))
;
return ((function (switch__15058__auto__,c__15155__auto__,resp,G__18953_18970,G__18954_18971,resp_ch,map__18952,map__18952__$1,headers,body,method,url,xhr){
return (function() {
var chord$http$request_$_state_machine__15059__auto__ = null;
var chord$http$request_$_state_machine__15059__auto____0 = (function (){
var statearr_18966 = [null,null,null,null,null,null,null,null];
(statearr_18966[(0)] = chord$http$request_$_state_machine__15059__auto__);

(statearr_18966[(1)] = (1));

return statearr_18966;
});
var chord$http$request_$_state_machine__15059__auto____1 = (function (state_18960){
while(true){
var ret_value__15060__auto__ = (function (){try{while(true){
var result__15061__auto__ = switch__15058__auto__(state_18960);
if(cljs.core.keyword_identical_QMARK_(result__15061__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__15061__auto__;
}
break;
}
}catch (e18967){if((e18967 instanceof Object)){
var ex__15062__auto__ = e18967;
var statearr_18968_18973 = state_18960;
(statearr_18968_18973[(5)] = ex__15062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18960);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18967;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15060__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18974 = state_18960;
state_18960 = G__18974;
continue;
} else {
return ret_value__15060__auto__;
}
break;
}
});
chord$http$request_$_state_machine__15059__auto__ = function(state_18960){
switch(arguments.length){
case 0:
return chord$http$request_$_state_machine__15059__auto____0.call(this);
case 1:
return chord$http$request_$_state_machine__15059__auto____1.call(this,state_18960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$http$request_$_state_machine__15059__auto__.cljs$core$IFn$_invoke$arity$0 = chord$http$request_$_state_machine__15059__auto____0;
chord$http$request_$_state_machine__15059__auto__.cljs$core$IFn$_invoke$arity$1 = chord$http$request_$_state_machine__15059__auto____1;
return chord$http$request_$_state_machine__15059__auto__;
})()
;})(switch__15058__auto__,c__15155__auto__,resp,G__18953_18970,G__18954_18971,resp_ch,map__18952,map__18952__$1,headers,body,method,url,xhr))
})();
var state__15157__auto__ = (function (){var statearr_18969 = (function (){return (f__15156__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15156__auto__.cljs$core$IFn$_invoke$arity$0() : f__15156__auto__.call(null));
})();
(statearr_18969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15155__auto__);

return statearr_18969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15157__auto__);
});})(c__15155__auto__,resp,G__18953_18970,G__18954_18971,resp_ch,map__18952,map__18952__$1,headers,body,method,url,xhr))
);

return c__15155__auto__;
});})(G__18953_18970,G__18954_18971,resp_ch,map__18952,map__18952__$1,headers,body,method,url,xhr))
;
goog.events.listen(G__18953_18970,G__18954_18971,G__18955_18972);

xhr.send(url,clojure.string.upper_case(cljs.core.name(method)),body,headers);

return resp_ch;
});
/**
 * @param {...*} var_args
 */
chord.http.get = (function() { 
var chord$http$get__delegate = function (url,p__18975){
var vec__18977 = p__18975;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18977,(0),null);
return chord.http.request(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$_COLON_method,cljs.core.constant$keyword$_COLON_get,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_url,url], 0)));
};
var chord$http$get = function (url,var_args){
var p__18975 = null;
if (arguments.length > 1) {
var G__18978__i = 0, G__18978__a = new Array(arguments.length -  1);
while (G__18978__i < G__18978__a.length) {G__18978__a[G__18978__i] = arguments[G__18978__i + 1]; ++G__18978__i;}
  p__18975 = new cljs.core.IndexedSeq(G__18978__a,0);
} 
return chord$http$get__delegate.call(this,url,p__18975);};
chord$http$get.cljs$lang$maxFixedArity = 1;
chord$http$get.cljs$lang$applyTo = (function (arglist__18979){
var url = cljs.core.first(arglist__18979);
var p__18975 = cljs.core.rest(arglist__18979);
return chord$http$get__delegate(url,p__18975);
});
chord$http$get.cljs$core$IFn$_invoke$arity$variadic = chord$http$get__delegate;
return chord$http$get;
})()
;
/**
 * @param {...*} var_args
 */
chord.http.post = (function() { 
var chord$http$post__delegate = function (url,p__18980){
var vec__18982 = p__18980;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18982,(0),null);
return chord.http.request(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$_COLON_method,cljs.core.constant$keyword$_COLON_post,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_url,url], 0)));
};
var chord$http$post = function (url,var_args){
var p__18980 = null;
if (arguments.length > 1) {
var G__18983__i = 0, G__18983__a = new Array(arguments.length -  1);
while (G__18983__i < G__18983__a.length) {G__18983__a[G__18983__i] = arguments[G__18983__i + 1]; ++G__18983__i;}
  p__18980 = new cljs.core.IndexedSeq(G__18983__a,0);
} 
return chord$http$post__delegate.call(this,url,p__18980);};
chord$http$post.cljs$lang$maxFixedArity = 1;
chord$http$post.cljs$lang$applyTo = (function (arglist__18984){
var url = cljs.core.first(arglist__18984);
var p__18980 = cljs.core.rest(arglist__18984);
return chord$http$post__delegate(url,p__18980);
});
chord$http$post.cljs$core$IFn$_invoke$arity$variadic = chord$http$post__delegate;
return chord$http$post;
})()
;
/**
 * @param {...*} var_args
 */
chord.http.put = (function() { 
var chord$http$put__delegate = function (url,p__18985){
var vec__18987 = p__18985;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18987,(0),null);
return chord.http.request(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$_COLON_method,cljs.core.constant$keyword$_COLON_put,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_url,url], 0)));
};
var chord$http$put = function (url,var_args){
var p__18985 = null;
if (arguments.length > 1) {
var G__18988__i = 0, G__18988__a = new Array(arguments.length -  1);
while (G__18988__i < G__18988__a.length) {G__18988__a[G__18988__i] = arguments[G__18988__i + 1]; ++G__18988__i;}
  p__18985 = new cljs.core.IndexedSeq(G__18988__a,0);
} 
return chord$http$put__delegate.call(this,url,p__18985);};
chord$http$put.cljs$lang$maxFixedArity = 1;
chord$http$put.cljs$lang$applyTo = (function (arglist__18989){
var url = cljs.core.first(arglist__18989);
var p__18985 = cljs.core.rest(arglist__18989);
return chord$http$put__delegate(url,p__18985);
});
chord$http$put.cljs$core$IFn$_invoke$arity$variadic = chord$http$put__delegate;
return chord$http$put;
})()
;
/**
 * @param {...*} var_args
 */
chord.http.delete$ = (function() { 
var chord$http$delete__delegate = function (url,p__18990){
var vec__18992 = p__18990;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18992,(0),null);
return chord.http.request(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$_COLON_method,cljs.core.constant$keyword$_COLON_delete,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_url,url], 0)));
};
var chord$http$delete = function (url,var_args){
var p__18990 = null;
if (arguments.length > 1) {
var G__18993__i = 0, G__18993__a = new Array(arguments.length -  1);
while (G__18993__i < G__18993__a.length) {G__18993__a[G__18993__i] = arguments[G__18993__i + 1]; ++G__18993__i;}
  p__18990 = new cljs.core.IndexedSeq(G__18993__a,0);
} 
return chord$http$delete__delegate.call(this,url,p__18990);};
chord$http$delete.cljs$lang$maxFixedArity = 1;
chord$http$delete.cljs$lang$applyTo = (function (arglist__18994){
var url = cljs.core.first(arglist__18994);
var p__18990 = cljs.core.rest(arglist__18994);
return chord$http$delete__delegate(url,p__18990);
});
chord$http$delete.cljs$core$IFn$_invoke$arity$variadic = chord$http$delete__delegate;
return chord$http$delete;
})()
;
/**
 * @param {...*} var_args
 */
chord.http.head = (function() { 
var chord$http$head__delegate = function (url,p__18995){
var vec__18997 = p__18995;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18997,(0),null);
return chord.http.request(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$_COLON_method,cljs.core.constant$keyword$_COLON_head,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_url,url], 0)));
};
var chord$http$head = function (url,var_args){
var p__18995 = null;
if (arguments.length > 1) {
var G__18998__i = 0, G__18998__a = new Array(arguments.length -  1);
while (G__18998__i < G__18998__a.length) {G__18998__a[G__18998__i] = arguments[G__18998__i + 1]; ++G__18998__i;}
  p__18995 = new cljs.core.IndexedSeq(G__18998__a,0);
} 
return chord$http$head__delegate.call(this,url,p__18995);};
chord$http$head.cljs$lang$maxFixedArity = 1;
chord$http$head.cljs$lang$applyTo = (function (arglist__18999){
var url = cljs.core.first(arglist__18999);
var p__18995 = cljs.core.rest(arglist__18999);
return chord$http$head__delegate(url,p__18995);
});
chord$http$head.cljs$core$IFn$_invoke$arity$variadic = chord$http$head__delegate;
return chord$http$head;
})()
;
