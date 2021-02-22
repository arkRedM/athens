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
var G__60258 = arguments.length;
switch (G__60258) {
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
var G__60260 = arguments.length;
switch (G__60260) {
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
var G__60263 = arguments.length;
switch (G__60263) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__60261_SHARP_){
return (!((p1__60261_SHARP_ === base)));
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
var len__4736__auto___60716 = arguments.length;
var i__4737__auto___60717 = (0);
while(true){
if((i__4737__auto___60717 < len__4736__auto___60716)){
args__4742__auto__.push((arguments[i__4737__auto___60717]));

var G__60718 = (i__4737__auto___60717 + (1));
i__4737__auto___60717 = G__60718;
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
var seq__60272_60719 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__60273_60720 = null;
var count__60274_60721 = (0);
var i__60275_60722 = (0);
while(true){
if((i__60275_60722 < count__60274_60721)){
var vec__60284_60723 = chunk__60273_60720.cljs$core$IIndexed$_nth$arity$2(null,i__60275_60722);
var k_60724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60284_60723,(0),null);
var v_60725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60284_60723,(1),null);
style.setProperty(dommy.utils.as_str(k_60724),v_60725);


var G__60726 = seq__60272_60719;
var G__60727 = chunk__60273_60720;
var G__60728 = count__60274_60721;
var G__60729 = (i__60275_60722 + (1));
seq__60272_60719 = G__60726;
chunk__60273_60720 = G__60727;
count__60274_60721 = G__60728;
i__60275_60722 = G__60729;
continue;
} else {
var temp__5735__auto___60730 = cljs.core.seq(seq__60272_60719);
if(temp__5735__auto___60730){
var seq__60272_60731__$1 = temp__5735__auto___60730;
if(cljs.core.chunked_seq_QMARK_(seq__60272_60731__$1)){
var c__4556__auto___60732 = cljs.core.chunk_first(seq__60272_60731__$1);
var G__60733 = cljs.core.chunk_rest(seq__60272_60731__$1);
var G__60734 = c__4556__auto___60732;
var G__60735 = cljs.core.count(c__4556__auto___60732);
var G__60736 = (0);
seq__60272_60719 = G__60733;
chunk__60273_60720 = G__60734;
count__60274_60721 = G__60735;
i__60275_60722 = G__60736;
continue;
} else {
var vec__60288_60737 = cljs.core.first(seq__60272_60731__$1);
var k_60738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60288_60737,(0),null);
var v_60739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60288_60737,(1),null);
style.setProperty(dommy.utils.as_str(k_60738),v_60739);


var G__60740 = cljs.core.next(seq__60272_60731__$1);
var G__60741 = null;
var G__60742 = (0);
var G__60743 = (0);
seq__60272_60719 = G__60740;
chunk__60273_60720 = G__60741;
count__60274_60721 = G__60742;
i__60275_60722 = G__60743;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq60268){
var G__60269 = cljs.core.first(seq60268);
var seq60268__$1 = cljs.core.next(seq60268);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60269,seq60268__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60744 = arguments.length;
var i__4737__auto___60745 = (0);
while(true){
if((i__4737__auto___60745 < len__4736__auto___60744)){
args__4742__auto__.push((arguments[i__4737__auto___60745]));

var G__60746 = (i__4737__auto___60745 + (1));
i__4737__auto___60745 = G__60746;
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
var seq__60295_60747 = cljs.core.seq(keywords);
var chunk__60296_60748 = null;
var count__60297_60749 = (0);
var i__60298_60750 = (0);
while(true){
if((i__60298_60750 < count__60297_60749)){
var kw_60751 = chunk__60296_60748.cljs$core$IIndexed$_nth$arity$2(null,i__60298_60750);
style.removeProperty(dommy.utils.as_str(kw_60751));


var G__60752 = seq__60295_60747;
var G__60753 = chunk__60296_60748;
var G__60754 = count__60297_60749;
var G__60755 = (i__60298_60750 + (1));
seq__60295_60747 = G__60752;
chunk__60296_60748 = G__60753;
count__60297_60749 = G__60754;
i__60298_60750 = G__60755;
continue;
} else {
var temp__5735__auto___60756 = cljs.core.seq(seq__60295_60747);
if(temp__5735__auto___60756){
var seq__60295_60757__$1 = temp__5735__auto___60756;
if(cljs.core.chunked_seq_QMARK_(seq__60295_60757__$1)){
var c__4556__auto___60758 = cljs.core.chunk_first(seq__60295_60757__$1);
var G__60759 = cljs.core.chunk_rest(seq__60295_60757__$1);
var G__60760 = c__4556__auto___60758;
var G__60761 = cljs.core.count(c__4556__auto___60758);
var G__60762 = (0);
seq__60295_60747 = G__60759;
chunk__60296_60748 = G__60760;
count__60297_60749 = G__60761;
i__60298_60750 = G__60762;
continue;
} else {
var kw_60763 = cljs.core.first(seq__60295_60757__$1);
style.removeProperty(dommy.utils.as_str(kw_60763));


var G__60764 = cljs.core.next(seq__60295_60757__$1);
var G__60765 = null;
var G__60766 = (0);
var G__60767 = (0);
seq__60295_60747 = G__60764;
chunk__60296_60748 = G__60765;
count__60297_60749 = G__60766;
i__60298_60750 = G__60767;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq60292){
var G__60293 = cljs.core.first(seq60292);
var seq60292__$1 = cljs.core.next(seq60292);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60293,seq60292__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60768 = arguments.length;
var i__4737__auto___60769 = (0);
while(true){
if((i__4737__auto___60769 < len__4736__auto___60768)){
args__4742__auto__.push((arguments[i__4737__auto___60769]));

var G__60770 = (i__4737__auto___60769 + (1));
i__4737__auto___60769 = G__60770;
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

var seq__60304_60771 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__60305_60772 = null;
var count__60306_60773 = (0);
var i__60307_60774 = (0);
while(true){
if((i__60307_60774 < count__60306_60773)){
var vec__60314_60775 = chunk__60305_60772.cljs$core$IIndexed$_nth$arity$2(null,i__60307_60774);
var k_60776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60314_60775,(0),null);
var v_60777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60314_60775,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_60776,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_60777),"px"].join('')], 0));


var G__60778 = seq__60304_60771;
var G__60779 = chunk__60305_60772;
var G__60780 = count__60306_60773;
var G__60781 = (i__60307_60774 + (1));
seq__60304_60771 = G__60778;
chunk__60305_60772 = G__60779;
count__60306_60773 = G__60780;
i__60307_60774 = G__60781;
continue;
} else {
var temp__5735__auto___60782 = cljs.core.seq(seq__60304_60771);
if(temp__5735__auto___60782){
var seq__60304_60783__$1 = temp__5735__auto___60782;
if(cljs.core.chunked_seq_QMARK_(seq__60304_60783__$1)){
var c__4556__auto___60784 = cljs.core.chunk_first(seq__60304_60783__$1);
var G__60785 = cljs.core.chunk_rest(seq__60304_60783__$1);
var G__60786 = c__4556__auto___60784;
var G__60787 = cljs.core.count(c__4556__auto___60784);
var G__60788 = (0);
seq__60304_60771 = G__60785;
chunk__60305_60772 = G__60786;
count__60306_60773 = G__60787;
i__60307_60774 = G__60788;
continue;
} else {
var vec__60317_60789 = cljs.core.first(seq__60304_60783__$1);
var k_60790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60317_60789,(0),null);
var v_60791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60317_60789,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_60790,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_60791),"px"].join('')], 0));


var G__60792 = cljs.core.next(seq__60304_60783__$1);
var G__60793 = null;
var G__60794 = (0);
var G__60795 = (0);
seq__60304_60771 = G__60792;
chunk__60305_60772 = G__60793;
count__60306_60773 = G__60794;
i__60307_60774 = G__60795;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq60302){
var G__60303 = cljs.core.first(seq60302);
var seq60302__$1 = cljs.core.next(seq60302);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60303,seq60302__$1);
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
var G__60325 = arguments.length;
switch (G__60325) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60799 = arguments.length;
var i__4737__auto___60800 = (0);
while(true){
if((i__4737__auto___60800 < len__4736__auto___60799)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60800]));

var G__60801 = (i__4737__auto___60800 + (1));
i__4737__auto___60800 = G__60801;
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
var G__60326 = elem;
(G__60326[k__$1] = v);

return G__60326;
} else {
var G__60327 = elem;
G__60327.setAttribute(k__$1,v);

return G__60327;
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

var seq__60328_60802 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__60329_60803 = null;
var count__60330_60804 = (0);
var i__60331_60805 = (0);
while(true){
if((i__60331_60805 < count__60330_60804)){
var vec__60338_60806 = chunk__60329_60803.cljs$core$IIndexed$_nth$arity$2(null,i__60331_60805);
var k_60807__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60338_60806,(0),null);
var v_60808__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60338_60806,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_60807__$1,v_60808__$1);


var G__60809 = seq__60328_60802;
var G__60810 = chunk__60329_60803;
var G__60811 = count__60330_60804;
var G__60812 = (i__60331_60805 + (1));
seq__60328_60802 = G__60809;
chunk__60329_60803 = G__60810;
count__60330_60804 = G__60811;
i__60331_60805 = G__60812;
continue;
} else {
var temp__5735__auto___60813 = cljs.core.seq(seq__60328_60802);
if(temp__5735__auto___60813){
var seq__60328_60814__$1 = temp__5735__auto___60813;
if(cljs.core.chunked_seq_QMARK_(seq__60328_60814__$1)){
var c__4556__auto___60815 = cljs.core.chunk_first(seq__60328_60814__$1);
var G__60816 = cljs.core.chunk_rest(seq__60328_60814__$1);
var G__60817 = c__4556__auto___60815;
var G__60818 = cljs.core.count(c__4556__auto___60815);
var G__60819 = (0);
seq__60328_60802 = G__60816;
chunk__60329_60803 = G__60817;
count__60330_60804 = G__60818;
i__60331_60805 = G__60819;
continue;
} else {
var vec__60341_60820 = cljs.core.first(seq__60328_60814__$1);
var k_60821__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60341_60820,(0),null);
var v_60822__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60341_60820,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_60821__$1,v_60822__$1);


var G__60823 = cljs.core.next(seq__60328_60814__$1);
var G__60824 = null;
var G__60825 = (0);
var G__60826 = (0);
seq__60328_60802 = G__60823;
chunk__60329_60803 = G__60824;
count__60330_60804 = G__60825;
i__60331_60805 = G__60826;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq60321){
var G__60322 = cljs.core.first(seq60321);
var seq60321__$1 = cljs.core.next(seq60321);
var G__60323 = cljs.core.first(seq60321__$1);
var seq60321__$2 = cljs.core.next(seq60321__$1);
var G__60324 = cljs.core.first(seq60321__$2);
var seq60321__$3 = cljs.core.next(seq60321__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60322,G__60323,G__60324,seq60321__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__60348 = arguments.length;
switch (G__60348) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60830 = arguments.length;
var i__4737__auto___60831 = (0);
while(true){
if((i__4737__auto___60831 < len__4736__auto___60830)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60831]));

var G__60832 = (i__4737__auto___60831 + (1));
i__4737__auto___60831 = G__60832;
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
var k_60833__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__60349 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__60349.cljs$core$IFn$_invoke$arity$1 ? fexpr__60349.cljs$core$IFn$_invoke$arity$1(k_60833__$1) : fexpr__60349.call(null,k_60833__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_60833__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__60350_60834 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__60351_60835 = null;
var count__60352_60836 = (0);
var i__60353_60837 = (0);
while(true){
if((i__60353_60837 < count__60352_60836)){
var k_60838__$1 = chunk__60351_60835.cljs$core$IIndexed$_nth$arity$2(null,i__60353_60837);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_60838__$1);


var G__60839 = seq__60350_60834;
var G__60840 = chunk__60351_60835;
var G__60841 = count__60352_60836;
var G__60842 = (i__60353_60837 + (1));
seq__60350_60834 = G__60839;
chunk__60351_60835 = G__60840;
count__60352_60836 = G__60841;
i__60353_60837 = G__60842;
continue;
} else {
var temp__5735__auto___60844 = cljs.core.seq(seq__60350_60834);
if(temp__5735__auto___60844){
var seq__60350_60845__$1 = temp__5735__auto___60844;
if(cljs.core.chunked_seq_QMARK_(seq__60350_60845__$1)){
var c__4556__auto___60847 = cljs.core.chunk_first(seq__60350_60845__$1);
var G__60848 = cljs.core.chunk_rest(seq__60350_60845__$1);
var G__60849 = c__4556__auto___60847;
var G__60850 = cljs.core.count(c__4556__auto___60847);
var G__60851 = (0);
seq__60350_60834 = G__60848;
chunk__60351_60835 = G__60849;
count__60352_60836 = G__60850;
i__60353_60837 = G__60851;
continue;
} else {
var k_60852__$1 = cljs.core.first(seq__60350_60845__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_60852__$1);


var G__60853 = cljs.core.next(seq__60350_60845__$1);
var G__60854 = null;
var G__60855 = (0);
var G__60856 = (0);
seq__60350_60834 = G__60853;
chunk__60351_60835 = G__60854;
count__60352_60836 = G__60855;
i__60353_60837 = G__60856;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq60345){
var G__60346 = cljs.core.first(seq60345);
var seq60345__$1 = cljs.core.next(seq60345);
var G__60347 = cljs.core.first(seq60345__$1);
var seq60345__$2 = cljs.core.next(seq60345__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60346,G__60347,seq60345__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__60355 = arguments.length;
switch (G__60355) {
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
var G__60360 = arguments.length;
switch (G__60360) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60859 = arguments.length;
var i__4737__auto___60860 = (0);
while(true){
if((i__4737__auto___60860 < len__4736__auto___60859)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60860]));

var G__60861 = (i__4737__auto___60860 + (1));
i__4737__auto___60860 = G__60861;
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
var temp__5733__auto___60862 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___60862)){
var class_list_60863 = temp__5733__auto___60862;
var seq__60361_60864 = cljs.core.seq(classes__$1);
var chunk__60362_60865 = null;
var count__60363_60866 = (0);
var i__60364_60867 = (0);
while(true){
if((i__60364_60867 < count__60363_60866)){
var c_60868 = chunk__60362_60865.cljs$core$IIndexed$_nth$arity$2(null,i__60364_60867);
class_list_60863.add(c_60868);


var G__60869 = seq__60361_60864;
var G__60870 = chunk__60362_60865;
var G__60871 = count__60363_60866;
var G__60872 = (i__60364_60867 + (1));
seq__60361_60864 = G__60869;
chunk__60362_60865 = G__60870;
count__60363_60866 = G__60871;
i__60364_60867 = G__60872;
continue;
} else {
var temp__5735__auto___60873 = cljs.core.seq(seq__60361_60864);
if(temp__5735__auto___60873){
var seq__60361_60874__$1 = temp__5735__auto___60873;
if(cljs.core.chunked_seq_QMARK_(seq__60361_60874__$1)){
var c__4556__auto___60875 = cljs.core.chunk_first(seq__60361_60874__$1);
var G__60876 = cljs.core.chunk_rest(seq__60361_60874__$1);
var G__60877 = c__4556__auto___60875;
var G__60878 = cljs.core.count(c__4556__auto___60875);
var G__60879 = (0);
seq__60361_60864 = G__60876;
chunk__60362_60865 = G__60877;
count__60363_60866 = G__60878;
i__60364_60867 = G__60879;
continue;
} else {
var c_60880 = cljs.core.first(seq__60361_60874__$1);
class_list_60863.add(c_60880);


var G__60881 = cljs.core.next(seq__60361_60874__$1);
var G__60882 = null;
var G__60883 = (0);
var G__60884 = (0);
seq__60361_60864 = G__60881;
chunk__60362_60865 = G__60882;
count__60363_60866 = G__60883;
i__60364_60867 = G__60884;
continue;
}
} else {
}
}
break;
}
} else {
var seq__60365_60885 = cljs.core.seq(classes__$1);
var chunk__60366_60886 = null;
var count__60367_60887 = (0);
var i__60368_60888 = (0);
while(true){
if((i__60368_60888 < count__60367_60887)){
var c_60889 = chunk__60366_60886.cljs$core$IIndexed$_nth$arity$2(null,i__60368_60888);
var class_name_60890 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_60890,c_60889))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_60890 === ""))?c_60889:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_60890)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_60889)].join('')));
}


