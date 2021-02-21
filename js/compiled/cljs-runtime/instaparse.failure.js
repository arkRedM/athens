goog.provide('instaparse.failure');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__51094 = (line + (1));
var G__51095 = (1);
var G__51096 = (counter + (1));
line = G__51094;
col = G__51095;
counter = G__51096;
continue;
} else {
var G__51098 = line;
var G__51099 = (col + (1));
var G__51100 = (counter + (1));
line = G__51098;
col = G__51099;
counter = G__51100;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__51101 = cljs.core.next(chars);
var G__51102 = (n__$1 - (1));
chars = G__51101;
n__$1 = G__51102;
continue;
} else {
var G__51103 = cljs.core.next(chars);
var G__51104 = n__$1;
chars = G__51103;
n__$1 = G__51104;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__51081){
var map__51082 = p__51081;
var map__51082__$1 = (((((!((map__51082 == null))))?(((((map__51082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51082):map__51082);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51082__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51082__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51082__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51082__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__51084_51108 = cljs.core.seq(full_reasons);
var chunk__51085_51109 = null;
var count__51086_51110 = (0);
var i__51087_51111 = (0);
while(true){
if((i__51087_51111 < count__51086_51110)){
var r_51112 = chunk__51085_51109.cljs$core$IIndexed$_nth$arity$2(null,i__51087_51111);
instaparse.failure.print_reason(r_51112);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__51113 = seq__51084_51108;
var G__51114 = chunk__51085_51109;
var G__51115 = count__51086_51110;
var G__51116 = (i__51087_51111 + (1));
seq__51084_51108 = G__51113;
chunk__51085_51109 = G__51114;
count__51086_51110 = G__51115;
i__51087_51111 = G__51116;
continue;
} else {
var temp__5735__auto___51117 = cljs.core.seq(seq__51084_51108);
if(temp__5735__auto___51117){
var seq__51084_51118__$1 = temp__5735__auto___51117;
if(cljs.core.chunked_seq_QMARK_(seq__51084_51118__$1)){
var c__4556__auto___51119 = cljs.core.chunk_first(seq__51084_51118__$1);
var G__51120 = cljs.core.chunk_rest(seq__51084_51118__$1);
var G__51121 = c__4556__auto___51119;
var G__51122 = cljs.core.count(c__4556__auto___51119);
var G__51123 = (0);
seq__51084_51108 = G__51120;
chunk__51085_51109 = G__51121;
count__51086_51110 = G__51122;
i__51087_51111 = G__51123;
continue;
} else {
var r_51126 = cljs.core.first(seq__51084_51118__$1);
instaparse.failure.print_reason(r_51126);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__51128 = cljs.core.next(seq__51084_51118__$1);
var G__51129 = null;
var G__51130 = (0);
var G__51131 = (0);
seq__51084_51108 = G__51128;
chunk__51085_51109 = G__51129;
count__51086_51110 = G__51130;
i__51087_51111 = G__51131;
continue;
}
} else {
}
}
break;
}

var seq__51089 = cljs.core.seq(partial_reasons);
var chunk__51090 = null;
var count__51091 = (0);
var i__51092 = (0);
while(true){
if((i__51092 < count__51091)){
var r = chunk__51090.cljs$core$IIndexed$_nth$arity$2(null,i__51092);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__51132 = seq__51089;
var G__51133 = chunk__51090;
var G__51134 = count__51091;
var G__51135 = (i__51092 + (1));
seq__51089 = G__51132;
chunk__51090 = G__51133;
count__51091 = G__51134;
i__51092 = G__51135;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51089);
if(temp__5735__auto__){
var seq__51089__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51089__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51089__$1);
var G__51136 = cljs.core.chunk_rest(seq__51089__$1);
var G__51137 = c__4556__auto__;
var G__51138 = cljs.core.count(c__4556__auto__);
var G__51139 = (0);
seq__51089 = G__51136;
chunk__51090 = G__51137;
count__51091 = G__51138;
i__51092 = G__51139;
continue;
} else {
var r = cljs.core.first(seq__51089__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__51140 = cljs.core.next(seq__51089__$1);
var G__51141 = null;
var G__51142 = (0);
var G__51143 = (0);
seq__51089 = G__51140;
chunk__51090 = G__51141;
count__51091 = G__51142;
i__51092 = G__51143;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
