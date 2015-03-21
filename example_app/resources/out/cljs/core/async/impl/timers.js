// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.core.async.impl.timers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.timers.MAX_LEVEL = (15);
cljs.core.async.impl.timers.P = ((1) / (2));
cljs.core.async.impl.timers.random_level = (function() {
var cljs$core$async$impl$timers$random_level = null;
var cljs$core$async$impl$timers$random_level__0 = (function (){
return cljs$core$async$impl$timers$random_level.cljs$core$IFn$_invoke$arity$1((0));
});
var cljs$core$async$impl$timers$random_level__1 = (function (level){
while(true){
if(((Math.random() < cljs.core.async.impl.timers.P)) && ((level < cljs.core.async.impl.timers.MAX_LEVEL))){
var G__28018 = (level + (1));
level = G__28018;
continue;
} else {
return level;
}
break;
}
});
cljs$core$async$impl$timers$random_level = function(level){
switch(arguments.length){
case 0:
return cljs$core$async$impl$timers$random_level__0.call(this);
case 1:
return cljs$core$async$impl$timers$random_level__1.call(this,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$impl$timers$random_level.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$impl$timers$random_level__0;
cljs$core$async$impl$timers$random_level.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$impl$timers$random_level__1;
return cljs$core$async$impl$timers$random_level;
})()
;

/**
* @constructor
*/
cljs.core.async.impl.timers.SkipListNode = (function (key,val,forward){
this.key = key;
this.val = val;
this.forward = forward;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
})
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});

cljs.core.async.impl.timers.SkipListNode.cljs$lang$type = true;

cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipListNode";

cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorPrWriter = (function (this__16270__auto__,writer__16271__auto__,opt__16272__auto__){
return cljs.core._write(writer__16271__auto__,"cljs.core.async.impl.timers/SkipListNode");
});

cljs.core.async.impl.timers.__GT_SkipListNode = (function cljs$core$async$impl$timers$__GT_SkipListNode(key,val,forward){
return (new cljs.core.async.impl.timers.SkipListNode(key,val,forward));
});

cljs.core.async.impl.timers.skip_list_node = (function() {
var cljs$core$async$impl$timers$skip_list_node = null;
var cljs$core$async$impl$timers$skip_list_node__1 = (function (level){
return cljs$core$async$impl$timers$skip_list_node.cljs$core$IFn$_invoke$arity$3(null,null,level);
});
var cljs$core$async$impl$timers$skip_list_node__3 = (function (k,v,level){
var arr = (new Array((level + (1))));
var i_28022 = (0);
while(true){
if((i_28022 < arr.length)){
(arr[i_28022] = null);

var G__28023 = (i_28022 + (1));
i_28022 = G__28023;
continue;
} else {
}
break;
}

return (new cljs.core.async.impl.timers.SkipListNode(k,v,arr));
});
cljs$core$async$impl$timers$skip_list_node = function(k,v,level){
switch(arguments.length){
case 1:
return cljs$core$async$impl$timers$skip_list_node__1.call(this,k);
case 3:
return cljs$core$async$impl$timers$skip_list_node__3.call(this,k,v,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$impl$timers$skip_list_node.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$impl$timers$skip_list_node__1;
cljs$core$async$impl$timers$skip_list_node.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$impl$timers$skip_list_node__3;
return cljs$core$async$impl$timers$skip_list_node;
})()
;
cljs.core.async.impl.timers.least_greater_node = (function() {
var cljs$core$async$impl$timers$least_greater_node = null;
var cljs$core$async$impl$timers$least_greater_node__3 = (function (x,k,level){
return cljs$core$async$impl$timers$least_greater_node.cljs$core$IFn$_invoke$arity$4(x,k,level,null);
});
var cljs$core$async$impl$timers$least_greater_node__4 = (function (x,k,level,update){
while(true){
if(!((level < (0)))){
var x__$1 = (function (){var x__$1 = x;
while(true){
var temp__4124__auto__ = (x__$1.forward[level]);
if(cljs.core.truth_(temp__4124__auto__)){
var x_SINGLEQUOTE_ = temp__4124__auto__;
if((x_SINGLEQUOTE_.key < k)){
var G__28028 = x_SINGLEQUOTE_;
x__$1 = G__28028;
continue;
} else {
return x__$1;
}
} else {
return x__$1;
}
break;
}
})();
if((update == null)){
} else {
(update[level] = x__$1);
}

var G__28029 = x__$1;
var G__28030 = k;
var G__28031 = (level - (1));
var G__28032 = update;
x = G__28029;
k = G__28030;
level = G__28031;
update = G__28032;
continue;
} else {
return x;
}
break;
}
});
cljs$core$async$impl$timers$least_greater_node = function(x,k,level,update){
switch(arguments.length){
case 3:
return cljs$core$async$impl$timers$least_greater_node__3.call(this,x,k,level);
case 4:
return cljs$core$async$impl$timers$least_greater_node__4.call(this,x,k,level,update);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$impl$timers$least_greater_node.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$impl$timers$least_greater_node__3;
cljs$core$async$impl$timers$least_greater_node.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$impl$timers$least_greater_node__4;
return cljs$core$async$impl$timers$least_greater_node;
})()
;

/**
* @constructor
*/
cljs.core.async.impl.timers.SkipList = (function (header,level){
this.header = header;
this.level = level;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
})
cljs.core.async.impl.timers.SkipList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer(writer,pr_pair,"{",", ","}",opts,coll__$1);
});

cljs.core.async.impl.timers.SkipList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var iter = ((function (coll__$1){
return (function cljs$core$async$impl$timers$iter(node){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
if((node == null)){
return null;
} else {
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.key,node.val], null),cljs$core$async$impl$timers$iter((node.forward[(0)])));
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter((self__.header.forward[(0)]));
});

cljs.core.async.impl.timers.SkipList.prototype.put = (function (k,v){
var self__ = this;
var coll = this;
var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));
var x = cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4(self__.header,k,self__.level,update);
var x__$1 = (x.forward[(0)]);
if((!((x__$1 == null))) && ((x__$1.key === k))){
return x__$1.val = v;
} else {
var new_level = cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$0();
if((new_level > self__.level)){
var i_28035 = (self__.level + (1));
while(true){
if((i_28035 <= (new_level + (1)))){
(update[i_28035] = self__.header);

var G__28036 = (i_28035 + (1));
i_28035 = G__28036;
continue;
} else {
}
break;
}

self__.level = new_level;
} else {
}

var x__$2 = cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3(k,v,(new Array(new_level)));
var i = (0);
while(true){
if((i <= self__.level)){
var links = (update[i]).forward;
(x__$2.forward[i] = (links[i]));

return (links[i] = x__$2);
} else {
return null;
}
break;
}
}
});

cljs.core.async.impl.timers.SkipList.prototype.remove = (function (k){
var self__ = this;
var coll = this;
var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));
var x = cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4(self__.header,k,self__.level,update);
var x__$1 = (x.forward[(0)]);
if((!((x__$1 == null))) && ((x__$1.key === k))){
var i_28037 = (0);
while(true){
if((i_28037 <= self__.level)){
var links_28038 = (update[i_28037]).forward;
if(((links_28038[i_28037]) === x__$1)){
(links_28038[i_28037] = (x__$1.forward[i_28037]));

var G__28039 = (i_28037 + (1));
i_28037 = G__28039;
continue;
} else {
var G__28040 = (i_28037 + (1));
i_28037 = G__28040;
continue;
}
} else {
}
break;
}

while(true){
if(((self__.level > (0))) && (((self__.header.forward[self__.level]) == null))){
self__.level = (self__.level - (1));

continue;
} else {
return null;
}
break;
}
} else {
return null;
}
});

cljs.core.async.impl.timers.SkipList.prototype.ceilingEntry = (function (k){
var self__ = this;
var coll = this;
var x = self__.header;
var level__$1 = self__.level;
while(true){
if(!((level__$1 < (0)))){
var nx = (function (){var x__$1 = x;
while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);
if((x_SINGLEQUOTE_ == null)){
return null;
} else {
if((x_SINGLEQUOTE_.key >= k)){
return x_SINGLEQUOTE_;
} else {
var G__28041 = x_SINGLEQUOTE_;
x__$1 = G__28041;
continue;
}
}
break;
}
})();
if(!((nx == null))){
var G__28042 = nx;
var G__28043 = (level__$1 - (1));
x = G__28042;
level__$1 = G__28043;
continue;
} else {
var G__28044 = x;
var G__28045 = (level__$1 - (1));
x = G__28044;
level__$1 = G__28045;
continue;
}
} else {
if((x === self__.header)){
return null;
} else {
return x;
}
}
break;
}
});

