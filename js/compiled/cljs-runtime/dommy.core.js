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
var G__60263 = arguments.length;
switch (G__60263) {
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
var G__60265 = arguments.length;
switch (G__60265) {
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
var G__60268 = arguments.length;
switch (G__60268) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__60266_SHARP_){
return (!((p1__60266_SHARP_ === base)));
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
var len__4736__auto___60719 = arguments.length;
var i__4737__auto___60720 = (0);
while(true){
if((i__4737__auto___60720 < len__4736__auto___60719)){
args__4742__auto__.push((arguments[i__4737__auto___60720]));

var G__60721 = (i__4737__auto___60720 + (1));
i__4737__auto___60720 = G__60721;
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
var seq__60271_60722 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__60272_60723 = null;
var count__60273_60724 = (0);
var i__60274_60725 = (0);
while(true){
if((i__60274_60725 < count__60273_60724)){
var vec__60281_60727 = chunk__60272_60723.cljs$core$IIndexed$_nth$arity$2(null,i__60274_60725);
var k_60728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60281_60727,(0),null);
var v_60729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60281_60727,(1),null);
style.setProperty(dommy.utils.as_str(k_60728),v_60729);


var G__60730 = seq__60271_60722;
var G__60731 = chunk__60272_60723;
var G__60732 = count__60273_60724;
var G__60733 = (i__60274_60725 + (1));
seq__60271_60722 = G__60730;
chunk__60272_60723 = G__60731;
count__60273_60724 = G__60732;
i__60274_60725 = G__60733;
continue;
} else {
var temp__5735__auto___60734 = cljs.core.seq(seq__60271_60722);
if(temp__5735__auto___60734){
var seq__60271_60735__$1 = temp__5735__auto___60734;
if(cljs.core.chunked_seq_QMARK_(seq__60271_60735__$1)){
var c__4556__auto___60736 = cljs.core.chunk_first(seq__60271_60735__$1);
var G__60737 = cljs.core.chunk_rest(seq__60271_60735__$1);
var G__60738 = c__4556__auto___60736;
var G__60739 = cljs.core.count(c__4556__auto___60736);
var G__60740 = (0);
seq__60271_60722 = G__60737;
chunk__60272_60723 = G__60738;
count__60273_60724 = G__60739;
i__60274_60725 = G__60740;
continue;
} else {
var vec__60284_60741 = cljs.core.first(seq__60271_60735__$1);
var k_60742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60284_60741,(0),null);
var v_60743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60284_60741,(1),null);
style.setProperty(dommy.utils.as_str(k_60742),v_60743);


var G__60745 = cljs.core.next(seq__60271_60735__$1);
var G__60746 = null;
var G__60747 = (0);
var G__60748 = (0);
seq__60271_60722 = G__60745;
chunk__60272_60723 = G__60746;
count__60273_60724 = G__60747;
i__60274_60725 = G__60748;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq60269){
var G__60270 = cljs.core.first(seq60269);
var seq60269__$1 = cljs.core.next(seq60269);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60270,seq60269__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60749 = arguments.length;
var i__4737__auto___60750 = (0);
while(true){
if((i__4737__auto___60750 < len__4736__auto___60749)){
args__4742__auto__.push((arguments[i__4737__auto___60750]));

var G__60751 = (i__4737__auto___60750 + (1));
i__4737__auto___60750 = G__60751;
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
var seq__60291_60752 = cljs.core.seq(keywords);
var chunk__60292_60753 = null;
var count__60293_60754 = (0);
var i__60294_60755 = (0);
while(true){
if((i__60294_60755 < count__60293_60754)){
var kw_60756 = chunk__60292_60753.cljs$core$IIndexed$_nth$arity$2(null,i__60294_60755);
style.removeProperty(dommy.utils.as_str(kw_60756));


var G__60757 = seq__60291_60752;
var G__60758 = chunk__60292_60753;
var G__60759 = count__60293_60754;
var G__60760 = (i__60294_60755 + (1));
seq__60291_60752 = G__60757;
chunk__60292_60753 = G__60758;
count__60293_60754 = G__60759;
i__60294_60755 = G__60760;
continue;
} else {
var temp__5735__auto___60761 = cljs.core.seq(seq__60291_60752);
if(temp__5735__auto___60761){
var seq__60291_60762__$1 = temp__5735__auto___60761;
if(cljs.core.chunked_seq_QMARK_(seq__60291_60762__$1)){
var c__4556__auto___60763 = cljs.core.chunk_first(seq__60291_60762__$1);
var G__60764 = cljs.core.chunk_rest(seq__60291_60762__$1);
var G__60765 = c__4556__auto___60763;
var G__60766 = cljs.core.count(c__4556__auto___60763);
var G__60767 = (0);
seq__60291_60752 = G__60764;
chunk__60292_60753 = G__60765;
count__60293_60754 = G__60766;
i__60294_60755 = G__60767;
continue;
} else {
var kw_60768 = cljs.core.first(seq__60291_60762__$1);
style.removeProperty(dommy.utils.as_str(kw_60768));


var G__60769 = cljs.core.next(seq__60291_60762__$1);
var G__60770 = null;
var G__60771 = (0);
var G__60772 = (0);
seq__60291_60752 = G__60769;
chunk__60292_60753 = G__60770;
count__60293_60754 = G__60771;
i__60294_60755 = G__60772;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq60288){
var G__60289 = cljs.core.first(seq60288);
var seq60288__$1 = cljs.core.next(seq60288);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60289,seq60288__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60773 = arguments.length;
var i__4737__auto___60774 = (0);
while(true){
if((i__4737__auto___60774 < len__4736__auto___60773)){
args__4742__auto__.push((arguments[i__4737__auto___60774]));

var G__60775 = (i__4737__auto___60774 + (1));
i__4737__auto___60774 = G__60775;
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

var seq__60301_60776 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__60302_60777 = null;
var count__60303_60778 = (0);
var i__60304_60779 = (0);
while(true){
if((i__60304_60779 < count__60303_60778)){
var vec__60313_60780 = chunk__60302_60777.cljs$core$IIndexed$_nth$arity$2(null,i__60304_60779);
var k_60781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60313_60780,(0),null);
var v_60782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60313_60780,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_60781,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_60782),"px"].join('')], 0));


var G__60783 = seq__60301_60776;
var G__60784 = chunk__60302_60777;
var G__60785 = count__60303_60778;
var G__60786 = (i__60304_60779 + (1));
seq__60301_60776 = G__60783;
chunk__60302_60777 = G__60784;
count__60303_60778 = G__60785;
i__60304_60779 = G__60786;
continue;
} else {
var temp__5735__auto___60787 = cljs.core.seq(seq__60301_60776);
if(temp__5735__auto___60787){
var seq__60301_60788__$1 = temp__5735__auto___60787;
if(cljs.core.chunked_seq_QMARK_(seq__60301_60788__$1)){
var c__4556__auto___60789 = cljs.core.chunk_first(seq__60301_60788__$1);
var G__60790 = cljs.core.chunk_rest(seq__60301_60788__$1);
var G__60791 = c__4556__auto___60789;
var G__60792 = cljs.core.count(c__4556__auto___60789);
var G__60793 = (0);
seq__60301_60776 = G__60790;
chunk__60302_60777 = G__60791;
count__60303_60778 = G__60792;
i__60304_60779 = G__60793;
continue;
} else {
var vec__60317_60794 = cljs.core.first(seq__60301_60788__$1);
var k_60795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60317_60794,(0),null);
var v_60796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60317_60794,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_60795,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_60796),"px"].join('')], 0));


var G__60797 = cljs.core.next(seq__60301_60788__$1);
var G__60798 = null;
var G__60799 = (0);
var G__60800 = (0);
seq__60301_60776 = G__60797;
chunk__60302_60777 = G__60798;
count__60303_60778 = G__60799;
i__60304_60779 = G__60800;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq60297){
var G__60298 = cljs.core.first(seq60297);
var seq60297__$1 = cljs.core.next(seq60297);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60298,seq60297__$1);
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
var G__60327 = arguments.length;
switch (G__60327) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60802 = arguments.length;
var i__4737__auto___60803 = (0);
while(true){
if((i__4737__auto___60803 < len__4736__auto___60802)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60803]));

var G__60804 = (i__4737__auto___60803 + (1));
i__4737__auto___60803 = G__60804;
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
var G__60330 = elem;
(G__60330[k__$1] = v);

return G__60330;
} else {
var G__60331 = elem;
G__60331.setAttribute(k__$1,v);

return G__60331;
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

var seq__60333_60805 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__60334_60806 = null;
var count__60335_60807 = (0);
var i__60336_60808 = (0);
while(true){
if((i__60336_60808 < count__60335_60807)){
var vec__60343_60809 = chunk__60334_60806.cljs$core$IIndexed$_nth$arity$2(null,i__60336_60808);
var k_60810__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60343_60809,(0),null);
var v_60811__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60343_60809,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_60810__$1,v_60811__$1);


var G__60812 = seq__60333_60805;
var G__60813 = chunk__60334_60806;
var G__60814 = count__60335_60807;
var G__60815 = (i__60336_60808 + (1));
seq__60333_60805 = G__60812;
chunk__60334_60806 = G__60813;
count__60335_60807 = G__60814;
i__60336_60808 = G__60815;
continue;
} else {
var temp__5735__auto___60816 = cljs.core.seq(seq__60333_60805);
if(temp__5735__auto___60816){
var seq__60333_60817__$1 = temp__5735__auto___60816;
if(cljs.core.chunked_seq_QMARK_(seq__60333_60817__$1)){
var c__4556__auto___60818 = cljs.core.chunk_first(seq__60333_60817__$1);
var G__60819 = cljs.core.chunk_rest(seq__60333_60817__$1);
var G__60820 = c__4556__auto___60818;
var G__60821 = cljs.core.count(c__4556__auto___60818);
var G__60822 = (0);
seq__60333_60805 = G__60819;
chunk__60334_60806 = G__60820;
count__60335_60807 = G__60821;
i__60336_60808 = G__60822;
continue;
} else {
var vec__60346_60823 = cljs.core.first(seq__60333_60817__$1);
var k_60824__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60346_60823,(0),null);
var v_60825__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60346_60823,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_60824__$1,v_60825__$1);


var G__60826 = cljs.core.next(seq__60333_60817__$1);
var G__60827 = null;
var G__60828 = (0);
var G__60829 = (0);
seq__60333_60805 = G__60826;
chunk__60334_60806 = G__60827;
count__60335_60807 = G__60828;
i__60336_60808 = G__60829;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq60323){
var G__60324 = cljs.core.first(seq60323);
var seq60323__$1 = cljs.core.next(seq60323);
var G__60325 = cljs.core.first(seq60323__$1);
var seq60323__$2 = cljs.core.next(seq60323__$1);
var G__60326 = cljs.core.first(seq60323__$2);
var seq60323__$3 = cljs.core.next(seq60323__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60324,G__60325,G__60326,seq60323__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__60353 = arguments.length;
switch (G__60353) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60831 = arguments.length;
var i__4737__auto___60832 = (0);
while(true){
if((i__4737__auto___60832 < len__4736__auto___60831)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60832]));

var G__60833 = (i__4737__auto___60832 + (1));
i__4737__auto___60832 = G__60833;
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
var k_60834__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__60354 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__60354.cljs$core$IFn$_invoke$arity$1 ? fexpr__60354.cljs$core$IFn$_invoke$arity$1(k_60834__$1) : fexpr__60354.call(null,k_60834__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_60834__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__60355_60835 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__60356_60836 = null;
var count__60357_60837 = (0);
var i__60358_60838 = (0);
while(true){
if((i__60358_60838 < count__60357_60837)){
var k_60839__$1 = chunk__60356_60836.cljs$core$IIndexed$_nth$arity$2(null,i__60358_60838);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_60839__$1);


var G__60840 = seq__60355_60835;
var G__60841 = chunk__60356_60836;
var G__60842 = count__60357_60837;
var G__60843 = (i__60358_60838 + (1));
seq__60355_60835 = G__60840;
chunk__60356_60836 = G__60841;
count__60357_60837 = G__60842;
i__60358_60838 = G__60843;
continue;
} else {
var temp__5735__auto___60844 = cljs.core.seq(seq__60355_60835);
if(temp__5735__auto___60844){
var seq__60355_60845__$1 = temp__5735__auto___60844;
if(cljs.core.chunked_seq_QMARK_(seq__60355_60845__$1)){
var c__4556__auto___60846 = cljs.core.chunk_first(seq__60355_60845__$1);
var G__60847 = cljs.core.chunk_rest(seq__60355_60845__$1);
var G__60848 = c__4556__auto___60846;
var G__60849 = cljs.core.count(c__4556__auto___60846);
var G__60850 = (0);
seq__60355_60835 = G__60847;
chunk__60356_60836 = G__60848;
count__60357_60837 = G__60849;
i__60358_60838 = G__60850;
continue;
} else {
var k_60851__$1 = cljs.core.first(seq__60355_60845__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_60851__$1);


var G__60852 = cljs.core.next(seq__60355_60845__$1);
var G__60853 = null;
var G__60854 = (0);
var G__60855 = (0);
seq__60355_60835 = G__60852;
chunk__60356_60836 = G__60853;
count__60357_60837 = G__60854;
i__60358_60838 = G__60855;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq60350){
var G__60351 = cljs.core.first(seq60350);
var seq60350__$1 = cljs.core.next(seq60350);
var G__60352 = cljs.core.first(seq60350__$1);
var seq60350__$2 = cljs.core.next(seq60350__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60351,G__60352,seq60350__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__60360 = arguments.length;
switch (G__60360) {
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
var G__60365 = arguments.length;
switch (G__60365) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60858 = arguments.length;
var i__4737__auto___60859 = (0);
while(true){
if((i__4737__auto___60859 < len__4736__auto___60858)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60859]));

var G__60860 = (i__4737__auto___60859 + (1));
i__4737__auto___60859 = G__60860;
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
var temp__5733__auto___60861 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___60861)){
var class_list_60862 = temp__5733__auto___60861;
var seq__60366_60863 = cljs.core.seq(classes__$1);
var chunk__60367_60864 = null;
var count__60368_60865 = (0);
var i__60369_60866 = (0);
while(true){
if((i__60369_60866 < count__60368_60865)){
var c_60867 = chunk__60367_60864.cljs$core$IIndexed$_nth$arity$2(null,i__60369_60866);
class_list_60862.add(c_60867);


var G__60868 = seq__60366_60863;
var G__60869 = chunk__60367_60864;
var G__60870 = count__60368_60865;
var G__60871 = (i__60369_60866 + (1));
seq__60366_60863 = G__60868;
chunk__60367_60864 = G__60869;
count__60368_60865 = G__60870;
i__60369_60866 = G__60871;
continue;
} else {
var temp__5735__auto___60872 = cljs.core.seq(seq__60366_60863);
if(temp__5735__auto___60872){
var seq__60366_60873__$1 = temp__5735__auto___60872;
if(cljs.core.chunked_seq_QMARK_(seq__60366_60873__$1)){
var c__4556__auto___60874 = cljs.core.chunk_first(seq__60366_60873__$1);
var G__60875 = cljs.core.chunk_rest(seq__60366_60873__$1);
var G__60876 = c__4556__auto___60874;
var G__60877 = cljs.core.count(c__4556__auto___60874);
var G__60878 = (0);
seq__60366_60863 = G__60875;
chunk__60367_60864 = G__60876;
count__60368_60865 = G__60877;
i__60369_60866 = G__60878;
continue;
} else {
var c_60879 = cljs.core.first(seq__60366_60873__$1);
class_list_60862.add(c_60879);


var G__60880 = cljs.core.next(seq__60366_60873__$1);
var G__60881 = null;
var G__60882 = (0);
var G__60883 = (0);
seq__60366_60863 = G__60880;
chunk__60367_60864 = G__60881;
count__60368_60865 = G__60882;
i__60369_60866 = G__60883;
continue;
}
} else {
}
}
break;
}
} else {
var seq__60370_60884 = cljs.core.seq(classes__$1);
var chunk__60371_60885 = null;
var count__60372_60886 = (0);
var i__60373_60887 = (0);
while(true){
if((i__60373_60887 < count__60372_60886)){
var c_60888 = chunk__60371_60885.cljs$core$IIndexed$_nth$arity$2(null,i__60373_60887);
var class_name_60889 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_60889,c_60888))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_60889 === ""))?c_60888:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_60889)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_60888)].join('')));
}


