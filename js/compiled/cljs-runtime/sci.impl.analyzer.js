goog.provide('sci.impl.analyzer');
sci.impl.analyzer.special_syms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"finally","finally",-1065347064,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"new","new",-444906321,null),"null",new cljs.core.Symbol(null,"recur","recur",1202958259,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"catch","catch",-1616370245,null),"null",new cljs.core.Symbol(null,"throw","throw",595905694,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
sci.impl.analyzer.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 35, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"import","import",241030818,null),"null",new cljs.core.Symbol(null,"doseq","doseq",221164135,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"->","->",-2139605430,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"as->","as->",1430690540,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"new","new",-444906321,null),"null",new cljs.core.Symbol(null,"ns","ns",2082130287,null),"null",new cljs.core.Symbol(null,"declare","declare",654042991,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),"null",new cljs.core.Symbol(null,"the-ns","the-ns",1016317907,null),"null",new cljs.core.Symbol(null,"loop","loop",1244978678,null),"null",new cljs.core.Symbol(null,"for","for",316745208,null),"null",new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),"null",new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"comment","comment",-2122229700,null),"null",new cljs.core.Symbol(null,"resolve","resolve",56086045,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null",new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),"null",new cljs.core.Symbol(null,"quote*","quote*",1608011487,null),"null"], null), null);
sci.impl.analyzer.check_permission_BANG_ = (function sci$impl$analyzer$check_permission_BANG_(p__66806,check_sym,sym){
var map__66807 = p__66806;
var map__66807__$1 = (((((!((map__66807 == null))))?(((((map__66807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66807):map__66807);
var allow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66807__$1,new cljs.core.Keyword(null,"allow","allow",-1857325745));
var deny = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66807__$1,new cljs.core.Keyword(null,"deny","deny",1589338523));
if(cljs.core.truth_((function (){var G__66809 = new cljs.core.Keyword(null,"allow","allow",-1857325745);
var G__66810 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__66809,G__66810) : sci.impl.utils.kw_identical_QMARK_.call(null,G__66809,G__66810));
})())){
return null;
} else {
var check_sym__$1 = sci.impl.utils.strip_core_ns(check_sym);
if((cljs.core.truth_(allow)?cljs.core.contains_QMARK_(allow,check_sym__$1):true)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," is not allowed!"].join(''),sym);
}

if((cljs.core.truth_(deny)?cljs.core.contains_QMARK_(deny,check_sym__$1):false)){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," is not allowed!"].join(''),sym);
} else {
return null;
}
}
});
sci.impl.analyzer.lookup_STAR_ = (function sci$impl$analyzer$lookup_STAR_(p__66811,sym,call_QMARK_){
var map__66812 = p__66811;
var map__66812__$1 = (((((!((map__66812 == null))))?(((((map__66812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66812):map__66812);
var ctx = map__66812__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66812__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var sym_ns = (function (){var G__66814 = cljs.core.namespace(sym);
if((G__66814 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__66814);
}
})();
var sym_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
var env__$1 = cljs.core.deref(env);
var cnn = sci.impl.vars.current_ns_name();
var the_current_ns = (function (){var G__66815 = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env__$1);
return (cnn.cljs$core$IFn$_invoke$arity$1 ? cnn.cljs$core$IFn$_invoke$arity$1(G__66815) : cnn.call(null,G__66815));
})();
var sym_ns__$1 = (cljs.core.truth_(sym_ns)?(function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),sym_ns], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sym_ns;
}
})():null);
var or__4126__auto__ = cljs.core.find(the_current_ns,sym);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = sym_ns__$1;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym_ns__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym_ns__$1,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))));
} else {
return and__4115__auto__;
}
})())){
var or__4126__auto____$1 = (function (){var G__66817 = env__$1;
var G__66817__$1 = (((G__66817 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__66817));
var G__66817__$2 = (((G__66817__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__66817__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)));
if((G__66817__$2 == null)){
return null;
} else {
return cljs.core.find(G__66817__$2,sym_name);
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5735__auto__ = (cljs.core.truth_(call_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.macros,sym_name):null);
if(cljs.core.truth_(temp__5735__auto__)){
var v = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,v], null);
} else {
return null;
}
}
} else {
if(cljs.core.truth_(sym_ns__$1)){
var or__4126__auto____$1 = (function (){var G__66819 = env__$1;
var G__66819__$1 = (((G__66819 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__66819));
var G__66819__$2 = (((G__66819__$1 == null))?null:(sym_ns__$1.cljs$core$IFn$_invoke$arity$1 ? sym_ns__$1.cljs$core$IFn$_invoke$arity$1(G__66819__$1) : sym_ns__$1.call(null,G__66819__$1)));
if((G__66819__$2 == null)){
return null;
} else {
return cljs.core.find(G__66819__$2,sym_name);
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5735__auto__ = sci.impl.interop.resolve_class(ctx,sym_ns__$1);
if(cljs.core.truth_(temp__5735__auto__)){
var clazz = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clazz,sym_name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"static-access","static-access",-1860919441)], null))], null);
} else {
return null;
}
}
} else {
if(cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(the_current_ns,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null)),sym_name)){
return null;
} else {
var or__4126__auto____$1 = (function (){var G__66821 = env__$1;
var G__66821__$1 = (((G__66821 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__66821));
var G__66821__$2 = (((G__66821__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__66821__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)));
if((G__66821__$2 == null)){
return null;
} else {
return cljs.core.find(G__66821__$2,sym_name);
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = (cljs.core.truth_((cljs.core.truth_(call_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.macros,sym):null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,sym], null):null);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var temp__5735__auto__ = sci.impl.interop.resolve_class(ctx,sym);
if(cljs.core.truth_(temp__5735__auto__)){
var c = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,c], null);
} else {
return null;
}
}
}
}

}
}
}
});
sci.impl.analyzer.tag = (function sci$impl$analyzer$tag(_ctx,expr){
var temp__5735__auto__ = cljs.core.meta(expr);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
});
sci.impl.analyzer.lookup = (function sci$impl$analyzer$lookup(p__66825,sym,call_QMARK_){
var map__66826 = p__66825;
var map__66826__$1 = (((((!((map__66826 == null))))?(((((map__66826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66826):map__66826);
var ctx = map__66826__$1;
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66826__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var vec__66828 = (function (){var or__4126__auto__ = (function (){var temp__5735__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__66836 = temp__5735__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66836,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66836,(1),null);
var t = sci.impl.analyzer.tag(ctx,v);
var v__$1 = sci.impl.utils.mark_resolve_sym(k);
var v__$2 = (cljs.core.truth_(t)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(v__$1,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),t):v__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$2], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var temp__5735__auto__ = sci.impl.analyzer.lookup_STAR_(ctx,sym,call_QMARK_);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__66845 = temp__5735__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66845,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66845,(1),null);
var kv = vec__66845;
sci.impl.analyzer.check_permission_BANG_(ctx,k,sym);

return kv;
} else {
return null;
}
}
})();
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66828,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66828,(1),null);
var kv = vec__66828;
var temp__5733__auto__ = ((cljs.core.not(new cljs.core.Keyword("sci.impl","prevent-deref","sci.impl/prevent-deref",-1401491385).cljs$core$IFn$_invoke$arity$1(ctx)))?cljs.core.meta(k):false);
if(cljs.core.truth_(temp__5733__auto__)){
var m = temp__5733__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("sci.impl","deref!","sci.impl/deref!",599653178).cljs$core$IFn$_invoke$arity$1(m))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"deref!","deref!",153059469)], null))], null);
} else {
return kv;
}
} else {
return kv;
}
});
sci.impl.analyzer.resolve_symbol = (function sci$impl$analyzer$resolve_symbol(var_args){
var G__66851 = arguments.length;
switch (G__66851) {
case 2:
return sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$2 = (function (ctx,sym){
return sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,sym,false);
}));

(sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3 = (function (ctx,sym,call_QMARK_){
var sym__$1 = sym;
var res = cljs.core.second((function (){var or__4126__auto__ = sci.impl.analyzer.lookup(ctx,sym__$1,call_QMARK_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var n = cljs.core.name(sym__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = call_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return ((clojure.string.starts_with_QMARK_(n,".")) && ((((n).length) > (1))));
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null)], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = call_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return ((clojure.string.ends_with_QMARK_(n,".")) && ((((n).length) > (1))));
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null)], null);
} else {
if(clojure.string.starts_with_QMARK_(n,"'")){
var v = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v], null);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1)].join(''),sym__$1);

}
}
}
}
})());
return res;
}));

