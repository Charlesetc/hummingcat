// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t24644 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24644 = (function (f,fn_handler,meta24645){
this.f = f;
this.fn_handler = fn_handler;
this.meta24645 = meta24645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24644.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24644.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24644.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24646){
var self__ = this;
var _24646__$1 = this;
return self__.meta24645;
});

cljs.core.async.t24644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24646,meta24645__$1){
var self__ = this;
var _24646__$1 = this;
return (new cljs.core.async.t24644(self__.f,self__.fn_handler,meta24645__$1));
});

cljs.core.async.t24644.cljs$lang$type = true;

cljs.core.async.t24644.cljs$lang$ctorStr = "cljs.core.async/t24644";

cljs.core.async.t24644.cljs$lang$ctorPrWriter = (function (this__16270__auto__,writer__16271__auto__,opt__16272__auto__){
return cljs.core._write(writer__16271__auto__,"cljs.core.async/t24644");
});

cljs.core.async.__GT_t24644 = (function cljs$core$async$fn_handler_$___GT_t24644(f__$1,fn_handler__$1,meta24645){
return (new cljs.core.async.t24644(f__$1,fn_handler__$1,meta24645));
});

}

return (new cljs.core.async.t24644(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__24648 = buff;
if(G__24648){
var bit__16364__auto__ = null;
if(cljs.core.truth_((function (){var or__15683__auto__ = bit__16364__auto__;
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return G__24648.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__24648.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24648);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24648);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function() {
var cljs$core$async$chan = null;
var cljs$core$async$chan__0 = (function (){
return cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1(null);
});
var cljs$core$async$chan__1 = (function (buf_or_n){
return cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var cljs$core$async$chan__2 = (function (buf_or_n,xform){
return cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var cljs$core$async$chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
cljs$core$async$chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return cljs$core$async$chan__0.call(this);
case 1:
return cljs$core$async$chan__1.call(this,buf_or_n);
case 2:
return cljs$core$async$chan__2.call(this,buf_or_n,xform);
case 3:
return cljs$core$async$chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$chan__0;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$chan__1;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$chan__2;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$chan__3;
return cljs$core$async$chan;
})()
;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function() {
var cljs$core$async$take_BANG_ = null;
var cljs$core$async$take_BANG___2 = (function (port,fn1){
return cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var cljs$core$async$take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_24665 = (function (){var G__24662 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24662) : cljs.core.deref.call(null,G__24662));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__24663_24666 = val_24665;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24663_24666) : fn1.call(null,G__24663_24666));
} else {
cljs.core.async.impl.dispatch.run(((function (val_24665,ret){
return (function (){
var G__24664 = val_24665;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24664) : fn1.call(null,G__24664));
});})(val_24665,ret))
);
}
} else {
}

return null;
});
cljs$core$async$take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$take_BANG___2.call(this,port,fn1);
case 3:
return cljs$core$async$take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take_BANG___2;
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take_BANG___3;
return cljs$core$async$take_BANG_;
})()
;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function() {
var cljs$core$async$put_BANG_ = null;
var cljs$core$async$put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
var G__24675 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24675) : cljs.core.deref.call(null,G__24675));
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = (function (){var G__24676 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24676) : cljs.core.deref.call(null,G__24676));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__24677_24679 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24677_24679) : fn1.call(null,G__24677_24679));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__24678 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24678) : fn1.call(null,G__24678));
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
cljs$core$async$put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$put_BANG___2.call(this,port,val);
case 3:
return cljs$core$async$put_BANG___3.call(this,port,val,fn1);
case 4:
return cljs$core$async$put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$put_BANG___2;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$put_BANG___3;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$put_BANG___4;
return cljs$core$async$put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__16570__auto___24680 = n;
var x_24681 = (0);
while(true){
if((x_24681 < n__16570__auto___24680)){
(a[x_24681] = (0));

var G__24682 = (x_24681 + (1));
x_24681 = G__24682;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__24683 = (i + (1));
i = G__24683;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (function (){var G__24691 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24691) : cljs.core.atom.call(null,G__24691));
})();
if(typeof cljs.core.async.t24692 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24692 = (function (flag,alt_flag,meta24693){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24693 = meta24693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24692.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24695 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24695) : cljs.core.deref.call(null,G__24695));
});})(flag))
;

cljs.core.async.t24692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24696_24698 = self__.flag;
var G__24697_24699 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24696_24698,G__24697_24699) : cljs.core.reset_BANG_.call(null,G__24696_24698,G__24697_24699));

return true;
});})(flag))
;

cljs.core.async.t24692.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24694){
var self__ = this;
var _24694__$1 = this;
return self__.meta24693;
});})(flag))
;

cljs.core.async.t24692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24694,meta24693__$1){
var self__ = this;
var _24694__$1 = this;
return (new cljs.core.async.t24692(self__.flag,self__.alt_flag,meta24693__$1));
});})(flag))
;

cljs.core.async.t24692.cljs$lang$type = true;

cljs.core.async.t24692.cljs$lang$ctorStr = "cljs.core.async/t24692";

cljs.core.async.t24692.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16270__auto__,writer__16271__auto__,opt__16272__auto__){
return cljs.core._write(writer__16271__auto__,"cljs.core.async/t24692");
});})(flag))
;

cljs.core.async.__GT_t24692 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t24692(flag__$1,alt_flag__$1,meta24693){
return (new cljs.core.async.t24692(flag__$1,alt_flag__$1,meta24693));
});})(flag))
;

}

return (new cljs.core.async.t24692(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t24703 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24703 = (function (cb,flag,alt_handler,meta24704){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24704 = meta24704;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24703.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24703.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t24703.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t24703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24705){
var self__ = this;
var _24705__$1 = this;
return self__.meta24704;
});

cljs.core.async.t24703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24705,meta24704__$1){
var self__ = this;
var _24705__$1 = this;
return (new cljs.core.async.t24703(self__.cb,self__.flag,self__.alt_handler,meta24704__$1));
});

cljs.core.async.t24703.cljs$lang$type = true;

cljs.core.async.t24703.cljs$lang$ctorStr = "cljs.core.async/t24703";

cljs.core.async.t24703.cljs$lang$ctorPrWriter = (function (this__16270__auto__,writer__16271__auto__,opt__16272__auto__){
return cljs.core._write(writer__16271__auto__,"cljs.core.async/t24703");
});

cljs.core.async.__GT_t24703 = (function cljs$core$async$alt_handler_$___GT_t24703(cb__$1,flag__$1,alt_handler__$1,meta24704){
return (new cljs.core.async.t24703(cb__$1,flag__$1,alt_handler__$1,meta24704));
});

}

