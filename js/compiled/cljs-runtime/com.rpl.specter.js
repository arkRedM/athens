goog.provide('com.rpl.specter');
com.rpl.specter.static_path_QMARK_ = (function com$rpl$specter$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_(path)){
return cljs.core.every_QMARK_(com.rpl.specter.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_(path)));
}
});
com.rpl.specter.wrap_dynamic_nav = (function com$rpl$specter$wrap_dynamic_nav(f){
return (function() { 
var G__50800__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
if(((cljs.core.sequential_QMARK_(ret)) && (com.rpl.specter.static_path_QMARK_(ret)))){
return com.rpl.specter.impl.comp_paths_STAR_(ret);
} else {
if(((cljs.core.sequential_QMARK_(ret)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ret))))){
return cljs.core.first(ret);
} else {
return ret;

}
}
};
var G__50800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50801__i = 0, G__50801__a = new Array(arguments.length -  0);
while (G__50801__i < G__50801__a.length) {G__50801__a[G__50801__i] = arguments[G__50801__i + 0]; ++G__50801__i;}
  args = new cljs.core.IndexedSeq(G__50801__a,0,null);
} 
return G__50800__delegate.call(this,args);};
G__50800.cljs$lang$maxFixedArity = 0;
G__50800.cljs$lang$applyTo = (function (arglist__50802){
var args = cljs.core.seq(arglist__50802);
return G__50800__delegate(args);
});
G__50800.cljs$core$IFn$_invoke$arity$variadic = G__50800__delegate;
return G__50800;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50803 = arguments.length;
var i__4737__auto___50804 = (0);
while(true){
if((i__4737__auto___50804 < len__4736__auto___50803)){
args__4742__auto__.push((arguments[i__4737__auto___50804]));

var G__50805 = (i__4737__auto___50804 + (1));
i__4737__auto___50804 = G__50805;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_(cljs.core.vec(apath));
}));

(com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq50480){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50480));
}));

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__50481 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__50482 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__50481,G__50482) : com.rpl.specter.compiled_select.call(null,G__50481,G__50482));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__50483 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__50484 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__50483,G__50484) : com.rpl.specter.compiled_select_one.call(null,G__50483,G__50484));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__50485 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__50486 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__50485,G__50486) : com.rpl.specter.compiled_select_one_BANG_.call(null,G__50485,G__50486));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__50487 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__50488 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__50487,G__50488) : com.rpl.specter.compiled_select_first.call(null,G__50487,G__50488));
});
/**
 * Version of select-any that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_any = com.rpl.specter.impl.compiled_select_any_STAR_;
/**
 * Global value used to indicate no elements selected during
 *           [[select-any]].
 */
com.rpl.specter.NONE = com.rpl.specter.impl.NONE;
/**
 * Returns any element found or [[NONE]] if nothing selected. This is the most
 * efficient of the various selection operations.
 */
com.rpl.specter.select_any_STAR_ = (function com$rpl$specter$select_any_STAR_(path,structure){
var G__50489 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__50490 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__50489,G__50490) : com.rpl.specter.compiled_select_any.call(null,G__50489,G__50490));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__50491 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__50492 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__50491,G__50492) : com.rpl.specter.compiled_selected_any_QMARK_.call(null,G__50491,G__50492));
});
/**
 * Version of traverse that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse = com.rpl.specter.impl.do_compiled_traverse;
/**
 * Return a reducible object that traverses over `structure` to every element
 * specified by the path
 */
com.rpl.specter.traverse_STAR_ = (function com$rpl$specter$traverse_STAR_(apath,structure){
var G__50493 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__50494 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__50493,G__50494) : com.rpl.specter.compiled_traverse.call(null,G__50493,G__50494));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__50495 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__50495) : com.rpl.specter.compiled_traverse_all.call(null,G__50495));
});
/**
 * Version of transform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Version of vtransform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_vtransform = com.rpl.specter.impl.compiled_vtransform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform_STAR_ = (function com$rpl$specter$transform_STAR_(path,transform_fn,structure){
var G__50496 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__50497 = transform_fn;
var G__50498 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__50496,G__50497,G__50498) : com.rpl.specter.compiled_transform.call(null,G__50496,G__50497,G__50498));
});
/**
 * Version of `multi-transform` that takes in a path precompiled with `comp-paths`
 */
com.rpl.specter.compiled_multi_transform = com.rpl.specter.impl.compiled_multi_transform_STAR_;
/**
 * Just like `transform` but expects transform functions to be specified
 * inline in the path using `terminal` or `vterminal`. Error is thrown if navigation finishes
 * at a non-terminal navigator. `terminal-val` is a wrapper around `terminal` and is
 * the `multi-transform` equivalent of `setval`.
 */
com.rpl.specter.multi_transform_STAR_ = (function com$rpl$specter$multi_transform_STAR_(path,structure){
var G__50499 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__50500 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__50499,G__50500) : com.rpl.specter.compiled_multi_transform.call(null,G__50499,G__50500));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__50501 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__50502 = val;
var G__50503 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__50501,G__50502,G__50503) : com.rpl.specter.compiled_setval.call(null,G__50501,G__50502,G__50503));
});
/**
 * Version of replace-in that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = com.rpl.specter.impl.compiled_replace_in_STAR_;
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 * The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in_STAR_ = (function com$rpl$specter$replace_in_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50806 = arguments.length;
var i__4737__auto___50807 = (0);
while(true){
if((i__4737__auto___50807 < len__4736__auto___50806)){
args__4742__auto__.push((arguments[i__4737__auto___50807]));

var G__50808 = (i__4737__auto___50807 + (1));
i__4737__auto___50807 = G__50808;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__50508){
var map__50509 = p__50508;
var map__50509__$1 = (((((!((map__50509 == null))))?(((((map__50509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50509):map__50509);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50509__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var G__50511 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__50512 = transform_fn;
var G__50513 = structure;
var G__50514 = new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341);
var G__50515 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__50511,G__50512,G__50513,G__50514,G__50515) : com.rpl.specter.compiled_replace_in.call(null,G__50511,G__50512,G__50513,G__50514,G__50515));
}));

(com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq50504){
var G__50505 = cljs.core.first(seq50504);
var seq50504__$1 = cljs.core.next(seq50504);
var G__50506 = cljs.core.first(seq50504__$1);
var seq50504__$2 = cljs.core.next(seq50504__$1);
var G__50507 = cljs.core.first(seq50504__$2);
var seq50504__$3 = cljs.core.next(seq50504__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50505,G__50506,G__50507,seq50504__$3);
}));

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
/**
 * Turns a navigator that takes one argument into a navigator that takes
 *        many arguments and uses the same navigator with each argument. There
 *        is no performance cost to using this. See implementation of `keypath`
 */
com.rpl.specter.eachnav = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (navfn){
var latenavfn = (com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1(navfn) : com.rpl.specter.late_resolved_fn.call(null,navfn));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__50809__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__50809 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50810__i = 0, G__50810__a = new Array(arguments.length -  0);
while (G__50810__i < G__50810__a.length) {G__50810__a[G__50810__i] = arguments[G__50810__i + 0]; ++G__50810__i;}
  args = new cljs.core.IndexedSeq(G__50810__a,0,null);
} 
return G__50809__delegate.call(this,args);};
G__50809.cljs$lang$maxFixedArity = 0;
G__50809.cljs$lang$applyTo = (function (arglist__50811){
var args = cljs.core.seq(arglist__50811);
return G__50809__delegate(args);
});
G__50809.cljs$core$IFn$_invoke$arity$variadic = G__50809__delegate;
return G__50809;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.local_declarepath = com.rpl.specter.impl.local_declarepath;


com.rpl.specter.STOP_select_STAR_ = (function com$rpl$specter$STOP_select_STAR_(structure,next_fn){
return com.rpl.specter.NONE;
});

com.rpl.specter.STOP_transform_STAR_ = (function com$rpl$specter$STOP_transform_STAR_(structure,next_fn){
return structure;
});

/**
 * Stops navigation at this point. For selection returns nothing and for
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50516 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50516 = (function (meta50517){
this.meta50517 = meta50517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50518,meta50517__$1){
var self__ = this;
var _50518__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50516(meta50517__$1));
}));

(com.rpl.specter.t_com$rpl$specter50516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50518){
var self__ = this;
var _50518__$1 = this;
return self__.meta50517;
}));

(com.rpl.specter.t_com$rpl$specter50516.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50516.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter50516.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return structure;
}));

(com.rpl.specter.t_com$rpl$specter50516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50517","meta50517",-309455092,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50516.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50516.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50516");

(com.rpl.specter.t_com$rpl$specter50516.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50516");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50516.
 */
com.rpl.specter.__GT_t_com$rpl$specter50516 = (function com$rpl$specter$__GT_t_com$rpl$specter50516(meta50517){
return (new com.rpl.specter.t_com$rpl$specter50516(meta50517));
});

}

return (new com.rpl.specter.t_com$rpl$specter50516(null));
})()
;
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.STAY_STAR_;
/**
 * Defines an endpoint in the navigation the transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50519 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50519 = (function (afn,meta50520){
this.afn = afn;
this.meta50520 = meta50520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50521,meta50520__$1){
var self__ = this;
var _50521__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50519(self__.afn,meta50520__$1));
}));

(com.rpl.specter.t_com$rpl$specter50519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50521){
var self__ = this;
var _50521__$1 = this;
return self__.meta50520;
}));

(com.rpl.specter.t_com$rpl$specter50519.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50519.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter50519.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter50519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta50520","meta50520",-415272694,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50519.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50519.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50519");

(com.rpl.specter.t_com$rpl$specter50519.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50519");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50519.
 */
com.rpl.specter.__GT_t_com$rpl$specter50519 = (function com$rpl$specter$__GT_t_com$rpl$specter50519(afn__$1,meta50520){
return (new com.rpl.specter.t_com$rpl$specter50519(afn__$1,meta50520));
});

}

return (new com.rpl.specter.t_com$rpl$specter50519(afn,null));
}));
/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50522 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50522 = (function (afn,meta50523){
this.afn = afn;
this.meta50523 = meta50523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50524,meta50523__$1){
var self__ = this;
var _50524__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50522(self__.afn,meta50523__$1));
}));

(com.rpl.specter.t_com$rpl$specter50522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50524){
var self__ = this;
var _50524__$1 = this;
return self__.meta50523;
}));

(com.rpl.specter.t_com$rpl$specter50522.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50522.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter50522.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null,vals,structure));
}));

(com.rpl.specter.t_com$rpl$specter50522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta50523","meta50523",-1974388533,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50522.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50522.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50522");

(com.rpl.specter.t_com$rpl$specter50522.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50522");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50522.
 */
com.rpl.specter.__GT_t_com$rpl$specter50522 = (function com$rpl$specter$__GT_t_com$rpl$specter50522(afn__$1,meta50523){
return (new com.rpl.specter.t_com$rpl$specter50522(afn__$1,meta50523));
});

}

return (new com.rpl.specter.t_com$rpl$specter50522(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__50525 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__50525) : com.rpl.specter.terminal.call(null,G__50525));
});


com.rpl.specter.ALL_select_STAR_ = (function com$rpl$specter$ALL_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_transform_STAR_ = (function com$rpl$specter$ALL_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50526 = (function (meta50527){
this.meta50527 = meta50527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50528,meta50527__$1){
var self__ = this;
var _50528__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50526(meta50527__$1));
}));

(com.rpl.specter.t_com$rpl$specter50526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50528){
var self__ = this;
var _50528__$1 = this;
return self__.meta50527;
}));

(com.rpl.specter.t_com$rpl$specter50526.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50526.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter50526.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return com.rpl.specter.navs.all_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter50526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50527","meta50527",1457603779,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50526.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50526.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50526");

