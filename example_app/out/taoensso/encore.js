// Compiled by ClojureScript 0.0-3058 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
/**
 * Used for lib-consumer version assertions
 */
taoensso.encore.encore_version = 1.21;
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
if((taoensso.encore.encore_version < min_version)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var G__23204 = "Insufficient com.taoensso/encore version: %s < %s. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution).";
var G__23205 = taoensso.encore.encore_version;
var G__23206 = min_version;
return (taoensso.encore.format.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.format.cljs$core$IFn$_invoke$arity$3(G__23204,G__23205,G__23206) : taoensso.encore.format.call(null,G__23204,G__23205,G__23206));
})(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_min_version,min_version,cljs.core.constant$keyword$_COLON_this_version,taoensso.encore.encore_version], null));
} else {
return null;
}
});
/**
 * Handles optional docstrings & attr maps for a macro def's name.
 * Stolen from `clojure.tools.macro`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(name,macro_args){
var vec__23209 = ((typeof cljs.core.first(macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(macro_args),cljs.core.next(macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23209,(0),null);
var macro_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23209,(1),null);
var vec__23210 = ((cljs.core.map_QMARK_(cljs.core.first(macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(macro_args__$1),cljs.core.next(macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23210,(0),null);
var macro_args__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23210,(1),null);
var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr,cljs.core.constant$keyword$_COLON_doc,docstring):attr);
var attr__$2 = (cljs.core.truth_(cljs.core.meta(name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(name),attr__$1):attr__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(name,attr__$2),macro_args__$2], null);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});
taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});
/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__4126__auto__ = (function (){var or__15683__auto__ = cljs.core.ex_data(x);
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var data_map = temp__4126__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_err_type,cljs.core.type(err),cljs.core.constant$keyword$_COLON_err_msg,err.message,cljs.core.constant$keyword$_COLON_err_cause,err.cause], null);
})(),data_map], 0));
} else {
return null;
}
});
taoensso.encore.nnil_QMARK_ = (function taoensso$encore$nnil_QMARK_(x){
return !((x == null));
});
taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return cljs.core.not(clojure.string.blank_QMARK_(x));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});
taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (cljs.core.integer_QMARK_(x)) && ((x > (0)));
});
taoensso.encore.nneg_int_QMARK_ = (function taoensso$encore$nneg_int_QMARK_(x){
return (cljs.core.integer_QMARK_(x)) && (!((x < (0))));
});
taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),n));
});
taoensso.encore.udt_QMARK_ = taoensso.encore.nneg_int_QMARK_;
taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return taoensso.encore.nvec_QMARK_((2),x);
});
taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return taoensso.encore.nvec_QMARK_((3),x);
});
taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (cljs.core.not(clojure.string.blank_QMARK_(x)));
});
taoensso.encore.nneg_num_QMARK_ = (function taoensso$encore$nneg_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});
taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});
taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),x);
});
taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(cljs.core.truth_(clojure.string.blank_QMARK_(x))){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.name(x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"false")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"FALSE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"0"))){
return false;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"true")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"TRUE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"1"))){
return true;
} else {
return null;
}
}
}
}
});
taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return cljs.core.long$(x);
} else {
if(typeof x === 'string'){
var x__$1 = (function (){var G__23216 = x;
var G__23217 = (10);
return parseInt(G__23216,G__23217);
})();
if(cljs.core.truth_((function (){var G__23218 = x__$1;
return isNaN(G__23218);
})())){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = (function (){var G__23221 = x;
return parseFloat(G__23221);
})();
if(cljs.core.truth_((function (){var G__23222 = x__$1;
return isNan(G__23222);
})())){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
/**
 * @param {...*} var_args
 */
taoensso.encore.nnil_EQ_ = (function() {
var taoensso$encore$nnil_EQ_ = null;
var taoensso$encore$nnil_EQ___2 = (function (x,y){
return (taoensso.encore.nnil_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var taoensso$encore$nnil_EQ___3 = (function() { 
var G__23223__delegate = function (x,y,more){
var and__15671__auto__ = taoensso.encore.nnil_QMARK_(x);
if(and__15671__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_,x,y,more);
} else {
return and__15671__auto__;
}
};
var G__23223 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__23224__i = 0, G__23224__a = new Array(arguments.length -  2);
while (G__23224__i < G__23224__a.length) {G__23224__a[G__23224__i] = arguments[G__23224__i + 2]; ++G__23224__i;}
  more = new cljs.core.IndexedSeq(G__23224__a,0);
} 
return G__23223__delegate.call(this,x,y,more);};
G__23223.cljs$lang$maxFixedArity = 2;
G__23223.cljs$lang$applyTo = (function (arglist__23225){
var x = cljs.core.first(arglist__23225);
arglist__23225 = cljs.core.next(arglist__23225);
var y = cljs.core.first(arglist__23225);
var more = cljs.core.rest(arglist__23225);
return G__23223__delegate(x,y,more);
});
G__23223.cljs$core$IFn$_invoke$arity$variadic = G__23223__delegate;
return G__23223;
})()
;
taoensso$encore$nnil_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return taoensso$encore$nnil_EQ___2.call(this,x,y);
default:
var G__23226 = null;
if (arguments.length > 2) {
var G__23227__i = 0, G__23227__a = new Array(arguments.length -  2);
while (G__23227__i < G__23227__a.length) {G__23227__a[G__23227__i] = arguments[G__23227__i + 2]; ++G__23227__i;}
G__23226 = new cljs.core.IndexedSeq(G__23227__a,0);
}
return taoensso$encore$nnil_EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__23226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$nnil_EQ_.cljs$lang$maxFixedArity = 2;
taoensso$encore$nnil_EQ_.cljs$lang$applyTo = taoensso$encore$nnil_EQ___3.cljs$lang$applyTo;
taoensso$encore$nnil_EQ_.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$nnil_EQ___2;
taoensso$encore$nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$nnil_EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return taoensso$encore$nnil_EQ_;
})()
;
taoensso.encore.vec_STAR_ = (function taoensso$encore$vec_STAR_(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
return cljs.core.vec(x);
}
});
taoensso.encore.set_STAR_ = (function taoensso$encore$set_STAR_(x){
if(cljs.core.set_QMARK_(x)){
return x;
} else {
return cljs.core.set(x);
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(taoensso.encore.set_STAR_(x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(coll,_QMARK_x){
if(taoensso.encore.nnil_QMARK_(_QMARK_x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,_QMARK_x);
} else {
return coll;
}
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),taoensso.encore.set_STAR_(ks));
});
taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(m)),taoensso.encore.set_STAR_(ks));
});
taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_(cljs.core.set(cljs.core.keys(m)),taoensso.encore.set_STAR_(ks));
});
taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return cljs.core.every_QMARK_((function (p1__23228_SHARP_){
return taoensso.encore.nnil_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__23228_SHARP_));
}),ks);
});
taoensso.encore.assertion_error = (function taoensso$encore$assertion_error(msg){
return (new Error(msg));
});
/**
 * Implementation detail.
 * @param {...*} var_args
 */
taoensso.encore.hthrow = (function() { 
var taoensso$encore$hthrow__delegate = function (hard_QMARK_,ns_str,_QMARK_line,form,val,p__23229){
var vec__23236 = p__23229;
var _QMARK_err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23236,(0),null);
var pattern = "Condition failed in `%s:%s` [pred-form, val]: [%s, %s]";
var line_str = (function (){var or__15683__auto__ = _QMARK_line;
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return "?";
}
})();
var form_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form], 0));
var val_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([val], 0));
var _QMARK_err_str = (function (){var temp__4126__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__4126__auto__)){
var e = temp__4126__auto__;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([_QMARK_err], 0));
} else {
return null;
}
})();
var msg = (function (){var m = (function (){var G__23237 = pattern;
var G__23238 = ns_str;
var G__23239 = line_str;
var G__23240 = form_str;
var G__23241 = val_str;
return (taoensso.encore.format.cljs$core$IFn$_invoke$arity$5 ? taoensso.encore.format.cljs$core$IFn$_invoke$arity$5(G__23237,G__23238,G__23239,G__23240,G__23241) : taoensso.encore.format.call(null,G__23237,G__23238,G__23239,G__23240,G__23241));
})();
if(cljs.core.not(_QMARK_err_str)){
return m;
} else {
return [cljs.core.str(m),cljs.core.str("\nPredicate error: "),cljs.core.str(_QMARK_err_str)].join('');
}
})();
throw ((cljs.core.not(hard_QMARK_))?taoensso.encore.assertion_error(msg):cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$_COLON_ns,ns_str,cljs.core.constant$keyword$_COLON__QMARK_line,_QMARK_line,cljs.core.constant$keyword$_COLON_form,form,cljs.core.constant$keyword$_COLON_val,val,cljs.core.constant$keyword$_COLON__QMARK_err,_QMARK_err], null)));
};
var taoensso$encore$hthrow = function (hard_QMARK_,ns_str,_QMARK_line,form,val,var_args){
var p__23229 = null;
if (arguments.length > 5) {
var G__23242__i = 0, G__23242__a = new Array(arguments.length -  5);
while (G__23242__i < G__23242__a.length) {G__23242__a[G__23242__i] = arguments[G__23242__i + 5]; ++G__23242__i;}
  p__23229 = new cljs.core.IndexedSeq(G__23242__a,0);
} 
return taoensso$encore$hthrow__delegate.call(this,hard_QMARK_,ns_str,_QMARK_line,form,val,p__23229);};
taoensso$encore$hthrow.cljs$lang$maxFixedArity = 5;
taoensso$encore$hthrow.cljs$lang$applyTo = (function (arglist__23243){
var hard_QMARK_ = cljs.core.first(arglist__23243);
arglist__23243 = cljs.core.next(arglist__23243);
var ns_str = cljs.core.first(arglist__23243);
arglist__23243 = cljs.core.next(arglist__23243);
var _QMARK_line = cljs.core.first(arglist__23243);
arglist__23243 = cljs.core.next(arglist__23243);
var form = cljs.core.first(arglist__23243);
arglist__23243 = cljs.core.next(arglist__23243);
var val = cljs.core.first(arglist__23243);
var p__23229 = cljs.core.rest(arglist__23243);
return taoensso$encore$hthrow__delegate(hard_QMARK_,ns_str,_QMARK_line,form,val,p__23229);
});
taoensso$encore$hthrow.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$hthrow__delegate;
return taoensso$encore$hthrow;
})()
;
taoensso.encore.non_throwing = (function taoensso$encore$non_throwing(pred){
return (function (x){
var vec__23247 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23249 = x;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__23249) : pred.call(null,G__23249));
})()], null);
}catch (e23248){if((e23248 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23248;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23248;

}
}})();
var _QMARK_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23247,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23247,(1),null);
return _QMARK_r;
});
});
/**
 * Implementation detail.
 */
taoensso.encore.hpred = (function taoensso$encore$hpred(pred_form){
if(!(cljs.core.vector_QMARK_(pred_form))){
return pred_form;
} else {
var vec__23270 = pred_form;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23270,(0),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23270,(1),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23270,(2),null);
var more = cljs.core.nthnext(vec__23270,(3));
var G__23271 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23271) {
case "el":
return ((function (G__23271,vec__23270,type,p1,p2,more){
return (function (x){
return cljs.core.contains_QMARK_(taoensso.encore.set_STAR_(p1),x);
});
;})(G__23271,vec__23270,type,p1,p2,more))

break;
case "ks-nnil?":
return ((function (G__23271,vec__23270,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_nnil_QMARK_(p1,x);
});
;})(G__23271,vec__23270,type,p1,p2,more))

break;
case "ks<=":
return ((function (G__23271,vec__23270,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_LT__EQ_(p1,x);
});
;})(G__23271,vec__23270,type,p1,p2,more))

break;
case "or":
return ((function (G__23271,vec__23270,type,p1,p2,more){
return (function (x){
var or__15683__auto__ = (cljs.core.truth_(p1)?taoensso.encore.non_throwing(taoensso$encore$hpred(p1)).call(null,x):null);
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (cljs.core.truth_(p2)?taoensso.encore.non_throwing(taoensso$encore$hpred(p2)).call(null,x):null);
if(cljs.core.truth_(or__15683__auto____$1)){
return or__15683__auto____$1;
} else {
return cljs.core.some(((function (or__15683__auto____$1,or__15683__auto__,G__23271,vec__23270,type,p1,p2,more){
return (function (p1__23251_SHARP_){
return taoensso.encore.non_throwing(taoensso$encore$hpred(p1__23251_SHARP_)).call(null,x);
});})(or__15683__auto____$1,or__15683__auto__,G__23271,vec__23270,type,p1,p2,more))
,more);
}
}
});
;})(G__23271,vec__23270,type,p1,p2,more))

break;
case "not":
return ((function (G__23271,vec__23270,type,p1,p2,more){
return (function (x){
var and__15671__auto__ = ((cljs.core.not(p1))?true:cljs.core.not(taoensso$encore$hpred(p1).call(null,x)));
if(and__15671__auto__){
var and__15671__auto____$1 = ((cljs.core.not(p2))?true:cljs.core.not(taoensso$encore$hpred(p2).call(null,x)));
if(and__15671__auto____$1){
return cljs.core.every_QMARK_(((function (and__15671__auto____$1,and__15671__auto__,G__23271,vec__23270,type,p1,p2,more){
return (function (p1__23250_SHARP_){
return cljs.core.not(taoensso$encore$hpred(p1__23250_SHARP_).call(null,x));
});})(and__15671__auto____$1,and__15671__auto__,G__23271,vec__23270,type,p1,p2,more))
,more);
} else {
return and__15671__auto____$1;
}
} else {
return and__15671__auto__;
}
});
;})(G__23271,vec__23270,type,p1,p2,more))

break;
case "ks=":
return ((function (G__23271,vec__23270,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_EQ_(p1,x);
});
;})(G__23271,vec__23270,type,p1,p2,more))

break;
case "and":
return ((function (G__23271,vec__23270,type,p1,p2,more){
return (function (x){
var and__15671__auto__ = ((cljs.core.not(p1))?true:taoensso$encore$hpred(p1).call(null,x));
if(cljs.core.truth_(and__15671__auto__)){
var and__15671__auto____$1 = ((cljs.core.not(p2))?true:taoensso$encore$hpred(p2).call(null,x));
if(cljs.core.truth_(and__15671__auto____$1)){
return cljs.core.every_QMARK_(((function (and__15671__auto____$1,and__15671__auto__,G__23271,vec__23270,type,p1,p2,more){
return (function (p1__23252_SHARP_){
return taoensso$encore$hpred(p1__23252_SHARP_).call(null,x);
});})(and__15671__auto____$1,and__15671__auto__,G__23271,vec__23270,type,p1,p2,more))
,more);
} else {
return and__15671__auto____$1;
}
} else {
return and__15671__auto__;
}
});
;})(G__23271,vec__23270,type,p1,p2,more))

break;
case "ks>=":
return ((function (G__23271,vec__23270,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_GT__EQ_(p1,x);
});
;})(G__23271,vec__23270,type,p1,p2,more))

break;
case "not-in":
return ((function (G__23271,vec__23270,type,p1,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_(taoensso.encore.set_STAR_(p1),x));
});
;})(G__23271,vec__23270,type,p1,p2,more))

break;
case "not-el":
return ((function (G__23271,vec__23270,type,p1,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_(taoensso.encore.set_STAR_(p1),x));
});
;})(G__23271,vec__23270,type,p1,p2,more))

break;
case "in":
return ((function (G__23271,vec__23270,type,p1,p2,more){
return (function (x){
return cljs.core.contains_QMARK_(taoensso.encore.set_STAR_(p1),x);
});
;})(G__23271,vec__23270,type,p1,p2,more))

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
}
});
/**
 * Like `name` but includes namespace in string when present.
 */
taoensso.encore.fq_name = (function taoensso$encore$fq_name(x){
if(typeof x === 'string'){
return x;
} else {
var n = cljs.core.name(x);
var temp__4124__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(temp__4124__auto__)){
var ns = temp__4124__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(taoensso.encore.fq_name(k),/[\.\/]/);
});
/**
 * @param {...*} var_args
 */
taoensso.encore.merge_keywords = (function() { 
var taoensso$encore$merge_keywords__delegate = function (ks,p__23273){
var vec__23275 = p__23273;
var as_ns_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23275,(0),null);
var parts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.explode_keyword,cljs.core.filterv(cljs.core.identity,ks)));
if(cljs.core.empty_QMARK_(parts)){
return null;
} else {
if(cljs.core.truth_(as_ns_QMARK_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",parts));
} else {
var ppop = cljs.core.pop(parts);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(((cljs.core.empty_QMARK_(ppop))?null:clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ppop)),cljs.core.peek(parts));
}
}
};
var taoensso$encore$merge_keywords = function (ks,var_args){
var p__23273 = null;
if (arguments.length > 1) {
var G__23276__i = 0, G__23276__a = new Array(arguments.length -  1);
while (G__23276__i < G__23276__a.length) {G__23276__a[G__23276__i] = arguments[G__23276__i + 1]; ++G__23276__i;}
  p__23273 = new cljs.core.IndexedSeq(G__23276__a,0);
} 
return taoensso$encore$merge_keywords__delegate.call(this,ks,p__23273);};
taoensso$encore$merge_keywords.cljs$lang$maxFixedArity = 1;
taoensso$encore$merge_keywords.cljs$lang$applyTo = (function (arglist__23277){
var ks = cljs.core.first(arglist__23277);
var p__23273 = cljs.core.rest(arglist__23277);
return taoensso$encore$merge_keywords__delegate(ks,p__23273);
});
taoensso$encore$merge_keywords.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$merge_keywords__delegate;
return taoensso$encore$merge_keywords;
})()
;
taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
var G__23280 = n;
var G__23281 = exp;
return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__23280,G__23281) : Math.pow.call(null,G__23280,G__23281));
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
/**
 * @param {...*} var_args
 */
taoensso.encore.round = (function() { 
var taoensso$encore$round__delegate = function (n,p__23282){
var vec__23290 = p__23282;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23290,(0),null);
var nplaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23290,(1),null);
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?(function (){var G__23291 = 10.0;
var G__23292 = nplaces;
return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__23291,G__23292) : Math.pow.call(null,G__23291,G__23292));
})():null);
var n_STAR_ = ((cljs.core.not(modifier))?n__$1:(n__$1 * modifier));
var rounded = (function (){var G__23293 = ((((function (){var or__15683__auto__ = type;
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return cljs.core.constant$keyword$_COLON_round;
}
})() instanceof cljs.core.Keyword))?(function (){var or__15683__auto__ = type;
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return cljs.core.constant$keyword$_COLON_round;
}
})().fqn:null);
switch (G__23293) {
case "trunc":
return cljs.core.long$(n_STAR_);

break;
case "ceil":
var G__23294 = n_STAR_;
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__23294) : Math.ceil.call(null,G__23294));

break;
case "floor":
var G__23295 = n_STAR_;
return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__23295) : Math.floor.call(null,G__23295));

break;
case "round":
var G__23296 = n_STAR_;
return (Math.round.cljs$core$IFn$_invoke$arity$1 ? Math.round.cljs$core$IFn$_invoke$arity$1(G__23296) : Math.round.call(null,G__23296));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_type,type], null));

}
})();
if(cljs.core.not(modifier)){
return cljs.core.long$(rounded);
} else {
return (rounded / modifier);
}
};
var taoensso$encore$round = function (n,var_args){
var p__23282 = null;
if (arguments.length > 1) {
var G__23298__i = 0, G__23298__a = new Array(arguments.length -  1);
while (G__23298__i < G__23298__a.length) {G__23298__a[G__23298__i] = arguments[G__23298__i + 1]; ++G__23298__i;}
  p__23282 = new cljs.core.IndexedSeq(G__23298__a,0);
} 
return taoensso$encore$round__delegate.call(this,n,p__23282);};
taoensso$encore$round.cljs$lang$maxFixedArity = 1;
taoensso$encore$round.cljs$lang$applyTo = (function (arglist__23299){
var n = cljs.core.first(arglist__23299);
var p__23282 = cljs.core.rest(arglist__23299);
return taoensso$encore$round__delegate(n,p__23282);
});
taoensso$encore$round.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$round__delegate;
return taoensso$encore$round;
})()
;
taoensso.encore.round_STAR_ = taoensso.encore.round;
/**
 * Optimized common case.
 */
taoensso.encore.round1 = (function taoensso$encore$round1(n){
return ((function (){var G__23301 = (n * 10.0);
return (Math.round.cljs$core$IFn$_invoke$arity$1 ? Math.round.cljs$core$IFn$_invoke$arity$1(G__23301) : Math.round.call(null,G__23301));
})() / 10.0);
});
/**
 * Optimized common case.
 */
taoensso.encore.round2 = (function taoensso$encore$round2(n){
return ((function (){var G__23303 = (n * 100.0);
return (Math.round.cljs$core$IFn$_invoke$arity$1 ? Math.round.cljs$core$IFn$_invoke$arity$1(G__23303) : Math.round.call(null,G__23303));
})() / 100.0);
});
/**
 * Returns binary exponential backoff value.
 * @param {...*} var_args
 */
