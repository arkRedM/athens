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
var G__60252 = arguments.length;
switch (G__60252) {
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
var G__60254 = arguments.length;
switch (G__60254) {
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
var G__60257 = arguments.length;
switch (G__60257) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__60255_SHARP_){
return (!((p1__60255_SHARP_ === base)));
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
var len__4736__auto___60710 = arguments.length;
var i__4737__auto___60711 = (0);
while(true){
if((i__4737__auto___60711 < len__4736__auto___60710)){
args__4742__auto__.push((arguments[i__4737__auto___60711]));

var G__60712 = (i__4737__auto___60711 + (1));
i__4737__auto___60711 = G__60712;
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
var seq__60264_60713 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__60265_60714 = null;
var count__60266_60715 = (0);
var i__60267_60716 = (0);
while(true){
if((i__60267_60716 < count__60266_60715)){
var vec__60275_60717 = chunk__60265_60714.cljs$core$IIndexed$_nth$arity$2(null,i__60267_60716);
var k_60718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60275_60717,(0),null);
var v_60719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60275_60717,(1),null);
style.setProperty(dommy.utils.as_str(k_60718),v_60719);


var G__60720 = seq__60264_60713;
var G__60721 = chunk__60265_60714;
var G__60722 = count__60266_60715;
var G__60723 = (i__60267_60716 + (1));
seq__60264_60713 = G__60720;
chunk__60265_60714 = G__60721;
count__60266_60715 = G__60722;
i__60267_60716 = G__60723;
continue;
} else {
var temp__5735__auto___60724 = cljs.core.seq(seq__60264_60713);
if(temp__5735__auto___60724){
var seq__60264_60725__$1 = temp__5735__auto___60724;
if(cljs.core.chunked_seq_QMARK_(seq__60264_60725__$1)){
var c__4556__auto___60726 = cljs.core.chunk_first(seq__60264_60725__$1);
var G__60727 = cljs.core.chunk_rest(seq__60264_60725__$1);
var G__60728 = c__4556__auto___60726;
var G__60729 = cljs.core.count(c__4556__auto___60726);
var G__60730 = (0);
seq__60264_60713 = G__60727;
chunk__60265_60714 = G__60728;
count__60266_60715 = G__60729;
i__60267_60716 = G__60730;
continue;
} else {
var vec__60279_60731 = cljs.core.first(seq__60264_60725__$1);
var k_60732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60279_60731,(0),null);
var v_60733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60279_60731,(1),null);
style.setProperty(dommy.utils.as_str(k_60732),v_60733);


var G__60734 = cljs.core.next(seq__60264_60725__$1);
var G__60735 = null;
var G__60736 = (0);
var G__60737 = (0);
seq__60264_60713 = G__60734;
chunk__60265_60714 = G__60735;
count__60266_60715 = G__60736;
i__60267_60716 = G__60737;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq60261){
var G__60262 = cljs.core.first(seq60261);
var seq60261__$1 = cljs.core.next(seq60261);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60262,seq60261__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60738 = arguments.length;
var i__4737__auto___60739 = (0);
while(true){
if((i__4737__auto___60739 < len__4736__auto___60738)){
args__4742__auto__.push((arguments[i__4737__auto___60739]));

var G__60740 = (i__4737__auto___60739 + (1));
i__4737__auto___60739 = G__60740;
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
var seq__60286_60741 = cljs.core.seq(keywords);
var chunk__60287_60742 = null;
var count__60288_60743 = (0);
var i__60289_60744 = (0);
while(true){
if((i__60289_60744 < count__60288_60743)){
var kw_60745 = chunk__60287_60742.cljs$core$IIndexed$_nth$arity$2(null,i__60289_60744);
style.removeProperty(dommy.utils.as_str(kw_60745));


var G__60746 = seq__60286_60741;
var G__60747 = chunk__60287_60742;
var G__60748 = count__60288_60743;
var G__60749 = (i__60289_60744 + (1));
seq__60286_60741 = G__60746;
chunk__60287_60742 = G__60747;
count__60288_60743 = G__60748;
i__60289_60744 = G__60749;
continue;
} else {
var temp__5735__auto___60750 = cljs.core.seq(seq__60286_60741);
if(temp__5735__auto___60750){
var seq__60286_60751__$1 = temp__5735__auto___60750;
if(cljs.core.chunked_seq_QMARK_(seq__60286_60751__$1)){
var c__4556__auto___60752 = cljs.core.chunk_first(seq__60286_60751__$1);
var G__60753 = cljs.core.chunk_rest(seq__60286_60751__$1);
var G__60754 = c__4556__auto___60752;
var G__60755 = cljs.core.count(c__4556__auto___60752);
var G__60756 = (0);
seq__60286_60741 = G__60753;
chunk__60287_60742 = G__60754;
count__60288_60743 = G__60755;
i__60289_60744 = G__60756;
continue;
} else {
var kw_60757 = cljs.core.first(seq__60286_60751__$1);
style.removeProperty(dommy.utils.as_str(kw_60757));


var G__60758 = cljs.core.next(seq__60286_60751__$1);
var G__60759 = null;
var G__60760 = (0);
var G__60761 = (0);
seq__60286_60741 = G__60758;
chunk__60287_60742 = G__60759;
count__60288_60743 = G__60760;
i__60289_60744 = G__60761;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq60283){
var G__60284 = cljs.core.first(seq60283);
var seq60283__$1 = cljs.core.next(seq60283);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60284,seq60283__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60762 = arguments.length;
var i__4737__auto___60763 = (0);
while(true){
if((i__4737__auto___60763 < len__4736__auto___60762)){
args__4742__auto__.push((arguments[i__4737__auto___60763]));

var G__60764 = (i__4737__auto___60763 + (1));
i__4737__auto___60763 = G__60764;
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

var seq__60296_60765 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__60297_60766 = null;
var count__60298_60767 = (0);
var i__60299_60768 = (0);
while(true){
if((i__60299_60768 < count__60298_60767)){
var vec__60308_60769 = chunk__60297_60766.cljs$core$IIndexed$_nth$arity$2(null,i__60299_60768);
var k_60770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60308_60769,(0),null);
var v_60771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60308_60769,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_60770,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_60771),"px"].join('')], 0));


var G__60772 = seq__60296_60765;
var G__60773 = chunk__60297_60766;
var G__60774 = count__60298_60767;
var G__60775 = (i__60299_60768 + (1));
seq__60296_60765 = G__60772;
chunk__60297_60766 = G__60773;
count__60298_60767 = G__60774;
i__60299_60768 = G__60775;
continue;
} else {
var temp__5735__auto___60776 = cljs.core.seq(seq__60296_60765);
if(temp__5735__auto___60776){
var seq__60296_60777__$1 = temp__5735__auto___60776;
if(cljs.core.chunked_seq_QMARK_(seq__60296_60777__$1)){
var c__4556__auto___60778 = cljs.core.chunk_first(seq__60296_60777__$1);
var G__60779 = cljs.core.chunk_rest(seq__60296_60777__$1);
var G__60780 = c__4556__auto___60778;
var G__60781 = cljs.core.count(c__4556__auto___60778);
var G__60782 = (0);
seq__60296_60765 = G__60779;
chunk__60297_60766 = G__60780;
count__60298_60767 = G__60781;
i__60299_60768 = G__60782;
continue;
} else {
var vec__60311_60783 = cljs.core.first(seq__60296_60777__$1);
var k_60784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60311_60783,(0),null);
var v_60785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60311_60783,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_60784,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_60785),"px"].join('')], 0));


var G__60786 = cljs.core.next(seq__60296_60777__$1);
var G__60787 = null;
var G__60788 = (0);
var G__60789 = (0);
seq__60296_60765 = G__60786;
chunk__60297_60766 = G__60787;
count__60298_60767 = G__60788;
i__60299_60768 = G__60789;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq60293){
var G__60294 = cljs.core.first(seq60293);
var seq60293__$1 = cljs.core.next(seq60293);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60294,seq60293__$1);
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
var G__60319 = arguments.length;
switch (G__60319) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60791 = arguments.length;
var i__4737__auto___60792 = (0);
while(true){
if((i__4737__auto___60792 < len__4736__auto___60791)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60792]));

var G__60793 = (i__4737__auto___60792 + (1));
i__4737__auto___60792 = G__60793;
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
var G__60320 = elem;
(G__60320[k__$1] = v);

return G__60320;
} else {
var G__60321 = elem;
G__60321.setAttribute(k__$1,v);

return G__60321;
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

var seq__60322_60794 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__60323_60795 = null;
var count__60324_60796 = (0);
var i__60325_60797 = (0);
while(true){
if((i__60325_60797 < count__60324_60796)){
var vec__60332_60800 = chunk__60323_60795.cljs$core$IIndexed$_nth$arity$2(null,i__60325_60797);
var k_60801__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60332_60800,(0),null);
var v_60802__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60332_60800,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_60801__$1,v_60802__$1);


var G__60803 = seq__60322_60794;
var G__60804 = chunk__60323_60795;
var G__60805 = count__60324_60796;
var G__60806 = (i__60325_60797 + (1));
seq__60322_60794 = G__60803;
chunk__60323_60795 = G__60804;
count__60324_60796 = G__60805;
i__60325_60797 = G__60806;
continue;
} else {
var temp__5735__auto___60807 = cljs.core.seq(seq__60322_60794);
if(temp__5735__auto___60807){
var seq__60322_60808__$1 = temp__5735__auto___60807;
if(cljs.core.chunked_seq_QMARK_(seq__60322_60808__$1)){
var c__4556__auto___60809 = cljs.core.chunk_first(seq__60322_60808__$1);
var G__60810 = cljs.core.chunk_rest(seq__60322_60808__$1);
var G__60811 = c__4556__auto___60809;
var G__60812 = cljs.core.count(c__4556__auto___60809);
var G__60813 = (0);
seq__60322_60794 = G__60810;
chunk__60323_60795 = G__60811;
count__60324_60796 = G__60812;
i__60325_60797 = G__60813;
continue;
} else {
var vec__60335_60814 = cljs.core.first(seq__60322_60808__$1);
var k_60815__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60335_60814,(0),null);
var v_60816__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60335_60814,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_60815__$1,v_60816__$1);


var G__60817 = cljs.core.next(seq__60322_60808__$1);
var G__60818 = null;
var G__60819 = (0);
var G__60820 = (0);
seq__60322_60794 = G__60817;
chunk__60323_60795 = G__60818;
count__60324_60796 = G__60819;
i__60325_60797 = G__60820;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq60315){
var G__60316 = cljs.core.first(seq60315);
var seq60315__$1 = cljs.core.next(seq60315);
var G__60317 = cljs.core.first(seq60315__$1);
var seq60315__$2 = cljs.core.next(seq60315__$1);
var G__60318 = cljs.core.first(seq60315__$2);
var seq60315__$3 = cljs.core.next(seq60315__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60316,G__60317,G__60318,seq60315__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__60342 = arguments.length;
switch (G__60342) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60822 = arguments.length;
var i__4737__auto___60823 = (0);
while(true){
if((i__4737__auto___60823 < len__4736__auto___60822)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60823]));

var G__60824 = (i__4737__auto___60823 + (1));
i__4737__auto___60823 = G__60824;
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
var k_60825__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__60343 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__60343.cljs$core$IFn$_invoke$arity$1 ? fexpr__60343.cljs$core$IFn$_invoke$arity$1(k_60825__$1) : fexpr__60343.call(null,k_60825__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_60825__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__60344_60828 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__60345_60829 = null;
var count__60346_60830 = (0);
var i__60347_60831 = (0);
while(true){
if((i__60347_60831 < count__60346_60830)){
var k_60832__$1 = chunk__60345_60829.cljs$core$IIndexed$_nth$arity$2(null,i__60347_60831);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_60832__$1);


var G__60833 = seq__60344_60828;
var G__60834 = chunk__60345_60829;
var G__60835 = count__60346_60830;
var G__60836 = (i__60347_60831 + (1));
seq__60344_60828 = G__60833;
chunk__60345_60829 = G__60834;
count__60346_60830 = G__60835;
i__60347_60831 = G__60836;
continue;
} else {
var temp__5735__auto___60837 = cljs.core.seq(seq__60344_60828);
if(temp__5735__auto___60837){
var seq__60344_60838__$1 = temp__5735__auto___60837;
if(cljs.core.chunked_seq_QMARK_(seq__60344_60838__$1)){
var c__4556__auto___60839 = cljs.core.chunk_first(seq__60344_60838__$1);
var G__60840 = cljs.core.chunk_rest(seq__60344_60838__$1);
var G__60841 = c__4556__auto___60839;
var G__60842 = cljs.core.count(c__4556__auto___60839);
var G__60843 = (0);
seq__60344_60828 = G__60840;
chunk__60345_60829 = G__60841;
count__60346_60830 = G__60842;
i__60347_60831 = G__60843;
continue;
} else {
var k_60844__$1 = cljs.core.first(seq__60344_60838__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_60844__$1);


var G__60845 = cljs.core.next(seq__60344_60838__$1);
var G__60846 = null;
var G__60847 = (0);
var G__60848 = (0);
seq__60344_60828 = G__60845;
chunk__60345_60829 = G__60846;
count__60346_60830 = G__60847;
i__60347_60831 = G__60848;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq60339){
var G__60340 = cljs.core.first(seq60339);
var seq60339__$1 = cljs.core.next(seq60339);
var G__60341 = cljs.core.first(seq60339__$1);
var seq60339__$2 = cljs.core.next(seq60339__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60340,G__60341,seq60339__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__60349 = arguments.length;
switch (G__60349) {
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
var G__60354 = arguments.length;
switch (G__60354) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60853 = arguments.length;
var i__4737__auto___60854 = (0);
while(true){
if((i__4737__auto___60854 < len__4736__auto___60853)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60854]));

var G__60855 = (i__4737__auto___60854 + (1));
i__4737__auto___60854 = G__60855;
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
var temp__5733__auto___60856 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___60856)){
var class_list_60857 = temp__5733__auto___60856;
var seq__60355_60858 = cljs.core.seq(classes__$1);
var chunk__60356_60859 = null;
var count__60357_60860 = (0);
var i__60358_60861 = (0);
while(true){
if((i__60358_60861 < count__60357_60860)){
var c_60862 = chunk__60356_60859.cljs$core$IIndexed$_nth$arity$2(null,i__60358_60861);
class_list_60857.add(c_60862);


var G__60863 = seq__60355_60858;
var G__60864 = chunk__60356_60859;
var G__60865 = count__60357_60860;
var G__60866 = (i__60358_60861 + (1));
seq__60355_60858 = G__60863;
chunk__60356_60859 = G__60864;
count__60357_60860 = G__60865;
i__60358_60861 = G__60866;
continue;
} else {
var temp__5735__auto___60867 = cljs.core.seq(seq__60355_60858);
if(temp__5735__auto___60867){
var seq__60355_60868__$1 = temp__5735__auto___60867;
if(cljs.core.chunked_seq_QMARK_(seq__60355_60868__$1)){
var c__4556__auto___60869 = cljs.core.chunk_first(seq__60355_60868__$1);
var G__60870 = cljs.core.chunk_rest(seq__60355_60868__$1);
var G__60871 = c__4556__auto___60869;
var G__60872 = cljs.core.count(c__4556__auto___60869);
var G__60873 = (0);
seq__60355_60858 = G__60870;
chunk__60356_60859 = G__60871;
count__60357_60860 = G__60872;
i__60358_60861 = G__60873;
continue;
} else {
var c_60874 = cljs.core.first(seq__60355_60868__$1);
class_list_60857.add(c_60874);


var G__60875 = cljs.core.next(seq__60355_60868__$1);
var G__60876 = null;
var G__60877 = (0);
var G__60878 = (0);
seq__60355_60858 = G__60875;
chunk__60356_60859 = G__60876;
count__60357_60860 = G__60877;
i__60358_60861 = G__60878;
continue;
}
} else {
}
}
break;
}
} else {
var seq__60359_60879 = cljs.core.seq(classes__$1);
var chunk__60360_60880 = null;
var count__60361_60881 = (0);
var i__60362_60882 = (0);
while(true){
if((i__60362_60882 < count__60361_60881)){
var c_60883 = chunk__60360_60880.cljs$core$IIndexed$_nth$arity$2(null,i__60362_60882);
var class_name_60884 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_60884,c_60883))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_60884 === ""))?c_60883:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_60884)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_60883)].join('')));
}


