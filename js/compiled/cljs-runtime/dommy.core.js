goog.provide('dommy.core');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4126__auto__ = elem.textContent;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__60277 = arguments.length;
switch (G__60277) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__60279 = arguments.length;
switch (G__60279) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__60282 = arguments.length;
switch (G__60282) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__60280_SHARP_){
return (!((p1__60280_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60735 = arguments.length;
var i__4737__auto___60736 = (0);
while(true){
if((i__4737__auto___60736 < len__4736__auto___60735)){
args__4742__auto__.push((arguments[i__4737__auto___60736]));

var G__60737 = (i__4737__auto___60736 + (1));
i__4737__auto___60736 = G__60737;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__60291_60738 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__60292_60739 = null;
var count__60293_60740 = (0);
var i__60294_60741 = (0);
while(true){
if((i__60294_60741 < count__60293_60740)){
var vec__60302_60742 = chunk__60292_60739.cljs$core$IIndexed$_nth$arity$2(null,i__60294_60741);
var k_60743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60302_60742,(0),null);
var v_60744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60302_60742,(1),null);
style.setProperty(dommy.utils.as_str(k_60743),v_60744);


var G__60745 = seq__60291_60738;
var G__60746 = chunk__60292_60739;
var G__60747 = count__60293_60740;
var G__60748 = (i__60294_60741 + (1));
seq__60291_60738 = G__60745;
chunk__60292_60739 = G__60746;
count__60293_60740 = G__60747;
i__60294_60741 = G__60748;
continue;
} else {
var temp__5735__auto___60749 = cljs.core.seq(seq__60291_60738);
if(temp__5735__auto___60749){
var seq__60291_60750__$1 = temp__5735__auto___60749;
if(cljs.core.chunked_seq_QMARK_(seq__60291_60750__$1)){
var c__4556__auto___60751 = cljs.core.chunk_first(seq__60291_60750__$1);
var G__60752 = cljs.core.chunk_rest(seq__60291_60750__$1);
var G__60753 = c__4556__auto___60751;
var G__60754 = cljs.core.count(c__4556__auto___60751);
var G__60755 = (0);
seq__60291_60738 = G__60752;
chunk__60292_60739 = G__60753;
count__60293_60740 = G__60754;
i__60294_60741 = G__60755;
continue;
} else {
var vec__60306_60756 = cljs.core.first(seq__60291_60750__$1);
var k_60757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60306_60756,(0),null);
var v_60758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60306_60756,(1),null);
style.setProperty(dommy.utils.as_str(k_60757),v_60758);


var G__60759 = cljs.core.next(seq__60291_60750__$1);
var G__60760 = null;
var G__60761 = (0);
var G__60762 = (0);
seq__60291_60738 = G__60759;
chunk__60292_60739 = G__60760;
count__60293_60740 = G__60761;
i__60294_60741 = G__60762;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq60287){
var G__60288 = cljs.core.first(seq60287);
var seq60287__$1 = cljs.core.next(seq60287);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60288,seq60287__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60763 = arguments.length;
var i__4737__auto___60764 = (0);
while(true){
if((i__4737__auto___60764 < len__4736__auto___60763)){
args__4742__auto__.push((arguments[i__4737__auto___60764]));

var G__60765 = (i__4737__auto___60764 + (1));
i__4737__auto___60764 = G__60765;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__60314_60766 = cljs.core.seq(keywords);
var chunk__60315_60767 = null;
var count__60316_60768 = (0);
var i__60317_60769 = (0);
while(true){
if((i__60317_60769 < count__60316_60768)){
var kw_60770 = chunk__60315_60767.cljs$core$IIndexed$_nth$arity$2(null,i__60317_60769);
style.removeProperty(dommy.utils.as_str(kw_60770));


var G__60771 = seq__60314_60766;
var G__60772 = chunk__60315_60767;
var G__60773 = count__60316_60768;
var G__60774 = (i__60317_60769 + (1));
seq__60314_60766 = G__60771;
chunk__60315_60767 = G__60772;
count__60316_60768 = G__60773;
i__60317_60769 = G__60774;
continue;
} else {
var temp__5735__auto___60775 = cljs.core.seq(seq__60314_60766);
if(temp__5735__auto___60775){
var seq__60314_60776__$1 = temp__5735__auto___60775;
if(cljs.core.chunked_seq_QMARK_(seq__60314_60776__$1)){
var c__4556__auto___60777 = cljs.core.chunk_first(seq__60314_60776__$1);
var G__60778 = cljs.core.chunk_rest(seq__60314_60776__$1);
var G__60779 = c__4556__auto___60777;
var G__60780 = cljs.core.count(c__4556__auto___60777);
var G__60781 = (0);
seq__60314_60766 = G__60778;
chunk__60315_60767 = G__60779;
count__60316_60768 = G__60780;
i__60317_60769 = G__60781;
continue;
} else {
var kw_60782 = cljs.core.first(seq__60314_60776__$1);
style.removeProperty(dommy.utils.as_str(kw_60782));


var G__60783 = cljs.core.next(seq__60314_60776__$1);
var G__60784 = null;
var G__60785 = (0);
var G__60786 = (0);
seq__60314_60766 = G__60783;
chunk__60315_60767 = G__60784;
count__60316_60768 = G__60785;
i__60317_60769 = G__60786;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq60311){
var G__60312 = cljs.core.first(seq60311);
var seq60311__$1 = cljs.core.next(seq60311);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60312,seq60311__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60787 = arguments.length;
var i__4737__auto___60788 = (0);
while(true){
if((i__4737__auto___60788 < len__4736__auto___60787)){
args__4742__auto__.push((arguments[i__4737__auto___60788]));

var G__60789 = (i__4737__auto___60788 + (1));
i__4737__auto___60788 = G__60789;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__60323_60790 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__60324_60791 = null;
var count__60325_60792 = (0);
var i__60326_60793 = (0);
while(true){
if((i__60326_60793 < count__60325_60792)){
var vec__60333_60794 = chunk__60324_60791.cljs$core$IIndexed$_nth$arity$2(null,i__60326_60793);
var k_60795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60333_60794,(0),null);
var v_60796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60333_60794,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_60795,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_60796),"px"].join('')], 0));


var G__60797 = seq__60323_60790;
var G__60798 = chunk__60324_60791;
var G__60799 = count__60325_60792;
var G__60800 = (i__60326_60793 + (1));
seq__60323_60790 = G__60797;
chunk__60324_60791 = G__60798;
count__60325_60792 = G__60799;
i__60326_60793 = G__60800;
continue;
} else {
var temp__5735__auto___60801 = cljs.core.seq(seq__60323_60790);
if(temp__5735__auto___60801){
var seq__60323_60802__$1 = temp__5735__auto___60801;
if(cljs.core.chunked_seq_QMARK_(seq__60323_60802__$1)){
var c__4556__auto___60803 = cljs.core.chunk_first(seq__60323_60802__$1);
var G__60804 = cljs.core.chunk_rest(seq__60323_60802__$1);
var G__60805 = c__4556__auto___60803;
var G__60806 = cljs.core.count(c__4556__auto___60803);
var G__60807 = (0);
seq__60323_60790 = G__60804;
chunk__60324_60791 = G__60805;
count__60325_60792 = G__60806;
i__60326_60793 = G__60807;
continue;
} else {
var vec__60336_60808 = cljs.core.first(seq__60323_60802__$1);
var k_60809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60336_60808,(0),null);
var v_60810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60336_60808,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_60809,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_60810),"px"].join('')], 0));


var G__60811 = cljs.core.next(seq__60323_60802__$1);
var G__60812 = null;
var G__60813 = (0);
var G__60814 = (0);
seq__60323_60790 = G__60811;
chunk__60324_60791 = G__60812;
count__60325_60792 = G__60813;
i__60326_60793 = G__60814;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq60321){
var G__60322 = cljs.core.first(seq60321);
var seq60321__$1 = cljs.core.next(seq60321);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60322,seq60321__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__60344 = arguments.length;
switch (G__60344) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60816 = arguments.length;
var i__4737__auto___60817 = (0);
while(true){
if((i__4737__auto___60817 < len__4736__auto___60816)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60817]));

var G__60818 = (i__4737__auto___60817 + (1));
i__4737__auto___60817 = G__60818;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__60345 = elem;
(G__60345[k__$1] = v);

return G__60345;
} else {
var G__60346 = elem;
G__60346.setAttribute(k__$1,v);

return G__60346;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__60347_60819 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__60348_60820 = null;
var count__60349_60821 = (0);
var i__60350_60822 = (0);
while(true){
if((i__60350_60822 < count__60349_60821)){
var vec__60357_60823 = chunk__60348_60820.cljs$core$IIndexed$_nth$arity$2(null,i__60350_60822);
var k_60824__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60357_60823,(0),null);
var v_60825__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60357_60823,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_60824__$1,v_60825__$1);


var G__60826 = seq__60347_60819;
var G__60827 = chunk__60348_60820;
var G__60828 = count__60349_60821;
var G__60829 = (i__60350_60822 + (1));
seq__60347_60819 = G__60826;
chunk__60348_60820 = G__60827;
count__60349_60821 = G__60828;
i__60350_60822 = G__60829;
continue;
} else {
var temp__5735__auto___60830 = cljs.core.seq(seq__60347_60819);
if(temp__5735__auto___60830){
var seq__60347_60831__$1 = temp__5735__auto___60830;
if(cljs.core.chunked_seq_QMARK_(seq__60347_60831__$1)){
var c__4556__auto___60832 = cljs.core.chunk_first(seq__60347_60831__$1);
var G__60833 = cljs.core.chunk_rest(seq__60347_60831__$1);
var G__60834 = c__4556__auto___60832;
var G__60835 = cljs.core.count(c__4556__auto___60832);
var G__60836 = (0);
seq__60347_60819 = G__60833;
chunk__60348_60820 = G__60834;
count__60349_60821 = G__60835;
i__60350_60822 = G__60836;
continue;
} else {
var vec__60360_60837 = cljs.core.first(seq__60347_60831__$1);
var k_60838__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60360_60837,(0),null);
var v_60839__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60360_60837,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_60838__$1,v_60839__$1);


var G__60840 = cljs.core.next(seq__60347_60831__$1);
var G__60841 = null;
var G__60842 = (0);
var G__60843 = (0);
seq__60347_60819 = G__60840;
chunk__60348_60820 = G__60841;
count__60349_60821 = G__60842;
i__60350_60822 = G__60843;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq60340){
var G__60341 = cljs.core.first(seq60340);
var seq60340__$1 = cljs.core.next(seq60340);
var G__60342 = cljs.core.first(seq60340__$1);
var seq60340__$2 = cljs.core.next(seq60340__$1);
var G__60343 = cljs.core.first(seq60340__$2);
var seq60340__$3 = cljs.core.next(seq60340__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60341,G__60342,G__60343,seq60340__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__60367 = arguments.length;
switch (G__60367) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60845 = arguments.length;
var i__4737__auto___60846 = (0);
while(true){
if((i__4737__auto___60846 < len__4736__auto___60845)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60846]));

var G__60847 = (i__4737__auto___60846 + (1));
i__4737__auto___60846 = G__60847;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_60848__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__60368 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__60368.cljs$core$IFn$_invoke$arity$1 ? fexpr__60368.cljs$core$IFn$_invoke$arity$1(k_60848__$1) : fexpr__60368.call(null,k_60848__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_60848__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__60369_60849 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__60370_60850 = null;
var count__60371_60851 = (0);
var i__60372_60852 = (0);
while(true){
if((i__60372_60852 < count__60371_60851)){
var k_60853__$1 = chunk__60370_60850.cljs$core$IIndexed$_nth$arity$2(null,i__60372_60852);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_60853__$1);


var G__60854 = seq__60369_60849;
var G__60855 = chunk__60370_60850;
var G__60856 = count__60371_60851;
var G__60857 = (i__60372_60852 + (1));
seq__60369_60849 = G__60854;
chunk__60370_60850 = G__60855;
count__60371_60851 = G__60856;
i__60372_60852 = G__60857;
continue;
} else {
var temp__5735__auto___60858 = cljs.core.seq(seq__60369_60849);
if(temp__5735__auto___60858){
var seq__60369_60859__$1 = temp__5735__auto___60858;
if(cljs.core.chunked_seq_QMARK_(seq__60369_60859__$1)){
var c__4556__auto___60860 = cljs.core.chunk_first(seq__60369_60859__$1);
var G__60861 = cljs.core.chunk_rest(seq__60369_60859__$1);
var G__60862 = c__4556__auto___60860;
var G__60863 = cljs.core.count(c__4556__auto___60860);
var G__60864 = (0);
seq__60369_60849 = G__60861;
chunk__60370_60850 = G__60862;
count__60371_60851 = G__60863;
i__60372_60852 = G__60864;
continue;
} else {
var k_60865__$1 = cljs.core.first(seq__60369_60859__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_60865__$1);


var G__60866 = cljs.core.next(seq__60369_60859__$1);
var G__60867 = null;
var G__60868 = (0);
var G__60869 = (0);
seq__60369_60849 = G__60866;
chunk__60370_60850 = G__60867;
count__60371_60851 = G__60868;
i__60372_60852 = G__60869;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq60364){
var G__60365 = cljs.core.first(seq60364);
var seq60364__$1 = cljs.core.next(seq60364);
var G__60366 = cljs.core.first(seq60364__$1);
var seq60364__$2 = cljs.core.next(seq60364__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60365,G__60366,seq60364__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__60374 = arguments.length;
switch (G__60374) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__60379 = arguments.length;
switch (G__60379) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60872 = arguments.length;
var i__4737__auto___60873 = (0);
while(true){
if((i__4737__auto___60873 < len__4736__auto___60872)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60873]));

var G__60874 = (i__4737__auto___60873 + (1));
i__4737__auto___60873 = G__60874;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___60875 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___60875)){
var class_list_60876 = temp__5733__auto___60875;
var seq__60380_60877 = cljs.core.seq(classes__$1);
var chunk__60381_60878 = null;
var count__60382_60879 = (0);
var i__60383_60880 = (0);
while(true){
if((i__60383_60880 < count__60382_60879)){
var c_60881 = chunk__60381_60878.cljs$core$IIndexed$_nth$arity$2(null,i__60383_60880);
class_list_60876.add(c_60881);


var G__60882 = seq__60380_60877;
var G__60883 = chunk__60381_60878;
var G__60884 = count__60382_60879;
var G__60885 = (i__60383_60880 + (1));
seq__60380_60877 = G__60882;
chunk__60381_60878 = G__60883;
count__60382_60879 = G__60884;
i__60383_60880 = G__60885;
continue;
} else {
var temp__5735__auto___60886 = cljs.core.seq(seq__60380_60877);
if(temp__5735__auto___60886){
var seq__60380_60887__$1 = temp__5735__auto___60886;
if(cljs.core.chunked_seq_QMARK_(seq__60380_60887__$1)){
var c__4556__auto___60889 = cljs.core.chunk_first(seq__60380_60887__$1);
var G__60890 = cljs.core.chunk_rest(seq__60380_60887__$1);
var G__60891 = c__4556__auto___60889;
var G__60892 = cljs.core.count(c__4556__auto___60889);
var G__60893 = (0);
seq__60380_60877 = G__60890;
chunk__60381_60878 = G__60891;
count__60382_60879 = G__60892;
i__60383_60880 = G__60893;
continue;
} else {
var c_60895 = cljs.core.first(seq__60380_60887__$1);
class_list_60876.add(c_60895);


var G__60896 = cljs.core.next(seq__60380_60887__$1);
var G__60897 = null;
var G__60898 = (0);
var G__60899 = (0);
seq__60380_60877 = G__60896;
chunk__60381_60878 = G__60897;
count__60382_60879 = G__60898;
i__60383_60880 = G__60899;
continue;
}
} else {
}
}
break;
}
} else {
var seq__60384_60900 = cljs.core.seq(classes__$1);
var chunk__60385_60901 = null;
var count__60386_60902 = (0);
var i__60387_60903 = (0);
while(true){
if((i__60387_60903 < count__60386_60902)){
var c_60904 = chunk__60385_60901.cljs$core$IIndexed$_nth$arity$2(null,i__60387_60903);
var class_name_60905 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_60905,c_60904))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_60905 === ""))?c_60904:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_60905)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_60904)].join('')));
}