(com.rpl.specter.t_com$rpl$specter50526.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50526");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50526.
 */
com.rpl.specter.__GT_t_com$rpl$specter50526 = (function com$rpl$specter$__GT_t_com$rpl$specter50526(meta50527){
return (new com.rpl.specter.t_com$rpl$specter50526(meta50527));
});

}

return (new com.rpl.specter.t_com$rpl$specter50526(null));
})()
;


com.rpl.specter.ALL_WITH_META_select_STAR_ = (function com$rpl$specter$ALL_WITH_META_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_WITH_META_transform_STAR_ = (function com$rpl$specter$ALL_WITH_META_transform_STAR_(structure,next_fn){
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
});

/**
 * Same as ALL, except maintains metadata on the structure.
 */
com.rpl.specter.ALL_WITH_META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50529 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50529 = (function (meta50530){
this.meta50530 = meta50530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50531,meta50530__$1){
var self__ = this;
var _50531__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50529(meta50530__$1));
}));

(com.rpl.specter.t_com$rpl$specter50529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50531){
var self__ = this;
var _50531__$1 = this;
return self__.meta50530;
}));

(com.rpl.specter.t_com$rpl$specter50529.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50529.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter50529.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
}));

(com.rpl.specter.t_com$rpl$specter50529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50530","meta50530",750211883,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50529.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50529.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50529");

(com.rpl.specter.t_com$rpl$specter50529.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50529");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50529.
 */
com.rpl.specter.__GT_t_com$rpl$specter50529 = (function com$rpl$specter$__GT_t_com$rpl$specter50529(meta50530){
return (new com.rpl.specter.t_com$rpl$specter50529(meta50530));
});

}

return (new com.rpl.specter.t_com$rpl$specter50529(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__46355__auto__,v){
var ret__46356__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((ret__46356__auto__ === com.rpl.specter.NONE)){
return curr__46355__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__46356__auto__)){
return cljs.core.reduced(ret__46356__auto__);
} else {
return ret__46356__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
});

com.rpl.specter.MAP_VALS_transform_STAR_ = (function com$rpl$specter$MAP_VALS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

/**
 * Navigate to each value of the map. This is more efficient than
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50532 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50532 = (function (meta50533){
this.meta50533 = meta50533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50534,meta50533__$1){
var self__ = this;
var _50534__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50532(meta50533__$1));
}));

(com.rpl.specter.t_com$rpl$specter50532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50534){
var self__ = this;
var _50534__$1 = this;
return self__.meta50533;
}));

(com.rpl.specter.t_com$rpl$specter50532.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50532.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__46355__auto__,v){
var ret__46356__auto__ = next_fn(v);
if((ret__46356__auto__ === com.rpl.specter.NONE)){
return curr__46355__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__46356__auto__)){
return cljs.core.reduced(ret__46356__auto__);
} else {
return ret__46356__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
}));

(com.rpl.specter.t_com$rpl$specter50532.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter50532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50533","meta50533",-1159345560,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50532.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50532.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50532");

(com.rpl.specter.t_com$rpl$specter50532.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50532");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50532.
 */
com.rpl.specter.__GT_t_com$rpl$specter50532 = (function com$rpl$specter$__GT_t_com$rpl$specter50532(meta50533){
return (new com.rpl.specter.t_com$rpl$specter50532(meta50533));
});

}

return (new com.rpl.specter.t_com$rpl$specter50532(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__46355__auto__,k){
var ret__46356__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((ret__46356__auto__ === com.rpl.specter.NONE)){
return curr__46355__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__46356__auto__)){
return cljs.core.reduced(ret__46356__auto__);
} else {
return ret__46356__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
});

com.rpl.specter.MAP_KEYS_transform_STAR_ = (function com$rpl$specter$MAP_KEYS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

/**
 * Navigate to each key of the map. This is more efficient than
 *        navigating via [ALL FIRST]
 */
com.rpl.specter.MAP_KEYS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50535 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50535 = (function (meta50536){
this.meta50536 = meta50536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50537,meta50536__$1){
var self__ = this;
var _50537__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50535(meta50536__$1));
}));

(com.rpl.specter.t_com$rpl$specter50535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50537){
var self__ = this;
var _50537__$1 = this;
return self__.meta50536;
}));

(com.rpl.specter.t_com$rpl$specter50535.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50535.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__46355__auto__,k){
var ret__46356__auto__ = next_fn(k);
if((ret__46356__auto__ === com.rpl.specter.NONE)){
return curr__46355__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__46356__auto__)){
return cljs.core.reduced(ret__46356__auto__);
} else {
return ret__46356__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
}));

(com.rpl.specter.t_com$rpl$specter50535.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter50535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50536","meta50536",-544371519,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50535.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50535.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50535");

(com.rpl.specter.t_com$rpl$specter50535.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50535");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50535.
 */
com.rpl.specter.__GT_t_com$rpl$specter50535 = (function com$rpl$specter$__GT_t_com$rpl$specter50535(meta50536){
return (new com.rpl.specter.t_com$rpl$specter50535(meta50536));
});

}

return (new com.rpl.specter.t_com$rpl$specter50535(null));
})()
;
com.rpl.specter.VAL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50538 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50538 = (function (meta50539){
this.meta50539 = meta50539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50540,meta50539__$1){
var self__ = this;
var _50540__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50538(meta50539__$1));
}));

(com.rpl.specter.t_com$rpl$specter50538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50540){
var self__ = this;
var _50540__$1 = this;
return self__.meta50539;
}));

(com.rpl.specter.t_com$rpl$specter50538.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50538.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__49448__auto__,vals__49449__auto__,structure,next_fn__49450__auto__){
var self__ = this;
var this__49448__auto____$1 = this;
var G__50541 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__49449__auto__,structure);
var G__50542 = structure;
return (next_fn__49450__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__49450__auto__.cljs$core$IFn$_invoke$arity$2(G__50541,G__50542) : next_fn__49450__auto__.call(null,G__50541,G__50542));
}));

(com.rpl.specter.t_com$rpl$specter50538.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__49448__auto__,vals__49449__auto__,structure,next_fn__49450__auto__){
var self__ = this;
var this__49448__auto____$1 = this;
var G__50543 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__49449__auto__,structure);
var G__50544 = structure;
return (next_fn__49450__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__49450__auto__.cljs$core$IFn$_invoke$arity$2(G__50543,G__50544) : next_fn__49450__auto__.call(null,G__50543,G__50544));
}));

(com.rpl.specter.t_com$rpl$specter50538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50539","meta50539",1049133630,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50538.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50538.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50538");

(com.rpl.specter.t_com$rpl$specter50538.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50538");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50538.
 */
com.rpl.specter.__GT_t_com$rpl$specter50538 = (function com$rpl$specter$__GT_t_com$rpl$specter50538(meta50539){
return (new com.rpl.specter.t_com$rpl$specter50538(meta50539));
});

}

return (new com.rpl.specter.t_com$rpl$specter50538(null));
})()
;
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last));
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first));


com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
var G__50545 = structure;
var G__50546 = s;
var G__50547 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__50548 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__50545,G__50546,G__50547,G__50548) : com.rpl.specter.navs.srange_transform.call(null,G__50545,G__50546,G__50547,G__50548));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50549 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50549 = (function (start_index_fn,end_index_fn,meta50550){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta50550 = meta50550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50551,meta50550__$1){
var self__ = this;
var _50551__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50549(self__.start_index_fn,self__.end_index_fn,meta50550__$1));
}));

(com.rpl.specter.t_com$rpl$specter50549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50551){
var self__ = this;
var _50551__$1 = this;
return self__.meta50550;
}));

(com.rpl.specter.t_com$rpl$specter50549.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50549.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter50549.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
var G__50552 = structure;
var G__50553 = s;
var G__50554 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__50555 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__50552,G__50553,G__50554,G__50555) : com.rpl.specter.navs.srange_transform.call(null,G__50552,G__50553,G__50554,G__50555));
}));

(com.rpl.specter.t_com$rpl$specter50549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta50550","meta50550",1809727894,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50549.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50549.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50549");

(com.rpl.specter.t_com$rpl$specter50549.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50549");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50549.
 */
com.rpl.specter.__GT_t_com$rpl$specter50549 = (function com$rpl$specter$__GT_t_com$rpl$specter50549(start_index_fn__$1,end_index_fn__$1,meta50550){
return (new com.rpl.specter.t_com$rpl$specter50549(start_index_fn__$1,end_index_fn__$1,meta50550));
});

}

return (new com.rpl.specter.t_com$rpl$specter50549(start_index_fn,end_index_fn,null));
}));


com.rpl.specter.srange_select_STAR_ = (function com$rpl$specter$srange_select_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_select(structure,start,end,next_fn);
});

com.rpl.specter.srange_transform_STAR_ = (function com$rpl$specter$srange_transform_STAR_(start,end,structure,next_fn){
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,start,end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,start,end,next_fn));
});

/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.direct_nav_obj((function (start,end){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50556 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50556 = (function (start,end,meta50557){
this.start = start;
this.end = end;
this.meta50557 = meta50557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50558,meta50557__$1){
var self__ = this;
var _50558__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50556(self__.start,self__.end,meta50557__$1));
}));

(com.rpl.specter.t_com$rpl$specter50556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50558){
var self__ = this;
var _50558__$1 = this;
return self__.meta50557;
}));

(com.rpl.specter.t_com$rpl$specter50556.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50556.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter50556.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn));
}));

(com.rpl.specter.t_com$rpl$specter50556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta50557","meta50557",13966942,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50556.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50556.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50556");

(com.rpl.specter.t_com$rpl$specter50556.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50556");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50556.
 */
com.rpl.specter.__GT_t_com$rpl$specter50556 = (function com$rpl$specter$__GT_t_com$rpl$specter50556(start__$1,end__$1,meta50557){
return (new com.rpl.specter.t_com$rpl$specter50556(start__$1,end__$1,meta50557));
});

}

return (new com.rpl.specter.t_com$rpl$specter50556(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__46355__auto__,p__50559){
var vec__50560 = p__50559;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50560,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50560,(1),null);
var ret__46356__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__46356__auto__ === com.rpl.specter.NONE)){
return curr__46355__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__46356__auto__)){
return cljs.core.reduced(ret__46356__auto__);
} else {
return ret__46356__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,pred));
});

com.rpl.specter.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(pred,structure,next_fn);
});

/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.direct_nav_obj((function (pred){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50563 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50563 = (function (pred,meta50564){
this.pred = pred;
this.meta50564 = meta50564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50565,meta50564__$1){
var self__ = this;
var _50565__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50563(self__.pred,meta50564__$1));
}));

(com.rpl.specter.t_com$rpl$specter50563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50565){
var self__ = this;
var _50565__$1 = this;
return self__.meta50564;
}));

(com.rpl.specter.t_com$rpl$specter50563.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50563.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__46355__auto__,p__50566){
var vec__50567 = p__50566;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50567,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50567,(1),null);
var ret__46356__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__46356__auto__ === com.rpl.specter.NONE)){
return curr__46355__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__46356__auto__)){
return cljs.core.reduced(ret__46356__auto__);
} else {
return ret__46356__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,self__.pred));
}));

(com.rpl.specter.t_com$rpl$specter50563.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter50563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta50564","meta50564",-1095319182,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50563.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50563.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50563");

(com.rpl.specter.t_com$rpl$specter50563.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50563");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50563.
 */
com.rpl.specter.__GT_t_com$rpl$specter50563 = (function com$rpl$specter$__GT_t_com$rpl$specter50563(pred__$1,meta50564){
return (new com.rpl.specter.t_com$rpl$specter50563(pred__$1,meta50564));
});

}

return (new com.rpl.specter.t_com$rpl$specter50563(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__50570 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__50570) : next_fn.call(null,G__50570));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,""))),structure].join('');
} else {
var to_prepend = (function (){var G__50571 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__50571) : next_fn.call(null,G__50571));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50572 = (function (meta50573){
this.meta50573 = meta50573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50574,meta50573__$1){
var self__ = this;
var _50574__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50572(meta50573__$1));
}));