var G__60891 = seq__60365_60885;
var G__60892 = chunk__60366_60886;
var G__60893 = count__60367_60887;
var G__60894 = (i__60368_60888 + (1));
seq__60365_60885 = G__60891;
chunk__60366_60886 = G__60892;
count__60367_60887 = G__60893;
i__60368_60888 = G__60894;
continue;
} else {
var temp__5735__auto___60895 = cljs.core.seq(seq__60365_60885);
if(temp__5735__auto___60895){
var seq__60365_60896__$1 = temp__5735__auto___60895;
if(cljs.core.chunked_seq_QMARK_(seq__60365_60896__$1)){
var c__4556__auto___60897 = cljs.core.chunk_first(seq__60365_60896__$1);
var G__60898 = cljs.core.chunk_rest(seq__60365_60896__$1);
var G__60899 = c__4556__auto___60897;
var G__60900 = cljs.core.count(c__4556__auto___60897);
var G__60901 = (0);
seq__60365_60885 = G__60898;
chunk__60366_60886 = G__60899;
count__60367_60887 = G__60900;
i__60368_60888 = G__60901;
continue;
} else {
var c_60902 = cljs.core.first(seq__60365_60896__$1);
var class_name_60903 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_60903,c_60902))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_60903 === ""))?c_60902:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_60903)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_60902)].join('')));
}