var G__60906 = seq__60384_60900;
var G__60907 = chunk__60385_60901;
var G__60908 = count__60386_60902;
var G__60909 = (i__60387_60903 + (1));
seq__60384_60900 = G__60906;
chunk__60385_60901 = G__60907;
count__60386_60902 = G__60908;
i__60387_60903 = G__60909;
continue;
} else {
var temp__5735__auto___60910 = cljs.core.seq(seq__60384_60900);
if(temp__5735__auto___60910){
var seq__60384_60911__$1 = temp__5735__auto___60910;
if(cljs.core.chunked_seq_QMARK_(seq__60384_60911__$1)){
var c__4556__auto___60912 = cljs.core.chunk_first(seq__60384_60911__$1);
var G__60913 = cljs.core.chunk_rest(seq__60384_60911__$1);
var G__60914 = c__4556__auto___60912;
var G__60915 = cljs.core.count(c__4556__auto___60912);
var G__60916 = (0);
seq__60384_60900 = G__60913;
chunk__60385_60901 = G__60914;
count__60386_60902 = G__60915;
i__60387_60903 = G__60916;
continue;
} else {
var c_60917 = cljs.core.first(seq__60384_60911__$1);
var class_name_60918 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_60918,c_60917))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_60918 === ""))?c_60917:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_60918)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_60917)].join('')));
}