(sci.impl.analyzer.resolve_symbol.cljs$lang$maxFixedArity = 3);

sci.impl.analyzer.analyze_children = (function sci$impl$analyzer$analyze_children(ctx,children){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__66857_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__66857_SHARP_) : sci.impl.analyzer.analyze.call(null,ctx,p1__66857_SHARP_));
}),children);
});
sci.impl.analyzer.maybe_destructured = (function sci$impl$analyzer$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__67108 = cljs.core.next(params__$1);
var G__67109 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__67110 = lets;
params__$1 = G__67108;
new_params = G__67109;
lets = G__67110;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__67111 = cljs.core.next(params__$1);
var G__67112 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__67113 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__67111;
new_params = G__67112;
lets = G__67113;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new_params,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))))], null)], null);
}
break;
}
}
});
sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__66863,fn_name,p__66864,macro_QMARK_){
var map__66865 = p__66863;
var map__66865__$1 = (((((!((map__66865 == null))))?(((((map__66865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66865):map__66865);
var ctx = map__66865__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66865__$1,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985));
var vec__66866 = p__66864;
var seq__66867 = cljs.core.seq(vec__66866);
var first__66868 = cljs.core.first(seq__66867);
var seq__66867__$1 = cljs.core.next(seq__66867);
var binding_vector = first__66868;
var body_exprs = seq__66867__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_(binding_vector)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Parameter declaration should be a vector",fn_expr);
}

var binding_vector__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",1482799337,null),new cljs.core.Symbol(null,"&env","&env",-919163083,null)], null),binding_vector):binding_vector);
var fixed_args = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__66858_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__66858_SHARP_);
}),binding_vector__$1);
var fixed_arity = cljs.core.count(fixed_args);
var var_arg_name = cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__66859_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__66859_SHARP_);
}),binding_vector__$1));
var next_body = cljs.core.next(body_exprs);
var conds = ((next_body)?(function (){var e = cljs.core.first(body_exprs);
if(cljs.core.map_QMARK_(e)){
return e;
} else {
return null;
}
})():null);
var body_exprs__$1 = (cljs.core.truth_(conds)?next_body:body_exprs);
var conds__$1 = (function (){var or__4126__auto__ = conds;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.meta(binding_vector__$1);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body_exprs__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body_exprs__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body_exprs__$1))):cljs.core.first(body_exprs__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body_exprs__$1);
var body_exprs__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body_exprs__$2):body_exprs__$2);
var map__66874 = sci.impl.analyzer.maybe_destructured(binding_vector__$1,body_exprs__$3);
var map__66874__$1 = (((((!((map__66874 == null))))?(((((map__66874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66874):map__66874);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66874__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66874__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ctx__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge,cljs.core.zipmap(params,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
var body__$1 = sci.impl.analyzer.analyze_children(ctx__$1,body);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("sci.impl","body","sci.impl/body",-1493886648),body__$1,new cljs.core.Keyword("sci.impl","params","sci.impl/params",-175360738),params,new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052),fixed_arity,new cljs.core.Keyword("sci.impl","var-arg-name","sci.impl/var-arg-name",1800498100),var_arg_name,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name], null);
});
sci.impl.analyzer.expand_fn = (function sci$impl$analyzer$expand_fn(ctx,p__66882,macro_QMARK_){
var vec__66883 = p__66882;
var seq__66884 = cljs.core.seq(vec__66883);
var first__66885 = cljs.core.first(seq__66884);
var seq__66884__$1 = cljs.core.next(seq__66884);
var _fn = first__66885;
var first__66885__$1 = cljs.core.first(seq__66884__$1);
var seq__66884__$2 = cljs.core.next(seq__66884__$1);
var name_QMARK_ = first__66885__$1;
var body = seq__66884__$2;
var fn_expr = vec__66883;
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985),fn_expr);
var fn_name = (((name_QMARK_ instanceof cljs.core.Symbol))?name_QMARK_:null);
var body__$1 = (cljs.core.truth_(fn_name)?body:cljs.core.cons(name_QMARK_,body));
var bodies = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?body__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null));
var ctx__$2 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),null):ctx__$1);
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__66886,body__$2){
var map__66887 = p__66886;
var map__66887__$1 = (((((!((map__66887 == null))))?(((((map__66887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66887):map__66887);
var acc = map__66887__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66887__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66887__$1,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596));
var arglist = cljs.core.first(body__$2);
var body__$3 = sci.impl.analyzer.expand_fn_args_PLUS_body(ctx__$2,fn_name,body__$2,macro_QMARK_);
var body__$4 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(body__$3,new cljs.core.Keyword("sci.impl","arglist","sci.impl/arglist",2082561957),arglist);
var var_arg_name = new cljs.core.Keyword("sci.impl","var-arg-name","sci.impl/var-arg-name",1800498100).cljs$core$IFn$_invoke$arity$1(body__$4);
var fixed_arity = new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052).cljs$core$IFn$_invoke$arity$1(body__$4);
var new_min_varargs = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_((function (){var and__4115__auto__ = var_arg_name;
if(cljs.core.truth_(and__4115__auto__)){
return min_varargs;
} else {
return and__4115__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Can't have more than 1 variadic overload",fn_expr);
} else {
}

if(cljs.core.truth_(((cljs.core.not(var_arg_name))?(function (){var and__4115__auto__ = min_varargs;
if(cljs.core.truth_(and__4115__auto__)){
return (fixed_arity > min_varargs);
} else {
return and__4115__auto__;
}
})():false))){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Can't have fixed arity function with more params than variadic function",fn_expr);
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596),new_min_varargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(function (){var x__4214__auto__ = new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052).cljs$core$IFn$_invoke$arity$1(body__$4);
var y__4215__auto__ = max_fixed;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], 0)),new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.conj,body__$4),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.conj,arglist);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"min-var-args","min-var-args",-1883389660),null,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(-1)], null),bodies);
var arities = new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661),arities,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395),arglists,new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
});
sci.impl.analyzer.expand_let_STAR_ = (function sci$impl$analyzer$expand_let_STAR_(ctx,destructured_let_bindings,exprs){
var vec__66889 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__66892,p__66893){
var vec__66894 = p__66892;
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66894,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66894,(1),null);
var vec__66897 = p__66893;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66897,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66897,(1),null);
var v = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,binding_value) : sci.impl.analyzer.analyze.call(null,ctx__$1,binding_value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$5(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.assoc,binding_name,v),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new_let_bindings,binding_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66889,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66889,(1),null);
return sci.impl.utils.mark_eval_call(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),null,(1),null)),(new cljs.core.List(null,new_let_bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.analyzer.analyze_children(ctx__$1,exprs)], 0)))));
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.expand_let = (function sci$impl$analyzer$expand_let(ctx,p__66900){
var vec__66901 = p__66900;
var seq__66902 = cljs.core.seq(vec__66901);
var first__66903 = cljs.core.first(seq__66902);
var seq__66902__$1 = cljs.core.next(seq__66902);
var _let = first__66903;
var first__66903__$1 = cljs.core.first(seq__66902__$1);
var seq__66902__$2 = cljs.core.next(seq__66902__$1);
var let_bindings = first__66903__$1;
var exprs = seq__66902__$2;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.expand_let_STAR_(ctx,let_bindings__$1,exprs);
});
/**
 * The -> macro from clojure.core.
 */