var G__60904 = cljs.core.next(seq__60365_60896__$1);
var G__60905 = null;
var G__60906 = (0);
var G__60907 = (0);
seq__60365_60885 = G__60904;
chunk__60366_60886 = G__60905;
count__60367_60887 = G__60906;
i__60368_60888 = G__60907;
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
var seq__60369_60908 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__60370_60909 = null;
var count__60371_60910 = (0);
var i__60372_60911 = (0);
while(true){
if((i__60372_60911 < count__60371_60910)){
var c_60912 = chunk__60370_60909.cljs$core$IIndexed$_nth$arity$2(null,i__60372_60911);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_60912);


var G__60913 = seq__60369_60908;
var G__60914 = chunk__60370_60909;
var G__60915 = count__60371_60910;
var G__60916 = (i__60372_60911 + (1));
seq__60369_60908 = G__60913;
chunk__60370_60909 = G__60914;
count__60371_60910 = G__60915;
i__60372_60911 = G__60916;
continue;
} else {
var temp__5735__auto___60917 = cljs.core.seq(seq__60369_60908);
if(temp__5735__auto___60917){
var seq__60369_60918__$1 = temp__5735__auto___60917;
if(cljs.core.chunked_seq_QMARK_(seq__60369_60918__$1)){
var c__4556__auto___60919 = cljs.core.chunk_first(seq__60369_60918__$1);
var G__60920 = cljs.core.chunk_rest(seq__60369_60918__$1);
var G__60921 = c__4556__auto___60919;
var G__60922 = cljs.core.count(c__4556__auto___60919);
var G__60923 = (0);
seq__60369_60908 = G__60920;
chunk__60370_60909 = G__60921;
count__60371_60910 = G__60922;
i__60372_60911 = G__60923;
continue;
} else {
var c_60924 = cljs.core.first(seq__60369_60918__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_60924);


var G__60925 = cljs.core.next(seq__60369_60918__$1);
var G__60926 = null;
var G__60927 = (0);
var G__60928 = (0);
seq__60369_60908 = G__60925;
chunk__60370_60909 = G__60926;
count__60371_60910 = G__60927;
i__60372_60911 = G__60928;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq60357){
var G__60358 = cljs.core.first(seq60357);
var seq60357__$1 = cljs.core.next(seq60357);
var G__60359 = cljs.core.first(seq60357__$1);
var seq60357__$2 = cljs.core.next(seq60357__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60358,G__60359,seq60357__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__60377 = arguments.length;
switch (G__60377) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60930 = arguments.length;
var i__4737__auto___60931 = (0);
while(true){
if((i__4737__auto___60931 < len__4736__auto___60930)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60931]));

var G__60932 = (i__4737__auto___60931 + (1));
i__4737__auto___60931 = G__60932;
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
var temp__5733__auto___60933 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___60933)){
var class_list_60934 = temp__5733__auto___60933;
class_list_60934.remove(c__$1);
} else {
var class_name_60935 = dommy.core.class$(elem);
var new_class_name_60936 = dommy.utils.remove_class_str(class_name_60935,c__$1);
if((class_name_60935 === new_class_name_60936)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_60936);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__60378 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__60379 = null;
var count__60380 = (0);
var i__60381 = (0);
while(true){
if((i__60381 < count__60380)){
var c = chunk__60379.cljs$core$IIndexed$_nth$arity$2(null,i__60381);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__60937 = seq__60378;
var G__60938 = chunk__60379;
var G__60939 = count__60380;
var G__60940 = (i__60381 + (1));
seq__60378 = G__60937;
chunk__60379 = G__60938;
count__60380 = G__60939;
i__60381 = G__60940;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60378);
if(temp__5735__auto__){
var seq__60378__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60378__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60378__$1);
var G__60941 = cljs.core.chunk_rest(seq__60378__$1);
var G__60942 = c__4556__auto__;
var G__60943 = cljs.core.count(c__4556__auto__);
var G__60944 = (0);
seq__60378 = G__60941;
chunk__60379 = G__60942;
count__60380 = G__60943;
i__60381 = G__60944;
continue;
} else {
var c = cljs.core.first(seq__60378__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__60945 = cljs.core.next(seq__60378__$1);
var G__60946 = null;
var G__60947 = (0);
var G__60948 = (0);
seq__60378 = G__60945;
chunk__60379 = G__60946;
count__60380 = G__60947;
i__60381 = G__60948;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq60374){
var G__60375 = cljs.core.first(seq60374);
var seq60374__$1 = cljs.core.next(seq60374);
var G__60376 = cljs.core.first(seq60374__$1);
var seq60374__$2 = cljs.core.next(seq60374__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60375,G__60376,seq60374__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__60383 = arguments.length;
switch (G__60383) {
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
var temp__5733__auto___60950 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___60950)){
var class_list_60951 = temp__5733__auto___60950;
class_list_60951.toggle(c__$1);
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
var G__60386 = arguments.length;
switch (G__60386) {
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
var G__60390 = arguments.length;
switch (G__60390) {
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
var G__60395 = arguments.length;
switch (G__60395) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60955 = arguments.length;
var i__4737__auto___60956 = (0);
while(true){
if((i__4737__auto___60956 < len__4736__auto___60955)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60956]));

var G__60957 = (i__4737__auto___60956 + (1));
i__4737__auto___60956 = G__60957;
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
var G__60396 = parent;
G__60396.appendChild(child);

return G__60396;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__60397_60958 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__60398_60959 = null;
var count__60399_60960 = (0);
var i__60400_60961 = (0);
while(true){
if((i__60400_60961 < count__60399_60960)){
var c_60962 = chunk__60398_60959.cljs$core$IIndexed$_nth$arity$2(null,i__60400_60961);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_60962);


var G__60964 = seq__60397_60958;
var G__60965 = chunk__60398_60959;
var G__60966 = count__60399_60960;
var G__60967 = (i__60400_60961 + (1));
seq__60397_60958 = G__60964;
chunk__60398_60959 = G__60965;
count__60399_60960 = G__60966;
i__60400_60961 = G__60967;
continue;
} else {
var temp__5735__auto___60968 = cljs.core.seq(seq__60397_60958);
if(temp__5735__auto___60968){
var seq__60397_60969__$1 = temp__5735__auto___60968;
if(cljs.core.chunked_seq_QMARK_(seq__60397_60969__$1)){
var c__4556__auto___60970 = cljs.core.chunk_first(seq__60397_60969__$1);
var G__60971 = cljs.core.chunk_rest(seq__60397_60969__$1);
var G__60972 = c__4556__auto___60970;
var G__60973 = cljs.core.count(c__4556__auto___60970);
var G__60974 = (0);
seq__60397_60958 = G__60971;
chunk__60398_60959 = G__60972;
count__60399_60960 = G__60973;
i__60400_60961 = G__60974;
continue;
} else {
var c_60976 = cljs.core.first(seq__60397_60969__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_60976);


var G__60977 = cljs.core.next(seq__60397_60969__$1);
var G__60978 = null;
var G__60979 = (0);
var G__60980 = (0);
seq__60397_60958 = G__60977;
chunk__60398_60959 = G__60978;
count__60399_60960 = G__60979;
i__60400_60961 = G__60980;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq60392){
var G__60393 = cljs.core.first(seq60392);
var seq60392__$1 = cljs.core.next(seq60392);
var G__60394 = cljs.core.first(seq60392__$1);
var seq60392__$2 = cljs.core.next(seq60392__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60393,G__60394,seq60392__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__60405 = arguments.length;
switch (G__60405) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60982 = arguments.length;
var i__4737__auto___60983 = (0);
while(true){
if((i__4737__auto___60983 < len__4736__auto___60982)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60983]));

var G__60984 = (i__4737__auto___60983 + (1));
i__4737__auto___60983 = G__60984;
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
var G__60406 = parent;
G__60406.insertBefore(child,parent.firstChild);

return G__60406;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__60407_60986 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__60408_60987 = null;
var count__60409_60988 = (0);
var i__60410_60989 = (0);
while(true){
if((i__60410_60989 < count__60409_60988)){
var c_60992 = chunk__60408_60987.cljs$core$IIndexed$_nth$arity$2(null,i__60410_60989);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_60992);


var G__60993 = seq__60407_60986;
var G__60994 = chunk__60408_60987;
var G__60995 = count__60409_60988;
var G__60996 = (i__60410_60989 + (1));
seq__60407_60986 = G__60993;
chunk__60408_60987 = G__60994;
count__60409_60988 = G__60995;
i__60410_60989 = G__60996;
continue;
} else {
var temp__5735__auto___60998 = cljs.core.seq(seq__60407_60986);
if(temp__5735__auto___60998){
var seq__60407_60999__$1 = temp__5735__auto___60998;
if(cljs.core.chunked_seq_QMARK_(seq__60407_60999__$1)){
var c__4556__auto___61000 = cljs.core.chunk_first(seq__60407_60999__$1);
var G__61001 = cljs.core.chunk_rest(seq__60407_60999__$1);
var G__61002 = c__4556__auto___61000;
var G__61003 = cljs.core.count(c__4556__auto___61000);
var G__61004 = (0);
seq__60407_60986 = G__61001;
chunk__60408_60987 = G__61002;
count__60409_60988 = G__61003;
i__60410_60989 = G__61004;
continue;
} else {
var c_61005 = cljs.core.first(seq__60407_60999__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_61005);


var G__61006 = cljs.core.next(seq__60407_60999__$1);
var G__61007 = null;
var G__61008 = (0);
var G__61009 = (0);
seq__60407_60986 = G__61006;
chunk__60408_60987 = G__61007;
count__60409_60988 = G__61008;
i__60410_60989 = G__61009;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq60402){
var G__60403 = cljs.core.first(seq60402);
var seq60402__$1 = cljs.core.next(seq60402);
var G__60404 = cljs.core.first(seq60402__$1);
var seq60402__$2 = cljs.core.next(seq60402__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60403,G__60404,seq60402__$2);
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
var temp__5733__auto___61015 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___61015)){
var next_61016 = temp__5733__auto___61015;
dommy.core.insert_before_BANG_(elem,next_61016);
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
var G__60412 = arguments.length;
switch (G__60412) {
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
var G__60413 = p;
G__60413.removeChild(elem);

return G__60413;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60414){
var vec__60415 = p__60414;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60415,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60415,(1),null);
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

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq60418){
var G__60419 = cljs.core.first(seq60418);
var seq60418__$1 = cljs.core.next(seq60418);
var G__60420 = cljs.core.first(seq60418__$1);
var seq60418__$2 = cljs.core.next(seq60418__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60419,G__60420,seq60418__$2);
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
var len__4736__auto___61039 = arguments.length;
var i__4737__auto___61040 = (0);
while(true){
if((i__4737__auto___61040 < len__4736__auto___61039)){
args__4742__auto__.push((arguments[i__4737__auto___61040]));

var G__61041 = (i__4737__auto___61040 + (1));
i__4737__auto___61040 = G__61041;
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

var vec__60425_61042 = dommy.core.elem_and_selector(elem_sel);
var elem_61043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60425_61042,(0),null);
var selector_61044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60425_61042,(1),null);
var seq__60428_61045 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__60436_61046 = null;
var count__60437_61047 = (0);
var i__60438_61048 = (0);
while(true){
if((i__60438_61048 < count__60437_61047)){
var vec__60494_61049 = chunk__60436_61046.cljs$core$IIndexed$_nth$arity$2(null,i__60438_61048);
var orig_type_61050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60494_61049,(0),null);
var f_61051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60494_61049,(1),null);
var seq__60439_61052 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61050,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61050,cljs.core.identity])));
var chunk__60441_61053 = null;
var count__60442_61054 = (0);
var i__60443_61055 = (0);
while(true){
if((i__60443_61055 < count__60442_61054)){
var vec__60507_61056 = chunk__60441_61053.cljs$core$IIndexed$_nth$arity$2(null,i__60443_61055);
var actual_type_61057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60507_61056,(0),null);
var factory_61058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60507_61056,(1),null);
var canonical_f_61059 = (function (){var G__60511 = (factory_61058.cljs$core$IFn$_invoke$arity$1 ? factory_61058.cljs$core$IFn$_invoke$arity$1(f_61051) : factory_61058.call(null,f_61051));
var fexpr__60510 = (cljs.core.truth_(selector_61044)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61043,selector_61044):cljs.core.identity);
return (fexpr__60510.cljs$core$IFn$_invoke$arity$1 ? fexpr__60510.cljs$core$IFn$_invoke$arity$1(G__60511) : fexpr__60510.call(null,G__60511));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61043,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61044,actual_type_61057,f_61051], null),canonical_f_61059], 0));

if(cljs.core.truth_(elem_61043.addEventListener)){
elem_61043.addEventListener(cljs.core.name(actual_type_61057),canonical_f_61059);
} else {
elem_61043.attachEvent(cljs.core.name(actual_type_61057),canonical_f_61059);
}


var G__61060 = seq__60439_61052;
var G__61061 = chunk__60441_61053;
var G__61062 = count__60442_61054;
var G__61063 = (i__60443_61055 + (1));
seq__60439_61052 = G__61060;
chunk__60441_61053 = G__61061;
count__60442_61054 = G__61062;
i__60443_61055 = G__61063;
continue;
} else {
var temp__5735__auto___61064 = cljs.core.seq(seq__60439_61052);
if(temp__5735__auto___61064){
var seq__60439_61065__$1 = temp__5735__auto___61064;
if(cljs.core.chunked_seq_QMARK_(seq__60439_61065__$1)){
var c__4556__auto___61066 = cljs.core.chunk_first(seq__60439_61065__$1);
var G__61067 = cljs.core.chunk_rest(seq__60439_61065__$1);
var G__61068 = c__4556__auto___61066;
var G__61069 = cljs.core.count(c__4556__auto___61066);
var G__61070 = (0);
seq__60439_61052 = G__61067;
chunk__60441_61053 = G__61068;
count__60442_61054 = G__61069;
i__60443_61055 = G__61070;
continue;
} else {
var vec__60512_61071 = cljs.core.first(seq__60439_61065__$1);
var actual_type_61072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60512_61071,(0),null);
var factory_61073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60512_61071,(1),null);
var canonical_f_61074 = (function (){var G__60516 = (factory_61073.cljs$core$IFn$_invoke$arity$1 ? factory_61073.cljs$core$IFn$_invoke$arity$1(f_61051) : factory_61073.call(null,f_61051));
var fexpr__60515 = (cljs.core.truth_(selector_61044)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61043,selector_61044):cljs.core.identity);
return (fexpr__60515.cljs$core$IFn$_invoke$arity$1 ? fexpr__60515.cljs$core$IFn$_invoke$arity$1(G__60516) : fexpr__60515.call(null,G__60516));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61043,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61044,actual_type_61072,f_61051], null),canonical_f_61074], 0));