var G__60885 = seq__60359_60879;
var G__60886 = chunk__60360_60880;
var G__60887 = count__60361_60881;
var G__60888 = (i__60362_60882 + (1));
seq__60359_60879 = G__60885;
chunk__60360_60880 = G__60886;
count__60361_60881 = G__60887;
i__60362_60882 = G__60888;
continue;
} else {
var temp__5735__auto___60889 = cljs.core.seq(seq__60359_60879);
if(temp__5735__auto___60889){
var seq__60359_60890__$1 = temp__5735__auto___60889;
if(cljs.core.chunked_seq_QMARK_(seq__60359_60890__$1)){
var c__4556__auto___60891 = cljs.core.chunk_first(seq__60359_60890__$1);
var G__60892 = cljs.core.chunk_rest(seq__60359_60890__$1);
var G__60893 = c__4556__auto___60891;
var G__60894 = cljs.core.count(c__4556__auto___60891);
var G__60895 = (0);
seq__60359_60879 = G__60892;
chunk__60360_60880 = G__60893;
count__60361_60881 = G__60894;
i__60362_60882 = G__60895;
continue;
} else {
var c_60896 = cljs.core.first(seq__60359_60890__$1);
var class_name_60897 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_60897,c_60896))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_60897 === ""))?c_60896:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_60897)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_60896)].join('')));
}