(com.rpl.specter.t_com$rpl$specter50572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50574){
var self__ = this;
var _50574__$1 = this;
return self__.meta50573;
}));

(com.rpl.specter.t_com$rpl$specter50572.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50572.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter50572.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn("")),structure].join('');
} else {
var to_prepend = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
}));

(com.rpl.specter.t_com$rpl$specter50572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50573","meta50573",1982309134,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50572.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50572.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50572");

(com.rpl.specter.t_com$rpl$specter50572.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50572");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50572.
 */
com.rpl.specter.__GT_t_com$rpl$specter50572 = (function com$rpl$specter$__GT_t_com$rpl$specter50572(meta50573){
return (new com.rpl.specter.t_com$rpl$specter50572(meta50573));
});

}

return (new com.rpl.specter.t_com$rpl$specter50572(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__50575 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__50575) : next_fn.call(null,G__50575));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,"")))].join('');
} else {
var to_append = (function (){var G__50576 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__50576) : next_fn.call(null,G__50576));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50577 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50577 = (function (meta50578){
this.meta50578 = meta50578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50579,meta50578__$1){
var self__ = this;
var _50579__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50577(meta50578__$1));
}));

(com.rpl.specter.t_com$rpl$specter50577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50579){
var self__ = this;
var _50579__$1 = this;
return self__.meta50578;
}));

(com.rpl.specter.t_com$rpl$specter50577.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50577.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter50577.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn(""))].join('');
} else {
var to_append = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all(structure,to_append);
}
}));

(com.rpl.specter.t_com$rpl$specter50577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50578","meta50578",66109576,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50577.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50577.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50577");

(com.rpl.specter.t_com$rpl$specter50577.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50577");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50577.
 */
com.rpl.specter.__GT_t_com$rpl$specter50577 = (function com$rpl$specter$__GT_t_com$rpl$specter50577(meta50578){
return (new com.rpl.specter.t_com$rpl$specter50577(meta50578));
});

}

return (new com.rpl.specter.t_com$rpl$specter50577(null));
})()
;


com.rpl.specter.NONE_ELEM_select_STAR_ = (function com$rpl$specter$NONE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.NONE_ELEM_transform_STAR_ = (function com$rpl$specter$NONE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
});

/**
 * Navigate to 'void' elem in the set.
 *        For transformations - if result is not `NONE`,
 *        then add that value to the set.
 */
com.rpl.specter.NONE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50580 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50580 = (function (meta50581){
this.meta50581 = meta50581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50582,meta50581__$1){
var self__ = this;
var _50582__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50580(meta50581__$1));
}));

(com.rpl.specter.t_com$rpl$specter50580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50582){
var self__ = this;
var _50582__$1 = this;
return self__.meta50581;
}));

(com.rpl.specter.t_com$rpl$specter50580.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50580.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter50580.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
}));

(com.rpl.specter.t_com$rpl$specter50580.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50581","meta50581",-1430579191,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50580.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50580.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50580");

(com.rpl.specter.t_com$rpl$specter50580.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50580");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50580.
 */
com.rpl.specter.__GT_t_com$rpl$specter50580 = (function com$rpl$specter$__GT_t_com$rpl$specter50580(meta50581){
return (new com.rpl.specter.t_com$rpl$specter50580(meta50581));
});

}

return (new com.rpl.specter.t_com$rpl$specter50580(null));
})()
;


com.rpl.specter.BEFORE_ELEM_select_STAR_ = (function com$rpl$specter$BEFORE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.BEFORE_ELEM_transform_STAR_ = (function com$rpl$specter$BEFORE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
});

/**
 * Navigate to 'void' element before the sequence.
 *        For transformations – if result is not `NONE`,
 *        then prepend that value.
 */
com.rpl.specter.BEFORE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50583 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50583 = (function (meta50584){
this.meta50584 = meta50584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50585,meta50584__$1){
var self__ = this;
var _50585__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50583(meta50584__$1));
}));

(com.rpl.specter.t_com$rpl$specter50583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50585){
var self__ = this;
var _50585__$1 = this;
return self__.meta50584;
}));

(com.rpl.specter.t_com$rpl$specter50583.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50583.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter50583.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter50583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50584","meta50584",-932428260,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50583.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50583.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50583");

(com.rpl.specter.t_com$rpl$specter50583.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50583");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50583.
 */
com.rpl.specter.__GT_t_com$rpl$specter50583 = (function com$rpl$specter$__GT_t_com$rpl$specter50583(meta50584){
return (new com.rpl.specter.t_com$rpl$specter50583(meta50584));
});

}

return (new com.rpl.specter.t_com$rpl$specter50583(null));
})()
;


com.rpl.specter.AFTER_ELEM_select_STAR_ = (function com$rpl$specter$AFTER_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.AFTER_ELEM_transform_STAR_ = (function com$rpl$specter$AFTER_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
});

/**
 * Navigate to 'void' element after the sequence.
 *        For transformations – if result is not `NONE`,
 *        then append that value.
 */
com.rpl.specter.AFTER_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50586 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50586 = (function (meta50587){
this.meta50587 = meta50587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50588,meta50587__$1){
var self__ = this;
var _50588__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50586(meta50587__$1));
}));

(com.rpl.specter.t_com$rpl$specter50586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50588){
var self__ = this;
var _50588__$1 = this;
return self__.meta50587;
}));

(com.rpl.specter.t_com$rpl$specter50586.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50586.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter50586.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter50586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50587","meta50587",305440914,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50586.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50586.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50586");

(com.rpl.specter.t_com$rpl$specter50586.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50586");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50586.
 */
com.rpl.specter.__GT_t_com$rpl$specter50586 = (function com$rpl$specter$__GT_t_com$rpl$specter50586(meta50587){
return (new com.rpl.specter.t_com$rpl$specter50586(meta50587));
});

}

return (new com.rpl.specter.t_com$rpl$specter50586(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__50589 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__50589) : next_fn.call(null,G__50589));
});

com.rpl.specter.subset_transform_STAR_ = (function com$rpl$specter$subset_transform_STAR_(aset,structure,next_fn){
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
var newset = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(subset) : next_fn.call(null,subset));
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
});

/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.direct_nav_obj((function (aset){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50590 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50590 = (function (aset,meta50591){
this.aset = aset;
this.meta50591 = meta50591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50592,meta50591__$1){
var self__ = this;
var _50592__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50590(self__.aset,meta50591__$1));
}));

(com.rpl.specter.t_com$rpl$specter50590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50592){
var self__ = this;
var _50592__$1 = this;
return self__.meta50591;
}));

(com.rpl.specter.t_com$rpl$specter50590.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50590.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
}));

(com.rpl.specter.t_com$rpl$specter50590.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
}));

(com.rpl.specter.t_com$rpl$specter50590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta50591","meta50591",1372006289,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50590.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50590.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50590");

(com.rpl.specter.t_com$rpl$specter50590.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50590");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50590.
 */
com.rpl.specter.__GT_t_com$rpl$specter50590 = (function com$rpl$specter$__GT_t_com$rpl$specter50590(aset__$1,meta50591){
return (new com.rpl.specter.t_com$rpl$specter50590(aset__$1,meta50591));
});

}

return (new com.rpl.specter.t_com$rpl$specter50590(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__50593 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__50593) : next_fn.call(null,G__50593));
});

com.rpl.specter.submap_transform_STAR_ = (function com$rpl$specter$submap_transform_STAR_(m_keys,structure,next_fn){
var submap = cljs.core.select_keys(structure,m_keys);
var newmap = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(submap) : next_fn.call(null,submap));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,m_keys),newmap], 0));
});

/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.direct_nav_obj((function (m_keys){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50594 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50594 = (function (m_keys,meta50595){
this.m_keys = m_keys;
this.meta50595 = meta50595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50596,meta50595__$1){
var self__ = this;
var _50596__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50594(self__.m_keys,meta50595__$1));
}));

(com.rpl.specter.t_com$rpl$specter50594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50596){
var self__ = this;
var _50596__$1 = this;
return self__.meta50595;
}));

(com.rpl.specter.t_com$rpl$specter50594.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50594.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
}));

(com.rpl.specter.t_com$rpl$specter50594.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
}));

(com.rpl.specter.t_com$rpl$specter50594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta50595","meta50595",-283630622,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50594.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50594.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50594");

(com.rpl.specter.t_com$rpl$specter50594.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50594");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50594.
 */
com.rpl.specter.__GT_t_com$rpl$specter50594 = (function com$rpl$specter$__GT_t_com$rpl$specter50594(m_keys__$1,meta50595){
return (new com.rpl.specter.t_com$rpl$specter50594(m_keys__$1,meta50595));
});

}

return (new com.rpl.specter.t_com$rpl$specter50594(m_keys,null));
}));
/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 * 
 *   If transformed sequence is smaller than input sequence, missing entries
 *   will be filled in with NONE, triggering removal if supported by that navigator.
 * 
 *   Value collection (e.g. collect, collect-one) may not be used in the subpath.
 */
com.rpl.specter.subselect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__50828__delegate = function (path){
var builder__49451__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50597 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50597 = (function (path,late,meta50598){
this.path = path;
this.late = late;
this.meta50598 = meta50598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50599,meta50598__$1){
var self__ = this;
var _50599__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50597(self__.path,self__.late,meta50598__$1));
}));

(com.rpl.specter.t_com$rpl$specter50597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50599){
var self__ = this;
var _50599__$1 = this;
return self__.meta50598;
}));

(com.rpl.specter.t_com$rpl$specter50597.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50597.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter50597.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(transformed));
var G__50600 = self__.late;
var G__50601 = (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});
var G__50602 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__50600,G__50601,G__50602) : com.rpl.specter.compiled_transform.call(null,G__50600,G__50601,G__50602));
}));

(com.rpl.specter.t_com$rpl$specter50597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta50598","meta50598",-1337578601,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50597.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50597.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50597");

(com.rpl.specter.t_com$rpl$specter50597.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50597");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50597.
 */
com.rpl.specter.__GT_t_com$rpl$specter50597 = (function com$rpl$specter$__GT_t_com$rpl$specter50597(path__$1,late__$1,meta50598){
return (new com.rpl.specter.t_com$rpl$specter50597(path__$1,late__$1,meta50598));
});

}

return (new com.rpl.specter.t_com$rpl$specter50597(path,late,null));
}));
var curr_params__49452__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__49452__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__49451__auto__,curr_params__49452__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__49451__auto__,curr_params__49452__auto__,null);
}
};
var G__50828 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__50829__i = 0, G__50829__a = new Array(arguments.length -  0);
while (G__50829__i < G__50829__a.length) {G__50829__a[G__50829__i] = arguments[G__50829__i + 0]; ++G__50829__i;}
  path = new cljs.core.IndexedSeq(G__50829__a,0,null);
} 
return G__50828__delegate.call(this,path);};
G__50828.cljs$lang$maxFixedArity = 0;
G__50828.cljs$lang$applyTo = (function (arglist__50830){
var path = cljs.core.seq(arglist__50830);
return G__50828__delegate(path);
});
G__50828.cljs$core$IFn$_invoke$arity$variadic = G__50828__delegate;
return G__50828;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50603 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50603 = (function (key,meta50604){
this.key = key;
this.meta50604 = meta50604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50605,meta50604__$1){
var self__ = this;
var _50605__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50603(self__.key,meta50604__$1));
}));

(com.rpl.specter.t_com$rpl$specter50603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50605){
var self__ = this;
var _50605__$1 = this;
return self__.meta50604;
}));

(com.rpl.specter.t_com$rpl$specter50603.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50603.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter50603.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
var newkey = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
var dissoced = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(structure,self__.key);
if((com.rpl.specter.NONE === newkey)){
return dissoced;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dissoced,newkey,cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.key));
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter50603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta50604","meta50604",-1340167656,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50603.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50603.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50603");

