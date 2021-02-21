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
var G__38682__delegate = function (args){
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
var G__38682 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38686__i = 0, G__38686__a = new Array(arguments.length -  0);
while (G__38686__i < G__38686__a.length) {G__38686__a[G__38686__i] = arguments[G__38686__i + 0]; ++G__38686__i;}
  args = new cljs.core.IndexedSeq(G__38686__a,0,null);
} 
return G__38682__delegate.call(this,args);};
G__38682.cljs$lang$maxFixedArity = 0;
G__38682.cljs$lang$applyTo = (function (arglist__38687){
var args = cljs.core.seq(arglist__38687);
return G__38682__delegate(args);
});
G__38682.cljs$core$IFn$_invoke$arity$variadic = G__38682__delegate;
return G__38682;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38694 = arguments.length;
var i__4737__auto___38696 = (0);
while(true){
if((i__4737__auto___38696 < len__4736__auto___38694)){
args__4742__auto__.push((arguments[i__4737__auto___38696]));

var G__38699 = (i__4737__auto___38696 + (1));
i__4737__auto___38696 = G__38699;
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
(com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq38126){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38126));
}));

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__38127 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__38128 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__38127,G__38128) : com.rpl.specter.compiled_select.call(null,G__38127,G__38128));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__38129 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__38130 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__38129,G__38130) : com.rpl.specter.compiled_select_one.call(null,G__38129,G__38130));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__38131 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__38132 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__38131,G__38132) : com.rpl.specter.compiled_select_one_BANG_.call(null,G__38131,G__38132));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__38133 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__38134 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__38133,G__38134) : com.rpl.specter.compiled_select_first.call(null,G__38133,G__38134));
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
var G__38135 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__38136 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__38135,G__38136) : com.rpl.specter.compiled_select_any.call(null,G__38135,G__38136));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__38137 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__38138 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__38137,G__38138) : com.rpl.specter.compiled_selected_any_QMARK_.call(null,G__38137,G__38138));
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
var G__38139 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__38140 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__38139,G__38140) : com.rpl.specter.compiled_traverse.call(null,G__38139,G__38140));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__38141 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__38141) : com.rpl.specter.compiled_traverse_all.call(null,G__38141));
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
var G__38142 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__38143 = transform_fn;
var G__38144 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__38142,G__38143,G__38144) : com.rpl.specter.compiled_transform.call(null,G__38142,G__38143,G__38144));
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
var G__38145 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__38146 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__38145,G__38146) : com.rpl.specter.compiled_multi_transform.call(null,G__38145,G__38146));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__38147 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__38148 = val;
var G__38149 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__38147,G__38148,G__38149) : com.rpl.specter.compiled_setval.call(null,G__38147,G__38148,G__38149));
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
var len__4736__auto___38745 = arguments.length;
var i__4737__auto___38746 = (0);
while(true){
if((i__4737__auto___38746 < len__4736__auto___38745)){
args__4742__auto__.push((arguments[i__4737__auto___38746]));

var G__38747 = (i__4737__auto___38746 + (1));
i__4737__auto___38746 = G__38747;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__38154){
var map__38155 = p__38154;
var map__38155__$1 = (((((!((map__38155 == null))))?(((((map__38155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38155):map__38155);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38155__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var G__38157 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__38158 = transform_fn;
var G__38159 = structure;
var G__38160 = new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341);
var G__38161 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__38157,G__38158,G__38159,G__38160,G__38161) : com.rpl.specter.compiled_replace_in.call(null,G__38157,G__38158,G__38159,G__38160,G__38161));
}));

(com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq38150){
var G__38151 = cljs.core.first(seq38150);
var seq38150__$1 = cljs.core.next(seq38150);
var G__38152 = cljs.core.first(seq38150__$1);
var seq38150__$2 = cljs.core.next(seq38150__$1);
var G__38153 = cljs.core.first(seq38150__$2);
var seq38150__$3 = cljs.core.next(seq38150__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38151,G__38152,G__38153,seq38150__$3);
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
var G__38761__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__38761 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38763__i = 0, G__38763__a = new Array(arguments.length -  0);
while (G__38763__i < G__38763__a.length) {G__38763__a[G__38763__i] = arguments[G__38763__i + 0]; ++G__38763__i;}
  args = new cljs.core.IndexedSeq(G__38763__a,0,null);
} 
return G__38761__delegate.call(this,args);};
G__38761.cljs$lang$maxFixedArity = 0;
G__38761.cljs$lang$applyTo = (function (arglist__38764){
var args = cljs.core.seq(arglist__38764);
return G__38761__delegate(args);
});
G__38761.cljs$core$IFn$_invoke$arity$variadic = G__38761__delegate;
return G__38761;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38162 = (function (meta38163){
this.meta38163 = meta38163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38164,meta38163__$1){
var self__ = this;
var _38164__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38162(meta38163__$1));
}));

(com.rpl.specter.t_com$rpl$specter38162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38164){
var self__ = this;
var _38164__$1 = this;
return self__.meta38163;
}));

(com.rpl.specter.t_com$rpl$specter38162.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38162.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter38162.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return structure;
}));

(com.rpl.specter.t_com$rpl$specter38162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38163","meta38163",837550625,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38162.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38162.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38162");

(com.rpl.specter.t_com$rpl$specter38162.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38162");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38162.
 */
com.rpl.specter.__GT_t_com$rpl$specter38162 = (function com$rpl$specter$__GT_t_com$rpl$specter38162(meta38163){
return (new com.rpl.specter.t_com$rpl$specter38162(meta38163));
});

}

return (new com.rpl.specter.t_com$rpl$specter38162(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38165 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38165 = (function (afn,meta38166){
this.afn = afn;
this.meta38166 = meta38166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38167,meta38166__$1){
var self__ = this;
var _38167__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38165(self__.afn,meta38166__$1));
}));

(com.rpl.specter.t_com$rpl$specter38165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38167){
var self__ = this;
var _38167__$1 = this;
return self__.meta38166;
}));

(com.rpl.specter.t_com$rpl$specter38165.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38165.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter38165.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter38165.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta38166","meta38166",1075619984,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38165.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38165.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38165");

(com.rpl.specter.t_com$rpl$specter38165.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38165");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38165.
 */
com.rpl.specter.__GT_t_com$rpl$specter38165 = (function com$rpl$specter$__GT_t_com$rpl$specter38165(afn__$1,meta38166){
return (new com.rpl.specter.t_com$rpl$specter38165(afn__$1,meta38166));
});

}

return (new com.rpl.specter.t_com$rpl$specter38165(afn,null));
}));
/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38168 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38168 = (function (afn,meta38169){
this.afn = afn;
this.meta38169 = meta38169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38170,meta38169__$1){
var self__ = this;
var _38170__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38168(self__.afn,meta38169__$1));
}));

(com.rpl.specter.t_com$rpl$specter38168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38170){
var self__ = this;
var _38170__$1 = this;
return self__.meta38169;
}));

(com.rpl.specter.t_com$rpl$specter38168.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38168.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter38168.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null,vals,structure));
}));

(com.rpl.specter.t_com$rpl$specter38168.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta38169","meta38169",-175123433,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38168.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38168.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38168");

(com.rpl.specter.t_com$rpl$specter38168.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38168");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38168.
 */
com.rpl.specter.__GT_t_com$rpl$specter38168 = (function com$rpl$specter$__GT_t_com$rpl$specter38168(afn__$1,meta38169){
return (new com.rpl.specter.t_com$rpl$specter38168(afn__$1,meta38169));
});

}

return (new com.rpl.specter.t_com$rpl$specter38168(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__38171 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__38171) : com.rpl.specter.terminal.call(null,G__38171));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38172 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38172 = (function (meta38173){
this.meta38173 = meta38173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38174,meta38173__$1){
var self__ = this;
var _38174__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38172(meta38173__$1));
}));

(com.rpl.specter.t_com$rpl$specter38172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38174){
var self__ = this;
var _38174__$1 = this;
return self__.meta38173;
}));

(com.rpl.specter.t_com$rpl$specter38172.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38172.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter38172.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return com.rpl.specter.navs.all_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter38172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38173","meta38173",-1384791032,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38172.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38172.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38172");

(com.rpl.specter.t_com$rpl$specter38172.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38172");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38172.
 */
com.rpl.specter.__GT_t_com$rpl$specter38172 = (function com$rpl$specter$__GT_t_com$rpl$specter38172(meta38173){
return (new com.rpl.specter.t_com$rpl$specter38172(meta38173));
});

}

return (new com.rpl.specter.t_com$rpl$specter38172(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38175 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38175 = (function (meta38176){
this.meta38176 = meta38176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38177,meta38176__$1){
var self__ = this;
var _38177__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38175(meta38176__$1));
}));

(com.rpl.specter.t_com$rpl$specter38175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38177){
var self__ = this;
var _38177__$1 = this;
return self__.meta38176;
}));

(com.rpl.specter.t_com$rpl$specter38175.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38175.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter38175.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
}));

(com.rpl.specter.t_com$rpl$specter38175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38176","meta38176",-1353815147,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38175.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38175.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38175");

(com.rpl.specter.t_com$rpl$specter38175.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38175");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38175.
 */
com.rpl.specter.__GT_t_com$rpl$specter38175 = (function com$rpl$specter$__GT_t_com$rpl$specter38175(meta38176){
return (new com.rpl.specter.t_com$rpl$specter38175(meta38176));
});

}

return (new com.rpl.specter.t_com$rpl$specter38175(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__34102__auto__,v){
var ret__34103__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((ret__34103__auto__ === com.rpl.specter.NONE)){
return curr__34102__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__34103__auto__)){
return cljs.core.reduced(ret__34103__auto__);
} else {
return ret__34103__auto__;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38178 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38178 = (function (meta38179){
this.meta38179 = meta38179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38180,meta38179__$1){
var self__ = this;
var _38180__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38178(meta38179__$1));
}));

(com.rpl.specter.t_com$rpl$specter38178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38180){
var self__ = this;
var _38180__$1 = this;
return self__.meta38179;
}));

(com.rpl.specter.t_com$rpl$specter38178.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38178.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__34102__auto__,v){
var ret__34103__auto__ = next_fn(v);
if((ret__34103__auto__ === com.rpl.specter.NONE)){
return curr__34102__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__34103__auto__)){
return cljs.core.reduced(ret__34103__auto__);
} else {
return ret__34103__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
}));

(com.rpl.specter.t_com$rpl$specter38178.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter38178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38179","meta38179",-170709254,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38178.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38178.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38178");