if(cljs.core.truth_(elem_61043.addEventListener)){
elem_61043.addEventListener(cljs.core.name(actual_type_61072),canonical_f_61074);
} else {
elem_61043.attachEvent(cljs.core.name(actual_type_61072),canonical_f_61074);
}


var G__61075 = cljs.core.next(seq__60439_61065__$1);
var G__61076 = null;
var G__61077 = (0);
var G__61078 = (0);
seq__60439_61052 = G__61075;
chunk__60441_61053 = G__61076;
count__60442_61054 = G__61077;
i__60443_61055 = G__61078;
continue;
}
} else {
}
}
break;
}

var G__61079 = seq__60428_61045;
var G__61080 = chunk__60436_61046;
var G__61081 = count__60437_61047;
var G__61082 = (i__60438_61048 + (1));
seq__60428_61045 = G__61079;
chunk__60436_61046 = G__61080;
count__60437_61047 = G__61081;
i__60438_61048 = G__61082;
continue;
} else {
var temp__5735__auto___61083 = cljs.core.seq(seq__60428_61045);
if(temp__5735__auto___61083){
var seq__60428_61084__$1 = temp__5735__auto___61083;
if(cljs.core.chunked_seq_QMARK_(seq__60428_61084__$1)){
var c__4556__auto___61085 = cljs.core.chunk_first(seq__60428_61084__$1);
var G__61086 = cljs.core.chunk_rest(seq__60428_61084__$1);
var G__61087 = c__4556__auto___61085;
var G__61088 = cljs.core.count(c__4556__auto___61085);
var G__61089 = (0);
seq__60428_61045 = G__61086;
chunk__60436_61046 = G__61087;
count__60437_61047 = G__61088;
i__60438_61048 = G__61089;
continue;
} else {
var vec__60517_61090 = cljs.core.first(seq__60428_61084__$1);
var orig_type_61091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60517_61090,(0),null);
var f_61092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60517_61090,(1),null);
var seq__60429_61093 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61091,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61091,cljs.core.identity])));
var chunk__60432_61094 = null;
var count__60433_61095 = (0);
var i__60434_61096 = (0);
while(true){
if((i__60434_61096 < count__60433_61095)){
var vec__60534_61097 = chunk__60432_61094.cljs$core$IIndexed$_nth$arity$2(null,i__60434_61096);
var actual_type_61098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60534_61097,(0),null);
var factory_61099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60534_61097,(1),null);
var canonical_f_61100 = (function (){var G__60538 = (factory_61099.cljs$core$IFn$_invoke$arity$1 ? factory_61099.cljs$core$IFn$_invoke$arity$1(f_61092) : factory_61099.call(null,f_61092));
var fexpr__60537 = (cljs.core.truth_(selector_61044)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61043,selector_61044):cljs.core.identity);
return (fexpr__60537.cljs$core$IFn$_invoke$arity$1 ? fexpr__60537.cljs$core$IFn$_invoke$arity$1(G__60538) : fexpr__60537.call(null,G__60538));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61043,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61044,actual_type_61098,f_61092], null),canonical_f_61100], 0));

