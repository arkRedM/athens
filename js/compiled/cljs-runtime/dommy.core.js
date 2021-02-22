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
var seq__60266_60719 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__60267_60720 = null;
var count__60268_60721 = (0);
var i__60269_60722 = (0);
while(true){
if((i__60269_60722 < count__60268_60721)){
var vec__60278_60723 = chunk__60267_60720.cljs$core$IIndexed$_nth$arity$2(null,i__60269_60722);
var k_60724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60278_60723,(0),null);
var v_60725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60278_60723,(1),null);
style.setProperty(dommy.utils.as_str(k_60724),v_60725);


var G__60726 = seq__60266_60719;
var G__60727 = chunk__60267_60720;
var G__60728 = count__60268_60721;
var G__60729 = (i__60269_60722 + (1));
seq__60266_60719 = G__60726;
chunk__60267_60720 = G__60727;
count__60268_60721 = G__60728;
i__60269_60722 = G__60729;
continue;
} else {
var temp__5735__auto___60730 = cljs.core.seq(seq__60266_60719);
if(temp__5735__auto___60730){
var seq__60266_60731__$1 = temp__5735__auto___60730;
if(cljs.core.chunked_seq_QMARK_(seq__60266_60731__$1)){
var c__4556__auto___60732 = cljs.core.chunk_first(seq__60266_60731__$1);
var G__60733 = cljs.core.chunk_rest(seq__60266_60731__$1);
var G__60734 = c__4556__auto___60732;
var G__60735 = cljs.core.count(c__4556__auto___60732);
var G__60736 = (0);
seq__60266_60719 = G__60733;
chunk__60267_60720 = G__60734;
count__60268_60721 = G__60735;
i__60269_60722 = G__60736;
continue;
} else {
var vec__60282_60737 = cljs.core.first(seq__60266_60731__$1);
var k_60738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60282_60737,(0),null);
var v_60739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60282_60737,(1),null);
style.setProperty(dommy.utils.as_str(k_60738),v_60739);


var G__60740 = cljs.core.next(seq__60266_60731__$1);
var G__60741 = null;
var G__60742 = (0);
var G__60743 = (0);
seq__60266_60719 = G__60740;
chunk__60267_60720 = G__60741;
count__60268_60721 = G__60742;
i__60269_60722 = G__60743;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq60264){
var G__60265 = cljs.core.first(seq60264);
var seq60264__$1 = cljs.core.next(seq60264);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60265,seq60264__$1);
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
var seq__60289_60747 = cljs.core.seq(keywords);
var chunk__60290_60748 = null;
var count__60291_60749 = (0);
var i__60292_60750 = (0);
while(true){
if((i__60292_60750 < count__60291_60749)){
var kw_60751 = chunk__60290_60748.cljs$core$IIndexed$_nth$arity$2(null,i__60292_60750);
style.removeProperty(dommy.utils.as_str(kw_60751));


var G__60752 = seq__60289_60747;
var G__60753 = chunk__60290_60748;
var G__60754 = count__60291_60749;
var G__60755 = (i__60292_60750 + (1));
seq__60289_60747 = G__60752;
chunk__60290_60748 = G__60753;
count__60291_60749 = G__60754;
i__60292_60750 = G__60755;
continue;
} else {
var temp__5735__auto___60756 = cljs.core.seq(seq__60289_60747);
if(temp__5735__auto___60756){
var seq__60289_60757__$1 = temp__5735__auto___60756;
if(cljs.core.chunked_seq_QMARK_(seq__60289_60757__$1)){
var c__4556__auto___60758 = cljs.core.chunk_first(seq__60289_60757__$1);
var G__60759 = cljs.core.chunk_rest(seq__60289_60757__$1);
var G__60760 = c__4556__auto___60758;
var G__60761 = cljs.core.count(c__4556__auto___60758);
var G__60762 = (0);
seq__60289_60747 = G__60759;
chunk__60290_60748 = G__60760;
count__60291_60749 = G__60761;
i__60292_60750 = G__60762;
continue;
} else {
var kw_60763 = cljs.core.first(seq__60289_60757__$1);
style.removeProperty(dommy.utils.as_str(kw_60763));


var G__60764 = cljs.core.next(seq__60289_60757__$1);
var G__60765 = null;
var G__60766 = (0);
var G__60767 = (0);
seq__60289_60747 = G__60764;
chunk__60290_60748 = G__60765;
count__60291_60749 = G__60766;
i__60292_60750 = G__60767;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq60286){
var G__60287 = cljs.core.first(seq60286);
var seq60286__$1 = cljs.core.next(seq60286);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60287,seq60286__$1);
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

var seq__60300_60771 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__60301_60772 = null;
var count__60302_60773 = (0);
var i__60303_60774 = (0);
while(true){
if((i__60303_60774 < count__60302_60773)){
var vec__60312_60775 = chunk__60301_60772.cljs$core$IIndexed$_nth$arity$2(null,i__60303_60774);
var k_60776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60312_60775,(0),null);
var v_60777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60312_60775,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_60776,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_60777),"px"].join('')], 0));


