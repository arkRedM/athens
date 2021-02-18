goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__60951,match){
var map__60952 = p__60951;
var map__60952__$1 = (((((!((map__60952 == null))))?(((((map__60952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60952):map__60952);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60952__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60952__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60952__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4115__auto__ = identity;
if(cljs.core.truth_(and__4115__auto__)){
return parameters;
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__60954(s__60955){
return (new cljs.core.LazySeq(null,(function (){
var s__60955__$1 = s__60955;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60955__$1);
if(temp__5735__auto__){
var s__60955__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60955__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__60955__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__60957 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__60956 = (0);
while(true){
if((i__60956 < size__4528__auto__)){
var vec__60958 = cljs.core._nth(c__4527__auto__,i__60956);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60958,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60958,(1),null);
cljs.core.chunk_append(b__60957,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__60977 = (i__60956 + (1));
i__60956 = G__60977;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60957),reitit$frontend$controllers$get_identity_$_iter__60954(cljs.core.chunk_rest(s__60955__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60957),null);
}
} else {
var vec__60961 = cljs.core.first(s__60955__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60961,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60961,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__60954(cljs.core.rest(s__60955__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__60964 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60964) : f.call(null,G__60964));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__60965_60978 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__60966_60979 = null;
var count__60967_60980 = (0);
var i__60968_60981 = (0);
while(true){
if((i__60968_60981 < count__60967_60980)){
var controller_60982 = chunk__60966_60979.cljs$core$IIndexed$_nth$arity$2(null,i__60968_60981);
reitit.frontend.controllers.apply_controller(controller_60982,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__60983 = seq__60965_60978;
var G__60984 = chunk__60966_60979;
var G__60985 = count__60967_60980;
var G__60986 = (i__60968_60981 + (1));
seq__60965_60978 = G__60983;
chunk__60966_60979 = G__60984;
count__60967_60980 = G__60985;
i__60968_60981 = G__60986;
continue;
} else {
var temp__5735__auto___60987 = cljs.core.seq(seq__60965_60978);
if(temp__5735__auto___60987){
var seq__60965_60988__$1 = temp__5735__auto___60987;
if(cljs.core.chunked_seq_QMARK_(seq__60965_60988__$1)){
var c__4556__auto___60989 = cljs.core.chunk_first(seq__60965_60988__$1);
var G__60990 = cljs.core.chunk_rest(seq__60965_60988__$1);
var G__60991 = c__4556__auto___60989;
var G__60992 = cljs.core.count(c__4556__auto___60989);
var G__60993 = (0);
seq__60965_60978 = G__60990;
chunk__60966_60979 = G__60991;
count__60967_60980 = G__60992;
i__60968_60981 = G__60993;
continue;
} else {
var controller_60994 = cljs.core.first(seq__60965_60988__$1);
reitit.frontend.controllers.apply_controller(controller_60994,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__60995 = cljs.core.next(seq__60965_60988__$1);
var G__60996 = null;
var G__60997 = (0);
var G__60998 = (0);
seq__60965_60978 = G__60995;
chunk__60966_60979 = G__60996;
count__60967_60980 = G__60997;
i__60968_60981 = G__60998;
continue;
}
} else {
}
}
break;
}

var seq__60972_60999 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__60973_61000 = null;
var count__60974_61001 = (0);
var i__60975_61002 = (0);
while(true){
if((i__60975_61002 < count__60974_61001)){
var controller_61003 = chunk__60973_61000.cljs$core$IIndexed$_nth$arity$2(null,i__60975_61002);
reitit.frontend.controllers.apply_controller(controller_61003,new cljs.core.Keyword(null,"start","start",-355208981));


var G__61004 = seq__60972_60999;
var G__61005 = chunk__60973_61000;
var G__61006 = count__60974_61001;
var G__61007 = (i__60975_61002 + (1));
seq__60972_60999 = G__61004;
chunk__60973_61000 = G__61005;
count__60974_61001 = G__61006;
i__60975_61002 = G__61007;
continue;
} else {
var temp__5735__auto___61008 = cljs.core.seq(seq__60972_60999);
if(temp__5735__auto___61008){
var seq__60972_61009__$1 = temp__5735__auto___61008;
if(cljs.core.chunked_seq_QMARK_(seq__60972_61009__$1)){
var c__4556__auto___61010 = cljs.core.chunk_first(seq__60972_61009__$1);
var G__61011 = cljs.core.chunk_rest(seq__60972_61009__$1);
var G__61012 = c__4556__auto___61010;
var G__61013 = cljs.core.count(c__4556__auto___61010);
var G__61014 = (0);
seq__60972_60999 = G__61011;
chunk__60973_61000 = G__61012;
count__60974_61001 = G__61013;
i__60975_61002 = G__61014;
continue;
} else {
var controller_61015 = cljs.core.first(seq__60972_61009__$1);
reitit.frontend.controllers.apply_controller(controller_61015,new cljs.core.Keyword(null,"start","start",-355208981));


var G__61016 = cljs.core.next(seq__60972_61009__$1);
var G__61017 = null;
var G__61018 = (0);
var G__61019 = (0);
seq__60972_60999 = G__61016;
chunk__60973_61000 = G__61017;
count__60974_61001 = G__61018;
i__60975_61002 = G__61019;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
