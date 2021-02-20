goog.provide('sci.impl.interpreter');

sci.impl.interpreter.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.interpreter.eval_and = (function sci$impl$interpreter$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__68382 = xs;
args__$2 = G__68382;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.interpreter.eval_or = (function sci$impl$interpreter$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__68383 = xs;
args__$2 = G__68383;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.interpreter.eval_let = (function sci$impl$interpreter$eval_let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___68384 = arguments.length;
var i__4737__auto___68385 = (0);
while(true){
if((i__4737__auto___68385 < len__4736__auto___68384)){
args__4742__auto__.push((arguments[i__4737__auto___68385]));

var G__68386 = (i__4737__auto___68385 + (1));
i__4737__auto___68385 = G__68386;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var val_tag = (function (){var temp__5735__auto__ = cljs.core.meta(let_val);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
var let_name__$1 = (cljs.core.truth_(val_tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(let_name,cljs.core.update,new cljs.core.Keyword(null,"tag","tag",-1290361223),((function (ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag){
return (function (t){
if(cljs.core.truth_(t)){
return t;
} else {
return val_tag;
}
});})(ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag))
):let_name);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.interpreter.interpret.call(null,ctx__$1,let_val));
var ctx__$2 = cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),let_name__$1], null),v);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__68387 = ctx__$2;
var G__68388 = rest_let_bindings;
ctx__$1 = G__68387;
let_bindings__$1 = G__68388;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.interpreter.interpret.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__68389 = nexprs;
exprs__$1 = G__68389;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
}));

(sci.impl.interpreter.eval_let.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq67624){
var G__67625 = cljs.core.first(seq67624);
var seq67624__$1 = cljs.core.next(seq67624);
var G__67626 = cljs.core.first(seq67624__$1);
var seq67624__$2 = cljs.core.next(seq67624__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67625,G__67626,seq67624__$2);
}));