if(cljs.core.truth_(elem_61043.addEventListener)){
elem_61043.addEventListener(cljs.core.name(actual_type_61098),canonical_f_61100);
} else {
elem_61043.attachEvent(cljs.core.name(actual_type_61098),canonical_f_61100);
}


var G__61101 = seq__60429_61093;
var G__61102 = chunk__60432_61094;
var G__61103 = count__60433_61095;
var G__61104 = (i__60434_61096 + (1));
seq__60429_61093 = G__61101;
chunk__60432_61094 = G__61102;
count__60433_61095 = G__61103;
i__60434_61096 = G__61104;
continue;
} else {
var temp__5735__auto___61105__$1 = cljs.core.seq(seq__60429_61093);
if(temp__5735__auto___61105__$1){
var seq__60429_61106__$1 = temp__5735__auto___61105__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60429_61106__$1)){
var c__4556__auto___61107 = cljs.core.chunk_first(seq__60429_61106__$1);
var G__61108 = cljs.core.chunk_rest(seq__60429_61106__$1);
var G__61109 = c__4556__auto___61107;
var G__61110 = cljs.core.count(c__4556__auto___61107);
var G__61111 = (0);
seq__60429_61093 = G__61108;
chunk__60432_61094 = G__61109;
count__60433_61095 = G__61110;
i__60434_61096 = G__61111;
continue;
} else {
var vec__60539_61112 = cljs.core.first(seq__60429_61106__$1);
var actual_type_61113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60539_61112,(0),null);
var factory_61114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60539_61112,(1),null);
var canonical_f_61115 = (function (){var G__60543 = (factory_61114.cljs$core$IFn$_invoke$arity$1 ? factory_61114.cljs$core$IFn$_invoke$arity$1(f_61092) : factory_61114.call(null,f_61092));
var fexpr__60542 = (cljs.core.truth_(selector_61044)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61043,selector_61044):cljs.core.identity);
return (fexpr__60542.cljs$core$IFn$_invoke$arity$1 ? fexpr__60542.cljs$core$IFn$_invoke$arity$1(G__60543) : fexpr__60542.call(null,G__60543));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61043,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61044,actual_type_61113,f_61092], null),canonical_f_61115], 0));