(com.rpl.specter.t_com$rpl$specter38178.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38178");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38178.
 */
com.rpl.specter.__GT_t_com$rpl$specter38178 = (function com$rpl$specter$__GT_t_com$rpl$specter38178(meta38179){
return (new com.rpl.specter.t_com$rpl$specter38178(meta38179));
});

}

return (new com.rpl.specter.t_com$rpl$specter38178(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__34102__auto__,k){
var ret__34103__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((ret__34103__auto__ === com.rpl.specter.NONE)){
return curr__34102__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__34103__auto__)){
return cljs.core.reduced(ret__34103__auto__);
} else {
return ret__34103__auto__;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38181 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38181 = (function (meta38182){
this.meta38182 = meta38182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38183,meta38182__$1){
var self__ = this;
var _38183__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38181(meta38182__$1));
}));

(com.rpl.specter.t_com$rpl$specter38181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38183){
var self__ = this;
var _38183__$1 = this;
return self__.meta38182;
}));

(com.rpl.specter.t_com$rpl$specter38181.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38181.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__34102__auto__,k){
var ret__34103__auto__ = next_fn(k);
if((ret__34103__auto__ === com.rpl.specter.NONE)){
return curr__34102__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__34103__auto__)){
return cljs.core.reduced(ret__34103__auto__);
} else {
return ret__34103__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
}));

(com.rpl.specter.t_com$rpl$specter38181.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter38181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38182","meta38182",253692312,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38181.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38181.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38181");

(com.rpl.specter.t_com$rpl$specter38181.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38181");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38181.
 */
com.rpl.specter.__GT_t_com$rpl$specter38181 = (function com$rpl$specter$__GT_t_com$rpl$specter38181(meta38182){
return (new com.rpl.specter.t_com$rpl$specter38181(meta38182));
});

}

return (new com.rpl.specter.t_com$rpl$specter38181(null));
})()
;
com.rpl.specter.VAL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38184 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38184 = (function (meta38185){
this.meta38185 = meta38185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38186,meta38185__$1){
var self__ = this;
var _38186__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38184(meta38185__$1));
}));

(com.rpl.specter.t_com$rpl$specter38184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38186){
var self__ = this;
var _38186__$1 = this;
return self__.meta38185;
}));

(com.rpl.specter.t_com$rpl$specter38184.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38184.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37092__auto__,vals__37093__auto__,structure,next_fn__37094__auto__){
var self__ = this;
var this__37092__auto____$1 = this;
var G__38187 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__37093__auto__,structure);
var G__38188 = structure;
return (next_fn__37094__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__37094__auto__.cljs$core$IFn$_invoke$arity$2(G__38187,G__38188) : next_fn__37094__auto__.call(null,G__38187,G__38188));
}));

(com.rpl.specter.t_com$rpl$specter38184.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37092__auto__,vals__37093__auto__,structure,next_fn__37094__auto__){
var self__ = this;
var this__37092__auto____$1 = this;
var G__38189 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__37093__auto__,structure);
var G__38190 = structure;
return (next_fn__37094__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__37094__auto__.cljs$core$IFn$_invoke$arity$2(G__38189,G__38190) : next_fn__37094__auto__.call(null,G__38189,G__38190));
}));

(com.rpl.specter.t_com$rpl$specter38184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38185","meta38185",501672453,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38184.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38184.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38184");

(com.rpl.specter.t_com$rpl$specter38184.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38184");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38184.
 */
com.rpl.specter.__GT_t_com$rpl$specter38184 = (function com$rpl$specter$__GT_t_com$rpl$specter38184(meta38185){
return (new com.rpl.specter.t_com$rpl$specter38184(meta38185));
});

}

return (new com.rpl.specter.t_com$rpl$specter38184(null));
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
var G__38191 = structure;
var G__38192 = s;
var G__38193 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__38194 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__38191,G__38192,G__38193,G__38194) : com.rpl.specter.navs.srange_transform.call(null,G__38191,G__38192,G__38193,G__38194));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38195 = (function (start_index_fn,end_index_fn,meta38196){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta38196 = meta38196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38197,meta38196__$1){
var self__ = this;
var _38197__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38195(self__.start_index_fn,self__.end_index_fn,meta38196__$1));
}));

(com.rpl.specter.t_com$rpl$specter38195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38197){
var self__ = this;
var _38197__$1 = this;
return self__.meta38196;
}));

(com.rpl.specter.t_com$rpl$specter38195.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38195.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter38195.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
var G__38198 = structure;
var G__38199 = s;
var G__38200 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__38201 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__38198,G__38199,G__38200,G__38201) : com.rpl.specter.navs.srange_transform.call(null,G__38198,G__38199,G__38200,G__38201));
}));

(com.rpl.specter.t_com$rpl$specter38195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta38196","meta38196",776057973,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38195.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38195.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38195");

(com.rpl.specter.t_com$rpl$specter38195.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38195");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38195.
 */
com.rpl.specter.__GT_t_com$rpl$specter38195 = (function com$rpl$specter$__GT_t_com$rpl$specter38195(start_index_fn__$1,end_index_fn__$1,meta38196){
return (new com.rpl.specter.t_com$rpl$specter38195(start_index_fn__$1,end_index_fn__$1,meta38196));
});

}

return (new com.rpl.specter.t_com$rpl$specter38195(start_index_fn,end_index_fn,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38202 = (function (start,end,meta38203){
this.start = start;
this.end = end;
this.meta38203 = meta38203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38204,meta38203__$1){
var self__ = this;
var _38204__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38202(self__.start,self__.end,meta38203__$1));
}));

(com.rpl.specter.t_com$rpl$specter38202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38204){
var self__ = this;
var _38204__$1 = this;
return self__.meta38203;
}));

(com.rpl.specter.t_com$rpl$specter38202.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38202.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter38202.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn));
}));

(com.rpl.specter.t_com$rpl$specter38202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta38203","meta38203",1808547088,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38202.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38202.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38202");

(com.rpl.specter.t_com$rpl$specter38202.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38202");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38202.
 */
com.rpl.specter.__GT_t_com$rpl$specter38202 = (function com$rpl$specter$__GT_t_com$rpl$specter38202(start__$1,end__$1,meta38203){
return (new com.rpl.specter.t_com$rpl$specter38202(start__$1,end__$1,meta38203));
});

}

return (new com.rpl.specter.t_com$rpl$specter38202(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__34102__auto__,p__38205){
var vec__38206 = p__38205;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38206,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38206,(1),null);
var ret__34103__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__34103__auto__ === com.rpl.specter.NONE)){
return curr__34102__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__34103__auto__)){
return cljs.core.reduced(ret__34103__auto__);
} else {
return ret__34103__auto__;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38209 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38209 = (function (pred,meta38210){
this.pred = pred;
this.meta38210 = meta38210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38211,meta38210__$1){
var self__ = this;
var _38211__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38209(self__.pred,meta38210__$1));
}));

(com.rpl.specter.t_com$rpl$specter38209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38211){
var self__ = this;
var _38211__$1 = this;
return self__.meta38210;
}));

(com.rpl.specter.t_com$rpl$specter38209.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38209.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__34102__auto__,p__38212){
var vec__38213 = p__38212;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38213,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38213,(1),null);
var ret__34103__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__34103__auto__ === com.rpl.specter.NONE)){
return curr__34102__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__34103__auto__)){
return cljs.core.reduced(ret__34103__auto__);
} else {
return ret__34103__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,self__.pred));
}));

(com.rpl.specter.t_com$rpl$specter38209.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter38209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta38210","meta38210",-1159328961,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38209.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38209.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38209");

(com.rpl.specter.t_com$rpl$specter38209.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38209");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38209.
 */
com.rpl.specter.__GT_t_com$rpl$specter38209 = (function com$rpl$specter$__GT_t_com$rpl$specter38209(pred__$1,meta38210){
return (new com.rpl.specter.t_com$rpl$specter38209(pred__$1,meta38210));
});

}

return (new com.rpl.specter.t_com$rpl$specter38209(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__38216 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__38216) : next_fn.call(null,G__38216));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,""))),structure].join('');
} else {
var to_prepend = (function (){var G__38217 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__38217) : next_fn.call(null,G__38217));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38218 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38218 = (function (meta38219){
this.meta38219 = meta38219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38220,meta38219__$1){
var self__ = this;
var _38220__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38218(meta38219__$1));
}));

(com.rpl.specter.t_com$rpl$specter38218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38220){
var self__ = this;
var _38220__$1 = this;
return self__.meta38219;
}));

(com.rpl.specter.t_com$rpl$specter38218.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38218.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter38218.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn("")),structure].join('');
} else {
var to_prepend = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
}));

(com.rpl.specter.t_com$rpl$specter38218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38219","meta38219",-1856675360,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38218.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38218.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38218");

(com.rpl.specter.t_com$rpl$specter38218.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38218");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38218.
 */
com.rpl.specter.__GT_t_com$rpl$specter38218 = (function com$rpl$specter$__GT_t_com$rpl$specter38218(meta38219){
return (new com.rpl.specter.t_com$rpl$specter38218(meta38219));
});

}

return (new com.rpl.specter.t_com$rpl$specter38218(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__38221 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__38221) : next_fn.call(null,G__38221));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,"")))].join('');
} else {
var to_append = (function (){var G__38222 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__38222) : next_fn.call(null,G__38222));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38223 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38223 = (function (meta38224){
this.meta38224 = meta38224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38225,meta38224__$1){
var self__ = this;
var _38225__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38223(meta38224__$1));
}));

(com.rpl.specter.t_com$rpl$specter38223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38225){
var self__ = this;
var _38225__$1 = this;
return self__.meta38224;
}));

(com.rpl.specter.t_com$rpl$specter38223.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38223.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter38223.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn(""))].join('');
} else {
var to_append = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all(structure,to_append);
}
}));

(com.rpl.specter.t_com$rpl$specter38223.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38224","meta38224",1904330815,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38223.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38223.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38223");

(com.rpl.specter.t_com$rpl$specter38223.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38223");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38223.
 */
com.rpl.specter.__GT_t_com$rpl$specter38223 = (function com$rpl$specter$__GT_t_com$rpl$specter38223(meta38224){
return (new com.rpl.specter.t_com$rpl$specter38223(meta38224));
});

}

return (new com.rpl.specter.t_com$rpl$specter38223(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38226 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38226 = (function (meta38227){
this.meta38227 = meta38227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38228,meta38227__$1){
var self__ = this;
var _38228__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38226(meta38227__$1));
}));

(com.rpl.specter.t_com$rpl$specter38226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38228){
var self__ = this;
var _38228__$1 = this;
return self__.meta38227;
}));