var G__60890 = seq__60370_60884;
var G__60891 = chunk__60371_60885;
var G__60892 = count__60372_60886;
var G__60893 = (i__60373_60887 + (1));
seq__60370_60884 = G__60890;
chunk__60371_60885 = G__60891;
count__60372_60886 = G__60892;
i__60373_60887 = G__60893;
continue;
} else {
var temp__5735__auto___60894 = cljs.core.seq(seq__60370_60884);
if(temp__5735__auto___60894){
var seq__60370_60895__$1 = temp__5735__auto___60894;
if(cljs.core.chunked_seq_QMARK_(seq__60370_60895__$1)){
var c__4556__auto___60896 = cljs.core.chunk_first(seq__60370_60895__$1);
var G__60897 = cljs.core.chunk_rest(seq__60370_60895__$1);
var G__60898 = c__4556__auto___60896;
var G__60899 = cljs.core.count(c__4556__auto___60896);
var G__60900 = (0);
seq__60370_60884 = G__60897;
chunk__60371_60885 = G__60898;
count__60372_60886 = G__60899;
i__60373_60887 = G__60900;
continue;
} else {
var c_60901 = cljs.core.first(seq__60370_60895__$1);
var class_name_60902 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_60902,c_60901))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_60902 === ""))?c_60901:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_60902)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_60901)].join('')));
}


