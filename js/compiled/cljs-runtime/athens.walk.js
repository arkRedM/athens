goog.provide('athens.walk');
/**
 * Walk previous and new strings to delete or add links, block references, etc. to datascript.
 */
athens.walk.walk_string = (function athens$walk$walk_string(string){
var data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var G__61354_61356 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-link","page-link",-169621200),(function() { 
var G__61358__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__61349_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__61349_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__61350_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__61350_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["[[",inner_title,"]]"].join('');
};
var G__61358 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__61359__i = 0, G__61359__a = new Array(arguments.length -  0);
while (G__61359__i < G__61359__a.length) {G__61359__a[G__61359__i] = arguments[G__61359__i + 0]; ++G__61359__i;}
  title = new cljs.core.IndexedSeq(G__61359__a,0,null);
} 
return G__61358__delegate.call(this,title);};
G__61358.cljs$lang$maxFixedArity = 0;
G__61358.cljs$lang$applyTo = (function (arglist__61360){
var title = cljs.core.seq(arglist__61360);
return G__61358__delegate(title);
});
G__61358.cljs$core$IFn$_invoke$arity$variadic = G__61358__delegate;
return G__61358;
})()
,new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),(function() { 
var G__61361__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__61351_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__61351_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__61352_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__61352_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["#",inner_title].join('');
};
var G__61361 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__61362__i = 0, G__61362__a = new Array(arguments.length -  0);
while (G__61362__i < G__61362__a.length) {G__61362__a[G__61362__i] = arguments[G__61362__i + 0]; ++G__61362__i;}
  title = new cljs.core.IndexedSeq(G__61362__a,0,null);
} 
return G__61361__delegate.call(this,title);};
G__61361.cljs$lang$maxFixedArity = 0;
G__61361.cljs$lang$applyTo = (function (arglist__61363){
var title = cljs.core.seq(arglist__61363);
return G__61361__delegate(title);
});
G__61361.cljs$core$IFn$_invoke$arity$variadic = G__61361__delegate;
return G__61361;
})()
,new cljs.core.Keyword(null,"block-ref","block-ref",362929756),(function (uid){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("block","refs","block/refs",-1214495349),(function (p1__61353_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__61353_SHARP_,uid);
}));
})], null);
var G__61355_61357 = athens.parser.parse_to_ast(string);
(instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__61354_61356,G__61355_61357) : instaparse.core.transform.call(null,G__61354_61356,G__61355_61357));

return cljs.core.deref(data);
});

//# sourceMappingURL=athens.walk.js.map
