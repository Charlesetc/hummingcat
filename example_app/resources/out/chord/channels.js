// Compiled by ClojureScript 0.0-3058 {}
goog.provide('chord.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async');
chord.channels.read_from_ws_BANG_ = (function chord$channels$read_from_ws_BANG_(ws,ch){
return ws.onmessage = (function (ev){
var message = ev.data;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_message,message], null));
});
});
chord.channels.write_to_ws_BANG_ = (function chord$channels$write_to_ws_BANG_(ws,ch){
var c__8161__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8161__auto__){
return (function (){
var f__8162__auto__ = (function (){var switch__8064__auto__ = ((function (c__8161__auto__){
return (function (state_12393){
var state_val_12394 = (state_12393[(1)]);
if((state_val_12394 === (7))){
var inst_12389 = (state_12393[(2)]);
var state_12393__$1 = state_12393;
var statearr_12395_12410 = state_12393__$1;
(statearr_12395_12410[(2)] = inst_12389);

(statearr_12395_12410[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_12394 === (6))){
var state_12393__$1 = state_12393;
var statearr_12396_12411 = state_12393__$1;
(statearr_12396_12411[(2)] = null);

(statearr_12396_12411[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_12394 === (5))){
var inst_12383 = (state_12393[(7)]);
var inst_12385 = ws.send(inst_12383);
var state_12393__$1 = (function (){var statearr_12397 = state_12393;
(statearr_12397[(8)] = inst_12385);

return statearr_12397;
})();
var statearr_12398_12412 = state_12393__$1;
(statearr_12398_12412[(2)] = null);

(statearr_12398_12412[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_12394 === (4))){
var inst_12383 = (state_12393[(7)]);
var inst_12383__$1 = (state_12393[(2)]);
var state_12393__$1 = (function (){var statearr_12399 = state_12393;
(statearr_12399[(7)] = inst_12383__$1);

return statearr_12399;
})();
if(cljs.core.truth_(inst_12383__$1)){
var statearr_12400_12413 = state_12393__$1;
(statearr_12400_12413[(1)] = (5));

} else {
var statearr_12401_12414 = state_12393__$1;
(statearr_12401_12414[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_12394 === (3))){
var inst_12391 = (state_12393[(2)]);
var state_12393__$1 = state_12393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12393__$1,inst_12391);
} else {
if((state_val_12394 === (2))){
var state_12393__$1 = state_12393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12393__$1,(4),ch);
} else {
if((state_val_12394 === (1))){
var state_12393__$1 = state_12393;
var statearr_12402_12415 = state_12393__$1;
(statearr_12402_12415[(2)] = null);

(statearr_12402_12415[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__8161__auto__))
;
return ((function (switch__8064__auto__,c__8161__auto__){
return (function() {
var chord$channels$write_to_ws_BANG__$_state_machine__8065__auto__ = null;
var chord$channels$write_to_ws_BANG__$_state_machine__8065__auto____0 = (function (){
var statearr_12406 = [null,null,null,null,null,null,null,null,null];
(statearr_12406[(0)] = chord$channels$write_to_ws_BANG__$_state_machine__8065__auto__);

(statearr_12406[(1)] = (1));

return statearr_12406;
});
var chord$channels$write_to_ws_BANG__$_state_machine__8065__auto____1 = (function (state_12393){
while(true){
var ret_value__8066__auto__ = (function (){try{while(true){
var result__8067__auto__ = switch__8064__auto__(state_12393);
if(cljs.core.keyword_identical_QMARK_(result__8067__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__8067__auto__;
}
break;
}
}catch (e12407){if((e12407 instanceof Object)){
var ex__8068__auto__ = e12407;
var statearr_12408_12416 = state_12393;
(statearr_12408_12416[(5)] = ex__8068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12393);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e12407;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8066__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__12417 = state_12393;
state_12393 = G__12417;
continue;
} else {
return ret_value__8066__auto__;
}
break;
}
});
chord$channels$write_to_ws_BANG__$_state_machine__8065__auto__ = function(state_12393){
switch(arguments.length){
case 0:
return chord$channels$write_to_ws_BANG__$_state_machine__8065__auto____0.call(this);
case 1:
return chord$channels$write_to_ws_BANG__$_state_machine__8065__auto____1.call(this,state_12393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$channels$write_to_ws_BANG__$_state_machine__8065__auto__.cljs$core$IFn$_invoke$arity$0 = chord$channels$write_to_ws_BANG__$_state_machine__8065__auto____0;
chord$channels$write_to_ws_BANG__$_state_machine__8065__auto__.cljs$core$IFn$_invoke$arity$1 = chord$channels$write_to_ws_BANG__$_state_machine__8065__auto____1;
return chord$channels$write_to_ws_BANG__$_state_machine__8065__auto__;
})()
;})(switch__8064__auto__,c__8161__auto__))
})();
var state__8163__auto__ = (function (){var statearr_12409 = (function (){return (f__8162__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8162__auto__.cljs$core$IFn$_invoke$arity$0() : f__8162__auto__.call(null));
})();
(statearr_12409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8161__auto__);

return statearr_12409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8163__auto__);
});})(c__8161__auto__))
);

return c__8161__auto__;
});
/**
 * @param {...*} var_args
 */
chord.channels.bidi_ch = (function() { 
var chord$channels$bidi_ch__delegate = function (read_ch,write_ch,p__12418){
var vec__12424 = p__12418;
var map__12425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12424,(0),null);
var map__12425__$1 = ((cljs.core.seq_QMARK_(map__12425))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12425):map__12425);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12425__$1,cljs.core.constant$keyword$_COLON_on_close);
if(typeof chord.channels.t12426 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.channels.t12426 = (function (on_close,map__12425,vec__12424,p__12418,write_ch,read_ch,bidi_ch,meta12427){
this.on_close = on_close;
this.map__12425 = map__12425;
this.vec__12424 = vec__12424;
this.p__12418 = p__12418;
this.write_ch = write_ch;
this.read_ch = read_ch;
this.bidi_ch = bidi_ch;
this.meta12427 = meta12427;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.channels.t12426.prototype.cljs$core$async$impl$protocols$Channel$ = true;

chord.channels.t12426.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__12424,map__12425,map__12425__$1,on_close){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.close_BANG_(self__.read_ch);

cljs.core.async.impl.protocols.close_BANG_(self__.write_ch);

if(cljs.core.truth_(self__.on_close)){
return (self__.on_close.cljs$core$IFn$_invoke$arity$0 ? self__.on_close.cljs$core$IFn$_invoke$arity$0() : self__.on_close.call(null));
} else {
return null;
}
});})(vec__12424,map__12425,map__12425__$1,on_close))
;

chord.channels.t12426.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

chord.channels.t12426.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__12424,map__12425,map__12425__$1,on_close){
return (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.write_ch,msg,handler);
});})(vec__12424,map__12425,map__12425__$1,on_close))
;

chord.channels.t12426.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

chord.channels.t12426.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__12424,map__12425,map__12425__$1,on_close){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.read_ch,handler);
});})(vec__12424,map__12425,map__12425__$1,on_close))
;

chord.channels.t12426.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__12424,map__12425,map__12425__$1,on_close){
return (function (_12428){
var self__ = this;
var _12428__$1 = this;
return self__.meta12427;
});})(vec__12424,map__12425,map__12425__$1,on_close))
;