var G__60903 = cljs.core.next(seq__60370_60895__$1);
var G__60904 = null;
var G__60905 = (0);
var G__60906 = (0);
seq__60370_60884 = G__60903;
chunk__60371_60885 = G__60904;
count__60372_60886 = G__60905;
i__60373_60887 = G__60906;
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
var seq__60374_60907 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__60375_60908 = null;
var count__60376_60909 = (0);
var i__60377_60910 = (0);
while(true){
if((i__60377_60910 < count__60376_60909)){
var c_60911 = chunk__60375_60908.cljs$core$IIndexed$_nth$arity$2(null,i__60377_60910);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_60911);


var G__60913 = seq__60374_60907;
var G__60914 = chunk__60375_60908;
var G__60915 = count__60376_60909;
var G__60916 = (i__60377_60910 + (1));
seq__60374_60907 = G__60913;
chunk__60375_60908 = G__60914;
count__60376_60909 = G__60915;
i__60377_60910 = G__60916;
continue;
} else {
var temp__5735__auto___60917 = cljs.core.seq(seq__60374_60907);
if(temp__5735__auto___60917){
var seq__60374_60919__$1 = temp__5735__auto___60917;
if(cljs.core.chunked_seq_QMARK_(seq__60374_60919__$1)){
var c__4556__auto___60920 = cljs.core.chunk_first(seq__60374_60919__$1);
var G__60921 = cljs.core.chunk_rest(seq__60374_60919__$1);
var G__60922 = c__4556__auto___60920;
var G__60923 = cljs.core.count(c__4556__auto___60920);
var G__60924 = (0);
seq__60374_60907 = G__60921;
chunk__60375_60908 = G__60922;
count__60376_60909 = G__60923;
i__60377_60910 = G__60924;
continue;
} else {
var c_60925 = cljs.core.first(seq__60374_60919__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_60925);


var G__60926 = cljs.core.next(seq__60374_60919__$1);
var G__60927 = null;
var G__60928 = (0);
var G__60929 = (0);
seq__60374_60907 = G__60926;
chunk__60375_60908 = G__60927;
count__60376_60909 = G__60928;
i__60377_60910 = G__60929;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq60362){
var G__60363 = cljs.core.first(seq60362);
var seq60362__$1 = cljs.core.next(seq60362);
var G__60364 = cljs.core.first(seq60362__$1);
var seq60362__$2 = cljs.core.next(seq60362__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60363,G__60364,seq60362__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__60382 = arguments.length;
switch (G__60382) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60931 = arguments.length;
var i__4737__auto___60932 = (0);
while(true){
if((i__4737__auto___60932 < len__4736__auto___60931)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60932]));

var G__60933 = (i__4737__auto___60932 + (1));
i__4737__auto___60932 = G__60933;
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
var temp__5733__auto___60934 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___60934)){
var class_list_60935 = temp__5733__auto___60934;
class_list_60935.remove(c__$1);
} else {
var class_name_60936 = dommy.core.class$(elem);
var new_class_name_60937 = dommy.utils.remove_class_str(class_name_60936,c__$1);
if((class_name_60936 === new_class_name_60937)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_60937);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__60383 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__60384 = null;
var count__60385 = (0);
var i__60386 = (0);
while(true){
if((i__60386 < count__60385)){
var c = chunk__60384.cljs$core$IIndexed$_nth$arity$2(null,i__60386);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__60938 = seq__60383;
var G__60939 = chunk__60384;
var G__60940 = count__60385;
var G__60941 = (i__60386 + (1));
seq__60383 = G__60938;
chunk__60384 = G__60939;
count__60385 = G__60940;
i__60386 = G__60941;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60383);
if(temp__5735__auto__){
var seq__60383__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60383__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60383__$1);
var G__60942 = cljs.core.chunk_rest(seq__60383__$1);
var G__60943 = c__4556__auto__;
var G__60944 = cljs.core.count(c__4556__auto__);
var G__60945 = (0);
seq__60383 = G__60942;
chunk__60384 = G__60943;
count__60385 = G__60944;
i__60386 = G__60945;
continue;
} else {
var c = cljs.core.first(seq__60383__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__60947 = cljs.core.next(seq__60383__$1);
var G__60948 = null;
var G__60949 = (0);
var G__60950 = (0);
seq__60383 = G__60947;
chunk__60384 = G__60948;
count__60385 = G__60949;
i__60386 = G__60950;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq60379){
var G__60380 = cljs.core.first(seq60379);
var seq60379__$1 = cljs.core.next(seq60379);
var G__60381 = cljs.core.first(seq60379__$1);
var seq60379__$2 = cljs.core.next(seq60379__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60380,G__60381,seq60379__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__60388 = arguments.length;
switch (G__60388) {
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
var temp__5733__auto___60953 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___60953)){
var class_list_60954 = temp__5733__auto___60953;
class_list_60954.toggle(c__$1);
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
var G__60390 = arguments.length;
switch (G__60390) {
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
var G__60392 = arguments.length;
switch (G__60392) {
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
var G__60397 = arguments.length;
switch (G__60397) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60960 = arguments.length;
var i__4737__auto___60961 = (0);
while(true){
if((i__4737__auto___60961 < len__4736__auto___60960)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60961]));

var G__60962 = (i__4737__auto___60961 + (1));
i__4737__auto___60961 = G__60962;
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
var G__60398 = parent;
G__60398.appendChild(child);

return G__60398;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__60399_60963 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__60400_60964 = null;
var count__60401_60965 = (0);
var i__60402_60966 = (0);
while(true){
if((i__60402_60966 < count__60401_60965)){
var c_60967 = chunk__60400_60964.cljs$core$IIndexed$_nth$arity$2(null,i__60402_60966);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_60967);


var G__60968 = seq__60399_60963;
var G__60969 = chunk__60400_60964;
var G__60970 = count__60401_60965;
var G__60971 = (i__60402_60966 + (1));
seq__60399_60963 = G__60968;
chunk__60400_60964 = G__60969;
count__60401_60965 = G__60970;
i__60402_60966 = G__60971;
continue;
} else {
var temp__5735__auto___60972 = cljs.core.seq(seq__60399_60963);
if(temp__5735__auto___60972){
var seq__60399_60973__$1 = temp__5735__auto___60972;
if(cljs.core.chunked_seq_QMARK_(seq__60399_60973__$1)){
var c__4556__auto___60974 = cljs.core.chunk_first(seq__60399_60973__$1);
var G__60975 = cljs.core.chunk_rest(seq__60399_60973__$1);
var G__60976 = c__4556__auto___60974;
var G__60977 = cljs.core.count(c__4556__auto___60974);
var G__60978 = (0);
seq__60399_60963 = G__60975;
chunk__60400_60964 = G__60976;
count__60401_60965 = G__60977;
i__60402_60966 = G__60978;
continue;
} else {
var c_60979 = cljs.core.first(seq__60399_60973__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_60979);


var G__60980 = cljs.core.next(seq__60399_60973__$1);
var G__60981 = null;
var G__60982 = (0);
var G__60983 = (0);
seq__60399_60963 = G__60980;
chunk__60400_60964 = G__60981;
count__60401_60965 = G__60982;
i__60402_60966 = G__60983;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq60394){
var G__60395 = cljs.core.first(seq60394);
var seq60394__$1 = cljs.core.next(seq60394);
var G__60396 = cljs.core.first(seq60394__$1);
var seq60394__$2 = cljs.core.next(seq60394__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60395,G__60396,seq60394__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__60410 = arguments.length;
switch (G__60410) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60985 = arguments.length;
var i__4737__auto___60986 = (0);
while(true){
if((i__4737__auto___60986 < len__4736__auto___60985)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60986]));

var G__60987 = (i__4737__auto___60986 + (1));
i__4737__auto___60986 = G__60987;
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
var G__60411 = parent;
G__60411.insertBefore(child,parent.firstChild);

return G__60411;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__60412_60988 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__60413_60989 = null;
var count__60414_60990 = (0);
var i__60415_60991 = (0);
while(true){
if((i__60415_60991 < count__60414_60990)){
var c_60992 = chunk__60413_60989.cljs$core$IIndexed$_nth$arity$2(null,i__60415_60991);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_60992);


var G__60993 = seq__60412_60988;
var G__60994 = chunk__60413_60989;
var G__60995 = count__60414_60990;
var G__60996 = (i__60415_60991 + (1));
seq__60412_60988 = G__60993;
chunk__60413_60989 = G__60994;
count__60414_60990 = G__60995;
i__60415_60991 = G__60996;
continue;
} else {
var temp__5735__auto___60997 = cljs.core.seq(seq__60412_60988);
if(temp__5735__auto___60997){
var seq__60412_60998__$1 = temp__5735__auto___60997;
if(cljs.core.chunked_seq_QMARK_(seq__60412_60998__$1)){
var c__4556__auto___60999 = cljs.core.chunk_first(seq__60412_60998__$1);
var G__61000 = cljs.core.chunk_rest(seq__60412_60998__$1);
var G__61001 = c__4556__auto___60999;
var G__61002 = cljs.core.count(c__4556__auto___60999);
var G__61003 = (0);
seq__60412_60988 = G__61000;
chunk__60413_60989 = G__61001;
count__60414_60990 = G__61002;
i__60415_60991 = G__61003;
continue;
} else {
var c_61004 = cljs.core.first(seq__60412_60998__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_61004);


var G__61005 = cljs.core.next(seq__60412_60998__$1);
var G__61006 = null;
var G__61007 = (0);
var G__61008 = (0);
seq__60412_60988 = G__61005;
chunk__60413_60989 = G__61006;
count__60414_60990 = G__61007;
i__60415_60991 = G__61008;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq60407){
var G__60408 = cljs.core.first(seq60407);
var seq60407__$1 = cljs.core.next(seq60407);
var G__60409 = cljs.core.first(seq60407__$1);
var seq60407__$2 = cljs.core.next(seq60407__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60408,G__60409,seq60407__$2);
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
var temp__5733__auto___61009 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___61009)){
var next_61010 = temp__5733__auto___61009;
dommy.core.insert_before_BANG_(elem,next_61010);
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
var G__60417 = arguments.length;
switch (G__60417) {
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
var G__60418 = p;
G__60418.removeChild(elem);

return G__60418;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60419){
var vec__60420 = p__60419;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60420,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60420,(1),null);
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
var len__4736__auto___61012 = arguments.length;
var i__4737__auto___61013 = (0);
while(true){
if((i__4737__auto___61013 < len__4736__auto___61012)){
args__4742__auto__.push((arguments[i__4737__auto___61013]));

var G__61014 = (i__4737__auto___61013 + (1));
i__4737__auto___61013 = G__61014;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq60423){
var G__60424 = cljs.core.first(seq60423);
var seq60423__$1 = cljs.core.next(seq60423);
var G__60425 = cljs.core.first(seq60423__$1);
var seq60423__$2 = cljs.core.next(seq60423__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60424,G__60425,seq60423__$2);
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
var len__4736__auto___61015 = arguments.length;
var i__4737__auto___61016 = (0);
while(true){
if((i__4737__auto___61016 < len__4736__auto___61015)){
args__4742__auto__.push((arguments[i__4737__auto___61016]));

var G__61017 = (i__4737__auto___61016 + (1));
i__4737__auto___61016 = G__61017;
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

var vec__60428_61018 = dommy.core.elem_and_selector(elem_sel);
var elem_61019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60428_61018,(0),null);
var selector_61020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60428_61018,(1),null);
var seq__60431_61021 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__60438_61022 = null;
var count__60439_61023 = (0);
var i__60440_61024 = (0);
while(true){
if((i__60440_61024 < count__60439_61023)){
var vec__60496_61025 = chunk__60438_61022.cljs$core$IIndexed$_nth$arity$2(null,i__60440_61024);
var orig_type_61026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60496_61025,(0),null);
var f_61027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60496_61025,(1),null);
var seq__60441_61028 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61026,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61026,cljs.core.identity])));
var chunk__60443_61029 = null;
var count__60444_61030 = (0);
var i__60445_61031 = (0);
while(true){
if((i__60445_61031 < count__60444_61030)){
var vec__60509_61033 = chunk__60443_61029.cljs$core$IIndexed$_nth$arity$2(null,i__60445_61031);
var actual_type_61034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60509_61033,(0),null);
var factory_61035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60509_61033,(1),null);
var canonical_f_61036 = (function (){var G__60513 = (factory_61035.cljs$core$IFn$_invoke$arity$1 ? factory_61035.cljs$core$IFn$_invoke$arity$1(f_61027) : factory_61035.call(null,f_61027));
var fexpr__60512 = (cljs.core.truth_(selector_61020)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61019,selector_61020):cljs.core.identity);
return (fexpr__60512.cljs$core$IFn$_invoke$arity$1 ? fexpr__60512.cljs$core$IFn$_invoke$arity$1(G__60513) : fexpr__60512.call(null,G__60513));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61019,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61020,actual_type_61034,f_61027], null),canonical_f_61036], 0));

if(cljs.core.truth_(elem_61019.addEventListener)){
elem_61019.addEventListener(cljs.core.name(actual_type_61034),canonical_f_61036);
} else {
elem_61019.attachEvent(cljs.core.name(actual_type_61034),canonical_f_61036);
}


var G__61038 = seq__60441_61028;
var G__61039 = chunk__60443_61029;
var G__61040 = count__60444_61030;
var G__61041 = (i__60445_61031 + (1));
seq__60441_61028 = G__61038;
chunk__60443_61029 = G__61039;
count__60444_61030 = G__61040;
i__60445_61031 = G__61041;
continue;
} else {
var temp__5735__auto___61042 = cljs.core.seq(seq__60441_61028);
if(temp__5735__auto___61042){
var seq__60441_61043__$1 = temp__5735__auto___61042;
if(cljs.core.chunked_seq_QMARK_(seq__60441_61043__$1)){
var c__4556__auto___61044 = cljs.core.chunk_first(seq__60441_61043__$1);
var G__61045 = cljs.core.chunk_rest(seq__60441_61043__$1);
var G__61046 = c__4556__auto___61044;
var G__61047 = cljs.core.count(c__4556__auto___61044);
var G__61048 = (0);
seq__60441_61028 = G__61045;
chunk__60443_61029 = G__61046;
count__60444_61030 = G__61047;
i__60445_61031 = G__61048;
continue;
} else {
var vec__60517_61049 = cljs.core.first(seq__60441_61043__$1);
var actual_type_61050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60517_61049,(0),null);
var factory_61051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60517_61049,(1),null);
var canonical_f_61052 = (function (){var G__60521 = (factory_61051.cljs$core$IFn$_invoke$arity$1 ? factory_61051.cljs$core$IFn$_invoke$arity$1(f_61027) : factory_61051.call(null,f_61027));
var fexpr__60520 = (cljs.core.truth_(selector_61020)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61019,selector_61020):cljs.core.identity);
return (fexpr__60520.cljs$core$IFn$_invoke$arity$1 ? fexpr__60520.cljs$core$IFn$_invoke$arity$1(G__60521) : fexpr__60520.call(null,G__60521));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61019,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61020,actual_type_61050,f_61027], null),canonical_f_61052], 0));

if(cljs.core.truth_(elem_61019.addEventListener)){
elem_61019.addEventListener(cljs.core.name(actual_type_61050),canonical_f_61052);
} else {
elem_61019.attachEvent(cljs.core.name(actual_type_61050),canonical_f_61052);
}


var G__61054 = cljs.core.next(seq__60441_61043__$1);
var G__61055 = null;
var G__61056 = (0);
var G__61057 = (0);
seq__60441_61028 = G__61054;
chunk__60443_61029 = G__61055;
count__60444_61030 = G__61056;
i__60445_61031 = G__61057;
continue;
}
} else {
}
}
break;
}

