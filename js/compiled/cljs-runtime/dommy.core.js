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
var len__4736__auto___60721 = arguments.length;
var i__4737__auto___60722 = (0);
while(true){
if((i__4737__auto___60722 < len__4736__auto___60721)){
args__4742__auto__.push((arguments[i__4737__auto___60722]));

var G__60723 = (i__4737__auto___60722 + (1));
i__4737__auto___60722 = G__60723;
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
var seq__60275_60724 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__60276_60725 = null;
var count__60277_60726 = (0);
var i__60278_60727 = (0);
while(true){
if((i__60278_60727 < count__60277_60726)){
var vec__60286_60728 = chunk__60276_60725.cljs$core$IIndexed$_nth$arity$2(null,i__60278_60727);
var k_60729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60286_60728,(0),null);
var v_60730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60286_60728,(1),null);
style.setProperty(dommy.utils.as_str(k_60729),v_60730);


var G__60731 = seq__60275_60724;
var G__60732 = chunk__60276_60725;
var G__60733 = count__60277_60726;
var G__60734 = (i__60278_60727 + (1));
seq__60275_60724 = G__60731;
chunk__60276_60725 = G__60732;
count__60277_60726 = G__60733;
i__60278_60727 = G__60734;
continue;
} else {
var temp__5735__auto___60735 = cljs.core.seq(seq__60275_60724);
if(temp__5735__auto___60735){
var seq__60275_60736__$1 = temp__5735__auto___60735;
if(cljs.core.chunked_seq_QMARK_(seq__60275_60736__$1)){
var c__4556__auto___60737 = cljs.core.chunk_first(seq__60275_60736__$1);
var G__60738 = cljs.core.chunk_rest(seq__60275_60736__$1);
var G__60739 = c__4556__auto___60737;
var G__60740 = cljs.core.count(c__4556__auto___60737);
var G__60741 = (0);
seq__60275_60724 = G__60738;
chunk__60276_60725 = G__60739;
count__60277_60726 = G__60740;
i__60278_60727 = G__60741;
continue;
} else {
var vec__60290_60742 = cljs.core.first(seq__60275_60736__$1);
var k_60743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60290_60742,(0),null);
var v_60744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60290_60742,(1),null);
style.setProperty(dommy.utils.as_str(k_60743),v_60744);


var G__60745 = cljs.core.next(seq__60275_60736__$1);
var G__60746 = null;
var G__60747 = (0);
var G__60748 = (0);
seq__60275_60724 = G__60745;
chunk__60276_60725 = G__60746;
count__60277_60726 = G__60747;
i__60278_60727 = G__60748;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq60272){
var G__60273 = cljs.core.first(seq60272);
var seq60272__$1 = cljs.core.next(seq60272);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60273,seq60272__$1);
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
var seq__60297_60752 = cljs.core.seq(keywords);
var chunk__60298_60753 = null;
var count__60299_60754 = (0);
var i__60300_60755 = (0);
while(true){
if((i__60300_60755 < count__60299_60754)){
var kw_60756 = chunk__60298_60753.cljs$core$IIndexed$_nth$arity$2(null,i__60300_60755);
style.removeProperty(dommy.utils.as_str(kw_60756));


var G__60757 = seq__60297_60752;
var G__60758 = chunk__60298_60753;
var G__60759 = count__60299_60754;
var G__60760 = (i__60300_60755 + (1));
seq__60297_60752 = G__60757;
chunk__60298_60753 = G__60758;
count__60299_60754 = G__60759;
i__60300_60755 = G__60760;
continue;
} else {
var temp__5735__auto___60761 = cljs.core.seq(seq__60297_60752);
if(temp__5735__auto___60761){
var seq__60297_60762__$1 = temp__5735__auto___60761;
if(cljs.core.chunked_seq_QMARK_(seq__60297_60762__$1)){
var c__4556__auto___60763 = cljs.core.chunk_first(seq__60297_60762__$1);
var G__60764 = cljs.core.chunk_rest(seq__60297_60762__$1);
var G__60765 = c__4556__auto___60763;
var G__60766 = cljs.core.count(c__4556__auto___60763);
var G__60767 = (0);
seq__60297_60752 = G__60764;
chunk__60298_60753 = G__60765;
count__60299_60754 = G__60766;
i__60300_60755 = G__60767;
continue;
} else {
var kw_60768 = cljs.core.first(seq__60297_60762__$1);
style.removeProperty(dommy.utils.as_str(kw_60768));


var G__60769 = cljs.core.next(seq__60297_60762__$1);
var G__60770 = null;
var G__60771 = (0);
var G__60772 = (0);
seq__60297_60752 = G__60769;
chunk__60298_60753 = G__60770;
count__60299_60754 = G__60771;
i__60300_60755 = G__60772;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq60294){
var G__60295 = cljs.core.first(seq60294);
var seq60294__$1 = cljs.core.next(seq60294);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60295,seq60294__$1);
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

var seq__60307_60776 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__60308_60777 = null;
var count__60309_60778 = (0);
var i__60310_60779 = (0);
while(true){
if((i__60310_60779 < count__60309_60778)){
var vec__60319_60780 = chunk__60308_60777.cljs$core$IIndexed$_nth$arity$2(null,i__60310_60779);
var k_60781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60319_60780,(0),null);
var v_60782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60319_60780,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_60781,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_60782),"px"].join('')], 0));


