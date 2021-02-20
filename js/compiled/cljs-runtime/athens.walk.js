goog.provide('athens.walk');
/**
 * Walk previous and new strings to delete or add links, block references, etc. to datascript.
 */
athens.walk.walk_string = (function athens$walk$walk_string(string){
var data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var G__65819_65821 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-link","page-link",-169621200),(function() { 
var G__65823__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__65814_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65814_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__65815_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65815_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["[[",inner_title,"]]"].join('');
};
var G__65823 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__65824__i = 0, G__65824__a = new Array(arguments.length -  0);
while (G__65824__i < G__65824__a.length) {G__65824__a[G__65824__i] = arguments[G__65824__i + 0]; ++G__65824__i;}
  title = new cljs.core.IndexedSeq(G__65824__a,0,null);
} 
return G__65823__delegate.call(this,title);};
G__65823.cljs$lang$maxFixedArity = 0;
G__65823.cljs$lang$applyTo = (function (arglist__65825){
var title = cljs.core.seq(arglist__65825);
return G__65823__delegate(title);
});
G__65823.cljs$core$IFn$_invoke$arity$variadic = G__65823__delegate;
return G__65823;
})()
,new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),(function() { 
var G__65826__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__65816_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65816_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__65817_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65817_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["#",inner_title].join('');
};
var G__65826 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__65827__i = 0, G__65827__a = new Array(arguments.length -  0);
while (G__65827__i < G__65827__a.length) {G__65827__a[G__65827__i] = arguments[G__65827__i + 0]; ++G__65827__i;}
  title = new cljs.core.IndexedSeq(G__65827__a,0,null);
} 
return G__65826__delegate.call(this,title);};
G__65826.cljs$lang$maxFixedArity = 0;
G__65826.cljs$lang$applyTo = (function (arglist__65828){
var title = cljs.core.seq(arglist__65828);
return G__65826__delegate(title);
});
G__65826.cljs$core$IFn$_invoke$arity$variadic = G__65826__delegate;
return G__65826;
})()
,new cljs.core.Keyword(null,"block-ref","block-ref",362929756),(function (uid){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("block","refs","block/refs",-1214495349),(function (p1__65818_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65818_SHARP_,uid);
}));
})], null);
var G__65820_65822 = athens.parser.parse_to_ast(string);
(instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__65819_65821,G__65820_65822) : instaparse.core.transform.call(null,G__65819_65821,G__65820_65822));

return cljs.core.deref(data);
});

//# sourceMappingURL=athens.walk.js.map