taoensso.encore.exp_backoff = (function() { 
var taoensso$encore$exp_backoff__delegate = function (nattempt,p__23304){
var vec__23309 = p__23304;
var map__23310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23309,(0),null);
var map__23310__$1 = ((cljs.core.seq_QMARK_(map__23310))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23310):map__23310);
var factor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23310__$1,cljs.core.constant$keyword$_COLON_factor,(1000));
var min_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23310__$1,cljs.core.constant$keyword$_COLON_min);
var max_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23310__$1,cljs.core.constant$keyword$_COLON_max);
var binary_exp = (function (){var G__23311 = (2);
var G__23312 = (nattempt - (1));
return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__23311,G__23312) : Math.pow.call(null,G__23311,G__23312));
})();
var time = (((binary_exp + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(binary_exp)) * 0.5) * factor);
return cljs.core.long$((function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__16000__auto__ = min_SINGLEQUOTE_;
var y__16001__auto__ = time;
return ((x__16000__auto__ > y__16001__auto__) ? x__16000__auto__ : y__16001__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__16007__auto__ = max_SINGLEQUOTE_;
var y__16008__auto__ = time__$1;
return ((x__16007__auto__ < y__16008__auto__) ? x__16007__auto__ : y__16008__auto__);
})():time__$1);
return time__$2;
})());
};
var taoensso$encore$exp_backoff = function (nattempt,var_args){
var p__23304 = null;
if (arguments.length > 1) {
var G__23313__i = 0, G__23313__a = new Array(arguments.length -  1);
while (G__23313__i < G__23313__a.length) {G__23313__a[G__23313__i] = arguments[G__23313__i + 1]; ++G__23313__i;}
  p__23304 = new cljs.core.IndexedSeq(G__23313__a,0);
} 
return taoensso$encore$exp_backoff__delegate.call(this,nattempt,p__23304);};
taoensso$encore$exp_backoff.cljs$lang$maxFixedArity = 1;
taoensso$encore$exp_backoff.cljs$lang$applyTo = (function (arglist__23314){
var nattempt = cljs.core.first(arglist__23314);
var p__23304 = cljs.core.rest(arglist__23314);
return taoensso$encore$exp_backoff__delegate(nattempt,p__23304);
});
taoensso$encore$exp_backoff.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$exp_backoff__delegate;
return taoensso$encore$exp_backoff;
})()
;
taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});
/**
 * Useful for testing.
 * @param {...*} var_args
 */
taoensso.encore.now_udt_mock_fn = (function() { 
var taoensso$encore$now_udt_mock_fn__delegate = function (p__23315){
var vec__23318 = p__23315;
var mock_udts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23318,(0),null);
var mock_udts__$1 = (function (){var or__15683__auto__ = mock_udts;
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return cljs.core.range.cljs$core$IFn$_invoke$arity$0();
}
})();
var idx = (function (){var G__23319 = (-1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23319) : cljs.core.atom.call(null,G__23319));
})();
return ((function (mock_udts__$1,idx,vec__23318,mock_udts){
return (function (){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(mock_udts__$1,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(idx,cljs.core.inc));
});
;})(mock_udts__$1,idx,vec__23318,mock_udts))
};
var taoensso$encore$now_udt_mock_fn = function (var_args){
var p__23315 = null;
if (arguments.length > 0) {
var G__23320__i = 0, G__23320__a = new Array(arguments.length -  0);
while (G__23320__i < G__23320__a.length) {G__23320__a[G__23320__i] = arguments[G__23320__i + 0]; ++G__23320__i;}
  p__23315 = new cljs.core.IndexedSeq(G__23320__a,0);
} 
return taoensso$encore$now_udt_mock_fn__delegate.call(this,p__23315);};
taoensso$encore$now_udt_mock_fn.cljs$lang$maxFixedArity = 0;
taoensso$encore$now_udt_mock_fn.cljs$lang$applyTo = (function (arglist__23321){
var p__23315 = cljs.core.seq(arglist__23321);
return taoensso$encore$now_udt_mock_fn__delegate(p__23315);
});
taoensso$encore$now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$now_udt_mock_fn__delegate;
return taoensso$encore$now_udt_mock_fn;
})()
;
taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (secs * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot(ms,(1000));
});
/**
 * Returns number of milliseconds in period defined by given args.
 * @param {...*} var_args
 */
taoensso.encore.ms = (function() { 
var taoensso$encore$ms__delegate = function (p__23322){
var map__23329 = p__23322;
var map__23329__$1 = ((cljs.core.seq_QMARK_(map__23329))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23329):map__23329);
var opts = map__23329__$1;
var ms__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23329__$1,cljs.core.constant$keyword$_COLON_ms);
var msecs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23329__$1,cljs.core.constant$keyword$_COLON_msecs);
var secs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23329__$1,cljs.core.constant$keyword$_COLON_secs);
var mins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23329__$1,cljs.core.constant$keyword$_COLON_mins);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23329__$1,cljs.core.constant$keyword$_COLON_hours);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23329__$1,cljs.core.constant$keyword$_COLON_days);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23329__$1,cljs.core.constant$keyword$_COLON_weeks);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23329__$1,cljs.core.constant$keyword$_COLON_months);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23329__$1,cljs.core.constant$keyword$_COLON_years);
if(cljs.core.truth_(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__23329,map__23329__$1,opts,ms__$1,msecs,secs,mins,hours,days,weeks,months,years){
return (function (hcond_in__23330){
var vec__23331 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hcond_in__23330], null);
}catch (e23333){if((e23333 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23333;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23333;

}
}})();
var x__12958__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23331,(0),null);
var _QMARK_x_err__12959__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23331,(1),null);
var have_x_QMARK___12960__auto__ = (_QMARK_x_err__12959__auto__ == null);
var vec__23332 = ((have_x_QMARK___12960__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.constant$keyword$_COLON_msecs,null,cljs.core.constant$keyword$_COLON_secs,null,cljs.core.constant$keyword$_COLON_months,null,cljs.core.constant$keyword$_COLON_days,null,cljs.core.constant$keyword$_COLON_mins,null,cljs.core.constant$keyword$_COLON_hours,null,cljs.core.constant$keyword$_COLON_years,null,cljs.core.constant$keyword$_COLON_ms,null,cljs.core.constant$keyword$_COLON_weeks,null], null), null)).call(null,x__12958__auto__)], null);
}catch (e23334){if((e23334 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23334;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23334;

}
}})():null);
var pass_QMARK___12961__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23332,(0),null);
var _QMARK_pred_err__12962__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23332,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto__)){
return x__12958__auto__;
} else {
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hcond-in__23330","hcond-in__23330",-832940258,null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.constant$keyword$_COLON_msecs,null,cljs.core.constant$keyword$_COLON_secs,null,cljs.core.constant$keyword$_COLON_months,null,cljs.core.constant$keyword$_COLON_days,null,cljs.core.constant$keyword$_COLON_mins,null,cljs.core.constant$keyword$_COLON_hours,null,cljs.core.constant$keyword$_COLON_years,null,cljs.core.constant$keyword$_COLON_ms,null,cljs.core.constant$keyword$_COLON_weeks,null], null), null)),((have_x_QMARK___12960__auto__)?x__12958__auto__:_QMARK_x_err__12959__auto__),cljs.core.array_seq([_QMARK_pred_err__12962__auto__], 0));
}
});})(map__23329,map__23329__$1,opts,ms__$1,msecs,secs,mins,hours,days,weeks,months,years))
,cljs.core.keys(opts)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"have","have",574419306,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.constant$keyword$_COLON_msecs,null,cljs.core.constant$keyword$_COLON_secs,null,cljs.core.constant$keyword$_COLON_months,null,cljs.core.constant$keyword$_COLON_days,null,cljs.core.constant$keyword$_COLON_mins,null,cljs.core.constant$keyword$_COLON_hours,null,cljs.core.constant$keyword$_COLON_years,null,cljs.core.constant$keyword$_COLON_ms,null,cljs.core.constant$keyword$_COLON_weeks,null], null), null),cljs.core.constant$keyword$_COLON_in,cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)))], 0)))].join('')));
}

return taoensso.encore.round((((((((((cljs.core.truth_(years)?(((((years * (1000)) * (60)) * (60)) * (24)) * (365)):(0)) + (cljs.core.truth_(months)?cljs.core.long$((((((months * (1000)) * (60)) * (60)) * (24)) * 29.53)):(0))) + (cljs.core.truth_(weeks)?(((((weeks * (1000)) * (60)) * (60)) * (24)) * (7)):(0))) + (cljs.core.truth_(days)?((((days * (1000)) * (60)) * (60)) * (24)):(0))) + (cljs.core.truth_(hours)?(((hours * (1000)) * (60)) * (60)):(0))) + (cljs.core.truth_(mins)?((mins * (1000)) * (60)):(0))) + (cljs.core.truth_(secs)?(secs * (1000)):(0))) + (cljs.core.truth_(msecs)?msecs:(0))) + (cljs.core.truth_(ms__$1)?ms__$1:(0))));
};
var taoensso$encore$ms = function (var_args){
var p__23322 = null;
if (arguments.length > 0) {
var G__23335__i = 0, G__23335__a = new Array(arguments.length -  0);
while (G__23335__i < G__23335__a.length) {G__23335__a[G__23335__i] = arguments[G__23335__i + 0]; ++G__23335__i;}
  p__23322 = new cljs.core.IndexedSeq(G__23335__a,0);
} 
return taoensso$encore$ms__delegate.call(this,p__23322);};
taoensso$encore$ms.cljs$lang$maxFixedArity = 0;
taoensso$encore$ms.cljs$lang$applyTo = (function (arglist__23336){
var p__23322 = cljs.core.seq(arglist__23336);
return taoensso$encore$ms__delegate(p__23322);
});
taoensso$encore$ms.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$ms__delegate;
return taoensso$encore$ms;
})()
;
taoensso.encore.secs = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__16007__auto__ = signed_idx;
var y__16008__auto__ = max_idx;
return ((x__16007__auto__ < y__16008__auto__) ? x__16007__auto__ : y__16008__auto__);
} else {
var x__16000__auto__ = (0);
var y__16001__auto__ = (signed_idx + max_idx);
return ((x__16000__auto__ > y__16001__auto__) ? x__16000__auto__ : y__16001__auto__);
}
});
/**
 * Returns [<inclusive-start-idx*> <exclusive-end-idx*>] for counted 0-indexed
 * input (str, vec, etc.) with support for:
 * * Clamping of indexes beyond limits.
 * * Max-length -> end-index.
 * * -ive indexes (as +ive indexes but work from back of input):
 * (+0) (+1) (+2) (+3) (+4)  ; inclusive +ive indexes
 * h    e    l    l    o   ; 5 count
 * (-5) (-4) (-3) (-2) (-1)  ; inclusive -ive indexes
 * @param {...*} var_args
 */
taoensso.encore.sub_indexes = (function() { 
var taoensso$encore$sub_indexes__delegate = function (x,start_idx,p__23341){
var map__23347 = p__23341;
var map__23347__$1 = ((cljs.core.seq_QMARK_(map__23347))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23347):map__23347);
var end_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23347__$1,cljs.core.constant$keyword$_COLON_end_idx);
var max_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23347__$1,cljs.core.constant$keyword$_COLON_max_len);
if((function (){
var vec__23348_23352 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_len], null);
}catch (e23350){if((e23350 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23350;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23350;

}
}})();
var x__12958__auto___23353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23348_23352,(0),null);
var _QMARK_x_err__12959__auto___23354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23348_23352,(1),null);
var have_x_QMARK___12960__auto___23355 = (_QMARK_x_err__12959__auto___23354 == null);
var vec__23349_23356 = ((have_x_QMARK___12960__auto___23355)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null)).call(null,x__12958__auto___23353)], null);
}catch (e23351){if((e23351 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23351;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23351;

}
}})():null);
var pass_QMARK___12961__auto___23357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23349_23356,(0),null);
var _QMARK_pred_err__12962__auto___23358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23349_23356,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto___23357)){
} else {
taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"max-len","max-len",1621685511,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null)),((have_x_QMARK___12960__auto___23355)?x__12958__auto___23353:_QMARK_x_err__12959__auto___23354),cljs.core.array_seq([_QMARK_pred_err__12962__auto___23358], 0));
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null))], 0)))].join('')));
}

var start_idx__$1 = start_idx;
var xlen = cljs.core.count(x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx(start_idx__$1,xlen);
var end_idx_STAR_ = (cljs.core.truth_(max_len)?(function (){var n1__13020__auto__ = (start_idx_STAR_ + max_len);
var n2__13021__auto__ = xlen;
if((n1__13020__auto__ > n2__13021__auto__)){
return n2__13021__auto__;
} else {
return n1__13020__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx(end_idx,xlen) + (1)):xlen
));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
};
var taoensso$encore$sub_indexes = function (x,start_idx,var_args){
var p__23341 = null;
if (arguments.length > 2) {
var G__23359__i = 0, G__23359__a = new Array(arguments.length -  2);
while (G__23359__i < G__23359__a.length) {G__23359__a[G__23359__i] = arguments[G__23359__i + 2]; ++G__23359__i;}
  p__23341 = new cljs.core.IndexedSeq(G__23359__a,0);
} 
return taoensso$encore$sub_indexes__delegate.call(this,x,start_idx,p__23341);};
taoensso$encore$sub_indexes.cljs$lang$maxFixedArity = 2;
taoensso$encore$sub_indexes.cljs$lang$applyTo = (function (arglist__23360){
var x = cljs.core.first(arglist__23360);
arglist__23360 = cljs.core.next(arglist__23360);
var start_idx = cljs.core.first(arglist__23360);
var p__23341 = cljs.core.rest(arglist__23360);
return taoensso$encore$sub_indexes__delegate(x,start_idx,p__23341);
});
taoensso$encore$sub_indexes.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$sub_indexes__delegate;
return taoensso$encore$sub_indexes;
})()
;
/**
 * Like `subvec` but uses `sub-indexes`.
 * @param {...*} var_args
 */
taoensso.encore.subvec_STAR_ = (function() { 
var taoensso$encore$subvec_STAR___delegate = function (v,start_idx,p__23361){
var vec__23368 = p__23361;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23368,(0),null);
if((function (){
var vec__23369_23374 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}catch (e23371){if((e23371 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23371;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23371;

}
}})();
var x__12958__auto___23375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23369_23374,(0),null);
var _QMARK_x_err__12959__auto___23376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23369_23374,(1),null);
var have_x_QMARK___12960__auto___23377 = (_QMARK_x_err__12959__auto___23376 == null);
var vec__23370_23378 = ((have_x_QMARK___12960__auto___23377)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(cljs.core.vector_QMARK_).call(null,x__12958__auto___23375)], null);
}catch (e23372){if((e23372 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23372;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23372;

}
}})():null);
var pass_QMARK___12961__auto___23379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23370_23378,(0),null);
var _QMARK_pred_err__12962__auto___23380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23370_23378,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto___23379)){
} else {
taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v","v",1661996586,null)),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null)),((have_x_QMARK___12960__auto___23377)?x__12958__auto___23375:_QMARK_x_err__12959__auto___23376),cljs.core.array_seq([_QMARK_pred_err__12962__auto___23380], 0));
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null))], 0)))].join('')));
}

var vec__23373 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(v,start_idx,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_max_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23373,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23373,(1),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start_idx_STAR_,end_idx_STAR_);
};
var taoensso$encore$subvec_STAR_ = function (v,start_idx,var_args){
var p__23361 = null;
if (arguments.length > 2) {
var G__23381__i = 0, G__23381__a = new Array(arguments.length -  2);
while (G__23381__i < G__23381__a.length) {G__23381__a[G__23381__i] = arguments[G__23381__i + 2]; ++G__23381__i;}
  p__23361 = new cljs.core.IndexedSeq(G__23381__a,0);
} 
return taoensso$encore$subvec_STAR___delegate.call(this,v,start_idx,p__23361);};
taoensso$encore$subvec_STAR_.cljs$lang$maxFixedArity = 2;
taoensso$encore$subvec_STAR_.cljs$lang$applyTo = (function (arglist__23382){
var v = cljs.core.first(arglist__23382);
arglist__23382 = cljs.core.next(arglist__23382);
var start_idx = cljs.core.first(arglist__23382);
var p__23361 = cljs.core.rest(arglist__23382);
return taoensso$encore$subvec_STAR___delegate(v,start_idx,p__23361);
});
taoensso$encore$subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$subvec_STAR___delegate;
return taoensso$encore$subvec_STAR_;
})()
;

/**
* @constructor
* @param {*} new_val
* @param {*} return_val
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16286__auto__,k__16287__auto__){
var self__ = this;
var this__16286__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__16286__auto____$1,k__16287__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16288__auto__,k23384,else__16289__auto__){
var self__ = this;
var this__16288__auto____$1 = this;
var G__23386 = (((k23384 instanceof cljs.core.Keyword))?k23384.fqn:null);
switch (G__23386) {
case "return-val":
return self__.return_val;

break;
case "new-val":
return self__.new_val;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23384,else__16289__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16300__auto__,writer__16301__auto__,opts__16302__auto__){
var self__ = this;
var this__16300__auto____$1 = this;
var pr_pair__16303__auto__ = ((function (this__16300__auto____$1){
return (function (keyval__16304__auto__){
return cljs.core.pr_sequential_writer(writer__16301__auto__,cljs.core.pr_writer,""," ","",opts__16302__auto__,keyval__16304__auto__);
});})(this__16300__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__16301__auto__,pr_pair__16303__auto__,"#taoensso.encore.Swapped{",", ","}",opts__16302__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_new_val,self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_return_val,self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16284__auto__){
var self__ = this;
var this__16284__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16280__auto__){
var self__ = this;
var this__16280__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16290__auto__){
var self__ = this;
var this__16290__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16281__auto__){
var self__ = this;
var this__16281__auto____$1 = this;
var h__16104__auto__ = self__.__hash;
if(!((h__16104__auto__ == null))){
return h__16104__auto__;
} else {
var h__16104__auto____$1 = cljs.core.hash_imap(this__16281__auto____$1);
self__.__hash = h__16104__auto____$1;

return h__16104__auto____$1;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16282__auto__,other__16283__auto__){
var self__ = this;
var this__16282__auto____$1 = this;
if(cljs.core.truth_((function (){var and__15671__auto__ = other__16283__auto__;
if(cljs.core.truth_(and__15671__auto__)){
return ((this__16282__auto____$1.constructor === other__16283__auto__.constructor)) && (cljs.core.equiv_map(this__16282__auto____$1,other__16283__auto__));
} else {
return and__15671__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16295__auto__,k__16296__auto__){
var self__ = this;
var this__16295__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_return_val,null,cljs.core.constant$keyword$_COLON_new_val,null], null), null),k__16296__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__16295__auto____$1),self__.__meta),k__16296__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__16296__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16293__auto__,k__16294__auto__,G__23383){
var self__ = this;
var this__16293__auto____$1 = this;
var pred__23387 = cljs.core.keyword_identical_QMARK_;
var expr__23388 = k__16294__auto__;
if(cljs.core.truth_((function (){var G__23390 = cljs.core.constant$keyword$_COLON_new_val;
var G__23391 = expr__23388;
return (pred__23387.cljs$core$IFn$_invoke$arity$2 ? pred__23387.cljs$core$IFn$_invoke$arity$2(G__23390,G__23391) : pred__23387.call(null,G__23390,G__23391));
})())){
return (new taoensso.encore.Swapped(G__23383,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23392 = cljs.core.constant$keyword$_COLON_return_val;
var G__23393 = expr__23388;
return (pred__23387.cljs$core$IFn$_invoke$arity$2 ? pred__23387.cljs$core$IFn$_invoke$arity$2(G__23392,G__23393) : pred__23387.call(null,G__23392,G__23393));
})())){
return (new taoensso.encore.Swapped(self__.new_val,G__23383,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__16294__auto__,G__23383),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16298__auto__){
var self__ = this;
var this__16298__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_new_val,self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_return_val,self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16285__auto__,G__23383){
var self__ = this;
var this__16285__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__23383,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16291__auto__,entry__16292__auto__){
var self__ = this;
var this__16291__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__16292__auto__)){
return cljs.core._assoc(this__16291__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__16292__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__16292__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__16291__auto____$1,entry__16292__auto__);
}
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__16320__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__16320__auto__,writer__16321__auto__){
return cljs.core._write(writer__16321__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__23385){
return (new taoensso.encore.Swapped(cljs.core.constant$keyword$_COLON_new_val.cljs$core$IFn$_invoke$arity$1(G__23385),cljs.core.constant$keyword$_COLON_return_val.cljs$core$IFn$_invoke$arity$1(G__23385),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23385,cljs.core.constant$keyword$_COLON_new_val,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_return_val], 0)),null));
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});
taoensso.encore.swapped_STAR_ = (function taoensso$encore$swapped_STAR_(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_new_val.cljs$core$IFn$_invoke$arity$1(x),cljs.core.constant$keyword$_COLON_return_val.cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});
/**
 * [<new-val> <return-val>]
 */