var G__60778 = seq__60300_60771;
var G__60779 = chunk__60301_60772;
var G__60780 = count__60302_60773;
var G__60781 = (i__60303_60774 + (1));
seq__60300_60771 = G__60778;
chunk__60301_60772 = G__60779;
count__60302_60773 = G__60780;
i__60303_60774 = G__60781;
continue;
} else {
var temp__5735__auto___60782 = cljs.core.seq(seq__60300_60771);
if(temp__5735__auto___60782){
var seq__60300_60783__$1 = temp__5735__auto___60782;
if(cljs.core.chunked_seq_QMARK_(seq__60300_60783__$1)){
var c__4556__auto___60784 = cljs.core.chunk_first(seq__60300_60783__$1);
var G__60785 = cljs.core.chunk_rest(seq__60300_60783__$1);
var G__60786 = c__4556__auto___60784;
var G__60787 = cljs.core.count(c__4556__auto___60784);
var G__60788 = (0);
seq__60300_60771 = G__60785;
chunk__60301_60772 = G__60786;
count__60302_60773 = G__60787;
i__60303_60774 = G__60788;
continue;
} else {
var vec__60315_60789 = cljs.core.first(seq__60300_60783__$1);
var k_60790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60315_60789,(0),null);
var v_60791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60315_60789,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_60790,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_60791),"px"].join('')], 0));


var G__60792 = cljs.core.next(seq__60300_60783__$1);
var G__60793 = null;
var G__60794 = (0);
var G__60795 = (0);
seq__60300_60771 = G__60792;
chunk__60301_60772 = G__60793;
count__60302_60773 = G__60794;
i__60303_60774 = G__60795;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq60296){
var G__60297 = cljs.core.first(seq60296);
var seq60296__$1 = cljs.core.next(seq60296);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60297,seq60296__$1);
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
var len__4736__auto___60797 = arguments.length;
var i__4737__auto___60798 = (0);
while(true){
if((i__4737__auto___60798 < len__4736__auto___60797)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60798]));

var G__60799 = (i__4737__auto___60798 + (1));
i__4737__auto___60798 = G__60799;
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

var seq__60328_60800 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__60329_60801 = null;
var count__60330_60802 = (0);
var i__60331_60803 = (0);
while(true){
if((i__60331_60803 < count__60330_60802)){
var vec__60338_60804 = chunk__60329_60801.cljs$core$IIndexed$_nth$arity$2(null,i__60331_60803);
var k_60805__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60338_60804,(0),null);
var v_60806__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60338_60804,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_60805__$1,v_60806__$1);


var G__60807 = seq__60328_60800;
var G__60808 = chunk__60329_60801;
var G__60809 = count__60330_60802;
var G__60810 = (i__60331_60803 + (1));
seq__60328_60800 = G__60807;
chunk__60329_60801 = G__60808;
count__60330_60802 = G__60809;
i__60331_60803 = G__60810;
continue;
} else {
var temp__5735__auto___60811 = cljs.core.seq(seq__60328_60800);
if(temp__5735__auto___60811){
var seq__60328_60812__$1 = temp__5735__auto___60811;
if(cljs.core.chunked_seq_QMARK_(seq__60328_60812__$1)){
var c__4556__auto___60813 = cljs.core.chunk_first(seq__60328_60812__$1);
var G__60814 = cljs.core.chunk_rest(seq__60328_60812__$1);
var G__60815 = c__4556__auto___60813;
var G__60816 = cljs.core.count(c__4556__auto___60813);
var G__60817 = (0);
seq__60328_60800 = G__60814;
chunk__60329_60801 = G__60815;
count__60330_60802 = G__60816;
i__60331_60803 = G__60817;
continue;
} else {
var vec__60341_60818 = cljs.core.first(seq__60328_60812__$1);
var k_60819__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60341_60818,(0),null);
var v_60820__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60341_60818,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_60819__$1,v_60820__$1);


var G__60821 = cljs.core.next(seq__60328_60812__$1);
var G__60822 = null;
var G__60823 = (0);
var G__60824 = (0);
seq__60328_60800 = G__60821;
chunk__60329_60801 = G__60822;
count__60330_60802 = G__60823;
i__60331_60803 = G__60824;
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
var len__4736__auto___60826 = arguments.length;
var i__4737__auto___60827 = (0);
while(true){
if((i__4737__auto___60827 < len__4736__auto___60826)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60827]));

