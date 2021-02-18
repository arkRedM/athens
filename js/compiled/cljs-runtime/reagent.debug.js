goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__31588__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31588 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31589__i = 0, G__31589__a = new Array(arguments.length -  0);
while (G__31589__i < G__31589__a.length) {G__31589__a[G__31589__i] = arguments[G__31589__i + 0]; ++G__31589__i;}
  args = new cljs.core.IndexedSeq(G__31589__a,0,null);
} 
return G__31588__delegate.call(this,args);};
G__31588.cljs$lang$maxFixedArity = 0;
G__31588.cljs$lang$applyTo = (function (arglist__31590){
var args = cljs.core.seq(arglist__31590);
return G__31588__delegate(args);
});
G__31588.cljs$core$IFn$_invoke$arity$variadic = G__31588__delegate;
return G__31588;
})()
);

(o.error = (function() { 
var G__31591__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31591 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31592__i = 0, G__31592__a = new Array(arguments.length -  0);
while (G__31592__i < G__31592__a.length) {G__31592__a[G__31592__i] = arguments[G__31592__i + 0]; ++G__31592__i;}
  args = new cljs.core.IndexedSeq(G__31592__a,0,null);
} 
return G__31591__delegate.call(this,args);};
G__31591.cljs$lang$maxFixedArity = 0;
G__31591.cljs$lang$applyTo = (function (arglist__31593){
var args = cljs.core.seq(arglist__31593);
return G__31591__delegate(args);
});
G__31591.cljs$core$IFn$_invoke$arity$variadic = G__31591__delegate;
return G__31591;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