(com.rpl.specter.t_com$rpl$specter38226.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38226.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter38226.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
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

(com.rpl.specter.t_com$rpl$specter38226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38227","meta38227",-1688387061,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38226.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38226.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38226");

(com.rpl.specter.t_com$rpl$specter38226.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38226");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38226.
 */
com.rpl.specter.__GT_t_com$rpl$specter38226 = (function com$rpl$specter$__GT_t_com$rpl$specter38226(meta38227){
return (new com.rpl.specter.t_com$rpl$specter38226(meta38227));
});

}

return (new com.rpl.specter.t_com$rpl$specter38226(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38229 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38229 = (function (meta38230){
this.meta38230 = meta38230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38231,meta38230__$1){
var self__ = this;
var _38231__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38229(meta38230__$1));
}));

(com.rpl.specter.t_com$rpl$specter38229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38231){
var self__ = this;
var _38231__$1 = this;
return self__.meta38230;
}));

(com.rpl.specter.t_com$rpl$specter38229.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38229.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter38229.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter38229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38230","meta38230",-709978633,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38229.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38229.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38229");

(com.rpl.specter.t_com$rpl$specter38229.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38229");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38229.
 */
com.rpl.specter.__GT_t_com$rpl$specter38229 = (function com$rpl$specter$__GT_t_com$rpl$specter38229(meta38230){
return (new com.rpl.specter.t_com$rpl$specter38229(meta38230));
});

}

return (new com.rpl.specter.t_com$rpl$specter38229(null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38232 = (function (meta38233){
this.meta38233 = meta38233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38234,meta38233__$1){
var self__ = this;
var _38234__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38232(meta38233__$1));
}));

(com.rpl.specter.t_com$rpl$specter38232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38234){
var self__ = this;
var _38234__$1 = this;
return self__.meta38233;
}));

(com.rpl.specter.t_com$rpl$specter38232.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38232.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter38232.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter38232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38233","meta38233",828448848,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38232.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38232.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38232");

(com.rpl.specter.t_com$rpl$specter38232.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38232");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38232.
 */
com.rpl.specter.__GT_t_com$rpl$specter38232 = (function com$rpl$specter$__GT_t_com$rpl$specter38232(meta38233){
return (new com.rpl.specter.t_com$rpl$specter38232(meta38233));
});

}

return (new com.rpl.specter.t_com$rpl$specter38232(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__38235 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__38235) : next_fn.call(null,G__38235));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38236 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38236 = (function (aset,meta38237){
this.aset = aset;
this.meta38237 = meta38237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38238,meta38237__$1){
var self__ = this;
var _38238__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38236(self__.aset,meta38237__$1));
}));

(com.rpl.specter.t_com$rpl$specter38236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38238){
var self__ = this;
var _38238__$1 = this;
return self__.meta38237;
}));

(com.rpl.specter.t_com$rpl$specter38236.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38236.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
}));

(com.rpl.specter.t_com$rpl$specter38236.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
}));

(com.rpl.specter.t_com$rpl$specter38236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta38237","meta38237",-1612841201,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38236.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38236.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38236");

(com.rpl.specter.t_com$rpl$specter38236.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38236");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38236.
 */
com.rpl.specter.__GT_t_com$rpl$specter38236 = (function com$rpl$specter$__GT_t_com$rpl$specter38236(aset__$1,meta38237){
return (new com.rpl.specter.t_com$rpl$specter38236(aset__$1,meta38237));
});

}

return (new com.rpl.specter.t_com$rpl$specter38236(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__38239 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__38239) : next_fn.call(null,G__38239));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38240 = (function (m_keys,meta38241){
this.m_keys = m_keys;
this.meta38241 = meta38241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38242,meta38241__$1){
var self__ = this;
var _38242__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38240(self__.m_keys,meta38241__$1));
}));

(com.rpl.specter.t_com$rpl$specter38240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38242){
var self__ = this;
var _38242__$1 = this;
return self__.meta38241;
}));

(com.rpl.specter.t_com$rpl$specter38240.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38240.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
}));

(com.rpl.specter.t_com$rpl$specter38240.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
}));

(com.rpl.specter.t_com$rpl$specter38240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta38241","meta38241",1848498404,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38240.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38240.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38240");

(com.rpl.specter.t_com$rpl$specter38240.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38240");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38240.
 */
com.rpl.specter.__GT_t_com$rpl$specter38240 = (function com$rpl$specter$__GT_t_com$rpl$specter38240(m_keys__$1,meta38241){
return (new com.rpl.specter.t_com$rpl$specter38240(m_keys__$1,meta38241));
});

}

return (new com.rpl.specter.t_com$rpl$specter38240(m_keys,null));
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
var G__38957__delegate = function (path){
var builder__37095__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38243 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38243 = (function (path,late,meta38244){
this.path = path;
this.late = late;
this.meta38244 = meta38244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38245,meta38244__$1){
var self__ = this;
var _38245__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38243(self__.path,self__.late,meta38244__$1));
}));

(com.rpl.specter.t_com$rpl$specter38243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38245){
var self__ = this;
var _38245__$1 = this;
return self__.meta38244;
}));

(com.rpl.specter.t_com$rpl$specter38243.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38243.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter38243.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(transformed));
var G__38246 = self__.late;
var G__38247 = (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});
var G__38248 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__38246,G__38247,G__38248) : com.rpl.specter.compiled_transform.call(null,G__38246,G__38247,G__38248));
}));

(com.rpl.specter.t_com$rpl$specter38243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta38244","meta38244",306363955,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38243.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38243.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38243");

(com.rpl.specter.t_com$rpl$specter38243.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38243");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38243.
 */
com.rpl.specter.__GT_t_com$rpl$specter38243 = (function com$rpl$specter$__GT_t_com$rpl$specter38243(path__$1,late__$1,meta38244){
return (new com.rpl.specter.t_com$rpl$specter38243(path__$1,late__$1,meta38244));
});

}

return (new com.rpl.specter.t_com$rpl$specter38243(path,late,null));
}));
var curr_params__37096__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__37096__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__37095__auto__,curr_params__37096__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__37095__auto__,curr_params__37096__auto__,null);
}
};
var G__38957 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__38966__i = 0, G__38966__a = new Array(arguments.length -  0);
while (G__38966__i < G__38966__a.length) {G__38966__a[G__38966__i] = arguments[G__38966__i + 0]; ++G__38966__i;}
  path = new cljs.core.IndexedSeq(G__38966__a,0,null);
} 
return G__38957__delegate.call(this,path);};
G__38957.cljs$lang$maxFixedArity = 0;
G__38957.cljs$lang$applyTo = (function (arglist__38967){
var path = cljs.core.seq(arglist__38967);
return G__38957__delegate(path);
});
G__38957.cljs$core$IFn$_invoke$arity$variadic = G__38957__delegate;
return G__38957;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38249 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38249 = (function (key,meta38250){
this.key = key;
this.meta38250 = meta38250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38251,meta38250__$1){
var self__ = this;
var _38251__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38249(self__.key,meta38250__$1));
}));

(com.rpl.specter.t_com$rpl$specter38249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38251){
var self__ = this;
var _38251__$1 = this;
return self__.meta38250;
}));

(com.rpl.specter.t_com$rpl$specter38249.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38249.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter38249.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

(com.rpl.specter.t_com$rpl$specter38249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta38250","meta38250",-726773671,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38249.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38249.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38249");

(com.rpl.specter.t_com$rpl$specter38249.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38249");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38249.
 */
com.rpl.specter.__GT_t_com$rpl$specter38249 = (function com$rpl$specter$__GT_t_com$rpl$specter38249(key__$1,meta38250){
return (new com.rpl.specter.t_com$rpl$specter38249(key__$1,meta38250));
});

}

return (new com.rpl.specter.t_com$rpl$specter38249(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38252 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38252 = (function (elem,meta38253){
this.elem = elem;
this.meta38253 = meta38253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38254,meta38253__$1){
var self__ = this;
var _38254__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38252(self__.elem,meta38253__$1));
}));

(com.rpl.specter.t_com$rpl$specter38252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38254){
var self__ = this;
var _38254__$1 = this;
return self__.meta38253;
}));

(com.rpl.specter.t_com$rpl$specter38252.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38252.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter38252.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

(com.rpl.specter.t_com$rpl$specter38252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta38253","meta38253",-1536681521,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38252.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38252.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38252");

(com.rpl.specter.t_com$rpl$specter38252.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38252");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38252.
 */
com.rpl.specter.__GT_t_com$rpl$specter38252 = (function com$rpl$specter$__GT_t_com$rpl$specter38252(elem__$1,meta38253){
return (new com.rpl.specter.t_com$rpl$specter38252(elem__$1,meta38253));
});

}

return (new com.rpl.specter.t_com$rpl$specter38252(elem,null));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38255 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38255 = (function (index,meta38256){
this.index = index;
this.meta38256 = meta38256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38257,meta38256__$1){
var self__ = this;
var _38257__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38255(self__.index,meta38256__$1));
}));

(com.rpl.specter.t_com$rpl$specter38255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38257){
var self__ = this;
var _38257__$1 = this;
return self__.meta38256;
}));

(com.rpl.specter.t_com$rpl$specter38255.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38255.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter38255.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null,vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__37102__auto__ = com.rpl.specter.pathcache38258;
var info__37102__auto____$1 = (((info__37102__auto__ == null))?(function (){var info38259 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.srange,new cljs.core.Var(function(){return com.rpl.specter.srange;},new cljs.core.Symbol("com.rpl.specter","srange","com.rpl.specter/srange",-978851939,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"srange","srange",-1324254972,null),"com/rpl/specter.cljc",9,1,755,758,cljs.core.List.EMPTY,"Navigates to the subsequence bound by the indexes start (inclusive)\n          and end (exclusive)",(cljs.core.truth_(com.rpl.specter.srange)?com.rpl.specter.srange.cljs$lang$test:null)])),new cljs.core.Symbol(null,"srange","srange",-1324254972,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null)),com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null))], null),cljs.core.list(new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null));
com.rpl.specter.pathcache38258 = info38259;

return info38259;
})():info__37102__auto__);
var precompiled38260 = com.rpl.specter.impl.cached_path_info_precompiled(info__37102__auto____$1);
var dynamic_QMARK___37103__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__37102__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___37103__auto__)){
var G__38261 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.srange,self__.index,self__.index], null);
return (precompiled38260.cljs$core$IFn$_invoke$arity$1 ? precompiled38260.cljs$core$IFn$_invoke$arity$1(G__38261) : precompiled38260.call(null,G__38261));
} else {
return precompiled38260;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),structure);
}
}));