return (new cljs.core.async.t24703(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$_COLON_priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__24713 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24713) : port.call(null,G__24713));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__24714 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24714) : port.call(null,G__24714));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24706_SHARP_){
var G__24715 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24706_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24715) : fret.call(null,G__24715));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24707_SHARP_){
var G__24716 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24707_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24716) : fret.call(null,G__24716));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24717 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24717) : cljs.core.deref.call(null,G__24717));
})(),(function (){var or__15683__auto__ = wport;
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24718 = (i + (1));
i = G__24718;
continue;
}
} else {
return null;
}
break;
}
})();
var or__15683__auto__ = ret;
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$_COLON_default)){
var temp__4126__auto__ = (function (){var and__15671__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__15671__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__15671__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$_COLON_default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 * @param {...*} var_args
 */
cljs.core.async.alts_BANG_ = (function() { 
var cljs$core$async$alts_BANG___delegate = function (ports,p__24719){
var map__24721 = p__24719;
var map__24721__$1 = ((cljs.core.seq_QMARK_(map__24721))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24721):map__24721);
var opts = map__24721__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__24719 = null;
if (arguments.length > 1) {
var G__24722__i = 0, G__24722__a = new Array(arguments.length -  1);
while (G__24722__i < G__24722__a.length) {G__24722__a[G__24722__i] = arguments[G__24722__i + 1]; ++G__24722__i;}
  p__24719 = new cljs.core.IndexedSeq(G__24722__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__24719);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__24723){
var ports = cljs.core.first(arglist__24723);
var p__24719 = cljs.core.rest(arglist__24723);
return cljs$core$async$alts_BANG___delegate(ports,p__24719);
});
cljs$core$async$alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$alts_BANG___delegate;
return cljs$core$async$alts_BANG_;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function() {
var cljs$core$async$pipe = null;
var cljs$core$async$pipe__2 = (function (from,to){
return cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var cljs$core$async$pipe__3 = (function (from,to,close_QMARK_){
var c__17765__auto___24821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17765__auto___24821){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (c__17765__auto___24821){
return (function (state_24797){
var state_val_24798 = (state_24797[(1)]);
if((state_val_24798 === (7))){
var inst_24793 = (state_24797[(2)]);
var state_24797__$1 = state_24797;
var statearr_24799_24822 = state_24797__$1;
(statearr_24799_24822[(2)] = inst_24793);

(statearr_24799_24822[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_24798 === (1))){
var state_24797__$1 = state_24797;
var statearr_24800_24823 = state_24797__$1;
(statearr_24800_24823[(2)] = null);

(statearr_24800_24823[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_24798 === (4))){
var inst_24776 = (state_24797[(7)]);
var inst_24776__$1 = (state_24797[(2)]);
var inst_24777 = (inst_24776__$1 == null);
var state_24797__$1 = (function (){var statearr_24801 = state_24797;
(statearr_24801[(7)] = inst_24776__$1);

return statearr_24801;
})();
if(cljs.core.truth_(inst_24777)){
var statearr_24802_24824 = state_24797__$1;
(statearr_24802_24824[(1)] = (5));

} else {
var statearr_24803_24825 = state_24797__$1;
(statearr_24803_24825[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_24798 === (13))){
var state_24797__$1 = state_24797;
var statearr_24804_24826 = state_24797__$1;
(statearr_24804_24826[(2)] = null);

(statearr_24804_24826[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_24798 === (6))){
var inst_24776 = (state_24797[(7)]);
var state_24797__$1 = state_24797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24797__$1,(11),to,inst_24776);
} else {
if((state_val_24798 === (3))){
var inst_24795 = (state_24797[(2)]);
var state_24797__$1 = state_24797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24797__$1,inst_24795);
} else {
if((state_val_24798 === (12))){
var state_24797__$1 = state_24797;
var statearr_24805_24827 = state_24797__$1;
(statearr_24805_24827[(2)] = null);

(statearr_24805_24827[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_24798 === (2))){
var state_24797__$1 = state_24797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24797__$1,(4),from);
} else {
if((state_val_24798 === (11))){
var inst_24786 = (state_24797[(2)]);
var state_24797__$1 = state_24797;
if(cljs.core.truth_(inst_24786)){
var statearr_24806_24828 = state_24797__$1;
(statearr_24806_24828[(1)] = (12));

} else {
var statearr_24807_24829 = state_24797__$1;
(statearr_24807_24829[(1)] = (13));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_24798 === (9))){
var state_24797__$1 = state_24797;
var statearr_24808_24830 = state_24797__$1;
(statearr_24808_24830[(2)] = null);

(statearr_24808_24830[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_24798 === (5))){
var state_24797__$1 = state_24797;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24809_24831 = state_24797__$1;
(statearr_24809_24831[(1)] = (8));

} else {
var statearr_24810_24832 = state_24797__$1;
(statearr_24810_24832[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_24798 === (14))){
var inst_24791 = (state_24797[(2)]);
var state_24797__$1 = state_24797;
var statearr_24811_24833 = state_24797__$1;
(statearr_24811_24833[(2)] = inst_24791);

(statearr_24811_24833[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_24798 === (10))){
var inst_24783 = (state_24797[(2)]);
var state_24797__$1 = state_24797;
var statearr_24812_24834 = state_24797__$1;
(statearr_24812_24834[(2)] = inst_24783);

(statearr_24812_24834[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_24798 === (8))){
var inst_24780 = cljs.core.async.close_BANG_(to);
var state_24797__$1 = state_24797;
var statearr_24813_24835 = state_24797__$1;
(statearr_24813_24835[(2)] = inst_24780);

(statearr_24813_24835[(1)] = (10));


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
});})(c__17765__auto___24821))
;
return ((function (switch__17685__auto__,c__17765__auto___24821){
return (function() {
var cljs$core$async$pipe_$_state_machine__17686__auto__ = null;
var cljs$core$async$pipe_$_state_machine__17686__auto____0 = (function (){
var statearr_24817 = [null,null,null,null,null,null,null,null];
(statearr_24817[(0)] = cljs$core$async$pipe_$_state_machine__17686__auto__);

(statearr_24817[(1)] = (1));

return statearr_24817;
});
var cljs$core$async$pipe_$_state_machine__17686__auto____1 = (function (state_24797){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_24797);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e24818){if((e24818 instanceof Object)){
var ex__17689__auto__ = e24818;
var statearr_24819_24836 = state_24797;
(statearr_24819_24836[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24797);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e24818;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__24837 = state_24797;
state_24797 = G__24837;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__17686__auto__ = function(state_24797){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__17686__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__17686__auto____1.call(this,state_24797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__17686__auto____0;
cljs$core$async$pipe_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__17686__auto____1;
return cljs$core$async$pipe_$_state_machine__17686__auto__;
})()
;})(switch__17685__auto__,c__17765__auto___24821))
})();
var state__17767__auto__ = (function (){var statearr_24820 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_24820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto___24821);

return statearr_24820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(c__17765__auto___24821))
);


return to;
});
cljs$core$async$pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$pipe__2.call(this,from,to);
case 3:
return cljs$core$async$pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pipe__2;
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pipe__3;
return cljs$core$async$pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__25023){
var vec__25024 = p__25023;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25024,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25024,(1),null);
var job = vec__25024;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17765__auto___25208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17765__auto___25208,res,vec__25024,v,p,job,jobs,results){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (c__17765__auto___25208,res,vec__25024,v,p,job,jobs,results){
return (function (state_25029){
var state_val_25030 = (state_25029[(1)]);
if((state_val_25030 === (2))){
var inst_25026 = (state_25029[(2)]);
var inst_25027 = cljs.core.async.close_BANG_(res);
var state_25029__$1 = (function (){var statearr_25031 = state_25029;
(statearr_25031[(7)] = inst_25026);

return statearr_25031;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25029__$1,inst_25027);
} else {
if((state_val_25030 === (1))){
var state_25029__$1 = state_25029;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25029__$1,(2),res,v);
} else {
return null;
}
}
});})(c__17765__auto___25208,res,vec__25024,v,p,job,jobs,results))
;
return ((function (switch__17685__auto__,c__17765__auto___25208,res,vec__25024,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____0 = (function (){
var statearr_25035 = [null,null,null,null,null,null,null,null];
(statearr_25035[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__);

(statearr_25035[(1)] = (1));

return statearr_25035;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____1 = (function (state_25029){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_25029);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e25036){if((e25036 instanceof Object)){
var ex__17689__auto__ = e25036;
var statearr_25037_25209 = state_25029;
(statearr_25037_25209[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25029);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e25036;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__25210 = state_25029;
state_25029 = G__25210;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__ = function(state_25029){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____1.call(this,state_25029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__;
})()
;})(switch__17685__auto__,c__17765__auto___25208,res,vec__25024,v,p,job,jobs,results))
})();
var state__17767__auto__ = (function (){var statearr_25038 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_25038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto___25208);

return statearr_25038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(c__17765__auto___25208,res,vec__25024,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25039){
var vec__25040 = p__25039;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25040,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25040,(1),null);
var job = vec__25040;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__25041_25211 = v;
var G__25042_25212 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__25041_25211,G__25042_25212) : xf.call(null,G__25041_25211,G__25042_25212));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__16570__auto___25213 = n;
var __25214 = (0);
while(true){
if((__25214 < n__16570__auto___25213)){
var G__25043_25215 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25043_25215) {
case "async":
var c__17765__auto___25217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25214,c__17765__auto___25217,G__25043_25215,n__16570__auto___25213,jobs,results,process,async){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (__25214,c__17765__auto___25217,G__25043_25215,n__16570__auto___25213,jobs,results,process,async){
return (function (state_25056){
var state_val_25057 = (state_25056[(1)]);
if((state_val_25057 === (7))){
var inst_25052 = (state_25056[(2)]);
var state_25056__$1 = state_25056;
var statearr_25058_25218 = state_25056__$1;
(statearr_25058_25218[(2)] = inst_25052);

(statearr_25058_25218[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25057 === (6))){
var state_25056__$1 = state_25056;
var statearr_25059_25219 = state_25056__$1;
(statearr_25059_25219[(2)] = null);

(statearr_25059_25219[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25057 === (5))){
var state_25056__$1 = state_25056;
var statearr_25060_25220 = state_25056__$1;
(statearr_25060_25220[(2)] = null);

(statearr_25060_25220[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25057 === (4))){
var inst_25046 = (state_25056[(2)]);
var inst_25047 = async(inst_25046);
var state_25056__$1 = state_25056;
if(cljs.core.truth_(inst_25047)){
var statearr_25061_25221 = state_25056__$1;
(statearr_25061_25221[(1)] = (5));

} else {
var statearr_25062_25222 = state_25056__$1;
(statearr_25062_25222[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25057 === (3))){
var inst_25054 = (state_25056[(2)]);
var state_25056__$1 = state_25056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25056__$1,inst_25054);
} else {
if((state_val_25057 === (2))){
var state_25056__$1 = state_25056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25056__$1,(4),jobs);
} else {
if((state_val_25057 === (1))){
var state_25056__$1 = state_25056;
var statearr_25063_25223 = state_25056__$1;
(statearr_25063_25223[(2)] = null);

(statearr_25063_25223[(1)] = (2));


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
});})(__25214,c__17765__auto___25217,G__25043_25215,n__16570__auto___25213,jobs,results,process,async))
;
return ((function (__25214,switch__17685__auto__,c__17765__auto___25217,G__25043_25215,n__16570__auto___25213,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____0 = (function (){
var statearr_25067 = [null,null,null,null,null,null,null];
(statearr_25067[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__);

(statearr_25067[(1)] = (1));

return statearr_25067;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____1 = (function (state_25056){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_25056);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e25068){if((e25068 instanceof Object)){
var ex__17689__auto__ = e25068;
var statearr_25069_25224 = state_25056;
(statearr_25069_25224[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25056);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e25068;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__25225 = state_25056;
state_25056 = G__25225;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__ = function(state_25056){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____1.call(this,state_25056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__;
})()
;})(__25214,switch__17685__auto__,c__17765__auto___25217,G__25043_25215,n__16570__auto___25213,jobs,results,process,async))
})();
var state__17767__auto__ = (function (){var statearr_25070 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_25070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto___25217);

return statearr_25070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(__25214,c__17765__auto___25217,G__25043_25215,n__16570__auto___25213,jobs,results,process,async))
);


break;
case "compute":
var c__17765__auto___25226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25214,c__17765__auto___25226,G__25043_25215,n__16570__auto___25213,jobs,results,process,async){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (__25214,c__17765__auto___25226,G__25043_25215,n__16570__auto___25213,jobs,results,process,async){
return (function (state_25083){
var state_val_25084 = (state_25083[(1)]);
if((state_val_25084 === (7))){
var inst_25079 = (state_25083[(2)]);
var state_25083__$1 = state_25083;
var statearr_25085_25227 = state_25083__$1;
(statearr_25085_25227[(2)] = inst_25079);

(statearr_25085_25227[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25084 === (6))){
var state_25083__$1 = state_25083;
var statearr_25086_25228 = state_25083__$1;
(statearr_25086_25228[(2)] = null);

(statearr_25086_25228[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25084 === (5))){
var state_25083__$1 = state_25083;
var statearr_25087_25229 = state_25083__$1;
(statearr_25087_25229[(2)] = null);

(statearr_25087_25229[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25084 === (4))){
var inst_25073 = (state_25083[(2)]);
var inst_25074 = process(inst_25073);
var state_25083__$1 = state_25083;
if(cljs.core.truth_(inst_25074)){
var statearr_25088_25230 = state_25083__$1;
(statearr_25088_25230[(1)] = (5));

} else {
var statearr_25089_25231 = state_25083__$1;
(statearr_25089_25231[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25084 === (3))){
var inst_25081 = (state_25083[(2)]);
var state_25083__$1 = state_25083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25083__$1,inst_25081);
} else {
if((state_val_25084 === (2))){
var state_25083__$1 = state_25083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25083__$1,(4),jobs);
} else {
if((state_val_25084 === (1))){
var state_25083__$1 = state_25083;
var statearr_25090_25232 = state_25083__$1;
(statearr_25090_25232[(2)] = null);

(statearr_25090_25232[(1)] = (2));


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
});})(__25214,c__17765__auto___25226,G__25043_25215,n__16570__auto___25213,jobs,results,process,async))
;
return ((function (__25214,switch__17685__auto__,c__17765__auto___25226,G__25043_25215,n__16570__auto___25213,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____0 = (function (){
var statearr_25094 = [null,null,null,null,null,null,null];
(statearr_25094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__);

(statearr_25094[(1)] = (1));

return statearr_25094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____1 = (function (state_25083){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_25083);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e25095){if((e25095 instanceof Object)){
var ex__17689__auto__ = e25095;
var statearr_25096_25233 = state_25083;
(statearr_25096_25233[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25083);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e25095;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__25234 = state_25083;
state_25083 = G__25234;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__ = function(state_25083){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____1.call(this,state_25083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__;
})()
;})(__25214,switch__17685__auto__,c__17765__auto___25226,G__25043_25215,n__16570__auto___25213,jobs,results,process,async))
})();
var state__17767__auto__ = (function (){var statearr_25097 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_25097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto___25226);

return statearr_25097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(__25214,c__17765__auto___25226,G__25043_25215,n__16570__auto___25213,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25235 = (__25214 + (1));
__25214 = G__25235;
continue;
} else {
}
break;
}

var c__17765__auto___25236 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17765__auto___25236,jobs,results,process,async){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (c__17765__auto___25236,jobs,results,process,async){
return (function (state_25119){
var state_val_25120 = (state_25119[(1)]);
if((state_val_25120 === (9))){
var inst_25112 = (state_25119[(2)]);
var state_25119__$1 = (function (){var statearr_25121 = state_25119;
(statearr_25121[(7)] = inst_25112);

return statearr_25121;
})();
var statearr_25122_25237 = state_25119__$1;
(statearr_25122_25237[(2)] = null);

(statearr_25122_25237[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25120 === (8))){
var inst_25105 = (state_25119[(8)]);
var inst_25110 = (state_25119[(2)]);
var state_25119__$1 = (function (){var statearr_25123 = state_25119;
(statearr_25123[(9)] = inst_25110);

return statearr_25123;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25119__$1,(9),results,inst_25105);
} else {
if((state_val_25120 === (7))){
var inst_25115 = (state_25119[(2)]);
var state_25119__$1 = state_25119;
var statearr_25124_25238 = state_25119__$1;
(statearr_25124_25238[(2)] = inst_25115);

(statearr_25124_25238[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25120 === (6))){
var inst_25100 = (state_25119[(10)]);
var inst_25105 = (state_25119[(8)]);
var inst_25105__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_25106 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25107 = [inst_25100,inst_25105__$1];
var inst_25108 = (new cljs.core.PersistentVector(null,2,(5),inst_25106,inst_25107,null));
var state_25119__$1 = (function (){var statearr_25125 = state_25119;
(statearr_25125[(8)] = inst_25105__$1);

return statearr_25125;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25119__$1,(8),jobs,inst_25108);
} else {
if((state_val_25120 === (5))){
var inst_25103 = cljs.core.async.close_BANG_(jobs);
var state_25119__$1 = state_25119;
var statearr_25126_25239 = state_25119__$1;
(statearr_25126_25239[(2)] = inst_25103);

(statearr_25126_25239[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25120 === (4))){
var inst_25100 = (state_25119[(10)]);
var inst_25100__$1 = (state_25119[(2)]);
var inst_25101 = (inst_25100__$1 == null);
var state_25119__$1 = (function (){var statearr_25127 = state_25119;
(statearr_25127[(10)] = inst_25100__$1);

return statearr_25127;
})();
if(cljs.core.truth_(inst_25101)){
var statearr_25128_25240 = state_25119__$1;
(statearr_25128_25240[(1)] = (5));

} else {
var statearr_25129_25241 = state_25119__$1;
(statearr_25129_25241[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25120 === (3))){
var inst_25117 = (state_25119[(2)]);
var state_25119__$1 = state_25119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25119__$1,inst_25117);
} else {
if((state_val_25120 === (2))){
var state_25119__$1 = state_25119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25119__$1,(4),from);
} else {
if((state_val_25120 === (1))){
var state_25119__$1 = state_25119;
var statearr_25130_25242 = state_25119__$1;
(statearr_25130_25242[(2)] = null);

(statearr_25130_25242[(1)] = (2));


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
});})(c__17765__auto___25236,jobs,results,process,async))
;
return ((function (switch__17685__auto__,c__17765__auto___25236,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____0 = (function (){
var statearr_25134 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25134[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__);

(statearr_25134[(1)] = (1));

return statearr_25134;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____1 = (function (state_25119){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_25119);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e25135){if((e25135 instanceof Object)){
var ex__17689__auto__ = e25135;
var statearr_25136_25243 = state_25119;
(statearr_25136_25243[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25119);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e25135;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__25244 = state_25119;
state_25119 = G__25244;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__ = function(state_25119){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____1.call(this,state_25119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__;
})()
;})(switch__17685__auto__,c__17765__auto___25236,jobs,results,process,async))
})();
var state__17767__auto__ = (function (){var statearr_25137 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_25137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto___25236);

return statearr_25137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(c__17765__auto___25236,jobs,results,process,async))
);


var c__17765__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17765__auto__,jobs,results,process,async){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (c__17765__auto__,jobs,results,process,async){
return (function (state_25175){
var state_val_25176 = (state_25175[(1)]);
if((state_val_25176 === (7))){
var inst_25171 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
var statearr_25177_25245 = state_25175__$1;
(statearr_25177_25245[(2)] = inst_25171);

(statearr_25177_25245[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25176 === (20))){
var state_25175__$1 = state_25175;
var statearr_25178_25246 = state_25175__$1;
(statearr_25178_25246[(2)] = null);

(statearr_25178_25246[(1)] = (21));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25176 === (1))){
var state_25175__$1 = state_25175;
var statearr_25179_25247 = state_25175__$1;
(statearr_25179_25247[(2)] = null);

(statearr_25179_25247[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25176 === (4))){
var inst_25140 = (state_25175[(7)]);
var inst_25140__$1 = (state_25175[(2)]);
var inst_25141 = (inst_25140__$1 == null);
var state_25175__$1 = (function (){var statearr_25180 = state_25175;
(statearr_25180[(7)] = inst_25140__$1);

return statearr_25180;
})();
if(cljs.core.truth_(inst_25141)){
var statearr_25181_25248 = state_25175__$1;
(statearr_25181_25248[(1)] = (5));

} else {
var statearr_25182_25249 = state_25175__$1;
(statearr_25182_25249[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25176 === (15))){
var inst_25153 = (state_25175[(8)]);
var state_25175__$1 = state_25175;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25175__$1,(18),to,inst_25153);
} else {
if((state_val_25176 === (21))){
var inst_25166 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
var statearr_25183_25250 = state_25175__$1;
(statearr_25183_25250[(2)] = inst_25166);

(statearr_25183_25250[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25176 === (13))){
var inst_25168 = (state_25175[(2)]);
var state_25175__$1 = (function (){var statearr_25184 = state_25175;
(statearr_25184[(9)] = inst_25168);

return statearr_25184;
})();
var statearr_25185_25251 = state_25175__$1;
(statearr_25185_25251[(2)] = null);

(statearr_25185_25251[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25176 === (6))){
var inst_25140 = (state_25175[(7)]);
var state_25175__$1 = state_25175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25175__$1,(11),inst_25140);
} else {
if((state_val_25176 === (17))){
var inst_25161 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
if(cljs.core.truth_(inst_25161)){
var statearr_25186_25252 = state_25175__$1;
(statearr_25186_25252[(1)] = (19));

} else {
var statearr_25187_25253 = state_25175__$1;
(statearr_25187_25253[(1)] = (20));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25176 === (3))){
var inst_25173 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25175__$1,inst_25173);
} else {
if((state_val_25176 === (12))){
var inst_25150 = (state_25175[(10)]);
var state_25175__$1 = state_25175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25175__$1,(14),inst_25150);
} else {
if((state_val_25176 === (2))){
var state_25175__$1 = state_25175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25175__$1,(4),results);
} else {
if((state_val_25176 === (19))){
var state_25175__$1 = state_25175;
var statearr_25188_25254 = state_25175__$1;
(statearr_25188_25254[(2)] = null);

(statearr_25188_25254[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25176 === (11))){
var inst_25150 = (state_25175[(2)]);
var state_25175__$1 = (function (){var statearr_25189 = state_25175;
(statearr_25189[(10)] = inst_25150);

return statearr_25189;
})();
var statearr_25190_25255 = state_25175__$1;
(statearr_25190_25255[(2)] = null);

(statearr_25190_25255[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25176 === (9))){
var state_25175__$1 = state_25175;
var statearr_25191_25256 = state_25175__$1;
(statearr_25191_25256[(2)] = null);

(statearr_25191_25256[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25176 === (5))){
var state_25175__$1 = state_25175;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25192_25257 = state_25175__$1;
(statearr_25192_25257[(1)] = (8));

} else {
var statearr_25193_25258 = state_25175__$1;
(statearr_25193_25258[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25176 === (14))){
var inst_25155 = (state_25175[(11)]);
var inst_25153 = (state_25175[(8)]);
var inst_25153__$1 = (state_25175[(2)]);
var inst_25154 = (inst_25153__$1 == null);
var inst_25155__$1 = cljs.core.not(inst_25154);
var state_25175__$1 = (function (){var statearr_25194 = state_25175;
(statearr_25194[(11)] = inst_25155__$1);

(statearr_25194[(8)] = inst_25153__$1);

return statearr_25194;
})();
if(inst_25155__$1){
var statearr_25195_25259 = state_25175__$1;
(statearr_25195_25259[(1)] = (15));

} else {
var statearr_25196_25260 = state_25175__$1;
(statearr_25196_25260[(1)] = (16));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25176 === (16))){
var inst_25155 = (state_25175[(11)]);
var state_25175__$1 = state_25175;
var statearr_25197_25261 = state_25175__$1;
(statearr_25197_25261[(2)] = inst_25155);

(statearr_25197_25261[(1)] = (17));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25176 === (10))){
var inst_25147 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
var statearr_25198_25262 = state_25175__$1;
(statearr_25198_25262[(2)] = inst_25147);

(statearr_25198_25262[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25176 === (18))){
var inst_25158 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
var statearr_25199_25263 = state_25175__$1;
(statearr_25199_25263[(2)] = inst_25158);

(statearr_25199_25263[(1)] = (17));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25176 === (8))){
var inst_25144 = cljs.core.async.close_BANG_(to);
var state_25175__$1 = state_25175;
var statearr_25200_25264 = state_25175__$1;
(statearr_25200_25264[(2)] = inst_25144);

(statearr_25200_25264[(1)] = (10));


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
});})(c__17765__auto__,jobs,results,process,async))
;
return ((function (switch__17685__auto__,c__17765__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____0 = (function (){
var statearr_25204 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25204[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__);

(statearr_25204[(1)] = (1));

return statearr_25204;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____1 = (function (state_25175){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_25175);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e25205){if((e25205 instanceof Object)){
var ex__17689__auto__ = e25205;
var statearr_25206_25265 = state_25175;
(statearr_25206_25265[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25175);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e25205;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__25266 = state_25175;
state_25175 = G__25266;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__ = function(state_25175){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____1.call(this,state_25175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17686__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17686__auto__;
})()
;})(switch__17685__auto__,c__17765__auto__,jobs,results,process,async))
})();
var state__17767__auto__ = (function (){var statearr_25207 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_25207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto__);

return statearr_25207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(c__17765__auto__,jobs,results,process,async))
);

return c__17765__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function() {
var cljs$core$async$pipeline_async = null;
var cljs$core$async$pipeline_async__4 = (function (n,to,af,from){
return cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var cljs$core$async$pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$_COLON_async);
});
cljs$core$async$pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline_async__4.call(this,n,to,af,from);
case 5:
return cljs$core$async$pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline_async__4;
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline_async__5;
return cljs$core$async$pipeline_async;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function() {
var cljs$core$async$pipeline = null;
var cljs$core$async$pipeline__4 = (function (n,to,xf,from){
return cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var cljs$core$async$pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var cljs$core$async$pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$_COLON_compute);
});
cljs$core$async$pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline__4.call(this,n,to,xf,from);
case 5:
return cljs$core$async$pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return cljs$core$async$pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline__4;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline__5;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6 = cljs$core$async$pipeline__6;
return cljs$core$async$pipeline;
})()
;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function() {
var cljs$core$async$split = null;
var cljs$core$async$split__2 = (function (p,ch){
return cljs$core$async$split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var cljs$core$async$split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17765__auto___25389 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17765__auto___25389,tc,fc){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (c__17765__auto___25389,tc,fc){
return (function (state_25363){
var state_val_25364 = (state_25363[(1)]);
if((state_val_25364 === (7))){
var inst_25359 = (state_25363[(2)]);
var state_25363__$1 = state_25363;
var statearr_25365_25390 = state_25363__$1;
(statearr_25365_25390[(2)] = inst_25359);

(statearr_25365_25390[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25364 === (1))){
var state_25363__$1 = state_25363;
var statearr_25366_25391 = state_25363__$1;
(statearr_25366_25391[(2)] = null);

(statearr_25366_25391[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25364 === (4))){
var inst_25340 = (state_25363[(7)]);
var inst_25340__$1 = (state_25363[(2)]);
var inst_25341 = (inst_25340__$1 == null);
var state_25363__$1 = (function (){var statearr_25367 = state_25363;
(statearr_25367[(7)] = inst_25340__$1);

return statearr_25367;
})();
if(cljs.core.truth_(inst_25341)){
var statearr_25368_25392 = state_25363__$1;
(statearr_25368_25392[(1)] = (5));

} else {
var statearr_25369_25393 = state_25363__$1;
(statearr_25369_25393[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25364 === (13))){
var state_25363__$1 = state_25363;
var statearr_25370_25394 = state_25363__$1;
(statearr_25370_25394[(2)] = null);

(statearr_25370_25394[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25364 === (6))){
var inst_25340 = (state_25363[(7)]);
var inst_25346 = (function (){var G__25371 = inst_25340;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__25371) : p.call(null,G__25371));
})();
var state_25363__$1 = state_25363;
if(cljs.core.truth_(inst_25346)){
var statearr_25372_25395 = state_25363__$1;
(statearr_25372_25395[(1)] = (9));

} else {
var statearr_25373_25396 = state_25363__$1;
(statearr_25373_25396[(1)] = (10));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25364 === (3))){
var inst_25361 = (state_25363[(2)]);
var state_25363__$1 = state_25363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25363__$1,inst_25361);
} else {
if((state_val_25364 === (12))){
var state_25363__$1 = state_25363;
var statearr_25374_25397 = state_25363__$1;
(statearr_25374_25397[(2)] = null);

(statearr_25374_25397[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25364 === (2))){
var state_25363__$1 = state_25363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25363__$1,(4),ch);
} else {
if((state_val_25364 === (11))){
var inst_25340 = (state_25363[(7)]);
var inst_25350 = (state_25363[(2)]);
var state_25363__$1 = state_25363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25363__$1,(8),inst_25350,inst_25340);
} else {
if((state_val_25364 === (9))){
var state_25363__$1 = state_25363;
var statearr_25375_25398 = state_25363__$1;
(statearr_25375_25398[(2)] = tc);

(statearr_25375_25398[(1)] = (11));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25364 === (5))){
var inst_25343 = cljs.core.async.close_BANG_(tc);
var inst_25344 = cljs.core.async.close_BANG_(fc);
var state_25363__$1 = (function (){var statearr_25376 = state_25363;
(statearr_25376[(8)] = inst_25343);

return statearr_25376;
})();
var statearr_25377_25399 = state_25363__$1;
(statearr_25377_25399[(2)] = inst_25344);

(statearr_25377_25399[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25364 === (14))){
var inst_25357 = (state_25363[(2)]);
var state_25363__$1 = state_25363;
var statearr_25378_25400 = state_25363__$1;
(statearr_25378_25400[(2)] = inst_25357);

(statearr_25378_25400[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25364 === (10))){
var state_25363__$1 = state_25363;
var statearr_25379_25401 = state_25363__$1;
(statearr_25379_25401[(2)] = fc);

(statearr_25379_25401[(1)] = (11));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25364 === (8))){
var inst_25352 = (state_25363[(2)]);
var state_25363__$1 = state_25363;
if(cljs.core.truth_(inst_25352)){
var statearr_25380_25402 = state_25363__$1;
(statearr_25380_25402[(1)] = (12));

} else {
var statearr_25381_25403 = state_25363__$1;
(statearr_25381_25403[(1)] = (13));

}

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
});})(c__17765__auto___25389,tc,fc))
;
return ((function (switch__17685__auto__,c__17765__auto___25389,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__17686__auto__ = null;
var cljs$core$async$split_$_state_machine__17686__auto____0 = (function (){
var statearr_25385 = [null,null,null,null,null,null,null,null,null];
(statearr_25385[(0)] = cljs$core$async$split_$_state_machine__17686__auto__);

(statearr_25385[(1)] = (1));

return statearr_25385;
});
var cljs$core$async$split_$_state_machine__17686__auto____1 = (function (state_25363){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_25363);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e25386){if((e25386 instanceof Object)){
var ex__17689__auto__ = e25386;
var statearr_25387_25404 = state_25363;
(statearr_25387_25404[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25363);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e25386;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__25405 = state_25363;
state_25363 = G__25405;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__17686__auto__ = function(state_25363){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__17686__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__17686__auto____1.call(this,state_25363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__17686__auto____0;
cljs$core$async$split_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__17686__auto____1;
return cljs$core$async$split_$_state_machine__17686__auto__;
})()
;})(switch__17685__auto__,c__17765__auto___25389,tc,fc))
})();
var state__17767__auto__ = (function (){var statearr_25388 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_25388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto___25389);

return statearr_25388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(c__17765__auto___25389,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
cljs$core$async$split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$split__2.call(this,p,ch);
case 4:
return cljs$core$async$split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$split__2;
cljs$core$async$split.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$split__4;
return cljs$core$async$split;
})()
;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17765__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17765__auto__){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (c__17765__auto__){
return (function (state_25454){
var state_val_25455 = (state_25454[(1)]);
if((state_val_25455 === (7))){
var inst_25450 = (state_25454[(2)]);
var state_25454__$1 = state_25454;
var statearr_25456_25474 = state_25454__$1;
(statearr_25456_25474[(2)] = inst_25450);

(statearr_25456_25474[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25455 === (6))){
var inst_25440 = (state_25454[(7)]);
var inst_25443 = (state_25454[(8)]);
var inst_25447 = (function (){var G__25457 = inst_25440;
var G__25458 = inst_25443;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25457,G__25458) : f.call(null,G__25457,G__25458));
})();
var inst_25440__$1 = inst_25447;
var state_25454__$1 = (function (){var statearr_25459 = state_25454;
(statearr_25459[(7)] = inst_25440__$1);

return statearr_25459;
})();
var statearr_25460_25475 = state_25454__$1;
(statearr_25460_25475[(2)] = null);

(statearr_25460_25475[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25455 === (5))){
var inst_25440 = (state_25454[(7)]);
var state_25454__$1 = state_25454;
var statearr_25461_25476 = state_25454__$1;
(statearr_25461_25476[(2)] = inst_25440);

(statearr_25461_25476[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25455 === (4))){
var inst_25443 = (state_25454[(8)]);
var inst_25443__$1 = (state_25454[(2)]);
var inst_25444 = (inst_25443__$1 == null);
var state_25454__$1 = (function (){var statearr_25462 = state_25454;
(statearr_25462[(8)] = inst_25443__$1);

return statearr_25462;
})();
if(cljs.core.truth_(inst_25444)){
var statearr_25463_25477 = state_25454__$1;
(statearr_25463_25477[(1)] = (5));

} else {
var statearr_25464_25478 = state_25454__$1;
(statearr_25464_25478[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25455 === (3))){
var inst_25452 = (state_25454[(2)]);
var state_25454__$1 = state_25454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25454__$1,inst_25452);
} else {
if((state_val_25455 === (2))){
var state_25454__$1 = state_25454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25454__$1,(4),ch);
} else {
if((state_val_25455 === (1))){
var inst_25440 = init;
var state_25454__$1 = (function (){var statearr_25465 = state_25454;
(statearr_25465[(7)] = inst_25440);

return statearr_25465;
})();
var statearr_25466_25479 = state_25454__$1;
(statearr_25466_25479[(2)] = null);

(statearr_25466_25479[(1)] = (2));


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
});})(c__17765__auto__))
;
return ((function (switch__17685__auto__,c__17765__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17686__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17686__auto____0 = (function (){
var statearr_25470 = [null,null,null,null,null,null,null,null,null];
(statearr_25470[(0)] = cljs$core$async$reduce_$_state_machine__17686__auto__);

(statearr_25470[(1)] = (1));

return statearr_25470;
});
var cljs$core$async$reduce_$_state_machine__17686__auto____1 = (function (state_25454){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_25454);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e25471){if((e25471 instanceof Object)){
var ex__17689__auto__ = e25471;
var statearr_25472_25480 = state_25454;
(statearr_25472_25480[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25454);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e25471;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__25481 = state_25454;
state_25454 = G__25481;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17686__auto__ = function(state_25454){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17686__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17686__auto____1.call(this,state_25454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17686__auto____0;
cljs$core$async$reduce_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17686__auto____1;
return cljs$core$async$reduce_$_state_machine__17686__auto__;
})()
;})(switch__17685__auto__,c__17765__auto__))
})();
var state__17767__auto__ = (function (){var statearr_25473 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_25473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto__);

return statearr_25473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(c__17765__auto__))
);

return c__17765__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function() {
var cljs$core$async$onto_chan = null;
var cljs$core$async$onto_chan__2 = (function (ch,coll){
return cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var cljs$core$async$onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__17765__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17765__auto__){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (c__17765__auto__){
return (function (state_25558){
var state_val_25559 = (state_25558[(1)]);
if((state_val_25559 === (7))){
var inst_25540 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
var statearr_25560_25583 = state_25558__$1;
(statearr_25560_25583[(2)] = inst_25540);

(statearr_25560_25583[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25559 === (1))){
var inst_25534 = cljs.core.seq(coll);
var inst_25535 = inst_25534;
var state_25558__$1 = (function (){var statearr_25561 = state_25558;
(statearr_25561[(7)] = inst_25535);

return statearr_25561;
})();
var statearr_25562_25584 = state_25558__$1;
(statearr_25562_25584[(2)] = null);

(statearr_25562_25584[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25559 === (4))){
var inst_25535 = (state_25558[(7)]);
var inst_25538 = cljs.core.first(inst_25535);
var state_25558__$1 = state_25558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25558__$1,(7),ch,inst_25538);
} else {
if((state_val_25559 === (13))){
var inst_25552 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
var statearr_25563_25585 = state_25558__$1;
(statearr_25563_25585[(2)] = inst_25552);

(statearr_25563_25585[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25559 === (6))){
var inst_25543 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
if(cljs.core.truth_(inst_25543)){
var statearr_25564_25586 = state_25558__$1;
(statearr_25564_25586[(1)] = (8));

} else {
var statearr_25565_25587 = state_25558__$1;
(statearr_25565_25587[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25559 === (3))){
var inst_25556 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25558__$1,inst_25556);
} else {
if((state_val_25559 === (12))){
var state_25558__$1 = state_25558;
var statearr_25566_25588 = state_25558__$1;
(statearr_25566_25588[(2)] = null);

(statearr_25566_25588[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25559 === (2))){
var inst_25535 = (state_25558[(7)]);
var state_25558__$1 = state_25558;
if(cljs.core.truth_(inst_25535)){
var statearr_25567_25589 = state_25558__$1;
(statearr_25567_25589[(1)] = (4));

} else {
var statearr_25568_25590 = state_25558__$1;
(statearr_25568_25590[(1)] = (5));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25559 === (11))){
var inst_25549 = cljs.core.async.close_BANG_(ch);
var state_25558__$1 = state_25558;
var statearr_25569_25591 = state_25558__$1;
(statearr_25569_25591[(2)] = inst_25549);

(statearr_25569_25591[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25559 === (9))){
var state_25558__$1 = state_25558;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25570_25592 = state_25558__$1;
(statearr_25570_25592[(1)] = (11));

} else {
var statearr_25571_25593 = state_25558__$1;
(statearr_25571_25593[(1)] = (12));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25559 === (5))){
var inst_25535 = (state_25558[(7)]);
var state_25558__$1 = state_25558;
var statearr_25572_25594 = state_25558__$1;
(statearr_25572_25594[(2)] = inst_25535);

(statearr_25572_25594[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25559 === (10))){
var inst_25554 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
var statearr_25573_25595 = state_25558__$1;
(statearr_25573_25595[(2)] = inst_25554);

(statearr_25573_25595[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25559 === (8))){
var inst_25535 = (state_25558[(7)]);
var inst_25545 = cljs.core.next(inst_25535);
var inst_25535__$1 = inst_25545;
var state_25558__$1 = (function (){var statearr_25574 = state_25558;
(statearr_25574[(7)] = inst_25535__$1);

return statearr_25574;
})();
var statearr_25575_25596 = state_25558__$1;
(statearr_25575_25596[(2)] = null);

(statearr_25575_25596[(1)] = (2));


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
});})(c__17765__auto__))
;
return ((function (switch__17685__auto__,c__17765__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__17686__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__17686__auto____0 = (function (){
var statearr_25579 = [null,null,null,null,null,null,null,null];
(statearr_25579[(0)] = cljs$core$async$onto_chan_$_state_machine__17686__auto__);

(statearr_25579[(1)] = (1));

return statearr_25579;
});
var cljs$core$async$onto_chan_$_state_machine__17686__auto____1 = (function (state_25558){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_25558);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e25580){if((e25580 instanceof Object)){
var ex__17689__auto__ = e25580;
var statearr_25581_25597 = state_25558;
(statearr_25581_25597[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25558);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e25580;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__25598 = state_25558;
state_25558 = G__25598;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__17686__auto__ = function(state_25558){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__17686__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__17686__auto____1.call(this,state_25558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__17686__auto____0;
cljs$core$async$onto_chan_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__17686__auto____1;
return cljs$core$async$onto_chan_$_state_machine__17686__auto__;
})()
;})(switch__17685__auto__,c__17765__auto__))
})();
var state__17767__auto__ = (function (){var statearr_25582 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_25582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto__);

return statearr_25582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(c__17765__auto__))
);

return c__17765__auto__;
});
cljs$core$async$onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$onto_chan__2.call(this,ch,coll);
case 3:
return cljs$core$async$onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$onto_chan__2;
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$onto_chan__3;
return cljs$core$async$onto_chan;
})()
;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj25600 = {};
return obj25600;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__15671__auto__ = _;
if(and__15671__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__15671__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16327__auto__ = (((_ == null))?null:_);
return (function (){var or__15683__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__25604 = x__16327__auto__;
return goog.typeOf(G__25604);
})()]);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj25606 = {};
return obj25606;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__15671__auto__ = m;
if(and__15671__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__15671__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16327__auto__ = (((m == null))?null:m);
return (function (){var or__15683__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__25610 = x__16327__auto__;
return goog.typeOf(G__25610);
})()]);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__15671__auto__ = m;
if(and__15671__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__15671__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16327__auto__ = (((m == null))?null:m);
return (function (){var or__15683__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__25614 = x__16327__auto__;
return goog.typeOf(G__25614);
})()]);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__15671__auto__ = m;
if(and__15671__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__15671__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16327__auto__ = (((m == null))?null:m);
return (function (){var or__15683__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__25618 = x__16327__auto__;
return goog.typeOf(G__25618);
})()]);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__25848 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25848) : cljs.core.atom.call(null,G__25848));
})();
var m = (function (){
if(typeof cljs.core.async.t25849 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25849 = (function (cs,ch,mult,meta25850){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25850 = meta25850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25849.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25849.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25849.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25849.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25852_26077 = self__.cs;
var G__25853_26078 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25852_26077,G__25853_26078) : cljs.core.reset_BANG_.call(null,G__25852_26077,G__25853_26078));

return null;
});})(cs))
;

cljs.core.async.t25849.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25849.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25849.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25851){
var self__ = this;
var _25851__$1 = this;
return self__.meta25850;
});})(cs))
;

cljs.core.async.t25849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25851,meta25850__$1){
var self__ = this;
var _25851__$1 = this;
return (new cljs.core.async.t25849(self__.cs,self__.ch,self__.mult,meta25850__$1));
});})(cs))
;

cljs.core.async.t25849.cljs$lang$type = true;

cljs.core.async.t25849.cljs$lang$ctorStr = "cljs.core.async/t25849";

cljs.core.async.t25849.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16270__auto__,writer__16271__auto__,opt__16272__auto__){
return cljs.core._write(writer__16271__auto__,"cljs.core.async/t25849");
});})(cs))
;

cljs.core.async.__GT_t25849 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t25849(cs__$1,ch__$1,mult__$1,meta25850){
return (new cljs.core.async.t25849(cs__$1,ch__$1,mult__$1,meta25850));
});})(cs))
;

}

return (new cljs.core.async.t25849(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__25854 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25854) : cljs.core.atom.call(null,G__25854));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__17765__auto___26079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17765__auto___26079,cs,m,dchan,dctr,done){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (c__17765__auto___26079,cs,m,dchan,dctr,done){
return (function (state_25985){
var state_val_25986 = (state_25985[(1)]);
if((state_val_25986 === (7))){
var inst_25981 = (state_25985[(2)]);
var state_25985__$1 = state_25985;
var statearr_25987_26080 = state_25985__$1;
(statearr_25987_26080[(2)] = inst_25981);

(statearr_25987_26080[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (20))){
var inst_25886 = (state_25985[(7)]);
var inst_25896 = cljs.core.first(inst_25886);
var inst_25897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25896,(0),null);
var inst_25898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25896,(1),null);
var state_25985__$1 = (function (){var statearr_25988 = state_25985;
(statearr_25988[(8)] = inst_25897);

return statearr_25988;
})();
if(cljs.core.truth_(inst_25898)){
var statearr_25989_26081 = state_25985__$1;
(statearr_25989_26081[(1)] = (22));

} else {
var statearr_25990_26082 = state_25985__$1;
(statearr_25990_26082[(1)] = (23));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (27))){
var inst_25926 = (state_25985[(9)]);
var inst_25928 = (state_25985[(10)]);
var inst_25857 = (state_25985[(11)]);
var inst_25933 = (state_25985[(12)]);
var inst_25933__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25926,inst_25928);
var inst_25934 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25933__$1,inst_25857,done);
var state_25985__$1 = (function (){var statearr_25991 = state_25985;
(statearr_25991[(12)] = inst_25933__$1);

return statearr_25991;
})();
if(cljs.core.truth_(inst_25934)){
var statearr_25992_26083 = state_25985__$1;
(statearr_25992_26083[(1)] = (30));

} else {
var statearr_25993_26084 = state_25985__$1;
(statearr_25993_26084[(1)] = (31));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (1))){
var state_25985__$1 = state_25985;
var statearr_25994_26085 = state_25985__$1;
(statearr_25994_26085[(2)] = null);

(statearr_25994_26085[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (24))){
var inst_25886 = (state_25985[(7)]);
var inst_25903 = (state_25985[(2)]);
var inst_25904 = cljs.core.next(inst_25886);
var inst_25866 = inst_25904;
var inst_25867 = null;
var inst_25868 = (0);
var inst_25869 = (0);
var state_25985__$1 = (function (){var statearr_25995 = state_25985;
(statearr_25995[(13)] = inst_25868);

(statearr_25995[(14)] = inst_25867);

(statearr_25995[(15)] = inst_25866);

(statearr_25995[(16)] = inst_25869);

(statearr_25995[(17)] = inst_25903);

return statearr_25995;
})();
var statearr_25996_26086 = state_25985__$1;
(statearr_25996_26086[(2)] = null);

(statearr_25996_26086[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (39))){
var state_25985__$1 = state_25985;
var statearr_26000_26087 = state_25985__$1;
(statearr_26000_26087[(2)] = null);

(statearr_26000_26087[(1)] = (41));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (4))){
var inst_25857 = (state_25985[(11)]);
var inst_25857__$1 = (state_25985[(2)]);
var inst_25858 = (inst_25857__$1 == null);
var state_25985__$1 = (function (){var statearr_26001 = state_25985;
(statearr_26001[(11)] = inst_25857__$1);

return statearr_26001;
})();
if(cljs.core.truth_(inst_25858)){
var statearr_26002_26088 = state_25985__$1;
(statearr_26002_26088[(1)] = (5));

} else {
var statearr_26003_26089 = state_25985__$1;
(statearr_26003_26089[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (15))){
var inst_25868 = (state_25985[(13)]);
var inst_25867 = (state_25985[(14)]);
var inst_25866 = (state_25985[(15)]);
var inst_25869 = (state_25985[(16)]);
var inst_25882 = (state_25985[(2)]);
var inst_25883 = (inst_25869 + (1));
var tmp25997 = inst_25868;
var tmp25998 = inst_25867;
var tmp25999 = inst_25866;
var inst_25866__$1 = tmp25999;
var inst_25867__$1 = tmp25998;
var inst_25868__$1 = tmp25997;
var inst_25869__$1 = inst_25883;
var state_25985__$1 = (function (){var statearr_26004 = state_25985;
(statearr_26004[(13)] = inst_25868__$1);

(statearr_26004[(14)] = inst_25867__$1);

(statearr_26004[(15)] = inst_25866__$1);

(statearr_26004[(16)] = inst_25869__$1);

(statearr_26004[(18)] = inst_25882);

return statearr_26004;
})();
var statearr_26005_26090 = state_25985__$1;
(statearr_26005_26090[(2)] = null);

(statearr_26005_26090[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (21))){
var inst_25907 = (state_25985[(2)]);
var state_25985__$1 = state_25985;
var statearr_26009_26091 = state_25985__$1;
(statearr_26009_26091[(2)] = inst_25907);

(statearr_26009_26091[(1)] = (18));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (31))){
var inst_25933 = (state_25985[(12)]);
var inst_25937 = done(null);
var inst_25938 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25933);
var state_25985__$1 = (function (){var statearr_26010 = state_25985;
(statearr_26010[(19)] = inst_25937);

return statearr_26010;
})();
var statearr_26011_26092 = state_25985__$1;
(statearr_26011_26092[(2)] = inst_25938);

(statearr_26011_26092[(1)] = (32));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (32))){
var inst_25926 = (state_25985[(9)]);
var inst_25928 = (state_25985[(10)]);
var inst_25927 = (state_25985[(20)]);
var inst_25925 = (state_25985[(21)]);
var inst_25940 = (state_25985[(2)]);
var inst_25941 = (inst_25928 + (1));
var tmp26006 = inst_25926;
var tmp26007 = inst_25927;
var tmp26008 = inst_25925;
var inst_25925__$1 = tmp26008;
var inst_25926__$1 = tmp26006;
var inst_25927__$1 = tmp26007;
var inst_25928__$1 = inst_25941;
var state_25985__$1 = (function (){var statearr_26012 = state_25985;
(statearr_26012[(9)] = inst_25926__$1);

(statearr_26012[(10)] = inst_25928__$1);

(statearr_26012[(20)] = inst_25927__$1);

(statearr_26012[(22)] = inst_25940);

(statearr_26012[(21)] = inst_25925__$1);

return statearr_26012;
})();
var statearr_26013_26093 = state_25985__$1;
(statearr_26013_26093[(2)] = null);

(statearr_26013_26093[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (40))){
var inst_25953 = (state_25985[(23)]);
var inst_25957 = done(null);
var inst_25958 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25953);
var state_25985__$1 = (function (){var statearr_26014 = state_25985;
(statearr_26014[(24)] = inst_25957);

return statearr_26014;
})();
var statearr_26015_26094 = state_25985__$1;
(statearr_26015_26094[(2)] = inst_25958);

(statearr_26015_26094[(1)] = (41));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (33))){
var inst_25944 = (state_25985[(25)]);
var inst_25946 = cljs.core.chunked_seq_QMARK_(inst_25944);
var state_25985__$1 = state_25985;
if(inst_25946){
var statearr_26016_26095 = state_25985__$1;
(statearr_26016_26095[(1)] = (36));

} else {
var statearr_26017_26096 = state_25985__$1;
(statearr_26017_26096[(1)] = (37));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (13))){
var inst_25876 = (state_25985[(26)]);
var inst_25879 = cljs.core.async.close_BANG_(inst_25876);
var state_25985__$1 = state_25985;
var statearr_26018_26097 = state_25985__$1;
(statearr_26018_26097[(2)] = inst_25879);

(statearr_26018_26097[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (22))){
var inst_25897 = (state_25985[(8)]);
var inst_25900 = cljs.core.async.close_BANG_(inst_25897);
var state_25985__$1 = state_25985;
var statearr_26019_26098 = state_25985__$1;
(statearr_26019_26098[(2)] = inst_25900);

(statearr_26019_26098[(1)] = (24));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (36))){
var inst_25944 = (state_25985[(25)]);
var inst_25948 = cljs.core.chunk_first(inst_25944);
var inst_25949 = cljs.core.chunk_rest(inst_25944);
var inst_25950 = cljs.core.count(inst_25948);
var inst_25925 = inst_25949;
var inst_25926 = inst_25948;
var inst_25927 = inst_25950;
var inst_25928 = (0);
var state_25985__$1 = (function (){var statearr_26020 = state_25985;
(statearr_26020[(9)] = inst_25926);

(statearr_26020[(10)] = inst_25928);

(statearr_26020[(20)] = inst_25927);

(statearr_26020[(21)] = inst_25925);

return statearr_26020;
})();
var statearr_26021_26099 = state_25985__$1;
(statearr_26021_26099[(2)] = null);

(statearr_26021_26099[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (41))){
var inst_25944 = (state_25985[(25)]);
var inst_25960 = (state_25985[(2)]);
var inst_25961 = cljs.core.next(inst_25944);
var inst_25925 = inst_25961;
var inst_25926 = null;
var inst_25927 = (0);
var inst_25928 = (0);
var state_25985__$1 = (function (){var statearr_26022 = state_25985;
(statearr_26022[(9)] = inst_25926);

(statearr_26022[(10)] = inst_25928);

(statearr_26022[(27)] = inst_25960);

(statearr_26022[(20)] = inst_25927);

(statearr_26022[(21)] = inst_25925);

return statearr_26022;
})();
var statearr_26023_26100 = state_25985__$1;
(statearr_26023_26100[(2)] = null);

(statearr_26023_26100[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (43))){
var state_25985__$1 = state_25985;
var statearr_26024_26101 = state_25985__$1;
(statearr_26024_26101[(2)] = null);

(statearr_26024_26101[(1)] = (44));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (29))){
var inst_25969 = (state_25985[(2)]);
var state_25985__$1 = state_25985;
var statearr_26025_26102 = state_25985__$1;
(statearr_26025_26102[(2)] = inst_25969);

(statearr_26025_26102[(1)] = (26));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (44))){
var inst_25978 = (state_25985[(2)]);
var state_25985__$1 = (function (){var statearr_26026 = state_25985;
(statearr_26026[(28)] = inst_25978);

return statearr_26026;
})();
var statearr_26027_26103 = state_25985__$1;
(statearr_26027_26103[(2)] = null);

(statearr_26027_26103[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (6))){
var inst_25917 = (state_25985[(29)]);
var inst_25916 = (function (){var G__26028 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26028) : cljs.core.deref.call(null,G__26028));
})();
var inst_25917__$1 = cljs.core.keys(inst_25916);
var inst_25918 = cljs.core.count(inst_25917__$1);
var inst_25919 = (function (){var G__26029 = dctr;
var G__26030 = inst_25918;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26029,G__26030) : cljs.core.reset_BANG_.call(null,G__26029,G__26030));
})();
var inst_25924 = cljs.core.seq(inst_25917__$1);
var inst_25925 = inst_25924;
var inst_25926 = null;
var inst_25927 = (0);
var inst_25928 = (0);
var state_25985__$1 = (function (){var statearr_26031 = state_25985;
(statearr_26031[(9)] = inst_25926);

(statearr_26031[(29)] = inst_25917__$1);

(statearr_26031[(10)] = inst_25928);

(statearr_26031[(30)] = inst_25919);

(statearr_26031[(20)] = inst_25927);

(statearr_26031[(21)] = inst_25925);

return statearr_26031;
})();
var statearr_26032_26104 = state_25985__$1;
(statearr_26032_26104[(2)] = null);

(statearr_26032_26104[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (28))){
var inst_25944 = (state_25985[(25)]);
var inst_25925 = (state_25985[(21)]);
var inst_25944__$1 = cljs.core.seq(inst_25925);
var state_25985__$1 = (function (){var statearr_26033 = state_25985;
(statearr_26033[(25)] = inst_25944__$1);

return statearr_26033;
})();
if(inst_25944__$1){
var statearr_26034_26105 = state_25985__$1;
(statearr_26034_26105[(1)] = (33));

} else {
var statearr_26035_26106 = state_25985__$1;
(statearr_26035_26106[(1)] = (34));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (25))){
var inst_25928 = (state_25985[(10)]);
var inst_25927 = (state_25985[(20)]);
var inst_25930 = (inst_25928 < inst_25927);
var inst_25931 = inst_25930;
var state_25985__$1 = state_25985;
if(cljs.core.truth_(inst_25931)){
var statearr_26036_26107 = state_25985__$1;
(statearr_26036_26107[(1)] = (27));

} else {
var statearr_26037_26108 = state_25985__$1;
(statearr_26037_26108[(1)] = (28));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (34))){
var state_25985__$1 = state_25985;
var statearr_26038_26109 = state_25985__$1;
(statearr_26038_26109[(2)] = null);

(statearr_26038_26109[(1)] = (35));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (17))){
var state_25985__$1 = state_25985;
var statearr_26039_26110 = state_25985__$1;
(statearr_26039_26110[(2)] = null);

(statearr_26039_26110[(1)] = (18));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (3))){
var inst_25983 = (state_25985[(2)]);
var state_25985__$1 = state_25985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25985__$1,inst_25983);
} else {
if((state_val_25986 === (12))){
var inst_25912 = (state_25985[(2)]);
var state_25985__$1 = state_25985;
var statearr_26040_26111 = state_25985__$1;
(statearr_26040_26111[(2)] = inst_25912);

(statearr_26040_26111[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (2))){
var state_25985__$1 = state_25985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25985__$1,(4),ch);
} else {
if((state_val_25986 === (23))){
var state_25985__$1 = state_25985;
var statearr_26041_26112 = state_25985__$1;
(statearr_26041_26112[(2)] = null);

(statearr_26041_26112[(1)] = (24));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (35))){
var inst_25967 = (state_25985[(2)]);
var state_25985__$1 = state_25985;
var statearr_26042_26113 = state_25985__$1;
(statearr_26042_26113[(2)] = inst_25967);

(statearr_26042_26113[(1)] = (29));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (19))){
var inst_25886 = (state_25985[(7)]);
var inst_25890 = cljs.core.chunk_first(inst_25886);
var inst_25891 = cljs.core.chunk_rest(inst_25886);
var inst_25892 = cljs.core.count(inst_25890);
var inst_25866 = inst_25891;
var inst_25867 = inst_25890;
var inst_25868 = inst_25892;
var inst_25869 = (0);
var state_25985__$1 = (function (){var statearr_26043 = state_25985;
(statearr_26043[(13)] = inst_25868);

(statearr_26043[(14)] = inst_25867);

(statearr_26043[(15)] = inst_25866);

(statearr_26043[(16)] = inst_25869);

return statearr_26043;
})();
var statearr_26044_26114 = state_25985__$1;
(statearr_26044_26114[(2)] = null);

(statearr_26044_26114[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (11))){
var inst_25886 = (state_25985[(7)]);
var inst_25866 = (state_25985[(15)]);
var inst_25886__$1 = cljs.core.seq(inst_25866);
var state_25985__$1 = (function (){var statearr_26045 = state_25985;
(statearr_26045[(7)] = inst_25886__$1);

return statearr_26045;
})();
if(inst_25886__$1){
var statearr_26046_26115 = state_25985__$1;
(statearr_26046_26115[(1)] = (16));

} else {
var statearr_26047_26116 = state_25985__$1;
(statearr_26047_26116[(1)] = (17));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (9))){
var inst_25914 = (state_25985[(2)]);
var state_25985__$1 = state_25985;
var statearr_26048_26117 = state_25985__$1;
(statearr_26048_26117[(2)] = inst_25914);

(statearr_26048_26117[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (5))){
var inst_25864 = (function (){var G__26049 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26049) : cljs.core.deref.call(null,G__26049));
})();
var inst_25865 = cljs.core.seq(inst_25864);
var inst_25866 = inst_25865;
var inst_25867 = null;
var inst_25868 = (0);
var inst_25869 = (0);
var state_25985__$1 = (function (){var statearr_26050 = state_25985;
(statearr_26050[(13)] = inst_25868);

(statearr_26050[(14)] = inst_25867);

(statearr_26050[(15)] = inst_25866);

(statearr_26050[(16)] = inst_25869);

return statearr_26050;
})();
var statearr_26051_26118 = state_25985__$1;
(statearr_26051_26118[(2)] = null);

(statearr_26051_26118[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (14))){
var state_25985__$1 = state_25985;
var statearr_26052_26119 = state_25985__$1;
(statearr_26052_26119[(2)] = null);

(statearr_26052_26119[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (45))){
var inst_25975 = (state_25985[(2)]);
var state_25985__$1 = state_25985;
var statearr_26053_26120 = state_25985__$1;
(statearr_26053_26120[(2)] = inst_25975);

(statearr_26053_26120[(1)] = (44));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (26))){
var inst_25917 = (state_25985[(29)]);
var inst_25971 = (state_25985[(2)]);
var inst_25972 = cljs.core.seq(inst_25917);
var state_25985__$1 = (function (){var statearr_26054 = state_25985;
(statearr_26054[(31)] = inst_25971);

return statearr_26054;
})();
if(inst_25972){
var statearr_26055_26121 = state_25985__$1;
(statearr_26055_26121[(1)] = (42));

} else {
var statearr_26056_26122 = state_25985__$1;
(statearr_26056_26122[(1)] = (43));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (16))){
var inst_25886 = (state_25985[(7)]);
var inst_25888 = cljs.core.chunked_seq_QMARK_(inst_25886);
var state_25985__$1 = state_25985;
if(inst_25888){
var statearr_26057_26123 = state_25985__$1;
(statearr_26057_26123[(1)] = (19));

} else {
var statearr_26058_26124 = state_25985__$1;
(statearr_26058_26124[(1)] = (20));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (38))){
var inst_25964 = (state_25985[(2)]);
var state_25985__$1 = state_25985;
var statearr_26059_26125 = state_25985__$1;
(statearr_26059_26125[(2)] = inst_25964);

(statearr_26059_26125[(1)] = (35));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (30))){
var state_25985__$1 = state_25985;
var statearr_26060_26126 = state_25985__$1;
(statearr_26060_26126[(2)] = null);

(statearr_26060_26126[(1)] = (32));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (10))){
var inst_25867 = (state_25985[(14)]);
var inst_25869 = (state_25985[(16)]);
var inst_25875 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25867,inst_25869);
var inst_25876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25875,(0),null);
var inst_25877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25875,(1),null);
var state_25985__$1 = (function (){var statearr_26061 = state_25985;
(statearr_26061[(26)] = inst_25876);

return statearr_26061;
})();
if(cljs.core.truth_(inst_25877)){
var statearr_26062_26127 = state_25985__$1;
(statearr_26062_26127[(1)] = (13));

} else {
var statearr_26063_26128 = state_25985__$1;
(statearr_26063_26128[(1)] = (14));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (18))){
var inst_25910 = (state_25985[(2)]);
var state_25985__$1 = state_25985;
var statearr_26064_26129 = state_25985__$1;
(statearr_26064_26129[(2)] = inst_25910);

(statearr_26064_26129[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (42))){
var state_25985__$1 = state_25985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25985__$1,(45),dchan);
} else {
if((state_val_25986 === (37))){
var inst_25857 = (state_25985[(11)]);
var inst_25944 = (state_25985[(25)]);
var inst_25953 = (state_25985[(23)]);
var inst_25953__$1 = cljs.core.first(inst_25944);
var inst_25954 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25953__$1,inst_25857,done);
var state_25985__$1 = (function (){var statearr_26065 = state_25985;
(statearr_26065[(23)] = inst_25953__$1);

return statearr_26065;
})();
if(cljs.core.truth_(inst_25954)){
var statearr_26066_26130 = state_25985__$1;
(statearr_26066_26130[(1)] = (39));

} else {
var statearr_26067_26131 = state_25985__$1;
(statearr_26067_26131[(1)] = (40));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_25986 === (8))){
var inst_25868 = (state_25985[(13)]);
var inst_25869 = (state_25985[(16)]);
var inst_25871 = (inst_25869 < inst_25868);
var inst_25872 = inst_25871;
var state_25985__$1 = state_25985;
if(cljs.core.truth_(inst_25872)){
var statearr_26068_26132 = state_25985__$1;
(statearr_26068_26132[(1)] = (10));

} else {
var statearr_26069_26133 = state_25985__$1;
(statearr_26069_26133[(1)] = (11));

}

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
});})(c__17765__auto___26079,cs,m,dchan,dctr,done))
;
return ((function (switch__17685__auto__,c__17765__auto___26079,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17686__auto__ = null;
var cljs$core$async$mult_$_state_machine__17686__auto____0 = (function (){
var statearr_26073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26073[(0)] = cljs$core$async$mult_$_state_machine__17686__auto__);

(statearr_26073[(1)] = (1));

return statearr_26073;
});
var cljs$core$async$mult_$_state_machine__17686__auto____1 = (function (state_25985){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_25985);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e26074){if((e26074 instanceof Object)){
var ex__17689__auto__ = e26074;
var statearr_26075_26134 = state_25985;
(statearr_26075_26134[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25985);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e26074;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__26135 = state_25985;
state_25985 = G__26135;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17686__auto__ = function(state_25985){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17686__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17686__auto____1.call(this,state_25985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17686__auto____0;
cljs$core$async$mult_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17686__auto____1;
return cljs$core$async$mult_$_state_machine__17686__auto__;
})()
;})(switch__17685__auto__,c__17765__auto___26079,cs,m,dchan,dctr,done))
})();
var state__17767__auto__ = (function (){var statearr_26076 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_26076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto___26079);

return statearr_26076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(c__17765__auto___26079,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function() {
var cljs$core$async$tap = null;
var cljs$core$async$tap__2 = (function (mult,ch){
return cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var cljs$core$async$tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});
cljs$core$async$tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$tap__2.call(this,mult,ch);
case 3:
return cljs$core$async$tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$tap__2;
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$tap__3;
return cljs$core$async$tap;
})()
;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj26140 = {};
return obj26140;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__15671__auto__ = m;
if(and__15671__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__15671__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16327__auto__ = (((m == null))?null:m);
return (function (){var or__15683__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__26144 = x__16327__auto__;
return goog.typeOf(G__26144);
})()]);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__15671__auto__ = m;
if(and__15671__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__15671__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16327__auto__ = (((m == null))?null:m);
return (function (){var or__15683__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__26148 = x__16327__auto__;
return goog.typeOf(G__26148);
})()]);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__15671__auto__ = m;
if(and__15671__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__15671__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16327__auto__ = (((m == null))?null:m);
return (function (){var or__15683__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__26152 = x__16327__auto__;
return goog.typeOf(G__26152);
})()]);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__15671__auto__ = m;
if(and__15671__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__15671__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16327__auto__ = (((m == null))?null:m);
return (function (){var or__15683__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__26156 = x__16327__auto__;
return goog.typeOf(G__26156);
})()]);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__15671__auto__ = m;
if(and__15671__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__15671__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16327__auto__ = (((m == null))?null:m);
return (function (){var or__15683__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__26160 = x__16327__auto__;
return goog.typeOf(G__26160);
})()]);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * @param {...*} var_args
 */
cljs.core.async.ioc_alts_BANG_ = (function() { 
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__26161){
var map__26167 = p__26161;
var map__26167__$1 = ((cljs.core.seq_QMARK_(map__26167))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26167):map__26167);
var opts = map__26167__$1;
var statearr_26168_26172 = state;
(statearr_26168_26172[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__26167,map__26167__$1,opts){
return (function (val){
var statearr_26169_26173 = state;
(statearr_26169_26173[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__26167,map__26167__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_26170_26174 = state;
(statearr_26170_26174[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__26171 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26171) : cljs.core.deref.call(null,G__26171));
})());


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__26161 = null;
if (arguments.length > 3) {
var G__26175__i = 0, G__26175__a = new Array(arguments.length -  3);
while (G__26175__i < G__26175__a.length) {G__26175__a[G__26175__i] = arguments[G__26175__i + 3]; ++G__26175__i;}
  p__26161 = new cljs.core.IndexedSeq(G__26175__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__26161);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__26176){
var state = cljs.core.first(arglist__26176);
arglist__26176 = cljs.core.next(arglist__26176);
var cont_block = cljs.core.first(arglist__26176);
arglist__26176 = cljs.core.next(arglist__26176);
var ports = cljs.core.first(arglist__26176);
var p__26161 = cljs.core.rest(arglist__26176);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__26161);
});
cljs$core$async$ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$ioc_alts_BANG___delegate;
return cljs$core$async$ioc_alts_BANG_;
})()
;
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__26310 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26310) : cljs.core.atom.call(null,G__26310));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_pause,null,cljs.core.constant$keyword$_COLON_mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$_COLON_solo);
var solo_mode = (function (){var G__26311 = cljs.core.constant$keyword$_COLON_mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26311) : cljs.core.atom.call(null,G__26311));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__26312 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__26312) : attr.call(null,G__26312));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__26313 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26313) : cljs.core.deref.call(null,G__26313));
})();
var mode = (function (){var G__26314 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26314) : cljs.core.deref.call(null,G__26314));
})();
var solos = pick(cljs.core.constant$keyword$_COLON_solo,chs);
var pauses = pick(cljs.core.constant$keyword$_COLON_pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_solos,solos,cljs.core.constant$keyword$_COLON_mutes,pick(cljs.core.constant$keyword$_COLON_mute,chs),cljs.core.constant$keyword$_COLON_reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$_COLON_pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t26315 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26315 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26316){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26316 = meta26316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26315.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26315.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26315.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26315.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__26318_26443 = self__.cs;
var G__26319_26444 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26318_26443,G__26319_26444) : cljs.core.reset_BANG_.call(null,G__26318_26443,G__26319_26444));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26315.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26315.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__26320 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__26320) : self__.solo_modes.call(null,G__26320));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__26321_26445 = self__.solo_mode;
var G__26322_26446 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26321_26445,G__26322_26446) : cljs.core.reset_BANG_.call(null,G__26321_26445,G__26322_26446));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26315.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26315.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26315.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26317){
var self__ = this;
var _26317__$1 = this;
return self__.meta26316;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26317,meta26316__$1){
var self__ = this;
var _26317__$1 = this;
return (new cljs.core.async.t26315(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26316__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26315.cljs$lang$type = true;

cljs.core.async.t26315.cljs$lang$ctorStr = "cljs.core.async/t26315";

cljs.core.async.t26315.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16270__auto__,writer__16271__auto__,opt__16272__auto__){
return cljs.core._write(writer__16271__auto__,"cljs.core.async/t26315");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26315 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t26315(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26316){
return (new cljs.core.async.t26315(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26316));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26315(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17765__auto___26447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17765__auto___26447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (c__17765__auto___26447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26394){
var state_val_26395 = (state_26394[(1)]);
if((state_val_26395 === (7))){
var inst_26336 = (state_26394[(7)]);
var inst_26341 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26336);
var state_26394__$1 = state_26394;
var statearr_26396_26448 = state_26394__$1;
(statearr_26396_26448[(2)] = inst_26341);

(statearr_26396_26448[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (20))){
var inst_26351 = (state_26394[(8)]);
var state_26394__$1 = state_26394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26394__$1,(23),out,inst_26351);
} else {
if((state_val_26395 === (1))){
var inst_26326 = (state_26394[(9)]);
var inst_26326__$1 = calc_state();
var inst_26327 = cljs.core.seq_QMARK_(inst_26326__$1);
var state_26394__$1 = (function (){var statearr_26397 = state_26394;
(statearr_26397[(9)] = inst_26326__$1);

return statearr_26397;
})();
if(inst_26327){
var statearr_26398_26449 = state_26394__$1;
(statearr_26398_26449[(1)] = (2));

} else {
var statearr_26399_26450 = state_26394__$1;
(statearr_26399_26450[(1)] = (3));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (24))){
var inst_26344 = (state_26394[(10)]);
var inst_26336 = inst_26344;
var state_26394__$1 = (function (){var statearr_26400 = state_26394;
(statearr_26400[(7)] = inst_26336);

return statearr_26400;
})();
var statearr_26401_26451 = state_26394__$1;
(statearr_26401_26451[(2)] = null);

(statearr_26401_26451[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (4))){
var inst_26326 = (state_26394[(9)]);
var inst_26332 = (state_26394[(2)]);
var inst_26333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26332,cljs.core.constant$keyword$_COLON_reads);
var inst_26334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26332,cljs.core.constant$keyword$_COLON_mutes);
var inst_26335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26332,cljs.core.constant$keyword$_COLON_solos);
var inst_26336 = inst_26326;
var state_26394__$1 = (function (){var statearr_26402 = state_26394;
(statearr_26402[(11)] = inst_26334);

(statearr_26402[(12)] = inst_26333);

(statearr_26402[(7)] = inst_26336);

(statearr_26402[(13)] = inst_26335);

return statearr_26402;
})();
var statearr_26403_26452 = state_26394__$1;
(statearr_26403_26452[(2)] = null);

(statearr_26403_26452[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (15))){
var state_26394__$1 = state_26394;
var statearr_26404_26453 = state_26394__$1;
(statearr_26404_26453[(2)] = null);

(statearr_26404_26453[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (21))){
var inst_26344 = (state_26394[(10)]);
var inst_26336 = inst_26344;
var state_26394__$1 = (function (){var statearr_26405 = state_26394;
(statearr_26405[(7)] = inst_26336);

return statearr_26405;
})();
var statearr_26406_26454 = state_26394__$1;
(statearr_26406_26454[(2)] = null);

(statearr_26406_26454[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (13))){
var inst_26390 = (state_26394[(2)]);
var state_26394__$1 = state_26394;
var statearr_26407_26455 = state_26394__$1;
(statearr_26407_26455[(2)] = inst_26390);

(statearr_26407_26455[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (22))){
var inst_26388 = (state_26394[(2)]);
var state_26394__$1 = state_26394;
var statearr_26408_26456 = state_26394__$1;
(statearr_26408_26456[(2)] = inst_26388);

(statearr_26408_26456[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (6))){
var inst_26392 = (state_26394[(2)]);
var state_26394__$1 = state_26394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26394__$1,inst_26392);
} else {
if((state_val_26395 === (25))){
var state_26394__$1 = state_26394;
var statearr_26409_26457 = state_26394__$1;
(statearr_26409_26457[(2)] = null);

(statearr_26409_26457[(1)] = (26));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (17))){
var inst_26367 = (state_26394[(14)]);
var state_26394__$1 = state_26394;
var statearr_26410_26458 = state_26394__$1;
(statearr_26410_26458[(2)] = inst_26367);

(statearr_26410_26458[(1)] = (19));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (3))){
var inst_26326 = (state_26394[(9)]);
var state_26394__$1 = state_26394;
var statearr_26411_26459 = state_26394__$1;
(statearr_26411_26459[(2)] = inst_26326);

(statearr_26411_26459[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (12))){
var inst_26367 = (state_26394[(14)]);
var inst_26352 = (state_26394[(15)]);
var inst_26347 = (state_26394[(16)]);
var inst_26367__$1 = (function (){var G__26412 = inst_26352;
return (inst_26347.cljs$core$IFn$_invoke$arity$1 ? inst_26347.cljs$core$IFn$_invoke$arity$1(G__26412) : inst_26347.call(null,G__26412));
})();
var state_26394__$1 = (function (){var statearr_26413 = state_26394;
(statearr_26413[(14)] = inst_26367__$1);

return statearr_26413;
})();
if(cljs.core.truth_(inst_26367__$1)){
var statearr_26414_26460 = state_26394__$1;
(statearr_26414_26460[(1)] = (17));

} else {
var statearr_26415_26461 = state_26394__$1;
(statearr_26415_26461[(1)] = (18));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (2))){
var inst_26326 = (state_26394[(9)]);
var inst_26329 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26326);
var state_26394__$1 = state_26394;
var statearr_26416_26462 = state_26394__$1;
(statearr_26416_26462[(2)] = inst_26329);

(statearr_26416_26462[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (23))){
var inst_26379 = (state_26394[(2)]);
var state_26394__$1 = state_26394;
if(cljs.core.truth_(inst_26379)){
var statearr_26417_26463 = state_26394__$1;
(statearr_26417_26463[(1)] = (24));

} else {
var statearr_26418_26464 = state_26394__$1;
(statearr_26418_26464[(1)] = (25));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (19))){
var inst_26376 = (state_26394[(2)]);
var state_26394__$1 = state_26394;
if(cljs.core.truth_(inst_26376)){
var statearr_26419_26465 = state_26394__$1;
(statearr_26419_26465[(1)] = (20));

} else {
var statearr_26420_26466 = state_26394__$1;
(statearr_26420_26466[(1)] = (21));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (11))){
var inst_26351 = (state_26394[(8)]);
var inst_26357 = (inst_26351 == null);
var state_26394__$1 = state_26394;
if(cljs.core.truth_(inst_26357)){
var statearr_26421_26467 = state_26394__$1;
(statearr_26421_26467[(1)] = (14));

} else {
var statearr_26422_26468 = state_26394__$1;
(statearr_26422_26468[(1)] = (15));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (9))){
var inst_26344 = (state_26394[(10)]);
var inst_26344__$1 = (state_26394[(2)]);
var inst_26345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26344__$1,cljs.core.constant$keyword$_COLON_reads);
var inst_26346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26344__$1,cljs.core.constant$keyword$_COLON_mutes);
var inst_26347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26344__$1,cljs.core.constant$keyword$_COLON_solos);
var state_26394__$1 = (function (){var statearr_26423 = state_26394;
(statearr_26423[(17)] = inst_26346);

(statearr_26423[(10)] = inst_26344__$1);

(statearr_26423[(16)] = inst_26347);

return statearr_26423;
})();
return cljs.core.async.ioc_alts_BANG_(state_26394__$1,(10),inst_26345);
} else {
if((state_val_26395 === (5))){
var inst_26336 = (state_26394[(7)]);
var inst_26339 = cljs.core.seq_QMARK_(inst_26336);
var state_26394__$1 = state_26394;
if(inst_26339){
var statearr_26424_26469 = state_26394__$1;
(statearr_26424_26469[(1)] = (7));

} else {
var statearr_26425_26470 = state_26394__$1;
(statearr_26425_26470[(1)] = (8));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (14))){
var inst_26352 = (state_26394[(15)]);
var inst_26359 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_26352);
var state_26394__$1 = state_26394;
var statearr_26426_26471 = state_26394__$1;
(statearr_26426_26471[(2)] = inst_26359);

(statearr_26426_26471[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (26))){
var inst_26384 = (state_26394[(2)]);
var state_26394__$1 = state_26394;
var statearr_26427_26472 = state_26394__$1;
(statearr_26427_26472[(2)] = inst_26384);

(statearr_26427_26472[(1)] = (22));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (16))){
var inst_26362 = (state_26394[(2)]);
var inst_26363 = calc_state();
var inst_26336 = inst_26363;
var state_26394__$1 = (function (){var statearr_26428 = state_26394;
(statearr_26428[(18)] = inst_26362);

(statearr_26428[(7)] = inst_26336);

return statearr_26428;
})();
var statearr_26429_26473 = state_26394__$1;
(statearr_26429_26473[(2)] = null);

(statearr_26429_26473[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (10))){
var inst_26352 = (state_26394[(15)]);
var inst_26351 = (state_26394[(8)]);
var inst_26350 = (state_26394[(2)]);
var inst_26351__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26350,(0),null);
var inst_26352__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26350,(1),null);
var inst_26353 = (inst_26351__$1 == null);
var inst_26354 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26352__$1,change);
var inst_26355 = (inst_26353) || (inst_26354);
var state_26394__$1 = (function (){var statearr_26430 = state_26394;
(statearr_26430[(15)] = inst_26352__$1);

(statearr_26430[(8)] = inst_26351__$1);

return statearr_26430;
})();
if(cljs.core.truth_(inst_26355)){
var statearr_26431_26474 = state_26394__$1;
(statearr_26431_26474[(1)] = (11));

} else {
var statearr_26432_26475 = state_26394__$1;
(statearr_26432_26475[(1)] = (12));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (18))){
var inst_26346 = (state_26394[(17)]);
var inst_26352 = (state_26394[(15)]);
var inst_26347 = (state_26394[(16)]);
var inst_26371 = cljs.core.empty_QMARK_(inst_26347);
var inst_26372 = (function (){var G__26433 = inst_26352;
return (inst_26346.cljs$core$IFn$_invoke$arity$1 ? inst_26346.cljs$core$IFn$_invoke$arity$1(G__26433) : inst_26346.call(null,G__26433));
})();
var inst_26373 = cljs.core.not(inst_26372);
var inst_26374 = (inst_26371) && (inst_26373);
var state_26394__$1 = state_26394;
var statearr_26434_26476 = state_26394__$1;
(statearr_26434_26476[(2)] = inst_26374);

(statearr_26434_26476[(1)] = (19));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26395 === (8))){
var inst_26336 = (state_26394[(7)]);
var state_26394__$1 = state_26394;
var statearr_26435_26477 = state_26394__$1;
(statearr_26435_26477[(2)] = inst_26336);

(statearr_26435_26477[(1)] = (9));


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
}
});})(c__17765__auto___26447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17685__auto__,c__17765__auto___26447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17686__auto__ = null;
var cljs$core$async$mix_$_state_machine__17686__auto____0 = (function (){
var statearr_26439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26439[(0)] = cljs$core$async$mix_$_state_machine__17686__auto__);

(statearr_26439[(1)] = (1));

return statearr_26439;
});
var cljs$core$async$mix_$_state_machine__17686__auto____1 = (function (state_26394){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_26394);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e26440){if((e26440 instanceof Object)){
var ex__17689__auto__ = e26440;
var statearr_26441_26478 = state_26394;
(statearr_26441_26478[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26394);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e26440;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__26479 = state_26394;
state_26394 = G__26479;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17686__auto__ = function(state_26394){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17686__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17686__auto____1.call(this,state_26394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17686__auto____0;
cljs$core$async$mix_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17686__auto____1;
return cljs$core$async$mix_$_state_machine__17686__auto__;
})()
;})(switch__17685__auto__,c__17765__auto___26447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17767__auto__ = (function (){var statearr_26442 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_26442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto___26447);

return statearr_26442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(c__17765__auto___26447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj26481 = {};
return obj26481;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__15671__auto__ = p;
if(and__15671__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__15671__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16327__auto__ = (((p == null))?null:p);
return (function (){var or__15683__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__26485 = x__16327__auto__;
return goog.typeOf(G__26485);
})()]);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__15671__auto__ = p;
if(and__15671__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__15671__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16327__auto__ = (((p == null))?null:p);
return (function (){var or__15683__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__26489 = x__16327__auto__;
return goog.typeOf(G__26489);
})()]);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var cljs$core$async$unsub_all_STAR_ = null;
var cljs$core$async$unsub_all_STAR___1 = (function (p){
if((function (){var and__15671__auto__ = p;
if(and__15671__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__15671__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16327__auto__ = (((p == null))?null:p);
return (function (){var or__15683__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__26495 = x__16327__auto__;
return goog.typeOf(G__26495);
})()]);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__15671__auto__ = p;
if(and__15671__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__15671__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16327__auto__ = (((p == null))?null:p);
return (function (){var or__15683__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__26497 = x__16327__auto__;
return goog.typeOf(G__26497);
})()]);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
cljs$core$async$unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all_STAR___1.call(this,p);
case 2:
return cljs$core$async$unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all_STAR___1;
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all_STAR___2;
return cljs$core$async$unsub_all_STAR_;
})()
;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function() {
var cljs$core$async$pub = null;
var cljs$core$async$pub__2 = (function (ch,topic_fn){
return cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var cljs$core$async$pub__3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__26636 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26636) : cljs.core.atom.call(null,G__26636));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__15683__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26638 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26638) : cljs.core.deref.call(null,G__26638));
})(),topic);
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__15683__auto__,mults){
return (function (p1__26498_SHARP_){
if(cljs.core.truth_((function (){var G__26639 = topic;
return (p1__26498_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26498_SHARP_.cljs$core$IFn$_invoke$arity$1(G__26639) : p1__26498_SHARP_.call(null,G__26639));
})())){
return p1__26498_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26498_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__26640 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__26640) : buf_fn.call(null,G__26640));
})())));
}
});})(or__15683__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26641 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26641 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26642){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26642 = meta26642;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26641.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26641.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__26644 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__26644) : self__.ensure_mult.call(null,G__26644));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26641.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26645 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26645) : cljs.core.deref.call(null,G__26645));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t26641.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__26646 = self__.mults;
var G__26647 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26646,G__26647) : cljs.core.reset_BANG_.call(null,G__26646,G__26647));
});})(mults,ensure_mult))
;