if(cljs.core.truth_(elem_61043.addEventListener)){
elem_61043.addEventListener(cljs.core.name(actual_type_61113),canonical_f_61115);
} else {
elem_61043.attachEvent(cljs.core.name(actual_type_61113),canonical_f_61115);
}


var G__61116 = cljs.core.next(seq__60429_61106__$1);
var G__61117 = null;
var G__61118 = (0);
var G__61119 = (0);
seq__60429_61093 = G__61116;
chunk__60432_61094 = G__61117;
count__60433_61095 = G__61118;
i__60434_61096 = G__61119;
continue;
}
} else {
}
}
break;
}

var G__61120 = cljs.core.next(seq__60428_61084__$1);
var G__61121 = null;
var G__61122 = (0);
var G__61123 = (0);
seq__60428_61045 = G__61120;
chunk__60436_61046 = G__61121;
count__60437_61047 = G__61122;
i__60438_61048 = G__61123;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq60421){
var G__60422 = cljs.core.first(seq60421);
var seq60421__$1 = cljs.core.next(seq60421);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60422,seq60421__$1);
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
var len__4736__auto___61124 = arguments.length;
var i__4737__auto___61125 = (0);
while(true){
if((i__4737__auto___61125 < len__4736__auto___61124)){
args__4742__auto__.push((arguments[i__4737__auto___61125]));

var G__61126 = (i__4737__auto___61125 + (1));
i__4737__auto___61125 = G__61126;
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

var vec__60549_61127 = dommy.core.elem_and_selector(elem_sel);
var elem_61128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60549_61127,(0),null);
var selector_61129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60549_61127,(1),null);
var seq__60556_61130 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__60563_61131 = null;
var count__60564_61132 = (0);
var i__60565_61133 = (0);
while(true){
if((i__60565_61133 < count__60564_61132)){
var vec__60607_61134 = chunk__60563_61131.cljs$core$IIndexed$_nth$arity$2(null,i__60565_61133);
var orig_type_61135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60607_61134,(0),null);
var f_61136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60607_61134,(1),null);
var seq__60566_61137 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61135,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61135,cljs.core.identity])));
var chunk__60568_61138 = null;
var count__60569_61139 = (0);
var i__60570_61140 = (0);
while(true){
if((i__60570_61140 < count__60569_61139)){
var vec__60617_61141 = chunk__60568_61138.cljs$core$IIndexed$_nth$arity$2(null,i__60570_61140);
var actual_type_61142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60617_61141,(0),null);
var __61143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60617_61141,(1),null);
var keys_61144 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61129,actual_type_61142,f_61136], null);
var canonical_f_61145 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61128),keys_61144);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61128,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61144], 0));

