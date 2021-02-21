goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__54227){
var map__54228 = p__54227;
var map__54228__$1 = (((((!((map__54228 == null))))?(((((map__54228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54228):map__54228);
var m = map__54228__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54228__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54228__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__54230_54337 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54231_54338 = null;
var count__54232_54339 = (0);
var i__54233_54340 = (0);
while(true){
if((i__54233_54340 < count__54232_54339)){
var f_54341 = chunk__54231_54338.cljs$core$IIndexed$_nth$arity$2(null,i__54233_54340);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54341], 0));


var G__54342 = seq__54230_54337;
var G__54343 = chunk__54231_54338;
var G__54344 = count__54232_54339;
var G__54345 = (i__54233_54340 + (1));
seq__54230_54337 = G__54342;
chunk__54231_54338 = G__54343;
count__54232_54339 = G__54344;
i__54233_54340 = G__54345;
continue;
} else {
var temp__5735__auto___54346 = cljs.core.seq(seq__54230_54337);
if(temp__5735__auto___54346){
var seq__54230_54347__$1 = temp__5735__auto___54346;
if(cljs.core.chunked_seq_QMARK_(seq__54230_54347__$1)){
var c__4556__auto___54348 = cljs.core.chunk_first(seq__54230_54347__$1);
var G__54349 = cljs.core.chunk_rest(seq__54230_54347__$1);
var G__54350 = c__4556__auto___54348;
var G__54351 = cljs.core.count(c__4556__auto___54348);
var G__54352 = (0);
seq__54230_54337 = G__54349;
chunk__54231_54338 = G__54350;
count__54232_54339 = G__54351;
i__54233_54340 = G__54352;
continue;
} else {
var f_54353 = cljs.core.first(seq__54230_54347__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54353], 0));


var G__54354 = cljs.core.next(seq__54230_54347__$1);
var G__54355 = null;
var G__54356 = (0);
var G__54357 = (0);
seq__54230_54337 = G__54354;
chunk__54231_54338 = G__54355;
count__54232_54339 = G__54356;
i__54233_54340 = G__54357;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54358 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_54358], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_54358)))?cljs.core.second(arglists_54358):arglists_54358)], 0));
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
var seq__54234_54363 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54235_54364 = null;
var count__54236_54365 = (0);
var i__54237_54366 = (0);
while(true){
if((i__54237_54366 < count__54236_54365)){
var vec__54248_54367 = chunk__54235_54364.cljs$core$IIndexed$_nth$arity$2(null,i__54237_54366);
var name_54368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54248_54367,(0),null);
var map__54251_54369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54248_54367,(1),null);
var map__54251_54370__$1 = (((((!((map__54251_54369 == null))))?(((((map__54251_54369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54251_54369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54251_54369):map__54251_54369);
var doc_54371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54251_54370__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54251_54370__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54368], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54372], 0));

if(cljs.core.truth_(doc_54371)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54371], 0));
} else {
}


var G__54373 = seq__54234_54363;
var G__54374 = chunk__54235_54364;
var G__54375 = count__54236_54365;
var G__54376 = (i__54237_54366 + (1));
seq__54234_54363 = G__54373;
chunk__54235_54364 = G__54374;
count__54236_54365 = G__54375;
i__54237_54366 = G__54376;
continue;
} else {
var temp__5735__auto___54377 = cljs.core.seq(seq__54234_54363);
if(temp__5735__auto___54377){
var seq__54234_54378__$1 = temp__5735__auto___54377;
if(cljs.core.chunked_seq_QMARK_(seq__54234_54378__$1)){
var c__4556__auto___54379 = cljs.core.chunk_first(seq__54234_54378__$1);
var G__54380 = cljs.core.chunk_rest(seq__54234_54378__$1);
var G__54381 = c__4556__auto___54379;
var G__54382 = cljs.core.count(c__4556__auto___54379);
var G__54383 = (0);
seq__54234_54363 = G__54380;
chunk__54235_54364 = G__54381;
count__54236_54365 = G__54382;
i__54237_54366 = G__54383;
continue;
} else {
var vec__54253_54384 = cljs.core.first(seq__54234_54378__$1);
var name_54385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54253_54384,(0),null);
var map__54256_54386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54253_54384,(1),null);
var map__54256_54387__$1 = (((((!((map__54256_54386 == null))))?(((((map__54256_54386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54256_54386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54256_54386):map__54256_54386);
var doc_54388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54256_54387__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54256_54387__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54385], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54389], 0));

if(cljs.core.truth_(doc_54388)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54388], 0));
} else {
}


var G__54390 = cljs.core.next(seq__54234_54378__$1);
var G__54391 = null;
var G__54392 = (0);
var G__54393 = (0);
seq__54234_54363 = G__54390;
chunk__54235_54364 = G__54391;
count__54236_54365 = G__54392;
i__54237_54366 = G__54393;
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

var seq__54258 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__54259 = null;
var count__54260 = (0);
var i__54261 = (0);
while(true){
if((i__54261 < count__54260)){
var role = chunk__54259.cljs$core$IIndexed$_nth$arity$2(null,i__54261);
var temp__5735__auto___54394__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54394__$1)){
var spec_54395 = temp__5735__auto___54394__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54395)], 0));
} else {
}


var G__54396 = seq__54258;
var G__54397 = chunk__54259;
var G__54398 = count__54260;
var G__54399 = (i__54261 + (1));
seq__54258 = G__54396;
chunk__54259 = G__54397;
count__54260 = G__54398;
i__54261 = G__54399;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__54258);
if(temp__5735__auto____$1){
var seq__54258__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__54258__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54258__$1);
var G__54400 = cljs.core.chunk_rest(seq__54258__$1);
var G__54401 = c__4556__auto__;
var G__54402 = cljs.core.count(c__4556__auto__);
var G__54403 = (0);
seq__54258 = G__54400;
chunk__54259 = G__54401;
count__54260 = G__54402;
i__54261 = G__54403;
continue;
} else {
var role = cljs.core.first(seq__54258__$1);
var temp__5735__auto___54404__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54404__$2)){
var spec_54405 = temp__5735__auto___54404__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54405)], 0));
} else {
}


