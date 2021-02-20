goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__54252){
var map__54253 = p__54252;
var map__54253__$1 = (((((!((map__54253 == null))))?(((((map__54253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54253):map__54253);
var m = map__54253__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54253__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54253__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__54255_54362 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54256_54363 = null;
var count__54257_54364 = (0);
var i__54258_54365 = (0);
while(true){
if((i__54258_54365 < count__54257_54364)){
var f_54366 = chunk__54256_54363.cljs$core$IIndexed$_nth$arity$2(null,i__54258_54365);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54366], 0));


var G__54367 = seq__54255_54362;
var G__54368 = chunk__54256_54363;
var G__54369 = count__54257_54364;
var G__54370 = (i__54258_54365 + (1));
seq__54255_54362 = G__54367;
chunk__54256_54363 = G__54368;
count__54257_54364 = G__54369;
i__54258_54365 = G__54370;
continue;
} else {
var temp__5735__auto___54371 = cljs.core.seq(seq__54255_54362);
if(temp__5735__auto___54371){
var seq__54255_54372__$1 = temp__5735__auto___54371;
if(cljs.core.chunked_seq_QMARK_(seq__54255_54372__$1)){
var c__4556__auto___54373 = cljs.core.chunk_first(seq__54255_54372__$1);
var G__54378 = cljs.core.chunk_rest(seq__54255_54372__$1);
var G__54379 = c__4556__auto___54373;
var G__54380 = cljs.core.count(c__4556__auto___54373);
var G__54381 = (0);
seq__54255_54362 = G__54378;
chunk__54256_54363 = G__54379;
count__54257_54364 = G__54380;
i__54258_54365 = G__54381;
continue;
} else {
var f_54382 = cljs.core.first(seq__54255_54372__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54382], 0));


var G__54383 = cljs.core.next(seq__54255_54372__$1);
var G__54384 = null;
var G__54385 = (0);
var G__54386 = (0);
seq__54255_54362 = G__54383;
chunk__54256_54363 = G__54384;
count__54257_54364 = G__54385;
i__54258_54365 = G__54386;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54387 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_54387], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_54387)))?cljs.core.second(arglists_54387):arglists_54387)], 0));
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
var seq__54259_54388 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54260_54389 = null;
var count__54261_54390 = (0);
var i__54262_54391 = (0);
while(true){
if((i__54262_54391 < count__54261_54390)){
var vec__54273_54392 = chunk__54260_54389.cljs$core$IIndexed$_nth$arity$2(null,i__54262_54391);
var name_54393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54273_54392,(0),null);
var map__54276_54394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54273_54392,(1),null);
var map__54276_54395__$1 = (((((!((map__54276_54394 == null))))?(((((map__54276_54394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54276_54394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54276_54394):map__54276_54394);
var doc_54396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54276_54395__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54276_54395__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54393], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54397], 0));

if(cljs.core.truth_(doc_54396)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54396], 0));
} else {
}


var G__54398 = seq__54259_54388;
var G__54399 = chunk__54260_54389;
var G__54400 = count__54261_54390;
var G__54401 = (i__54262_54391 + (1));
seq__54259_54388 = G__54398;
chunk__54260_54389 = G__54399;
count__54261_54390 = G__54400;
i__54262_54391 = G__54401;
continue;
} else {
var temp__5735__auto___54402 = cljs.core.seq(seq__54259_54388);
if(temp__5735__auto___54402){
var seq__54259_54403__$1 = temp__5735__auto___54402;
if(cljs.core.chunked_seq_QMARK_(seq__54259_54403__$1)){
var c__4556__auto___54404 = cljs.core.chunk_first(seq__54259_54403__$1);
var G__54405 = cljs.core.chunk_rest(seq__54259_54403__$1);
var G__54406 = c__4556__auto___54404;
var G__54407 = cljs.core.count(c__4556__auto___54404);
var G__54408 = (0);
seq__54259_54388 = G__54405;
chunk__54260_54389 = G__54406;
count__54261_54390 = G__54407;
i__54262_54391 = G__54408;
continue;
} else {
var vec__54278_54409 = cljs.core.first(seq__54259_54403__$1);
var name_54410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54278_54409,(0),null);
var map__54281_54411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54278_54409,(1),null);
var map__54281_54412__$1 = (((((!((map__54281_54411 == null))))?(((((map__54281_54411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54281_54411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54281_54411):map__54281_54411);
var doc_54413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54281_54412__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54281_54412__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54410], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54414], 0));

if(cljs.core.truth_(doc_54413)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54413], 0));
} else {
}


var G__54415 = cljs.core.next(seq__54259_54403__$1);
var G__54416 = null;
var G__54417 = (0);
var G__54418 = (0);
seq__54259_54388 = G__54415;
chunk__54260_54389 = G__54416;
count__54261_54390 = G__54417;
i__54262_54391 = G__54418;
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

var seq__54283 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__54284 = null;
var count__54285 = (0);
var i__54286 = (0);
while(true){
if((i__54286 < count__54285)){
var role = chunk__54284.cljs$core$IIndexed$_nth$arity$2(null,i__54286);
var temp__5735__auto___54419__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54419__$1)){
var spec_54420 = temp__5735__auto___54419__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54420)], 0));
} else {
}


var G__54421 = seq__54283;
var G__54422 = chunk__54284;
var G__54423 = count__54285;
var G__54424 = (i__54286 + (1));
seq__54283 = G__54421;
chunk__54284 = G__54422;
count__54285 = G__54423;
i__54286 = G__54424;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__54283);
if(temp__5735__auto____$1){
var seq__54283__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__54283__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54283__$1);
var G__54425 = cljs.core.chunk_rest(seq__54283__$1);
var G__54426 = c__4556__auto__;
var G__54427 = cljs.core.count(c__4556__auto__);
var G__54428 = (0);
seq__54283 = G__54425;
chunk__54284 = G__54426;
count__54285 = G__54427;
i__54286 = G__54428;
continue;
} else {
var role = cljs.core.first(seq__54283__$1);
var temp__5735__auto___54429__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54429__$2)){
var spec_54430 = temp__5735__auto___54429__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54430)], 0));
} else {
}


