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
var G__68381 = xs;
args__$2 = G__68381;
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
var G__68382 = xs;
args__$2 = G__68382;
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
var len__4736__auto___68383 = arguments.length;
var i__4737__auto___68384 = (0);
while(true){
if((i__4737__auto___68384 < len__4736__auto___68383)){
args__4742__auto__.push((arguments[i__4737__auto___68384]));

var G__68385 = (i__4737__auto___68384 + (1));
i__4737__auto___68384 = G__68385;
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
var G__68386 = ctx__$2;
var G__68387 = rest_let_bindings;
ctx__$1 = G__68386;
let_bindings__$1 = G__68387;
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
var G__68388 = nexprs;
exprs__$1 = G__68388;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq67621){
var G__67622 = cljs.core.first(seq67621);
var seq67621__$1 = cljs.core.next(seq67621);
var G__67623 = cljs.core.first(seq67621__$1);
var seq67621__$2 = cljs.core.next(seq67621__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67622,G__67623,seq67621__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__67630){
var vec__67631 = p__67630;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67631,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67631,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67631,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67631,(3),null);
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
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__67634 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__67634,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__67634;
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
var vec__67635 = libspec;
var seq__67636 = cljs.core.seq(vec__67635);
var first__67637 = cljs.core.first(seq__67636);
var seq__67636__$1 = cljs.core.next(seq__67636);
var lib_name = first__67637;
var opts = seq__67636__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__67641 = opts;
var vec__67642 = G__67641;
var seq__67643 = cljs.core.seq(vec__67642);
var first__67644 = cljs.core.first(seq__67643);
var seq__67643__$1 = cljs.core.next(seq__67643);
var opt_name = first__67644;
var first__67644__$1 = cljs.core.first(seq__67643__$1);
var seq__67643__$2 = cljs.core.next(seq__67643__$1);
var fst_opt = first__67644__$1;
var rst_opts = seq__67643__$2;
var ret__$1 = ret;
var G__67641__$1 = G__67641;
while(true){
var ret__$2 = ret__$1;
var vec__67652 = G__67641__$1;
var seq__67653 = cljs.core.seq(vec__67652);
var first__67654 = cljs.core.first(seq__67653);
var seq__67653__$1 = cljs.core.next(seq__67653);
var opt_name__$1 = first__67654;
var first__67654__$1 = cljs.core.first(seq__67653__$1);
var seq__67653__$2 = cljs.core.next(seq__67653__$1);
var fst_opt__$1 = first__67654__$1;
var rst_opts__$1 = seq__67653__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__67655 = opt_name__$1;
var G__67655__$1 = (((G__67655 instanceof cljs.core.Keyword))?G__67655.fqn:null);
switch (G__67655__$1) {
case "as":
var G__68390 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__68391 = rst_opts__$1;
ret__$1 = G__68390;
G__67641__$1 = G__68391;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__68392 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__68393 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__68392;
G__67641__$1 = G__68393;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__68394 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__68395 = rst_opts__$1;
ret__$1 = G__68394;
G__67641__$1 = G__68395;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67655__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__67659){
var vec__67660 = p__67659;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67660,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67660,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__67664){
var map__67665 = p__67664;
var map__67665__$1 = (((((!((map__67665 == null))))?(((((map__67665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67665):map__67665);
var _parsed_libspec = map__67665__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67665__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67665__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67665__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67665__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67665__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var vec__67667 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67667,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67667,(1),null);
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
var map__67670 = sci.impl.interpreter.parse_libspec(libspec);
var map__67670__$1 = (((((!((map__67670 == null))))?(((((map__67670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67670):map__67670);
var parsed_libspec = map__67670__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67670__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67670__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5733__auto____$2 = (function (){var G__67672 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__67672) : load_fn.call(null,G__67672));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__67673 = temp__5733__auto____$2;
var map__67673__$1 = (((((!((map__67673 == null))))?(((((map__67673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67673):map__67673);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67673__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67673__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__67676_68396 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__67677_68397 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__67676_68396,G__67677_68397) : sci.impl.interpreter.eval_string_STAR_.call(null,G__67676_68396,G__67677_68397));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e67675){if((e67675 instanceof Error)){
var e_68398 = e67675;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_68398;
} else {
throw e67675;

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
var len__4736__auto___68399 = arguments.length;
var i__4737__auto___68400 = (0);
while(true){
if((i__4737__auto___68400 < len__4736__auto___68399)){
args__4742__auto__.push((arguments[i__4737__auto___68400]));

var G__68401 = (i__4737__auto___68400 + (1));
i__4737__auto___68400 = G__68401;
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
var ret = (function (){var G__67691 = ctx;
var G__67692 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67691,G__67692) : sci.impl.interpreter.interpret.call(null,G__67691,G__67692));
})();
if((ret instanceof cljs.core.Symbol)){
var G__68402 = (function (){var G__67693 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__67693,current_libspec);
} else {
return G__67693;
}
})();
var G__68403 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__68404 = cljs.core.next(args__$1);
libspecs = G__68402;
current_libspec = G__68403;
args__$1 = G__68404;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__68405 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__68406 = null;
var G__68407 = cljs.core.next(args__$1);
libspecs = G__68405;
current_libspec = G__68406;
args__$1 = G__68407;
continue;
} else {
var G__68408 = (function (){var G__67696 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__67696,current_libspec);
} else {
return G__67696;
}
})();
var G__68409 = ret;
var G__68410 = cljs.core.next(args__$1);
libspecs = G__68408;
current_libspec = G__68409;
args__$1 = G__68410;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__67698 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__67698,current_libspec);
} else {
return G__67698;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__67679_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__67679_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq67680){
var G__67681 = cljs.core.first(seq67680);
var seq67680__$1 = cljs.core.next(seq67680);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67681,seq67680__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___68411 = arguments.length;
var i__4737__auto___68412 = (0);
while(true){
if((i__4737__auto___68412 < len__4736__auto___68411)){
args__4742__auto__.push((arguments[i__4737__auto___68412]));

var G__68413 = (i__4737__auto___68412 + (1));
i__4737__auto___68412 = G__68413;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq67700){
var G__67701 = cljs.core.first(seq67700);
var seq67700__$1 = cljs.core.next(seq67700);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67701,seq67700__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__67705){
var vec__67706 = p__67705;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67706,(0),null);
var map__67709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67706,(1),null);
var map__67709__$1 = (((((!((map__67709 == null))))?(((((map__67709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67709):map__67709);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67709__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67709__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67709__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__67711 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67711,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67711,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__67714 = ctx;
var G__67715 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67714,G__67715) : sci.impl.interpreter.interpret.call(null,G__67714,G__67715));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__67716 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__67716__$1 = (((((!((map__67716 == null))))?(((((map__67716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67716):map__67716);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67716__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67716__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67716__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__67739 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__67740 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__67740);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__67739);
}}catch (e67726){if((e67726 instanceof Error)){
var e = e67726;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__67731 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__67732 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67731,G__67732) : sci.impl.interpreter.interpret.call(null,G__67731,G__67732));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__67734 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67734,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67734,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e67726;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__67741){
var vec__67742 = p__67741;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67742,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67742,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67745_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67745_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67745_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__67747){
var vec__67748 = p__67747;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67748,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67748,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67748,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67746_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67746_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67746_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__67753,p__67754){
var map__67755 = p__67753;
var map__67755__$1 = (((((!((map__67755 == null))))?(((((map__67755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67755):map__67755);
var ctx = map__67755__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67755__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__67756 = p__67754;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67756,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67756,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67756,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67756,(3),null);
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67752_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__67752_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__67752_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__67760){
var vec__67761 = p__67760;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67761,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67761,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__67764){
var vec__67765 = p__67764;
var seq__67766 = cljs.core.seq(vec__67765);
var first__67767 = cljs.core.first(seq__67766);
var seq__67766__$1 = cljs.core.next(seq__67766);
var _ = first__67767;
var first__67767__$1 = cljs.core.first(seq__67766__$1);
var seq__67766__$2 = cljs.core.next(seq__67766__$1);
var ns_sym = first__67767__$1;
var exprs = seq__67766__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__67768 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67768,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67768,(1),null);
var G__67771_68414 = k;
var G__67771_68415__$1 = (((G__67771_68414 instanceof cljs.core.Keyword))?G__67771_68414.fqn:null);
switch (G__67771_68415__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__67771_68414,G__67771_68415__$1,vec__67768,k,v,ns_sym__$1,vec__67765,seq__67766,first__67767,seq__67766__$1,_,first__67767__$1,seq__67766__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__67771_68414,G__67771_68415__$1,vec__67768,k,v,ns_sym__$1,vec__67765,seq__67766,first__67767,seq__67766__$1,_,first__67767__$1,seq__67766__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67771_68415__$1)].join('')));

}

var G__68417 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__68417;
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
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__67772){
var vec__67773 = p__67772;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67773,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67773,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67773,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__67779 = exprs;
var vec__67780 = G__67779;
var seq__67781 = cljs.core.seq(vec__67780);
var first__67782 = cljs.core.first(seq__67781);
var seq__67781__$1 = cljs.core.next(seq__67781);
var expr = first__67782;
var exprs__$1 = seq__67781__$1;
var G__67779__$1 = G__67779;
while(true){
var vec__67783 = G__67779__$1;
var seq__67784 = cljs.core.seq(vec__67783);
var first__67785 = cljs.core.first(seq__67784);
var seq__67784__$1 = cljs.core.next(seq__67784);
var expr__$1 = first__67785;
var exprs__$2 = seq__67784__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e67786){if((e67786 instanceof Error)){
var e = e67786;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e67786;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__68418 = exprs__$3;
G__67779__$1 = G__68418;
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
var G__67979 = cljs.core.count(args);
switch (G__67979) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg67789 = (function (){var G__67980 = ctx;
var G__67981 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67980,G__67981) : sci.impl.interpreter.interpret.call(null,G__67980,G__67981));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg67789) : f.call(null,arg67789));

break;
case (2):
var arg67790 = (function (){var G__67982 = ctx;
var G__67983 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67982,G__67983) : sci.impl.interpreter.interpret.call(null,G__67982,G__67983));
})();
var args__$1 = cljs.core.rest(args);
var arg67791 = (function (){var G__67984 = ctx;
var G__67985 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67984,G__67985) : sci.impl.interpreter.interpret.call(null,G__67984,G__67985));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg67790,arg67791) : f.call(null,arg67790,arg67791));

break;
case (3):
var arg67792 = (function (){var G__67986 = ctx;
var G__67987 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67986,G__67987) : sci.impl.interpreter.interpret.call(null,G__67986,G__67987));
})();
var args__$1 = cljs.core.rest(args);
var arg67793 = (function (){var G__67988 = ctx;
var G__67989 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67988,G__67989) : sci.impl.interpreter.interpret.call(null,G__67988,G__67989));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67794 = (function (){var G__67990 = ctx;
var G__67991 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67990,G__67991) : sci.impl.interpreter.interpret.call(null,G__67990,G__67991));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg67792,arg67793,arg67794) : f.call(null,arg67792,arg67793,arg67794));

break;
case (4):
var arg67795 = (function (){var G__67992 = ctx;
var G__67993 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67992,G__67993) : sci.impl.interpreter.interpret.call(null,G__67992,G__67993));
})();
var args__$1 = cljs.core.rest(args);
var arg67796 = (function (){var G__67994 = ctx;
var G__67995 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67994,G__67995) : sci.impl.interpreter.interpret.call(null,G__67994,G__67995));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67797 = (function (){var G__67996 = ctx;
var G__67997 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67996,G__67997) : sci.impl.interpreter.interpret.call(null,G__67996,G__67997));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67798 = (function (){var G__67998 = ctx;
var G__67999 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__67998,G__67999) : sci.impl.interpreter.interpret.call(null,G__67998,G__67999));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg67795,arg67796,arg67797,arg67798) : f.call(null,arg67795,arg67796,arg67797,arg67798));

break;
case (5):
var arg67799 = (function (){var G__68000 = ctx;
var G__68001 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68000,G__68001) : sci.impl.interpreter.interpret.call(null,G__68000,G__68001));
})();
var args__$1 = cljs.core.rest(args);
var arg67800 = (function (){var G__68002 = ctx;
var G__68003 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68002,G__68003) : sci.impl.interpreter.interpret.call(null,G__68002,G__68003));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67801 = (function (){var G__68004 = ctx;
var G__68005 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68004,G__68005) : sci.impl.interpreter.interpret.call(null,G__68004,G__68005));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67802 = (function (){var G__68006 = ctx;
var G__68007 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68006,G__68007) : sci.impl.interpreter.interpret.call(null,G__68006,G__68007));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67803 = (function (){var G__68008 = ctx;
var G__68009 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68008,G__68009) : sci.impl.interpreter.interpret.call(null,G__68008,G__68009));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg67799,arg67800,arg67801,arg67802,arg67803) : f.call(null,arg67799,arg67800,arg67801,arg67802,arg67803));

break;
case (6):
var arg67804 = (function (){var G__68010 = ctx;
var G__68011 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68010,G__68011) : sci.impl.interpreter.interpret.call(null,G__68010,G__68011));
})();
var args__$1 = cljs.core.rest(args);
var arg67805 = (function (){var G__68012 = ctx;
var G__68013 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68012,G__68013) : sci.impl.interpreter.interpret.call(null,G__68012,G__68013));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67806 = (function (){var G__68014 = ctx;
var G__68015 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68014,G__68015) : sci.impl.interpreter.interpret.call(null,G__68014,G__68015));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67807 = (function (){var G__68016 = ctx;
var G__68017 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68016,G__68017) : sci.impl.interpreter.interpret.call(null,G__68016,G__68017));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67808 = (function (){var G__68018 = ctx;
var G__68019 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68018,G__68019) : sci.impl.interpreter.interpret.call(null,G__68018,G__68019));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67809 = (function (){var G__68020 = ctx;
var G__68021 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68020,G__68021) : sci.impl.interpreter.interpret.call(null,G__68020,G__68021));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg67804,arg67805,arg67806,arg67807,arg67808,arg67809) : f.call(null,arg67804,arg67805,arg67806,arg67807,arg67808,arg67809));

break;
case (7):
var arg67810 = (function (){var G__68022 = ctx;
var G__68023 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68022,G__68023) : sci.impl.interpreter.interpret.call(null,G__68022,G__68023));
})();
var args__$1 = cljs.core.rest(args);
var arg67811 = (function (){var G__68024 = ctx;
var G__68025 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68024,G__68025) : sci.impl.interpreter.interpret.call(null,G__68024,G__68025));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67812 = (function (){var G__68026 = ctx;
var G__68027 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68026,G__68027) : sci.impl.interpreter.interpret.call(null,G__68026,G__68027));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67813 = (function (){var G__68028 = ctx;
var G__68029 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68028,G__68029) : sci.impl.interpreter.interpret.call(null,G__68028,G__68029));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67814 = (function (){var G__68030 = ctx;
var G__68031 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68030,G__68031) : sci.impl.interpreter.interpret.call(null,G__68030,G__68031));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67815 = (function (){var G__68032 = ctx;
var G__68033 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68032,G__68033) : sci.impl.interpreter.interpret.call(null,G__68032,G__68033));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67816 = (function (){var G__68034 = ctx;
var G__68035 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68034,G__68035) : sci.impl.interpreter.interpret.call(null,G__68034,G__68035));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg67810,arg67811,arg67812,arg67813,arg67814,arg67815,arg67816) : f.call(null,arg67810,arg67811,arg67812,arg67813,arg67814,arg67815,arg67816));