var G__60783 = seq__60307_60776;
var G__60784 = chunk__60308_60777;
var G__60785 = count__60309_60778;
var G__60786 = (i__60310_60779 + (1));
seq__60307_60776 = G__60783;
chunk__60308_60777 = G__60784;
count__60309_60778 = G__60785;
i__60310_60779 = G__60786;
continue;
} else {
var temp__5735__auto___60787 = cljs.core.seq(seq__60307_60776);
if(temp__5735__auto___60787){
var seq__60307_60788__$1 = temp__5735__auto___60787;
if(cljs.core.chunked_seq_QMARK_(seq__60307_60788__$1)){
var c__4556__auto___60789 = cljs.core.chunk_first(seq__60307_60788__$1);
var G__60790 = cljs.core.chunk_rest(seq__60307_60788__$1);
var G__60791 = c__4556__auto___60789;
var G__60792 = cljs.core.count(c__4556__auto___60789);
var G__60793 = (0);
seq__60307_60776 = G__60790;
chunk__60308_60777 = G__60791;
count__60309_60778 = G__60792;
i__60310_60779 = G__60793;
continue;
} else {
var vec__60322_60794 = cljs.core.first(seq__60307_60788__$1);
var k_60795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60322_60794,(0),null);
var v_60796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60322_60794,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_60795,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_60796),"px"].join('')], 0));


var G__60797 = cljs.core.next(seq__60307_60788__$1);
var G__60798 = null;
var G__60799 = (0);
var G__60800 = (0);
seq__60307_60776 = G__60797;
chunk__60308_60777 = G__60798;
count__60309_60778 = G__60799;
i__60310_60779 = G__60800;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq60304){
var G__60305 = cljs.core.first(seq60304);
var seq60304__$1 = cljs.core.next(seq60304);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60305,seq60304__$1);
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
var G__60330 = arguments.length;
switch (G__60330) {
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
var G__60331 = elem;
(G__60331[k__$1] = v);

return G__60331;
} else {
var G__60332 = elem;
G__60332.setAttribute(k__$1,v);

return G__60332;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq60326){
var G__60327 = cljs.core.first(seq60326);
var seq60326__$1 = cljs.core.next(seq60326);
var G__60328 = cljs.core.first(seq60326__$1);
var seq60326__$2 = cljs.core.next(seq60326__$1);
var G__60329 = cljs.core.first(seq60326__$2);
var seq60326__$3 = cljs.core.next(seq60326__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60327,G__60328,G__60329,seq60326__$3);
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
var len__4736__auto___60833 = arguments.length;
var i__4737__auto___60834 = (0);
while(true){
if((i__4737__auto___60834 < len__4736__auto___60833)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60834]));

var G__60835 = (i__4737__auto___60834 + (1));
i__4737__auto___60834 = G__60835;
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
var k_60836__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__60354 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__60354.cljs$core$IFn$_invoke$arity$1 ? fexpr__60354.cljs$core$IFn$_invoke$arity$1(k_60836__$1) : fexpr__60354.call(null,k_60836__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_60836__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__60355_60837 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__60356_60838 = null;
var count__60357_60839 = (0);
var i__60358_60840 = (0);
while(true){
if((i__60358_60840 < count__60357_60839)){
var k_60841__$1 = chunk__60356_60838.cljs$core$IIndexed$_nth$arity$2(null,i__60358_60840);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_60841__$1);


var G__60842 = seq__60355_60837;
var G__60843 = chunk__60356_60838;
var G__60844 = count__60357_60839;
var G__60845 = (i__60358_60840 + (1));
seq__60355_60837 = G__60842;
chunk__60356_60838 = G__60843;
count__60357_60839 = G__60844;
i__60358_60840 = G__60845;
continue;
} else {
var temp__5735__auto___60846 = cljs.core.seq(seq__60355_60837);
if(temp__5735__auto___60846){
var seq__60355_60847__$1 = temp__5735__auto___60846;
if(cljs.core.chunked_seq_QMARK_(seq__60355_60847__$1)){
var c__4556__auto___60848 = cljs.core.chunk_first(seq__60355_60847__$1);
var G__60849 = cljs.core.chunk_rest(seq__60355_60847__$1);
var G__60850 = c__4556__auto___60848;
var G__60851 = cljs.core.count(c__4556__auto___60848);
var G__60852 = (0);
seq__60355_60837 = G__60849;
chunk__60356_60838 = G__60850;
count__60357_60839 = G__60851;
i__60358_60840 = G__60852;
continue;
} else {
var k_60853__$1 = cljs.core.first(seq__60355_60847__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_60853__$1);


var G__60854 = cljs.core.next(seq__60355_60847__$1);
var G__60855 = null;
var G__60856 = (0);
var G__60857 = (0);
seq__60355_60837 = G__60854;
chunk__60356_60838 = G__60855;
count__60357_60839 = G__60856;
i__60358_60840 = G__60857;
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
var len__4736__auto___60862 = arguments.length;
var i__4737__auto___60863 = (0);
while(true){
if((i__4737__auto___60863 < len__4736__auto___60862)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60863]));

var G__60864 = (i__4737__auto___60863 + (1));
i__4737__auto___60863 = G__60864;
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
var temp__5733__auto___60867 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___60867)){
var class_list_60868 = temp__5733__auto___60867;
var seq__60366_60869 = cljs.core.seq(classes__$1);
var chunk__60367_60870 = null;
var count__60368_60871 = (0);
var i__60369_60872 = (0);
while(true){
if((i__60369_60872 < count__60368_60871)){
var c_60873 = chunk__60367_60870.cljs$core$IIndexed$_nth$arity$2(null,i__60369_60872);
class_list_60868.add(c_60873);


var G__60874 = seq__60366_60869;
var G__60875 = chunk__60367_60870;
var G__60876 = count__60368_60871;
var G__60877 = (i__60369_60872 + (1));
seq__60366_60869 = G__60874;
chunk__60367_60870 = G__60875;
count__60368_60871 = G__60876;
i__60369_60872 = G__60877;
continue;
} else {
var temp__5735__auto___60878 = cljs.core.seq(seq__60366_60869);
if(temp__5735__auto___60878){
var seq__60366_60879__$1 = temp__5735__auto___60878;
if(cljs.core.chunked_seq_QMARK_(seq__60366_60879__$1)){
var c__4556__auto___60880 = cljs.core.chunk_first(seq__60366_60879__$1);
var G__60881 = cljs.core.chunk_rest(seq__60366_60879__$1);
var G__60882 = c__4556__auto___60880;
var G__60883 = cljs.core.count(c__4556__auto___60880);
var G__60884 = (0);
seq__60366_60869 = G__60881;
chunk__60367_60870 = G__60882;
count__60368_60871 = G__60883;
i__60369_60872 = G__60884;
continue;
} else {
var c_60885 = cljs.core.first(seq__60366_60879__$1);
class_list_60868.add(c_60885);


var G__60886 = cljs.core.next(seq__60366_60879__$1);
var G__60887 = null;
var G__60888 = (0);
var G__60889 = (0);
seq__60366_60869 = G__60886;
chunk__60367_60870 = G__60887;
count__60368_60871 = G__60888;
i__60369_60872 = G__60889;
continue;
}
} else {
}
}
break;
}
} else {
var seq__60370_60890 = cljs.core.seq(classes__$1);
var chunk__60371_60891 = null;
var count__60372_60892 = (0);
var i__60373_60893 = (0);
while(true){
if((i__60373_60893 < count__60372_60892)){
var c_60894 = chunk__60371_60891.cljs$core$IIndexed$_nth$arity$2(null,i__60373_60893);
var class_name_60895 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_60895,c_60894))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_60895 === ""))?c_60894:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_60895)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_60894)].join('')));
}


