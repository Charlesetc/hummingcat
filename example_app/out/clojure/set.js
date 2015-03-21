// Compiled by ClojureScript 0.0-3058 {}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,k,coll);
return cljs.core.cons(max,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (max){
return (function (p1__24539_SHARP_){
return (max === p1__24539_SHARP_);
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 * @param {...*} var_args
 */
clojure.set.union = (function() {
var clojure$set$union = null;
var clojure$set$union__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var clojure$set$union__1 = (function (s1){
return s1;
});
var clojure$set$union__2 = (function (s1,s2){
if((cljs.core.count(s1) < cljs.core.count(s2))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,s1,s2);
}
});
var clojure$set$union__3 = (function() { 
var G__24540__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key(cljs.core.count,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sets,s2,cljs.core.array_seq([s1], 0)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.first(bubbled_sets),cljs.core.rest(bubbled_sets));
};
var G__24540 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__24541__i = 0, G__24541__a = new Array(arguments.length -  2);
while (G__24541__i < G__24541__a.length) {G__24541__a[G__24541__i] = arguments[G__24541__i + 2]; ++G__24541__i;}
  sets = new cljs.core.IndexedSeq(G__24541__a,0);
} 
return G__24540__delegate.call(this,s1,s2,sets);};
G__24540.cljs$lang$maxFixedArity = 2;
G__24540.cljs$lang$applyTo = (function (arglist__24542){
var s1 = cljs.core.first(arglist__24542);
arglist__24542 = cljs.core.next(arglist__24542);
var s2 = cljs.core.first(arglist__24542);
var sets = cljs.core.rest(arglist__24542);
return G__24540__delegate(s1,s2,sets);
});
G__24540.cljs$core$IFn$_invoke$arity$variadic = G__24540__delegate;
return G__24540;
})()
;
clojure$set$union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 0:
return clojure$set$union__0.call(this);
case 1:
return clojure$set$union__1.call(this,s1);
case 2:
return clojure$set$union__2.call(this,s1,s2);
default:
var G__24543 = null;
if (arguments.length > 2) {
var G__24544__i = 0, G__24544__a = new Array(arguments.length -  2);
while (G__24544__i < G__24544__a.length) {G__24544__a[G__24544__i] = arguments[G__24544__i + 2]; ++G__24544__i;}
G__24543 = new cljs.core.IndexedSeq(G__24544__a,0);
}
return clojure$set$union__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__24543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$union.cljs$lang$maxFixedArity = 2;
clojure$set$union.cljs$lang$applyTo = clojure$set$union__3.cljs$lang$applyTo;
clojure$set$union.cljs$core$IFn$_invoke$arity$0 = clojure$set$union__0;
clojure$set$union.cljs$core$IFn$_invoke$arity$1 = clojure$set$union__1;
clojure$set$union.cljs$core$IFn$_invoke$arity$2 = clojure$set$union__2;
clojure$set$union.cljs$core$IFn$_invoke$arity$variadic = clojure$set$union__3.cljs$core$IFn$_invoke$arity$variadic;
return clojure$set$union;
})()
;
/**
 * Return a set that is the intersection of the input sets
 * @param {...*} var_args
 */