(com.rpl.specter.t_com$rpl$specter50603.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50603");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50603.
 */
com.rpl.specter.__GT_t_com$rpl$specter50603 = (function com$rpl$specter$__GT_t_com$rpl$specter50603(key__$1,meta50604){
return (new com.rpl.specter.t_com$rpl$specter50603(key__$1,meta50604));
});

}

return (new com.rpl.specter.t_com$rpl$specter50603(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50606 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50606 = (function (elem,meta50607){
this.elem = elem;
this.meta50607 = meta50607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50608,meta50607__$1){
var self__ = this;
var _50608__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50606(self__.elem,meta50607__$1));
}));

(com.rpl.specter.t_com$rpl$specter50606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50608){
var self__ = this;
var _50608__$1 = this;
return self__.meta50607;
}));

(com.rpl.specter.t_com$rpl$specter50606.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50606.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter50606.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
var newelem = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
var removed = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(structure,self__.elem);
if((com.rpl.specter.NONE === newelem)){
return removed;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(removed,newelem);
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter50606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta50607","meta50607",525733898,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50606.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50606.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50606");

(com.rpl.specter.t_com$rpl$specter50606.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50606");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50606.
 */
com.rpl.specter.__GT_t_com$rpl$specter50606 = (function com$rpl$specter$__GT_t_com$rpl$specter50606(elem__$1,meta50607){
return (new com.rpl.specter.t_com$rpl$specter50606(elem__$1,meta50607));
});

}

return (new com.rpl.specter.t_com$rpl$specter50606(elem,null));
}));
/**
 * Navigate to the specified keys one after another. If navigate to NONE,
 *           that element is removed from the map or vector.
 */
com.rpl.specter.keypath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.keypath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_));
/**
 * Navigate to the specified keys one after another, only if they exist
 *           in the data structure. If navigate to NONE, that element is removed
 *           from the map or vector.
 */
com.rpl.specter.must = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.must_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_));
/**
 * Navigate to the specified indices one after another. If navigate to
 *          NONE, that element is removed from the sequence.
 */
com.rpl.specter.nthpath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.nthpath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.nthpath_STAR_));
/**
 * Navigates to the empty space between the index and the prior index. For select
 *        navigates to NONE, and transforms to non-NONE insert at that position.
 */
com.rpl.specter.before_index = com.rpl.specter.impl.direct_nav_obj((function (index){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50609 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50609 = (function (index,meta50610){
this.index = index;
this.meta50610 = meta50610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50611,meta50610__$1){
var self__ = this;
var _50611__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50609(self__.index,meta50610__$1));
}));

(com.rpl.specter.t_com$rpl$specter50609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50611){
var self__ = this;
var _50611__$1 = this;
return self__.meta50610;
}));

(com.rpl.specter.t_com$rpl$specter50609.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50609.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter50609.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null,vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__49458__auto__ = com.rpl.specter.pathcache50612;
var info__49458__auto____$1 = (((info__49458__auto__ == null))?(function (){var info50613 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.srange,new cljs.core.Var(function(){return com.rpl.specter.srange;},new cljs.core.Symbol("com.rpl.specter","srange","com.rpl.specter/srange",-978851939,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"srange","srange",-1324254972,null),"com/rpl/specter.cljc",9,1,755,758,cljs.core.List.EMPTY,"Navigates to the subsequence bound by the indexes start (inclusive)\n          and end (exclusive)",(cljs.core.truth_(com.rpl.specter.srange)?com.rpl.specter.srange.cljs$lang$test:null)])),new cljs.core.Symbol(null,"srange","srange",-1324254972,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null)),com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null))], null),cljs.core.list(new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null));
com.rpl.specter.pathcache50612 = info50613;

return info50613;
})():info__49458__auto__);
var precompiled50614 = com.rpl.specter.impl.cached_path_info_precompiled(info__49458__auto____$1);
var dynamic_QMARK___49459__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__49458__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___49459__auto__)){
var G__50615 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.srange,self__.index,self__.index], null);
return (precompiled50614.cljs$core$IFn$_invoke$arity$1 ? precompiled50614.cljs$core$IFn$_invoke$arity$1(G__50615) : precompiled50614.call(null,G__50615));
} else {
return precompiled50614;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),structure);
}
}));

(com.rpl.specter.t_com$rpl$specter50609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta50610","meta50610",1588400954,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50609.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50609.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50609");

(com.rpl.specter.t_com$rpl$specter50609.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50609");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50609.
 */
com.rpl.specter.__GT_t_com$rpl$specter50609 = (function com$rpl$specter$__GT_t_com$rpl$specter50609(index__$1,meta50610){
return (new com.rpl.specter.t_com$rpl$specter50609(index__$1,meta50610));
});

}

return (new com.rpl.specter.t_com$rpl$specter50609(index,null));
}));
/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50616 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50616 = (function (i,meta50617){
this.i = i;
this.meta50617 = meta50617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50618,meta50617__$1){
var self__ = this;
var _50618__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50616(self__.i,meta50617__$1));
}));

(com.rpl.specter.t_com$rpl$specter50616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50618){
var self__ = this;
var _50618__$1 = this;
return self__.meta50617;
}));

(com.rpl.specter.t_com$rpl$specter50616.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50616.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter50616.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
var newi = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(newi,self__.i)){
return structure;
} else {
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
if(cljs.core.vector_QMARK_(structure)){
var shifted = (((newi < self__.i))?(function (){var j = (self__.i - (1));
var s = structure;
while(true){
if((j < newi)){
return s;
} else {
var G__50831 = (j - (1));
var G__50832 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__50831;
s = G__50832;
continue;
}
break;
}
})():(function (){var j = (self__.i + (1));
var s = structure;
while(true){
if((j > newi)){
return s;
} else {
var G__50833 = (j + (1));
var G__50834 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__50833;
s = G__50834;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__49458__auto__ = com.rpl.specter.pathcache50619;
var info__49458__auto____$1 = (((info__49458__auto__ == null))?(function (){var info50620 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"com/rpl/specter.cljc",15,1,968,971,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache50619 = info50620;

return info50620;
})():info__49458__auto__);
var precompiled50621 = com.rpl.specter.impl.cached_path_info_precompiled(info__49458__auto____$1);
var dynamic_QMARK___49459__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__49458__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___49459__auto__)){
var G__50622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled50621.cljs$core$IFn$_invoke$arity$1 ? precompiled50621.cljs$core$IFn$_invoke$arity$1(G__50622) : precompiled50621.call(null,G__50622));
} else {
return precompiled50621;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__49458__auto__ = com.rpl.specter.pathcache50623;
var info__49458__auto____$1 = (((info__49458__auto__ == null))?(function (){var info50624 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache50623 = info50624;

return info50624;
})():info__49458__auto__);
var precompiled50625 = com.rpl.specter.impl.cached_path_info_precompiled(info__49458__auto____$1);
var dynamic_QMARK___49459__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__49458__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___49459__auto__)){
var G__50626 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled50625.cljs$core$IFn$_invoke$arity$1 ? precompiled50625.cljs$core$IFn$_invoke$arity$1(G__50626) : precompiled50625.call(null,G__50626));
} else {
return precompiled50625;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter50616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta50617","meta50617",1981809233,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50616.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50616.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50616");

(com.rpl.specter.t_com$rpl$specter50616.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50616");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50616.
 */
com.rpl.specter.__GT_t_com$rpl$specter50616 = (function com$rpl$specter$__GT_t_com$rpl$specter50616(i__$1,meta50617){
return (new com.rpl.specter.t_com$rpl$specter50616(i__$1,meta50617));
});

}

return (new com.rpl.specter.t_com$rpl$specter50616(i,null));
}));


com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__46355__auto__,e){
var ret__46356__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__50629 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__50629) : next_fn.call(null,G__50629));
})()
;
if((ret__46356__auto__ === com.rpl.specter.NONE)){
return curr__46355__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__46356__auto__)){
return cljs.core.reduced(ret__46356__auto__);
} else {
return ret__46356__auto__;
}
}
}),com.rpl.specter.NONE,structure);
});

com.rpl.specter.indexed_vals_transform_STAR_ = (function com$rpl$specter$indexed_vals_transform_STAR_(start,structure,next_fn){
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__50630 = (function (){var G__50633 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__50633) : next_fn.call(null,G__50633));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50630,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50630,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__49458__auto__ = com.rpl.specter.pathcache50634;
var info__49458__auto____$1 = (((info__49458__auto__ == null))?(function (){var info50635 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__50627_SHARP_){
return (p1__50627_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50627#","p1__50627#",-1462033972,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__50627#","p1__50627#",-1462033972,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__50628_SHARP_){
return (p1__50628_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50628#","p1__50628#",-970864242,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__50628#","p1__50628#",-970864242,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50627#","p1__50627#",-1462033972,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__50627#","p1__50627#",-1462033972,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50628#","p1__50628#",-970864242,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__50628#","p1__50628#",-970864242,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50627#","p1__50627#",-1462033972,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__50627#","p1__50627#",-1462033972,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50628#","p1__50628#",-970864242,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__50628#","p1__50628#",-970864242,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache50634 = info50635;

return info50635;
})():info__49458__auto__);
var precompiled50636 = com.rpl.specter.impl.cached_path_info_precompiled(info__49458__auto____$1);
var dynamic_QMARK___49459__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__49458__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___49459__auto__)){
var G__50637 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__50627_SHARP_){
return (p1__50627_SHARP_ >= (curri + (1)));
}),(function (p1__50628_SHARP_){
return (p1__50628_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__50627_SHARP_){
return (p1__50627_SHARP_ >= (curri + (1)));
}),(function (p1__50628_SHARP_){
return (p1__50628_SHARP_ <= newi);
})], null);
return (precompiled50636.cljs$core$IFn$_invoke$arity$1 ? precompiled50636.cljs$core$IFn$_invoke$arity$1(G__50637) : precompiled50636.call(null,G__50637));
} else {
return precompiled50636;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__49458__auto__ = com.rpl.specter.pathcache50638;
var info__49458__auto____$1 = (((info__49458__auto__ == null))?(function (){var info50639 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,983,986,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache50638 = info50639;

return info50639;
})():info__49458__auto__);
var precompiled50640 = com.rpl.specter.impl.cached_path_info_precompiled(info__49458__auto____$1);
var dynamic_QMARK___49459__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__49458__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___49459__auto__)){
var G__50641 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled50640.cljs$core$IFn$_invoke$arity$1 ? precompiled50640.cljs$core$IFn$_invoke$arity$1(G__50641) : precompiled50640.call(null,G__50641));
} else {
return precompiled50640;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__49458__auto__ = com.rpl.specter.pathcache50642;
var info__49458__auto____$1 = (((info__49458__auto__ == null))?(function (){var info50643 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache50642 = info50643;

return info50643;
})():info__49458__auto__);
var precompiled50644 = com.rpl.specter.impl.cached_path_info_precompiled(info__49458__auto____$1);
var dynamic_QMARK___49459__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__49458__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___49459__auto__)){
var G__50645 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled50644.cljs$core$IFn$_invoke$arity$1 ? precompiled50644.cljs$core$IFn$_invoke$arity$1(G__50645) : precompiled50644.call(null,G__50645));
} else {
return precompiled50644;
}
})(),newe,s));
}),structure,structure);
});

/**
 * Navigate to [index elem] pairs for each element in a sequence. The sequence will be indexed
 *        starting from `start`. Changing index in transform has same effect as `index-nav`. Indices seen
 *        during transform take into account any shifting from prior sequence elements changing indices.
 */
com.rpl.specter.indexed_vals = com.rpl.specter.impl.direct_nav_obj((function (start){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50646 = (function (start,meta50647){
this.start = start;
this.meta50647 = meta50647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50648,meta50647__$1){
var self__ = this;
var _50648__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50646(self__.start,meta50647__$1));
}));

(com.rpl.specter.t_com$rpl$specter50646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50648){
var self__ = this;
var _50648__$1 = this;
return self__.meta50647;
}));