var G__60896 = seq__60370_60890;
var G__60897 = chunk__60371_60891;
var G__60898 = count__60372_60892;
var G__60899 = (i__60373_60893 + (1));
seq__60370_60890 = G__60896;
chunk__60371_60891 = G__60897;
count__60372_60892 = G__60898;
i__60373_60893 = G__60899;
continue;
} else {
var temp__5735__auto___60900 = cljs.core.seq(seq__60370_60890);
if(temp__5735__auto___60900){
var seq__60370_60901__$1 = temp__5735__auto___60900;
if(cljs.core.chunked_seq_QMARK_(seq__60370_60901__$1)){
var c__4556__auto___60902 = cljs.core.chunk_first(seq__60370_60901__$1);
var G__60903 = cljs.core.chunk_rest(seq__60370_60901__$1);
var G__60904 = c__4556__auto___60902;
var G__60905 = cljs.core.count(c__4556__auto___60902);
var G__60906 = (0);
seq__60370_60890 = G__60903;
chunk__60371_60891 = G__60904;
count__60372_60892 = G__60905;
i__60373_60893 = G__60906;
continue;
} else {
var c_60907 = cljs.core.first(seq__60370_60901__$1);
var class_name_60908 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_60908,c_60907))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_60908 === ""))?c_60907:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_60908)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_60907)].join('')));
}