(com.rpl.specter.t_com$rpl$specter38255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta38256","meta38256",2064347956,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38255.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38255.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38255");

(com.rpl.specter.t_com$rpl$specter38255.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38255");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38255.
 */
com.rpl.specter.__GT_t_com$rpl$specter38255 = (function com$rpl$specter$__GT_t_com$rpl$specter38255(index__$1,meta38256){
return (new com.rpl.specter.t_com$rpl$specter38255(index__$1,meta38256));
});

}

return (new com.rpl.specter.t_com$rpl$specter38255(index,null));
}));
/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38262 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38262 = (function (i,meta38263){
this.i = i;
this.meta38263 = meta38263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38264,meta38263__$1){
var self__ = this;
var _38264__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38262(self__.i,meta38263__$1));
}));

(com.rpl.specter.t_com$rpl$specter38262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38264){
var self__ = this;
var _38264__$1 = this;
return self__.meta38263;
}));

(com.rpl.specter.t_com$rpl$specter38262.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38262.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter38262.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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
var G__39015 = (j - (1));
var G__39016 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__39015;
s = G__39016;
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
var G__39019 = (j + (1));
var G__39020 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__39019;
s = G__39020;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__37102__auto__ = com.rpl.specter.pathcache38265;
var info__37102__auto____$1 = (((info__37102__auto__ == null))?(function (){var info38266 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"com/rpl/specter.cljc",15,1,968,971,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache38265 = info38266;

return info38266;
})():info__37102__auto__);
var precompiled38267 = com.rpl.specter.impl.cached_path_info_precompiled(info__37102__auto____$1);
var dynamic_QMARK___37103__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__37102__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___37103__auto__)){
var G__38268 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled38267.cljs$core$IFn$_invoke$arity$1 ? precompiled38267.cljs$core$IFn$_invoke$arity$1(G__38268) : precompiled38267.call(null,G__38268));
} else {
return precompiled38267;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__37102__auto__ = com.rpl.specter.pathcache38269;
var info__37102__auto____$1 = (((info__37102__auto__ == null))?(function (){var info38270 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache38269 = info38270;

return info38270;
})():info__37102__auto__);
var precompiled38271 = com.rpl.specter.impl.cached_path_info_precompiled(info__37102__auto____$1);
var dynamic_QMARK___37103__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__37102__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___37103__auto__)){
var G__38272 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled38271.cljs$core$IFn$_invoke$arity$1 ? precompiled38271.cljs$core$IFn$_invoke$arity$1(G__38272) : precompiled38271.call(null,G__38272));
} else {
return precompiled38271;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter38262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta38263","meta38263",-1261404175,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38262.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38262.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38262");

(com.rpl.specter.t_com$rpl$specter38262.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38262");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38262.
 */
com.rpl.specter.__GT_t_com$rpl$specter38262 = (function com$rpl$specter$__GT_t_com$rpl$specter38262(i__$1,meta38263){
return (new com.rpl.specter.t_com$rpl$specter38262(i__$1,meta38263));
});

}

return (new com.rpl.specter.t_com$rpl$specter38262(i,null));
}));


com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__34102__auto__,e){
var ret__34103__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__38275 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__38275) : next_fn.call(null,G__38275));
})()
;
if((ret__34103__auto__ === com.rpl.specter.NONE)){
return curr__34102__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__34103__auto__)){
return cljs.core.reduced(ret__34103__auto__);
} else {
return ret__34103__auto__;
}
}
}),com.rpl.specter.NONE,structure);
});

com.rpl.specter.indexed_vals_transform_STAR_ = (function com$rpl$specter$indexed_vals_transform_STAR_(start,structure,next_fn){
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__38276 = (function (){var G__38279 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__38279) : next_fn.call(null,G__38279));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38276,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38276,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__37102__auto__ = com.rpl.specter.pathcache38280;
var info__37102__auto____$1 = (((info__37102__auto__ == null))?(function (){var info38281 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__38273_SHARP_){
return (p1__38273_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__38273#","p1__38273#",-1871343443,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__38273#","p1__38273#",-1871343443,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__38274_SHARP_){
return (p1__38274_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__38274#","p1__38274#",-1447556071,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__38274#","p1__38274#",-1447556071,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__38273#","p1__38273#",-1871343443,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__38273#","p1__38273#",-1871343443,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__38274#","p1__38274#",-1447556071,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__38274#","p1__38274#",-1447556071,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__38273#","p1__38273#",-1871343443,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__38273#","p1__38273#",-1871343443,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__38274#","p1__38274#",-1447556071,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__38274#","p1__38274#",-1447556071,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache38280 = info38281;

return info38281;
})():info__37102__auto__);
var precompiled38282 = com.rpl.specter.impl.cached_path_info_precompiled(info__37102__auto____$1);
var dynamic_QMARK___37103__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__37102__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___37103__auto__)){
var G__38283 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__38273_SHARP_){
return (p1__38273_SHARP_ >= (curri + (1)));
}),(function (p1__38274_SHARP_){
return (p1__38274_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__38273_SHARP_){
return (p1__38273_SHARP_ >= (curri + (1)));
}),(function (p1__38274_SHARP_){
return (p1__38274_SHARP_ <= newi);
})], null);
return (precompiled38282.cljs$core$IFn$_invoke$arity$1 ? precompiled38282.cljs$core$IFn$_invoke$arity$1(G__38283) : precompiled38282.call(null,G__38283));
} else {
return precompiled38282;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__37102__auto__ = com.rpl.specter.pathcache38284;
var info__37102__auto____$1 = (((info__37102__auto__ == null))?(function (){var info38285 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,983,986,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache38284 = info38285;

return info38285;
})():info__37102__auto__);
var precompiled38286 = com.rpl.specter.impl.cached_path_info_precompiled(info__37102__auto____$1);
var dynamic_QMARK___37103__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__37102__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___37103__auto__)){
var G__38287 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled38286.cljs$core$IFn$_invoke$arity$1 ? precompiled38286.cljs$core$IFn$_invoke$arity$1(G__38287) : precompiled38286.call(null,G__38287));
} else {
return precompiled38286;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__37102__auto__ = com.rpl.specter.pathcache38288;
var info__37102__auto____$1 = (((info__37102__auto__ == null))?(function (){var info38289 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache38288 = info38289;

return info38289;
})():info__37102__auto__);
var precompiled38290 = com.rpl.specter.impl.cached_path_info_precompiled(info__37102__auto____$1);
var dynamic_QMARK___37103__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__37102__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___37103__auto__)){
var G__38291 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled38290.cljs$core$IFn$_invoke$arity$1 ? precompiled38290.cljs$core$IFn$_invoke$arity$1(G__38291) : precompiled38290.call(null,G__38291));
} else {
return precompiled38290;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38292 = (function (start,meta38293){
this.start = start;
this.meta38293 = meta38293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38294,meta38293__$1){
var self__ = this;
var _38294__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38292(self__.start,meta38293__$1));
}));

(com.rpl.specter.t_com$rpl$specter38292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38294){
var self__ = this;
var _38294__$1 = this;
return self__.meta38293;
}));

(com.rpl.specter.t_com$rpl$specter38292.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38292.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((self__.start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__34102__auto__,e){
var ret__34103__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

return next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null));
})()
;
if((ret__34103__auto__ === com.rpl.specter.NONE)){
return curr__34102__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__34103__auto__)){
return cljs.core.reduced(ret__34103__auto__);
} else {
return ret__34103__auto__;
}
}
}),com.rpl.specter.NONE,structure);
}));

(com.rpl.specter.t_com$rpl$specter38292.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__38298 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38298,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38298,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__37102__auto__ = com.rpl.specter.pathcache38301;
var info__37102__auto____$1 = (((info__37102__auto__ == null))?(function (){var info38302 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__38273_SHARP_){
return (p1__38273_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__38273#","p1__38273#",-1871343443,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__38273#","p1__38273#",-1871343443,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__38274_SHARP_){
return (p1__38274_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__38274#","p1__38274#",-1447556071,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__38274#","p1__38274#",-1447556071,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__38273#","p1__38273#",-1871343443,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__38273#","p1__38273#",-1871343443,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__38274#","p1__38274#",-1447556071,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__38274#","p1__38274#",-1447556071,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__38273#","p1__38273#",-1871343443,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__38273#","p1__38273#",-1871343443,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__38274#","p1__38274#",-1447556071,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__38274#","p1__38274#",-1447556071,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache38301 = info38302;

return info38302;
})():info__37102__auto__);
var precompiled38303 = com.rpl.specter.impl.cached_path_info_precompiled(info__37102__auto____$1);
var dynamic_QMARK___37103__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__37102__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___37103__auto__)){
var G__38304 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__38273_SHARP_){
return (p1__38273_SHARP_ >= (curri + (1)));
}),(function (p1__38274_SHARP_){
return (p1__38274_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__38273_SHARP_){
return (p1__38273_SHARP_ >= (curri + (1)));
}),(function (p1__38274_SHARP_){
return (p1__38274_SHARP_ <= newi);
})], null);
return (precompiled38303.cljs$core$IFn$_invoke$arity$1 ? precompiled38303.cljs$core$IFn$_invoke$arity$1(G__38304) : precompiled38303.call(null,G__38304));
} else {
return precompiled38303;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__37102__auto__ = com.rpl.specter.pathcache38305;
var info__37102__auto____$1 = (((info__37102__auto__ == null))?(function (){var info38306 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,983,986,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache38305 = info38306;

return info38306;
})():info__37102__auto__);
var precompiled38307 = com.rpl.specter.impl.cached_path_info_precompiled(info__37102__auto____$1);
var dynamic_QMARK___37103__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__37102__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___37103__auto__)){
var G__38308 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled38307.cljs$core$IFn$_invoke$arity$1 ? precompiled38307.cljs$core$IFn$_invoke$arity$1(G__38308) : precompiled38307.call(null,G__38308));
} else {
return precompiled38307;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__37102__auto__ = com.rpl.specter.pathcache38309;
var info__37102__auto____$1 = (((info__37102__auto__ == null))?(function (){var info38310 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache38309 = info38310;

return info38310;
})():info__37102__auto__);
var precompiled38311 = com.rpl.specter.impl.cached_path_info_precompiled(info__37102__auto____$1);
var dynamic_QMARK___37103__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__37102__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___37103__auto__)){
var G__38312 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled38311.cljs$core$IFn$_invoke$arity$1 ? precompiled38311.cljs$core$IFn$_invoke$arity$1(G__38312) : precompiled38311.call(null,G__38312));
} else {
return precompiled38311;
}
})(),newe,s));
}),structure,structure);
}));

