// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cemerick.url');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('clojure.string');
goog.require('pathetic.core');
cemerick.url.url_encode = (function cemerick$url$url_encode(string){
var G__19016 = string;
var G__19016__$1 = (((G__19016 == null))?null:[cljs.core.str(G__19016)].join(''));
var G__19016__$2 = (((G__19016__$1 == null))?null:(function (){var G__19017 = G__19016__$1;
return encodeURIComponent(G__19017);
})());
var G__19016__$3 = (((G__19016__$2 == null))?null:G__19016__$2.replace("+","%20"));
return G__19016__$3;
});
cemerick.url.url_decode = (function cemerick$url$url_decode(string){
var G__19020 = string;
var G__19020__$1 = (((G__19020 == null))?null:[cljs.core.str(G__19020)].join(''));
var G__19020__$2 = (((G__19020__$1 == null))?null:(function (){var G__19021 = G__19020__$1;
return decodeURIComponent(G__19021);
})());
return G__19020__$2;
});
cemerick.url.map__GT_query = (function cemerick$url$map__GT_query(m){
var G__19025 = cljs.core.seq(m);
var G__19025__$1 = (((G__19025 == null))?null:cljs.core.sort.cljs$core$IFn$_invoke$arity$1(G__19025));
var G__19025__$2 = (((G__19025__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__19025,G__19025__$1){
return (function (p__19026){
var vec__19027 = p__19026;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19027,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19027,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cemerick.url.url_encode(cljs.core.name(k)),"=",cemerick.url.url_encode([cljs.core.str(v)].join(''))], null);
});})(G__19025,G__19025__$1))
,G__19025__$1));
var G__19025__$3 = (((G__19025__$2 == null))?null:cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("&",G__19025__$2));
var G__19025__$4 = (((G__19025__$3 == null))?null:cljs.core.flatten(G__19025__$3));
var G__19025__$5 = (((G__19025__$4 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,G__19025__$4));
return G__19025__$5;
});
cemerick.url.split_param = (function cemerick$url$split_param(param){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(param,/=/),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("")));
});
cemerick.url.query__GT_map = (function cemerick$url$query__GT_map(qstr){
if(cljs.core.not(clojure.string.blank_QMARK_(qstr))){
var G__19029 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(qstr,/&/);
var G__19029__$1 = (((G__19029 == null))?null:cljs.core.seq(G__19029));
var G__19029__$2 = (((G__19029__$1 == null))?null:cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cemerick.url.split_param,cljs.core.array_seq([G__19029__$1], 0)));
var G__19029__$3 = (((G__19029__$2 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cemerick.url.url_decode,G__19029__$2));
var G__19029__$4 = (((G__19029__$3 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,G__19029__$3));
return G__19029__$4;
} else {
return null;
}
});
cemerick.url.port_str = (function cemerick$url$port_str(protocol,port){
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,port)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),port)) && (!(((port === (80))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"http")))) && (!(((port === (443))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https"))))){
return [cljs.core.str(":"),cljs.core.str(port)].join('');
} else {
return null;
}
});
cemerick.url.url_creds = (function cemerick$url$url_creds(username,password){
if(cljs.core.truth_(username)){
return [cljs.core.str(username),cljs.core.str(":"),cljs.core.str(password)].join('');
} else {
return null;
}
});