(com.rpl.specter.t_com$rpl$specter50646.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50646.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((self__.start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__46355__auto__,e){
var ret__46356__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

return next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null));
})()
;
if((ret__46356__auto__ === com.rpl.specter.NONE)){
return curr__46355__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__46356__auto__)){
return cljs.core.reduced(ret__46356__auto__);
} else {
return ret__46356__auto__;
}
}
}),com.rpl.specter.NONE,structure);
}));

(com.rpl.specter.t_com$rpl$specter50646.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__50649 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50649,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50649,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__49458__auto__ = com.rpl.specter.pathcache50652;
var info__49458__auto____$1 = (((info__49458__auto__ == null))?(function (){var info50653 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__50627_SHARP_){
return (p1__50627_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50627#","p1__50627#",-1462033972,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__50627#","p1__50627#",-1462033972,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__50628_SHARP_){
return (p1__50628_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50628#","p1__50628#",-970864242,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__50628#","p1__50628#",-970864242,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50627#","p1__50627#",-1462033972,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__50627#","p1__50627#",-1462033972,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50628#","p1__50628#",-970864242,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__50628#","p1__50628#",-970864242,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50627#","p1__50627#",-1462033972,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__50627#","p1__50627#",-1462033972,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50628#","p1__50628#",-970864242,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__50628#","p1__50628#",-970864242,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache50652 = info50653;

return info50653;
})():info__49458__auto__);
var precompiled50654 = com.rpl.specter.impl.cached_path_info_precompiled(info__49458__auto____$1);
var dynamic_QMARK___49459__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__49458__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___49459__auto__)){
var G__50655 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__50627_SHARP_){
return (p1__50627_SHARP_ >= (curri + (1)));
}),(function (p1__50628_SHARP_){
return (p1__50628_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__50627_SHARP_){
return (p1__50627_SHARP_ >= (curri + (1)));
}),(function (p1__50628_SHARP_){
return (p1__50628_SHARP_ <= newi);
})], null);
return (precompiled50654.cljs$core$IFn$_invoke$arity$1 ? precompiled50654.cljs$core$IFn$_invoke$arity$1(G__50655) : precompiled50654.call(null,G__50655));
} else {
return precompiled50654;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__49458__auto__ = com.rpl.specter.pathcache50656;
var info__49458__auto____$1 = (((info__49458__auto__ == null))?(function (){var info50657 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,983,986,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache50656 = info50657;

return info50657;
})():info__49458__auto__);
var precompiled50658 = com.rpl.specter.impl.cached_path_info_precompiled(info__49458__auto____$1);
var dynamic_QMARK___49459__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__49458__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___49459__auto__)){
var G__50659 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled50658.cljs$core$IFn$_invoke$arity$1 ? precompiled50658.cljs$core$IFn$_invoke$arity$1(G__50659) : precompiled50658.call(null,G__50659));
} else {
return precompiled50658;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__49458__auto__ = com.rpl.specter.pathcache50660;
var info__49458__auto____$1 = (((info__49458__auto__ == null))?(function (){var info50661 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache50660 = info50661;

return info50661;
})():info__49458__auto__);
var precompiled50662 = com.rpl.specter.impl.cached_path_info_precompiled(info__49458__auto____$1);
var dynamic_QMARK___49459__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__49458__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___49459__auto__)){
var G__50663 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled50662.cljs$core$IFn$_invoke$arity$1 ? precompiled50662.cljs$core$IFn$_invoke$arity$1(G__50663) : precompiled50662.call(null,G__50663));
} else {
return precompiled50662;
}
})(),newe,s));
}),structure,structure);
}));

(com.rpl.specter.t_com$rpl$specter50646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta50647","meta50647",-265217471,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50646.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50646.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50646");

(com.rpl.specter.t_com$rpl$specter50646.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50646");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50646.
 */
com.rpl.specter.__GT_t_com$rpl$specter50646 = (function com$rpl$specter$__GT_t_com$rpl$specter50646(start__$1,meta50647){
return (new com.rpl.specter.t_com$rpl$specter50646(start__$1,meta50647));
});

}

return (new com.rpl.specter.t_com$rpl$specter50646(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = (com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1((0)) : com.rpl.specter.indexed_vals.call(null,(0)));
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50664 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50664 = (function (afn,meta50665){
this.afn = afn;
this.meta50665 = meta50665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50666,meta50665__$1){
var self__ = this;
var _50666__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50664(self__.afn,meta50665__$1));
}));

(com.rpl.specter.t_com$rpl$specter50664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50666){
var self__ = this;
var _50666__$1 = this;
return self__.meta50665;
}));

(com.rpl.specter.t_com$rpl$specter50664.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50664.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__50667 = vals;
var G__50668 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__50667,G__50668) : next_fn.call(null,G__50667,G__50668));
}));

(com.rpl.specter.t_com$rpl$specter50664.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__50669 = vals;
var G__50670 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__50669,G__50670) : next_fn.call(null,G__50669,G__50670));
}));

(com.rpl.specter.t_com$rpl$specter50664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta50665","meta50665",-1140424503,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50664.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50664.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50664");

(com.rpl.specter.t_com$rpl$specter50664.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50664");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50664.
 */
com.rpl.specter.__GT_t_com$rpl$specter50664 = (function com$rpl$specter$__GT_t_com$rpl$specter50664(afn__$1,meta50665){
return (new com.rpl.specter.t_com$rpl$specter50664(afn__$1,meta50665));
});

}

return (new com.rpl.specter.t_com$rpl$specter50664(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__50671 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__50671) : next_fn.call(null,G__50671));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__50672 = (function (){var G__50673 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__50673) : next_fn.call(null,G__50673));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__50672) : unparse_fn.call(null,G__50672));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50674 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50674 = (function (parse_fn,unparse_fn,meta50675){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta50675 = meta50675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50676,meta50675__$1){
var self__ = this;
var _50676__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50674(self__.parse_fn,self__.unparse_fn,meta50675__$1));
}));

(com.rpl.specter.t_com$rpl$specter50674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50676){
var self__ = this;
var _50676__$1 = this;
return self__.meta50675;
}));

(com.rpl.specter.t_com$rpl$specter50674.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50674.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
}));

(com.rpl.specter.t_com$rpl$specter50674.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
var G__50677 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__50677) : self__.unparse_fn.call(null,G__50677));
}));

(com.rpl.specter.t_com$rpl$specter50674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta50675","meta50675",-1729578578,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50674.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50674.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50674");

(com.rpl.specter.t_com$rpl$specter50674.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50674");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50674.
 */
com.rpl.specter.__GT_t_com$rpl$specter50674 = (function com$rpl$specter$__GT_t_com$rpl$specter50674(parse_fn__$1,unparse_fn__$1,meta50675){
return (new com.rpl.specter.t_com$rpl$specter50674(parse_fn__$1,unparse_fn__$1,meta50675));
});

}

return (new com.rpl.specter.t_com$rpl$specter50674(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__50678 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__50678) : next_fn.call(null,G__50678));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50679 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50679 = (function (meta50680){
this.meta50680 = meta50680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50681,meta50680__$1){
var self__ = this;
var _50681__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50679(meta50680__$1));
}));

(com.rpl.specter.t_com$rpl$specter50679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50681){
var self__ = this;
var _50681__$1 = this;
return self__.meta50680;
}));

(com.rpl.specter.t_com$rpl$specter50679.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50679.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return next_fn(cljs.core.deref(structure));
}));

(com.rpl.specter.t_com$rpl$specter50679.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
}));

(com.rpl.specter.t_com$rpl$specter50679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50680","meta50680",-603608309,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50679.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50679.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50679");

(com.rpl.specter.t_com$rpl$specter50679.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50679");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50679.
 */
com.rpl.specter.__GT_t_com$rpl$specter50679 = (function com$rpl$specter$__GT_t_com$rpl$specter50679(meta50680){
return (new com.rpl.specter.t_com$rpl$specter50679(meta50680));
});

}

return (new com.rpl.specter.t_com$rpl$specter50679(null));
})()
;


com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__46355__auto__,s){
var ret__46356__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(s) : next_fn.call(null,s));
if((ret__46356__auto__ === com.rpl.specter.NONE)){
return curr__46355__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__46356__auto__)){
return cljs.core.reduced(ret__46356__auto__);
} else {
return ret__46356__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace(structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj((function (re){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50682 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50682 = (function (re,meta50683){
this.re = re;
this.meta50683 = meta50683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50684,meta50683__$1){
var self__ = this;
var _50684__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50682(self__.re,meta50683__$1));
}));

(com.rpl.specter.t_com$rpl$specter50682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50684){
var self__ = this;
var _50684__$1 = this;
return self__.meta50683;
}));

(com.rpl.specter.t_com$rpl$specter50682.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50682.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__46355__auto__,s){
var ret__46356__auto__ = next_fn(s);
if((ret__46356__auto__ === com.rpl.specter.NONE)){
return curr__46355__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__46356__auto__)){
return cljs.core.reduced(ret__46356__auto__);
} else {
return ret__46356__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(self__.re,structure));
}));

(com.rpl.specter.t_com$rpl$specter50682.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return clojure.string.replace(structure,self__.re,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter50682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta50683","meta50683",1622993246,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50682.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50682.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50682");

(com.rpl.specter.t_com$rpl$specter50682.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50682");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50682.
 */
com.rpl.specter.__GT_t_com$rpl$specter50682 = (function com$rpl$specter$__GT_t_com$rpl$specter50682(re__$1,meta50683){
return (new com.rpl.specter.t_com$rpl$specter50682(re__$1,meta50683));
});

}

return (new com.rpl.specter.t_com$rpl$specter50682(re,null));
}));
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__50856__delegate = function (path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
return afn;
} else {
var builder__49451__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50687 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50687 = (function (path,temp__5733__auto__,late,meta50688){
this.path = path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late = late;
this.meta50688 = meta50688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50689,meta50688__$1){
var self__ = this;
var _50689__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50687(self__.path,self__.temp__5733__auto__,self__.late,meta50688__$1));
}));

(com.rpl.specter.t_com$rpl$specter50687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50689){
var self__ = this;
var _50689__$1 = this;
return self__.meta50688;
}));

(com.rpl.specter.t_com$rpl$specter50687.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50687.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__50685_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__50685_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter50687.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__50686_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__50686_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter50687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta50688","meta50688",585004738,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50687.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50687.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50687");

(com.rpl.specter.t_com$rpl$specter50687.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50687");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50687.
 */
com.rpl.specter.__GT_t_com$rpl$specter50687 = (function com$rpl$specter$__GT_t_com$rpl$specter50687(path__$1,temp__5733__auto____$1,late__$1,meta50688){
return (new com.rpl.specter.t_com$rpl$specter50687(path__$1,temp__5733__auto____$1,late__$1,meta50688));
});

}

return (new com.rpl.specter.t_com$rpl$specter50687(path,temp__5733__auto__,late,null));
}));
var curr_params__49452__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__49452__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__49451__auto__,curr_params__49452__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__49451__auto__,curr_params__49452__auto__,null);
}
}
};
var G__50856 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__50860__i = 0, G__50860__a = new Array(arguments.length -  0);
while (G__50860__i < G__50860__a.length) {G__50860__a[G__50860__i] = arguments[G__50860__i + 0]; ++G__50860__i;}
  path = new cljs.core.IndexedSeq(G__50860__a,0,null);
} 
return G__50856__delegate.call(this,path);};
G__50856.cljs$lang$maxFixedArity = 0;
G__50856.cljs$lang$applyTo = (function (arglist__50861){
var path = cljs.core.seq(arglist__50861);
return G__50856__delegate(path);
});
G__50856.cljs$core$IFn$_invoke$arity$variadic = G__50856__delegate;
return G__50856;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__50863__delegate = function (path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null,s)));
});
} else {
var builder__49451__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50692 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50692 = (function (path,temp__5733__auto__,late,meta50693){
this.path = path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late = late;
this.meta50693 = meta50693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50694,meta50693__$1){
var self__ = this;
var _50694__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50692(self__.path,self__.temp__5733__auto__,self__.late,meta50693__$1));
}));