(com.rpl.specter.t_com$rpl$specter38292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta38293","meta38293",-1052708186,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38292.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38292.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38292");

(com.rpl.specter.t_com$rpl$specter38292.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38292");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38292.
 */
com.rpl.specter.__GT_t_com$rpl$specter38292 = (function com$rpl$specter$__GT_t_com$rpl$specter38292(start__$1,meta38293){
return (new com.rpl.specter.t_com$rpl$specter38292(start__$1,meta38293));
});

}

return (new com.rpl.specter.t_com$rpl$specter38292(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = (com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1((0)) : com.rpl.specter.indexed_vals.call(null,(0)));
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38313 = (function (afn,meta38314){
this.afn = afn;
this.meta38314 = meta38314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38315,meta38314__$1){
var self__ = this;
var _38315__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38313(self__.afn,meta38314__$1));
}));

(com.rpl.specter.t_com$rpl$specter38313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38315){
var self__ = this;
var _38315__$1 = this;
return self__.meta38314;
}));

(com.rpl.specter.t_com$rpl$specter38313.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38313.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__38316 = vals;
var G__38317 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__38316,G__38317) : next_fn.call(null,G__38316,G__38317));
}));

(com.rpl.specter.t_com$rpl$specter38313.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__38318 = vals;
var G__38319 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__38318,G__38319) : next_fn.call(null,G__38318,G__38319));
}));

(com.rpl.specter.t_com$rpl$specter38313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta38314","meta38314",2051999168,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38313.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38313.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38313");

(com.rpl.specter.t_com$rpl$specter38313.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38313");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38313.
 */
com.rpl.specter.__GT_t_com$rpl$specter38313 = (function com$rpl$specter$__GT_t_com$rpl$specter38313(afn__$1,meta38314){
return (new com.rpl.specter.t_com$rpl$specter38313(afn__$1,meta38314));
});

}

return (new com.rpl.specter.t_com$rpl$specter38313(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__38326 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__38326) : next_fn.call(null,G__38326));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__38328 = (function (){var G__38329 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__38329) : next_fn.call(null,G__38329));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__38328) : unparse_fn.call(null,G__38328));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38331 = (function (parse_fn,unparse_fn,meta38332){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta38332 = meta38332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38333,meta38332__$1){
var self__ = this;
var _38333__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38331(self__.parse_fn,self__.unparse_fn,meta38332__$1));
}));

(com.rpl.specter.t_com$rpl$specter38331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38333){
var self__ = this;
var _38333__$1 = this;
return self__.meta38332;
}));

(com.rpl.specter.t_com$rpl$specter38331.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38331.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
}));

(com.rpl.specter.t_com$rpl$specter38331.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
var G__38337 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__38337) : self__.unparse_fn.call(null,G__38337));
}));

(com.rpl.specter.t_com$rpl$specter38331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta38332","meta38332",-26584194,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38331.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38331.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38331");

(com.rpl.specter.t_com$rpl$specter38331.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38331");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38331.
 */
com.rpl.specter.__GT_t_com$rpl$specter38331 = (function com$rpl$specter$__GT_t_com$rpl$specter38331(parse_fn__$1,unparse_fn__$1,meta38332){
return (new com.rpl.specter.t_com$rpl$specter38331(parse_fn__$1,unparse_fn__$1,meta38332));
});

}

return (new com.rpl.specter.t_com$rpl$specter38331(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__38338 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__38338) : next_fn.call(null,G__38338));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38339 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38339 = (function (meta38340){
this.meta38340 = meta38340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38341,meta38340__$1){
var self__ = this;
var _38341__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38339(meta38340__$1));
}));

(com.rpl.specter.t_com$rpl$specter38339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38341){
var self__ = this;
var _38341__$1 = this;
return self__.meta38340;
}));

(com.rpl.specter.t_com$rpl$specter38339.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38339.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return next_fn(cljs.core.deref(structure));
}));

(com.rpl.specter.t_com$rpl$specter38339.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
}));

(com.rpl.specter.t_com$rpl$specter38339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38340","meta38340",-1128442163,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38339.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38339.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38339");

(com.rpl.specter.t_com$rpl$specter38339.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38339");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38339.
 */
com.rpl.specter.__GT_t_com$rpl$specter38339 = (function com$rpl$specter$__GT_t_com$rpl$specter38339(meta38340){
return (new com.rpl.specter.t_com$rpl$specter38339(meta38340));
});

}

return (new com.rpl.specter.t_com$rpl$specter38339(null));
})()
;


com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__34102__auto__,s){
var ret__34103__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(s) : next_fn.call(null,s));
if((ret__34103__auto__ === com.rpl.specter.NONE)){
return curr__34102__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__34103__auto__)){
return cljs.core.reduced(ret__34103__auto__);
} else {
return ret__34103__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace(structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj((function (re){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38358 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38358 = (function (re,meta38359){
this.re = re;
this.meta38359 = meta38359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38360,meta38359__$1){
var self__ = this;
var _38360__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38358(self__.re,meta38359__$1));
}));

(com.rpl.specter.t_com$rpl$specter38358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38360){
var self__ = this;
var _38360__$1 = this;
return self__.meta38359;
}));

(com.rpl.specter.t_com$rpl$specter38358.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38358.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__34102__auto__,s){
var ret__34103__auto__ = next_fn(s);
if((ret__34103__auto__ === com.rpl.specter.NONE)){
return curr__34102__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__34103__auto__)){
return cljs.core.reduced(ret__34103__auto__);
} else {
return ret__34103__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(self__.re,structure));
}));

(com.rpl.specter.t_com$rpl$specter38358.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return clojure.string.replace(structure,self__.re,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter38358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta38359","meta38359",2140819721,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38358.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38358.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38358");

(com.rpl.specter.t_com$rpl$specter38358.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38358");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38358.
 */
com.rpl.specter.__GT_t_com$rpl$specter38358 = (function com$rpl$specter$__GT_t_com$rpl$specter38358(re__$1,meta38359){
return (new com.rpl.specter.t_com$rpl$specter38358(re__$1,meta38359));
});

}

return (new com.rpl.specter.t_com$rpl$specter38358(re,null));
}));
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__39135__delegate = function (path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
return afn;
} else {
var builder__37095__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38363 = (function (path,temp__5733__auto__,late,meta38364){
this.path = path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late = late;
this.meta38364 = meta38364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38365,meta38364__$1){
var self__ = this;
var _38365__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38363(self__.path,self__.temp__5733__auto__,self__.late,meta38364__$1));
}));

(com.rpl.specter.t_com$rpl$specter38363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38365){
var self__ = this;
var _38365__$1 = this;
return self__.meta38364;
}));

(com.rpl.specter.t_com$rpl$specter38363.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38363.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__38361_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__38361_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter38363.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__38362_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__38362_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter38363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta38364","meta38364",-1820897567,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38363.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38363.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38363");

(com.rpl.specter.t_com$rpl$specter38363.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38363");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38363.
 */
com.rpl.specter.__GT_t_com$rpl$specter38363 = (function com$rpl$specter$__GT_t_com$rpl$specter38363(path__$1,temp__5733__auto____$1,late__$1,meta38364){
return (new com.rpl.specter.t_com$rpl$specter38363(path__$1,temp__5733__auto____$1,late__$1,meta38364));
});

}

return (new com.rpl.specter.t_com$rpl$specter38363(path,temp__5733__auto__,late,null));
}));
var curr_params__37096__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__37096__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__37095__auto__,curr_params__37096__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__37095__auto__,curr_params__37096__auto__,null);
}
}
};
var G__39135 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39147__i = 0, G__39147__a = new Array(arguments.length -  0);
while (G__39147__i < G__39147__a.length) {G__39147__a[G__39147__i] = arguments[G__39147__i + 0]; ++G__39147__i;}
  path = new cljs.core.IndexedSeq(G__39147__a,0,null);
} 
return G__39135__delegate.call(this,path);};
G__39135.cljs$lang$maxFixedArity = 0;
G__39135.cljs$lang$applyTo = (function (arglist__39150){
var path = cljs.core.seq(arglist__39150);
return G__39135__delegate(path);
});
G__39135.cljs$core$IFn$_invoke$arity$variadic = G__39135__delegate;
return G__39135;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__39151__delegate = function (path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null,s)));
});
} else {
var builder__37095__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38368 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38368 = (function (path,temp__5733__auto__,late,meta38369){
this.path = path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late = late;
this.meta38369 = meta38369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38370,meta38369__$1){
var self__ = this;
var _38370__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38368(self__.path,self__.temp__5733__auto__,self__.late,meta38369__$1));
}));

(com.rpl.specter.t_com$rpl$specter38368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38370){
var self__ = this;
var _38370__$1 = this;
return self__.meta38369;
}));

(com.rpl.specter.t_com$rpl$specter38368.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38368.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__38366_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__38366_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter38368.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__38367_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__38367_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter38368.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta38369","meta38369",1670423521,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38368.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38368.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38368");

(com.rpl.specter.t_com$rpl$specter38368.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38368");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38368.
 */
com.rpl.specter.__GT_t_com$rpl$specter38368 = (function com$rpl$specter$__GT_t_com$rpl$specter38368(path__$1,temp__5733__auto____$1,late__$1,meta38369){
return (new com.rpl.specter.t_com$rpl$specter38368(path__$1,temp__5733__auto____$1,late__$1,meta38369));
});

}