var G__60898 = cljs.core.next(seq__60359_60890__$1);
var G__60899 = null;
var G__60900 = (0);
var G__60901 = (0);
seq__60359_60879 = G__60898;
chunk__60360_60880 = G__60899;
count__60361_60881 = G__60900;
i__60362_60882 = G__60901;
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
var seq__60363_60902 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__60364_60903 = null;
var count__60365_60904 = (0);
var i__60366_60905 = (0);
while(true){
if((i__60366_60905 < count__60365_60904)){
var c_60906 = chunk__60364_60903.cljs$core$IIndexed$_nth$arity$2(null,i__60366_60905);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_60906);


var G__60907 = seq__60363_60902;
var G__60908 = chunk__60364_60903;
var G__60909 = count__60365_60904;
var G__60910 = (i__60366_60905 + (1));
seq__60363_60902 = G__60907;
chunk__60364_60903 = G__60908;
count__60365_60904 = G__60909;
i__60366_60905 = G__60910;
continue;
} else {
var temp__5735__auto___60911 = cljs.core.seq(seq__60363_60902);
if(temp__5735__auto___60911){
var seq__60363_60912__$1 = temp__5735__auto___60911;
if(cljs.core.chunked_seq_QMARK_(seq__60363_60912__$1)){
var c__4556__auto___60913 = cljs.core.chunk_first(seq__60363_60912__$1);
var G__60914 = cljs.core.chunk_rest(seq__60363_60912__$1);
var G__60915 = c__4556__auto___60913;
var G__60916 = cljs.core.count(c__4556__auto___60913);
var G__60917 = (0);
seq__60363_60902 = G__60914;
chunk__60364_60903 = G__60915;
count__60365_60904 = G__60916;
i__60366_60905 = G__60917;
continue;
} else {
var c_60918 = cljs.core.first(seq__60363_60912__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_60918);


var G__60919 = cljs.core.next(seq__60363_60912__$1);
var G__60920 = null;
var G__60921 = (0);
var G__60922 = (0);
seq__60363_60902 = G__60919;
chunk__60364_60903 = G__60920;
count__60365_60904 = G__60921;
i__60366_60905 = G__60922;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq60351){
var G__60352 = cljs.core.first(seq60351);
var seq60351__$1 = cljs.core.next(seq60351);
var G__60353 = cljs.core.first(seq60351__$1);
var seq60351__$2 = cljs.core.next(seq60351__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60352,G__60353,seq60351__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__60371 = arguments.length;
switch (G__60371) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60924 = arguments.length;
var i__4737__auto___60925 = (0);
while(true){
if((i__4737__auto___60925 < len__4736__auto___60924)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60925]));

var G__60926 = (i__4737__auto___60925 + (1));
i__4737__auto___60925 = G__60926;
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
var temp__5733__auto___60927 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___60927)){
var class_list_60928 = temp__5733__auto___60927;
class_list_60928.remove(c__$1);
} else {
var class_name_60929 = dommy.core.class$(elem);
var new_class_name_60930 = dommy.utils.remove_class_str(class_name_60929,c__$1);
if((class_name_60929 === new_class_name_60930)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_60930);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__60372 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__60373 = null;
var count__60374 = (0);
var i__60375 = (0);
while(true){
if((i__60375 < count__60374)){
var c = chunk__60373.cljs$core$IIndexed$_nth$arity$2(null,i__60375);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__60931 = seq__60372;
var G__60932 = chunk__60373;
var G__60933 = count__60374;
var G__60934 = (i__60375 + (1));
seq__60372 = G__60931;
chunk__60373 = G__60932;
count__60374 = G__60933;
i__60375 = G__60934;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60372);
if(temp__5735__auto__){
var seq__60372__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60372__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60372__$1);
var G__60935 = cljs.core.chunk_rest(seq__60372__$1);
var G__60936 = c__4556__auto__;
var G__60937 = cljs.core.count(c__4556__auto__);
var G__60938 = (0);
seq__60372 = G__60935;
chunk__60373 = G__60936;
count__60374 = G__60937;
i__60375 = G__60938;
continue;
} else {
var c = cljs.core.first(seq__60372__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__60939 = cljs.core.next(seq__60372__$1);
var G__60940 = null;
var G__60941 = (0);
var G__60942 = (0);
seq__60372 = G__60939;
chunk__60373 = G__60940;
count__60374 = G__60941;
i__60375 = G__60942;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq60368){
var G__60369 = cljs.core.first(seq60368);
var seq60368__$1 = cljs.core.next(seq60368);
var G__60370 = cljs.core.first(seq60368__$1);
var seq60368__$2 = cljs.core.next(seq60368__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60369,G__60370,seq60368__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__60377 = arguments.length;
switch (G__60377) {
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
var temp__5733__auto___60944 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___60944)){
var class_list_60945 = temp__5733__auto___60944;
class_list_60945.toggle(c__$1);
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
var G__60379 = arguments.length;
switch (G__60379) {
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
var G__60382 = arguments.length;
switch (G__60382) {
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
var G__60389 = arguments.length;
switch (G__60389) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60951 = arguments.length;
var i__4737__auto___60952 = (0);
while(true){
if((i__4737__auto___60952 < len__4736__auto___60951)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60952]));

var G__60953 = (i__4737__auto___60952 + (1));
i__4737__auto___60952 = G__60953;
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
var G__60390 = parent;
G__60390.appendChild(child);

return G__60390;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__60391_60954 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__60392_60955 = null;
var count__60393_60956 = (0);
var i__60394_60957 = (0);
while(true){
if((i__60394_60957 < count__60393_60956)){
var c_60959 = chunk__60392_60955.cljs$core$IIndexed$_nth$arity$2(null,i__60394_60957);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_60959);


var G__60960 = seq__60391_60954;
var G__60961 = chunk__60392_60955;
var G__60962 = count__60393_60956;
var G__60963 = (i__60394_60957 + (1));
seq__60391_60954 = G__60960;
chunk__60392_60955 = G__60961;
count__60393_60956 = G__60962;
i__60394_60957 = G__60963;
continue;
} else {
var temp__5735__auto___60964 = cljs.core.seq(seq__60391_60954);
if(temp__5735__auto___60964){
var seq__60391_60966__$1 = temp__5735__auto___60964;
if(cljs.core.chunked_seq_QMARK_(seq__60391_60966__$1)){
var c__4556__auto___60967 = cljs.core.chunk_first(seq__60391_60966__$1);
var G__60969 = cljs.core.chunk_rest(seq__60391_60966__$1);
var G__60970 = c__4556__auto___60967;
var G__60971 = cljs.core.count(c__4556__auto___60967);
var G__60972 = (0);
seq__60391_60954 = G__60969;
chunk__60392_60955 = G__60970;
count__60393_60956 = G__60971;
i__60394_60957 = G__60972;
continue;
} else {
var c_60973 = cljs.core.first(seq__60391_60966__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_60973);


var G__60975 = cljs.core.next(seq__60391_60966__$1);
var G__60976 = null;
var G__60977 = (0);
var G__60978 = (0);
seq__60391_60954 = G__60975;
chunk__60392_60955 = G__60976;
count__60393_60956 = G__60977;
i__60394_60957 = G__60978;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq60386){
var G__60387 = cljs.core.first(seq60386);
var seq60386__$1 = cljs.core.next(seq60386);
var G__60388 = cljs.core.first(seq60386__$1);
var seq60386__$2 = cljs.core.next(seq60386__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60387,G__60388,seq60386__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__60399 = arguments.length;
switch (G__60399) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___60980 = arguments.length;
var i__4737__auto___60981 = (0);
while(true){
if((i__4737__auto___60981 < len__4736__auto___60980)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60981]));

var G__60983 = (i__4737__auto___60981 + (1));
i__4737__auto___60981 = G__60983;
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
var G__60400 = parent;
G__60400.insertBefore(child,parent.firstChild);

return G__60400;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__60401_60988 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__60402_60989 = null;
var count__60403_60990 = (0);
var i__60404_60991 = (0);
while(true){
if((i__60404_60991 < count__60403_60990)){
var c_60992 = chunk__60402_60989.cljs$core$IIndexed$_nth$arity$2(null,i__60404_60991);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_60992);


var G__60994 = seq__60401_60988;
var G__60995 = chunk__60402_60989;
var G__60996 = count__60403_60990;
var G__60997 = (i__60404_60991 + (1));
seq__60401_60988 = G__60994;
chunk__60402_60989 = G__60995;
count__60403_60990 = G__60996;
i__60404_60991 = G__60997;
continue;
} else {
var temp__5735__auto___60998 = cljs.core.seq(seq__60401_60988);
if(temp__5735__auto___60998){
var seq__60401_61000__$1 = temp__5735__auto___60998;
if(cljs.core.chunked_seq_QMARK_(seq__60401_61000__$1)){
var c__4556__auto___61001 = cljs.core.chunk_first(seq__60401_61000__$1);
var G__61002 = cljs.core.chunk_rest(seq__60401_61000__$1);
var G__61003 = c__4556__auto___61001;
var G__61004 = cljs.core.count(c__4556__auto___61001);
var G__61005 = (0);
seq__60401_60988 = G__61002;
chunk__60402_60989 = G__61003;
count__60403_60990 = G__61004;
i__60404_60991 = G__61005;
continue;
} else {
var c_61007 = cljs.core.first(seq__60401_61000__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_61007);


var G__61009 = cljs.core.next(seq__60401_61000__$1);
var G__61010 = null;
var G__61011 = (0);
var G__61012 = (0);
seq__60401_60988 = G__61009;
chunk__60402_60989 = G__61010;
count__60403_60990 = G__61011;
i__60404_60991 = G__61012;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq60396){
var G__60397 = cljs.core.first(seq60396);
var seq60396__$1 = cljs.core.next(seq60396);
var G__60398 = cljs.core.first(seq60396__$1);
var seq60396__$2 = cljs.core.next(seq60396__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60397,G__60398,seq60396__$2);
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
var temp__5733__auto___61017 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___61017)){
var next_61018 = temp__5733__auto___61017;
dommy.core.insert_before_BANG_(elem,next_61018);
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
var G__60406 = arguments.length;
switch (G__60406) {
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
var G__60407 = p;
G__60407.removeChild(elem);

return G__60407;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60408){
var vec__60409 = p__60408;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60409,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60409,(1),null);
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
var len__4736__auto___61030 = arguments.length;
var i__4737__auto___61031 = (0);
while(true){
if((i__4737__auto___61031 < len__4736__auto___61030)){
args__4742__auto__.push((arguments[i__4737__auto___61031]));

var G__61032 = (i__4737__auto___61031 + (1));
i__4737__auto___61031 = G__61032;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq60412){
var G__60413 = cljs.core.first(seq60412);
var seq60412__$1 = cljs.core.next(seq60412);
var G__60414 = cljs.core.first(seq60412__$1);
var seq60412__$2 = cljs.core.next(seq60412__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60413,G__60414,seq60412__$2);
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
var len__4736__auto___61033 = arguments.length;
var i__4737__auto___61034 = (0);
while(true){
if((i__4737__auto___61034 < len__4736__auto___61033)){
args__4742__auto__.push((arguments[i__4737__auto___61034]));

var G__61035 = (i__4737__auto___61034 + (1));
i__4737__auto___61034 = G__61035;
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

var vec__60417_61036 = dommy.core.elem_and_selector(elem_sel);
var elem_61037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60417_61036,(0),null);
var selector_61038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60417_61036,(1),null);
var seq__60420_61039 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__60427_61040 = null;
var count__60428_61041 = (0);
var i__60429_61042 = (0);
while(true){
if((i__60429_61042 < count__60428_61041)){
var vec__60488_61043 = chunk__60427_61040.cljs$core$IIndexed$_nth$arity$2(null,i__60429_61042);
var orig_type_61044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60488_61043,(0),null);
var f_61045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60488_61043,(1),null);
var seq__60430_61046 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61044,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61044,cljs.core.identity])));
var chunk__60432_61047 = null;
var count__60433_61048 = (0);
var i__60434_61049 = (0);
while(true){
if((i__60434_61049 < count__60433_61048)){
var vec__60501_61050 = chunk__60432_61047.cljs$core$IIndexed$_nth$arity$2(null,i__60434_61049);
var actual_type_61051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60501_61050,(0),null);
var factory_61052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60501_61050,(1),null);
var canonical_f_61053 = (function (){var G__60505 = (factory_61052.cljs$core$IFn$_invoke$arity$1 ? factory_61052.cljs$core$IFn$_invoke$arity$1(f_61045) : factory_61052.call(null,f_61045));
var fexpr__60504 = (cljs.core.truth_(selector_61038)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61037,selector_61038):cljs.core.identity);
return (fexpr__60504.cljs$core$IFn$_invoke$arity$1 ? fexpr__60504.cljs$core$IFn$_invoke$arity$1(G__60505) : fexpr__60504.call(null,G__60505));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61037,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61038,actual_type_61051,f_61045], null),canonical_f_61053], 0));

if(cljs.core.truth_(elem_61037.addEventListener)){
elem_61037.addEventListener(cljs.core.name(actual_type_61051),canonical_f_61053);
} else {
elem_61037.attachEvent(cljs.core.name(actual_type_61051),canonical_f_61053);
}


var G__61054 = seq__60430_61046;
var G__61055 = chunk__60432_61047;
var G__61056 = count__60433_61048;
var G__61057 = (i__60434_61049 + (1));
seq__60430_61046 = G__61054;
chunk__60432_61047 = G__61055;
count__60433_61048 = G__61056;
i__60434_61049 = G__61057;
continue;
} else {
var temp__5735__auto___61058 = cljs.core.seq(seq__60430_61046);
if(temp__5735__auto___61058){
var seq__60430_61059__$1 = temp__5735__auto___61058;
if(cljs.core.chunked_seq_QMARK_(seq__60430_61059__$1)){
var c__4556__auto___61060 = cljs.core.chunk_first(seq__60430_61059__$1);
var G__61061 = cljs.core.chunk_rest(seq__60430_61059__$1);
var G__61062 = c__4556__auto___61060;
var G__61063 = cljs.core.count(c__4556__auto___61060);
var G__61064 = (0);
seq__60430_61046 = G__61061;
chunk__60432_61047 = G__61062;
count__60433_61048 = G__61063;
i__60434_61049 = G__61064;
continue;
} else {
var vec__60506_61065 = cljs.core.first(seq__60430_61059__$1);
var actual_type_61066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60506_61065,(0),null);
var factory_61067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60506_61065,(1),null);
var canonical_f_61068 = (function (){var G__60510 = (factory_61067.cljs$core$IFn$_invoke$arity$1 ? factory_61067.cljs$core$IFn$_invoke$arity$1(f_61045) : factory_61067.call(null,f_61045));
var fexpr__60509 = (cljs.core.truth_(selector_61038)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61037,selector_61038):cljs.core.identity);
return (fexpr__60509.cljs$core$IFn$_invoke$arity$1 ? fexpr__60509.cljs$core$IFn$_invoke$arity$1(G__60510) : fexpr__60509.call(null,G__60510));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61037,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61038,actual_type_61066,f_61045], null),canonical_f_61068], 0));

if(cljs.core.truth_(elem_61037.addEventListener)){
elem_61037.addEventListener(cljs.core.name(actual_type_61066),canonical_f_61068);
} else {
elem_61037.attachEvent(cljs.core.name(actual_type_61066),canonical_f_61068);
}


var G__61069 = cljs.core.next(seq__60430_61059__$1);
var G__61070 = null;
var G__61071 = (0);
var G__61072 = (0);
seq__60430_61046 = G__61069;
chunk__60432_61047 = G__61070;
count__60433_61048 = G__61071;
i__60434_61049 = G__61072;
continue;
}
} else {
}
}
break;
}

