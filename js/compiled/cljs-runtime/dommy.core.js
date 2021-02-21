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
var seq__60265_60713 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__60266_60714 = null;
var count__60267_60715 = (0);
var i__60268_60716 = (0);
while(true){
if((i__60268_60716 < count__60267_60715)){
var vec__60277_60717 = chunk__60266_60714.cljs$core$IIndexed$_nth$arity$2(null,i__60268_60716);
var k_60718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60277_60717,(0),null);
var v_60719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60277_60717,(1),null);
style.setProperty(dommy.utils.as_str(k_60718),v_60719);


var G__60720 = seq__60265_60713;
var G__60721 = chunk__60266_60714;
var G__60722 = count__60267_60715;
var G__60723 = (i__60268_60716 + (1));
seq__60265_60713 = G__60720;
chunk__60266_60714 = G__60721;
count__60267_60715 = G__60722;
i__60268_60716 = G__60723;
continue;
} else {
var temp__5735__auto___60724 = cljs.core.seq(seq__60265_60713);
if(temp__5735__auto___60724){
var seq__60265_60725__$1 = temp__5735__auto___60724;
if(cljs.core.chunked_seq_QMARK_(seq__60265_60725__$1)){
var c__4556__auto___60726 = cljs.core.chunk_first(seq__60265_60725__$1);
var G__60727 = cljs.core.chunk_rest(seq__60265_60725__$1);
var G__60728 = c__4556__auto___60726;
var G__60729 = cljs.core.count(c__4556__auto___60726);
var G__60730 = (0);
seq__60265_60713 = G__60727;
chunk__60266_60714 = G__60728;
count__60267_60715 = G__60729;
i__60268_60716 = G__60730;
continue;
} else {
var vec__60281_60731 = cljs.core.first(seq__60265_60725__$1);
var k_60732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60281_60731,(0),null);
var v_60733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60281_60731,(1),null);
style.setProperty(dommy.utils.as_str(k_60732),v_60733);


var G__60734 = cljs.core.next(seq__60265_60725__$1);
var G__60735 = null;
var G__60736 = (0);
var G__60737 = (0);
seq__60265_60713 = G__60734;
chunk__60266_60714 = G__60735;
count__60267_60715 = G__60736;
i__60268_60716 = G__60737;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq60262){
var G__60263 = cljs.core.first(seq60262);
var seq60262__$1 = cljs.core.next(seq60262);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60263,seq60262__$1);
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
var seq__60288_60741 = cljs.core.seq(keywords);
var chunk__60289_60742 = null;
var count__60290_60743 = (0);
var i__60291_60744 = (0);
while(true){
if((i__60291_60744 < count__60290_60743)){
var kw_60745 = chunk__60289_60742.cljs$core$IIndexed$_nth$arity$2(null,i__60291_60744);
style.removeProperty(dommy.utils.as_str(kw_60745));


var G__60746 = seq__60288_60741;
var G__60747 = chunk__60289_60742;
var G__60748 = count__60290_60743;
var G__60749 = (i__60291_60744 + (1));
seq__60288_60741 = G__60746;
chunk__60289_60742 = G__60747;
count__60290_60743 = G__60748;
i__60291_60744 = G__60749;
continue;
} else {
var temp__5735__auto___60750 = cljs.core.seq(seq__60288_60741);
if(temp__5735__auto___60750){
var seq__60288_60751__$1 = temp__5735__auto___60750;
if(cljs.core.chunked_seq_QMARK_(seq__60288_60751__$1)){
var c__4556__auto___60752 = cljs.core.chunk_first(seq__60288_60751__$1);
var G__60753 = cljs.core.chunk_rest(seq__60288_60751__$1);
var G__60754 = c__4556__auto___60752;
var G__60755 = cljs.core.count(c__4556__auto___60752);
var G__60756 = (0);
seq__60288_60741 = G__60753;
chunk__60289_60742 = G__60754;
count__60290_60743 = G__60755;
i__60291_60744 = G__60756;
continue;
} else {
var kw_60757 = cljs.core.first(seq__60288_60751__$1);
style.removeProperty(dommy.utils.as_str(kw_60757));


var G__60758 = cljs.core.next(seq__60288_60751__$1);
var G__60759 = null;
var G__60760 = (0);
var G__60761 = (0);
seq__60288_60741 = G__60758;
chunk__60289_60742 = G__60759;
count__60290_60743 = G__60760;
i__60291_60744 = G__60761;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq60285){
var G__60286 = cljs.core.first(seq60285);
var seq60285__$1 = cljs.core.next(seq60285);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60286,seq60285__$1);
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

var seq__60298_60765 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__60299_60766 = null;
var count__60300_60767 = (0);
var i__60301_60768 = (0);
while(true){
if((i__60301_60768 < count__60300_60767)){
var vec__60308_60769 = chunk__60299_60766.cljs$core$IIndexed$_nth$arity$2(null,i__60301_60768);
var k_60770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60308_60769,(0),null);
var v_60771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60308_60769,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_60770,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_60771),"px"].join('')], 0));