clojure.set.intersection = (function() {
var clojure$set$intersection = null;
var clojure$set$intersection__1 = (function (s1){
return s1;
});
var clojure$set$intersection__2 = (function (s1,s2){
while(true){
if((cljs.core.count(s2) < cljs.core.count(s1))){
var G__24546 = s2;
var G__24547 = s1;
s1 = G__24546;
s2 = G__24547;
continue;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_(s2,item)){
return result;
} else {
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});
var clojure$set$intersection__3 = (function() { 
var G__24548__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key((function (p1__24545_SHARP_){
return (- cljs.core.count(p1__24545_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sets,s2,cljs.core.array_seq([s1], 0)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure$set$intersection,cljs.core.first(bubbled_sets),cljs.core.rest(bubbled_sets));
};
var G__24548 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__24549__i = 0, G__24549__a = new Array(arguments.length -  2);
while (G__24549__i < G__24549__a.length) {G__24549__a[G__24549__i] = arguments[G__24549__i + 2]; ++G__24549__i;}
  sets = new cljs.core.IndexedSeq(G__24549__a,0);
} 
return G__24548__delegate.call(this,s1,s2,sets);};
G__24548.cljs$lang$maxFixedArity = 2;
G__24548.cljs$lang$applyTo = (function (arglist__24550){
var s1 = cljs.core.first(arglist__24550);
arglist__24550 = cljs.core.next(arglist__24550);
var s2 = cljs.core.first(arglist__24550);
var sets = cljs.core.rest(arglist__24550);
return G__24548__delegate(s1,s2,sets);
});
G__24548.cljs$core$IFn$_invoke$arity$variadic = G__24548__delegate;
return G__24548;
})()
;
clojure$set$intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return clojure$set$intersection__1.call(this,s1);
case 2:
return clojure$set$intersection__2.call(this,s1,s2);
default:
var G__24551 = null;
if (arguments.length > 2) {
var G__24552__i = 0, G__24552__a = new Array(arguments.length -  2);
while (G__24552__i < G__24552__a.length) {G__24552__a[G__24552__i] = arguments[G__24552__i + 2]; ++G__24552__i;}
G__24551 = new cljs.core.IndexedSeq(G__24552__a,0);
}
return clojure$set$intersection__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__24551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$intersection.cljs$lang$maxFixedArity = 2;
clojure$set$intersection.cljs$lang$applyTo = clojure$set$intersection__3.cljs$lang$applyTo;
clojure$set$intersection.cljs$core$IFn$_invoke$arity$1 = clojure$set$intersection__1;
clojure$set$intersection.cljs$core$IFn$_invoke$arity$2 = clojure$set$intersection__2;
clojure$set$intersection.cljs$core$IFn$_invoke$arity$variadic = clojure$set$intersection__3.cljs$core$IFn$_invoke$arity$variadic;
return clojure$set$intersection;
})()
;
/**
 * Return a set that is the first set without elements of the remaining sets
 * @param {...*} var_args
 */
clojure.set.difference = (function() {
var clojure$set$difference = null;
var clojure$set$difference__1 = (function (s1){
return s1;
});
var clojure$set$difference__2 = (function (s1,s2){
if((cljs.core.count(s1) < cljs.core.count(s2))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,item){
if(cljs.core.contains_QMARK_(s2,item)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,s1,s2);
}
});
var clojure$set$difference__3 = (function() { 
var G__24553__delegate = function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure$set$difference,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
};
var G__24553 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__24554__i = 0, G__24554__a = new Array(arguments.length -  2);
while (G__24554__i < G__24554__a.length) {G__24554__a[G__24554__i] = arguments[G__24554__i + 2]; ++G__24554__i;}
  sets = new cljs.core.IndexedSeq(G__24554__a,0);
} 
return G__24553__delegate.call(this,s1,s2,sets);};
G__24553.cljs$lang$maxFixedArity = 2;
G__24553.cljs$lang$applyTo = (function (arglist__24555){
var s1 = cljs.core.first(arglist__24555);
arglist__24555 = cljs.core.next(arglist__24555);
var s2 = cljs.core.first(arglist__24555);
var sets = cljs.core.rest(arglist__24555);
return G__24553__delegate(s1,s2,sets);
});
G__24553.cljs$core$IFn$_invoke$arity$variadic = G__24553__delegate;
return G__24553;
})()
;
clojure$set$difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return clojure$set$difference__1.call(this,s1);
case 2:
return clojure$set$difference__2.call(this,s1,s2);
default:
var G__24556 = null;
if (arguments.length > 2) {
var G__24557__i = 0, G__24557__a = new Array(arguments.length -  2);
while (G__24557__i < G__24557__a.length) {G__24557__a[G__24557__i] = arguments[G__24557__i + 2]; ++G__24557__i;}
G__24556 = new cljs.core.IndexedSeq(G__24557__a,0);
}
return clojure$set$difference__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__24556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$difference.cljs$lang$maxFixedArity = 2;
clojure$set$difference.cljs$lang$applyTo = clojure$set$difference__3.cljs$lang$applyTo;
clojure$set$difference.cljs$core$IFn$_invoke$arity$1 = clojure$set$difference__1;
clojure$set$difference.cljs$core$IFn$_invoke$arity$2 = clojure$set$difference__2;
clojure$set$difference.cljs$core$IFn$_invoke$arity$variadic = clojure$set$difference__3.cljs$core$IFn$_invoke$arity$variadic;
return clojure$set$difference;
})()
;
/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){
if(cljs.core.truth_((function (){var G__24559 = k;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__24559) : pred.call(null,G__24559));
})())){
return s;
} else {
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(s,k);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24560_SHARP_){
return cljs.core.select_keys(p1__24560_SHARP_,ks);
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__24563){
var vec__24564 = p__24563;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24564,(0),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24564,(1),null);
if(cljs.core.contains_QMARK_(map,old)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new$,cljs.core.get.cljs$core$IFn$_invoke$arity$2(map,old));
} else {
return m;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,map,cljs.core.keys(kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24565_SHARP_){
return clojure.set.rename_keys(p1__24565_SHARP_,kmap);
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 * set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,x){
var ik = cljs.core.select_keys(x,ks);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,ik,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__24568){
var vec__24569 = p__24568;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24569,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24569,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 * join. When passed an additional keymap, joins on the corresponding
 * keys.
 */
clojure.set.join = (function() {
var clojure$set$join = null;
var clojure$set$join__2 = (function (xrel,yrel){
if((cljs.core.seq(xrel)) && (cljs.core.seq(yrel))){
var ks = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs.core.first(xrel))),cljs.core.set(cljs.core.keys(cljs.core.first(yrel))));
var vec__24578 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24578,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24578,(1),null);
var idx = clojure.set.index(r,ks);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks,vec__24578,r,s,idx){
return (function (ret,x){
var found = (function (){var G__24579 = cljs.core.select_keys(x,ks);
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__24579) : idx.call(null,G__24579));
})();
if(cljs.core.truth_(found)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (found,ks,vec__24578,r,s,idx){
return (function (p1__24570_SHARP_,p2__24571_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24570_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__24571_SHARP_,x], 0)));
});})(found,ks,vec__24578,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__24578,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
var clojure$set$join__3 = (function (xrel,yrel,km){
var vec__24580 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert(km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24580,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24580,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24580,(2),null);
var idx = clojure.set.index(r,cljs.core.vals(k));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__24580,r,s,k,idx){
return (function (ret,x){
var found = (function (){var G__24581 = clojure.set.rename_keys(cljs.core.select_keys(x,cljs.core.keys(k)),k);
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__24581) : idx.call(null,G__24581));
})();
if(cljs.core.truth_(found)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (found,vec__24580,r,s,k,idx){
return (function (p1__24572_SHARP_,p2__24573_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24572_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__24573_SHARP_,x], 0)));
});})(found,vec__24580,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__24580,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});
clojure$set$join = function(xrel,yrel,km){
switch(arguments.length){
case 2:
return clojure$set$join__2.call(this,xrel,yrel);
case 3:
return clojure$set$join__3.call(this,xrel,yrel,km);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$join.cljs$core$IFn$_invoke$arity$2 = clojure$set$join__2;
clojure$set$join.cljs$core$IFn$_invoke$arity$3 = clojure$set$join__3;
return clojure$set$join;
})()
;
/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
return ((cljs.core.count(set1) <= cljs.core.count(set2))) && (cljs.core.every_QMARK_((function (p1__24582_SHARP_){
return cljs.core.contains_QMARK_(set2,p1__24582_SHARP_);
}),set1));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
return ((cljs.core.count(set1) >= cljs.core.count(set2))) && (cljs.core.every_QMARK_((function (p1__24583_SHARP_){
return cljs.core.contains_QMARK_(set1,p1__24583_SHARP_);
}),set2));
});