break;
case (8):
var arg67817 = (function (){var G__68036 = ctx;
var G__68037 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68036,G__68037) : sci.impl.interpreter.interpret.call(null,G__68036,G__68037));
})();
var args__$1 = cljs.core.rest(args);
var arg67818 = (function (){var G__68038 = ctx;
var G__68039 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68038,G__68039) : sci.impl.interpreter.interpret.call(null,G__68038,G__68039));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67819 = (function (){var G__68040 = ctx;
var G__68041 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68040,G__68041) : sci.impl.interpreter.interpret.call(null,G__68040,G__68041));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67820 = (function (){var G__68042 = ctx;
var G__68043 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68042,G__68043) : sci.impl.interpreter.interpret.call(null,G__68042,G__68043));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67821 = (function (){var G__68044 = ctx;
var G__68045 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68044,G__68045) : sci.impl.interpreter.interpret.call(null,G__68044,G__68045));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67822 = (function (){var G__68046 = ctx;
var G__68047 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68046,G__68047) : sci.impl.interpreter.interpret.call(null,G__68046,G__68047));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67823 = (function (){var G__68048 = ctx;
var G__68049 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68048,G__68049) : sci.impl.interpreter.interpret.call(null,G__68048,G__68049));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67824 = (function (){var G__68050 = ctx;
var G__68051 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68050,G__68051) : sci.impl.interpreter.interpret.call(null,G__68050,G__68051));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg67817,arg67818,arg67819,arg67820,arg67821,arg67822,arg67823,arg67824) : f.call(null,arg67817,arg67818,arg67819,arg67820,arg67821,arg67822,arg67823,arg67824));