return (new com.rpl.specter.t_com$rpl$specter38368(path,temp__5733__auto__,late,null));
}));
var curr_params__37096__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__37096__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__37095__auto__,curr_params__37096__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__37095__auto__,curr_params__37096__auto__,null);
}
}
};
var G__39151 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39178__i = 0, G__39178__a = new Array(arguments.length -  0);
while (G__39178__i < G__39178__a.length) {G__39178__a[G__39178__i] = arguments[G__39178__i + 0]; ++G__39178__i;}
  path = new cljs.core.IndexedSeq(G__39178__a,0,null);
} 
return G__39151__delegate.call(this,path);};
G__39151.cljs$lang$maxFixedArity = 0;
G__39151.cljs$lang$applyTo = (function (arglist__39180){
var path = cljs.core.seq(arglist__39180);
return G__39151__delegate(path);
});
G__39151.cljs$core$IFn$_invoke$arity$variadic = G__39151__delegate;
return G__39151;
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
var G__39182__delegate = function (path){
var G__38372 = com.rpl.specter.ALL;
var G__38373 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null,path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__38372,G__38373) : com.rpl.specter.subselect.call(null,G__38372,G__38373));
};
var G__39182 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39183__i = 0, G__39183__a = new Array(arguments.length -  0);
while (G__39183__i < G__39183__a.length) {G__39183__a[G__39183__i] = arguments[G__39183__i + 0]; ++G__39183__i;}
  path = new cljs.core.IndexedSeq(G__39183__a,0,null);
} 
return G__39182__delegate.call(this,path);};
G__39182.cljs$lang$maxFixedArity = 0;
G__39182.cljs$lang$applyTo = (function (arglist__39185){
var path = cljs.core.seq(arglist__39185);
return G__39182__delegate(path);
});
G__39182.cljs$core$IFn$_invoke$arity$variadic = G__39182__delegate;
return G__39182;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__37095__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38377 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38377 = (function (path,update_fn,late,late_fn,meta38378){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta38378 = meta38378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38379,meta38378__$1){
var self__ = this;
var _38379__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38377(self__.path,self__.update_fn,self__.late,self__.late_fn,meta38378__$1));
}));

(com.rpl.specter.t_com$rpl$specter38377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38379){
var self__ = this;
var _38379__$1 = this;
return self__.meta38378;
}));

(com.rpl.specter.t_com$rpl$specter38377.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38377.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter38377.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter38377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta38378","meta38378",710437715,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38377.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38377.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38377");

(com.rpl.specter.t_com$rpl$specter38377.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38377");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38377.
 */
com.rpl.specter.__GT_t_com$rpl$specter38377 = (function com$rpl$specter$__GT_t_com$rpl$specter38377(path__$1,update_fn__$1,late__$1,late_fn__$1,meta38378){
return (new com.rpl.specter.t_com$rpl$specter38377(path__$1,update_fn__$1,late__$1,late_fn__$1,meta38378));
});

}

return (new com.rpl.specter.t_com$rpl$specter38377(path,update_fn,late,late_fn,null));
}));
var curr_params__37096__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),update_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__37096__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__37095__auto__,curr_params__37096__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__37095__auto__,curr_params__37096__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__37095__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38389 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38389 = (function (path,reduce_fn,late,late_fn,meta38390){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta38390 = meta38390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38391,meta38390__$1){
var self__ = this;
var _38391__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38389(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta38390__$1));
}));

(com.rpl.specter.t_com$rpl$specter38389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38391){
var self__ = this;
var _38391__$1 = this;
return self__.meta38390;
}));

(com.rpl.specter.t_com$rpl$specter38389.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38389.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter38389.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter38389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta38390","meta38390",-1321468377,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38389.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38389.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38389");

(com.rpl.specter.t_com$rpl$specter38389.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38389");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38389.
 */
com.rpl.specter.__GT_t_com$rpl$specter38389 = (function com$rpl$specter$__GT_t_com$rpl$specter38389(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta38390){
return (new com.rpl.specter.t_com$rpl$specter38389(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta38390));
});

}

return (new com.rpl.specter.t_com$rpl$specter38389(path,reduce_fn,late,late_fn,null));
}));
var curr_params__37096__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),reduce_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__37096__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__37095__auto__,curr_params__37096__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__37095__auto__,curr_params__37096__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
var G__38409 = (function (p1__38408_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__38408_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__38409) : com.rpl.specter.pred.call(null,G__38409));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__38411 = (function (p1__38410_SHARP_){
return (p1__38410_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__38411) : com.rpl.specter.pred.call(null,G__38411));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__38413 = (function (p1__38412_SHARP_){
return (p1__38412_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__38413) : com.rpl.specter.pred.call(null,G__38413));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__38419 = (function (p1__38416_SHARP_){
return (p1__38416_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__38419) : com.rpl.specter.pred.call(null,G__38419));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__38421 = (function (p1__38420_SHARP_){
return (p1__38420_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__38421) : com.rpl.specter.pred.call(null,G__38421));
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
var G__38433 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__38433) : next_fn.call(null,G__38433));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__38434 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__38434) : next_fn.call(null,G__38434));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38435 = (function (v,meta38436){
this.v = v;
this.meta38436 = meta38436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38437,meta38436__$1){
var self__ = this;
var _38437__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38435(self__.v,meta38436__$1));
}));

(com.rpl.specter.t_com$rpl$specter38435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38437){
var self__ = this;
var _38437__$1 = this;
return self__.meta38436;
}));

(com.rpl.specter.t_com$rpl$specter38435.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38435.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter38435.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter38435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta38436","meta38436",-1635397699,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38435.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38435.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38435");

(com.rpl.specter.t_com$rpl$specter38435.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38435");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38435.
 */
com.rpl.specter.__GT_t_com$rpl$specter38435 = (function com$rpl$specter$__GT_t_com$rpl$specter38435(v__$1,meta38436){
return (new com.rpl.specter.t_com$rpl$specter38435(v__$1,meta38436));
});

}

return (new com.rpl.specter.t_com$rpl$specter38435(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__38445 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__38445) : com.rpl.specter.nil__GT_val.call(null,G__38445));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__38446 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__38446) : com.rpl.specter.nil__GT_val.call(null,G__38446));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__38447 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__38447) : com.rpl.specter.nil__GT_val.call(null,G__38447));
})();


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__38448 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__38448) : next_fn.call(null,G__38448));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__38449 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__38449) : next_fn.call(null,G__38449));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38450 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38450 = (function (meta38451){
this.meta38451 = meta38451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38452,meta38451__$1){
var self__ = this;
var _38452__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38450(meta38451__$1));
}));

(com.rpl.specter.t_com$rpl$specter38450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38452){
var self__ = this;
var _38452__$1 = this;
return self__.meta38451;
}));

(com.rpl.specter.t_com$rpl$specter38450.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38450.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return next_fn(cljs.core.meta(structure));
}));

(com.rpl.specter.t_com$rpl$specter38450.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
}));

(com.rpl.specter.t_com$rpl$specter38450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38451","meta38451",-1666386133,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38450.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38450.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38450");

(com.rpl.specter.t_com$rpl$specter38450.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38450");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38450.
 */
com.rpl.specter.__GT_t_com$rpl$specter38450 = (function com$rpl$specter$__GT_t_com$rpl$specter38450(meta38451){
return (new com.rpl.specter.t_com$rpl$specter38450(meta38451));
});

}

return (new com.rpl.specter.t_com$rpl$specter38450(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__38453 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__38453) : next_fn.call(null,G__38453));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__38454 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__38454) : next_fn.call(null,G__38454));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38455 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38455 = (function (meta38456){
this.meta38456 = meta38456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38457,meta38456__$1){
var self__ = this;
var _38457__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38455(meta38456__$1));
}));

(com.rpl.specter.t_com$rpl$specter38455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38457){
var self__ = this;
var _38457__$1 = this;
return self__.meta38456;
}));

(com.rpl.specter.t_com$rpl$specter38455.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38455.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return next_fn(cljs.core.name(structure));
}));

(com.rpl.specter.t_com$rpl$specter38455.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
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

(com.rpl.specter.t_com$rpl$specter38455.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38456","meta38456",-18841489,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38455.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38455.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38455");

(com.rpl.specter.t_com$rpl$specter38455.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38455");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38455.
 */
com.rpl.specter.__GT_t_com$rpl$specter38455 = (function com$rpl$specter$__GT_t_com$rpl$specter38455(meta38456){
return (new com.rpl.specter.t_com$rpl$specter38455(meta38456));
});

}

return (new com.rpl.specter.t_com$rpl$specter38455(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__38458 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__38458) : next_fn.call(null,G__38458));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__38459 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__38459) : next_fn.call(null,G__38459));
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38460 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38460 = (function (meta38461){
this.meta38461 = meta38461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38462,meta38461__$1){
var self__ = this;
var _38462__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38460(meta38461__$1));
}));

(com.rpl.specter.t_com$rpl$specter38460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38462){
var self__ = this;
var _38462__$1 = this;
return self__.meta38461;
}));

(com.rpl.specter.t_com$rpl$specter38460.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38460.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
});
return next_fn(cljs.core.namespace(structure));
}));

(com.rpl.specter.t_com$rpl$specter38460.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__36268__auto__,vals__36269__auto__,structure,next_fn__36270__auto__){
var self__ = this;
var this__36268__auto____$1 = this;
var next_fn = (function (s__36271__auto__){
return (next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__36270__auto__.cljs$core$IFn$_invoke$arity$2(vals__36269__auto__,s__36271__auto__) : next_fn__36270__auto__.call(null,vals__36269__auto__,s__36271__auto__));
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

(com.rpl.specter.t_com$rpl$specter38460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38461","meta38461",-737321674,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38460.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38460.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38460");

(com.rpl.specter.t_com$rpl$specter38460.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38460");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38460.
 */
com.rpl.specter.__GT_t_com$rpl$specter38460 = (function com$rpl$specter$__GT_t_com$rpl$specter38460(meta38461){
return (new com.rpl.specter.t_com$rpl$specter38460(meta38461));
});

}

return (new com.rpl.specter.t_com$rpl$specter38460(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__39264__delegate = function (path){
var builder__37095__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38463 = (function (path,late,meta38464){
this.path = path;
this.late = late;
this.meta38464 = meta38464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38465,meta38464__$1){
var self__ = this;
var _38465__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38463(self__.path,self__.late,meta38464__$1));
}));

(com.rpl.specter.t_com$rpl$specter38463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38465){
var self__ = this;
var _38465__$1 = this;
return self__.meta38464;
}));

(com.rpl.specter.t_com$rpl$specter38463.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38463.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37092__auto__,vals__37093__auto__,structure,next_fn__37094__auto__){
var self__ = this;
var this__37092__auto____$1 = this;
var G__38466 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__37093__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__38467 = structure;
return (next_fn__37094__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__37094__auto__.cljs$core$IFn$_invoke$arity$2(G__38466,G__38467) : next_fn__37094__auto__.call(null,G__38466,G__38467));
}));

(com.rpl.specter.t_com$rpl$specter38463.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37092__auto__,vals__37093__auto__,structure,next_fn__37094__auto__){
var self__ = this;
var this__37092__auto____$1 = this;
var G__38468 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__37093__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__38469 = structure;
return (next_fn__37094__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__37094__auto__.cljs$core$IFn$_invoke$arity$2(G__38468,G__38469) : next_fn__37094__auto__.call(null,G__38468,G__38469));
}));

(com.rpl.specter.t_com$rpl$specter38463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta38464","meta38464",1240939288,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38463.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38463.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38463");