sci.impl.interpreter.eval_if = (function sci$impl$interpreter$eval_if(ctx,expr){
var cond = cljs.core.first(expr);
var expr__$1 = cljs.core.rest(expr);
var then = cljs.core.first(expr__$1);
var expr__$2 = cljs.core.rest(expr__$1);
var else$ = cljs.core.first(expr__$2);
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.interpreter.interpret.call(null,ctx,then));
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.interpreter.interpret.call(null,ctx,else$));
}
});
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__67631){
var vec__67632 = p__67631;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67632,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67632,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67632,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67632,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.interpreter.interpret.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev)):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__67635 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__67635,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__67635;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.interpreter.resolve_symbol = (function sci$impl$interpreter$resolve_symbol(ctx,sym){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var temp__5733__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.second(v);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"\nks:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx)))].join(''),sym);
}
});
sci.impl.interpreter.parse_libspec = (function sci$impl$interpreter$parse_libspec(libspec){
if(cljs.core.sequential_QMARK_(libspec)){
var vec__67636 = libspec;
var seq__67637 = cljs.core.seq(vec__67636);
var first__67638 = cljs.core.first(seq__67637);
var seq__67637__$1 = cljs.core.next(seq__67637);
var lib_name = first__67638;
var opts = seq__67637__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__67642 = opts;
var vec__67644 = G__67642;
var seq__67645 = cljs.core.seq(vec__67644);
var first__67646 = cljs.core.first(seq__67645);
var seq__67645__$1 = cljs.core.next(seq__67645);
var opt_name = first__67646;
var first__67646__$1 = cljs.core.first(seq__67645__$1);
var seq__67645__$2 = cljs.core.next(seq__67645__$1);
var fst_opt = first__67646__$1;
var rst_opts = seq__67645__$2;
var ret__$1 = ret;
var G__67642__$1 = G__67642;
while(true){
var ret__$2 = ret__$1;
var vec__67653 = G__67642__$1;
var seq__67654 = cljs.core.seq(vec__67653);
var first__67655 = cljs.core.first(seq__67654);
var seq__67654__$1 = cljs.core.next(seq__67654);
var opt_name__$1 = first__67655;
var first__67655__$1 = cljs.core.first(seq__67654__$1);
var seq__67654__$2 = cljs.core.next(seq__67654__$1);
var fst_opt__$1 = first__67655__$1;
var rst_opts__$1 = seq__67654__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__67656 = opt_name__$1;
var G__67656__$1 = (((G__67656 instanceof cljs.core.Keyword))?G__67656.fqn:null);
switch (G__67656__$1) {
case "as":
var G__68391 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__68392 = rst_opts__$1;
ret__$1 = G__68391;
G__67642__$1 = G__68392;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__68393 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__68394 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__68393;
G__67642__$1 = G__68394;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__68395 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__68396 = rst_opts__$1;
ret__$1 = G__68395;
G__67642__$1 = G__68396;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67656__$1)].join('')));

}
}
break;
}
} else {
if((libspec instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),libspec], null);
} else {
throw (new Error(["Invalid libspec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)].join('')));

}
}
});
sci.impl.interpreter.handle_refer_all = (function sci$impl$interpreter$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__67661){
var vec__67662 = p__67661;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67662,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67662,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4115__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4115__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__67665){
var map__67666 = p__67665;
var map__67666__$1 = (((((!((map__67666 == null))))?(((((map__67666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67666):map__67666);
var _parsed_libspec = map__67666__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67666__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67666__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67666__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67666__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67666__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4126__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4126__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),refer) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"all","all",892129742),refer));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return use_QMARK_;
}
})())?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__67668 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67668,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67668,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use_QMARK_)?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
return env__$1;
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,libspec){
var map__67671 = sci.impl.interpreter.parse_libspec(libspec);
var map__67671__$1 = (((((!((map__67671 == null))))?(((((map__67671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67671):map__67671);
var parsed_libspec = map__67671__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67671__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67671__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var use_QMARK_ = new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881).cljs$core$IFn$_invoke$arity$1(ctx);
var temp__5733__auto__ = (cljs.core.truth_(reload)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name));
if(cljs.core.truth_(temp__5733__auto__)){
var the_loaded_ns = temp__5733__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5733__auto____$1)){
var load_fn = temp__5733__auto____$1;
var temp__5733__auto____$2 = (function (){var G__67673 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__67673) : load_fn.call(null,G__67673));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__67674 = temp__5733__auto____$2;
var map__67674__$1 = (((((!((map__67674 == null))))?(((((map__67674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67674):map__67674);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67674__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67674__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__67678_68397 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__67679_68398 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__67678_68397,G__67679_68398) : sci.impl.interpreter.eval_string_STAR_.call(null,G__67678_68397,G__67679_68398));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e67676){if((e67676 instanceof Error)){
var e_68399 = e67676;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_68399;
} else {
throw e67676;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4126__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
});
sci.impl.interpreter.eval_require = (function sci$impl$interpreter$eval_require(var_args){
var args__4742__auto__ = [];
var len__4736__auto___68400 = arguments.length;
var i__4737__auto___68401 = (0);
while(true){
if((i__4737__auto___68401 < len__4736__auto___68400)){
args__4742__auto__.push((arguments[i__4737__auto___68401]));

var G__68402 = (i__4737__auto___68401 + (1));
i__4737__auto___68401 = G__68402;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(cljs.core.truth_(args__$1)){
var ret = (function (){var G__67695 = ctx;
var G__67696 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67695,G__67696) : sci.impl.interpreter.interpret.call(null,G__67695,G__67696));
})();
if((ret instanceof cljs.core.Symbol)){
var G__68403 = (function (){var G__67697 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__67697,current_libspec);
} else {
return G__67697;
}
})();
var G__68404 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__68405 = cljs.core.next(args__$1);
libspecs = G__68403;
current_libspec = G__68404;
args__$1 = G__68405;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__68406 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__68407 = null;
var G__68408 = cljs.core.next(args__$1);
libspecs = G__68406;
current_libspec = G__68407;
args__$1 = G__68408;
continue;
} else {
var G__68409 = (function (){var G__67698 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__67698,current_libspec);
} else {
return G__67698;
}
})();
var G__68410 = ret;
var G__68411 = cljs.core.next(args__$1);
libspecs = G__68409;
current_libspec = G__68410;
args__$1 = G__68411;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__67700 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__67700,current_libspec);
} else {
return G__67700;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__67680_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__67680_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq67681){
var G__67682 = cljs.core.first(seq67681);
var seq67681__$1 = cljs.core.next(seq67681);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67682,seq67681__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___68412 = arguments.length;
var i__4737__auto___68413 = (0);
while(true){
if((i__4737__auto___68413 < len__4736__auto___68412)){
args__4742__auto__.push((arguments[i__4737__auto___68413]));

var G__68414 = (i__4737__auto___68413 + (1));
i__4737__auto___68413 = G__68414;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881),true),args);
}));

(sci.impl.interpreter.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq67701){
var G__67702 = cljs.core.first(seq67701);
var seq67701__$1 = cljs.core.next(seq67701);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67702,seq67701__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__67706){
var vec__67707 = p__67706;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67707,(0),null);
var map__67710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67707,(1),null);
var map__67710__$1 = (((((!((map__67710 == null))))?(((((map__67710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67710):map__67710);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67710__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67710__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67710__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__67716 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67716,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67716,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__67719 = ctx;
var G__67720 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67719,G__67720) : sci.impl.interpreter.interpret.call(null,G__67719,G__67720));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__67729 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__67729__$1 = (((((!((map__67729 == null))))?(((((map__67729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67729):map__67729);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67729__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67729__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67729__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__67740 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__67741 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__67741);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__67740);
}}catch (e67734){if((e67734 instanceof Error)){
var e = e67734;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__67735 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__67736 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67735,G__67736) : sci.impl.interpreter.interpret.call(null,G__67735,G__67736));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__67737 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67737,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67737,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e67734;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__67742){
var vec__67743 = p__67742;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67743,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67743,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67746_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67746_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67746_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__67748){
var vec__67749 = p__67748;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67749,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67749,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67749,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67747_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67747_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67747_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__67754,p__67755){
var map__67756 = p__67754;
var map__67756__$1 = (((((!((map__67756 == null))))?(((((map__67756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67756):map__67756);
var ctx = map__67756__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67756__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__67757 = p__67755;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67757,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67757,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67757,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67757,(3),null);
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
var instance_class = (function (){var or__4126__auto__ = tag_class;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67753_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67753_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67753_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__67761){
var vec__67762 = p__67761;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67762,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67762,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__67765){
var vec__67766 = p__67765;
var seq__67767 = cljs.core.seq(vec__67766);
var first__67768 = cljs.core.first(seq__67767);
var seq__67767__$1 = cljs.core.next(seq__67767);
var _ = first__67768;
var first__67768__$1 = cljs.core.first(seq__67767__$1);
var seq__67767__$2 = cljs.core.next(seq__67767__$1);
var ns_sym = first__67768__$1;
var exprs = seq__67767__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__67769 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67769,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67769,(1),null);
var G__67772_68415 = k;
var G__67772_68416__$1 = (((G__67772_68415 instanceof cljs.core.Keyword))?G__67772_68415.fqn:null);
switch (G__67772_68416__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__67772_68415,G__67772_68416__$1,vec__67769,k,v,ns_sym__$1,vec__67766,seq__67767,first__67768,seq__67767__$1,_,first__67768__$1,seq__67767__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__67772_68415,G__67772_68416__$1,vec__67769,k,v,ns_sym__$1,vec__67766,seq__67767,first__67768,seq__67767__$1,_,first__67768__$1,seq__67767__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67772_68416__$1)].join('')));

}

var G__68418 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__68418;
continue;
} else {
return null;
}
break;
}
});
sci.impl.interpreter.eval_resolve = (function sci$impl$interpreter$eval_resolve(ctx,sym){
var sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
return cljs.core.second(sci.impl.analyzer.lookup(ctx,sym__$1,false));
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.interpreter.eval_resolve);
sci.impl.interpreter.macroexpand_1 = (function sci$impl$interpreter$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return sci.impl.analyzer.analyze(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true),expr);
} else {
var f = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.interpreter.macroexpand = (function sci$impl$interpreter$macroexpand(ctx,form){
var ex = sci.impl.interpreter.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.macroexpand.call(null,ctx,ex));
}
});
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__67773){
var vec__67774 = p__67773;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67774,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67774,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67774,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__67780 = exprs;
var vec__67781 = G__67780;
var seq__67782 = cljs.core.seq(vec__67781);
var first__67783 = cljs.core.first(seq__67782);
var seq__67782__$1 = cljs.core.next(seq__67782);
var expr = first__67783;
var exprs__$1 = seq__67782__$1;
var G__67780__$1 = G__67780;
while(true){
var vec__67784 = G__67780__$1;
var seq__67785 = cljs.core.seq(vec__67784);
var first__67786 = cljs.core.first(seq__67785);
var seq__67785__$1 = cljs.core.next(seq__67785);
var expr__$1 = first__67786;
var exprs__$2 = seq__67785__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e67787){if((e67787 instanceof Error)){
var e = e67787;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e67787;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__68419 = exprs__$3;
G__67780__$1 = G__68419;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.interpreter.eval_do = (function sci$impl$interpreter$eval_do(ctx,expr){
var temp__5735__auto__ = cljs.core.next(expr);
if(temp__5735__auto__){
var exprs = temp__5735__auto__;
return sci.impl.interpreter.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.interpreter.fn_call = (function sci$impl$interpreter$fn_call(ctx,f,args){
var G__67980 = cljs.core.count(args);
switch (G__67980) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg67790 = (function (){var G__67981 = ctx;
var G__67982 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67981,G__67982) : sci.impl.interpreter.interpret.call(null,G__67981,G__67982));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg67790) : f.call(null,arg67790));

break;
case (2):
var arg67791 = (function (){var G__67983 = ctx;
var G__67984 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67983,G__67984) : sci.impl.interpreter.interpret.call(null,G__67983,G__67984));
})();
var args__$1 = cljs.core.rest(args);
var arg67792 = (function (){var G__67985 = ctx;
var G__67986 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67985,G__67986) : sci.impl.interpreter.interpret.call(null,G__67985,G__67986));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg67791,arg67792) : f.call(null,arg67791,arg67792));

break;
case (3):
var arg67793 = (function (){var G__67987 = ctx;
var G__67988 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67987,G__67988) : sci.impl.interpreter.interpret.call(null,G__67987,G__67988));
})();
var args__$1 = cljs.core.rest(args);
var arg67794 = (function (){var G__67989 = ctx;
var G__67990 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67989,G__67990) : sci.impl.interpreter.interpret.call(null,G__67989,G__67990));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67795 = (function (){var G__67991 = ctx;
var G__67992 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67991,G__67992) : sci.impl.interpreter.interpret.call(null,G__67991,G__67992));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg67793,arg67794,arg67795) : f.call(null,arg67793,arg67794,arg67795));

break;
case (4):
var arg67796 = (function (){var G__67993 = ctx;
var G__67994 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67993,G__67994) : sci.impl.interpreter.interpret.call(null,G__67993,G__67994));
})();
var args__$1 = cljs.core.rest(args);
var arg67797 = (function (){var G__67995 = ctx;
var G__67996 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67995,G__67996) : sci.impl.interpreter.interpret.call(null,G__67995,G__67996));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67798 = (function (){var G__67997 = ctx;
var G__67998 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67997,G__67998) : sci.impl.interpreter.interpret.call(null,G__67997,G__67998));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67799 = (function (){var G__67999 = ctx;
var G__68000 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67999,G__68000) : sci.impl.interpreter.interpret.call(null,G__67999,G__68000));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg67796,arg67797,arg67798,arg67799) : f.call(null,arg67796,arg67797,arg67798,arg67799));

