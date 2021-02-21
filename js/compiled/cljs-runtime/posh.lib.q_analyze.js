goog.provide('posh.lib.q_analyze');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__40002 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__40002) : stop_at_QMARK_.call(null,G__40002));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__40003 = stop_at_QMARK_;
var G__40004 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__40003,G__40004) : posh.lib.q_analyze.take_until.call(null,G__40003,G__40004));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__40006 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__40006) : rest_at_QMARK_.call(null,G__40006));
}
})())){
return ls;
} else {
var G__40398 = rest_at_QMARK_;
var G__40399 = cljs.core.rest(ls);
rest_at_QMARK_ = G__40398;
ls = G__40399;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__40007 = split_at_QMARK_;
var G__40008 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__40007,G__40008) : posh.lib.q_analyze.split_list_at.call(null,G__40007,G__40008));
})()], 0));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if((!(cljs.core.map_QMARK_(query)))){
return posh.lib.q_analyze.split_list_at(cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_(query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(query))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__40010 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__40010) : posh.lib.q_analyze.get_all_vars.call(null,G__40010));
})(),(function (){var G__40011 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__40011) : posh.lib.q_analyze.get_all_vars.call(null,G__40011));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__40012 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__40012) : posh.lib.q_analyze.get_all_vars.call(null,G__40012));
})(),cljs.core.first(query));
} else {
var G__40013 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__40013) : posh.lib.q_analyze.get_all_vars.call(null,G__40013));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((3284832));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(qvar_count,cljs.core.inc))].join(''));
});
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && ((!(((cljs.core.coll_QMARK_(cljs.core.first(v))) || (cljs.core.coll_QMARK_(cljs.core.second(v))))))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.first(eav);
if(cljs.core.truth_(and__4115__auto__)){
return (!(posh.lib.q_analyze.wildcard_QMARK_(cljs.core.first(eav))));
} else {
return and__4115__auto__;
}
})())){
var G__40016 = cljs.core.rest(eav);
var G__40017 = (n - (1));
var G__40018 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__40019 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__40016,G__40017,G__40018,G__40019) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__40016,G__40017,G__40018,G__40019));
} else {
var var$ = posh.lib.q_analyze.qvar_gen();
var G__40020 = cljs.core.rest(eav);
var G__40021 = (n - (1));
var G__40022 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__40023 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__40020,G__40021,G__40022,G__40023) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__40020,G__40021,G__40022,G__40023));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = ((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(eav)))?eav:cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("$"),eav));
return cljs.core.vec(cljs.core.cons(cljs.core.first(dbeav),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper(cljs.core.rest(dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_(where)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__40033 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__40033) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__40033));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__40035 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__40035) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__40035));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(where)){
return posh.lib.q_analyze.normalize_eav(where);
} else {
if(((cljs.core.vector_QMARK_(where)) && (cljs.core.list_QMARK_(cljs.core.first(where))))){
return where;
} else {
if(cljs.core.coll_QMARK_(where)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first(where);
if(cljs.core.seq_QMARK_(item)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__40043 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__40043) : posh.lib.q_analyze.get_eavs.call(null,G__40043));
})(),(function (){var G__40044 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__40044) : posh.lib.q_analyze.get_eavs.call(null,G__40044));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__40045 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__40045) : posh.lib.q_analyze.get_eavs.call(null,G__40045));
})(),(function (){var G__40046 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__40046) : posh.lib.q_analyze.get_eavs.call(null,G__40046));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__40048 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__40048) : posh.lib.q_analyze.get_eavs.call(null,G__40048));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_40052 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_40052)) && ((cljs.core.count(ocr_40052) === 2)))){
try{var ocr_40052_0__40056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40052,(0));
if(((cljs.core.vector_QMARK_(ocr_40052_0__40056)) && ((cljs.core.count(ocr_40052_0__40056) === 5)))){
try{var ocr_40052_0__40056_0__40058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40052_0__40056,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40052_0__40056_0__40058,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40052_0__40056,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40052_0__40056,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40052_0__40056,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40052,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__40067 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__40067) : posh.lib.q_analyze.get_eavs.call(null,G__40067));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e40066){if((e40066 instanceof Error)){
var e__39053__auto__ = e40066;
if((e__39053__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto__;
}
} else {
throw e40066;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40065){if((e40065 instanceof Error)){
var e__39053__auto__ = e40065;
if((e__39053__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto__;
}
} else {
throw e40065;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40063){if((e40063 instanceof Error)){
var e__39053__auto__ = e40063;
if((e__39053__auto__ === cljs.core.match.backtrack)){
var G__40064 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__40064) : posh.lib.q_analyze.get_eavs.call(null,G__40064));
} else {
throw e__39053__auto__;
}
} else {
throw e40063;

}
}} else {
var G__40068 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__40068) : posh.lib.q_analyze.get_eavs.call(null,G__40068));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__40069){
var vec__40070 = p__40069;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40070,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40070,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40073_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__40073_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__40073_SHARP_);
} else {
return p1__40073_SHARP_;
}
}),eav));
}),eavs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(xs))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__40074 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__40074) : posh.lib.q_analyze.count_qvars.call(null,G__40074));
})(),(function (){var G__40075 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__40075) : posh.lib.q_analyze.count_qvars.call(null,G__40075));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__40076 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__40076) : posh.lib.q_analyze.count_qvars.call(null,G__40076));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4529__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__40077(s__40078){
return (new cljs.core.LazySeq(null,(function (){
var s__40078__$1 = s__40078;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40078__$1);
if(temp__5735__auto__){
var s__40078__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40078__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__40078__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__40080 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__40079 = (0);
while(true){
if((i__40079 < size__4528__auto__)){
var r = cljs.core._nth(c__4527__auto__,i__40079);
cljs.core.chunk_append(b__40080,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__40418 = (i__40079 + (1));
i__40079 = G__40418;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40080),posh$lib$q_analyze$fill_qvar_set_$_iter__40077(cljs.core.chunk_rest(s__40078__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40080),null);
}
} else {
var r = cljs.core.first(s__40078__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__40077(cljs.core.rest(s__40078__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_(seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons((function (){var G__40081 = cljs.core.first(seq1);
var G__40082 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__40081,G__40082) : f.call(null,G__40081,G__40082));
})(),(function (){var G__40083 = f;
var G__40084 = cljs.core.rest(seq1);
var G__40085 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__40083,G__40084,G__40085) : posh.lib.q_analyze.seq_merge_with.call(null,G__40083,G__40084,G__40085));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__40088){
var vec__40089 = p__40088;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40089,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40089,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40089,(2),null);
var eav = vec__40089;
var vec__40092 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40092,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40092,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40092,(2),null);
var iter__4529__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__40095(s__40096){
return (new cljs.core.LazySeq(null,(function (){
var s__40096__$1 = s__40096;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40096__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__40096__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__40092,qe,qa,qv,vec__40089,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__40095_$_iter__40097(s__40098){
return (new cljs.core.LazySeq(null,((function (s__40096__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__40092,qe,qa,qv,vec__40089,e,a,v,eav){
return (function (){
var s__40098__$1 = s__40098;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__40098__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4525__auto__ = ((function (s__40098__$1,s__40096__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__40092,qe,qa,qv,vec__40089,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__40095_$_iter__40097_$_iter__40099(s__40100){
return (new cljs.core.LazySeq(null,((function (s__40098__$1,s__40096__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__40092,qe,qa,qv,vec__40089,e,a,v,eav){
return (function (){
var s__40100__$1 = s__40100;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__40100__$1);
if(temp__5735__auto____$2){
var s__40100__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__40100__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__40100__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__40102 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__40101 = (0);
while(true){
if((i__40101 < size__4528__auto__)){
var vv = cljs.core._nth(c__4527__auto__,i__40101);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__40101,s__40100__$1,s__40098__$1,s__40096__$1,vv,c__4527__auto__,size__4528__auto__,b__40102,s__40100__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__40092,qe,qa,qv,vec__40089,e,a,v,eav){
return (function (p1__40086_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__40086_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__40101,s__40100__$1,s__40098__$1,s__40096__$1,vv,c__4527__auto__,size__4528__auto__,b__40102,s__40100__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__40092,qe,qa,qv,vec__40089,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__40101,s__40100__$1,s__40098__$1,s__40096__$1,wildcard_count,vv,c__4527__auto__,size__4528__auto__,b__40102,s__40100__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__40092,qe,qa,qv,vec__40089,e,a,v,eav){
return (function (p__40103){
var vec__40104 = p__40103;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40104,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40104,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4115__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__40101,s__40100__$1,s__40098__$1,s__40096__$1,wildcard_count,vv,c__4527__auto__,size__4528__auto__,b__40102,s__40100__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__40092,qe,qa,qv,vec__40089,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__40101,s__40100__$1,s__40098__$1,s__40096__$1,wildcard_count,exposed_qvars,vv,c__4527__auto__,size__4528__auto__,b__40102,s__40100__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__40092,qe,qa,qv,vec__40089,e,a,v,eav){
return (function (p1__40087_SHARP_){
if(cljs.core.truth_(p1__40087_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__40101,s__40100__$1,s__40098__$1,s__40096__$1,wildcard_count,exposed_qvars,vv,c__4527__auto__,size__4528__auto__,b__40102,s__40100__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__40092,qe,qa,qv,vec__40089,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__40102,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__40420 = (i__40101 + (1));
i__40101 = G__40420;
continue;
} else {
var G__40421 = (i__40101 + (1));
i__40101 = G__40421;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40102),posh$lib$q_analyze$pattern_from_eav__old_$_iter__40095_$_iter__40097_$_iter__40099(cljs.core.chunk_rest(s__40100__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40102),null);
}
} else {
var vv = cljs.core.first(s__40100__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__40100__$1,s__40098__$1,s__40096__$1,vv,s__40100__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__40092,qe,qa,qv,vec__40089,e,a,v,eav){
return (function (p1__40086_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__40086_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__40100__$1,s__40098__$1,s__40096__$1,vv,s__40100__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__40092,qe,qa,qv,vec__40089,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__40100__$1,s__40098__$1,s__40096__$1,wildcard_count,vv,s__40100__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__40092,qe,qa,qv,vec__40089,e,a,v,eav){
return (function (p__40107){
var vec__40108 = p__40107;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40108,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40108,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4115__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__40100__$1,s__40098__$1,s__40096__$1,wildcard_count,vv,s__40100__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__40092,qe,qa,qv,vec__40089,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__40100__$1,s__40098__$1,s__40096__$1,wildcard_count,exposed_qvars,vv,s__40100__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__40092,qe,qa,qv,vec__40089,e,a,v,eav){
return (function (p1__40087_SHARP_){
if(cljs.core.truth_(p1__40087_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__40100__$1,s__40098__$1,s__40096__$1,wildcard_count,exposed_qvars,vv,s__40100__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__40092,qe,qa,qv,vec__40089,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__40095_$_iter__40097_$_iter__40099(cljs.core.rest(s__40100__$2)));
} else {
var G__40422 = cljs.core.rest(s__40100__$2);
s__40100__$1 = G__40422;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__40098__$1,s__40096__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__40092,qe,qa,qv,vec__40089,e,a,v,eav))
,null,null));
});})(s__40098__$1,s__40096__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__40092,qe,qa,qv,vec__40089,e,a,v,eav))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__40095_$_iter__40097(cljs.core.rest(s__40098__$1)));
} else {
var G__40423 = cljs.core.rest(s__40098__$1);
s__40098__$1 = G__40423;
continue;
}
} else {
return null;
}
break;
}
});})(s__40096__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__40092,qe,qa,qv,vec__40089,e,a,v,eav))
,null,null));
});})(s__40096__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__40092,qe,qa,qv,vec__40089,e,a,v,eav))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__40095(cljs.core.rest(s__40096__$1)));
} else {
var G__40424 = cljs.core.rest(s__40096__$1);
s__40096__$1 = G__40424;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__((cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_40111 = cljs.core.vec(eav);
var ocr_40112 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_40111)) && ((cljs.core.count(ocr_40111) === 3)))){
try{var ocr_40111_0__40140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40111_0__40140,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_40111_1__40141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40111_1__40141,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_40111_2__40142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40111_2__40142,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40216){if((e40216 instanceof Error)){
var e__39053__auto__ = e40216;
if((e__39053__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_40112)) && ((cljs.core.count(ocr_40112) === 3)))){
try{var ocr_40112_2__40145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(2));
if((ocr_40112_2__40145 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40218){if((e40218 instanceof Error)){
var e__39053__auto____$1 = e40218;
if((e__39053__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_40112_2__40145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(2));
if((ocr_40112_2__40145 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40219){if((e40219 instanceof Error)){
var e__39053__auto____$2 = e40219;
if((e__39053__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$2;
}
} else {
throw e40219;

}
}} else {
throw e__39053__auto____$1;
}
} else {
throw e40218;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40217){if((e40217 instanceof Error)){
var e__39053__auto____$1 = e40217;
if((e__39053__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$1;
}
} else {
throw e40217;

}
}} else {
throw e__39053__auto__;
}
} else {
throw e40216;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40211){if((e40211 instanceof Error)){
var e__39053__auto__ = e40211;
if((e__39053__auto__ === cljs.core.match.backtrack)){
try{var ocr_40111_2__40142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40111_2__40142,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_40112)) && ((cljs.core.count(ocr_40112) === 3)))){
try{var ocr_40112_1__40147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(1));
if((ocr_40112_1__40147 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40214){if((e40214 instanceof Error)){
var e__39053__auto____$1 = e40214;
if((e__39053__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_40112_1__40147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(1));
if((ocr_40112_1__40147 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40215){if((e40215 instanceof Error)){
var e__39053__auto____$2 = e40215;
if((e__39053__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$2;
}
} else {
throw e40215;

}
}} else {
throw e__39053__auto____$1;
}
} else {
throw e40214;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40213){if((e40213 instanceof Error)){
var e__39053__auto____$1 = e40213;
if((e__39053__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$1;
}
} else {
throw e40213;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40212){if((e40212 instanceof Error)){
var e__39053__auto____$1 = e40212;
if((e__39053__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$1;
}
} else {
throw e40212;

}
}} else {
throw e__39053__auto__;
}
} else {
throw e40211;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40153){if((e40153 instanceof Error)){
var e__39053__auto__ = e40153;
if((e__39053__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_40112)) && ((cljs.core.count(ocr_40112) === 3)))){
try{var ocr_40112_0__40149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(0));
if((ocr_40112_0__40149 === false)){
try{var ocr_40111_1__40141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40111_1__40141,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_40111_2__40142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40111_2__40142,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40210){if((e40210 instanceof Error)){
var e__39053__auto____$1 = e40210;
if((e__39053__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$1;
}
} else {
throw e40210;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40209){if((e40209 instanceof Error)){
var e__39053__auto____$1 = e40209;
if((e__39053__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$1;
}
} else {
throw e40209;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40155){if((e40155 instanceof Error)){
var e__39053__auto____$1 = e40155;
if((e__39053__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_40112_0__40149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(0));
if((ocr_40112_0__40149 === true)){
try{var ocr_40111_2__40142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40111_2__40142,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_40111_1__40141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40111_1__40141,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40206){if((e40206 instanceof Error)){
var e__39053__auto____$2 = e40206;
if((e__39053__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_40112_1__40150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(1));
if((ocr_40112_1__40150 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40207){if((e40207 instanceof Error)){
var e__39053__auto____$3 = e40207;
if((e__39053__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_40112_1__40150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(1));
if((ocr_40112_1__40150 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40208){if((e40208 instanceof Error)){
var e__39053__auto____$4 = e40208;
if((e__39053__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$4;
}
} else {
throw e40208;

}
}} else {
throw e__39053__auto____$3;
}
} else {
throw e40207;

}
}} else {
throw e__39053__auto____$2;
}
} else {
throw e40206;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40205){if((e40205 instanceof Error)){
var e__39053__auto____$2 = e40205;
if((e__39053__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$2;
}
} else {
throw e40205;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40156){if((e40156 instanceof Error)){
var e__39053__auto____$2 = e40156;
if((e__39053__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_40112_0__40149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(0));
if((ocr_40112_0__40149 === false)){
try{var ocr_40112_1__40150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(1));
if((ocr_40112_1__40150 === true)){
try{var ocr_40111_2__40142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40111_2__40142,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40204){if((e40204 instanceof Error)){
var e__39053__auto____$3 = e40204;
if((e__39053__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$3;
}
} else {
throw e40204;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40201){if((e40201 instanceof Error)){
var e__39053__auto____$3 = e40201;
if((e__39053__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_40112_1__40150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(1));
if((ocr_40112_1__40150 === false)){
try{var ocr_40111_2__40142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40111_2__40142,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40203){if((e40203 instanceof Error)){
var e__39053__auto____$4 = e40203;
if((e__39053__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$4;
}
} else {
throw e40203;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40202){if((e40202 instanceof Error)){
var e__39053__auto____$4 = e40202;
if((e__39053__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$4;
}
} else {
throw e40202;

}
}} else {
throw e__39053__auto____$3;
}
} else {
throw e40201;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40157){if((e40157 instanceof Error)){
var e__39053__auto____$3 = e40157;
if((e__39053__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_40112_2__40151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(2));
if((ocr_40112_2__40151 === true)){
try{var ocr_40112_0__40149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(0));
if((ocr_40112_0__40149 === true)){
try{var ocr_40111_1__40141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40111_1__40141,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40200){if((e40200 instanceof Error)){
var e__39053__auto____$4 = e40200;
if((e__39053__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$4;
}
} else {
throw e40200;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40199){if((e40199 instanceof Error)){
var e__39053__auto____$4 = e40199;
if((e__39053__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$4;
}
} else {
throw e40199;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40158){if((e40158 instanceof Error)){
var e__39053__auto____$4 = e40158;
if((e__39053__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_40112_2__40151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(2));
if((ocr_40112_2__40151 === false)){
try{var ocr_40112_0__40149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(0));
if((ocr_40112_0__40149 === true)){
try{var ocr_40111_1__40141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40111_1__40141,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40198){if((e40198 instanceof Error)){
var e__39053__auto____$5 = e40198;
if((e__39053__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$5;
}
} else {
throw e40198;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40197){if((e40197 instanceof Error)){
var e__39053__auto____$5 = e40197;
if((e__39053__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$5;
}
} else {
throw e40197;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40159){if((e40159 instanceof Error)){
var e__39053__auto____$5 = e40159;
if((e__39053__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_40112_2__40151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(2));
if((ocr_40112_2__40151 === true)){
try{var ocr_40112_0__40149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(0));
if((ocr_40112_0__40149 === false)){
try{var ocr_40111_1__40141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40111_1__40141,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40196){if((e40196 instanceof Error)){
var e__39053__auto____$6 = e40196;
if((e__39053__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$6;
}
} else {
throw e40196;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40195){if((e40195 instanceof Error)){
var e__39053__auto____$6 = e40195;
if((e__39053__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$6;
}
} else {
throw e40195;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40160){if((e40160 instanceof Error)){
var e__39053__auto____$6 = e40160;
if((e__39053__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_40112_2__40151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(2));
if((ocr_40112_2__40151 === false)){
try{var ocr_40112_0__40149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(0));
if((ocr_40112_0__40149 === false)){
try{var ocr_40111_1__40141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40111_1__40141,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40194){if((e40194 instanceof Error)){
var e__39053__auto____$7 = e40194;
if((e__39053__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$7;
}
} else {
throw e40194;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40193){if((e40193 instanceof Error)){
var e__39053__auto____$7 = e40193;
if((e__39053__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$7;
}
} else {
throw e40193;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40161){if((e40161 instanceof Error)){
var e__39053__auto____$7 = e40161;
if((e__39053__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_40112_2__40151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(2));
if((ocr_40112_2__40151 === true)){
try{var ocr_40112_1__40150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(1));
if((ocr_40112_1__40150 === true)){
try{var ocr_40111_0__40140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40111_0__40140,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40192){if((e40192 instanceof Error)){
var e__39053__auto____$8 = e40192;
if((e__39053__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$8;
}
} else {
throw e40192;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40191){if((e40191 instanceof Error)){
var e__39053__auto____$8 = e40191;
if((e__39053__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$8;
}
} else {
throw e40191;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40162){if((e40162 instanceof Error)){
var e__39053__auto____$8 = e40162;
if((e__39053__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_40112_2__40151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(2));
if((ocr_40112_2__40151 === false)){
try{var ocr_40112_1__40150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(1));
if((ocr_40112_1__40150 === true)){
try{var ocr_40111_0__40140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40111_0__40140,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40190){if((e40190 instanceof Error)){
var e__39053__auto____$9 = e40190;
if((e__39053__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$9;
}
} else {
throw e40190;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40189){if((e40189 instanceof Error)){
var e__39053__auto____$9 = e40189;
if((e__39053__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$9;
}
} else {
throw e40189;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40163){if((e40163 instanceof Error)){
var e__39053__auto____$9 = e40163;
if((e__39053__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_40112_2__40151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(2));
if((ocr_40112_2__40151 === true)){
try{var ocr_40112_1__40150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(1));
if((ocr_40112_1__40150 === false)){
try{var ocr_40111_0__40140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40111_0__40140,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40188){if((e40188 instanceof Error)){
var e__39053__auto____$10 = e40188;
if((e__39053__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$10;
}
} else {
throw e40188;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40187){if((e40187 instanceof Error)){
var e__39053__auto____$10 = e40187;
if((e__39053__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$10;
}
} else {
throw e40187;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40164){if((e40164 instanceof Error)){
var e__39053__auto____$10 = e40164;
if((e__39053__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_40112_2__40151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(2));
if((ocr_40112_2__40151 === false)){
try{var ocr_40112_1__40150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(1));
if((ocr_40112_1__40150 === false)){
try{var ocr_40111_0__40140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40111_0__40140,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40186){if((e40186 instanceof Error)){
var e__39053__auto____$11 = e40186;
if((e__39053__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$11;
}
} else {
throw e40186;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40185){if((e40185 instanceof Error)){
var e__39053__auto____$11 = e40185;
if((e__39053__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$11;
}
} else {
throw e40185;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40165){if((e40165 instanceof Error)){
var e__39053__auto____$11 = e40165;
if((e__39053__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_40112_2__40151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(2));
if((ocr_40112_2__40151 === true)){
try{var ocr_40112_0__40149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(0));
if((ocr_40112_0__40149 === true)){
try{var ocr_40112_1__40150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(1));
if((ocr_40112_1__40150 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40184){if((e40184 instanceof Error)){
var e__39053__auto____$12 = e40184;
if((e__39053__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$12;
}
} else {
throw e40184;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40179){if((e40179 instanceof Error)){
var e__39053__auto____$12 = e40179;
if((e__39053__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_40112_0__40149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(0));
if((ocr_40112_0__40149 === false)){
try{var ocr_40112_1__40150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(1));
if((ocr_40112_1__40150 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40183){if((e40183 instanceof Error)){
var e__39053__auto____$13 = e40183;
if((e__39053__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$13;
}
} else {
throw e40183;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40180){if((e40180 instanceof Error)){
var e__39053__auto____$13 = e40180;
if((e__39053__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_40112_0__40149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(0));
if((ocr_40112_0__40149 === true)){
try{var ocr_40112_1__40150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(1));
if((ocr_40112_1__40150 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40182){if((e40182 instanceof Error)){
var e__39053__auto____$14 = e40182;
if((e__39053__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$14;
}
} else {
throw e40182;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40181){if((e40181 instanceof Error)){
var e__39053__auto____$14 = e40181;
if((e__39053__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$14;
}
} else {
throw e40181;

}
}} else {
throw e__39053__auto____$13;
}
} else {
throw e40180;

}
}} else {
throw e__39053__auto____$12;
}
} else {
throw e40179;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40166){if((e40166 instanceof Error)){
var e__39053__auto____$12 = e40166;
if((e__39053__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_40112_2__40151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(2));
if((ocr_40112_2__40151 === false)){
try{var ocr_40112_0__40149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(0));
if((ocr_40112_0__40149 === true)){
try{var ocr_40112_1__40150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(1));
if((ocr_40112_1__40150 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40178){if((e40178 instanceof Error)){
var e__39053__auto____$13 = e40178;
if((e__39053__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$13;
}
} else {
throw e40178;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40177){if((e40177 instanceof Error)){
var e__39053__auto____$13 = e40177;
if((e__39053__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$13;
}
} else {
throw e40177;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40167){if((e40167 instanceof Error)){
var e__39053__auto____$13 = e40167;
if((e__39053__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_40112_2__40151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(2));
if((ocr_40112_2__40151 === true)){
try{var ocr_40112_0__40149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(0));
if((ocr_40112_0__40149 === false)){
try{var ocr_40112_1__40150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(1));
if((ocr_40112_1__40150 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40176){if((e40176 instanceof Error)){
var e__39053__auto____$14 = e40176;
if((e__39053__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$14;
}
} else {
throw e40176;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40175){if((e40175 instanceof Error)){
var e__39053__auto____$14 = e40175;
if((e__39053__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$14;
}
} else {
throw e40175;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40168){if((e40168 instanceof Error)){
var e__39053__auto____$14 = e40168;
if((e__39053__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_40112_2__40151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(2));
if((ocr_40112_2__40151 === false)){
try{var ocr_40112_0__40149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(0));
if((ocr_40112_0__40149 === true)){
try{var ocr_40112_1__40150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(1));
if((ocr_40112_1__40150 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40174){if((e40174 instanceof Error)){
var e__39053__auto____$15 = e40174;
if((e__39053__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$15;
}
} else {
throw e40174;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40170){if((e40170 instanceof Error)){
var e__39053__auto____$15 = e40170;
if((e__39053__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_40112_0__40149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(0));
if((ocr_40112_0__40149 === false)){
try{var ocr_40112_1__40150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(1));
if((ocr_40112_1__40150 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40172){if((e40172 instanceof Error)){
var e__39053__auto____$16 = e40172;
if((e__39053__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_40112_1__40150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40112,(1));
if((ocr_40112_1__40150 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40111,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40173){if((e40173 instanceof Error)){
var e__39053__auto____$17 = e40173;
if((e__39053__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$17;
}
} else {
throw e40173;

}
}} else {
throw e__39053__auto____$16;
}
} else {
throw e40172;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40171){if((e40171 instanceof Error)){
var e__39053__auto____$16 = e40171;
if((e__39053__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$16;
}
} else {
throw e40171;

}
}} else {
throw e__39053__auto____$15;
}
} else {
throw e40170;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40169){if((e40169 instanceof Error)){
var e__39053__auto____$15 = e40169;
if((e__39053__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$15;
}
} else {
throw e40169;

}
}} else {
throw e__39053__auto____$14;
}
} else {
throw e40168;

}
}} else {
throw e__39053__auto____$13;
}
} else {
throw e40167;

}
}} else {
throw e__39053__auto____$12;
}
} else {
throw e40166;

}
}} else {
throw e__39053__auto____$11;
}
} else {
throw e40165;

}
}} else {
throw e__39053__auto____$10;
}
} else {
throw e40164;

}
}} else {
throw e__39053__auto____$9;
}
} else {
throw e40163;

}
}} else {
throw e__39053__auto____$8;
}
} else {
throw e40162;

}
}} else {
throw e__39053__auto____$7;
}
} else {
throw e40161;

}
}} else {
throw e__39053__auto____$6;
}
} else {
throw e40160;

}
}} else {
throw e__39053__auto____$5;
}
} else {
throw e40159;

}
}} else {
throw e__39053__auto____$4;
}
} else {
throw e40158;

}
}} else {
throw e__39053__auto____$3;
}
} else {
throw e40157;

}
}} else {
throw e__39053__auto____$2;
}
} else {
throw e40156;

}
}} else {
throw e__39053__auto____$1;
}
} else {
throw e40155;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40154){if((e40154 instanceof Error)){
var e__39053__auto____$1 = e40154;
if((e__39053__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$1;
}
} else {
throw e40154;

}
}} else {
throw e__39053__auto__;
}
} else {
throw e40153;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40152){if((e40152 instanceof Error)){
var e__39053__auto__ = e40152;
if((e__39053__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__39053__auto__;
}
} else {
throw e40152;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_40220 = cljs.core.vec(eav);
var ocr_40221 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_40220)) && ((cljs.core.count(ocr_40220) === 3)))){
try{var ocr_40220_0__40246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40220_0__40246,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_40220_1__40247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40220_1__40247,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_40220_2__40248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40220_2__40248,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e40310){if((e40310 instanceof Error)){
var e__39053__auto__ = e40310;
if((e__39053__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_40221)) && ((cljs.core.count(ocr_40221) === 3)))){
try{var ocr_40221_2__40251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(2));
if((ocr_40221_2__40251 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40312){if((e40312 instanceof Error)){
var e__39053__auto____$1 = e40312;
if((e__39053__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_40221_2__40251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(2));
if((ocr_40221_2__40251 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40313){if((e40313 instanceof Error)){
var e__39053__auto____$2 = e40313;
if((e__39053__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$2;
}
} else {
throw e40313;

}
}} else {
throw e__39053__auto____$1;
}
} else {
throw e40312;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40311){if((e40311 instanceof Error)){
var e__39053__auto____$1 = e40311;
if((e__39053__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$1;
}
} else {
throw e40311;

}
}} else {
throw e__39053__auto__;
}
} else {
throw e40310;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40305){if((e40305 instanceof Error)){
var e__39053__auto__ = e40305;
if((e__39053__auto__ === cljs.core.match.backtrack)){
try{var ocr_40220_2__40248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40220_2__40248,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_40221)) && ((cljs.core.count(ocr_40221) === 3)))){
try{var ocr_40221_1__40253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(1));
if((ocr_40221_1__40253 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40308){if((e40308 instanceof Error)){
var e__39053__auto____$1 = e40308;
if((e__39053__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_40221_1__40253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(1));
if((ocr_40221_1__40253 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40309){if((e40309 instanceof Error)){
var e__39053__auto____$2 = e40309;
if((e__39053__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$2;
}
} else {
throw e40309;

}
}} else {
throw e__39053__auto____$1;
}
} else {
throw e40308;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40307){if((e40307 instanceof Error)){
var e__39053__auto____$1 = e40307;
if((e__39053__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$1;
}
} else {
throw e40307;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40306){if((e40306 instanceof Error)){
var e__39053__auto____$1 = e40306;
if((e__39053__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$1;
}
} else {
throw e40306;

}
}} else {
throw e__39053__auto__;
}
} else {
throw e40305;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40259){if((e40259 instanceof Error)){
var e__39053__auto__ = e40259;
if((e__39053__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_40221)) && ((cljs.core.count(ocr_40221) === 3)))){
try{var ocr_40221_0__40255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(0));
if((ocr_40221_0__40255 === false)){
try{var ocr_40220_1__40247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40220_1__40247,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_40220_2__40248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40220_2__40248,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40304){if((e40304 instanceof Error)){
var e__39053__auto____$1 = e40304;
if((e__39053__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$1;
}
} else {
throw e40304;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40303){if((e40303 instanceof Error)){
var e__39053__auto____$1 = e40303;
if((e__39053__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$1;
}
} else {
throw e40303;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40261){if((e40261 instanceof Error)){
var e__39053__auto____$1 = e40261;
if((e__39053__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_40221_0__40255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(0));
if((ocr_40221_0__40255 === true)){
try{var ocr_40220_2__40248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40220_2__40248,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_40220_1__40247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40220_1__40247,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40300){if((e40300 instanceof Error)){
var e__39053__auto____$2 = e40300;
if((e__39053__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_40221_1__40256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(1));
if((ocr_40221_1__40256 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40301){if((e40301 instanceof Error)){
var e__39053__auto____$3 = e40301;
if((e__39053__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_40221_1__40256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(1));
if((ocr_40221_1__40256 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40302){if((e40302 instanceof Error)){
var e__39053__auto____$4 = e40302;
if((e__39053__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$4;
}
} else {
throw e40302;

}
}} else {
throw e__39053__auto____$3;
}
} else {
throw e40301;

}
}} else {
throw e__39053__auto____$2;
}
} else {
throw e40300;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40299){if((e40299 instanceof Error)){
var e__39053__auto____$2 = e40299;
if((e__39053__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$2;
}
} else {
throw e40299;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40262){if((e40262 instanceof Error)){
var e__39053__auto____$2 = e40262;
if((e__39053__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_40221_0__40255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(0));
if((ocr_40221_0__40255 === false)){
try{var ocr_40221_1__40256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(1));
if((ocr_40221_1__40256 === true)){
try{var ocr_40220_2__40248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40220_2__40248,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40298){if((e40298 instanceof Error)){
var e__39053__auto____$3 = e40298;
if((e__39053__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$3;
}
} else {
throw e40298;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40297){if((e40297 instanceof Error)){
var e__39053__auto____$3 = e40297;
if((e__39053__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$3;
}
} else {
throw e40297;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40263){if((e40263 instanceof Error)){
var e__39053__auto____$3 = e40263;
if((e__39053__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_40221_2__40257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(2));
if((ocr_40221_2__40257 === true)){
try{var ocr_40221_0__40255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(0));
if((ocr_40221_0__40255 === true)){
try{var ocr_40220_1__40247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40220_1__40247,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40296){if((e40296 instanceof Error)){
var e__39053__auto____$4 = e40296;
if((e__39053__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$4;
}
} else {
throw e40296;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40295){if((e40295 instanceof Error)){
var e__39053__auto____$4 = e40295;
if((e__39053__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$4;
}
} else {
throw e40295;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40264){if((e40264 instanceof Error)){
var e__39053__auto____$4 = e40264;
if((e__39053__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_40221_2__40257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(2));
if((ocr_40221_2__40257 === false)){
try{var ocr_40221_0__40255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(0));
if((ocr_40221_0__40255 === true)){
try{var ocr_40220_1__40247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40220_1__40247,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40294){if((e40294 instanceof Error)){
var e__39053__auto____$5 = e40294;
if((e__39053__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$5;
}
} else {
throw e40294;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40293){if((e40293 instanceof Error)){
var e__39053__auto____$5 = e40293;
if((e__39053__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$5;
}
} else {
throw e40293;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40265){if((e40265 instanceof Error)){
var e__39053__auto____$5 = e40265;
if((e__39053__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_40221_2__40257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(2));
if((ocr_40221_2__40257 === true)){
try{var ocr_40221_0__40255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(0));
if((ocr_40221_0__40255 === false)){
try{var ocr_40220_1__40247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40220_1__40247,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40292){if((e40292 instanceof Error)){
var e__39053__auto____$6 = e40292;
if((e__39053__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$6;
}
} else {
throw e40292;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40289){if((e40289 instanceof Error)){
var e__39053__auto____$6 = e40289;
if((e__39053__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_40221_1__40256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(1));
if((ocr_40221_1__40256 === true)){
try{var ocr_40220_0__40246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40220_0__40246,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40291){if((e40291 instanceof Error)){
var e__39053__auto____$7 = e40291;
if((e__39053__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$7;
}
} else {
throw e40291;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40290){if((e40290 instanceof Error)){
var e__39053__auto____$7 = e40290;
if((e__39053__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$7;
}
} else {
throw e40290;

}
}} else {
throw e__39053__auto____$6;
}
} else {
throw e40289;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40266){if((e40266 instanceof Error)){
var e__39053__auto____$6 = e40266;
if((e__39053__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_40221_2__40257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(2));
if((ocr_40221_2__40257 === false)){
try{var ocr_40221_1__40256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(1));
if((ocr_40221_1__40256 === true)){
try{var ocr_40220_0__40246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40220_0__40246,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40288){if((e40288 instanceof Error)){
var e__39053__auto____$7 = e40288;
if((e__39053__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$7;
}
} else {
throw e40288;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40287){if((e40287 instanceof Error)){
var e__39053__auto____$7 = e40287;
if((e__39053__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$7;
}
} else {
throw e40287;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40267){if((e40267 instanceof Error)){
var e__39053__auto____$7 = e40267;
if((e__39053__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_40221_2__40257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(2));
if((ocr_40221_2__40257 === true)){
try{var ocr_40221_1__40256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(1));
if((ocr_40221_1__40256 === false)){
try{var ocr_40220_0__40246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_40220_0__40246,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40286){if((e40286 instanceof Error)){
var e__39053__auto____$8 = e40286;
if((e__39053__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$8;
}
} else {
throw e40286;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40280){if((e40280 instanceof Error)){
var e__39053__auto____$8 = e40280;
if((e__39053__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_40221_1__40256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(1));
if((ocr_40221_1__40256 === true)){
try{var ocr_40221_0__40255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(0));
if((ocr_40221_0__40255 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40284){if((e40284 instanceof Error)){
var e__39053__auto____$9 = e40284;
if((e__39053__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_40221_0__40255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(0));
if((ocr_40221_0__40255 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40285){if((e40285 instanceof Error)){
var e__39053__auto____$10 = e40285;
if((e__39053__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$10;
}
} else {
throw e40285;

}
}} else {
throw e__39053__auto____$9;
}
} else {
throw e40284;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40281){if((e40281 instanceof Error)){
var e__39053__auto____$9 = e40281;
if((e__39053__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_40221_1__40256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(1));
if((ocr_40221_1__40256 === false)){
try{var ocr_40221_0__40255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(0));
if((ocr_40221_0__40255 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40283){if((e40283 instanceof Error)){
var e__39053__auto____$10 = e40283;
if((e__39053__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$10;
}
} else {
throw e40283;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40282){if((e40282 instanceof Error)){
var e__39053__auto____$10 = e40282;
if((e__39053__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$10;
}
} else {
throw e40282;

}
}} else {
throw e__39053__auto____$9;
}
} else {
throw e40281;

}
}} else {
throw e__39053__auto____$8;
}
} else {
throw e40280;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40268){if((e40268 instanceof Error)){
var e__39053__auto____$8 = e40268;
if((e__39053__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_40221_2__40257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(2));
if((ocr_40221_2__40257 === false)){
try{var ocr_40221_0__40255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(0));
if((ocr_40221_0__40255 === true)){
try{var ocr_40221_1__40256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(1));
if((ocr_40221_1__40256 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40279){if((e40279 instanceof Error)){
var e__39053__auto____$9 = e40279;
if((e__39053__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$9;
}
} else {
throw e40279;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40278){if((e40278 instanceof Error)){
var e__39053__auto____$9 = e40278;
if((e__39053__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$9;
}
} else {
throw e40278;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40269){if((e40269 instanceof Error)){
var e__39053__auto____$9 = e40269;
if((e__39053__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_40221_2__40257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(2));
if((ocr_40221_2__40257 === true)){
try{var ocr_40221_0__40255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(0));
if((ocr_40221_0__40255 === false)){
try{var ocr_40221_1__40256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(1));
if((ocr_40221_1__40256 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40277){if((e40277 instanceof Error)){
var e__39053__auto____$10 = e40277;
if((e__39053__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$10;
}
} else {
throw e40277;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40276){if((e40276 instanceof Error)){
var e__39053__auto____$10 = e40276;
if((e__39053__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$10;
}
} else {
throw e40276;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40270){if((e40270 instanceof Error)){
var e__39053__auto____$10 = e40270;
if((e__39053__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_40221_2__40257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(2));
if((ocr_40221_2__40257 === false)){
try{var ocr_40221_0__40255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(0));
if((ocr_40221_0__40255 === true)){
try{var ocr_40221_1__40256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(1));
if((ocr_40221_1__40256 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40275){if((e40275 instanceof Error)){
var e__39053__auto____$11 = e40275;
if((e__39053__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$11;
}
} else {
throw e40275;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40272){if((e40272 instanceof Error)){
var e__39053__auto____$11 = e40272;
if((e__39053__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_40221_0__40255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(0));
if((ocr_40221_0__40255 === false)){
try{var ocr_40221_1__40256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40221,(1));
if((ocr_40221_1__40256 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_40220,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e40274){if((e40274 instanceof Error)){
var e__39053__auto____$12 = e40274;
if((e__39053__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$12;
}
} else {
throw e40274;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40273){if((e40273 instanceof Error)){
var e__39053__auto____$12 = e40273;
if((e__39053__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$12;
}
} else {
throw e40273;

}
}} else {
throw e__39053__auto____$11;
}
} else {
throw e40272;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40271){if((e40271 instanceof Error)){
var e__39053__auto____$11 = e40271;
if((e__39053__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$11;
}
} else {
throw e40271;

}
}} else {
throw e__39053__auto____$10;
}
} else {
throw e40270;

}
}} else {
throw e__39053__auto____$9;
}
} else {
throw e40269;

}
}} else {
throw e__39053__auto____$8;
}
} else {
throw e40268;

}
}} else {
throw e__39053__auto____$7;
}
} else {
throw e40267;

}
}} else {
throw e__39053__auto____$6;
}
} else {
throw e40266;

}
}} else {
throw e__39053__auto____$5;
}
} else {
throw e40265;

}
}} else {
throw e__39053__auto____$4;
}
} else {
throw e40264;

}
}} else {
throw e__39053__auto____$3;
}
} else {
throw e40263;

}
}} else {
throw e__39053__auto____$2;
}
} else {
throw e40262;

}
}} else {
throw e__39053__auto____$1;
}
} else {
throw e40261;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40260){if((e40260 instanceof Error)){
var e__39053__auto____$1 = e40260;
if((e__39053__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39053__auto____$1;
}
} else {
throw e40260;

}
}} else {
throw e__39053__auto__;
}
} else {
throw e40259;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40258){if((e40258 instanceof Error)){
var e__39053__auto__ = e40258;
if((e__39053__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__39053__auto__;
}
} else {
throw e40258;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40315){
var vec__40316 = p__40315;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40316,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40316,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__40314_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__40314_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40320){
var vec__40321 = p__40320;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40321,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40321,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__40319_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__40319_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__40324 = cljs.core.rest(ins);
var G__40325 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__40324,G__40325) : posh.lib.q_analyze.just_qvars.call(null,G__40324,G__40325));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40326_SHARP_){
return cljs.core.zipmap(qvars,p1__40326_SHARP_);
}),varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(x))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(posh.lib.q_analyze.pull_pattern_QMARK_(x)){
return cljs.core.second(x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_(qfind)){
if(cljs.core.empty_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(posh.lib.q_analyze.pull_pattern_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(qfind),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(qfind,(2))]);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_(dbeavs)){
return null;
} else {
var vec__40327 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40327,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40327,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40327,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40327,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__40501 = var$;
var G__40502 = dbvarmap;
var G__40503 = cljs.core.rest(dbeavs);
var$ = G__40501;
dbvarmap = G__40502;
dbeavs = G__40503;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_(vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__40330 = cljs.core.rest(vars);
var G__40331 = dbvarmap;
var G__40332 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__40330,G__40331,G__40332) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__40330,G__40331,G__40332));
})()], 0));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs__$1),x)){
return n;
} else {
var G__40505 = (n + (1));
var G__40506 = cljs.core.rest(xs__$1);
n = G__40505;
xs__$1 = G__40506;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
if(cljs.core.map_QMARK_(arg)){
var and__4115__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__4115__auto__;
}
} else {
return false;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40333_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__40333_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__40333_SHARP_) : type.call(null,p1__40333_SHARP_));
} else {
return p1__40333_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__40334 = cljs.core.rest(ins);
var G__40335 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__40334,G__40335) : posh.lib.q_analyze.make_dbarg_map.call(null,G__40334,G__40335));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40336){
var vec__40337 = p__40336;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40337,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40337,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by(cljs.core.first,datoms)));
});
/**
 * Returns whether attribute identified by k is of :db/valueType :db.type/ref
 */
posh.lib.q_analyze.schema_ref_QMARK_ = (function posh$lib$q_analyze$schema_ref_QMARK_(schema,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,k)));
});
posh.lib.q_analyze.indexes_of = (function posh$lib$q_analyze$indexes_of(e,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__40341_SHARP_,p2__40340_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__40340_SHARP_)){
return p1__40341_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * Returns whether var-name is used as lookup-ref inside of query's :where clauses.
 *   var-name - the symbolic variable name
 *   where - coll of where clauses
 *   schema - map of schemas with attribute names as keys
 *   Returns boolean true or false
 */
posh.lib.q_analyze.lookup_ref_QMARK_ = (function posh$lib$q_analyze$lookup_ref_QMARK_(schema,where,var_name,var_value){
if((!(cljs.core.coll_QMARK_(var_value)))){
return false;
} else {
var clause = cljs.core.first(where);
var remaining = cljs.core.rest(where);
while(true){
var pred__40345 = cljs.core._EQ_;
var expr__40346 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__40345.cljs$core$IFn$_invoke$arity$2 ? pred__40345.cljs$core$IFn$_invoke$arity$2((1),expr__40346) : pred__40345.call(null,(1),expr__40346)))){
return true;
} else {
if(cljs.core.truth_((pred__40345.cljs$core$IFn$_invoke$arity$2 ? pred__40345.cljs$core$IFn$_invoke$arity$2((3),expr__40346) : pred__40345.call(null,(3),expr__40346)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__40508 = cljs.core.first(remaining);
var G__40509 = cljs.core.rest(remaining);
clause = G__40508;
remaining = G__40509;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__40510 = cljs.core.first(remaining);
var G__40511 = cljs.core.rest(remaining);
clause = G__40510;
remaining = G__40511;
continue;
} else {
return false;
}
}
}
break;
}
}
});
/**
 * Given input-set from query, resolves any lookup-refs
 *   Inputs:
 *   entid-fn - Datomic/DS function to take lookup-ref & returns entid
 *   db - value of DB
 *   schemas - map with keys matching known schema attributes
 *   where - where clauses of query
 *   input-set - value from query :in
 */
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,schema,where,var_name,input_set){
return cljs.core.set((function (){var iter__4529__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__40348(s__40349){
return (new cljs.core.LazySeq(null,(function (){
var s__40349__$1 = s__40349;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40349__$1);
if(temp__5735__auto__){
var s__40349__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40349__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__40349__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__40351 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__40350 = (0);
while(true){
if((i__40350 < size__4528__auto__)){
var var_value = cljs.core._nth(c__4527__auto__,i__40350);
cljs.core.chunk_append(b__40351,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__40513 = (i__40350 + (1));
i__40350 = G__40513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40351),posh$lib$q_analyze$resolve_any_idents_$_iter__40348(cljs.core.chunk_rest(s__40349__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40351),null);
}
} else {
var var_value = cljs.core.first(s__40349__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__40348(cljs.core.rest(s__40349__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var where = posh.lib.q_analyze.normalize_all_eavs(cljs.core.vec(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs(where);
var vars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(eavs));
var newqm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40356){
var vec__40357 = p__40356;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40357,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40357,(1),null);
var or__4126__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40360){
var vec__40361 = p__40360;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40361,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40361,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40364){
var vec__40365 = p__40364;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40365,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40365,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40368){
var vec__40369 = p__40368;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40369,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40369,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__40373 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__40374 = cljs.core.vec(r);
var fexpr__40372 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__40372.cljs$core$IFn$_invoke$arity$2 ? fexpr__40372.cljs$core$IFn$_invoke$arity$2(G__40373,G__40374) : fexpr__40372.call(null,G__40373,G__40374));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40375){
var vec__40376 = p__40375;
var seq__40377 = cljs.core.seq(vec__40376);
var first__40378 = cljs.core.first(seq__40377);
var seq__40377__$1 = cljs.core.next(seq__40377);
var db = first__40378;
var eav = seq__40377__$1;
return cljs.core.vec(cljs.core.cons(db,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (var_name){
var temp__5733__auto__ = (in_vars.cljs$core$IFn$_invoke$arity$1 ? in_vars.cljs$core$IFn$_invoke$arity$1(var_name) : in_vars.call(null,var_name));
if(cljs.core.truth_(temp__5733__auto__)){
var var_value = temp__5733__auto__;
return posh.lib.q_analyze.resolve_any_idents(new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),where,var_name,var_value);
} else {
return var_name;
}
}),eav)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars(eavs_ins);
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40379){
var vec__40380 = p__40379;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40380,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40380,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__40354_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__40354_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__40354_SHARP_) : linked_qvars.call(null,p1__40354_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__40354_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__40355_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__40355_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__40355_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