sci.impl.analyzer.expand__GT_ = (function sci$impl$analyzer$expand__GT_(ctx,p__66904){
var vec__66905 = p__66904;
var seq__66906 = cljs.core.seq(vec__66905);
var first__66907 = cljs.core.first(seq__66906);
var seq__66906__$1 = cljs.core.next(seq__66906);
var x = first__66907;
var forms = seq__66906__$1;
var expanded = (function (){var x__$1 = x;
var forms__$1 = forms;
while(true){
if(forms__$1){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.first(form),(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)),cljs.core.next(form)),cljs.core.meta(form)):(new cljs.core.List(null,form,(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)));
var G__67114 = threaded;
var G__67115 = cljs.core.next(forms__$1);
x__$1 = G__67114;
forms__$1 = G__67115;
continue;
} else {
return x__$1;
}
break;
}
})();
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,expanded) : sci.impl.analyzer.analyze.call(null,ctx,expanded));
});
/**
 * The ->> macro from clojure.core.
 */
sci.impl.analyzer.expand_as__GT_ = (function sci$impl$analyzer$expand_as__GT_(ctx,p__66908){
var vec__66909 = p__66908;
var seq__66910 = cljs.core.seq(vec__66909);
var first__66911 = cljs.core.first(seq__66910);
var seq__66910__$1 = cljs.core.next(seq__66910);
var _as = first__66911;
var first__66911__$1 = cljs.core.first(seq__66910__$1);
var seq__66910__$2 = cljs.core.next(seq__66910__$1);
var expr = first__66911__$1;
var first__66911__$2 = cljs.core.first(seq__66910__$2);
var seq__66910__$3 = cljs.core.next(seq__66910__$2);
var name = first__66911__$2;
var forms = seq__66910__$3;
var vec__66912 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(name),cljs.core.butlast(forms))], 0))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.empty_QMARK_(forms))?name:cljs.core.last(forms)),null,(1),null)))));
var seq__66913 = cljs.core.seq(vec__66912);
var first__66914 = cljs.core.first(seq__66913);
var seq__66913__$1 = cljs.core.next(seq__66913);
var let_bindings = first__66914;
var body = seq__66913__$1;
return sci.impl.analyzer.expand_let_STAR_(ctx,let_bindings,body);
});
sci.impl.analyzer.expand_def = (function sci$impl$analyzer$expand_def(ctx,p__66915){
var vec__66916 = p__66915;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66916,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66916,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66916,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66916,(3),null);
var expr = vec__66916;
var G__66919_67117 = ctx;
var G__66920_67118 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,var_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__66919_67117,G__66920_67118) : sci.impl.analyzer.expand_declare.call(null,G__66919_67117,G__66920_67118));