cljs.core.async.t26641.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26641.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26641.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26643){
var self__ = this;
var _26643__$1 = this;
return self__.meta26642;
});})(mults,ensure_mult))
;

cljs.core.async.t26641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26643,meta26642__$1){
var self__ = this;
var _26643__$1 = this;
return (new cljs.core.async.t26641(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26642__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26641.cljs$lang$type = true;

cljs.core.async.t26641.cljs$lang$ctorStr = "cljs.core.async/t26641";

cljs.core.async.t26641.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16270__auto__,writer__16271__auto__,opt__16272__auto__){
return cljs.core._write(writer__16271__auto__,"cljs.core.async/t26641");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26641 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t26641(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26642){
return (new cljs.core.async.t26641(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26642));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26641(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17765__auto___26770 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17765__auto___26770,mults,ensure_mult,p){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (c__17765__auto___26770,mults,ensure_mult,p){
return (function (state_26719){
var state_val_26720 = (state_26719[(1)]);
if((state_val_26720 === (7))){
var inst_26715 = (state_26719[(2)]);
var state_26719__$1 = state_26719;
var statearr_26721_26771 = state_26719__$1;
(statearr_26721_26771[(2)] = inst_26715);

(statearr_26721_26771[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26720 === (20))){
var state_26719__$1 = state_26719;
var statearr_26722_26772 = state_26719__$1;
(statearr_26722_26772[(2)] = null);

(statearr_26722_26772[(1)] = (21));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26720 === (1))){
var state_26719__$1 = state_26719;
var statearr_26723_26773 = state_26719__$1;
(statearr_26723_26773[(2)] = null);

(statearr_26723_26773[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26720 === (24))){
var inst_26698 = (state_26719[(7)]);
var inst_26707 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26698);
var state_26719__$1 = state_26719;
var statearr_26724_26774 = state_26719__$1;
(statearr_26724_26774[(2)] = inst_26707);

(statearr_26724_26774[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26720 === (4))){
var inst_26650 = (state_26719[(8)]);
var inst_26650__$1 = (state_26719[(2)]);
var inst_26651 = (inst_26650__$1 == null);
var state_26719__$1 = (function (){var statearr_26725 = state_26719;
(statearr_26725[(8)] = inst_26650__$1);

return statearr_26725;
})();
if(cljs.core.truth_(inst_26651)){
var statearr_26726_26775 = state_26719__$1;
(statearr_26726_26775[(1)] = (5));

} else {
var statearr_26727_26776 = state_26719__$1;
(statearr_26727_26776[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26720 === (15))){
var inst_26692 = (state_26719[(2)]);
var state_26719__$1 = state_26719;
var statearr_26728_26777 = state_26719__$1;
(statearr_26728_26777[(2)] = inst_26692);

(statearr_26728_26777[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26720 === (21))){
var inst_26712 = (state_26719[(2)]);
var state_26719__$1 = (function (){var statearr_26729 = state_26719;
(statearr_26729[(9)] = inst_26712);

return statearr_26729;
})();
var statearr_26730_26778 = state_26719__$1;
(statearr_26730_26778[(2)] = null);

(statearr_26730_26778[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26720 === (13))){
var inst_26674 = (state_26719[(10)]);
var inst_26676 = cljs.core.chunked_seq_QMARK_(inst_26674);
var state_26719__$1 = state_26719;
if(inst_26676){
var statearr_26731_26779 = state_26719__$1;
(statearr_26731_26779[(1)] = (16));

} else {
var statearr_26732_26780 = state_26719__$1;
(statearr_26732_26780[(1)] = (17));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26720 === (22))){
var inst_26704 = (state_26719[(2)]);
var state_26719__$1 = state_26719;
if(cljs.core.truth_(inst_26704)){
var statearr_26733_26781 = state_26719__$1;
(statearr_26733_26781[(1)] = (23));

} else {
var statearr_26734_26782 = state_26719__$1;
(statearr_26734_26782[(1)] = (24));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26720 === (6))){
var inst_26698 = (state_26719[(7)]);
var inst_26650 = (state_26719[(8)]);
var inst_26700 = (state_26719[(11)]);
var inst_26698__$1 = (function (){var G__26735 = inst_26650;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__26735) : topic_fn.call(null,G__26735));
})();
var inst_26699 = (function (){var G__26736 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26736) : cljs.core.deref.call(null,G__26736));
})();
var inst_26700__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26699,inst_26698__$1);
var state_26719__$1 = (function (){var statearr_26737 = state_26719;
(statearr_26737[(7)] = inst_26698__$1);

(statearr_26737[(11)] = inst_26700__$1);

return statearr_26737;
})();
if(cljs.core.truth_(inst_26700__$1)){
var statearr_26738_26783 = state_26719__$1;
(statearr_26738_26783[(1)] = (19));

} else {
var statearr_26739_26784 = state_26719__$1;
(statearr_26739_26784[(1)] = (20));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26720 === (25))){
var inst_26709 = (state_26719[(2)]);
var state_26719__$1 = state_26719;
var statearr_26740_26785 = state_26719__$1;
(statearr_26740_26785[(2)] = inst_26709);

(statearr_26740_26785[(1)] = (21));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26720 === (17))){
var inst_26674 = (state_26719[(10)]);
var inst_26683 = cljs.core.first(inst_26674);
var inst_26684 = cljs.core.async.muxch_STAR_(inst_26683);
var inst_26685 = cljs.core.async.close_BANG_(inst_26684);
var inst_26686 = cljs.core.next(inst_26674);
var inst_26660 = inst_26686;
var inst_26661 = null;
var inst_26662 = (0);
var inst_26663 = (0);
var state_26719__$1 = (function (){var statearr_26741 = state_26719;
(statearr_26741[(12)] = inst_26660);

(statearr_26741[(13)] = inst_26661);

(statearr_26741[(14)] = inst_26685);

(statearr_26741[(15)] = inst_26663);

(statearr_26741[(16)] = inst_26662);

return statearr_26741;
})();
var statearr_26742_26786 = state_26719__$1;
(statearr_26742_26786[(2)] = null);

(statearr_26742_26786[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26720 === (3))){
var inst_26717 = (state_26719[(2)]);
var state_26719__$1 = state_26719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26719__$1,inst_26717);
} else {
if((state_val_26720 === (12))){
var inst_26694 = (state_26719[(2)]);
var state_26719__$1 = state_26719;
var statearr_26743_26787 = state_26719__$1;
(statearr_26743_26787[(2)] = inst_26694);

(statearr_26743_26787[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26720 === (2))){
var state_26719__$1 = state_26719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26719__$1,(4),ch);
} else {
if((state_val_26720 === (23))){
var state_26719__$1 = state_26719;
var statearr_26744_26788 = state_26719__$1;
(statearr_26744_26788[(2)] = null);

(statearr_26744_26788[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26720 === (19))){
var inst_26650 = (state_26719[(8)]);
var inst_26700 = (state_26719[(11)]);
var inst_26702 = cljs.core.async.muxch_STAR_(inst_26700);
var state_26719__$1 = state_26719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26719__$1,(22),inst_26702,inst_26650);
} else {
if((state_val_26720 === (11))){
var inst_26660 = (state_26719[(12)]);
var inst_26674 = (state_26719[(10)]);
var inst_26674__$1 = cljs.core.seq(inst_26660);
var state_26719__$1 = (function (){var statearr_26745 = state_26719;
(statearr_26745[(10)] = inst_26674__$1);

return statearr_26745;
})();
if(inst_26674__$1){
var statearr_26746_26789 = state_26719__$1;
(statearr_26746_26789[(1)] = (13));

} else {
var statearr_26747_26790 = state_26719__$1;
(statearr_26747_26790[(1)] = (14));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26720 === (9))){
var inst_26696 = (state_26719[(2)]);
var state_26719__$1 = state_26719;
var statearr_26748_26791 = state_26719__$1;
(statearr_26748_26791[(2)] = inst_26696);

(statearr_26748_26791[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26720 === (5))){
var inst_26657 = (function (){var G__26749 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26749) : cljs.core.deref.call(null,G__26749));
})();
var inst_26658 = cljs.core.vals(inst_26657);
var inst_26659 = cljs.core.seq(inst_26658);
var inst_26660 = inst_26659;
var inst_26661 = null;
var inst_26662 = (0);
var inst_26663 = (0);
var state_26719__$1 = (function (){var statearr_26750 = state_26719;
(statearr_26750[(12)] = inst_26660);

(statearr_26750[(13)] = inst_26661);

(statearr_26750[(15)] = inst_26663);

(statearr_26750[(16)] = inst_26662);

return statearr_26750;
})();
var statearr_26751_26792 = state_26719__$1;
(statearr_26751_26792[(2)] = null);

(statearr_26751_26792[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26720 === (14))){
var state_26719__$1 = state_26719;
var statearr_26755_26793 = state_26719__$1;
(statearr_26755_26793[(2)] = null);

(statearr_26755_26793[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26720 === (16))){
var inst_26674 = (state_26719[(10)]);
var inst_26678 = cljs.core.chunk_first(inst_26674);
var inst_26679 = cljs.core.chunk_rest(inst_26674);
var inst_26680 = cljs.core.count(inst_26678);
var inst_26660 = inst_26679;
var inst_26661 = inst_26678;
var inst_26662 = inst_26680;
var inst_26663 = (0);
var state_26719__$1 = (function (){var statearr_26756 = state_26719;
(statearr_26756[(12)] = inst_26660);

(statearr_26756[(13)] = inst_26661);

(statearr_26756[(15)] = inst_26663);

(statearr_26756[(16)] = inst_26662);

return statearr_26756;
})();
var statearr_26757_26794 = state_26719__$1;
(statearr_26757_26794[(2)] = null);

(statearr_26757_26794[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26720 === (10))){
var inst_26660 = (state_26719[(12)]);
var inst_26661 = (state_26719[(13)]);
var inst_26663 = (state_26719[(15)]);
var inst_26662 = (state_26719[(16)]);
var inst_26668 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26661,inst_26663);
var inst_26669 = cljs.core.async.muxch_STAR_(inst_26668);
var inst_26670 = cljs.core.async.close_BANG_(inst_26669);
var inst_26671 = (inst_26663 + (1));
var tmp26752 = inst_26660;
var tmp26753 = inst_26661;
var tmp26754 = inst_26662;
var inst_26660__$1 = tmp26752;
var inst_26661__$1 = tmp26753;
var inst_26662__$1 = tmp26754;
var inst_26663__$1 = inst_26671;
var state_26719__$1 = (function (){var statearr_26758 = state_26719;
(statearr_26758[(12)] = inst_26660__$1);

(statearr_26758[(13)] = inst_26661__$1);

(statearr_26758[(17)] = inst_26670);

(statearr_26758[(15)] = inst_26663__$1);

(statearr_26758[(16)] = inst_26662__$1);

return statearr_26758;
})();
var statearr_26759_26795 = state_26719__$1;
(statearr_26759_26795[(2)] = null);

(statearr_26759_26795[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26720 === (18))){
var inst_26689 = (state_26719[(2)]);
var state_26719__$1 = state_26719;
var statearr_26760_26796 = state_26719__$1;
(statearr_26760_26796[(2)] = inst_26689);

(statearr_26760_26796[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26720 === (8))){
var inst_26663 = (state_26719[(15)]);
var inst_26662 = (state_26719[(16)]);
var inst_26665 = (inst_26663 < inst_26662);
var inst_26666 = inst_26665;
var state_26719__$1 = state_26719;
if(cljs.core.truth_(inst_26666)){
var statearr_26761_26797 = state_26719__$1;
(statearr_26761_26797[(1)] = (10));

} else {
var statearr_26762_26798 = state_26719__$1;
(statearr_26762_26798[(1)] = (11));

}

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
});})(c__17765__auto___26770,mults,ensure_mult,p))
;
return ((function (switch__17685__auto__,c__17765__auto___26770,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__17686__auto__ = null;
var cljs$core$async$pub_$_state_machine__17686__auto____0 = (function (){
var statearr_26766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26766[(0)] = cljs$core$async$pub_$_state_machine__17686__auto__);

(statearr_26766[(1)] = (1));

return statearr_26766;
});
var cljs$core$async$pub_$_state_machine__17686__auto____1 = (function (state_26719){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_26719);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e26767){if((e26767 instanceof Object)){
var ex__17689__auto__ = e26767;
var statearr_26768_26799 = state_26719;
(statearr_26768_26799[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26719);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e26767;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__26800 = state_26719;
state_26719 = G__26800;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__17686__auto__ = function(state_26719){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__17686__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__17686__auto____1.call(this,state_26719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__17686__auto____0;
cljs$core$async$pub_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__17686__auto____1;
return cljs$core$async$pub_$_state_machine__17686__auto__;
})()
;})(switch__17685__auto__,c__17765__auto___26770,mults,ensure_mult,p))
})();
var state__17767__auto__ = (function (){var statearr_26769 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_26769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto___26770);

return statearr_26769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(c__17765__auto___26770,mults,ensure_mult,p))
);


return p;
});
cljs$core$async$pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return cljs$core$async$pub__2.call(this,ch,topic_fn);
case 3:
return cljs$core$async$pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pub__2;
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pub__3;
return cljs$core$async$pub;
})()
;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function() {
var cljs$core$async$sub = null;
var cljs$core$async$sub__3 = (function (p,topic,ch){
return cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var cljs$core$async$sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
cljs$core$async$sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return cljs$core$async$sub__3.call(this,p,topic,ch);
case 4:
return cljs$core$async$sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$sub__3;
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$sub__4;
return cljs$core$async$sub;
})()
;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var cljs$core$async$unsub_all = null;
var cljs$core$async$unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var cljs$core$async$unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
cljs$core$async$unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all__1.call(this,p);
case 2:
return cljs$core$async$unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all__1;
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all__2;
return cljs$core$async$unsub_all;
})()
;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function() {
var cljs$core$async$map = null;
var cljs$core$async$map__2 = (function (f,chs){
return cljs$core$async$map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var cljs$core$async$map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__26881 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26881) : cljs.core.atom.call(null,G__26881));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__17765__auto___26954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17765__auto___26954,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (c__17765__auto___26954,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26920){
var state_val_26921 = (state_26920[(1)]);
if((state_val_26921 === (7))){
var state_26920__$1 = state_26920;
var statearr_26922_26955 = state_26920__$1;
(statearr_26922_26955[(2)] = null);

(statearr_26922_26955[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26921 === (1))){
var state_26920__$1 = state_26920;
var statearr_26923_26956 = state_26920__$1;
(statearr_26923_26956[(2)] = null);

(statearr_26923_26956[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26921 === (4))){
var inst_26884 = (state_26920[(7)]);
var inst_26886 = (inst_26884 < cnt);
var state_26920__$1 = state_26920;
if(cljs.core.truth_(inst_26886)){
var statearr_26924_26957 = state_26920__$1;
(statearr_26924_26957[(1)] = (6));

} else {
var statearr_26925_26958 = state_26920__$1;
(statearr_26925_26958[(1)] = (7));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26921 === (15))){
var inst_26916 = (state_26920[(2)]);
var state_26920__$1 = state_26920;
var statearr_26926_26959 = state_26920__$1;
(statearr_26926_26959[(2)] = inst_26916);

(statearr_26926_26959[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26921 === (13))){
var inst_26909 = cljs.core.async.close_BANG_(out);
var state_26920__$1 = state_26920;
var statearr_26927_26960 = state_26920__$1;
(statearr_26927_26960[(2)] = inst_26909);

(statearr_26927_26960[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26921 === (6))){
var state_26920__$1 = state_26920;
var statearr_26928_26961 = state_26920__$1;
(statearr_26928_26961[(2)] = null);

(statearr_26928_26961[(1)] = (11));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26921 === (3))){
var inst_26918 = (state_26920[(2)]);
var state_26920__$1 = state_26920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26920__$1,inst_26918);
} else {
if((state_val_26921 === (12))){
var inst_26906 = (state_26920[(8)]);
var inst_26906__$1 = (state_26920[(2)]);
var inst_26907 = cljs.core.some(cljs.core.nil_QMARK_,inst_26906__$1);
var state_26920__$1 = (function (){var statearr_26929 = state_26920;
(statearr_26929[(8)] = inst_26906__$1);

return statearr_26929;
})();
if(cljs.core.truth_(inst_26907)){
var statearr_26930_26962 = state_26920__$1;
(statearr_26930_26962[(1)] = (13));

} else {
var statearr_26931_26963 = state_26920__$1;
(statearr_26931_26963[(1)] = (14));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26921 === (2))){
var inst_26883 = (function (){var G__26932 = dctr;
var G__26933 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26932,G__26933) : cljs.core.reset_BANG_.call(null,G__26932,G__26933));
})();
var inst_26884 = (0);
var state_26920__$1 = (function (){var statearr_26934 = state_26920;
(statearr_26934[(9)] = inst_26883);

(statearr_26934[(7)] = inst_26884);

return statearr_26934;
})();
var statearr_26935_26964 = state_26920__$1;
(statearr_26935_26964[(2)] = null);

(statearr_26935_26964[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26921 === (11))){
var inst_26884 = (state_26920[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26920,(10),Object,null,(9));
var inst_26893 = (function (){var G__26936 = inst_26884;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__26936) : chs__$1.call(null,G__26936));
})();
var inst_26894 = (function (){var G__26937 = inst_26884;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26937) : done.call(null,G__26937));
})();
var inst_26895 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26893,inst_26894);
var state_26920__$1 = state_26920;
var statearr_26938_26965 = state_26920__$1;
(statearr_26938_26965[(2)] = inst_26895);


cljs.core.async.impl.ioc_helpers.process_exception(state_26920__$1);

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26921 === (9))){
var inst_26884 = (state_26920[(7)]);
var inst_26897 = (state_26920[(2)]);
var inst_26898 = (inst_26884 + (1));
var inst_26884__$1 = inst_26898;
var state_26920__$1 = (function (){var statearr_26939 = state_26920;
(statearr_26939[(10)] = inst_26897);

(statearr_26939[(7)] = inst_26884__$1);

return statearr_26939;
})();
var statearr_26940_26966 = state_26920__$1;
(statearr_26940_26966[(2)] = null);

(statearr_26940_26966[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26921 === (5))){
var inst_26904 = (state_26920[(2)]);
var state_26920__$1 = (function (){var statearr_26941 = state_26920;
(statearr_26941[(11)] = inst_26904);

return statearr_26941;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26920__$1,(12),dchan);
} else {
if((state_val_26921 === (14))){
var inst_26906 = (state_26920[(8)]);
var inst_26911 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26906);
var state_26920__$1 = state_26920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26920__$1,(16),out,inst_26911);
} else {
if((state_val_26921 === (16))){
var inst_26913 = (state_26920[(2)]);
var state_26920__$1 = (function (){var statearr_26942 = state_26920;
(statearr_26942[(12)] = inst_26913);

return statearr_26942;
})();
var statearr_26943_26967 = state_26920__$1;
(statearr_26943_26967[(2)] = null);

(statearr_26943_26967[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26921 === (10))){
var inst_26888 = (state_26920[(2)]);
var inst_26889 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_26920__$1 = (function (){var statearr_26944 = state_26920;
(statearr_26944[(13)] = inst_26888);

return statearr_26944;
})();
var statearr_26945_26968 = state_26920__$1;
(statearr_26945_26968[(2)] = inst_26889);


cljs.core.async.impl.ioc_helpers.process_exception(state_26920__$1);

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_26921 === (8))){
var inst_26902 = (state_26920[(2)]);
var state_26920__$1 = state_26920;
var statearr_26946_26969 = state_26920__$1;
(statearr_26946_26969[(2)] = inst_26902);

(statearr_26946_26969[(1)] = (5));


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
});})(c__17765__auto___26954,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17685__auto__,c__17765__auto___26954,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__17686__auto__ = null;
var cljs$core$async$map_$_state_machine__17686__auto____0 = (function (){
var statearr_26950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26950[(0)] = cljs$core$async$map_$_state_machine__17686__auto__);

(statearr_26950[(1)] = (1));

return statearr_26950;
});
var cljs$core$async$map_$_state_machine__17686__auto____1 = (function (state_26920){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_26920);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e26951){if((e26951 instanceof Object)){
var ex__17689__auto__ = e26951;
var statearr_26952_26970 = state_26920;
(statearr_26952_26970[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26920);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e26951;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__26971 = state_26920;
state_26920 = G__26971;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__17686__auto__ = function(state_26920){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__17686__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__17686__auto____1.call(this,state_26920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__17686__auto____0;
cljs$core$async$map_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__17686__auto____1;
return cljs$core$async$map_$_state_machine__17686__auto__;
})()
;})(switch__17685__auto__,c__17765__auto___26954,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17767__auto__ = (function (){var statearr_26953 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_26953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto___26954);

return statearr_26953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(c__17765__auto___26954,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
cljs$core$async$map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$map__2.call(this,f,chs);
case 3:
return cljs$core$async$map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$map__2;
cljs$core$async$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$map__3;
return cljs$core$async$map;
})()
;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function() {
var cljs$core$async$merge = null;
var cljs$core$async$merge__1 = (function (chs){
return cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var cljs$core$async$merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17765__auto___27081 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17765__auto___27081,out){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (c__17765__auto___27081,out){
return (function (state_27057){
var state_val_27058 = (state_27057[(1)]);
if((state_val_27058 === (7))){
var inst_27037 = (state_27057[(7)]);
var inst_27036 = (state_27057[(8)]);
var inst_27036__$1 = (state_27057[(2)]);
var inst_27037__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27036__$1,(0),null);
var inst_27038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27036__$1,(1),null);
var inst_27039 = (inst_27037__$1 == null);
var state_27057__$1 = (function (){var statearr_27059 = state_27057;
(statearr_27059[(7)] = inst_27037__$1);

(statearr_27059[(9)] = inst_27038);

(statearr_27059[(8)] = inst_27036__$1);

return statearr_27059;
})();
if(cljs.core.truth_(inst_27039)){
var statearr_27060_27082 = state_27057__$1;
(statearr_27060_27082[(1)] = (8));

} else {
var statearr_27061_27083 = state_27057__$1;
(statearr_27061_27083[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27058 === (1))){
var inst_27028 = cljs.core.vec(chs);
var inst_27029 = inst_27028;
var state_27057__$1 = (function (){var statearr_27062 = state_27057;
(statearr_27062[(10)] = inst_27029);

return statearr_27062;
})();
var statearr_27063_27084 = state_27057__$1;
(statearr_27063_27084[(2)] = null);

(statearr_27063_27084[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27058 === (4))){
var inst_27029 = (state_27057[(10)]);
var state_27057__$1 = state_27057;
return cljs.core.async.ioc_alts_BANG_(state_27057__$1,(7),inst_27029);
} else {
if((state_val_27058 === (6))){
var inst_27053 = (state_27057[(2)]);
var state_27057__$1 = state_27057;
var statearr_27064_27085 = state_27057__$1;
(statearr_27064_27085[(2)] = inst_27053);

(statearr_27064_27085[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27058 === (3))){
var inst_27055 = (state_27057[(2)]);
var state_27057__$1 = state_27057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27057__$1,inst_27055);
} else {
if((state_val_27058 === (2))){
var inst_27029 = (state_27057[(10)]);
var inst_27031 = cljs.core.count(inst_27029);
var inst_27032 = (inst_27031 > (0));
var state_27057__$1 = state_27057;
if(cljs.core.truth_(inst_27032)){
var statearr_27066_27086 = state_27057__$1;
(statearr_27066_27086[(1)] = (4));

} else {
var statearr_27067_27087 = state_27057__$1;
(statearr_27067_27087[(1)] = (5));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27058 === (11))){
var inst_27029 = (state_27057[(10)]);
var inst_27046 = (state_27057[(2)]);
var tmp27065 = inst_27029;
var inst_27029__$1 = tmp27065;
var state_27057__$1 = (function (){var statearr_27068 = state_27057;
(statearr_27068[(11)] = inst_27046);

(statearr_27068[(10)] = inst_27029__$1);

return statearr_27068;
})();
var statearr_27069_27088 = state_27057__$1;
(statearr_27069_27088[(2)] = null);

(statearr_27069_27088[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27058 === (9))){
var inst_27037 = (state_27057[(7)]);
var state_27057__$1 = state_27057;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27057__$1,(11),out,inst_27037);
} else {
if((state_val_27058 === (5))){
var inst_27051 = cljs.core.async.close_BANG_(out);
var state_27057__$1 = state_27057;
var statearr_27070_27089 = state_27057__$1;
(statearr_27070_27089[(2)] = inst_27051);

(statearr_27070_27089[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27058 === (10))){
var inst_27049 = (state_27057[(2)]);
var state_27057__$1 = state_27057;
var statearr_27071_27090 = state_27057__$1;
(statearr_27071_27090[(2)] = inst_27049);

(statearr_27071_27090[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27058 === (8))){
var inst_27037 = (state_27057[(7)]);
var inst_27038 = (state_27057[(9)]);
var inst_27029 = (state_27057[(10)]);
var inst_27036 = (state_27057[(8)]);
var inst_27041 = (function (){var c = inst_27038;
var v = inst_27037;
var vec__27034 = inst_27036;
var cs = inst_27029;
return ((function (c,v,vec__27034,cs,inst_27037,inst_27038,inst_27029,inst_27036,state_val_27058,c__17765__auto___27081,out){
return (function (p1__26972_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26972_SHARP_);
});
;})(c,v,vec__27034,cs,inst_27037,inst_27038,inst_27029,inst_27036,state_val_27058,c__17765__auto___27081,out))
})();
var inst_27042 = cljs.core.filterv(inst_27041,inst_27029);
var inst_27029__$1 = inst_27042;
var state_27057__$1 = (function (){var statearr_27072 = state_27057;
(statearr_27072[(10)] = inst_27029__$1);

return statearr_27072;
})();
var statearr_27073_27091 = state_27057__$1;
(statearr_27073_27091[(2)] = null);

(statearr_27073_27091[(1)] = (2));


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
});})(c__17765__auto___27081,out))
;
return ((function (switch__17685__auto__,c__17765__auto___27081,out){
return (function() {
var cljs$core$async$merge_$_state_machine__17686__auto__ = null;
var cljs$core$async$merge_$_state_machine__17686__auto____0 = (function (){
var statearr_27077 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27077[(0)] = cljs$core$async$merge_$_state_machine__17686__auto__);

(statearr_27077[(1)] = (1));

return statearr_27077;
});
var cljs$core$async$merge_$_state_machine__17686__auto____1 = (function (state_27057){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_27057);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e27078){if((e27078 instanceof Object)){
var ex__17689__auto__ = e27078;
var statearr_27079_27092 = state_27057;
(statearr_27079_27092[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27057);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e27078;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__27093 = state_27057;
state_27057 = G__27093;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__17686__auto__ = function(state_27057){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__17686__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__17686__auto____1.call(this,state_27057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__17686__auto____0;
cljs$core$async$merge_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__17686__auto____1;
return cljs$core$async$merge_$_state_machine__17686__auto__;
})()
;})(switch__17685__auto__,c__17765__auto___27081,out))
})();
var state__17767__auto__ = (function (){var statearr_27080 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_27080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto___27081);

return statearr_27080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(c__17765__auto___27081,out))
);


return out;
});
cljs$core$async$merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$merge__1.call(this,chs);
case 2:
return cljs$core$async$merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge__1;
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$merge__2;
return cljs$core$async$merge;
})()
;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function() {
var cljs$core$async$take = null;
var cljs$core$async$take__2 = (function (n,ch){
return cljs$core$async$take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var cljs$core$async$take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17765__auto___27189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17765__auto___27189,out){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (c__17765__auto___27189,out){
return (function (state_27166){
var state_val_27167 = (state_27166[(1)]);
if((state_val_27167 === (7))){
var inst_27148 = (state_27166[(7)]);
var inst_27148__$1 = (state_27166[(2)]);
var inst_27149 = (inst_27148__$1 == null);
var inst_27150 = cljs.core.not(inst_27149);
var state_27166__$1 = (function (){var statearr_27168 = state_27166;
(statearr_27168[(7)] = inst_27148__$1);

return statearr_27168;
})();
if(inst_27150){
var statearr_27169_27190 = state_27166__$1;
(statearr_27169_27190[(1)] = (8));

} else {
var statearr_27170_27191 = state_27166__$1;
(statearr_27170_27191[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27167 === (1))){
var inst_27143 = (0);
var state_27166__$1 = (function (){var statearr_27171 = state_27166;
(statearr_27171[(8)] = inst_27143);

return statearr_27171;
})();
var statearr_27172_27192 = state_27166__$1;
(statearr_27172_27192[(2)] = null);

(statearr_27172_27192[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27167 === (4))){
var state_27166__$1 = state_27166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27166__$1,(7),ch);
} else {
if((state_val_27167 === (6))){
var inst_27161 = (state_27166[(2)]);
var state_27166__$1 = state_27166;
var statearr_27173_27193 = state_27166__$1;
(statearr_27173_27193[(2)] = inst_27161);

(statearr_27173_27193[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27167 === (3))){
var inst_27163 = (state_27166[(2)]);
var inst_27164 = cljs.core.async.close_BANG_(out);
var state_27166__$1 = (function (){var statearr_27174 = state_27166;
(statearr_27174[(9)] = inst_27163);

return statearr_27174;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27166__$1,inst_27164);
} else {
if((state_val_27167 === (2))){
var inst_27143 = (state_27166[(8)]);
var inst_27145 = (inst_27143 < n);
var state_27166__$1 = state_27166;
if(cljs.core.truth_(inst_27145)){
var statearr_27175_27194 = state_27166__$1;
(statearr_27175_27194[(1)] = (4));

} else {
var statearr_27176_27195 = state_27166__$1;
(statearr_27176_27195[(1)] = (5));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27167 === (11))){
var inst_27143 = (state_27166[(8)]);
var inst_27153 = (state_27166[(2)]);
var inst_27154 = (inst_27143 + (1));
var inst_27143__$1 = inst_27154;
var state_27166__$1 = (function (){var statearr_27177 = state_27166;
(statearr_27177[(8)] = inst_27143__$1);

(statearr_27177[(10)] = inst_27153);

return statearr_27177;
})();
var statearr_27178_27196 = state_27166__$1;
(statearr_27178_27196[(2)] = null);

(statearr_27178_27196[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27167 === (9))){
var state_27166__$1 = state_27166;
var statearr_27179_27197 = state_27166__$1;
(statearr_27179_27197[(2)] = null);

(statearr_27179_27197[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27167 === (5))){
var state_27166__$1 = state_27166;
var statearr_27180_27198 = state_27166__$1;
(statearr_27180_27198[(2)] = null);

(statearr_27180_27198[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27167 === (10))){
var inst_27158 = (state_27166[(2)]);
var state_27166__$1 = state_27166;
var statearr_27181_27199 = state_27166__$1;
(statearr_27181_27199[(2)] = inst_27158);

(statearr_27181_27199[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27167 === (8))){
var inst_27148 = (state_27166[(7)]);
var state_27166__$1 = state_27166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27166__$1,(11),out,inst_27148);
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
});})(c__17765__auto___27189,out))
;
return ((function (switch__17685__auto__,c__17765__auto___27189,out){
return (function() {
var cljs$core$async$take_$_state_machine__17686__auto__ = null;
var cljs$core$async$take_$_state_machine__17686__auto____0 = (function (){
var statearr_27185 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27185[(0)] = cljs$core$async$take_$_state_machine__17686__auto__);

(statearr_27185[(1)] = (1));

return statearr_27185;
});
var cljs$core$async$take_$_state_machine__17686__auto____1 = (function (state_27166){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_27166);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e27186){if((e27186 instanceof Object)){
var ex__17689__auto__ = e27186;
var statearr_27187_27200 = state_27166;
(statearr_27187_27200[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27166);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e27186;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__27201 = state_27166;
state_27166 = G__27201;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__17686__auto__ = function(state_27166){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__17686__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__17686__auto____1.call(this,state_27166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__17686__auto____0;
cljs$core$async$take_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__17686__auto____1;
return cljs$core$async$take_$_state_machine__17686__auto__;
})()
;})(switch__17685__auto__,c__17765__auto___27189,out))
})();
var state__17767__auto__ = (function (){var statearr_27188 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_27188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto___27189);

return statearr_27188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(c__17765__auto___27189,out))
);


return out;
});
cljs$core$async$take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$take__2.call(this,n,ch);
case 3:
return cljs$core$async$take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take__2;
cljs$core$async$take.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take__3;
return cljs$core$async$take;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27214 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27214 = (function (ch,f,map_LT_,meta27215){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27215 = meta27215;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27214.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27214.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t27214.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27214.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t27217 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27217 = (function (fn1,_,meta27215,map_LT_,f,ch,meta27218){
this.fn1 = fn1;
this._ = _;
this.meta27215 = meta27215;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27218 = meta27218;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27217.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27217.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t27217.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27202_SHARP_){
var G__27220 = (((p1__27202_SHARP_ == null))?null:(function (){var G__27221 = p1__27202_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__27221) : self__.f.call(null,G__27221));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__27220) : f1.call(null,G__27220));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27217.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27219){
var self__ = this;
var _27219__$1 = this;
return self__.meta27218;
});})(___$1))
;

cljs.core.async.t27217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27219,meta27218__$1){
var self__ = this;
var _27219__$1 = this;
return (new cljs.core.async.t27217(self__.fn1,self__._,self__.meta27215,self__.map_LT_,self__.f,self__.ch,meta27218__$1));
});})(___$1))
;

cljs.core.async.t27217.cljs$lang$type = true;

cljs.core.async.t27217.cljs$lang$ctorStr = "cljs.core.async/t27217";

cljs.core.async.t27217.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16270__auto__,writer__16271__auto__,opt__16272__auto__){
return cljs.core._write(writer__16271__auto__,"cljs.core.async/t27217");
});})(___$1))
;

cljs.core.async.__GT_t27217 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27217(fn1__$1,___$2,meta27215__$1,map_LT___$1,f__$1,ch__$1,meta27218){
return (new cljs.core.async.t27217(fn1__$1,___$2,meta27215__$1,map_LT___$1,f__$1,ch__$1,meta27218));
});})(___$1))
;

}