var G__60919 = cljs.core.next(seq__60384_60911__$1);
var G__60920 = null;
var G__60921 = (0);
var G__60922 = (0);
seq__60384_60900 = G__60919;
chunk__60385_60901 = G__60920;
count__60386_60902 = G__60921;
i__60387_60903 = G__60922;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__60388_60923 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__60389_60924 = null;
var count__60390_60925 = (0);
var i__60391_60926 = (0);
while(true){
if((i__60391_60926 < count__60390_60925)){
var c_60927 = chunk__60389_60924.cljs$core$IIndexed$_nth$arity$2(null,i__60391_60926);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_60927);


var G__60928 = seq__60388_60923;
var G__60929 = chunk__60389_60924;
var G__60930 = count__60390_60925;
var G__60931 = (i__60391_60926 + (1));
seq__60388_60923 = G__60928;
chunk__60389_60924 = G__60929;
count__60390_60925 = G__60930;
i__60391_60926 = G__60931;
continue;
} else {
var temp__5735__auto___60932 = cljs.core.seq(seq__60388_60923);
if(temp__5735__auto___60932){
var seq__60388_60933__$1 = temp__5735__auto___60932;
if(cljs.core.chunked_seq_QMARK_(seq__60388_60933__$1)){
var c__4556__auto___60934 = cljs.core.chunk_first(seq__60388_60933__$1);
var G__60935 = cljs.core.chunk_rest(seq__60388_60933__$1);
var G__60936 = c__4556__auto___60934;
var G__60937 = cljs.core.count(c__4556__auto___60934);
var G__60938 = (0);
seq__60388_60923 = G__60935;
chunk__60389_60924 = G__60936;
count__60390_60925 = G__60937;
i__60391_60926 = G__60938;
continue;
} else {
var c_60939 = cljs.core.first(seq__60388_60933__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_60939);


var G__60940 = cljs.core.next(seq__60388_60933__$1);
var G__60941 = null;
var G__60942 = (0);
var G__60943 = (0);
seq__60388_60923 = G__60940;
chunk__60389_60924 = G__60941;
count__60390_60925 = G__60942;
i__60391_60926 = G__60943;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq60376){
var G__60377 = cljs.core.first(seq60376);
var seq60376__$1 = cljs.core.next(seq60376);
var G__60378 = cljs.core.first(seq60376__$1);
var seq60376__$2 = cljs.core.next(seq60376__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60377,G__60378,seq60376__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__60396 = arguments.length;
switch (G__60396) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60947 = arguments.length;
var i__4737__auto___60948 = (0);
while(true){
if((i__4737__auto___60948 < len__4736__auto___60947)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60948]));

var G__60949 = (i__4737__auto___60948 + (1));
i__4737__auto___60948 = G__60949;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___60950 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___60950)){
var class_list_60951 = temp__5733__auto___60950;
class_list_60951.remove(c__$1);
} else {
var class_name_60952 = dommy.core.class$(elem);
var new_class_name_60953 = dommy.utils.remove_class_str(class_name_60952,c__$1);
if((class_name_60952 === new_class_name_60953)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_60953);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__60397 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__60398 = null;
var count__60399 = (0);
var i__60400 = (0);
while(true){
if((i__60400 < count__60399)){
var c = chunk__60398.cljs$core$IIndexed$_nth$arity$2(null,i__60400);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__60955 = seq__60397;
var G__60956 = chunk__60398;
var G__60957 = count__60399;
var G__60958 = (i__60400 + (1));
seq__60397 = G__60955;
chunk__60398 = G__60956;
count__60399 = G__60957;
i__60400 = G__60958;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60397);
if(temp__5735__auto__){
var seq__60397__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60397__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60397__$1);
var G__60960 = cljs.core.chunk_rest(seq__60397__$1);
var G__60961 = c__4556__auto__;
var G__60962 = cljs.core.count(c__4556__auto__);
var G__60963 = (0);
seq__60397 = G__60960;
chunk__60398 = G__60961;
count__60399 = G__60962;
i__60400 = G__60963;
continue;
} else {
var c = cljs.core.first(seq__60397__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__60964 = cljs.core.next(seq__60397__$1);
var G__60965 = null;
var G__60966 = (0);
var G__60967 = (0);
seq__60397 = G__60964;
chunk__60398 = G__60965;
count__60399 = G__60966;
i__60400 = G__60967;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq60393){
var G__60394 = cljs.core.first(seq60393);
var seq60393__$1 = cljs.core.next(seq60393);
var G__60395 = cljs.core.first(seq60393__$1);
var seq60393__$2 = cljs.core.next(seq60393__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60394,G__60395,seq60393__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__60402 = arguments.length;
switch (G__60402) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___60969 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___60969)){
var class_list_60970 = temp__5733__auto___60969;
class_list_60970.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__60404 = arguments.length;
switch (G__60404) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__60407 = arguments.length;
switch (G__60407) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__60414 = arguments.length;
switch (G__60414) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60974 = arguments.length;
var i__4737__auto___60975 = (0);
while(true){
if((i__4737__auto___60975 < len__4736__auto___60974)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60975]));

var G__60976 = (i__4737__auto___60975 + (1));
i__4737__auto___60975 = G__60976;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__60415 = parent;
G__60415.appendChild(child);

return G__60415;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__60416_60977 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__60417_60978 = null;
var count__60418_60979 = (0);
var i__60419_60980 = (0);
while(true){
if((i__60419_60980 < count__60418_60979)){
var c_60981 = chunk__60417_60978.cljs$core$IIndexed$_nth$arity$2(null,i__60419_60980);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_60981);


var G__60982 = seq__60416_60977;
var G__60983 = chunk__60417_60978;
var G__60984 = count__60418_60979;
var G__60985 = (i__60419_60980 + (1));
seq__60416_60977 = G__60982;
chunk__60417_60978 = G__60983;
count__60418_60979 = G__60984;
i__60419_60980 = G__60985;
continue;
} else {
var temp__5735__auto___60986 = cljs.core.seq(seq__60416_60977);
if(temp__5735__auto___60986){
var seq__60416_60987__$1 = temp__5735__auto___60986;
if(cljs.core.chunked_seq_QMARK_(seq__60416_60987__$1)){
var c__4556__auto___60988 = cljs.core.chunk_first(seq__60416_60987__$1);
var G__60989 = cljs.core.chunk_rest(seq__60416_60987__$1);
var G__60990 = c__4556__auto___60988;
var G__60991 = cljs.core.count(c__4556__auto___60988);
var G__60992 = (0);
seq__60416_60977 = G__60989;
chunk__60417_60978 = G__60990;
count__60418_60979 = G__60991;
i__60419_60980 = G__60992;
continue;
} else {
var c_60993 = cljs.core.first(seq__60416_60987__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_60993);


var G__60994 = cljs.core.next(seq__60416_60987__$1);
var G__60995 = null;
var G__60996 = (0);
var G__60997 = (0);
seq__60416_60977 = G__60994;
chunk__60417_60978 = G__60995;
count__60418_60979 = G__60996;
i__60419_60980 = G__60997;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq60411){
var G__60412 = cljs.core.first(seq60411);
var seq60411__$1 = cljs.core.next(seq60411);
var G__60413 = cljs.core.first(seq60411__$1);
var seq60411__$2 = cljs.core.next(seq60411__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60412,G__60413,seq60411__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__60424 = arguments.length;
switch (G__60424) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60999 = arguments.length;
var i__4737__auto___61000 = (0);
while(true){
if((i__4737__auto___61000 < len__4736__auto___60999)){
args_arr__4757__auto__.push((arguments[i__4737__auto___61000]));

var G__61001 = (i__4737__auto___61000 + (1));
i__4737__auto___61000 = G__61001;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__60425 = parent;
G__60425.insertBefore(child,parent.firstChild);

return G__60425;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__60426_61002 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__60427_61003 = null;
var count__60428_61004 = (0);
var i__60429_61005 = (0);
while(true){
if((i__60429_61005 < count__60428_61004)){
var c_61006 = chunk__60427_61003.cljs$core$IIndexed$_nth$arity$2(null,i__60429_61005);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_61006);


var G__61007 = seq__60426_61002;
var G__61008 = chunk__60427_61003;
var G__61009 = count__60428_61004;
var G__61010 = (i__60429_61005 + (1));
seq__60426_61002 = G__61007;
chunk__60427_61003 = G__61008;
count__60428_61004 = G__61009;
i__60429_61005 = G__61010;
continue;
} else {
var temp__5735__auto___61011 = cljs.core.seq(seq__60426_61002);
if(temp__5735__auto___61011){
var seq__60426_61012__$1 = temp__5735__auto___61011;
if(cljs.core.chunked_seq_QMARK_(seq__60426_61012__$1)){
var c__4556__auto___61013 = cljs.core.chunk_first(seq__60426_61012__$1);
var G__61014 = cljs.core.chunk_rest(seq__60426_61012__$1);
var G__61015 = c__4556__auto___61013;
var G__61016 = cljs.core.count(c__4556__auto___61013);
var G__61017 = (0);
seq__60426_61002 = G__61014;
chunk__60427_61003 = G__61015;
count__60428_61004 = G__61016;
i__60429_61005 = G__61017;
continue;
} else {
var c_61018 = cljs.core.first(seq__60426_61012__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_61018);


var G__61019 = cljs.core.next(seq__60426_61012__$1);
var G__61020 = null;
var G__61021 = (0);
var G__61022 = (0);
seq__60426_61002 = G__61019;
chunk__60427_61003 = G__61020;
count__60428_61004 = G__61021;
i__60429_61005 = G__61022;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq60421){
var G__60422 = cljs.core.first(seq60421);
var seq60421__$1 = cljs.core.next(seq60421);
var G__60423 = cljs.core.first(seq60421__$1);
var seq60421__$2 = cljs.core.next(seq60421__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60422,G__60423,seq60421__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___61023 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___61023)){
var next_61024 = temp__5733__auto___61023;
dommy.core.insert_before_BANG_(elem,next_61024);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__60431 = arguments.length;
switch (G__60431) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__60432 = p;
G__60432.removeChild(elem);

return G__60432;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60433){
var vec__60434 = p__60433;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60434,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60434,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4126__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = related_target;
if(cljs.core.truth_(and__4115__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4115__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4115__auto__ = selected_target;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4115__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4126__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61026 = arguments.length;
var i__4737__auto___61027 = (0);
while(true){
if((i__4737__auto___61027 < len__4736__auto___61026)){
args__4742__auto__.push((arguments[i__4737__auto___61027]));

var G__61028 = (i__4737__auto___61027 + (1));
i__4737__auto___61027 = G__61028;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq60437){
var G__60438 = cljs.core.first(seq60437);
var seq60437__$1 = cljs.core.next(seq60437);
var G__60439 = cljs.core.first(seq60437__$1);
var seq60437__$2 = cljs.core.next(seq60437__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60438,G__60439,seq60437__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61031 = arguments.length;
var i__4737__auto___61032 = (0);
while(true){
if((i__4737__auto___61032 < len__4736__auto___61031)){
args__4742__auto__.push((arguments[i__4737__auto___61032]));

var G__61033 = (i__4737__auto___61032 + (1));
i__4737__auto___61032 = G__61033;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__60442_61034 = dommy.core.elem_and_selector(elem_sel);
var elem_61035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60442_61034,(0),null);
var selector_61036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60442_61034,(1),null);
var seq__60445_61037 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__60452_61038 = null;
var count__60453_61039 = (0);
var i__60454_61040 = (0);
while(true){
if((i__60454_61040 < count__60453_61039)){
var vec__60510_61042 = chunk__60452_61038.cljs$core$IIndexed$_nth$arity$2(null,i__60454_61040);
var orig_type_61043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60510_61042,(0),null);
var f_61044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60510_61042,(1),null);
var seq__60455_61045 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61043,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61043,cljs.core.identity])));
var chunk__60457_61046 = null;
var count__60458_61047 = (0);
var i__60459_61048 = (0);
while(true){
if((i__60459_61048 < count__60458_61047)){
var vec__60526_61049 = chunk__60457_61046.cljs$core$IIndexed$_nth$arity$2(null,i__60459_61048);
var actual_type_61050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60526_61049,(0),null);
var factory_61051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60526_61049,(1),null);
var canonical_f_61054 = (function (){var G__60530 = (factory_61051.cljs$core$IFn$_invoke$arity$1 ? factory_61051.cljs$core$IFn$_invoke$arity$1(f_61044) : factory_61051.call(null,f_61044));
var fexpr__60529 = (cljs.core.truth_(selector_61036)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61035,selector_61036):cljs.core.identity);
return (fexpr__60529.cljs$core$IFn$_invoke$arity$1 ? fexpr__60529.cljs$core$IFn$_invoke$arity$1(G__60530) : fexpr__60529.call(null,G__60530));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61035,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61036,actual_type_61050,f_61044], null),canonical_f_61054], 0));

if(cljs.core.truth_(elem_61035.addEventListener)){
elem_61035.addEventListener(cljs.core.name(actual_type_61050),canonical_f_61054);
} else {
elem_61035.attachEvent(cljs.core.name(actual_type_61050),canonical_f_61054);
}


var G__61056 = seq__60455_61045;
var G__61057 = chunk__60457_61046;
var G__61058 = count__60458_61047;
var G__61059 = (i__60459_61048 + (1));
seq__60455_61045 = G__61056;
chunk__60457_61046 = G__61057;
count__60458_61047 = G__61058;
i__60459_61048 = G__61059;
continue;
} else {
var temp__5735__auto___61060 = cljs.core.seq(seq__60455_61045);
if(temp__5735__auto___61060){
var seq__60455_61061__$1 = temp__5735__auto___61060;
if(cljs.core.chunked_seq_QMARK_(seq__60455_61061__$1)){
var c__4556__auto___61062 = cljs.core.chunk_first(seq__60455_61061__$1);
var G__61063 = cljs.core.chunk_rest(seq__60455_61061__$1);
var G__61064 = c__4556__auto___61062;
var G__61065 = cljs.core.count(c__4556__auto___61062);
var G__61066 = (0);
seq__60455_61045 = G__61063;
chunk__60457_61046 = G__61064;
count__60458_61047 = G__61065;
i__60459_61048 = G__61066;
continue;
} else {
var vec__60531_61068 = cljs.core.first(seq__60455_61061__$1);
var actual_type_61069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60531_61068,(0),null);
var factory_61070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60531_61068,(1),null);
var canonical_f_61075 = (function (){var G__60535 = (factory_61070.cljs$core$IFn$_invoke$arity$1 ? factory_61070.cljs$core$IFn$_invoke$arity$1(f_61044) : factory_61070.call(null,f_61044));
var fexpr__60534 = (cljs.core.truth_(selector_61036)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61035,selector_61036):cljs.core.identity);
return (fexpr__60534.cljs$core$IFn$_invoke$arity$1 ? fexpr__60534.cljs$core$IFn$_invoke$arity$1(G__60535) : fexpr__60534.call(null,G__60535));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61035,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61036,actual_type_61069,f_61044], null),canonical_f_61075], 0));

if(cljs.core.truth_(elem_61035.addEventListener)){
elem_61035.addEventListener(cljs.core.name(actual_type_61069),canonical_f_61075);
} else {
elem_61035.attachEvent(cljs.core.name(actual_type_61069),canonical_f_61075);
}


var G__61076 = cljs.core.next(seq__60455_61061__$1);
var G__61077 = null;
var G__61078 = (0);
var G__61079 = (0);
seq__60455_61045 = G__61076;
chunk__60457_61046 = G__61077;
count__60458_61047 = G__61078;
i__60459_61048 = G__61079;
continue;
}
} else {
}
}
break;
}

var G__61080 = seq__60445_61037;
var G__61081 = chunk__60452_61038;
var G__61082 = count__60453_61039;
var G__61083 = (i__60454_61040 + (1));
seq__60445_61037 = G__61080;
chunk__60452_61038 = G__61081;
count__60453_61039 = G__61082;
i__60454_61040 = G__61083;
continue;
} else {
var temp__5735__auto___61085 = cljs.core.seq(seq__60445_61037);
if(temp__5735__auto___61085){
var seq__60445_61087__$1 = temp__5735__auto___61085;
if(cljs.core.chunked_seq_QMARK_(seq__60445_61087__$1)){
var c__4556__auto___61088 = cljs.core.chunk_first(seq__60445_61087__$1);
var G__61089 = cljs.core.chunk_rest(seq__60445_61087__$1);
var G__61090 = c__4556__auto___61088;
var G__61091 = cljs.core.count(c__4556__auto___61088);
var G__61092 = (0);
seq__60445_61037 = G__61089;
chunk__60452_61038 = G__61090;
count__60453_61039 = G__61091;
i__60454_61040 = G__61092;
continue;
} else {
var vec__60536_61094 = cljs.core.first(seq__60445_61087__$1);
var orig_type_61095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60536_61094,(0),null);
var f_61096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60536_61094,(1),null);
var seq__60446_61098 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61095,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61095,cljs.core.identity])));
var chunk__60448_61099 = null;
var count__60449_61100 = (0);
var i__60450_61101 = (0);
while(true){
if((i__60450_61101 < count__60449_61100)){
var vec__60549_61102 = chunk__60448_61099.cljs$core$IIndexed$_nth$arity$2(null,i__60450_61101);
var actual_type_61103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60549_61102,(0),null);
var factory_61104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60549_61102,(1),null);
var canonical_f_61106 = (function (){var G__60553 = (factory_61104.cljs$core$IFn$_invoke$arity$1 ? factory_61104.cljs$core$IFn$_invoke$arity$1(f_61096) : factory_61104.call(null,f_61096));
var fexpr__60552 = (cljs.core.truth_(selector_61036)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61035,selector_61036):cljs.core.identity);
return (fexpr__60552.cljs$core$IFn$_invoke$arity$1 ? fexpr__60552.cljs$core$IFn$_invoke$arity$1(G__60553) : fexpr__60552.call(null,G__60553));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61035,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61036,actual_type_61103,f_61096], null),canonical_f_61106], 0));

