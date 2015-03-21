// Compiled by ClojureScript 0.0-3058 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.sente.interfaces');
goog.require('taoensso.encore');
goog.require('cljs.core.async');
goog.require('clojure.string');
taoensso.sente.set_logging_level_BANG_ = (function taoensso$sente$set_logging_level_BANG_(level){
return taoensso.encore._STAR_log_level_STAR_ = level;
});
/**
 * Alpha - subject to change.
 * Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 * Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 * (ajax-call "/my-post-route"
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
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_(x))){
return cljs.core.constant$keyword$_COLON_wrong_type;
} else {
if(cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count(x)))){
return cljs.core.constant$keyword$_COLON_wrong_length;
} else {
var vec__22470 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22470,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22470,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return cljs.core.constant$keyword$_COLON_wrong_id_type;
} else {
if(cljs.core.not(cljs.core.namespace(ev_id))){
return cljs.core.constant$keyword$_COLON_unnamespaced_id;
} else {
return null;

}
}

}
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event(x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
if(taoensso.sente.event_QMARK_(x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_chsk_SLASH_bad_event,x], null);
}
});
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4126__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__4126__auto__)){
var _QMARK_err = temp__4126__auto__;
var err_fmt = [cljs.core.str((function (){var G__22472 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__22472) {
case "else":
return "Malformed event (unknown error).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-type":
return "Malformed event (wrong type).";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));

}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: %s")].join('');
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(err_fmt,cljs.core.array_seq([[cljs.core.str(x)].join('')], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_malformed_event,x], null));
} else {
return null;
}
});
taoensso.sente.event_msg_QMARK_ = (function taoensso$sente$event_msg_QMARK_(x){
var and__15671__auto__ = cljs.core.map_QMARK_(x);
if(and__15671__auto__){
var and__15671__auto____$1 = taoensso.encore.keys_EQ_(x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$_COLON_ch_recv,null,cljs.core.constant$keyword$_COLON_state,null,cljs.core.constant$keyword$_COLON_event,null,cljs.core.constant$keyword$_COLON_id,null,cljs.core.constant$keyword$_COLON__QMARK_data,null,cljs.core.constant$keyword$_COLON_send_fn,null], null), null));
if(and__15671__auto____$1){
var map__22479 = x;
var map__22479__$1 = ((cljs.core.seq_QMARK_(map__22479))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22479):map__22479);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22479__$1,cljs.core.constant$keyword$_COLON_event);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22479__$1,cljs.core.constant$keyword$_COLON_state);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22479__$1,cljs.core.constant$keyword$_COLON_send_fn);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22479__$1,cljs.core.constant$keyword$_COLON_ch_recv);
return (taoensso.encore.chan_QMARK_(ch_recv)) && (cljs.core.ifn_QMARK_(send_fn)) && (taoensso.encore.atom_QMARK_(state)) && (taoensso.sente.event_QMARK_(event));
} else {
return and__15671__auto____$1;
}
} else {
return and__15671__auto__;
}
});
/**
 * Note that cb reply need _not_ be `event` form!
 */
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_chsk_SLASH_closed,null,cljs.core.constant$keyword$_COLON_chsk_SLASH_error,null,cljs.core.constant$keyword$_COLON_chsk_SLASH_timeout,null], null), null).call(null,cb_reply_clj));
});
/**
 * pstr->clj
 */
taoensso.sente.unpack_STAR_ = (function taoensso$sente$unpack_STAR_(packer,pstr){
try{return taoensso.sente.interfaces.unpack(packer,(function (){var vec__22486 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pstr], null);
}catch (e22488){if((e22488 instanceof java.lang.Throwable)){
var t__12846__auto__ = e22488;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e22488;

}
}})();
var x__12958__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22486,(0),null);
var _QMARK_x_err__12959__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22486,(1),null);
var have_x_QMARK___12960__auto__ = (_QMARK_x_err__12959__auto__ == null);
var vec__22487 = ((have_x_QMARK___12960__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(cljs.core.string_QMARK_).call(null,x__12958__auto__)], null);
}catch (e22489){if((e22489 instanceof java.lang.Throwable)){
var t__12846__auto__ = e22489;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e22489;

}
}})():null);
var pass_QMARK___12961__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22487,(0),null);
var _QMARK_pred_err__12962__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22487,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto__)){
return x__12958__auto__;
} else {
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.sente",214,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pstr","pstr",221763868,null)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null)),((have_x_QMARK___12960__auto__)?x__12958__auto__:_QMARK_x_err__12959__auto__),cljs.core.array_seq([_QMARK_pred_err__12962__auto__], 0));
}
})());
}catch (e22485){var t = e22485;
taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic("Bad package: %s (%s)",cljs.core.array_seq([pstr,t], 0));

throw t;
}});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq(_QMARK_m)){
return cljs.core.with_meta(x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack_STAR_ = (function() {
var taoensso$sente$pack_STAR_ = null;
var taoensso$sente$pack_STAR___3 = (function (packer,_QMARK_packer_meta,clj){
return [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack(packer,taoensso.sente.with__QMARK_meta(clj,_QMARK_packer_meta)))].join('');
});
var taoensso$sente$pack_STAR___4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,cljs.core.constant$keyword$_COLON_ajax_cb))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
return [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack(packer,taoensso.sente.with__QMARK_meta(wrapped_clj,_QMARK_packer_meta)))].join('');
});
taoensso$sente$pack_STAR_ = function(packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
switch(arguments.length){
case 3:
return taoensso$sente$pack_STAR___3.call(this,packer,_QMARK_packer_meta,clj);
case 4:
return taoensso$sente$pack_STAR___4.call(this,packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$pack_STAR_.cljs$core$IFn$_invoke$arity$3 = taoensso$sente$pack_STAR___3;
taoensso$sente$pack_STAR_.cljs$core$IFn$_invoke$arity$4 = taoensso$sente$pack_STAR___4;
return taoensso$sente$pack_STAR_;
})()
;
/**
 * @param {...*} var_args
 */
taoensso.sente.pack = (function() { 
var taoensso$sente$pack__delegate = function (args){
var pstr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.sente.pack_STAR_,args);
taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic("Packing: %s -> %s",cljs.core.array_seq([args,pstr], 0));

return pstr;
};
var taoensso$sente$pack = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22490__i = 0, G__22490__a = new Array(arguments.length -  0);
while (G__22490__i < G__22490__a.length) {G__22490__a[G__22490__i] = arguments[G__22490__i + 0]; ++G__22490__i;}
  args = new cljs.core.IndexedSeq(G__22490__a,0);
} 
return taoensso$sente$pack__delegate.call(this,args);};
taoensso$sente$pack.cljs$lang$maxFixedArity = 0;
taoensso$sente$pack.cljs$lang$applyTo = (function (arglist__22491){
var args = cljs.core.seq(arglist__22491);
return taoensso$sente$pack__delegate(args);
});
taoensso$sente$pack.cljs$core$IFn$_invoke$arity$variadic = taoensso$sente$pack__delegate;
return taoensso$sente$pack;
})()
;
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
var vec__22498_22504 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefixed_pstr], null);
}catch (e22500){if((e22500 instanceof java.lang.Throwable)){
var t__12846__auto__ = e22500;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e22500;

}
}})();
var x__12958__auto___22505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22498_22504,(0),null);
var _QMARK_x_err__12959__auto___22506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22498_22504,(1),null);
var have_x_QMARK___12960__auto___22507 = (_QMARK_x_err__12959__auto___22506 == null);
var vec__22499_22508 = ((have_x_QMARK___12960__auto___22507)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(cljs.core.string_QMARK_).call(null,x__12958__auto___22505)], null);
}catch (e22501){if((e22501 instanceof java.lang.Throwable)){
var t__12846__auto__ = e22501;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e22501;

}
}})():null);
var pass_QMARK___12961__auto___22509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22499_22508,(0),null);
var _QMARK_pred_err__12962__auto___22510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22499_22508,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto___22509)){
} else {
taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.sente",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefixed-pstr","prefixed-pstr",-515747107,null)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null)),((have_x_QMARK___12960__auto___22507)?x__12958__auto___22505:_QMARK_x_err__12959__auto___22506),cljs.core.array_seq([_QMARK_pred_err__12962__auto___22510], 0));
}


var prefix = taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(prefixed_pstr,(0),cljs.core.array_seq([(1)], 0));
var pstr = taoensso.encore.substr(prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_(packer,pstr);
var wrapped_QMARK_ = (function (){var G__22503 = prefix;
switch (G__22503) {
case "-":
return false;

break;
case "+":
return true;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(prefix)].join('')));

}
})();
var vec__22502 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22502,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22502,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?cljs.core.constant$keyword$_COLON_ajax_cb:_QMARK_cb_uuid);
taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic("Unpacking: %s -> %s",cljs.core.array_seq([prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});

taoensso.sente.IChSocket = (function (){var obj22513 = {};
return obj22513;
})();

taoensso.sente.chsk_init_BANG_ = (function taoensso$sente$chsk_init_BANG_(chsk){
if((function (){var and__15671__auto__ = chsk;
if(and__15671__auto__){
return chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1;
} else {
return and__15671__auto__;
}
})()){
return chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1(chsk);
} else {
var x__16327__auto__ = (((chsk == null))?null:chsk);
return (function (){var or__15683__auto__ = (taoensso.sente.chsk_init_BANG_[(function (){var G__22517 = x__16327__auto__;
return goog.typeOf(G__22517);
})()]);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (taoensso.sente.chsk_init_BANG_["_"]);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
throw cljs.core.missing_protocol("IChSocket.chsk-init!",chsk);
}
}
})().call(null,chsk);
}
});

taoensso.sente.chsk_destroy_BANG_ = (function taoensso$sente$chsk_destroy_BANG_(chsk){
if((function (){var and__15671__auto__ = chsk;
if(and__15671__auto__){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1;
} else {
return and__15671__auto__;
}
})()){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1(chsk);
} else {
var x__16327__auto__ = (((chsk == null))?null:chsk);
return (function (){var or__15683__auto__ = (taoensso.sente.chsk_destroy_BANG_[(function (){var G__22521 = x__16327__auto__;
return goog.typeOf(G__22521);
})()]);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
throw cljs.core.missing_protocol("IChSocket.chsk-destroy!",chsk);
}
}
})().call(null,chsk);
}
});

taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
if((function (){var and__15671__auto__ = chsk;
if(and__15671__auto__){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1;
} else {
return and__15671__auto__;
}
})()){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__16327__auto__ = (((chsk == null))?null:chsk);
return (function (){var or__15683__auto__ = (taoensso.sente.chsk_reconnect_BANG_[(function (){var G__22525 = x__16327__auto__;
return goog.typeOf(G__22525);
})()]);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
throw cljs.core.missing_protocol("IChSocket.chsk-reconnect!",chsk);
}
}
})().call(null,chsk);
}
});

