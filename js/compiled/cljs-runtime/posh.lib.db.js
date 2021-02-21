goog.provide('posh.lib.db');
posh.lib.db.get_parent_db = (function posh$lib$db$get_parent_db(poshdb){
var G__40009 = cljs.core.first(poshdb);
var G__40009__$1 = (((G__40009 instanceof cljs.core.Keyword))?G__40009.fqn:null);
switch (G__40009__$1) {
case "db":
return null;

break;
case "filter-tx":
return cljs.core.second(poshdb);

break;
case "filter-pull":
return cljs.core.second(poshdb);

break;
case "filter-q":
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(poshdb,(2)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40009__$1)].join('')));

}
});
posh.lib.db.get_db_path = (function posh$lib$db$get_db_path(poshdb){
var path = cljs.core.PersistentVector.EMPTY;
var pdb = poshdb;
while(true){
if(cljs.core.truth_(pdb)){
var G__40049 = cljs.core.cons(pdb,path);
var G__40050 = posh.lib.db.get_parent_db(pdb);
path = G__40049;
pdb = G__40050;
continue;
} else {
return path;
}
break;
}
});
posh.lib.db.db_id__GT_conn = (function posh$lib$db$db_id__GT_conn(posh_tree,db_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conns","conns",-1475268193).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id);
});
posh.lib.db.db_id__GT_schema = (function posh$lib$db$db_id__GT_schema(posh_tree,db_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id);
});
posh.lib.db.db_id__GT_db = (function posh$lib$db$db_id__GT_db(posh_tree,db_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dbs","dbs",1889628467).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id);
});
posh.lib.db.poshdb__GT_db_id = (function posh$lib$db$poshdb__GT_db_id(poshdb){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(poshdb),new cljs.core.Keyword(null,"db","db",993250759))){
return cljs.core.second(poshdb);
} else {
var G__40051 = posh.lib.db.get_parent_db(poshdb);
poshdb = G__40051;
continue;
}
break;
}
});
posh.lib.db.db_id__GT_attrs = (function posh$lib$db$db_id__GT_attrs(posh_tree,db_id){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"conn","conn",278309663),posh.lib.db.db_id__GT_conn(posh_tree,db_id),new cljs.core.Keyword(null,"schema","schema",-1582001791),posh.lib.db.db_id__GT_schema(posh_tree,db_id),new cljs.core.Keyword(null,"db","db",993250759),posh.lib.db.db_id__GT_db(posh_tree,db_id),new cljs.core.Keyword(null,"db-id","db-id",747248515),db_id], null);
});
posh.lib.db.poshdb__GT_attrs = (function posh$lib$db$poshdb__GT_attrs(posh_tree,poshdb){
return posh.lib.db.db_id__GT_attrs(posh_tree,posh.lib.db.poshdb__GT_db_id(poshdb));
});
posh.lib.db.make_filter_pred = (function posh$lib$db$make_filter_pred(tx_patterns){
return (function (_,datom){
return posh.lib.datom_matcher.datom_match_QMARK_(tx_patterns,datom);
});
});
posh.lib.db.generate_initial_db = (function posh$lib$db$generate_initial_db(var_args){
var G__40015 = arguments.length;
switch (G__40015) {
case 3:
return posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$3 = (function (dcfg,conn,filters){
return posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4(dcfg,conn,filters,null);
}));

(posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4 = (function (dcfg,conn,filters,db){
var map__40024 = filters;
var map__40024__$1 = (((((!((map__40024 == null))))?(((((map__40024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40024):map__40024);
var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40024__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var as_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40024__$1,new cljs.core.Keyword(null,"as-of","as-of",-1841962382));
var since = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40024__$1,new cljs.core.Keyword(null,"since","since",315379842));
var with$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40024__$1,new cljs.core.Keyword(null,"with","with",-1536296876));
var db__$1 = (function (){var or__4126__auto__ = db;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var fexpr__40026 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__40026.cljs$core$IFn$_invoke$arity$1 ? fexpr__40026.cljs$core$IFn$_invoke$arity$1(conn) : fexpr__40026.call(null,conn));
}
})();
var db__$2 = (cljs.core.truth_(since)?(function (){var fexpr__40027 = new cljs.core.Keyword(null,"since","since",315379842).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__40027.cljs$core$IFn$_invoke$arity$2 ? fexpr__40027.cljs$core$IFn$_invoke$arity$2(db__$1,since) : fexpr__40027.call(null,db__$1,since));
})():db__$1);
var db__$3 = (cljs.core.truth_(as_of)?(function (){var fexpr__40028 = new cljs.core.Keyword(null,"as-of","as-of",-1841962382).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__40028.cljs$core$IFn$_invoke$arity$2 ? fexpr__40028.cljs$core$IFn$_invoke$arity$2(db__$2,as_of) : fexpr__40028.call(null,db__$2,as_of));
})():db__$2);
var db__$4 = (cljs.core.truth_(with$)?new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1((function (){var fexpr__40029 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__40029.cljs$core$IFn$_invoke$arity$2 ? fexpr__40029.cljs$core$IFn$_invoke$arity$2(db__$3,with$) : fexpr__40029.call(null,db__$3,with$));
})()):db__$3);
var db__$5 = (cljs.core.truth_(filter)?(function (){var G__40031 = db__$4;
var G__40032 = (((filter instanceof cljs.core.Symbol))?null:filter);
var fexpr__40030 = new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__40030.cljs$core$IFn$_invoke$arity$2 ? fexpr__40030.cljs$core$IFn$_invoke$arity$2(G__40031,G__40032) : fexpr__40030.call(null,G__40031,G__40032));
})():db__$4);
return db__$5;
}));