if(cljs.core.truth_(elem_61035.addEventListener)){
elem_61035.addEventListener(cljs.core.name(actual_type_61103),canonical_f_61106);
} else {
elem_61035.attachEvent(cljs.core.name(actual_type_61103),canonical_f_61106);
}


var G__61110 = seq__60446_61098;
var G__61111 = chunk__60448_61099;
var G__61112 = count__60449_61100;
var G__61113 = (i__60450_61101 + (1));
seq__60446_61098 = G__61110;
chunk__60448_61099 = G__61111;
count__60449_61100 = G__61112;
i__60450_61101 = G__61113;
continue;
} else {
var temp__5735__auto___61114__$1 = cljs.core.seq(seq__60446_61098);
if(temp__5735__auto___61114__$1){
var seq__60446_61115__$1 = temp__5735__auto___61114__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60446_61115__$1)){
var c__4556__auto___61116 = cljs.core.chunk_first(seq__60446_61115__$1);
var G__61117 = cljs.core.chunk_rest(seq__60446_61115__$1);
var G__61118 = c__4556__auto___61116;
var G__61119 = cljs.core.count(c__4556__auto___61116);
var G__61120 = (0);
seq__60446_61098 = G__61117;
chunk__60448_61099 = G__61118;
count__60449_61100 = G__61119;
i__60450_61101 = G__61120;
continue;
} else {
var vec__60554_61122 = cljs.core.first(seq__60446_61115__$1);
var actual_type_61123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60554_61122,(0),null);
var factory_61124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60554_61122,(1),null);
var canonical_f_61127 = (function (){var G__60558 = (factory_61124.cljs$core$IFn$_invoke$arity$1 ? factory_61124.cljs$core$IFn$_invoke$arity$1(f_61096) : factory_61124.call(null,f_61096));
var fexpr__60557 = (cljs.core.truth_(selector_61036)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61035,selector_61036):cljs.core.identity);
return (fexpr__60557.cljs$core$IFn$_invoke$arity$1 ? fexpr__60557.cljs$core$IFn$_invoke$arity$1(G__60558) : fexpr__60557.call(null,G__60558));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61035,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61036,actual_type_61123,f_61096], null),canonical_f_61127], 0));

