goog.provide('athens.walk');
/**
 * Walk previous and new strings to delete or add links, block references, etc. to datascript.
 */
athens.walk.walk_string = (function athens$walk$walk_string(string){
var data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var G__65818_65820 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-link","page-link",-169621200),(function() { 
var G__65822__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__65813_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65813_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__65814_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65814_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["[[",inner_title,"]]"].join('');
};
var G__65822 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__65823__i = 0, G__65823__a = new Array(arguments.length -  0);
while (G__65823__i < G__65823__a.length) {G__65823__a[G__65823__i] = arguments[G__65823__i + 0]; ++G__65823__i;}
  title = new cljs.core.IndexedSeq(G__65823__a,0,null);
} 
return G__65822__delegate.call(this,title);};
G__65822.cljs$lang$maxFixedArity = 0;
G__65822.cljs$lang$applyTo = (function (arglist__65824){
var title = cljs.core.seq(arglist__65824);
return G__65822__delegate(title);
});
G__65822.cljs$core$IFn$_invoke$arity$variadic = G__65822__delegate;
return G__65822;
})()
,new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),(function() { 
var G__65825__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__65815_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65815_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__65816_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65816_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["#",inner_title].join('');
};
var G__65825 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__65826__i = 0, G__65826__a = new Array(arguments.length -  0);
while (G__65826__i < G__65826__a.length) {G__65826__a[G__65826__i] = arguments[G__65826__i + 0]; ++G__65826__i;}
  title = new cljs.core.IndexedSeq(G__65826__a,0,null);
} 
return G__65825__delegate.call(this,title);};
G__65825.cljs$lang$maxFixedArity = 0;
G__65825.cljs$lang$applyTo = (function (arglist__65827){
var title = cljs.core.seq(arglist__65827);
return G__65825__delegate(title);
});
G__65825.cljs$core$IFn$_invoke$arity$variadic = G__65825__delegate;
return G__65825;
})()
,new cljs.core.Keyword(null,"block-ref","block-ref",362929756),(function (uid){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("block","refs","block/refs",-1214495349),(function (p1__65817_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65817_SHARP_,uid);
}));
})], null);
var G__65819_65821 = athens.parser.parse_to_ast(string);
(instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__65818_65820,G__65819_65821) : instaparse.core.transform.call(null,G__65818_65820,G__65819_65821));

return cljs.core.deref(data);
});

//# sourceMappingURL=athens.walk.js.map