var G__61059 = seq__60431_61021;
var G__61060 = chunk__60438_61022;
var G__61061 = count__60439_61023;
var G__61062 = (i__60440_61024 + (1));
seq__60431_61021 = G__61059;
chunk__60438_61022 = G__61060;
count__60439_61023 = G__61061;
i__60440_61024 = G__61062;
continue;
} else {
var temp__5735__auto___61064 = cljs.core.seq(seq__60431_61021);
if(temp__5735__auto___61064){
var seq__60431_61065__$1 = temp__5735__auto___61064;
if(cljs.core.chunked_seq_QMARK_(seq__60431_61065__$1)){
var c__4556__auto___61067 = cljs.core.chunk_first(seq__60431_61065__$1);
var G__61068 = cljs.core.chunk_rest(seq__60431_61065__$1);
var G__61069 = c__4556__auto___61067;
var G__61070 = cljs.core.count(c__4556__auto___61067);
var G__61071 = (0);
seq__60431_61021 = G__61068;
chunk__60438_61022 = G__61069;
count__60439_61023 = G__61070;
i__60440_61024 = G__61071;
continue;
} else {
var vec__60522_61072 = cljs.core.first(seq__60431_61065__$1);
var orig_type_61073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60522_61072,(0),null);
var f_61074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60522_61072,(1),null);
var seq__60432_61075 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61073,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61073,cljs.core.identity])));
var chunk__60434_61076 = null;
var count__60435_61077 = (0);
var i__60436_61078 = (0);
while(true){
if((i__60436_61078 < count__60435_61077)){
var vec__60535_61079 = chunk__60434_61076.cljs$core$IIndexed$_nth$arity$2(null,i__60436_61078);
var actual_type_61080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60535_61079,(0),null);
var factory_61081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60535_61079,(1),null);
var canonical_f_61083 = (function (){var G__60539 = (factory_61081.cljs$core$IFn$_invoke$arity$1 ? factory_61081.cljs$core$IFn$_invoke$arity$1(f_61074) : factory_61081.call(null,f_61074));
var fexpr__60538 = (cljs.core.truth_(selector_61020)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61019,selector_61020):cljs.core.identity);
return (fexpr__60538.cljs$core$IFn$_invoke$arity$1 ? fexpr__60538.cljs$core$IFn$_invoke$arity$1(G__60539) : fexpr__60538.call(null,G__60539));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61019,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61020,actual_type_61080,f_61074], null),canonical_f_61083], 0));