(com.rpl.specter.t_com$rpl$specter50692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50694){
var self__ = this;
var _50694__$1 = this;
return self__.meta50693;
}));

(com.rpl.specter.t_com$rpl$specter50692.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50692.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__50690_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__50690_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter50692.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__50691_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__50691_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter50692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta50693","meta50693",-247511590,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50692.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50692.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50692");

(com.rpl.specter.t_com$rpl$specter50692.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50692");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50692.
 */
com.rpl.specter.__GT_t_com$rpl$specter50692 = (function com$rpl$specter$__GT_t_com$rpl$specter50692(path__$1,temp__5733__auto____$1,late__$1,meta50693){
return (new com.rpl.specter.t_com$rpl$specter50692(path__$1,temp__5733__auto____$1,late__$1,meta50693));
});

}

return (new com.rpl.specter.t_com$rpl$specter50692(path,temp__5733__auto__,late,null));
}));
var curr_params__49452__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__49452__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__49451__auto__,curr_params__49452__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__49451__auto__,curr_params__49452__auto__,null);
}
}
};
var G__50863 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__50867__i = 0, G__50867__a = new Array(arguments.length -  0);
while (G__50867__i < G__50867__a.length) {G__50867__a[G__50867__i] = arguments[G__50867__i + 0]; ++G__50867__i;}
  path = new cljs.core.IndexedSeq(G__50867__a,0,null);
} 
return G__50863__delegate.call(this,path);};
G__50863.cljs$lang$maxFixedArity = 0;
G__50863.cljs$lang$applyTo = (function (arglist__50868){
var path = cljs.core.seq(arglist__50868);
return G__50863__delegate(path);
});
G__50863.cljs$core$IFn$_invoke$arity$variadic = G__50863__delegate;
return G__50863;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 *   For transformation: `NONE` entries in the result sequence cause corresponding entries in
 *   input to be removed. A result sequence smaller than the input sequence is equivalent to
 *   padding the result sequence with `NONE` at the end until the same size as the input.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__50869__delegate = function (path){
var G__50695 = com.rpl.specter.ALL;
var G__50696 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null,path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__50695,G__50696) : com.rpl.specter.subselect.call(null,G__50695,G__50696));
};
var G__50869 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__50870__i = 0, G__50870__a = new Array(arguments.length -  0);
while (G__50870__i < G__50870__a.length) {G__50870__a[G__50870__i] = arguments[G__50870__i + 0]; ++G__50870__i;}
  path = new cljs.core.IndexedSeq(G__50870__a,0,null);
} 
return G__50869__delegate.call(this,path);};
G__50869.cljs$lang$maxFixedArity = 0;
G__50869.cljs$lang$applyTo = (function (arglist__50871){
var path = cljs.core.seq(arglist__50871);
return G__50869__delegate(path);
});
G__50869.cljs$core$IFn$_invoke$arity$variadic = G__50869__delegate;
return G__50869;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__49451__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50697 = (function (path,update_fn,late,late_fn,meta50698){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta50698 = meta50698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50699,meta50698__$1){
var self__ = this;
var _50699__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50697(self__.path,self__.update_fn,self__.late,self__.late_fn,meta50698__$1));
}));

(com.rpl.specter.t_com$rpl$specter50697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50699){
var self__ = this;
var _50699__$1 = this;
return self__.meta50698;
}));

(com.rpl.specter.t_com$rpl$specter50697.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50697.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter50697.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter50697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta50698","meta50698",1641326999,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50697.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50697.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50697");

(com.rpl.specter.t_com$rpl$specter50697.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50697");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50697.
 */
com.rpl.specter.__GT_t_com$rpl$specter50697 = (function com$rpl$specter$__GT_t_com$rpl$specter50697(path__$1,update_fn__$1,late__$1,late_fn__$1,meta50698){
return (new com.rpl.specter.t_com$rpl$specter50697(path__$1,update_fn__$1,late__$1,late_fn__$1,meta50698));
});

}

return (new com.rpl.specter.t_com$rpl$specter50697(path,update_fn,late,late_fn,null));
}));
var curr_params__49452__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),update_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__49452__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__49451__auto__,curr_params__49452__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__49451__auto__,curr_params__49452__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__49451__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50700 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50700 = (function (path,reduce_fn,late,late_fn,meta50701){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta50701 = meta50701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50702,meta50701__$1){
var self__ = this;
var _50702__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50700(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta50701__$1));
}));

(com.rpl.specter.t_com$rpl$specter50700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50702){
var self__ = this;
var _50702__$1 = this;
return self__.meta50701;
}));

(com.rpl.specter.t_com$rpl$specter50700.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50700.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter50700.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter50700.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta50701","meta50701",13784035,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50700.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50700.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50700");

(com.rpl.specter.t_com$rpl$specter50700.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50700");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50700.
 */
com.rpl.specter.__GT_t_com$rpl$specter50700 = (function com$rpl$specter$__GT_t_com$rpl$specter50700(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta50701){
return (new com.rpl.specter.t_com$rpl$specter50700(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta50701));
});

}

return (new com.rpl.specter.t_com$rpl$specter50700(path,reduce_fn,late,late_fn,null));
}));
var curr_params__49452__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),reduce_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__49452__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__49451__auto__,curr_params__49452__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__49451__auto__,curr_params__49452__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
var G__50704 = (function (p1__50703_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__50703_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__50704) : com.rpl.specter.pred.call(null,G__50704));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__50706 = (function (p1__50705_SHARP_){
return (p1__50705_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__50706) : com.rpl.specter.pred.call(null,G__50706));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__50708 = (function (p1__50707_SHARP_){
return (p1__50707_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__50708) : com.rpl.specter.pred.call(null,G__50708));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__50710 = (function (p1__50709_SHARP_){
return (p1__50709_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__50710) : com.rpl.specter.pred.call(null,G__50710));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__50712 = (function (p1__50711_SHARP_){
return (p1__50711_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__50712) : com.rpl.specter.pred.call(null,G__50712));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"null",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"null",(function (this$){
return com.rpl.specter.STAY;
}));
(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"string",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"string",(function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"number",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"number",(function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"boolean",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"boolean",(function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"function",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"function",(function (this$){
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.pred.call(null,this$));
}));
(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.pred.call(null,this$__$1));
}));
(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.regex_nav.call(null,this$__$1));
}));


com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
var G__50713 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__50713) : next_fn.call(null,G__50713));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__50714 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__50714) : next_fn.call(null,G__50714));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50715 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50715 = (function (v,meta50716){
this.v = v;
this.meta50716 = meta50716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50717,meta50716__$1){
var self__ = this;
var _50717__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50715(self__.v,meta50716__$1));
}));

(com.rpl.specter.t_com$rpl$specter50715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50717){
var self__ = this;
var _50717__$1 = this;
return self__.meta50716;
}));

(com.rpl.specter.t_com$rpl$specter50715.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50715.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter50715.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter50715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta50716","meta50716",-85972966,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50715.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50715.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50715");

(com.rpl.specter.t_com$rpl$specter50715.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50715");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50715.
 */
com.rpl.specter.__GT_t_com$rpl$specter50715 = (function com$rpl$specter$__GT_t_com$rpl$specter50715(v__$1,meta50716){
return (new com.rpl.specter.t_com$rpl$specter50715(v__$1,meta50716));
});

}

return (new com.rpl.specter.t_com$rpl$specter50715(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__50718 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__50718) : com.rpl.specter.nil__GT_val.call(null,G__50718));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__50719 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__50719) : com.rpl.specter.nil__GT_val.call(null,G__50719));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__50720 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__50720) : com.rpl.specter.nil__GT_val.call(null,G__50720));
})();


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__50721 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__50721) : next_fn.call(null,G__50721));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__50722 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__50722) : next_fn.call(null,G__50722));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50723 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50723 = (function (meta50724){
this.meta50724 = meta50724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50725,meta50724__$1){
var self__ = this;
var _50725__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50723(meta50724__$1));
}));

(com.rpl.specter.t_com$rpl$specter50723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50725){
var self__ = this;
var _50725__$1 = this;
return self__.meta50724;
}));

(com.rpl.specter.t_com$rpl$specter50723.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50723.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return next_fn(cljs.core.meta(structure));
}));

(com.rpl.specter.t_com$rpl$specter50723.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
}));

(com.rpl.specter.t_com$rpl$specter50723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50724","meta50724",-866045937,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50723.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50723.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50723");

(com.rpl.specter.t_com$rpl$specter50723.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50723");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50723.
 */
com.rpl.specter.__GT_t_com$rpl$specter50723 = (function com$rpl$specter$__GT_t_com$rpl$specter50723(meta50724){
return (new com.rpl.specter.t_com$rpl$specter50723(meta50724));
});

}

return (new com.rpl.specter.t_com$rpl$specter50723(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__50726 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__50726) : next_fn.call(null,G__50726));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__50727 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__50727) : next_fn.call(null,G__50727));
})();
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAME can only be used on symbols or keywords - ",structure], 0));

}
}
});

/**
 * Navigates to the name portion of the keyword or symbol
 */
com.rpl.specter.NAME = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50728 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50728 = (function (meta50729){
this.meta50729 = meta50729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50730,meta50729__$1){
var self__ = this;
var _50730__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50728(meta50729__$1));
}));

(com.rpl.specter.t_com$rpl$specter50728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50730){
var self__ = this;
var _50730__$1 = this;
return self__.meta50729;
}));

(com.rpl.specter.t_com$rpl$specter50728.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50728.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return next_fn(cljs.core.name(structure));
}));

(com.rpl.specter.t_com$rpl$specter50728.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
var new_name = next_fn(cljs.core.name(structure));
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAME can only be used on symbols or keywords - ",structure], 0));

}
}
}));

(com.rpl.specter.t_com$rpl$specter50728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50729","meta50729",-1238342842,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50728.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50728.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50728");

(com.rpl.specter.t_com$rpl$specter50728.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50728");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50728.
 */
com.rpl.specter.__GT_t_com$rpl$specter50728 = (function com$rpl$specter$__GT_t_com$rpl$specter50728(meta50729){
return (new com.rpl.specter.t_com$rpl$specter50728(meta50729));
});

}

return (new com.rpl.specter.t_com$rpl$specter50728(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__50731 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__50731) : next_fn.call(null,G__50731));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__50732 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__50732) : next_fn.call(null,G__50732));
})();
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAMESPACE can only be used on symbols or keywords - ",structure], 0));

}
}
});

/**
 * Navigates to the namespace portion of the keyword or symbol
 */
com.rpl.specter.NAMESPACE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50733 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50733 = (function (meta50734){
this.meta50734 = meta50734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50735,meta50734__$1){
var self__ = this;
var _50735__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50733(meta50734__$1));
}));

(com.rpl.specter.t_com$rpl$specter50733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50735){
var self__ = this;
var _50735__$1 = this;
return self__.meta50734;
}));

(com.rpl.specter.t_com$rpl$specter50733.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50733.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
return next_fn(cljs.core.namespace(structure));
}));

(com.rpl.specter.t_com$rpl$specter50733.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__48622__auto__,vals__48623__auto__,structure,next_fn__48624__auto__){
var self__ = this;
var this__48622__auto____$1 = this;
var next_fn = (function (s__48625__auto__){
return (next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__48624__auto__.cljs$core$IFn$_invoke$arity$2(vals__48623__auto__,s__48625__auto__) : next_fn__48624__auto__.call(null,vals__48623__auto__,s__48625__auto__));
});
var name = cljs.core.name(structure);
var new_ns = next_fn(cljs.core.namespace(structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAMESPACE can only be used on symbols or keywords - ",structure], 0));

}
}
}));