(com.rpl.specter.t_com$rpl$specter38463.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38463");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38463.
 */
com.rpl.specter.__GT_t_com$rpl$specter38463 = (function com$rpl$specter$__GT_t_com$rpl$specter38463(path__$1,late__$1,meta38464){
return (new com.rpl.specter.t_com$rpl$specter38463(path__$1,late__$1,meta38464));
});

}

return (new com.rpl.specter.t_com$rpl$specter38463(path,late,null));
}));
var curr_params__37096__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__37096__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__37095__auto__,curr_params__37096__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__37095__auto__,curr_params__37096__auto__,null);
}
};
var G__39264 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39282__i = 0, G__39282__a = new Array(arguments.length -  0);
while (G__39282__i < G__39282__a.length) {G__39282__a[G__39282__i] = arguments[G__39282__i + 0]; ++G__39282__i;}
  path = new cljs.core.IndexedSeq(G__39282__a,0,null);
} 
return G__39264__delegate.call(this,path);};
G__39264.cljs$lang$maxFixedArity = 0;
G__39264.cljs$lang$applyTo = (function (arglist__39283){
var path = cljs.core.seq(arglist__39283);
return G__39264__delegate(path);
});
G__39264.cljs$core$IFn$_invoke$arity$variadic = G__39264__delegate;
return G__39264;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__39285__delegate = function (path){
var builder__37095__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38470 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38470 = (function (path,late,meta38471){
this.path = path;
this.late = late;
this.meta38471 = meta38471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38472,meta38471__$1){
var self__ = this;
var _38472__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38470(self__.path,self__.late,meta38471__$1));
}));

(com.rpl.specter.t_com$rpl$specter38470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38472){
var self__ = this;
var _38472__$1 = this;
return self__.meta38471;
}));

(com.rpl.specter.t_com$rpl$specter38470.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38470.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37092__auto__,vals__37093__auto__,structure,next_fn__37094__auto__){
var self__ = this;
var this__37092__auto____$1 = this;
var G__38473 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__37093__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__38474 = structure;
return (next_fn__37094__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__37094__auto__.cljs$core$IFn$_invoke$arity$2(G__38473,G__38474) : next_fn__37094__auto__.call(null,G__38473,G__38474));
}));

(com.rpl.specter.t_com$rpl$specter38470.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37092__auto__,vals__37093__auto__,structure,next_fn__37094__auto__){
var self__ = this;
var this__37092__auto____$1 = this;
var G__38475 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__37093__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__38476 = structure;
return (next_fn__37094__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__37094__auto__.cljs$core$IFn$_invoke$arity$2(G__38475,G__38476) : next_fn__37094__auto__.call(null,G__38475,G__38476));
}));

(com.rpl.specter.t_com$rpl$specter38470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta38471","meta38471",-804779355,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38470.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38470.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38470");

(com.rpl.specter.t_com$rpl$specter38470.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38470");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38470.
 */
com.rpl.specter.__GT_t_com$rpl$specter38470 = (function com$rpl$specter$__GT_t_com$rpl$specter38470(path__$1,late__$1,meta38471){
return (new com.rpl.specter.t_com$rpl$specter38470(path__$1,late__$1,meta38471));
});

}

return (new com.rpl.specter.t_com$rpl$specter38470(path,late,null));
}));
var curr_params__37096__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__37096__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__37095__auto__,curr_params__37096__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__37095__auto__,curr_params__37096__auto__,null);
}
};
var G__39285 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39294__i = 0, G__39294__a = new Array(arguments.length -  0);
while (G__39294__i < G__39294__a.length) {G__39294__a[G__39294__i] = arguments[G__39294__i + 0]; ++G__39294__i;}
  path = new cljs.core.IndexedSeq(G__39294__a,0,null);
} 
return G__39285__delegate.call(this,path);};
G__39285.cljs$lang$maxFixedArity = 0;
G__39285.cljs$lang$applyTo = (function (arglist__39296){
var path = cljs.core.seq(arglist__39296);
return G__39285__delegate(path);
});
G__39285.cljs$core$IFn$_invoke$arity$variadic = G__39285__delegate;
return G__39285;
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
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38477 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38477 = (function (val,meta38478){
this.val = val;
this.meta38478 = meta38478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38479,meta38478__$1){
var self__ = this;
var _38479__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38477(self__.val,meta38478__$1));
}));

(com.rpl.specter.t_com$rpl$specter38477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38479){
var self__ = this;
var _38479__$1 = this;
return self__.meta38478;
}));

(com.rpl.specter.t_com$rpl$specter38477.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38477.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__37092__auto__,vals__37093__auto__,structure,next_fn__37094__auto__){
var self__ = this;
var this__37092__auto____$1 = this;
var G__38480 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__37093__auto__,self__.val);
var G__38481 = structure;
return (next_fn__37094__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__37094__auto__.cljs$core$IFn$_invoke$arity$2(G__38480,G__38481) : next_fn__37094__auto__.call(null,G__38480,G__38481));
}));

(com.rpl.specter.t_com$rpl$specter38477.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__37092__auto__,vals__37093__auto__,structure,next_fn__37094__auto__){
var self__ = this;
var this__37092__auto____$1 = this;
var G__38482 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__37093__auto__,self__.val);
var G__38483 = structure;
return (next_fn__37094__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__37094__auto__.cljs$core$IFn$_invoke$arity$2(G__38482,G__38483) : next_fn__37094__auto__.call(null,G__38482,G__38483));
}));

(com.rpl.specter.t_com$rpl$specter38477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta38478","meta38478",168413414,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38477.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38477.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38477");

(com.rpl.specter.t_com$rpl$specter38477.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38477");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38477.
 */
com.rpl.specter.__GT_t_com$rpl$specter38477 = (function com$rpl$specter$__GT_t_com$rpl$specter38477(val__$1,meta38478){
return (new com.rpl.specter.t_com$rpl$specter38477(val__$1,meta38478));
});

}

return (new com.rpl.specter.t_com$rpl$specter38477(val,null));
}));
/**
 * Continues navigating on the given path with the collected vals reset to []. Once
 *   navigation leaves the scope of with-fresh-collected, the collected vals revert
 *   to what they were before.
 */
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__39301__delegate = function (path){
var builder__37095__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38484 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38484 = (function (path,late,meta38485){
this.path = path;
this.late = late;
this.meta38485 = meta38485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38486,meta38485__$1){
var self__ = this;
var _38486__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38484(self__.path,self__.late,meta38485__$1));
}));

(com.rpl.specter.t_com$rpl$specter38484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38486){
var self__ = this;
var _38486__$1 = this;
return self__.meta38485;
}));

(com.rpl.specter.t_com$rpl$specter38484.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38484.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter38484.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter38484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta38485","meta38485",-1841806397,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38484.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38484.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38484");

(com.rpl.specter.t_com$rpl$specter38484.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38484");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38484.
 */
com.rpl.specter.__GT_t_com$rpl$specter38484 = (function com$rpl$specter$__GT_t_com$rpl$specter38484(path__$1,late__$1,meta38485){
return (new com.rpl.specter.t_com$rpl$specter38484(path__$1,late__$1,meta38485));
});

}

return (new com.rpl.specter.t_com$rpl$specter38484(path,late,null));
}));
var curr_params__37096__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__37096__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__37095__auto__,curr_params__37096__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__37095__auto__,curr_params__37096__auto__,null);
}
};
var G__39301 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39311__i = 0, G__39311__a = new Array(arguments.length -  0);
while (G__39311__i < G__39311__a.length) {G__39311__a[G__39311__i] = arguments[G__39311__i + 0]; ++G__39311__i;}
  path = new cljs.core.IndexedSeq(G__39311__a,0,null);
} 
return G__39301__delegate.call(this,path);};
G__39301.cljs$lang$maxFixedArity = 0;
G__39301.cljs$lang$applyTo = (function (arglist__39312){
var path = cljs.core.seq(arglist__39312);
return G__39301__delegate(path);
});
G__39301.cljs$core$IFn$_invoke$arity$variadic = G__39301__delegate;
return G__39301;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38489 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38489 = (function (meta38490){
this.meta38490 = meta38490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38491,meta38490__$1){
var self__ = this;
var _38491__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38489(meta38490__$1));
}));

(com.rpl.specter.t_com$rpl$specter38489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38491){
var self__ = this;
var _38491__$1 = this;
return self__.meta38490;
}));

(com.rpl.specter.t_com$rpl$specter38489.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38489.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__38492 = cljs.core.PersistentVector.EMPTY;
var G__38493 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__38492,G__38493) : next_fn.call(null,G__38492,G__38493));
}));

(com.rpl.specter.t_com$rpl$specter38489.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__38496 = cljs.core.PersistentVector.EMPTY;
var G__38497 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__38496,G__38497) : next_fn.call(null,G__38496,G__38497));
}));

(com.rpl.specter.t_com$rpl$specter38489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38490","meta38490",714930169,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38489.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38489.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38489");

(com.rpl.specter.t_com$rpl$specter38489.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38489");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38489.
 */
com.rpl.specter.__GT_t_com$rpl$specter38489 = (function com$rpl$specter$__GT_t_com$rpl$specter38489(meta38490){
return (new com.rpl.specter.t_com$rpl$specter38489(meta38490));
});

}

return (new com.rpl.specter.t_com$rpl$specter38489(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__39326 = null;
var G__39326__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP));
});
var G__39326__3 = (function (cond_p,then_path,else_path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
var builder__37095__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38504 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38504 = (function (cond_p,then_path,else_path,temp__5733__auto__,afn,late_then,late_else,meta38505){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5733__auto__ = temp__5733__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta38505 = meta38505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38506,meta38505__$1){
var self__ = this;
var _38506__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38504(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5733__auto__,self__.afn,self__.late_then,self__.late_else,meta38505__$1));
}));

(com.rpl.specter.t_com$rpl$specter38504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38506){
var self__ = this;
var _38506__$1 = this;
return self__.meta38505;
}));

(com.rpl.specter.t_com$rpl$specter38504.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38504.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter38504.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter38504.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta38505","meta38505",-1130208369,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38504.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38504.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38504");

(com.rpl.specter.t_com$rpl$specter38504.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38504");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38504.
 */
com.rpl.specter.__GT_t_com$rpl$specter38504 = (function com$rpl$specter$__GT_t_com$rpl$specter38504(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,afn__$1,late_then__$1,late_else__$1,meta38505){
return (new com.rpl.specter.t_com$rpl$specter38504(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,afn__$1,late_then__$1,late_else__$1,meta38505));
});

}