if(cljs.core.truth_(elem_61019.addEventListener)){
elem_61019.addEventListener(cljs.core.name(actual_type_61080),canonical_f_61083);
} else {
elem_61019.attachEvent(cljs.core.name(actual_type_61080),canonical_f_61083);
}


var G__61088 = seq__60432_61075;
var G__61089 = chunk__60434_61076;
var G__61090 = count__60435_61077;
var G__61091 = (i__60436_61078 + (1));
seq__60432_61075 = G__61088;
chunk__60434_61076 = G__61089;
count__60435_61077 = G__61090;
i__60436_61078 = G__61091;
continue;
} else {
var temp__5735__auto___61092__$1 = cljs.core.seq(seq__60432_61075);
if(temp__5735__auto___61092__$1){
var seq__60432_61093__$1 = temp__5735__auto___61092__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60432_61093__$1)){
var c__4556__auto___61094 = cljs.core.chunk_first(seq__60432_61093__$1);
var G__61096 = cljs.core.chunk_rest(seq__60432_61093__$1);
var G__61097 = c__4556__auto___61094;
var G__61098 = cljs.core.count(c__4556__auto___61094);
var G__61099 = (0);
seq__60432_61075 = G__61096;
chunk__60434_61076 = G__61097;
count__60435_61077 = G__61098;
i__60436_61078 = G__61099;
continue;
} else {
var vec__60540_61101 = cljs.core.first(seq__60432_61093__$1);
var actual_type_61102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60540_61101,(0),null);
var factory_61103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60540_61101,(1),null);
var canonical_f_61104 = (function (){var G__60544 = (factory_61103.cljs$core$IFn$_invoke$arity$1 ? factory_61103.cljs$core$IFn$_invoke$arity$1(f_61074) : factory_61103.call(null,f_61074));
var fexpr__60543 = (cljs.core.truth_(selector_61020)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61019,selector_61020):cljs.core.identity);
return (fexpr__60543.cljs$core$IFn$_invoke$arity$1 ? fexpr__60543.cljs$core$IFn$_invoke$arity$1(G__60544) : fexpr__60543.call(null,G__60544));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61019,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61020,actual_type_61102,f_61074], null),canonical_f_61104], 0));