return (new cljs.core.async.t27217(fn1,___$1,self__.meta27215,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__15671__auto__ = ret;
if(cljs.core.truth_(and__15671__auto__)){
return !(((function (){var G__27222 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27222) : cljs.core.deref.call(null,G__27222));
})() == null));
} else {
return and__15671__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__27223 = (function (){var G__27224 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27224) : cljs.core.deref.call(null,G__27224));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__27223) : self__.f.call(null,G__27223));
})());
} else {
return ret;
}
});

cljs.core.async.t27214.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27214.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t27214.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t27214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27216){
var self__ = this;
var _27216__$1 = this;
return self__.meta27215;
});

cljs.core.async.t27214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27216,meta27215__$1){
var self__ = this;
var _27216__$1 = this;
return (new cljs.core.async.t27214(self__.ch,self__.f,self__.map_LT_,meta27215__$1));
});

cljs.core.async.t27214.cljs$lang$type = true;

cljs.core.async.t27214.cljs$lang$ctorStr = "cljs.core.async/t27214";

cljs.core.async.t27214.cljs$lang$ctorPrWriter = (function (this__16270__auto__,writer__16271__auto__,opt__16272__auto__){
return cljs.core._write(writer__16271__auto__,"cljs.core.async/t27214");
});

cljs.core.async.__GT_t27214 = (function cljs$core$async$map_LT__$___GT_t27214(ch__$1,f__$1,map_LT___$1,meta27215){
return (new cljs.core.async.t27214(ch__$1,f__$1,map_LT___$1,meta27215));
});

}