taoensso.encore.swapped_STAR__in = (function taoensso$encore$swapped_STAR__in(m,ks,f){
if(cljs.core.truth_((function (){var G__23407 = f;
var G__23408 = cljs.core.constant$keyword$_COLON_swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23407,G__23408) : taoensso.encore.kw_identical_QMARK_.call(null,G__23407,G__23408));
})())){
return taoensso.encore.swapped_STAR_((function (){var G__23409 = m;
var G__23410 = cljs.core.butlast(ks);
var G__23411 = cljs.core.last(ks);
return (taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(G__23409,G__23410,G__23411) : taoensso.encore.dissoc_in.call(null,G__23409,G__23410,G__23411));
})());
} else {
var old_val_in = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,ks);
var vec__23412 = taoensso.encore.swapped_STAR_((function (){var G__23413 = old_val_in;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23413) : f.call(null,G__23413));
})());
var new_val_in = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23412,(0),null);
var return_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23412,(1),null);
var new_val = (cljs.core.truth_((function (){var G__23414 = new_val_in;
var G__23415 = cljs.core.constant$keyword$_COLON_swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23414,G__23415) : taoensso.encore.kw_identical_QMARK_.call(null,G__23414,G__23415));
})())?(function (){var G__23416 = m;
var G__23417 = cljs.core.butlast(ks);
var G__23418 = cljs.core.last(ks);
return (taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(G__23416,G__23417,G__23418) : taoensso.encore.dissoc_in.call(null,G__23416,G__23417,G__23418));
})():cljs.core.assoc_in(m,ks,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
});
/**
 * Reduces input with
 * [<type> <ks> <reset-val-or-swap-fn>] or
 * [<ks> <reset-val-or-swap-fn>] ops.
 */
taoensso.encore.replace_in_STAR_ = (function taoensso$encore$replace_in_STAR_(_QMARK_vf_type,m,ops){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accum,_QMARK_op){
if(cljs.core.not(_QMARK_op)){
return accum;
} else {
var vec__23422 = ((cljs.core.not(_QMARK_vf_type))?_QMARK_op:cljs.core.cons(_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23422,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23422,(1),null);
var valf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23422,(2),null);
var G__23423 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__23423) {
case "swap":
if(cljs.core.empty_QMARK_(ks)){
var G__23424 = accum;
return (valf.cljs$core$IFn$_invoke$arity$1 ? valf.cljs$core$IFn$_invoke$arity$1(G__23424) : valf.call(null,G__23424));
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(taoensso.encore.swapped_STAR__in(accum,ks,valf),(0));
}

break;
case "reset":
if(cljs.core.empty_QMARK_(ks)){
return valf;
} else {
return cljs.core.assoc_in(accum,ks,valf);
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(vf_type)].join('')));

}
}
}),m,ops);
});
/**
 * Experimental. For use with `swap!`, etc.
 * @param {...*} var_args
 */
taoensso.encore.replace_in = (function() { 
var taoensso$encore$replace_in__delegate = function (m,ops){
return taoensso.encore.replace_in_STAR_(null,m,ops);
};
var taoensso$encore$replace_in = function (m,var_args){
var ops = null;
if (arguments.length > 1) {
var G__23426__i = 0, G__23426__a = new Array(arguments.length -  1);
while (G__23426__i < G__23426__a.length) {G__23426__a[G__23426__i] = arguments[G__23426__i + 1]; ++G__23426__i;}
  ops = new cljs.core.IndexedSeq(G__23426__a,0);
} 
return taoensso$encore$replace_in__delegate.call(this,m,ops);};
taoensso$encore$replace_in.cljs$lang$maxFixedArity = 1;
taoensso$encore$replace_in.cljs$lang$applyTo = (function (arglist__23427){
var m = cljs.core.first(arglist__23427);
var ops = cljs.core.rest(arglist__23427);
return taoensso$encore$replace_in__delegate(m,ops);
});
taoensso$encore$replace_in.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$replace_in__delegate;
return taoensso$encore$replace_in;
})()
;
/**
 * More powerful version of `swap!`:
 * * Supports optional `update-in` semantics.
 * * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 * <new-val>. This is useful when writing atomic pull fns, etc.
 * @param {...*} var_args
 */
taoensso.encore.swap_in_BANG_ = (function() {
var taoensso$encore$swap_in_BANG_ = null;
var taoensso$encore$swap_in_BANG___3 = (function (atom_,ks,f){
if(cljs.core.empty_QMARK_(ks)){
while(true){
var old_val = (function (){var G__23439 = atom_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23439) : cljs.core.deref.call(null,G__23439));
})();
var vec__23438 = taoensso.encore.swapped_STAR_((function (){var G__23440 = old_val;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23440) : f.call(null,G__23440));
})());
var new_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23438,(0),null);
var return_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23438,(1),null);
if(!(cljs.core.compare_and_set_BANG_(atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
} else {
while(true){
var old_val = (function (){var G__23442 = atom_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23442) : cljs.core.deref.call(null,G__23442));
})();
var vec__23441 = taoensso.encore.swapped_STAR__in(old_val,ks,f);
var new_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23441,(0),null);
var return_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23441,(1),null);
if(!(cljs.core.compare_and_set_BANG_(atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
}
});
var taoensso$encore$swap_in_BANG___4 = (function() { 
var G__23448__delegate = function (atom_,ks,f,more){
if((function (){
var vec__23443_23449 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(more)], null);
}catch (e23445){if((e23445 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23445;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23445;

}
}})();
var x__12958__auto___23450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23443_23449,(0),null);
var _QMARK_x_err__12959__auto___23451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23443_23449,(1),null);
var have_x_QMARK___12960__auto___23452 = (_QMARK_x_err__12959__auto___23451 == null);
var vec__23444_23453 = ((have_x_QMARK___12960__auto___23452)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(cljs.core.even_QMARK_).call(null,x__12958__auto___23450)], null);
}catch (e23446){if((e23446 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23446;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23446;

}
}})():null);
var pass_QMARK___12961__auto___23454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23444_23453,(0),null);
var _QMARK_pred_err__12962__auto___23455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23444_23453,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto___23454)){
} else {
taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null))),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___12960__auto___23452)?x__12958__auto___23450:_QMARK_x_err__12959__auto___23451),cljs.core.array_seq([_QMARK_pred_err__12962__auto___23455], 0));
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))], 0)))].join('')));
}

var pairs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),more));
while(true){
var old_val = (function (){var G__23447 = atom_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23447) : cljs.core.deref.call(null,G__23447));
})();
var new_val = taoensso.encore.replace_in_STAR_(cljs.core.constant$keyword$_COLON_swap,old_val,pairs);
if(!(cljs.core.compare_and_set_BANG_(atom_,old_val,new_val))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_old,old_val,cljs.core.constant$keyword$_COLON_new,new_val], null);
}
break;
}
};
var G__23448 = function (atom_,ks,f,var_args){
var more = null;
if (arguments.length > 3) {
var G__23456__i = 0, G__23456__a = new Array(arguments.length -  3);
while (G__23456__i < G__23456__a.length) {G__23456__a[G__23456__i] = arguments[G__23456__i + 3]; ++G__23456__i;}
  more = new cljs.core.IndexedSeq(G__23456__a,0);
} 
return G__23448__delegate.call(this,atom_,ks,f,more);};
G__23448.cljs$lang$maxFixedArity = 3;
G__23448.cljs$lang$applyTo = (function (arglist__23457){
var atom_ = cljs.core.first(arglist__23457);
arglist__23457 = cljs.core.next(arglist__23457);
var ks = cljs.core.first(arglist__23457);
arglist__23457 = cljs.core.next(arglist__23457);
var f = cljs.core.first(arglist__23457);
var more = cljs.core.rest(arglist__23457);
return G__23448__delegate(atom_,ks,f,more);
});
G__23448.cljs$core$IFn$_invoke$arity$variadic = G__23448__delegate;
return G__23448;
})()
;
taoensso$encore$swap_in_BANG_ = function(atom_,ks,f,var_args){
var more = var_args;
switch(arguments.length){
case 3:
return taoensso$encore$swap_in_BANG___3.call(this,atom_,ks,f);
default:
var G__23458 = null;
if (arguments.length > 3) {
var G__23459__i = 0, G__23459__a = new Array(arguments.length -  3);
while (G__23459__i < G__23459__a.length) {G__23459__a[G__23459__i] = arguments[G__23459__i + 3]; ++G__23459__i;}
G__23458 = new cljs.core.IndexedSeq(G__23459__a,0);
}
return taoensso$encore$swap_in_BANG___4.cljs$core$IFn$_invoke$arity$variadic(atom_,ks,f, G__23458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$swap_in_BANG_.cljs$lang$maxFixedArity = 3;
taoensso$encore$swap_in_BANG_.cljs$lang$applyTo = taoensso$encore$swap_in_BANG___4.cljs$lang$applyTo;
taoensso$encore$swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = taoensso$encore$swap_in_BANG___3;
taoensso$encore$swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$swap_in_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return taoensso$encore$swap_in_BANG_;
})()
;
/**
 * Is to `reset!` as `swap-in!` is to `swap!`.
 * @param {...*} var_args
 */
taoensso.encore.reset_in_BANG_ = (function() {
var taoensso$encore$reset_in_BANG_ = null;
var taoensso$encore$reset_in_BANG___3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_(ks)){
var G__23467 = atom_;
var G__23468 = new_val;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23467,G__23468) : cljs.core.reset_BANG_.call(null,G__23467,G__23468));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,(function (old_val){
return cljs.core.assoc_in(old_val,ks,new_val);
}));
}
});
var taoensso$encore$reset_in_BANG___4 = (function() { 
var G__23474__delegate = function (atom_,ks,new_val,more){
if((function (){
var vec__23469_23475 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(more)], null);
}catch (e23471){if((e23471 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23471;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23471;

}
}})();
var x__12958__auto___23476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23469_23475,(0),null);
var _QMARK_x_err__12959__auto___23477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23469_23475,(1),null);
var have_x_QMARK___12960__auto___23478 = (_QMARK_x_err__12959__auto___23477 == null);
var vec__23470_23479 = ((have_x_QMARK___12960__auto___23478)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(cljs.core.even_QMARK_).call(null,x__12958__auto___23476)], null);
}catch (e23472){if((e23472 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23472;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23472;

}
}})():null);
var pass_QMARK___12961__auto___23480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23470_23479,(0),null);
var _QMARK_pred_err__12962__auto___23481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23470_23479,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto___23480)){
} else {
taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null))),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___12960__auto___23478)?x__12958__auto___23476:_QMARK_x_err__12959__auto___23477),cljs.core.array_seq([_QMARK_pred_err__12962__auto___23481], 0));
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))], 0)))].join('')));
}

var pairs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),more));
while(true){
var old_val = (function (){var G__23473 = atom_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23473) : cljs.core.deref.call(null,G__23473));
})();
var new_val__$1 = taoensso.encore.replace_in_STAR_(cljs.core.constant$keyword$_COLON_reset,old_val,pairs);
if(!(cljs.core.compare_and_set_BANG_(atom_,old_val,new_val__$1))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_old,old_val,cljs.core.constant$keyword$_COLON_new,new_val__$1], null);
}
break;
}
};
var G__23474 = function (atom_,ks,new_val,var_args){
var more = null;
if (arguments.length > 3) {
var G__23482__i = 0, G__23482__a = new Array(arguments.length -  3);
while (G__23482__i < G__23482__a.length) {G__23482__a[G__23482__i] = arguments[G__23482__i + 3]; ++G__23482__i;}
  more = new cljs.core.IndexedSeq(G__23482__a,0);
} 
return G__23474__delegate.call(this,atom_,ks,new_val,more);};
G__23474.cljs$lang$maxFixedArity = 3;
G__23474.cljs$lang$applyTo = (function (arglist__23483){
var atom_ = cljs.core.first(arglist__23483);
arglist__23483 = cljs.core.next(arglist__23483);
var ks = cljs.core.first(arglist__23483);
arglist__23483 = cljs.core.next(arglist__23483);
var new_val = cljs.core.first(arglist__23483);
var more = cljs.core.rest(arglist__23483);
return G__23474__delegate(atom_,ks,new_val,more);
});
G__23474.cljs$core$IFn$_invoke$arity$variadic = G__23474__delegate;
return G__23474;
})()
;
taoensso$encore$reset_in_BANG_ = function(atom_,ks,new_val,var_args){
var more = var_args;
switch(arguments.length){
case 3:
return taoensso$encore$reset_in_BANG___3.call(this,atom_,ks,new_val);
default:
var G__23484 = null;
if (arguments.length > 3) {
var G__23485__i = 0, G__23485__a = new Array(arguments.length -  3);
while (G__23485__i < G__23485__a.length) {G__23485__a[G__23485__i] = arguments[G__23485__i + 3]; ++G__23485__i;}
G__23484 = new cljs.core.IndexedSeq(G__23485__a,0);
}
return taoensso$encore$reset_in_BANG___4.cljs$core$IFn$_invoke$arity$variadic(atom_,ks,new_val, G__23484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$reset_in_BANG_.cljs$lang$maxFixedArity = 3;
taoensso$encore$reset_in_BANG_.cljs$lang$applyTo = taoensso$encore$reset_in_BANG___4.cljs$lang$applyTo;
taoensso$encore$reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = taoensso$encore$reset_in_BANG___3;
taoensso$encore$reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$reset_in_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return taoensso$encore$reset_in_BANG_;
})()
;
/**
 * @param {...*} var_args
 */
taoensso.encore.dissoc_in = (function() { 
var taoensso$encore$dissoc_in__delegate = function (m,ks,dissoc_ks){
if(cljs.core.empty_QMARK_(ks)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,dissoc_ks);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,m,ks,cljs.core.dissoc,dissoc_ks);
}
};
var taoensso$encore$dissoc_in = function (m,ks,var_args){
var dissoc_ks = null;
if (arguments.length > 2) {
var G__23486__i = 0, G__23486__a = new Array(arguments.length -  2);
while (G__23486__i < G__23486__a.length) {G__23486__a[G__23486__i] = arguments[G__23486__i + 2]; ++G__23486__i;}
  dissoc_ks = new cljs.core.IndexedSeq(G__23486__a,0);
} 
return taoensso$encore$dissoc_in__delegate.call(this,m,ks,dissoc_ks);};
taoensso$encore$dissoc_in.cljs$lang$maxFixedArity = 2;
taoensso$encore$dissoc_in.cljs$lang$applyTo = (function (arglist__23487){
var m = cljs.core.first(arglist__23487);
arglist__23487 = cljs.core.next(arglist__23487);
var ks = cljs.core.first(arglist__23487);
var dissoc_ks = cljs.core.rest(arglist__23487);
return taoensso$encore$dissoc_in__delegate(m,ks,dissoc_ks);
});
taoensso$encore$dissoc_in.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$dissoc_in__delegate;
return taoensso$encore$dissoc_in;
})()
;
taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.butlast(ks)),cljs.core.last(ks));
});
/**
 * Assocs each kv iff its value is not nil.
 * @param {...*} var_args
 */