/**
* @constructor
* @param {*} protocol
* @param {*} username
* @param {*} password
* @param {*} host
* @param {*} port
* @param {*} path
* @param {*} query
* @param {*} anchor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cemerick.url.URL = (function (protocol,username,password,host,port,path,query,anchor,__meta,__extmap,__hash){
this.protocol = protocol;
this.username = username;
this.password = password;
this.host = host;
this.port = port;
this.path = path;
this.query = query;
this.anchor = anchor;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cemerick.url.URL.prototype.toString = (function (){
var self__ = this;
var this$ = this;
var creds = cemerick.url.url_creds(self__.username,self__.password);
return [cljs.core.str(self__.protocol),cljs.core.str("://"),cljs.core.str(creds),cljs.core.str((cljs.core.truth_(creds)?"@":null)),cljs.core.str(self__.host),cljs.core.str(cemerick.url.port_str(self__.protocol,self__.port)),cljs.core.str(self__.path),cljs.core.str(((cljs.core.seq(self__.query))?[cljs.core.str("?"),cljs.core.str(((typeof self__.query === 'string')?self__.query:cemerick.url.map__GT_query(self__.query)))].join(''):null)),cljs.core.str((cljs.core.truth_(self__.anchor)?[cljs.core.str("#"),cljs.core.str(self__.anchor)].join(''):null))].join('');
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13686__auto__,k__13687__auto__){
var self__ = this;
var this__13686__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__13686__auto____$1,k__13687__auto__,null);
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13688__auto__,k19031,else__13689__auto__){
var self__ = this;
var this__13688__auto____$1 = this;
var G__19033 = (((k19031 instanceof cljs.core.Keyword))?k19031.fqn:null);
switch (G__19033) {
case "anchor":
return self__.anchor;

break;
case "query":
return self__.query;

break;
case "path":
return self__.path;

break;
case "port":
return self__.port;

break;
case "host":
return self__.host;

break;
case "password":
return self__.password;

break;
case "username":
return self__.username;

break;
case "protocol":
return self__.protocol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19031,else__13689__auto__);

}
});

cemerick.url.URL.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13700__auto__,writer__13701__auto__,opts__13702__auto__){
var self__ = this;
var this__13700__auto____$1 = this;
var pr_pair__13703__auto__ = ((function (this__13700__auto____$1){
return (function (keyval__13704__auto__){
return cljs.core.pr_sequential_writer(writer__13701__auto__,cljs.core.pr_writer,""," ","",opts__13702__auto__,keyval__13704__auto__);
});})(this__13700__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__13701__auto__,pr_pair__13703__auto__,"#cemerick.url.URL{",", ","}",opts__13702__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_protocol,self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_username,self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_password,self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_host,self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_port,self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_path,self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_query,self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_anchor,self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13684__auto__){
var self__ = this;
var this__13684__auto____$1 = this;
return self__.__meta;
});

cemerick.url.URL.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13680__auto__){
var self__ = this;
var this__13680__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13690__auto__){
var self__ = this;
var this__13690__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13681__auto__){
var self__ = this;
var this__13681__auto____$1 = this;
var h__13504__auto__ = self__.__hash;
if(!((h__13504__auto__ == null))){
return h__13504__auto__;
} else {
var h__13504__auto____$1 = cljs.core.hash_imap(this__13681__auto____$1);
self__.__hash = h__13504__auto____$1;

return h__13504__auto____$1;
}
});

cemerick.url.URL.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13682__auto__,other__13683__auto__){
var self__ = this;
var this__13682__auto____$1 = this;
if(cljs.core.truth_((function (){var and__13071__auto__ = other__13683__auto__;
if(cljs.core.truth_(and__13071__auto__)){
return ((this__13682__auto____$1.constructor === other__13683__auto__.constructor)) && (cljs.core.equiv_map(this__13682__auto____$1,other__13683__auto__));
} else {
return and__13071__auto__;
}
})())){
return true;
} else {
return false;
}
});

cemerick.url.URL.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13695__auto__,k__13696__auto__){
var self__ = this;
var this__13695__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$_COLON_path,null,cljs.core.constant$keyword$_COLON_protocol,null,cljs.core.constant$keyword$_COLON_password,null,cljs.core.constant$keyword$_COLON_username,null,cljs.core.constant$keyword$_COLON_port,null,cljs.core.constant$keyword$_COLON_host,null,cljs.core.constant$keyword$_COLON_anchor,null,cljs.core.constant$keyword$_COLON_query,null], null), null),k__13696__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__13695__auto____$1),self__.__meta),k__13696__auto__);
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__13696__auto__)),null));
}
});

cemerick.url.URL.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13693__auto__,k__13694__auto__,G__19030){
var self__ = this;
var this__13693__auto____$1 = this;
var pred__19034 = cljs.core.keyword_identical_QMARK_;
var expr__19035 = k__13694__auto__;
if(cljs.core.truth_((function (){var G__19037 = cljs.core.constant$keyword$_COLON_protocol;
var G__19038 = expr__19035;
return (pred__19034.cljs$core$IFn$_invoke$arity$2 ? pred__19034.cljs$core$IFn$_invoke$arity$2(G__19037,G__19038) : pred__19034.call(null,G__19037,G__19038));
})())){
return (new cemerick.url.URL(G__19030,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19039 = cljs.core.constant$keyword$_COLON_username;
var G__19040 = expr__19035;
return (pred__19034.cljs$core$IFn$_invoke$arity$2 ? pred__19034.cljs$core$IFn$_invoke$arity$2(G__19039,G__19040) : pred__19034.call(null,G__19039,G__19040));
})())){
return (new cemerick.url.URL(self__.protocol,G__19030,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19041 = cljs.core.constant$keyword$_COLON_password;
var G__19042 = expr__19035;
return (pred__19034.cljs$core$IFn$_invoke$arity$2 ? pred__19034.cljs$core$IFn$_invoke$arity$2(G__19041,G__19042) : pred__19034.call(null,G__19041,G__19042));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,G__19030,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19043 = cljs.core.constant$keyword$_COLON_host;
var G__19044 = expr__19035;
return (pred__19034.cljs$core$IFn$_invoke$arity$2 ? pred__19034.cljs$core$IFn$_invoke$arity$2(G__19043,G__19044) : pred__19034.call(null,G__19043,G__19044));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,G__19030,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19045 = cljs.core.constant$keyword$_COLON_port;
var G__19046 = expr__19035;
return (pred__19034.cljs$core$IFn$_invoke$arity$2 ? pred__19034.cljs$core$IFn$_invoke$arity$2(G__19045,G__19046) : pred__19034.call(null,G__19045,G__19046));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,G__19030,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19047 = cljs.core.constant$keyword$_COLON_path;
var G__19048 = expr__19035;
return (pred__19034.cljs$core$IFn$_invoke$arity$2 ? pred__19034.cljs$core$IFn$_invoke$arity$2(G__19047,G__19048) : pred__19034.call(null,G__19047,G__19048));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,G__19030,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19049 = cljs.core.constant$keyword$_COLON_query;
var G__19050 = expr__19035;
return (pred__19034.cljs$core$IFn$_invoke$arity$2 ? pred__19034.cljs$core$IFn$_invoke$arity$2(G__19049,G__19050) : pred__19034.call(null,G__19049,G__19050));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,G__19030,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19051 = cljs.core.constant$keyword$_COLON_anchor;
var G__19052 = expr__19035;
return (pred__19034.cljs$core$IFn$_invoke$arity$2 ? pred__19034.cljs$core$IFn$_invoke$arity$2(G__19051,G__19052) : pred__19034.call(null,G__19051,G__19052));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,G__19030,self__.__meta,self__.__extmap,null));
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__13694__auto__,G__19030),null));
}
}
}
}
}
}
}
}
});

cemerick.url.URL.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13698__auto__){
var self__ = this;
var this__13698__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_protocol,self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_username,self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_password,self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_host,self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_port,self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_path,self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_query,self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_anchor,self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13685__auto__,G__19030){
var self__ = this;
var this__13685__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,G__19030,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13691__auto__,entry__13692__auto__){
var self__ = this;
var this__13691__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__13692__auto__)){
return cljs.core._assoc(this__13691__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13692__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__13692__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__13691__auto____$1,entry__13692__auto__);
}
});

cemerick.url.URL.cljs$lang$type = true;

cemerick.url.URL.cljs$lang$ctorPrSeq = (function (this__13720__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cemerick.url/URL");
});

cemerick.url.URL.cljs$lang$ctorPrWriter = (function (this__13720__auto__,writer__13721__auto__){
return cljs.core._write(writer__13721__auto__,"cemerick.url/URL");
});

cemerick.url.__GT_URL = (function cemerick$url$__GT_URL(protocol,username,password,host,port,path,query,anchor){
return (new cemerick.url.URL(protocol,username,password,host,port,path,query,anchor,null,null,null));
});

cemerick.url.map__GT_URL = (function cemerick$url$map__GT_URL(G__19032){
return (new cemerick.url.URL(cljs.core.constant$keyword$_COLON_protocol.cljs$core$IFn$_invoke$arity$1(G__19032),cljs.core.constant$keyword$_COLON_username.cljs$core$IFn$_invoke$arity$1(G__19032),cljs.core.constant$keyword$_COLON_password.cljs$core$IFn$_invoke$arity$1(G__19032),cljs.core.constant$keyword$_COLON_host.cljs$core$IFn$_invoke$arity$1(G__19032),cljs.core.constant$keyword$_COLON_port.cljs$core$IFn$_invoke$arity$1(G__19032),cljs.core.constant$keyword$_COLON_path.cljs$core$IFn$_invoke$arity$1(G__19032),cljs.core.constant$keyword$_COLON_query.cljs$core$IFn$_invoke$arity$1(G__19032),cljs.core.constant$keyword$_COLON_anchor.cljs$core$IFn$_invoke$arity$1(G__19032),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19032,cljs.core.constant$keyword$_COLON_protocol,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_username,cljs.core.constant$keyword$_COLON_password,cljs.core.constant$keyword$_COLON_host,cljs.core.constant$keyword$_COLON_port,cljs.core.constant$keyword$_COLON_path,cljs.core.constant$keyword$_COLON_query,cljs.core.constant$keyword$_COLON_anchor], 0)),null));
});

cemerick.url.translate_default = (function cemerick$url$translate_default(s,old_default,new_default){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,old_default)){
return new_default;
} else {
return s;
}
});
cemerick.url.url_STAR_ = (function cemerick$url$url_STAR_(url){
var url__$1 = (new goog.Uri(url));
var vec__19055 = clojure.string.split.cljs$core$IFn$_invoke$arity$3((function (){var or__13083__auto__ = url__$1.getUserInfo();
if(cljs.core.truth_(or__13083__auto__)){
return or__13083__auto__;
} else {
return "";
}
})(),/:/,(2));
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19055,(0),null);
var pass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19055,(1),null);
return (new cemerick.url.URL(url__$1.getScheme(),(function (){var and__13071__auto__ = cljs.core.seq(user);
if(and__13071__auto__){
return user;
} else {
return and__13071__auto__;
}
})(),(function (){var and__13071__auto__ = cljs.core.seq(pass);
if(and__13071__auto__){
return pass;
} else {
return and__13071__auto__;
}
})(),url__$1.getDomain(),cemerick.url.translate_default(url__$1.getPort(),null,(-1)),pathetic.core.normalize(url__$1.getPath()),cemerick.url.query__GT_map(cemerick.url.translate_default(url__$1.getQuery(),"",null)),cemerick.url.translate_default(url__$1.getFragment(),"",null),null,null,null));
});
/**
 * Returns a new URL record for the given url string(s).
 * 
 * The first argument must be a base url — either a complete url string, or
 * a pre-existing URL record instance that will serve as the basis for the new
 * URL.  Any additional arguments must be strings, which are interpreted as
 * relative paths that are successively resolved against the base url's path
 * to construct the final :path in the returned URL record.
 * 
 * This function does not perform any url-encoding.  Use `url-encode` to encode
 * URL path segments as desired before passing them into this fn.
 * @param {...*} var_args
 */