if(cljs.core.truth_(elem_61128.removeEventListener)){
elem_61128.removeEventListener(cljs.core.name(actual_type_61142),canonical_f_61145);
} else {
elem_61128.detachEvent(cljs.core.name(actual_type_61142),canonical_f_61145);
}


var G__61146 = seq__60566_61137;
var G__61147 = chunk__60568_61138;
var G__61148 = count__60569_61139;
var G__61149 = (i__60570_61140 + (1));
seq__60566_61137 = G__61146;
chunk__60568_61138 = G__61147;
count__60569_61139 = G__61148;
i__60570_61140 = G__61149;
continue;
} else {
var temp__5735__auto___61150 = cljs.core.seq(seq__60566_61137);
if(temp__5735__auto___61150){
var seq__60566_61151__$1 = temp__5735__auto___61150;
if(cljs.core.chunked_seq_QMARK_(seq__60566_61151__$1)){
var c__4556__auto___61152 = cljs.core.chunk_first(seq__60566_61151__$1);
var G__61153 = cljs.core.chunk_rest(seq__60566_61151__$1);
var G__61154 = c__4556__auto___61152;
var G__61155 = cljs.core.count(c__4556__auto___61152);
var G__61156 = (0);
seq__60566_61137 = G__61153;
chunk__60568_61138 = G__61154;
count__60569_61139 = G__61155;
i__60570_61140 = G__61156;
continue;
} else {
var vec__60624_61157 = cljs.core.first(seq__60566_61151__$1);
var actual_type_61158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60624_61157,(0),null);
var __61159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60624_61157,(1),null);
var keys_61160 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61129,actual_type_61158,f_61136], null);
var canonical_f_61161 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61128),keys_61160);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61128,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61160], 0));

if(cljs.core.truth_(elem_61128.removeEventListener)){
elem_61128.removeEventListener(cljs.core.name(actual_type_61158),canonical_f_61161);
} else {
elem_61128.detachEvent(cljs.core.name(actual_type_61158),canonical_f_61161);
}


var G__61162 = cljs.core.next(seq__60566_61151__$1);
var G__61163 = null;
var G__61164 = (0);
var G__61165 = (0);
seq__60566_61137 = G__61162;
chunk__60568_61138 = G__61163;
count__60569_61139 = G__61164;
i__60570_61140 = G__61165;
continue;
}
} else {
}
}
break;
}

var G__61166 = seq__60556_61130;
var G__61167 = chunk__60563_61131;
var G__61168 = count__60564_61132;
var G__61169 = (i__60565_61133 + (1));
seq__60556_61130 = G__61166;
chunk__60563_61131 = G__61167;
count__60564_61132 = G__61168;
i__60565_61133 = G__61169;
continue;
} else {
var temp__5735__auto___61170 = cljs.core.seq(seq__60556_61130);
if(temp__5735__auto___61170){
var seq__60556_61171__$1 = temp__5735__auto___61170;
if(cljs.core.chunked_seq_QMARK_(seq__60556_61171__$1)){
var c__4556__auto___61172 = cljs.core.chunk_first(seq__60556_61171__$1);
var G__61173 = cljs.core.chunk_rest(seq__60556_61171__$1);
var G__61174 = c__4556__auto___61172;
var G__61175 = cljs.core.count(c__4556__auto___61172);
var G__61176 = (0);
seq__60556_61130 = G__61173;
chunk__60563_61131 = G__61174;
count__60564_61132 = G__61175;
i__60565_61133 = G__61176;
continue;
} else {
var vec__60633_61177 = cljs.core.first(seq__60556_61171__$1);
var orig_type_61178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60633_61177,(0),null);
var f_61179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60633_61177,(1),null);
var seq__60557_61180 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61178,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61178,cljs.core.identity])));
var chunk__60559_61181 = null;
var count__60560_61182 = (0);
var i__60561_61183 = (0);
while(true){
if((i__60561_61183 < count__60560_61182)){
var vec__60659_61184 = chunk__60559_61181.cljs$core$IIndexed$_nth$arity$2(null,i__60561_61183);
var actual_type_61185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60659_61184,(0),null);
var __61186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60659_61184,(1),null);
var keys_61187 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61129,actual_type_61185,f_61179], null);
var canonical_f_61188 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61128),keys_61187);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61128,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61187], 0));

if(cljs.core.truth_(elem_61128.removeEventListener)){
elem_61128.removeEventListener(cljs.core.name(actual_type_61185),canonical_f_61188);
} else {
elem_61128.detachEvent(cljs.core.name(actual_type_61185),canonical_f_61188);
}