taoensso.encore.assoc_some = (function() { 
var taoensso$encore$assoc_some__delegate = function (m,kvs){
if((function (){
var vec__23502_23516 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(kvs)], null);
}catch (e23504){if((e23504 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23504;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23504;

}
}})();
var x__12958__auto___23517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23502_23516,(0),null);
var _QMARK_x_err__12959__auto___23518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23502_23516,(1),null);
var have_x_QMARK___12960__auto___23519 = (_QMARK_x_err__12959__auto___23518 == null);
var vec__23503_23520 = ((have_x_QMARK___12960__auto___23519)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(cljs.core.even_QMARK_).call(null,x__12958__auto___23517)], null);
}catch (e23505){if((e23505 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23505;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23505;

}
}})():null);
var pass_QMARK___12961__auto___23521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23503_23520,(0),null);
var _QMARK_pred_err__12962__auto___23522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23503_23520,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto___23521)){
} else {
taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___12960__auto___23519)?x__12958__auto___23517:_QMARK_x_err__12959__auto___23518),cljs.core.array_seq([_QMARK_pred_err__12962__auto___23522], 0));
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0)))].join('')));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__15683__auto__ = m;
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__16439__auto__ = (function taoensso$encore$assoc_some_$_iter__23506(s__23507){
return (new cljs.core.LazySeq(null,(function (){
var s__23507__$1 = s__23507;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23507__$1);
if(temp__4126__auto__){
var s__23507__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23507__$2)){
var c__16437__auto__ = cljs.core.chunk_first(s__23507__$2);
var size__16438__auto__ = cljs.core.count(c__16437__auto__);
var b__23509 = cljs.core.chunk_buffer(size__16438__auto__);
if((function (){var i__23508 = (0);
while(true){
if((i__23508 < size__16438__auto__)){
var vec__23514 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__16437__auto__,i__23508);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23514,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23514,(1),null);
if(!((v == null))){
cljs.core.chunk_append(b__23509,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__23523 = (i__23508 + (1));
i__23508 = G__23523;
continue;
} else {
var G__23524 = (i__23508 + (1));
i__23508 = G__23524;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23509),taoensso$encore$assoc_some_$_iter__23506(cljs.core.chunk_rest(s__23507__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23509),null);
}
} else {
var vec__23515 = cljs.core.first(s__23507__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23515,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23515,(1),null);
if(!((v == null))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$assoc_some_$_iter__23506(cljs.core.rest(s__23507__$2)));
} else {
var G__23525 = cljs.core.rest(s__23507__$2);
s__23507__$1 = G__23525;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16439__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var taoensso$encore$assoc_some = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__23526__i = 0, G__23526__a = new Array(arguments.length -  1);
while (G__23526__i < G__23526__a.length) {G__23526__a[G__23526__i] = arguments[G__23526__i + 1]; ++G__23526__i;}
  kvs = new cljs.core.IndexedSeq(G__23526__a,0);
} 
return taoensso$encore$assoc_some__delegate.call(this,m,kvs);};
taoensso$encore$assoc_some.cljs$lang$maxFixedArity = 1;
taoensso$encore$assoc_some.cljs$lang$applyTo = (function (arglist__23527){
var m = cljs.core.first(arglist__23527);
var kvs = cljs.core.rest(arglist__23527);
return taoensso$encore$assoc_some__delegate(m,kvs);
});
taoensso$encore$assoc_some.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$assoc_some__delegate;
return taoensso$encore$assoc_some;
})()
;
/**
 * Assocs each kv iff its val is truthy.
 * @param {...*} var_args
 */
taoensso.encore.assoc_when = (function() { 
var taoensso$encore$assoc_when__delegate = function (m,kvs){
if((function (){
var vec__23542_23556 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(kvs)], null);
}catch (e23544){if((e23544 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23544;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23544;

}
}})();
var x__12958__auto___23557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23542_23556,(0),null);
var _QMARK_x_err__12959__auto___23558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23542_23556,(1),null);
var have_x_QMARK___12960__auto___23559 = (_QMARK_x_err__12959__auto___23558 == null);
var vec__23543_23560 = ((have_x_QMARK___12960__auto___23559)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(cljs.core.even_QMARK_).call(null,x__12958__auto___23557)], null);
}catch (e23545){if((e23545 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23545;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23545;

}
}})():null);
var pass_QMARK___12961__auto___23561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23543_23560,(0),null);
var _QMARK_pred_err__12962__auto___23562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23543_23560,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto___23561)){
} else {
taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___12960__auto___23559)?x__12958__auto___23557:_QMARK_x_err__12959__auto___23558),cljs.core.array_seq([_QMARK_pred_err__12962__auto___23562], 0));
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0)))].join('')));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__15683__auto__ = m;
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__16439__auto__ = (function taoensso$encore$assoc_when_$_iter__23546(s__23547){
return (new cljs.core.LazySeq(null,(function (){
var s__23547__$1 = s__23547;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23547__$1);
if(temp__4126__auto__){
var s__23547__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23547__$2)){
var c__16437__auto__ = cljs.core.chunk_first(s__23547__$2);
var size__16438__auto__ = cljs.core.count(c__16437__auto__);
var b__23549 = cljs.core.chunk_buffer(size__16438__auto__);
if((function (){var i__23548 = (0);
while(true){
if((i__23548 < size__16438__auto__)){
var vec__23554 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__16437__auto__,i__23548);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23554,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23554,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__23549,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__23563 = (i__23548 + (1));
i__23548 = G__23563;
continue;
} else {
var G__23564 = (i__23548 + (1));
i__23548 = G__23564;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23549),taoensso$encore$assoc_when_$_iter__23546(cljs.core.chunk_rest(s__23547__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23549),null);
}
} else {
var vec__23555 = cljs.core.first(s__23547__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23555,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23555,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$assoc_when_$_iter__23546(cljs.core.rest(s__23547__$2)));
} else {
var G__23565 = cljs.core.rest(s__23547__$2);
s__23547__$1 = G__23565;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16439__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var taoensso$encore$assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__23566__i = 0, G__23566__a = new Array(arguments.length -  1);
while (G__23566__i < G__23566__a.length) {G__23566__a[G__23566__i] = arguments[G__23566__i + 1]; ++G__23566__i;}
  kvs = new cljs.core.IndexedSeq(G__23566__a,0);
} 
return taoensso$encore$assoc_when__delegate.call(this,m,kvs);};
taoensso$encore$assoc_when.cljs$lang$maxFixedArity = 1;
taoensso$encore$assoc_when.cljs$lang$applyTo = (function (arglist__23567){
var m = cljs.core.first(arglist__23567);
var kvs = cljs.core.rest(arglist__23567);
return taoensso$encore$assoc_when__delegate(m,kvs);
});
taoensso$encore$assoc_when.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$assoc_when__delegate;
return taoensso$encore$assoc_when;
})()
;
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function() {
var taoensso$encore$queue = null;
var taoensso$encore$queue__0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});
var taoensso$encore$queue__1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(taoensso$encore$queue.cljs$core$IFn$_invoke$arity$0(),coll);
});
taoensso$encore$queue = function(coll){
switch(arguments.length){
case 0:
return taoensso$encore$queue__0.call(this);
case 1:
return taoensso$encore$queue__1.call(this,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$queue.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$queue__0;
taoensso$encore$queue.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$queue__1;
return taoensso$encore$queue;
})()
;
/**
 * @param {...*} var_args
 */
taoensso.encore.queue_STAR_ = (function() { 
var taoensso$encore$queue_STAR___delegate = function (items){
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1(items);
};
var taoensso$encore$queue_STAR_ = function (var_args){
var items = null;
if (arguments.length > 0) {
var G__23568__i = 0, G__23568__a = new Array(arguments.length -  0);
while (G__23568__i < G__23568__a.length) {G__23568__a[G__23568__i] = arguments[G__23568__i + 0]; ++G__23568__i;}
  items = new cljs.core.IndexedSeq(G__23568__a,0);
} 
return taoensso$encore$queue_STAR___delegate.call(this,items);};
taoensso$encore$queue_STAR_.cljs$lang$maxFixedArity = 0;
taoensso$encore$queue_STAR_.cljs$lang$applyTo = (function (arglist__23569){
var items = cljs.core.seq(arglist__23569);
return taoensso$encore$queue_STAR___delegate(items);
});
taoensso$encore$queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$queue_STAR___delegate;
return taoensso$encore$queue_STAR_;
})()
;
/**
 * (seq     {:a :A}) => ([:a :A])
 * (seq-kvs {:a :A}) => (:a :A)
 */
taoensso.encore.seq_kvs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but assumes last arg is a map whose elements should be applied
 * to `f` as an unpaired seq:
 * (mapply (fn [x & {:keys [y z]}] (str x y z)) 1 {:y 2 :z 3})
 * where fn will receive args as: `(1 :y 2 :z 3)`.
 * @param {...*} var_args
 */
taoensso.encore.mapply = (function() { 
var taoensso$encore$mapply__delegate = function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),(function (){var G__23571 = cljs.core.last(args);
return (taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1(G__23571) : taoensso.encore.seq_kvs.call(null,G__23571));
})()));
};
var taoensso$encore$mapply = function (f,var_args){
var args = null;
if (arguments.length > 1) {
var G__23572__i = 0, G__23572__a = new Array(arguments.length -  1);
while (G__23572__i < G__23572__a.length) {G__23572__a[G__23572__i] = arguments[G__23572__i + 1]; ++G__23572__i;}
  args = new cljs.core.IndexedSeq(G__23572__a,0);
} 
return taoensso$encore$mapply__delegate.call(this,f,args);};
taoensso$encore$mapply.cljs$lang$maxFixedArity = 1;
taoensso$encore$mapply.cljs$lang$applyTo = (function (arglist__23573){
var f = cljs.core.first(arglist__23573);
var args = cljs.core.rest(arglist__23573);
return taoensso$encore$mapply__delegate(f,args);
});
taoensso$encore$mapply.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$mapply__delegate;
return taoensso$encore$mapply;
})()
;
/**
 * Workaround for Clojure versions [1.4, 1.5) that blow up on `reduce-kv`s
 * against a nil coll, Ref. http://dev.clojure.org/jira/browse/CLJ-1098.
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__15683__auto__ = x;
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.not(m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var kf__$1 = ((cljs.core.not((function (){var G__23582 = kf;
var G__23583 = cljs.core.constant$keyword$_COLON_keywordize;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23582,G__23583) : taoensso.encore.kw_identical_QMARK_.call(null,G__23582,G__23583));
})()))?kf:(function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
}));
var vf__$1 = ((cljs.core.not((function (){var G__23584 = vf;
var G__23585 = cljs.core.constant$keyword$_COLON_keywordize;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23584,G__23585) : taoensso.encore.kw_identical_QMARK_.call(null,G__23584,G__23585));
})()))?vf:((function (kf__$1){
return (function (_,v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(kf__$1))
);
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (kf__$1,vf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(cljs.core.truth_(kf__$1)?(function (){var G__23586 = k;
var G__23587 = v;
return (kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(G__23586,G__23587) : kf__$1.call(null,G__23586,G__23587));
})():k),(cljs.core.truth_(vf__$1)?(function (){var G__23588 = k;
var G__23589 = v;
return (vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(G__23588,G__23589) : vf__$1.call(null,G__23588,G__23589));
})():v));
});})(kf__$1,vf__$1))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
}
});
taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
return taoensso.encore.map_kvs((function (k,_){
var G__23591 = k;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23591) : f.call(null,G__23591));
}),null,m);
});
taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
return taoensso.encore.map_kvs(null,(function (_,v){
var G__23593 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23593) : f.call(null,G__23593));
}),m);
});
taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(predk,predv,m){
if(cljs.core.not(m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((function (){var and__15671__auto__ = (function (){var G__23598 = k;
return (predk.cljs$core$IFn$_invoke$arity$1 ? predk.cljs$core$IFn$_invoke$arity$1(G__23598) : predk.call(null,G__23598));
})();
if(cljs.core.truth_(and__15671__auto__)){
var G__23599 = v;
return (predv.cljs$core$IFn$_invoke$arity$1 ? predv.cljs$core$IFn$_invoke$arity$1(G__23599) : predv.call(null,G__23599));
} else {
return and__15671__auto__;
}
})())){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
return taoensso.encore.filter_kvs(pred,cljs.core.constantly(true),m);
});
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
return taoensso.encore.filter_kvs(cljs.core.constantly(true),pred,m);
});
/**
 * Smaller, common-case version of `filter-vals`. Esp useful with `nil?`/`blank?`
 * pred when constructing maps: {:foo (when _ <...>) :bar (when _ <...>)} in a
 * way that preservers :or semantics.
 */
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if(cljs.core.not(m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((function (){var G__23601 = v;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__23601) : pred.call(null,G__23601));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
if(cljs.core.not(m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
/**
 * Cross between `hash-map` & `map-kvs`.
 * @param {...*} var_args
 */
taoensso.encore.as_map = (function() { 
var taoensso$encore$as_map__delegate = function (kvs,p__23602){
var vec__23630 = p__23602;
var kf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23630,(0),null);
var vf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23630,(1),null);
if((function (){
var vec__23631_23657 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kvs], null);
}catch (e23633){if((e23633 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23633;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23633;

}
}})();
var x__12958__auto___23658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23631_23657,(0),null);
var _QMARK_x_err__12959__auto___23659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23631_23657,(1),null);
var have_x_QMARK___12960__auto___23660 = (_QMARK_x_err__12959__auto___23659 == null);
var vec__23632_23661 = ((have_x_QMARK___12960__auto___23660)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,cljs.core.nil_QMARK_,cljs.core.sequential_QMARK_], null)).call(null,x__12958__auto___23658)], null);
}catch (e23634){if((e23634 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23634;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23634;

}
}})():null);
var pass_QMARK___12961__auto___23662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23632_23661,(0),null);
var _QMARK_pred_err__12962__auto___23663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23632_23661,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto___23662)){
} else {
taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)], null)),((have_x_QMARK___12960__auto___23660)?x__12958__auto___23658:_QMARK_x_err__12959__auto___23659),cljs.core.array_seq([_QMARK_pred_err__12962__auto___23663], 0));
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)], null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))], 0)))].join('')));
}

if((function (){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var vec__23635 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kf], null);
}catch (e23637){if((e23637 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23637;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23637;

}
}})();
var x__12958__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23635,(0),null);
var _QMARK_x_err__12959__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23635,(1),null);
var have_x_QMARK___12960__auto__ = (_QMARK_x_err__12959__auto__ == null);
var vec__23636 = ((have_x_QMARK___12960__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null)).call(null,x__12958__auto__)], null);
}catch (e23638){if((e23638 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23638;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23638;

}
}})():null);
var pass_QMARK___12961__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23636,(0),null);
var _QMARK_pred_err__12962__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23636,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto__)){
return x__12958__auto__;
} else {
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"kf","kf",-1046348180,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null)),((have_x_QMARK___12960__auto__)?x__12958__auto__:_QMARK_x_err__12959__auto__),cljs.core.array_seq([_QMARK_pred_err__12962__auto__], 0));
}
})(),(function (){var vec__23639 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vf], null);
}catch (e23641){if((e23641 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23641;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23641;

}
}})();
var x__12958__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23639,(0),null);
var _QMARK_x_err__12959__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23639,(1),null);
var have_x_QMARK___12960__auto__ = (_QMARK_x_err__12959__auto__ == null);
var vec__23640 = ((have_x_QMARK___12960__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null)).call(null,x__12958__auto__)], null);
}catch (e23642){if((e23642 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23642;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23642;

}
}})():null);
var pass_QMARK___12961__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23640,(0),null);
var _QMARK_pred_err__12962__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23640,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto__)){
return x__12958__auto__;
} else {
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vf","vf",1319108258,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null)),((have_x_QMARK___12960__auto__)?x__12958__auto__:_QMARK_x_err__12959__auto__),cljs.core.array_seq([_QMARK_pred_err__12962__auto__], 0));
}
})()], null);

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.Symbol(null,"vf","vf",1319108258,null))], 0)))].join('')));
}

var _PERCENT_ = ((cljs.core.empty_QMARK_(kvs))?cljs.core.PersistentArrayMap.EMPTY:(function (){var kf__$1 = ((cljs.core.not((function (){var G__23643 = kf;
var G__23644 = cljs.core.constant$keyword$_COLON_keywordize;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23643,G__23644) : taoensso.encore.kw_identical_QMARK_.call(null,G__23643,G__23644));
})()))?kf:((function (vec__23630,kf,vf){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vec__23630,kf,vf))
);
var m = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var G__23646 = kvs;
var vec__23647 = G__23646;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23647,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23647,(1),null);
var s = vec__23647;
var m__$1 = m;
var G__23646__$1 = G__23646;
while(true){
var m__$2 = m__$1;
var vec__23648 = G__23646__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23648,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23648,(1),null);
var s__$1 = vec__23648;
var k__$2 = ((cljs.core.not(kf__$1))?k__$1:(function (){var G__23649 = k__$1;
var G__23650 = v__$1;
return (kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(G__23649,G__23650) : kf__$1.call(null,G__23649,G__23650));
})());
var v__$2 = ((cljs.core.not(vf))?v__$1:(function (){var G__23651 = k__$2;
var G__23652 = v__$1;
return (vf.cljs$core$IFn$_invoke$arity$2 ? vf.cljs$core$IFn$_invoke$arity$2(G__23651,G__23652) : vf.call(null,G__23651,G__23652));
})());
var new_m = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$2,k__$2,v__$2);
var temp__4124__auto__ = cljs.core.nnext(s__$1);
if(temp__4124__auto__){
var n = temp__4124__auto__;
var G__23664 = new_m;
var G__23665 = n;
m__$1 = G__23664;
G__23646__$1 = G__23665;
continue;
} else {
return cljs.core.persistent_BANG_(new_m);
}
break;
}
})());
if((function (){
var vec__23653_23666 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_PERCENT_], null);
}catch (e23655){if((e23655 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23655;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23655;

}
}})();
var x__12958__auto___23667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23653_23666,(0),null);
var _QMARK_x_err__12959__auto___23668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23653_23666,(1),null);
var have_x_QMARK___12960__auto___23669 = (_QMARK_x_err__12959__auto___23668 == null);
var vec__23654_23670 = ((have_x_QMARK___12960__auto___23669)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null)).call(null,x__12958__auto___23667)], null);
}catch (e23656){if((e23656 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23656;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23656;

}
}})():null);
var pass_QMARK___12961__auto___23671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23654_23670,(0),null);
var _QMARK_pred_err__12962__auto___23672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23654_23670,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto___23671)){
} else {
taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null)),((have_x_QMARK___12960__auto___23669)?x__12958__auto___23667:_QMARK_x_err__12959__auto___23668),cljs.core.array_seq([_QMARK_pred_err__12962__auto___23672], 0));
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null),new cljs.core.Symbol(null,"%","%",-950237169,null))], 0)))].join('')));
}

return _PERCENT_;
};
var taoensso$encore$as_map = function (kvs,var_args){
var p__23602 = null;
if (arguments.length > 1) {
var G__23673__i = 0, G__23673__a = new Array(arguments.length -  1);
while (G__23673__i < G__23673__a.length) {G__23673__a[G__23673__i] = arguments[G__23673__i + 1]; ++G__23673__i;}
  p__23602 = new cljs.core.IndexedSeq(G__23673__a,0);
} 
return taoensso$encore$as_map__delegate.call(this,kvs,p__23602);};
taoensso$encore$as_map.cljs$lang$maxFixedArity = 1;
taoensso$encore$as_map.cljs$lang$applyTo = (function (arglist__23674){
var kvs = cljs.core.first(arglist__23674);
var p__23602 = cljs.core.rest(arglist__23674);
return taoensso$encore$as_map__delegate(kvs,p__23602);
});
taoensso$encore$as_map.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$as_map__delegate;
return taoensso$encore$as_map;
})()
;
/**
 * Faster `zipmap`.
 */
taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq(ks);
var vs__$1 = cljs.core.seq(vs);
while(true){
if(!((ks__$1) && (vs__$1))){
return cljs.core.persistent_BANG_(m);
} else {
var G__23675 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.first(ks__$1),cljs.core.first(vs__$1));
var G__23676 = cljs.core.next(ks__$1);
var G__23677 = cljs.core.next(vs__$1);
m = G__23675;
ks__$1 = G__23676;
vs__$1 = G__23677;
continue;
}
break;
}
});
/**
 * Like `into` but supports multiple "from"s.
 * @param {...*} var_args
 */
taoensso.encore.into_all = (function() {
var taoensso$encore$into_all = null;
var taoensso$encore$into_all__2 = (function (to,from){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(to,from);
});
var taoensso$encore$into_all__3 = (function() { 
var G__23678__delegate = function (to,from,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.into.cljs$core$IFn$_invoke$arity$2(to,from),more);
};
var G__23678 = function (to,from,var_args){
var more = null;
if (arguments.length > 2) {
var G__23679__i = 0, G__23679__a = new Array(arguments.length -  2);
while (G__23679__i < G__23679__a.length) {G__23679__a[G__23679__i] = arguments[G__23679__i + 2]; ++G__23679__i;}
  more = new cljs.core.IndexedSeq(G__23679__a,0);
} 
return G__23678__delegate.call(this,to,from,more);};
G__23678.cljs$lang$maxFixedArity = 2;
G__23678.cljs$lang$applyTo = (function (arglist__23680){
var to = cljs.core.first(arglist__23680);
arglist__23680 = cljs.core.next(arglist__23680);
var from = cljs.core.first(arglist__23680);
var more = cljs.core.rest(arglist__23680);
return G__23678__delegate(to,from,more);
});
G__23678.cljs$core$IFn$_invoke$arity$variadic = G__23678__delegate;
return G__23678;
})()
;
taoensso$encore$into_all = function(to,from,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return taoensso$encore$into_all__2.call(this,to,from);
default:
var G__23681 = null;
if (arguments.length > 2) {
var G__23682__i = 0, G__23682__a = new Array(arguments.length -  2);
while (G__23682__i < G__23682__a.length) {G__23682__a[G__23682__i] = arguments[G__23682__i + 2]; ++G__23682__i;}
G__23681 = new cljs.core.IndexedSeq(G__23682__a,0);
}
return taoensso$encore$into_all__3.cljs$core$IFn$_invoke$arity$variadic(to,from, G__23681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$into_all.cljs$lang$maxFixedArity = 2;
taoensso$encore$into_all.cljs$lang$applyTo = taoensso$encore$into_all__3.cljs$lang$applyTo;
taoensso$encore$into_all.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$into_all__2;
taoensso$encore$into_all.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$into_all__3.cljs$core$IFn$_invoke$arity$variadic;
return taoensso$encore$into_all;
})()
;
/**
 * Greedy version of `interleave`.
 * Ref. https://groups.google.com/d/msg/clojure/o4Hg0s_1Avs/rPn3P4Ig6MsJ
 * @param {...*} var_args
 */
taoensso.encore.interleave_all = (function() {
var taoensso$encore$interleave_all = null;
var taoensso$encore$interleave_all__0 = (function (){
return cljs.core.List.EMPTY;
});
var taoensso$encore$interleave_all__1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});
var taoensso$encore$interleave_all__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),taoensso$encore$interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});
var taoensso$encore$interleave_all__3 = (function() { 
var G__23685__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0))));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso$encore$interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
}),null,null));
};
var G__23685 = function (c1,c2,var_args){
var colls = null;
if (arguments.length > 2) {
var G__23686__i = 0, G__23686__a = new Array(arguments.length -  2);
while (G__23686__i < G__23686__a.length) {G__23686__a[G__23686__i] = arguments[G__23686__i + 2]; ++G__23686__i;}
  colls = new cljs.core.IndexedSeq(G__23686__a,0);
} 
return G__23685__delegate.call(this,c1,c2,colls);};
G__23685.cljs$lang$maxFixedArity = 2;
G__23685.cljs$lang$applyTo = (function (arglist__23687){
var c1 = cljs.core.first(arglist__23687);
arglist__23687 = cljs.core.next(arglist__23687);
var c2 = cljs.core.first(arglist__23687);
var colls = cljs.core.rest(arglist__23687);
return G__23685__delegate(c1,c2,colls);
});
G__23685.cljs$core$IFn$_invoke$arity$variadic = G__23685__delegate;
return G__23685;
})()
;
taoensso$encore$interleave_all = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 0:
return taoensso$encore$interleave_all__0.call(this);
case 1:
return taoensso$encore$interleave_all__1.call(this,c1);
case 2:
return taoensso$encore$interleave_all__2.call(this,c1,c2);
default:
var G__23688 = null;
if (arguments.length > 2) {
var G__23689__i = 0, G__23689__a = new Array(arguments.length -  2);
while (G__23689__i < G__23689__a.length) {G__23689__a[G__23689__i] = arguments[G__23689__i + 2]; ++G__23689__i;}
G__23688 = new cljs.core.IndexedSeq(G__23689__a,0);
}
return taoensso$encore$interleave_all__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2, G__23688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$interleave_all.cljs$lang$maxFixedArity = 2;
taoensso$encore$interleave_all.cljs$lang$applyTo = taoensso$encore$interleave_all__3.cljs$lang$applyTo;
taoensso$encore$interleave_all.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$interleave_all__0;
taoensso$encore$interleave_all.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$interleave_all__1;
taoensso$encore$interleave_all.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$interleave_all__2;
taoensso$encore$interleave_all.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$interleave_all__3.cljs$core$IFn$_invoke$arity$variadic;
return taoensso$encore$interleave_all;
})()
;
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_(coll)){
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(coll,(0),cljs.core.array_seq([n], 0));
} else {
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll));
}
});
/**
 * Prefer `set` when order doesn't matter (much faster).
 */
taoensso.encore.distinctv = (function() {
var taoensso$encore$distinctv = null;
var taoensso$encore$distinctv__1 = (function (coll){
return cljs.core.persistent_BANG_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__23695,in$){
var vec__23696 = p__23695;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23696,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23696,(1),null);
if(!(cljs.core.contains_QMARK_(seen,in$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,in$),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,in$)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});
var taoensso$encore$distinctv__2 = (function (keyfn,coll){
return cljs.core.persistent_BANG_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__23697,in$){
var vec__23698 = p__23697;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23698,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23698,(1),null);
var in_STAR_ = (function (){var G__23699 = in$;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__23699) : keyfn.call(null,G__23699));
})();
if(!(cljs.core.contains_QMARK_(seen,in_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,in$),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,in_STAR_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});
taoensso$encore$distinctv = function(keyfn,coll){
switch(arguments.length){
case 1:
return taoensso$encore$distinctv__1.call(this,keyfn);
case 2:
return taoensso$encore$distinctv__2.call(this,keyfn,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$distinctv.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$distinctv__1;
taoensso$encore$distinctv.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$distinctv__2;
return taoensso$encore$distinctv;
})()
;
/**
 * Like `sort-by` for distinct. Based on clojure.core/distinct.
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__23713,seen__$1){
while(true){
var vec__23714 = p__23713;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23714,(0),null);
var xs__$1 = vec__23714;
var temp__4126__auto__ = cljs.core.seq(xs__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var v_STAR_ = (function (){var G__23715 = v;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__23715) : keyfn.call(null,G__23715));
})();
if(cljs.core.contains_QMARK_(seen__$1,v_STAR_)){
var G__23716 = cljs.core.rest(s);
var G__23717 = seen__$1;
p__23713 = G__23716;
seen__$1 = G__23717;
continue;
} else {
return cljs.core.cons(v,taoensso$encore$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare(y,x);
});
/**
 * @param {...*} var_args
 */
taoensso.encore.nested_merge_with = (function() { 
var taoensso$encore$nested_merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.key(e);
var rv = cljs.core.val(e);
if(!(cljs.core.contains_QMARK_(m,k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,rv);
} else {
var lv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if((cljs.core.map_QMARK_(lv)) && (cljs.core.map_QMARK_(rv))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,taoensso$encore$nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.array_seq([lv,rv], 0)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__23723 = lv;
var G__23724 = rv;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23723,G__23724) : f.call(null,G__23723,G__23724));
})());
}
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__15683__auto__ = m1;
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(m2));
});})(merge_entry))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(merge2,maps);
} else {
return null;
}
};
var taoensso$encore$nested_merge_with = function (f,var_args){
var maps = null;
if (arguments.length > 1) {
var G__23725__i = 0, G__23725__a = new Array(arguments.length -  1);
while (G__23725__i < G__23725__a.length) {G__23725__a[G__23725__i] = arguments[G__23725__i + 1]; ++G__23725__i;}
  maps = new cljs.core.IndexedSeq(G__23725__a,0);
} 
return taoensso$encore$nested_merge_with__delegate.call(this,f,maps);};
taoensso$encore$nested_merge_with.cljs$lang$maxFixedArity = 1;
taoensso$encore$nested_merge_with.cljs$lang$applyTo = (function (arglist__23726){
var f = cljs.core.first(arglist__23726);
var maps = cljs.core.rest(arglist__23726);
return taoensso$encore$nested_merge_with__delegate(f,maps);
});
taoensso$encore$nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$nested_merge_with__delegate;
return taoensso$encore$nested_merge_with;
})()
;
taoensso.encore.nested_merge = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nested_merge_with,(function (x,y){
if((cljs.core.map_QMARK_(x)) && ((y == null))){
return x;
} else {
return y;
}
}));
/**
 * Returns the 'greatest' element in coll in O(n) time.
 * @param {...*} var_args
 */