break;
case (9):
var arg67825 = (function (){var G__68052 = ctx;
var G__68053 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68052,G__68053) : sci.impl.interpreter.interpret.call(null,G__68052,G__68053));
})();
var args__$1 = cljs.core.rest(args);
var arg67826 = (function (){var G__68054 = ctx;
var G__68055 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68054,G__68055) : sci.impl.interpreter.interpret.call(null,G__68054,G__68055));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67827 = (function (){var G__68056 = ctx;
var G__68057 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68056,G__68057) : sci.impl.interpreter.interpret.call(null,G__68056,G__68057));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67828 = (function (){var G__68058 = ctx;
var G__68059 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68058,G__68059) : sci.impl.interpreter.interpret.call(null,G__68058,G__68059));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67829 = (function (){var G__68060 = ctx;
var G__68061 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68060,G__68061) : sci.impl.interpreter.interpret.call(null,G__68060,G__68061));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67830 = (function (){var G__68062 = ctx;
var G__68063 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68062,G__68063) : sci.impl.interpreter.interpret.call(null,G__68062,G__68063));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67831 = (function (){var G__68064 = ctx;
var G__68065 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68064,G__68065) : sci.impl.interpreter.interpret.call(null,G__68064,G__68065));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67832 = (function (){var G__68066 = ctx;
var G__68067 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68066,G__68067) : sci.impl.interpreter.interpret.call(null,G__68066,G__68067));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67833 = (function (){var G__68068 = ctx;
var G__68069 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68068,G__68069) : sci.impl.interpreter.interpret.call(null,G__68068,G__68069));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg67825,arg67826,arg67827,arg67828,arg67829,arg67830,arg67831,arg67832,arg67833) : f.call(null,arg67825,arg67826,arg67827,arg67828,arg67829,arg67830,arg67831,arg67832,arg67833));