var G__54431 = cljs.core.next(seq__54283__$1);
var G__54432 = null;
var G__54433 = (0);
var G__54434 = (0);
seq__54283 = G__54431;
chunk__54284 = G__54432;
count__54285 = G__54433;
i__54286 = G__54434;
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
var G__54435 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__54436 = cljs.core.ex_cause(t);
via = G__54435;
t = G__54436;
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
var map__54292 = datafied_throwable;
var map__54292__$1 = (((((!((map__54292 == null))))?(((((map__54292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54292):map__54292);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54292__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54292__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54292__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__54293 = cljs.core.last(via);
var map__54293__$1 = (((((!((map__54293 == null))))?(((((map__54293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54293):map__54293);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54293__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54293__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54293__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__54294 = data;
var map__54294__$1 = (((((!((map__54294 == null))))?(((((map__54294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54294):map__54294);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54294__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54294__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54294__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__54295 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__54295__$1 = (((((!((map__54295 == null))))?(((((map__54295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54295):map__54295);
var top_data = map__54295__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54295__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__54300 = phase;
var G__54300__$1 = (((G__54300 instanceof cljs.core.Keyword))?G__54300.fqn:null);
switch (G__54300__$1) {
case "read-source":
var map__54301 = data;
var map__54301__$1 = (((((!((map__54301 == null))))?(((((map__54301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54301):map__54301);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54301__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54301__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__54303 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__54303__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54303,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54303);
var G__54303__$2 = (cljs.core.truth_((function (){var fexpr__54304 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54304.cljs$core$IFn$_invoke$arity$1 ? fexpr__54304.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54304.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54303__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54303__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54303__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54303__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__54305 = top_data;
var G__54305__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54305,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54305);
var G__54305__$2 = (cljs.core.truth_((function (){var fexpr__54306 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54306.cljs$core$IFn$_invoke$arity$1 ? fexpr__54306.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54306.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54305__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54305__$1);
var G__54305__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54305__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54305__$2);
var G__54305__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54305__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54305__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54305__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54305__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__54307 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54307,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54307,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54307,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54307,(3),null);
var G__54310 = top_data;
var G__54310__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54310,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__54310);
var G__54310__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54310__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__54310__$1);
var G__54310__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54310__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__54310__$2);
var G__54310__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54310__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54310__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54310__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54310__$4;
}

break;
case "execution":
var vec__54311 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54311,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54311,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54311,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54311,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54291_SHARP_){
var or__4126__auto__ = (p1__54291_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__54315 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54315.cljs$core$IFn$_invoke$arity$1 ? fexpr__54315.cljs$core$IFn$_invoke$arity$1(p1__54291_SHARP_) : fexpr__54315.call(null,p1__54291_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__54316 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__54316__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54316,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__54316);
var G__54316__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54316__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54316__$1);
var G__54316__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54316__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__54316__$2);
var G__54316__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54316__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__54316__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54316__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54316__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54300__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__54319){
var map__54320 = p__54319;
var map__54320__$1 = (((((!((map__54320 == null))))?(((((map__54320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54320):map__54320);
var triage_data = map__54320__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54320__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54320__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54320__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54320__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54320__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54320__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54320__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54320__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__54322 = phase;
var G__54322__$1 = (((G__54322 instanceof cljs.core.Keyword))?G__54322.fqn:null);
switch (G__54322__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__54323 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__54324 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54325 = loc;
var G__54326 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54330_54445 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54331_54446 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54332_54447 = true;
var _STAR_print_fn_STAR__temp_val__54333_54448 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54332_54447);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54333_54448);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54317_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54317_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54331_54446);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54330_54445);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54323,G__54324,G__54325,G__54326) : format.call(null,G__54323,G__54324,G__54325,G__54326));

break;
case "macroexpansion":
var G__54334 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__54335 = cause_type;
var G__54336 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54337 = loc;
var G__54338 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54334,G__54335,G__54336,G__54337,G__54338) : format.call(null,G__54334,G__54335,G__54336,G__54337,G__54338));

break;
case "compile-syntax-check":
var G__54339 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__54340 = cause_type;
var G__54341 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54342 = loc;
var G__54343 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54339,G__54340,G__54341,G__54342,G__54343) : format.call(null,G__54339,G__54340,G__54341,G__54342,G__54343));

break;
case "compilation":
var G__54344 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__54345 = cause_type;
var G__54346 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54347 = loc;
var G__54348 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54344,G__54345,G__54346,G__54347,G__54348) : format.call(null,G__54344,G__54345,G__54346,G__54347,G__54348));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__54349 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__54350 = symbol;
var G__54351 = loc;
var G__54352 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54353_54450 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54354_54451 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54355_54452 = true;
var _STAR_print_fn_STAR__temp_val__54356_54453 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54355_54452);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54356_54453);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54318_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54318_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54354_54451);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54353_54450);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54349,G__54350,G__54351,G__54352) : format.call(null,G__54349,G__54350,G__54351,G__54352));
} else {
var G__54357 = "Execution error%s at %s(%s).\n%s\n";
var G__54358 = cause_type;
var G__54359 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54360 = loc;
var G__54361 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54357,G__54358,G__54359,G__54360,G__54361) : format.call(null,G__54357,G__54358,G__54359,G__54360,G__54361));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54322__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