if(cljs.core.simple_symbol_QMARK_(var_name)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Var name should be simple symbol.",expr);
}

var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(expr),(2)))?new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647):(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.analyzer.analyze.call(null,ctx,init)));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.analyzer.analyze.call(null,ctx,m));
var m__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns));
var m__$3 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$2,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m__$2);
var var_name__$1 = cljs.core.with_meta(var_name,m__$3);
var G__66921_67121 = ctx;
var G__66922_67122 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,var_name__$1], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__66921_67121,G__66922_67122) : sci.impl.analyzer.expand_declare.call(null,G__66921_67121,G__66922_67122));

return sci.impl.utils.mark_eval_call((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,var_name__$1,(new cljs.core.List(null,init__$1,null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.expand_defn = (function sci$impl$analyzer$expand_defn(ctx,p__66923){
var vec__66924 = p__66923;
var seq__66925 = cljs.core.seq(vec__66924);
var first__66926 = cljs.core.first(seq__66925);
var seq__66925__$1 = cljs.core.next(seq__66925);
var op = first__66926;
var first__66926__$1 = cljs.core.first(seq__66925__$1);
var seq__66925__$2 = cljs.core.next(seq__66925__$1);
var fn_name = first__66926__$1;
var body = seq__66925__$2;
var expr = vec__66924;
if(cljs.core.simple_symbol_QMARK_(fn_name)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Var name should be simple symbol.",expr);
}

var G__66930_67123 = ctx;
var G__66931_67124 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,fn_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__66930_67123,G__66931_67124) : sci.impl.analyzer.expand_declare.call(null,G__66930_67123,G__66931_67124));

var macro_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("defmacro",cljs.core.name(op));
var vec__66932 = cljs.core.split_with(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.sequential_QMARK_),body);
var pre_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66932,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66932,(1),null);
var _ = ((cljs.core.empty_QMARK_(body__$1))?sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Parameter declaration missing.",expr):null);
var docstring = (function (){var temp__5735__auto__ = cljs.core.first(pre_body);
if(cljs.core.truth_(temp__5735__auto__)){
var ds = temp__5735__auto__;
if(typeof ds === 'string'){
return ds;
} else {
return null;
}
} else {
return null;
}
})();
var meta_map = (function (){var temp__5735__auto__ = cljs.core.last(pre_body);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
if(cljs.core.map_QMARK_(m)){
return m;
} else {
return null;
}
} else {
return null;
}
})();
var meta_map__$1 = (function (){var G__66935 = ctx;
var G__66936 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(expr),meta_map], 0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__66935,G__66936) : sci.impl.analyzer.analyze.call(null,G__66935,G__66936));
})();
var fn_body = cljs.core.with_meta(cljs.core.cons(new cljs.core.Symbol(null,"fn","fn",465265323,null),body__$1),cljs.core.meta(expr));
var f = sci.impl.analyzer.expand_fn(ctx,fn_body,macro_QMARK_);
var arglists = cljs.core.seq(new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395).cljs$core$IFn$_invoke$arity$1(f));
var meta_map__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(meta_map__$1,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists], 0));
var fn_name__$1 = cljs.core.with_meta(fn_name,(function (){var G__66937 = meta_map__$2;
var G__66937__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66937,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):G__66937);
if(macro_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66937__$1,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
return G__66937__$1;
}
})());
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name__$1], 0));
return sci.impl.utils.mark_eval_call((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,fn_name__$1,(new cljs.core.List(null,f__$1,null,(1),null)),(2),null)),(3),null)));
});
/**
 * The comment macro from clojure.core.
 */