taoensso.sente.chsk_send_BANG__STAR_ = (function taoensso$sente$chsk_send_BANG__STAR_(chsk,ev,opts){
if((function (){var and__15671__auto__ = chsk;
if(and__15671__auto__){
return chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3;
} else {
return and__15671__auto__;
}
})()){
return chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3(chsk,ev,opts);
} else {
var x__16327__auto__ = (((chsk == null))?null:chsk);
return (function (){var or__15683__auto__ = (taoensso.sente.chsk_send_BANG__STAR_[(function (){var G__22529 = x__16327__auto__;
return goog.typeOf(G__22529);
})()]);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (taoensso.sente.chsk_send_BANG__STAR_["_"]);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
throw cljs.core.missing_protocol("IChSocket.chsk-send!*",chsk);
}
}
})().call(null,chsk,ev,opts);
}
});

/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function() {
var taoensso$sente$chsk_send_BANG_ = null;
var taoensso$sente$chsk_send_BANG___2 = (function (chsk,ev){
return taoensso$sente$chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});
var taoensso$sente$chsk_send_BANG___3 = (function (chsk,ev,opts){
taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic("Chsk send: (%s) %s",cljs.core.array_seq([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$_COLON_cb,cljs.core.boolean$(cljs.core.constant$keyword$_COLON_cb.cljs$core$IFn$_invoke$arity$1(opts))),ev], 0));

return taoensso.sente.chsk_send_BANG__STAR_(chsk,ev,opts);
});
var taoensso$sente$chsk_send_BANG___4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso$sente$chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_timeout_ms,_QMARK_timeout_ms,cljs.core.constant$keyword$_COLON_cb,_QMARK_cb], null));
});
taoensso$sente$chsk_send_BANG_ = function(chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
switch(arguments.length){
case 2:
return taoensso$sente$chsk_send_BANG___2.call(this,chsk,ev);
case 3:
return taoensso$sente$chsk_send_BANG___3.call(this,chsk,ev,_QMARK_timeout_ms);
case 4:
return taoensso$sente$chsk_send_BANG___4.call(this,chsk,ev,_QMARK_timeout_ms,_QMARK_cb);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$chsk_send_BANG___2;
taoensso$sente$chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = taoensso$sente$chsk_send_BANG___3;
taoensso$sente$chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = taoensso$sente$chsk_send_BANG___4;
return taoensso$sente$chsk_send_BANG_;
})()
;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event(x);

if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nneg_int_QMARK_(_QMARK_timeout_ms))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic("cb requires a timeout; timeout-ms should be a +ive integer: %s",cljs.core.array_seq([_QMARK_timeout_ms], 0))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null))),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol("enc","nneg-int?","enc/nneg-int?",803640858,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null))))], 0)))].join('')));
}

if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)) || (taoensso.encore.chan_QMARK_(_QMARK_cb))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic("cb should be nil, an ifn, or a channel: %s",cljs.core.array_seq([cljs.core.type(_QMARK_cb)], 0))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)))], 0)))].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4126__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4126__auto__)){
var cb_uuid = temp__4126__auto__;
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4126__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped(cljs.core.constant$keyword$_COLON_swap_SLASH_dissoc,_QMARK_f);
});})(cb_uuid,temp__4126__auto__))
);
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__22536,merge_state){
var map__22539 = p__22536;
var map__22539__$1 = ((cljs.core.seq_QMARK_(map__22539))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22539):map__22539);
var chsk = map__22539__$1;
var state_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22539__$1,cljs.core.constant$keyword$_COLON_state_);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22539__$1,cljs.core.constant$keyword$_COLON_chs);
var vec__22540 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(state_,cljs.core.PersistentVector.EMPTY,((function (map__22539,map__22539__$1,chsk,state_,chs){
return (function (old_state){
var new_state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([old_state,merge_state], 0));
var new_state__$1 = ((cljs.core.not((function (){var and__15671__auto__ = cljs.core.constant$keyword$_COLON_requested_reconnect_pending_QMARK_.cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__15671__auto__)){
var and__15671__auto____$1 = cljs.core.constant$keyword$_COLON_open_QMARK_.cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__15671__auto____$1)){
return cljs.core.not(cljs.core.constant$keyword$_COLON_open_QMARK_.cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__15671__auto____$1;
}
} else {
return and__15671__auto__;
}
})()))?new_state:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state,cljs.core.constant$keyword$_COLON_requested_reconnect_pending_QMARK_),cljs.core.constant$keyword$_COLON_requested_reconnect_QMARK_,true));
return taoensso.encore.swapped(new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__22539,map__22539__$1,chsk,state_,chs))
);
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22540,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22540,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$_COLON_state.cljs$core$IFn$_invoke$arity$1(chs),new_state);

return new_state;
} else {
return null;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 * instead of a cb-fn. The channel will receive values of form
 * [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb))){
return _QMARK_cb;
} else {
var vec__22546_22551 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_cb], null);
}catch (e22548){if((e22548 instanceof java.lang.Throwable)){
var t__12846__auto__ = e22548;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e22548;

}
}})();
var x__12958__auto___22552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22546_22551,(0),null);
var _QMARK_x_err__12959__auto___22553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22546_22551,(1),null);
var have_x_QMARK___12960__auto___22554 = (_QMARK_x_err__12959__auto___22553 == null);
var vec__22547_22555 = ((have_x_QMARK___12960__auto___22554)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(taoensso.encore.chan_QMARK_).call(null,x__12958__auto___22552)], null);
}catch (e22549){if((e22549 instanceof java.lang.Throwable)){
var t__12846__auto__ = e22549;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e22549;

}
}})():null);
var pass_QMARK___12961__auto___22556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22547_22555,(0),null);
var _QMARK_pred_err__12962__auto___22557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22547_22555,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto___22556)){
} else {
taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.sente",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null)),((have_x_QMARK___12960__auto___22554)?x__12958__auto___22552:_QMARK_x_err__12959__auto___22553),cljs.core.array_seq([_QMARK_pred_err__12962__auto___22557], 0));
}


taoensso.sente.assert_event(ev);

var vec__22550 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22550,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22550,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__22550,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(taoensso.encore.fq_name(ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__22550,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic("receive-buffered-evs!: %s",cljs.core.array_seq([clj], 0));

var buffered_evs = (function (){var vec__22566 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null);
}catch (e22568){if((e22568 instanceof java.lang.Throwable)){
var t__12846__auto__ = e22568;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e22568;

}
}})();
var x__12958__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22566,(0),null);
var _QMARK_x_err__12959__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22566,(1),null);
var have_x_QMARK___12960__auto__ = (_QMARK_x_err__12959__auto__ == null);
var vec__22567 = ((have_x_QMARK___12960__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(cljs.core.vector_QMARK_).call(null,x__12958__auto__)], null);
}catch (e22569){if((e22569 instanceof java.lang.Throwable)){
var t__12846__auto__ = e22569;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e22569;

}
}})():null);
var pass_QMARK___12961__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22567,(0),null);
var _QMARK_pred_err__12962__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22567,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto__)){
return x__12958__auto__;
} else {
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.sente",738,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"clj","clj",980036099,null)),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null)),((have_x_QMARK___12960__auto__)?x__12958__auto__:_QMARK_x_err__12959__auto__),cljs.core.array_seq([_QMARK_pred_err__12962__auto__], 0));
}
})();
var seq__22570 = cljs.core.seq(buffered_evs);
var chunk__22571 = null;
var count__22572 = (0);
var i__22573 = (0);
while(true){
if((i__22573 < count__22572)){
var ev = chunk__22571.cljs$core$IIndexed$_nth$arity$2(null,i__22573);
taoensso.sente.assert_event(ev);

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$_COLON__LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__22574 = seq__22570;
var G__22575 = chunk__22571;
var G__22576 = count__22572;
var G__22577 = (i__22573 + (1));
seq__22570 = G__22574;
chunk__22571 = G__22575;
count__22572 = G__22576;
i__22573 = G__22577;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__22570);
if(temp__4126__auto__){
var seq__22570__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22570__$1)){
var c__16470__auto__ = cljs.core.chunk_first(seq__22570__$1);
var G__22578 = cljs.core.chunk_rest(seq__22570__$1);
var G__22579 = c__16470__auto__;
var G__22580 = cljs.core.count(c__16470__auto__);
var G__22581 = (0);
seq__22570 = G__22578;
chunk__22571 = G__22579;
count__22572 = G__22580;
i__22573 = G__22581;
continue;
} else {
var ev = cljs.core.first(seq__22570__$1);
taoensso.sente.assert_event(ev);

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$_COLON__LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__22582 = cljs.core.next(seq__22570__$1);
var G__22583 = null;
var G__22584 = (0);
var G__22585 = (0);
seq__22570 = G__22582;
chunk__22571 = G__22583;
count__22572 = G__22584;
i__22573 = G__22585;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function taoensso$sente$handle_when_handshake_BANG_(chsk,chs,clj){
var handshake_QMARK_ = (cljs.core.vector_QMARK_(clj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(clj),cljs.core.constant$keyword$_COLON_chsk_SLASH_handshake));
taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic("handle-when-handshake (%s): %s",cljs.core.array_seq([((handshake_QMARK_)?cljs.core.constant$keyword$_COLON_handshake:cljs.core.constant$keyword$_COLON_non_handshake),clj], 0));

if(handshake_QMARK_){
var vec__22588 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22588,(0),null);
var vec__22589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22588,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22589,(0),null);
var _QMARK_csrf_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22589,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22589,(2),null);
var handshake_ev = vec__22588;
if(cljs.core.truth_(clojure.string.blank_QMARK_(_QMARK_csrf_token))){
taoensso.encore.warnf("SECURITY WARNING: no CSRF token available for use by Sente");
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_(chsk,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_open_QMARK_,true,cljs.core.constant$keyword$_COLON_uid,_QMARK_uid,cljs.core.constant$keyword$_COLON_csrf_token,_QMARK_csrf_token], null));

taoensso.sente.assert_event(handshake_ev);

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$_COLON_internal.cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return cljs.core.constant$keyword$_COLON_handled;
} else {
return null;
}
});
/**
 * @param {...*} var_args
 */
taoensso.sente.set_exp_backoff_timeout_BANG_ = (function() { 
var taoensso$sente$set_exp_backoff_timeout_BANG___delegate = function (nullary_f,p__22590){
var vec__22592 = p__22590;
var nattempt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22592,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff((function (){var or__15683__auto__ = nattempt;
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return (0);
}
})()));
};
var taoensso$sente$set_exp_backoff_timeout_BANG_ = function (nullary_f,var_args){
var p__22590 = null;
if (arguments.length > 1) {
var G__22593__i = 0, G__22593__a = new Array(arguments.length -  1);
while (G__22593__i < G__22593__a.length) {G__22593__a[G__22593__i] = arguments[G__22593__i + 1]; ++G__22593__i;}
  p__22590 = new cljs.core.IndexedSeq(G__22593__a,0);
} 
return taoensso$sente$set_exp_backoff_timeout_BANG___delegate.call(this,nullary_f,p__22590);};
taoensso$sente$set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = 1;
taoensso$sente$set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (arglist__22594){
var nullary_f = cljs.core.first(arglist__22594);
var p__22590 = cljs.core.rest(arglist__22594);
return taoensso$sente$set_exp_backoff_timeout_BANG___delegate(nullary_f,p__22590);
});
taoensso$sente$set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = taoensso$sente$set_exp_backoff_timeout_BANG___delegate;
return taoensso$sente$set_exp_backoff_timeout_BANG_;
})()
;

