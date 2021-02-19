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
var G__55849 = arguments.length;
switch (G__55849) {
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
var G__55851 = arguments.length;
switch (G__55851) {
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
var G__55854 = arguments.length;
switch (G__55854) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__55852_SHARP_){
return (!((p1__55852_SHARP_ === base)));
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
var len__4736__auto___56307 = arguments.length;
var i__4737__auto___56308 = (0);
while(true){
if((i__4737__auto___56308 < len__4736__auto___56307)){
args__4742__auto__.push((arguments[i__4737__auto___56308]));

var G__56309 = (i__4737__auto___56308 + (1));
i__4737__auto___56308 = G__56309;
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
var seq__55862_56310 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__55863_56311 = null;
var count__55864_56312 = (0);
var i__55865_56313 = (0);
while(true){
if((i__55865_56313 < count__55864_56312)){
var vec__55874_56314 = chunk__55863_56311.cljs$core$IIndexed$_nth$arity$2(null,i__55865_56313);
var k_56315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55874_56314,(0),null);
var v_56316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55874_56314,(1),null);
style.setProperty(dommy.utils.as_str(k_56315),v_56316);


var G__56317 = seq__55862_56310;
var G__56318 = chunk__55863_56311;
var G__56319 = count__55864_56312;
var G__56320 = (i__55865_56313 + (1));
seq__55862_56310 = G__56317;
chunk__55863_56311 = G__56318;
count__55864_56312 = G__56319;
i__55865_56313 = G__56320;
continue;
} else {
var temp__5735__auto___56321 = cljs.core.seq(seq__55862_56310);
if(temp__5735__auto___56321){
var seq__55862_56322__$1 = temp__5735__auto___56321;
if(cljs.core.chunked_seq_QMARK_(seq__55862_56322__$1)){
var c__4556__auto___56323 = cljs.core.chunk_first(seq__55862_56322__$1);
var G__56324 = cljs.core.chunk_rest(seq__55862_56322__$1);
var G__56325 = c__4556__auto___56323;
var G__56326 = cljs.core.count(c__4556__auto___56323);
var G__56327 = (0);
seq__55862_56310 = G__56324;
chunk__55863_56311 = G__56325;
count__55864_56312 = G__56326;
i__55865_56313 = G__56327;
continue;
} else {
var vec__55878_56328 = cljs.core.first(seq__55862_56322__$1);
var k_56329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55878_56328,(0),null);
var v_56330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55878_56328,(1),null);
style.setProperty(dommy.utils.as_str(k_56329),v_56330);


var G__56331 = cljs.core.next(seq__55862_56322__$1);
var G__56332 = null;
var G__56333 = (0);
var G__56334 = (0);
seq__55862_56310 = G__56331;
chunk__55863_56311 = G__56332;
count__55864_56312 = G__56333;
i__55865_56313 = G__56334;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq55858){
var G__55859 = cljs.core.first(seq55858);
var seq55858__$1 = cljs.core.next(seq55858);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55859,seq55858__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56335 = arguments.length;
var i__4737__auto___56336 = (0);
while(true){
if((i__4737__auto___56336 < len__4736__auto___56335)){
args__4742__auto__.push((arguments[i__4737__auto___56336]));

var G__56337 = (i__4737__auto___56336 + (1));
i__4737__auto___56336 = G__56337;
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
var seq__55885_56338 = cljs.core.seq(keywords);
var chunk__55886_56339 = null;
var count__55887_56340 = (0);
var i__55888_56341 = (0);
while(true){
if((i__55888_56341 < count__55887_56340)){
var kw_56342 = chunk__55886_56339.cljs$core$IIndexed$_nth$arity$2(null,i__55888_56341);
style.removeProperty(dommy.utils.as_str(kw_56342));


var G__56343 = seq__55885_56338;
var G__56344 = chunk__55886_56339;
var G__56345 = count__55887_56340;
var G__56346 = (i__55888_56341 + (1));
seq__55885_56338 = G__56343;
chunk__55886_56339 = G__56344;
count__55887_56340 = G__56345;
i__55888_56341 = G__56346;
continue;
} else {
var temp__5735__auto___56347 = cljs.core.seq(seq__55885_56338);
if(temp__5735__auto___56347){
var seq__55885_56348__$1 = temp__5735__auto___56347;
if(cljs.core.chunked_seq_QMARK_(seq__55885_56348__$1)){
var c__4556__auto___56349 = cljs.core.chunk_first(seq__55885_56348__$1);
var G__56350 = cljs.core.chunk_rest(seq__55885_56348__$1);
var G__56351 = c__4556__auto___56349;
var G__56352 = cljs.core.count(c__4556__auto___56349);
var G__56353 = (0);
seq__55885_56338 = G__56350;
chunk__55886_56339 = G__56351;
count__55887_56340 = G__56352;
i__55888_56341 = G__56353;
continue;
} else {
var kw_56354 = cljs.core.first(seq__55885_56348__$1);
style.removeProperty(dommy.utils.as_str(kw_56354));


var G__56355 = cljs.core.next(seq__55885_56348__$1);
var G__56356 = null;
var G__56357 = (0);
var G__56358 = (0);
seq__55885_56338 = G__56355;
chunk__55886_56339 = G__56356;
count__55887_56340 = G__56357;
i__55888_56341 = G__56358;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq55882){
var G__55883 = cljs.core.first(seq55882);
var seq55882__$1 = cljs.core.next(seq55882);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55883,seq55882__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56359 = arguments.length;
var i__4737__auto___56360 = (0);
while(true){
if((i__4737__auto___56360 < len__4736__auto___56359)){
args__4742__auto__.push((arguments[i__4737__auto___56360]));

var G__56361 = (i__4737__auto___56360 + (1));
i__4737__auto___56360 = G__56361;
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

var seq__55895_56362 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__55896_56363 = null;
var count__55897_56364 = (0);
var i__55898_56365 = (0);
while(true){
if((i__55898_56365 < count__55897_56364)){
var vec__55905_56366 = chunk__55896_56363.cljs$core$IIndexed$_nth$arity$2(null,i__55898_56365);
var k_56367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55905_56366,(0),null);
var v_56368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55905_56366,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_56367,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_56368),"px"].join('')], 0));


var G__56369 = seq__55895_56362;
var G__56370 = chunk__55896_56363;
var G__56371 = count__55897_56364;
var G__56372 = (i__55898_56365 + (1));
seq__55895_56362 = G__56369;
chunk__55896_56363 = G__56370;
count__55897_56364 = G__56371;
i__55898_56365 = G__56372;
continue;
} else {
var temp__5735__auto___56373 = cljs.core.seq(seq__55895_56362);
if(temp__5735__auto___56373){
var seq__55895_56374__$1 = temp__5735__auto___56373;
if(cljs.core.chunked_seq_QMARK_(seq__55895_56374__$1)){
var c__4556__auto___56375 = cljs.core.chunk_first(seq__55895_56374__$1);
var G__56376 = cljs.core.chunk_rest(seq__55895_56374__$1);
var G__56377 = c__4556__auto___56375;
var G__56378 = cljs.core.count(c__4556__auto___56375);
var G__56379 = (0);
seq__55895_56362 = G__56376;
chunk__55896_56363 = G__56377;
count__55897_56364 = G__56378;
i__55898_56365 = G__56379;
continue;
} else {
var vec__55908_56380 = cljs.core.first(seq__55895_56374__$1);
var k_56381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55908_56380,(0),null);
var v_56382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55908_56380,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_56381,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_56382),"px"].join('')], 0));


var G__56383 = cljs.core.next(seq__55895_56374__$1);
var G__56384 = null;
var G__56385 = (0);
var G__56386 = (0);
seq__55895_56362 = G__56383;
chunk__55896_56363 = G__56384;
count__55897_56364 = G__56385;
i__55898_56365 = G__56386;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq55893){
var G__55894 = cljs.core.first(seq55893);
var seq55893__$1 = cljs.core.next(seq55893);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55894,seq55893__$1);
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
var G__55916 = arguments.length;
switch (G__55916) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___56388 = arguments.length;
var i__4737__auto___56389 = (0);
while(true){
if((i__4737__auto___56389 < len__4736__auto___56388)){
args_arr__4757__auto__.push((arguments[i__4737__auto___56389]));

var G__56390 = (i__4737__auto___56389 + (1));
i__4737__auto___56389 = G__56390;
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
var G__55917 = elem;
(G__55917[k__$1] = v);

return G__55917;
} else {
var G__55918 = elem;
G__55918.setAttribute(k__$1,v);

return G__55918;
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

var seq__55919_56391 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__55920_56392 = null;
var count__55921_56393 = (0);
var i__55922_56394 = (0);
while(true){
if((i__55922_56394 < count__55921_56393)){
var vec__55929_56395 = chunk__55920_56392.cljs$core$IIndexed$_nth$arity$2(null,i__55922_56394);
var k_56396__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55929_56395,(0),null);
var v_56397__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55929_56395,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_56396__$1,v_56397__$1);


var G__56398 = seq__55919_56391;
var G__56399 = chunk__55920_56392;
var G__56400 = count__55921_56393;
var G__56401 = (i__55922_56394 + (1));
seq__55919_56391 = G__56398;
chunk__55920_56392 = G__56399;
count__55921_56393 = G__56400;
i__55922_56394 = G__56401;
continue;
} else {
var temp__5735__auto___56402 = cljs.core.seq(seq__55919_56391);
if(temp__5735__auto___56402){
var seq__55919_56403__$1 = temp__5735__auto___56402;
if(cljs.core.chunked_seq_QMARK_(seq__55919_56403__$1)){
var c__4556__auto___56404 = cljs.core.chunk_first(seq__55919_56403__$1);
var G__56405 = cljs.core.chunk_rest(seq__55919_56403__$1);
var G__56406 = c__4556__auto___56404;
var G__56407 = cljs.core.count(c__4556__auto___56404);
var G__56408 = (0);
seq__55919_56391 = G__56405;
chunk__55920_56392 = G__56406;
count__55921_56393 = G__56407;
i__55922_56394 = G__56408;
continue;
} else {
var vec__55932_56409 = cljs.core.first(seq__55919_56403__$1);
var k_56410__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55932_56409,(0),null);
var v_56411__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55932_56409,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_56410__$1,v_56411__$1);


var G__56412 = cljs.core.next(seq__55919_56403__$1);
var G__56413 = null;
var G__56414 = (0);
var G__56415 = (0);
seq__55919_56391 = G__56412;
chunk__55920_56392 = G__56413;
count__55921_56393 = G__56414;
i__55922_56394 = G__56415;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq55912){
var G__55913 = cljs.core.first(seq55912);
var seq55912__$1 = cljs.core.next(seq55912);
var G__55914 = cljs.core.first(seq55912__$1);
var seq55912__$2 = cljs.core.next(seq55912__$1);
var G__55915 = cljs.core.first(seq55912__$2);
var seq55912__$3 = cljs.core.next(seq55912__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55913,G__55914,G__55915,seq55912__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__55939 = arguments.length;
switch (G__55939) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___56417 = arguments.length;
var i__4737__auto___56418 = (0);
while(true){
if((i__4737__auto___56418 < len__4736__auto___56417)){
args_arr__4757__auto__.push((arguments[i__4737__auto___56418]));

var G__56419 = (i__4737__auto___56418 + (1));
i__4737__auto___56418 = G__56419;
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
var k_56420__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__55940 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__55940.cljs$core$IFn$_invoke$arity$1 ? fexpr__55940.cljs$core$IFn$_invoke$arity$1(k_56420__$1) : fexpr__55940.call(null,k_56420__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_56420__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__55941_56422 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__55942_56423 = null;
var count__55943_56424 = (0);
var i__55944_56425 = (0);
while(true){
if((i__55944_56425 < count__55943_56424)){
var k_56427__$1 = chunk__55942_56423.cljs$core$IIndexed$_nth$arity$2(null,i__55944_56425);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_56427__$1);


var G__56428 = seq__55941_56422;
var G__56429 = chunk__55942_56423;
var G__56430 = count__55943_56424;
var G__56431 = (i__55944_56425 + (1));
seq__55941_56422 = G__56428;
chunk__55942_56423 = G__56429;
count__55943_56424 = G__56430;
i__55944_56425 = G__56431;
continue;
} else {
var temp__5735__auto___56432 = cljs.core.seq(seq__55941_56422);
if(temp__5735__auto___56432){
var seq__55941_56433__$1 = temp__5735__auto___56432;
if(cljs.core.chunked_seq_QMARK_(seq__55941_56433__$1)){
var c__4556__auto___56434 = cljs.core.chunk_first(seq__55941_56433__$1);
var G__56435 = cljs.core.chunk_rest(seq__55941_56433__$1);
var G__56436 = c__4556__auto___56434;
var G__56437 = cljs.core.count(c__4556__auto___56434);
var G__56438 = (0);
seq__55941_56422 = G__56435;
chunk__55942_56423 = G__56436;
count__55943_56424 = G__56437;
i__55944_56425 = G__56438;
continue;
} else {
var k_56439__$1 = cljs.core.first(seq__55941_56433__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_56439__$1);


var G__56440 = cljs.core.next(seq__55941_56433__$1);
var G__56441 = null;
var G__56442 = (0);
var G__56443 = (0);
seq__55941_56422 = G__56440;
chunk__55942_56423 = G__56441;
count__55943_56424 = G__56442;
i__55944_56425 = G__56443;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq55936){
var G__55937 = cljs.core.first(seq55936);
var seq55936__$1 = cljs.core.next(seq55936);
var G__55938 = cljs.core.first(seq55936__$1);
var seq55936__$2 = cljs.core.next(seq55936__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55937,G__55938,seq55936__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__55946 = arguments.length;
switch (G__55946) {
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
var G__55951 = arguments.length;
switch (G__55951) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___56446 = arguments.length;
var i__4737__auto___56447 = (0);
while(true){
if((i__4737__auto___56447 < len__4736__auto___56446)){
args_arr__4757__auto__.push((arguments[i__4737__auto___56447]));

var G__56448 = (i__4737__auto___56447 + (1));
i__4737__auto___56447 = G__56448;
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
var temp__5733__auto___56450 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___56450)){
var class_list_56451 = temp__5733__auto___56450;
var seq__55952_56452 = cljs.core.seq(classes__$1);
var chunk__55953_56453 = null;
var count__55954_56454 = (0);
var i__55955_56455 = (0);
while(true){
if((i__55955_56455 < count__55954_56454)){
var c_56457 = chunk__55953_56453.cljs$core$IIndexed$_nth$arity$2(null,i__55955_56455);
class_list_56451.add(c_56457);


var G__56458 = seq__55952_56452;
var G__56459 = chunk__55953_56453;
var G__56460 = count__55954_56454;
var G__56461 = (i__55955_56455 + (1));
seq__55952_56452 = G__56458;
chunk__55953_56453 = G__56459;
count__55954_56454 = G__56460;
i__55955_56455 = G__56461;
continue;
} else {
var temp__5735__auto___56462 = cljs.core.seq(seq__55952_56452);
if(temp__5735__auto___56462){
var seq__55952_56463__$1 = temp__5735__auto___56462;
if(cljs.core.chunked_seq_QMARK_(seq__55952_56463__$1)){
var c__4556__auto___56464 = cljs.core.chunk_first(seq__55952_56463__$1);
var G__56465 = cljs.core.chunk_rest(seq__55952_56463__$1);
var G__56466 = c__4556__auto___56464;
var G__56467 = cljs.core.count(c__4556__auto___56464);
var G__56468 = (0);
seq__55952_56452 = G__56465;
chunk__55953_56453 = G__56466;
count__55954_56454 = G__56467;
i__55955_56455 = G__56468;
continue;
} else {
var c_56469 = cljs.core.first(seq__55952_56463__$1);
class_list_56451.add(c_56469);


var G__56470 = cljs.core.next(seq__55952_56463__$1);
var G__56471 = null;
var G__56472 = (0);
var G__56473 = (0);
seq__55952_56452 = G__56470;
chunk__55953_56453 = G__56471;
count__55954_56454 = G__56472;
i__55955_56455 = G__56473;
continue;
}
} else {
}
}
break;
}
} else {
var seq__55956_56474 = cljs.core.seq(classes__$1);
var chunk__55957_56475 = null;
var count__55958_56476 = (0);
var i__55959_56477 = (0);
while(true){
if((i__55959_56477 < count__55958_56476)){
var c_56478 = chunk__55957_56475.cljs$core$IIndexed$_nth$arity$2(null,i__55959_56477);
var class_name_56479 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_56479,c_56478))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_56479 === ""))?c_56478:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_56479)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_56478)].join('')));
}


var G__56480 = seq__55956_56474;
var G__56481 = chunk__55957_56475;
var G__56482 = count__55958_56476;
var G__56483 = (i__55959_56477 + (1));
seq__55956_56474 = G__56480;
chunk__55957_56475 = G__56481;
count__55958_56476 = G__56482;
i__55959_56477 = G__56483;
continue;
} else {
var temp__5735__auto___56485 = cljs.core.seq(seq__55956_56474);
if(temp__5735__auto___56485){
var seq__55956_56486__$1 = temp__5735__auto___56485;
if(cljs.core.chunked_seq_QMARK_(seq__55956_56486__$1)){
var c__4556__auto___56487 = cljs.core.chunk_first(seq__55956_56486__$1);
var G__56489 = cljs.core.chunk_rest(seq__55956_56486__$1);
var G__56490 = c__4556__auto___56487;
var G__56491 = cljs.core.count(c__4556__auto___56487);
var G__56492 = (0);
seq__55956_56474 = G__56489;
chunk__55957_56475 = G__56490;
count__55958_56476 = G__56491;
i__55959_56477 = G__56492;
continue;
} else {
var c_56493 = cljs.core.first(seq__55956_56486__$1);
var class_name_56494 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_56494,c_56493))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_56494 === ""))?c_56493:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_56494)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_56493)].join('')));
}