sci.impl.analyzer.expand_comment = (function sci$impl$analyzer$expand_comment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67135 = arguments.length;
var i__4737__auto___67136 = (0);
while(true){
if((i__4737__auto___67136 < len__4736__auto___67135)){
args__4742__auto__.push((arguments[i__4737__auto___67136]));

var G__67137 = (i__4737__auto___67136 + (1));
i__4737__auto___67136 = G__67137;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.analyzer.expand_comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.analyzer.expand_comment.cljs$core$IFn$_invoke$arity$variadic = (function (_ctx,_body){
return null;
}));

(sci.impl.analyzer.expand_comment.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.analyzer.expand_comment.cljs$lang$applyTo = (function (seq66938){
var G__66939 = cljs.core.first(seq66938);
var seq66938__$1 = cljs.core.next(seq66938);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66939,seq66938__$1);
}));

sci.impl.analyzer.expand_loop = (function sci$impl$analyzer$expand_loop(ctx,expr){
var bv = cljs.core.second(expr);
var arg_names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bv);
var init_vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(bv));
var vec__66941 = ((cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,arg_names))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bv,arg_names], null):(function (){var syms = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_names),(function (){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}));
var bv1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,syms,init_vals);
var bv2 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,arg_names,syms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bv1,bv2)),syms], null);
})());
var bv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66941,(0),null);
var syms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66941,(1),null);
var body = cljs.core.nnext(expr);
var expansion = (new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),(new cljs.core.List(null,bv__$1,(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(arg_names),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),syms),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,expansion) : sci.impl.analyzer.analyze.call(null,ctx,expansion));
});
sci.impl.analyzer.expand_lazy_seq = (function sci$impl$analyzer$expand_lazy_seq(ctx,expr){
var body = cljs.core.rest(expr);
return sci.impl.utils.mark_eval_call((new cljs.core.List(null,new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),(new cljs.core.List(null,(function (){var G__66944 = ctx;
var G__66945 = (new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),(new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__66944,G__66945) : sci.impl.analyzer.analyze.call(null,G__66944,G__66945));
})(),null,(1),null)),(2),null)));
});
sci.impl.analyzer.expand_if = (function sci$impl$analyzer$expand_if(ctx,p__66946){
var vec__66947 = p__66946;
var seq__66948 = cljs.core.seq(vec__66947);
var first__66949 = cljs.core.first(seq__66948);
var seq__66948__$1 = cljs.core.next(seq__66948);
var _if = first__66949;
var exprs = seq__66948__$1;
var expr = vec__66947;
var G__66950 = cljs.core.count(exprs);
switch (G__66950) {
case (0):
case (1):
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Too few arguments to if",expr);

break;
case (2):
case (3):
return sci.impl.utils.mark_eval_call(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),sci.impl.analyzer.analyze_children(ctx,exprs)))));

break;
default:
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Too many arguments to if",expr);

}
});
sci.impl.analyzer.expand_case = (function sci$impl$analyzer$expand_case(ctx,expr){
var v = (function (){var G__66951 = ctx;
var G__66952 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__66951,G__66952) : sci.impl.analyzer.analyze.call(null,G__66951,G__66952));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),(function (){var G__66953 = ctx;
var G__66954 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__66953,G__66954) : sci.impl.analyzer.analyze.call(null,G__66953,G__66954));
})()], null):null);
var cases = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(match_clauses,result_clauses);
var assoc_new = (function (m,k,v__$1){
if((!(cljs.core.contains_QMARK_(m,k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v__$1);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Duplicate case test constant ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),expr);
}
});
var case_map = (function (){var cases__$1 = cljs.core.seq(cases);
var ret_map = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cases__$1){
var vec__66958 = cases__$1;
var seq__66959 = cljs.core.seq(vec__66958);
var first__66960 = cljs.core.first(seq__66959);
var seq__66959__$1 = cljs.core.next(seq__66959);
var k = first__66960;
var first__66960__$1 = cljs.core.first(seq__66959__$1);
var seq__66959__$2 = cljs.core.next(seq__66959__$1);
var v__$1 = first__66960__$1;
var cases__$2 = seq__66959__$2;
if(cljs.core.list_QMARK_(k)){
var G__67139 = cases__$2;
var G__67140 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__66958,seq__66959,first__66960,seq__66959__$1,k,first__66960__$1,seq__66959__$2,v__$1,cases__$2,v,clauses,match_clauses,result_clauses,default$,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v__$1);
});})(cases__$1,ret_map,vec__66958,seq__66959,first__66960,seq__66959__$1,k,first__66960__$1,seq__66959__$2,v__$1,cases__$2,v,clauses,match_clauses,result_clauses,default$,cases,assoc_new))
,ret_map,k);
cases__$1 = G__67139;
ret_map = G__67140;
continue;
} else {
var G__67146 = cases__$2;
var G__67147 = assoc_new(ret_map,k,v__$1);
cases__$1 = G__67146;
ret_map = G__67147;
continue;
}
} else {
return ret_map;
}
break;
}
})();
var ret = sci.impl.utils.mark_eval_call((new cljs.core.List(null,new cljs.core.Symbol(null,"case","case",-1510733573,null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"case-map","case-map",955082964),case_map,new cljs.core.Keyword(null,"case-val","case-val",880926521),v,new cljs.core.Keyword(null,"case-default","case-default",1140470708),default$], null),(new cljs.core.List(null,default$,null,(1),null)),(2),null)),(3),null)));
return sci.impl.utils.mark_eval_call(ret);
});
sci.impl.analyzer.expand_try = (function sci$impl$analyzer$expand_try(ctx,p__66961){
var vec__66962 = p__66961;
var seq__66963 = cljs.core.seq(vec__66962);
var first__66964 = cljs.core.first(seq__66963);
var seq__66963__$1 = cljs.core.next(seq__66963);
var _try = first__66964;
var body = seq__66963__$1;
var vec__66965 = (function (){var exprs = cljs.core.seq(body);
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first(expr))))){
var G__67148 = exprs__$1;
var G__67149 = body_exprs;
var G__67150 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr);
var G__67151 = finally_expr;
exprs = G__67148;
body_exprs = G__67149;
catch_exprs = G__67150;
finally_expr = G__67151;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(expr))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr], null);
} else {
var G__67152 = exprs__$1;
var G__67153 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr);
var G__67154 = catch_exprs;
var G__67155 = finally_expr;
exprs = G__67152;
body_exprs = G__67153;
catch_exprs = G__67154;
finally_expr = G__67155;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66965,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66965,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66965,(2),null);
var body__$1 = (function (){var G__66968 = ctx;
var G__66969 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__66968,G__66969) : sci.impl.analyzer.analyze.call(null,G__66968,G__66969));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__66970 = c;
var seq__66971 = cljs.core.seq(vec__66970);
var first__66972 = cljs.core.first(seq__66971);
var seq__66971__$1 = cljs.core.next(seq__66971);
var _ = first__66972;
var first__66972__$1 = cljs.core.first(seq__66971__$1);
var seq__66971__$2 = cljs.core.next(seq__66971__$1);
var ex = first__66972__$1;
var first__66972__$2 = cljs.core.first(seq__66971__$2);
var seq__66971__$3 = cljs.core.next(seq__66971__$2);
var binding = first__66972__$2;
var body__$2 = seq__66971__$3;
var temp__5733__auto__ = sci.impl.interop.resolve_class(ctx,ex);
if(cljs.core.truth_(temp__5733__auto__)){
var clazz = temp__5733__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),clazz,new cljs.core.Keyword(null,"binding","binding",539932593),binding,new cljs.core.Keyword(null,"body","body",-2049205669),(function (){var G__66973 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),binding], null),null);
var G__66974 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__66973,G__66974) : sci.impl.analyzer.analyze.call(null,G__66973,G__66974));
})()], null);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex)].join(''),ex);
}
}),catches);
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__66975 = ctx;
var G__66976 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__66975,G__66976) : sci.impl.analyzer.analyze.call(null,G__66975,G__66976));
})():null);
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),body__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617),catches__$1,new cljs.core.Keyword(null,"finally","finally",1589088705),finally$__$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"try","try",1380742522)], null));
});
sci.impl.analyzer.expand_declare = (function sci$impl$analyzer$expand_declare(ctx,p__66977){
var vec__66978 = p__66977;
var seq__66979 = cljs.core.seq(vec__66978);
var first__66980 = cljs.core.first(seq__66979);
var seq__66979__$1 = cljs.core.next(seq__66979);
var _declare = first__66980;
var names = seq__66979__$1;
var _expr = vec__66978;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),(function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),(function (current_ns){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,name){
if(cljs.core.contains_QMARK_(acc,name)){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,name,(function (){var G__66983 = sci.impl.vars.__GT_SciVar(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(name),new cljs.core.Keyword(null,"name","name",1843675177),name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)));
G__66983.sci$impl$vars$IVar$unbind$arity$1(null);

return G__66983;
})());
}
}),current_ns,names);
}));
}));