return (new cljs.core.async.t27214(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27229 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27229 = (function (ch,f,map_GT_,meta27230){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27230 = meta27230;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27229.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27229.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__27232 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__27232) : self__.f.call(null,G__27232));
})(),fn1);
});

cljs.core.async.t27229.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27229.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t27229.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27229.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t27229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27231){
var self__ = this;
var _27231__$1 = this;
return self__.meta27230;
});

cljs.core.async.t27229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27231,meta27230__$1){
var self__ = this;
var _27231__$1 = this;
return (new cljs.core.async.t27229(self__.ch,self__.f,self__.map_GT_,meta27230__$1));
});

cljs.core.async.t27229.cljs$lang$type = true;

cljs.core.async.t27229.cljs$lang$ctorStr = "cljs.core.async/t27229";

cljs.core.async.t27229.cljs$lang$ctorPrWriter = (function (this__16270__auto__,writer__16271__auto__,opt__16272__auto__){
return cljs.core._write(writer__16271__auto__,"cljs.core.async/t27229");
});

cljs.core.async.__GT_t27229 = (function cljs$core$async$map_GT__$___GT_t27229(ch__$1,f__$1,map_GT___$1,meta27230){
return (new cljs.core.async.t27229(ch__$1,f__$1,map_GT___$1,meta27230));
});

}