var G__60772 = seq__60298_60765;
var G__60773 = chunk__60299_60766;
var G__60774 = count__60300_60767;
var G__60775 = (i__60301_60768 + (1));
seq__60298_60765 = G__60772;
chunk__60299_60766 = G__60773;
count__60300_60767 = G__60774;
i__60301_60768 = G__60775;
continue;
} else {
var temp__5735__auto___60776 = cljs.core.seq(seq__60298_60765);
if(temp__5735__auto___60776){
var seq__60298_60777__$1 = temp__5735__auto___60776;
if(cljs.core.chunked_seq_QMARK_(seq__60298_60777__$1)){
var c__4556__auto___60779 = cljs.core.chunk_first(seq__60298_60777__$1);
var G__60780 = cljs.core.chunk_rest(seq__60298_60777__$1);
var G__60781 = c__4556__auto___60779;
var G__60782 = cljs.core.count(c__4556__auto___60779);
var G__60783 = (0);
seq__60298_60765 = G__60780;
chunk__60299_60766 = G__60781;
count__60300_60767 = G__60782;
i__60301_60768 = G__60783;
continue;
} else {
var vec__60311_60785 = cljs.core.first(seq__60298_60777__$1);
var k_60786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60311_60785,(0),null);
var v_60787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60311_60785,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_60786,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_60787),"px"].join('')], 0));


var G__60788 = cljs.core.next(seq__60298_60777__$1);
var G__60789 = null;
var G__60790 = (0);
var G__60791 = (0);
seq__60298_60765 = G__60788;
chunk__60299_60766 = G__60789;
count__60300_60767 = G__60790;
i__60301_60768 = G__60791;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq60295){
var G__60296 = cljs.core.first(seq60295);
var seq60295__$1 = cljs.core.next(seq60295);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60296,seq60295__$1);
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
var len__4736__auto___60793 = arguments.length;
var i__4737__auto___60794 = (0);
while(true){
if((i__4737__auto___60794 < len__4736__auto___60793)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60794]));

var G__60795 = (i__4737__auto___60794 + (1));
i__4737__auto___60794 = G__60795;
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

var seq__60322_60796 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__60323_60797 = null;
var count__60324_60798 = (0);
var i__60325_60799 = (0);
while(true){
if((i__60325_60799 < count__60324_60798)){
var vec__60332_60801 = chunk__60323_60797.cljs$core$IIndexed$_nth$arity$2(null,i__60325_60799);
var k_60802__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60332_60801,(0),null);
var v_60803__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60332_60801,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_60802__$1,v_60803__$1);