return null;
});
sci.impl.analyzer.do_import = (function sci$impl$analyzer$do_import(p__66986,p__66987){
var map__66989 = p__66986;
var map__66989__$1 = (((((!((map__66989 == null))))?(((((map__66989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66989):map__66989);
var ctx = map__66989__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66989__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var vec__66990 = p__66987;
var seq__66991 = cljs.core.seq(vec__66990);
var first__66992 = cljs.core.first(seq__66991);
var seq__66991__$1 = cljs.core.next(seq__66991);
var _ = first__66992;
var import_symbols_or_lists = seq__66991__$1;
var expr = vec__66990;
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66984_SHARP_){
if(((cljs.core.seq_QMARK_(p1__66984_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__66984_SHARP_))))){
return cljs.core.second(p1__66984_SHARP_);
} else {
return p1__66984_SHARP_;
}
}),import_symbols_or_lists);
var seq__66995 = cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (specs,map__66989,map__66989__$1,ctx,env,vec__66990,seq__66991,first__66992,seq__66991__$1,_,import_symbols_or_lists,expr){
return (function (v,spec){
if((spec instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.name(spec));
} else {
var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66985_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__66985_SHARP_)].join('');
}),cs));
}
});})(specs,map__66989,map__66989__$1,ctx,env,vec__66990,seq__66991,first__66992,seq__66991__$1,_,import_symbols_or_lists,expr))
,cljs.core.PersistentVector.EMPTY,specs));
var chunk__66996 = null;
var count__66997 = (0);
var i__66998 = (0);
while(true){
if((i__66998 < count__66997)){
var spec = chunk__66996.cljs$core$IIndexed$_nth$arity$2(null,i__66998);
var fq_class_name_67162 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_67162))){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_67162)].join(''),expr);
}

var last_dot_67163 = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(spec,".");
var class_name_67164 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(spec,(last_dot_67163 + (1)),cljs.core.count(spec));
var cnn_67165 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_67165,new cljs.core.Keyword(null,"imports","imports",-1249933394),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(class_name_67164)], null),fq_class_name_67162);


var G__67166 = seq__66995;
var G__67167 = chunk__66996;
var G__67168 = count__66997;
var G__67169 = (i__66998 + (1));
seq__66995 = G__67166;
chunk__66996 = G__67167;
count__66997 = G__67168;
i__66998 = G__67169;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__66995);
if(temp__5735__auto__){
var seq__66995__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66995__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__66995__$1);
var G__67170 = cljs.core.chunk_rest(seq__66995__$1);
var G__67171 = c__4556__auto__;
var G__67172 = cljs.core.count(c__4556__auto__);
var G__67173 = (0);
seq__66995 = G__67170;
chunk__66996 = G__67171;
count__66997 = G__67172;
i__66998 = G__67173;
continue;
} else {
var spec = cljs.core.first(seq__66995__$1);
var fq_class_name_67174 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_67174))){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_67174)].join(''),expr);
}

var last_dot_67175 = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(spec,".");
var class_name_67176 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(spec,(last_dot_67175 + (1)),cljs.core.count(spec));
var cnn_67177 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_67177,new cljs.core.Keyword(null,"imports","imports",-1249933394),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(class_name_67176)], null),fq_class_name_67174);