taoensso.encore.greatest = (function() { 
var taoensso$encore$greatest__delegate = function (coll,p__23729){
var vec__23733 = p__23729;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23733,(0),null);
var comparator = (function (){var or__15683__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__23733,_QMARK_comparator){
return (function (p1__23727_SHARP_,p2__23728_SHARP_){
if(((function (){var G__23734 = p1__23727_SHARP_;
var G__23735 = p2__23728_SHARP_;
return (comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(G__23734,G__23735) : comparator.call(null,G__23734,G__23735));
})() > (0))){
return p2__23728_SHARP_;
} else {
return p1__23727_SHARP_;
}
});})(comparator,vec__23733,_QMARK_comparator))
,coll);
};
var taoensso$encore$greatest = function (coll,var_args){
var p__23729 = null;
if (arguments.length > 1) {
var G__23736__i = 0, G__23736__a = new Array(arguments.length -  1);
while (G__23736__i < G__23736__a.length) {G__23736__a[G__23736__i] = arguments[G__23736__i + 1]; ++G__23736__i;}
  p__23729 = new cljs.core.IndexedSeq(G__23736__a,0);
} 
return taoensso$encore$greatest__delegate.call(this,coll,p__23729);};
taoensso$encore$greatest.cljs$lang$maxFixedArity = 1;
taoensso$encore$greatest.cljs$lang$applyTo = (function (arglist__23737){
var coll = cljs.core.first(arglist__23737);
var p__23729 = cljs.core.rest(arglist__23737);
return taoensso$encore$greatest__delegate(coll,p__23729);
});
taoensso$encore$greatest.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$greatest__delegate;
return taoensso$encore$greatest;
})()
;
/**
 * Returns the 'least' element in coll in O(n) time.
 * @param {...*} var_args
 */
taoensso.encore.least = (function() { 
var taoensso$encore$least__delegate = function (coll,p__23740){
var vec__23744 = p__23740;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23744,(0),null);
var comparator = (function (){var or__15683__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__23744,_QMARK_comparator){
return (function (p1__23738_SHARP_,p2__23739_SHARP_){
if(((function (){var G__23745 = p1__23738_SHARP_;
var G__23746 = p2__23739_SHARP_;
return (comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(G__23745,G__23746) : comparator.call(null,G__23745,G__23746));
})() < (0))){
return p2__23739_SHARP_;
} else {
return p1__23738_SHARP_;
}
});})(comparator,vec__23744,_QMARK_comparator))
,coll);
};
var taoensso$encore$least = function (coll,var_args){
var p__23740 = null;
if (arguments.length > 1) {
var G__23747__i = 0, G__23747__a = new Array(arguments.length -  1);
while (G__23747__i < G__23747__a.length) {G__23747__a[G__23747__i] = arguments[G__23747__i + 1]; ++G__23747__i;}
  p__23740 = new cljs.core.IndexedSeq(G__23747__a,0);
} 
return taoensso$encore$least__delegate.call(this,coll,p__23740);};
taoensso$encore$least.cljs$lang$maxFixedArity = 1;
taoensso$encore$least.cljs$lang$applyTo = (function (arglist__23748){
var coll = cljs.core.first(arglist__23748);
var p__23740 = cljs.core.rest(arglist__23748);
return taoensso$encore$least__delegate(coll,p__23740);
});
taoensso$encore$least.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$least__delegate;
return taoensso$encore$least;
})()
;
/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((coll instanceof clojure.lang.IEditableCollection)){
var v = cljs.core.transient$(coll);
var idx = (0);
while(true){
if((idx >= n)){
return cljs.core.persistent_BANG_(v);
} else {
var G__23749 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
var G__23750 = (idx + (1));
v = G__23749;
idx = G__23750;
continue;
}
break;
}
} else {
var v = coll;
var idx = (0);
while(true){
if((idx >= n)){
return v;
} else {
var G__23751 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
var G__23752 = (idx + (1));
v = G__23751;
idx = G__23752;
continue;
}
break;
}
}
});
taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});
taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,xs));
});
taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.undefined__GT_nil,xs));
});
/**
 * Like `clojure.core/format` but:
 * * Returns "" when fmt is nil rather than throwing an NPE.
 * * Formats nil as "nil" rather than "null".
 * * Provides ClojureScript support via goog.string.format (this has fewer
 * formatting options!).
 * @param {...*} var_args
 */
taoensso.encore.format = (function() { 
var taoensso$encore$format__delegate = function (fmt,args){
var fmt__$1 = (function (){var or__15683__auto__ = fmt;
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt__$1,args__$1);
};
var taoensso$encore$format = function (fmt,var_args){
var args = null;
if (arguments.length > 1) {
var G__23753__i = 0, G__23753__a = new Array(arguments.length -  1);
while (G__23753__i < G__23753__a.length) {G__23753__a[G__23753__i] = arguments[G__23753__i + 1]; ++G__23753__i;}
  args = new cljs.core.IndexedSeq(G__23753__a,0);
} 
return taoensso$encore$format__delegate.call(this,fmt,args);};
taoensso$encore$format.cljs$lang$maxFixedArity = 1;
taoensso$encore$format.cljs$lang$applyTo = (function (arglist__23754){
var fmt = cljs.core.first(arglist__23754);
var args = cljs.core.rest(arglist__23754);
return taoensso$encore$format__delegate(fmt,args);
});
taoensso$encore$format.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$format__delegate;
return taoensso$encore$format;
})()
;
/**
 * Gives a consistent, flexible, cross-platform substring API built on
 * `sub-indexes`.
 * @param {...*} var_args
 */
taoensso.encore.substr = (function() { 
var taoensso$encore$substr__delegate = function (s,start_idx,p__23755){
var vec__23762 = p__23755;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23762,(0),null);
if((function (){
var vec__23763_23768 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
}catch (e23765){if((e23765 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23765;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23765;

}
}})();
var x__12958__auto___23769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23763_23768,(0),null);
var _QMARK_x_err__12959__auto___23770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23763_23768,(1),null);
var have_x_QMARK___12960__auto___23771 = (_QMARK_x_err__12959__auto___23770 == null);
var vec__23764_23772 = ((have_x_QMARK___12960__auto___23771)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(cljs.core.string_QMARK_).call(null,x__12958__auto___23769)], null);
}catch (e23766){if((e23766 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23766;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23766;

}
}})():null);
var pass_QMARK___12961__auto___23773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23764_23772,(0),null);
var _QMARK_pred_err__12962__auto___23774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23764_23772,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto___23773)){
} else {
taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s","s",-948495851,null)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null)),((have_x_QMARK___12960__auto___23771)?x__12958__auto___23769:_QMARK_x_err__12959__auto___23770),cljs.core.array_seq([_QMARK_pred_err__12962__auto___23774], 0));
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"s","s",-948495851,null))], 0)))].join('')));
}

var vec__23767 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(s,start_idx,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_max_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23767,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23767,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
};
var taoensso$encore$substr = function (s,start_idx,var_args){
var p__23755 = null;
if (arguments.length > 2) {
var G__23775__i = 0, G__23775__a = new Array(arguments.length -  2);
while (G__23775__i < G__23775__a.length) {G__23775__a[G__23775__i] = arguments[G__23775__i + 2]; ++G__23775__i;}
  p__23755 = new cljs.core.IndexedSeq(G__23775__a,0);
} 
return taoensso$encore$substr__delegate.call(this,s,start_idx,p__23755);};
taoensso$encore$substr.cljs$lang$maxFixedArity = 2;
taoensso$encore$substr.cljs$lang$applyTo = (function (arglist__23776){
var s = cljs.core.first(arglist__23776);
arglist__23776 = cljs.core.next(arglist__23776);
var start_idx = cljs.core.first(arglist__23776);
var p__23755 = cljs.core.rest(arglist__23776);
return taoensso$encore$substr__delegate(s,start_idx,p__23755);
});
taoensso$encore$substr.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$substr__delegate;
return taoensso$encore$substr;
})()
;
taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
/**
 * Like `clojure.string/join` but ensures no double separators.
 * @param {...*} var_args
 */
taoensso.encore.join_once = (function() { 
var taoensso$encore$join_once__delegate = function (separator,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s1,s2){
var s1__$1 = [cljs.core.str(s1)].join('');
var s2__$1 = [cljs.core.str(s2)].join('');
if(cljs.core.truth_(taoensso.encore.str_ends_with_QMARK_(s1__$1,separator))){
if(taoensso.encore.str_starts_with_QMARK_(s2__$1,separator)){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1.substring((1)))].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
}
} else {
if(taoensso.encore.str_starts_with_QMARK_(s2__$1,separator)){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1__$1,"")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s2__$1,""))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(separator),cljs.core.str(s2__$1)].join('');
}
}
}
}),null,coll);
};
var taoensso$encore$join_once = function (separator,var_args){
var coll = null;
if (arguments.length > 1) {
var G__23777__i = 0, G__23777__a = new Array(arguments.length -  1);
while (G__23777__i < G__23777__a.length) {G__23777__a[G__23777__i] = arguments[G__23777__i + 1]; ++G__23777__i;}
  coll = new cljs.core.IndexedSeq(G__23777__a,0);
} 
return taoensso$encore$join_once__delegate.call(this,separator,coll);};
taoensso$encore$join_once.cljs$lang$maxFixedArity = 1;
taoensso$encore$join_once.cljs$lang$applyTo = (function (arglist__23778){
var separator = cljs.core.first(arglist__23778);
var coll = cljs.core.rest(arglist__23778);
return taoensso$encore$join_once__delegate(separator,coll);
});
taoensso$encore$join_once.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$join_once__delegate;
return taoensso$encore$join_once;
})()
;
/**
 * Joins string paths (URLs, file paths, etc.) ensuring correct "/"
 * interposition.
 * @param {...*} var_args
 */
taoensso.encore.path = (function() { 
var taoensso$encore$path__delegate = function (parts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.join_once,"/",parts);
};
var taoensso$encore$path = function (var_args){
var parts = null;
if (arguments.length > 0) {
var G__23779__i = 0, G__23779__a = new Array(arguments.length -  0);
while (G__23779__i < G__23779__a.length) {G__23779__a[G__23779__i] = arguments[G__23779__i + 0]; ++G__23779__i;}
  parts = new cljs.core.IndexedSeq(G__23779__a,0);
} 
return taoensso$encore$path__delegate.call(this,parts);};
taoensso$encore$path.cljs$lang$maxFixedArity = 0;
taoensso$encore$path.cljs$lang$applyTo = (function (arglist__23780){
var parts = cljs.core.seq(arglist__23780);
return taoensso$encore$path__delegate(parts);
});
taoensso$encore$path.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$path__delegate;
return taoensso$encore$path;
})()
;
/**
 * Converts all word breaks of any form and length (including line breaks of any
 * form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace([cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(cljs.core.truth_(clojure.string.blank_QMARK_(s))){
return (0);
} else {
return cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
 * Ref. http://www.ietf.org/rfc/rfc4122.txt,
 * https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function() {
var taoensso$encore$uuid_str = null;
var taoensso$encore$uuid_str__0 = (function (){
var fs = (function (n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return cljs.core.rand_int((16)).toString((16));
})));
});
var g = ((function (fs){
return (function (){
return ((8) | ((3) & cljs.core.rand_int((15)))).toString((16));
});})(fs))
;
var sb = (new goog.string.StringBuffer()).append(fs((8)),"-",fs((4)),"-4",fs((3)),"-",g(),fs((3)),"-",fs((12)));
return sb.toString();
});
var taoensso$encore$uuid_str__1 = (function (max_length){
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(taoensso$encore$uuid_str.cljs$core$IFn$_invoke$arity$0(),(0),cljs.core.array_seq([max_length], 0));
});
taoensso$encore$uuid_str = function(max_length){
switch(arguments.length){
case 0:
return taoensso$encore$uuid_str__0.call(this);
case 1:
return taoensso$encore$uuid_str__1.call(this,max_length);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$uuid_str.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$uuid_str__0;
taoensso$encore$uuid_str.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$uuid_str__1;
return taoensso$encore$uuid_str;
})()
;
taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() <= taoensso.encore.gc_rate);
});
/**
 * Swaps associative value at key and returns the new value.
 * Specialized, fast `swap-in!` for use mostly by memoization utils.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(atom_,k,f){
while(true){
var old_m = (function (){var G__23783 = atom_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23783) : cljs.core.deref.call(null,G__23783));
})();
var new_v = (function (){var G__23784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23784) : f.call(null,G__23784));
})();
var new_m = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_m,k,new_v);
if(cljs.core.compare_and_set_BANG_(atom_,old_m,new_m)){
return new_v;
} else {
continue;
}
break;
}
});
/**
 * Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
 * and immediately applies memoized f to given arguments.
 * @param {...*} var_args
 */
taoensso.encore.memoized = (function() { 
var taoensso$encore$memoized__delegate = function (cache,f,args){
if(cljs.core.not(cache)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
var G__23787 = taoensso.encore.swap_val_BANG_(cache,args,(function (p1__23785_SHARP_){
if(cljs.core.truth_(p1__23785_SHARP_)){
return p1__23785_SHARP_;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),null));
}
}));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23787) : cljs.core.deref.call(null,G__23787));
}
};
var taoensso$encore$memoized = function (cache,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__23788__i = 0, G__23788__a = new Array(arguments.length -  2);
while (G__23788__i < G__23788__a.length) {G__23788__a[G__23788__i] = arguments[G__23788__i + 2]; ++G__23788__i;}
  args = new cljs.core.IndexedSeq(G__23788__a,0);
} 
return taoensso$encore$memoized__delegate.call(this,cache,f,args);};
taoensso$encore$memoized.cljs$lang$maxFixedArity = 2;
taoensso$encore$memoized.cljs$lang$applyTo = (function (arglist__23789){
var cache = cljs.core.first(arglist__23789);
arglist__23789 = cljs.core.next(arglist__23789);
var f = cljs.core.first(arglist__23789);
var args = cljs.core.rest(arglist__23789);
return taoensso$encore$memoized__delegate(cache,f,args);
});
taoensso$encore$memoized.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$memoized__delegate;
return taoensso$encore$memoized;
})()
;
/**
 * Like `clojure.core/memoize` but:
 * * Uses delays to prevent race conditions on writes.
 * * Supports auto invalidation & gc with `ttl-ms` option.
 * * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 * * Supports cache size limit & gc with `cache-size` option.
 */
taoensso.encore.memoize_STAR_ = (function() {
var taoensso$encore$memoize_STAR_ = null;
var taoensso$encore$memoize_STAR___1 = (function (f){
var cache = (function (){var G__23856 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23856) : cljs.core.atom.call(null,G__23856));
})();
return ((function (cache){
return (function() { 
var G__23920__delegate = function (p__23857){
var vec__23858 = p__23857;
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23858,(0),null);
var argn = cljs.core.nthnext(vec__23858,(1));
var args = vec__23858;
if(cljs.core.truth_((function (){var G__23859 = arg1;
var G__23860 = cljs.core.constant$keyword$_COLON_mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23859,G__23860) : taoensso.encore.kw_identical_QMARK_.call(null,G__23859,G__23860));
})())){
if(cljs.core.truth_((function (){var G__23861 = cljs.core.first(argn);
var G__23862 = cljs.core.constant$keyword$_COLON_mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23861,G__23862) : taoensso.encore.kw_identical_QMARK_.call(null,G__23861,G__23862));
})())){
var G__23863_23921 = cache;
var G__23864_23922 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23863_23921,G__23864_23922) : cljs.core.reset_BANG_.call(null,G__23863_23921,G__23864_23922));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache,cljs.core.dissoc,argn);
}

return null;
} else {
var fresh_QMARK_ = (function (){var G__23865 = arg1;
var G__23866 = cljs.core.constant$keyword$_COLON_mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23865,G__23866) : taoensso.encore.kw_identical_QMARK_.call(null,G__23865,G__23866));
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var G__23867 = taoensso.encore.swap_val_BANG_(cache,args__$1,((function (fresh_QMARK_,args__$1,vec__23858,arg1,argn,args,cache){
return (function (_QMARK_dv){
if(cljs.core.truth_((function (){var and__15671__auto__ = _QMARK_dv;
if(cljs.core.truth_(and__15671__auto__)){
return cljs.core.not(fresh_QMARK_);
} else {
return and__15671__auto__;
}
})())){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (fresh_QMARK_,args__$1,vec__23858,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});})(fresh_QMARK_,args__$1,vec__23858,arg1,argn,args,cache))
,null));
}
});})(fresh_QMARK_,args__$1,vec__23858,arg1,argn,args,cache))
);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23867) : cljs.core.deref.call(null,G__23867));
}
};
var G__23920 = function (var_args){
var p__23857 = null;
if (arguments.length > 0) {
var G__23923__i = 0, G__23923__a = new Array(arguments.length -  0);
while (G__23923__i < G__23923__a.length) {G__23923__a[G__23923__i] = arguments[G__23923__i + 0]; ++G__23923__i;}
  p__23857 = new cljs.core.IndexedSeq(G__23923__a,0);
} 
return G__23920__delegate.call(this,p__23857);};
G__23920.cljs$lang$maxFixedArity = 0;
G__23920.cljs$lang$applyTo = (function (arglist__23924){
var p__23857 = cljs.core.seq(arglist__23924);
return G__23920__delegate(p__23857);
});
G__23920.cljs$core$IFn$_invoke$arity$variadic = G__23920__delegate;
return G__23920;
})()
;
;})(cache))
});
var taoensso$encore$memoize_STAR___2 = (function (ttl_ms,f){
var vec__23868_23925 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttl_ms], null);
}catch (e23870){if((e23870 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23870;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23870;

}
}})();
var x__12958__auto___23926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23868_23925,(0),null);
var _QMARK_x_err__12959__auto___23927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23868_23925,(1),null);
var have_x_QMARK___12960__auto___23928 = (_QMARK_x_err__12959__auto___23927 == null);
var vec__23869_23929 = ((have_x_QMARK___12960__auto___23928)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null)).call(null,x__12958__auto___23926)], null);
}catch (e23871){if((e23871 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23871;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23871;

}
}})():null);
var pass_QMARK___12961__auto___23930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23869_23929,(0),null);
var _QMARK_pred_err__12962__auto___23931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23869_23929,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto___23930)){
} else {
taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null)),((have_x_QMARK___12960__auto___23928)?x__12958__auto___23926:_QMARK_x_err__12959__auto___23927),cljs.core.array_seq([_QMARK_pred_err__12962__auto___23931], 0));
}


var cache = (function (){var G__23872 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23872) : cljs.core.atom.call(null,G__23872));
})();
return ((function (cache){
return (function() { 
var G__23932__delegate = function (p__23873){
var vec__23874 = p__23873;
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23874,(0),null);
var argn = cljs.core.nthnext(vec__23874,(1));
var args = vec__23874;
if(cljs.core.truth_((function (){var G__23875 = arg1;
var G__23876 = cljs.core.constant$keyword$_COLON_mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23875,G__23876) : taoensso.encore.kw_identical_QMARK_.call(null,G__23875,G__23876));
})())){
if(cljs.core.truth_((function (){var G__23877 = cljs.core.first(argn);
var G__23878 = cljs.core.constant$keyword$_COLON_mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23877,G__23878) : taoensso.encore.kw_identical_QMARK_.call(null,G__23877,G__23878));
})())){
var G__23879_23933 = cache;
var G__23880_23934 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23879_23933,G__23880_23934) : cljs.core.reset_BANG_.call(null,G__23879_23933,G__23880_23934));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache,cljs.core.dissoc,argn);
}

return null;
} else {
if(taoensso.encore.gc_now_QMARK_()){
var instant_23935 = taoensso.encore.now_udt();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache,((function (instant_23935,vec__23874,arg1,argn,args,cache){
return (function (m){
return cljs.core.reduce_kv(((function (instant_23935,vec__23874,arg1,argn,args,cache){
return (function (m_STAR_,k,p__23881){
var vec__23882 = p__23881;
var dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23882,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23882,(1),null);
var cv = vec__23882;
if(((instant_23935 - udt) > ttl_ms)){
return m_STAR_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m_STAR_,k,cv);
}
});})(instant_23935,vec__23874,arg1,argn,args,cache))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098(m));
});})(instant_23935,vec__23874,arg1,argn,args,cache))
);
} else {
}