if(cljs.core.truth_(elem_61035.addEventListener)){
elem_61035.addEventListener(cljs.core.name(actual_type_61123),canonical_f_61127);
} else {
elem_61035.attachEvent(cljs.core.name(actual_type_61123),canonical_f_61127);
}


var G__61130 = cljs.core.next(seq__60446_61115__$1);
var G__61131 = null;
var G__61132 = (0);
var G__61133 = (0);
seq__60446_61098 = G__61130;
chunk__60448_61099 = G__61131;
count__60449_61100 = G__61132;
i__60450_61101 = G__61133;
continue;
}
} else {
}
}
break;
}

var G__61135 = cljs.core.next(seq__60445_61087__$1);
var G__61136 = null;
var G__61137 = (0);
var G__61138 = (0);
seq__60445_61037 = G__61135;
chunk__60452_61038 = G__61136;
count__60453_61039 = G__61137;
i__60454_61040 = G__61138;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq60440){
var G__60441 = cljs.core.first(seq60440);
var seq60440__$1 = cljs.core.next(seq60440);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60441,seq60440__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61143 = arguments.length;
var i__4737__auto___61144 = (0);
while(true){
if((i__4737__auto___61144 < len__4736__auto___61143)){
args__4742__auto__.push((arguments[i__4737__auto___61144]));

var G__61145 = (i__4737__auto___61144 + (1));
i__4737__auto___61144 = G__61145;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__60561_61146 = dommy.core.elem_and_selector(elem_sel);
var elem_61147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60561_61146,(0),null);
var selector_61148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60561_61146,(1),null);
var seq__60564_61149 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__60571_61150 = null;
var count__60572_61151 = (0);
var i__60573_61152 = (0);
while(true){
if((i__60573_61152 < count__60572_61151)){
var vec__60621_61153 = chunk__60571_61150.cljs$core$IIndexed$_nth$arity$2(null,i__60573_61152);
var orig_type_61154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60621_61153,(0),null);
var f_61155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60621_61153,(1),null);
var seq__60574_61156 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61154,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61154,cljs.core.identity])));
var chunk__60576_61157 = null;
var count__60577_61158 = (0);
var i__60578_61159 = (0);
while(true){
if((i__60578_61159 < count__60577_61158)){
var vec__60630_61160 = chunk__60576_61157.cljs$core$IIndexed$_nth$arity$2(null,i__60578_61159);
var actual_type_61161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60630_61160,(0),null);
var __61162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60630_61160,(1),null);
var keys_61163 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61148,actual_type_61161,f_61155], null);
var canonical_f_61164 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61147),keys_61163);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61147,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61163], 0));

