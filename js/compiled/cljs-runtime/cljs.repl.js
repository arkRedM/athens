goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__54233){
var map__54234 = p__54233;
var map__54234__$1 = (((((!((map__54234 == null))))?(((((map__54234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54234):map__54234);
var m = map__54234__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54234__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54234__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__54236_54374 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54237_54375 = null;
var count__54238_54376 = (0);
var i__54239_54377 = (0);
while(true){
if((i__54239_54377 < count__54238_54376)){
var f_54378 = chunk__54237_54375.cljs$core$IIndexed$_nth$arity$2(null,i__54239_54377);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54378], 0));


var G__54379 = seq__54236_54374;
var G__54380 = chunk__54237_54375;
var G__54381 = count__54238_54376;
var G__54382 = (i__54239_54377 + (1));
seq__54236_54374 = G__54379;
chunk__54237_54375 = G__54380;
count__54238_54376 = G__54381;
i__54239_54377 = G__54382;
continue;
} else {
var temp__5735__auto___54383 = cljs.core.seq(seq__54236_54374);
if(temp__5735__auto___54383){
var seq__54236_54388__$1 = temp__5735__auto___54383;
if(cljs.core.chunked_seq_QMARK_(seq__54236_54388__$1)){
var c__4556__auto___54389 = cljs.core.chunk_first(seq__54236_54388__$1);
var G__54393 = cljs.core.chunk_rest(seq__54236_54388__$1);
var G__54394 = c__4556__auto___54389;
var G__54395 = cljs.core.count(c__4556__auto___54389);
var G__54396 = (0);
seq__54236_54374 = G__54393;
chunk__54237_54375 = G__54394;
count__54238_54376 = G__54395;
i__54239_54377 = G__54396;
continue;
} else {
var f_54397 = cljs.core.first(seq__54236_54388__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54397], 0));


var G__54398 = cljs.core.next(seq__54236_54388__$1);
var G__54399 = null;
var G__54400 = (0);
var G__54401 = (0);
seq__54236_54374 = G__54398;
chunk__54237_54375 = G__54399;
count__54238_54376 = G__54400;
i__54239_54377 = G__54401;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54402 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_54402], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_54402)))?cljs.core.second(arglists_54402):arglists_54402)], 0));
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
var seq__54244_54421 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54245_54422 = null;
var count__54246_54423 = (0);
var i__54247_54424 = (0);
while(true){
if((i__54247_54424 < count__54246_54423)){
var vec__54258_54425 = chunk__54245_54422.cljs$core$IIndexed$_nth$arity$2(null,i__54247_54424);
var name_54426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54258_54425,(0),null);
var map__54261_54427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54258_54425,(1),null);
var map__54261_54428__$1 = (((((!((map__54261_54427 == null))))?(((((map__54261_54427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54261_54427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54261_54427):map__54261_54427);
var doc_54429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54261_54428__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54261_54428__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54426], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54430], 0));

if(cljs.core.truth_(doc_54429)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54429], 0));
} else {
}


var G__54431 = seq__54244_54421;
var G__54432 = chunk__54245_54422;
var G__54433 = count__54246_54423;
var G__54434 = (i__54247_54424 + (1));
seq__54244_54421 = G__54431;
chunk__54245_54422 = G__54432;
count__54246_54423 = G__54433;
i__54247_54424 = G__54434;
continue;
} else {
var temp__5735__auto___54435 = cljs.core.seq(seq__54244_54421);
if(temp__5735__auto___54435){
var seq__54244_54436__$1 = temp__5735__auto___54435;
if(cljs.core.chunked_seq_QMARK_(seq__54244_54436__$1)){
var c__4556__auto___54437 = cljs.core.chunk_first(seq__54244_54436__$1);
var G__54438 = cljs.core.chunk_rest(seq__54244_54436__$1);
var G__54439 = c__4556__auto___54437;
var G__54440 = cljs.core.count(c__4556__auto___54437);
var G__54441 = (0);
seq__54244_54421 = G__54438;
chunk__54245_54422 = G__54439;
count__54246_54423 = G__54440;
i__54247_54424 = G__54441;
continue;
} else {
var vec__54263_54442 = cljs.core.first(seq__54244_54436__$1);
var name_54443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54263_54442,(0),null);
var map__54266_54444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54263_54442,(1),null);
var map__54266_54445__$1 = (((((!((map__54266_54444 == null))))?(((((map__54266_54444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54266_54444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54266_54444):map__54266_54444);
var doc_54446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54266_54445__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54266_54445__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54443], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54447], 0));

if(cljs.core.truth_(doc_54446)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54446], 0));
} else {
}


var G__54448 = cljs.core.next(seq__54244_54436__$1);
var G__54449 = null;
var G__54450 = (0);
var G__54451 = (0);
seq__54244_54421 = G__54448;
chunk__54245_54422 = G__54449;
count__54246_54423 = G__54450;
i__54247_54424 = G__54451;
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

var seq__54268 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__54269 = null;
var count__54270 = (0);
var i__54271 = (0);
while(true){
if((i__54271 < count__54270)){
var role = chunk__54269.cljs$core$IIndexed$_nth$arity$2(null,i__54271);
var temp__5735__auto___54452__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54452__$1)){
var spec_54453 = temp__5735__auto___54452__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54453)], 0));
} else {
}


