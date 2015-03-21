// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv(other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__12116 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__12116) : com.cognitect.transit.eq.hashCode.call(null,G__12116));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__12117 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__12117) : com.cognitect.transit.eq.hashCode.call(null,G__12117));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__12118 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__12118) : com.cognitect.transit.eq.hashCode.call(null,G__12118));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__12123_12127 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__12124_12128 = null;
var count__12125_12129 = (0);
var i__12126_12130 = (0);
while(true){
if((i__12126_12130 < count__12125_12129)){
var k_12131 = chunk__12124_12128.cljs$core$IIndexed$_nth$arity$2(null,i__12126_12130);
var v_12132 = (b[k_12131]);
(a[k_12131] = v_12132);

var G__12133 = seq__12123_12127;
var G__12134 = chunk__12124_12128;
var G__12135 = count__12125_12129;
var G__12136 = (i__12126_12130 + (1));
seq__12123_12127 = G__12133;
chunk__12124_12128 = G__12134;
count__12125_12129 = G__12135;
i__12126_12130 = G__12136;
continue;
} else {
var temp__4126__auto___12137 = cljs.core.seq(seq__12123_12127);
if(temp__4126__auto___12137){
var seq__12123_12138__$1 = temp__4126__auto___12137;
if(cljs.core.chunked_seq_QMARK_(seq__12123_12138__$1)){
var c__6570__auto___12139 = cljs.core.chunk_first(seq__12123_12138__$1);
var G__12140 = cljs.core.chunk_rest(seq__12123_12138__$1);
var G__12141 = c__6570__auto___12139;
var G__12142 = cljs.core.count(c__6570__auto___12139);
var G__12143 = (0);
seq__12123_12127 = G__12140;
chunk__12124_12128 = G__12141;
count__12125_12129 = G__12142;
i__12126_12130 = G__12143;
continue;
} else {
var k_12144 = cljs.core.first(seq__12123_12138__$1);
var v_12145 = (b[k_12144]);
(a[k_12144] = v_12145);

var G__12146 = cljs.core.next(seq__12123_12138__$1);
var G__12147 = null;
var G__12148 = (0);
var G__12149 = (0);
seq__12123_12127 = G__12146;
chunk__12124_12128 = G__12147;
count__12125_12129 = G__12148;
i__12126_12130 = G__12149;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
var G__12150 = arr;
var G__12151 = true;
var G__12152 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__12150,G__12151,G__12152) : cljs.core.PersistentArrayMap.fromArray.call(null,G__12150,G__12151,G__12152));
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__6370__auto__,writer__6371__auto__,opt__6372__auto__){
return cljs.core._write(writer__6371__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
var G__12153 = arr;
var G__12154 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__12153,G__12154) : cljs.core.PersistentVector.fromArray.call(null,G__12153,G__12154));
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__6370__auto__,writer__6371__auto__,opt__6372__auto__){
return cljs.core._write(writer__6371__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function() {
var cognitect$transit$reader = null;
var cognitect$transit$reader__1 = (function (type){
return cognitect$transit$reader.cljs$core$IFn$_invoke$arity$2(type,null);
});
var cognitect$transit$reader__2 = (function (type,opts){
var G__12159 = cljs.core.name(type);
var G__12160 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__12159){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__12159))
,":",((function (G__12159){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__12159))
,"set",((function (G__12159){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__12159))
,"list",((function (G__12159){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__12159))
,"cmap",((function (G__12159){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__12161 = (i + (2));
var G__12162 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__12161;
ret = G__12162;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__12159))
], null),cljs.core.constant$keyword$_COLON_handlers.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$_COLON_handlers)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__12159,G__12160) : com.cognitect.transit.reader.call(null,G__12159,G__12160));
});
cognitect$transit$reader = function(type,opts){
switch(arguments.length){
case 1:
return cognitect$transit$reader__1.call(this,type);
case 2:
return cognitect$transit$reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cognitect$transit$reader.cljs$core$IFn$_invoke$arity$1 = cognitect$transit$reader__1;
cognitect$transit$reader.cljs$core$IFn$_invoke$arity$2 = cognitect$transit$reader__2;
return cognitect$transit$reader;
})()
;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__6370__auto__,writer__6371__auto__,opt__6372__auto__){
return cljs.core._write(writer__6371__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__6370__auto__,writer__6371__auto__,opt__6372__auto__){
return cljs.core._write(writer__6371__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12163_12169 = cljs.core.seq(v);
var chunk__12164_12170 = null;
var count__12165_12171 = (0);
var i__12166_12172 = (0);
while(true){
if((i__12166_12172 < count__12165_12171)){
var x_12173 = chunk__12164_12170.cljs$core$IIndexed$_nth$arity$2(null,i__12166_12172);
ret.push(x_12173);

var G__12174 = seq__12163_12169;
var G__12175 = chunk__12164_12170;
var G__12176 = count__12165_12171;
var G__12177 = (i__12166_12172 + (1));
seq__12163_12169 = G__12174;
chunk__12164_12170 = G__12175;
count__12165_12171 = G__12176;
i__12166_12172 = G__12177;
continue;
} else {
var temp__4126__auto___12178 = cljs.core.seq(seq__12163_12169);
if(temp__4126__auto___12178){
var seq__12163_12179__$1 = temp__4126__auto___12178;
if(cljs.core.chunked_seq_QMARK_(seq__12163_12179__$1)){
var c__6570__auto___12180 = cljs.core.chunk_first(seq__12163_12179__$1);
var G__12181 = cljs.core.chunk_rest(seq__12163_12179__$1);
var G__12182 = c__6570__auto___12180;
var G__12183 = cljs.core.count(c__6570__auto___12180);
var G__12184 = (0);
seq__12163_12169 = G__12181;
chunk__12164_12170 = G__12182;
count__12165_12171 = G__12183;
i__12166_12172 = G__12184;
continue;
} else {
var x_12185 = cljs.core.first(seq__12163_12179__$1);
ret.push(x_12185);

var G__12186 = cljs.core.next(seq__12163_12179__$1);
var G__12187 = null;
var G__12188 = (0);
var G__12189 = (0);
seq__12163_12169 = G__12186;
chunk__12164_12170 = G__12187;
count__12165_12171 = G__12188;
i__12166_12172 = G__12189;
continue;
}
} else {
}
}
break;
}

var G__12167 = "array";
var G__12168 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__12167,G__12168) : com.cognitect.transit.tagged.call(null,G__12167,G__12168));
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__6370__auto__,writer__6371__auto__,opt__6372__auto__){
return cljs.core._write(writer__6371__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__6370__auto__,writer__6371__auto__,opt__6372__auto__){
return cljs.core._write(writer__6371__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12190_12196 = cljs.core.seq(v);
var chunk__12191_12197 = null;
var count__12192_12198 = (0);
var i__12193_12199 = (0);
while(true){
if((i__12193_12199 < count__12192_12198)){
var x_12200 = chunk__12191_12197.cljs$core$IIndexed$_nth$arity$2(null,i__12193_12199);
ret.push(x_12200);

var G__12201 = seq__12190_12196;
var G__12202 = chunk__12191_12197;
var G__12203 = count__12192_12198;
var G__12204 = (i__12193_12199 + (1));
seq__12190_12196 = G__12201;
chunk__12191_12197 = G__12202;
count__12192_12198 = G__12203;
i__12193_12199 = G__12204;
continue;
} else {
var temp__4126__auto___12205 = cljs.core.seq(seq__12190_12196);
if(temp__4126__auto___12205){
var seq__12190_12206__$1 = temp__4126__auto___12205;
if(cljs.core.chunked_seq_QMARK_(seq__12190_12206__$1)){
var c__6570__auto___12207 = cljs.core.chunk_first(seq__12190_12206__$1);
var G__12208 = cljs.core.chunk_rest(seq__12190_12206__$1);
var G__12209 = c__6570__auto___12207;
var G__12210 = cljs.core.count(c__6570__auto___12207);
var G__12211 = (0);
seq__12190_12196 = G__12208;
chunk__12191_12197 = G__12209;
count__12192_12198 = G__12210;
i__12193_12199 = G__12211;
continue;
} else {
var x_12212 = cljs.core.first(seq__12190_12206__$1);
ret.push(x_12212);

var G__12213 = cljs.core.next(seq__12190_12206__$1);
var G__12214 = null;
var G__12215 = (0);
var G__12216 = (0);
seq__12190_12196 = G__12213;
chunk__12191_12197 = G__12214;
count__12192_12198 = G__12215;
i__12193_12199 = G__12216;
continue;
}
} else {
}
}
break;
}

var G__12194 = "array";
var G__12195 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__12194,G__12195) : com.cognitect.transit.tagged.call(null,G__12194,G__12195));
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__6370__auto__,writer__6371__auto__,opt__6372__auto__){
return cljs.core._write(writer__6371__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12217_12221 = cljs.core.seq(v);
var chunk__12218_12222 = null;
var count__12219_12223 = (0);
var i__12220_12224 = (0);
while(true){
if((i__12220_12224 < count__12219_12223)){
var x_12225 = chunk__12218_12222.cljs$core$IIndexed$_nth$arity$2(null,i__12220_12224);
ret.push(x_12225);

var G__12226 = seq__12217_12221;
var G__12227 = chunk__12218_12222;
var G__12228 = count__12219_12223;
var G__12229 = (i__12220_12224 + (1));
seq__12217_12221 = G__12226;
chunk__12218_12222 = G__12227;
count__12219_12223 = G__12228;
i__12220_12224 = G__12229;
continue;
} else {
var temp__4126__auto___12230 = cljs.core.seq(seq__12217_12221);
if(temp__4126__auto___12230){
var seq__12217_12231__$1 = temp__4126__auto___12230;
if(cljs.core.chunked_seq_QMARK_(seq__12217_12231__$1)){
var c__6570__auto___12232 = cljs.core.chunk_first(seq__12217_12231__$1);
var G__12233 = cljs.core.chunk_rest(seq__12217_12231__$1);
var G__12234 = c__6570__auto___12232;
var G__12235 = cljs.core.count(c__6570__auto___12232);
var G__12236 = (0);
seq__12217_12221 = G__12233;
chunk__12218_12222 = G__12234;
count__12219_12223 = G__12235;
i__12220_12224 = G__12236;
continue;
} else {
var x_12237 = cljs.core.first(seq__12217_12231__$1);
ret.push(x_12237);

var G__12238 = cljs.core.next(seq__12217_12231__$1);
var G__12239 = null;
var G__12240 = (0);
var G__12241 = (0);
seq__12217_12221 = G__12238;
chunk__12218_12222 = G__12239;
count__12219_12223 = G__12240;
i__12220_12224 = G__12241;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__6370__auto__,writer__6371__auto__,opt__6372__auto__){
return cljs.core._write(writer__6371__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__6370__auto__,writer__6371__auto__,opt__6372__auto__){
return cljs.core._write(writer__6371__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a JavaScript
 * array of interleaved type constructors and handler instances for those
 * type constructors.
 */
cognitect.transit.writer = (function() {
var cognitect$transit$writer = null;
var cognitect$transit$writer__1 = (function (type){
return cognitect$transit$writer.cljs$core$IFn$_invoke$arity$2(type,null);
});
var cognitect$transit$writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.constant$keyword$_COLON_handlers.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__12260 = cljs.core.name(type);
var G__12261 = cognitect.transit.opts_merge({"unpack": ((function (G__12260,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__12260,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x12265 = cljs.core.clone(handlers);
x12265.forEach = ((function (x12265,G__12260,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__12266 = cljs.core.seq(coll);
var chunk__12267 = null;
var count__12268 = (0);
var i__12269 = (0);
while(true){
if((i__12269 < count__12268)){
var vec__12270 = chunk__12267.cljs$core$IIndexed$_nth$arity$2(null,i__12269);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12270,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12270,(1),null);
var G__12271_12276 = v;
var G__12272_12277 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12271_12276,G__12272_12277) : f.call(null,G__12271_12276,G__12272_12277));

var G__12278 = seq__12266;
var G__12279 = chunk__12267;
var G__12280 = count__12268;
var G__12281 = (i__12269 + (1));
seq__12266 = G__12278;
chunk__12267 = G__12279;
count__12268 = G__12280;
i__12269 = G__12281;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__12266);
if(temp__4126__auto__){
var seq__12266__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12266__$1)){
var c__6570__auto__ = cljs.core.chunk_first(seq__12266__$1);
var G__12282 = cljs.core.chunk_rest(seq__12266__$1);
var G__12283 = c__6570__auto__;
var G__12284 = cljs.core.count(c__6570__auto__);
var G__12285 = (0);
seq__12266 = G__12282;
chunk__12267 = G__12283;
count__12268 = G__12284;
i__12269 = G__12285;
continue;
} else {
var vec__12273 = cljs.core.first(seq__12266__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12273,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12273,(1),null);
var G__12274_12286 = v;
var G__12275_12287 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12274_12286,G__12275_12287) : f.call(null,G__12274_12286,G__12275_12287));

var G__12288 = cljs.core.next(seq__12266__$1);
var G__12289 = null;
var G__12290 = (0);
var G__12291 = (0);
seq__12266 = G__12288;
chunk__12267 = G__12289;
count__12268 = G__12290;
i__12269 = G__12291;
continue;
}
} else {
return null;
}
}
break;
}
});})(x12265,G__12260,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x12265;
})(), "objectBuilder": ((function (G__12260,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__12260,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__12262 = obj;
G__12262.push((function (){var G__12263 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__12263) : kfn.call(null,G__12263));
})(),(function (){var G__12264 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__12264) : vfn.call(null,G__12264));
})());

return G__12262;
});})(G__12260,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__12260,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$_COLON_handlers)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__12260,G__12261) : com.cognitect.transit.writer.call(null,G__12260,G__12261));
});
cognitect$transit$writer = function(type,opts){
switch(arguments.length){
case 1:
return cognitect$transit$writer__1.call(this,type);
case 2:
return cognitect$transit$writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cognitect$transit$writer.cljs$core$IFn$_invoke$arity$1 = cognitect$transit$writer__1;
cognitect$transit$writer.cljs$core$IFn$_invoke$arity$2 = cognitect$transit$writer__2;
return cognitect$transit$writer;
})()
;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function() {
var cognitect$transit$write_handler = null;
var cognitect$transit$write_handler__2 = (function (tag_fn,rep_fn){
return cognitect$transit$write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
});
var cognitect$transit$write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect$transit$write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
});
var cognitect$transit$write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t12306 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t12306 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta12307){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta12307 = meta12307;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t12306.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__12309 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__12309) : self__.tag_fn.call(null,G__12309));
});