cemerick.url.url = (function() {
var cemerick$url$url = null;
var cemerick$url$url__1 = (function (url__$1){
if((url__$1 instanceof cemerick.url.URL)){
return url__$1;
} else {
return cemerick.url.url_STAR_(url__$1);
}
});
var cemerick$url$url__2 = (function() { 
var G__19057__delegate = function (base_url,path_segments){
var base_url__$1 = (((base_url instanceof cemerick.url.URL))?base_url:cemerick$url$url.cljs$core$IFn$_invoke$arity$1(base_url));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base_url__$1,cljs.core.constant$keyword$_COLON_path,pathetic.core.normalize(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(pathetic.core.resolve,cljs.core.constant$keyword$_COLON_path.cljs$core$IFn$_invoke$arity$1(base_url__$1),path_segments)));
};
var G__19057 = function (base_url,var_args){
var path_segments = null;
if (arguments.length > 1) {
var G__19058__i = 0, G__19058__a = new Array(arguments.length -  1);
while (G__19058__i < G__19058__a.length) {G__19058__a[G__19058__i] = arguments[G__19058__i + 1]; ++G__19058__i;}
  path_segments = new cljs.core.IndexedSeq(G__19058__a,0);
} 
return G__19057__delegate.call(this,base_url,path_segments);};
G__19057.cljs$lang$maxFixedArity = 1;
G__19057.cljs$lang$applyTo = (function (arglist__19059){
var base_url = cljs.core.first(arglist__19059);
var path_segments = cljs.core.rest(arglist__19059);
return G__19057__delegate(base_url,path_segments);
});
G__19057.cljs$core$IFn$_invoke$arity$variadic = G__19057__delegate;
return G__19057;
})()
;
cemerick$url$url = function(base_url,var_args){
var path_segments = var_args;
switch(arguments.length){
case 1:
return cemerick$url$url__1.call(this,base_url);
default:
var G__19060 = null;
if (arguments.length > 1) {
var G__19061__i = 0, G__19061__a = new Array(arguments.length -  1);
while (G__19061__i < G__19061__a.length) {G__19061__a[G__19061__i] = arguments[G__19061__i + 1]; ++G__19061__i;}
G__19060 = new cljs.core.IndexedSeq(G__19061__a,0);
}
return cemerick$url$url__2.cljs$core$IFn$_invoke$arity$variadic(base_url, G__19060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cemerick$url$url.cljs$lang$maxFixedArity = 1;
cemerick$url$url.cljs$lang$applyTo = cemerick$url$url__2.cljs$lang$applyTo;
cemerick$url$url.cljs$core$IFn$_invoke$arity$1 = cemerick$url$url__1;
cemerick$url$url.cljs$core$IFn$_invoke$arity$variadic = cemerick$url$url__2.cljs$core$IFn$_invoke$arity$variadic;
return cemerick$url$url;
})()
;