var G__61073 = seq__60420_61039;
var G__61074 = chunk__60427_61040;
var G__61075 = count__60428_61041;
var G__61076 = (i__60429_61042 + (1));
seq__60420_61039 = G__61073;
chunk__60427_61040 = G__61074;
count__60428_61041 = G__61075;
i__60429_61042 = G__61076;
continue;
} else {
var temp__5735__auto___61077 = cljs.core.seq(seq__60420_61039);
if(temp__5735__auto___61077){
var seq__60420_61078__$1 = temp__5735__auto___61077;
if(cljs.core.chunked_seq_QMARK_(seq__60420_61078__$1)){
var c__4556__auto___61079 = cljs.core.chunk_first(seq__60420_61078__$1);
var G__61080 = cljs.core.chunk_rest(seq__60420_61078__$1);
var G__61081 = c__4556__auto___61079;
var G__61082 = cljs.core.count(c__4556__auto___61079);
var G__61083 = (0);
seq__60420_61039 = G__61080;
chunk__60427_61040 = G__61081;
count__60428_61041 = G__61082;
i__60429_61042 = G__61083;
continue;
} else {
var vec__60511_61084 = cljs.core.first(seq__60420_61078__$1);
var orig_type_61085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60511_61084,(0),null);
var f_61086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60511_61084,(1),null);
var seq__60421_61087 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61085,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61085,cljs.core.identity])));
var chunk__60423_61088 = null;
var count__60424_61089 = (0);
var i__60425_61090 = (0);
while(true){
if((i__60425_61090 < count__60424_61089)){
var vec__60528_61091 = chunk__60423_61088.cljs$core$IIndexed$_nth$arity$2(null,i__60425_61090);
var actual_type_61092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60528_61091,(0),null);
var factory_61093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60528_61091,(1),null);
var canonical_f_61094 = (function (){var G__60532 = (factory_61093.cljs$core$IFn$_invoke$arity$1 ? factory_61093.cljs$core$IFn$_invoke$arity$1(f_61086) : factory_61093.call(null,f_61086));
var fexpr__60531 = (cljs.core.truth_(selector_61038)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61037,selector_61038):cljs.core.identity);
return (fexpr__60531.cljs$core$IFn$_invoke$arity$1 ? fexpr__60531.cljs$core$IFn$_invoke$arity$1(G__60532) : fexpr__60531.call(null,G__60532));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61037,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61038,actual_type_61092,f_61086], null),canonical_f_61094], 0));

