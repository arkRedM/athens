goog.provide('spec_tools.visitor');
spec_tools.visitor.spec_dispatch = (function spec_tools$visitor$spec_dispatch(spec,accept,options){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.spec.alpha.spec_QMARK_(spec);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.spec.alpha.regex_QMARK_(spec);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (spec instanceof cljs.core.Keyword);
}
}
})())){
var form = cljs.spec.alpha.form(spec);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818))){
if(cljs.core.seq_QMARK_(form)){
return spec_tools.impl.normalize_symbol(cljs.core.first(form));
} else {
return (spec_tools.visitor.spec_dispatch.cljs$core$IFn$_invoke$arity$3 ? spec_tools.visitor.spec_dispatch.cljs$core$IFn$_invoke$arity$3(form,accept,options) : spec_tools.visitor.spec_dispatch.call(null,form,accept,options));
}
} else {
return spec;
}
} else {
if(cljs.core.set_QMARK_(spec)){
return new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415);
} else {
if(cljs.core.seq_QMARK_(spec)){
return spec_tools.impl.normalize_symbol(cljs.core.first(spec_tools.impl.strip_fn_if_needed(spec)));
} else {
if((spec instanceof cljs.core.Symbol)){
return spec_tools.impl.normalize_symbol(spec);
} else {
return spec_tools.impl.normalize_symbol(spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(spec));

}
}
}
}
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.visitor !== 'undefined') && (typeof spec_tools.visitor.visit_spec !== 'undefined')){
} else {
spec_tools.visitor.visit_spec = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__56519 = cljs.core.get_global_hierarchy;
return (fexpr__56519.cljs$core$IFn$_invoke$arity$0 ? fexpr__56519.cljs$core$IFn$_invoke$arity$0() : fexpr__56519.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.visitor","visit-spec"),spec_tools.visitor.spec_dispatch,new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
/**
 * Walk a spec definition. Takes 2-3 arguments, the spec and the accept
 *   function, and optionally a options map, and returns the result of
 *   calling the accept function. Options map can be used to pass in context-
 *   specific information to to sub-visits & accepts.
 * 
 *   The accept function is called with 4 arguments: the dispatch term for the
 *   spec (see below), the spec itself, vector with the results of
 *   recursively walking the children of the spec and the options map.
 * 
 *   The dispatch term is one of the following
 *   * if the spec is a function call: a fully qualified symbol for the function
 *  with the following exceptions:
 *  - cljs.core symbols are converted to clojure.core symbols
 *  - cljs.spec.alpha symbols are converted to clojure.spec.alpha symbols
 *   * if the spec is a set: :spec-tools.visitor/set
 *   * otherwise: the spec itself
 */
spec_tools.visitor.visit = (function spec_tools$visitor$visit(var_args){
var G__56521 = arguments.length;
switch (G__56521) {
case 2:
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$2 = (function (spec,accept){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(spec,accept,null);
}));

(spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3 = (function (spec,accept,p__56522){
var map__56523 = p__56522;
var map__56523__$1 = (((((!((map__56523 == null))))?(((((map__56523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56523):map__56523);
var options = map__56523__$1;
var visited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56523__$1,new cljs.core.Keyword("spec-tools.visitor","visited","spec-tools.visitor/visited",820668632));
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(visited,spec))){
var options__$1 = (((spec instanceof cljs.core.Keyword))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(options,new cljs.core.Keyword("spec-tools.visitor","visited","spec-tools.visitor/visited",820668632),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),spec):options);
return spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3(spec,accept,options__$1);
} else {
return spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3(null,accept,options);
}
}));

(spec_tools.visitor.visit.cljs$lang$maxFixedArity = 3);

spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415),(function (spec,accept,options){
var G__56525 = new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415);
var G__56526 = spec;
var G__56527 = cljs.core.vec((((spec instanceof cljs.core.Keyword))?spec_tools.impl.extract_form(spec):spec));
var G__56528 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56525,G__56526,G__56527,G__56528) : accept.call(null,G__56525,G__56526,G__56527,G__56528));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null),(function (spec,accept,options){
var keys = spec_tools.impl.extract_keys(spec_tools.impl.extract_form(spec));
var G__56531 = new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null);
var G__56532 = spec;
var G__56533 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56530_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56530_SHARP_,accept,options);
}),keys);
var G__56534 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56531,G__56532,G__56533,G__56534) : accept.call(null,G__56531,G__56532,G__56533,G__56534));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","or","clojure.spec.alpha/or",434904251,null),(function (spec,accept,options){
var vec__56537 = spec_tools.impl.extract_form(spec);
var seq__56538 = cljs.core.seq(vec__56537);
var first__56539 = cljs.core.first(seq__56538);
var seq__56538__$1 = cljs.core.next(seq__56538);
var _ = first__56539;
var map__56540 = seq__56538__$1;
var map__56540__$1 = (((((!((map__56540 == null))))?(((((map__56540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56540):map__56540);
var inner_spec_map = map__56540__$1;
var G__56542 = new cljs.core.Symbol("clojure.spec.alpha","or","clojure.spec.alpha/or",434904251,null);
var G__56543 = spec;
var G__56544 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56535_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56535_SHARP_,accept,options);
}),cljs.core.vals(inner_spec_map));
var G__56545 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56542,G__56543,G__56544,G__56545) : accept.call(null,G__56542,G__56543,G__56544,G__56545));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","and","clojure.spec.alpha/and",-843882543,null),(function (spec,accept,options){
var vec__56547 = spec_tools.impl.extract_form(spec);
var seq__56548 = cljs.core.seq(vec__56547);
var first__56549 = cljs.core.first(seq__56548);
var seq__56548__$1 = cljs.core.next(seq__56548);
var _ = first__56549;
var inner_specs = seq__56548__$1;
var G__56550 = new cljs.core.Symbol("clojure.spec.alpha","and","clojure.spec.alpha/and",-843882543,null);
var G__56551 = spec;
var G__56552 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56546_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56546_SHARP_,accept,options);
}),inner_specs);
var G__56553 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56550,G__56551,G__56552,G__56553) : accept.call(null,G__56550,G__56551,G__56552,G__56553));
}));
spec_tools.visitor.visit_merge = (function spec_tools$visitor$visit_merge(spec,accept,options){
var vec__56555 = spec_tools.impl.extract_form(spec);
var seq__56556 = cljs.core.seq(vec__56555);
var first__56557 = cljs.core.first(seq__56556);
var seq__56556__$1 = cljs.core.next(seq__56556);
var _ = first__56557;
var inner_specs = seq__56556__$1;
var G__56558 = new cljs.core.Symbol("clojure.spec.alpha","merge","clojure.spec.alpha/merge",472136035,null);
var G__56559 = spec;
var G__56560 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56554_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56554_SHARP_,accept,options);
}),inner_specs);
var G__56561 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56558,G__56559,G__56560,G__56561) : accept.call(null,G__56558,G__56559,G__56560,G__56561));
});
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","merge","clojure.spec.alpha/merge",472136035,null),(function (spec,accept,options){
return spec_tools.visitor.visit_merge(spec,accept,options);
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("spec-tools.core","merge","spec-tools.core/merge",2048449266,null),(function (spec,accept,options){
return spec_tools.visitor.visit_merge(spec,accept,options);
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","every","clojure.spec.alpha/every",-1327408778,null),(function (spec,accept,options){
var vec__56562 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56562,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56562,(1),null);
var G__56565 = new cljs.core.Symbol("clojure.spec.alpha","every","clojure.spec.alpha/every",-1327408778,null);
var G__56566 = spec;
var G__56567 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__56568 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56565,G__56566,G__56567,G__56568) : accept.call(null,G__56565,G__56566,G__56567,G__56568));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","every-kv","clojure.spec.alpha/every-kv",814515928,null),(function (spec,accept,options){
var vec__56570 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56570,(0),null);
var inner_spec1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56570,(1),null);
var inner_spec2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56570,(2),null);
var G__56573 = new cljs.core.Symbol("clojure.spec.alpha","every-kv","clojure.spec.alpha/every-kv",814515928,null);
var G__56574 = spec;
var G__56575 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56569_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56569_SHARP_,accept,options);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inner_spec1,inner_spec2], null));
var G__56576 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56573,G__56574,G__56575,G__56576) : accept.call(null,G__56573,G__56574,G__56575,G__56576));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","coll-of","clojure.spec.alpha/coll-of",-465249451,null),(function (spec,accept,options){
var form = spec_tools.impl.extract_form(spec);
var pred = cljs.core.second(form);
var map__56577 = spec_tools.parse.parse_spec(form);
var map__56577__$1 = (((((!((map__56577 == null))))?(((((map__56577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56577):map__56577);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56577__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var dispatch = (function (){var G__56579 = type;
var G__56579__$1 = (((G__56579 instanceof cljs.core.Keyword))?G__56579.fqn:null);
switch (G__56579__$1) {
case "map-of":
return new cljs.core.Keyword("spec-tools.visitor","map-of","spec-tools.visitor/map-of",-972613908);

break;
case "set":
return new cljs.core.Keyword("spec-tools.visitor","set-of","spec-tools.visitor/set-of",983982444);

break;
case "vector":
return new cljs.core.Keyword("spec-tools.visitor","vector-of","spec-tools.visitor/vector-of",-1693991985);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56579__$1)].join('')));

}
})();
var G__56580 = dispatch;
var G__56581 = spec;
var G__56582 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(pred,accept,options)], null);
var G__56583 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56580,G__56581,G__56582,G__56583) : accept.call(null,G__56580,G__56581,G__56582,G__56583));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","map-of","clojure.spec.alpha/map-of",2125010727,null),(function (spec,accept,options){
var vec__56585 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56585,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56585,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56585,(2),null);
var G__56588 = new cljs.core.Keyword("spec-tools.visitor","map-of","spec-tools.visitor/map-of",-972613908);
var G__56589 = spec;
var G__56590 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56584_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56584_SHARP_,accept,options);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var G__56591 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56588,G__56589,G__56590,G__56591) : accept.call(null,G__56588,G__56589,G__56590,G__56591));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","*","clojure.spec.alpha/*",-21649262,null),(function (spec,accept,options){
var vec__56592 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56592,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56592,(1),null);
var G__56595 = new cljs.core.Symbol("clojure.spec.alpha","*","clojure.spec.alpha/*",-21649262,null);
var G__56596 = spec;
var G__56597 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__56598 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56595,G__56596,G__56597,G__56598) : accept.call(null,G__56595,G__56596,G__56597,G__56598));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","+","clojure.spec.alpha/+",96423191,null),(function (spec,accept,options){
var vec__56599 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56599,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56599,(1),null);
var G__56602 = new cljs.core.Symbol("clojure.spec.alpha","+","clojure.spec.alpha/+",96423191,null);
var G__56603 = spec;
var G__56604 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__56605 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56602,G__56603,G__56604,G__56605) : accept.call(null,G__56602,G__56603,G__56604,G__56605));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","?","clojure.spec.alpha/?",-1775438615,null),(function (spec,accept,options){
var vec__56606 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56606,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56606,(1),null);
var G__56609 = new cljs.core.Symbol("clojure.spec.alpha","?","clojure.spec.alpha/?",-1775438615,null);
var G__56610 = spec;
var G__56611 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__56612 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56609,G__56610,G__56611,G__56612) : accept.call(null,G__56609,G__56610,G__56611,G__56612));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","alt","clojure.spec.alpha/alt",-612316618,null),(function (spec,accept,options){
var vec__56614 = spec_tools.impl.extract_form(spec);
var seq__56615 = cljs.core.seq(vec__56614);
var first__56616 = cljs.core.first(seq__56615);
var seq__56615__$1 = cljs.core.next(seq__56615);
var _ = first__56616;
var map__56617 = seq__56615__$1;
var map__56617__$1 = (((((!((map__56617 == null))))?(((((map__56617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56617):map__56617);
var inner_spec_map = map__56617__$1;
var G__56619 = new cljs.core.Symbol("clojure.spec.alpha","alt","clojure.spec.alpha/alt",-612316618,null);
var G__56620 = spec;
var G__56621 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56613_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56613_SHARP_,accept,options);
}),cljs.core.vals(inner_spec_map));
var G__56622 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56619,G__56620,G__56621,G__56622) : accept.call(null,G__56619,G__56620,G__56621,G__56622));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","cat","clojure.spec.alpha/cat",-523389547,null),(function (spec,accept,options){
var vec__56624 = spec_tools.impl.extract_form(spec);
var seq__56625 = cljs.core.seq(vec__56624);
var first__56626 = cljs.core.first(seq__56625);
var seq__56625__$1 = cljs.core.next(seq__56625);
var _ = first__56626;
var map__56627 = seq__56625__$1;
var map__56627__$1 = (((((!((map__56627 == null))))?(((((map__56627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56627):map__56627);
var inner_spec_map = map__56627__$1;
var G__56629 = new cljs.core.Symbol("clojure.spec.alpha","cat","clojure.spec.alpha/cat",-523389547,null);
var G__56630 = spec;
var G__56631 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56623_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56623_SHARP_,accept,options);
}),cljs.core.vals(inner_spec_map));
var G__56632 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56629,G__56630,G__56631,G__56632) : accept.call(null,G__56629,G__56630,G__56631,G__56632));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","&","clojure.spec.alpha/&",704695533,null),(function (spec,accept,options){
var vec__56633 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56633,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56633,(1),null);
var G__56636 = new cljs.core.Symbol("clojure.spec.alpha","&","clojure.spec.alpha/&",704695533,null);
var G__56637 = spec;
var G__56638 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__56639 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56636,G__56637,G__56638,G__56639) : accept.call(null,G__56636,G__56637,G__56638,G__56639));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null),(function (spec,accept,options){
var vec__56641 = spec_tools.impl.extract_form(spec);
var seq__56642 = cljs.core.seq(vec__56641);
var first__56643 = cljs.core.first(seq__56642);
var seq__56642__$1 = cljs.core.next(seq__56642);
var _ = first__56643;
var inner_specs = seq__56642__$1;
var G__56644 = new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null);
var G__56645 = spec;
var G__56646 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56640_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56640_SHARP_,accept,options);
}),inner_specs);
var G__56647 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56644,G__56645,G__56646,G__56647) : accept.call(null,G__56644,G__56645,G__56646,G__56647));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","keys*","clojure.spec.alpha/keys*",-1790941751,null),(function (spec,accept,options){
var keys = spec_tools.impl.extract_keys(spec_tools.impl.extract_form(spec));
var G__56649 = new cljs.core.Symbol("clojure.spec.alpha","keys*","clojure.spec.alpha/keys*",-1790941751,null);
var G__56650 = spec;
var G__56651 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56648_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__56648_SHARP_,accept,options);
}),keys);
var G__56652 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56649,G__56650,G__56651,G__56652) : accept.call(null,G__56649,G__56650,G__56651,G__56652));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null),(function (spec,accept,options){
var vec__56653 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56653,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56653,(1),null);
var G__56656 = new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null);
var G__56657 = spec;
var G__56658 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__56659 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56656,G__56657,G__56658,G__56659) : accept.call(null,G__56656,G__56657,G__56658,G__56659));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("spec-tools.core","spec","spec-tools.core/spec",-497332036,null),(function (spec,accept,options){
var vec__56660 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56660,(0),null);
var map__56663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56660,(1),null);
var map__56663__$1 = (((((!((map__56663 == null))))?(((((map__56663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56663):map__56663);
var inner_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56663__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var G__56665 = new cljs.core.Keyword("spec-tools.visitor","spec","spec-tools.visitor/spec",1770325200);
var G__56666 = spec;
var G__56667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__56668 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56665,G__56666,G__56667,G__56668) : accept.call(null,G__56665,G__56666,G__56667,G__56668));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361),(function (spec,accept,options){
var G__56669 = spec_tools.visitor.spec_dispatch(spec,accept,options);
var G__56670 = spec;
var G__56671 = null;
var G__56672 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__56669,G__56670,G__56671,G__56672) : accept.call(null,G__56669,G__56670,G__56671,G__56672));
}));
/**
 * a visitor that collects all registered specs. Returns
 *   a map of spec-name => spec.
 */
spec_tools.visitor.spec_collector = (function spec_tools$visitor$spec_collector(){
var specs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (_,spec,___$1,___$2){
var temp__5733__auto__ = cljs.spec.alpha.get_spec(spec);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(specs,cljs.core.assoc,spec,s);
} else {
return cljs.core.deref(specs);
}
});
});

//# sourceMappingURL=spec_tools.visitor.js.map