var G__60828 = (i__4737__auto___60827 + (1));
i__4737__auto___60827 = G__60828;
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
var k_60829__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__60349 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__60349.cljs$core$IFn$_invoke$arity$1 ? fexpr__60349.cljs$core$IFn$_invoke$arity$1(k_60829__$1) : fexpr__60349.call(null,k_60829__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_60829__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__60350_60830 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__60351_60831 = null;
var count__60352_60832 = (0);
var i__60353_60833 = (0);
while(true){
if((i__60353_60833 < count__60352_60832)){
var k_60834__$1 = chunk__60351_60831.cljs$core$IIndexed$_nth$arity$2(null,i__60353_60833);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_60834__$1);


var G__60835 = seq__60350_60830;
var G__60836 = chunk__60351_60831;
var G__60837 = count__60352_60832;
var G__60838 = (i__60353_60833 + (1));
seq__60350_60830 = G__60835;
chunk__60351_60831 = G__60836;
count__60352_60832 = G__60837;
i__60353_60833 = G__60838;
continue;
} else {
var temp__5735__auto___60840 = cljs.core.seq(seq__60350_60830);
if(temp__5735__auto___60840){
var seq__60350_60842__$1 = temp__5735__auto___60840;
if(cljs.core.chunked_seq_QMARK_(seq__60350_60842__$1)){
var c__4556__auto___60843 = cljs.core.chunk_first(seq__60350_60842__$1);
var G__60844 = cljs.core.chunk_rest(seq__60350_60842__$1);
var G__60845 = c__4556__auto___60843;
var G__60846 = cljs.core.count(c__4556__auto___60843);
var G__60847 = (0);
seq__60350_60830 = G__60844;
chunk__60351_60831 = G__60845;
count__60352_60832 = G__60846;
i__60353_60833 = G__60847;
continue;
} else {
var k_60848__$1 = cljs.core.first(seq__60350_60842__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_60848__$1);


var G__60849 = cljs.core.next(seq__60350_60842__$1);
var G__60850 = null;
var G__60851 = (0);
var G__60852 = (0);
seq__60350_60830 = G__60849;
chunk__60351_60831 = G__60850;
count__60352_60832 = G__60851;
i__60353_60833 = G__60852;
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
var len__4736__auto___60855 = arguments.length;
var i__4737__auto___60856 = (0);
while(true){
if((i__4737__auto___60856 < len__4736__auto___60855)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60856]));

var G__60857 = (i__4737__auto___60856 + (1));
i__4737__auto___60856 = G__60857;
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
var temp__5733__auto___60860 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___60860)){
var class_list_60861 = temp__5733__auto___60860;
var seq__60361_60862 = cljs.core.seq(classes__$1);
var chunk__60362_60863 = null;
var count__60363_60864 = (0);
var i__60364_60865 = (0);
while(true){
if((i__60364_60865 < count__60363_60864)){
var c_60866 = chunk__60362_60863.cljs$core$IIndexed$_nth$arity$2(null,i__60364_60865);
class_list_60861.add(c_60866);


var G__60867 = seq__60361_60862;
var G__60868 = chunk__60362_60863;
var G__60869 = count__60363_60864;
var G__60870 = (i__60364_60865 + (1));
seq__60361_60862 = G__60867;
chunk__60362_60863 = G__60868;
count__60363_60864 = G__60869;
i__60364_60865 = G__60870;
continue;
} else {
var temp__5735__auto___60871 = cljs.core.seq(seq__60361_60862);
if(temp__5735__auto___60871){
var seq__60361_60872__$1 = temp__5735__auto___60871;
if(cljs.core.chunked_seq_QMARK_(seq__60361_60872__$1)){
var c__4556__auto___60873 = cljs.core.chunk_first(seq__60361_60872__$1);
var G__60874 = cljs.core.chunk_rest(seq__60361_60872__$1);
var G__60875 = c__4556__auto___60873;
var G__60876 = cljs.core.count(c__4556__auto___60873);
var G__60877 = (0);
seq__60361_60862 = G__60874;
chunk__60362_60863 = G__60875;
count__60363_60864 = G__60876;
i__60364_60865 = G__60877;
continue;
} else {
var c_60880 = cljs.core.first(seq__60361_60872__$1);
class_list_60861.add(c_60880);


var G__60881 = cljs.core.next(seq__60361_60872__$1);
var G__60882 = null;
var G__60883 = (0);
var G__60884 = (0);
seq__60361_60862 = G__60881;
chunk__60362_60863 = G__60882;
count__60363_60864 = G__60883;
i__60364_60865 = G__60884;
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
var G__60385 = arguments.length;
switch (G__60385) {
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
var G__60387 = arguments.length;
switch (G__60387) {
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
var G__60392 = arguments.length;
switch (G__60392) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60958 = arguments.length;
var i__4737__auto___60959 = (0);
while(true){
if((i__4737__auto___60959 < len__4736__auto___60958)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60959]));

var G__60962 = (i__4737__auto___60959 + (1));
i__4737__auto___60959 = G__60962;
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
var G__60393 = parent;
G__60393.appendChild(child);

return G__60393;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__60394_60965 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__60395_60966 = null;
var count__60396_60967 = (0);
var i__60397_60968 = (0);
while(true){
if((i__60397_60968 < count__60396_60967)){
var c_60973 = chunk__60395_60966.cljs$core$IIndexed$_nth$arity$2(null,i__60397_60968);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_60973);


var G__60974 = seq__60394_60965;
var G__60975 = chunk__60395_60966;
var G__60976 = count__60396_60967;
var G__60977 = (i__60397_60968 + (1));
seq__60394_60965 = G__60974;
chunk__60395_60966 = G__60975;
count__60396_60967 = G__60976;
i__60397_60968 = G__60977;
continue;
} else {
var temp__5735__auto___60978 = cljs.core.seq(seq__60394_60965);
if(temp__5735__auto___60978){
var seq__60394_60979__$1 = temp__5735__auto___60978;
if(cljs.core.chunked_seq_QMARK_(seq__60394_60979__$1)){
var c__4556__auto___60981 = cljs.core.chunk_first(seq__60394_60979__$1);
var G__60982 = cljs.core.chunk_rest(seq__60394_60979__$1);
var G__60983 = c__4556__auto___60981;
var G__60984 = cljs.core.count(c__4556__auto___60981);
var G__60985 = (0);
seq__60394_60965 = G__60982;
chunk__60395_60966 = G__60983;
count__60396_60967 = G__60984;
i__60397_60968 = G__60985;
continue;
} else {
var c_60987 = cljs.core.first(seq__60394_60979__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_60987);


var G__60989 = cljs.core.next(seq__60394_60979__$1);
var G__60990 = null;
var G__60991 = (0);
var G__60992 = (0);
seq__60394_60965 = G__60989;
chunk__60395_60966 = G__60990;
count__60396_60967 = G__60991;
i__60397_60968 = G__60992;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq60389){
var G__60390 = cljs.core.first(seq60389);
var seq60389__$1 = cljs.core.next(seq60389);
var G__60391 = cljs.core.first(seq60389__$1);
var seq60389__$2 = cljs.core.next(seq60389__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60390,G__60391,seq60389__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__60403 = arguments.length;
switch (G__60403) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60998 = arguments.length;
var i__4737__auto___60999 = (0);
while(true){
if((i__4737__auto___60999 < len__4736__auto___60998)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60999]));

var G__61001 = (i__4737__auto___60999 + (1));
i__4737__auto___60999 = G__61001;
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
var G__60404 = parent;
G__60404.insertBefore(child,parent.firstChild);

return G__60404;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__60405_61002 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__60406_61003 = null;
var count__60407_61004 = (0);
var i__60408_61005 = (0);
while(true){
if((i__60408_61005 < count__60407_61004)){
var c_61007 = chunk__60406_61003.cljs$core$IIndexed$_nth$arity$2(null,i__60408_61005);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_61007);


var G__61012 = seq__60405_61002;
var G__61013 = chunk__60406_61003;
var G__61014 = count__60407_61004;
var G__61015 = (i__60408_61005 + (1));
seq__60405_61002 = G__61012;
chunk__60406_61003 = G__61013;
count__60407_61004 = G__61014;
i__60408_61005 = G__61015;
continue;
} else {
var temp__5735__auto___61016 = cljs.core.seq(seq__60405_61002);
if(temp__5735__auto___61016){
var seq__60405_61017__$1 = temp__5735__auto___61016;
if(cljs.core.chunked_seq_QMARK_(seq__60405_61017__$1)){
var c__4556__auto___61018 = cljs.core.chunk_first(seq__60405_61017__$1);
var G__61019 = cljs.core.chunk_rest(seq__60405_61017__$1);
var G__61020 = c__4556__auto___61018;
var G__61021 = cljs.core.count(c__4556__auto___61018);
var G__61022 = (0);
seq__60405_61002 = G__61019;
chunk__60406_61003 = G__61020;
count__60407_61004 = G__61021;
i__60408_61005 = G__61022;
continue;
} else {
var c_61023 = cljs.core.first(seq__60405_61017__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_61023);


var G__61024 = cljs.core.next(seq__60405_61017__$1);
var G__61025 = null;
var G__61026 = (0);
var G__61027 = (0);
seq__60405_61002 = G__61024;
chunk__60406_61003 = G__61025;
count__60407_61004 = G__61026;
i__60408_61005 = G__61027;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq60400){
var G__60401 = cljs.core.first(seq60400);
var seq60400__$1 = cljs.core.next(seq60400);
var G__60402 = cljs.core.first(seq60400__$1);
var seq60400__$2 = cljs.core.next(seq60400__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60401,G__60402,seq60400__$2);
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
var temp__5733__auto___61033 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___61033)){
var next_61034 = temp__5733__auto___61033;
dommy.core.insert_before_BANG_(elem,next_61034);
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
var len__4736__auto___61036 = arguments.length;
var i__4737__auto___61037 = (0);
while(true){
if((i__4737__auto___61037 < len__4736__auto___61036)){
args__4742__auto__.push((arguments[i__4737__auto___61037]));

var G__61038 = (i__4737__auto___61037 + (1));
i__4737__auto___61037 = G__61038;
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

var vec__60423_61042 = dommy.core.elem_and_selector(elem_sel);
var elem_61043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60423_61042,(0),null);
var selector_61044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60423_61042,(1),null);
var seq__60426_61045 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__60433_61046 = null;
var count__60434_61047 = (0);
var i__60435_61048 = (0);
while(true){
if((i__60435_61048 < count__60434_61047)){
var vec__60491_61049 = chunk__60433_61046.cljs$core$IIndexed$_nth$arity$2(null,i__60435_61048);
var orig_type_61050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60491_61049,(0),null);
var f_61051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60491_61049,(1),null);
var seq__60436_61052 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61050,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61050,cljs.core.identity])));
var chunk__60438_61053 = null;
var count__60439_61054 = (0);
var i__60440_61055 = (0);
while(true){
if((i__60440_61055 < count__60439_61054)){
var vec__60504_61056 = chunk__60438_61053.cljs$core$IIndexed$_nth$arity$2(null,i__60440_61055);
var actual_type_61057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60504_61056,(0),null);
var factory_61058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60504_61056,(1),null);
var canonical_f_61059 = (function (){var G__60508 = (factory_61058.cljs$core$IFn$_invoke$arity$1 ? factory_61058.cljs$core$IFn$_invoke$arity$1(f_61051) : factory_61058.call(null,f_61051));
var fexpr__60507 = (cljs.core.truth_(selector_61044)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61043,selector_61044):cljs.core.identity);
return (fexpr__60507.cljs$core$IFn$_invoke$arity$1 ? fexpr__60507.cljs$core$IFn$_invoke$arity$1(G__60508) : fexpr__60507.call(null,G__60508));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61043,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61044,actual_type_61057,f_61051], null),canonical_f_61059], 0));

if(cljs.core.truth_(elem_61043.addEventListener)){
elem_61043.addEventListener(cljs.core.name(actual_type_61057),canonical_f_61059);
} else {
elem_61043.attachEvent(cljs.core.name(actual_type_61057),canonical_f_61059);
}


var G__61060 = seq__60436_61052;
var G__61061 = chunk__60438_61053;
var G__61062 = count__60439_61054;
var G__61063 = (i__60440_61055 + (1));
seq__60436_61052 = G__61060;
chunk__60438_61053 = G__61061;
count__60439_61054 = G__61062;
i__60440_61055 = G__61063;
continue;
} else {
var temp__5735__auto___61064 = cljs.core.seq(seq__60436_61052);
if(temp__5735__auto___61064){
var seq__60436_61065__$1 = temp__5735__auto___61064;
if(cljs.core.chunked_seq_QMARK_(seq__60436_61065__$1)){
var c__4556__auto___61066 = cljs.core.chunk_first(seq__60436_61065__$1);
var G__61067 = cljs.core.chunk_rest(seq__60436_61065__$1);
var G__61068 = c__4556__auto___61066;
var G__61069 = cljs.core.count(c__4556__auto___61066);
var G__61070 = (0);
seq__60436_61052 = G__61067;
chunk__60438_61053 = G__61068;
count__60439_61054 = G__61069;
i__60440_61055 = G__61070;
continue;
} else {
var vec__60509_61071 = cljs.core.first(seq__60436_61065__$1);
var actual_type_61072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60509_61071,(0),null);
var factory_61073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60509_61071,(1),null);
var canonical_f_61074 = (function (){var G__60513 = (factory_61073.cljs$core$IFn$_invoke$arity$1 ? factory_61073.cljs$core$IFn$_invoke$arity$1(f_61051) : factory_61073.call(null,f_61051));
var fexpr__60512 = (cljs.core.truth_(selector_61044)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61043,selector_61044):cljs.core.identity);
return (fexpr__60512.cljs$core$IFn$_invoke$arity$1 ? fexpr__60512.cljs$core$IFn$_invoke$arity$1(G__60513) : fexpr__60512.call(null,G__60513));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61043,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61044,actual_type_61072,f_61051], null),canonical_f_61074], 0));

