// Compiled by ClojureScript 0.0-3058 {}
goog.provide('taoensso.sente.interfaces');
goog.require('cljs.core');
goog.require('cljs.reader');

taoensso.sente.interfaces.IPacker = (function (){var obj24628 = {};
return obj24628;
})();

taoensso.sente.interfaces.pack = (function taoensso$sente$interfaces$pack(_,x){
if((function (){var and__15671__auto__ = _;
if(and__15671__auto__){
return _.taoensso$sente$interfaces$IPacker$pack$arity$2;
} else {
return and__15671__auto__;
}
})()){
return _.taoensso$sente$interfaces$IPacker$pack$arity$2(_,x);
} else {
var x__16327__auto__ = (((_ == null))?null:_);
return (function (){var or__15683__auto__ = (taoensso.sente.interfaces.pack[(function (){var G__24632 = x__16327__auto__;
return goog.typeOf(G__24632);
})()]);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (taoensso.sente.interfaces.pack["_"]);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
throw cljs.core.missing_protocol("IPacker.pack",_);
}
}
})().call(null,_,x);
}
});

taoensso.sente.interfaces.unpack = (function taoensso$sente$interfaces$unpack(_,x){
if((function (){var and__15671__auto__ = _;
if(and__15671__auto__){
return _.taoensso$sente$interfaces$IPacker$unpack$arity$2;
} else {
return and__15671__auto__;
}
})()){
return _.taoensso$sente$interfaces$IPacker$unpack$arity$2(_,x);
} else {
var x__16327__auto__ = (((_ == null))?null:_);
return (function (){var or__15683__auto__ = (taoensso.sente.interfaces.unpack[(function (){var G__24636 = x__16327__auto__;
return goog.typeOf(G__24636);
})()]);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (taoensso.sente.interfaces.unpack["_"]);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
throw cljs.core.missing_protocol("IPacker.unpack",_);
}
}
})().call(null,_,x);
}
});


/**
* @constructor
*/
taoensso.sente.interfaces.EdnPacker = (function (){
})
taoensso.sente.interfaces.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = true;

taoensso.sente.interfaces.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
});

taoensso.sente.interfaces.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cljs.reader.read_string(s);
});

taoensso.sente.interfaces.EdnPacker.cljs$lang$type = true;

taoensso.sente.interfaces.EdnPacker.cljs$lang$ctorStr = "taoensso.sente.interfaces/EdnPacker";

taoensso.sente.interfaces.EdnPacker.cljs$lang$ctorPrWriter = (function (this__16270__auto__,writer__16271__auto__,opt__16272__auto__){
return cljs.core._write(writer__16271__auto__,"taoensso.sente.interfaces/EdnPacker");
});

taoensso.sente.interfaces.__GT_EdnPacker = (function taoensso$sente$interfaces$__GT_EdnPacker(){
return (new taoensso.sente.interfaces.EdnPacker());
});

/**
 * Default Edn packer.
 */
taoensso.sente.interfaces.edn_packer = taoensso.sente.interfaces.__GT_EdnPacker();
taoensso.sente.interfaces.coerce_packer = (function taoensso$sente$interfaces$coerce_packer(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.constant$keyword$_COLON_edn)){
return taoensso.sente.interfaces.edn_packer;
} else {
if((function (){var G__24638 = x;
if(G__24638){
var bit__16364__auto__ = null;
if(cljs.core.truth_((function (){var or__15683__auto__ = bit__16364__auto__;
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return G__24638.taoensso$sente$interfaces$IPacker$;
}
})())){
return true;
} else {
if((!G__24638.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,G__24638);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,G__24638);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IPacker","IPacker",266151414,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], 0)))].join('')));
}

return x;
}
});
