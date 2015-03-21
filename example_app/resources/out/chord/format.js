// Compiled by ClojureScript 0.0-3058 {}
goog.provide('chord.format');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('clojure.walk');
goog.require('cljs.reader');
goog.require('cljs.core.async');

chord.format.ChordFormatter = (function (){var obj12046 = {};
return obj12046;
})();

chord.format.freeze = (function chord$format$freeze(_,obj){
if((function (){var and__5771__auto__ = _;
if(and__5771__auto__){
return _.chord$format$ChordFormatter$freeze$arity$2;
} else {
return and__5771__auto__;
}
})()){
return _.chord$format$ChordFormatter$freeze$arity$2(_,obj);
} else {
var x__6427__auto__ = (((_ == null))?null:_);
return (function (){var or__5783__auto__ = (chord.format.freeze[(function (){var G__12050 = x__6427__auto__;
return goog.typeOf(G__12050);
})()]);
if(or__5783__auto__){
return or__5783__auto__;
} else {
var or__5783__auto____$1 = (chord.format.freeze["_"]);
if(or__5783__auto____$1){
return or__5783__auto____$1;
} else {
throw cljs.core.missing_protocol("ChordFormatter.freeze",_);
}
}
})().call(null,_,obj);
}
});

chord.format.thaw = (function chord$format$thaw(_,s){
if((function (){var and__5771__auto__ = _;
if(and__5771__auto__){
return _.chord$format$ChordFormatter$thaw$arity$2;
} else {
return and__5771__auto__;
}
})()){
return _.chord$format$ChordFormatter$thaw$arity$2(_,s);
} else {
var x__6427__auto__ = (((_ == null))?null:_);
return (function (){var or__5783__auto__ = (chord.format.thaw[(function (){var G__12054 = x__6427__auto__;
return goog.typeOf(G__12054);
})()]);
if(or__5783__auto__){
return or__5783__auto__;
} else {
var or__5783__auto____$1 = (chord.format.thaw["_"]);
if(or__5783__auto____$1){
return or__5783__auto____$1;
} else {
throw cljs.core.missing_protocol("ChordFormatter.thaw",_);
}
}
})().call(null,_,s);
}
});

chord.format.formatter_STAR_ = (function (){var method_table__6680__auto__ = (function (){var G__12055 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12055) : cljs.core.atom.call(null,G__12055));
})();
var prefer_table__6681__auto__ = (function (){var G__12056 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12056) : cljs.core.atom.call(null,G__12056));
})();
var method_cache__6682__auto__ = (function (){var G__12057 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12057) : cljs.core.atom.call(null,G__12057));
})();
var cached_hierarchy__6683__auto__ = (function (){var G__12058 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12058) : cljs.core.atom.call(null,G__12058));
})();
var hierarchy__6684__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$_COLON_hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("chord.format","formatter*"),cljs.core.constant$keyword$_COLON_format,cljs.core.constant$keyword$_COLON_default,hierarchy__6684__auto__,method_table__6680__auto__,prefer_table__6681__auto__,method_cache__6682__auto__,cached_hierarchy__6683__auto__));
})();
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$_COLON_edn,(function (_){
if(typeof chord.format.t12059 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.format.t12059 = (function (_,meta12060){
this._ = _;
this.meta12060 = meta12060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.format.t12059.prototype.chord$format$ChordFormatter$ = true;

chord.format.t12059.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([obj], 0));
});

chord.format.t12059.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cljs.reader.read_string(s);
});

chord.format.t12059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12061){
var self__ = this;
var _12061__$1 = this;
return self__.meta12060;
});

chord.format.t12059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12061,meta12060__$1){
var self__ = this;
var _12061__$1 = this;
return (new chord.format.t12059(self__._,meta12060__$1));
});

chord.format.t12059.cljs$lang$type = true;

chord.format.t12059.cljs$lang$ctorStr = "chord.format/t12059";

chord.format.t12059.cljs$lang$ctorPrWriter = (function (this__6370__auto__,writer__6371__auto__,opt__6372__auto__){
return cljs.core._write(writer__6371__auto__,"chord.format/t12059");
});

chord.format.__GT_t12059 = (function chord$format$__GT_t12059(___$1,meta12060){
return (new chord.format.t12059(___$1,meta12060));
});

}