/**
* @constructor
* @param {*} client_id
* @param {*} url
* @param {*} chs
* @param {*} socket_
* @param {*} kalive_ms
* @param {*} kalive_timer_
* @param {*} kalive_due_QMARK__
* @param {*} nattempt_
* @param {*} cbs_waiting_
* @param {*} state_
* @param {*} packer
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
taoensso.sente.ChWebSocket = (function (client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,__meta,__extmap,__hash){
this.client_id = client_id;
this.url = url;
this.chs = chs;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.nattempt_ = nattempt_;
this.cbs_waiting_ = cbs_waiting_;
this.state_ = state_;
this.packer = packer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16286__auto__,k__16287__auto__){
var self__ = this;
var this__16286__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__16286__auto____$1,k__16287__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16288__auto__,k22596,else__16289__auto__){
var self__ = this;
var this__16288__auto____$1 = this;
var G__22598 = (((k22596 instanceof cljs.core.Keyword))?k22596.fqn:null);
switch (G__22598) {
case "client-id":
return self__.client_id;

break;
case "kalive-ms":
return self__.kalive_ms;

break;
case "nattempt_":
return self__.nattempt_;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "kalive-due?_":
return self__.kalive_due_QMARK__;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "kalive-timer_":
return self__.kalive_timer_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22596,else__16289__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16300__auto__,writer__16301__auto__,opts__16302__auto__){
var self__ = this;
var this__16300__auto____$1 = this;
var pr_pair__16303__auto__ = ((function (this__16300__auto____$1){
return (function (keyval__16304__auto__){
return cljs.core.pr_sequential_writer(writer__16301__auto__,cljs.core.pr_writer,""," ","",opts__16302__auto__,keyval__16304__auto__);
});})(this__16300__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__16301__auto__,pr_pair__16303__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__16302__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_client_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_socket_,self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_kalive_ms,self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_kalive_timer_,self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_kalive_due_QMARK__,self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_nattempt_,self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_cbs_waiting_,self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_packer,self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16284__auto__){
var self__ = this;
var this__16284__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16280__auto__){
var self__ = this;
var this__16280__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16290__auto__){
var self__ = this;
var this__16290__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16281__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16282__auto__,other__16283__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16295__auto__,k__16296__auto__){
var self__ = this;
var this__16295__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.constant$keyword$_COLON_client_id,null,cljs.core.constant$keyword$_COLON_kalive_ms,null,cljs.core.constant$keyword$_COLON_nattempt_,null,cljs.core.constant$keyword$_COLON_packer,null,cljs.core.constant$keyword$_COLON_chs,null,cljs.core.constant$keyword$_COLON_socket_,null,cljs.core.constant$keyword$_COLON_url,null,cljs.core.constant$keyword$_COLON_kalive_due_QMARK__,null,cljs.core.constant$keyword$_COLON_cbs_waiting_,null,cljs.core.constant$keyword$_COLON_kalive_timer_,null,cljs.core.constant$keyword$_COLON_state_,null], null), null),k__16296__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__16295__auto____$1),self__.__meta),k__16296__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__16296__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16293__auto__,k__16294__auto__,G__22595){
var self__ = this;
var this__16293__auto____$1 = this;
var pred__22599 = cljs.core.keyword_identical_QMARK_;
var expr__22600 = k__16294__auto__;
if(cljs.core.truth_((function (){var G__22602 = cljs.core.constant$keyword$_COLON_client_id;
var G__22603 = expr__22600;
return (pred__22599.cljs$core$IFn$_invoke$arity$2 ? pred__22599.cljs$core$IFn$_invoke$arity$2(G__22602,G__22603) : pred__22599.call(null,G__22602,G__22603));
})())){
return (new taoensso.sente.ChWebSocket(G__22595,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22604 = cljs.core.constant$keyword$_COLON_url;
var G__22605 = expr__22600;
return (pred__22599.cljs$core$IFn$_invoke$arity$2 ? pred__22599.cljs$core$IFn$_invoke$arity$2(G__22604,G__22605) : pred__22599.call(null,G__22604,G__22605));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__22595,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22606 = cljs.core.constant$keyword$_COLON_chs;
var G__22607 = expr__22600;
return (pred__22599.cljs$core$IFn$_invoke$arity$2 ? pred__22599.cljs$core$IFn$_invoke$arity$2(G__22606,G__22607) : pred__22599.call(null,G__22606,G__22607));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,G__22595,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22608 = cljs.core.constant$keyword$_COLON_socket_;
var G__22609 = expr__22600;
return (pred__22599.cljs$core$IFn$_invoke$arity$2 ? pred__22599.cljs$core$IFn$_invoke$arity$2(G__22608,G__22609) : pred__22599.call(null,G__22608,G__22609));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,G__22595,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22610 = cljs.core.constant$keyword$_COLON_kalive_ms;
var G__22611 = expr__22600;
return (pred__22599.cljs$core$IFn$_invoke$arity$2 ? pred__22599.cljs$core$IFn$_invoke$arity$2(G__22610,G__22611) : pred__22599.call(null,G__22610,G__22611));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,G__22595,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22612 = cljs.core.constant$keyword$_COLON_kalive_timer_;
var G__22613 = expr__22600;
return (pred__22599.cljs$core$IFn$_invoke$arity$2 ? pred__22599.cljs$core$IFn$_invoke$arity$2(G__22612,G__22613) : pred__22599.call(null,G__22612,G__22613));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,G__22595,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22614 = cljs.core.constant$keyword$_COLON_kalive_due_QMARK__;
var G__22615 = expr__22600;
return (pred__22599.cljs$core$IFn$_invoke$arity$2 ? pred__22599.cljs$core$IFn$_invoke$arity$2(G__22614,G__22615) : pred__22599.call(null,G__22614,G__22615));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__22595,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22616 = cljs.core.constant$keyword$_COLON_nattempt_;
var G__22617 = expr__22600;
return (pred__22599.cljs$core$IFn$_invoke$arity$2 ? pred__22599.cljs$core$IFn$_invoke$arity$2(G__22616,G__22617) : pred__22599.call(null,G__22616,G__22617));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__22595,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22618 = cljs.core.constant$keyword$_COLON_cbs_waiting_;
var G__22619 = expr__22600;
return (pred__22599.cljs$core$IFn$_invoke$arity$2 ? pred__22599.cljs$core$IFn$_invoke$arity$2(G__22618,G__22619) : pred__22599.call(null,G__22618,G__22619));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,G__22595,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22620 = cljs.core.constant$keyword$_COLON_state_;
var G__22621 = expr__22600;
return (pred__22599.cljs$core$IFn$_invoke$arity$2 ? pred__22599.cljs$core$IFn$_invoke$arity$2(G__22620,G__22621) : pred__22599.call(null,G__22620,G__22621));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,G__22595,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22622 = cljs.core.constant$keyword$_COLON_packer;
var G__22623 = expr__22600;
return (pred__22599.cljs$core$IFn$_invoke$arity$2 ? pred__22599.cljs$core$IFn$_invoke$arity$2(G__22622,G__22623) : pred__22599.call(null,G__22622,G__22623));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,G__22595,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__16294__auto__,G__22595),null));
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
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16298__auto__){
var self__ = this;
var this__16298__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_client_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_socket_,self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_kalive_ms,self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_kalive_timer_,self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_kalive_due_QMARK__,self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_nattempt_,self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_cbs_waiting_,self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_packer,self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16285__auto__,G__22595){
var self__ = this;
var this__16285__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,G__22595,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16291__auto__,entry__16292__auto__){
var self__ = this;
var this__16291__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__16292__auto__)){
return cljs.core._assoc(this__16291__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__16292__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__16292__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__16291__auto____$1,entry__16292__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__22624){
var self__ = this;
var map__22625 = p__22624;
var map__22625__$1 = ((cljs.core.seq_QMARK_(map__22625))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22625):map__22625);
var opts = map__22625__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22625__$1,cljs.core.constant$keyword$_COLON_flush_QMARK_);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22625__$1,cljs.core.constant$keyword$_COLON_timeout_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22625__$1,cljs.core.constant$keyword$_COLON_cb);
var chsk__$1 = this;
taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.constant$keyword$_COLON_open_QMARK_.cljs$core$IFn$_invoke$arity$1((function (){var G__22626 = self__.state_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22626) : cljs.core.deref.call(null,G__22626));
})()))){
taoensso.encore.warnf("Chsk send against closed chsk.");

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__22627 = cljs.core.constant$keyword$_COLON_chsk_SLASH_closed;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__22627) : _QMARK_cb_fn.call(null,G__22627));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.packer,cljs.core.meta(ev),ev,_QMARK_cb_uuid], 0));
var temp__4126__auto___22703 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4126__auto___22703)){
var cb_uuid_22704 = temp__4126__auto___22703;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_22704], null),(function (){var vec__22628 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_cb_fn], null);
}catch (e22630){if((e22630 instanceof java.lang.Throwable)){
var t__12846__auto__ = e22630;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e22630;

}
}})();
var x__12958__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22628,(0),null);
var _QMARK_x_err__12959__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22628,(1),null);
var have_x_QMARK___12960__auto__ = (_QMARK_x_err__12959__auto__ == null);
var vec__22629 = ((have_x_QMARK___12960__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(taoensso.encore.nnil_QMARK_).call(null,x__12958__auto__)], null);
}catch (e22631){if((e22631 instanceof java.lang.Throwable)){
var t__12846__auto__ = e22631;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e22631;

}
}})():null);
var pass_QMARK___12961__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22629,(0),null);
var _QMARK_pred_err__12962__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22629,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto__)){
return x__12958__auto__;
} else {
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.sente",803,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null)),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___12960__auto__)?x__12958__auto__:_QMARK_x_err__12959__auto__),cljs.core.array_seq([_QMARK_pred_err__12962__auto__], 0));
}
})());

var temp__4126__auto___22705__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4126__auto___22705__$1)){
var timeout_ms_22706 = temp__4126__auto___22705__$1;
var c__17765__auto___22707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17765__auto___22707,timeout_ms_22706,temp__4126__auto___22705__$1,cb_uuid_22704,temp__4126__auto___22703,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__22625,map__22625__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (c__17765__auto___22707,timeout_ms_22706,temp__4126__auto___22705__$1,cb_uuid_22704,temp__4126__auto___22703,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__22625,map__22625__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function (state_22642){
var state_val_22643 = (state_22642[(1)]);
if((state_val_22643 === (5))){
var inst_22640 = (state_22642[(2)]);
var state_22642__$1 = state_22642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22642__$1,inst_22640);
} else {
if((state_val_22643 === (4))){
var state_22642__$1 = state_22642;
var statearr_22644_22708 = state_22642__$1;
(statearr_22644_22708[(2)] = null);

(statearr_22644_22708[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_22643 === (3))){
var inst_22635 = (state_22642[(7)]);
var inst_22637 = (function (){var G__22645 = cljs.core.constant$keyword$_COLON_chsk_SLASH_timeout;
return (inst_22635.cljs$core$IFn$_invoke$arity$1 ? inst_22635.cljs$core$IFn$_invoke$arity$1(G__22645) : inst_22635.call(null,G__22645));
})();
var state_22642__$1 = state_22642;
var statearr_22646_22709 = state_22642__$1;
(statearr_22646_22709[(2)] = inst_22637);

(statearr_22646_22709[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_22643 === (2))){
var inst_22635 = (state_22642[(7)]);
var inst_22634 = (state_22642[(2)]);
var inst_22635__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_22642__$1 = (function (){var statearr_22647 = state_22642;
(statearr_22647[(8)] = inst_22634);

(statearr_22647[(7)] = inst_22635__$1);

return statearr_22647;
})();
if(cljs.core.truth_(inst_22635__$1)){
var statearr_22648_22710 = state_22642__$1;
(statearr_22648_22710[(1)] = (3));

} else {
var statearr_22649_22711 = state_22642__$1;
(statearr_22649_22711[(1)] = (4));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_22643 === (1))){
var inst_22632 = cljs.core.async.timeout(timeout_ms_22706);
var state_22642__$1 = state_22642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22642__$1,(2),inst_22632);
} else {
return null;
}
}
}
}
}
});})(c__17765__auto___22707,timeout_ms_22706,temp__4126__auto___22705__$1,cb_uuid_22704,temp__4126__auto___22703,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__22625,map__22625__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
;
return ((function (switch__17685__auto__,c__17765__auto___22707,timeout_ms_22706,temp__4126__auto___22705__$1,cb_uuid_22704,temp__4126__auto___22703,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__22625,map__22625__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function() {
var taoensso$sente$state_machine__17686__auto__ = null;
var taoensso$sente$state_machine__17686__auto____0 = (function (){
var statearr_22653 = [null,null,null,null,null,null,null,null,null];
(statearr_22653[(0)] = taoensso$sente$state_machine__17686__auto__);

(statearr_22653[(1)] = (1));

return statearr_22653;
});
var taoensso$sente$state_machine__17686__auto____1 = (function (state_22642){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_22642);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e22654){if((e22654 instanceof Object)){
var ex__17689__auto__ = e22654;
var statearr_22655_22712 = state_22642;
(statearr_22655_22712[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22642);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e22654;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__22713 = state_22642;
state_22642 = G__22713;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
taoensso$sente$state_machine__17686__auto__ = function(state_22642){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__17686__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__17686__auto____1.call(this,state_22642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__17686__auto____0;
taoensso$sente$state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__17686__auto____1;
return taoensso$sente$state_machine__17686__auto__;
})()
;})(switch__17685__auto__,c__17765__auto___22707,timeout_ms_22706,temp__4126__auto___22705__$1,cb_uuid_22704,temp__4126__auto___22703,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__22625,map__22625__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
})();
var state__17767__auto__ = (function (){var statearr_22656 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_22656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto___22707);

return statearr_22656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(c__17765__auto___22707,timeout_ms_22706,temp__4126__auto___22705__$1,cb_uuid_22704,temp__4126__auto___22703,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__22625,map__22625__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
);

} else {
}
} else {
}

try{(function (){var G__22663 = self__.socket_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22663) : cljs.core.deref.call(null,G__22663));
})().send(ppstr);

var G__22664_22714 = self__.kalive_due_QMARK__;
var G__22665_22715 = false;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22664_22714,G__22665_22715) : cljs.core.reset_BANG_.call(null,G__22664_22714,G__22665_22715));

return cljs.core.constant$keyword$_COLON_apparent_success;
}catch (e22657){if((e22657 instanceof Error)){
var e = e22657;
taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic("Chsk send error: %s",cljs.core.array_seq([e], 0));

var temp__4126__auto___22716 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4126__auto___22716)){
var cb_uuid_22717 = temp__4126__auto___22716;
var cb_fn_STAR__22718 = (function (){var or__15683__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_22717);
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
var vec__22658 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_cb_fn], null);
}catch (e22660){if((e22660 instanceof java.lang.Throwable)){
var t__12846__auto__ = e22660;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e22660;

}
}})();
var x__12958__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22658,(0),null);
var _QMARK_x_err__12959__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22658,(1),null);
var have_x_QMARK___12960__auto__ = (_QMARK_x_err__12959__auto__ == null);
var vec__22659 = ((have_x_QMARK___12960__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(taoensso.encore.nnil_QMARK_).call(null,x__12958__auto__)], null);
}catch (e22661){if((e22661 instanceof java.lang.Throwable)){
var t__12846__auto__ = e22661;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e22661;

}
}})():null);
var pass_QMARK___12961__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22659,(0),null);
var _QMARK_pred_err__12962__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22659,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto__)){
return x__12958__auto__;
} else {
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.sente",817,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null)),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___12960__auto__)?x__12958__auto__:_QMARK_x_err__12959__auto__),cljs.core.array_seq([_QMARK_pred_err__12962__auto__], 0));
}
}
})();
var G__22662_22719 = cljs.core.constant$keyword$_COLON_chsk_SLASH_error;
(cb_fn_STAR__22718.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__22718.cljs$core$IFn$_invoke$arity$1(G__22662_22719) : cb_fn_STAR__22718.call(null,G__22662_22719));
} else {
}

return false;
} else {
throw e22657;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_(chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_open_QMARK_,false,cljs.core.constant$keyword$_COLON_requested_reconnect_pending_QMARK_,true], null));

var temp__4126__auto__ = (function (){var G__22666 = self__.socket_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22666) : cljs.core.deref.call(null,G__22666));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var s = temp__4126__auto__;
return s.close((3000),"SENTE_RECONNECT");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_(chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_open_QMARK_,false,cljs.core.constant$keyword$_COLON_destroyed_QMARK_,true], null));

var temp__4126__auto__ = (function (){var G__22667 = self__.socket_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22667) : cljs.core.deref.call(null,G__22667));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var s = temp__4126__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4126__auto__ = (function (){var or__15683__auto__ = (window["WebSocket"]);
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return (window["MozWebSocket"]);
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var WebSocket = temp__4126__auto__;
((function (WebSocket,temp__4126__auto__,chsk__$1){
return (function taoensso$sente$connect_BANG_(){
if(cljs.core.truth_(cljs.core.constant$keyword$_COLON_destroyed_QMARK_.cljs$core$IFn$_invoke$arity$1((function (){var G__22685 = self__.state_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22685) : cljs.core.deref.call(null,G__22685));
})()))){
return null;
} else {
var retry_BANG_ = ((function (WebSocket,temp__4126__auto__,chsk__$1){
return (function (){
var nattempt_STAR_ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.nattempt_,cljs.core.inc);
window.clearInterval((function (){var G__22686 = self__.kalive_timer_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22686) : cljs.core.deref.call(null,G__22686));
})());

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic("Chsk is closed: will try reconnect (%s).",cljs.core.array_seq([nattempt_STAR_], 0));

return taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(taoensso$sente$connect_BANG_,cljs.core.array_seq([nattempt_STAR_], 0));
});})(WebSocket,temp__4126__auto__,chsk__$1))
;
var temp__4124__auto__ = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string(self__.url,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_client_id,self__.client_id], null))));
}catch (e22687){if((e22687 instanceof Error)){
var e = e22687;
taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic("WebSocket js/Error: %s",cljs.core.array_seq([e], 0));

return null;
} else {
throw e22687;

}
}})();
if(cljs.core.truth_(temp__4124__auto__)){
var socket = temp__4124__auto__;
var G__22688 = self__.socket_;
var G__22689 = (function (){var G__22690 = socket;
(G__22690["onerror"] = ((function (G__22690,G__22688,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic("WebSocket error: %s",cljs.core.array_seq([ws_ev], 0));
});})(G__22690,G__22688,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

(G__22690["onmessage"] = ((function (G__22690,G__22688,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = (ws_ev["data"]);
var vec__22691 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22691,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22691,(1),null);
var or__15683__auto__ = (function (){var and__15671__auto__ = taoensso.sente.handle_when_handshake_BANG_(chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__15671__auto__)){
var G__22694 = self__.nattempt_;
var G__22695 = (0);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22694,G__22695) : cljs.core.reset_BANG_.call(null,G__22694,G__22695));
} else {
return and__15671__auto__;
}
})();
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
var temp__4124__auto____$1 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4124__auto____$1)){
var cb_uuid = temp__4124__auto____$1;
var temp__4124__auto____$2 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4124__auto____$2)){
var cb_fn = temp__4124__auto____$2;
var G__22696 = clj;
return (cb_fn.cljs$core$IFn$_invoke$arity$1 ? cb_fn.cljs$core$IFn$_invoke$arity$1(G__22696) : cb_fn.call(null,G__22696));
} else {
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic("Cb reply w/o local cb-fn: %s",cljs.core.array_seq([clj], 0));
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
});})(G__22690,G__22688,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

(G__22690["onopen"] = ((function (G__22690,G__22688,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (_ws_ev){
var G__22697 = self__.kalive_timer_;
var G__22698 = window.setInterval(((function (G__22697,G__22690,G__22688,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_((function (){var G__22699 = self__.kalive_due_QMARK__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22699) : cljs.core.deref.call(null,G__22699));
})())){
taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2(chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_chsk_SLASH_ws_ping], null));
} else {
}

var G__22700 = self__.kalive_due_QMARK__;
var G__22701 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22700,G__22701) : cljs.core.reset_BANG_.call(null,G__22700,G__22701));
});})(G__22697,G__22690,G__22688,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
,self__.kalive_ms);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22697,G__22698) : cljs.core.reset_BANG_.call(null,G__22697,G__22698));
});})(G__22690,G__22688,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

(G__22690["onclose"] = ((function (G__22690,G__22688,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_(chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_open_QMARK_,false], null));

return retry_BANG_();
});})(G__22690,G__22688,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);

return G__22690;
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22688,G__22689) : cljs.core.reset_BANG_.call(null,G__22688,G__22689));
} else {
return retry_BANG_();
}
}
});})(WebSocket,temp__4126__auto__,chsk__$1))
.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__16320__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__16320__auto__,writer__16321__auto__){
return cljs.core._write(writer__16321__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer){
return (new taoensso.sente.ChWebSocket(client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__22597){
return (new taoensso.sente.ChWebSocket(cljs.core.constant$keyword$_COLON_client_id.cljs$core$IFn$_invoke$arity$1(G__22597),cljs.core.constant$keyword$_COLON_url.cljs$core$IFn$_invoke$arity$1(G__22597),cljs.core.constant$keyword$_COLON_chs.cljs$core$IFn$_invoke$arity$1(G__22597),cljs.core.constant$keyword$_COLON_socket_.cljs$core$IFn$_invoke$arity$1(G__22597),cljs.core.constant$keyword$_COLON_kalive_ms.cljs$core$IFn$_invoke$arity$1(G__22597),cljs.core.constant$keyword$_COLON_kalive_timer_.cljs$core$IFn$_invoke$arity$1(G__22597),cljs.core.constant$keyword$_COLON_kalive_due_QMARK__.cljs$core$IFn$_invoke$arity$1(G__22597),cljs.core.constant$keyword$_COLON_nattempt_.cljs$core$IFn$_invoke$arity$1(G__22597),cljs.core.constant$keyword$_COLON_cbs_waiting_.cljs$core$IFn$_invoke$arity$1(G__22597),cljs.core.constant$keyword$_COLON_state_.cljs$core$IFn$_invoke$arity$1(G__22597),cljs.core.constant$keyword$_COLON_packer.cljs$core$IFn$_invoke$arity$1(G__22597),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22597,cljs.core.constant$keyword$_COLON_client_id,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_url,cljs.core.constant$keyword$_COLON_chs,cljs.core.constant$keyword$_COLON_socket_,cljs.core.constant$keyword$_COLON_kalive_ms,cljs.core.constant$keyword$_COLON_kalive_timer_,cljs.core.constant$keyword$_COLON_kalive_due_QMARK__,cljs.core.constant$keyword$_COLON_nattempt_,cljs.core.constant$keyword$_COLON_cbs_waiting_,cljs.core.constant$keyword$_COLON_state_,cljs.core.constant$keyword$_COLON_packer], 0)),null));
});


/**
* @constructor
* @param {*} client_id
* @param {*} url
* @param {*} chs
* @param {*} timeout_ms
* @param {*} curr_xhr_
* @param {*} state_
* @param {*} packer
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
taoensso.sente.ChAjaxSocket = (function (client_id,url,chs,timeout_ms,curr_xhr_,state_,packer,__meta,__extmap,__hash){
this.client_id = client_id;
this.url = url;
this.chs = chs;
this.timeout_ms = timeout_ms;
this.curr_xhr_ = curr_xhr_;
this.state_ = state_;
this.packer = packer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16286__auto__,k__16287__auto__){
var self__ = this;
var this__16286__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__16286__auto____$1,k__16287__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16288__auto__,k22721,else__16289__auto__){
var self__ = this;
var this__16288__auto____$1 = this;
var G__22723 = (((k22721 instanceof cljs.core.Keyword))?k22721.fqn:null);
switch (G__22723) {
case "packer":
return self__.packer;

break;
case "state_":
return self__.state_;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "timeout-ms":
return self__.timeout_ms;

break;
case "chs":
return self__.chs;

break;
case "url":
return self__.url;

break;
case "client-id":
return self__.client_id;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22721,else__16289__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16300__auto__,writer__16301__auto__,opts__16302__auto__){
var self__ = this;
var this__16300__auto____$1 = this;
var pr_pair__16303__auto__ = ((function (this__16300__auto____$1){
return (function (keyval__16304__auto__){
return cljs.core.pr_sequential_writer(writer__16301__auto__,cljs.core.pr_writer,""," ","",opts__16302__auto__,keyval__16304__auto__);
});})(this__16300__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__16301__auto__,pr_pair__16303__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__16302__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_client_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_timeout_ms,self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_curr_xhr_,self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_packer,self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16284__auto__){
var self__ = this;
var this__16284__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16280__auto__){
var self__ = this;
var this__16280__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16290__auto__){
var self__ = this;
var this__16290__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16281__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16282__auto__,other__16283__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16295__auto__,k__16296__auto__){
var self__ = this;
var this__16295__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$_COLON_curr_xhr_,null,cljs.core.constant$keyword$_COLON_client_id,null,cljs.core.constant$keyword$_COLON_packer,null,cljs.core.constant$keyword$_COLON_chs,null,cljs.core.constant$keyword$_COLON_url,null,cljs.core.constant$keyword$_COLON_timeout_ms,null,cljs.core.constant$keyword$_COLON_state_,null], null), null),k__16296__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__16295__auto____$1),self__.__meta),k__16296__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__16296__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16293__auto__,k__16294__auto__,G__22720){
var self__ = this;
var this__16293__auto____$1 = this;
var pred__22724 = cljs.core.keyword_identical_QMARK_;
var expr__22725 = k__16294__auto__;
if(cljs.core.truth_((function (){var G__22727 = cljs.core.constant$keyword$_COLON_client_id;
var G__22728 = expr__22725;
return (pred__22724.cljs$core$IFn$_invoke$arity$2 ? pred__22724.cljs$core$IFn$_invoke$arity$2(G__22727,G__22728) : pred__22724.call(null,G__22727,G__22728));
})())){
return (new taoensso.sente.ChAjaxSocket(G__22720,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22729 = cljs.core.constant$keyword$_COLON_url;
var G__22730 = expr__22725;
return (pred__22724.cljs$core$IFn$_invoke$arity$2 ? pred__22724.cljs$core$IFn$_invoke$arity$2(G__22729,G__22730) : pred__22724.call(null,G__22729,G__22730));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__22720,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22731 = cljs.core.constant$keyword$_COLON_chs;
var G__22732 = expr__22725;
return (pred__22724.cljs$core$IFn$_invoke$arity$2 ? pred__22724.cljs$core$IFn$_invoke$arity$2(G__22731,G__22732) : pred__22724.call(null,G__22731,G__22732));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,G__22720,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22733 = cljs.core.constant$keyword$_COLON_timeout_ms;
var G__22734 = expr__22725;
return (pred__22724.cljs$core$IFn$_invoke$arity$2 ? pred__22724.cljs$core$IFn$_invoke$arity$2(G__22733,G__22734) : pred__22724.call(null,G__22733,G__22734));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,G__22720,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22735 = cljs.core.constant$keyword$_COLON_curr_xhr_;
var G__22736 = expr__22725;
return (pred__22724.cljs$core$IFn$_invoke$arity$2 ? pred__22724.cljs$core$IFn$_invoke$arity$2(G__22735,G__22736) : pred__22724.call(null,G__22735,G__22736));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,G__22720,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22737 = cljs.core.constant$keyword$_COLON_state_;
var G__22738 = expr__22725;
return (pred__22724.cljs$core$IFn$_invoke$arity$2 ? pred__22724.cljs$core$IFn$_invoke$arity$2(G__22737,G__22738) : pred__22724.call(null,G__22737,G__22738));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,G__22720,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22739 = cljs.core.constant$keyword$_COLON_packer;
var G__22740 = expr__22725;
return (pred__22724.cljs$core$IFn$_invoke$arity$2 ? pred__22724.cljs$core$IFn$_invoke$arity$2(G__22739,G__22740) : pred__22724.call(null,G__22739,G__22740));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,G__22720,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__16294__auto__,G__22720),null));
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16298__auto__){
var self__ = this;
var this__16298__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_client_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_timeout_ms,self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_curr_xhr_,self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_packer,self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16285__auto__,G__22720){
var self__ = this;
var this__16285__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,G__22720,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16291__auto__,entry__16292__auto__){
var self__ = this;
var this__16291__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__16292__auto__)){
return cljs.core._assoc(this__16291__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__16292__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__16292__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__16291__auto____$1,entry__16292__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__22741){
var self__ = this;
var map__22742 = p__22741;
var map__22742__$1 = ((cljs.core.seq_QMARK_(map__22742))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22742):map__22742);
var opts = map__22742__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22742__$1,cljs.core.constant$keyword$_COLON_flush_QMARK_);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22742__$1,cljs.core.constant$keyword$_COLON_timeout_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22742__$1,cljs.core.constant$keyword$_COLON_cb);
var chsk__$1 = this;
taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.constant$keyword$_COLON_open_QMARK_.cljs$core$IFn$_invoke$arity$1((function (){var G__22743 = self__.state_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22743) : cljs.core.deref.call(null,G__22743));
})()))){
taoensso.encore.warnf("Chsk send against closed chsk.");

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__22744 = cljs.core.constant$keyword$_COLON_chsk_SLASH_closed;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__22744) : _QMARK_cb_fn.call(null,G__22744));
} else {
return null;
}
} else {
var G__22745_22791 = self__.url;
var G__22746_22792 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$_COLON_method,cljs.core.constant$keyword$_COLON_post,cljs.core.constant$keyword$_COLON_timeout_ms,_QMARK_timeout_ms,cljs.core.constant$keyword$_COLON_resp_type,cljs.core.constant$keyword$_COLON_text,cljs.core.constant$keyword$_COLON_params,(function (){var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.packer,cljs.core.meta(ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?cljs.core.constant$keyword$_COLON_ajax_cb:null)], 0));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON__,taoensso.encore.now_udt(),cljs.core.constant$keyword$_COLON_csrf_token,cljs.core.constant$keyword$_COLON_csrf_token.cljs$core$IFn$_invoke$arity$1((function (){var G__22748 = self__.state_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22748) : cljs.core.deref.call(null,G__22748));
})()),cljs.core.constant$keyword$_COLON_ppstr,ppstr], null);
})()], null);
var G__22747_22793 = ((function (G__22745_22791,G__22746_22792,_QMARK_cb_fn,chsk__$1,map__22742,map__22742__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb){
return (function taoensso$sente$ajax_cb(p__22749){
var map__22755 = p__22749;
var map__22755__$1 = ((cljs.core.seq_QMARK_(map__22755))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22755):map__22755);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22755__$1,cljs.core.constant$keyword$_COLON__QMARK_content);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22755__$1,cljs.core.constant$keyword$_COLON__QMARK_error);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.constant$keyword$_COLON_timeout)){
if(cljs.core.truth_(_QMARK_cb_fn)){
var G__22756 = cljs.core.constant$keyword$_COLON_chsk_SLASH_timeout;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__22756) : _QMARK_cb_fn.call(null,G__22756));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_(chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_open_QMARK_,false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__22757 = cljs.core.constant$keyword$_COLON_chsk_SLASH_error;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__22757) : _QMARK_cb_fn.call(null,G__22757));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__22758 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22758,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22758,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
var G__22759_22794 = resp_clj;
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__22759_22794) : _QMARK_cb_fn.call(null,G__22759_22794));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,cljs.core.constant$keyword$_COLON_chsk_SLASH_dummy_cb_200)){
taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic("Cb reply w/o local cb-fn: %s",cljs.core.array_seq([resp_clj], 0));
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_(chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_open_QMARK_,true], null));
}
});})(G__22745_22791,G__22746_22792,_QMARK_cb_fn,chsk__$1,map__22742,map__22742__$1,opts,flush_QMARK_,_QMARK_timeout_ms,_QMARK_cb))
;
(taoensso.sente.ajax_call.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_call.cljs$core$IFn$_invoke$arity$3(G__22745_22791,G__22746_22792,G__22747_22793) : taoensso.sente.ajax_call.call(null,G__22745_22791,G__22746_22792,G__22747_22793));

return cljs.core.constant$keyword$_COLON_apparent_success;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_(chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_open_QMARK_,false,cljs.core.constant$keyword$_COLON_requested_reconnect_pending_QMARK_,true], null));

var temp__4126__auto__ = (function (){var G__22760 = self__.curr_xhr_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22760) : cljs.core.deref.call(null,G__22760));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var x = temp__4126__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_(chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_open_QMARK_,false,cljs.core.constant$keyword$_COLON_destroyed_QMARK_,true], null));

var temp__4126__auto__ = (function (){var G__22761 = self__.curr_xhr_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22761) : cljs.core.deref.call(null,G__22761));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var x = temp__4126__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
((function (chsk__$1){
return (function taoensso$sente$async_poll_for_update_BANG_(nattempt){
taoensso.encore.tracef("async-poll-for-update!");

if(cljs.core.truth_(cljs.core.constant$keyword$_COLON_destroyed_QMARK_.cljs$core$IFn$_invoke$arity$1((function (){var G__22778 = self__.state_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22778) : cljs.core.deref.call(null,G__22778));
})()))){
return null;
} else {
var retry_BANG_ = ((function (chsk__$1){
return (function (){
var nattempt_STAR_ = (nattempt + (1));
taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic("Chsk is closed: will try reconnect (%s).",cljs.core.array_seq([nattempt_STAR_], 0));

return taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso$sente$async_poll_for_update_BANG_,nattempt_STAR_),cljs.core.array_seq([nattempt_STAR_], 0));
});})(chsk__$1))
;
var G__22779 = self__.curr_xhr_;
var G__22780 = (function (){var G__22781 = self__.url;
var G__22782 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$_COLON_method,cljs.core.constant$keyword$_COLON_get,cljs.core.constant$keyword$_COLON_timeout_ms,self__.timeout_ms,cljs.core.constant$keyword$_COLON_resp_type,cljs.core.constant$keyword$_COLON_text,cljs.core.constant$keyword$_COLON_params,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON__,taoensso.encore.now_udt(),cljs.core.constant$keyword$_COLON_client_id,self__.client_id], null),(cljs.core.truth_(cljs.core.constant$keyword$_COLON_open_QMARK_.cljs$core$IFn$_invoke$arity$1((function (){var G__22784 = self__.state_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22784) : cljs.core.deref.call(null,G__22784));
})()))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_handshake_QMARK_,true], null))], 0))], null);
var G__22783 = ((function (G__22781,G__22782,G__22779,retry_BANG_,chsk__$1){
return (function taoensso$sente$async_poll_for_update_BANG__$_ajax_cb(p__22785){
var map__22788 = p__22785;
var map__22788__$1 = ((cljs.core.seq_QMARK_(map__22788))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22788):map__22788);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22788__$1,cljs.core.constant$keyword$_COLON__QMARK_content);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22788__$1,cljs.core.constant$keyword$_COLON__QMARK_error);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.constant$keyword$_COLON_timeout)){
return taoensso$sente$async_poll_for_update_BANG_((0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_(chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_open_QMARK_,false], null));

return retry_BANG_();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__22789 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22789,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22789,(1),null);
var or__15683__auto___22795 = taoensso.sente.handle_when_handshake_BANG_(chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__15683__auto___22795)){
} else {
var buffered_evs_22796 = clj;
taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs_22796);

taoensso.sente.merge_GT_chsk_state_BANG_(chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_open_QMARK_,true], null));
}

return taoensso$sente$async_poll_for_update_BANG_((0));
}
});})(G__22781,G__22782,G__22779,retry_BANG_,chsk__$1))
;
return (taoensso.sente.ajax_call.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_call.cljs$core$IFn$_invoke$arity$3(G__22781,G__22782,G__22783) : taoensso.sente.ajax_call.call(null,G__22781,G__22782,G__22783));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22779,G__22780) : cljs.core.reset_BANG_.call(null,G__22779,G__22780));
}
});})(chsk__$1))
.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__16320__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__16320__auto__,writer__16321__auto__){
return cljs.core._write(writer__16321__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,url,chs,timeout_ms,curr_xhr_,state_,packer){
return (new taoensso.sente.ChAjaxSocket(client_id,url,chs,timeout_ms,curr_xhr_,state_,packer,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__22722){
return (new taoensso.sente.ChAjaxSocket(cljs.core.constant$keyword$_COLON_client_id.cljs$core$IFn$_invoke$arity$1(G__22722),cljs.core.constant$keyword$_COLON_url.cljs$core$IFn$_invoke$arity$1(G__22722),cljs.core.constant$keyword$_COLON_chs.cljs$core$IFn$_invoke$arity$1(G__22722),cljs.core.constant$keyword$_COLON_timeout_ms.cljs$core$IFn$_invoke$arity$1(G__22722),cljs.core.constant$keyword$_COLON_curr_xhr_.cljs$core$IFn$_invoke$arity$1(G__22722),cljs.core.constant$keyword$_COLON_state_.cljs$core$IFn$_invoke$arity$1(G__22722),cljs.core.constant$keyword$_COLON_packer.cljs$core$IFn$_invoke$arity$1(G__22722),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22722,cljs.core.constant$keyword$_COLON_client_id,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_url,cljs.core.constant$keyword$_COLON_chs,cljs.core.constant$keyword$_COLON_timeout_ms,cljs.core.constant$keyword$_COLON_curr_xhr_,cljs.core.constant$keyword$_COLON_state_,cljs.core.constant$keyword$_COLON_packer], 0)),null));
});

/**
 * (ƒ [path window-location websocket?]) -> server-side chsk route URL string.
 * 
 * * path       - As provided to client-side `make-channel-socket!` fn
 * (usu. "/chsk").
 * * websocket? - True for WebSocket connections, false for Ajax (long-polling)
 * connections.
 * * window-location - Map with keys:
 * :href     ; "http://www.example.org:80/foo/bar?q=baz#bang"
 * :protocol ; "http:" ; Note the :
 * :hostname ; "example.org"
 * :host     ; "example.org:80"
 * :pathname ; "/foo/bar"
 * :search   ; "?q=baz"
 * :hash     ; "#bang"
 * 
 * Note that the *same* URL is used for: WebSockets, POSTs, GETs. Server-side
 * routes should be configured accordingly.
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__22797,websocket_QMARK_){
var map__22799 = p__22797;
var map__22799__$1 = ((cljs.core.seq_QMARK_(map__22799))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22799):map__22799);
var window_location = map__22799__$1;
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22799__$1,cljs.core.constant$keyword$_COLON_pathname);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22799__$1,cljs.core.constant$keyword$_COLON_host);
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22799__$1,cljs.core.constant$keyword$_COLON_protocol);
return [cljs.core.str(((cljs.core.not(websocket_QMARK_))?protocol:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:"))?"wss:":"ws:"))),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__15683__auto__ = path;
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return pathname;
}
})())].join('');
});
/**
 * Returns a map with keys:
 * :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 * ; May `put!` (inject) arbitrary `event`s to this channel.
 * :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 * :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 * :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 * Common options:
 * :type         ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 * :ws-kalive-ms ; Ping to keep a WebSocket conn alive if no activity w/in given
 * ; number of milliseconds.
 * :lp-kalive-ms ; Ping to keep a long-polling (Ajax) conn alive ''.
 * :chsk-url-fn  ; Please see `default-chsk-url-fn` for details.
 * :packer       ; :edn (default), or an IPacker implementation (experimental).
 * @param {...*} var_args
 */
