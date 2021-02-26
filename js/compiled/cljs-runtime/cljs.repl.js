goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__54235){
var map__54236 = p__54235;
var map__54236__$1 = (((((!((map__54236 == null))))?(((((map__54236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54236):map__54236);
var m = map__54236__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54236__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54236__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__54238_54351 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54239_54352 = null;
var count__54240_54353 = (0);
var i__54241_54354 = (0);
while(true){
if((i__54241_54354 < count__54240_54353)){
var f_54355 = chunk__54239_54352.cljs$core$IIndexed$_nth$arity$2(null,i__54241_54354);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54355], 0));


var G__54356 = seq__54238_54351;
var G__54357 = chunk__54239_54352;
var G__54358 = count__54240_54353;
var G__54359 = (i__54241_54354 + (1));
seq__54238_54351 = G__54356;
chunk__54239_54352 = G__54357;
count__54240_54353 = G__54358;
i__54241_54354 = G__54359;
continue;
} else {
var temp__5735__auto___54360 = cljs.core.seq(seq__54238_54351);
if(temp__5735__auto___54360){
var seq__54238_54361__$1 = temp__5735__auto___54360;
if(cljs.core.chunked_seq_QMARK_(seq__54238_54361__$1)){
var c__4556__auto___54362 = cljs.core.chunk_first(seq__54238_54361__$1);
var G__54363 = cljs.core.chunk_rest(seq__54238_54361__$1);
var G__54364 = c__4556__auto___54362;
var G__54365 = cljs.core.count(c__4556__auto___54362);
var G__54366 = (0);
seq__54238_54351 = G__54363;
chunk__54239_54352 = G__54364;
count__54240_54353 = G__54365;
i__54241_54354 = G__54366;
continue;
} else {
var f_54367 = cljs.core.first(seq__54238_54361__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54367], 0));


var G__54368 = cljs.core.next(seq__54238_54361__$1);
var G__54369 = null;
var G__54370 = (0);
var G__54371 = (0);
seq__54238_54351 = G__54368;
chunk__54239_54352 = G__54369;
count__54240_54353 = G__54370;
i__54241_54354 = G__54371;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54372 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_54372], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_54372)))?cljs.core.second(arglists_54372):arglists_54372)], 0));
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
var seq__54242_54374 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54243_54375 = null;
var count__54244_54376 = (0);
var i__54245_54377 = (0);
while(true){
if((i__54245_54377 < count__54244_54376)){
var vec__54256_54378 = chunk__54243_54375.cljs$core$IIndexed$_nth$arity$2(null,i__54245_54377);
var name_54379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54256_54378,(0),null);
var map__54259_54380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54256_54378,(1),null);
var map__54259_54381__$1 = (((((!((map__54259_54380 == null))))?(((((map__54259_54380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54259_54380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54259_54380):map__54259_54380);
var doc_54382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54259_54381__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54259_54381__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54379], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54383], 0));

if(cljs.core.truth_(doc_54382)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54382], 0));
} else {
}


var G__54384 = seq__54242_54374;
var G__54385 = chunk__54243_54375;
var G__54386 = count__54244_54376;
var G__54387 = (i__54245_54377 + (1));
seq__54242_54374 = G__54384;
chunk__54243_54375 = G__54385;
count__54244_54376 = G__54386;
i__54245_54377 = G__54387;
continue;
} else {
var temp__5735__auto___54388 = cljs.core.seq(seq__54242_54374);
if(temp__5735__auto___54388){
var seq__54242_54389__$1 = temp__5735__auto___54388;
if(cljs.core.chunked_seq_QMARK_(seq__54242_54389__$1)){
var c__4556__auto___54390 = cljs.core.chunk_first(seq__54242_54389__$1);
var G__54391 = cljs.core.chunk_rest(seq__54242_54389__$1);
var G__54392 = c__4556__auto___54390;
var G__54393 = cljs.core.count(c__4556__auto___54390);
var G__54394 = (0);
seq__54242_54374 = G__54391;
chunk__54243_54375 = G__54392;
count__54244_54376 = G__54393;
i__54245_54377 = G__54394;
continue;
} else {
var vec__54261_54395 = cljs.core.first(seq__54242_54389__$1);
var name_54396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54261_54395,(0),null);
var map__54264_54397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54261_54395,(1),null);
var map__54264_54398__$1 = (((((!((map__54264_54397 == null))))?(((((map__54264_54397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54264_54397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54264_54397):map__54264_54397);
var doc_54399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54264_54398__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54264_54398__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54396], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54400], 0));

if(cljs.core.truth_(doc_54399)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54399], 0));
} else {
}


var G__54402 = cljs.core.next(seq__54242_54389__$1);
var G__54403 = null;
var G__54404 = (0);
var G__54405 = (0);
seq__54242_54374 = G__54402;
chunk__54243_54375 = G__54403;
count__54244_54376 = G__54404;
i__54245_54377 = G__54405;
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

var seq__54266 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__54267 = null;
var count__54268 = (0);
var i__54269 = (0);
while(true){
if((i__54269 < count__54268)){
var role = chunk__54267.cljs$core$IIndexed$_nth$arity$2(null,i__54269);
var temp__5735__auto___54414__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54414__$1)){
var spec_54415 = temp__5735__auto___54414__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54415)], 0));
} else {
}