var G__56495 = cljs.core.next(seq__55956_56486__$1);
var G__56496 = null;
var G__56497 = (0);
var G__56498 = (0);
seq__55956_56474 = G__56495;
chunk__55957_56475 = G__56496;
count__55958_56476 = G__56497;
i__55959_56477 = G__56498;
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
var seq__55960_56499 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__55961_56500 = null;
var count__55962_56501 = (0);
var i__55963_56502 = (0);
while(true){
if((i__55963_56502 < count__55962_56501)){
var c_56503 = chunk__55961_56500.cljs$core$IIndexed$_nth$arity$2(null,i__55963_56502);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_56503);


var G__56504 = seq__55960_56499;
var G__56505 = chunk__55961_56500;
var G__56506 = count__55962_56501;
var G__56507 = (i__55963_56502 + (1));
seq__55960_56499 = G__56504;
chunk__55961_56500 = G__56505;
count__55962_56501 = G__56506;
i__55963_56502 = G__56507;
continue;
} else {
var temp__5735__auto___56508 = cljs.core.seq(seq__55960_56499);
if(temp__5735__auto___56508){
var seq__55960_56509__$1 = temp__5735__auto___56508;
if(cljs.core.chunked_seq_QMARK_(seq__55960_56509__$1)){
var c__4556__auto___56510 = cljs.core.chunk_first(seq__55960_56509__$1);
var G__56511 = cljs.core.chunk_rest(seq__55960_56509__$1);
var G__56512 = c__4556__auto___56510;
var G__56513 = cljs.core.count(c__4556__auto___56510);
var G__56514 = (0);
seq__55960_56499 = G__56511;
chunk__55961_56500 = G__56512;
count__55962_56501 = G__56513;
i__55963_56502 = G__56514;
continue;
} else {
var c_56515 = cljs.core.first(seq__55960_56509__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_56515);


var G__56516 = cljs.core.next(seq__55960_56509__$1);
var G__56517 = null;
var G__56518 = (0);
var G__56519 = (0);
seq__55960_56499 = G__56516;
chunk__55961_56500 = G__56517;
count__55962_56501 = G__56518;
i__55963_56502 = G__56519;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq55948){
var G__55949 = cljs.core.first(seq55948);
var seq55948__$1 = cljs.core.next(seq55948);
var G__55950 = cljs.core.first(seq55948__$1);
var seq55948__$2 = cljs.core.next(seq55948__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55949,G__55950,seq55948__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__55968 = arguments.length;
switch (G__55968) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___56521 = arguments.length;
var i__4737__auto___56522 = (0);
while(true){
if((i__4737__auto___56522 < len__4736__auto___56521)){
args_arr__4757__auto__.push((arguments[i__4737__auto___56522]));

var G__56523 = (i__4737__auto___56522 + (1));
i__4737__auto___56522 = G__56523;
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
var temp__5733__auto___56524 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___56524)){
var class_list_56525 = temp__5733__auto___56524;
class_list_56525.remove(c__$1);
} else {
var class_name_56526 = dommy.core.class$(elem);
var new_class_name_56527 = dommy.utils.remove_class_str(class_name_56526,c__$1);
if((class_name_56526 === new_class_name_56527)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_56527);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__55969 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__55970 = null;
var count__55971 = (0);
var i__55972 = (0);
while(true){
if((i__55972 < count__55971)){
var c = chunk__55970.cljs$core$IIndexed$_nth$arity$2(null,i__55972);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__56528 = seq__55969;
var G__56529 = chunk__55970;
var G__56530 = count__55971;
var G__56531 = (i__55972 + (1));
seq__55969 = G__56528;
chunk__55970 = G__56529;
count__55971 = G__56530;
i__55972 = G__56531;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55969);
if(temp__5735__auto__){
var seq__55969__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55969__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55969__$1);
var G__56532 = cljs.core.chunk_rest(seq__55969__$1);
var G__56533 = c__4556__auto__;
var G__56534 = cljs.core.count(c__4556__auto__);
var G__56535 = (0);
seq__55969 = G__56532;
chunk__55970 = G__56533;
count__55971 = G__56534;
i__55972 = G__56535;
continue;
} else {
var c = cljs.core.first(seq__55969__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__56536 = cljs.core.next(seq__55969__$1);
var G__56537 = null;
var G__56538 = (0);
var G__56539 = (0);
seq__55969 = G__56536;
chunk__55970 = G__56537;
count__55971 = G__56538;
i__55972 = G__56539;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq55965){
var G__55966 = cljs.core.first(seq55965);
var seq55965__$1 = cljs.core.next(seq55965);
var G__55967 = cljs.core.first(seq55965__$1);
var seq55965__$2 = cljs.core.next(seq55965__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55966,G__55967,seq55965__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__55974 = arguments.length;
switch (G__55974) {
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
var temp__5733__auto___56541 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___56541)){
var class_list_56542 = temp__5733__auto___56541;
class_list_56542.toggle(c__$1);
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
var G__55976 = arguments.length;
switch (G__55976) {
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
var G__55979 = arguments.length;
switch (G__55979) {
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
var G__55986 = arguments.length;
switch (G__55986) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___56546 = arguments.length;
var i__4737__auto___56547 = (0);
while(true){
if((i__4737__auto___56547 < len__4736__auto___56546)){
args_arr__4757__auto__.push((arguments[i__4737__auto___56547]));

var G__56548 = (i__4737__auto___56547 + (1));
i__4737__auto___56547 = G__56548;
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
var G__55987 = parent;
G__55987.appendChild(child);

return G__55987;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__55988_56549 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__55989_56550 = null;
var count__55990_56551 = (0);
var i__55991_56552 = (0);
while(true){
if((i__55991_56552 < count__55990_56551)){
var c_56553 = chunk__55989_56550.cljs$core$IIndexed$_nth$arity$2(null,i__55991_56552);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_56553);


var G__56554 = seq__55988_56549;
var G__56555 = chunk__55989_56550;
var G__56556 = count__55990_56551;
var G__56557 = (i__55991_56552 + (1));
seq__55988_56549 = G__56554;
chunk__55989_56550 = G__56555;
count__55990_56551 = G__56556;
i__55991_56552 = G__56557;
continue;
} else {
var temp__5735__auto___56558 = cljs.core.seq(seq__55988_56549);
if(temp__5735__auto___56558){
var seq__55988_56559__$1 = temp__5735__auto___56558;
if(cljs.core.chunked_seq_QMARK_(seq__55988_56559__$1)){
var c__4556__auto___56560 = cljs.core.chunk_first(seq__55988_56559__$1);
var G__56561 = cljs.core.chunk_rest(seq__55988_56559__$1);
var G__56562 = c__4556__auto___56560;
var G__56563 = cljs.core.count(c__4556__auto___56560);
var G__56564 = (0);
seq__55988_56549 = G__56561;
chunk__55989_56550 = G__56562;
count__55990_56551 = G__56563;
i__55991_56552 = G__56564;
continue;
} else {
var c_56565 = cljs.core.first(seq__55988_56559__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_56565);


var G__56566 = cljs.core.next(seq__55988_56559__$1);
var G__56567 = null;
var G__56568 = (0);
var G__56569 = (0);
seq__55988_56549 = G__56566;
chunk__55989_56550 = G__56567;
count__55990_56551 = G__56568;
i__55991_56552 = G__56569;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq55983){
var G__55984 = cljs.core.first(seq55983);
var seq55983__$1 = cljs.core.next(seq55983);
var G__55985 = cljs.core.first(seq55983__$1);
var seq55983__$2 = cljs.core.next(seq55983__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55984,G__55985,seq55983__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__55996 = arguments.length;
switch (G__55996) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___56571 = arguments.length;
var i__4737__auto___56572 = (0);
while(true){
if((i__4737__auto___56572 < len__4736__auto___56571)){
args_arr__4757__auto__.push((arguments[i__4737__auto___56572]));

var G__56573 = (i__4737__auto___56572 + (1));
i__4737__auto___56572 = G__56573;
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
var G__55997 = parent;
G__55997.insertBefore(child,parent.firstChild);

return G__55997;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__55998_56574 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__55999_56575 = null;
var count__56000_56576 = (0);
var i__56001_56577 = (0);
while(true){
if((i__56001_56577 < count__56000_56576)){
var c_56578 = chunk__55999_56575.cljs$core$IIndexed$_nth$arity$2(null,i__56001_56577);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_56578);


var G__56579 = seq__55998_56574;
var G__56580 = chunk__55999_56575;
var G__56581 = count__56000_56576;
var G__56582 = (i__56001_56577 + (1));
seq__55998_56574 = G__56579;
chunk__55999_56575 = G__56580;
count__56000_56576 = G__56581;
i__56001_56577 = G__56582;
continue;
} else {
var temp__5735__auto___56583 = cljs.core.seq(seq__55998_56574);
if(temp__5735__auto___56583){
var seq__55998_56584__$1 = temp__5735__auto___56583;
if(cljs.core.chunked_seq_QMARK_(seq__55998_56584__$1)){
var c__4556__auto___56585 = cljs.core.chunk_first(seq__55998_56584__$1);
var G__56586 = cljs.core.chunk_rest(seq__55998_56584__$1);
var G__56587 = c__4556__auto___56585;
var G__56588 = cljs.core.count(c__4556__auto___56585);
var G__56589 = (0);
seq__55998_56574 = G__56586;
chunk__55999_56575 = G__56587;
count__56000_56576 = G__56588;
i__56001_56577 = G__56589;
continue;
} else {
var c_56590 = cljs.core.first(seq__55998_56584__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_56590);


var G__56591 = cljs.core.next(seq__55998_56584__$1);
var G__56592 = null;
var G__56593 = (0);
var G__56594 = (0);
seq__55998_56574 = G__56591;
chunk__55999_56575 = G__56592;
count__56000_56576 = G__56593;
i__56001_56577 = G__56594;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq55993){
var G__55994 = cljs.core.first(seq55993);
var seq55993__$1 = cljs.core.next(seq55993);
var G__55995 = cljs.core.first(seq55993__$1);
var seq55993__$2 = cljs.core.next(seq55993__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55994,G__55995,seq55993__$2);
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
var temp__5733__auto___56595 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___56595)){
var next_56596 = temp__5733__auto___56595;
dommy.core.insert_before_BANG_(elem,next_56596);
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
var G__56003 = arguments.length;
switch (G__56003) {
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
var G__56004 = p;
G__56004.removeChild(elem);

return G__56004;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56005){
var vec__56006 = p__56005;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56006,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56006,(1),null);
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
var len__4736__auto___56604 = arguments.length;
var i__4737__auto___56605 = (0);
while(true){
if((i__4737__auto___56605 < len__4736__auto___56604)){
args__4742__auto__.push((arguments[i__4737__auto___56605]));

var G__56606 = (i__4737__auto___56605 + (1));
i__4737__auto___56605 = G__56606;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq56009){
var G__56010 = cljs.core.first(seq56009);
var seq56009__$1 = cljs.core.next(seq56009);
var G__56011 = cljs.core.first(seq56009__$1);
var seq56009__$2 = cljs.core.next(seq56009__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56010,G__56011,seq56009__$2);
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
var len__4736__auto___56612 = arguments.length;
var i__4737__auto___56613 = (0);
while(true){
if((i__4737__auto___56613 < len__4736__auto___56612)){
args__4742__auto__.push((arguments[i__4737__auto___56613]));

var G__56614 = (i__4737__auto___56613 + (1));
i__4737__auto___56613 = G__56614;
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

var vec__56014_56617 = dommy.core.elem_and_selector(elem_sel);
var elem_56618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56014_56617,(0),null);
var selector_56619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56014_56617,(1),null);
var seq__56017_56620 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__56024_56621 = null;
var count__56025_56622 = (0);
var i__56026_56623 = (0);
while(true){
if((i__56026_56623 < count__56025_56622)){
var vec__56082_56626 = chunk__56024_56621.cljs$core$IIndexed$_nth$arity$2(null,i__56026_56623);
var orig_type_56627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56082_56626,(0),null);
var f_56628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56082_56626,(1),null);
var seq__56027_56629 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_56627,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_56627,cljs.core.identity])));
var chunk__56029_56630 = null;
var count__56030_56631 = (0);
var i__56031_56632 = (0);
while(true){
if((i__56031_56632 < count__56030_56631)){
var vec__56098_56633 = chunk__56029_56630.cljs$core$IIndexed$_nth$arity$2(null,i__56031_56632);
var actual_type_56634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56098_56633,(0),null);
var factory_56635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56098_56633,(1),null);
var canonical_f_56638 = (function (){var G__56102 = (factory_56635.cljs$core$IFn$_invoke$arity$1 ? factory_56635.cljs$core$IFn$_invoke$arity$1(f_56628) : factory_56635.call(null,f_56628));
var fexpr__56101 = (cljs.core.truth_(selector_56619)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_56618,selector_56619):cljs.core.identity);
return (fexpr__56101.cljs$core$IFn$_invoke$arity$1 ? fexpr__56101.cljs$core$IFn$_invoke$arity$1(G__56102) : fexpr__56101.call(null,G__56102));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_56618,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56619,actual_type_56634,f_56628], null),canonical_f_56638], 0));

if(cljs.core.truth_(elem_56618.addEventListener)){
elem_56618.addEventListener(cljs.core.name(actual_type_56634),canonical_f_56638);
} else {
elem_56618.attachEvent(cljs.core.name(actual_type_56634),canonical_f_56638);
}


var G__56641 = seq__56027_56629;
var G__56642 = chunk__56029_56630;
var G__56643 = count__56030_56631;
var G__56644 = (i__56031_56632 + (1));
seq__56027_56629 = G__56641;
chunk__56029_56630 = G__56642;
count__56030_56631 = G__56643;
i__56031_56632 = G__56644;
continue;
} else {
var temp__5735__auto___56645 = cljs.core.seq(seq__56027_56629);
if(temp__5735__auto___56645){
var seq__56027_56656__$1 = temp__5735__auto___56645;
if(cljs.core.chunked_seq_QMARK_(seq__56027_56656__$1)){
var c__4556__auto___56657 = cljs.core.chunk_first(seq__56027_56656__$1);
var G__56658 = cljs.core.chunk_rest(seq__56027_56656__$1);
var G__56659 = c__4556__auto___56657;
var G__56660 = cljs.core.count(c__4556__auto___56657);
var G__56661 = (0);
seq__56027_56629 = G__56658;
chunk__56029_56630 = G__56659;
count__56030_56631 = G__56660;
i__56031_56632 = G__56661;
continue;
} else {
var vec__56103_56662 = cljs.core.first(seq__56027_56656__$1);
var actual_type_56663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56103_56662,(0),null);
var factory_56664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56103_56662,(1),null);
var canonical_f_56665 = (function (){var G__56107 = (factory_56664.cljs$core$IFn$_invoke$arity$1 ? factory_56664.cljs$core$IFn$_invoke$arity$1(f_56628) : factory_56664.call(null,f_56628));
var fexpr__56106 = (cljs.core.truth_(selector_56619)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_56618,selector_56619):cljs.core.identity);
return (fexpr__56106.cljs$core$IFn$_invoke$arity$1 ? fexpr__56106.cljs$core$IFn$_invoke$arity$1(G__56107) : fexpr__56106.call(null,G__56107));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_56618,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56619,actual_type_56663,f_56628], null),canonical_f_56665], 0));

if(cljs.core.truth_(elem_56618.addEventListener)){
elem_56618.addEventListener(cljs.core.name(actual_type_56663),canonical_f_56665);
} else {
elem_56618.attachEvent(cljs.core.name(actual_type_56663),canonical_f_56665);
}


var G__56666 = cljs.core.next(seq__56027_56656__$1);
var G__56667 = null;
var G__56668 = (0);
var G__56669 = (0);
seq__56027_56629 = G__56666;
chunk__56029_56630 = G__56667;
count__56030_56631 = G__56668;
i__56031_56632 = G__56669;
continue;
}
} else {
}
}
break;
}

var G__56670 = seq__56017_56620;
var G__56671 = chunk__56024_56621;
var G__56672 = count__56025_56622;
var G__56673 = (i__56026_56623 + (1));
seq__56017_56620 = G__56670;
chunk__56024_56621 = G__56671;
count__56025_56622 = G__56672;
i__56026_56623 = G__56673;
continue;
} else {
var temp__5735__auto___56674 = cljs.core.seq(seq__56017_56620);
if(temp__5735__auto___56674){
var seq__56017_56675__$1 = temp__5735__auto___56674;
if(cljs.core.chunked_seq_QMARK_(seq__56017_56675__$1)){
var c__4556__auto___56676 = cljs.core.chunk_first(seq__56017_56675__$1);
var G__56677 = cljs.core.chunk_rest(seq__56017_56675__$1);
var G__56678 = c__4556__auto___56676;
var G__56679 = cljs.core.count(c__4556__auto___56676);
var G__56680 = (0);
seq__56017_56620 = G__56677;
chunk__56024_56621 = G__56678;
count__56025_56622 = G__56679;
i__56026_56623 = G__56680;
continue;
} else {
var vec__56108_56681 = cljs.core.first(seq__56017_56675__$1);
var orig_type_56682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56108_56681,(0),null);
var f_56683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56108_56681,(1),null);
var seq__56018_56684 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_56682,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_56682,cljs.core.identity])));
var chunk__56020_56685 = null;
var count__56021_56686 = (0);
var i__56022_56687 = (0);
while(true){
if((i__56022_56687 < count__56021_56686)){
var vec__56121_56688 = chunk__56020_56685.cljs$core$IIndexed$_nth$arity$2(null,i__56022_56687);
var actual_type_56689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56121_56688,(0),null);
var factory_56690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56121_56688,(1),null);
var canonical_f_56691 = (function (){var G__56125 = (factory_56690.cljs$core$IFn$_invoke$arity$1 ? factory_56690.cljs$core$IFn$_invoke$arity$1(f_56683) : factory_56690.call(null,f_56683));
var fexpr__56124 = (cljs.core.truth_(selector_56619)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_56618,selector_56619):cljs.core.identity);
return (fexpr__56124.cljs$core$IFn$_invoke$arity$1 ? fexpr__56124.cljs$core$IFn$_invoke$arity$1(G__56125) : fexpr__56124.call(null,G__56125));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_56618,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56619,actual_type_56689,f_56683], null),canonical_f_56691], 0));