taoensso.sente.make_channel_socket_BANG_ = (function() { 
var taoensso$sente$make_channel_socket_BANG___delegate = function (path,p__22800){
var vec__22864 = p__22800;
var map__22865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22864,(0),null);
var map__22865__$1 = ((cljs.core.seq_QMARK_(map__22865))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22865):map__22865);
var opts = map__22865__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22865__$1,cljs.core.constant$keyword$_COLON_client_id,(function (){var or__15683__auto__ = cljs.core.constant$keyword$_COLON_client_uuid.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22865__$1,cljs.core.constant$keyword$_COLON_packer,cljs.core.constant$keyword$_COLON_edn);
var chsk_url_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22865__$1,cljs.core.constant$keyword$_COLON_chsk_url_fn,taoensso.sente.default_chsk_url_fn);
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22865__$1,cljs.core.constant$keyword$_COLON_lp_timeout_ms,(25000));
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22865__$1,cljs.core.constant$keyword$_COLON_ws_kalive_ms,(25000));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22865__$1,cljs.core.constant$keyword$_COLON_recv_buf_or_n,cljs.core.async.sliding_buffer((2048)));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22865__$1,cljs.core.constant$keyword$_COLON_type,cljs.core.constant$keyword$_COLON_auto);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22864,(1),null);
if((function (){
var vec__22866_22927 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null);
}catch (e22868){if((e22868 instanceof java.lang.Throwable)){
var t__12846__auto__ = e22868;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e22868;

}
}})();
var x__12958__auto___22928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22866_22927,(0),null);
var _QMARK_x_err__12959__auto___22929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22866_22927,(1),null);
var have_x_QMARK___12960__auto___22930 = (_QMARK_x_err__12959__auto___22929 == null);
var vec__22867_22931 = ((have_x_QMARK___12960__auto___22930)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_in,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_ws,null,cljs.core.constant$keyword$_COLON_ajax,null,cljs.core.constant$keyword$_COLON_auto,null], null), null)], null)).call(null,x__12958__auto___22928)], null);
}catch (e22869){if((e22869 instanceof java.lang.Throwable)){
var t__12846__auto__ = e22869;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e22869;

}
}})():null);
var pass_QMARK___12961__auto___22932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22867_22931,(0),null);
var _QMARK_pred_err__12962__auto___22933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22867_22931,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto___22932)){
} else {
taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.sente",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"type","type",-1480165421,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_in,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_ws,null,cljs.core.constant$keyword$_COLON_ajax,null,cljs.core.constant$keyword$_COLON_auto,null], null), null)], null)),((have_x_QMARK___12960__auto___22930)?x__12958__auto___22928:_QMARK_x_err__12959__auto___22929),cljs.core.array_seq([_QMARK_pred_err__12962__auto___22933], 0));
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_in,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_ws,null,cljs.core.constant$keyword$_COLON_ajax,null,cljs.core.constant$keyword$_COLON_auto,null], null), null)], null),new cljs.core.Symbol(null,"type","type",-1480165421,null))], 0)))].join('')));
}