if(cljs.core.truth_(elem_61037.addEventListener)){
elem_61037.addEventListener(cljs.core.name(actual_type_61092),canonical_f_61094);
} else {
elem_61037.attachEvent(cljs.core.name(actual_type_61092),canonical_f_61094);
}


var G__61095 = seq__60421_61087;
var G__61096 = chunk__60423_61088;
var G__61097 = count__60424_61089;
var G__61098 = (i__60425_61090 + (1));
seq__60421_61087 = G__61095;
chunk__60423_61088 = G__61096;
count__60424_61089 = G__61097;
i__60425_61090 = G__61098;
continue;
} else {
var temp__5735__auto___61099__$1 = cljs.core.seq(seq__60421_61087);
if(temp__5735__auto___61099__$1){
var seq__60421_61100__$1 = temp__5735__auto___61099__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60421_61100__$1)){
var c__4556__auto___61101 = cljs.core.chunk_first(seq__60421_61100__$1);
var G__61102 = cljs.core.chunk_rest(seq__60421_61100__$1);
var G__61103 = c__4556__auto___61101;
var G__61104 = cljs.core.count(c__4556__auto___61101);
var G__61105 = (0);
seq__60421_61087 = G__61102;
chunk__60423_61088 = G__61103;
count__60424_61089 = G__61104;
i__60425_61090 = G__61105;
continue;
} else {
var vec__60533_61106 = cljs.core.first(seq__60421_61100__$1);
var actual_type_61107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60533_61106,(0),null);
var factory_61108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60533_61106,(1),null);
var canonical_f_61109 = (function (){var G__60537 = (factory_61108.cljs$core$IFn$_invoke$arity$1 ? factory_61108.cljs$core$IFn$_invoke$arity$1(f_61086) : factory_61108.call(null,f_61086));
var fexpr__60536 = (cljs.core.truth_(selector_61038)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61037,selector_61038):cljs.core.identity);
return (fexpr__60536.cljs$core$IFn$_invoke$arity$1 ? fexpr__60536.cljs$core$IFn$_invoke$arity$1(G__60537) : fexpr__60536.call(null,G__60537));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61037,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61038,actual_type_61107,f_61086], null),canonical_f_61109], 0));

