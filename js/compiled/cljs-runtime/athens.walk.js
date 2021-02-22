goog.provide('athens.walk');
/**
 * Walk previous and new strings to delete or add links, block references, etc. to datascript.
 */
athens.walk.walk_string = (function athens$walk$walk_string(string){
var data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var G__65832_65834 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-link","page-link",-169621200),(function() { 
var G__65836__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__65827_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65827_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__65828_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65828_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["[[",inner_title,"]]"].join('');
};
var G__65836 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__65837__i = 0, G__65837__a = new Array(arguments.length -  0);
while (G__65837__i < G__65837__a.length) {G__65837__a[G__65837__i] = arguments[G__65837__i + 0]; ++G__65837__i;}
  title = new cljs.core.IndexedSeq(G__65837__a,0,null);
} 
return G__65836__delegate.call(this,title);};
G__65836.cljs$lang$maxFixedArity = 0;
G__65836.cljs$lang$applyTo = (function (arglist__65838){
var title = cljs.core.seq(arglist__65838);
return G__65836__delegate(title);
});
G__65836.cljs$core$IFn$_invoke$arity$variadic = G__65836__delegate;
return G__65836;
})()
,new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),(function() { 
var G__65839__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__65829_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65829_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__65830_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65830_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["#",inner_title].join('');
};
var G__65839 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__65840__i = 0, G__65840__a = new Array(arguments.length -  0);
while (G__65840__i < G__65840__a.length) {G__65840__a[G__65840__i] = arguments[G__65840__i + 0]; ++G__65840__i;}
  title = new cljs.core.IndexedSeq(G__65840__a,0,null);
} 
return G__65839__delegate.call(this,title);};
G__65839.cljs$lang$maxFixedArity = 0;
G__65839.cljs$lang$applyTo = (function (arglist__65841){
var title = cljs.core.seq(arglist__65841);
return G__65839__delegate(title);
});
G__65839.cljs$core$IFn$_invoke$arity$variadic = G__65839__delegate;
return G__65839;
})()
,new cljs.core.Keyword(null,"block-ref","block-ref",362929756),(function (uid){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("block","refs","block/refs",-1214495349),(function (p1__65831_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65831_SHARP_,uid);
}));
})], null);
var G__65833_65835 = athens.parser.parse_to_ast(string);
(instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__65832_65834,G__65833_65835) : instaparse.core.transform.call(null,G__65832_65834,G__65833_65835));

return cljs.core.deref(data);
});

//# sourceMappingURL=athens.walk.js.map