break;
case (10):
var arg67834 = (function (){var G__68070 = ctx;
var G__68071 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68070,G__68071) : sci.impl.interpreter.interpret.call(null,G__68070,G__68071));
})();
var args__$1 = cljs.core.rest(args);
var arg67835 = (function (){var G__68072 = ctx;
var G__68073 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68072,G__68073) : sci.impl.interpreter.interpret.call(null,G__68072,G__68073));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67836 = (function (){var G__68074 = ctx;
var G__68075 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68074,G__68075) : sci.impl.interpreter.interpret.call(null,G__68074,G__68075));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67837 = (function (){var G__68076 = ctx;
var G__68077 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68076,G__68077) : sci.impl.interpreter.interpret.call(null,G__68076,G__68077));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67838 = (function (){var G__68078 = ctx;
var G__68079 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68078,G__68079) : sci.impl.interpreter.interpret.call(null,G__68078,G__68079));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67839 = (function (){var G__68080 = ctx;
var G__68081 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68080,G__68081) : sci.impl.interpreter.interpret.call(null,G__68080,G__68081));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67840 = (function (){var G__68082 = ctx;
var G__68083 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68082,G__68083) : sci.impl.interpreter.interpret.call(null,G__68082,G__68083));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67841 = (function (){var G__68084 = ctx;
var G__68085 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68084,G__68085) : sci.impl.interpreter.interpret.call(null,G__68084,G__68085));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67842 = (function (){var G__68086 = ctx;
var G__68087 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68086,G__68087) : sci.impl.interpreter.interpret.call(null,G__68086,G__68087));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67843 = (function (){var G__68088 = ctx;
var G__68089 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68088,G__68089) : sci.impl.interpreter.interpret.call(null,G__68088,G__68089));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg67834,arg67835,arg67836,arg67837,arg67838,arg67839,arg67840,arg67841,arg67842,arg67843) : f.call(null,arg67834,arg67835,arg67836,arg67837,arg67838,arg67839,arg67840,arg67841,arg67842,arg67843));

break;
case (11):
var arg67844 = (function (){var G__68090 = ctx;
var G__68091 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68090,G__68091) : sci.impl.interpreter.interpret.call(null,G__68090,G__68091));
})();
var args__$1 = cljs.core.rest(args);
var arg67845 = (function (){var G__68092 = ctx;
var G__68093 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68092,G__68093) : sci.impl.interpreter.interpret.call(null,G__68092,G__68093));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67846 = (function (){var G__68094 = ctx;
var G__68095 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68094,G__68095) : sci.impl.interpreter.interpret.call(null,G__68094,G__68095));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67847 = (function (){var G__68096 = ctx;
var G__68097 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68096,G__68097) : sci.impl.interpreter.interpret.call(null,G__68096,G__68097));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67848 = (function (){var G__68098 = ctx;
var G__68099 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68098,G__68099) : sci.impl.interpreter.interpret.call(null,G__68098,G__68099));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67849 = (function (){var G__68100 = ctx;
var G__68101 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68100,G__68101) : sci.impl.interpreter.interpret.call(null,G__68100,G__68101));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67850 = (function (){var G__68102 = ctx;
var G__68103 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68102,G__68103) : sci.impl.interpreter.interpret.call(null,G__68102,G__68103));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67851 = (function (){var G__68104 = ctx;
var G__68105 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68104,G__68105) : sci.impl.interpreter.interpret.call(null,G__68104,G__68105));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67852 = (function (){var G__68106 = ctx;
var G__68107 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68106,G__68107) : sci.impl.interpreter.interpret.call(null,G__68106,G__68107));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67853 = (function (){var G__68108 = ctx;
var G__68109 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68108,G__68109) : sci.impl.interpreter.interpret.call(null,G__68108,G__68109));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67854 = (function (){var G__68110 = ctx;
var G__68111 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68110,G__68111) : sci.impl.interpreter.interpret.call(null,G__68110,G__68111));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg67844,arg67845,arg67846,arg67847,arg67848,arg67849,arg67850,arg67851,arg67852,arg67853,arg67854) : f.call(null,arg67844,arg67845,arg67846,arg67847,arg67848,arg67849,arg67850,arg67851,arg67852,arg67853,arg67854));

break;
case (12):
var arg67855 = (function (){var G__68112 = ctx;
var G__68113 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68112,G__68113) : sci.impl.interpreter.interpret.call(null,G__68112,G__68113));
})();
var args__$1 = cljs.core.rest(args);
var arg67856 = (function (){var G__68114 = ctx;
var G__68115 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68114,G__68115) : sci.impl.interpreter.interpret.call(null,G__68114,G__68115));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67857 = (function (){var G__68116 = ctx;
var G__68117 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68116,G__68117) : sci.impl.interpreter.interpret.call(null,G__68116,G__68117));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67858 = (function (){var G__68118 = ctx;
var G__68119 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68118,G__68119) : sci.impl.interpreter.interpret.call(null,G__68118,G__68119));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67859 = (function (){var G__68120 = ctx;
var G__68121 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68120,G__68121) : sci.impl.interpreter.interpret.call(null,G__68120,G__68121));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67860 = (function (){var G__68122 = ctx;
var G__68123 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68122,G__68123) : sci.impl.interpreter.interpret.call(null,G__68122,G__68123));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67861 = (function (){var G__68124 = ctx;
var G__68125 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68124,G__68125) : sci.impl.interpreter.interpret.call(null,G__68124,G__68125));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67862 = (function (){var G__68126 = ctx;
var G__68127 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68126,G__68127) : sci.impl.interpreter.interpret.call(null,G__68126,G__68127));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67863 = (function (){var G__68128 = ctx;
var G__68129 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68128,G__68129) : sci.impl.interpreter.interpret.call(null,G__68128,G__68129));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67864 = (function (){var G__68130 = ctx;
var G__68131 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68130,G__68131) : sci.impl.interpreter.interpret.call(null,G__68130,G__68131));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67865 = (function (){var G__68132 = ctx;
var G__68133 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68132,G__68133) : sci.impl.interpreter.interpret.call(null,G__68132,G__68133));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67866 = (function (){var G__68134 = ctx;
var G__68135 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68134,G__68135) : sci.impl.interpreter.interpret.call(null,G__68134,G__68135));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg67855,arg67856,arg67857,arg67858,arg67859,arg67860,arg67861,arg67862,arg67863,arg67864,arg67865,arg67866) : f.call(null,arg67855,arg67856,arg67857,arg67858,arg67859,arg67860,arg67861,arg67862,arg67863,arg67864,arg67865,arg67866));