var G__60805 = seq__60322_60796;
var G__60806 = chunk__60323_60797;
var G__60807 = count__60324_60798;
var G__60808 = (i__60325_60799 + (1));
seq__60322_60796 = G__60805;
chunk__60323_60797 = G__60806;
count__60324_60798 = G__60807;
i__60325_60799 = G__60808;
continue;
} else {
var temp__5735__auto___60809 = cljs.core.seq(seq__60322_60796);
if(temp__5735__auto___60809){
var seq__60322_60810__$1 = temp__5735__auto___60809;
if(cljs.core.chunked_seq_QMARK_(seq__60322_60810__$1)){
var c__4556__auto___60811 = cljs.core.chunk_first(seq__60322_60810__$1);
var G__60812 = cljs.core.chunk_rest(seq__60322_60810__$1);
var G__60813 = c__4556__auto___60811;
var G__60814 = cljs.core.count(c__4556__auto___60811);
var G__60815 = (0);
seq__60322_60796 = G__60812;
chunk__60323_60797 = G__60813;
count__60324_60798 = G__60814;
i__60325_60799 = G__60815;
continue;
} else {
var vec__60335_60816 = cljs.core.first(seq__60322_60810__$1);
var k_60817__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60335_60816,(0),null);
var v_60818__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60335_60816,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_60817__$1,v_60818__$1);


var G__60819 = cljs.core.next(seq__60322_60810__$1);
var G__60820 = null;
var G__60821 = (0);
var G__60822 = (0);
seq__60322_60796 = G__60819;
chunk__60323_60797 = G__60820;
count__60324_60798 = G__60821;
i__60325_60799 = G__60822;
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
if(cljs.core.truth_((function (){var fexpr__60343 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__60343.cljs$core$IFn$_invoke$arity$1 ? fexpr__60343.cljs$core$IFn$_invoke$arity$1(k_60829__$1) : fexpr__60343.call(null,k_60829__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_60829__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__60344_60830 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__60345_60831 = null;
var count__60346_60832 = (0);
var i__60347_60833 = (0);
while(true){
if((i__60347_60833 < count__60346_60832)){
var k_60834__$1 = chunk__60345_60831.cljs$core$IIndexed$_nth$arity$2(null,i__60347_60833);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_60834__$1);


var G__60835 = seq__60344_60830;
var G__60836 = chunk__60345_60831;
var G__60837 = count__60346_60832;
var G__60838 = (i__60347_60833 + (1));
seq__60344_60830 = G__60835;
chunk__60345_60831 = G__60836;
count__60346_60832 = G__60837;
i__60347_60833 = G__60838;
continue;
} else {
var temp__5735__auto___60839 = cljs.core.seq(seq__60344_60830);
if(temp__5735__auto___60839){
var seq__60344_60840__$1 = temp__5735__auto___60839;
if(cljs.core.chunked_seq_QMARK_(seq__60344_60840__$1)){
var c__4556__auto___60841 = cljs.core.chunk_first(seq__60344_60840__$1);
var G__60842 = cljs.core.chunk_rest(seq__60344_60840__$1);
var G__60843 = c__4556__auto___60841;
var G__60844 = cljs.core.count(c__4556__auto___60841);
var G__60845 = (0);
seq__60344_60830 = G__60842;
chunk__60345_60831 = G__60843;
count__60346_60832 = G__60844;
i__60347_60833 = G__60845;
continue;
} else {
var k_60846__$1 = cljs.core.first(seq__60344_60840__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_60846__$1);


var G__60847 = cljs.core.next(seq__60344_60840__$1);
var G__60848 = null;
var G__60849 = (0);
var G__60850 = (0);
seq__60344_60830 = G__60847;
chunk__60345_60831 = G__60848;
count__60346_60832 = G__60849;
i__60347_60833 = G__60850;
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
var temp__5733__auto___60945 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___60945)){
var class_list_60947 = temp__5733__auto___60945;
class_list_60947.toggle(c__$1);
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
var G__60380 = arguments.length;
switch (G__60380) {
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
var G__60384 = arguments.length;
switch (G__60384) {
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
var G__60390 = parent;
G__60390.appendChild(child);

return G__60390;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__60391_60963 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__60392_60964 = null;
var count__60393_60965 = (0);
var i__60394_60966 = (0);
while(true){
if((i__60394_60966 < count__60393_60965)){
var c_60967 = chunk__60392_60964.cljs$core$IIndexed$_nth$arity$2(null,i__60394_60966);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_60967);


var G__60968 = seq__60391_60963;
var G__60969 = chunk__60392_60964;
var G__60970 = count__60393_60965;
var G__60971 = (i__60394_60966 + (1));
seq__60391_60963 = G__60968;
chunk__60392_60964 = G__60969;
count__60393_60965 = G__60970;
i__60394_60966 = G__60971;
continue;
} else {
var temp__5735__auto___60972 = cljs.core.seq(seq__60391_60963);
if(temp__5735__auto___60972){
var seq__60391_60973__$1 = temp__5735__auto___60972;
if(cljs.core.chunked_seq_QMARK_(seq__60391_60973__$1)){
var c__4556__auto___60975 = cljs.core.chunk_first(seq__60391_60973__$1);
var G__60976 = cljs.core.chunk_rest(seq__60391_60973__$1);
var G__60977 = c__4556__auto___60975;
var G__60978 = cljs.core.count(c__4556__auto___60975);
var G__60979 = (0);
seq__60391_60963 = G__60976;
chunk__60392_60964 = G__60977;
count__60393_60965 = G__60978;
i__60394_60966 = G__60979;
continue;
} else {
var c_60981 = cljs.core.first(seq__60391_60973__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_60981);


var G__60982 = cljs.core.next(seq__60391_60973__$1);
var G__60983 = null;
var G__60984 = (0);
var G__60985 = (0);
seq__60391_60963 = G__60982;
chunk__60392_60964 = G__60983;
count__60393_60965 = G__60984;
i__60394_60966 = G__60985;
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
var len__4736__auto___60990 = arguments.length;
var i__4737__auto___60991 = (0);
while(true){
if((i__4737__auto___60991 < len__4736__auto___60990)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60991]));

var G__60993 = (i__4737__auto___60991 + (1));
i__4737__auto___60991 = G__60993;
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
var seq__60401_60996 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__60402_60997 = null;
var count__60403_60998 = (0);
var i__60404_60999 = (0);
while(true){
if((i__60404_60999 < count__60403_60998)){
var c_61000 = chunk__60402_60997.cljs$core$IIndexed$_nth$arity$2(null,i__60404_60999);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_61000);


var G__61001 = seq__60401_60996;
var G__61002 = chunk__60402_60997;
var G__61003 = count__60403_60998;
var G__61004 = (i__60404_60999 + (1));
seq__60401_60996 = G__61001;
chunk__60402_60997 = G__61002;
count__60403_60998 = G__61003;
i__60404_60999 = G__61004;
continue;
} else {
var temp__5735__auto___61005 = cljs.core.seq(seq__60401_60996);
if(temp__5735__auto___61005){
var seq__60401_61007__$1 = temp__5735__auto___61005;
if(cljs.core.chunked_seq_QMARK_(seq__60401_61007__$1)){
var c__4556__auto___61010 = cljs.core.chunk_first(seq__60401_61007__$1);
var G__61011 = cljs.core.chunk_rest(seq__60401_61007__$1);
var G__61012 = c__4556__auto___61010;
var G__61013 = cljs.core.count(c__4556__auto___61010);
var G__61014 = (0);
seq__60401_60996 = G__61011;
chunk__60402_60997 = G__61012;
count__60403_60998 = G__61013;
i__60404_60999 = G__61014;
continue;
} else {
var c_61017 = cljs.core.first(seq__60401_61007__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_61017);


var G__61018 = cljs.core.next(seq__60401_61007__$1);
var G__61019 = null;
var G__61020 = (0);
var G__61021 = (0);
seq__60401_60996 = G__61018;
chunk__60402_60997 = G__61019;
count__60403_60998 = G__61020;
i__60404_60999 = G__61021;
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
var temp__5733__auto___61027 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___61027)){
var next_61028 = temp__5733__auto___61027;
dommy.core.insert_before_BANG_(elem,next_61028);
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

var vec__60547_61121 = dommy.core.elem_and_selector(elem_sel);
var elem_61122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60547_61121,(0),null);
var selector_61123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60547_61121,(1),null);
var seq__60550_61124 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__60557_61125 = null;
var count__60558_61126 = (0);
var i__60559_61127 = (0);
while(true){
if((i__60559_61127 < count__60558_61126)){
var vec__60601_61128 = chunk__60557_61125.cljs$core$IIndexed$_nth$arity$2(null,i__60559_61127);
var orig_type_61129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60601_61128,(0),null);
var f_61130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60601_61128,(1),null);
var seq__60560_61131 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61129,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61129,cljs.core.identity])));
var chunk__60562_61132 = null;
var count__60563_61133 = (0);
var i__60564_61134 = (0);
while(true){
if((i__60564_61134 < count__60563_61133)){
var vec__60611_61137 = chunk__60562_61132.cljs$core$IIndexed$_nth$arity$2(null,i__60564_61134);
var actual_type_61138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60611_61137,(0),null);
var __61139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60611_61137,(1),null);
var keys_61140 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61123,actual_type_61138,f_61130], null);
var canonical_f_61141 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61122),keys_61140);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61122,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61140], 0));

if(cljs.core.truth_(elem_61122.removeEventListener)){
elem_61122.removeEventListener(cljs.core.name(actual_type_61138),canonical_f_61141);
} else {
elem_61122.detachEvent(cljs.core.name(actual_type_61138),canonical_f_61141);
}


var G__61143 = seq__60560_61131;
var G__61144 = chunk__60562_61132;
var G__61145 = count__60563_61133;
var G__61146 = (i__60564_61134 + (1));
seq__60560_61131 = G__61143;
chunk__60562_61132 = G__61144;
count__60563_61133 = G__61145;
i__60564_61134 = G__61146;
continue;
} else {
var temp__5735__auto___61148 = cljs.core.seq(seq__60560_61131);
if(temp__5735__auto___61148){
var seq__60560_61149__$1 = temp__5735__auto___61148;
if(cljs.core.chunked_seq_QMARK_(seq__60560_61149__$1)){
var c__4556__auto___61150 = cljs.core.chunk_first(seq__60560_61149__$1);
var G__61151 = cljs.core.chunk_rest(seq__60560_61149__$1);
var G__61152 = c__4556__auto___61150;
var G__61153 = cljs.core.count(c__4556__auto___61150);
var G__61154 = (0);
seq__60560_61131 = G__61151;
chunk__60562_61132 = G__61152;
count__60563_61133 = G__61153;
i__60564_61134 = G__61154;
continue;
} else {
var vec__60618_61156 = cljs.core.first(seq__60560_61149__$1);
var actual_type_61157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60618_61156,(0),null);
var __61158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60618_61156,(1),null);
var keys_61160 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61123,actual_type_61157,f_61130], null);
var canonical_f_61161 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61122),keys_61160);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61122,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61160], 0));