if(cljs.core.truth_(elem_61019.addEventListener)){
elem_61019.addEventListener(cljs.core.name(actual_type_61102),canonical_f_61104);
} else {
elem_61019.attachEvent(cljs.core.name(actual_type_61102),canonical_f_61104);
}


var G__61107 = cljs.core.next(seq__60432_61093__$1);
var G__61108 = null;
var G__61109 = (0);
var G__61110 = (0);
seq__60432_61075 = G__61107;
chunk__60434_61076 = G__61108;
count__60435_61077 = G__61109;
i__60436_61078 = G__61110;
continue;
}
} else {
}
}
break;
}

var G__61112 = cljs.core.next(seq__60431_61065__$1);
var G__61113 = null;
var G__61114 = (0);
var G__61115 = (0);
seq__60431_61021 = G__61112;
chunk__60438_61022 = G__61113;
count__60439_61023 = G__61114;
i__60440_61024 = G__61115;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq60426){
var G__60427 = cljs.core.first(seq60426);
var seq60426__$1 = cljs.core.next(seq60426);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60427,seq60426__$1);
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
var len__4736__auto___61119 = arguments.length;
var i__4737__auto___61120 = (0);
while(true){
if((i__4737__auto___61120 < len__4736__auto___61119)){
args__4742__auto__.push((arguments[i__4737__auto___61120]));

var G__61121 = (i__4737__auto___61120 + (1));
i__4737__auto___61120 = G__61121;
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

var vec__60547_61125 = dommy.core.elem_and_selector(elem_sel);
var elem_61126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60547_61125,(0),null);
var selector_61127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60547_61125,(1),null);
var seq__60550_61130 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__60557_61131 = null;
var count__60558_61132 = (0);
var i__60559_61133 = (0);
while(true){
if((i__60559_61133 < count__60558_61132)){
var vec__60607_61134 = chunk__60557_61131.cljs$core$IIndexed$_nth$arity$2(null,i__60559_61133);
var orig_type_61135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60607_61134,(0),null);
var f_61136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60607_61134,(1),null);
var seq__60560_61137 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61135,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61135,cljs.core.identity])));
var chunk__60562_61138 = null;
var count__60563_61139 = (0);
var i__60564_61140 = (0);
while(true){
if((i__60564_61140 < count__60563_61139)){
var vec__60616_61142 = chunk__60562_61138.cljs$core$IIndexed$_nth$arity$2(null,i__60564_61140);
var actual_type_61143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60616_61142,(0),null);
var __61144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60616_61142,(1),null);
var keys_61149 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61127,actual_type_61143,f_61136], null);
var canonical_f_61150 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61126),keys_61149);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61126,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61149], 0));