return (new cljs.core.async.t27229(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27237 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27237 = (function (ch,p,filter_GT_,meta27238){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27238 = meta27238;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27237.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27237.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__27240 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__27240) : self__.p.call(null,G__27240));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t27237.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27237.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t27237.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27237.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t27237.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t27237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27239){
var self__ = this;
var _27239__$1 = this;
return self__.meta27238;
});

cljs.core.async.t27237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27239,meta27238__$1){
var self__ = this;
var _27239__$1 = this;
return (new cljs.core.async.t27237(self__.ch,self__.p,self__.filter_GT_,meta27238__$1));
});

cljs.core.async.t27237.cljs$lang$type = true;

cljs.core.async.t27237.cljs$lang$ctorStr = "cljs.core.async/t27237";

cljs.core.async.t27237.cljs$lang$ctorPrWriter = (function (this__16270__auto__,writer__16271__auto__,opt__16272__auto__){
return cljs.core._write(writer__16271__auto__,"cljs.core.async/t27237");
});

cljs.core.async.__GT_t27237 = (function cljs$core$async$filter_GT__$___GT_t27237(ch__$1,p__$1,filter_GT___$1,meta27238){
return (new cljs.core.async.t27237(ch__$1,p__$1,filter_GT___$1,meta27238));
});

}

