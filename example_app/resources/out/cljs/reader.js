// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');

cljs.reader.PushbackReader = (function (){var obj24266 = {};
return obj24266;
})();

cljs.reader.read_char = (function cljs$reader$read_char(reader){
if((function (){var and__15671__auto__ = reader;
if(and__15671__auto__){
return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else {
return and__15671__auto__;
}
})()){
return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else {
var x__16327__auto__ = (((reader == null))?null:reader);
return (function (){var or__15683__auto__ = (cljs.reader.read_char[(function (){var G__24270 = x__16327__auto__;
return goog.typeOf(G__24270);
})()]);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (cljs.reader.read_char["_"]);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
throw cljs.core.missing_protocol("PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});

cljs.reader.unread = (function cljs$reader$unread(reader,ch){
if((function (){var and__15671__auto__ = reader;
if(and__15671__auto__){
return reader.cljs$reader$PushbackReader$unread$arity$2;
} else {
return and__15671__auto__;
}
})()){
return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else {
var x__16327__auto__ = (((reader == null))?null:reader);
return (function (){var or__15683__auto__ = (cljs.reader.unread[(function (){var G__24274 = x__16327__auto__;
return goog.typeOf(G__24274);
})()]);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = (cljs.reader.unread["_"]);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
throw cljs.core.missing_protocol("PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});


/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,buffer,idx){
this.s = s;
this.buffer = buffer;
this.idx = idx;
})
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;

cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var self__ = this;
var reader__$1 = this;
if((self__.buffer.length === (0))){
self__.idx = (self__.idx + (1));

return (self__.s[self__.idx]);
} else {
return self__.buffer.pop();
}
});

cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var self__ = this;
var reader__$1 = this;
return self__.buffer.push(ch);
});

cljs.reader.StringPushbackReader.cljs$lang$type = true;

cljs.reader.StringPushbackReader.cljs$lang$ctorStr = "cljs.reader/StringPushbackReader";

cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__16270__auto__,writer__16271__auto__,opt__16272__auto__){
return cljs.core._write(writer__16271__auto__,"cljs.reader/StringPushbackReader");
});

cljs.reader.__GT_StringPushbackReader = (function cljs$reader$__GT_StringPushbackReader(s,buffer,idx){
return (new cljs.reader.StringPushbackReader(s,buffer,idx));
});

cljs.reader.push_back_reader = (function cljs$reader$push_back_reader(s){

return (new cljs.reader.StringPushbackReader(s,[],(-1)));
});
/**
 * Checks whether a given character is whitespace
 */
cljs.reader.whitespace_QMARK_ = (function cljs$reader$whitespace_QMARK_(ch){
var or__15683__auto__ = (function (){var G__24278 = ch;
return goog.string.isBreakingWhitespace(G__24278);
})();
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return ("," === ch);
}
});
/**
 * Checks whether a given character is numeric
 */
cljs.reader.numeric_QMARK_ = (function cljs$reader$numeric_QMARK_(ch){
var G__24280 = ch;
return goog.string.isNumeric(G__24280);
});
/**
 * Checks whether the character begins a comment.
 */
cljs.reader.comment_prefix_QMARK_ = (function cljs$reader$comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
 * Checks whether the reader is at the start of a number literal
 */
cljs.reader.number_literal_QMARK_ = (function cljs$reader$number_literal_QMARK_(reader,initch){
return (cljs.reader.numeric_QMARK_(initch)) || (((("+" === initch)) || (("-" === initch))) && (cljs.reader.numeric_QMARK_((function (){var next_ch = cljs.reader.read_char(reader);
cljs.reader.unread(reader,next_ch);

return next_ch;
})())));
});


/**
 * @param {...*} var_args
 */
cljs.reader.reader_error = (function() { 
var cljs$reader$reader_error__delegate = function (rdr,msg){
throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)));
};
var cljs$reader$reader_error = function (rdr,var_args){
var msg = null;
if (arguments.length > 1) {
var G__24281__i = 0, G__24281__a = new Array(arguments.length -  1);
while (G__24281__i < G__24281__a.length) {G__24281__a[G__24281__i] = arguments[G__24281__i + 1]; ++G__24281__i;}
  msg = new cljs.core.IndexedSeq(G__24281__a,0);
} 
return cljs$reader$reader_error__delegate.call(this,rdr,msg);};
cljs$reader$reader_error.cljs$lang$maxFixedArity = 1;
cljs$reader$reader_error.cljs$lang$applyTo = (function (arglist__24282){
var rdr = cljs.core.first(arglist__24282);
var msg = cljs.core.rest(arglist__24282);
return cljs$reader$reader_error__delegate(rdr,msg);
});
cljs$reader$reader_error.cljs$core$IFn$_invoke$arity$variadic = cljs$reader$reader_error__delegate;
return cljs$reader$reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function cljs$reader$macro_terminating_QMARK_(ch){
var and__15671__auto__ = !((ch === "#"));
if(and__15671__auto__){
var and__15671__auto____$1 = !((ch === "'"));
if(and__15671__auto____$1){
var and__15671__auto____$2 = !((ch === ":"));
if(and__15671__auto____$2){
var G__24290 = ch;
return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(G__24290) : cljs.reader.macros.call(null,G__24290));
} else {
return and__15671__auto____$2;
}
} else {
return and__15671__auto____$1;
}
} else {
return and__15671__auto__;
}
});
cljs.reader.read_token = (function cljs$reader$read_token(rdr,initch){
var sb = (new goog.string.StringBuffer(initch));
var ch = cljs.reader.read_char(rdr);
while(true){
if(((ch == null)) || (cljs.reader.whitespace_QMARK_(ch)) || (cljs.reader.macro_terminating_QMARK_(ch))){
cljs.reader.unread(rdr,ch);

return sb.toString();
} else {
var G__24291 = (function (){
sb.append(ch);

return sb;
})()
;
var G__24292 = cljs.reader.read_char(rdr);
sb = G__24291;
ch = G__24292;
continue;
}
break;
}
});
/**
 * Advances the reader to the end of a line. Returns the reader
 */
cljs.reader.skip_line = (function cljs$reader$skip_line(reader,_){
while(true){
var ch = cljs.reader.read_char(reader);
if(((ch === "\n")) || ((ch === "\r")) || ((ch == null))){
return reader;
} else {
continue;
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$");
cljs.reader.ratio_pattern = cljs.core.re_pattern("^([-+]?[0-9]+)/([0-9]+)$");
cljs.reader.float_pattern = cljs.core.re_pattern("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$");
cljs.reader.symbol_pattern = cljs.core.re_pattern("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
cljs.reader.re_matches_STAR_ = (function cljs$reader$re_matches_STAR_(re,s){
var matches = re.exec(s);
if((!((matches == null))) && (((matches[(0)]) === s))){
if((matches.length === (1))){
return (matches[(0)]);
} else {
return matches;
}
} else {
return null;
}
});
cljs.reader.match_int = (function cljs$reader$match_int(s){
var groups = cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,s);
var ie8_fix = (groups[(2)]);
var zero = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ie8_fix,""))?null:ie8_fix);
if(!((zero == null))){
return (0);
} else {
var a = (cljs.core.truth_((groups[(3)]))?[(groups[(3)]),(10)]:(cljs.core.truth_((groups[(4)]))?[(groups[(4)]),(16)]:(cljs.core.truth_((groups[(5)]))?[(groups[(5)]),(8)]:(cljs.core.truth_((groups[(6)]))?[(groups[(7)]),(function (){var G__24297 = (groups[(6)]);
var G__24298 = (10);
return parseInt(G__24297,G__24298);
})()]:[null,null]
))));
var n = (a[(0)]);
var radix = (a[(1)]);
if((n == null)){
return null;
} else {
var parsed = (function (){var G__24299 = n;
var G__24300 = radix;
return parseInt(G__24299,G__24300);
})();
if(("-" === (groups[(1)]))){
return (- parsed);
} else {
return parsed;
}
}
}
});
cljs.reader.match_ratio = (function cljs$reader$match_ratio(s){
var groups = cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,s);
var numinator = (groups[(1)]);
var denominator = (groups[(2)]);
return ((function (){var G__24305 = numinator;
var G__24306 = (10);
return parseInt(G__24305,G__24306);
})() / (function (){var G__24307 = denominator;
var G__24308 = (10);
return parseInt(G__24307,G__24308);
})());
});
cljs.reader.match_float = (function cljs$reader$match_float(s){
var G__24310 = s;
return parseFloat(G__24310);
});
cljs.reader.match_number = (function cljs$reader$match_number(s){
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,s))){
return cljs.reader.match_int(s);
} else {
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,s))){
return cljs.reader.match_ratio(s);
} else {
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.float_pattern,s))){
return cljs.reader.match_float(s);
} else {
return null;
}
}
}
});
cljs.reader.escape_char_map = (function cljs$reader$escape_char_map(c){
if((c === "t")){
return "\t";
} else {
if((c === "r")){
return "\r";
} else {
if((c === "n")){
return "\n";
} else {
if((c === "\\")){
return "\\";
} else {
if((c === "\"")){
return "\"";
} else {
if((c === "b")){
return "\b";
} else {
if((c === "f")){
return "\f";
} else {
return null;

}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function cljs$reader$read_2_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.read_4_chars = (function cljs$reader$read_4_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern("^[0-9A-Fa-f]{2}$");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern("^[0-9A-Fa-f]{4}$");
cljs.reader.validate_unicode_escape = (function cljs$reader$validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){
if(cljs.core.truth_(cljs.core.re_matches(unicode_pattern,unicode_str))){
return unicode_str;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",escape_char,unicode_str], 0));
}
});
cljs.reader.make_unicode_char = (function cljs$reader$make_unicode_char(code_str){
var code = (function (){var G__24313 = code_str;
var G__24314 = (16);
return parseInt(G__24313,G__24314);
})();
return String.fromCharCode(code);
});
cljs.reader.escape_char = (function cljs$reader$escape_char(buffer,reader){
var ch = cljs.reader.read_char(reader);
var mapresult = cljs.reader.escape_char_map(ch);
if(cljs.core.truth_(mapresult)){
return mapresult;
} else {
if((ch === "x")){
return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_2_pattern,reader,ch,cljs.reader.read_2_chars(reader)));
} else {
if((ch === "u")){
return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_4_pattern,reader,ch,cljs.reader.read_4_chars(reader)));
} else {
if(cljs.reader.numeric_QMARK_(ch)){
return String.fromCharCode(ch);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",ch], 0));

}
}
}
}
});
/**
 * Read until first character that doesn't match pred, returning
 * char.
 */
cljs.reader.read_past = (function cljs$reader$read_past(pred,rdr){
var ch = cljs.reader.read_char(rdr);
while(true){
if(cljs.core.truth_((function (){var G__24316 = ch;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__24316) : pred.call(null,G__24316));
})())){
var G__24317 = cljs.reader.read_char(rdr);
ch = G__24317;
continue;
} else {
return ch;
}
break;
}
});
cljs.reader.read_delimited_list = (function cljs$reader$read_delimited_list(delim,rdr,recursive_QMARK_){
var a = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var ch = cljs.reader.read_past(cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch)){
} else {
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading"], 0));
}

if((delim === ch)){
return cljs.core.persistent_BANG_(a);
} else {
var temp__4124__auto__ = (function (){var G__24325 = ch;
return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(G__24325) : cljs.reader.macros.call(null,G__24325));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var macrofn = temp__4124__auto__;
var mret = (function (){var G__24326 = rdr;
var G__24327 = ch;
return (macrofn.cljs$core$IFn$_invoke$arity$2 ? macrofn.cljs$core$IFn$_invoke$arity$2(G__24326,G__24327) : macrofn.call(null,G__24326,G__24327));
})();
var G__24332 = (((mret === rdr))?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,mret));
a = G__24332;
continue;
} else {
cljs.reader.unread(rdr,ch);

var o = (function (){var G__24328 = rdr;
var G__24329 = true;
var G__24330 = null;
var G__24331 = recursive_QMARK_;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__24328,G__24329,G__24330,G__24331) : cljs.reader.read.call(null,G__24328,G__24329,G__24330,G__24331));
})();
var G__24333 = (((o === rdr))?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,o));
a = G__24333;
continue;
}
}
break;
}
});
cljs.reader.not_implemented = (function cljs$reader$not_implemented(rdr,ch){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Reader for ",ch," not implemented yet"], 0));
});
cljs.reader.read_dispatch = (function cljs$reader$read_dispatch(rdr,_){
var ch = cljs.reader.read_char(rdr);
var dm = (function (){var G__24339 = ch;
return (cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1(G__24339) : cljs.reader.dispatch_macros.call(null,G__24339));
})();
if(cljs.core.truth_(dm)){
var G__24340 = rdr;
var G__24341 = _;
return (dm.cljs$core$IFn$_invoke$arity$2 ? dm.cljs$core$IFn$_invoke$arity$2(G__24340,G__24341) : dm.call(null,G__24340,G__24341));
} else {
var temp__4124__auto__ = (function (){var G__24342 = rdr;
var G__24343 = ch;
return (cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2(G__24342,G__24343) : cljs.reader.maybe_read_tagged_type.call(null,G__24342,G__24343));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var obj = temp__4124__auto__;
return obj;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["No dispatch macro for ",ch], 0));
}
}
});
cljs.reader.read_unmatched_delimiter = (function cljs$reader$read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Unmatched delimiter ",ch], 0));
});
cljs.reader.read_list = (function cljs$reader$read_list(rdr,_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.reader.read_delimited_list(")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function cljs$reader$read_vector(rdr,_){
return cljs.reader.read_delimited_list("]",rdr,true);
});
cljs.reader.read_map = (function cljs$reader$read_map(rdr,_){
var l = cljs.reader.read_delimited_list("}",rdr,true);
if(cljs.core.odd_QMARK_(cljs.core.count(l))){
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Map literal must contain an even number of forms"], 0));
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,l);
});
cljs.reader.read_number = (function cljs$reader$read_number(reader,initch){
var buffer = (new goog.string.StringBuffer(initch));
var ch = cljs.reader.read_char(reader);
while(true){
if(cljs.core.truth_((function (){var or__15683__auto__ = (ch == null);
if(or__15683__auto__){
return or__15683__auto__;
} else {
var or__15683__auto____$1 = cljs.reader.whitespace_QMARK_(ch);
if(or__15683__auto____$1){
return or__15683__auto____$1;
} else {
var G__24349 = ch;
return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(G__24349) : cljs.reader.macros.call(null,G__24349));
}
}
})())){
cljs.reader.unread(reader,ch);

var s = buffer.toString();
var or__15683__auto__ = cljs.reader.match_number(s);
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid number format [",s,"]"], 0));
}
} else {
var G__24350 = (function (){
buffer.append(ch);

return buffer;
})()
;
var G__24351 = cljs.reader.read_char(reader);
buffer = G__24350;
ch = G__24351;
continue;
}
break;
}
});
cljs.reader.read_string_STAR_ = (function cljs$reader$read_string_STAR_(reader,_){
var buffer = (new goog.string.StringBuffer());
var ch = cljs.reader.read_char(reader);
while(true){
if((ch == null)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
if(("\\" === ch)){
var G__24352 = (function (){
buffer.append(cljs.reader.escape_char(buffer,reader));

return buffer;
})()
;
var G__24353 = cljs.reader.read_char(reader);
buffer = G__24352;
ch = G__24353;
continue;
} else {
if(("\"" === ch)){
return buffer.toString();
} else {
var G__24354 = (function (){
buffer.append(ch);

return buffer;
})()
;
var G__24355 = cljs.reader.read_char(reader);
buffer = G__24354;
ch = G__24355;
continue;

}
}
}
break;
}
});
cljs.reader.read_raw_string_STAR_ = (function cljs$reader$read_raw_string_STAR_(reader,_){
var buffer = (new goog.string.StringBuffer());
var ch = cljs.reader.read_char(reader);
while(true){
if((ch == null)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
if(("\\" === ch)){
buffer.append(ch);

var nch = cljs.reader.read_char(reader);
if((nch == null)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
var G__24360 = (function (){var G__24358 = buffer;
G__24358.append(nch);

return G__24358;
})();
var G__24361 = cljs.reader.read_char(reader);
buffer = G__24360;
ch = G__24361;
continue;
}
} else {
if(("\"" === ch)){
return buffer.toString();
} else {
var G__24362 = (function (){var G__24359 = buffer;
G__24359.append(ch);

return G__24359;
})();
var G__24363 = cljs.reader.read_char(reader);
buffer = G__24362;
ch = G__24363;
continue;

}
}
}
break;
}
});
cljs.reader.special_symbols = (function cljs$reader$special_symbols(t,not_found){
if((t === "nil")){
return null;
} else {
if((t === "true")){
return true;
} else {
if((t === "false")){
return false;
} else {
if((t === "/")){
return new cljs.core.Symbol(null,"/","/",-1371932971,null);
} else {
return not_found;

}
}
}
}
});
cljs.reader.read_symbol = (function cljs$reader$read_symbol(reader,initch){
var token = cljs.reader.read_token(reader,initch);
if(cljs.core.truth_((function (){var and__15671__auto__ = (function (){var G__24370 = token;
var G__24371 = "/";
return goog.string.contains(G__24370,G__24371);
})();
if(cljs.core.truth_(and__15671__auto__)){
return !((token.length === (1)));
} else {
return and__15671__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(0),token.indexOf("/")),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(token.indexOf("/") + (1)),token.length));
} else {
return cljs.reader.special_symbols(token,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(token));
}
});
cljs.reader.read_keyword = (function cljs$reader$read_keyword(reader,initch){
var token = cljs.reader.read_token(reader,cljs.reader.read_char(reader));
var a = cljs.reader.re_matches_STAR_(cljs.reader.symbol_pattern,token);
var token__$1 = (a[(0)]);
var ns = (a[(1)]);
var name = (a[(2)]);
if(((!((void 0 === ns))) && ((ns.substring((ns.length - (2)),ns.length) === ":/"))) || (((name[(name.length - (1))]) === ":")) || (!((token__$1.indexOf("::",(1)) === (-1))))){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid token: ",token__$1], 0));
} else {
if((!((ns == null))) && ((ns.length > (0)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns.substring((0),ns.indexOf("/")),name);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token__$1);
}
}
});
cljs.reader.desugar_meta = (function cljs$reader$desugar_meta(f){
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_tag,f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_tag,f], null);
} else {
if((f instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap.fromArray([f,true], true, false);
} else {
return f;

}
}
}
});
cljs.reader.wrapping_reader = (function cljs$reader$wrapping_reader(sym){
return (function (rdr,_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__24376 = rdr;
var G__24377 = true;
var G__24378 = null;
var G__24379 = true;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__24376,G__24377,G__24378,G__24379) : cljs.reader.read.call(null,G__24376,G__24377,G__24378,G__24379));
})()),sym);
});
});
cljs.reader.throwing_reader = (function cljs$reader$throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq([msg], 0));
});
});
cljs.reader.read_meta = (function cljs$reader$read_meta(rdr,_){
var m = cljs.reader.desugar_meta((function (){var G__24389 = rdr;
var G__24390 = true;
var G__24391 = null;
var G__24392 = true;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__24389,G__24390,G__24391,G__24392) : cljs.reader.read.call(null,G__24389,G__24390,G__24391,G__24392));
})());
if(cljs.core.map_QMARK_(m)){
} else {
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata must be Symbol,Keyword,String or Map"], 0));
}