if(cljs.core.truth_(elem_56618.addEventListener)){
elem_56618.addEventListener(cljs.core.name(actual_type_56689),canonical_f_56691);
} else {
elem_56618.attachEvent(cljs.core.name(actual_type_56689),canonical_f_56691);
}


var G__56692 = seq__56018_56684;
var G__56693 = chunk__56020_56685;
var G__56694 = count__56021_56686;
var G__56695 = (i__56022_56687 + (1));
seq__56018_56684 = G__56692;
chunk__56020_56685 = G__56693;
count__56021_56686 = G__56694;
i__56022_56687 = G__56695;
continue;
} else {
var temp__5735__auto___56696__$1 = cljs.core.seq(seq__56018_56684);
if(temp__5735__auto___56696__$1){
var seq__56018_56697__$1 = temp__5735__auto___56696__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56018_56697__$1)){
var c__4556__auto___56698 = cljs.core.chunk_first(seq__56018_56697__$1);
var G__56699 = cljs.core.chunk_rest(seq__56018_56697__$1);
var G__56700 = c__4556__auto___56698;
var G__56701 = cljs.core.count(c__4556__auto___56698);
var G__56702 = (0);
seq__56018_56684 = G__56699;
chunk__56020_56685 = G__56700;
count__56021_56686 = G__56701;
i__56022_56687 = G__56702;
continue;
} else {
var vec__56126_56703 = cljs.core.first(seq__56018_56697__$1);
var actual_type_56704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56126_56703,(0),null);
var factory_56705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56126_56703,(1),null);
var canonical_f_56706 = (function (){var G__56130 = (factory_56705.cljs$core$IFn$_invoke$arity$1 ? factory_56705.cljs$core$IFn$_invoke$arity$1(f_56683) : factory_56705.call(null,f_56683));
var fexpr__56129 = (cljs.core.truth_(selector_56619)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_56618,selector_56619):cljs.core.identity);
return (fexpr__56129.cljs$core$IFn$_invoke$arity$1 ? fexpr__56129.cljs$core$IFn$_invoke$arity$1(G__56130) : fexpr__56129.call(null,G__56130));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_56618,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56619,actual_type_56704,f_56683], null),canonical_f_56706], 0));