break;
case (13):
var arg67867 = (function (){var G__68136 = ctx;
var G__68137 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68136,G__68137) : sci.impl.interpreter.interpret.call(null,G__68136,G__68137));
})();
var args__$1 = cljs.core.rest(args);
var arg67868 = (function (){var G__68138 = ctx;
var G__68139 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68138,G__68139) : sci.impl.interpreter.interpret.call(null,G__68138,G__68139));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67869 = (function (){var G__68140 = ctx;
var G__68141 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68140,G__68141) : sci.impl.interpreter.interpret.call(null,G__68140,G__68141));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67870 = (function (){var G__68142 = ctx;
var G__68143 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68142,G__68143) : sci.impl.interpreter.interpret.call(null,G__68142,G__68143));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67871 = (function (){var G__68144 = ctx;
var G__68145 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68144,G__68145) : sci.impl.interpreter.interpret.call(null,G__68144,G__68145));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67872 = (function (){var G__68146 = ctx;
var G__68147 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68146,G__68147) : sci.impl.interpreter.interpret.call(null,G__68146,G__68147));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67873 = (function (){var G__68148 = ctx;
var G__68149 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68148,G__68149) : sci.impl.interpreter.interpret.call(null,G__68148,G__68149));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67874 = (function (){var G__68150 = ctx;
var G__68151 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68150,G__68151) : sci.impl.interpreter.interpret.call(null,G__68150,G__68151));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67875 = (function (){var G__68152 = ctx;
var G__68153 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68152,G__68153) : sci.impl.interpreter.interpret.call(null,G__68152,G__68153));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67876 = (function (){var G__68154 = ctx;
var G__68155 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68154,G__68155) : sci.impl.interpreter.interpret.call(null,G__68154,G__68155));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67877 = (function (){var G__68156 = ctx;
var G__68157 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68156,G__68157) : sci.impl.interpreter.interpret.call(null,G__68156,G__68157));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67878 = (function (){var G__68158 = ctx;
var G__68159 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68158,G__68159) : sci.impl.interpreter.interpret.call(null,G__68158,G__68159));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67879 = (function (){var G__68160 = ctx;
var G__68161 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68160,G__68161) : sci.impl.interpreter.interpret.call(null,G__68160,G__68161));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg67867,arg67868,arg67869,arg67870,arg67871,arg67872,arg67873,arg67874,arg67875,arg67876,arg67877,arg67878,arg67879) : f.call(null,arg67867,arg67868,arg67869,arg67870,arg67871,arg67872,arg67873,arg67874,arg67875,arg67876,arg67877,arg67878,arg67879));

break;
case (14):
var arg67880 = (function (){var G__68162 = ctx;
var G__68163 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68162,G__68163) : sci.impl.interpreter.interpret.call(null,G__68162,G__68163));
})();
var args__$1 = cljs.core.rest(args);
var arg67881 = (function (){var G__68164 = ctx;
var G__68165 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68164,G__68165) : sci.impl.interpreter.interpret.call(null,G__68164,G__68165));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67882 = (function (){var G__68166 = ctx;
var G__68167 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68166,G__68167) : sci.impl.interpreter.interpret.call(null,G__68166,G__68167));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67883 = (function (){var G__68168 = ctx;
var G__68169 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68168,G__68169) : sci.impl.interpreter.interpret.call(null,G__68168,G__68169));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67884 = (function (){var G__68170 = ctx;
var G__68171 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68170,G__68171) : sci.impl.interpreter.interpret.call(null,G__68170,G__68171));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67885 = (function (){var G__68172 = ctx;
var G__68173 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68172,G__68173) : sci.impl.interpreter.interpret.call(null,G__68172,G__68173));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67886 = (function (){var G__68174 = ctx;
var G__68175 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68174,G__68175) : sci.impl.interpreter.interpret.call(null,G__68174,G__68175));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67887 = (function (){var G__68176 = ctx;
var G__68177 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68176,G__68177) : sci.impl.interpreter.interpret.call(null,G__68176,G__68177));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67888 = (function (){var G__68178 = ctx;
var G__68179 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68178,G__68179) : sci.impl.interpreter.interpret.call(null,G__68178,G__68179));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67889 = (function (){var G__68180 = ctx;
var G__68181 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68180,G__68181) : sci.impl.interpreter.interpret.call(null,G__68180,G__68181));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67890 = (function (){var G__68182 = ctx;
var G__68183 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68182,G__68183) : sci.impl.interpreter.interpret.call(null,G__68182,G__68183));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67891 = (function (){var G__68184 = ctx;
var G__68185 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68184,G__68185) : sci.impl.interpreter.interpret.call(null,G__68184,G__68185));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67892 = (function (){var G__68186 = ctx;
var G__68187 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68186,G__68187) : sci.impl.interpreter.interpret.call(null,G__68186,G__68187));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67893 = (function (){var G__68188 = ctx;
var G__68189 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68188,G__68189) : sci.impl.interpreter.interpret.call(null,G__68188,G__68189));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg67880,arg67881,arg67882,arg67883,arg67884,arg67885,arg67886,arg67887,arg67888,arg67889,arg67890,arg67891,arg67892,arg67893) : f.call(null,arg67880,arg67881,arg67882,arg67883,arg67884,arg67885,arg67886,arg67887,arg67888,arg67889,arg67890,arg67891,arg67892,arg67893));