(com.rpl.specter.t_com$rpl$specter50733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50734","meta50734",-195439585,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50733.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50733.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50733");

(com.rpl.specter.t_com$rpl$specter50733.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50733");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50733.
 */
com.rpl.specter.__GT_t_com$rpl$specter50733 = (function com$rpl$specter$__GT_t_com$rpl$specter50733(meta50734){
return (new com.rpl.specter.t_com$rpl$specter50733(meta50734));
});

}

return (new com.rpl.specter.t_com$rpl$specter50733(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__50883__delegate = function (path){
var builder__49451__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50736 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50736 = (function (path,late,meta50737){
this.path = path;
this.late = late;
this.meta50737 = meta50737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50738,meta50737__$1){
var self__ = this;
var _50738__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50736(self__.path,self__.late,meta50737__$1));
}));

(com.rpl.specter.t_com$rpl$specter50736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50738){
var self__ = this;
var _50738__$1 = this;
return self__.meta50737;
}));

(com.rpl.specter.t_com$rpl$specter50736.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50736.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__49448__auto__,vals__49449__auto__,structure,next_fn__49450__auto__){
var self__ = this;
var this__49448__auto____$1 = this;
var G__50739 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__49449__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__50740 = structure;
return (next_fn__49450__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__49450__auto__.cljs$core$IFn$_invoke$arity$2(G__50739,G__50740) : next_fn__49450__auto__.call(null,G__50739,G__50740));
}));

(com.rpl.specter.t_com$rpl$specter50736.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__49448__auto__,vals__49449__auto__,structure,next_fn__49450__auto__){
var self__ = this;
var this__49448__auto____$1 = this;
var G__50741 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__49449__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__50742 = structure;
return (next_fn__49450__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__49450__auto__.cljs$core$IFn$_invoke$arity$2(G__50741,G__50742) : next_fn__49450__auto__.call(null,G__50741,G__50742));
}));

(com.rpl.specter.t_com$rpl$specter50736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta50737","meta50737",-1397658294,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50736.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50736.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50736");

(com.rpl.specter.t_com$rpl$specter50736.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50736");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50736.
 */
com.rpl.specter.__GT_t_com$rpl$specter50736 = (function com$rpl$specter$__GT_t_com$rpl$specter50736(path__$1,late__$1,meta50737){
return (new com.rpl.specter.t_com$rpl$specter50736(path__$1,late__$1,meta50737));
});

}

return (new com.rpl.specter.t_com$rpl$specter50736(path,late,null));
}));
var curr_params__49452__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__49452__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__49451__auto__,curr_params__49452__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__49451__auto__,curr_params__49452__auto__,null);
}
};
var G__50883 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__50884__i = 0, G__50884__a = new Array(arguments.length -  0);
while (G__50884__i < G__50884__a.length) {G__50884__a[G__50884__i] = arguments[G__50884__i + 0]; ++G__50884__i;}
  path = new cljs.core.IndexedSeq(G__50884__a,0,null);
} 
return G__50883__delegate.call(this,path);};
G__50883.cljs$lang$maxFixedArity = 0;
G__50883.cljs$lang$applyTo = (function (arglist__50885){
var path = cljs.core.seq(arglist__50885);
return G__50883__delegate(path);
});
G__50883.cljs$core$IFn$_invoke$arity$variadic = G__50883__delegate;
return G__50883;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__50886__delegate = function (path){
var builder__49451__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50743 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50743 = (function (path,late,meta50744){
this.path = path;
this.late = late;
this.meta50744 = meta50744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50745,meta50744__$1){
var self__ = this;
var _50745__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50743(self__.path,self__.late,meta50744__$1));
}));

(com.rpl.specter.t_com$rpl$specter50743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50745){
var self__ = this;
var _50745__$1 = this;
return self__.meta50744;
}));

(com.rpl.specter.t_com$rpl$specter50743.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50743.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__49448__auto__,vals__49449__auto__,structure,next_fn__49450__auto__){
var self__ = this;
var this__49448__auto____$1 = this;
var G__50746 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__49449__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__50747 = structure;
return (next_fn__49450__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__49450__auto__.cljs$core$IFn$_invoke$arity$2(G__50746,G__50747) : next_fn__49450__auto__.call(null,G__50746,G__50747));
}));

(com.rpl.specter.t_com$rpl$specter50743.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__49448__auto__,vals__49449__auto__,structure,next_fn__49450__auto__){
var self__ = this;
var this__49448__auto____$1 = this;
var G__50748 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__49449__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__50749 = structure;
return (next_fn__49450__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__49450__auto__.cljs$core$IFn$_invoke$arity$2(G__50748,G__50749) : next_fn__49450__auto__.call(null,G__50748,G__50749));
}));

(com.rpl.specter.t_com$rpl$specter50743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta50744","meta50744",1110238344,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50743.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50743.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50743");

(com.rpl.specter.t_com$rpl$specter50743.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50743");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50743.
 */
com.rpl.specter.__GT_t_com$rpl$specter50743 = (function com$rpl$specter$__GT_t_com$rpl$specter50743(path__$1,late__$1,meta50744){
return (new com.rpl.specter.t_com$rpl$specter50743(path__$1,late__$1,meta50744));
});

}

return (new com.rpl.specter.t_com$rpl$specter50743(path,late,null));
}));
var curr_params__49452__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__49452__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__49451__auto__,curr_params__49452__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__49451__auto__,curr_params__49452__auto__,null);
}
};
var G__50886 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__50887__i = 0, G__50887__a = new Array(arguments.length -  0);
while (G__50887__i < G__50887__a.length) {G__50887__a[G__50887__i] = arguments[G__50887__i + 0]; ++G__50887__i;}
  path = new cljs.core.IndexedSeq(G__50887__a,0,null);
} 
return G__50886__delegate.call(this,path);};
G__50886.cljs$lang$maxFixedArity = 0;
G__50886.cljs$lang$applyTo = (function (arglist__50888){
var path = cljs.core.seq(arglist__50888);
return G__50886__delegate(path);
});
G__50886.cljs$core$IFn$_invoke$arity$variadic = G__50886__delegate;
return G__50886;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = com.rpl.specter.impl.direct_nav_obj((function (val){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50750 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50750 = (function (val,meta50751){
this.val = val;
this.meta50751 = meta50751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50752,meta50751__$1){
var self__ = this;
var _50752__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50750(self__.val,meta50751__$1));
}));

(com.rpl.specter.t_com$rpl$specter50750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50752){
var self__ = this;
var _50752__$1 = this;
return self__.meta50751;
}));

(com.rpl.specter.t_com$rpl$specter50750.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50750.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__49448__auto__,vals__49449__auto__,structure,next_fn__49450__auto__){
var self__ = this;
var this__49448__auto____$1 = this;
var G__50753 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__49449__auto__,self__.val);
var G__50754 = structure;
return (next_fn__49450__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__49450__auto__.cljs$core$IFn$_invoke$arity$2(G__50753,G__50754) : next_fn__49450__auto__.call(null,G__50753,G__50754));
}));

(com.rpl.specter.t_com$rpl$specter50750.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__49448__auto__,vals__49449__auto__,structure,next_fn__49450__auto__){
var self__ = this;
var this__49448__auto____$1 = this;
var G__50755 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__49449__auto__,self__.val);
var G__50756 = structure;
return (next_fn__49450__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__49450__auto__.cljs$core$IFn$_invoke$arity$2(G__50755,G__50756) : next_fn__49450__auto__.call(null,G__50755,G__50756));
}));

(com.rpl.specter.t_com$rpl$specter50750.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta50751","meta50751",1693945356,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50750.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50750.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50750");

(com.rpl.specter.t_com$rpl$specter50750.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50750");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50750.
 */
com.rpl.specter.__GT_t_com$rpl$specter50750 = (function com$rpl$specter$__GT_t_com$rpl$specter50750(val__$1,meta50751){
return (new com.rpl.specter.t_com$rpl$specter50750(val__$1,meta50751));
});

}

return (new com.rpl.specter.t_com$rpl$specter50750(val,null));
}));
/**
 * Continues navigating on the given path with the collected vals reset to []. Once
 *   navigation leaves the scope of with-fresh-collected, the collected vals revert
 *   to what they were before.
 */
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__50889__delegate = function (path){
var builder__49451__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50757 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50757 = (function (path,late,meta50758){
this.path = path;
this.late = late;
this.meta50758 = meta50758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50759,meta50758__$1){
var self__ = this;
var _50759__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50757(self__.path,self__.late,meta50758__$1));
}));

(com.rpl.specter.t_com$rpl$specter50757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50759){
var self__ = this;
var _50759__$1 = this;
return self__.meta50758;
}));

(com.rpl.specter.t_com$rpl$specter50757.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50757.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter50757.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter50757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta50758","meta50758",-849153971,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50757.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50757.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50757");

(com.rpl.specter.t_com$rpl$specter50757.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50757");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50757.
 */
com.rpl.specter.__GT_t_com$rpl$specter50757 = (function com$rpl$specter$__GT_t_com$rpl$specter50757(path__$1,late__$1,meta50758){
return (new com.rpl.specter.t_com$rpl$specter50757(path__$1,late__$1,meta50758));
});

}

return (new com.rpl.specter.t_com$rpl$specter50757(path,late,null));
}));
var curr_params__49452__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__49452__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__49451__auto__,curr_params__49452__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__49451__auto__,curr_params__49452__auto__,null);
}
};
var G__50889 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__50890__i = 0, G__50890__a = new Array(arguments.length -  0);
while (G__50890__i < G__50890__a.length) {G__50890__a[G__50890__i] = arguments[G__50890__i + 0]; ++G__50890__i;}
  path = new cljs.core.IndexedSeq(G__50890__a,0,null);
} 
return G__50889__delegate.call(this,path);};
G__50889.cljs$lang$maxFixedArity = 0;
G__50889.cljs$lang$applyTo = (function (arglist__50891){
var path = cljs.core.seq(arglist__50891);
return G__50889__delegate(path);
});
G__50889.cljs$core$IFn$_invoke$arity$variadic = G__50889__delegate;
return G__50889;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50762 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50762 = (function (meta50763){
this.meta50763 = meta50763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50764,meta50763__$1){
var self__ = this;
var _50764__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50762(meta50763__$1));
}));

(com.rpl.specter.t_com$rpl$specter50762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50764){
var self__ = this;
var _50764__$1 = this;
return self__.meta50763;
}));

(com.rpl.specter.t_com$rpl$specter50762.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50762.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__50765 = cljs.core.PersistentVector.EMPTY;
var G__50766 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__50765,G__50766) : next_fn.call(null,G__50765,G__50766));
}));

(com.rpl.specter.t_com$rpl$specter50762.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__50767 = cljs.core.PersistentVector.EMPTY;
var G__50768 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__50767,G__50768) : next_fn.call(null,G__50767,G__50768));
}));

(com.rpl.specter.t_com$rpl$specter50762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50763","meta50763",-510643865,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50762.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50762.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50762");

(com.rpl.specter.t_com$rpl$specter50762.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50762");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50762.
 */
com.rpl.specter.__GT_t_com$rpl$specter50762 = (function com$rpl$specter$__GT_t_com$rpl$specter50762(meta50763){
return (new com.rpl.specter.t_com$rpl$specter50762(meta50763));
});

}

return (new com.rpl.specter.t_com$rpl$specter50762(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__50892 = null;
var G__50892__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP));
});
var G__50892__3 = (function (cond_p,then_path,else_path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
var builder__49451__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50771 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50771 = (function (cond_p,then_path,else_path,temp__5733__auto__,afn,late_then,late_else,meta50772){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5733__auto__ = temp__5733__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta50772 = meta50772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50773,meta50772__$1){
var self__ = this;
var _50773__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50771(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5733__auto__,self__.afn,self__.late_then,self__.late_else,meta50772__$1));
}));

