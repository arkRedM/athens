goog.provide('athens.walk');
/**
 * Walk previous and new strings to delete or add links, block references, etc. to datascript.
 */
athens.walk.walk_string = (function athens$walk$walk_string(string){
var data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var G__65880_65882 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-link","page-link",-169621200),(function() { 
var G__65884__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__65875_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65875_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__65876_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65876_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["[[",inner_title,"]]"].join('');
};
var G__65884 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__65885__i = 0, G__65885__a = new Array(arguments.length -  0);
while (G__65885__i < G__65885__a.length) {G__65885__a[G__65885__i] = arguments[G__65885__i + 0]; ++G__65885__i;}
  title = new cljs.core.IndexedSeq(G__65885__a,0,null);
} 
return G__65884__delegate.call(this,title);};
G__65884.cljs$lang$maxFixedArity = 0;
G__65884.cljs$lang$applyTo = (function (arglist__65886){
var title = cljs.core.seq(arglist__65886);
return G__65884__delegate(title);
});
G__65884.cljs$core$IFn$_invoke$arity$variadic = G__65884__delegate;
return G__65884;
})()
,new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),(function() { 
var G__65887__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__65877_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65877_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__65878_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65878_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["#",inner_title].join('');
};
var G__65887 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__65888__i = 0, G__65888__a = new Array(arguments.length -  0);
while (G__65888__i < G__65888__a.length) {G__65888__a[G__65888__i] = arguments[G__65888__i + 0]; ++G__65888__i;}
  title = new cljs.core.IndexedSeq(G__65888__a,0,null);
} 
return G__65887__delegate.call(this,title);};
G__65887.cljs$lang$maxFixedArity = 0;
G__65887.cljs$lang$applyTo = (function (arglist__65889){
var title = cljs.core.seq(arglist__65889);
return G__65887__delegate(title);
});
G__65887.cljs$core$IFn$_invoke$arity$variadic = G__65887__delegate;
return G__65887;
})()
,new cljs.core.Keyword(null,"block-ref","block-ref",362929756),(function (uid){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("block","refs","block/refs",-1214495349),(function (p1__65879_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65879_SHARP_,uid);
}));
})], null);
var G__65881_65883 = athens.parser.parse_to_ast(string);
(instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__65880_65882,G__65881_65883) : instaparse.core.transform.call(null,G__65880_65882,G__65881_65883));

return cljs.core.deref(data);
});

//# sourceMappingURL=athens.walk.js.map
