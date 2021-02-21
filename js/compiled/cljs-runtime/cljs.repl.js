goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__54411){
var map__54412 = p__54411;
var map__54412__$1 = (((((!((map__54412 == null))))?(((((map__54412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54412):map__54412);
var m = map__54412__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54412__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54412__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54414_54535 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54415_54536 = null;
var count__54416_54537 = (0);
var i__54417_54538 = (0);
while(true){
if((i__54417_54538 < count__54416_54537)){
var f_54539 = chunk__54415_54536.cljs$core$IIndexed$_nth$arity$2(null,i__54417_54538);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54539], 0));


var G__54540 = seq__54414_54535;
var G__54541 = chunk__54415_54536;
var G__54542 = count__54416_54537;
var G__54543 = (i__54417_54538 + (1));
seq__54414_54535 = G__54540;
chunk__54415_54536 = G__54541;
count__54416_54537 = G__54542;
i__54417_54538 = G__54543;
continue;
} else {
var temp__5735__auto___54544 = cljs.core.seq(seq__54414_54535);
if(temp__5735__auto___54544){
var seq__54414_54545__$1 = temp__5735__auto___54544;
if(cljs.core.chunked_seq_QMARK_(seq__54414_54545__$1)){
var c__4556__auto___54546 = cljs.core.chunk_first(seq__54414_54545__$1);
var G__54547 = cljs.core.chunk_rest(seq__54414_54545__$1);
var G__54548 = c__4556__auto___54546;
var G__54549 = cljs.core.count(c__4556__auto___54546);
var G__54550 = (0);
seq__54414_54535 = G__54547;
chunk__54415_54536 = G__54548;
count__54416_54537 = G__54549;
i__54417_54538 = G__54550;
continue;
} else {
var f_54551 = cljs.core.first(seq__54414_54545__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54551], 0));


var G__54552 = cljs.core.next(seq__54414_54545__$1);
var G__54553 = null;
var G__54554 = (0);
var G__54555 = (0);
seq__54414_54535 = G__54552;
chunk__54415_54536 = G__54553;
count__54416_54537 = G__54554;
i__54417_54538 = G__54555;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54556 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_54556], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_54556)))?cljs.core.second(arglists_54556):arglists_54556)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54418_54557 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54419_54558 = null;
var count__54420_54559 = (0);
var i__54421_54560 = (0);
while(true){
if((i__54421_54560 < count__54420_54559)){
var vec__54432_54561 = chunk__54419_54558.cljs$core$IIndexed$_nth$arity$2(null,i__54421_54560);
var name_54562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54432_54561,(0),null);
var map__54435_54563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54432_54561,(1),null);
var map__54435_54564__$1 = (((((!((map__54435_54563 == null))))?(((((map__54435_54563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54435_54563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54435_54563):map__54435_54563);
var doc_54565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54435_54564__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54435_54564__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54562], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54566], 0));

if(cljs.core.truth_(doc_54565)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54565], 0));
} else {
}


var G__54567 = seq__54418_54557;
var G__54568 = chunk__54419_54558;
var G__54569 = count__54420_54559;
var G__54570 = (i__54421_54560 + (1));
seq__54418_54557 = G__54567;
chunk__54419_54558 = G__54568;
count__54420_54559 = G__54569;
i__54421_54560 = G__54570;
continue;
} else {
var temp__5735__auto___54571 = cljs.core.seq(seq__54418_54557);
if(temp__5735__auto___54571){
var seq__54418_54572__$1 = temp__5735__auto___54571;
if(cljs.core.chunked_seq_QMARK_(seq__54418_54572__$1)){
var c__4556__auto___54573 = cljs.core.chunk_first(seq__54418_54572__$1);
var G__54574 = cljs.core.chunk_rest(seq__54418_54572__$1);
var G__54575 = c__4556__auto___54573;
var G__54576 = cljs.core.count(c__4556__auto___54573);
var G__54577 = (0);
seq__54418_54557 = G__54574;
chunk__54419_54558 = G__54575;
count__54420_54559 = G__54576;
i__54421_54560 = G__54577;
continue;
} else {
var vec__54437_54578 = cljs.core.first(seq__54418_54572__$1);
var name_54579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54437_54578,(0),null);
var map__54440_54580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54437_54578,(1),null);
var map__54440_54581__$1 = (((((!((map__54440_54580 == null))))?(((((map__54440_54580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54440_54580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54440_54580):map__54440_54580);
var doc_54582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54440_54581__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54440_54581__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54579], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54583], 0));

if(cljs.core.truth_(doc_54582)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54582], 0));
} else {
}


var G__54584 = cljs.core.next(seq__54418_54572__$1);
var G__54585 = null;
var G__54586 = (0);
var G__54587 = (0);
seq__54418_54557 = G__54584;
chunk__54419_54558 = G__54585;
count__54420_54559 = G__54586;
i__54421_54560 = G__54587;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__54442 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__54443 = null;
var count__54444 = (0);
var i__54445 = (0);
while(true){
if((i__54445 < count__54444)){
var role = chunk__54443.cljs$core$IIndexed$_nth$arity$2(null,i__54445);
var temp__5735__auto___54588__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54588__$1)){
var spec_54589 = temp__5735__auto___54588__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54589)], 0));
} else {
}