var G__61189 = seq__60557_61180;
var G__61190 = chunk__60559_61181;
var G__61191 = count__60560_61182;
var G__61192 = (i__60561_61183 + (1));
seq__60557_61180 = G__61189;
chunk__60559_61181 = G__61190;
count__60560_61182 = G__61191;
i__60561_61183 = G__61192;
continue;
} else {
var temp__5735__auto___61193__$1 = cljs.core.seq(seq__60557_61180);
if(temp__5735__auto___61193__$1){
var seq__60557_61194__$1 = temp__5735__auto___61193__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60557_61194__$1)){
var c__4556__auto___61195 = cljs.core.chunk_first(seq__60557_61194__$1);
var G__61196 = cljs.core.chunk_rest(seq__60557_61194__$1);
var G__61197 = c__4556__auto___61195;
var G__61198 = cljs.core.count(c__4556__auto___61195);
var G__61199 = (0);
seq__60557_61180 = G__61196;
chunk__60559_61181 = G__61197;
count__60560_61182 = G__61198;
i__60561_61183 = G__61199;
continue;
} else {
var vec__60674_61200 = cljs.core.first(seq__60557_61194__$1);
var actual_type_61201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60674_61200,(0),null);
var __61202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60674_61200,(1),null);
var keys_61203 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61129,actual_type_61201,f_61179], null);
var canonical_f_61204 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61128),keys_61203);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61128,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61203], 0));

if(cljs.core.truth_(elem_61128.removeEventListener)){
elem_61128.removeEventListener(cljs.core.name(actual_type_61201),canonical_f_61204);
} else {
elem_61128.detachEvent(cljs.core.name(actual_type_61201),canonical_f_61204);
}


var G__61205 = cljs.core.next(seq__60557_61194__$1);
var G__61206 = null;
var G__61207 = (0);
var G__61208 = (0);
seq__60557_61180 = G__61205;
chunk__60559_61181 = G__61206;
count__60560_61182 = G__61207;
i__60561_61183 = G__61208;
continue;
}
} else {
}
}
break;
}

var G__61209 = cljs.core.next(seq__60556_61171__$1);
var G__61210 = null;
var G__61211 = (0);
var G__61212 = (0);
seq__60556_61130 = G__61209;
chunk__60563_61131 = G__61210;
count__60564_61132 = G__61211;
i__60565_61133 = G__61212;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq60547){
var G__60548 = cljs.core.first(seq60547);
var seq60547__$1 = cljs.core.next(seq60547);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60548,seq60547__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61213 = arguments.length;
var i__4737__auto___61214 = (0);
while(true){
if((i__4737__auto___61214 < len__4736__auto___61213)){
args__4742__auto__.push((arguments[i__4737__auto___61214]));

var G__61215 = (i__4737__auto___61214 + (1));
i__4737__auto___61214 = G__61215;
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

var vec__60690_61216 = dommy.core.elem_and_selector(elem_sel);
var elem_61217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60690_61216,(0),null);
var selector_61218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60690_61216,(1),null);
var seq__60695_61219 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__60696_61220 = null;
var count__60697_61221 = (0);
var i__60698_61222 = (0);
while(true){
if((i__60698_61222 < count__60697_61221)){
var vec__60706_61223 = chunk__60696_61220.cljs$core$IIndexed$_nth$arity$2(null,i__60698_61222);
var type_61224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60706_61223,(0),null);
var f_61225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60706_61223,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61224,((function (seq__60695_61219,chunk__60696_61220,count__60697_61221,i__60698_61222,vec__60706_61223,type_61224,f_61225,vec__60690_61216,elem_61217,selector_61218){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61224,dommy$core$this_fn], 0));

return (f_61225.cljs$core$IFn$_invoke$arity$1 ? f_61225.cljs$core$IFn$_invoke$arity$1(e) : f_61225.call(null,e));
});})(seq__60695_61219,chunk__60696_61220,count__60697_61221,i__60698_61222,vec__60706_61223,type_61224,f_61225,vec__60690_61216,elem_61217,selector_61218))
], 0));


var G__61226 = seq__60695_61219;
var G__61227 = chunk__60696_61220;
var G__61228 = count__60697_61221;
var G__61229 = (i__60698_61222 + (1));
seq__60695_61219 = G__61226;
chunk__60696_61220 = G__61227;
count__60697_61221 = G__61228;
i__60698_61222 = G__61229;
continue;
} else {
var temp__5735__auto___61230 = cljs.core.seq(seq__60695_61219);
if(temp__5735__auto___61230){
var seq__60695_61231__$1 = temp__5735__auto___61230;
if(cljs.core.chunked_seq_QMARK_(seq__60695_61231__$1)){
var c__4556__auto___61232 = cljs.core.chunk_first(seq__60695_61231__$1);
var G__61233 = cljs.core.chunk_rest(seq__60695_61231__$1);
var G__61234 = c__4556__auto___61232;
var G__61235 = cljs.core.count(c__4556__auto___61232);
var G__61236 = (0);
seq__60695_61219 = G__61233;
chunk__60696_61220 = G__61234;
count__60697_61221 = G__61235;
i__60698_61222 = G__61236;
continue;
} else {
var vec__60710_61239 = cljs.core.first(seq__60695_61231__$1);
var type_61240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60710_61239,(0),null);
var f_61241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60710_61239,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61240,((function (seq__60695_61219,chunk__60696_61220,count__60697_61221,i__60698_61222,vec__60710_61239,type_61240,f_61241,seq__60695_61231__$1,temp__5735__auto___61230,vec__60690_61216,elem_61217,selector_61218){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61240,dommy$core$this_fn], 0));

return (f_61241.cljs$core$IFn$_invoke$arity$1 ? f_61241.cljs$core$IFn$_invoke$arity$1(e) : f_61241.call(null,e));
});})(seq__60695_61219,chunk__60696_61220,count__60697_61221,i__60698_61222,vec__60710_61239,type_61240,f_61241,seq__60695_61231__$1,temp__5735__auto___61230,vec__60690_61216,elem_61217,selector_61218))
], 0));


var G__61244 = cljs.core.next(seq__60695_61231__$1);
var G__61245 = null;
var G__61246 = (0);
var G__61247 = (0);
seq__60695_61219 = G__61244;
chunk__60696_61220 = G__61245;
count__60697_61221 = G__61246;
i__60698_61222 = G__61247;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq60687){
var G__60688 = cljs.core.first(seq60687);
var seq60687__$1 = cljs.core.next(seq60687);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60688,seq60687__$1);
}));


//# sourceMappingURL=dommy.core.js.map