if(cljs.core.truth_(elem_61122.removeEventListener)){
elem_61122.removeEventListener(cljs.core.name(actual_type_61157),canonical_f_61161);
} else {
elem_61122.detachEvent(cljs.core.name(actual_type_61157),canonical_f_61161);
}


var G__61162 = cljs.core.next(seq__60560_61149__$1);
var G__61163 = null;
var G__61164 = (0);
var G__61165 = (0);
seq__60560_61131 = G__61162;
chunk__60562_61132 = G__61163;
count__60563_61133 = G__61164;
i__60564_61134 = G__61165;
continue;
}
} else {
}
}
break;
}

var G__61166 = seq__60550_61124;
var G__61167 = chunk__60557_61125;
var G__61168 = count__60558_61126;
var G__61169 = (i__60559_61127 + (1));
seq__60550_61124 = G__61166;
chunk__60557_61125 = G__61167;
count__60558_61126 = G__61168;
i__60559_61127 = G__61169;
continue;
} else {
var temp__5735__auto___61170 = cljs.core.seq(seq__60550_61124);
if(temp__5735__auto___61170){
var seq__60550_61171__$1 = temp__5735__auto___61170;
if(cljs.core.chunked_seq_QMARK_(seq__60550_61171__$1)){
var c__4556__auto___61172 = cljs.core.chunk_first(seq__60550_61171__$1);
var G__61173 = cljs.core.chunk_rest(seq__60550_61171__$1);
var G__61174 = c__4556__auto___61172;
var G__61175 = cljs.core.count(c__4556__auto___61172);
var G__61176 = (0);
seq__60550_61124 = G__61173;
chunk__60557_61125 = G__61174;
count__60558_61126 = G__61175;
i__60559_61127 = G__61176;
continue;
} else {
var vec__60622_61177 = cljs.core.first(seq__60550_61171__$1);
var orig_type_61178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60622_61177,(0),null);
var f_61179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60622_61177,(1),null);
var seq__60551_61180 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61178,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61178,cljs.core.identity])));
var chunk__60553_61181 = null;
var count__60554_61182 = (0);
var i__60555_61183 = (0);
while(true){
if((i__60555_61183 < count__60554_61182)){
var vec__60653_61184 = chunk__60553_61181.cljs$core$IIndexed$_nth$arity$2(null,i__60555_61183);
var actual_type_61185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60653_61184,(0),null);
var __61186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60653_61184,(1),null);
var keys_61187 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61123,actual_type_61185,f_61179], null);
var canonical_f_61188 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61122),keys_61187);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61122,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61187], 0));