var fresh_QMARK_ = (function (){var G__23884 = arg1;
var G__23885 = cljs.core.constant$keyword$_COLON_mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23884,G__23885) : taoensso.encore.kw_identical_QMARK_.call(null,G__23884,G__23885));
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var instant = taoensso.encore.now_udt();
var vec__23883 = taoensso.encore.swap_val_BANG_(cache,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__23874,arg1,argn,args,cache){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__15671__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__15671__auto__)){
var and__15671__auto____$1 = cljs.core.not(fresh_QMARK_);
if(and__15671__auto____$1){
var vec__23887 = _QMARK_cv;
var _dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23887,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23887,(1),null);
return ((instant - udt) < ttl_ms);
} else {
return and__15671__auto____$1;
}
} else {
return and__15671__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__23874,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__23874,arg1,argn,args,cache))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__23874,arg1,argn,args,cache))
);
var dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23883,(0),null);
var G__23888 = dv;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23888) : cljs.core.deref.call(null,G__23888));
}
};
var G__23932 = function (var_args){
var p__23873 = null;
if (arguments.length > 0) {
var G__23936__i = 0, G__23936__a = new Array(arguments.length -  0);
while (G__23936__i < G__23936__a.length) {G__23936__a[G__23936__i] = arguments[G__23936__i + 0]; ++G__23936__i;}
  p__23873 = new cljs.core.IndexedSeq(G__23936__a,0);
} 
return G__23932__delegate.call(this,p__23873);};
G__23932.cljs$lang$maxFixedArity = 0;
G__23932.cljs$lang$applyTo = (function (arglist__23937){
var p__23873 = cljs.core.seq(arglist__23937);
return G__23932__delegate(p__23873);
});
G__23932.cljs$core$IFn$_invoke$arity$variadic = G__23932__delegate;
return G__23932;
})()
;
;})(cache))
});
var taoensso$encore$memoize_STAR___3 = (function (cache_size,ttl_ms,f){
var vec__23889_23938 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttl_ms], null);
}catch (e23891){if((e23891 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23891;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23891;

}
}})();
var x__12958__auto___23939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23889_23938,(0),null);
var _QMARK_x_err__12959__auto___23940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23889_23938,(1),null);
var have_x_QMARK___12960__auto___23941 = (_QMARK_x_err__12959__auto___23940 == null);
var vec__23890_23942 = ((have_x_QMARK___12960__auto___23941)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null)).call(null,x__12958__auto___23939)], null);
}catch (e23892){if((e23892 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23892;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23892;

}
}})():null);
var pass_QMARK___12961__auto___23943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23890_23942,(0),null);
var _QMARK_pred_err__12962__auto___23944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23890_23942,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto___23943)){
} else {
taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null)),((have_x_QMARK___12960__auto___23941)?x__12958__auto___23939:_QMARK_x_err__12959__auto___23940),cljs.core.array_seq([_QMARK_pred_err__12962__auto___23944], 0));
}


var vec__23893_23945 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cache_size], null);
}catch (e23895){if((e23895 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23895;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23895;

}
}})();
var x__12958__auto___23946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23893_23945,(0),null);
var _QMARK_x_err__12959__auto___23947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23893_23945,(1),null);
var have_x_QMARK___12960__auto___23948 = (_QMARK_x_err__12959__auto___23947 == null);
var vec__23894_23949 = ((have_x_QMARK___12960__auto___23948)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(taoensso.encore.pos_int_QMARK_).call(null,x__12958__auto___23946)], null);
}catch (e23896){if((e23896 instanceof java.lang.Throwable)){
var t__12846__auto__ = e23896;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e23896;

}
}})():null);
var pass_QMARK___12961__auto___23950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23894_23949,(0),null);
var _QMARK_pred_err__12962__auto___23951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23894_23949,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto___23950)){
} else {
taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cache-size","cache-size",1049002054,null)),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)),((have_x_QMARK___12960__auto___23948)?x__12958__auto___23946:_QMARK_x_err__12959__auto___23947),cljs.core.array_seq([_QMARK_pred_err__12962__auto___23951], 0));
}


var state = (function (){var G__23897 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_tick,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23897) : cljs.core.atom.call(null,G__23897));
})();
return ((function (state){
return (function() { 
var G__23952__delegate = function (p__23898){
var vec__23899 = p__23898;
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23899,(0),null);
var argn = cljs.core.nthnext(vec__23899,(1));
var args = vec__23899;
if(cljs.core.truth_((function (){var G__23900 = arg1;
var G__23901 = cljs.core.constant$keyword$_COLON_mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23900,G__23901) : taoensso.encore.kw_identical_QMARK_.call(null,G__23900,G__23901));
})())){
if(cljs.core.truth_((function (){var G__23902 = cljs.core.first(argn);
var G__23903 = cljs.core.constant$keyword$_COLON_mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23902,G__23903) : taoensso.encore.kw_identical_QMARK_.call(null,G__23902,G__23903));
})())){
var G__23904_23953 = state;
var G__23905_23954 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_tick,(0)], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23904_23953,G__23905_23954) : cljs.core.reset_BANG_.call(null,G__23904_23953,G__23905_23954));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,argn);
}

return null;
} else {
if(taoensso.encore.gc_now_QMARK_()){
var instant_23955 = taoensso.encore.now_udt();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (instant_23955,vec__23899,arg1,argn,args,state){
return (function (m){
var m_STAR_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$_COLON_tick);
var m_STAR___$1 = ((cljs.core.not(ttl_ms))?m_STAR_:cljs.core.reduce_kv(((function (m_STAR_,instant_23955,vec__23899,arg1,argn,args,state){
return (function (m_STAR___$1,k,p__23906){
var vec__23907 = p__23906;
var dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23907,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23907,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23907,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23907,(3),null);
var cv = vec__23907;
if(((instant_23955 - udt) > ttl_ms)){
return m_STAR___$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m_STAR___$1,k,cv);
}
});})(m_STAR_,instant_23955,vec__23899,arg1,argn,args,state))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098(m_STAR_)));
var n_to_prune = (cljs.core.count(m_STAR___$1) - cache_size);
var m_STAR___$2 = ((!((n_to_prune > (0))))?m_STAR___$1:cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m_STAR___$1,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (m_STAR_,m_STAR___$1,n_to_prune,instant_23955,vec__23899,arg1,argn,args,state){
return (function (p1__23791_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__23791_SHARP_,(1));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_23955,vec__23899,arg1,argn,args,state))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n_to_prune,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (m_STAR_,m_STAR___$1,n_to_prune,instant_23955,vec__23899,arg1,argn,args,state){
return (function (p1__23790_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__23790_SHARP_,(0));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_23955,vec__23899,arg1,argn,args,state))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (m_STAR_,m_STAR___$1,n_to_prune,instant_23955,vec__23899,arg1,argn,args,state){
return (function (k){
var vec__23908 = (function (){var G__23909 = k;
return (m_STAR___$1.cljs$core$IFn$_invoke$arity$1 ? m_STAR___$1.cljs$core$IFn$_invoke$arity$1(G__23909) : m_STAR___$1.call(null,G__23909));
})();
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23908,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23908,(1),null);
var tick_lru = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23908,(2),null);
var tick_lfu = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23908,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tick_lru + tick_lfu),k], null);
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_23955,vec__23899,arg1,argn,args,state))
,cljs.core.keys(m_STAR___$1)))))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m_STAR___$2,cljs.core.constant$keyword$_COLON_tick,cljs.core.constant$keyword$_COLON_tick.cljs$core$IFn$_invoke$arity$1(m));
});})(instant_23955,vec__23899,arg1,argn,args,state))
);
} else {
}

var fresh_QMARK_ = (function (){var G__23911 = arg1;
var G__23912 = cljs.core.constant$keyword$_COLON_mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23911,G__23912) : taoensso.encore.kw_identical_QMARK_.call(null,G__23911,G__23912));
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var _QMARK_instant = (cljs.core.truth_(ttl_ms)?taoensso.encore.now_udt():null);
var tick_SINGLEQUOTE_ = cljs.core.constant$keyword$_COLON_tick.cljs$core$IFn$_invoke$arity$1((function (){var G__23913 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23913) : cljs.core.deref.call(null,G__23913));
})());
var vec__23910 = taoensso.encore.swap_val_BANG_(state,args__$1,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__23899,arg1,argn,args,state){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__15671__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__15671__auto__)){
var and__15671__auto____$1 = cljs.core.not(fresh_QMARK_);
if(and__15671__auto____$1){
var or__15683__auto__ = (_QMARK_instant == null);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var vec__23917 = _QMARK_cv;
var _dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23917,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23917,(1),null);
return ((_QMARK_instant - udt) < ttl_ms);
}
} else {
return and__15671__auto____$1;
}
} else {
return and__15671__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__23899,arg1,argn,args,state){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__23899,arg1,argn,args,state))
,null)),_QMARK_instant,tick_SINGLEQUOTE_,(1)], null);
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__23899,arg1,argn,args,state))
);
var dv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23910,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__23910,dv,vec__23899,arg1,argn,args,state){
return (function (m){
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,args__$1);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__23918 = temp__4126__auto__;
var dv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23918,(0),null);
var _QMARK_udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23918,(1),null);
var tick_lru = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23918,(2),null);
var tick_lfu = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23918,(3),null);
var cv = vec__23918;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m,new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$_COLON_tick,(tick_SINGLEQUOTE_ + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick_SINGLEQUOTE_,(tick_lfu + (1))], null)], true, false)], 0));
} else {
return null;
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__23910,dv,vec__23899,arg1,argn,args,state))
);

var G__23919 = dv;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23919) : cljs.core.deref.call(null,G__23919));
}
};
var G__23952 = function (var_args){
var p__23898 = null;
if (arguments.length > 0) {
var G__23956__i = 0, G__23956__a = new Array(arguments.length -  0);
while (G__23956__i < G__23956__a.length) {G__23956__a[G__23956__i] = arguments[G__23956__i + 0]; ++G__23956__i;}
  p__23898 = new cljs.core.IndexedSeq(G__23956__a,0);
} 
return G__23952__delegate.call(this,p__23898);};
G__23952.cljs$lang$maxFixedArity = 0;
G__23952.cljs$lang$applyTo = (function (arglist__23957){
var p__23898 = cljs.core.seq(arglist__23957);
return G__23952__delegate(p__23898);
});
G__23952.cljs$core$IFn$_invoke$arity$variadic = G__23952__delegate;
return G__23952;
})()
;
;})(state))
});
taoensso$encore$memoize_STAR_ = function(cache_size,ttl_ms,f){
switch(arguments.length){
case 1:
return taoensso$encore$memoize_STAR___1.call(this,cache_size);
case 2:
return taoensso$encore$memoize_STAR___2.call(this,cache_size,ttl_ms);
case 3:
return taoensso$encore$memoize_STAR___3.call(this,cache_size,ttl_ms,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$memoize_STAR___1;
taoensso$encore$memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$memoize_STAR___2;
taoensso$encore$memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = taoensso$encore$memoize_STAR___3;
return taoensso$encore$memoize_STAR_;
})()
;
/**
 * A particularly cheap+simple single-val memoize. Useful for Reactjs render op
 * caching on mobile devices, etc.
 */
taoensso.encore.memoize_1 = (function taoensso$encore$memoize_1(f){
var cache_ = (function (){var G__23962 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23962) : cljs.core.atom.call(null,G__23962));
})();
return ((function (cache_){
return (function() { 
var G__23966__delegate = function (args){
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__23963 = cache_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23963) : cljs.core.deref.call(null,G__23963));
})(),args);
if(cljs.core.truth_(temp__4124__auto__)){
var dv_ = temp__4124__auto__;
var G__23964 = dv_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23964) : cljs.core.deref.call(null,G__23964));
} else {
var cache = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (temp__4124__auto__,cache_){
return (function (cache){
var temp__4124__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,args);
if(cljs.core.truth_(temp__4124__auto____$1)){
var dv_ = temp__4124__auto____$1;
return cache;
} else {
return new cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (temp__4124__auto____$1,temp__4124__auto__,cache_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});})(temp__4124__auto____$1,temp__4124__auto__,cache_))
,null))], true, false);
}
});})(temp__4124__auto__,cache_))
);
var dv_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,args);
var G__23965 = dv_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23965) : cljs.core.deref.call(null,G__23965));
}
};
var G__23966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23967__i = 0, G__23967__a = new Array(arguments.length -  0);
while (G__23967__i < G__23967__a.length) {G__23967__a[G__23967__i] = arguments[G__23967__i + 0]; ++G__23967__i;}
  args = new cljs.core.IndexedSeq(G__23967__a,0);
} 
return G__23966__delegate.call(this,args);};
G__23966.cljs$lang$maxFixedArity = 0;
G__23966.cljs$lang$applyTo = (function (arglist__23968){
var args = cljs.core.seq(arglist__23968);
return G__23966__delegate(args);
});
G__23966.cljs$core$IFn$_invoke$arity$variadic = G__23966__delegate;
return G__23966;
})()
;
;})(cache_))
});
/**
 * Returns a `(fn [& [id]])` that returns either `nil` (limit okay) or number of
 * msecs until next rate limit window (rate limited).
 */
taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
var state = (function (){var G__23980 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23980) : cljs.core.atom.call(null,G__23980));
})();
return ((function (state){
return (function() { 
var G__23991__delegate = function (p__23981){
var vec__23982 = p__23981;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23982,(0),null);
if(taoensso.encore.gc_now_QMARK_()){
var instant_23992 = taoensso.encore.now_udt();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (instant_23992,vec__23982,id,state){
return (function (p__23983){
var vec__23984 = p__23983;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23984,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23984,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.reduce_kv(((function (vec__23984,_,m,instant_23992,vec__23982,id,state){
return (function (m_STAR_,id__$1,p__23985){
var vec__23986 = p__23985;
var udt_window_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23986,(0),null);
var ncalls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23986,(1),null);
if(((instant_23992 - udt_window_start) > window_ms)){
return m_STAR_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m_STAR_,id__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [udt_window_start,ncalls], null));
}
});})(vec__23984,_,m,instant_23992,vec__23982,id,state))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098(m))], null);
});})(instant_23992,vec__23982,id,state))
);
} else {
}

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var instant = taoensso.encore.now_udt();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (instant,vec__23982,id,state){
return (function (p__23987){
var vec__23988 = p__23987;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23988,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23988,(1),null);
var temp__4124__auto__ = (function (){var G__23989 = id;
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__23989) : m.call(null,G__23989));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var vec__23990 = temp__4124__auto__;
var udt_window_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23990,(0),null);
var ncalls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23990,(1),null);
if(((instant - udt_window_start) > window_ms)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instant,(1)], null))], null);
} else {
if((ncalls < ncalls_limit)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [udt_window_start,(ncalls + (1))], null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((udt_window_start + window_ms) - instant),m], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instant,(1)], null))], null);
}
});})(instant,vec__23982,id,state))
);
})(),(0));
};
var G__23991 = function (var_args){
var p__23981 = null;
if (arguments.length > 0) {
var G__23993__i = 0, G__23993__a = new Array(arguments.length -  0);
while (G__23993__i < G__23993__a.length) {G__23993__a[G__23993__i] = arguments[G__23993__i + 0]; ++G__23993__i;}
  p__23981 = new cljs.core.IndexedSeq(G__23993__a,0);
} 
return G__23991__delegate.call(this,p__23981);};
G__23991.cljs$lang$maxFixedArity = 0;
G__23991.cljs$lang$applyTo = (function (arglist__23994){
var p__23981 = cljs.core.seq(arglist__23994);
return G__23991__delegate(p__23981);
});
G__23991.cljs$core$IFn$_invoke$arity$variadic = G__23991__delegate;
return G__23991;
})()
;
;})(state))
});
/**
 * Wraps fn so that it returns {:result _ :backoff-ms _}.
 */
taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter(ncalls_limit,window_ms);
return ((function (rl){
return (function() { 
var G__23995__delegate = function (args){
var temp__4124__auto__ = (function (){return (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var backoff_ms = temp__4124__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_backoff_ms,backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_result,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})()], null);
}
};
var G__23995 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23996__i = 0, G__23996__a = new Array(arguments.length -  0);
while (G__23996__i < G__23996__a.length) {G__23996__a[G__23996__i] = arguments[G__23996__i + 0]; ++G__23996__i;}
  args = new cljs.core.IndexedSeq(G__23996__a,0);
} 
return G__23995__delegate.call(this,args);};
G__23995.cljs$lang$maxFixedArity = 0;
G__23995.cljs$lang$applyTo = (function (arglist__23997){
var args = cljs.core.seq(arglist__23997);
return G__23995__delegate(args);
});
G__23995.cljs$core$IFn$_invoke$arity$variadic = G__23995__delegate;
return G__23995;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4124__auto__ = (function (){var and__15671__auto__ = typeof window !== 'undefined';
if(and__15671__auto__){
return (window["performance"]);
} else {
return and__15671__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var perf = temp__4124__auto__;
var temp__4124__auto____$1 = (function (){var or__15683__auto__ = (perf["now"]);
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (perf["mozNow"]);
if(cljs.core.truth_(or__15683__auto____$1)){
return or__15683__auto____$1;
} else {
var or__15683__auto____$2 = (perf["msNow"]);
if(cljs.core.truth_(or__15683__auto____$2)){
return or__15683__auto____$2;
} else {
var or__15683__auto____$3 = (perf["oNow"]);
if(cljs.core.truth_(or__15683__auto____$3)){
return or__15683__auto____$3;
} else {
return (perf["webkitNow"]);
}
}
}
}
})();
if(cljs.core.truth_(temp__4124__auto____$1)){
var f = temp__4124__auto____$1;
return ((function (f,temp__4124__auto____$1,perf,temp__4124__auto__){
return (function (){
return cljs.core.long$((1000000.0 * f.call(perf)));
});
;})(f,temp__4124__auto____$1,perf,temp__4124__auto__))
} else {
return ((function (temp__4124__auto____$1,perf,temp__4124__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt());
});
;})(temp__4124__auto____$1,perf,temp__4124__auto__))
}
} else {
return ((function (temp__4124__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt());
});
;})(temp__4124__auto__))
}
})();
taoensso.encore.qb_min_times = (function taoensso$encore$qb_min_times(times){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,times);
});
taoensso.encore.have_console_QMARK_ = typeof console !== 'undefined';

taoensso.encore.console_log = (function (){var temp__4124__auto__ = (function (){var and__15671__auto__ = taoensso.encore.have_console_QMARK_;
if(cljs.core.truth_(and__15671__auto__)){
return console.log;
} else {
return and__15671__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var f = temp__4124__auto__;
return ((function (f,temp__4124__auto__){
return (function (xs){
f.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(xs));

return null;
});
;})(f,temp__4124__auto__))
} else {
return ((function (temp__4124__auto__){
return (function (xs){
return null;
});
;})(temp__4124__auto__))
}
})();

taoensso.encore.console_warn = (function (){var temp__4124__auto__ = (function (){var and__15671__auto__ = taoensso.encore.have_console_QMARK_;
if(cljs.core.truth_(and__15671__auto__)){
return console.warn;
} else {
return and__15671__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var f = temp__4124__auto__;
return ((function (f,temp__4124__auto__){
return (function (xs){
f.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(xs));

return null;
});
;})(f,temp__4124__auto__))
} else {
return taoensso.encore.console_log;
}
})();

taoensso.encore.console_error = (function (){var temp__4124__auto__ = (function (){var and__15671__auto__ = taoensso.encore.have_console_QMARK_;
if(cljs.core.truth_(and__15671__auto__)){
return console.error;
} else {
return and__15671__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var f = temp__4124__auto__;
return ((function (f,temp__4124__auto__){
return (function (xs){
f.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(xs));

return null;
});
;})(f,temp__4124__auto__))
} else {
return taoensso.encore.console_log;
}
})();

if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * Log only logging calls >= <this-level>. Change val with `set!`/`binding`.
 */
taoensso.encore._STAR_log_level_STAR_ = cljs.core.constant$keyword$_COLON_debug;
}

if(typeof taoensso.encore._STAR_log_fn_STAR_ !== 'undefined'){
} else {
/**
 * Experimental. Logger (fn [{:keys [level ?fmt xs msg_]}])->nil with:
 * :level ; e/o #{:trace :debug :info :warn :error :fatal :report}
 * :?fmt  ; Pattern for message formatting (when formatting)
 * :xs    ; Raw logging call arguments (excl. pattern for message formatting)
 * :msg_  ; Delay-wrapped formatted message string
 * Change val with `set!`/`binding`.
 */
taoensso.encore._STAR_log_fn_STAR_ = cljs.core.with_meta((function taoensso$encore$_STAR_log_fn_STAR_(p__23998){
var map__24009 = p__23998;
var map__24009__$1 = ((cljs.core.seq_QMARK_(map__24009))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24009):map__24009);
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24009__$1,cljs.core.constant$keyword$_COLON_msg_);
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24009__$1,cljs.core.constant$keyword$_COLON_xs);
var _QMARK_fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24009__$1,cljs.core.constant$keyword$_COLON__QMARK_fmt);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24009__$1,cljs.core.constant$keyword$_COLON_level);
var G__24010_24041 = (((level instanceof cljs.core.Keyword))?level.fqn:null);
switch (G__24010_24041) {
case "fatal":
var G__24011_24043 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("FATAL: "),cljs.core.str((function (){var G__24012 = msg_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24012) : cljs.core.deref.call(null,G__24012));
})())].join('')], null);
(taoensso.encore.console_error.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_error.cljs$core$IFn$_invoke$arity$1(G__24011_24043) : taoensso.encore.console_error.call(null,G__24011_24043));