break;
case (5):
var arg67800 = (function (){var G__68001 = ctx;
var G__68002 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68001,G__68002) : sci.impl.interpreter.interpret.call(null,G__68001,G__68002));
})();
var args__$1 = cljs.core.rest(args);
var arg67801 = (function (){var G__68003 = ctx;
var G__68004 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68003,G__68004) : sci.impl.interpreter.interpret.call(null,G__68003,G__68004));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67802 = (function (){var G__68005 = ctx;
var G__68006 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68005,G__68006) : sci.impl.interpreter.interpret.call(null,G__68005,G__68006));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67803 = (function (){var G__68007 = ctx;
var G__68008 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68007,G__68008) : sci.impl.interpreter.interpret.call(null,G__68007,G__68008));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67804 = (function (){var G__68009 = ctx;
var G__68010 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68009,G__68010) : sci.impl.interpreter.interpret.call(null,G__68009,G__68010));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg67800,arg67801,arg67802,arg67803,arg67804) : f.call(null,arg67800,arg67801,arg67802,arg67803,arg67804));

break;
case (6):
var arg67805 = (function (){var G__68011 = ctx;
var G__68012 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68011,G__68012) : sci.impl.interpreter.interpret.call(null,G__68011,G__68012));
})();
var args__$1 = cljs.core.rest(args);
var arg67806 = (function (){var G__68013 = ctx;
var G__68014 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68013,G__68014) : sci.impl.interpreter.interpret.call(null,G__68013,G__68014));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67807 = (function (){var G__68015 = ctx;
var G__68016 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68015,G__68016) : sci.impl.interpreter.interpret.call(null,G__68015,G__68016));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67808 = (function (){var G__68017 = ctx;
var G__68018 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68017,G__68018) : sci.impl.interpreter.interpret.call(null,G__68017,G__68018));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67809 = (function (){var G__68019 = ctx;
var G__68020 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68019,G__68020) : sci.impl.interpreter.interpret.call(null,G__68019,G__68020));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67810 = (function (){var G__68021 = ctx;
var G__68022 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68021,G__68022) : sci.impl.interpreter.interpret.call(null,G__68021,G__68022));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg67805,arg67806,arg67807,arg67808,arg67809,arg67810) : f.call(null,arg67805,arg67806,arg67807,arg67808,arg67809,arg67810));

break;
case (7):
var arg67811 = (function (){var G__68023 = ctx;
var G__68024 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68023,G__68024) : sci.impl.interpreter.interpret.call(null,G__68023,G__68024));
})();
var args__$1 = cljs.core.rest(args);
var arg67812 = (function (){var G__68025 = ctx;
var G__68026 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68025,G__68026) : sci.impl.interpreter.interpret.call(null,G__68025,G__68026));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67813 = (function (){var G__68027 = ctx;
var G__68028 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68027,G__68028) : sci.impl.interpreter.interpret.call(null,G__68027,G__68028));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67814 = (function (){var G__68029 = ctx;
var G__68030 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68029,G__68030) : sci.impl.interpreter.interpret.call(null,G__68029,G__68030));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67815 = (function (){var G__68031 = ctx;
var G__68032 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68031,G__68032) : sci.impl.interpreter.interpret.call(null,G__68031,G__68032));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67816 = (function (){var G__68033 = ctx;
var G__68034 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68033,G__68034) : sci.impl.interpreter.interpret.call(null,G__68033,G__68034));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67817 = (function (){var G__68035 = ctx;
var G__68036 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68035,G__68036) : sci.impl.interpreter.interpret.call(null,G__68035,G__68036));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg67811,arg67812,arg67813,arg67814,arg67815,arg67816,arg67817) : f.call(null,arg67811,arg67812,arg67813,arg67814,arg67815,arg67816,arg67817));

break;
case (8):
var arg67818 = (function (){var G__68037 = ctx;
var G__68038 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68037,G__68038) : sci.impl.interpreter.interpret.call(null,G__68037,G__68038));
})();
var args__$1 = cljs.core.rest(args);
var arg67819 = (function (){var G__68039 = ctx;
var G__68040 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68039,G__68040) : sci.impl.interpreter.interpret.call(null,G__68039,G__68040));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67820 = (function (){var G__68041 = ctx;
var G__68042 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68041,G__68042) : sci.impl.interpreter.interpret.call(null,G__68041,G__68042));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67821 = (function (){var G__68043 = ctx;
var G__68044 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68043,G__68044) : sci.impl.interpreter.interpret.call(null,G__68043,G__68044));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67822 = (function (){var G__68045 = ctx;
var G__68046 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68045,G__68046) : sci.impl.interpreter.interpret.call(null,G__68045,G__68046));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67823 = (function (){var G__68047 = ctx;
var G__68048 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68047,G__68048) : sci.impl.interpreter.interpret.call(null,G__68047,G__68048));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67824 = (function (){var G__68049 = ctx;
var G__68050 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68049,G__68050) : sci.impl.interpreter.interpret.call(null,G__68049,G__68050));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67825 = (function (){var G__68051 = ctx;
var G__68052 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68051,G__68052) : sci.impl.interpreter.interpret.call(null,G__68051,G__68052));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg67818,arg67819,arg67820,arg67821,arg67822,arg67823,arg67824,arg67825) : f.call(null,arg67818,arg67819,arg67820,arg67821,arg67822,arg67823,arg67824,arg67825));