(com.rpl.specter.t_com$rpl$specter50771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50773){
var self__ = this;
var _50773__$1 = this;
return self__.meta50772;
}));

(com.rpl.specter.t_com$rpl$specter50771.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50771.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter50771.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter50771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta50772","meta50772",1035501603,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50771.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50771.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50771");

(com.rpl.specter.t_com$rpl$specter50771.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50771");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50771.
 */
com.rpl.specter.__GT_t_com$rpl$specter50771 = (function com$rpl$specter$__GT_t_com$rpl$specter50771(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,afn__$1,late_then__$1,late_else__$1,meta50772){
return (new com.rpl.specter.t_com$rpl$specter50771(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,afn__$1,late_then__$1,late_else__$1,meta50772));
});

}

return (new com.rpl.specter.t_com$rpl$specter50771(cond_p,then_path,else_path,temp__5733__auto__,afn,late_then,late_else,null));
}));
var curr_params__49452__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__49452__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__49451__auto__,curr_params__49452__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__49451__auto__,curr_params__49452__auto__,null);
}
} else {
var builder__49451__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_cond,late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50774 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50774 = (function (cond_p,then_path,else_path,temp__5733__auto__,late_cond,late_then,late_else,meta50775){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta50775 = meta50775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50776,meta50775__$1){
var self__ = this;
var _50776__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50774(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5733__auto__,self__.late_cond,self__.late_then,self__.late_else,meta50775__$1));
}));

(com.rpl.specter.t_com$rpl$specter50774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50776){
var self__ = this;
var _50776__$1 = this;
return self__.meta50775;
}));

(com.rpl.specter.t_com$rpl$specter50774.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50774.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,(function (p1__50769_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__50769_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter50774.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,(function (p1__50770_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__50770_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter50774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta50775","meta50775",-1915069618,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50774.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50774.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50774");

(com.rpl.specter.t_com$rpl$specter50774.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50774");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50774.
 */
com.rpl.specter.__GT_t_com$rpl$specter50774 = (function com$rpl$specter$__GT_t_com$rpl$specter50774(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta50775){
return (new com.rpl.specter.t_com$rpl$specter50774(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta50775));
});

}

return (new com.rpl.specter.t_com$rpl$specter50774(cond_p,then_path,else_path,temp__5733__auto__,late_cond,late_then,late_else,null));
}));
var curr_params__49452__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null,cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__49452__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__49451__auto__,curr_params__49452__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__49451__auto__,curr_params__49452__auto__,null);
}
}
});
G__50892 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__50892__2.call(this,cond_p,then_path);
case 3:
return G__50892__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50892.cljs$core$IFn$_invoke$arity$2 = G__50892__2;
G__50892.cljs$core$IFn$_invoke$arity$3 = G__50892__3;
return G__50892;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 */
com.rpl.specter.cond_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__50900__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,p__50777){
var vec__50778 = p__50777;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50778,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50778,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null,tester,apath,p));
}),com.rpl.specter.STOP,pairs);
};
var G__50900 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__50901__i = 0, G__50901__a = new Array(arguments.length -  0);
while (G__50901__i < G__50901__a.length) {G__50901__a[G__50901__i] = arguments[G__50901__i + 0]; ++G__50901__i;}
  conds = new cljs.core.IndexedSeq(G__50901__a,0,null);
} 
return G__50900__delegate.call(this,conds);};
G__50900.cljs$lang$maxFixedArity = 0;
G__50900.cljs$lang$applyTo = (function (arglist__50902){
var conds = cljs.core.seq(arglist__50902);
return G__50900__delegate(conds);
});
G__50900.cljs$core$IFn$_invoke$arity$variadic = G__50900__delegate;
return G__50900;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__50903 = null;
var G__50903__0 = (function (){
return com.rpl.specter.STAY;
});
var G__50903__1 = (function (path){
return path;
});
var G__50903__2 = (function (path1,path2){
var builder__49451__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter50781 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter50781 = (function (path1,path2,late1,late2,meta50782){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta50782 = meta50782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter50781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50783,meta50782__$1){
var self__ = this;
var _50783__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter50781(self__.path1,self__.path2,self__.late1,self__.late2,meta50782__$1));
}));

(com.rpl.specter.t_com$rpl$specter50781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50783){
var self__ = this;
var _50783__$1 = this;
return self__.meta50782;
}));

(com.rpl.specter.t_com$rpl$specter50781.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter50781.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var res1 = com.rpl.specter.protocols.select_STAR_(self__.late1,vals,structure,next_fn);
if(cljs.core.reduced_QMARK_(res1)){
return res1;
} else {
var res2 = com.rpl.specter.protocols.select_STAR_(self__.late2,vals,structure,next_fn);
if((com.rpl.specter.NONE === res1)){
return res2;
} else {
return res1;
}
}
}));

(com.rpl.specter.t_com$rpl$specter50781.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter50781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta50782","meta50782",988009440,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter50781.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter50781.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter50781");

(com.rpl.specter.t_com$rpl$specter50781.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter50781");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter50781.
 */
com.rpl.specter.__GT_t_com$rpl$specter50781 = (function com$rpl$specter$__GT_t_com$rpl$specter50781(path1__$1,path2__$1,late1__$1,late2__$1,meta50782){
return (new com.rpl.specter.t_com$rpl$specter50781(path1__$1,path2__$1,late1__$1,late2__$1,meta50782));
});

}

return (new com.rpl.specter.t_com$rpl$specter50781(path1,path2,late1,late2,null));
}));
var curr_params__49452__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null,path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null,path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__49452__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__49451__auto__,curr_params__49452__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__49451__auto__,curr_params__49452__auto__,null);
}
});
var G__50903__3 = (function() { 
var G__50920__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null,path1,path2)),paths);
};
var G__50920 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__50927__i = 0, G__50927__a = new Array(arguments.length -  2);
while (G__50927__i < G__50927__a.length) {G__50927__a[G__50927__i] = arguments[G__50927__i + 2]; ++G__50927__i;}
  paths = new cljs.core.IndexedSeq(G__50927__a,0,null);
} 
return G__50920__delegate.call(this,path1,path2,paths);};
G__50920.cljs$lang$maxFixedArity = 2;
G__50920.cljs$lang$applyTo = (function (arglist__50928){
var path1 = cljs.core.first(arglist__50928);
arglist__50928 = cljs.core.next(arglist__50928);
var path2 = cljs.core.first(arglist__50928);
var paths = cljs.core.rest(arglist__50928);
return G__50920__delegate(path1,path2,paths);
});
G__50920.cljs$core$IFn$_invoke$arity$variadic = G__50920__delegate;
return G__50920;
})()
;
G__50903 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__50903__0.call(this);
case 1:
return G__50903__1.call(this,path1);
case 2:
return G__50903__2.call(this,path1,path2);
default:
var G__50929 = null;
if (arguments.length > 2) {
var G__50930__i = 0, G__50930__a = new Array(arguments.length -  2);
while (G__50930__i < G__50930__a.length) {G__50930__a[G__50930__i] = arguments[G__50930__i + 2]; ++G__50930__i;}
G__50929 = new cljs.core.IndexedSeq(G__50930__a,0,null);
}
return G__50903__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__50929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50903.cljs$lang$maxFixedArity = 2;
G__50903.cljs$lang$applyTo = G__50903__3.cljs$lang$applyTo;
G__50903.cljs$core$IFn$_invoke$arity$0 = G__50903__0;
G__50903.cljs$core$IFn$_invoke$arity$1 = G__50903__1;
G__50903.cljs$core$IFn$_invoke$arity$2 = G__50903__2;
G__50903.cljs$core$IFn$_invoke$arity$variadic = G__50903__3.cljs$core$IFn$_invoke$arity$variadic;
return G__50903;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__50931__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path));
};
var G__50931 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__50932__i = 0, G__50932__a = new Array(arguments.length -  0);
while (G__50932__i < G__50932__a.length) {G__50932__a[G__50932__i] = arguments[G__50932__i + 0]; ++G__50932__i;}
  path = new cljs.core.IndexedSeq(G__50932__a,0,null);
} 
return G__50931__delegate.call(this,path);};
G__50931.cljs$lang$maxFixedArity = 0;
G__50931.cljs$lang$applyTo = (function (arglist__50933){
var path = cljs.core.seq(arglist__50933);
return G__50931__delegate(path);
});
G__50931.cljs$core$IFn$_invoke$arity$variadic = G__50931__delegate;
return G__50931;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__50934__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY));
};
var G__50934 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__50939__i = 0, G__50939__a = new Array(arguments.length -  0);
while (G__50939__i < G__50939__a.length) {G__50939__a[G__50939__i] = arguments[G__50939__i + 0]; ++G__50939__i;}
  path = new cljs.core.IndexedSeq(G__50939__a,0,null);
} 
return G__50934__delegate.call(this,path);};
G__50934.cljs$lang$maxFixedArity = 0;
G__50934.cljs$lang$applyTo = (function (arglist__50940){
var path = cljs.core.seq(arglist__50940);
return G__50934__delegate(path);
});
G__50934.cljs$core$IFn$_invoke$arity$variadic = G__50934__delegate;
return G__50934;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__49458__auto__ = com.rpl.specter.pathcache50788;
var info__49458__auto____$1 = (((info__49458__auto__ == null))?(function (){var info50789 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1394,1394,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1175,1179,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,644,646,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2133,2133,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache50788 = info50789;

return info50789;
})():info__49458__auto__);
var precompiled50790 = com.rpl.specter.impl.cached_path_info_precompiled(info__49458__auto____$1);
var dynamic_QMARK___49459__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__49458__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___49459__auto__)){
var G__50791 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled50790.cljs$core$IFn$_invoke$arity$1 ? precompiled50790.cljs$core$IFn$_invoke$arity$1(G__50791) : precompiled50790.call(null,G__50791));
} else {
return precompiled50790;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__49458__auto__ = com.rpl.specter.pathcache50792;
var info__49458__auto____$1 = (((info__49458__auto__ == null))?(function (){var info50793 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1394,1394,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1175,1179,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,644,646,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2133,2133,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"com/rpl/specter.cljc",16,1,689,691,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache50792 = info50793;

return info50793;
})():info__49458__auto__);
var precompiled50794 = com.rpl.specter.impl.cached_path_info_precompiled(info__49458__auto____$1);
var dynamic_QMARK___49459__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__49458__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___49459__auto__)){
var G__50795 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled50794.cljs$core$IFn$_invoke$arity$1 ? precompiled50794.cljs$core$IFn$_invoke$arity$1(G__50795) : precompiled50794.call(null,G__50795));
} else {
return precompiled50794;
}
})());

return p;
}));
var empty__GT_NONE_50960 = (function (){var G__50796 = cljs.core.empty_QMARK_;
var G__50797 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__50796,G__50797) : com.rpl.specter.if_path.call(null,G__50796,G__50797));
})();
var compact_STAR__50961 = (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_50960) : com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_50960));
});
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__50962__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__50961,path);
};
var G__50962 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__50963__i = 0, G__50963__a = new Array(arguments.length -  0);
while (G__50963__i < G__50963__a.length) {G__50963__a[G__50963__i] = arguments[G__50963__i + 0]; ++G__50963__i;}
  path = new cljs.core.IndexedSeq(G__50963__a,0,null);
} 
return G__50962__delegate.call(this,path);};
G__50962.cljs$lang$maxFixedArity = 0;
G__50962.cljs$lang$applyTo = (function (arglist__50964){
var path = cljs.core.seq(arglist__50964);
return G__50962__delegate(path);
});
G__50962.cljs$core$IFn$_invoke$arity$variadic = G__50962__delegate;
return G__50962;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=com.rpl.specter.js.map