if(cljs.core.truth_(elem_61043.addEventListener)){
elem_61043.addEventListener(cljs.core.name(actual_type_61072),canonical_f_61074);
} else {
elem_61043.attachEvent(cljs.core.name(actual_type_61072),canonical_f_61074);
}


var G__61075 = cljs.core.next(seq__60436_61065__$1);
var G__61076 = null;
var G__61077 = (0);
var G__61078 = (0);
seq__60436_61052 = G__61075;
chunk__60438_61053 = G__61076;
count__60439_61054 = G__61077;
i__60440_61055 = G__61078;
continue;
}
} else {
}
}
break;
}

var G__61079 = seq__60426_61045;
var G__61080 = chunk__60433_61046;
var G__61081 = count__60434_61047;
var G__61082 = (i__60435_61048 + (1));
seq__60426_61045 = G__61079;
chunk__60433_61046 = G__61080;
count__60434_61047 = G__61081;
i__60435_61048 = G__61082;
continue;
} else {
var temp__5735__auto___61083 = cljs.core.seq(seq__60426_61045);
if(temp__5735__auto___61083){
var seq__60426_61084__$1 = temp__5735__auto___61083;
if(cljs.core.chunked_seq_QMARK_(seq__60426_61084__$1)){
var c__4556__auto___61085 = cljs.core.chunk_first(seq__60426_61084__$1);
var G__61086 = cljs.core.chunk_rest(seq__60426_61084__$1);
var G__61087 = c__4556__auto___61085;
var G__61088 = cljs.core.count(c__4556__auto___61085);
var G__61089 = (0);
seq__60426_61045 = G__61086;
chunk__60433_61046 = G__61087;
count__60434_61047 = G__61088;
i__60435_61048 = G__61089;
continue;
} else {
var vec__60517_61090 = cljs.core.first(seq__60426_61084__$1);
var orig_type_61091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60517_61090,(0),null);
var f_61092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60517_61090,(1),null);
var seq__60427_61093 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61091,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61091,cljs.core.identity])));
var chunk__60429_61094 = null;
var count__60430_61095 = (0);
var i__60431_61096 = (0);
while(true){
if((i__60431_61096 < count__60430_61095)){
var vec__60530_61097 = chunk__60429_61094.cljs$core$IIndexed$_nth$arity$2(null,i__60431_61096);
var actual_type_61098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60530_61097,(0),null);
var factory_61099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60530_61097,(1),null);
var canonical_f_61100 = (function (){var G__60534 = (factory_61099.cljs$core$IFn$_invoke$arity$1 ? factory_61099.cljs$core$IFn$_invoke$arity$1(f_61092) : factory_61099.call(null,f_61092));
var fexpr__60533 = (cljs.core.truth_(selector_61044)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61043,selector_61044):cljs.core.identity);
return (fexpr__60533.cljs$core$IFn$_invoke$arity$1 ? fexpr__60533.cljs$core$IFn$_invoke$arity$1(G__60534) : fexpr__60533.call(null,G__60534));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61043,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61044,actual_type_61098,f_61092], null),canonical_f_61100], 0));