break;
case (9):
var arg67826 = (function (){var G__68053 = ctx;
var G__68054 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68053,G__68054) : sci.impl.interpreter.interpret.call(null,G__68053,G__68054));
})();
var args__$1 = cljs.core.rest(args);
var arg67827 = (function (){var G__68055 = ctx;
var G__68056 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68055,G__68056) : sci.impl.interpreter.interpret.call(null,G__68055,G__68056));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67828 = (function (){var G__68057 = ctx;
var G__68058 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68057,G__68058) : sci.impl.interpreter.interpret.call(null,G__68057,G__68058));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67829 = (function (){var G__68059 = ctx;
var G__68060 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68059,G__68060) : sci.impl.interpreter.interpret.call(null,G__68059,G__68060));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67830 = (function (){var G__68061 = ctx;
var G__68062 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68061,G__68062) : sci.impl.interpreter.interpret.call(null,G__68061,G__68062));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67831 = (function (){var G__68063 = ctx;
var G__68064 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68063,G__68064) : sci.impl.interpreter.interpret.call(null,G__68063,G__68064));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67832 = (function (){var G__68065 = ctx;
var G__68066 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68065,G__68066) : sci.impl.interpreter.interpret.call(null,G__68065,G__68066));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67833 = (function (){var G__68067 = ctx;
var G__68068 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68067,G__68068) : sci.impl.interpreter.interpret.call(null,G__68067,G__68068));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67834 = (function (){var G__68069 = ctx;
var G__68070 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68069,G__68070) : sci.impl.interpreter.interpret.call(null,G__68069,G__68070));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg67826,arg67827,arg67828,arg67829,arg67830,arg67831,arg67832,arg67833,arg67834) : f.call(null,arg67826,arg67827,arg67828,arg67829,arg67830,arg67831,arg67832,arg67833,arg67834));

break;
case (10):
var arg67835 = (function (){var G__68071 = ctx;
var G__68072 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68071,G__68072) : sci.impl.interpreter.interpret.call(null,G__68071,G__68072));
})();
var args__$1 = cljs.core.rest(args);
var arg67836 = (function (){var G__68073 = ctx;
var G__68074 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68073,G__68074) : sci.impl.interpreter.interpret.call(null,G__68073,G__68074));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67837 = (function (){var G__68075 = ctx;
var G__68076 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68075,G__68076) : sci.impl.interpreter.interpret.call(null,G__68075,G__68076));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67838 = (function (){var G__68077 = ctx;
var G__68078 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68077,G__68078) : sci.impl.interpreter.interpret.call(null,G__68077,G__68078));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67839 = (function (){var G__68079 = ctx;
var G__68080 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68079,G__68080) : sci.impl.interpreter.interpret.call(null,G__68079,G__68080));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67840 = (function (){var G__68081 = ctx;
var G__68082 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68081,G__68082) : sci.impl.interpreter.interpret.call(null,G__68081,G__68082));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67841 = (function (){var G__68083 = ctx;
var G__68084 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68083,G__68084) : sci.impl.interpreter.interpret.call(null,G__68083,G__68084));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67842 = (function (){var G__68085 = ctx;
var G__68086 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68085,G__68086) : sci.impl.interpreter.interpret.call(null,G__68085,G__68086));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67843 = (function (){var G__68087 = ctx;
var G__68088 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68087,G__68088) : sci.impl.interpreter.interpret.call(null,G__68087,G__68088));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67844 = (function (){var G__68089 = ctx;
var G__68090 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68089,G__68090) : sci.impl.interpreter.interpret.call(null,G__68089,G__68090));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg67835,arg67836,arg67837,arg67838,arg67839,arg67840,arg67841,arg67842,arg67843,arg67844) : f.call(null,arg67835,arg67836,arg67837,arg67838,arg67839,arg67840,arg67841,arg67842,arg67843,arg67844));

break;
case (11):
var arg67845 = (function (){var G__68091 = ctx;
var G__68092 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68091,G__68092) : sci.impl.interpreter.interpret.call(null,G__68091,G__68092));
})();
var args__$1 = cljs.core.rest(args);
var arg67846 = (function (){var G__68093 = ctx;
var G__68094 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68093,G__68094) : sci.impl.interpreter.interpret.call(null,G__68093,G__68094));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67847 = (function (){var G__68095 = ctx;
var G__68096 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68095,G__68096) : sci.impl.interpreter.interpret.call(null,G__68095,G__68096));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67848 = (function (){var G__68097 = ctx;
var G__68098 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68097,G__68098) : sci.impl.interpreter.interpret.call(null,G__68097,G__68098));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67849 = (function (){var G__68099 = ctx;
var G__68100 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68099,G__68100) : sci.impl.interpreter.interpret.call(null,G__68099,G__68100));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67850 = (function (){var G__68101 = ctx;
var G__68102 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68101,G__68102) : sci.impl.interpreter.interpret.call(null,G__68101,G__68102));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67851 = (function (){var G__68103 = ctx;
var G__68104 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68103,G__68104) : sci.impl.interpreter.interpret.call(null,G__68103,G__68104));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67852 = (function (){var G__68105 = ctx;
var G__68106 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68105,G__68106) : sci.impl.interpreter.interpret.call(null,G__68105,G__68106));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67853 = (function (){var G__68107 = ctx;
var G__68108 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68107,G__68108) : sci.impl.interpreter.interpret.call(null,G__68107,G__68108));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67854 = (function (){var G__68109 = ctx;
var G__68110 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68109,G__68110) : sci.impl.interpreter.interpret.call(null,G__68109,G__68110));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67855 = (function (){var G__68111 = ctx;
var G__68112 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68111,G__68112) : sci.impl.interpreter.interpret.call(null,G__68111,G__68112));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg67845,arg67846,arg67847,arg67848,arg67849,arg67850,arg67851,arg67852,arg67853,arg67854,arg67855) : f.call(null,arg67845,arg67846,arg67847,arg67848,arg67849,arg67850,arg67851,arg67852,arg67853,arg67854,arg67855));