if(cljs.core.truth_(elem_61037.addEventListener)){
elem_61037.addEventListener(cljs.core.name(actual_type_61107),canonical_f_61109);
} else {
elem_61037.attachEvent(cljs.core.name(actual_type_61107),canonical_f_61109);
}


var G__61110 = cljs.core.next(seq__60421_61100__$1);
var G__61111 = null;
var G__61112 = (0);
var G__61113 = (0);
seq__60421_61087 = G__61110;
chunk__60423_61088 = G__61111;
count__60424_61089 = G__61112;
i__60425_61090 = G__61113;
continue;
}
} else {
}
}
break;
}

var G__61114 = cljs.core.next(seq__60420_61078__$1);
var G__61115 = null;
var G__61116 = (0);
var G__61117 = (0);
seq__60420_61039 = G__61114;
chunk__60427_61040 = G__61115;
count__60428_61041 = G__61116;
i__60429_61042 = G__61117;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq60415){
var G__60416 = cljs.core.first(seq60415);
var seq60415__$1 = cljs.core.next(seq60415);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60416,seq60415__$1);
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
var len__4736__auto___61118 = arguments.length;
var i__4737__auto___61119 = (0);
while(true){
if((i__4737__auto___61119 < len__4736__auto___61118)){
args__4742__auto__.push((arguments[i__4737__auto___61119]));

var G__61120 = (i__4737__auto___61119 + (1));
i__4737__auto___61119 = G__61120;
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

var vec__60543_61121 = dommy.core.elem_and_selector(elem_sel);
var elem_61122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60543_61121,(0),null);
var selector_61123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60543_61121,(1),null);
var seq__60546_61124 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__60553_61125 = null;
var count__60554_61126 = (0);
var i__60555_61127 = (0);
while(true){
if((i__60555_61127 < count__60554_61126)){
var vec__60597_61128 = chunk__60553_61125.cljs$core$IIndexed$_nth$arity$2(null,i__60555_61127);
var orig_type_61129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60597_61128,(0),null);
var f_61130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60597_61128,(1),null);
var seq__60556_61131 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61129,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61129,cljs.core.identity])));
var chunk__60558_61132 = null;
var count__60559_61133 = (0);
var i__60560_61134 = (0);
while(true){
if((i__60560_61134 < count__60559_61133)){
var vec__60610_61135 = chunk__60558_61132.cljs$core$IIndexed$_nth$arity$2(null,i__60560_61134);
var actual_type_61136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60610_61135,(0),null);
var __61137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60610_61135,(1),null);
var keys_61138 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61123,actual_type_61136,f_61130], null);
var canonical_f_61139 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61122),keys_61138);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61122,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61138], 0));