if(cljs.core.truth_(elem_61043.addEventListener)){
elem_61043.addEventListener(cljs.core.name(actual_type_61098),canonical_f_61100);
} else {
elem_61043.attachEvent(cljs.core.name(actual_type_61098),canonical_f_61100);
}


var G__61101 = seq__60427_61093;
var G__61102 = chunk__60429_61094;
var G__61103 = count__60430_61095;
var G__61104 = (i__60431_61096 + (1));
seq__60427_61093 = G__61101;
chunk__60429_61094 = G__61102;
count__60430_61095 = G__61103;
i__60431_61096 = G__61104;
continue;
} else {
var temp__5735__auto___61105__$1 = cljs.core.seq(seq__60427_61093);
if(temp__5735__auto___61105__$1){
var seq__60427_61106__$1 = temp__5735__auto___61105__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60427_61106__$1)){
var c__4556__auto___61107 = cljs.core.chunk_first(seq__60427_61106__$1);
var G__61108 = cljs.core.chunk_rest(seq__60427_61106__$1);
var G__61109 = c__4556__auto___61107;
var G__61110 = cljs.core.count(c__4556__auto___61107);
var G__61111 = (0);
seq__60427_61093 = G__61108;
chunk__60429_61094 = G__61109;
count__60430_61095 = G__61110;
i__60431_61096 = G__61111;
continue;
} else {
var vec__60535_61112 = cljs.core.first(seq__60427_61106__$1);
var actual_type_61113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60535_61112,(0),null);
var factory_61114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60535_61112,(1),null);
var canonical_f_61115 = (function (){var G__60539 = (factory_61114.cljs$core$IFn$_invoke$arity$1 ? factory_61114.cljs$core$IFn$_invoke$arity$1(f_61092) : factory_61114.call(null,f_61092));
var fexpr__60538 = (cljs.core.truth_(selector_61044)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61043,selector_61044):cljs.core.identity);
return (fexpr__60538.cljs$core$IFn$_invoke$arity$1 ? fexpr__60538.cljs$core$IFn$_invoke$arity$1(G__60539) : fexpr__60538.call(null,G__60539));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61043,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61044,actual_type_61113,f_61092], null),canonical_f_61115], 0));