break;
case "error":
var G__24013_24044 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("ERROR: "),cljs.core.str((function (){var G__24014 = msg_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24014) : cljs.core.deref.call(null,G__24014));
})())].join('')], null);
(taoensso.encore.console_error.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_error.cljs$core$IFn$_invoke$arity$1(G__24013_24044) : taoensso.encore.console_error.call(null,G__24013_24044));

break;
case "warn":
var G__24015_24045 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("WARN: "),cljs.core.str((function (){var G__24016 = msg_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24016) : cljs.core.deref.call(null,G__24016));
})())].join('')], null);
(taoensso.encore.console_warn.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_warn.cljs$core$IFn$_invoke$arity$1(G__24015_24045) : taoensso.encore.console_warn.call(null,G__24015_24045));

break;
default:
var G__24017_24046 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24018 = msg_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24018) : cljs.core.deref.call(null,G__24018));
})()], null);
(taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__24017_24046) : taoensso.encore.console_log.call(null,G__24017_24046));

}

return null;
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_default,true], null));
}

taoensso.encore.log_level_sufficient_QMARK_ = (function (){var ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_trace,cljs.core.constant$keyword$_COLON_debug,cljs.core.constant$keyword$_COLON_info,cljs.core.constant$keyword$_COLON_warn,cljs.core.constant$keyword$_COLON_error,cljs.core.constant$keyword$_COLON_fatal,cljs.core.constant$keyword$_COLON_report], null);
var scored_levels = cljs.core.zipmap(ordered_levels,cljs.core.next(cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
var valid_level_QMARK_ = cljs.core.set(ordered_levels);
return ((function (ordered_levels,scored_levels,valid_level_QMARK_){
return (function (level){
var current_level = taoensso.encore._STAR_log_level_STAR_;
return ((function (){var G__24019 = (function (){var vec__24020 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [level], null);
}catch (e24022){if((e24022 instanceof java.lang.Throwable)){
var t__12846__auto__ = e24022;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e24022;

}
}})();
var x__12958__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24020,(0),null);
var _QMARK_x_err__12959__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24020,(1),null);
var have_x_QMARK___12960__auto__ = (_QMARK_x_err__12959__auto__ == null);
var vec__24021 = ((have_x_QMARK___12960__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(valid_level_QMARK_).call(null,x__12958__auto__)], null);
}catch (e24023){if((e24023 instanceof java.lang.Throwable)){
var t__12846__auto__ = e24023;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e24023;

}
}})():null);
var pass_QMARK___12961__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24021,(0),null);
var _QMARK_pred_err__12962__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24021,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto__)){
return x__12958__auto__;
} else {
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",1687,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"level","level",-1363938217,null)),new cljs.core.Symbol(null,"valid-level?","valid-level?",-1401143417,null)),((have_x_QMARK___12960__auto__)?x__12958__auto__:_QMARK_x_err__12959__auto__),cljs.core.array_seq([_QMARK_pred_err__12962__auto__], 0));
}
})();
return (scored_levels.cljs$core$IFn$_invoke$arity$1 ? scored_levels.cljs$core$IFn$_invoke$arity$1(G__24019) : scored_levels.call(null,G__24019));
})() >= (function (){var G__24024 = (function (){var vec__24025 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_level], null);
}catch (e24027){if((e24027 instanceof java.lang.Throwable)){
var t__12846__auto__ = e24027;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e24027;

}
}})();
var x__12958__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24025,(0),null);
var _QMARK_x_err__12959__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24025,(1),null);
var have_x_QMARK___12960__auto__ = (_QMARK_x_err__12959__auto__ == null);
var vec__24026 = ((have_x_QMARK___12960__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(valid_level_QMARK_).call(null,x__12958__auto__)], null);
}catch (e24028){if((e24028 instanceof java.lang.Throwable)){
var t__12846__auto__ = e24028;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e24028;

}
}})():null);
var pass_QMARK___12961__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24026,(0),null);
var _QMARK_pred_err__12962__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24026,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto__)){
return x__12958__auto__;
} else {
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",1688,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"current-level","current-level",1628605637,null)),new cljs.core.Symbol(null,"valid-level?","valid-level?",-1401143417,null)),((have_x_QMARK___12960__auto__)?x__12958__auto__:_QMARK_x_err__12959__auto__),cljs.core.array_seq([_QMARK_pred_err__12962__auto__], 0));
}
})();
return (scored_levels.cljs$core$IFn$_invoke$arity$1 ? scored_levels.cljs$core$IFn$_invoke$arity$1(G__24024) : scored_levels.call(null,G__24024));
})());
});
;})(ordered_levels,scored_levels,valid_level_QMARK_))
})();


/**
 * @param {...*} var_args
 */
taoensso.encore.log = (function() { 
var taoensso$encore$log__delegate = function (xs){
var G__24030 = xs;
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__24030) : taoensso.encore.console_log.call(null,G__24030));
};
var taoensso$encore$log = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__24047__i = 0, G__24047__a = new Array(arguments.length -  0);
while (G__24047__i < G__24047__a.length) {G__24047__a[G__24047__i] = arguments[G__24047__i + 0]; ++G__24047__i;}
  xs = new cljs.core.IndexedSeq(G__24047__a,0);
} 
return taoensso$encore$log__delegate.call(this,xs);};
taoensso$encore$log.cljs$lang$maxFixedArity = 0;
taoensso$encore$log.cljs$lang$applyTo = (function (arglist__24048){
var xs = cljs.core.seq(arglist__24048);
return taoensso$encore$log__delegate(xs);
});
taoensso$encore$log.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$log__delegate;
return taoensso$encore$log;
})()
;

/**
 * @param {...*} var_args
 */
taoensso.encore.logp = (function() { 
var taoensso$encore$logp__delegate = function (xs){
var G__24032_24049 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_xs,xs,cljs.core.constant$keyword$_COLON_msg_,(new cljs.core.Delay((function (){
return taoensso.encore.spaced_str(xs);
}),null))], null);
(taoensso.encore._STAR_log_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore._STAR_log_fn_STAR_.cljs$core$IFn$_invoke$arity$1(G__24032_24049) : taoensso.encore._STAR_log_fn_STAR_.call(null,G__24032_24049));

return null;
};
var taoensso$encore$logp = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__24050__i = 0, G__24050__a = new Array(arguments.length -  0);
while (G__24050__i < G__24050__a.length) {G__24050__a[G__24050__i] = arguments[G__24050__i + 0]; ++G__24050__i;}
  xs = new cljs.core.IndexedSeq(G__24050__a,0);
} 
return taoensso$encore$logp__delegate.call(this,xs);};
taoensso$encore$logp.cljs$lang$maxFixedArity = 0;
taoensso$encore$logp.cljs$lang$applyTo = (function (arglist__24051){
var xs = cljs.core.seq(arglist__24051);
return taoensso$encore$logp__delegate(xs);
});
taoensso$encore$logp.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$logp__delegate;
return taoensso$encore$logp;
})()
;

/**
 * @param {...*} var_args
 */
taoensso.encore.logf = (function() { 
var taoensso$encore$logf__delegate = function (fmt,xs){
var G__24034_24052 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON__QMARK_fmt,fmt,cljs.core.constant$keyword$_COLON_xs,xs,cljs.core.constant$keyword$_COLON_msg_,(new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.format,fmt,xs);
}),null))], null);
(taoensso.encore._STAR_log_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore._STAR_log_fn_STAR_.cljs$core$IFn$_invoke$arity$1(G__24034_24052) : taoensso.encore._STAR_log_fn_STAR_.call(null,G__24034_24052));

return null;
};
var taoensso$encore$logf = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
var G__24053__i = 0, G__24053__a = new Array(arguments.length -  1);
while (G__24053__i < G__24053__a.length) {G__24053__a[G__24053__i] = arguments[G__24053__i + 1]; ++G__24053__i;}
  xs = new cljs.core.IndexedSeq(G__24053__a,0);
} 
return taoensso$encore$logf__delegate.call(this,fmt,xs);};
taoensso$encore$logf.cljs$lang$maxFixedArity = 1;
taoensso$encore$logf.cljs$lang$applyTo = (function (arglist__24054){
var fmt = cljs.core.first(arglist__24054);
var xs = cljs.core.rest(arglist__24054);
return taoensso$encore$logf__delegate(fmt,xs);
});
taoensso$encore$logf.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$logf__delegate;
return taoensso$encore$logf;
})()
;

/**
 * @param {...*} var_args
 */
taoensso.encore.sayp = (function() { 
var taoensso$encore$sayp__delegate = function (xs){
var G__24036 = taoensso.encore.spaced_str(xs);
return alert(G__24036);
};
var taoensso$encore$sayp = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__24055__i = 0, G__24055__a = new Array(arguments.length -  0);
while (G__24055__i < G__24055__a.length) {G__24055__a[G__24055__i] = arguments[G__24055__i + 0]; ++G__24055__i;}
  xs = new cljs.core.IndexedSeq(G__24055__a,0);
} 
return taoensso$encore$sayp__delegate.call(this,xs);};
taoensso$encore$sayp.cljs$lang$maxFixedArity = 0;
taoensso$encore$sayp.cljs$lang$applyTo = (function (arglist__24056){
var xs = cljs.core.seq(arglist__24056);
return taoensso$encore$sayp__delegate(xs);
});
taoensso$encore$sayp.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$sayp__delegate;
return taoensso$encore$sayp;
})()
;

/**
 * @param {...*} var_args
 */
taoensso.encore.sayf = (function() { 
var taoensso$encore$sayf__delegate = function (fmt,xs){
var G__24038 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.format,fmt,xs);
return alert(G__24038);
};
var taoensso$encore$sayf = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
var G__24057__i = 0, G__24057__a = new Array(arguments.length -  1);
while (G__24057__i < G__24057__a.length) {G__24057__a[G__24057__i] = arguments[G__24057__i + 1]; ++G__24057__i;}
  xs = new cljs.core.IndexedSeq(G__24057__a,0);
} 
return taoensso$encore$sayf__delegate.call(this,fmt,xs);};
taoensso$encore$sayf.cljs$lang$maxFixedArity = 1;
taoensso$encore$sayf.cljs$lang$applyTo = (function (arglist__24058){
var fmt = cljs.core.first(arglist__24058);
var xs = cljs.core.rest(arglist__24058);
return taoensso$encore$sayf__delegate(fmt,xs);
});
taoensso$encore$sayf.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$sayf__delegate;
return taoensso$encore$sayf;
})()
;

var logf_STAR__24059 = (function (level,fmt,xs){
if(cljs.core.truth_((function (){var G__24039 = level;
return (taoensso.encore.log_level_sufficient_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_level_sufficient_QMARK_.cljs$core$IFn$_invoke$arity$1(G__24039) : taoensso.encore.log_level_sufficient_QMARK_.call(null,G__24039));
})())){
var G__24040_24060 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$_COLON_level,level,cljs.core.constant$keyword$_COLON__QMARK_fmt,fmt,cljs.core.constant$keyword$_COLON_xs,xs,cljs.core.constant$keyword$_COLON_msg_,(new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.format,fmt,xs);
}),null))], null);
(taoensso.encore._STAR_log_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore._STAR_log_fn_STAR_.cljs$core$IFn$_invoke$arity$1(G__24040_24060) : taoensso.encore._STAR_log_fn_STAR_.call(null,G__24040_24060));

return null;
} else {
return null;
}
});
/**
 * @param {...*} var_args
 */
taoensso.encore.tracef = ((function (logf_STAR__24059){
return (function() { 
var taoensso$encore$tracef__delegate = function (fmt,xs){
return logf_STAR__24059(cljs.core.constant$keyword$_COLON_trace,fmt,xs);
};
var taoensso$encore$tracef = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
var G__24061__i = 0, G__24061__a = new Array(arguments.length -  1);
while (G__24061__i < G__24061__a.length) {G__24061__a[G__24061__i] = arguments[G__24061__i + 1]; ++G__24061__i;}
  xs = new cljs.core.IndexedSeq(G__24061__a,0);
} 
return taoensso$encore$tracef__delegate.call(this,fmt,xs);};
taoensso$encore$tracef.cljs$lang$maxFixedArity = 1;
taoensso$encore$tracef.cljs$lang$applyTo = (function (arglist__24062){
var fmt = cljs.core.first(arglist__24062);
var xs = cljs.core.rest(arglist__24062);
return taoensso$encore$tracef__delegate(fmt,xs);
});
taoensso$encore$tracef.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$tracef__delegate;
return taoensso$encore$tracef;
})()
;})(logf_STAR__24059))
;

/**
 * @param {...*} var_args
 */
taoensso.encore.debugf = ((function (logf_STAR__24059){
return (function() { 
var taoensso$encore$debugf__delegate = function (fmt,xs){
return logf_STAR__24059(cljs.core.constant$keyword$_COLON_debug,fmt,xs);
};
var taoensso$encore$debugf = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
var G__24063__i = 0, G__24063__a = new Array(arguments.length -  1);
while (G__24063__i < G__24063__a.length) {G__24063__a[G__24063__i] = arguments[G__24063__i + 1]; ++G__24063__i;}
  xs = new cljs.core.IndexedSeq(G__24063__a,0);
} 
return taoensso$encore$debugf__delegate.call(this,fmt,xs);};
taoensso$encore$debugf.cljs$lang$maxFixedArity = 1;
taoensso$encore$debugf.cljs$lang$applyTo = (function (arglist__24064){
var fmt = cljs.core.first(arglist__24064);
var xs = cljs.core.rest(arglist__24064);
return taoensso$encore$debugf__delegate(fmt,xs);
});
taoensso$encore$debugf.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$debugf__delegate;
return taoensso$encore$debugf;
})()
;})(logf_STAR__24059))
;

/**
 * @param {...*} var_args
 */
taoensso.encore.infof = ((function (logf_STAR__24059){
return (function() { 
var taoensso$encore$infof__delegate = function (fmt,xs){
return logf_STAR__24059(cljs.core.constant$keyword$_COLON_info,fmt,xs);
};
var taoensso$encore$infof = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
var G__24065__i = 0, G__24065__a = new Array(arguments.length -  1);
while (G__24065__i < G__24065__a.length) {G__24065__a[G__24065__i] = arguments[G__24065__i + 1]; ++G__24065__i;}
  xs = new cljs.core.IndexedSeq(G__24065__a,0);
} 
return taoensso$encore$infof__delegate.call(this,fmt,xs);};
taoensso$encore$infof.cljs$lang$maxFixedArity = 1;
taoensso$encore$infof.cljs$lang$applyTo = (function (arglist__24066){
var fmt = cljs.core.first(arglist__24066);
var xs = cljs.core.rest(arglist__24066);
return taoensso$encore$infof__delegate(fmt,xs);
});
taoensso$encore$infof.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$infof__delegate;
return taoensso$encore$infof;
})()
;})(logf_STAR__24059))
;

/**
 * @param {...*} var_args
 */
taoensso.encore.warnf = ((function (logf_STAR__24059){
return (function() { 
var taoensso$encore$warnf__delegate = function (fmt,xs){
return logf_STAR__24059(cljs.core.constant$keyword$_COLON_warn,fmt,xs);
};
var taoensso$encore$warnf = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
var G__24067__i = 0, G__24067__a = new Array(arguments.length -  1);
while (G__24067__i < G__24067__a.length) {G__24067__a[G__24067__i] = arguments[G__24067__i + 1]; ++G__24067__i;}
  xs = new cljs.core.IndexedSeq(G__24067__a,0);
} 
return taoensso$encore$warnf__delegate.call(this,fmt,xs);};
taoensso$encore$warnf.cljs$lang$maxFixedArity = 1;
taoensso$encore$warnf.cljs$lang$applyTo = (function (arglist__24068){
var fmt = cljs.core.first(arglist__24068);
var xs = cljs.core.rest(arglist__24068);
return taoensso$encore$warnf__delegate(fmt,xs);
});
taoensso$encore$warnf.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$warnf__delegate;
return taoensso$encore$warnf;
})()
;})(logf_STAR__24059))
;

/**
 * @param {...*} var_args
 */
taoensso.encore.errorf = ((function (logf_STAR__24059){
return (function() { 
var taoensso$encore$errorf__delegate = function (fmt,xs){
return logf_STAR__24059(cljs.core.constant$keyword$_COLON_error,fmt,xs);
};
var taoensso$encore$errorf = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
var G__24069__i = 0, G__24069__a = new Array(arguments.length -  1);
while (G__24069__i < G__24069__a.length) {G__24069__a[G__24069__i] = arguments[G__24069__i + 1]; ++G__24069__i;}
  xs = new cljs.core.IndexedSeq(G__24069__a,0);
} 
return taoensso$encore$errorf__delegate.call(this,fmt,xs);};
taoensso$encore$errorf.cljs$lang$maxFixedArity = 1;
taoensso$encore$errorf.cljs$lang$applyTo = (function (arglist__24070){
var fmt = cljs.core.first(arglist__24070);
var xs = cljs.core.rest(arglist__24070);
return taoensso$encore$errorf__delegate(fmt,xs);
});
taoensso$encore$errorf.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$errorf__delegate;
return taoensso$encore$errorf;
})()
;})(logf_STAR__24059))
;

/**
 * @param {...*} var_args
 */
taoensso.encore.fatalf = ((function (logf_STAR__24059){
return (function() { 
var taoensso$encore$fatalf__delegate = function (fmt,xs){
return logf_STAR__24059(cljs.core.constant$keyword$_COLON_fatal,fmt,xs);
};
var taoensso$encore$fatalf = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
var G__24071__i = 0, G__24071__a = new Array(arguments.length -  1);
while (G__24071__i < G__24071__a.length) {G__24071__a[G__24071__i] = arguments[G__24071__i + 1]; ++G__24071__i;}
  xs = new cljs.core.IndexedSeq(G__24071__a,0);
} 
return taoensso$encore$fatalf__delegate.call(this,fmt,xs);};
taoensso$encore$fatalf.cljs$lang$maxFixedArity = 1;
taoensso$encore$fatalf.cljs$lang$applyTo = (function (arglist__24072){
var fmt = cljs.core.first(arglist__24072);
var xs = cljs.core.rest(arglist__24072);
return taoensso$encore$fatalf__delegate(fmt,xs);
});
taoensso$encore$fatalf.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$fatalf__delegate;
return taoensso$encore$fatalf;
})()
;})(logf_STAR__24059))
;

/**
 * @param {...*} var_args
 */
taoensso.encore.reportf = ((function (logf_STAR__24059){
return (function() { 
var taoensso$encore$reportf__delegate = function (fmt,xs){
return logf_STAR__24059(cljs.core.constant$keyword$_COLON_report,fmt,xs);
};
var taoensso$encore$reportf = function (fmt,var_args){
var xs = null;
if (arguments.length > 1) {
var G__24073__i = 0, G__24073__a = new Array(arguments.length -  1);
while (G__24073__i < G__24073__a.length) {G__24073__a[G__24073__i] = arguments[G__24073__i + 1]; ++G__24073__i;}
  xs = new cljs.core.IndexedSeq(G__24073__a,0);
} 
return taoensso$encore$reportf__delegate.call(this,fmt,xs);};
taoensso$encore$reportf.cljs$lang$maxFixedArity = 1;
taoensso$encore$reportf.cljs$lang$applyTo = (function (arglist__24074){
var fmt = cljs.core.first(arglist__24074);
var xs = cljs.core.rest(arglist__24074);
return taoensso$encore$reportf__delegate(fmt,xs);
});
taoensso$encore$reportf.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$reportf__delegate;
return taoensso$encore$reportf;
})()
;})(logf_STAR__24059))
;
/**
 * Returns browser window's current location. Forgeable.
 */
taoensso.encore.get_window_location = (function taoensso$encore$get_window_location(){
var loc_STAR_ = window.location;
var loc = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$_COLON_href,loc_STAR_.href,cljs.core.constant$keyword$_COLON_protocol,loc_STAR_.protocol,cljs.core.constant$keyword$_COLON_hostname,loc_STAR_.hostname,cljs.core.constant$keyword$_COLON_host,loc_STAR_.host,cljs.core.constant$keyword$_COLON_pathname,loc_STAR_.pathname,cljs.core.constant$keyword$_COLON_search,loc_STAR_.search,cljs.core.constant$keyword$_COLON_hash,loc_STAR_.hash], null);
return loc;
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Returns an immediately available XhrIo instance, or nil. The instance must be
 * released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = (function (){var G__24076 = taoensso.encore.xhr_pool_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24076) : cljs.core.deref.call(null,G__24076));
})().getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * [uri method get-or-post-params] -> [uri post-content]
 */
taoensso.encore.coerce_xhr_params = (function taoensso$encore$coerce_xhr_params(uri,method,params){
if((function (){
var vec__24083_24089 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [params], null);
}catch (e24085){if((e24085 instanceof java.lang.Throwable)){
var t__12846__auto__ = e24085;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e24085;

}
}})();
var x__12958__auto___24090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24083_24089,(0),null);
var _QMARK_x_err__12959__auto___24091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24083_24089,(1),null);
var have_x_QMARK___12960__auto___24092 = (_QMARK_x_err__12959__auto___24091 == null);
var vec__24084_24093 = ((have_x_QMARK___12960__auto___24092)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null)).call(null,x__12958__auto___24090)], null);
}catch (e24086){if((e24086 instanceof java.lang.Throwable)){
var t__12846__auto__ = e24086;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e24086;

}
}})():null);
var pass_QMARK___12961__auto___24094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24084_24093,(0),null);
var _QMARK_pred_err__12962__auto___24095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24084_24093,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto___24094)){
} else {
taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"params","params",-1943919534,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null)),((have_x_QMARK___12960__auto___24092)?x__12958__auto___24090:_QMARK_x_err__12959__auto___24091),cljs.core.array_seq([_QMARK_pred_err__12962__auto___24095], 0));
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null),new cljs.core.Symbol(null,"params","params",-1943919534,null))], 0)))].join('')));
}