break;
case (12):
var arg67856 = (function (){var G__68113 = ctx;
var G__68114 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68113,G__68114) : sci.impl.interpreter.interpret.call(null,G__68113,G__68114));
})();
var args__$1 = cljs.core.rest(args);
var arg67857 = (function (){var G__68115 = ctx;
var G__68116 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68115,G__68116) : sci.impl.interpreter.interpret.call(null,G__68115,G__68116));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67858 = (function (){var G__68117 = ctx;
var G__68118 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68117,G__68118) : sci.impl.interpreter.interpret.call(null,G__68117,G__68118));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67859 = (function (){var G__68119 = ctx;
var G__68120 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68119,G__68120) : sci.impl.interpreter.interpret.call(null,G__68119,G__68120));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67860 = (function (){var G__68121 = ctx;
var G__68122 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68121,G__68122) : sci.impl.interpreter.interpret.call(null,G__68121,G__68122));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67861 = (function (){var G__68123 = ctx;
var G__68124 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68123,G__68124) : sci.impl.interpreter.interpret.call(null,G__68123,G__68124));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67862 = (function (){var G__68125 = ctx;
var G__68126 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68125,G__68126) : sci.impl.interpreter.interpret.call(null,G__68125,G__68126));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67863 = (function (){var G__68127 = ctx;
var G__68128 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68127,G__68128) : sci.impl.interpreter.interpret.call(null,G__68127,G__68128));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67864 = (function (){var G__68129 = ctx;
var G__68130 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68129,G__68130) : sci.impl.interpreter.interpret.call(null,G__68129,G__68130));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67865 = (function (){var G__68131 = ctx;
var G__68132 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68131,G__68132) : sci.impl.interpreter.interpret.call(null,G__68131,G__68132));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67866 = (function (){var G__68133 = ctx;
var G__68134 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68133,G__68134) : sci.impl.interpreter.interpret.call(null,G__68133,G__68134));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67867 = (function (){var G__68135 = ctx;
var G__68136 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68135,G__68136) : sci.impl.interpreter.interpret.call(null,G__68135,G__68136));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg67856,arg67857,arg67858,arg67859,arg67860,arg67861,arg67862,arg67863,arg67864,arg67865,arg67866,arg67867) : f.call(null,arg67856,arg67857,arg67858,arg67859,arg67860,arg67861,arg67862,arg67863,arg67864,arg67865,arg67866,arg67867));

break;
case (13):
var arg67868 = (function (){var G__68137 = ctx;
var G__68138 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68137,G__68138) : sci.impl.interpreter.interpret.call(null,G__68137,G__68138));
})();
var args__$1 = cljs.core.rest(args);
var arg67869 = (function (){var G__68139 = ctx;
var G__68140 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68139,G__68140) : sci.impl.interpreter.interpret.call(null,G__68139,G__68140));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67870 = (function (){var G__68141 = ctx;
var G__68142 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68141,G__68142) : sci.impl.interpreter.interpret.call(null,G__68141,G__68142));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67871 = (function (){var G__68143 = ctx;
var G__68144 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68143,G__68144) : sci.impl.interpreter.interpret.call(null,G__68143,G__68144));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67872 = (function (){var G__68145 = ctx;
var G__68146 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68145,G__68146) : sci.impl.interpreter.interpret.call(null,G__68145,G__68146));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67873 = (function (){var G__68147 = ctx;
var G__68148 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68147,G__68148) : sci.impl.interpreter.interpret.call(null,G__68147,G__68148));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67874 = (function (){var G__68149 = ctx;
var G__68150 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68149,G__68150) : sci.impl.interpreter.interpret.call(null,G__68149,G__68150));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67875 = (function (){var G__68151 = ctx;
var G__68152 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68151,G__68152) : sci.impl.interpreter.interpret.call(null,G__68151,G__68152));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67876 = (function (){var G__68153 = ctx;
var G__68154 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68153,G__68154) : sci.impl.interpreter.interpret.call(null,G__68153,G__68154));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67877 = (function (){var G__68155 = ctx;
var G__68156 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68155,G__68156) : sci.impl.interpreter.interpret.call(null,G__68155,G__68156));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67878 = (function (){var G__68157 = ctx;
var G__68158 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68157,G__68158) : sci.impl.interpreter.interpret.call(null,G__68157,G__68158));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67879 = (function (){var G__68159 = ctx;
var G__68160 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68159,G__68160) : sci.impl.interpreter.interpret.call(null,G__68159,G__68160));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67880 = (function (){var G__68161 = ctx;
var G__68162 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68161,G__68162) : sci.impl.interpreter.interpret.call(null,G__68161,G__68162));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg67868,arg67869,arg67870,arg67871,arg67872,arg67873,arg67874,arg67875,arg67876,arg67877,arg67878,arg67879,arg67880) : f.call(null,arg67868,arg67869,arg67870,arg67871,arg67872,arg67873,arg67874,arg67875,arg67876,arg67877,arg67878,arg67879,arg67880));

break;
case (14):
var arg67881 = (function (){var G__68163 = ctx;
var G__68164 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68163,G__68164) : sci.impl.interpreter.interpret.call(null,G__68163,G__68164));
})();
var args__$1 = cljs.core.rest(args);
var arg67882 = (function (){var G__68165 = ctx;
var G__68166 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68165,G__68166) : sci.impl.interpreter.interpret.call(null,G__68165,G__68166));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67883 = (function (){var G__68167 = ctx;
var G__68168 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68167,G__68168) : sci.impl.interpreter.interpret.call(null,G__68167,G__68168));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67884 = (function (){var G__68169 = ctx;
var G__68170 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68169,G__68170) : sci.impl.interpreter.interpret.call(null,G__68169,G__68170));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67885 = (function (){var G__68171 = ctx;
var G__68172 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68171,G__68172) : sci.impl.interpreter.interpret.call(null,G__68171,G__68172));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67886 = (function (){var G__68173 = ctx;
var G__68174 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68173,G__68174) : sci.impl.interpreter.interpret.call(null,G__68173,G__68174));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67887 = (function (){var G__68175 = ctx;
var G__68176 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68175,G__68176) : sci.impl.interpreter.interpret.call(null,G__68175,G__68176));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67888 = (function (){var G__68177 = ctx;
var G__68178 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68177,G__68178) : sci.impl.interpreter.interpret.call(null,G__68177,G__68178));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67889 = (function (){var G__68179 = ctx;
var G__68180 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68179,G__68180) : sci.impl.interpreter.interpret.call(null,G__68179,G__68180));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67890 = (function (){var G__68181 = ctx;
var G__68182 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68181,G__68182) : sci.impl.interpreter.interpret.call(null,G__68181,G__68182));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67891 = (function (){var G__68183 = ctx;
var G__68184 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68183,G__68184) : sci.impl.interpreter.interpret.call(null,G__68183,G__68184));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67892 = (function (){var G__68185 = ctx;
var G__68186 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68185,G__68186) : sci.impl.interpreter.interpret.call(null,G__68185,G__68186));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67893 = (function (){var G__68187 = ctx;
var G__68188 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68187,G__68188) : sci.impl.interpreter.interpret.call(null,G__68187,G__68188));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67894 = (function (){var G__68189 = ctx;
var G__68190 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68189,G__68190) : sci.impl.interpreter.interpret.call(null,G__68189,G__68190));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg67881,arg67882,arg67883,arg67884,arg67885,arg67886,arg67887,arg67888,arg67889,arg67890,arg67891,arg67892,arg67893,arg67894) : f.call(null,arg67881,arg67882,arg67883,arg67884,arg67885,arg67886,arg67887,arg67888,arg67889,arg67890,arg67891,arg67892,arg67893,arg67894));