if(cljs.core.truth_(elem_56618.addEventListener)){
elem_56618.addEventListener(cljs.core.name(actual_type_56704),canonical_f_56706);
} else {
elem_56618.attachEvent(cljs.core.name(actual_type_56704),canonical_f_56706);
}


var G__56707 = cljs.core.next(seq__56018_56697__$1);
var G__56708 = null;
var G__56709 = (0);
var G__56710 = (0);
seq__56018_56684 = G__56707;
chunk__56020_56685 = G__56708;
count__56021_56686 = G__56709;
i__56022_56687 = G__56710;
continue;
}
} else {
}
}
break;
}

var G__56711 = cljs.core.next(seq__56017_56675__$1);
var G__56712 = null;
var G__56713 = (0);
var G__56714 = (0);
seq__56017_56620 = G__56711;
chunk__56024_56621 = G__56712;
count__56025_56622 = G__56713;
i__56026_56623 = G__56714;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq56012){
var G__56013 = cljs.core.first(seq56012);
var seq56012__$1 = cljs.core.next(seq56012);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56013,seq56012__$1);
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
var len__4736__auto___56715 = arguments.length;
var i__4737__auto___56716 = (0);
while(true){
if((i__4737__auto___56716 < len__4736__auto___56715)){
args__4742__auto__.push((arguments[i__4737__auto___56716]));

var G__56717 = (i__4737__auto___56716 + (1));
i__4737__auto___56716 = G__56717;
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

var vec__56137_56718 = dommy.core.elem_and_selector(elem_sel);
var elem_56719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56137_56718,(0),null);
var selector_56720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56137_56718,(1),null);
var seq__56140_56721 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__56147_56722 = null;
var count__56148_56723 = (0);
var i__56149_56724 = (0);
while(true){
if((i__56149_56724 < count__56148_56723)){
var vec__56193_56725 = chunk__56147_56722.cljs$core$IIndexed$_nth$arity$2(null,i__56149_56724);
var orig_type_56726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56193_56725,(0),null);
var f_56727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56193_56725,(1),null);
var seq__56150_56728 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_56726,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_56726,cljs.core.identity])));
var chunk__56152_56729 = null;
var count__56153_56730 = (0);
var i__56154_56731 = (0);
while(true){
if((i__56154_56731 < count__56153_56730)){
var vec__56205_56732 = chunk__56152_56729.cljs$core$IIndexed$_nth$arity$2(null,i__56154_56731);
var actual_type_56733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56205_56732,(0),null);
var __56734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56205_56732,(1),null);
var keys_56735 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56720,actual_type_56733,f_56727], null);
var canonical_f_56736 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_56719),keys_56735);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_56719,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_56735], 0));

