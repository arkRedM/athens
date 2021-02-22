goog.provide('athens.walk');
/**
 * Walk previous and new strings to delete or add links, block references, etc. to datascript.
 */
athens.walk.walk_string = (function athens$walk$walk_string(string){
var data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var G__65839_65841 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-link","page-link",-169621200),(function() { 
var G__65843__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__65834_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65834_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__65835_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65835_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["[[",inner_title,"]]"].join('');
};
var G__65843 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__65844__i = 0, G__65844__a = new Array(arguments.length -  0);
while (G__65844__i < G__65844__a.length) {G__65844__a[G__65844__i] = arguments[G__65844__i + 0]; ++G__65844__i;}
  title = new cljs.core.IndexedSeq(G__65844__a,0,null);
} 
return G__65843__delegate.call(this,title);};
G__65843.cljs$lang$maxFixedArity = 0;
G__65843.cljs$lang$applyTo = (function (arglist__65845){
var title = cljs.core.seq(arglist__65845);
return G__65843__delegate(title);
});
G__65843.cljs$core$IFn$_invoke$arity$variadic = G__65843__delegate;
return G__65843;
})()
,new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),(function() { 
var G__65846__delegate = function (title){
var inner_title = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",title);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("node","titles","node/titles",783660933),(function (p1__65836_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65836_SHARP_,inner_title);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("page","refs","page/refs",-1563352171),(function (p1__65837_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65837_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title], null));
}));

return ["#",inner_title].join('');
};
var G__65846 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__65847__i = 0, G__65847__a = new Array(arguments.length -  0);
while (G__65847__i < G__65847__a.length) {G__65847__a[G__65847__i] = arguments[G__65847__i + 0]; ++G__65847__i;}
  title = new cljs.core.IndexedSeq(G__65847__a,0,null);
} 
return G__65846__delegate.call(this,title);};
G__65846.cljs$lang$maxFixedArity = 0;
G__65846.cljs$lang$applyTo = (function (arglist__65848){
var title = cljs.core.seq(arglist__65848);
return G__65846__delegate(title);
});
G__65846.cljs$core$IFn$_invoke$arity$variadic = G__65846__delegate;
return G__65846;
})()
,new cljs.core.Keyword(null,"block-ref","block-ref",362929756),(function (uid){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.update,new cljs.core.Keyword("block","refs","block/refs",-1214495349),(function (p1__65838_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65838_SHARP_,uid);
}));
})], null);
var G__65840_65842 = athens.parser.parse_to_ast(string);
(instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__65839_65841,G__65840_65842) : instaparse.core.transform.call(null,G__65839_65841,G__65840_65842));

return cljs.core.deref(data);
});

//# sourceMappingURL=athens.walk.js.map
