// Compiled by ClojureScript 0.0-3058 {}
goog.provide('chord.http_format');
goog.require('cljs.core');
goog.require('chord.format');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.walk');
chord.http_format.mime_type__GT_format = new cljs.core.PersistentArrayMap(null, 2, ["application/edn",cljs.core.constant$keyword$_COLON_edn,"application/json",cljs.core.constant$keyword$_COLON_json_kw], null);
chord.http_format.format__GT_mime_type = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$_COLON_edn,"application/edn",cljs.core.constant$keyword$_COLON_json_kw,"application/json",cljs.core.constant$keyword$_COLON_json,"application/json",cljs.core.constant$keyword$_COLON_str,"text/plain"], null);
chord.http_format.mime_type = (function chord$http_format$mime_type(resp){
var temp__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(resp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_headers,cljs.core.constant$keyword$_COLON_content_type], null));
if(cljs.core.truth_(temp__4126__auto__)){
var content_type = temp__4126__auto__;
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(content_type,/;/));
} else {
return null;
}
});
chord.http_format.with_parsed_body = (function chord$http_format$with_parsed_body(resp,req){
var fmtr = chord.format.formatter((function (){var or__13083__auto__ = cljs.core.constant$keyword$_COLON_resp_format.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__13083__auto__)){
return or__13083__auto__;
} else {
var or__13083__auto____$1 = (function (){var G__19006 = chord.http_format.mime_type(resp);
return (chord.http_format.mime_type__GT_format.cljs$core$IFn$_invoke$arity$1 ? chord.http_format.mime_type__GT_format.cljs$core$IFn$_invoke$arity$1(G__19006) : chord.http_format.mime_type__GT_format.call(null,G__19006));
})();
if(cljs.core.truth_(or__13083__auto____$1)){
return or__13083__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_format,cljs.core.constant$keyword$_COLON_str], null);
}
}
})());
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(resp,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_body], null),((function (fmtr){
return (function (p1__19002_SHARP_){
return chord.format.thaw(fmtr,p1__19002_SHARP_);
});})(fmtr))
,fmtr);
});
chord.http_format.with_formatted_body = (function chord$http_format$with_formatted_body(req){
var fmt = (function (){var or__13083__auto__ = cljs.core.constant$keyword$_COLON_req_format.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__13083__auto__)){
return or__13083__auto__;
} else {
return cljs.core.constant$keyword$_COLON_str;
}
})();
var fmtr = chord.format.formatter(fmt);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_headers,cljs.core.constant$keyword$_COLON_content_type], null),(function (){var or__13083__auto__ = (function (){var G__19011 = fmt;
return (chord.http_format.format__GT_mime_type.cljs$core$IFn$_invoke$arity$1 ? chord.http_format.format__GT_mime_type.cljs$core$IFn$_invoke$arity$1(G__19011) : chord.http_format.format__GT_mime_type.call(null,G__19011));
})();
if(cljs.core.truth_(or__13083__auto__)){
return or__13083__auto__;
} else {
return fmt;
}
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_body], null),((function (fmt,fmtr){
return (function (p1__19007_SHARP_){
return chord.format.freeze(fmtr,p1__19007_SHARP_);
});})(fmt,fmtr))
,fmt);
});
