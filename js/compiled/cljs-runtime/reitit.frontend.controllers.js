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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__58268,match){
var map__58269 = p__58268;
var map__58269__$1 = (((((!((map__58269 == null))))?(((((map__58269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58269):map__58269);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58269__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58269__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58269__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__58271(s__58272){
return (new cljs.core.LazySeq(null,(function (){
var s__58272__$1 = s__58272;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58272__$1);
if(temp__5735__auto__){
var s__58272__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58272__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__58272__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__58274 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__58273 = (0);
while(true){
if((i__58273 < size__4528__auto__)){
var vec__58275 = cljs.core._nth(c__4527__auto__,i__58273);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58275,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58275,(1),null);
cljs.core.chunk_append(b__58274,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__58293 = (i__58273 + (1));
i__58273 = G__58293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58274),reitit$frontend$controllers$get_identity_$_iter__58271(cljs.core.chunk_rest(s__58272__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58274),null);
}
} else {
var vec__58278 = cljs.core.first(s__58272__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58278,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58278,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__58271(cljs.core.rest(s__58272__$2)));
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
var G__58282 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58282) : f.call(null,G__58282));
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
var seq__58284_58297 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__58285_58298 = null;
var count__58286_58299 = (0);
var i__58287_58300 = (0);
while(true){
if((i__58287_58300 < count__58286_58299)){
var controller_58301 = chunk__58285_58298.cljs$core$IIndexed$_nth$arity$2(null,i__58287_58300);
reitit.frontend.controllers.apply_controller(controller_58301,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__58302 = seq__58284_58297;
var G__58303 = chunk__58285_58298;
var G__58304 = count__58286_58299;
var G__58305 = (i__58287_58300 + (1));
seq__58284_58297 = G__58302;
chunk__58285_58298 = G__58303;
count__58286_58299 = G__58304;
i__58287_58300 = G__58305;
continue;
} else {
var temp__5735__auto___58306 = cljs.core.seq(seq__58284_58297);
if(temp__5735__auto___58306){
var seq__58284_58307__$1 = temp__5735__auto___58306;
if(cljs.core.chunked_seq_QMARK_(seq__58284_58307__$1)){
var c__4556__auto___58308 = cljs.core.chunk_first(seq__58284_58307__$1);
var G__58309 = cljs.core.chunk_rest(seq__58284_58307__$1);
var G__58310 = c__4556__auto___58308;
var G__58311 = cljs.core.count(c__4556__auto___58308);
var G__58312 = (0);
seq__58284_58297 = G__58309;
chunk__58285_58298 = G__58310;
count__58286_58299 = G__58311;
i__58287_58300 = G__58312;
continue;
} else {
var controller_58313 = cljs.core.first(seq__58284_58307__$1);
reitit.frontend.controllers.apply_controller(controller_58313,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__58314 = cljs.core.next(seq__58284_58307__$1);
var G__58315 = null;
var G__58316 = (0);
var G__58317 = (0);
seq__58284_58297 = G__58314;
chunk__58285_58298 = G__58315;
count__58286_58299 = G__58316;
i__58287_58300 = G__58317;
continue;
}
} else {
}
}
break;
}

var seq__58289_58318 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__58290_58319 = null;
var count__58291_58320 = (0);
var i__58292_58321 = (0);
while(true){
if((i__58292_58321 < count__58291_58320)){
var controller_58322 = chunk__58290_58319.cljs$core$IIndexed$_nth$arity$2(null,i__58292_58321);
reitit.frontend.controllers.apply_controller(controller_58322,new cljs.core.Keyword(null,"start","start",-355208981));


var G__58323 = seq__58289_58318;
var G__58324 = chunk__58290_58319;
var G__58325 = count__58291_58320;
var G__58326 = (i__58292_58321 + (1));
seq__58289_58318 = G__58323;
chunk__58290_58319 = G__58324;
count__58291_58320 = G__58325;
i__58292_58321 = G__58326;
continue;
} else {
var temp__5735__auto___58327 = cljs.core.seq(seq__58289_58318);
if(temp__5735__auto___58327){
var seq__58289_58328__$1 = temp__5735__auto___58327;
if(cljs.core.chunked_seq_QMARK_(seq__58289_58328__$1)){
var c__4556__auto___58329 = cljs.core.chunk_first(seq__58289_58328__$1);
var G__58330 = cljs.core.chunk_rest(seq__58289_58328__$1);
var G__58331 = c__4556__auto___58329;
var G__58332 = cljs.core.count(c__4556__auto___58329);
var G__58333 = (0);
seq__58289_58318 = G__58330;
chunk__58290_58319 = G__58331;
count__58291_58320 = G__58332;
i__58292_58321 = G__58333;
continue;
} else {
var controller_58334 = cljs.core.first(seq__58289_58328__$1);
reitit.frontend.controllers.apply_controller(controller_58334,new cljs.core.Keyword(null,"start","start",-355208981));


var G__58335 = cljs.core.next(seq__58289_58328__$1);
var G__58336 = null;
var G__58337 = (0);
var G__58338 = (0);
seq__58289_58318 = G__58335;
chunk__58290_58319 = G__58336;
count__58291_58320 = G__58337;
i__58292_58321 = G__58338;
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