var _QMARK_pstr = ((cljs.core.empty_QMARK_(params))?null:(function (){var s = (function (){var G__24087 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__24087);
})().toString();
if(cljs.core.truth_(clojure.string.blank_QMARK_(s))){
return null;
} else {
return s;
}
})());
var G__24088 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__24088) {
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
 * Alpha - subject to change.
 * Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 * Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 * (ajax-lite "/my-post-route"
 * {:method     :post
 * :params     {:username "Rich Hickey"
 * :type     "Awesome"}
 * :headers    {"Foo" "Bar"}
 * :resp-type  :text
 * :timeout-ms 7000}
 * (fn async-callback [resp-map]
 * (let [{:keys [?status ?error ?content ?content-type]} resp-map]
 * ;; ?status - 200, 404, ..., or nil on no response
 * ;; ?error  - e/o #{:xhr-pool-depleted :exception :http-error :abort
 * ;;                 :timeout <http-error-status> nil}
 * (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__24099,callback){
var map__24130 = p__24099;
var map__24130__$1 = ((cljs.core.seq_QMARK_(map__24130))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24130):map__24130);
var opts = map__24130__$1;
var resp_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24130__$1,cljs.core.constant$keyword$_COLON_resp_type,cljs.core.constant$keyword$_COLON_auto);
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24130__$1,cljs.core.constant$keyword$_COLON_timeout_ms,(10000));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24130__$1,cljs.core.constant$keyword$_COLON_headers);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24130__$1,cljs.core.constant$keyword$_COLON_params);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24130__$1,cljs.core.constant$keyword$_COLON_method,cljs.core.constant$keyword$_COLON_get);
if((function (){
var vec__24131_24160 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [timeout_ms], null);
}catch (e24133){if((e24133 instanceof java.lang.Throwable)){
var t__12846__auto__ = e24133;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e24133;

}
}})();
var x__12958__auto___24161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24131_24160,(0),null);
var _QMARK_x_err__12959__auto___24162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24131_24160,(1),null);
var have_x_QMARK___12960__auto___24163 = (_QMARK_x_err__12959__auto___24162 == null);
var vec__24132_24164 = ((have_x_QMARK___12960__auto___24163)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null)).call(null,x__12958__auto___24161)], null);
}catch (e24134){if((e24134 instanceof java.lang.Throwable)){
var t__12846__auto__ = e24134;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e24134;

}
}})():null);
var pass_QMARK___12961__auto___24165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24132_24164,(0),null);
var _QMARK_pred_err__12962__auto___24166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24132_24164,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto___24165)){
} else {
taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null)),((have_x_QMARK___12960__auto___24163)?x__12958__auto___24161:_QMARK_x_err__12959__auto___24162),cljs.core.array_seq([_QMARK_pred_err__12962__auto___24166], 0));
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_or,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null))], 0)))].join('')));
}

var temp__4124__auto__ = taoensso.encore.get_pooled_xhr_BANG_();
if(cljs.core.truth_(temp__4124__auto__)){
var xhr = temp__4124__auto__;
try{var timeout_ms__$1 = (function (){var or__15683__auto__ = cljs.core.constant$keyword$_COLON_timeout.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__24138 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__24138) {
case "post":
return "POST";

break;
case "get":
return "GET";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys(cljs.core.name,params);
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys(cljs.core.name,headers)], 0));
var vec__24137 = taoensso.encore.coerce_xhr_params(uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24137,(0),null);
var post_content_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24137,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js(((cljs.core.not(post_content_STAR_))?headers__$1:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__24139_24168 = xhr;
var G__24140_24169 = G__24139_24168;
var G__24141_24170 = goog.net.EventType.READY;
var G__24142_24171 = ((function (G__24140_24169,G__24141_24170,G__24139_24168,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__24137,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__24130,map__24130__$1,opts,resp_type,timeout_ms,headers,params,method){
return (function (_){
return (function (){var G__24143 = taoensso.encore.xhr_pool_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24143) : cljs.core.deref.call(null,G__24143));
})().releaseObject(xhr);
});})(G__24140_24169,G__24141_24170,G__24139_24168,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__24137,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__24130,map__24130__$1,opts,resp_type,timeout_ms,headers,params,method))
;
goog.events.listenOnce(G__24140_24169,G__24141_24170,G__24142_24171);

var G__24144_24172 = G__24139_24168;
var G__24145_24173 = goog.net.EventType.COMPLETE;
var G__24146_24174 = ((function (G__24144_24172,G__24145_24173,G__24139_24168,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__24137,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__24130,map__24130__$1,opts,resp_type,timeout_ms,headers,params,method){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var _QMARK_http_status = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(resp_type,cljs.core.constant$keyword$_COLON_auto)))?resp_type:(function (){var pred__24153 = ((function (status,_QMARK_http_status,_QMARK_content_type,G__24144_24172,G__24145_24173,G__24139_24168,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__24137,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__24130,map__24130__$1,opts,resp_type,timeout_ms,headers,params,method){
return (function (p1__24098_SHARP_,p2__24097_SHARP_){
return taoensso.encore.str_contains_QMARK_(p2__24097_SHARP_,p1__24098_SHARP_);
});})(status,_QMARK_http_status,_QMARK_content_type,G__24144_24172,G__24145_24173,G__24139_24168,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__24137,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__24130,map__24130__$1,opts,resp_type,timeout_ms,headers,params,method))
;
var expr__24154 = [cljs.core.str(_QMARK_content_type)].join('');
if(pred__24153("/edn",expr__24154)){
return cljs.core.constant$keyword$_COLON_edn;
} else {
if(pred__24153("/json",expr__24154)){
return cljs.core.constant$keyword$_COLON_json;
} else {
if(pred__24153("/xml",expr__24154)){
return cljs.core.constant$keyword$_COLON_xml;
} else {
if(pred__24153("/html",expr__24154)){
return cljs.core.constant$keyword$_COLON_text;
} else {
return cljs.core.constant$keyword$_COLON_text;
}
}
}
}
})());
try{var G__24157 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__24157) {
case "edn":
return cljs.reader.read_string(xhr.getResponseText());

break;
case "xml":
return xhr.getResponseXml();

break;
case "json":
return xhr.getResponseJson();

break;
case "text":
return xhr.getResponseText();

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e24156){var e = e24156;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_ajax_SLASH_bad_response_type,resp_type__$1,cljs.core.constant$keyword$_COLON_ajax_SLASH_resp_as_text,xhr.getResponseText()], null);
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$_COLON_raw_resp,resp,cljs.core.constant$keyword$_COLON_xhr,xhr,cljs.core.constant$keyword$_COLON__QMARK_content_type,(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),cljs.core.constant$keyword$_COLON__QMARK_content,_QMARK_content,cljs.core.constant$keyword$_COLON__QMARK_status,_QMARK_http_status,cljs.core.constant$keyword$_COLON__QMARK_error,(function (){var or__15683__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if((((200) <= n)) && ((n <= (299)))){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,cljs.core.constant$keyword$_COLON_exception,goog.net.ErrorCode.HTTP_ERROR,cljs.core.constant$keyword$_COLON_http_error,goog.net.ErrorCode.ABORT,cljs.core.constant$keyword$_COLON_abort,goog.net.ErrorCode.TIMEOUT,cljs.core.constant$keyword$_COLON_timeout], true, false),xhr.getLastErrorCode(),cljs.core.constant$keyword$_COLON_unknown));
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
if((_QMARK_content == null)){
return cljs.core.constant$keyword$_COLON_no_content;
} else {
return null;
}
}
})()], null);
var G__24158 = cb_arg;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__24158) : callback.call(null,G__24158));
});})(G__24144_24172,G__24145_24173,G__24139_24168,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__24137,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__24130,map__24130__$1,opts,resp_type,timeout_ms,headers,params,method))
;
goog.events.listenOnce(G__24144_24172,G__24145_24173,G__24146_24174);

G__24139_24168.setTimeoutInterval((function (){var or__15683__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return (0);
}
})());

G__24139_24168.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);


return xhr;
}catch (e24135){if((e24135 instanceof Error)){
var e = e24135;
taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic("`ajax-lite` error: %s",cljs.core.array_seq([e], 0));

(function (){var G__24136 = taoensso.encore.xhr_pool_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24136) : cljs.core.deref.call(null,G__24136));
})().releaseObject(xhr);

return null;
} else {
throw e24135;

}
}} else {
var G__24159_24176 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON__QMARK_error,cljs.core.constant$keyword$_COLON_xhr_pool_depleted], null);
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__24159_24176) : callback.call(null,G__24159_24176));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1.
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(clojure.string.replace((function (){var G__24179 = [cljs.core.str(s)].join('');
var G__24180 = s;
return encodeURIComponent(G__24179,G__24180);
})(),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1.
 * @param {...*} var_args
 */
taoensso.encore.url_decode = (function() { 
var taoensso$encore$url_decode__delegate = function (s,p__24181){
var vec__24184 = p__24181;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24184,(0),null);
if(cljs.core.truth_(s)){
var G__24185 = s;
return decodeURIComponent(G__24185);
} else {
return null;
}
};
var taoensso$encore$url_decode = function (s,var_args){
var p__24181 = null;
if (arguments.length > 1) {
var G__24186__i = 0, G__24186__a = new Array(arguments.length -  1);
while (G__24186__i < G__24186__a.length) {G__24186__a[G__24186__i] = arguments[G__24186__i + 1]; ++G__24186__i;}
  p__24181 = new cljs.core.IndexedSeq(G__24186__a,0);
} 
return taoensso$encore$url_decode__delegate.call(this,s,p__24181);};
taoensso$encore$url_decode.cljs$lang$maxFixedArity = 1;
taoensso$encore$url_decode.cljs$lang$applyTo = (function (arglist__24187){
var s = cljs.core.first(arglist__24187);
var p__24181 = cljs.core.rest(arglist__24187);
return taoensso$encore$url_decode__delegate(s,p__24181);
});
taoensso$encore$url_decode.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$url_decode__delegate;
return taoensso$encore$url_decode;
})()
;
taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode(cljs.core.name(k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode(v))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_(m)){
return null;
} else {
return join((function (){var iter__16439__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__24198(s__24199){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__24199__$1 = s__24199;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24199__$1);
if(temp__4126__auto__){
var s__24199__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24199__$2)){
var c__16437__auto__ = cljs.core.chunk_first(s__24199__$2);
var size__16438__auto__ = cljs.core.count(c__16437__auto__);
var b__24201 = cljs.core.chunk_buffer(size__16438__auto__);
if((function (){var i__24200 = (0);
while(true){
if((i__24200 < size__16438__auto__)){
var vec__24206 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__16437__auto__,i__24200);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24206,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24206,(1),null);
cljs.core.chunk_append(b__24201,((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__15683__auto__ = cljs.core.seq(v);
if(or__15683__auto__){
return or__15683__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)));

var G__24208 = (i__24200 + (1));
i__24200 = G__24208;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24201),taoensso$encore$format_query_string_$_iter__24198(cljs.core.chunk_rest(s__24199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24201),null);
}
} else {
var vec__24207 = cljs.core.first(s__24199__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24207,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24207,(1),null);
return cljs.core.cons(((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__15683__auto__ = cljs.core.seq(v);
if(or__15683__auto__){
return or__15683__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)),taoensso$encore$format_query_string_$_iter__24198(cljs.core.rest(s__24199__$2)));
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__16439__auto__(m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__4124__auto__)){
var cur = temp__4124__auto__;
if(cljs.core.vector_QMARK_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 * @param {...*} var_args
 */
taoensso.encore.parse_query_params = (function() { 
var taoensso$encore$parse_query_params__delegate = function (s,p__24209){
var vec__24216 = p__24209;
var keywordize_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24216,(0),null);
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24216,(1),null);
var _PERCENT_ = (cljs.core.truth_(clojure.string.blank_QMARK_(s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = ((taoensso.encore.str_starts_with_QMARK_(s,"?"))?taoensso.encore.substr(s,(1)):s);
if(!(taoensso.encore.str_contains_QMARK_(s__$1,"="))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s__$1,vec__24216,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4124__auto__ = clojure.string.split.cljs$core$IFn$_invoke$arity$3(param,/=/,(2));
if(cljs.core.truth_(temp__4124__auto__)){
var vec__24217 = temp__4124__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24217,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24217,(1),null);
return taoensso.encore.assoc_conj(m,taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([encoding], 0)),taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.array_seq([encoding], 0)));
} else {
return m;
}
});})(s__$1,vec__24216,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/&/));
if(cljs.core.not(keywordize_QMARK_)){
return m;
} else {
return taoensso.encore.keywordize_map(m);
}
}
})());
if((function (){
var vec__24218_24222 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_PERCENT_], null);
}catch (e24220){if((e24220 instanceof java.lang.Throwable)){
var t__12846__auto__ = e24220;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e24220;

}
}})();
var x__12958__auto___24223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24218_24222,(0),null);
var _QMARK_x_err__12959__auto___24224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24218_24222,(1),null);
var have_x_QMARK___12960__auto___24225 = (_QMARK_x_err__12959__auto___24224 == null);
var vec__24219_24226 = ((have_x_QMARK___12960__auto___24225)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(cljs.core.map_QMARK_).call(null,x__12958__auto___24223)], null);
}catch (e24221){if((e24221 instanceof java.lang.Throwable)){
var t__12846__auto__ = e24221;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e24221;

}
}})():null);
var pass_QMARK___12961__auto___24227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24219_24226,(0),null);
var _QMARK_pred_err__12962__auto___24228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24219_24226,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto___24227)){
} else {
taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),((have_x_QMARK___12960__auto___24225)?x__12958__auto___24223:_QMARK_x_err__12959__auto___24224),cljs.core.array_seq([_QMARK_pred_err__12962__auto___24228], 0));
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"%","%",-950237169,null))], 0)))].join('')));
}

return _PERCENT_;
};
var taoensso$encore$parse_query_params = function (s,var_args){
var p__24209 = null;
if (arguments.length > 1) {
var G__24229__i = 0, G__24229__a = new Array(arguments.length -  1);
while (G__24229__i < G__24229__a.length) {G__24229__a[G__24229__i] = arguments[G__24229__i + 1]; ++G__24229__i;}
  p__24209 = new cljs.core.IndexedSeq(G__24229__a,0);
} 
return taoensso$encore$parse_query_params__delegate.call(this,s,p__24209);};
taoensso$encore$parse_query_params.cljs$lang$maxFixedArity = 1;
taoensso$encore$parse_query_params.cljs$lang$applyTo = (function (arglist__24230){
var s = cljs.core.first(arglist__24230);
var p__24209 = cljs.core.rest(arglist__24230);
return taoensso$encore$parse_query_params__delegate(s,p__24209);
});
taoensso$encore$parse_query_params.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$parse_query_params__delegate;
return taoensso$encore$parse_query_params;
})()
;
taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__24232 = clojure.string.split.cljs$core$IFn$_invoke$arity$3([cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24232,(0),null);
var _QMARK_qstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24232,(1),null);
var qmap = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.keywordize_map(taoensso.encore.parse_query_params(_QMARK_qstr)):null),taoensso.encore.keywordize_map(m)], 0));
return [cljs.core.str(url__$1),cljs.core.str((function (){var temp__4126__auto__ = taoensso.encore.format_query_string(qmap);
if(cljs.core.truth_(temp__4126__auto__)){
var qstr = temp__4126__auto__;
return [cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return null;
}
})())].join('');
});
taoensso.encore.logging_level = (function (){var G__24233 = cljs.core.constant$keyword$_COLON_debug;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24233) : cljs.core.atom.call(null,G__24233));
})();
/**
 * @param {...*} var_args
 */
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function() { 
var taoensso$encore$set_exp_backoff_timeout_BANG___delegate = function (nullary_f,p__24234){
var vec__24236 = p__24234;
var nattempt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24236,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff((function (){var or__15683__auto__ = nattempt;
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return (0);
}
})()));
};
var taoensso$encore$set_exp_backoff_timeout_BANG_ = function (nullary_f,var_args){
var p__24234 = null;
if (arguments.length > 1) {
var G__24237__i = 0, G__24237__a = new Array(arguments.length -  1);
while (G__24237__i < G__24237__a.length) {G__24237__a[G__24237__i] = arguments[G__24237__i + 1]; ++G__24237__i;}
  p__24234 = new cljs.core.IndexedSeq(G__24237__a,0);
} 
return taoensso$encore$set_exp_backoff_timeout_BANG___delegate.call(this,nullary_f,p__24234);};
taoensso$encore$set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = 1;
taoensso$encore$set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (arglist__24238){
var nullary_f = cljs.core.first(arglist__24238);
var p__24234 = cljs.core.rest(arglist__24238);
return taoensso$encore$set_exp_backoff_timeout_BANG___delegate(nullary_f,p__24234);
});
taoensso$encore$set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$set_exp_backoff_timeout_BANG___delegate;
return taoensso$encore$set_exp_backoff_timeout_BANG_;
})()
;
taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_(ks,m);
});
taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_(ks,m);
});
taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_(ks,m);
});
taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_(ks,m);
});
taoensso.encore.parse_bool = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(taoensso.encore.as__QMARK_bool);
taoensso.encore.parse_int = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(taoensso.encore.as__QMARK_int);
taoensso.encore.parse_float = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(taoensso.encore.as__QMARK_float);
taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
if(cljs.core.truth_(x)){
var vec__24243 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as__QMARK_bool(x)], null);
}catch (e24245){if((e24245 instanceof java.lang.Throwable)){
var t__12846__auto__ = e24245;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e24245;

}
}})();
var x__12958__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24243,(0),null);
var _QMARK_x_err__12959__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24243,(1),null);
var have_x_QMARK___12960__auto__ = (_QMARK_x_err__12959__auto__ == null);
var vec__24244 = ((have_x_QMARK___12960__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(taoensso.encore.nnil_QMARK_).call(null,x__12958__auto__)], null);
}catch (e24246){if((e24246 instanceof java.lang.Throwable)){
var t__12846__auto__ = e24246;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e24246;

}
}})():null);
var pass_QMARK___12961__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24244,(0),null);
var _QMARK_pred_err__12962__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24244,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto__)){
return x__12958__auto__;
} else {
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",2015,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"as-?bool","as-?bool",1645711161,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___12960__auto__)?x__12958__auto__:_QMARK_x_err__12959__auto__),cljs.core.array_seq([_QMARK_pred_err__12962__auto__], 0));
}
} else {
return null;
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){
if(cljs.core.truth_(x)){
var vec__24251 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as__QMARK_int(x)], null);
}catch (e24253){if((e24253 instanceof java.lang.Throwable)){
var t__12846__auto__ = e24253;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e24253;

}
}})();
var x__12958__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24251,(0),null);
var _QMARK_x_err__12959__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24251,(1),null);
var have_x_QMARK___12960__auto__ = (_QMARK_x_err__12959__auto__ == null);
var vec__24252 = ((have_x_QMARK___12960__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(taoensso.encore.nnil_QMARK_).call(null,x__12958__auto__)], null);
}catch (e24254){if((e24254 instanceof java.lang.Throwable)){
var t__12846__auto__ = e24254;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e24254;

}
}})():null);
var pass_QMARK___12961__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24252,(0),null);
var _QMARK_pred_err__12962__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24252,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto__)){
return x__12958__auto__;
} else {
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",2016,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"as-?int","as-?int",2107097360,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___12960__auto__)?x__12958__auto__:_QMARK_x_err__12959__auto__),cljs.core.array_seq([_QMARK_pred_err__12962__auto__], 0));
}
} else {
return null;
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
if(cljs.core.truth_(x)){
var vec__24259 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as__QMARK_float(x)], null);
}catch (e24261){if((e24261 instanceof java.lang.Throwable)){
var t__12846__auto__ = e24261;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e24261;

}
}})();
var x__12958__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24259,(0),null);
var _QMARK_x_err__12959__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24259,(1),null);
var have_x_QMARK___12960__auto__ = (_QMARK_x_err__12959__auto__ == null);
var vec__24260 = ((have_x_QMARK___12960__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(taoensso.encore.nnil_QMARK_).call(null,x__12958__auto__)], null);
}catch (e24262){if((e24262 instanceof java.lang.Throwable)){
var t__12846__auto__ = e24262;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e24262;

}
}})():null);
var pass_QMARK___12961__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24260,(0),null);
var _QMARK_pred_err__12962__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24260,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto__)){
return x__12958__auto__;
} else {
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.encore",2017,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"as-?float","as-?float",2124831706,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___12960__auto__)?x__12958__auto__:_QMARK_x_err__12959__auto__),cljs.core.array_seq([_QMARK_pred_err__12962__auto__], 0));
}
} else {
return null;
}
});
taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;
taoensso.encore.merge_deep = taoensso.encore.nested_merge;