var G__60909 = cljs.core.next(seq__60370_60901__$1);
var G__60910 = null;
var G__60911 = (0);
var G__60912 = (0);
seq__60370_60890 = G__60909;
chunk__60371_60891 = G__60910;
count__60372_60892 = G__60911;
i__60373_60893 = G__60912;
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
var seq__60374_60913 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__60375_60914 = null;
var count__60376_60915 = (0);
var i__60377_60916 = (0);
while(true){
if((i__60377_60916 < count__60376_60915)){
var c_60917 = chunk__60375_60914.cljs$core$IIndexed$_nth$arity$2(null,i__60377_60916);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_60917);


var G__60918 = seq__60374_60913;
var G__60919 = chunk__60375_60914;
var G__60920 = count__60376_60915;
var G__60921 = (i__60377_60916 + (1));
seq__60374_60913 = G__60918;
chunk__60375_60914 = G__60919;
count__60376_60915 = G__60920;
i__60377_60916 = G__60921;
continue;
} else {
var temp__5735__auto___60922 = cljs.core.seq(seq__60374_60913);
if(temp__5735__auto___60922){
var seq__60374_60923__$1 = temp__5735__auto___60922;
if(cljs.core.chunked_seq_QMARK_(seq__60374_60923__$1)){
var c__4556__auto___60924 = cljs.core.chunk_first(seq__60374_60923__$1);
var G__60925 = cljs.core.chunk_rest(seq__60374_60923__$1);
var G__60926 = c__4556__auto___60924;
var G__60927 = cljs.core.count(c__4556__auto___60924);
var G__60928 = (0);
seq__60374_60913 = G__60925;
chunk__60375_60914 = G__60926;
count__60376_60915 = G__60927;
i__60377_60916 = G__60928;
continue;
} else {
var c_60929 = cljs.core.first(seq__60374_60923__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_60929);


var G__60930 = cljs.core.next(seq__60374_60923__$1);
var G__60931 = null;
var G__60932 = (0);
var G__60933 = (0);
seq__60374_60913 = G__60930;
chunk__60375_60914 = G__60931;
count__60376_60915 = G__60932;
i__60377_60916 = G__60933;
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
var len__4736__auto___60935 = arguments.length;
var i__4737__auto___60936 = (0);
while(true){
if((i__4737__auto___60936 < len__4736__auto___60935)){
args_arr__4757__auto__.push((arguments[i__4737__auto___60936]));

var G__60937 = (i__4737__auto___60936 + (1));
i__4737__auto___60936 = G__60937;
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
var temp__5733__auto___60938 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___60938)){
var class_list_60939 = temp__5733__auto___60938;
class_list_60939.remove(c__$1);
} else {
var class_name_60940 = dommy.core.class$(elem);
var new_class_name_60941 = dommy.utils.remove_class_str(class_name_60940,c__$1);
if((class_name_60940 === new_class_name_60941)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_60941);
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


var G__60942 = seq__60383;
var G__60943 = chunk__60384;
var G__60944 = count__60385;
var G__60945 = (i__60386 + (1));
seq__60383 = G__60942;
chunk__60384 = G__60943;
count__60385 = G__60944;
i__60386 = G__60945;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60383);
if(temp__5735__auto__){
var seq__60383__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60383__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60383__$1);
var G__60946 = cljs.core.chunk_rest(seq__60383__$1);
var G__60947 = c__4556__auto__;
var G__60948 = cljs.core.count(c__4556__auto__);
var G__60949 = (0);
seq__60383 = G__60946;
chunk__60384 = G__60947;
count__60385 = G__60948;
i__60386 = G__60949;
continue;
} else {
var c = cljs.core.first(seq__60383__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__60950 = cljs.core.next(seq__60383__$1);
var G__60951 = null;
var G__60952 = (0);
var G__60953 = (0);
seq__60383 = G__60950;
chunk__60384 = G__60951;
count__60385 = G__60952;
i__60386 = G__60953;
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
var temp__5733__auto___60955 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___60955)){
var class_list_60956 = temp__5733__auto___60955;
class_list_60956.toggle(c__$1);
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
var G__60393 = arguments.length;
switch (G__60393) {
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
var G__60398 = arguments.length;
switch (G__60398) {
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
var G__60401 = parent;
G__60401.appendChild(child);

return G__60401;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__60402_60963 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__60403_60964 = null;
var count__60404_60965 = (0);
var i__60405_60966 = (0);
while(true){
if((i__60405_60966 < count__60404_60965)){
var c_60967 = chunk__60403_60964.cljs$core$IIndexed$_nth$arity$2(null,i__60405_60966);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_60967);


var G__60968 = seq__60402_60963;
var G__60969 = chunk__60403_60964;
var G__60970 = count__60404_60965;
var G__60971 = (i__60405_60966 + (1));
seq__60402_60963 = G__60968;
chunk__60403_60964 = G__60969;
count__60404_60965 = G__60970;
i__60405_60966 = G__60971;
continue;
} else {
var temp__5735__auto___60972 = cljs.core.seq(seq__60402_60963);
if(temp__5735__auto___60972){
var seq__60402_60973__$1 = temp__5735__auto___60972;
if(cljs.core.chunked_seq_QMARK_(seq__60402_60973__$1)){
var c__4556__auto___60974 = cljs.core.chunk_first(seq__60402_60973__$1);
var G__60975 = cljs.core.chunk_rest(seq__60402_60973__$1);
var G__60976 = c__4556__auto___60974;
var G__60977 = cljs.core.count(c__4556__auto___60974);
var G__60978 = (0);
seq__60402_60963 = G__60975;
chunk__60403_60964 = G__60976;
count__60404_60965 = G__60977;
i__60405_60966 = G__60978;
continue;
} else {
var c_60979 = cljs.core.first(seq__60402_60973__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_60979);


var G__60980 = cljs.core.next(seq__60402_60973__$1);
var G__60981 = null;
var G__60982 = (0);
var G__60983 = (0);
seq__60402_60963 = G__60980;
chunk__60403_60964 = G__60981;
count__60404_60965 = G__60982;
i__60405_60966 = G__60983;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq60395){
var G__60396 = cljs.core.first(seq60395);
var seq60395__$1 = cljs.core.next(seq60395);
var G__60397 = cljs.core.first(seq60395__$1);
var seq60395__$2 = cljs.core.next(seq60395__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60396,G__60397,seq60395__$2);
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
var seq__60412_60990 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__60413_60991 = null;
var count__60414_60992 = (0);
var i__60415_60993 = (0);
while(true){
if((i__60415_60993 < count__60414_60992)){
var c_60994 = chunk__60413_60991.cljs$core$IIndexed$_nth$arity$2(null,i__60415_60993);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_60994);


var G__60995 = seq__60412_60990;
var G__60996 = chunk__60413_60991;
var G__60997 = count__60414_60992;
var G__60998 = (i__60415_60993 + (1));
seq__60412_60990 = G__60995;
chunk__60413_60991 = G__60996;
count__60414_60992 = G__60997;
i__60415_60993 = G__60998;
continue;
} else {
var temp__5735__auto___60999 = cljs.core.seq(seq__60412_60990);
if(temp__5735__auto___60999){
var seq__60412_61000__$1 = temp__5735__auto___60999;
if(cljs.core.chunked_seq_QMARK_(seq__60412_61000__$1)){
var c__4556__auto___61001 = cljs.core.chunk_first(seq__60412_61000__$1);
var G__61002 = cljs.core.chunk_rest(seq__60412_61000__$1);
var G__61003 = c__4556__auto___61001;
var G__61004 = cljs.core.count(c__4556__auto___61001);
var G__61005 = (0);
seq__60412_60990 = G__61002;
chunk__60413_60991 = G__61003;
count__60414_60992 = G__61004;
i__60415_60993 = G__61005;
continue;
} else {
var c_61006 = cljs.core.first(seq__60412_61000__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_61006);


var G__61007 = cljs.core.next(seq__60412_61000__$1);
var G__61008 = null;
var G__61009 = (0);
var G__61010 = (0);
seq__60412_60990 = G__61007;
chunk__60413_60991 = G__61008;
count__60414_60992 = G__61009;
i__60415_60993 = G__61010;
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
var temp__5733__auto___61014 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___61014)){
var next_61015 = temp__5733__auto___61014;
dommy.core.insert_before_BANG_(elem,next_61015);
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
var len__4736__auto___61029 = arguments.length;
var i__4737__auto___61030 = (0);
while(true){
if((i__4737__auto___61030 < len__4736__auto___61029)){
args__4742__auto__.push((arguments[i__4737__auto___61030]));

var G__61031 = (i__4737__auto___61030 + (1));
i__4737__auto___61030 = G__61031;
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

var vec__60428_61045 = dommy.core.elem_and_selector(elem_sel);
var elem_61046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60428_61045,(0),null);
var selector_61047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60428_61045,(1),null);
var seq__60431_61050 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__60438_61051 = null;
var count__60439_61052 = (0);
var i__60440_61053 = (0);
while(true){
if((i__60440_61053 < count__60439_61052)){
var vec__60496_61054 = chunk__60438_61051.cljs$core$IIndexed$_nth$arity$2(null,i__60440_61053);
var orig_type_61055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60496_61054,(0),null);
var f_61056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60496_61054,(1),null);
var seq__60441_61057 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61055,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61055,cljs.core.identity])));
var chunk__60443_61058 = null;
var count__60444_61059 = (0);
var i__60445_61060 = (0);
while(true){
if((i__60445_61060 < count__60444_61059)){
var vec__60512_61061 = chunk__60443_61058.cljs$core$IIndexed$_nth$arity$2(null,i__60445_61060);
var actual_type_61062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60512_61061,(0),null);
var factory_61063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60512_61061,(1),null);
var canonical_f_61064 = (function (){var G__60516 = (factory_61063.cljs$core$IFn$_invoke$arity$1 ? factory_61063.cljs$core$IFn$_invoke$arity$1(f_61056) : factory_61063.call(null,f_61056));
var fexpr__60515 = (cljs.core.truth_(selector_61047)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61046,selector_61047):cljs.core.identity);
return (fexpr__60515.cljs$core$IFn$_invoke$arity$1 ? fexpr__60515.cljs$core$IFn$_invoke$arity$1(G__60516) : fexpr__60515.call(null,G__60516));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61046,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61047,actual_type_61062,f_61056], null),canonical_f_61064], 0));

if(cljs.core.truth_(elem_61046.addEventListener)){
elem_61046.addEventListener(cljs.core.name(actual_type_61062),canonical_f_61064);
} else {
elem_61046.attachEvent(cljs.core.name(actual_type_61062),canonical_f_61064);
}


var G__61065 = seq__60441_61057;
var G__61066 = chunk__60443_61058;
var G__61067 = count__60444_61059;
var G__61068 = (i__60445_61060 + (1));
seq__60441_61057 = G__61065;
chunk__60443_61058 = G__61066;
count__60444_61059 = G__61067;
i__60445_61060 = G__61068;
continue;
} else {
var temp__5735__auto___61069 = cljs.core.seq(seq__60441_61057);
if(temp__5735__auto___61069){
var seq__60441_61070__$1 = temp__5735__auto___61069;
if(cljs.core.chunked_seq_QMARK_(seq__60441_61070__$1)){
var c__4556__auto___61071 = cljs.core.chunk_first(seq__60441_61070__$1);
var G__61072 = cljs.core.chunk_rest(seq__60441_61070__$1);
var G__61073 = c__4556__auto___61071;
var G__61074 = cljs.core.count(c__4556__auto___61071);
var G__61075 = (0);
seq__60441_61057 = G__61072;
chunk__60443_61058 = G__61073;
count__60444_61059 = G__61074;
i__60445_61060 = G__61075;
continue;
} else {
var vec__60517_61076 = cljs.core.first(seq__60441_61070__$1);
var actual_type_61077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60517_61076,(0),null);
var factory_61078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60517_61076,(1),null);
var canonical_f_61079 = (function (){var G__60521 = (factory_61078.cljs$core$IFn$_invoke$arity$1 ? factory_61078.cljs$core$IFn$_invoke$arity$1(f_61056) : factory_61078.call(null,f_61056));
var fexpr__60520 = (cljs.core.truth_(selector_61047)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61046,selector_61047):cljs.core.identity);
return (fexpr__60520.cljs$core$IFn$_invoke$arity$1 ? fexpr__60520.cljs$core$IFn$_invoke$arity$1(G__60521) : fexpr__60520.call(null,G__60521));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61046,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61047,actual_type_61077,f_61056], null),canonical_f_61079], 0));

