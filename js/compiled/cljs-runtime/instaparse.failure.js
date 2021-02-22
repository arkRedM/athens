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
var G__51091 = (line + (1));
var G__51092 = (1);
var G__51093 = (counter + (1));
line = G__51091;
col = G__51092;
counter = G__51093;
continue;
} else {
var G__51095 = line;
var G__51096 = (col + (1));
var G__51097 = (counter + (1));
line = G__51095;
col = G__51096;
counter = G__51097;
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
var G__51098 = cljs.core.next(chars);
var G__51099 = (n__$1 - (1));
chars = G__51098;
n__$1 = G__51099;
continue;
} else {
var G__51100 = cljs.core.next(chars);
var G__51101 = n__$1;
chars = G__51100;
n__$1 = G__51101;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__51069){
var map__51071 = p__51069;
var map__51071__$1 = (((((!((map__51071 == null))))?(((((map__51071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51071):map__51071);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51071__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51071__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51071__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51071__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__51073_51102 = cljs.core.seq(full_reasons);
var chunk__51074_51103 = null;
var count__51075_51104 = (0);
var i__51076_51105 = (0);
while(true){
if((i__51076_51105 < count__51075_51104)){
var r_51106 = chunk__51074_51103.cljs$core$IIndexed$_nth$arity$2(null,i__51076_51105);
instaparse.failure.print_reason(r_51106);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__51107 = seq__51073_51102;
var G__51108 = chunk__51074_51103;
var G__51109 = count__51075_51104;
var G__51110 = (i__51076_51105 + (1));
seq__51073_51102 = G__51107;
chunk__51074_51103 = G__51108;
count__51075_51104 = G__51109;
i__51076_51105 = G__51110;
continue;
} else {
var temp__5735__auto___51111 = cljs.core.seq(seq__51073_51102);
if(temp__5735__auto___51111){
var seq__51073_51112__$1 = temp__5735__auto___51111;
if(cljs.core.chunked_seq_QMARK_(seq__51073_51112__$1)){
var c__4556__auto___51113 = cljs.core.chunk_first(seq__51073_51112__$1);
var G__51114 = cljs.core.chunk_rest(seq__51073_51112__$1);
var G__51115 = c__4556__auto___51113;
var G__51116 = cljs.core.count(c__4556__auto___51113);
var G__51117 = (0);
seq__51073_51102 = G__51114;
chunk__51074_51103 = G__51115;
count__51075_51104 = G__51116;
i__51076_51105 = G__51117;
continue;
} else {
var r_51118 = cljs.core.first(seq__51073_51112__$1);
instaparse.failure.print_reason(r_51118);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__51119 = cljs.core.next(seq__51073_51112__$1);
var G__51120 = null;
var G__51121 = (0);
var G__51122 = (0);
seq__51073_51102 = G__51119;
chunk__51074_51103 = G__51120;
count__51075_51104 = G__51121;
i__51076_51105 = G__51122;
continue;
}
} else {
}
}
break;
}

var seq__51085 = cljs.core.seq(partial_reasons);
var chunk__51086 = null;
var count__51087 = (0);
var i__51088 = (0);
while(true){
if((i__51088 < count__51087)){
var r = chunk__51086.cljs$core$IIndexed$_nth$arity$2(null,i__51088);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__51123 = seq__51085;
var G__51124 = chunk__51086;
var G__51125 = count__51087;
var G__51126 = (i__51088 + (1));
seq__51085 = G__51123;
chunk__51086 = G__51124;
count__51087 = G__51125;
i__51088 = G__51126;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51085);
if(temp__5735__auto__){
var seq__51085__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51085__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51085__$1);
var G__51127 = cljs.core.chunk_rest(seq__51085__$1);
var G__51128 = c__4556__auto__;
var G__51129 = cljs.core.count(c__4556__auto__);
var G__51130 = (0);
seq__51085 = G__51127;
chunk__51086 = G__51128;
count__51087 = G__51129;
i__51088 = G__51130;
continue;
} else {
var r = cljs.core.first(seq__51085__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__51131 = cljs.core.next(seq__51085__$1);
var G__51132 = null;
var G__51133 = (0);
var G__51134 = (0);
seq__51085 = G__51131;
chunk__51086 = G__51132;
count__51087 = G__51133;
i__51088 = G__51134;
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