(posh.lib.db.generate_initial_db.cljs$lang$maxFixedArity = 4);

posh.lib.db.poshdb__GT_db = (function posh$lib$db$poshdb__GT_db(p__40034,poshdb){
var map__40036 = p__40034;
var map__40036__$1 = (((((!((map__40036 == null))))?(((((map__40036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40036):map__40036);
var posh_tree = map__40036__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40036__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40036__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(poshdb),new cljs.core.Keyword(null,"db","db",993250759))){
return posh.lib.db.db_id__GT_db(posh_tree,cljs.core.second(poshdb));
} else {
var G__40039 = (function (){var G__40041 = posh_tree;
var G__40042 = posh.lib.db.get_parent_db(poshdb);
return (posh.lib.db.poshdb__GT_db.cljs$core$IFn$_invoke$arity$2 ? posh.lib.db.poshdb__GT_db.cljs$core$IFn$_invoke$arity$2(G__40041,G__40042) : posh.lib.db.poshdb__GT_db.call(null,G__40041,G__40042));
})();
var G__40040 = posh.lib.db.make_filter_pred(new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,poshdb)));
var fexpr__40038 = new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__40038.cljs$core$IFn$_invoke$arity$2 ? fexpr__40038.cljs$core$IFn$_invoke$arity$2(G__40039,G__40040) : fexpr__40038.call(null,G__40039,G__40040));
}
});
posh.lib.db.poshdb__GT_analyze_db = (function posh$lib$db$poshdb__GT_analyze_db(posh_tree,poshdb){
var db_id = posh.lib.db.poshdb__GT_db_id(poshdb);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db","db",993250759),posh.lib.db.poshdb__GT_db(posh_tree,poshdb),new cljs.core.Keyword(null,"conn","conn",278309663),posh.lib.db.db_id__GT_conn(posh_tree,db_id),new cljs.core.Keyword(null,"schema","schema",-1582001791),posh.lib.db.db_id__GT_schema(posh_tree,db_id),new cljs.core.Keyword(null,"db-id","db-id",747248515),db_id], null);
});

//# sourceMappingURL=posh.lib.db.js.map