if(cljs.core.truth_(elem_61046.addEventListener)){
elem_61046.addEventListener(cljs.core.name(actual_type_61077),canonical_f_61079);
} else {
elem_61046.attachEvent(cljs.core.name(actual_type_61077),canonical_f_61079);
}


var G__61080 = cljs.core.next(seq__60441_61070__$1);
var G__61081 = null;
var G__61082 = (0);
var G__61083 = (0);
seq__60441_61057 = G__61080;
chunk__60443_61058 = G__61081;
count__60444_61059 = G__61082;
i__60445_61060 = G__61083;
continue;
}
} else {
}
}
break;
}

var G__61084 = seq__60431_61050;
var G__61085 = chunk__60438_61051;
var G__61086 = count__60439_61052;
var G__61087 = (i__60440_61053 + (1));
seq__60431_61050 = G__61084;
chunk__60438_61051 = G__61085;
count__60439_61052 = G__61086;
i__60440_61053 = G__61087;
continue;
} else {
var temp__5735__auto___61088 = cljs.core.seq(seq__60431_61050);
if(temp__5735__auto___61088){
var seq__60431_61089__$1 = temp__5735__auto___61088;
if(cljs.core.chunked_seq_QMARK_(seq__60431_61089__$1)){
var c__4556__auto___61090 = cljs.core.chunk_first(seq__60431_61089__$1);
var G__61091 = cljs.core.chunk_rest(seq__60431_61089__$1);
var G__61092 = c__4556__auto___61090;
var G__61093 = cljs.core.count(c__4556__auto___61090);
var G__61094 = (0);
seq__60431_61050 = G__61091;
chunk__60438_61051 = G__61092;
count__60439_61052 = G__61093;
i__60440_61053 = G__61094;
continue;
} else {
var vec__60522_61095 = cljs.core.first(seq__60431_61089__$1);
var orig_type_61096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60522_61095,(0),null);
var f_61097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60522_61095,(1),null);
var seq__60432_61098 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61096,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61096,cljs.core.identity])));
var chunk__60434_61099 = null;
var count__60435_61100 = (0);
var i__60436_61101 = (0);
while(true){
if((i__60436_61101 < count__60435_61100)){
var vec__60535_61102 = chunk__60434_61099.cljs$core$IIndexed$_nth$arity$2(null,i__60436_61101);
var actual_type_61103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60535_61102,(0),null);
var factory_61104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60535_61102,(1),null);
var canonical_f_61105 = (function (){var G__60539 = (factory_61104.cljs$core$IFn$_invoke$arity$1 ? factory_61104.cljs$core$IFn$_invoke$arity$1(f_61097) : factory_61104.call(null,f_61097));
var fexpr__60538 = (cljs.core.truth_(selector_61047)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61046,selector_61047):cljs.core.identity);
return (fexpr__60538.cljs$core$IFn$_invoke$arity$1 ? fexpr__60538.cljs$core$IFn$_invoke$arity$1(G__60539) : fexpr__60538.call(null,G__60539));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61046,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61047,actual_type_61103,f_61097], null),canonical_f_61105], 0));