if((function (){
var vec__22870_22934 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client_id], null);
}catch (e22872){if((e22872 instanceof java.lang.Throwable)){
var t__12846__auto__ = e22872;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e22872;

}
}})();
var x__12958__auto___22935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22870_22934,(0),null);
var _QMARK_x_err__12959__auto___22936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22870_22934,(1),null);
var have_x_QMARK___12960__auto___22937 = (_QMARK_x_err__12959__auto___22936 == null);
var vec__22871_22938 = ((have_x_QMARK___12960__auto___22937)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred(taoensso.encore.nblank_str_QMARK_).call(null,x__12958__auto___22935)], null);
}catch (e22873){if((e22873 instanceof java.lang.Throwable)){
var t__12846__auto__ = e22873;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__12846__auto__], null);
} else {
throw e22873;

}
}})():null);
var pass_QMARK___12961__auto___22939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22871_22938,(0),null);
var _QMARK_pred_err__12962__auto___22940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22871_22938,(1),null);
if(cljs.core.truth_(pass_QMARK___12961__auto___22939)){
} else {
taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(false,"taoensso.sente",null,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"client-id","client-id",1175909387,null)),new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null)),((have_x_QMARK___12960__auto___22937)?x__12958__auto___22935:_QMARK_x_err__12959__auto___22936),cljs.core.array_seq([_QMARK_pred_err__12962__auto___22940], 0));
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null),new cljs.core.Symbol(null,"client-id","client-id",1175909387,null))], 0)))].join('')));
}