if(cljs.core.truth_(elem_61147.removeEventListener)){
elem_61147.removeEventListener(cljs.core.name(actual_type_61161),canonical_f_61164);
} else {
elem_61147.detachEvent(cljs.core.name(actual_type_61161),canonical_f_61164);
}


var G__61165 = seq__60574_61156;
var G__61166 = chunk__60576_61157;
var G__61167 = count__60577_61158;
var G__61168 = (i__60578_61159 + (1));
seq__60574_61156 = G__61165;
chunk__60576_61157 = G__61166;
count__60577_61158 = G__61167;
i__60578_61159 = G__61168;
continue;
} else {
var temp__5735__auto___61169 = cljs.core.seq(seq__60574_61156);
if(temp__5735__auto___61169){
var seq__60574_61170__$1 = temp__5735__auto___61169;
if(cljs.core.chunked_seq_QMARK_(seq__60574_61170__$1)){
var c__4556__auto___61171 = cljs.core.chunk_first(seq__60574_61170__$1);
var G__61172 = cljs.core.chunk_rest(seq__60574_61170__$1);
var G__61173 = c__4556__auto___61171;
var G__61174 = cljs.core.count(c__4556__auto___61171);
var G__61175 = (0);
seq__60574_61156 = G__61172;
chunk__60576_61157 = G__61173;
count__60577_61158 = G__61174;
i__60578_61159 = G__61175;
continue;
} else {
var vec__60633_61176 = cljs.core.first(seq__60574_61170__$1);
var actual_type_61177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60633_61176,(0),null);
var __61178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60633_61176,(1),null);
var keys_61179 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61148,actual_type_61177,f_61155], null);
var canonical_f_61180 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61147),keys_61179);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61147,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61179], 0));