if(cljs.core.truth_(elem_61122.removeEventListener)){
elem_61122.removeEventListener(cljs.core.name(actual_type_61136),canonical_f_61139);
} else {
elem_61122.detachEvent(cljs.core.name(actual_type_61136),canonical_f_61139);
}


var G__61140 = seq__60556_61131;
var G__61141 = chunk__60558_61132;
var G__61142 = count__60559_61133;
var G__61143 = (i__60560_61134 + (1));
seq__60556_61131 = G__61140;
chunk__60558_61132 = G__61141;
count__60559_61133 = G__61142;
i__60560_61134 = G__61143;
continue;
} else {
var temp__5735__auto___61144 = cljs.core.seq(seq__60556_61131);
if(temp__5735__auto___61144){
var seq__60556_61145__$1 = temp__5735__auto___61144;
if(cljs.core.chunked_seq_QMARK_(seq__60556_61145__$1)){
var c__4556__auto___61146 = cljs.core.chunk_first(seq__60556_61145__$1);
var G__61147 = cljs.core.chunk_rest(seq__60556_61145__$1);
var G__61148 = c__4556__auto___61146;
var G__61149 = cljs.core.count(c__4556__auto___61146);
var G__61150 = (0);
seq__60556_61131 = G__61147;
chunk__60558_61132 = G__61148;
count__60559_61133 = G__61149;
i__60560_61134 = G__61150;
continue;
} else {
var vec__60613_61153 = cljs.core.first(seq__60556_61145__$1);
var actual_type_61154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60613_61153,(0),null);
var __61155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60613_61153,(1),null);
var keys_61156 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61123,actual_type_61154,f_61130], null);
var canonical_f_61157 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61122),keys_61156);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61122,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61156], 0));

if(cljs.core.truth_(elem_61122.removeEventListener)){
elem_61122.removeEventListener(cljs.core.name(actual_type_61154),canonical_f_61157);
} else {
elem_61122.detachEvent(cljs.core.name(actual_type_61154),canonical_f_61157);
}


var G__61160 = cljs.core.next(seq__60556_61145__$1);
var G__61161 = null;
var G__61162 = (0);
var G__61163 = (0);
seq__60556_61131 = G__61160;
chunk__60558_61132 = G__61161;
count__60559_61133 = G__61162;
i__60560_61134 = G__61163;
continue;
}
} else {
}
}
break;
}

var G__61165 = seq__60546_61124;
var G__61166 = chunk__60553_61125;
var G__61167 = count__60554_61126;
var G__61168 = (i__60555_61127 + (1));
seq__60546_61124 = G__61165;
chunk__60553_61125 = G__61166;
count__60554_61126 = G__61167;
i__60555_61127 = G__61168;
continue;
} else {
var temp__5735__auto___61169 = cljs.core.seq(seq__60546_61124);
if(temp__5735__auto___61169){
var seq__60546_61171__$1 = temp__5735__auto___61169;
if(cljs.core.chunked_seq_QMARK_(seq__60546_61171__$1)){
var c__4556__auto___61172 = cljs.core.chunk_first(seq__60546_61171__$1);
var G__61173 = cljs.core.chunk_rest(seq__60546_61171__$1);
var G__61174 = c__4556__auto___61172;
var G__61175 = cljs.core.count(c__4556__auto___61172);
var G__61176 = (0);
seq__60546_61124 = G__61173;
chunk__60553_61125 = G__61174;
count__60554_61126 = G__61175;
i__60555_61127 = G__61176;
continue;
} else {
var vec__60617_61177 = cljs.core.first(seq__60546_61171__$1);
var orig_type_61178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60617_61177,(0),null);
var f_61179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60617_61177,(1),null);
var seq__60547_61180 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61178,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61178,cljs.core.identity])));
var chunk__60549_61181 = null;
var count__60550_61182 = (0);
var i__60551_61183 = (0);
while(true){
if((i__60551_61183 < count__60550_61182)){
var vec__60630_61184 = chunk__60549_61181.cljs$core$IIndexed$_nth$arity$2(null,i__60551_61183);
var actual_type_61185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60630_61184,(0),null);
var __61186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60630_61184,(1),null);
var keys_61187 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61123,actual_type_61185,f_61179], null);
var canonical_f_61188 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61122),keys_61187);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61122,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61187], 0));

if(cljs.core.truth_(elem_61122.removeEventListener)){
elem_61122.removeEventListener(cljs.core.name(actual_type_61185),canonical_f_61188);
} else {
elem_61122.detachEvent(cljs.core.name(actual_type_61185),canonical_f_61188);
}


