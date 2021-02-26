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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__58273,match){
var map__58274 = p__58273;
var map__58274__$1 = (((((!((map__58274 == null))))?(((((map__58274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58274):map__58274);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58274__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58274__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58274__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__58276(s__58277){
return (new cljs.core.LazySeq(null,(function (){
var s__58277__$1 = s__58277;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58277__$1);
if(temp__5735__auto__){
var s__58277__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58277__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__58277__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__58279 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__58278 = (0);
while(true){
if((i__58278 < size__4528__auto__)){
var vec__58281 = cljs.core._nth(c__4527__auto__,i__58278);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58281,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58281,(1),null);
cljs.core.chunk_append(b__58279,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__58301 = (i__58278 + (1));
i__58278 = G__58301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58279),reitit$frontend$controllers$get_identity_$_iter__58276(cljs.core.chunk_rest(s__58277__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58279),null);
}
} else {
var vec__58285 = cljs.core.first(s__58277__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58285,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58285,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__58276(cljs.core.rest(s__58277__$2)));
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
var G__58289 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58289) : f.call(null,G__58289));
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
var seq__58290_58302 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__58291_58303 = null;
var count__58292_58304 = (0);
var i__58293_58305 = (0);
while(true){
if((i__58293_58305 < count__58292_58304)){
var controller_58306 = chunk__58291_58303.cljs$core$IIndexed$_nth$arity$2(null,i__58293_58305);
reitit.frontend.controllers.apply_controller(controller_58306,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__58307 = seq__58290_58302;
var G__58308 = chunk__58291_58303;
var G__58309 = count__58292_58304;
var G__58310 = (i__58293_58305 + (1));
seq__58290_58302 = G__58307;
chunk__58291_58303 = G__58308;
count__58292_58304 = G__58309;
i__58293_58305 = G__58310;
continue;
} else {
var temp__5735__auto___58311 = cljs.core.seq(seq__58290_58302);
if(temp__5735__auto___58311){
var seq__58290_58312__$1 = temp__5735__auto___58311;
if(cljs.core.chunked_seq_QMARK_(seq__58290_58312__$1)){
var c__4556__auto___58313 = cljs.core.chunk_first(seq__58290_58312__$1);
var G__58314 = cljs.core.chunk_rest(seq__58290_58312__$1);
var G__58315 = c__4556__auto___58313;
var G__58316 = cljs.core.count(c__4556__auto___58313);
var G__58317 = (0);
seq__58290_58302 = G__58314;
chunk__58291_58303 = G__58315;
count__58292_58304 = G__58316;
i__58293_58305 = G__58317;
continue;
} else {
var controller_58318 = cljs.core.first(seq__58290_58312__$1);
reitit.frontend.controllers.apply_controller(controller_58318,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__58319 = cljs.core.next(seq__58290_58312__$1);
var G__58320 = null;
var G__58321 = (0);
var G__58322 = (0);
seq__58290_58302 = G__58319;
chunk__58291_58303 = G__58320;
count__58292_58304 = G__58321;
i__58293_58305 = G__58322;
continue;
}
} else {
}
}
break;
}

var seq__58294_58323 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__58295_58324 = null;
var count__58296_58325 = (0);
var i__58297_58326 = (0);
while(true){
if((i__58297_58326 < count__58296_58325)){
var controller_58327 = chunk__58295_58324.cljs$core$IIndexed$_nth$arity$2(null,i__58297_58326);
reitit.frontend.controllers.apply_controller(controller_58327,new cljs.core.Keyword(null,"start","start",-355208981));


var G__58328 = seq__58294_58323;
var G__58329 = chunk__58295_58324;
var G__58330 = count__58296_58325;
var G__58331 = (i__58297_58326 + (1));
seq__58294_58323 = G__58328;
chunk__58295_58324 = G__58329;
count__58296_58325 = G__58330;
i__58297_58326 = G__58331;
continue;
} else {
var temp__5735__auto___58332 = cljs.core.seq(seq__58294_58323);
if(temp__5735__auto___58332){
var seq__58294_58333__$1 = temp__5735__auto___58332;
if(cljs.core.chunked_seq_QMARK_(seq__58294_58333__$1)){
var c__4556__auto___58334 = cljs.core.chunk_first(seq__58294_58333__$1);
var G__58335 = cljs.core.chunk_rest(seq__58294_58333__$1);
var G__58336 = c__4556__auto___58334;
var G__58337 = cljs.core.count(c__4556__auto___58334);
var G__58338 = (0);
seq__58294_58323 = G__58335;
chunk__58295_58324 = G__58336;
count__58296_58325 = G__58337;
i__58297_58326 = G__58338;
continue;
} else {
var controller_58339 = cljs.core.first(seq__58294_58333__$1);
reitit.frontend.controllers.apply_controller(controller_58339,new cljs.core.Keyword(null,"start","start",-355208981));


var G__58340 = cljs.core.next(seq__58294_58333__$1);
var G__58341 = null;
var G__58342 = (0);
var G__58343 = (0);
seq__58294_58323 = G__58340;
chunk__58295_58324 = G__58341;
count__58296_58325 = G__58342;
i__58297_58326 = G__58343;
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