break;
case (15):
var arg67895 = (function (){var G__68191 = ctx;
var G__68192 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68191,G__68192) : sci.impl.interpreter.interpret.call(null,G__68191,G__68192));
})();
var args__$1 = cljs.core.rest(args);
var arg67896 = (function (){var G__68193 = ctx;
var G__68194 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68193,G__68194) : sci.impl.interpreter.interpret.call(null,G__68193,G__68194));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67897 = (function (){var G__68195 = ctx;
var G__68196 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68195,G__68196) : sci.impl.interpreter.interpret.call(null,G__68195,G__68196));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67898 = (function (){var G__68197 = ctx;
var G__68198 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68197,G__68198) : sci.impl.interpreter.interpret.call(null,G__68197,G__68198));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67899 = (function (){var G__68199 = ctx;
var G__68200 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68199,G__68200) : sci.impl.interpreter.interpret.call(null,G__68199,G__68200));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67900 = (function (){var G__68201 = ctx;
var G__68202 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68201,G__68202) : sci.impl.interpreter.interpret.call(null,G__68201,G__68202));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67901 = (function (){var G__68203 = ctx;
var G__68204 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68203,G__68204) : sci.impl.interpreter.interpret.call(null,G__68203,G__68204));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67902 = (function (){var G__68205 = ctx;
var G__68206 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68205,G__68206) : sci.impl.interpreter.interpret.call(null,G__68205,G__68206));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67903 = (function (){var G__68207 = ctx;
var G__68208 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68207,G__68208) : sci.impl.interpreter.interpret.call(null,G__68207,G__68208));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67904 = (function (){var G__68209 = ctx;
var G__68210 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68209,G__68210) : sci.impl.interpreter.interpret.call(null,G__68209,G__68210));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67905 = (function (){var G__68211 = ctx;
var G__68212 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68211,G__68212) : sci.impl.interpreter.interpret.call(null,G__68211,G__68212));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67906 = (function (){var G__68213 = ctx;
var G__68214 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68213,G__68214) : sci.impl.interpreter.interpret.call(null,G__68213,G__68214));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67907 = (function (){var G__68215 = ctx;
var G__68216 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68215,G__68216) : sci.impl.interpreter.interpret.call(null,G__68215,G__68216));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67908 = (function (){var G__68217 = ctx;
var G__68218 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68217,G__68218) : sci.impl.interpreter.interpret.call(null,G__68217,G__68218));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67909 = (function (){var G__68219 = ctx;
var G__68220 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68219,G__68220) : sci.impl.interpreter.interpret.call(null,G__68219,G__68220));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg67895,arg67896,arg67897,arg67898,arg67899,arg67900,arg67901,arg67902,arg67903,arg67904,arg67905,arg67906,arg67907,arg67908,arg67909) : f.call(null,arg67895,arg67896,arg67897,arg67898,arg67899,arg67900,arg67901,arg67902,arg67903,arg67904,arg67905,arg67906,arg67907,arg67908,arg67909));

break;
case (16):
var arg67910 = (function (){var G__68221 = ctx;
var G__68222 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68221,G__68222) : sci.impl.interpreter.interpret.call(null,G__68221,G__68222));
})();
var args__$1 = cljs.core.rest(args);
var arg67911 = (function (){var G__68223 = ctx;
var G__68224 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68223,G__68224) : sci.impl.interpreter.interpret.call(null,G__68223,G__68224));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67912 = (function (){var G__68225 = ctx;
var G__68226 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68225,G__68226) : sci.impl.interpreter.interpret.call(null,G__68225,G__68226));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67913 = (function (){var G__68227 = ctx;
var G__68228 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68227,G__68228) : sci.impl.interpreter.interpret.call(null,G__68227,G__68228));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67914 = (function (){var G__68229 = ctx;
var G__68230 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68229,G__68230) : sci.impl.interpreter.interpret.call(null,G__68229,G__68230));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67915 = (function (){var G__68231 = ctx;
var G__68232 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68231,G__68232) : sci.impl.interpreter.interpret.call(null,G__68231,G__68232));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67916 = (function (){var G__68233 = ctx;
var G__68234 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68233,G__68234) : sci.impl.interpreter.interpret.call(null,G__68233,G__68234));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67917 = (function (){var G__68235 = ctx;
var G__68236 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68235,G__68236) : sci.impl.interpreter.interpret.call(null,G__68235,G__68236));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67918 = (function (){var G__68237 = ctx;
var G__68238 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68237,G__68238) : sci.impl.interpreter.interpret.call(null,G__68237,G__68238));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67919 = (function (){var G__68239 = ctx;
var G__68240 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68239,G__68240) : sci.impl.interpreter.interpret.call(null,G__68239,G__68240));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67920 = (function (){var G__68241 = ctx;
var G__68242 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68241,G__68242) : sci.impl.interpreter.interpret.call(null,G__68241,G__68242));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67921 = (function (){var G__68243 = ctx;
var G__68244 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68243,G__68244) : sci.impl.interpreter.interpret.call(null,G__68243,G__68244));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67922 = (function (){var G__68245 = ctx;
var G__68246 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68245,G__68246) : sci.impl.interpreter.interpret.call(null,G__68245,G__68246));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67923 = (function (){var G__68247 = ctx;
var G__68248 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68247,G__68248) : sci.impl.interpreter.interpret.call(null,G__68247,G__68248));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67924 = (function (){var G__68249 = ctx;
var G__68250 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68249,G__68250) : sci.impl.interpreter.interpret.call(null,G__68249,G__68250));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67925 = (function (){var G__68251 = ctx;
var G__68252 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68251,G__68252) : sci.impl.interpreter.interpret.call(null,G__68251,G__68252));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg67910,arg67911,arg67912,arg67913,arg67914,arg67915,arg67916,arg67917,arg67918,arg67919,arg67920,arg67921,arg67922,arg67923,arg67924,arg67925) : f.call(null,arg67910,arg67911,arg67912,arg67913,arg67914,arg67915,arg67916,arg67917,arg67918,arg67919,arg67920,arg67921,arg67922,arg67923,arg67924,arg67925));