cljs.core.async.impl.timers.SkipList.prototype.floorEntry = (function (k){
var self__ = this;
var coll = this;
var x = self__.header;
var level__$1 = self__.level;
while(true){
if(!((level__$1 < (0)))){
var nx = (function (){var x__$1 = x;
while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);
if(!((x_SINGLEQUOTE_ == null))){
if((x_SINGLEQUOTE_.key > k)){
return x__$1;
} else {
var G__28046 = x_SINGLEQUOTE_;
x__$1 = G__28046;
continue;
}
} else {
if((level__$1 === (0))){
return x__$1;
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(nx)){
var G__28047 = nx;
var G__28048 = (level__$1 - (1));
x = G__28047;
level__$1 = G__28048;
continue;
} else {
var G__28049 = x;
var G__28050 = (level__$1 - (1));
x = G__28049;
level__$1 = G__28050;
continue;
}
} else {
if((x === self__.header)){
return null;
} else {
return x;
}
}
break;
}
});

cljs.core.async.impl.timers.SkipList.cljs$lang$type = true;

cljs.core.async.impl.timers.SkipList.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipList";

cljs.core.async.impl.timers.SkipList.cljs$lang$ctorPrWriter = (function (this__16270__auto__,writer__16271__auto__,opt__16272__auto__){
return cljs.core._write(writer__16271__auto__,"cljs.core.async.impl.timers/SkipList");
});

cljs.core.async.impl.timers.__GT_SkipList = (function cljs$core$async$impl$timers$__GT_SkipList(header,level){
return (new cljs.core.async.impl.timers.SkipList(header,level));
});

cljs.core.async.impl.timers.skip_list = (function cljs$core$async$impl$timers$skip_list(){
return (new cljs.core.async.impl.timers.SkipList(cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$1((0)),(0)));
});
cljs.core.async.impl.timers.timeouts_map = cljs.core.async.impl.timers.skip_list();
cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS = (10);
/**
 * returns a channel that will close after msecs
 */
cljs.core.async.impl.timers.timeout = (function cljs$core$async$impl$timers$timeout(msecs){
var timeout__$1 = ((new Date()).valueOf() + msecs);
var me = cljs.core.async.impl.timers.timeouts_map.ceilingEntry(timeout__$1);
var or__15683__auto__ = (cljs.core.truth_((function (){var and__15671__auto__ = me;
if(cljs.core.truth_(and__15671__auto__)){
return (me.key < (timeout__$1 + cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS));
} else {
return and__15671__auto__;
}
})())?me.val:null);
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
var timeout_channel = cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1(null);
cljs.core.async.impl.timers.timeouts_map.put(timeout__$1,timeout_channel);

cljs.core.async.impl.dispatch.queue_delay(((function (timeout_channel,or__15683__auto__,timeout__$1,me){
return (function (){
cljs.core.async.impl.timers.timeouts_map.remove(timeout__$1);

return cljs.core.async.impl.protocols.close_BANG_(timeout_channel);
});})(timeout_channel,or__15683__auto__,timeout__$1,me))
,msecs);

return timeout_channel;
}
});