if(cljs.core.truth_(elem_61043.addEventListener)){
elem_61043.addEventListener(cljs.core.name(actual_type_61113),canonical_f_61115);
} else {
elem_61043.attachEvent(cljs.core.name(actual_type_61113),canonical_f_61115);
}


var G__61116 = cljs.core.next(seq__60427_61106__$1);
var G__61117 = null;
var G__61118 = (0);
var G__61119 = (0);
seq__60427_61093 = G__61116;
chunk__60429_61094 = G__61117;
count__60430_61095 = G__61118;
i__60431_61096 = G__61119;
continue;
}
} else {
}
}
break;
}

var G__61120 = cljs.core.next(seq__60426_61084__$1);
var G__61121 = null;
var G__61122 = (0);
var G__61123 = (0);
seq__60426_61045 = G__61120;
chunk__60433_61046 = G__61121;
count__60434_61047 = G__61122;
i__60435_61048 = G__61123;
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

var vec__60542_61127 = dommy.core.elem_and_selector(elem_sel);
var elem_61128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60542_61127,(0),null);
var selector_61129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60542_61127,(1),null);
var seq__60545_61130 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__60552_61131 = null;
var count__60553_61132 = (0);
var i__60554_61133 = (0);
while(true){
if((i__60554_61133 < count__60553_61132)){
var vec__60602_61134 = chunk__60552_61131.cljs$core$IIndexed$_nth$arity$2(null,i__60554_61133);
var orig_type_61135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60602_61134,(0),null);
var f_61136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60602_61134,(1),null);
var seq__60555_61137 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61135,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61135,cljs.core.identity])));
var chunk__60557_61138 = null;
var count__60558_61139 = (0);
var i__60559_61140 = (0);
while(true){
if((i__60559_61140 < count__60558_61139)){
var vec__60611_61141 = chunk__60557_61138.cljs$core$IIndexed$_nth$arity$2(null,i__60559_61140);
var actual_type_61142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60611_61141,(0),null);
var __61143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60611_61141,(1),null);
var keys_61144 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61129,actual_type_61142,f_61136], null);
var canonical_f_61145 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61128),keys_61144);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61128,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61144], 0));

if(cljs.core.truth_(elem_61128.removeEventListener)){
elem_61128.removeEventListener(cljs.core.name(actual_type_61142),canonical_f_61145);
} else {
elem_61128.detachEvent(cljs.core.name(actual_type_61142),canonical_f_61145);
}