if(cljs.core.truth_(elem_56719.removeEventListener)){
elem_56719.removeEventListener(cljs.core.name(actual_type_56733),canonical_f_56736);
} else {
elem_56719.detachEvent(cljs.core.name(actual_type_56733),canonical_f_56736);
}


var G__56737 = seq__56150_56728;
var G__56738 = chunk__56152_56729;
var G__56739 = count__56153_56730;
var G__56740 = (i__56154_56731 + (1));
seq__56150_56728 = G__56737;
chunk__56152_56729 = G__56738;
count__56153_56730 = G__56739;
i__56154_56731 = G__56740;
continue;
} else {
var temp__5735__auto___56741 = cljs.core.seq(seq__56150_56728);
if(temp__5735__auto___56741){
var seq__56150_56742__$1 = temp__5735__auto___56741;
if(cljs.core.chunked_seq_QMARK_(seq__56150_56742__$1)){
var c__4556__auto___56743 = cljs.core.chunk_first(seq__56150_56742__$1);
var G__56744 = cljs.core.chunk_rest(seq__56150_56742__$1);
var G__56745 = c__4556__auto___56743;
var G__56746 = cljs.core.count(c__4556__auto___56743);
var G__56747 = (0);
seq__56150_56728 = G__56744;
chunk__56152_56729 = G__56745;
count__56153_56730 = G__56746;
i__56154_56731 = G__56747;
continue;
} else {
var vec__56210_56748 = cljs.core.first(seq__56150_56742__$1);
var actual_type_56749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56210_56748,(0),null);
var __56750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56210_56748,(1),null);
var keys_56751 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56720,actual_type_56749,f_56727], null);
var canonical_f_56752 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_56719),keys_56751);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_56719,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_56751], 0));