var o = (function (){var G__24393 = rdr;
var G__24394 = true;
var G__24395 = null;
var G__24396 = true;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__24393,G__24394,G__24395,G__24396) : cljs.reader.read.call(null,G__24393,G__24394,G__24395,G__24396));
})();
if((function (){var G__24397 = o;
if(G__24397){
var bit__16364__auto__ = (G__24397.cljs$lang$protocol_mask$partition0$ & (262144));
if((bit__16364__auto__) || (G__24397.cljs$core$IWithMeta$)){
return true;
} else {
if((!G__24397.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__24397);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__24397);
}
})()){
return cljs.core.with_meta(o,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.meta(o),m], 0)));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata can only be applied to IWithMetas"], 0));
}
});
cljs.reader.read_set = (function cljs$reader$read_set(rdr,_){
return cljs.core.set(cljs.reader.read_delimited_list("}",rdr,true));
});
cljs.reader.read_regex = (function cljs$reader$read_regex(rdr,ch){
return cljs.core.re_pattern(cljs.reader.read_raw_string_STAR_(rdr,ch));
});
cljs.reader.read_discard = (function cljs$reader$read_discard(rdr,_){
var G__24402_24406 = rdr;
var G__24403_24407 = true;
var G__24404_24408 = null;
var G__24405_24409 = true;
(cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__24402_24406,G__24403_24407,G__24404_24408,G__24405_24409) : cljs.reader.read.call(null,G__24402_24406,G__24403_24407,G__24404_24408,G__24405_24409));

return rdr;
});
cljs.reader.macros = (function cljs$reader$macros(c){
if((c === "\"")){
return cljs.reader.read_string_STAR_;
} else {
if((c === ":")){
return cljs.reader.read_keyword;
} else {
if((c === ";")){
return cljs.reader.read_comment;
} else {
if((c === "'")){
return cljs.reader.wrapping_reader(new cljs.core.Symbol(null,"quote","quote",1377916282,null));
} else {
if((c === "@")){
return cljs.reader.wrapping_reader(new cljs.core.Symbol(null,"deref","deref",1494944732,null));
} else {
if((c === "^")){
return cljs.reader.read_meta;
} else {
if((c === "`")){
return cljs.reader.not_implemented;
} else {
if((c === "~")){
return cljs.reader.not_implemented;
} else {
if((c === "(")){
return cljs.reader.read_list;
} else {
if((c === ")")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "[")){
return cljs.reader.read_vector;
} else {
if((c === "]")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "{")){
return cljs.reader.read_map;
} else {
if((c === "}")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "\\")){
return cljs.reader.read_char;
} else {
if((c === "#")){
return cljs.reader.read_dispatch;
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
});
cljs.reader.dispatch_macros = (function cljs$reader$dispatch_macros(s){
if((s === "{")){
return cljs.reader.read_set;
} else {
if((s === "<")){
return cljs.reader.throwing_reader("Unreadable form");
} else {
if((s === "\"")){
return cljs.reader.read_regex;
} else {
if((s === "!")){
return cljs.reader.read_comment;
} else {
if((s === "_")){
return cljs.reader.read_discard;
} else {
return null;

}
}
}
}
}
});
/**
 * Reads the first object from a PushbackReader. Returns the object read.
 * If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
 */
cljs.reader.read = (function cljs$reader$read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch = cljs.reader.read_char(reader);
if((ch == null)){
if(cljs.core.truth_(eof_is_error)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
return sentinel;
}
} else {
if(cljs.reader.whitespace_QMARK_(ch)){
var G__24418 = reader;
var G__24419 = eof_is_error;
var G__24420 = sentinel;
var G__24421 = is_recursive;
reader = G__24418;
eof_is_error = G__24419;
sentinel = G__24420;
is_recursive = G__24421;
continue;
} else {
if(cljs.reader.comment_prefix_QMARK_(ch)){
var G__24422 = (function (){var G__24414 = reader;
var G__24415 = ch;
return (cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2(G__24414,G__24415) : cljs.reader.read_comment.call(null,G__24414,G__24415));
})();
var G__24423 = eof_is_error;
var G__24424 = sentinel;
var G__24425 = is_recursive;
reader = G__24422;
eof_is_error = G__24423;
sentinel = G__24424;
is_recursive = G__24425;
continue;
} else {
var f = cljs.reader.macros(ch);
var res = (cljs.core.truth_(f)?(function (){var G__24416 = reader;
var G__24417 = ch;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24416,G__24417) : f.call(null,G__24416,G__24417));
})():((cljs.reader.number_literal_QMARK_(reader,ch))?cljs.reader.read_number(reader,ch):cljs.reader.read_symbol(reader,ch)
));
if((res === reader)){
var G__24426 = reader;
var G__24427 = eof_is_error;
var G__24428 = sentinel;
var G__24429 = is_recursive;
reader = G__24426;
eof_is_error = G__24427;
sentinel = G__24428;
is_recursive = G__24429;
continue;
} else {
return res;
}

}
}
}
break;
}
});
/**
 * Reads one object from the string s
 */
cljs.reader.read_string = (function cljs$reader$read_string(s){
var r = cljs.reader.push_back_reader(s);
return cljs.reader.read(r,false,null,false);
});
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s))){
return s;
} else {
if((width < cljs.core.count(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__24430 = b.append("0");
b = G__24430;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return !(cljs.reader.divisible_QMARK_(num,div));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
return (cljs.reader.divisible_QMARK_(year,(4))) && ((cljs.reader.indivisible_QMARK_(year,(100))) || (cljs.reader.divisible_QMARK_(year,(400))));
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = (function (){var G__24434 = s;
var G__24435 = (10);
return parseInt(G__24434,G__24435);
})();
if(cljs.core.not((function (){var G__24436 = n;
return isNaN(G__24436);
})())){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if(((low <= n)) && ((n <= high))){
} else {
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')], 0));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__24440 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24440,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24440,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24440,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24440,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24440,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24440,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24440,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24440,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24440,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24440,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24440,(10),null);
var v = vec__24440;
if(cljs.core.not(v)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(s)].join('')], 0));
} else {
var years__$1 = cljs.reader.parse_int(years);
var months__$1 = (function (){var or__15683__auto__ = cljs.reader.parse_int(months);
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__15683__auto__ = cljs.reader.parse_int(days);
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__15683__auto__ = cljs.reader.parse_int(hours);
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__15683__auto__ = cljs.reader.parse_int(minutes);
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__15683__auto__ = cljs.reader.parse_int(seconds);
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__15683__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__15683__auto__ = cljs.reader.parse_int(offset_hours);
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__15683__auto__ = cljs.reader.parse_int(offset_minutes);
if(cljs.core.truth_(or__15683__auto__)){
return or__15683__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,(function (){var G__24441 = months__$1;
var G__24442 = cljs.reader.leap_year_QMARK_(years__$1);
return (cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(G__24441,G__24442) : cljs.reader.days_in_month.call(null,G__24441,G__24442));
})(),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__4124__auto__ = cljs.reader.parse_and_validate_timestamp(ts);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__24444 = temp__4124__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24444,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24444,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24444,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24444,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24444,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24444,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24444,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24444,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join('')], 0));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp(s);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Instance literal expects a string for its timestamp."], 0));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Queue literal expects a vector for its elements."], 0));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_(form)){
var arr = [];
var seq__24457_24469 = cljs.core.seq(form);
var chunk__24458_24470 = null;
var count__24459_24471 = (0);
var i__24460_24472 = (0);
while(true){
if((i__24460_24472 < count__24459_24471)){
var x_24473 = chunk__24458_24470.cljs$core$IIndexed$_nth$arity$2(null,i__24460_24472);
arr.push(x_24473);

var G__24474 = seq__24457_24469;
var G__24475 = chunk__24458_24470;
var G__24476 = count__24459_24471;
var G__24477 = (i__24460_24472 + (1));
seq__24457_24469 = G__24474;
chunk__24458_24470 = G__24475;
count__24459_24471 = G__24476;
i__24460_24472 = G__24477;
continue;
} else {
var temp__4126__auto___24478 = cljs.core.seq(seq__24457_24469);
if(temp__4126__auto___24478){
var seq__24457_24479__$1 = temp__4126__auto___24478;
if(cljs.core.chunked_seq_QMARK_(seq__24457_24479__$1)){
var c__16470__auto___24480 = cljs.core.chunk_first(seq__24457_24479__$1);
var G__24481 = cljs.core.chunk_rest(seq__24457_24479__$1);
var G__24482 = c__16470__auto___24480;
var G__24483 = cljs.core.count(c__16470__auto___24480);
var G__24484 = (0);
seq__24457_24469 = G__24481;
chunk__24458_24470 = G__24482;
count__24459_24471 = G__24483;
i__24460_24472 = G__24484;
continue;
} else {
var x_24485 = cljs.core.first(seq__24457_24479__$1);
arr.push(x_24485);

var G__24486 = cljs.core.next(seq__24457_24479__$1);
var G__24487 = null;
var G__24488 = (0);
var G__24489 = (0);
seq__24457_24469 = G__24486;
chunk__24458_24470 = G__24487;
count__24459_24471 = G__24488;
i__24460_24472 = G__24489;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_(form)){
var obj = (function (){var obj24462 = {};
return obj24462;
})();
var seq__24463_24490 = cljs.core.seq(form);
var chunk__24464_24491 = null;
var count__24465_24492 = (0);
var i__24466_24493 = (0);
while(true){
if((i__24466_24493 < count__24465_24492)){
var vec__24467_24494 = chunk__24464_24491.cljs$core$IIndexed$_nth$arity$2(null,i__24466_24493);
var k_24495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24467_24494,(0),null);
var v_24496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24467_24494,(1),null);
(obj[cljs.core.name(k_24495)] = v_24496);

var G__24497 = seq__24463_24490;
var G__24498 = chunk__24464_24491;
var G__24499 = count__24465_24492;
var G__24500 = (i__24466_24493 + (1));
seq__24463_24490 = G__24497;
chunk__24464_24491 = G__24498;
count__24465_24492 = G__24499;
i__24466_24493 = G__24500;
continue;
} else {
var temp__4126__auto___24501 = cljs.core.seq(seq__24463_24490);
if(temp__4126__auto___24501){
var seq__24463_24502__$1 = temp__4126__auto___24501;
if(cljs.core.chunked_seq_QMARK_(seq__24463_24502__$1)){
var c__16470__auto___24503 = cljs.core.chunk_first(seq__24463_24502__$1);
var G__24504 = cljs.core.chunk_rest(seq__24463_24502__$1);
var G__24505 = c__16470__auto___24503;
var G__24506 = cljs.core.count(c__16470__auto___24503);
var G__24507 = (0);
seq__24463_24490 = G__24504;
chunk__24464_24491 = G__24505;
count__24465_24492 = G__24506;
i__24466_24493 = G__24507;
continue;
} else {
var vec__24468_24508 = cljs.core.first(seq__24463_24502__$1);
var k_24509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24468_24508,(0),null);
var v_24510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24468_24508,(1),null);
(obj[cljs.core.name(k_24509)] = v_24510);

var G__24511 = cljs.core.next(seq__24463_24502__$1);
var G__24512 = null;
var G__24513 = (0);
var G__24514 = (0);
seq__24463_24490 = G__24511;
chunk__24464_24491 = G__24512;
count__24465_24492 = G__24513;
i__24466_24493 = G__24514;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("JS literal expects a vector or map containing "),cljs.core.str("only string or unqualified keyword keys")].join('')], 0));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return (new cljs.core.UUID(uuid));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["UUID literal expects a string as its representation."], 0));
}
});
cljs.reader._STAR_tag_table_STAR_ = (function (){var G__24515 = new cljs.core.PersistentArrayMap(null, 4, ["inst",cljs.reader.read_date,"uuid",cljs.reader.read_uuid,"queue",cljs.reader.read_queue,"js",cljs.reader.read_js], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24515) : cljs.core.atom.call(null,G__24515));
})();
cljs.reader._STAR_default_data_reader_fn_STAR_ = (function (){var G__24516 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24516) : cljs.core.atom.call(null,G__24516));
})();
cljs.reader.maybe_read_tagged_type = (function cljs$reader$maybe_read_tagged_type(rdr,initch){
var tag = cljs.reader.read_symbol(rdr,initch);
var pfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24523 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24523) : cljs.core.deref.call(null,G__24523));
})(),[cljs.core.str(tag)].join(''));
var dfn = (function (){var G__24524 = cljs.reader._STAR_default_data_reader_fn_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24524) : cljs.core.deref.call(null,G__24524));
})();
if(cljs.core.truth_(pfn)){
var G__24525 = cljs.reader.read(rdr,true,null,false);
return (pfn.cljs$core$IFn$_invoke$arity$1 ? pfn.cljs$core$IFn$_invoke$arity$1(G__24525) : pfn.call(null,G__24525));
} else {
if(cljs.core.truth_(dfn)){
var G__24526 = tag;
var G__24527 = cljs.reader.read(rdr,true,null,false);
return (dfn.cljs$core$IFn$_invoke$arity$2 ? dfn.cljs$core$IFn$_invoke$arity$2(G__24526,G__24527) : dfn.call(null,G__24526,G__24527));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Could not find tag parser for ",[cljs.core.str(tag)].join('')," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.keys((function (){var G__24528 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24528) : cljs.core.deref.call(null,G__24528));
})())], 0))], 0));

}
}
});
cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var tag__$1 = [cljs.core.str(tag)].join('');
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24530 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24530) : cljs.core.deref.call(null,G__24530));
})(),tag__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__$1,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var tag__$1 = [cljs.core.str(tag)].join('');
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24532 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24532) : cljs.core.deref.call(null,G__24532));
})(),tag__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__$1);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = (function (){var G__24534 = cljs.reader._STAR_default_data_reader_fn_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24534) : cljs.core.deref.call(null,G__24534));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = (function (){var G__24536 = cljs.reader._STAR_default_data_reader_fn_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24536) : cljs.core.deref.call(null,G__24536));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});