var G__61146 = seq__60555_61137;
var G__61147 = chunk__60557_61138;
var G__61148 = count__60558_61139;
var G__61149 = (i__60559_61140 + (1));
seq__60555_61137 = G__61146;
chunk__60557_61138 = G__61147;
count__60558_61139 = G__61148;
i__60559_61140 = G__61149;
continue;
} else {
var temp__5735__auto___61150 = cljs.core.seq(seq__60555_61137);
if(temp__5735__auto___61150){
var seq__60555_61151__$1 = temp__5735__auto___61150;
if(cljs.core.chunked_seq_QMARK_(seq__60555_61151__$1)){
var c__4556__auto___61152 = cljs.core.chunk_first(seq__60555_61151__$1);
var G__61153 = cljs.core.chunk_rest(seq__60555_61151__$1);
var G__61154 = c__4556__auto___61152;
var G__61155 = cljs.core.count(c__4556__auto___61152);
var G__61156 = (0);
seq__60555_61137 = G__61153;
chunk__60557_61138 = G__61154;
count__60558_61139 = G__61155;
i__60559_61140 = G__61156;
continue;
} else {
var vec__60615_61157 = cljs.core.first(seq__60555_61151__$1);
var actual_type_61158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60615_61157,(0),null);
var __61159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60615_61157,(1),null);
var keys_61160 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61129,actual_type_61158,f_61136], null);
var canonical_f_61161 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61128),keys_61160);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61128,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61160], 0));

if(cljs.core.truth_(elem_61128.removeEventListener)){
elem_61128.removeEventListener(cljs.core.name(actual_type_61158),canonical_f_61161);
} else {
elem_61128.detachEvent(cljs.core.name(actual_type_61158),canonical_f_61161);
}


var G__61162 = cljs.core.next(seq__60555_61151__$1);
var G__61163 = null;
var G__61164 = (0);
var G__61165 = (0);
seq__60555_61137 = G__61162;
chunk__60557_61138 = G__61163;
count__60558_61139 = G__61164;
i__60559_61140 = G__61165;
continue;
}
} else {
}
}
break;
}

var G__61166 = seq__60545_61130;
var G__61167 = chunk__60552_61131;
var G__61168 = count__60553_61132;
var G__61169 = (i__60554_61133 + (1));
seq__60545_61130 = G__61166;
chunk__60552_61131 = G__61167;
count__60553_61132 = G__61168;
i__60554_61133 = G__61169;
continue;
} else {
var temp__5735__auto___61170 = cljs.core.seq(seq__60545_61130);
if(temp__5735__auto___61170){
var seq__60545_61171__$1 = temp__5735__auto___61170;
if(cljs.core.chunked_seq_QMARK_(seq__60545_61171__$1)){
var c__4556__auto___61172 = cljs.core.chunk_first(seq__60545_61171__$1);
var G__61173 = cljs.core.chunk_rest(seq__60545_61171__$1);
var G__61174 = c__4556__auto___61172;
var G__61175 = cljs.core.count(c__4556__auto___61172);
var G__61176 = (0);
seq__60545_61130 = G__61173;
chunk__60552_61131 = G__61174;
count__60553_61132 = G__61175;
i__60554_61133 = G__61176;
continue;
} else {
var vec__60619_61177 = cljs.core.first(seq__60545_61171__$1);
var orig_type_61178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60619_61177,(0),null);
var f_61179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60619_61177,(1),null);
var seq__60546_61180 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61178,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61178,cljs.core.identity])));
var chunk__60548_61181 = null;
var count__60549_61182 = (0);
var i__60550_61183 = (0);
while(true){
if((i__60550_61183 < count__60549_61182)){
var vec__60631_61184 = chunk__60548_61181.cljs$core$IIndexed$_nth$arity$2(null,i__60550_61183);
var actual_type_61185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60631_61184,(0),null);
var __61186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60631_61184,(1),null);
var keys_61187 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61129,actual_type_61185,f_61179], null);
var canonical_f_61188 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61128),keys_61187);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61128,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61187], 0));

if(cljs.core.truth_(elem_61128.removeEventListener)){
elem_61128.removeEventListener(cljs.core.name(actual_type_61185),canonical_f_61188);
} else {
elem_61128.detachEvent(cljs.core.name(actual_type_61185),canonical_f_61188);
}


var G__61189 = seq__60546_61180;
var G__61190 = chunk__60548_61181;
var G__61191 = count__60549_61182;
var G__61192 = (i__60550_61183 + (1));
seq__60546_61180 = G__61189;
chunk__60548_61181 = G__61190;
count__60549_61182 = G__61191;
i__60550_61183 = G__61192;
continue;
} else {
var temp__5735__auto___61193__$1 = cljs.core.seq(seq__60546_61180);
if(temp__5735__auto___61193__$1){
var seq__60546_61194__$1 = temp__5735__auto___61193__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60546_61194__$1)){
var c__4556__auto___61195 = cljs.core.chunk_first(seq__60546_61194__$1);
var G__61196 = cljs.core.chunk_rest(seq__60546_61194__$1);
var G__61197 = c__4556__auto___61195;
var G__61198 = cljs.core.count(c__4556__auto___61195);
var G__61199 = (0);
seq__60546_61180 = G__61196;
chunk__60548_61181 = G__61197;
count__60549_61182 = G__61198;
i__60550_61183 = G__61199;
continue;
} else {
var vec__60634_61200 = cljs.core.first(seq__60546_61194__$1);
var actual_type_61201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60634_61200,(0),null);
var __61202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60634_61200,(1),null);
var keys_61203 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61129,actual_type_61201,f_61179], null);
var canonical_f_61204 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61128),keys_61203);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61128,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61203], 0));