if(cljs.core.truth_(elem_61126.removeEventListener)){
elem_61126.removeEventListener(cljs.core.name(actual_type_61143),canonical_f_61150);
} else {
elem_61126.detachEvent(cljs.core.name(actual_type_61143),canonical_f_61150);
}


var G__61151 = seq__60560_61137;
var G__61152 = chunk__60562_61138;
var G__61153 = count__60563_61139;
var G__61154 = (i__60564_61140 + (1));
seq__60560_61137 = G__61151;
chunk__60562_61138 = G__61152;
count__60563_61139 = G__61153;
i__60564_61140 = G__61154;
continue;
} else {
var temp__5735__auto___61155 = cljs.core.seq(seq__60560_61137);
if(temp__5735__auto___61155){
var seq__60560_61156__$1 = temp__5735__auto___61155;
if(cljs.core.chunked_seq_QMARK_(seq__60560_61156__$1)){
var c__4556__auto___61157 = cljs.core.chunk_first(seq__60560_61156__$1);
var G__61158 = cljs.core.chunk_rest(seq__60560_61156__$1);
var G__61159 = c__4556__auto___61157;
var G__61160 = cljs.core.count(c__4556__auto___61157);
var G__61161 = (0);
seq__60560_61137 = G__61158;
chunk__60562_61138 = G__61159;
count__60563_61139 = G__61160;
i__60564_61140 = G__61161;
continue;
} else {
var vec__60619_61162 = cljs.core.first(seq__60560_61156__$1);
var actual_type_61163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60619_61162,(0),null);
var __61164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60619_61162,(1),null);
var keys_61165 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61127,actual_type_61163,f_61136], null);
var canonical_f_61166 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61126),keys_61165);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61126,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61165], 0));

if(cljs.core.truth_(elem_61126.removeEventListener)){
elem_61126.removeEventListener(cljs.core.name(actual_type_61163),canonical_f_61166);
} else {
elem_61126.detachEvent(cljs.core.name(actual_type_61163),canonical_f_61166);
}


var G__61167 = cljs.core.next(seq__60560_61156__$1);
var G__61168 = null;
var G__61169 = (0);
var G__61170 = (0);
seq__60560_61137 = G__61167;
chunk__60562_61138 = G__61168;
count__60563_61139 = G__61169;
i__60564_61140 = G__61170;
continue;
}
} else {
}
}
break;
}

var G__61171 = seq__60550_61130;
var G__61172 = chunk__60557_61131;
var G__61173 = count__60558_61132;
var G__61174 = (i__60559_61133 + (1));
seq__60550_61130 = G__61171;
chunk__60557_61131 = G__61172;
count__60558_61132 = G__61173;
i__60559_61133 = G__61174;
continue;
} else {
var temp__5735__auto___61175 = cljs.core.seq(seq__60550_61130);
if(temp__5735__auto___61175){
var seq__60550_61176__$1 = temp__5735__auto___61175;
if(cljs.core.chunked_seq_QMARK_(seq__60550_61176__$1)){
var c__4556__auto___61177 = cljs.core.chunk_first(seq__60550_61176__$1);
var G__61178 = cljs.core.chunk_rest(seq__60550_61176__$1);
var G__61179 = c__4556__auto___61177;
var G__61180 = cljs.core.count(c__4556__auto___61177);
var G__61181 = (0);
seq__60550_61130 = G__61178;
chunk__60557_61131 = G__61179;
count__60558_61132 = G__61180;
i__60559_61133 = G__61181;
continue;
} else {
var vec__60622_61182 = cljs.core.first(seq__60550_61176__$1);
var orig_type_61183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60622_61182,(0),null);
var f_61184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60622_61182,(1),null);
var seq__60551_61185 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61183,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61183,cljs.core.identity])));
var chunk__60553_61186 = null;
var count__60554_61187 = (0);
var i__60555_61188 = (0);
while(true){
if((i__60555_61188 < count__60554_61187)){
var vec__60634_61189 = chunk__60553_61186.cljs$core$IIndexed$_nth$arity$2(null,i__60555_61188);
var actual_type_61190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60634_61189,(0),null);
var __61191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60634_61189,(1),null);
var keys_61192 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61127,actual_type_61190,f_61184], null);
var canonical_f_61193 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61126),keys_61192);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61126,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61192], 0));

if(cljs.core.truth_(elem_61126.removeEventListener)){
elem_61126.removeEventListener(cljs.core.name(actual_type_61190),canonical_f_61193);
} else {
elem_61126.detachEvent(cljs.core.name(actual_type_61190),canonical_f_61193);
}