cognitect.transit.t12306.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__12310 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__12310) : self__.rep_fn.call(null,G__12310));
});

cognitect.transit.t12306.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__12311 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__12311) : self__.str_rep_fn.call(null,G__12311));
} else {
return null;
}
});

cognitect.transit.t12306.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t12306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12308){
var self__ = this;
var _12308__$1 = this;
return self__.meta12307;
});

cognitect.transit.t12306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12308,meta12307__$1){
var self__ = this;
var _12308__$1 = this;
return (new cognitect.transit.t12306(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta12307__$1));
});

cognitect.transit.t12306.cljs$lang$type = true;

cognitect.transit.t12306.cljs$lang$ctorStr = "cognitect.transit/t12306";

cognitect.transit.t12306.cljs$lang$ctorPrWriter = (function (this__6370__auto__,writer__6371__auto__,opt__6372__auto__){
return cljs.core._write(writer__6371__auto__,"cognitect.transit/t12306");
});

cognitect.transit.__GT_t12306 = (function cognitect$transit$write_handler_$___GT_t12306(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta12307){
return (new cognitect.transit.t12306(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta12307));
});

}

return (new cognitect.transit.t12306(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,cognitect$transit$write_handler,cljs.core.PersistentArrayMap.EMPTY));
});
cognitect$transit$write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return cognitect$transit$write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return cognitect$transit$write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return cognitect$transit$write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cognitect$transit$write_handler.cljs$core$IFn$_invoke$arity$2 = cognitect$transit$write_handler__2;
cognitect$transit$write_handler.cljs$core$IFn$_invoke$arity$3 = cognitect$transit$write_handler__3;
cognitect$transit$write_handler.cljs$core$IFn$_invoke$arity$4 = cognitect$transit$write_handler__4;
return cognitect$transit$write_handler;
})()
;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
var G__12314 = tag;
var G__12315 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__12314,G__12315) : com.cognitect.transit.types.taggedValue.call(null,G__12314,G__12315));
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
var G__12317 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__12317) : com.cognitect.transit.types.isTaggedValue.call(null,G__12317));
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
var G__12319 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__12319) : com.cognitect.transit.types.integer.call(null,G__12319));
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
var G__12321 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__12321) : com.cognitect.transit.types.isInteger.call(null,G__12321));
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
var G__12323 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__12323) : com.cognitect.transit.types.bigInteger.call(null,G__12323));
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
var G__12325 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__12325) : com.cognitect.transit.types.isBigInteger.call(null,G__12325));
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
var G__12327 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__12327) : com.cognitect.transit.types.bigDecimalValue.call(null,G__12327));
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
var G__12329 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__12329) : com.cognitect.transit.types.isBigDecimal.call(null,G__12329));
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
var G__12331 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__12331) : com.cognitect.transit.types.uri.call(null,G__12331));
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
var G__12333 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__12333) : com.cognitect.transit.types.isURI.call(null,G__12333));
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
var G__12335 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__12335) : com.cognitect.transit.types.uuid.call(null,G__12335));
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var G__12337 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__12337) : com.cognitect.transit.types.isUUID.call(null,G__12337));
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
var G__12339 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__12339) : com.cognitect.transit.types.binary.call(null,G__12339));
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
var G__12341 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__12341) : com.cognitect.transit.types.isBinary.call(null,G__12341));
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
var G__12343 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__12343) : com.cognitect.transit.types.quoted.call(null,G__12343));
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
var G__12345 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__12345) : com.cognitect.transit.types.isQuoted.call(null,G__12345));
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
var G__12347 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__12347) : com.cognitect.transit.types.link.call(null,G__12347));
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
var G__12349 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__12349) : com.cognitect.transit.types.isLink.call(null,G__12349));
});