if(cljs.core.truth_(elem_61147.removeEventListener)){
elem_61147.removeEventListener(cljs.core.name(actual_type_61177),canonical_f_61180);
} else {
elem_61147.detachEvent(cljs.core.name(actual_type_61177),canonical_f_61180);
}


var G__61181 = cljs.core.next(seq__60574_61170__$1);
var G__61182 = null;
var G__61183 = (0);
var G__61184 = (0);
seq__60574_61156 = G__61181;
chunk__60576_61157 = G__61182;
count__60577_61158 = G__61183;
i__60578_61159 = G__61184;
continue;
}
} else {
}
}
break;
}

var G__61185 = seq__60564_61149;
var G__61186 = chunk__60571_61150;
var G__61187 = count__60572_61151;
var G__61188 = (i__60573_61152 + (1));
seq__60564_61149 = G__61185;
chunk__60571_61150 = G__61186;
count__60572_61151 = G__61187;
i__60573_61152 = G__61188;
continue;
} else {
var temp__5735__auto___61189 = cljs.core.seq(seq__60564_61149);
if(temp__5735__auto___61189){
var seq__60564_61190__$1 = temp__5735__auto___61189;
if(cljs.core.chunked_seq_QMARK_(seq__60564_61190__$1)){
var c__4556__auto___61191 = cljs.core.chunk_first(seq__60564_61190__$1);
var G__61192 = cljs.core.chunk_rest(seq__60564_61190__$1);
var G__61193 = c__4556__auto___61191;
var G__61194 = cljs.core.count(c__4556__auto___61191);
var G__61195 = (0);
seq__60564_61149 = G__61192;
chunk__60571_61150 = G__61193;
count__60572_61151 = G__61194;
i__60573_61152 = G__61195;
continue;
} else {
var vec__60637_61196 = cljs.core.first(seq__60564_61190__$1);
var orig_type_61197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60637_61196,(0),null);
var f_61198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60637_61196,(1),null);
var seq__60565_61199 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61197,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61197,cljs.core.identity])));
var chunk__60567_61200 = null;
var count__60568_61201 = (0);
var i__60569_61202 = (0);
while(true){
if((i__60569_61202 < count__60568_61201)){
var vec__60650_61203 = chunk__60567_61200.cljs$core$IIndexed$_nth$arity$2(null,i__60569_61202);
var actual_type_61204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60650_61203,(0),null);
var __61205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60650_61203,(1),null);
var keys_61206 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61148,actual_type_61204,f_61198], null);
var canonical_f_61207 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61147),keys_61206);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61147,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61206], 0));

if(cljs.core.truth_(elem_61147.removeEventListener)){
elem_61147.removeEventListener(cljs.core.name(actual_type_61204),canonical_f_61207);
} else {
elem_61147.detachEvent(cljs.core.name(actual_type_61204),canonical_f_61207);
}