break;
case (17):
var arg67926 = (function (){var G__68253 = ctx;
var G__68254 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68253,G__68254) : sci.impl.interpreter.interpret.call(null,G__68253,G__68254));
})();
var args__$1 = cljs.core.rest(args);
var arg67927 = (function (){var G__68255 = ctx;
var G__68256 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68255,G__68256) : sci.impl.interpreter.interpret.call(null,G__68255,G__68256));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67928 = (function (){var G__68257 = ctx;
var G__68258 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68257,G__68258) : sci.impl.interpreter.interpret.call(null,G__68257,G__68258));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67929 = (function (){var G__68259 = ctx;
var G__68260 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68259,G__68260) : sci.impl.interpreter.interpret.call(null,G__68259,G__68260));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67930 = (function (){var G__68261 = ctx;
var G__68262 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68261,G__68262) : sci.impl.interpreter.interpret.call(null,G__68261,G__68262));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67931 = (function (){var G__68263 = ctx;
var G__68264 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68263,G__68264) : sci.impl.interpreter.interpret.call(null,G__68263,G__68264));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67932 = (function (){var G__68265 = ctx;
var G__68266 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68265,G__68266) : sci.impl.interpreter.interpret.call(null,G__68265,G__68266));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67933 = (function (){var G__68267 = ctx;
var G__68268 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68267,G__68268) : sci.impl.interpreter.interpret.call(null,G__68267,G__68268));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67934 = (function (){var G__68269 = ctx;
var G__68270 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68269,G__68270) : sci.impl.interpreter.interpret.call(null,G__68269,G__68270));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67935 = (function (){var G__68271 = ctx;
var G__68272 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68271,G__68272) : sci.impl.interpreter.interpret.call(null,G__68271,G__68272));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67936 = (function (){var G__68273 = ctx;
var G__68274 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68273,G__68274) : sci.impl.interpreter.interpret.call(null,G__68273,G__68274));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67937 = (function (){var G__68275 = ctx;
var G__68276 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68275,G__68276) : sci.impl.interpreter.interpret.call(null,G__68275,G__68276));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67938 = (function (){var G__68277 = ctx;
var G__68278 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68277,G__68278) : sci.impl.interpreter.interpret.call(null,G__68277,G__68278));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67939 = (function (){var G__68279 = ctx;
var G__68280 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68279,G__68280) : sci.impl.interpreter.interpret.call(null,G__68279,G__68280));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67940 = (function (){var G__68281 = ctx;
var G__68282 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68281,G__68282) : sci.impl.interpreter.interpret.call(null,G__68281,G__68282));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67941 = (function (){var G__68283 = ctx;
var G__68284 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68283,G__68284) : sci.impl.interpreter.interpret.call(null,G__68283,G__68284));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg67942 = (function (){var G__68285 = ctx;
var G__68286 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68285,G__68286) : sci.impl.interpreter.interpret.call(null,G__68285,G__68286));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg67926,arg67927,arg67928,arg67929,arg67930,arg67931,arg67932,arg67933,arg67934,arg67935,arg67936,arg67937,arg67938,arg67939,arg67940,arg67941,arg67942) : f.call(null,arg67926,arg67927,arg67928,arg67929,arg67930,arg67931,arg67932,arg67933,arg67934,arg67935,arg67936,arg67937,arg67938,arg67939,arg67940,arg67941,arg67942));

break;
case (18):
var arg67943 = (function (){var G__68287 = ctx;
var G__68288 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68287,G__68288) : sci.impl.interpreter.interpret.call(null,G__68287,G__68288));
})();
var args__$1 = cljs.core.rest(args);
var arg67944 = (function (){var G__68289 = ctx;
var G__68290 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68289,G__68290) : sci.impl.interpreter.interpret.call(null,G__68289,G__68290));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67945 = (function (){var G__68291 = ctx;
var G__68292 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68291,G__68292) : sci.impl.interpreter.interpret.call(null,G__68291,G__68292));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67946 = (function (){var G__68293 = ctx;
var G__68294 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68293,G__68294) : sci.impl.interpreter.interpret.call(null,G__68293,G__68294));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67947 = (function (){var G__68295 = ctx;
var G__68296 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68295,G__68296) : sci.impl.interpreter.interpret.call(null,G__68295,G__68296));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67948 = (function (){var G__68297 = ctx;
var G__68298 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68297,G__68298) : sci.impl.interpreter.interpret.call(null,G__68297,G__68298));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67949 = (function (){var G__68299 = ctx;
var G__68300 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68299,G__68300) : sci.impl.interpreter.interpret.call(null,G__68299,G__68300));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67950 = (function (){var G__68301 = ctx;
var G__68302 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68301,G__68302) : sci.impl.interpreter.interpret.call(null,G__68301,G__68302));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67951 = (function (){var G__68303 = ctx;
var G__68304 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68303,G__68304) : sci.impl.interpreter.interpret.call(null,G__68303,G__68304));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67952 = (function (){var G__68305 = ctx;
var G__68306 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68305,G__68306) : sci.impl.interpreter.interpret.call(null,G__68305,G__68306));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67953 = (function (){var G__68307 = ctx;
var G__68308 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68307,G__68308) : sci.impl.interpreter.interpret.call(null,G__68307,G__68308));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67954 = (function (){var G__68309 = ctx;
var G__68310 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68309,G__68310) : sci.impl.interpreter.interpret.call(null,G__68309,G__68310));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67955 = (function (){var G__68311 = ctx;
var G__68312 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68311,G__68312) : sci.impl.interpreter.interpret.call(null,G__68311,G__68312));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67956 = (function (){var G__68313 = ctx;
var G__68314 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68313,G__68314) : sci.impl.interpreter.interpret.call(null,G__68313,G__68314));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67957 = (function (){var G__68315 = ctx;
var G__68316 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68315,G__68316) : sci.impl.interpreter.interpret.call(null,G__68315,G__68316));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67958 = (function (){var G__68317 = ctx;
var G__68318 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68317,G__68318) : sci.impl.interpreter.interpret.call(null,G__68317,G__68318));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg67959 = (function (){var G__68319 = ctx;
var G__68320 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68319,G__68320) : sci.impl.interpreter.interpret.call(null,G__68319,G__68320));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg67960 = (function (){var G__68321 = ctx;
var G__68322 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68321,G__68322) : sci.impl.interpreter.interpret.call(null,G__68321,G__68322));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg67943,arg67944,arg67945,arg67946,arg67947,arg67948,arg67949,arg67950,arg67951,arg67952,arg67953,arg67954,arg67955,arg67956,arg67957,arg67958,arg67959,arg67960) : f.call(null,arg67943,arg67944,arg67945,arg67946,arg67947,arg67948,arg67949,arg67950,arg67951,arg67952,arg67953,arg67954,arg67955,arg67956,arg67957,arg67958,arg67959,arg67960));