break;
case (15):
var arg67894 = (function (){var G__68190 = ctx;
var G__68191 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68190,G__68191) : sci.impl.interpreter.interpret.call(null,G__68190,G__68191));
})();
var args__$1 = cljs.core.rest(args);
var arg67895 = (function (){var G__68192 = ctx;
var G__68193 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68192,G__68193) : sci.impl.interpreter.interpret.call(null,G__68192,G__68193));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67896 = (function (){var G__68194 = ctx;
var G__68195 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68194,G__68195) : sci.impl.interpreter.interpret.call(null,G__68194,G__68195));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67897 = (function (){var G__68196 = ctx;
var G__68197 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68196,G__68197) : sci.impl.interpreter.interpret.call(null,G__68196,G__68197));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67898 = (function (){var G__68198 = ctx;
var G__68199 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68198,G__68199) : sci.impl.interpreter.interpret.call(null,G__68198,G__68199));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67899 = (function (){var G__68200 = ctx;
var G__68201 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68200,G__68201) : sci.impl.interpreter.interpret.call(null,G__68200,G__68201));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67900 = (function (){var G__68202 = ctx;
var G__68203 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68202,G__68203) : sci.impl.interpreter.interpret.call(null,G__68202,G__68203));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67901 = (function (){var G__68204 = ctx;
var G__68205 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68204,G__68205) : sci.impl.interpreter.interpret.call(null,G__68204,G__68205));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67902 = (function (){var G__68206 = ctx;
var G__68207 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68206,G__68207) : sci.impl.interpreter.interpret.call(null,G__68206,G__68207));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67903 = (function (){var G__68208 = ctx;
var G__68209 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68208,G__68209) : sci.impl.interpreter.interpret.call(null,G__68208,G__68209));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67904 = (function (){var G__68210 = ctx;
var G__68211 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68210,G__68211) : sci.impl.interpreter.interpret.call(null,G__68210,G__68211));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67905 = (function (){var G__68212 = ctx;
var G__68213 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68212,G__68213) : sci.impl.interpreter.interpret.call(null,G__68212,G__68213));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67906 = (function (){var G__68214 = ctx;
var G__68215 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68214,G__68215) : sci.impl.interpreter.interpret.call(null,G__68214,G__68215));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67907 = (function (){var G__68216 = ctx;
var G__68217 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68216,G__68217) : sci.impl.interpreter.interpret.call(null,G__68216,G__68217));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67908 = (function (){var G__68218 = ctx;
var G__68219 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68218,G__68219) : sci.impl.interpreter.interpret.call(null,G__68218,G__68219));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg67894,arg67895,arg67896,arg67897,arg67898,arg67899,arg67900,arg67901,arg67902,arg67903,arg67904,arg67905,arg67906,arg67907,arg67908) : f.call(null,arg67894,arg67895,arg67896,arg67897,arg67898,arg67899,arg67900,arg67901,arg67902,arg67903,arg67904,arg67905,arg67906,arg67907,arg67908));

break;
case (16):
var arg67909 = (function (){var G__68220 = ctx;
var G__68221 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68220,G__68221) : sci.impl.interpreter.interpret.call(null,G__68220,G__68221));
})();
var args__$1 = cljs.core.rest(args);
var arg67910 = (function (){var G__68222 = ctx;
var G__68223 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68222,G__68223) : sci.impl.interpreter.interpret.call(null,G__68222,G__68223));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67911 = (function (){var G__68224 = ctx;
var G__68225 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68224,G__68225) : sci.impl.interpreter.interpret.call(null,G__68224,G__68225));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67912 = (function (){var G__68226 = ctx;
var G__68227 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68226,G__68227) : sci.impl.interpreter.interpret.call(null,G__68226,G__68227));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67913 = (function (){var G__68228 = ctx;
var G__68229 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68228,G__68229) : sci.impl.interpreter.interpret.call(null,G__68228,G__68229));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67914 = (function (){var G__68230 = ctx;
var G__68231 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68230,G__68231) : sci.impl.interpreter.interpret.call(null,G__68230,G__68231));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67915 = (function (){var G__68232 = ctx;
var G__68233 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68232,G__68233) : sci.impl.interpreter.interpret.call(null,G__68232,G__68233));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67916 = (function (){var G__68234 = ctx;
var G__68235 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68234,G__68235) : sci.impl.interpreter.interpret.call(null,G__68234,G__68235));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67917 = (function (){var G__68236 = ctx;
var G__68237 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68236,G__68237) : sci.impl.interpreter.interpret.call(null,G__68236,G__68237));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67918 = (function (){var G__68238 = ctx;
var G__68239 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68238,G__68239) : sci.impl.interpreter.interpret.call(null,G__68238,G__68239));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67919 = (function (){var G__68240 = ctx;
var G__68241 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68240,G__68241) : sci.impl.interpreter.interpret.call(null,G__68240,G__68241));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67920 = (function (){var G__68242 = ctx;
var G__68243 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68242,G__68243) : sci.impl.interpreter.interpret.call(null,G__68242,G__68243));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67921 = (function (){var G__68244 = ctx;
var G__68245 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68244,G__68245) : sci.impl.interpreter.interpret.call(null,G__68244,G__68245));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67922 = (function (){var G__68246 = ctx;
var G__68247 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68246,G__68247) : sci.impl.interpreter.interpret.call(null,G__68246,G__68247));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67923 = (function (){var G__68248 = ctx;
var G__68249 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68248,G__68249) : sci.impl.interpreter.interpret.call(null,G__68248,G__68249));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67924 = (function (){var G__68250 = ctx;
var G__68251 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68250,G__68251) : sci.impl.interpreter.interpret.call(null,G__68250,G__68251));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg67909,arg67910,arg67911,arg67912,arg67913,arg67914,arg67915,arg67916,arg67917,arg67918,arg67919,arg67920,arg67921,arg67922,arg67923,arg67924) : f.call(null,arg67909,arg67910,arg67911,arg67912,arg67913,arg67914,arg67915,arg67916,arg67917,arg67918,arg67919,arg67920,arg67921,arg67922,arg67923,arg67924));

