// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$_COLON_finished);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t28056 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t28056 = (function (f,fn_handler,meta28057){
this.f = f;
this.fn_handler = fn_handler;
this.meta28057 = meta28057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t28056.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t28056.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t28056.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t28056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28058){
var self__ = this;
var _28058__$1 = this;
return self__.meta28057;
});

cljs.core.async.impl.ioc_helpers.t28056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28058,meta28057__$1){
var self__ = this;
var _28058__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t28056(self__.f,self__.fn_handler,meta28057__$1));
});

cljs.core.async.impl.ioc_helpers.t28056.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t28056.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t28056";

cljs.core.async.impl.ioc_helpers.t28056.cljs$lang$ctorPrWriter = (function (this__16270__auto__,writer__16271__auto__,opt__16272__auto__){
return cljs.core._write(writer__16271__auto__,"cljs.core.async.impl.ioc-helpers/t28056");
});

cljs.core.async.impl.ioc_helpers.__GT_t28056 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t28056(f__$1,fn_handler__$1,meta28057){
return (new cljs.core.async.impl.ioc_helpers.t28056(f__$1,fn_handler__$1,meta28057));
});

}

return (new cljs.core.async.impl.ioc_helpers.t28056(f,cljs$core$async$impl$ioc_helpers$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e28060){if((e28060 instanceof Object)){
var ex = e28060;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e28060;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_28064_28067 = state;
(statearr_28064_28067[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_28064_28067[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_28065_28068 = state;
(statearr_28065_28068[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__28066 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28066) : cljs.core.deref.call(null,G__28066));
})());

(statearr_28065_28068[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_28072_28075 = state;
(statearr_28072_28075[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_28072_28075[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_28073_28076 = state;
(statearr_28073_28076[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__28074 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28074) : cljs.core.deref.call(null,G__28074));
})());

(statearr_28073_28076[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16286__auto__,k__16287__auto__){
var self__ = this;
var this__16286__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__16286__auto____$1,k__16287__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16288__auto__,k28078,else__16289__auto__){
var self__ = this;
var this__16288__auto____$1 = this;
var G__28080 = (((k28078 instanceof cljs.core.Keyword))?k28078.fqn:null);
switch (G__28080) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28078,else__16289__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16300__auto__,writer__16301__auto__,opts__16302__auto__){
var self__ = this;
var this__16300__auto____$1 = this;
var pr_pair__16303__auto__ = ((function (this__16300__auto____$1){
return (function (keyval__16304__auto__){
return cljs.core.pr_sequential_writer(writer__16301__auto__,cljs.core.pr_writer,""," ","",opts__16302__auto__,keyval__16304__auto__);
});})(this__16300__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__16301__auto__,pr_pair__16303__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__16302__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_catch_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_catch_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_finally_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_continue_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16284__auto__){
var self__ = this;
var this__16284__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16280__auto__){
var self__ = this;
var this__16280__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16290__auto__){
var self__ = this;
var this__16290__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16281__auto__){
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

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16282__auto__,other__16283__auto__){
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

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16295__auto__,k__16296__auto__){
var self__ = this;
var this__16295__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$_COLON_finally_block,null,cljs.core.constant$keyword$_COLON_catch_block,null,cljs.core.constant$keyword$_COLON_catch_exception,null,cljs.core.constant$keyword$_COLON_prev,null,cljs.core.constant$keyword$_COLON_continue_block,null], null), null),k__16296__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__16295__auto____$1),self__.__meta),k__16296__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__16296__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16293__auto__,k__16294__auto__,G__28077){
var self__ = this;
var this__16293__auto____$1 = this;
var pred__28081 = cljs.core.keyword_identical_QMARK_;
var expr__28082 = k__16294__auto__;
if(cljs.core.truth_((function (){var G__28084 = cljs.core.constant$keyword$_COLON_catch_block;
var G__28085 = expr__28082;
return (pred__28081.cljs$core$IFn$_invoke$arity$2 ? pred__28081.cljs$core$IFn$_invoke$arity$2(G__28084,G__28085) : pred__28081.call(null,G__28084,G__28085));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__28077,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28086 = cljs.core.constant$keyword$_COLON_catch_exception;
var G__28087 = expr__28082;
return (pred__28081.cljs$core$IFn$_invoke$arity$2 ? pred__28081.cljs$core$IFn$_invoke$arity$2(G__28086,G__28087) : pred__28081.call(null,G__28086,G__28087));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__28077,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28088 = cljs.core.constant$keyword$_COLON_finally_block;
var G__28089 = expr__28082;
return (pred__28081.cljs$core$IFn$_invoke$arity$2 ? pred__28081.cljs$core$IFn$_invoke$arity$2(G__28088,G__28089) : pred__28081.call(null,G__28088,G__28089));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__28077,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28090 = cljs.core.constant$keyword$_COLON_continue_block;
var G__28091 = expr__28082;
return (pred__28081.cljs$core$IFn$_invoke$arity$2 ? pred__28081.cljs$core$IFn$_invoke$arity$2(G__28090,G__28091) : pred__28081.call(null,G__28090,G__28091));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__28077,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28092 = cljs.core.constant$keyword$_COLON_prev;
var G__28093 = expr__28082;
return (pred__28081.cljs$core$IFn$_invoke$arity$2 ? pred__28081.cljs$core$IFn$_invoke$arity$2(G__28092,G__28093) : pred__28081.call(null,G__28092,G__28093));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__28077,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__16294__auto__,G__28077),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16298__auto__){
var self__ = this;
var this__16298__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_catch_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_catch_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_finally_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_continue_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16285__auto__,G__28077){
var self__ = this;
var this__16285__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__28077,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16291__auto__,entry__16292__auto__){
var self__ = this;
var this__16291__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__16292__auto__)){
return cljs.core._assoc(this__16291__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__16292__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__16292__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__16291__auto____$1,entry__16292__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__16320__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__16320__auto__,writer__16321__auto__){
return cljs.core._write(writer__16321__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$map__GT_ExceptionFrame(G__28079){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$_COLON_catch_block.cljs$core$IFn$_invoke$arity$1(G__28079),cljs.core.constant$keyword$_COLON_catch_exception.cljs$core$IFn$_invoke$arity$1(G__28079),cljs.core.constant$keyword$_COLON_finally_block.cljs$core$IFn$_invoke$arity$1(G__28079),cljs.core.constant$keyword$_COLON_continue_block.cljs$core$IFn$_invoke$arity$1(G__28079),cljs.core.constant$keyword$_COLON_prev.cljs$core$IFn$_invoke$arity$1(G__28079),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28079,cljs.core.constant$keyword$_COLON_catch_block,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_catch_exception,cljs.core.constant$keyword$_COLON_finally_block,cljs.core.constant$keyword$_COLON_continue_block,cljs.core.constant$keyword$_COLON_prev], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function cljs$core$async$impl$ioc_helpers$add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_28096 = state;
(statearr_28096[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_28096;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function cljs$core$async$impl$ioc_helpers$process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$_COLON_catch_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$_COLON_catch_exception.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__15671__auto__ = exception;
if(cljs.core.truth_(and__15671__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__15671__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__15671__auto__ = exception;
if(cljs.core.truth_(and__15671__auto__)){
var and__15671__auto____$1 = catch_block;
if(cljs.core.truth_(and__15671__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__15671__auto____$1;
}
} else {
return and__15671__auto__;
}
})())){
var statearr_28102 = state;
(statearr_28102[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_28102[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_28102[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_28102[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$_COLON_catch_block,null,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_catch_exception,null], 0)));

return statearr_28102;
} else {
if(cljs.core.truth_((function (){var and__15671__auto__ = exception;
if(cljs.core.truth_(and__15671__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$_COLON_finally_block.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__15671__auto__;
}
})())){
var statearr_28103_28107 = state;
(statearr_28103_28107[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$_COLON_prev.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__28108 = state;
state = G__28108;
continue;
} else {
if(cljs.core.truth_((function (){var and__15671__auto__ = exception;
if(cljs.core.truth_(and__15671__auto__)){
var and__15671__auto____$1 = cljs.core.not(catch_block);
if(and__15671__auto____$1){
return cljs.core.constant$keyword$_COLON_finally_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__15671__auto____$1;
}
} else {
return and__15671__auto__;
}
})())){
var statearr_28104 = state;
(statearr_28104[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$_COLON_finally_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_28104[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$_COLON_finally_block,null));

return statearr_28104;
} else {
if(cljs.core.truth_((function (){var and__15671__auto__ = cljs.core.not(exception);
if(and__15671__auto__){
return cljs.core.constant$keyword$_COLON_finally_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__15671__auto__;
}
})())){
var statearr_28105 = state;
(statearr_28105[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$_COLON_finally_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_28105[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$_COLON_finally_block,null));

return statearr_28105;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$_COLON_finally_block.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_28106 = state;
(statearr_28106[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$_COLON_continue_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_28106[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$_COLON_prev.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_28106;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});
