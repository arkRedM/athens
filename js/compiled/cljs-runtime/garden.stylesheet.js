goog.provide('garden.stylesheet');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55704 = arguments.length;
var i__4737__auto___55705 = (0);
while(true){
if((i__4737__auto___55705 < len__4736__auto___55704)){
args__4742__auto__.push((arguments[i__4737__auto___55705]));

var G__55706 = (i__4737__auto___55705 + (1));
i__4737__auto___55705 = G__55706;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__55707__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__55707 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__55708__i = 0, G__55708__a = new Array(arguments.length -  0);
while (G__55708__i < G__55708__a.length) {G__55708__a[G__55708__i] = arguments[G__55708__i + 0]; ++G__55708__i;}
  children = new cljs.core.IndexedSeq(G__55708__a,0,null);
} 
return G__55707__delegate.call(this,children);};
G__55707.cljs$lang$maxFixedArity = 0;
G__55707.cljs$lang$applyTo = (function (arglist__55709){
var children = cljs.core.seq(arglist__55709);
return G__55707__delegate(children);
});
G__55707.cljs$core$IFn$_invoke$arity$variadic = G__55707__delegate;
return G__55707;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq55691){
var G__55692 = cljs.core.first(seq55691);
var seq55691__$1 = cljs.core.next(seq55691);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55692,seq55691__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__55710__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__55710 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55711__i = 0, G__55711__a = new Array(arguments.length -  0);
while (G__55711__i < G__55711__a.length) {G__55711__a[G__55711__i] = arguments[G__55711__i + 0]; ++G__55711__i;}
  args = new cljs.core.IndexedSeq(G__55711__a,0,null);
} 
return G__55710__delegate.call(this,args);};
G__55710.cljs$lang$maxFixedArity = 0;
G__55710.cljs$lang$applyTo = (function (arglist__55712){
var args = cljs.core.seq(arglist__55712);
return G__55710__delegate(args);
});
G__55710.cljs$core$IFn$_invoke$arity$variadic = G__55710__delegate;
return G__55710;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55713 = arguments.length;
var i__4737__auto___55714 = (0);
while(true){
if((i__4737__auto___55714 < len__4736__auto___55713)){
args__4742__auto__.push((arguments[i__4737__auto___55714]));

var G__55715 = (i__4737__auto___55714 + (1));
i__4737__auto___55714 = G__55715;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq55693){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55693));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__55697 = arguments.length;
switch (G__55697) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55717 = arguments.length;
var i__4737__auto___55718 = (0);
while(true){
if((i__4737__auto___55718 < len__4736__auto___55717)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55718]));

var G__55719 = (i__4737__auto___55718 + (1));
i__4737__auto___55718 = G__55719;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4758__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq55695){
var G__55696 = cljs.core.first(seq55695);
var seq55695__$1 = cljs.core.next(seq55695);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55696,seq55695__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55720 = arguments.length;
var i__4737__auto___55721 = (0);
while(true){
if((i__4737__auto___55721 < len__4736__auto___55720)){
args__4742__auto__.push((arguments[i__4737__auto___55721]));

var G__55722 = (i__4737__auto___55721 + (1));
i__4737__auto___55721 = G__55722;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq55698){
var G__55699 = cljs.core.first(seq55698);
var seq55698__$1 = cljs.core.next(seq55698);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55699,seq55698__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55723 = arguments.length;
var i__4737__auto___55724 = (0);
while(true){
if((i__4737__auto___55724 < len__4736__auto___55723)){
args__4742__auto__.push((arguments[i__4737__auto___55724]));

var G__55725 = (i__4737__auto___55724 + (1));
i__4737__auto___55724 = G__55725;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq55700){
var G__55701 = cljs.core.first(seq55700);
var seq55700__$1 = cljs.core.next(seq55700);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55701,seq55700__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55726 = arguments.length;
var i__4737__auto___55727 = (0);
while(true){
if((i__4737__auto___55727 < len__4736__auto___55726)){
args__4742__auto__.push((arguments[i__4737__auto___55727]));

var G__55728 = (i__4737__auto___55727 + (1));
i__4737__auto___55727 = G__55728;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq55702){
var G__55703 = cljs.core.first(seq55702);
var seq55702__$1 = cljs.core.next(seq55702);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55703,seq55702__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=garden.stylesheet.js.map