return (new com.rpl.specter.t_com$rpl$specter38504(cond_p,then_path,else_path,temp__5733__auto__,afn,late_then,late_else,null));
}));
var curr_params__37096__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__37096__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__37095__auto__,curr_params__37096__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__37095__auto__,curr_params__37096__auto__,null);
}
} else {
var builder__37095__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_cond,late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38519 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38519 = (function (cond_p,then_path,else_path,temp__5733__auto__,late_cond,late_then,late_else,meta38520){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta38520 = meta38520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38521,meta38520__$1){
var self__ = this;
var _38521__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38519(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5733__auto__,self__.late_cond,self__.late_then,self__.late_else,meta38520__$1));
}));

(com.rpl.specter.t_com$rpl$specter38519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38521){
var self__ = this;
var _38521__$1 = this;
return self__.meta38520;
}));

(com.rpl.specter.t_com$rpl$specter38519.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38519.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,(function (p1__38502_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__38502_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter38519.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,(function (p1__38503_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__38503_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter38519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta38520","meta38520",423037358,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38519.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38519.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38519");

(com.rpl.specter.t_com$rpl$specter38519.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38519");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38519.
 */
com.rpl.specter.__GT_t_com$rpl$specter38519 = (function com$rpl$specter$__GT_t_com$rpl$specter38519(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta38520){
return (new com.rpl.specter.t_com$rpl$specter38519(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta38520));
});

}

return (new com.rpl.specter.t_com$rpl$specter38519(cond_p,then_path,else_path,temp__5733__auto__,late_cond,late_then,late_else,null));
}));
var curr_params__37096__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null,cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__37096__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__37095__auto__,curr_params__37096__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__37095__auto__,curr_params__37096__auto__,null);
}
}
});
G__39326 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__39326__2.call(this,cond_p,then_path);
case 3:
return G__39326__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39326.cljs$core$IFn$_invoke$arity$2 = G__39326__2;
G__39326.cljs$core$IFn$_invoke$arity$3 = G__39326__3;
return G__39326;
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
var G__39347__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,p__38550){
var vec__38551 = p__38550;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38551,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38551,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null,tester,apath,p));
}),com.rpl.specter.STOP,pairs);
};
var G__39347 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__39350__i = 0, G__39350__a = new Array(arguments.length -  0);
while (G__39350__i < G__39350__a.length) {G__39350__a[G__39350__i] = arguments[G__39350__i + 0]; ++G__39350__i;}
  conds = new cljs.core.IndexedSeq(G__39350__a,0,null);
} 
return G__39347__delegate.call(this,conds);};
G__39347.cljs$lang$maxFixedArity = 0;
G__39347.cljs$lang$applyTo = (function (arglist__39351){
var conds = cljs.core.seq(arglist__39351);
return G__39347__delegate(conds);
});
G__39347.cljs$core$IFn$_invoke$arity$variadic = G__39347__delegate;
return G__39347;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__39352 = null;
var G__39352__0 = (function (){
return com.rpl.specter.STAY;
});
var G__39352__1 = (function (path){
return path;
});
var G__39352__2 = (function (path1,path2){
var builder__37095__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter38563 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter38563 = (function (path1,path2,late1,late2,meta38564){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta38564 = meta38564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter38563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38565,meta38564__$1){
var self__ = this;
var _38565__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter38563(self__.path1,self__.path2,self__.late1,self__.late2,meta38564__$1));
}));

(com.rpl.specter.t_com$rpl$specter38563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38565){
var self__ = this;
var _38565__$1 = this;
return self__.meta38564;
}));

(com.rpl.specter.t_com$rpl$specter38563.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter38563.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
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

(com.rpl.specter.t_com$rpl$specter38563.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter38563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta38564","meta38564",1896043691,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter38563.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter38563.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter38563");

(com.rpl.specter.t_com$rpl$specter38563.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter38563");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter38563.
 */
com.rpl.specter.__GT_t_com$rpl$specter38563 = (function com$rpl$specter$__GT_t_com$rpl$specter38563(path1__$1,path2__$1,late1__$1,late2__$1,meta38564){
return (new com.rpl.specter.t_com$rpl$specter38563(path1__$1,path2__$1,late1__$1,late2__$1,meta38564));
});

}

return (new com.rpl.specter.t_com$rpl$specter38563(path1,path2,late1,late2,null));
}));
var curr_params__37096__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null,path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null,path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__37096__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__37095__auto__,curr_params__37096__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__37095__auto__,curr_params__37096__auto__,null);
}
});
var G__39352__3 = (function() { 
var G__39362__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null,path1,path2)),paths);
};
var G__39362 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__39365__i = 0, G__39365__a = new Array(arguments.length -  2);
while (G__39365__i < G__39365__a.length) {G__39365__a[G__39365__i] = arguments[G__39365__i + 2]; ++G__39365__i;}
  paths = new cljs.core.IndexedSeq(G__39365__a,0,null);
} 
return G__39362__delegate.call(this,path1,path2,paths);};
G__39362.cljs$lang$maxFixedArity = 2;
G__39362.cljs$lang$applyTo = (function (arglist__39366){
var path1 = cljs.core.first(arglist__39366);
arglist__39366 = cljs.core.next(arglist__39366);
var path2 = cljs.core.first(arglist__39366);
var paths = cljs.core.rest(arglist__39366);
return G__39362__delegate(path1,path2,paths);
});
G__39362.cljs$core$IFn$_invoke$arity$variadic = G__39362__delegate;
return G__39362;
})()
;
G__39352 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__39352__0.call(this);
case 1:
return G__39352__1.call(this,path1);
case 2:
return G__39352__2.call(this,path1,path2);
default:
var G__39367 = null;
if (arguments.length > 2) {
var G__39368__i = 0, G__39368__a = new Array(arguments.length -  2);
while (G__39368__i < G__39368__a.length) {G__39368__a[G__39368__i] = arguments[G__39368__i + 2]; ++G__39368__i;}
G__39367 = new cljs.core.IndexedSeq(G__39368__a,0,null);
}
return G__39352__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__39367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39352.cljs$lang$maxFixedArity = 2;
G__39352.cljs$lang$applyTo = G__39352__3.cljs$lang$applyTo;
G__39352.cljs$core$IFn$_invoke$arity$0 = G__39352__0;
G__39352.cljs$core$IFn$_invoke$arity$1 = G__39352__1;
G__39352.cljs$core$IFn$_invoke$arity$2 = G__39352__2;
G__39352.cljs$core$IFn$_invoke$arity$variadic = G__39352__3.cljs$core$IFn$_invoke$arity$variadic;
return G__39352;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__39371__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path));
};
var G__39371 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39372__i = 0, G__39372__a = new Array(arguments.length -  0);
while (G__39372__i < G__39372__a.length) {G__39372__a[G__39372__i] = arguments[G__39372__i + 0]; ++G__39372__i;}
  path = new cljs.core.IndexedSeq(G__39372__a,0,null);
} 
return G__39371__delegate.call(this,path);};
G__39371.cljs$lang$maxFixedArity = 0;
G__39371.cljs$lang$applyTo = (function (arglist__39373){
var path = cljs.core.seq(arglist__39373);
return G__39371__delegate(path);
});
G__39371.cljs$core$IFn$_invoke$arity$variadic = G__39371__delegate;
return G__39371;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__39374__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY));
};
var G__39374 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39376__i = 0, G__39376__a = new Array(arguments.length -  0);
while (G__39376__i < G__39376__a.length) {G__39376__a[G__39376__i] = arguments[G__39376__i + 0]; ++G__39376__i;}
  path = new cljs.core.IndexedSeq(G__39376__a,0,null);
} 
return G__39374__delegate.call(this,path);};
G__39374.cljs$lang$maxFixedArity = 0;
G__39374.cljs$lang$applyTo = (function (arglist__39378){
var path = cljs.core.seq(arglist__39378);
return G__39374__delegate(path);
});
G__39374.cljs$core$IFn$_invoke$arity$variadic = G__39374__delegate;
return G__39374;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__37102__auto__ = com.rpl.specter.pathcache38601;
var info__37102__auto____$1 = (((info__37102__auto__ == null))?(function (){var info38602 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1394,1394,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1175,1179,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,644,646,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2133,2133,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache38601 = info38602;

return info38602;
})():info__37102__auto__);
var precompiled38603 = com.rpl.specter.impl.cached_path_info_precompiled(info__37102__auto____$1);
var dynamic_QMARK___37103__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__37102__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___37103__auto__)){
var G__38622 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled38603.cljs$core$IFn$_invoke$arity$1 ? precompiled38603.cljs$core$IFn$_invoke$arity$1(G__38622) : precompiled38603.call(null,G__38622));
} else {
return precompiled38603;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__37102__auto__ = com.rpl.specter.pathcache38629;
var info__37102__auto____$1 = (((info__37102__auto__ == null))?(function (){var info38630 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1394,1394,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1175,1179,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,644,646,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2133,2133,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"com/rpl/specter.cljc",16,1,689,691,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache38629 = info38630;

return info38630;
})():info__37102__auto__);
var precompiled38631 = com.rpl.specter.impl.cached_path_info_precompiled(info__37102__auto____$1);
var dynamic_QMARK___37103__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__37102__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___37103__auto__)){
var G__38644 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled38631.cljs$core$IFn$_invoke$arity$1 ? precompiled38631.cljs$core$IFn$_invoke$arity$1(G__38644) : precompiled38631.call(null,G__38644));
} else {
return precompiled38631;
}
})());

return p;
}));
var empty__GT_NONE_39423 = (function (){var G__38651 = cljs.core.empty_QMARK_;
var G__38652 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__38651,G__38652) : com.rpl.specter.if_path.call(null,G__38651,G__38652));
})();
var compact_STAR__39424 = (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_39423) : com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_39423));
});
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__39426__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__39424,path);
};
var G__39426 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__39428__i = 0, G__39428__a = new Array(arguments.length -  0);
while (G__39428__i < G__39428__a.length) {G__39428__a[G__39428__i] = arguments[G__39428__i + 0]; ++G__39428__i;}
  path = new cljs.core.IndexedSeq(G__39428__a,0,null);
} 
return G__39426__delegate.call(this,path);};
G__39426.cljs$lang$maxFixedArity = 0;
G__39426.cljs$lang$applyTo = (function (arglist__39429){
var path = cljs.core.seq(arglist__39429);
return G__39426__delegate(path);
});
G__39426.cljs$core$IFn$_invoke$arity$variadic = G__39426__delegate;
return G__39426;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=com.rpl.specter.js.map