return (new chord.format.t12059(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$_COLON_json,(function (_){
if(typeof chord.format.t12062 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.format.t12062 = (function (_,meta12063){
this._ = _;
this.meta12063 = meta12063;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.format.t12062.prototype.chord$format$ChordFormatter$ = true;

chord.format.t12062.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
var G__12065 = cljs.core.clj__GT_js(obj);
return JSON.stringify(G__12065);
});

chord.format.t12062.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var G__12066 = s;
return JSON.parse(G__12066);
})());
});

chord.format.t12062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12064){
var self__ = this;
var _12064__$1 = this;
return self__.meta12063;
});

chord.format.t12062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12064,meta12063__$1){
var self__ = this;
var _12064__$1 = this;
return (new chord.format.t12062(self__._,meta12063__$1));
});

chord.format.t12062.cljs$lang$type = true;

chord.format.t12062.cljs$lang$ctorStr = "chord.format/t12062";

chord.format.t12062.cljs$lang$ctorPrWriter = (function (this__6370__auto__,writer__6371__auto__,opt__6372__auto__){
return cljs.core._write(writer__6371__auto__,"chord.format/t12062");
});

chord.format.__GT_t12062 = (function chord$format$__GT_t12062(___$1,meta12063){
return (new chord.format.t12062(___$1,meta12063));
});

}

return (new chord.format.t12062(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$_COLON_json_kw,(function (opts){
var json_formatter = (function (){var G__12067 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$_COLON_format,cljs.core.constant$keyword$_COLON_json);
return (chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1 ? chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1(G__12067) : chord.format.formatter_STAR_.call(null,G__12067));
})();
if(typeof chord.format.t12068 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.format.t12068 = (function (json_formatter,opts,meta12069){
this.json_formatter = json_formatter;
this.opts = opts;
this.meta12069 = meta12069;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.format.t12068.prototype.chord$format$ChordFormatter$ = true;

chord.format.t12068.prototype.chord$format$ChordFormatter$freeze$arity$2 = ((function (json_formatter){
return (function (_,obj){
var self__ = this;
var ___$1 = this;
return chord.format.freeze(self__.json_formatter,obj);
});})(json_formatter))
;

chord.format.t12068.prototype.chord$format$ChordFormatter$thaw$arity$2 = ((function (json_formatter){
return (function (_,s){
var self__ = this;
var ___$1 = this;
return clojure.walk.keywordize_keys(chord.format.thaw(self__.json_formatter,s));
});})(json_formatter))
;

chord.format.t12068.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (json_formatter){
return (function (_12070){
var self__ = this;
var _12070__$1 = this;
return self__.meta12069;
});})(json_formatter))
;

chord.format.t12068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (json_formatter){
return (function (_12070,meta12069__$1){
var self__ = this;
var _12070__$1 = this;
return (new chord.format.t12068(self__.json_formatter,self__.opts,meta12069__$1));
});})(json_formatter))
;

chord.format.t12068.cljs$lang$type = true;

chord.format.t12068.cljs$lang$ctorStr = "chord.format/t12068";

chord.format.t12068.cljs$lang$ctorPrWriter = ((function (json_formatter){
return (function (this__6370__auto__,writer__6371__auto__,opt__6372__auto__){
return cljs.core._write(writer__6371__auto__,"chord.format/t12068");
});})(json_formatter))
;

chord.format.__GT_t12068 = ((function (json_formatter){
return (function chord$format$__GT_t12068(json_formatter__$1,opts__$1,meta12069){
return (new chord.format.t12068(json_formatter__$1,opts__$1,meta12069));
});})(json_formatter))
;

}

return (new chord.format.t12068(json_formatter,opts,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$_COLON_transit_json,(function (_){
if(typeof chord.format.t12071 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.format.t12071 = (function (_,meta12072){
this._ = _;
this.meta12072 = meta12072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.format.t12071.prototype.chord$format$ChordFormatter$ = true;

chord.format.t12071.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$_COLON_json),obj);
});

chord.format.t12071.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$_COLON_json),s);
});

chord.format.t12071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12073){
var self__ = this;
var _12073__$1 = this;
return self__.meta12072;
});