if(cljs.core.truth_(elem_61122.removeEventListener)){
elem_61122.removeEventListener(cljs.core.name(actual_type_61185),canonical_f_61188);
} else {
elem_61122.detachEvent(cljs.core.name(actual_type_61185),canonical_f_61188);
}


var G__61189 = seq__60551_61180;
var G__61190 = chunk__60553_61181;
var G__61191 = count__60554_61182;
var G__61192 = (i__60555_61183 + (1));
seq__60551_61180 = G__61189;
chunk__60553_61181 = G__61190;
count__60554_61182 = G__61191;
i__60555_61183 = G__61192;
continue;
} else {
var temp__5735__auto___61193__$1 = cljs.core.seq(seq__60551_61180);
if(temp__5735__auto___61193__$1){
var seq__60551_61194__$1 = temp__5735__auto___61193__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60551_61194__$1)){
var c__4556__auto___61195 = cljs.core.chunk_first(seq__60551_61194__$1);
var G__61196 = cljs.core.chunk_rest(seq__60551_61194__$1);
var G__61197 = c__4556__auto___61195;
var G__61198 = cljs.core.count(c__4556__auto___61195);
var G__61199 = (0);
seq__60551_61180 = G__61196;
chunk__60553_61181 = G__61197;
count__60554_61182 = G__61198;
i__60555_61183 = G__61199;
continue;
} else {
var vec__60656_61200 = cljs.core.first(seq__60551_61194__$1);
var actual_type_61201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60656_61200,(0),null);
var __61202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60656_61200,(1),null);
var keys_61203 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61123,actual_type_61201,f_61179], null);
var canonical_f_61204 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61122),keys_61203);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61122,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61203], 0));