var G__54416 = seq__54266;
var G__54417 = chunk__54267;
var G__54418 = count__54268;
var G__54419 = (i__54269 + (1));
seq__54266 = G__54416;
chunk__54267 = G__54417;
count__54268 = G__54418;
i__54269 = G__54419;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__54266);
if(temp__5735__auto____$1){
var seq__54266__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__54266__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54266__$1);
var G__54420 = cljs.core.chunk_rest(seq__54266__$1);
var G__54421 = c__4556__auto__;
var G__54422 = cljs.core.count(c__4556__auto__);
var G__54423 = (0);
seq__54266 = G__54420;
chunk__54267 = G__54421;
count__54268 = G__54422;
i__54269 = G__54423;
continue;
} else {
var role = cljs.core.first(seq__54266__$1);
var temp__5735__auto___54425__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54425__$2)){
var spec_54426 = temp__5735__auto___54425__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54426)], 0));
} else {
}


var G__54431 = cljs.core.next(seq__54266__$1);
var G__54432 = null;
var G__54433 = (0);
var G__54434 = (0);
seq__54266 = G__54431;
chunk__54267 = G__54432;
count__54268 = G__54433;
i__54269 = G__54434;
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
var map__54279 = datafied_throwable;
var map__54279__$1 = (((((!((map__54279 == null))))?(((((map__54279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54279):map__54279);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54279__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54279__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54279__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__54280 = cljs.core.last(via);
var map__54280__$1 = (((((!((map__54280 == null))))?(((((map__54280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54280):map__54280);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54280__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54280__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54280__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__54281 = data;
var map__54281__$1 = (((((!((map__54281 == null))))?(((((map__54281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54281):map__54281);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54281__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54281__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54281__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__54282 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__54282__$1 = (((((!((map__54282 == null))))?(((((map__54282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54282):map__54282);
var top_data = map__54282__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54282__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__54287 = phase;
var G__54287__$1 = (((G__54287 instanceof cljs.core.Keyword))?G__54287.fqn:null);
switch (G__54287__$1) {
case "read-source":
var map__54288 = data;
var map__54288__$1 = (((((!((map__54288 == null))))?(((((map__54288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54288):map__54288);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54288__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54288__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__54290 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__54290__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54290,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54290);
var G__54290__$2 = (cljs.core.truth_((function (){var fexpr__54291 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54291.cljs$core$IFn$_invoke$arity$1 ? fexpr__54291.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54291.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54290__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54290__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54290__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54290__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__54292 = top_data;
var G__54292__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54292,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54292);
var G__54292__$2 = (cljs.core.truth_((function (){var fexpr__54293 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54293.cljs$core$IFn$_invoke$arity$1 ? fexpr__54293.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54293.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54292__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54292__$1);
var G__54292__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54292__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54292__$2);
var G__54292__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54292__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54292__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54292__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54292__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__54294 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54294,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54294,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54294,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54294,(3),null);
var G__54297 = top_data;
var G__54297__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54297,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__54297);
var G__54297__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54297__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__54297__$1);
var G__54297__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54297__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__54297__$2);
var G__54297__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54297__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54297__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54297__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54297__$4;
}

break;
case "execution":
var vec__54298 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54298,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54298,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54298,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54298,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54274_SHARP_){
var or__4126__auto__ = (p1__54274_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__54302 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54302.cljs$core$IFn$_invoke$arity$1 ? fexpr__54302.cljs$core$IFn$_invoke$arity$1(p1__54274_SHARP_) : fexpr__54302.call(null,p1__54274_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__54303 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__54303__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54303,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__54303);
var G__54303__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54303__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54303__$1);
var G__54303__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54303__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__54303__$2);
var G__54303__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54303__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__54303__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54303__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54303__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54287__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__54306){
var map__54307 = p__54306;
var map__54307__$1 = (((((!((map__54307 == null))))?(((((map__54307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54307):map__54307);
var triage_data = map__54307__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54307__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54307__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54307__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54307__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54307__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54307__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54307__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54307__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__54309 = phase;
var G__54309__$1 = (((G__54309 instanceof cljs.core.Keyword))?G__54309.fqn:null);
switch (G__54309__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__54310 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__54311 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54312 = loc;
var G__54313 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54314_54477 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54315_54478 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54316_54479 = true;
var _STAR_print_fn_STAR__temp_val__54317_54480 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54316_54479);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54317_54480);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54304_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54304_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54315_54478);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54314_54477);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54310,G__54311,G__54312,G__54313) : format.call(null,G__54310,G__54311,G__54312,G__54313));

break;
case "macroexpansion":
var G__54318 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__54319 = cause_type;
var G__54320 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54321 = loc;
var G__54322 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54318,G__54319,G__54320,G__54321,G__54322) : format.call(null,G__54318,G__54319,G__54320,G__54321,G__54322));

break;
case "compile-syntax-check":
var G__54323 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__54324 = cause_type;
var G__54325 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54326 = loc;
var G__54327 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54323,G__54324,G__54325,G__54326,G__54327) : format.call(null,G__54323,G__54324,G__54325,G__54326,G__54327));

break;
case "compilation":
var G__54328 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__54329 = cause_type;
var G__54330 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54331 = loc;
var G__54332 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54328,G__54329,G__54330,G__54331,G__54332) : format.call(null,G__54328,G__54329,G__54330,G__54331,G__54332));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__54333 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__54334 = symbol;
var G__54335 = loc;
var G__54336 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54337_54481 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54338_54482 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54339_54483 = true;
var _STAR_print_fn_STAR__temp_val__54340_54484 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54339_54483);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54340_54484);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54305_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54305_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54338_54482);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54337_54481);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54333,G__54334,G__54335,G__54336) : format.call(null,G__54333,G__54334,G__54335,G__54336));
} else {
var G__54342 = "Execution error%s at %s(%s).\n%s\n";
var G__54343 = cause_type;
var G__54344 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54345 = loc;
var G__54346 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54342,G__54343,G__54344,G__54345,G__54346) : format.call(null,G__54342,G__54343,G__54344,G__54345,G__54346));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54309__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