var G__61208 = seq__60565_61199;
var G__61209 = chunk__60567_61200;
var G__61210 = count__60568_61201;
var G__61211 = (i__60569_61202 + (1));
seq__60565_61199 = G__61208;
chunk__60567_61200 = G__61209;
count__60568_61201 = G__61210;
i__60569_61202 = G__61211;
continue;
} else {
var temp__5735__auto___61212__$1 = cljs.core.seq(seq__60565_61199);
if(temp__5735__auto___61212__$1){
var seq__60565_61213__$1 = temp__5735__auto___61212__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60565_61213__$1)){
var c__4556__auto___61214 = cljs.core.chunk_first(seq__60565_61213__$1);
var G__61215 = cljs.core.chunk_rest(seq__60565_61213__$1);
var G__61216 = c__4556__auto___61214;
var G__61217 = cljs.core.count(c__4556__auto___61214);
var G__61218 = (0);
seq__60565_61199 = G__61215;
chunk__60567_61200 = G__61216;
count__60568_61201 = G__61217;
i__60569_61202 = G__61218;
continue;
} else {
var vec__60653_61219 = cljs.core.first(seq__60565_61213__$1);
var actual_type_61220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60653_61219,(0),null);
var __61221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60653_61219,(1),null);
var keys_61222 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61148,actual_type_61220,f_61198], null);
var canonical_f_61223 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61147),keys_61222);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61147,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61222], 0));

if(cljs.core.truth_(elem_61147.removeEventListener)){
elem_61147.removeEventListener(cljs.core.name(actual_type_61220),canonical_f_61223);
} else {
elem_61147.detachEvent(cljs.core.name(actual_type_61220),canonical_f_61223);
}


var G__61224 = cljs.core.next(seq__60565_61213__$1);
var G__61225 = null;
var G__61226 = (0);
var G__61227 = (0);
seq__60565_61199 = G__61224;
chunk__60567_61200 = G__61225;
count__60568_61201 = G__61226;
i__60569_61202 = G__61227;
continue;
}
} else {
}
}
break;
}

var G__61228 = cljs.core.next(seq__60564_61190__$1);
var G__61229 = null;
var G__61230 = (0);
var G__61231 = (0);
seq__60564_61149 = G__61228;
chunk__60571_61150 = G__61229;
count__60572_61151 = G__61230;
i__60573_61152 = G__61231;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq60559){
var G__60560 = cljs.core.first(seq60559);
var seq60559__$1 = cljs.core.next(seq60559);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60560,seq60559__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61232 = arguments.length;
var i__4737__auto___61233 = (0);
while(true){
if((i__4737__auto___61233 < len__4736__auto___61232)){
args__4742__auto__.push((arguments[i__4737__auto___61233]));

var G__61234 = (i__4737__auto___61233 + (1));
i__4737__auto___61233 = G__61234;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__60663_61235 = dommy.core.elem_and_selector(elem_sel);
var elem_61236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60663_61235,(0),null);
var selector_61237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60663_61235,(1),null);
var seq__60666_61238 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__60667_61239 = null;
var count__60668_61240 = (0);
var i__60669_61241 = (0);
while(true){
if((i__60669_61241 < count__60668_61240)){
var vec__60689_61242 = chunk__60667_61239.cljs$core$IIndexed$_nth$arity$2(null,i__60669_61241);
var type_61243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60689_61242,(0),null);
var f_61244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60689_61242,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61243,((function (seq__60666_61238,chunk__60667_61239,count__60668_61240,i__60669_61241,vec__60689_61242,type_61243,f_61244,vec__60663_61235,elem_61236,selector_61237){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61243,dommy$core$this_fn], 0));

return (f_61244.cljs$core$IFn$_invoke$arity$1 ? f_61244.cljs$core$IFn$_invoke$arity$1(e) : f_61244.call(null,e));
});})(seq__60666_61238,chunk__60667_61239,count__60668_61240,i__60669_61241,vec__60689_61242,type_61243,f_61244,vec__60663_61235,elem_61236,selector_61237))
], 0));


var G__61245 = seq__60666_61238;
var G__61246 = chunk__60667_61239;
var G__61247 = count__60668_61240;
var G__61248 = (i__60669_61241 + (1));
seq__60666_61238 = G__61245;
chunk__60667_61239 = G__61246;
count__60668_61240 = G__61247;
i__60669_61241 = G__61248;
continue;
} else {
var temp__5735__auto___61249 = cljs.core.seq(seq__60666_61238);
if(temp__5735__auto___61249){
var seq__60666_61250__$1 = temp__5735__auto___61249;
if(cljs.core.chunked_seq_QMARK_(seq__60666_61250__$1)){
var c__4556__auto___61251 = cljs.core.chunk_first(seq__60666_61250__$1);
var G__61252 = cljs.core.chunk_rest(seq__60666_61250__$1);
var G__61253 = c__4556__auto___61251;
var G__61254 = cljs.core.count(c__4556__auto___61251);
var G__61255 = (0);
seq__60666_61238 = G__61252;
chunk__60667_61239 = G__61253;
count__60668_61240 = G__61254;
i__60669_61241 = G__61255;
continue;
} else {
var vec__60702_61256 = cljs.core.first(seq__60666_61250__$1);
var type_61257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60702_61256,(0),null);
var f_61258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60702_61256,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61257,((function (seq__60666_61238,chunk__60667_61239,count__60668_61240,i__60669_61241,vec__60702_61256,type_61257,f_61258,seq__60666_61250__$1,temp__5735__auto___61249,vec__60663_61235,elem_61236,selector_61237){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61257,dommy$core$this_fn], 0));

return (f_61258.cljs$core$IFn$_invoke$arity$1 ? f_61258.cljs$core$IFn$_invoke$arity$1(e) : f_61258.call(null,e));
});})(seq__60666_61238,chunk__60667_61239,count__60668_61240,i__60669_61241,vec__60702_61256,type_61257,f_61258,seq__60666_61250__$1,temp__5735__auto___61249,vec__60663_61235,elem_61236,selector_61237))
], 0));


var G__61259 = cljs.core.next(seq__60666_61250__$1);
var G__61260 = null;
var G__61261 = (0);
var G__61262 = (0);
seq__60666_61238 = G__61259;
chunk__60667_61239 = G__61260;
count__60668_61240 = G__61261;
i__60669_61241 = G__61262;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq60657){
var G__60658 = cljs.core.first(seq60657);
var seq60657__$1 = cljs.core.next(seq60657);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60658,seq60657__$1);
}));


//# sourceMappingURL=dommy.core.js.map