chord.format.t12071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12073,meta12072__$1){
var self__ = this;
var _12073__$1 = this;
return (new chord.format.t12071(self__._,meta12072__$1));
});

chord.format.t12071.cljs$lang$type = true;

chord.format.t12071.cljs$lang$ctorStr = "chord.format/t12071";

chord.format.t12071.cljs$lang$ctorPrWriter = (function (this__6370__auto__,writer__6371__auto__,opt__6372__auto__){
return cljs.core._write(writer__6371__auto__,"chord.format/t12071");
});

chord.format.__GT_t12071 = (function chord$format$__GT_t12071(___$1,meta12072){
return (new chord.format.t12071(___$1,meta12072));
});

}

return (new chord.format.t12071(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$_COLON_str,(function (_){
if(typeof chord.format.t12074 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.format.t12074 = (function (_,meta12075){
this._ = _;
this.meta12075 = meta12075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.format.t12074.prototype.chord$format$ChordFormatter$ = true;

chord.format.t12074.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return obj;
});

chord.format.t12074.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return s;
});

chord.format.t12074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12076){
var self__ = this;
var _12076__$1 = this;
return self__.meta12075;
});

chord.format.t12074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12076,meta12075__$1){
var self__ = this;
var _12076__$1 = this;
return (new chord.format.t12074(self__._,meta12075__$1));
});

chord.format.t12074.cljs$lang$type = true;

chord.format.t12074.cljs$lang$ctorStr = "chord.format/t12074";

chord.format.t12074.cljs$lang$ctorPrWriter = (function (this__6370__auto__,writer__6371__auto__,opt__6372__auto__){
return cljs.core._write(writer__6371__auto__,"chord.format/t12074");
});

chord.format.__GT_t12074 = (function chord$format$__GT_t12074(___$1,meta12075){
return (new chord.format.t12074(___$1,meta12075));
});

}

return (new chord.format.t12074(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter = (function chord$format$formatter(opts){
var G__12078 = (((opts instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_format,opts], null):opts);
return (chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1 ? chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1(G__12078) : chord.format.formatter_STAR_.call(null,G__12078));
});
chord.format.wrap_format = (function chord$format$wrap_format(p__12080,p__12081){
var map__12087 = p__12080;
var map__12087__$1 = ((cljs.core.seq_QMARK_(map__12087))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12087):map__12087);
var write_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12087__$1,cljs.core.constant$keyword$_COLON_write_ch);
var read_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12087__$1,cljs.core.constant$keyword$_COLON_read_ch);
var map__12088 = p__12081;
var map__12088__$1 = ((cljs.core.seq_QMARK_(map__12088))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12088):map__12088);
var opts = map__12088__$1;
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12088__$1,cljs.core.constant$keyword$_COLON_format);
var fmtr = chord.format.formatter((cljs.core.truth_(format)?opts:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_format,cljs.core.constant$keyword$_COLON_edn], null)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_read_ch,cljs.core.async.map_LT_(((function (fmtr,map__12087,map__12087__$1,write_ch,read_ch,map__12088,map__12088__$1,opts,format){
return (function (p__12089){
var map__12090 = p__12089;
var map__12090__$1 = ((cljs.core.seq_QMARK_(map__12090))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12090):map__12090);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12090__$1,cljs.core.constant$keyword$_COLON_message);
try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_message,chord.format.thaw(fmtr,message)], null);
}catch (e12091){if((e12091 instanceof Error)){
var e = e12091;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_error,cljs.core.constant$keyword$_COLON_invalid_format,cljs.core.constant$keyword$_COLON_cause,e,cljs.core.constant$keyword$_COLON_invalid_msg,message], null);
} else {
throw e12091;

}
}});})(fmtr,map__12087,map__12087__$1,write_ch,read_ch,map__12088,map__12088__$1,opts,format))
,read_ch),cljs.core.constant$keyword$_COLON_write_ch,cljs.core.async.map_GT_(((function (fmtr,map__12087,map__12087__$1,write_ch,read_ch,map__12088,map__12088__$1,opts,format){
return (function (p1__12079_SHARP_){
return chord.format.freeze(fmtr,p1__12079_SHARP_);
});})(fmtr,map__12087,map__12087__$1,write_ch,read_ch,map__12088,map__12088__$1,opts,format))
,write_ch)], null);
});