var G__67178 = cljs.core.next(seq__66995__$1);
var G__67179 = null;
var G__67180 = (0);
var G__67181 = (0);
seq__66995 = G__67178;
chunk__66996 = G__67179;
count__66997 = G__67180;
i__66998 = G__67181;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.analyzer.expand_dot = (function sci$impl$analyzer$expand_dot(ctx,p__67007){
var vec__67008 = p__67007;
var seq__67009 = cljs.core.seq(vec__67008);
var first__67010 = cljs.core.first(seq__67009);
var seq__67009__$1 = cljs.core.next(seq__67009);
var _dot = first__67010;
var first__67010__$1 = cljs.core.first(seq__67009__$1);
var seq__67009__$2 = cljs.core.next(seq__67009__$1);
var instance_expr = first__67010__$1;
var first__67010__$2 = cljs.core.first(seq__67009__$2);
var seq__67009__$3 = cljs.core.next(seq__67009__$2);
var method_expr = first__67010__$2;
var args = seq__67009__$3;
var _expr = vec__67008;
var vec__67011 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__67012 = cljs.core.seq(vec__67011);
var first__67013 = cljs.core.first(seq__67012);
var seq__67012__$1 = cljs.core.next(seq__67012);
var method_expr__$1 = first__67013;
var args__$1 = seq__67012__$1;
var instance_expr__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.analyzer.analyze.call(null,ctx,instance_expr));
var instance_expr__$2 = sci.impl.utils.vary_meta_STAR_(instance_expr__$1,(function (m){
var temp__5733__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5733__auto__)){
var t = temp__5733__auto__;
var clazz = (function (){var or__4126__auto__ = sci.impl.interop.resolve_class(ctx,t);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),t);
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"tag-class","tag-class",714967874),clazz);
} else {
return m;
}
}));
var method_expr__$2 = cljs.core.name(method_expr__$1);
var args__$2 = sci.impl.analyzer.analyze_children(ctx,args__$1);
var res = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,instance_expr__$2,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,method_expr__$2,null,(1),null)),(new cljs.core.List(null,args__$2,null,(1),null))], 0))));
return sci.impl.utils.mark_eval_call(res);
});
/**
 * Expands (. x method)
 */
sci.impl.analyzer.expand_dot_STAR__STAR_ = (function sci$impl$analyzer$expand_dot_STAR__STAR_(ctx,expr){
if((cljs.core.count(expr) < (3))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,expr);
});
/**
 * Expands (.foo x)
 */
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__67017){
var vec__67018 = p__67017;
var seq__67019 = cljs.core.seq(vec__67018);
var first__67020 = cljs.core.first(seq__67019);
var seq__67019__$1 = cljs.core.next(seq__67019);
var method_name = first__67020;
var first__67020__$1 = cljs.core.first(seq__67019__$1);
var seq__67019__$2 = cljs.core.next(seq__67019__$1);
var obj = first__67020__$1;
var args = seq__67019__$2;
var expr = vec__67018;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.expand_new = (function sci$impl$analyzer$expand_new(ctx,p__67023){
var vec__67024 = p__67023;
var seq__67025 = cljs.core.seq(vec__67024);
var first__67026 = cljs.core.first(seq__67025);
var seq__67025__$1 = cljs.core.next(seq__67025);
var _new = first__67026;
var first__67026__$1 = cljs.core.first(seq__67025__$1);
var seq__67025__$2 = cljs.core.next(seq__67025__$1);
var class_sym = first__67026__$1;
var args = seq__67025__$2;
var temp__5733__auto__ = sci.impl.interop.resolve_class_opts(ctx,class_sym);
if(cljs.core.truth_(temp__5733__auto__)){
var map__67028 = temp__5733__auto__;
var map__67028__$1 = (((((!((map__67028 == null))))?(((((map__67028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67028):map__67028);
var _opts = map__67028__$1;
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67028__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args__$1 = sci.impl.analyzer.analyze_children(ctx,args);
return sci.impl.utils.mark_eval_call((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),(new cljs.core.List(null,constructor$,(new cljs.core.List(null,args__$1,null,(1),null)),(2),null)),(3),null)));
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sym)].join(''),class_sym);
}
});
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__67030){
var vec__67031 = p__67030;
var seq__67032 = cljs.core.seq(vec__67031);
var first__67033 = cljs.core.first(seq__67032);
var seq__67032__$1 = cljs.core.next(seq__67032);
var constructor_sym = first__67033;
var args = seq__67032__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.expand_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__67034){
var vec__67035 = p__67034;
var seq__67036 = cljs.core.seq(vec__67035);
var first__67037 = cljs.core.first(seq__67036);
var seq__67036__$1 = cljs.core.next(seq__67036);
var _ns = first__67037;
var first__67037__$1 = cljs.core.first(seq__67036__$1);
var seq__67036__$2 = cljs.core.next(seq__67036__$1);
var ns_name = first__67037__$1;
var exprs = seq__67036__$2;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__67038 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67038,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67038,(1),null);
var vec__67041 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67041,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67041,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__67048 = cljs.core.first(exprs__$3);
var seq__67049 = cljs.core.seq(vec__67048);
var first__67050 = cljs.core.first(seq__67049);
var seq__67049__$1 = cljs.core.next(seq__67049);
var k = first__67050;
var args = seq__67049__$1;
var G__67051 = k;
var G__67051__$1 = (((G__67051 instanceof cljs.core.Keyword))?G__67051.fqn:null);
switch (G__67051__$1) {
case "require":
case "use":
var G__67186 = cljs.core.next(exprs__$3);
var G__67187 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.mark_eval_call(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),args)));
exprs__$3 = G__67186;
ret = G__67187;
continue;

break;
case "import":
sci.impl.analyzer.do_import(ctx,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"import","import",241030818,null),null,(1),null)),args))));

var G__67188 = cljs.core.next(exprs__$3);
var G__67189 = ret;
exprs__$3 = G__67188;
ret = G__67189;
continue;

break;
case "refer-clojure":
var G__67190 = cljs.core.next(exprs__$3);
var G__67191 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.mark_eval_call(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"refer","refer",676235974,null),new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),args)));
exprs__$3 = G__67190;
ret = G__67191;
continue;