chord.channels.t12426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__12424,map__12425,map__12425__$1,on_close){
return (function (_12428,meta12427__$1){
var self__ = this;
var _12428__$1 = this;
return (new chord.channels.t12426(self__.on_close,self__.map__12425,self__.vec__12424,self__.p__12418,self__.write_ch,self__.read_ch,self__.bidi_ch,meta12427__$1));
});})(vec__12424,map__12425,map__12425__$1,on_close))
;

chord.channels.t12426.cljs$lang$type = true;

chord.channels.t12426.cljs$lang$ctorStr = "chord.channels/t12426";

chord.channels.t12426.cljs$lang$ctorPrWriter = ((function (vec__12424,map__12425,map__12425__$1,on_close){
return (function (this__6370__auto__,writer__6371__auto__,opt__6372__auto__){
return cljs.core._write(writer__6371__auto__,"chord.channels/t12426");
});})(vec__12424,map__12425,map__12425__$1,on_close))
;

chord.channels.__GT_t12426 = ((function (vec__12424,map__12425,map__12425__$1,on_close){
return (function chord$channels$bidi_ch_$___GT_t12426(on_close__$1,map__12425__$2,vec__12424__$1,p__12418__$1,write_ch__$1,read_ch__$1,bidi_ch__$1,meta12427){
return (new chord.channels.t12426(on_close__$1,map__12425__$2,vec__12424__$1,p__12418__$1,write_ch__$1,read_ch__$1,bidi_ch__$1,meta12427));
});})(vec__12424,map__12425,map__12425__$1,on_close))
;

}

return (new chord.channels.t12426(on_close,map__12425__$1,vec__12424,p__12418,write_ch,read_ch,chord$channels$bidi_ch,cljs.core.PersistentArrayMap.EMPTY));
};
var chord$channels$bidi_ch = function (read_ch,write_ch,var_args){
var p__12418 = null;
if (arguments.length > 2) {
var G__12429__i = 0, G__12429__a = new Array(arguments.length -  2);
while (G__12429__i < G__12429__a.length) {G__12429__a[G__12429__i] = arguments[G__12429__i + 2]; ++G__12429__i;}
  p__12418 = new cljs.core.IndexedSeq(G__12429__a,0);
} 
return chord$channels$bidi_ch__delegate.call(this,read_ch,write_ch,p__12418);};
chord$channels$bidi_ch.cljs$lang$maxFixedArity = 2;
chord$channels$bidi_ch.cljs$lang$applyTo = (function (arglist__12430){
var read_ch = cljs.core.first(arglist__12430);
arglist__12430 = cljs.core.next(arglist__12430);
var write_ch = cljs.core.first(arglist__12430);
var p__12418 = cljs.core.rest(arglist__12430);
return chord$channels$bidi_ch__delegate(read_ch,write_ch,p__12418);
});
chord$channels$bidi_ch.cljs$core$IFn$_invoke$arity$variadic = chord$channels$bidi_ch__delegate;
return chord$channels$bidi_ch;
})()
;