var G__61194 = seq__60551_61185;
var G__61195 = chunk__60553_61186;
var G__61196 = count__60554_61187;
var G__61197 = (i__60555_61188 + (1));
seq__60551_61185 = G__61194;
chunk__60553_61186 = G__61195;
count__60554_61187 = G__61196;
i__60555_61188 = G__61197;
continue;
} else {
var temp__5735__auto___61198__$1 = cljs.core.seq(seq__60551_61185);
if(temp__5735__auto___61198__$1){
var seq__60551_61199__$1 = temp__5735__auto___61198__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60551_61199__$1)){
var c__4556__auto___61200 = cljs.core.chunk_first(seq__60551_61199__$1);
var G__61201 = cljs.core.chunk_rest(seq__60551_61199__$1);
var G__61202 = c__4556__auto___61200;
var G__61203 = cljs.core.count(c__4556__auto___61200);
var G__61204 = (0);
seq__60551_61185 = G__61201;
chunk__60553_61186 = G__61202;
count__60554_61187 = G__61203;
i__60555_61188 = G__61204;
continue;
} else {
var vec__60637_61205 = cljs.core.first(seq__60551_61199__$1);
var actual_type_61206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60637_61205,(0),null);
var __61207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60637_61205,(1),null);
var keys_61208 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61127,actual_type_61206,f_61184], null);
var canonical_f_61209 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61126),keys_61208);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61126,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61208], 0));

if(cljs.core.truth_(elem_61126.removeEventListener)){
elem_61126.removeEventListener(cljs.core.name(actual_type_61206),canonical_f_61209);
} else {
elem_61126.detachEvent(cljs.core.name(actual_type_61206),canonical_f_61209);
}


var G__61210 = cljs.core.next(seq__60551_61199__$1);
var G__61211 = null;
var G__61212 = (0);
var G__61213 = (0);
seq__60551_61185 = G__61210;
chunk__60553_61186 = G__61211;
count__60554_61187 = G__61212;
i__60555_61188 = G__61213;
continue;
}
} else {
}
}
break;
}

var G__61214 = cljs.core.next(seq__60550_61176__$1);
var G__61215 = null;
var G__61216 = (0);
var G__61217 = (0);
seq__60550_61130 = G__61214;
chunk__60557_61131 = G__61215;
count__60558_61132 = G__61216;
i__60559_61133 = G__61217;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq60545){
var G__60546 = cljs.core.first(seq60545);
var seq60545__$1 = cljs.core.next(seq60545);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60546,seq60545__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61218 = arguments.length;
var i__4737__auto___61219 = (0);
while(true){
if((i__4737__auto___61219 < len__4736__auto___61218)){
args__4742__auto__.push((arguments[i__4737__auto___61219]));

var G__61220 = (i__4737__auto___61219 + (1));
i__4737__auto___61219 = G__61220;
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

var vec__60644_61221 = dommy.core.elem_and_selector(elem_sel);
var elem_61222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60644_61221,(0),null);
var selector_61223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60644_61221,(1),null);
var seq__60647_61224 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__60648_61225 = null;
var count__60649_61226 = (0);
var i__60650_61227 = (0);
while(true){
if((i__60650_61227 < count__60649_61226)){
var vec__60661_61228 = chunk__60648_61225.cljs$core$IIndexed$_nth$arity$2(null,i__60650_61227);
var type_61229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60661_61228,(0),null);
var f_61230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60661_61228,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61229,((function (seq__60647_61224,chunk__60648_61225,count__60649_61226,i__60650_61227,vec__60661_61228,type_61229,f_61230,vec__60644_61221,elem_61222,selector_61223){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61229,dommy$core$this_fn], 0));

return (f_61230.cljs$core$IFn$_invoke$arity$1 ? f_61230.cljs$core$IFn$_invoke$arity$1(e) : f_61230.call(null,e));
});})(seq__60647_61224,chunk__60648_61225,count__60649_61226,i__60650_61227,vec__60661_61228,type_61229,f_61230,vec__60644_61221,elem_61222,selector_61223))
], 0));


var G__61231 = seq__60647_61224;
var G__61232 = chunk__60648_61225;
var G__61233 = count__60649_61226;
var G__61234 = (i__60650_61227 + (1));
seq__60647_61224 = G__61231;
chunk__60648_61225 = G__61232;
count__60649_61226 = G__61233;
i__60650_61227 = G__61234;
continue;
} else {
var temp__5735__auto___61235 = cljs.core.seq(seq__60647_61224);
if(temp__5735__auto___61235){
var seq__60647_61236__$1 = temp__5735__auto___61235;
if(cljs.core.chunked_seq_QMARK_(seq__60647_61236__$1)){
var c__4556__auto___61237 = cljs.core.chunk_first(seq__60647_61236__$1);
var G__61238 = cljs.core.chunk_rest(seq__60647_61236__$1);
var G__61239 = c__4556__auto___61237;
var G__61240 = cljs.core.count(c__4556__auto___61237);
var G__61241 = (0);
seq__60647_61224 = G__61238;
chunk__60648_61225 = G__61239;
count__60649_61226 = G__61240;
i__60650_61227 = G__61241;
continue;
} else {
var vec__60665_61242 = cljs.core.first(seq__60647_61236__$1);
var type_61243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60665_61242,(0),null);
var f_61244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60665_61242,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61243,((function (seq__60647_61224,chunk__60648_61225,count__60649_61226,i__60650_61227,vec__60665_61242,type_61243,f_61244,seq__60647_61236__$1,temp__5735__auto___61235,vec__60644_61221,elem_61222,selector_61223){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61243,dommy$core$this_fn], 0));

return (f_61244.cljs$core$IFn$_invoke$arity$1 ? f_61244.cljs$core$IFn$_invoke$arity$1(e) : f_61244.call(null,e));
});})(seq__60647_61224,chunk__60648_61225,count__60649_61226,i__60650_61227,vec__60665_61242,type_61243,f_61244,seq__60647_61236__$1,temp__5735__auto___61235,vec__60644_61221,elem_61222,selector_61223))
], 0));


var G__61245 = cljs.core.next(seq__60647_61236__$1);
var G__61246 = null;
var G__61247 = (0);
var G__61248 = (0);
seq__60647_61224 = G__61245;
chunk__60648_61225 = G__61246;
count__60649_61226 = G__61247;
i__60650_61227 = G__61248;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq60642){
var G__60643 = cljs.core.first(seq60642);
var seq60642__$1 = cljs.core.next(seq60642);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60643,seq60642__$1);
}));


//# sourceMappingURL=dommy.core.js.map