if(!((_deprecated_more_opts == null))){
taoensso.encore.warnf("`make-channel-socket!` fn signature CHANGED with Sente v0.10.0.");
} else {
}

if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$_COLON_lp_timeout)){
taoensso.encore.warnf(":lp-timeout opt has CHANGED; please use :lp-timout-ms.");
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer(packer);
var window_location = taoensso.encore.get_window_location();
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_state,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),cljs.core.constant$keyword$_COLON_internal,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),cljs.core.constant$keyword$_COLON__LT_server,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n)], null);
var ever_opened_QMARK__ = (function (){var G__22874 = false;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22874) : cljs.core.atom.call(null,G__22874));
})();
var state_STAR_ = ((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__22864,map__22865,map__22865__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__15683__auto__ = cljs.core.not(cljs.core.constant$keyword$_COLON_open_QMARK_.cljs$core$IFn$_invoke$arity$1(state));
if(or__15683__auto__){
return or__15683__auto__;
} else {
var G__22876 = ever_opened_QMARK__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22876) : cljs.core.deref.call(null,G__22876));
}
})())){
return state;
} else {
var G__22877_22941 = ever_opened_QMARK__;
var G__22878_22942 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22877_22941,G__22878_22942) : cljs.core.reset_BANG_.call(null,G__22877_22941,G__22878_22942));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$_COLON_first_open_QMARK_,true);
}
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__22864,map__22865,map__22865__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_internal.cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_(((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__22864,map__22865,map__22865__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_chsk_SLASH_state,state_STAR_(state)], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__22864,map__22865,map__22865__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,cljs.core.constant$keyword$_COLON_state.cljs$core$IFn$_invoke$arity$1(private_chs)),cljs.core.async.map_LT_(((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__22864,map__22865,map__22865__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_chsk_SLASH_recv,ev], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__22864,map__22865,map__22865__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,cljs.core.constant$keyword$_COLON__LT_server.cljs$core$IFn$_invoke$arity$1(private_chs))], null));
var chsk = (function (){var or__15683__auto__ = (function (){var and__15671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.constant$keyword$_COLON_ajax);
if(and__15671__auto__){
return taoensso.sente.map__GT_ChWebSocket(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$_COLON_client_id,cljs.core.constant$keyword$_COLON_kalive_ms,cljs.core.constant$keyword$_COLON_nattempt_,cljs.core.constant$keyword$_COLON_packer,cljs.core.constant$keyword$_COLON_chs,cljs.core.constant$keyword$_COLON_socket_,cljs.core.constant$keyword$_COLON_url,cljs.core.constant$keyword$_COLON_kalive_due_QMARK__,cljs.core.constant$keyword$_COLON_cbs_waiting_,cljs.core.constant$keyword$_COLON_kalive_timer_,cljs.core.constant$keyword$_COLON_state_],[client_id,ws_kalive_ms,(function (){var G__22906 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22906) : cljs.core.atom.call(null,G__22906));
})(),packer__$1,private_chs,(function (){var G__22907 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22907) : cljs.core.atom.call(null,G__22907));
})(),(function (){var G__22908 = path;
var G__22909 = window_location;
var G__22910 = cljs.core.constant$keyword$_COLON_ws;
return (chsk_url_fn.cljs$core$IFn$_invoke$arity$3 ? chsk_url_fn.cljs$core$IFn$_invoke$arity$3(G__22908,G__22909,G__22910) : chsk_url_fn.call(null,G__22908,G__22909,G__22910));
})(),(function (){var G__22911 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22911) : cljs.core.atom.call(null,G__22911));
})(),(function (){var G__22912 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22912) : cljs.core.atom.call(null,G__22912));
})(),(function (){var G__22913 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22913) : cljs.core.atom.call(null,G__22913));
})(),(function (){var G__22914 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_type,cljs.core.constant$keyword$_COLON_ws,cljs.core.constant$keyword$_COLON_open_QMARK_,false,cljs.core.constant$keyword$_COLON_destroyed_QMARK_,false], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22914) : cljs.core.atom.call(null,G__22914));
})()])).taoensso$sente$IChSocket$chsk_init_BANG_$arity$1(null);
} else {
return and__15671__auto__;
}
})();
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
var and__15671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.constant$keyword$_COLON_ws);
if(and__15671__auto__){
return taoensso.sente.map__GT_ChAjaxSocket(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$_COLON_client_id,client_id,cljs.core.constant$keyword$_COLON_url,(function (){var G__22920 = path;
var G__22921 = window_location;
var G__22922 = cljs.core.not(cljs.core.constant$keyword$_COLON_ws);
return (chsk_url_fn.cljs$core$IFn$_invoke$arity$3 ? chsk_url_fn.cljs$core$IFn$_invoke$arity$3(G__22920,G__22921,G__22922) : chsk_url_fn.call(null,G__22920,G__22921,G__22922));
})(),cljs.core.constant$keyword$_COLON_chs,private_chs,cljs.core.constant$keyword$_COLON_packer,packer__$1,cljs.core.constant$keyword$_COLON_timeout_ms,lp_timeout_ms,cljs.core.constant$keyword$_COLON_curr_xhr_,(function (){var G__22923 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22923) : cljs.core.atom.call(null,G__22923));
})(),cljs.core.constant$keyword$_COLON_state_,(function (){var G__22924 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_type,cljs.core.constant$keyword$_COLON_ajax,cljs.core.constant$keyword$_COLON_open_QMARK_,false,cljs.core.constant$keyword$_COLON_destroyed_QMARK_,false], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22924) : cljs.core.atom.call(null,G__22924));
})()], null)).taoensso$sente$IChSocket$chsk_init_BANG_$arity$1(null);
} else {
return and__15671__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"chsk","chsk",776828446,null)], 0)))].join('')))})());
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_(((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__22864,map__22865,map__22865__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function taoensso$sente$make_channel_socket_BANG__$_ev__GT_ev_msg(ev){
var vec__22926 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22926,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22926,(1),null);
var ev__$1 = vec__22926;
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$_COLON_ch_recv,public_ch_recv,cljs.core.constant$keyword$_COLON_send_fn,send_fn,cljs.core.constant$keyword$_COLON_state,cljs.core.constant$keyword$_COLON_state_.cljs$core$IFn$_invoke$arity$1(chsk),cljs.core.constant$keyword$_COLON_event,ev__$1,cljs.core.constant$keyword$_COLON_id,ev_id,cljs.core.constant$keyword$_COLON__QMARK_data,ev__QMARK_data], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__22864,map__22865,map__22865__$1,opts,client_id,packer,chsk_url_fn,lp_timeout_ms,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$_COLON_chsk,chsk,cljs.core.constant$keyword$_COLON_ch_recv,public_ch_recv__$1,cljs.core.constant$keyword$_COLON_send_fn,send_fn,cljs.core.constant$keyword$_COLON_state,cljs.core.constant$keyword$_COLON_state_.cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
};
var taoensso$sente$make_channel_socket_BANG_ = function (path,var_args){
var p__22800 = null;
if (arguments.length > 1) {
var G__22943__i = 0, G__22943__a = new Array(arguments.length -  1);
while (G__22943__i < G__22943__a.length) {G__22943__a[G__22943__i] = arguments[G__22943__i + 1]; ++G__22943__i;}
  p__22800 = new cljs.core.IndexedSeq(G__22943__a,0);
} 
return taoensso$sente$make_channel_socket_BANG___delegate.call(this,path,p__22800);};
taoensso$sente$make_channel_socket_BANG_.cljs$lang$maxFixedArity = 1;
taoensso$sente$make_channel_socket_BANG_.cljs$lang$applyTo = (function (arglist__22944){
var path = cljs.core.first(arglist__22944);
var p__22800 = cljs.core.rest(arglist__22944);
return taoensso$sente$make_channel_socket_BANG___delegate(path,p__22800);
});
taoensso$sente$make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic = taoensso$sente$make_channel_socket_BANG___delegate;
return taoensso$sente$make_channel_socket_BANG_;
})()
;
/**
 * Creates a go-loop to call `(event-msg-handler <event-msg>)` and returns a
 * `(fn stop! [])`. Catches & logs errors. Advanced users may choose to instead
 * write their own loop against `ch-recv`.
 * @param {...*} var_args
 */