if(cljs.core.truth_(elem_56719.removeEventListener)){
elem_56719.removeEventListener(cljs.core.name(actual_type_56749),canonical_f_56752);
} else {
elem_56719.detachEvent(cljs.core.name(actual_type_56749),canonical_f_56752);
}


var G__56753 = cljs.core.next(seq__56150_56742__$1);
var G__56754 = null;
var G__56755 = (0);
var G__56756 = (0);
seq__56150_56728 = G__56753;
chunk__56152_56729 = G__56754;
count__56153_56730 = G__56755;
i__56154_56731 = G__56756;
continue;
}
} else {
}
}
break;
}

var G__56757 = seq__56140_56721;
var G__56758 = chunk__56147_56722;
var G__56759 = count__56148_56723;
var G__56760 = (i__56149_56724 + (1));
seq__56140_56721 = G__56757;
chunk__56147_56722 = G__56758;
count__56148_56723 = G__56759;
i__56149_56724 = G__56760;
continue;
} else {
var temp__5735__auto___56761 = cljs.core.seq(seq__56140_56721);
if(temp__5735__auto___56761){
var seq__56140_56762__$1 = temp__5735__auto___56761;
if(cljs.core.chunked_seq_QMARK_(seq__56140_56762__$1)){
var c__4556__auto___56763 = cljs.core.chunk_first(seq__56140_56762__$1);
var G__56764 = cljs.core.chunk_rest(seq__56140_56762__$1);
var G__56765 = c__4556__auto___56763;
var G__56766 = cljs.core.count(c__4556__auto___56763);
var G__56767 = (0);
seq__56140_56721 = G__56764;
chunk__56147_56722 = G__56765;
count__56148_56723 = G__56766;
i__56149_56724 = G__56767;
continue;
} else {
var vec__56213_56768 = cljs.core.first(seq__56140_56762__$1);
var orig_type_56769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56213_56768,(0),null);
var f_56770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56213_56768,(1),null);
var seq__56141_56771 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_56769,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_56769,cljs.core.identity])));
var chunk__56143_56772 = null;
var count__56144_56773 = (0);
var i__56145_56774 = (0);
while(true){
if((i__56145_56774 < count__56144_56773)){
var vec__56227_56775 = chunk__56143_56772.cljs$core$IIndexed$_nth$arity$2(null,i__56145_56774);
var actual_type_56776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56227_56775,(0),null);
var __56777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56227_56775,(1),null);
var keys_56778 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56720,actual_type_56776,f_56770], null);
var canonical_f_56779 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_56719),keys_56778);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_56719,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_56778], 0));