if(cljs.core.truth_(elem_61046.addEventListener)){
elem_61046.addEventListener(cljs.core.name(actual_type_61103),canonical_f_61105);
} else {
elem_61046.attachEvent(cljs.core.name(actual_type_61103),canonical_f_61105);
}


var G__61106 = seq__60432_61098;
var G__61107 = chunk__60434_61099;
var G__61108 = count__60435_61100;
var G__61109 = (i__60436_61101 + (1));
seq__60432_61098 = G__61106;
chunk__60434_61099 = G__61107;
count__60435_61100 = G__61108;
i__60436_61101 = G__61109;
continue;
} else {
var temp__5735__auto___61110__$1 = cljs.core.seq(seq__60432_61098);
if(temp__5735__auto___61110__$1){
var seq__60432_61111__$1 = temp__5735__auto___61110__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60432_61111__$1)){
var c__4556__auto___61112 = cljs.core.chunk_first(seq__60432_61111__$1);
var G__61113 = cljs.core.chunk_rest(seq__60432_61111__$1);
var G__61114 = c__4556__auto___61112;
var G__61115 = cljs.core.count(c__4556__auto___61112);
var G__61116 = (0);
seq__60432_61098 = G__61113;
chunk__60434_61099 = G__61114;
count__60435_61100 = G__61115;
i__60436_61101 = G__61116;
continue;
} else {
var vec__60540_61117 = cljs.core.first(seq__60432_61111__$1);
var actual_type_61118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60540_61117,(0),null);
var factory_61119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60540_61117,(1),null);
var canonical_f_61120 = (function (){var G__60544 = (factory_61119.cljs$core$IFn$_invoke$arity$1 ? factory_61119.cljs$core$IFn$_invoke$arity$1(f_61097) : factory_61119.call(null,f_61097));
var fexpr__60543 = (cljs.core.truth_(selector_61047)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_61046,selector_61047):cljs.core.identity);
return (fexpr__60543.cljs$core$IFn$_invoke$arity$1 ? fexpr__60543.cljs$core$IFn$_invoke$arity$1(G__60544) : fexpr__60543.call(null,G__60544));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61046,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61047,actual_type_61118,f_61097], null),canonical_f_61120], 0));

if(cljs.core.truth_(elem_61046.addEventListener)){
elem_61046.addEventListener(cljs.core.name(actual_type_61118),canonical_f_61120);
} else {
elem_61046.attachEvent(cljs.core.name(actual_type_61118),canonical_f_61120);
}


var G__61121 = cljs.core.next(seq__60432_61111__$1);
var G__61122 = null;
var G__61123 = (0);
var G__61124 = (0);
seq__60432_61098 = G__61121;
chunk__60434_61099 = G__61122;
count__60435_61100 = G__61123;
i__60436_61101 = G__61124;
continue;
}
} else {
}
}
break;
}

var G__61125 = cljs.core.next(seq__60431_61089__$1);
var G__61126 = null;
var G__61127 = (0);
var G__61128 = (0);
seq__60431_61050 = G__61125;
chunk__60438_61051 = G__61126;
count__60439_61052 = G__61127;
i__60440_61053 = G__61128;
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
var len__4736__auto___61129 = arguments.length;
var i__4737__auto___61130 = (0);
while(true){
if((i__4737__auto___61130 < len__4736__auto___61129)){
args__4742__auto__.push((arguments[i__4737__auto___61130]));

var G__61131 = (i__4737__auto___61130 + (1));
i__4737__auto___61130 = G__61131;
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

var vec__60551_61132 = dommy.core.elem_and_selector(elem_sel);
var elem_61133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60551_61132,(0),null);
var selector_61134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60551_61132,(1),null);
var seq__60554_61135 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__60561_61136 = null;
var count__60562_61137 = (0);
var i__60563_61138 = (0);
while(true){
if((i__60563_61138 < count__60562_61137)){
var vec__60607_61139 = chunk__60561_61136.cljs$core$IIndexed$_nth$arity$2(null,i__60563_61138);
var orig_type_61140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60607_61139,(0),null);
var f_61141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60607_61139,(1),null);
var seq__60564_61142 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61140,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61140,cljs.core.identity])));
var chunk__60566_61143 = null;
var count__60567_61144 = (0);
var i__60568_61145 = (0);
while(true){
if((i__60568_61145 < count__60567_61144)){
var vec__60620_61146 = chunk__60566_61143.cljs$core$IIndexed$_nth$arity$2(null,i__60568_61145);
var actual_type_61147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60620_61146,(0),null);
var __61148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60620_61146,(1),null);
var keys_61149 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61134,actual_type_61147,f_61141], null);
var canonical_f_61150 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61133),keys_61149);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61133,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61149], 0));