var G__54406 = cljs.core.next(seq__54258__$1);
var G__54407 = null;
var G__54408 = (0);
var G__54409 = (0);
seq__54258 = G__54406;
chunk__54259 = G__54407;
count__54260 = G__54408;
i__54261 = G__54409;
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
var G__54410 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__54411 = cljs.core.ex_cause(t);
via = G__54410;
t = G__54411;
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
var map__54267 = datafied_throwable;
var map__54267__$1 = (((((!((map__54267 == null))))?(((((map__54267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54267):map__54267);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54267__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54267__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54267__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__54268 = cljs.core.last(via);
var map__54268__$1 = (((((!((map__54268 == null))))?(((((map__54268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54268):map__54268);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54268__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54268__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54268__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__54269 = data;
var map__54269__$1 = (((((!((map__54269 == null))))?(((((map__54269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54269):map__54269);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54269__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54269__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54269__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__54270 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__54270__$1 = (((((!((map__54270 == null))))?(((((map__54270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54270):map__54270);
var top_data = map__54270__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54270__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__54275 = phase;
var G__54275__$1 = (((G__54275 instanceof cljs.core.Keyword))?G__54275.fqn:null);
switch (G__54275__$1) {
case "read-source":
var map__54276 = data;
var map__54276__$1 = (((((!((map__54276 == null))))?(((((map__54276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54276):map__54276);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54276__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54276__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__54278 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__54278__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54278,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54278);
var G__54278__$2 = (cljs.core.truth_((function (){var fexpr__54279 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54279.cljs$core$IFn$_invoke$arity$1 ? fexpr__54279.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54279.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54278__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54278__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54278__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54278__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__54280 = top_data;
var G__54280__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54280,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54280);
var G__54280__$2 = (cljs.core.truth_((function (){var fexpr__54281 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54281.cljs$core$IFn$_invoke$arity$1 ? fexpr__54281.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54281.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54280__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54280__$1);
var G__54280__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54280__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54280__$2);
var G__54280__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54280__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54280__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54280__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54280__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__54282 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54282,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54282,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54282,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54282,(3),null);
var G__54285 = top_data;
var G__54285__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54285,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__54285);
var G__54285__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54285__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__54285__$1);
var G__54285__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54285__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__54285__$2);
var G__54285__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54285__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54285__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54285__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54285__$4;
}

break;
case "execution":
var vec__54286 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54286,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54286,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54286,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54286,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54266_SHARP_){
var or__4126__auto__ = (p1__54266_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__54290 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54290.cljs$core$IFn$_invoke$arity$1 ? fexpr__54290.cljs$core$IFn$_invoke$arity$1(p1__54266_SHARP_) : fexpr__54290.call(null,p1__54266_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__54291 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__54291__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54291,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__54291);
var G__54291__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54291__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54291__$1);
var G__54291__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54291__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__54291__$2);
var G__54291__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54291__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__54291__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54291__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54291__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54275__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__54294){
var map__54295 = p__54294;
var map__54295__$1 = (((((!((map__54295 == null))))?(((((map__54295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54295):map__54295);
var triage_data = map__54295__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54295__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54295__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54295__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54295__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54295__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54295__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54295__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54295__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__54297 = phase;
var G__54297__$1 = (((G__54297 instanceof cljs.core.Keyword))?G__54297.fqn:null);
switch (G__54297__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__54298 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__54299 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54300 = loc;
var G__54301 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54302_54419 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54303_54420 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54304_54421 = true;
var _STAR_print_fn_STAR__temp_val__54305_54422 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54304_54421);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54305_54422);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54292_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54292_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54303_54420);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54302_54419);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54298,G__54299,G__54300,G__54301) : format.call(null,G__54298,G__54299,G__54300,G__54301));

break;
case "macroexpansion":
var G__54306 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__54307 = cause_type;
var G__54308 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54309 = loc;
var G__54310 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54306,G__54307,G__54308,G__54309,G__54310) : format.call(null,G__54306,G__54307,G__54308,G__54309,G__54310));

break;
case "compile-syntax-check":
var G__54311 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__54312 = cause_type;
var G__54313 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54314 = loc;
var G__54315 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54311,G__54312,G__54313,G__54314,G__54315) : format.call(null,G__54311,G__54312,G__54313,G__54314,G__54315));

break;
case "compilation":
var G__54319 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__54320 = cause_type;
var G__54321 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54322 = loc;
var G__54323 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54319,G__54320,G__54321,G__54322,G__54323) : format.call(null,G__54319,G__54320,G__54321,G__54322,G__54323));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__54324 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__54325 = symbol;
var G__54326 = loc;
var G__54327 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54328_54424 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54329_54425 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54330_54426 = true;
var _STAR_print_fn_STAR__temp_val__54331_54427 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54330_54426);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54331_54427);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54293_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54293_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54329_54425);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54328_54424);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54324,G__54325,G__54326,G__54327) : format.call(null,G__54324,G__54325,G__54326,G__54327));
} else {
var G__54332 = "Execution error%s at %s(%s).\n%s\n";
var G__54333 = cause_type;
var G__54334 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54335 = loc;
var G__54336 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54332,G__54333,G__54334,G__54335,G__54336) : format.call(null,G__54332,G__54333,G__54334,G__54335,G__54336));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54297__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