if(cljs.core.truth_(elem_56719.removeEventListener)){
elem_56719.removeEventListener(cljs.core.name(actual_type_56776),canonical_f_56779);
} else {
elem_56719.detachEvent(cljs.core.name(actual_type_56776),canonical_f_56779);
}


var G__56780 = seq__56141_56771;
var G__56781 = chunk__56143_56772;
var G__56782 = count__56144_56773;
var G__56783 = (i__56145_56774 + (1));
seq__56141_56771 = G__56780;
chunk__56143_56772 = G__56781;
count__56144_56773 = G__56782;
i__56145_56774 = G__56783;
continue;
} else {
var temp__5735__auto___56784__$1 = cljs.core.seq(seq__56141_56771);
if(temp__5735__auto___56784__$1){
var seq__56141_56785__$1 = temp__5735__auto___56784__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56141_56785__$1)){
var c__4556__auto___56786 = cljs.core.chunk_first(seq__56141_56785__$1);
var G__56787 = cljs.core.chunk_rest(seq__56141_56785__$1);
var G__56788 = c__4556__auto___56786;
var G__56789 = cljs.core.count(c__4556__auto___56786);
var G__56790 = (0);
seq__56141_56771 = G__56787;
chunk__56143_56772 = G__56788;
count__56144_56773 = G__56789;
i__56145_56774 = G__56790;
continue;
} else {
var vec__56231_56791 = cljs.core.first(seq__56141_56785__$1);
var actual_type_56792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56231_56791,(0),null);
var __56793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56231_56791,(1),null);
var keys_56794 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56720,actual_type_56792,f_56770], null);
var canonical_f_56795 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_56719),keys_56794);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_56719,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_56794], 0));