var G__61189 = seq__60547_61180;
var G__61191 = chunk__60549_61181;
var G__61192 = count__60550_61182;
var G__61193 = (i__60551_61183 + (1));
seq__60547_61180 = G__61189;
chunk__60549_61181 = G__61191;
count__60550_61182 = G__61192;
i__60551_61183 = G__61193;
continue;
} else {
var temp__5735__auto___61195__$1 = cljs.core.seq(seq__60547_61180);
if(temp__5735__auto___61195__$1){
var seq__60547_61197__$1 = temp__5735__auto___61195__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60547_61197__$1)){
var c__4556__auto___61199 = cljs.core.chunk_first(seq__60547_61197__$1);
var G__61200 = cljs.core.chunk_rest(seq__60547_61197__$1);
var G__61201 = c__4556__auto___61199;
var G__61202 = cljs.core.count(c__4556__auto___61199);
var G__61203 = (0);
seq__60547_61180 = G__61200;
chunk__60549_61181 = G__61201;
count__60550_61182 = G__61202;
i__60551_61183 = G__61203;
continue;
} else {
var vec__60645_61204 = cljs.core.first(seq__60547_61197__$1);
var actual_type_61205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60645_61204,(0),null);
var __61206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60645_61204,(1),null);
var keys_61207 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61123,actual_type_61205,f_61179], null);
var canonical_f_61208 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61122),keys_61207);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61122,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61207], 0));

if(cljs.core.truth_(elem_61122.removeEventListener)){
elem_61122.removeEventListener(cljs.core.name(actual_type_61205),canonical_f_61208);
} else {
elem_61122.detachEvent(cljs.core.name(actual_type_61205),canonical_f_61208);
}


var G__61212 = cljs.core.next(seq__60547_61197__$1);
var G__61213 = null;
var G__61214 = (0);
var G__61215 = (0);
seq__60547_61180 = G__61212;
chunk__60549_61181 = G__61213;
count__60550_61182 = G__61214;
i__60551_61183 = G__61215;
continue;
}
} else {
}
}
break;
}

var G__61216 = cljs.core.next(seq__60546_61171__$1);
var G__61217 = null;
var G__61218 = (0);
var G__61219 = (0);
seq__60546_61124 = G__61216;
chunk__60553_61125 = G__61217;
count__60554_61126 = G__61218;
i__60555_61127 = G__61219;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq60538){
var G__60539 = cljs.core.first(seq60538);
var seq60538__$1 = cljs.core.next(seq60538);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60539,seq60538__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61220 = arguments.length;
var i__4737__auto___61221 = (0);
while(true){
if((i__4737__auto___61221 < len__4736__auto___61220)){
args__4742__auto__.push((arguments[i__4737__auto___61221]));

var G__61227 = (i__4737__auto___61221 + (1));
i__4737__auto___61221 = G__61227;
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

var vec__60661_61230 = dommy.core.elem_and_selector(elem_sel);
var elem_61231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60661_61230,(0),null);
var selector_61232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60661_61230,(1),null);
var seq__60664_61233 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__60665_61234 = null;
var count__60666_61235 = (0);
var i__60667_61236 = (0);
while(true){
if((i__60667_61236 < count__60666_61235)){
var vec__60692_61239 = chunk__60665_61234.cljs$core$IIndexed$_nth$arity$2(null,i__60667_61236);
var type_61240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60692_61239,(0),null);
var f_61241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60692_61239,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61240,((function (seq__60664_61233,chunk__60665_61234,count__60666_61235,i__60667_61236,vec__60692_61239,type_61240,f_61241,vec__60661_61230,elem_61231,selector_61232){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61240,dommy$core$this_fn], 0));

return (f_61241.cljs$core$IFn$_invoke$arity$1 ? f_61241.cljs$core$IFn$_invoke$arity$1(e) : f_61241.call(null,e));
});})(seq__60664_61233,chunk__60665_61234,count__60666_61235,i__60667_61236,vec__60692_61239,type_61240,f_61241,vec__60661_61230,elem_61231,selector_61232))
], 0));


var G__61244 = seq__60664_61233;
var G__61245 = chunk__60665_61234;
var G__61246 = count__60666_61235;
var G__61247 = (i__60667_61236 + (1));
seq__60664_61233 = G__61244;
chunk__60665_61234 = G__61245;
count__60666_61235 = G__61246;
i__60667_61236 = G__61247;
continue;
} else {
var temp__5735__auto___61250 = cljs.core.seq(seq__60664_61233);
if(temp__5735__auto___61250){
var seq__60664_61254__$1 = temp__5735__auto___61250;
if(cljs.core.chunked_seq_QMARK_(seq__60664_61254__$1)){
var c__4556__auto___61255 = cljs.core.chunk_first(seq__60664_61254__$1);
var G__61257 = cljs.core.chunk_rest(seq__60664_61254__$1);
var G__61258 = c__4556__auto___61255;
var G__61259 = cljs.core.count(c__4556__auto___61255);
var G__61260 = (0);
seq__60664_61233 = G__61257;
chunk__60665_61234 = G__61258;
count__60666_61235 = G__61259;
i__60667_61236 = G__61260;
continue;
} else {
var vec__60699_61261 = cljs.core.first(seq__60664_61254__$1);
var type_61262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60699_61261,(0),null);
var f_61263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60699_61261,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61262,((function (seq__60664_61233,chunk__60665_61234,count__60666_61235,i__60667_61236,vec__60699_61261,type_61262,f_61263,seq__60664_61254__$1,temp__5735__auto___61250,vec__60661_61230,elem_61231,selector_61232){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61262,dommy$core$this_fn], 0));

return (f_61263.cljs$core$IFn$_invoke$arity$1 ? f_61263.cljs$core$IFn$_invoke$arity$1(e) : f_61263.call(null,e));
});})(seq__60664_61233,chunk__60665_61234,count__60666_61235,i__60667_61236,vec__60699_61261,type_61262,f_61263,seq__60664_61254__$1,temp__5735__auto___61250,vec__60661_61230,elem_61231,selector_61232))
], 0));


var G__61267 = cljs.core.next(seq__60664_61254__$1);
var G__61268 = null;
var G__61269 = (0);
var G__61270 = (0);
seq__60664_61233 = G__61267;
chunk__60665_61234 = G__61268;
count__60666_61235 = G__61269;
i__60667_61236 = G__61270;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq60659){
var G__60660 = cljs.core.first(seq60659);
var seq60659__$1 = cljs.core.next(seq60659);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60660,seq60659__$1);
}));


//# sourceMappingURL=dommy.core.js.map