break;
case (17):
var arg67925 = (function (){var G__68252 = ctx;
var G__68253 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68252,G__68253) : sci.impl.interpreter.interpret.call(null,G__68252,G__68253));
})();
var args__$1 = cljs.core.rest(args);
var arg67926 = (function (){var G__68254 = ctx;
var G__68255 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68254,G__68255) : sci.impl.interpreter.interpret.call(null,G__68254,G__68255));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67927 = (function (){var G__68256 = ctx;
var G__68257 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68256,G__68257) : sci.impl.interpreter.interpret.call(null,G__68256,G__68257));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67928 = (function (){var G__68258 = ctx;
var G__68259 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68258,G__68259) : sci.impl.interpreter.interpret.call(null,G__68258,G__68259));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67929 = (function (){var G__68260 = ctx;
var G__68261 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68260,G__68261) : sci.impl.interpreter.interpret.call(null,G__68260,G__68261));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67930 = (function (){var G__68262 = ctx;
var G__68263 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68262,G__68263) : sci.impl.interpreter.interpret.call(null,G__68262,G__68263));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67931 = (function (){var G__68264 = ctx;
var G__68265 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68264,G__68265) : sci.impl.interpreter.interpret.call(null,G__68264,G__68265));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67932 = (function (){var G__68266 = ctx;
var G__68267 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68266,G__68267) : sci.impl.interpreter.interpret.call(null,G__68266,G__68267));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67933 = (function (){var G__68268 = ctx;
var G__68269 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68268,G__68269) : sci.impl.interpreter.interpret.call(null,G__68268,G__68269));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67934 = (function (){var G__68270 = ctx;
var G__68271 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68270,G__68271) : sci.impl.interpreter.interpret.call(null,G__68270,G__68271));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67935 = (function (){var G__68272 = ctx;
var G__68273 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68272,G__68273) : sci.impl.interpreter.interpret.call(null,G__68272,G__68273));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67936 = (function (){var G__68274 = ctx;
var G__68275 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68274,G__68275) : sci.impl.interpreter.interpret.call(null,G__68274,G__68275));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67937 = (function (){var G__68276 = ctx;
var G__68277 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68276,G__68277) : sci.impl.interpreter.interpret.call(null,G__68276,G__68277));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67938 = (function (){var G__68278 = ctx;
var G__68279 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68278,G__68279) : sci.impl.interpreter.interpret.call(null,G__68278,G__68279));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67939 = (function (){var G__68280 = ctx;
var G__68281 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68280,G__68281) : sci.impl.interpreter.interpret.call(null,G__68280,G__68281));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67940 = (function (){var G__68282 = ctx;
var G__68283 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68282,G__68283) : sci.impl.interpreter.interpret.call(null,G__68282,G__68283));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg67941 = (function (){var G__68284 = ctx;
var G__68285 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68284,G__68285) : sci.impl.interpreter.interpret.call(null,G__68284,G__68285));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg67925,arg67926,arg67927,arg67928,arg67929,arg67930,arg67931,arg67932,arg67933,arg67934,arg67935,arg67936,arg67937,arg67938,arg67939,arg67940,arg67941) : f.call(null,arg67925,arg67926,arg67927,arg67928,arg67929,arg67930,arg67931,arg67932,arg67933,arg67934,arg67935,arg67936,arg67937,arg67938,arg67939,arg67940,arg67941));

break;
case (18):
var arg67942 = (function (){var G__68286 = ctx;
var G__68287 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68286,G__68287) : sci.impl.interpreter.interpret.call(null,G__68286,G__68287));
})();
var args__$1 = cljs.core.rest(args);
var arg67943 = (function (){var G__68288 = ctx;
var G__68289 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68288,G__68289) : sci.impl.interpreter.interpret.call(null,G__68288,G__68289));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67944 = (function (){var G__68290 = ctx;
var G__68291 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68290,G__68291) : sci.impl.interpreter.interpret.call(null,G__68290,G__68291));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67945 = (function (){var G__68292 = ctx;
var G__68293 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68292,G__68293) : sci.impl.interpreter.interpret.call(null,G__68292,G__68293));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67946 = (function (){var G__68294 = ctx;
var G__68295 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68294,G__68295) : sci.impl.interpreter.interpret.call(null,G__68294,G__68295));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67947 = (function (){var G__68296 = ctx;
var G__68297 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68296,G__68297) : sci.impl.interpreter.interpret.call(null,G__68296,G__68297));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67948 = (function (){var G__68298 = ctx;
var G__68299 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68298,G__68299) : sci.impl.interpreter.interpret.call(null,G__68298,G__68299));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67949 = (function (){var G__68300 = ctx;
var G__68301 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68300,G__68301) : sci.impl.interpreter.interpret.call(null,G__68300,G__68301));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67950 = (function (){var G__68302 = ctx;
var G__68303 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68302,G__68303) : sci.impl.interpreter.interpret.call(null,G__68302,G__68303));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67951 = (function (){var G__68304 = ctx;
var G__68305 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68304,G__68305) : sci.impl.interpreter.interpret.call(null,G__68304,G__68305));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67952 = (function (){var G__68306 = ctx;
var G__68307 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68306,G__68307) : sci.impl.interpreter.interpret.call(null,G__68306,G__68307));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67953 = (function (){var G__68308 = ctx;
var G__68309 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68308,G__68309) : sci.impl.interpreter.interpret.call(null,G__68308,G__68309));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67954 = (function (){var G__68310 = ctx;
var G__68311 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68310,G__68311) : sci.impl.interpreter.interpret.call(null,G__68310,G__68311));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67955 = (function (){var G__68312 = ctx;
var G__68313 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68312,G__68313) : sci.impl.interpreter.interpret.call(null,G__68312,G__68313));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67956 = (function (){var G__68314 = ctx;
var G__68315 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68314,G__68315) : sci.impl.interpreter.interpret.call(null,G__68314,G__68315));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67957 = (function (){var G__68316 = ctx;
var G__68317 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68316,G__68317) : sci.impl.interpreter.interpret.call(null,G__68316,G__68317));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg67958 = (function (){var G__68318 = ctx;
var G__68319 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68318,G__68319) : sci.impl.interpreter.interpret.call(null,G__68318,G__68319));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg67959 = (function (){var G__68320 = ctx;
var G__68321 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68320,G__68321) : sci.impl.interpreter.interpret.call(null,G__68320,G__68321));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg67942,arg67943,arg67944,arg67945,arg67946,arg67947,arg67948,arg67949,arg67950,arg67951,arg67952,arg67953,arg67954,arg67955,arg67956,arg67957,arg67958,arg67959) : f.call(null,arg67942,arg67943,arg67944,arg67945,arg67946,arg67947,arg67948,arg67949,arg67950,arg67951,arg67952,arg67953,arg67954,arg67955,arg67956,arg67957,arg67958,arg67959));

