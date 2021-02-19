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
var G__46689 = (line + (1));
var G__46690 = (1);
var G__46691 = (counter + (1));
line = G__46689;
col = G__46690;
counter = G__46691;
continue;
} else {
var G__46692 = line;
var G__46693 = (col + (1));
var G__46694 = (counter + (1));
line = G__46692;
col = G__46693;
counter = G__46694;
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
var G__46695 = cljs.core.next(chars);
var G__46696 = (n__$1 - (1));
chars = G__46695;
n__$1 = G__46696;
continue;
} else {
var G__46697 = cljs.core.next(chars);
var G__46698 = n__$1;
chars = G__46697;
n__$1 = G__46698;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__46678){
var map__46679 = p__46678;
var map__46679__$1 = (((((!((map__46679 == null))))?(((((map__46679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46679):map__46679);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46679__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46679__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46679__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46679__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__46681_46700 = cljs.core.seq(full_reasons);
var chunk__46682_46701 = null;
var count__46683_46702 = (0);
var i__46684_46703 = (0);
while(true){
if((i__46684_46703 < count__46683_46702)){
var r_46704 = chunk__46682_46701.cljs$core$IIndexed$_nth$arity$2(null,i__46684_46703);
instaparse.failure.print_reason(r_46704);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__46705 = seq__46681_46700;
var G__46706 = chunk__46682_46701;
var G__46707 = count__46683_46702;
var G__46708 = (i__46684_46703 + (1));
seq__46681_46700 = G__46705;
chunk__46682_46701 = G__46706;
count__46683_46702 = G__46707;
i__46684_46703 = G__46708;
continue;
} else {
var temp__5735__auto___46709 = cljs.core.seq(seq__46681_46700);
if(temp__5735__auto___46709){
var seq__46681_46710__$1 = temp__5735__auto___46709;
if(cljs.core.chunked_seq_QMARK_(seq__46681_46710__$1)){
var c__4556__auto___46711 = cljs.core.chunk_first(seq__46681_46710__$1);
var G__46712 = cljs.core.chunk_rest(seq__46681_46710__$1);
var G__46713 = c__4556__auto___46711;
var G__46714 = cljs.core.count(c__4556__auto___46711);
var G__46715 = (0);
seq__46681_46700 = G__46712;
chunk__46682_46701 = G__46713;
count__46683_46702 = G__46714;
i__46684_46703 = G__46715;
continue;
} else {
var r_46716 = cljs.core.first(seq__46681_46710__$1);
instaparse.failure.print_reason(r_46716);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__46717 = cljs.core.next(seq__46681_46710__$1);
var G__46718 = null;
var G__46719 = (0);
var G__46720 = (0);
seq__46681_46700 = G__46717;
chunk__46682_46701 = G__46718;
count__46683_46702 = G__46719;
i__46684_46703 = G__46720;
continue;
}
} else {
}
}
break;
}

var seq__46685 = cljs.core.seq(partial_reasons);
var chunk__46686 = null;
var count__46687 = (0);
var i__46688 = (0);
while(true){
if((i__46688 < count__46687)){
var r = chunk__46686.cljs$core$IIndexed$_nth$arity$2(null,i__46688);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__46722 = seq__46685;
var G__46723 = chunk__46686;
var G__46724 = count__46687;
var G__46725 = (i__46688 + (1));
seq__46685 = G__46722;
chunk__46686 = G__46723;
count__46687 = G__46724;
i__46688 = G__46725;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46685);
if(temp__5735__auto__){
var seq__46685__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46685__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46685__$1);
var G__46726 = cljs.core.chunk_rest(seq__46685__$1);
var G__46727 = c__4556__auto__;
var G__46728 = cljs.core.count(c__4556__auto__);
var G__46729 = (0);
seq__46685 = G__46726;
chunk__46686 = G__46727;
count__46687 = G__46728;
i__46688 = G__46729;
continue;
} else {
var r = cljs.core.first(seq__46685__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__46730 = cljs.core.next(seq__46685__$1);
var G__46731 = null;
var G__46732 = (0);
var G__46733 = (0);
seq__46685 = G__46730;
chunk__46686 = G__46731;
count__46687 = G__46732;
i__46688 = G__46733;
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