break;
case (19):
var arg67961 = (function (){var G__68323 = ctx;
var G__68324 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68323,G__68324) : sci.impl.interpreter.interpret.call(null,G__68323,G__68324));
})();
var args__$1 = cljs.core.rest(args);
var arg67962 = (function (){var G__68325 = ctx;
var G__68326 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68325,G__68326) : sci.impl.interpreter.interpret.call(null,G__68325,G__68326));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67963 = (function (){var G__68327 = ctx;
var G__68328 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68327,G__68328) : sci.impl.interpreter.interpret.call(null,G__68327,G__68328));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67964 = (function (){var G__68329 = ctx;
var G__68330 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68329,G__68330) : sci.impl.interpreter.interpret.call(null,G__68329,G__68330));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67965 = (function (){var G__68331 = ctx;
var G__68332 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68331,G__68332) : sci.impl.interpreter.interpret.call(null,G__68331,G__68332));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67966 = (function (){var G__68333 = ctx;
var G__68334 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68333,G__68334) : sci.impl.interpreter.interpret.call(null,G__68333,G__68334));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67967 = (function (){var G__68335 = ctx;
var G__68336 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68335,G__68336) : sci.impl.interpreter.interpret.call(null,G__68335,G__68336));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67968 = (function (){var G__68337 = ctx;
var G__68338 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68337,G__68338) : sci.impl.interpreter.interpret.call(null,G__68337,G__68338));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67969 = (function (){var G__68339 = ctx;
var G__68340 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68339,G__68340) : sci.impl.interpreter.interpret.call(null,G__68339,G__68340));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67970 = (function (){var G__68341 = ctx;
var G__68342 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68341,G__68342) : sci.impl.interpreter.interpret.call(null,G__68341,G__68342));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67971 = (function (){var G__68343 = ctx;
var G__68344 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68343,G__68344) : sci.impl.interpreter.interpret.call(null,G__68343,G__68344));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67972 = (function (){var G__68345 = ctx;
var G__68346 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68345,G__68346) : sci.impl.interpreter.interpret.call(null,G__68345,G__68346));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67973 = (function (){var G__68347 = ctx;
var G__68348 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68347,G__68348) : sci.impl.interpreter.interpret.call(null,G__68347,G__68348));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67974 = (function (){var G__68349 = ctx;
var G__68350 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68349,G__68350) : sci.impl.interpreter.interpret.call(null,G__68349,G__68350));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67975 = (function (){var G__68351 = ctx;
var G__68352 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68351,G__68352) : sci.impl.interpreter.interpret.call(null,G__68351,G__68352));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67976 = (function (){var G__68353 = ctx;
var G__68354 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68353,G__68354) : sci.impl.interpreter.interpret.call(null,G__68353,G__68354));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg67977 = (function (){var G__68355 = ctx;
var G__68356 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68355,G__68356) : sci.impl.interpreter.interpret.call(null,G__68355,G__68356));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg67978 = (function (){var G__68357 = ctx;
var G__68358 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68357,G__68358) : sci.impl.interpreter.interpret.call(null,G__68357,G__68358));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg67979 = (function (){var G__68359 = ctx;
var G__68360 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68359,G__68360) : sci.impl.interpreter.interpret.call(null,G__68359,G__68360));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg67961,arg67962,arg67963,arg67964,arg67965,arg67966,arg67967,arg67968,arg67969,arg67970,arg67971,arg67972,arg67973,arg67974,arg67975,arg67976,arg67977,arg67978,arg67979) : f.call(null,arg67961,arg67962,arg67963,arg67964,arg67965,arg67966,arg67967,arg67968,arg67969,arg67970,arg67971,arg67972,arg67973,arg67974,arg67975,arg67976,arg67977,arg67978,arg67979));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__68361 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__68361)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__68361)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__68361)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__68361)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__68361)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__68361)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__68362 = ctx;
var G__68363 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68362,G__68363) : sci.impl.interpreter.interpret.call(null,G__68362,G__68363));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__68361)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__68361)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__68361)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__68361)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__68361)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__68361)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__68361)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__68361)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__68361)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__68364 = ctx;
var G__68365 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68364,G__68365) : sci.impl.interpreter.interpret.call(null,G__68364,G__68365));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__68361)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__68361)){
return (new cljs.core.LazySeq(null,(function (){var G__68366 = ctx;
var G__68367 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68366,G__68367) : sci.impl.interpreter.interpret.call(null,G__68366,G__68367));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__68361)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__68361)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__68361)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__68361)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68361)].join('')));

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
}
}
}
}
}
});
sci.impl.interpreter.eval_call = (function sci$impl$interpreter$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.interpreter.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441)) : sci.impl.utils.kw_identical_QMARK_.call(null,op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441))))){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_static_method_invocation(ctx,expr);
}
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.interpreter.interpret.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.fn_call(ctx,f__$1,cljs.core.rest(expr));
}
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e68368){if((e68368 instanceof Error)){
var e = e68368;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e68368;

}
}});
sci.impl.interpreter.fix_meta = (function sci$impl$interpreter$fix_meta(v,old_meta){
if(cljs.core.truth_((((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.meta(v):false))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(v,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old_meta));
}));
} else {
return v;
}
});
sci.impl.interpreter.interpret = (function sci$impl$interpreter$interpret(ctx,expr){
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
if(cljs.core.not(sci.impl.vars.isMacro(v))){
return cljs.core.deref(v);
} else {
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
}
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__68375 = op;
var G__68375__$1 = (((G__68375 instanceof cljs.core.Keyword))?G__68375.fqn:null);
switch (G__68375__$1) {
case "call":
return sci.impl.interpreter.eval_call(ctx,expr);

break;
case "try":
return sci.impl.interpreter.eval_try(ctx,expr);

break;
case "fn":
return sci.impl.fns.eval_fn(ctx,sci.impl.interpreter.interpret,sci.impl.interpreter.eval_do_STAR_,expr);

break;
case "static-access":
return sci.impl.interop.get_static_field(expr);

break;
case "var-value":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(0));

break;
case "deref!":
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;

break;
case "resolve-sym":
return sci.impl.interpreter.resolve_symbol(ctx,expr);

break;
case "needs-ctx":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);

break;
default:
if(cljs.core.map_QMARK_(expr)){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68372_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__68372_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__68372_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__68373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__68373_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68374_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__68374_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__68374_SHARP_));
}),expr));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
})());
var ret__$1 = (cljs.core.truth_(m)?sci.impl.interpreter.fix_meta(ret,m):ret);
var temp__5733__auto__ = ctx.get(new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return sci.impl.max_or_throw.max_or_throw(ret__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"expression","expression",202311876),expr),n);
} else {
return ret__$1;
}
}
});
sci.impl.interpreter.do_QMARK_ = (function sci$impl$interpreter$do_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(expr))));
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(sci.impl.interpreter.do_QMARK_(form)){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__68422 = cljs.core.rest(exprs);
var G__68423 = (function (){var G__68378 = ctx;
var G__68379 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__68378,G__68379) : sci.impl.interpreter.eval_form.call(null,G__68378,G__68379));
})();
exprs = G__68422;
ret = G__68423;
continue;
} else {
return ret;
}
break;
}
} else {
var analyzed = sci.impl.analyzer.analyze(ctx,form);
var ret = sci.impl.interpreter.interpret(ctx,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr)))){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__68424 = ret__$1;
ret = G__68424;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__68381 = arguments.length;
switch (G__68381) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