if(cljs.core.truth_(elem_61128.removeEventListener)){
elem_61128.removeEventListener(cljs.core.name(actual_type_61201),canonical_f_61204);
} else {
elem_61128.detachEvent(cljs.core.name(actual_type_61201),canonical_f_61204);
}


var G__61207 = cljs.core.next(seq__60546_61194__$1);
var G__61208 = null;
var G__61209 = (0);
var G__61210 = (0);
seq__60546_61180 = G__61207;
chunk__60548_61181 = G__61208;
count__60549_61182 = G__61209;
i__60550_61183 = G__61210;
continue;
}
} else {
}
}
break;
}

var G__61212 = cljs.core.next(seq__60545_61171__$1);
var G__61213 = null;
var G__61214 = (0);
var G__61215 = (0);
seq__60545_61130 = G__61212;
chunk__60552_61131 = G__61213;
count__60553_61132 = G__61214;
i__60554_61133 = G__61215;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq60540){
var G__60541 = cljs.core.first(seq60540);
var seq60540__$1 = cljs.core.next(seq60540);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60541,seq60540__$1);
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

var vec__60644_61222 = dommy.core.elem_and_selector(elem_sel);
var elem_61223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60644_61222,(0),null);
var selector_61224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60644_61222,(1),null);
var seq__60647_61225 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__60648_61226 = null;
var count__60649_61227 = (0);
var i__60650_61228 = (0);
while(true){
if((i__60650_61228 < count__60649_61227)){
var vec__60680_61229 = chunk__60648_61226.cljs$core$IIndexed$_nth$arity$2(null,i__60650_61228);
var type_61230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60680_61229,(0),null);
var f_61231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60680_61229,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61230,((function (seq__60647_61225,chunk__60648_61226,count__60649_61227,i__60650_61228,vec__60680_61229,type_61230,f_61231,vec__60644_61222,elem_61223,selector_61224){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61230,dommy$core$this_fn], 0));

return (f_61231.cljs$core$IFn$_invoke$arity$1 ? f_61231.cljs$core$IFn$_invoke$arity$1(e) : f_61231.call(null,e));
});})(seq__60647_61225,chunk__60648_61226,count__60649_61227,i__60650_61228,vec__60680_61229,type_61230,f_61231,vec__60644_61222,elem_61223,selector_61224))
], 0));


var G__61232 = seq__60647_61225;
var G__61233 = chunk__60648_61226;
var G__61234 = count__60649_61227;
var G__61235 = (i__60650_61228 + (1));
seq__60647_61225 = G__61232;
chunk__60648_61226 = G__61233;
count__60649_61227 = G__61234;
i__60650_61228 = G__61235;
continue;
} else {
var temp__5735__auto___61236 = cljs.core.seq(seq__60647_61225);
if(temp__5735__auto___61236){
var seq__60647_61237__$1 = temp__5735__auto___61236;
if(cljs.core.chunked_seq_QMARK_(seq__60647_61237__$1)){
var c__4556__auto___61238 = cljs.core.chunk_first(seq__60647_61237__$1);
var G__61239 = cljs.core.chunk_rest(seq__60647_61237__$1);
var G__61240 = c__4556__auto___61238;
var G__61241 = cljs.core.count(c__4556__auto___61238);
var G__61242 = (0);
seq__60647_61225 = G__61239;
chunk__60648_61226 = G__61240;
count__60649_61227 = G__61241;
i__60650_61228 = G__61242;
continue;
} else {
var vec__60688_61243 = cljs.core.first(seq__60647_61237__$1);
var type_61244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60688_61243,(0),null);
var f_61245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60688_61243,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61244,((function (seq__60647_61225,chunk__60648_61226,count__60649_61227,i__60650_61228,vec__60688_61243,type_61244,f_61245,seq__60647_61237__$1,temp__5735__auto___61236,vec__60644_61222,elem_61223,selector_61224){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61244,dommy$core$this_fn], 0));

return (f_61245.cljs$core$IFn$_invoke$arity$1 ? f_61245.cljs$core$IFn$_invoke$arity$1(e) : f_61245.call(null,e));
});})(seq__60647_61225,chunk__60648_61226,count__60649_61227,i__60650_61228,vec__60688_61243,type_61244,f_61245,seq__60647_61237__$1,temp__5735__auto___61236,vec__60644_61222,elem_61223,selector_61224))
], 0));


var G__61250 = cljs.core.next(seq__60647_61237__$1);
var G__61251 = null;
var G__61252 = (0);
var G__61253 = (0);
seq__60647_61225 = G__61250;
chunk__60648_61226 = G__61251;
count__60649_61227 = G__61252;
i__60650_61228 = G__61253;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq60638){
var G__60639 = cljs.core.first(seq60638);
var seq60638__$1 = cljs.core.next(seq60638);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60639,seq60638__$1);
}));


//# sourceMappingURL=dommy.core.js.map