var G__54590 = seq__54442;
var G__54591 = chunk__54443;
var G__54592 = count__54444;
var G__54593 = (i__54445 + (1));
seq__54442 = G__54590;
chunk__54443 = G__54591;
count__54444 = G__54592;
i__54445 = G__54593;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__54442);
if(temp__5735__auto____$1){
var seq__54442__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__54442__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54442__$1);
var G__54594 = cljs.core.chunk_rest(seq__54442__$1);
var G__54595 = c__4556__auto__;
var G__54596 = cljs.core.count(c__4556__auto__);
var G__54597 = (0);
seq__54442 = G__54594;
chunk__54443 = G__54595;
count__54444 = G__54596;
i__54445 = G__54597;
continue;
} else {
var role = cljs.core.first(seq__54442__$1);
var temp__5735__auto___54598__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54598__$2)){
var spec_54599 = temp__5735__auto___54598__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54599)], 0));
} else {
}


var G__54600 = cljs.core.next(seq__54442__$1);
var G__54601 = null;
var G__54602 = (0);
var G__54603 = (0);
seq__54442 = G__54600;
chunk__54443 = G__54601;
count__54444 = G__54602;
i__54445 = G__54603;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__54604 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__54605 = cljs.core.ex_cause(t);
via = G__54604;
t = G__54605;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__54456 = datafied_throwable;
var map__54456__$1 = (((((!((map__54456 == null))))?(((((map__54456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54456):map__54456);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54456__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54456__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54456__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__54457 = cljs.core.last(via);
var map__54457__$1 = (((((!((map__54457 == null))))?(((((map__54457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54457):map__54457);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54457__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54457__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54457__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__54458 = data;
var map__54458__$1 = (((((!((map__54458 == null))))?(((((map__54458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54458):map__54458);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54458__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54458__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54458__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__54459 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__54459__$1 = (((((!((map__54459 == null))))?(((((map__54459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54459):map__54459);
var top_data = map__54459__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54459__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__54464 = phase;
var G__54464__$1 = (((G__54464 instanceof cljs.core.Keyword))?G__54464.fqn:null);
switch (G__54464__$1) {
case "read-source":
var map__54465 = data;
var map__54465__$1 = (((((!((map__54465 == null))))?(((((map__54465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54465):map__54465);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54465__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54465__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__54467 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__54467__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54467,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54467);
var G__54467__$2 = (cljs.core.truth_((function (){var fexpr__54469 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54469.cljs$core$IFn$_invoke$arity$1 ? fexpr__54469.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54469.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54467__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54467__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54467__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54467__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__54470 = top_data;
var G__54470__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54470,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54470);
var G__54470__$2 = (cljs.core.truth_((function (){var fexpr__54471 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54471.cljs$core$IFn$_invoke$arity$1 ? fexpr__54471.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54471.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54470__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54470__$1);
var G__54470__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54470__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54470__$2);
var G__54470__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54470__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54470__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54470__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54470__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__54472 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54472,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54472,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54472,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54472,(3),null);
var G__54475 = top_data;
var G__54475__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54475,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__54475);
var G__54475__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54475__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__54475__$1);
var G__54475__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54475__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__54475__$2);
var G__54475__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54475__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54475__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54475__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54475__$4;
}

break;
case "execution":
var vec__54476 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54476,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54476,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54476,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54476,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54455_SHARP_){
var or__4126__auto__ = (p1__54455_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__54480 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54480.cljs$core$IFn$_invoke$arity$1 ? fexpr__54480.cljs$core$IFn$_invoke$arity$1(p1__54455_SHARP_) : fexpr__54480.call(null,p1__54455_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__54481 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__54481__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54481,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__54481);
var G__54481__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54481__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54481__$1);
var G__54481__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54481__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__54481__$2);
var G__54481__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54481__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__54481__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54481__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54481__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54464__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__54486){
var map__54487 = p__54486;
var map__54487__$1 = (((((!((map__54487 == null))))?(((((map__54487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54487):map__54487);
var triage_data = map__54487__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54487__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54487__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54487__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54487__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54487__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54487__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54487__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54487__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__54491 = phase;
var G__54491__$1 = (((G__54491 instanceof cljs.core.Keyword))?G__54491.fqn:null);
switch (G__54491__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__54492 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__54493 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54494 = loc;
var G__54495 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54497_54608 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54498_54609 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54499_54610 = true;
var _STAR_print_fn_STAR__temp_val__54500_54611 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54499_54610);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54500_54611);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54484_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54484_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54498_54609);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54497_54608);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54492,G__54493,G__54494,G__54495) : format.call(null,G__54492,G__54493,G__54494,G__54495));

break;
case "macroexpansion":
var G__54501 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__54502 = cause_type;
var G__54503 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54504 = loc;
var G__54505 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54501,G__54502,G__54503,G__54504,G__54505) : format.call(null,G__54501,G__54502,G__54503,G__54504,G__54505));

break;
case "compile-syntax-check":
var G__54506 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__54507 = cause_type;
var G__54508 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54509 = loc;
var G__54510 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54506,G__54507,G__54508,G__54509,G__54510) : format.call(null,G__54506,G__54507,G__54508,G__54509,G__54510));

break;
case "compilation":
var G__54511 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__54512 = cause_type;
var G__54513 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54514 = loc;
var G__54515 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54511,G__54512,G__54513,G__54514,G__54515) : format.call(null,G__54511,G__54512,G__54513,G__54514,G__54515));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__54516 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__54517 = symbol;
var G__54518 = loc;
var G__54519 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54523_54612 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54524_54613 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54525_54614 = true;
var _STAR_print_fn_STAR__temp_val__54526_54615 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54525_54614);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54526_54615);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54485_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54485_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54524_54613);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54523_54612);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54516,G__54517,G__54518,G__54519) : format.call(null,G__54516,G__54517,G__54518,G__54519));
} else {
var G__54530 = "Execution error%s at %s(%s).\n%s\n";
var G__54531 = cause_type;
var G__54532 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54533 = loc;
var G__54534 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54530,G__54531,G__54532,G__54533,G__54534) : format.call(null,G__54530,G__54531,G__54532,G__54533,G__54534));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54491__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