break;
case "gen-class":
var G__67192 = cljs.core.next(exprs__$3);
var G__67193 = ret;
exprs__$3 = G__67192;
ret = G__67193;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67051__$1)].join('')));

}
} else {
return sci.impl.utils.mark_eval_call(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),ret));
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__67052){
var vec__67053 = p__67052;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67053,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67053,(1),null);
return sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","prevent-deref","sci.impl/prevent-deref",-1401491385),true),var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__67056){
var vec__67057 = p__67056;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67057,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67057,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67057,(2),null);
var obj__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.analyzer.analyze.call(null,ctx,obj));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
var obj__$2 = sci.impl.types.getVal(obj__$1);
return sci.impl.utils.mark_eval_call((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),(new cljs.core.List(null,obj__$2,(new cljs.core.List(null,v__$1,null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.macro_QMARK_ = (function sci$impl$analyzer$macro_QMARK_(f){
var temp__5735__auto__ = cljs.core.meta(f);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
var or__4126__auto__ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
}
} else {
return null;
}
});
sci.impl.analyzer.analyze_call = (function sci$impl$analyzer$analyze_call(ctx,expr){
var f = cljs.core.first(expr);
if((f instanceof cljs.core.Symbol)){
var special_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,f);
var _ = (cljs.core.truth_(special_sym)?sci.impl.analyzer.check_permission_BANG_(ctx,special_sym,f):null);
var f__$1 = (function (){var or__4126__auto__ = special_sym;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,f,true);
}
})();
var f__$2 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f__$1))?(function (){var or__4126__auto__ = sci.impl.vars.isMacro(f__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword("sci.impl","built-in","sci.impl/built-in",1011824843).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1));
}
})():false))?cljs.core.deref(f__$1):f__$1);
if(cljs.core.truth_(((cljs.core.not(sci.impl.utils.eval_QMARK_(f__$2)))?(function (){var or__4126__auto__ = special_sym;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.contains_QMARK_(sci.impl.analyzer.macros,f__$2);
}
})():false))){
var G__67062 = f__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__67062)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__67062)){
return sci.impl.analyzer.do_import(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__67062)){
return sci.impl.analyzer.expand_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__67062)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__67062)){
return sci.impl.analyzer.expand_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),G__67062)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defn","defn",-126010802,null),G__67062)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"comment","comment",-2122229700,null),G__67062)){
return sci.impl.analyzer.expand_comment.cljs$core$IFn$_invoke$arity$variadic(ctx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__67062)){
return sci.impl.utils.mark_eval_call(cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop","loop",1244978678,null),G__67062)){
return sci.impl.analyzer.expand_loop(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"doseq","doseq",221164135,null),G__67062)){
var G__67070 = ctx;
var G__67071 = sci.impl.doseq_macro.expand_doseq(ctx,expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__67070,G__67071) : sci.impl.analyzer.analyze.call(null,G__67070,G__67071));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),G__67062)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__67062)){
return sci.impl.analyzer.expand_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"declare","declare",654042991,null),G__67062)){
return sci.impl.analyzer.expand_declare(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__67062)){

return cljs.core.second(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),G__67062)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),G__67062)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"for","for",316745208,null),G__67062)){
var res = sci.impl.for_macro.expand_for(ctx,expr);
if(cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))){
return res;
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,res) : sci.impl.analyzer.analyze.call(null,ctx,res));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__67062)){
return sci.impl.analyzer.expand_let(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),G__67062)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__67062)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__67062)){
return sci.impl.analyzer.expand_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"->","->",-2139605430,null),G__67062)){
return sci.impl.analyzer.expand__GT_(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__67062)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"as->","as->",1430690540,null),G__67062)){
return sci.impl.analyzer.expand_as__GT_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__67062)){
return sci.impl.analyzer.expand_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__67062)){
return sci.impl.analyzer.expand_try(ctx,expr);
} else {
return sci.impl.utils.mark_eval_call(cljs.core.cons(f__$2,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr))));

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
}
}
}
}
}
}
} else {
try{if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$2))){
var needs_ctx_QMARK_ = (function (){var G__67076 = new cljs.core.Keyword(null,"needs-ctx","needs-ctx",-35514403);
var G__67077 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$2));
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__67076,G__67077) : sci.impl.utils.kw_identical_QMARK_.call(null,G__67076,G__67077));
})();
var v = (cljs.core.truth_(needs_ctx_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),ctx,cljs.core.rest(expr)):cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr)));
var expanded = (cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))?v:(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v)));
return expanded;
} else {
return sci.impl.utils.mark_eval_call(cljs.core.cons(f__$2,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr))));
}
}catch (e67075){if((e67075 instanceof Error)){
var e = e67075;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e67075;

}
}}
} else {
var ret = sci.impl.utils.mark_eval_call(sci.impl.analyzer.analyze_children(ctx,expr));
return ret;
}
});
sci.impl.analyzer.analyze = (function sci$impl$analyzer$analyze(ctx,expr){
var ret = ((sci.impl.utils.constant_QMARK_(expr))?expr:(((expr instanceof cljs.core.Symbol))?(function (){var v = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,expr,false);
if(sci.impl.utils.constant_QMARK_(v)){
return v;
} else {
if(sci.impl.vars.var_QMARK_(v)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))){
return cljs.core.deref(v);
} else {
return sci.impl.types.__GT_EvalVar(v);
}
} else {
return sci.impl.utils.merge_meta(v,cljs.core.meta(expr));

}
}
})():sci.impl.utils.merge_meta(((cljs.core.map_QMARK_(expr))?sci.impl.utils.mark_eval(cljs.core.zipmap(sci.impl.analyzer.analyze_children(ctx,cljs.core.keys(expr)),sci.impl.analyzer.analyze_children(ctx,cljs.core.vals(expr)))):((((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr))))?sci.impl.utils.mark_eval(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),sci.impl.analyzer.analyze_children(ctx,expr))):((((cljs.core.seq_QMARK_(expr)) && (cljs.core.seq(expr))))?sci.impl.analyzer.analyze_call(ctx,expr):expr
))),cljs.core.select_keys(cljs.core.meta(expr),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null)))
));
return ret;
});

//# sourceMappingURL=sci.impl.analyzer.js.map