if(cljs.core.truth_(elem_56719.removeEventListener)){
elem_56719.removeEventListener(cljs.core.name(actual_type_56792),canonical_f_56795);
} else {
elem_56719.detachEvent(cljs.core.name(actual_type_56792),canonical_f_56795);
}


var G__56796 = cljs.core.next(seq__56141_56785__$1);
var G__56797 = null;
var G__56798 = (0);
var G__56799 = (0);
seq__56141_56771 = G__56796;
chunk__56143_56772 = G__56797;
count__56144_56773 = G__56798;
i__56145_56774 = G__56799;
continue;
}
} else {
}
}
break;
}

var G__56800 = cljs.core.next(seq__56140_56762__$1);
var G__56801 = null;
var G__56802 = (0);
var G__56803 = (0);
seq__56140_56721 = G__56800;
chunk__56147_56722 = G__56801;
count__56148_56723 = G__56802;
i__56149_56724 = G__56803;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq56135){
var G__56136 = cljs.core.first(seq56135);
var seq56135__$1 = cljs.core.next(seq56135);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56136,seq56135__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56804 = arguments.length;
var i__4737__auto___56805 = (0);
while(true){
if((i__4737__auto___56805 < len__4736__auto___56804)){
args__4742__auto__.push((arguments[i__4737__auto___56805]));

var G__56806 = (i__4737__auto___56805 + (1));
i__4737__auto___56805 = G__56806;
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

var vec__56258_56807 = dommy.core.elem_and_selector(elem_sel);
var elem_56808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56258_56807,(0),null);
var selector_56809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56258_56807,(1),null);
var seq__56261_56810 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__56262_56811 = null;
var count__56263_56812 = (0);
var i__56264_56813 = (0);
while(true){
if((i__56264_56813 < count__56263_56812)){
var vec__56289_56814 = chunk__56262_56811.cljs$core$IIndexed$_nth$arity$2(null,i__56264_56813);
var type_56815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56289_56814,(0),null);
var f_56816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56289_56814,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_56815,((function (seq__56261_56810,chunk__56262_56811,count__56263_56812,i__56264_56813,vec__56289_56814,type_56815,f_56816,vec__56258_56807,elem_56808,selector_56809){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_56815,dommy$core$this_fn], 0));

return (f_56816.cljs$core$IFn$_invoke$arity$1 ? f_56816.cljs$core$IFn$_invoke$arity$1(e) : f_56816.call(null,e));
});})(seq__56261_56810,chunk__56262_56811,count__56263_56812,i__56264_56813,vec__56289_56814,type_56815,f_56816,vec__56258_56807,elem_56808,selector_56809))
], 0));


var G__56817 = seq__56261_56810;
var G__56818 = chunk__56262_56811;
var G__56819 = count__56263_56812;
var G__56820 = (i__56264_56813 + (1));
seq__56261_56810 = G__56817;
chunk__56262_56811 = G__56818;
count__56263_56812 = G__56819;
i__56264_56813 = G__56820;
continue;
} else {
var temp__5735__auto___56821 = cljs.core.seq(seq__56261_56810);
if(temp__5735__auto___56821){
var seq__56261_56822__$1 = temp__5735__auto___56821;
if(cljs.core.chunked_seq_QMARK_(seq__56261_56822__$1)){
var c__4556__auto___56823 = cljs.core.chunk_first(seq__56261_56822__$1);
var G__56824 = cljs.core.chunk_rest(seq__56261_56822__$1);
var G__56825 = c__4556__auto___56823;
var G__56826 = cljs.core.count(c__4556__auto___56823);
var G__56827 = (0);
seq__56261_56810 = G__56824;
chunk__56262_56811 = G__56825;
count__56263_56812 = G__56826;
i__56264_56813 = G__56827;
continue;
} else {
var vec__56296_56828 = cljs.core.first(seq__56261_56822__$1);
var type_56829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56296_56828,(0),null);
var f_56830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56296_56828,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_56829,((function (seq__56261_56810,chunk__56262_56811,count__56263_56812,i__56264_56813,vec__56296_56828,type_56829,f_56830,seq__56261_56822__$1,temp__5735__auto___56821,vec__56258_56807,elem_56808,selector_56809){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_56829,dommy$core$this_fn], 0));

return (f_56830.cljs$core$IFn$_invoke$arity$1 ? f_56830.cljs$core$IFn$_invoke$arity$1(e) : f_56830.call(null,e));
});})(seq__56261_56810,chunk__56262_56811,count__56263_56812,i__56264_56813,vec__56296_56828,type_56829,f_56830,seq__56261_56822__$1,temp__5735__auto___56821,vec__56258_56807,elem_56808,selector_56809))
], 0));


var G__56831 = cljs.core.next(seq__56261_56822__$1);
var G__56832 = null;
var G__56833 = (0);
var G__56834 = (0);
seq__56261_56810 = G__56831;
chunk__56262_56811 = G__56832;
count__56263_56812 = G__56833;
i__56264_56813 = G__56834;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq56256){
var G__56257 = cljs.core.first(seq56256);
var seq56256__$1 = cljs.core.next(seq56256);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56257,seq56256__$1);
}));


//# sourceMappingURL=dommy.core.js.map
