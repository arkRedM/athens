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
var G__58281 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58281) : f.call(null,G__58281));
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
var seq__58282_58294 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__58283_58295 = null;
var count__58284_58296 = (0);
var i__58285_58297 = (0);
while(true){
if((i__58285_58297 < count__58284_58296)){
var controller_58298 = chunk__58283_58295.cljs$core$IIndexed$_nth$arity$2(null,i__58285_58297);
reitit.frontend.controllers.apply_controller(controller_58298,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__58299 = seq__58282_58294;
var G__58300 = chunk__58283_58295;
var G__58301 = count__58284_58296;
var G__58302 = (i__58285_58297 + (1));
seq__58282_58294 = G__58299;
chunk__58283_58295 = G__58300;
count__58284_58296 = G__58301;
i__58285_58297 = G__58302;
continue;
} else {
var temp__5735__auto___58303 = cljs.core.seq(seq__58282_58294);
if(temp__5735__auto___58303){
var seq__58282_58304__$1 = temp__5735__auto___58303;
if(cljs.core.chunked_seq_QMARK_(seq__58282_58304__$1)){
var c__4556__auto___58305 = cljs.core.chunk_first(seq__58282_58304__$1);
var G__58306 = cljs.core.chunk_rest(seq__58282_58304__$1);
var G__58307 = c__4556__auto___58305;
var G__58308 = cljs.core.count(c__4556__auto___58305);
var G__58309 = (0);
seq__58282_58294 = G__58306;
chunk__58283_58295 = G__58307;
count__58284_58296 = G__58308;
i__58285_58297 = G__58309;
continue;
} else {
var controller_58310 = cljs.core.first(seq__58282_58304__$1);
reitit.frontend.controllers.apply_controller(controller_58310,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__58311 = cljs.core.next(seq__58282_58304__$1);
var G__58312 = null;
var G__58313 = (0);
var G__58314 = (0);
seq__58282_58294 = G__58311;
chunk__58283_58295 = G__58312;
count__58284_58296 = G__58313;
i__58285_58297 = G__58314;
continue;
}
} else {
}
}
break;
}

var seq__58286_58315 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__58287_58316 = null;
var count__58288_58317 = (0);
var i__58289_58318 = (0);
while(true){
if((i__58289_58318 < count__58288_58317)){
var controller_58319 = chunk__58287_58316.cljs$core$IIndexed$_nth$arity$2(null,i__58289_58318);
reitit.frontend.controllers.apply_controller(controller_58319,new cljs.core.Keyword(null,"start","start",-355208981));


var G__58320 = seq__58286_58315;
var G__58321 = chunk__58287_58316;
var G__58322 = count__58288_58317;
var G__58323 = (i__58289_58318 + (1));
seq__58286_58315 = G__58320;
chunk__58287_58316 = G__58321;
count__58288_58317 = G__58322;
i__58289_58318 = G__58323;
continue;
} else {
var temp__5735__auto___58324 = cljs.core.seq(seq__58286_58315);
if(temp__5735__auto___58324){
var seq__58286_58325__$1 = temp__5735__auto___58324;
if(cljs.core.chunked_seq_QMARK_(seq__58286_58325__$1)){
var c__4556__auto___58326 = cljs.core.chunk_first(seq__58286_58325__$1);
var G__58327 = cljs.core.chunk_rest(seq__58286_58325__$1);
var G__58328 = c__4556__auto___58326;
var G__58329 = cljs.core.count(c__4556__auto___58326);
var G__58330 = (0);
seq__58286_58315 = G__58327;
chunk__58287_58316 = G__58328;
count__58288_58317 = G__58329;
i__58289_58318 = G__58330;
continue;
} else {
var controller_58331 = cljs.core.first(seq__58286_58325__$1);
reitit.frontend.controllers.apply_controller(controller_58331,new cljs.core.Keyword(null,"start","start",-355208981));


var G__58332 = cljs.core.next(seq__58286_58325__$1);
var G__58333 = null;
var G__58334 = (0);
var G__58335 = (0);
seq__58286_58315 = G__58332;
chunk__58287_58316 = G__58333;
count__58288_58317 = G__58334;
i__58289_58318 = G__58335;
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