return (new cljs.core.async.t27237(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function() {
var cljs$core$async$filter_LT_ = null;
var cljs$core$async$filter_LT___2 = (function (p,ch){
return cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var cljs$core$async$filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17765__auto___27328 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17765__auto___27328,out){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (c__17765__auto___27328,out){
return (function (state_27306){
var state_val_27307 = (state_27306[(1)]);
if((state_val_27307 === (7))){
var inst_27302 = (state_27306[(2)]);
var state_27306__$1 = state_27306;
var statearr_27308_27329 = state_27306__$1;
(statearr_27308_27329[(2)] = inst_27302);

(statearr_27308_27329[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27307 === (1))){
var state_27306__$1 = state_27306;
var statearr_27309_27330 = state_27306__$1;
(statearr_27309_27330[(2)] = null);

(statearr_27309_27330[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27307 === (4))){
var inst_27288 = (state_27306[(7)]);
var inst_27288__$1 = (state_27306[(2)]);
var inst_27289 = (inst_27288__$1 == null);
var state_27306__$1 = (function (){var statearr_27310 = state_27306;
(statearr_27310[(7)] = inst_27288__$1);

return statearr_27310;
})();
if(cljs.core.truth_(inst_27289)){
var statearr_27311_27331 = state_27306__$1;
(statearr_27311_27331[(1)] = (5));

} else {
var statearr_27312_27332 = state_27306__$1;
(statearr_27312_27332[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27307 === (6))){
var inst_27288 = (state_27306[(7)]);
var inst_27293 = (function (){var G__27313 = inst_27288;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27313) : p.call(null,G__27313));
})();
var state_27306__$1 = state_27306;
if(cljs.core.truth_(inst_27293)){
var statearr_27314_27333 = state_27306__$1;
(statearr_27314_27333[(1)] = (8));

} else {
var statearr_27315_27334 = state_27306__$1;
(statearr_27315_27334[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27307 === (3))){
var inst_27304 = (state_27306[(2)]);
var state_27306__$1 = state_27306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27306__$1,inst_27304);
} else {
if((state_val_27307 === (2))){
var state_27306__$1 = state_27306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27306__$1,(4),ch);
} else {
if((state_val_27307 === (11))){
var inst_27296 = (state_27306[(2)]);
var state_27306__$1 = state_27306;
var statearr_27316_27335 = state_27306__$1;
(statearr_27316_27335[(2)] = inst_27296);

(statearr_27316_27335[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27307 === (9))){
var state_27306__$1 = state_27306;
var statearr_27317_27336 = state_27306__$1;
(statearr_27317_27336[(2)] = null);

(statearr_27317_27336[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27307 === (5))){
var inst_27291 = cljs.core.async.close_BANG_(out);
var state_27306__$1 = state_27306;
var statearr_27318_27337 = state_27306__$1;
(statearr_27318_27337[(2)] = inst_27291);

(statearr_27318_27337[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27307 === (10))){
var inst_27299 = (state_27306[(2)]);
var state_27306__$1 = (function (){var statearr_27319 = state_27306;
(statearr_27319[(8)] = inst_27299);

return statearr_27319;
})();
var statearr_27320_27338 = state_27306__$1;
(statearr_27320_27338[(2)] = null);

(statearr_27320_27338[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27307 === (8))){
var inst_27288 = (state_27306[(7)]);
var state_27306__$1 = state_27306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27306__$1,(11),out,inst_27288);
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
});})(c__17765__auto___27328,out))
;
return ((function (switch__17685__auto__,c__17765__auto___27328,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__17686__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__17686__auto____0 = (function (){
var statearr_27324 = [null,null,null,null,null,null,null,null,null];
(statearr_27324[(0)] = cljs$core$async$filter_LT__$_state_machine__17686__auto__);

(statearr_27324[(1)] = (1));

return statearr_27324;
});
var cljs$core$async$filter_LT__$_state_machine__17686__auto____1 = (function (state_27306){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_27306);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e27325){if((e27325 instanceof Object)){
var ex__17689__auto__ = e27325;
var statearr_27326_27339 = state_27306;
(statearr_27326_27339[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27306);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e27325;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__27340 = state_27306;
state_27306 = G__27340;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__17686__auto__ = function(state_27306){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__17686__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__17686__auto____1.call(this,state_27306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__17686__auto____0;
cljs$core$async$filter_LT__$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__17686__auto____1;
return cljs$core$async$filter_LT__$_state_machine__17686__auto__;
})()
;})(switch__17685__auto__,c__17765__auto___27328,out))
})();
var state__17767__auto__ = (function (){var statearr_27327 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_27327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto___27328);

return statearr_27327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(c__17765__auto___27328,out))
);


return out;
});
cljs$core$async$filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$filter_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$filter_LT___2;
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$filter_LT___3;
return cljs$core$async$filter_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function() {
var cljs$core$async$remove_LT_ = null;
var cljs$core$async$remove_LT___2 = (function (p,ch){
return cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var cljs$core$async$remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
cljs$core$async$remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$remove_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$remove_LT___2;
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$remove_LT___3;
return cljs$core$async$remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17765__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17765__auto__){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (c__17765__auto__){
return (function (state_27510){
var state_val_27511 = (state_27510[(1)]);
if((state_val_27511 === (7))){
var inst_27506 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
var statearr_27512_27554 = state_27510__$1;
(statearr_27512_27554[(2)] = inst_27506);

(statearr_27512_27554[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27511 === (20))){
var inst_27476 = (state_27510[(7)]);
var inst_27487 = (state_27510[(2)]);
var inst_27488 = cljs.core.next(inst_27476);
var inst_27462 = inst_27488;
var inst_27463 = null;
var inst_27464 = (0);
var inst_27465 = (0);
var state_27510__$1 = (function (){var statearr_27513 = state_27510;
(statearr_27513[(8)] = inst_27462);

(statearr_27513[(9)] = inst_27463);

(statearr_27513[(10)] = inst_27464);

(statearr_27513[(11)] = inst_27487);

(statearr_27513[(12)] = inst_27465);

return statearr_27513;
})();
var statearr_27514_27555 = state_27510__$1;
(statearr_27514_27555[(2)] = null);

(statearr_27514_27555[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27511 === (1))){
var state_27510__$1 = state_27510;
var statearr_27515_27556 = state_27510__$1;
(statearr_27515_27556[(2)] = null);

(statearr_27515_27556[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27511 === (4))){
var inst_27451 = (state_27510[(13)]);
var inst_27451__$1 = (state_27510[(2)]);
var inst_27452 = (inst_27451__$1 == null);
var state_27510__$1 = (function (){var statearr_27516 = state_27510;
(statearr_27516[(13)] = inst_27451__$1);

return statearr_27516;
})();
if(cljs.core.truth_(inst_27452)){
var statearr_27517_27557 = state_27510__$1;
(statearr_27517_27557[(1)] = (5));

} else {
var statearr_27518_27558 = state_27510__$1;
(statearr_27518_27558[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27511 === (15))){
var state_27510__$1 = state_27510;
var statearr_27522_27559 = state_27510__$1;
(statearr_27522_27559[(2)] = null);

(statearr_27522_27559[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27511 === (21))){
var state_27510__$1 = state_27510;
var statearr_27523_27560 = state_27510__$1;
(statearr_27523_27560[(2)] = null);

(statearr_27523_27560[(1)] = (23));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27511 === (13))){
var inst_27462 = (state_27510[(8)]);
var inst_27463 = (state_27510[(9)]);
var inst_27464 = (state_27510[(10)]);
var inst_27465 = (state_27510[(12)]);
var inst_27472 = (state_27510[(2)]);
var inst_27473 = (inst_27465 + (1));
var tmp27519 = inst_27462;
var tmp27520 = inst_27463;
var tmp27521 = inst_27464;
var inst_27462__$1 = tmp27519;
var inst_27463__$1 = tmp27520;
var inst_27464__$1 = tmp27521;
var inst_27465__$1 = inst_27473;
var state_27510__$1 = (function (){var statearr_27524 = state_27510;
(statearr_27524[(8)] = inst_27462__$1);

(statearr_27524[(9)] = inst_27463__$1);

(statearr_27524[(10)] = inst_27464__$1);

(statearr_27524[(14)] = inst_27472);

(statearr_27524[(12)] = inst_27465__$1);

return statearr_27524;
})();
var statearr_27525_27561 = state_27510__$1;
(statearr_27525_27561[(2)] = null);

(statearr_27525_27561[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27511 === (22))){
var state_27510__$1 = state_27510;
var statearr_27526_27562 = state_27510__$1;
(statearr_27526_27562[(2)] = null);

(statearr_27526_27562[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27511 === (6))){
var inst_27451 = (state_27510[(13)]);
var inst_27460 = (function (){var G__27527 = inst_27451;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27527) : f.call(null,G__27527));
})();
var inst_27461 = cljs.core.seq(inst_27460);
var inst_27462 = inst_27461;
var inst_27463 = null;
var inst_27464 = (0);
var inst_27465 = (0);
var state_27510__$1 = (function (){var statearr_27528 = state_27510;
(statearr_27528[(8)] = inst_27462);

(statearr_27528[(9)] = inst_27463);

(statearr_27528[(10)] = inst_27464);

(statearr_27528[(12)] = inst_27465);

return statearr_27528;
})();
var statearr_27529_27563 = state_27510__$1;
(statearr_27529_27563[(2)] = null);

(statearr_27529_27563[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27511 === (17))){
var inst_27476 = (state_27510[(7)]);
var inst_27480 = cljs.core.chunk_first(inst_27476);
var inst_27481 = cljs.core.chunk_rest(inst_27476);
var inst_27482 = cljs.core.count(inst_27480);
var inst_27462 = inst_27481;
var inst_27463 = inst_27480;
var inst_27464 = inst_27482;
var inst_27465 = (0);
var state_27510__$1 = (function (){var statearr_27530 = state_27510;
(statearr_27530[(8)] = inst_27462);

(statearr_27530[(9)] = inst_27463);

(statearr_27530[(10)] = inst_27464);

(statearr_27530[(12)] = inst_27465);

return statearr_27530;
})();
var statearr_27531_27564 = state_27510__$1;
(statearr_27531_27564[(2)] = null);

(statearr_27531_27564[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27511 === (3))){
var inst_27508 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27510__$1,inst_27508);
} else {
if((state_val_27511 === (12))){
var inst_27496 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
var statearr_27532_27565 = state_27510__$1;
(statearr_27532_27565[(2)] = inst_27496);

(statearr_27532_27565[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27511 === (2))){
var state_27510__$1 = state_27510;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27510__$1,(4),in$);
} else {
if((state_val_27511 === (23))){
var inst_27504 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
var statearr_27533_27566 = state_27510__$1;
(statearr_27533_27566[(2)] = inst_27504);

(statearr_27533_27566[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27511 === (19))){
var inst_27491 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
var statearr_27534_27567 = state_27510__$1;
(statearr_27534_27567[(2)] = inst_27491);

(statearr_27534_27567[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27511 === (11))){
var inst_27462 = (state_27510[(8)]);
var inst_27476 = (state_27510[(7)]);
var inst_27476__$1 = cljs.core.seq(inst_27462);
var state_27510__$1 = (function (){var statearr_27535 = state_27510;
(statearr_27535[(7)] = inst_27476__$1);

return statearr_27535;
})();
if(inst_27476__$1){
var statearr_27536_27568 = state_27510__$1;
(statearr_27536_27568[(1)] = (14));

} else {
var statearr_27537_27569 = state_27510__$1;
(statearr_27537_27569[(1)] = (15));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27511 === (9))){
var inst_27498 = (state_27510[(2)]);
var inst_27499 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_27510__$1 = (function (){var statearr_27538 = state_27510;
(statearr_27538[(15)] = inst_27498);

return statearr_27538;
})();
if(cljs.core.truth_(inst_27499)){
var statearr_27539_27570 = state_27510__$1;
(statearr_27539_27570[(1)] = (21));

} else {
var statearr_27540_27571 = state_27510__$1;
(statearr_27540_27571[(1)] = (22));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27511 === (5))){
var inst_27454 = cljs.core.async.close_BANG_(out);
var state_27510__$1 = state_27510;
var statearr_27541_27572 = state_27510__$1;
(statearr_27541_27572[(2)] = inst_27454);

(statearr_27541_27572[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27511 === (14))){
var inst_27476 = (state_27510[(7)]);
var inst_27478 = cljs.core.chunked_seq_QMARK_(inst_27476);
var state_27510__$1 = state_27510;
if(inst_27478){
var statearr_27542_27573 = state_27510__$1;
(statearr_27542_27573[(1)] = (17));

} else {
var statearr_27543_27574 = state_27510__$1;
(statearr_27543_27574[(1)] = (18));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27511 === (16))){
var inst_27494 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
var statearr_27544_27575 = state_27510__$1;
(statearr_27544_27575[(2)] = inst_27494);

(statearr_27544_27575[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27511 === (10))){
var inst_27463 = (state_27510[(9)]);
var inst_27465 = (state_27510[(12)]);
var inst_27470 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27463,inst_27465);
var state_27510__$1 = state_27510;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27510__$1,(13),out,inst_27470);
} else {
if((state_val_27511 === (18))){
var inst_27476 = (state_27510[(7)]);
var inst_27485 = cljs.core.first(inst_27476);
var state_27510__$1 = state_27510;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27510__$1,(20),out,inst_27485);
} else {
if((state_val_27511 === (8))){
var inst_27464 = (state_27510[(10)]);
var inst_27465 = (state_27510[(12)]);
var inst_27467 = (inst_27465 < inst_27464);
var inst_27468 = inst_27467;
var state_27510__$1 = state_27510;
if(cljs.core.truth_(inst_27468)){
var statearr_27545_27576 = state_27510__$1;
(statearr_27545_27576[(1)] = (10));

} else {
var statearr_27546_27577 = state_27510__$1;
(statearr_27546_27577[(1)] = (11));

}

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
});})(c__17765__auto__))
;
return ((function (switch__17685__auto__,c__17765__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17686__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17686__auto____0 = (function (){
var statearr_27550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27550[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17686__auto__);

(statearr_27550[(1)] = (1));

return statearr_27550;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17686__auto____1 = (function (state_27510){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_27510);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e27551){if((e27551 instanceof Object)){
var ex__17689__auto__ = e27551;
var statearr_27552_27578 = state_27510;
(statearr_27552_27578[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27510);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e27551;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__27579 = state_27510;
state_27510 = G__27579;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17686__auto__ = function(state_27510){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17686__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17686__auto____1.call(this,state_27510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17686__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17686__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17686__auto__;
})()
;})(switch__17685__auto__,c__17765__auto__))
})();
var state__17767__auto__ = (function (){var statearr_27553 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_27553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto__);

return statearr_27553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(c__17765__auto__))
);

return c__17765__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function() {
var cljs$core$async$mapcat_LT_ = null;
var cljs$core$async$mapcat_LT___2 = (function (f,in$){
return cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var cljs$core$async$mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});
cljs$core$async$mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_LT___2.call(this,f,in$);
case 3:
return cljs$core$async$mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_LT___2;
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_LT___3;
return cljs$core$async$mapcat_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function() {
var cljs$core$async$mapcat_GT_ = null;
var cljs$core$async$mapcat_GT___2 = (function (f,out){
return cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var cljs$core$async$mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});
cljs$core$async$mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_GT___2.call(this,f,out);
case 3:
return cljs$core$async$mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_GT___2;
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_GT___3;
return cljs$core$async$mapcat_GT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function() {
var cljs$core$async$unique = null;
var cljs$core$async$unique__1 = (function (ch){
return cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var cljs$core$async$unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17765__auto___27684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17765__auto___27684,out){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (c__17765__auto___27684,out){
return (function (state_27659){
var state_val_27660 = (state_27659[(1)]);
if((state_val_27660 === (7))){
var inst_27654 = (state_27659[(2)]);
var state_27659__$1 = state_27659;
var statearr_27661_27685 = state_27659__$1;
(statearr_27661_27685[(2)] = inst_27654);

(statearr_27661_27685[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27660 === (1))){
var inst_27636 = null;
var state_27659__$1 = (function (){var statearr_27662 = state_27659;
(statearr_27662[(7)] = inst_27636);

return statearr_27662;
})();
var statearr_27663_27686 = state_27659__$1;
(statearr_27663_27686[(2)] = null);

(statearr_27663_27686[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27660 === (4))){
var inst_27639 = (state_27659[(8)]);
var inst_27639__$1 = (state_27659[(2)]);
var inst_27640 = (inst_27639__$1 == null);
var inst_27641 = cljs.core.not(inst_27640);
var state_27659__$1 = (function (){var statearr_27664 = state_27659;
(statearr_27664[(8)] = inst_27639__$1);

return statearr_27664;
})();
if(inst_27641){
var statearr_27665_27687 = state_27659__$1;
(statearr_27665_27687[(1)] = (5));

} else {
var statearr_27666_27688 = state_27659__$1;
(statearr_27666_27688[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27660 === (6))){
var state_27659__$1 = state_27659;
var statearr_27667_27689 = state_27659__$1;
(statearr_27667_27689[(2)] = null);

(statearr_27667_27689[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27660 === (3))){
var inst_27656 = (state_27659[(2)]);
var inst_27657 = cljs.core.async.close_BANG_(out);
var state_27659__$1 = (function (){var statearr_27668 = state_27659;
(statearr_27668[(9)] = inst_27656);

return statearr_27668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27659__$1,inst_27657);
} else {
if((state_val_27660 === (2))){
var state_27659__$1 = state_27659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27659__$1,(4),ch);
} else {
if((state_val_27660 === (11))){
var inst_27639 = (state_27659[(8)]);
var inst_27648 = (state_27659[(2)]);
var inst_27636 = inst_27639;
var state_27659__$1 = (function (){var statearr_27669 = state_27659;
(statearr_27669[(10)] = inst_27648);

(statearr_27669[(7)] = inst_27636);

return statearr_27669;
})();
var statearr_27670_27690 = state_27659__$1;
(statearr_27670_27690[(2)] = null);

(statearr_27670_27690[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27660 === (9))){
var inst_27639 = (state_27659[(8)]);
var state_27659__$1 = state_27659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27659__$1,(11),out,inst_27639);
} else {
if((state_val_27660 === (5))){
var inst_27639 = (state_27659[(8)]);
var inst_27636 = (state_27659[(7)]);
var inst_27643 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27639,inst_27636);
var state_27659__$1 = state_27659;
if(inst_27643){
var statearr_27672_27691 = state_27659__$1;
(statearr_27672_27691[(1)] = (8));

} else {
var statearr_27673_27692 = state_27659__$1;
(statearr_27673_27692[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27660 === (10))){
var inst_27651 = (state_27659[(2)]);
var state_27659__$1 = state_27659;
var statearr_27674_27693 = state_27659__$1;
(statearr_27674_27693[(2)] = inst_27651);

(statearr_27674_27693[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27660 === (8))){
var inst_27636 = (state_27659[(7)]);
var tmp27671 = inst_27636;
var inst_27636__$1 = tmp27671;
var state_27659__$1 = (function (){var statearr_27675 = state_27659;
(statearr_27675[(7)] = inst_27636__$1);

return statearr_27675;
})();
var statearr_27676_27694 = state_27659__$1;
(statearr_27676_27694[(2)] = null);

(statearr_27676_27694[(1)] = (2));


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
});})(c__17765__auto___27684,out))
;
return ((function (switch__17685__auto__,c__17765__auto___27684,out){
return (function() {
var cljs$core$async$unique_$_state_machine__17686__auto__ = null;
var cljs$core$async$unique_$_state_machine__17686__auto____0 = (function (){
var statearr_27680 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27680[(0)] = cljs$core$async$unique_$_state_machine__17686__auto__);

(statearr_27680[(1)] = (1));

return statearr_27680;
});
var cljs$core$async$unique_$_state_machine__17686__auto____1 = (function (state_27659){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_27659);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e27681){if((e27681 instanceof Object)){
var ex__17689__auto__ = e27681;
var statearr_27682_27695 = state_27659;
(statearr_27682_27695[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27659);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e27681;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__27696 = state_27659;
state_27659 = G__27696;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__17686__auto__ = function(state_27659){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__17686__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__17686__auto____1.call(this,state_27659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__17686__auto____0;
cljs$core$async$unique_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__17686__auto____1;
return cljs$core$async$unique_$_state_machine__17686__auto__;
})()
;})(switch__17685__auto__,c__17765__auto___27684,out))
})();
var state__17767__auto__ = (function (){var statearr_27683 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_27683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto___27684);

return statearr_27683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(c__17765__auto___27684,out))
);


return out;
});
cljs$core$async$unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$unique__1.call(this,ch);
case 2:
return cljs$core$async$unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique__1;
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unique__2;
return cljs$core$async$unique;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function() {
var cljs$core$async$partition = null;
var cljs$core$async$partition__2 = (function (n,ch){
return cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var cljs$core$async$partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17765__auto___27834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17765__auto___27834,out){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (c__17765__auto___27834,out){
return (function (state_27804){
var state_val_27805 = (state_27804[(1)]);
if((state_val_27805 === (7))){
var inst_27800 = (state_27804[(2)]);
var state_27804__$1 = state_27804;
var statearr_27806_27835 = state_27804__$1;
(statearr_27806_27835[(2)] = inst_27800);

(statearr_27806_27835[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27805 === (1))){
var inst_27767 = (new Array(n));
var inst_27768 = inst_27767;
var inst_27769 = (0);
var state_27804__$1 = (function (){var statearr_27807 = state_27804;
(statearr_27807[(7)] = inst_27769);

(statearr_27807[(8)] = inst_27768);

return statearr_27807;
})();
var statearr_27808_27836 = state_27804__$1;
(statearr_27808_27836[(2)] = null);

(statearr_27808_27836[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27805 === (4))){
var inst_27772 = (state_27804[(9)]);
var inst_27772__$1 = (state_27804[(2)]);
var inst_27773 = (inst_27772__$1 == null);
var inst_27774 = cljs.core.not(inst_27773);
var state_27804__$1 = (function (){var statearr_27809 = state_27804;
(statearr_27809[(9)] = inst_27772__$1);

return statearr_27809;
})();
if(inst_27774){
var statearr_27810_27837 = state_27804__$1;
(statearr_27810_27837[(1)] = (5));

} else {
var statearr_27811_27838 = state_27804__$1;
(statearr_27811_27838[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27805 === (15))){
var inst_27794 = (state_27804[(2)]);
var state_27804__$1 = state_27804;
var statearr_27812_27839 = state_27804__$1;
(statearr_27812_27839[(2)] = inst_27794);

(statearr_27812_27839[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27805 === (13))){
var state_27804__$1 = state_27804;
var statearr_27813_27840 = state_27804__$1;
(statearr_27813_27840[(2)] = null);

(statearr_27813_27840[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27805 === (6))){
var inst_27769 = (state_27804[(7)]);
var inst_27790 = (inst_27769 > (0));
var state_27804__$1 = state_27804;
if(cljs.core.truth_(inst_27790)){
var statearr_27814_27841 = state_27804__$1;
(statearr_27814_27841[(1)] = (12));

} else {
var statearr_27815_27842 = state_27804__$1;
(statearr_27815_27842[(1)] = (13));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27805 === (3))){
var inst_27802 = (state_27804[(2)]);
var state_27804__$1 = state_27804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27804__$1,inst_27802);
} else {
if((state_val_27805 === (12))){
var inst_27768 = (state_27804[(8)]);
var inst_27792 = cljs.core.vec(inst_27768);
var state_27804__$1 = state_27804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27804__$1,(15),out,inst_27792);
} else {
if((state_val_27805 === (2))){
var state_27804__$1 = state_27804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27804__$1,(4),ch);
} else {
if((state_val_27805 === (11))){
var inst_27784 = (state_27804[(2)]);
var inst_27785 = (new Array(n));
var inst_27768 = inst_27785;
var inst_27769 = (0);
var state_27804__$1 = (function (){var statearr_27816 = state_27804;
(statearr_27816[(7)] = inst_27769);

(statearr_27816[(10)] = inst_27784);

(statearr_27816[(8)] = inst_27768);

return statearr_27816;
})();
var statearr_27817_27843 = state_27804__$1;
(statearr_27817_27843[(2)] = null);

(statearr_27817_27843[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27805 === (9))){
var inst_27768 = (state_27804[(8)]);
var inst_27782 = cljs.core.vec(inst_27768);
var state_27804__$1 = state_27804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27804__$1,(11),out,inst_27782);
} else {
if((state_val_27805 === (5))){
var inst_27769 = (state_27804[(7)]);
var inst_27768 = (state_27804[(8)]);
var inst_27777 = (state_27804[(11)]);
var inst_27772 = (state_27804[(9)]);
var inst_27776 = (inst_27768[inst_27769] = inst_27772);
var inst_27777__$1 = (inst_27769 + (1));
var inst_27778 = (inst_27777__$1 < n);
var state_27804__$1 = (function (){var statearr_27818 = state_27804;
(statearr_27818[(12)] = inst_27776);

(statearr_27818[(11)] = inst_27777__$1);

return statearr_27818;
})();
if(cljs.core.truth_(inst_27778)){
var statearr_27819_27844 = state_27804__$1;
(statearr_27819_27844[(1)] = (8));

} else {
var statearr_27820_27845 = state_27804__$1;
(statearr_27820_27845[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27805 === (14))){
var inst_27797 = (state_27804[(2)]);
var inst_27798 = cljs.core.async.close_BANG_(out);
var state_27804__$1 = (function (){var statearr_27822 = state_27804;
(statearr_27822[(13)] = inst_27797);

return statearr_27822;
})();
var statearr_27823_27846 = state_27804__$1;
(statearr_27823_27846[(2)] = inst_27798);

(statearr_27823_27846[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27805 === (10))){
var inst_27788 = (state_27804[(2)]);
var state_27804__$1 = state_27804;
var statearr_27824_27847 = state_27804__$1;
(statearr_27824_27847[(2)] = inst_27788);

(statearr_27824_27847[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27805 === (8))){
var inst_27768 = (state_27804[(8)]);
var inst_27777 = (state_27804[(11)]);
var tmp27821 = inst_27768;
var inst_27768__$1 = tmp27821;
var inst_27769 = inst_27777;
var state_27804__$1 = (function (){var statearr_27825 = state_27804;
(statearr_27825[(7)] = inst_27769);

(statearr_27825[(8)] = inst_27768__$1);

return statearr_27825;
})();
var statearr_27826_27848 = state_27804__$1;
(statearr_27826_27848[(2)] = null);

(statearr_27826_27848[(1)] = (2));


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
});})(c__17765__auto___27834,out))
;
return ((function (switch__17685__auto__,c__17765__auto___27834,out){
return (function() {
var cljs$core$async$partition_$_state_machine__17686__auto__ = null;
var cljs$core$async$partition_$_state_machine__17686__auto____0 = (function (){
var statearr_27830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27830[(0)] = cljs$core$async$partition_$_state_machine__17686__auto__);

(statearr_27830[(1)] = (1));

return statearr_27830;
});
var cljs$core$async$partition_$_state_machine__17686__auto____1 = (function (state_27804){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_27804);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e27831){if((e27831 instanceof Object)){
var ex__17689__auto__ = e27831;
var statearr_27832_27849 = state_27804;
(statearr_27832_27849[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27804);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e27831;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__27850 = state_27804;
state_27804 = G__27850;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__17686__auto__ = function(state_27804){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__17686__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__17686__auto____1.call(this,state_27804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__17686__auto____0;
cljs$core$async$partition_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__17686__auto____1;
return cljs$core$async$partition_$_state_machine__17686__auto__;
})()
;})(switch__17685__auto__,c__17765__auto___27834,out))
})();
var state__17767__auto__ = (function (){var statearr_27833 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_27833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto___27834);

return statearr_27833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(c__17765__auto___27834,out))
);


return out;
});
cljs$core$async$partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition__2.call(this,n,ch);
case 3:
return cljs$core$async$partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition__2;
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition__3;
return cljs$core$async$partition;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function() {
var cljs$core$async$partition_by = null;
var cljs$core$async$partition_by__2 = (function (f,ch){
return cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var cljs$core$async$partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17765__auto___27998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17765__auto___27998,out){
return (function (){
var f__17766__auto__ = (function (){var switch__17685__auto__ = ((function (c__17765__auto___27998,out){
return (function (state_27967){
var state_val_27968 = (state_27967[(1)]);
if((state_val_27968 === (7))){
var inst_27963 = (state_27967[(2)]);
var state_27967__$1 = state_27967;
var statearr_27969_27999 = state_27967__$1;
(statearr_27969_27999[(2)] = inst_27963);

(statearr_27969_27999[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27968 === (1))){
var inst_27926 = [];
var inst_27927 = inst_27926;
var inst_27928 = cljs.core.constant$keyword$_COLON_cljs$core$async_SLASH_nothing;
var state_27967__$1 = (function (){var statearr_27970 = state_27967;
(statearr_27970[(7)] = inst_27928);

(statearr_27970[(8)] = inst_27927);

return statearr_27970;
})();
var statearr_27971_28000 = state_27967__$1;
(statearr_27971_28000[(2)] = null);

(statearr_27971_28000[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27968 === (4))){
var inst_27931 = (state_27967[(9)]);
var inst_27931__$1 = (state_27967[(2)]);
var inst_27932 = (inst_27931__$1 == null);
var inst_27933 = cljs.core.not(inst_27932);
var state_27967__$1 = (function (){var statearr_27972 = state_27967;
(statearr_27972[(9)] = inst_27931__$1);

return statearr_27972;
})();
if(inst_27933){
var statearr_27973_28001 = state_27967__$1;
(statearr_27973_28001[(1)] = (5));

} else {
var statearr_27974_28002 = state_27967__$1;
(statearr_27974_28002[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27968 === (15))){
var inst_27957 = (state_27967[(2)]);
var state_27967__$1 = state_27967;
var statearr_27975_28003 = state_27967__$1;
(statearr_27975_28003[(2)] = inst_27957);

(statearr_27975_28003[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27968 === (13))){
var state_27967__$1 = state_27967;
var statearr_27976_28004 = state_27967__$1;
(statearr_27976_28004[(2)] = null);

(statearr_27976_28004[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27968 === (6))){
var inst_27927 = (state_27967[(8)]);
var inst_27952 = inst_27927.length;
var inst_27953 = (inst_27952 > (0));
var state_27967__$1 = state_27967;
if(cljs.core.truth_(inst_27953)){
var statearr_27977_28005 = state_27967__$1;
(statearr_27977_28005[(1)] = (12));

} else {
var statearr_27978_28006 = state_27967__$1;
(statearr_27978_28006[(1)] = (13));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27968 === (3))){
var inst_27965 = (state_27967[(2)]);
var state_27967__$1 = state_27967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27967__$1,inst_27965);
} else {
if((state_val_27968 === (12))){
var inst_27927 = (state_27967[(8)]);
var inst_27955 = cljs.core.vec(inst_27927);
var state_27967__$1 = state_27967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27967__$1,(15),out,inst_27955);
} else {
if((state_val_27968 === (2))){
var state_27967__$1 = state_27967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27967__$1,(4),ch);
} else {
if((state_val_27968 === (11))){
var inst_27931 = (state_27967[(9)]);
var inst_27935 = (state_27967[(10)]);
var inst_27945 = (state_27967[(2)]);
var inst_27946 = [];
var inst_27947 = inst_27946.push(inst_27931);
var inst_27927 = inst_27946;
var inst_27928 = inst_27935;
var state_27967__$1 = (function (){var statearr_27979 = state_27967;
(statearr_27979[(7)] = inst_27928);

(statearr_27979[(8)] = inst_27927);

(statearr_27979[(11)] = inst_27945);

(statearr_27979[(12)] = inst_27947);

return statearr_27979;
})();
var statearr_27980_28007 = state_27967__$1;
(statearr_27980_28007[(2)] = null);

(statearr_27980_28007[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27968 === (9))){
var inst_27927 = (state_27967[(8)]);
var inst_27943 = cljs.core.vec(inst_27927);
var state_27967__$1 = state_27967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27967__$1,(11),out,inst_27943);
} else {
if((state_val_27968 === (5))){
var inst_27928 = (state_27967[(7)]);
var inst_27931 = (state_27967[(9)]);
var inst_27935 = (state_27967[(10)]);
var inst_27935__$1 = (function (){var G__27981 = inst_27931;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27981) : f.call(null,G__27981));
})();
var inst_27936 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27935__$1,inst_27928);
var inst_27937 = cljs.core.keyword_identical_QMARK_(inst_27928,cljs.core.constant$keyword$_COLON_cljs$core$async_SLASH_nothing);
var inst_27938 = (inst_27936) || (inst_27937);
var state_27967__$1 = (function (){var statearr_27982 = state_27967;
(statearr_27982[(10)] = inst_27935__$1);

return statearr_27982;
})();
if(cljs.core.truth_(inst_27938)){
var statearr_27983_28008 = state_27967__$1;
(statearr_27983_28008[(1)] = (8));

} else {
var statearr_27984_28009 = state_27967__$1;
(statearr_27984_28009[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27968 === (14))){
var inst_27960 = (state_27967[(2)]);
var inst_27961 = cljs.core.async.close_BANG_(out);
var state_27967__$1 = (function (){var statearr_27986 = state_27967;
(statearr_27986[(13)] = inst_27960);

return statearr_27986;
})();
var statearr_27987_28010 = state_27967__$1;
(statearr_27987_28010[(2)] = inst_27961);

(statearr_27987_28010[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27968 === (10))){
var inst_27950 = (state_27967[(2)]);
var state_27967__$1 = state_27967;
var statearr_27988_28011 = state_27967__$1;
(statearr_27988_28011[(2)] = inst_27950);

(statearr_27988_28011[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_27968 === (8))){
var inst_27931 = (state_27967[(9)]);
var inst_27935 = (state_27967[(10)]);
var inst_27927 = (state_27967[(8)]);
var inst_27940 = inst_27927.push(inst_27931);
var tmp27985 = inst_27927;
var inst_27927__$1 = tmp27985;
var inst_27928 = inst_27935;
var state_27967__$1 = (function (){var statearr_27989 = state_27967;
(statearr_27989[(14)] = inst_27940);

(statearr_27989[(7)] = inst_27928);

(statearr_27989[(8)] = inst_27927__$1);

return statearr_27989;
})();
var statearr_27990_28012 = state_27967__$1;
(statearr_27990_28012[(2)] = null);

(statearr_27990_28012[(1)] = (2));


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
});})(c__17765__auto___27998,out))
;
return ((function (switch__17685__auto__,c__17765__auto___27998,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__17686__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__17686__auto____0 = (function (){
var statearr_27994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27994[(0)] = cljs$core$async$partition_by_$_state_machine__17686__auto__);

(statearr_27994[(1)] = (1));

return statearr_27994;
});
var cljs$core$async$partition_by_$_state_machine__17686__auto____1 = (function (state_27967){
while(true){
var ret_value__17687__auto__ = (function (){try{while(true){
var result__17688__auto__ = switch__17685__auto__(state_27967);
if(cljs.core.keyword_identical_QMARK_(result__17688__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__17688__auto__;
}
break;
}
}catch (e27995){if((e27995 instanceof Object)){
var ex__17689__auto__ = e27995;
var statearr_27996_28013 = state_27967;
(statearr_27996_28013[(5)] = ex__17689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27967);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e27995;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17687__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__28014 = state_27967;
state_27967 = G__28014;
continue;
} else {
return ret_value__17687__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__17686__auto__ = function(state_27967){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__17686__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__17686__auto____1.call(this,state_27967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__17686__auto____0;
cljs$core$async$partition_by_$_state_machine__17686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__17686__auto____1;
return cljs$core$async$partition_by_$_state_machine__17686__auto__;
})()
;})(switch__17685__auto__,c__17765__auto___27998,out))
})();
var state__17767__auto__ = (function (){var statearr_27997 = (function (){return (f__17766__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17766__auto__.cljs$core$IFn$_invoke$arity$0() : f__17766__auto__.call(null));
})();
(statearr_27997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17765__auto___27998);

return statearr_27997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17767__auto__);
});})(c__17765__auto___27998,out))
);


return out;
});
cljs$core$async$partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition_by__2.call(this,f,ch);
case 3:
return cljs$core$async$partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition_by__2;
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition_by__3;
return cljs$core$async$partition_by;
})()
;