if(cljs.core.truth_(elem_61133.removeEventListener)){
elem_61133.removeEventListener(cljs.core.name(actual_type_61147),canonical_f_61150);
} else {
elem_61133.detachEvent(cljs.core.name(actual_type_61147),canonical_f_61150);
}


var G__61151 = seq__60564_61142;
var G__61152 = chunk__60566_61143;
var G__61153 = count__60567_61144;
var G__61154 = (i__60568_61145 + (1));
seq__60564_61142 = G__61151;
chunk__60566_61143 = G__61152;
count__60567_61144 = G__61153;
i__60568_61145 = G__61154;
continue;
} else {
var temp__5735__auto___61155 = cljs.core.seq(seq__60564_61142);
if(temp__5735__auto___61155){
var seq__60564_61156__$1 = temp__5735__auto___61155;
if(cljs.core.chunked_seq_QMARK_(seq__60564_61156__$1)){
var c__4556__auto___61157 = cljs.core.chunk_first(seq__60564_61156__$1);
var G__61158 = cljs.core.chunk_rest(seq__60564_61156__$1);
var G__61159 = c__4556__auto___61157;
var G__61160 = cljs.core.count(c__4556__auto___61157);
var G__61161 = (0);
seq__60564_61142 = G__61158;
chunk__60566_61143 = G__61159;
count__60567_61144 = G__61160;
i__60568_61145 = G__61161;
continue;
} else {
var vec__60624_61162 = cljs.core.first(seq__60564_61156__$1);
var actual_type_61163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60624_61162,(0),null);
var __61164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60624_61162,(1),null);
var keys_61165 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61134,actual_type_61163,f_61141], null);
var canonical_f_61166 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61133),keys_61165);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61133,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61165], 0));

if(cljs.core.truth_(elem_61133.removeEventListener)){
elem_61133.removeEventListener(cljs.core.name(actual_type_61163),canonical_f_61166);
} else {
elem_61133.detachEvent(cljs.core.name(actual_type_61163),canonical_f_61166);
}


var G__61167 = cljs.core.next(seq__60564_61156__$1);
var G__61168 = null;
var G__61169 = (0);
var G__61170 = (0);
seq__60564_61142 = G__61167;
chunk__60566_61143 = G__61168;
count__60567_61144 = G__61169;
i__60568_61145 = G__61170;
continue;
}
} else {
}
}
break;
}

var G__61171 = seq__60554_61135;
var G__61172 = chunk__60561_61136;
var G__61173 = count__60562_61137;
var G__61174 = (i__60563_61138 + (1));
seq__60554_61135 = G__61171;
chunk__60561_61136 = G__61172;
count__60562_61137 = G__61173;
i__60563_61138 = G__61174;
continue;
} else {
var temp__5735__auto___61175 = cljs.core.seq(seq__60554_61135);
if(temp__5735__auto___61175){
var seq__60554_61176__$1 = temp__5735__auto___61175;
if(cljs.core.chunked_seq_QMARK_(seq__60554_61176__$1)){
var c__4556__auto___61177 = cljs.core.chunk_first(seq__60554_61176__$1);
var G__61178 = cljs.core.chunk_rest(seq__60554_61176__$1);
var G__61179 = c__4556__auto___61177;
var G__61180 = cljs.core.count(c__4556__auto___61177);
var G__61181 = (0);
seq__60554_61135 = G__61178;
chunk__60561_61136 = G__61179;
count__60562_61137 = G__61180;
i__60563_61138 = G__61181;
continue;
} else {
var vec__60627_61182 = cljs.core.first(seq__60554_61176__$1);
var orig_type_61183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60627_61182,(0),null);
var f_61184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60627_61182,(1),null);
var seq__60555_61185 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_61183,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61183,cljs.core.identity])));
var chunk__60557_61186 = null;
var count__60558_61187 = (0);
var i__60559_61188 = (0);
while(true){
if((i__60559_61188 < count__60558_61187)){
var vec__60641_61189 = chunk__60557_61186.cljs$core$IIndexed$_nth$arity$2(null,i__60559_61188);
var actual_type_61190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60641_61189,(0),null);
var __61191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60641_61189,(1),null);
var keys_61192 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61134,actual_type_61190,f_61184], null);
var canonical_f_61193 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61133),keys_61192);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61133,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61192], 0));

if(cljs.core.truth_(elem_61133.removeEventListener)){
elem_61133.removeEventListener(cljs.core.name(actual_type_61190),canonical_f_61193);
} else {
elem_61133.detachEvent(cljs.core.name(actual_type_61190),canonical_f_61193);
}