if(cljs.core.truth_(elem_61122.removeEventListener)){
elem_61122.removeEventListener(cljs.core.name(actual_type_61201),canonical_f_61204);
} else {
elem_61122.detachEvent(cljs.core.name(actual_type_61201),canonical_f_61204);
}


var G__61208 = cljs.core.next(seq__60551_61194__$1);
var G__61209 = null;
var G__61210 = (0);
var G__61211 = (0);
seq__60551_61180 = G__61208;
chunk__60553_61181 = G__61209;
count__60554_61182 = G__61210;
i__60555_61183 = G__61211;
continue;
}
} else {
}
}
break;
}

var G__61213 = cljs.core.next(seq__60550_61171__$1);
var G__61214 = null;
var G__61215 = (0);
var G__61216 = (0);
seq__60550_61124 = G__61213;
chunk__60557_61125 = G__61214;
count__60558_61126 = G__61215;
i__60559_61127 = G__61216;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq60541){
var G__60542 = cljs.core.first(seq60541);
var seq60541__$1 = cljs.core.next(seq60541);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60542,seq60541__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61217 = arguments.length;
var i__4737__auto___61218 = (0);
while(true){
if((i__4737__auto___61218 < len__4736__auto___61217)){
args__4742__auto__.push((arguments[i__4737__auto___61218]));

var G__61221 = (i__4737__auto___61218 + (1));
i__4737__auto___61218 = G__61221;
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

var vec__60683_61223 = dommy.core.elem_and_selector(elem_sel);
var elem_61224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60683_61223,(0),null);
var selector_61225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60683_61223,(1),null);
var seq__60686_61226 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__60687_61227 = null;
var count__60688_61228 = (0);
var i__60689_61229 = (0);
while(true){
if((i__60689_61229 < count__60688_61228)){
var vec__60697_61230 = chunk__60687_61227.cljs$core$IIndexed$_nth$arity$2(null,i__60689_61229);
var type_61231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60697_61230,(0),null);
var f_61232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60697_61230,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61231,((function (seq__60686_61226,chunk__60687_61227,count__60688_61228,i__60689_61229,vec__60697_61230,type_61231,f_61232,vec__60683_61223,elem_61224,selector_61225){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61231,dommy$core$this_fn], 0));

return (f_61232.cljs$core$IFn$_invoke$arity$1 ? f_61232.cljs$core$IFn$_invoke$arity$1(e) : f_61232.call(null,e));
});})(seq__60686_61226,chunk__60687_61227,count__60688_61228,i__60689_61229,vec__60697_61230,type_61231,f_61232,vec__60683_61223,elem_61224,selector_61225))
], 0));