break;
case (19):
var arg67960 = (function (){var G__68322 = ctx;
var G__68323 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68322,G__68323) : sci.impl.interpreter.interpret.call(null,G__68322,G__68323));
})();
var args__$1 = cljs.core.rest(args);
var arg67961 = (function (){var G__68324 = ctx;
var G__68325 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68324,G__68325) : sci.impl.interpreter.interpret.call(null,G__68324,G__68325));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg67962 = (function (){var G__68326 = ctx;
var G__68327 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68326,G__68327) : sci.impl.interpreter.interpret.call(null,G__68326,G__68327));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg67963 = (function (){var G__68328 = ctx;
var G__68329 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68328,G__68329) : sci.impl.interpreter.interpret.call(null,G__68328,G__68329));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg67964 = (function (){var G__68330 = ctx;
var G__68331 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68330,G__68331) : sci.impl.interpreter.interpret.call(null,G__68330,G__68331));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg67965 = (function (){var G__68332 = ctx;
var G__68333 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68332,G__68333) : sci.impl.interpreter.interpret.call(null,G__68332,G__68333));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg67966 = (function (){var G__68334 = ctx;
var G__68335 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68334,G__68335) : sci.impl.interpreter.interpret.call(null,G__68334,G__68335));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg67967 = (function (){var G__68336 = ctx;
var G__68337 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68336,G__68337) : sci.impl.interpreter.interpret.call(null,G__68336,G__68337));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg67968 = (function (){var G__68338 = ctx;
var G__68339 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68338,G__68339) : sci.impl.interpreter.interpret.call(null,G__68338,G__68339));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg67969 = (function (){var G__68340 = ctx;
var G__68341 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68340,G__68341) : sci.impl.interpreter.interpret.call(null,G__68340,G__68341));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg67970 = (function (){var G__68342 = ctx;
var G__68343 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68342,G__68343) : sci.impl.interpreter.interpret.call(null,G__68342,G__68343));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg67971 = (function (){var G__68344 = ctx;
var G__68345 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68344,G__68345) : sci.impl.interpreter.interpret.call(null,G__68344,G__68345));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg67972 = (function (){var G__68346 = ctx;
var G__68347 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68346,G__68347) : sci.impl.interpreter.interpret.call(null,G__68346,G__68347));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg67973 = (function (){var G__68348 = ctx;
var G__68349 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68348,G__68349) : sci.impl.interpreter.interpret.call(null,G__68348,G__68349));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg67974 = (function (){var G__68350 = ctx;
var G__68351 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68350,G__68351) : sci.impl.interpreter.interpret.call(null,G__68350,G__68351));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg67975 = (function (){var G__68352 = ctx;
var G__68353 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68352,G__68353) : sci.impl.interpreter.interpret.call(null,G__68352,G__68353));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg67976 = (function (){var G__68354 = ctx;
var G__68355 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68354,G__68355) : sci.impl.interpreter.interpret.call(null,G__68354,G__68355));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg67977 = (function (){var G__68356 = ctx;
var G__68357 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68356,G__68357) : sci.impl.interpreter.interpret.call(null,G__68356,G__68357));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg67978 = (function (){var G__68358 = ctx;
var G__68359 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68358,G__68359) : sci.impl.interpreter.interpret.call(null,G__68358,G__68359));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg67960,arg67961,arg67962,arg67963,arg67964,arg67965,arg67966,arg67967,arg67968,arg67969,arg67970,arg67971,arg67972,arg67973,arg67974,arg67975,arg67976,arg67977,arg67978) : f.call(null,arg67960,arg67961,arg67962,arg67963,arg67964,arg67965,arg67966,arg67967,arg67968,arg67969,arg67970,arg67971,arg67972,arg67973,arg67974,arg67975,arg67976,arg67977,arg67978));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__68360 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__68360)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__68360)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__68360)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__68360)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__68360)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__68360)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__68361 = ctx;
var G__68362 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68361,G__68362) : sci.impl.interpreter.interpret.call(null,G__68361,G__68362));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__68360)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__68360)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__68360)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__68360)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__68360)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__68360)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__68360)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__68360)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__68360)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__68363 = ctx;
var G__68364 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68363,G__68364) : sci.impl.interpreter.interpret.call(null,G__68363,G__68364));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__68360)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__68360)){
return (new cljs.core.LazySeq(null,(function (){var G__68365 = ctx;
var G__68366 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__68365,G__68366) : sci.impl.interpreter.interpret.call(null,G__68365,G__68366));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__68360)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__68360)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__68360)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__68360)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68360)].join('')));

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
}catch (e68367){if((e68367 instanceof Error)){
var e = e68367;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e68367;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__68374 = op;
var G__68374__$1 = (((G__68374 instanceof cljs.core.Keyword))?G__68374.fqn:null);
switch (G__68374__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68371_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__68371_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__68371_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68372_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__68372_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__68372_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__68373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__68373_SHARP_));
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
var G__68421 = cljs.core.rest(exprs);
var G__68422 = (function (){var G__68377 = ctx;
var G__68378 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__68377,G__68378) : sci.impl.interpreter.eval_form.call(null,G__68377,G__68378));
})();
exprs = G__68421;
ret = G__68422;
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
var G__68423 = ret__$1;
ret = G__68423;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__68380 = arguments.length;
switch (G__68380) {
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