taoensso.sente.start_chsk_router_BANG_ = (function() { 
var taoensso$sente$start_chsk_router_BANG___delegate = function (ch_recv,event_msg_handler,p__22945){
var vec__23054 = p__22945;
var map__23055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23054,(0),null);
var map__23055__$1 = ((cljs.core.seq_QMARK_(map__23055))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23055):map__23055);
var opts = map__23055__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23055__$1,cljs.core.constant$keyword$_COLON_trace_evs_QMARK_);
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__17765__auto___23162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17765__auto___23162,ch_ctrl,vec__23054,map__23055,map__23055__$1,opts,trace_evs_QMARK_){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (c__17765__auto___23162,ch_ctrl,vec__23054,map__23055,map__23055__$1,opts,trace_evs_QMARK_){
return (function (state_23114){
var state_val_23115 = (state_23114[(1)]);
if((state_val_23115 === (7))){
var inst_23067 = (state_23114[(2)]);
var inst_23068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23067,(0),null);
var inst_23069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23067,(1),null);
var inst_23070 = (function (){var G__23116 = inst_23069;
var G__23117 = ch_ctrl;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23116,G__23117) : taoensso.encore.kw_identical_QMARK_.call(null,G__23116,G__23117));
})();
var state_23114__$1 = (function (){var statearr_23118 = state_23114;
(statearr_23118[(7)] = inst_23068);

return statearr_23118;
})();
if(cljs.core.truth_(inst_23070)){
var statearr_23119_23163 = state_23114__$1;
(statearr_23119_23163[(1)] = (8));

} else {
var statearr_23120_23164 = state_23114__$1;
(statearr_23120_23164[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (20))){
var inst_23080 = (state_23114[(8)]);
var inst_23094 = taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic("Bad event: %s",cljs.core.array_seq([inst_23080], 0));
var state_23114__$1 = state_23114;
var statearr_23121_23165 = state_23114__$1;
(statearr_23121_23165[(2)] = inst_23094);

(statearr_23121_23165[(1)] = (22));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (1))){
var state_23114__$1 = state_23114;
var statearr_23122_23166 = state_23114__$1;
(statearr_23122_23166[(2)] = null);

(statearr_23122_23166[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (24))){
var state_23114__$1 = state_23114;
var statearr_23123_23167 = state_23114__$1;
(statearr_23123_23167[(2)] = null);

(statearr_23123_23167[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (4))){
var inst_23104 = (state_23114[(2)]);
var inst_23105 = (function (){var G__23124 = cljs.core.constant$keyword$_COLON_taoensso$sente_SLASH_stop;
var G__23125 = inst_23104;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__23124,G__23125) : taoensso.encore.kw_identical_QMARK_.call(null,G__23124,G__23125));
})();
var state_23114__$1 = state_23114;
if(cljs.core.truth_(inst_23105)){
var statearr_23126_23168 = state_23114__$1;
(statearr_23126_23168[(1)] = (23));

} else {
var statearr_23127_23169 = state_23114__$1;
(statearr_23127_23169[(1)] = (24));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (15))){
var inst_23080 = (state_23114[(8)]);
var inst_23081 = (state_23114[(2)]);
var inst_23082 = taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic("Chsk router handling error: %s",cljs.core.array_seq([inst_23080], 0));
var state_23114__$1 = (function (){var statearr_23128 = state_23114;
(statearr_23128[(9)] = inst_23081);

return statearr_23128;
})();
var statearr_23129_23170 = state_23114__$1;
(statearr_23129_23170[(2)] = inst_23082);


cljs.core.async.impl.ioc_helpers.process_exception(state_23114__$1);

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (21))){
var inst_23079 = (state_23114[(10)]);
var inst_23096 = (function (){var G__23130 = inst_23079;
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__23130) : event_msg_handler.call(null,G__23130));
})();
var state_23114__$1 = state_23114;
var statearr_23131_23171 = state_23114__$1;
(statearr_23131_23171[(2)] = inst_23096);