var G__61240 = seq__60686_61226;
var G__61241 = chunk__60687_61227;
var G__61242 = count__60688_61228;
var G__61243 = (i__60689_61229 + (1));
seq__60686_61226 = G__61240;
chunk__60687_61227 = G__61241;
count__60688_61228 = G__61242;
i__60689_61229 = G__61243;
continue;
} else {
var temp__5735__auto___61244 = cljs.core.seq(seq__60686_61226);
if(temp__5735__auto___61244){
var seq__60686_61245__$1 = temp__5735__auto___61244;
if(cljs.core.chunked_seq_QMARK_(seq__60686_61245__$1)){
var c__4556__auto___61246 = cljs.core.chunk_first(seq__60686_61245__$1);
var G__61248 = cljs.core.chunk_rest(seq__60686_61245__$1);
var G__61249 = c__4556__auto___61246;
var G__61250 = cljs.core.count(c__4556__auto___61246);
var G__61251 = (0);
seq__60686_61226 = G__61248;
chunk__60687_61227 = G__61249;
count__60688_61228 = G__61250;
i__60689_61229 = G__61251;
continue;
} else {
var vec__60702_61253 = cljs.core.first(seq__60686_61245__$1);
var type_61254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60702_61253,(0),null);
var f_61255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60702_61253,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61254,((function (seq__60686_61226,chunk__60687_61227,count__60688_61228,i__60689_61229,vec__60702_61253,type_61254,f_61255,seq__60686_61245__$1,temp__5735__auto___61244,vec__60683_61223,elem_61224,selector_61225){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61254,dommy$core$this_fn], 0));

return (f_61255.cljs$core$IFn$_invoke$arity$1 ? f_61255.cljs$core$IFn$_invoke$arity$1(e) : f_61255.call(null,e));
});})(seq__60686_61226,chunk__60687_61227,count__60688_61228,i__60689_61229,vec__60702_61253,type_61254,f_61255,seq__60686_61245__$1,temp__5735__auto___61244,vec__60683_61223,elem_61224,selector_61225))
], 0));


var G__61258 = cljs.core.next(seq__60686_61245__$1);
var G__61259 = null;
var G__61260 = (0);
var G__61261 = (0);
seq__60686_61226 = G__61258;
chunk__60687_61227 = G__61259;
count__60688_61228 = G__61260;
i__60689_61229 = G__61261;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq60676){
var G__60677 = cljs.core.first(seq60676);
var seq60676__$1 = cljs.core.next(seq60676);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60677,seq60676__$1);
}));


//# sourceMappingURL=dommy.core.js.map
