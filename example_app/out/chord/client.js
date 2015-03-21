// Compiled by ClojureScript 0.0-3058 {}
goog.provide('chord.client');
goog.require('cljs.core');
goog.require('chord.format');
goog.require('chord.channels');
goog.require('cljs.core.async');
/**
 * @param {...*} var_args
 */
chord.client.on_close = (function() { 
var chord$client$on_close__delegate = function (ws,read_ch,write_ch,p__11622){
var vec__11695 = p__11622;
var err_meta_channel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11695,(0),null);
return ws.onclose = ((function (vec__11695,err_meta_channel){
return (function (ev){
var c__8161__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8161__auto__,vec__11695,err_meta_channel){
return (function (){
var f__8162__auto__ = (function (){var switch__8064__auto__ = ((function (c__8161__auto__,vec__11695,err_meta_channel){
return (function (state_11734){
var state_val_11735 = (state_11734[(1)]);
if((state_val_11735 === (7))){
var inst_11730 = (state_11734[(2)]);
var inst_11731 = cljs.core.async.close_BANG_(read_ch);
var inst_11732 = cljs.core.async.close_BANG_(write_ch);
var state_11734__$1 = (function (){var statearr_11736 = state_11734;
(statearr_11736[(7)] = inst_11730);

(statearr_11736[(8)] = inst_11731);

return statearr_11736;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11734__$1,inst_11732);
} else {
if((state_val_11735 === (1))){
var inst_11696 = (state_11734[(9)]);
var inst_11696__$1 = ws.error_seen;
var state_11734__$1 = (function (){var statearr_11737 = state_11734;
(statearr_11737[(9)] = inst_11696__$1);

return statearr_11737;
})();
if(cljs.core.truth_(inst_11696__$1)){
var statearr_11738_11767 = state_11734__$1;
(statearr_11738_11767[(1)] = (2));

} else {
var statearr_11739_11768 = state_11734__$1;
(statearr_11739_11768[(1)] = (3));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11735 === (4))){
var inst_11702 = (state_11734[(2)]);
var state_11734__$1 = state_11734;
if(cljs.core.truth_(inst_11702)){
var statearr_11740_11769 = state_11734__$1;
(statearr_11740_11769[(1)] = (5));

} else {
var statearr_11741_11770 = state_11734__$1;
(statearr_11741_11770[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11735 === (6))){
var state_11734__$1 = state_11734;
var statearr_11742_11771 = state_11734__$1;
(statearr_11742_11771[(2)] = null);

(statearr_11742_11771[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11735 === (3))){
var inst_11699 = ev.wasClean;
var inst_11700 = cljs.core.not(inst_11699);
var state_11734__$1 = state_11734;
var statearr_11743_11772 = state_11734__$1;
(statearr_11743_11772[(2)] = inst_11700);

(statearr_11743_11772[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11735 === (12))){
var inst_11727 = (state_11734[(2)]);
var state_11734__$1 = state_11734;
var statearr_11744_11773 = state_11734__$1;
(statearr_11744_11773[(2)] = inst_11727);

(statearr_11744_11773[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11735 === (2))){
var inst_11696 = (state_11734[(9)]);
var state_11734__$1 = state_11734;
var statearr_11745_11774 = state_11734__$1;
(statearr_11745_11774[(2)] = inst_11696);

(statearr_11745_11774[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11735 === (11))){
var inst_11722 = (state_11734[(2)]);
var state_11734__$1 = state_11734;
var statearr_11746_11775 = state_11734__$1;
(statearr_11746_11775[(2)] = inst_11722);

(statearr_11746_11775[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11735 === (9))){
var state_11734__$1 = state_11734;
var statearr_11747_11776 = state_11734__$1;
(statearr_11747_11776[(2)] = null);

(statearr_11747_11776[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11735 === (5))){
var inst_11704 = [cljs.core.constant$keyword$_COLON_error,cljs.core.constant$keyword$_COLON_code,cljs.core.constant$keyword$_COLON_wasClean];
var inst_11705 = ev.reason;
var inst_11706 = ev.code;
var inst_11707 = ev.wasClean;
var inst_11708 = [inst_11705,inst_11706,inst_11707];
var inst_11709 = cljs.core.PersistentHashMap.fromArrays(inst_11704,inst_11708);
var state_11734__$1 = (function (){var statearr_11748 = state_11734;
(statearr_11748[(10)] = inst_11709);

return statearr_11748;
})();
if(cljs.core.truth_(err_meta_channel)){
var statearr_11749_11777 = state_11734__$1;
(statearr_11749_11777[(1)] = (8));

} else {
var statearr_11750_11778 = state_11734__$1;
(statearr_11750_11778[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11735 === (10))){
var inst_11709 = (state_11734[(10)]);
var inst_11725 = (state_11734[(2)]);
var state_11734__$1 = (function (){var statearr_11751 = state_11734;
(statearr_11751[(11)] = inst_11725);

return statearr_11751;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11734__$1,(12),read_ch,inst_11709);
} else {
if((state_val_11735 === (8))){
var inst_11709 = (state_11734[(10)]);
var inst_11696 = (state_11734[(9)]);
var inst_11714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_11715 = (function (){var c__8161__auto____$1 = inst_11714;
var error_desc = inst_11709;
var error_seen_QMARK_ = inst_11696;
return ((function (c__8161__auto____$1,error_desc,error_seen_QMARK_,inst_11709,inst_11696,inst_11714,state_val_11735,c__8161__auto__,vec__11695,err_meta_channel){
return (function (){
var f__8162__auto__ = (function (){var switch__8064__auto__ = ((function (c__8161__auto____$1,error_desc,error_seen_QMARK_,inst_11709,inst_11696,inst_11714,state_val_11735,c__8161__auto__,vec__11695,err_meta_channel){
return (function (state_11712){
var state_val_11713 = (state_11712[(1)]);
if((state_val_11713 === (1))){
var state_11712__$1 = state_11712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11712__$1,error_desc);
} else {
return null;
}
});})(c__8161__auto____$1,error_desc,error_seen_QMARK_,inst_11709,inst_11696,inst_11714,state_val_11735,c__8161__auto__,vec__11695,err_meta_channel))
;
return ((function (switch__8064__auto__,c__8161__auto____$1,error_desc,error_seen_QMARK_,inst_11709,inst_11696,inst_11714,state_val_11735,c__8161__auto__,vec__11695,err_meta_channel){
return (function() {
var chord$client$on_close_$_state_machine__8065__auto__ = null;
var chord$client$on_close_$_state_machine__8065__auto____0 = (function (){
var statearr_11755 = [null,null,null,null,null,null,null];
(statearr_11755[(0)] = chord$client$on_close_$_state_machine__8065__auto__);

(statearr_11755[(1)] = (1));

return statearr_11755;
});
var chord$client$on_close_$_state_machine__8065__auto____1 = (function (state_11712){
while(true){
var ret_value__8066__auto__ = (function (){try{while(true){
var result__8067__auto__ = switch__8064__auto__(state_11712);
if(cljs.core.keyword_identical_QMARK_(result__8067__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__8067__auto__;
}
break;
}
}catch (e11756){if((e11756 instanceof Object)){
var ex__8068__auto__ = e11756;
var statearr_11757_11779 = state_11712;
(statearr_11757_11779[(5)] = ex__8068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11712);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e11756;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8066__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__11780 = state_11712;
state_11712 = G__11780;
continue;
} else {
return ret_value__8066__auto__;
}
break;
}
});
chord$client$on_close_$_state_machine__8065__auto__ = function(state_11712){
switch(arguments.length){
case 0:
return chord$client$on_close_$_state_machine__8065__auto____0.call(this);
case 1:
return chord$client$on_close_$_state_machine__8065__auto____1.call(this,state_11712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$on_close_$_state_machine__8065__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$on_close_$_state_machine__8065__auto____0;
chord$client$on_close_$_state_machine__8065__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$on_close_$_state_machine__8065__auto____1;
return chord$client$on_close_$_state_machine__8065__auto__;
})()
;})(switch__8064__auto__,c__8161__auto____$1,error_desc,error_seen_QMARK_,inst_11709,inst_11696,inst_11714,state_val_11735,c__8161__auto__,vec__11695,err_meta_channel))
})();
var state__8163__auto__ = (function (){var statearr_11758 = (function (){return (f__8162__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8162__auto__.cljs$core$IFn$_invoke$arity$0() : f__8162__auto__.call(null));
})();
(statearr_11758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8161__auto____$1);

return statearr_11758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8163__auto__);
});
;})(c__8161__auto____$1,error_desc,error_seen_QMARK_,inst_11709,inst_11696,inst_11714,state_val_11735,c__8161__auto__,vec__11695,err_meta_channel))
})();
var inst_11716 = cljs.core.async.impl.dispatch.run(inst_11715);
var inst_11718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_11719 = cljs.core.async.close_BANG_(inst_11718);
var inst_11720 = chord.channels.bidi_ch(inst_11714,inst_11718);
var state_11734__$1 = (function (){var statearr_11759 = state_11734;
(statearr_11759[(12)] = inst_11719);

(statearr_11759[(13)] = inst_11716);

return statearr_11759;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11734__$1,(11),err_meta_channel,inst_11720);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8161__auto__,vec__11695,err_meta_channel))
;
return ((function (switch__8064__auto__,c__8161__auto__,vec__11695,err_meta_channel){
return (function() {
var chord$client$on_close_$_state_machine__8065__auto__ = null;
var chord$client$on_close_$_state_machine__8065__auto____0 = (function (){
var statearr_11763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11763[(0)] = chord$client$on_close_$_state_machine__8065__auto__);

(statearr_11763[(1)] = (1));

return statearr_11763;
});
var chord$client$on_close_$_state_machine__8065__auto____1 = (function (state_11734){
while(true){
var ret_value__8066__auto__ = (function (){try{while(true){
var result__8067__auto__ = switch__8064__auto__(state_11734);
if(cljs.core.keyword_identical_QMARK_(result__8067__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__8067__auto__;
}
break;
}
}catch (e11764){if((e11764 instanceof Object)){
var ex__8068__auto__ = e11764;
var statearr_11765_11781 = state_11734;
(statearr_11765_11781[(5)] = ex__8068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11734);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e11764;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8066__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__11782 = state_11734;
state_11734 = G__11782;
continue;
} else {
return ret_value__8066__auto__;
}
break;
}
});
chord$client$on_close_$_state_machine__8065__auto__ = function(state_11734){
switch(arguments.length){
case 0:
return chord$client$on_close_$_state_machine__8065__auto____0.call(this);
case 1:
return chord$client$on_close_$_state_machine__8065__auto____1.call(this,state_11734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$on_close_$_state_machine__8065__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$on_close_$_state_machine__8065__auto____0;
chord$client$on_close_$_state_machine__8065__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$on_close_$_state_machine__8065__auto____1;
return chord$client$on_close_$_state_machine__8065__auto__;
})()
;})(switch__8064__auto__,c__8161__auto__,vec__11695,err_meta_channel))
})();
var state__8163__auto__ = (function (){var statearr_11766 = (function (){return (f__8162__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8162__auto__.cljs$core$IFn$_invoke$arity$0() : f__8162__auto__.call(null));
})();
(statearr_11766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8161__auto__);

return statearr_11766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8163__auto__);
});})(c__8161__auto__,vec__11695,err_meta_channel))
);

return c__8161__auto__;
});})(vec__11695,err_meta_channel))
;
};
var chord$client$on_close = function (ws,read_ch,write_ch,var_args){
var p__11622 = null;
if (arguments.length > 3) {
var G__11783__i = 0, G__11783__a = new Array(arguments.length -  3);
while (G__11783__i < G__11783__a.length) {G__11783__a[G__11783__i] = arguments[G__11783__i + 3]; ++G__11783__i;}
  p__11622 = new cljs.core.IndexedSeq(G__11783__a,0);
} 
return chord$client$on_close__delegate.call(this,ws,read_ch,write_ch,p__11622);};
chord$client$on_close.cljs$lang$maxFixedArity = 3;
chord$client$on_close.cljs$lang$applyTo = (function (arglist__11784){
var ws = cljs.core.first(arglist__11784);
arglist__11784 = cljs.core.next(arglist__11784);
var read_ch = cljs.core.first(arglist__11784);
arglist__11784 = cljs.core.next(arglist__11784);
var write_ch = cljs.core.first(arglist__11784);
var p__11622 = cljs.core.rest(arglist__11784);
return chord$client$on_close__delegate(ws,read_ch,write_ch,p__11622);
});
chord$client$on_close.cljs$core$IFn$_invoke$arity$variadic = chord$client$on_close__delegate;
return chord$client$on_close;
})()
;
chord.client.make_open_ch = (function chord$client$make_open_ch(ws,read_ch,write_ch,v){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
chord.client.on_close.cljs$core$IFn$_invoke$arity$variadic(ws,read_ch,write_ch,cljs.core.array_seq([ch], 0));

ws.onopen = ((function (ch){
return (function (){
var c__8161__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8161__auto__,ch){
return (function (){
var f__8162__auto__ = (function (){var switch__8064__auto__ = ((function (c__8161__auto__,ch){
return (function (state_11803){
var state_val_11804 = (state_11803[(1)]);
if((state_val_11804 === (2))){
var inst_11800 = (state_11803[(2)]);
var inst_11801 = cljs.core.async.close_BANG_(ch);
var state_11803__$1 = (function (){var statearr_11805 = state_11803;
(statearr_11805[(7)] = inst_11800);

return statearr_11805;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11803__$1,inst_11801);
} else {
if((state_val_11804 === (1))){
var state_11803__$1 = state_11803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11803__$1,(2),ch,v);
} else {
return null;
}
}
});})(c__8161__auto__,ch))
;
return ((function (switch__8064__auto__,c__8161__auto__,ch){
return (function() {
var chord$client$make_open_ch_$_state_machine__8065__auto__ = null;
var chord$client$make_open_ch_$_state_machine__8065__auto____0 = (function (){
var statearr_11809 = [null,null,null,null,null,null,null,null];
(statearr_11809[(0)] = chord$client$make_open_ch_$_state_machine__8065__auto__);

(statearr_11809[(1)] = (1));

return statearr_11809;
});
var chord$client$make_open_ch_$_state_machine__8065__auto____1 = (function (state_11803){
while(true){
var ret_value__8066__auto__ = (function (){try{while(true){
var result__8067__auto__ = switch__8064__auto__(state_11803);
if(cljs.core.keyword_identical_QMARK_(result__8067__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__8067__auto__;
}
break;
}
}catch (e11810){if((e11810 instanceof Object)){
var ex__8068__auto__ = e11810;
var statearr_11811_11813 = state_11803;
(statearr_11811_11813[(5)] = ex__8068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11803);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e11810;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8066__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__11814 = state_11803;
state_11803 = G__11814;
continue;
} else {
return ret_value__8066__auto__;
}
break;
}
});
chord$client$make_open_ch_$_state_machine__8065__auto__ = function(state_11803){
switch(arguments.length){
case 0:
return chord$client$make_open_ch_$_state_machine__8065__auto____0.call(this);
case 1:
return chord$client$make_open_ch_$_state_machine__8065__auto____1.call(this,state_11803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$make_open_ch_$_state_machine__8065__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$make_open_ch_$_state_machine__8065__auto____0;
chord$client$make_open_ch_$_state_machine__8065__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$make_open_ch_$_state_machine__8065__auto____1;
return chord$client$make_open_ch_$_state_machine__8065__auto__;
})()
;})(switch__8064__auto__,c__8161__auto__,ch))
})();
var state__8163__auto__ = (function (){var statearr_11812 = (function (){return (f__8162__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8162__auto__.cljs$core$IFn$_invoke$arity$0() : f__8162__auto__.call(null));
})();
(statearr_11812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8161__auto__);

return statearr_11812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8163__auto__);
});})(c__8161__auto__,ch))
);

return c__8161__auto__;
});})(ch))
;

return ch;
});
chord.client.close_event__GT_maybe_error = (function chord$client$close_event__GT_maybe_error(ev){
if(cljs.core.truth_(ev.wasClean)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_reason,ev.reason,cljs.core.constant$keyword$_COLON_code,ev.code], null);
}
});
/**
 * Creates websockets connection and returns a 2-sided channel when the websocket is opened.
 * Arguments:
 * ws-url           - (required) link to websocket service
 * opts             - (optional) map to configure reading/writing channels
 * :read-ch       - (optional) (possibly buffered) channel to use for reading the websocket
 * :write-ch      - (optional) (possibly buffered) channel to use for writing to the websocket
 * :format        - (optional) data format to use on the channel, (at the moment)
 * either :edn (default), :json, :json-kw or :str.
 * 
 * Usage:
 * (:require [cljs.core.async :as a])
 * 
 * 
 * (a/<! (ws-ch "ws://127.0.0.1:6437"))
 * 
 * (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))}))
 * 
 * (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))
 * :write-ch (a/chan (a/dropping-buffer 10))}))
 * @param {...*} var_args
 */
chord.client.ws_ch = (function() { 
var chord$client$ws_ch__delegate = function (ws_url,p__11817){
var vec__11917 = p__11817;
var map__11918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11917,(0),null);
var map__11918__$1 = ((cljs.core.seq_QMARK_(map__11918))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11918):map__11918);
var opts = map__11918__$1;
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11918__$1,cljs.core.constant$keyword$_COLON_format);
var write_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11918__$1,cljs.core.constant$keyword$_COLON_write_ch);
var read_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11918__$1,cljs.core.constant$keyword$_COLON_read_ch);
var web_socket = (new WebSocket(ws_url));
var map__11919 = chord.format.wrap_format(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_read_ch,(function (){var or__5783__auto__ = read_ch;
if(cljs.core.truth_(or__5783__auto__)){
return or__5783__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})(),cljs.core.constant$keyword$_COLON_write_ch,(function (){var or__5783__auto__ = write_ch;
if(cljs.core.truth_(or__5783__auto__)){
return or__5783__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})()], null),opts);
var map__11919__$1 = ((cljs.core.seq_QMARK_(map__11919))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11919):map__11919);
var write_ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11919__$1,cljs.core.constant$keyword$_COLON_write_ch);
var read_ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11919__$1,cljs.core.constant$keyword$_COLON_read_ch);
var open_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var close_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
web_socket.binaryType = "arraybuffer";

chord.channels.read_from_ws_BANG_(web_socket,read_ch__$1);

chord.channels.write_to_ws_BANG_(web_socket,write_ch__$1);

web_socket.onopen = ((function (web_socket,map__11919,map__11919__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11917,map__11918,map__11918__$1,opts,format,write_ch,read_ch){
return (function (p1__11815_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(open_ch,p1__11815_SHARP_);
});})(web_socket,map__11919,map__11919__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11917,map__11918,map__11918__$1,opts,format,write_ch,read_ch))
;

web_socket.onclose = ((function (web_socket,map__11919,map__11919__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11917,map__11918,map__11918__$1,opts,format,write_ch,read_ch){
return (function (p1__11816_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(close_ch,p1__11816_SHARP_);
});})(web_socket,map__11919,map__11919__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11917,map__11918,map__11918__$1,opts,format,write_ch,read_ch))
;

var ws_chan = chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic(read_ch__$1,write_ch__$1,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_on_close,((function (web_socket,map__11919,map__11919__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11917,map__11918,map__11918__$1,opts,format,write_ch,read_ch){
return (function (){
return web_socket.close();
});})(web_socket,map__11919,map__11919__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11917,map__11918,map__11918__$1,opts,format,write_ch,read_ch))
], null)], 0));
var initial_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__8161__auto___12016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8161__auto___12016,ws_chan,initial_ch,web_socket,map__11919,map__11919__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11917,map__11918,map__11918__$1,opts,format,write_ch,read_ch){
return (function (){
var f__8162__auto__ = (function (){var switch__8064__auto__ = ((function (c__8161__auto___12016,ws_chan,initial_ch,web_socket,map__11919,map__11919__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11917,map__11918,map__11918__$1,opts,format,write_ch,read_ch){
return (function (state_11979){
var state_val_11980 = (state_11979[(1)]);
if((state_val_11980 === (7))){
var inst_11975 = (state_11979[(2)]);
var state_11979__$1 = state_11979;
var statearr_11981_12017 = state_11979__$1;
(statearr_11981_12017[(2)] = inst_11975);

(statearr_11981_12017[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11980 === (20))){
var state_11979__$1 = state_11979;
var statearr_11982_12018 = state_11979__$1;
(statearr_11982_12018[(2)] = null);

(statearr_11982_12018[(1)] = (21));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11980 === (1))){
var inst_11920 = false;
var state_11979__$1 = (function (){var statearr_11983 = state_11979;
(statearr_11983[(7)] = inst_11920);

return statearr_11983;
})();
var statearr_11984_12019 = state_11979__$1;
(statearr_11984_12019[(2)] = null);

(statearr_11984_12019[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11980 === (4))){
var inst_11933 = (state_11979[(8)]);
var inst_11931 = (state_11979[(9)]);
var inst_11931__$1 = (state_11979[(2)]);
var inst_11932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11931__$1,(0),null);
var inst_11933__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11931__$1,(1),null);
var inst_11934 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11933__$1,open_ch);
var state_11979__$1 = (function (){var statearr_11985 = state_11979;
(statearr_11985[(10)] = inst_11932);

(statearr_11985[(8)] = inst_11933__$1);

(statearr_11985[(9)] = inst_11931__$1);

return statearr_11985;
})();
if(inst_11934){
var statearr_11986_12020 = state_11979__$1;
(statearr_11986_12020[(1)] = (5));

} else {
var statearr_11987_12021 = state_11979__$1;
(statearr_11987_12021[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11980 === (15))){
var inst_11960 = (state_11979[(2)]);
var state_11979__$1 = state_11979;
var statearr_11988_12022 = state_11979__$1;
(statearr_11988_12022[(2)] = inst_11960);

(statearr_11988_12022[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11980 === (21))){
var inst_11971 = (state_11979[(2)]);
var state_11979__$1 = state_11979;
var statearr_11989_12023 = state_11979__$1;
(statearr_11989_12023[(2)] = inst_11971);

(statearr_11989_12023[(1)] = (11));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11980 === (13))){
var state_11979__$1 = state_11979;
var statearr_11990_12024 = state_11979__$1;
(statearr_11990_12024[(2)] = null);

(statearr_11990_12024[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11980 === (6))){
var inst_11933 = (state_11979[(8)]);
var inst_11946 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11933,close_ch);
var state_11979__$1 = state_11979;
if(inst_11946){
var statearr_11991_12025 = state_11979__$1;
(statearr_11991_12025[(1)] = (9));

} else {
var statearr_11992_12026 = state_11979__$1;
(statearr_11992_12026[(1)] = (10));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11980 === (17))){
var state_11979__$1 = state_11979;
var statearr_11993_12027 = state_11979__$1;
(statearr_11993_12027[(2)] = initial_ch);

(statearr_11993_12027[(1)] = (18));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11980 === (3))){
var inst_11977 = (state_11979[(2)]);
var state_11979__$1 = state_11979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11979__$1,inst_11977);
} else {
if((state_val_11980 === (12))){
var inst_11920 = (state_11979[(7)]);
var state_11979__$1 = state_11979;
if(cljs.core.truth_(inst_11920)){
var statearr_11994_12028 = state_11979__$1;
(statearr_11994_12028[(1)] = (16));

} else {
var statearr_11995_12029 = state_11979__$1;
(statearr_11995_12029[(1)] = (17));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11980 === (2))){
var inst_11927 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11928 = [open_ch,close_ch];
var inst_11929 = (new cljs.core.PersistentVector(null,2,(5),inst_11927,inst_11928,null));
var state_11979__$1 = state_11979;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_11979__$1,(4),inst_11929);
} else {
if((state_val_11980 === (19))){
var inst_11932 = (state_11979[(10)]);
var state_11979__$1 = state_11979;
var statearr_11996_12030 = state_11979__$1;
(statearr_11996_12030[(2)] = inst_11932);

(statearr_11996_12030[(1)] = (21));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11980 === (11))){
var inst_11973 = (state_11979[(2)]);
var state_11979__$1 = state_11979;
var statearr_11997_12031 = state_11979__$1;
(statearr_11997_12031[(2)] = inst_11973);

(statearr_11997_12031[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11980 === (9))){
var inst_11950 = (state_11979[(11)]);
var inst_11931 = (state_11979[(9)]);
var inst_11949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11931,(0),null);
var inst_11950__$1 = chord.client.close_event__GT_maybe_error(inst_11949);
var state_11979__$1 = (function (){var statearr_11998 = state_11979;
(statearr_11998[(11)] = inst_11950__$1);

return statearr_11998;
})();
if(cljs.core.truth_(inst_11950__$1)){
var statearr_11999_12032 = state_11979__$1;
(statearr_11999_12032[(1)] = (12));

} else {
var statearr_12000_12033 = state_11979__$1;
(statearr_12000_12033[(1)] = (13));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11980 === (5))){
var inst_11931 = (state_11979[(9)]);
var inst_11937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11931,(0),null);
var inst_11938 = [cljs.core.constant$keyword$_COLON_ws_channel];
var inst_11939 = [ws_chan];
var inst_11940 = cljs.core.PersistentHashMap.fromArrays(inst_11938,inst_11939);
var state_11979__$1 = (function (){var statearr_12001 = state_11979;
(statearr_12001[(12)] = inst_11937);

return statearr_12001;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11979__$1,(8),initial_ch,inst_11940);
} else {
if((state_val_11980 === (14))){
var inst_11963 = (state_11979[(2)]);
var inst_11964 = cljs.core.async.close_BANG_(ws_chan);
var inst_11965 = cljs.core.async.close_BANG_(initial_ch);
var state_11979__$1 = (function (){var statearr_12002 = state_11979;
(statearr_12002[(13)] = inst_11964);

(statearr_12002[(14)] = inst_11963);

return statearr_12002;
})();
var statearr_12003_12034 = state_11979__$1;
(statearr_12003_12034[(2)] = inst_11965);

(statearr_12003_12034[(1)] = (11));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11980 === (16))){
var state_11979__$1 = state_11979;
var statearr_12004_12035 = state_11979__$1;
(statearr_12004_12035[(2)] = read_ch__$1);

(statearr_12004_12035[(1)] = (18));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11980 === (10))){
var inst_11933 = (state_11979[(8)]);
var inst_11967 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11933,cljs.core.constant$keyword$_COLON_default);
var state_11979__$1 = state_11979;
if(inst_11967){
var statearr_12005_12036 = state_11979__$1;
(statearr_12005_12036[(1)] = (19));

} else {
var statearr_12006_12037 = state_11979__$1;
(statearr_12006_12037[(1)] = (20));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11980 === (18))){
var inst_11950 = (state_11979[(11)]);
var inst_11955 = (state_11979[(2)]);
var inst_11956 = [cljs.core.constant$keyword$_COLON_error];
var inst_11957 = [inst_11950];
var inst_11958 = cljs.core.PersistentHashMap.fromArrays(inst_11956,inst_11957);
var state_11979__$1 = state_11979;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11979__$1,(15),inst_11955,inst_11958);
} else {
if((state_val_11980 === (8))){
var inst_11942 = (state_11979[(2)]);
var inst_11943 = cljs.core.async.close_BANG_(initial_ch);
var inst_11920 = true;
var state_11979__$1 = (function (){var statearr_12007 = state_11979;
(statearr_12007[(15)] = inst_11943);

(statearr_12007[(7)] = inst_11920);

(statearr_12007[(16)] = inst_11942);

return statearr_12007;
})();
var statearr_12008_12038 = state_11979__$1;
(statearr_12008_12038[(2)] = null);

(statearr_12008_12038[(1)] = (2));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8161__auto___12016,ws_chan,initial_ch,web_socket,map__11919,map__11919__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11917,map__11918,map__11918__$1,opts,format,write_ch,read_ch))
;
return ((function (switch__8064__auto__,c__8161__auto___12016,ws_chan,initial_ch,web_socket,map__11919,map__11919__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11917,map__11918,map__11918__$1,opts,format,write_ch,read_ch){
return (function() {
var chord$client$ws_ch_$_state_machine__8065__auto__ = null;
var chord$client$ws_ch_$_state_machine__8065__auto____0 = (function (){
var statearr_12012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12012[(0)] = chord$client$ws_ch_$_state_machine__8065__auto__);

(statearr_12012[(1)] = (1));

return statearr_12012;
});
var chord$client$ws_ch_$_state_machine__8065__auto____1 = (function (state_11979){
while(true){
var ret_value__8066__auto__ = (function (){try{while(true){
var result__8067__auto__ = switch__8064__auto__(state_11979);
if(cljs.core.keyword_identical_QMARK_(result__8067__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__8067__auto__;
}
break;
}
}catch (e12013){if((e12013 instanceof Object)){
var ex__8068__auto__ = e12013;
var statearr_12014_12039 = state_11979;
(statearr_12014_12039[(5)] = ex__8068__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11979);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e12013;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8066__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__12040 = state_11979;
state_11979 = G__12040;
continue;
} else {
return ret_value__8066__auto__;
}
break;
}
});
chord$client$ws_ch_$_state_machine__8065__auto__ = function(state_11979){
switch(arguments.length){
case 0:
return chord$client$ws_ch_$_state_machine__8065__auto____0.call(this);
case 1:
return chord$client$ws_ch_$_state_machine__8065__auto____1.call(this,state_11979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$ws_ch_$_state_machine__8065__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$ws_ch_$_state_machine__8065__auto____0;
chord$client$ws_ch_$_state_machine__8065__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$ws_ch_$_state_machine__8065__auto____1;
return chord$client$ws_ch_$_state_machine__8065__auto__;
})()
;})(switch__8064__auto__,c__8161__auto___12016,ws_chan,initial_ch,web_socket,map__11919,map__11919__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11917,map__11918,map__11918__$1,opts,format,write_ch,read_ch))
})();
var state__8163__auto__ = (function (){var statearr_12015 = (function (){return (f__8162__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8162__auto__.cljs$core$IFn$_invoke$arity$0() : f__8162__auto__.call(null));
})();
(statearr_12015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8161__auto___12016);

return statearr_12015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8163__auto__);
});})(c__8161__auto___12016,ws_chan,initial_ch,web_socket,map__11919,map__11919__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11917,map__11918,map__11918__$1,opts,format,write_ch,read_ch))
);


return initial_ch;
};
var chord$client$ws_ch = function (ws_url,var_args){
var p__11817 = null;
if (arguments.length > 1) {
var G__12041__i = 0, G__12041__a = new Array(arguments.length -  1);
while (G__12041__i < G__12041__a.length) {G__12041__a[G__12041__i] = arguments[G__12041__i + 1]; ++G__12041__i;}
  p__11817 = new cljs.core.IndexedSeq(G__12041__a,0);
} 
return chord$client$ws_ch__delegate.call(this,ws_url,p__11817);};
chord$client$ws_ch.cljs$lang$maxFixedArity = 1;
chord$client$ws_ch.cljs$lang$applyTo = (function (arglist__12042){
var ws_url = cljs.core.first(arglist__12042);
var p__11817 = cljs.core.rest(arglist__12042);
return chord$client$ws_ch__delegate(ws_url,p__11817);
});
chord$client$ws_ch.cljs$core$IFn$_invoke$arity$variadic = chord$client$ws_ch__delegate;
return chord$client$ws_ch;
})()
;