(statearr_23131_23171[(1)] = (22));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (13))){
var inst_23079 = (state_23114[(10)]);
var inst_23079__$1 = (state_23114[(2)]);
var inst_23080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23079__$1,cljs.core.constant$keyword$_COLON_event);
var state_23114__$1 = (function (){var statearr_23132 = state_23114;
(statearr_23132[(8)] = inst_23080);

(statearr_23132[(10)] = inst_23079__$1);

return statearr_23132;
})();
var statearr_23133_23172 = state_23114__$1;
(statearr_23133_23172[(2)] = null);

(statearr_23133_23172[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (22))){
var inst_23098 = (state_23114[(2)]);
var state_23114__$1 = (function (){var statearr_23134 = state_23114;
(statearr_23134[(11)] = inst_23098);

return statearr_23134;
})();
var statearr_23135_23173 = state_23114__$1;
(statearr_23135_23173[(2)] = null);


cljs.core.async.impl.ioc_helpers.process_exception(state_23114__$1);

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (6))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23114,(5),Error,null,(4));
var inst_23063 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23064 = [ch_recv,ch_ctrl];
var inst_23065 = (new cljs.core.PersistentVector(null,2,(5),inst_23063,inst_23064,null));
var state_23114__$1 = state_23114;
return cljs.core.async.ioc_alts_BANG_(state_23114__$1,(7),inst_23065);
} else {
if((state_val_23115 === (25))){
var inst_23110 = (state_23114[(2)]);
var state_23114__$1 = state_23114;
var statearr_23136_23174 = state_23114__$1;
(statearr_23136_23174[(2)] = inst_23110);

(statearr_23136_23174[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (17))){
var inst_23080 = (state_23114[(8)]);
var inst_23087 = taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic("Pre-handler event: %s",cljs.core.array_seq([inst_23080], 0));
var state_23114__$1 = state_23114;
var statearr_23137_23175 = state_23114__$1;
(statearr_23137_23175[(2)] = inst_23087);

(statearr_23137_23175[(1)] = (19));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (3))){
var inst_23112 = (state_23114[(2)]);
var state_23114__$1 = state_23114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23114__$1,inst_23112);
} else {
if((state_val_23115 === (12))){
var inst_23068 = (state_23114[(7)]);
var state_23114__$1 = state_23114;
var statearr_23138_23176 = state_23114__$1;
(statearr_23138_23176[(2)] = inst_23068);

(statearr_23138_23176[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (2))){
var state_23114__$1 = state_23114;
var statearr_23139_23177 = state_23114__$1;
(statearr_23139_23177[(2)] = null);

(statearr_23139_23177[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (23))){
var state_23114__$1 = state_23114;
var statearr_23140_23178 = state_23114__$1;
(statearr_23140_23178[(2)] = null);

(statearr_23140_23178[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (19))){
var inst_23079 = (state_23114[(10)]);
var inst_23090 = (state_23114[(2)]);
var inst_23091 = taoensso.sente.event_msg_QMARK_(inst_23079);
var inst_23092 = !(inst_23091);
var state_23114__$1 = (function (){var statearr_23141 = state_23114;
(statearr_23141[(12)] = inst_23090);

return statearr_23141;
})();
if(inst_23092){
var statearr_23142_23179 = state_23114__$1;
(statearr_23142_23179[(1)] = (20));

} else {
var statearr_23143_23180 = state_23114__$1;
(statearr_23143_23180[(1)] = (21));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (11))){
var inst_23068 = (state_23114[(7)]);
var inst_23076 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23068);
var state_23114__$1 = state_23114;
var statearr_23144_23181 = state_23114__$1;
(statearr_23144_23181[(2)] = inst_23076);

(statearr_23144_23181[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (9))){
var inst_23068 = (state_23114[(7)]);
var inst_23074 = cljs.core.seq_QMARK_(inst_23068);
var state_23114__$1 = state_23114;
if(inst_23074){
var statearr_23145_23182 = state_23114__$1;
(statearr_23145_23182[(1)] = (11));

} else {
var statearr_23146_23183 = state_23114__$1;
(statearr_23146_23183[(1)] = (12));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (5))){
var inst_23057 = (state_23114[(2)]);
var inst_23058 = taoensso.encore.errorf("Chsk router channel error!");
var state_23114__$1 = (function (){var statearr_23147 = state_23114;
(statearr_23147[(13)] = inst_23057);

return statearr_23147;
})();
var statearr_23148_23184 = state_23114__$1;
(statearr_23148_23184[(2)] = inst_23058);


cljs.core.async.impl.ioc_helpers.process_exception(state_23114__$1);

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (14))){
var inst_23100 = (state_23114[(2)]);
var state_23114__$1 = state_23114;
var statearr_23149_23185 = state_23114__$1;
(statearr_23149_23185[(2)] = inst_23100);

(statearr_23149_23185[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (16))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23114,(15),Error,null,(14));
var state_23114__$1 = state_23114;
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_23150_23186 = state_23114__$1;
(statearr_23150_23186[(1)] = (17));

} else {
var statearr_23151_23187 = state_23114__$1;
(statearr_23151_23187[(1)] = (18));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (10))){
var inst_23102 = (state_23114[(2)]);
var state_23114__$1 = state_23114;
var statearr_23152_23188 = state_23114__$1;
(statearr_23152_23188[(2)] = inst_23102);


cljs.core.async.impl.ioc_helpers.process_exception(state_23114__$1);

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (18))){
var state_23114__$1 = state_23114;
var statearr_23153_23189 = state_23114__$1;
(statearr_23153_23189[(2)] = null);

(statearr_23153_23189[(1)] = (19));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_23115 === (8))){
var state_23114__$1 = state_23114;
var statearr_23154_23190 = state_23114__$1;
(statearr_23154_23190[(2)] = cljs.core.constant$keyword$_COLON_taoensso$sente_SLASH_stop);

(statearr_23154_23190[(1)] = (10));


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
}
}
}
}
});})(c__17765__auto___23162,ch_ctrl,vec__23054,map__23055,map__23055__$1,opts,trace_evs_QMARK_))
;
return ((function (switch__17685__auto__,c__17765__auto___23162,ch_ctrl,vec__23054,map__23055,map__23055__$1,opts,trace_evs_QMARK_){
return (function() {
var taoensso$sente$start_chsk_router_BANG__$_state_machine__17686__auto__ = null;
var taoensso$sente$start_chsk_router_BANG__$_state_machine__17686__auto____0 = (function (){
var statearr_23158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23158[(0)] = taoensso$sente$start_chsk_router_BANG__$_state_machine__17686__auto__);

(statearr_23158[(1)] = (1));

return statearr_23158;
});
var taoensso$sente$start_chsk_router_BANG__$_state_machine__17686__auto____1 = (function (state_23114){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_23114);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e23159){if((e23159 instanceof Object)){
var ex__17689__auto__ = e23159;
var statearr_23160_23191 = state_23114;
(statearr_23160_23191[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23114);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e23159;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__23192 = state_23114;
state_23114 = G__23192;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
taoensso$sente$start_chsk_router_BANG__$_state_machine__17686__auto__ = function(state_23114){
switch(arguments.length){
case 0:
return taoensso$sente$start_chsk_router_BANG__$_state_machine__17686__auto____0.call(this);
case 1:
return taoensso$sente$start_chsk_router_BANG__$_state_machine__17686__auto____1.call(this,state_23114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$start_chsk_router_BANG__$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$start_chsk_router_BANG__$_state_machine__17686__auto____0;
taoensso$sente$start_chsk_router_BANG__$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$start_chsk_router_BANG__$_state_machine__17686__auto____1;
return taoensso$sente$start_chsk_router_BANG__$_state_machine__17686__auto__;
})()
;})(switch__17685__auto__,c__17765__auto___23162,ch_ctrl,vec__23054,map__23055,map__23055__$1,opts,trace_evs_QMARK_))
})();
var state__17767__auto__ = (function (){var statearr_23161 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_23161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto___23162);

return statearr_23161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(c__17765__auto___23162,ch_ctrl,vec__23054,map__23055,map__23055__$1,opts,trace_evs_QMARK_))
);


return ((function (ch_ctrl,vec__23054,map__23055,map__23055__$1,opts,trace_evs_QMARK_){
return (function taoensso$sente$start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
;})(ch_ctrl,vec__23054,map__23055,map__23055__$1,opts,trace_evs_QMARK_))
};
var taoensso$sente$start_chsk_router_BANG_ = function (ch_recv,event_msg_handler,var_args){
var p__22945 = null;
if (arguments.length > 2) {
var G__23193__i = 0, G__23193__a = new Array(arguments.length -  2);
while (G__23193__i < G__23193__a.length) {G__23193__a[G__23193__i] = arguments[G__23193__i + 2]; ++G__23193__i;}
  p__22945 = new cljs.core.IndexedSeq(G__23193__a,0);
} 
return taoensso$sente$start_chsk_router_BANG___delegate.call(this,ch_recv,event_msg_handler,p__22945);};
taoensso$sente$start_chsk_router_BANG_.cljs$lang$maxFixedArity = 2;
taoensso$sente$start_chsk_router_BANG_.cljs$lang$applyTo = (function (arglist__23194){
var ch_recv = cljs.core.first(arglist__23194);
arglist__23194 = cljs.core.next(arglist__23194);
var event_msg_handler = cljs.core.first(arglist__23194);
var p__22945 = cljs.core.rest(arglist__23194);
return taoensso$sente$start_chsk_router_BANG___delegate(ch_recv,event_msg_handler,p__22945);
});
taoensso$sente$start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = taoensso$sente$start_chsk_router_BANG___delegate;
return taoensso$sente$start_chsk_router_BANG_;
})()
;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead.
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_chsk_router_BANG_(ch_recv,(function (ev_msg){
var G__23197 = cljs.core.constant$keyword$_COLON_event.cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__23198 = cljs.core.constant$keyword$_COLON_ch_recv.cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__23197,G__23198) : event_handler.call(null,G__23197,G__23198));
}));
});