var G__54454 = seq__54268;
var G__54455 = chunk__54269;
var G__54456 = count__54270;
var G__54457 = (i__54271 + (1));
seq__54268 = G__54454;
chunk__54269 = G__54455;
count__54270 = G__54456;
i__54271 = G__54457;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__54268);
if(temp__5735__auto____$1){
var seq__54268__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__54268__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54268__$1);
var G__54458 = cljs.core.chunk_rest(seq__54268__$1);
var G__54459 = c__4556__auto__;
var G__54460 = cljs.core.count(c__4556__auto__);
var G__54461 = (0);
seq__54268 = G__54458;
chunk__54269 = G__54459;
count__54270 = G__54460;
i__54271 = G__54461;
continue;
} else {
var role = cljs.core.first(seq__54268__$1);
var temp__5735__auto___54462__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54462__$2)){
var spec_54463 = temp__5735__auto___54462__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54463)], 0));
} else {
}


var G__54464 = cljs.core.next(seq__54268__$1);
var G__54465 = null;
var G__54466 = (0);
var G__54467 = (0);
seq__54268 = G__54464;
chunk__54269 = G__54465;
count__54270 = G__54466;
i__54271 = G__54467;
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
var G__54468 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__54469 = cljs.core.ex_cause(t);
via = G__54468;
t = G__54469;
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
var map__54275 = datafied_throwable;
var map__54275__$1 = (((((!((map__54275 == null))))?(((((map__54275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54275):map__54275);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54275__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54275__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54275__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__54276 = cljs.core.last(via);
var map__54276__$1 = (((((!((map__54276 == null))))?(((((map__54276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54276):map__54276);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54276__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54276__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54276__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__54277 = data;
var map__54277__$1 = (((((!((map__54277 == null))))?(((((map__54277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54277):map__54277);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54277__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54277__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54277__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__54278 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__54278__$1 = (((((!((map__54278 == null))))?(((((map__54278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54278):map__54278);
var top_data = map__54278__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54278__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
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
var G__54292__$2 = (cljs.core.truth_((function (){var fexpr__54294 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54294.cljs$core$IFn$_invoke$arity$1 ? fexpr__54294.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54294.call(null,source));
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
var vec__54295 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54295,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54295,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54295,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54295,(3),null);
var G__54298 = top_data;
var G__54298__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54298,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__54298);
var G__54298__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54298__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__54298__$1);
var G__54298__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54298__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__54298__$2);
var G__54298__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54298__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54298__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54298__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54298__$4;
}

break;
case "execution":
var vec__54299 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54299,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54299,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54299,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54299,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54274_SHARP_){
var or__4126__auto__ = (p1__54274_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__54304 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54304.cljs$core$IFn$_invoke$arity$1 ? fexpr__54304.cljs$core$IFn$_invoke$arity$1(p1__54274_SHARP_) : fexpr__54304.call(null,p1__54274_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__54305 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__54305__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54305,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__54305);
var G__54305__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54305__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54305__$1);
var G__54305__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54305__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__54305__$2);
var G__54305__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54305__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__54305__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54305__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54305__$4;
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
cljs.repl.ex_str = (function cljs$repl$ex_str(p__54321){
var map__54322 = p__54321;
var map__54322__$1 = (((((!((map__54322 == null))))?(((((map__54322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54322):map__54322);
var triage_data = map__54322__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54322__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54322__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54322__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54322__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54322__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54322__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54322__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54322__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__54324 = phase;
var G__54324__$1 = (((G__54324 instanceof cljs.core.Keyword))?G__54324.fqn:null);
switch (G__54324__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__54325 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__54326 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54327 = loc;
var G__54328 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54329_54503 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54330_54504 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54331_54505 = true;
var _STAR_print_fn_STAR__temp_val__54332_54506 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54331_54505);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54332_54506);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54315_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54315_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54330_54504);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54329_54503);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54325,G__54326,G__54327,G__54328) : format.call(null,G__54325,G__54326,G__54327,G__54328));

break;
case "macroexpansion":
var G__54333 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__54334 = cause_type;
var G__54335 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54336 = loc;
var G__54337 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54333,G__54334,G__54335,G__54336,G__54337) : format.call(null,G__54333,G__54334,G__54335,G__54336,G__54337));

break;
case "compile-syntax-check":
var G__54338 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__54339 = cause_type;
var G__54340 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54341 = loc;
var G__54342 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54338,G__54339,G__54340,G__54341,G__54342) : format.call(null,G__54338,G__54339,G__54340,G__54341,G__54342));

break;
case "compilation":
var G__54343 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__54344 = cause_type;
var G__54345 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54346 = loc;
var G__54347 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54343,G__54344,G__54345,G__54346,G__54347) : format.call(null,G__54343,G__54344,G__54345,G__54346,G__54347));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__54348 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__54349 = symbol;
var G__54350 = loc;
var G__54351 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54352_54532 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54353_54533 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54354_54534 = true;
var _STAR_print_fn_STAR__temp_val__54355_54535 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54354_54534);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54355_54535);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54316_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54316_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54353_54533);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54352_54532);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54348,G__54349,G__54350,G__54351) : format.call(null,G__54348,G__54349,G__54350,G__54351));
} else {
var G__54356 = "Execution error%s at %s(%s).\n%s\n";
var G__54357 = cause_type;
var G__54358 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54359 = loc;
var G__54360 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54356,G__54357,G__54358,G__54359,G__54360) : format.call(null,G__54356,G__54357,G__54358,G__54359,G__54360));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54324__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