var G__61194 = seq__60555_61185;
var G__61195 = chunk__60557_61186;
var G__61196 = count__60558_61187;
var G__61197 = (i__60559_61188 + (1));
seq__60555_61185 = G__61194;
chunk__60557_61186 = G__61195;
count__60558_61187 = G__61196;
i__60559_61188 = G__61197;
continue;
} else {
var temp__5735__auto___61198__$1 = cljs.core.seq(seq__60555_61185);
if(temp__5735__auto___61198__$1){
var seq__60555_61199__$1 = temp__5735__auto___61198__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60555_61199__$1)){
var c__4556__auto___61200 = cljs.core.chunk_first(seq__60555_61199__$1);
var G__61201 = cljs.core.chunk_rest(seq__60555_61199__$1);
var G__61202 = c__4556__auto___61200;
var G__61203 = cljs.core.count(c__4556__auto___61200);
var G__61204 = (0);
seq__60555_61185 = G__61201;
chunk__60557_61186 = G__61202;
count__60558_61187 = G__61203;
i__60559_61188 = G__61204;
continue;
} else {
var vec__60645_61205 = cljs.core.first(seq__60555_61199__$1);
var actual_type_61206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60645_61205,(0),null);
var __61207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60645_61205,(1),null);
var keys_61208 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61134,actual_type_61206,f_61184], null);
var canonical_f_61209 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_61133),keys_61208);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_61133,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_61208], 0));

if(cljs.core.truth_(elem_61133.removeEventListener)){
elem_61133.removeEventListener(cljs.core.name(actual_type_61206),canonical_f_61209);
} else {
elem_61133.detachEvent(cljs.core.name(actual_type_61206),canonical_f_61209);
}


var G__61210 = cljs.core.next(seq__60555_61199__$1);
var G__61211 = null;
var G__61212 = (0);
var G__61213 = (0);
seq__60555_61185 = G__61210;
chunk__60557_61186 = G__61211;
count__60558_61187 = G__61212;
i__60559_61188 = G__61213;
continue;
}
} else {
}
}
break;
}

var G__61214 = cljs.core.next(seq__60554_61176__$1);
var G__61215 = null;
var G__61216 = (0);
var G__61217 = (0);
seq__60554_61135 = G__61214;
chunk__60561_61136 = G__61215;
count__60562_61137 = G__61216;
i__60563_61138 = G__61217;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq60549){
var G__60550 = cljs.core.first(seq60549);
var seq60549__$1 = cljs.core.next(seq60549);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60550,seq60549__$1);
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

var G__61222 = (i__4737__auto___61221 + (1));
i__4737__auto___61221 = G__61222;
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

var vec__60672_61225 = dommy.core.elem_and_selector(elem_sel);
var elem_61226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60672_61225,(0),null);
var selector_61227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60672_61225,(1),null);
var seq__60675_61229 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__60676_61230 = null;
var count__60677_61231 = (0);
var i__60678_61232 = (0);
while(true){
if((i__60678_61232 < count__60677_61231)){
var vec__60695_61234 = chunk__60676_61230.cljs$core$IIndexed$_nth$arity$2(null,i__60678_61232);
var type_61235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60695_61234,(0),null);
var f_61236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60695_61234,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61235,((function (seq__60675_61229,chunk__60676_61230,count__60677_61231,i__60678_61232,vec__60695_61234,type_61235,f_61236,vec__60672_61225,elem_61226,selector_61227){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61235,dommy$core$this_fn], 0));

return (f_61236.cljs$core$IFn$_invoke$arity$1 ? f_61236.cljs$core$IFn$_invoke$arity$1(e) : f_61236.call(null,e));
});})(seq__60675_61229,chunk__60676_61230,count__60677_61231,i__60678_61232,vec__60695_61234,type_61235,f_61236,vec__60672_61225,elem_61226,selector_61227))
], 0));


var G__61237 = seq__60675_61229;
var G__61238 = chunk__60676_61230;
var G__61239 = count__60677_61231;
var G__61240 = (i__60678_61232 + (1));
seq__60675_61229 = G__61237;
chunk__60676_61230 = G__61238;
count__60677_61231 = G__61239;
i__60678_61232 = G__61240;
continue;
} else {
var temp__5735__auto___61241 = cljs.core.seq(seq__60675_61229);
if(temp__5735__auto___61241){
var seq__60675_61242__$1 = temp__5735__auto___61241;
if(cljs.core.chunked_seq_QMARK_(seq__60675_61242__$1)){
var c__4556__auto___61243 = cljs.core.chunk_first(seq__60675_61242__$1);
var G__61244 = cljs.core.chunk_rest(seq__60675_61242__$1);
var G__61245 = c__4556__auto___61243;
var G__61246 = cljs.core.count(c__4556__auto___61243);
var G__61247 = (0);
seq__60675_61229 = G__61244;
chunk__60676_61230 = G__61245;
count__60677_61231 = G__61246;
i__60678_61232 = G__61247;
continue;
} else {
var vec__60710_61248 = cljs.core.first(seq__60675_61242__$1);
var type_61249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60710_61248,(0),null);
var f_61250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60710_61248,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61249,((function (seq__60675_61229,chunk__60676_61230,count__60677_61231,i__60678_61232,vec__60710_61248,type_61249,f_61250,seq__60675_61242__$1,temp__5735__auto___61241,vec__60672_61225,elem_61226,selector_61227){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_61249,dommy$core$this_fn], 0));

return (f_61250.cljs$core$IFn$_invoke$arity$1 ? f_61250.cljs$core$IFn$_invoke$arity$1(e) : f_61250.call(null,e));
});})(seq__60675_61229,chunk__60676_61230,count__60677_61231,i__60678_61232,vec__60710_61248,type_61249,f_61250,seq__60675_61242__$1,temp__5735__auto___61241,vec__60672_61225,elem_61226,selector_61227))
], 0));


var G__61255 = cljs.core.next(seq__60675_61242__$1);
var G__61256 = null;
var G__61257 = (0);
var G__61258 = (0);
seq__60675_61229 = G__61255;
chunk__60676_61230 = G__61256;
count__60677_61231 = G__61257;
i__60678_61232 = G__61258;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq60670){
var G__60671 = cljs.core.first(seq60670);
var seq60670__$1 = cljs.core.next(seq60670);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60671,seq60670__$1);
}));


//# sourceMappingURL=dommy.core.js.map
