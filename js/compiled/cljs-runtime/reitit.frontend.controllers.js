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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__53865,match){
var map__53866 = p__53865;
var map__53866__$1 = (((((!((map__53866 == null))))?(((((map__53866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53866):map__53866);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53866__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53866__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53866__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__53868(s__53869){
return (new cljs.core.LazySeq(null,(function (){
var s__53869__$1 = s__53869;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53869__$1);
if(temp__5735__auto__){
var s__53869__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53869__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__53869__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__53871 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__53870 = (0);
while(true){
if((i__53870 < size__4528__auto__)){
var vec__53872 = cljs.core._nth(c__4527__auto__,i__53870);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53872,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53872,(1),null);
cljs.core.chunk_append(b__53871,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__53890 = (i__53870 + (1));
i__53870 = G__53890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53871),reitit$frontend$controllers$get_identity_$_iter__53868(cljs.core.chunk_rest(s__53869__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53871),null);
}
} else {
var vec__53875 = cljs.core.first(s__53869__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53875,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53875,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__53868(cljs.core.rest(s__53869__$2)));
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
var G__53878 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53878) : f.call(null,G__53878));
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
var seq__53879_53891 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__53880_53892 = null;
var count__53881_53893 = (0);
var i__53882_53894 = (0);
while(true){
if((i__53882_53894 < count__53881_53893)){
var controller_53895 = chunk__53880_53892.cljs$core$IIndexed$_nth$arity$2(null,i__53882_53894);
reitit.frontend.controllers.apply_controller(controller_53895,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__53896 = seq__53879_53891;
var G__53897 = chunk__53880_53892;
var G__53898 = count__53881_53893;
var G__53899 = (i__53882_53894 + (1));
seq__53879_53891 = G__53896;
chunk__53880_53892 = G__53897;
count__53881_53893 = G__53898;
i__53882_53894 = G__53899;
continue;
} else {
var temp__5735__auto___53900 = cljs.core.seq(seq__53879_53891);
if(temp__5735__auto___53900){
var seq__53879_53901__$1 = temp__5735__auto___53900;
if(cljs.core.chunked_seq_QMARK_(seq__53879_53901__$1)){
var c__4556__auto___53902 = cljs.core.chunk_first(seq__53879_53901__$1);
var G__53903 = cljs.core.chunk_rest(seq__53879_53901__$1);
var G__53904 = c__4556__auto___53902;
var G__53905 = cljs.core.count(c__4556__auto___53902);
var G__53906 = (0);
seq__53879_53891 = G__53903;
chunk__53880_53892 = G__53904;
count__53881_53893 = G__53905;
i__53882_53894 = G__53906;
continue;
} else {
var controller_53907 = cljs.core.first(seq__53879_53901__$1);
reitit.frontend.controllers.apply_controller(controller_53907,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__53908 = cljs.core.next(seq__53879_53901__$1);
var G__53909 = null;
var G__53910 = (0);
var G__53911 = (0);
seq__53879_53891 = G__53908;
chunk__53880_53892 = G__53909;
count__53881_53893 = G__53910;
i__53882_53894 = G__53911;
continue;
}
} else {
}
}
break;
}

var seq__53884_53912 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__53885_53913 = null;
var count__53886_53914 = (0);
var i__53887_53915 = (0);
while(true){
if((i__53887_53915 < count__53886_53914)){
var controller_53916 = chunk__53885_53913.cljs$core$IIndexed$_nth$arity$2(null,i__53887_53915);
reitit.frontend.controllers.apply_controller(controller_53916,new cljs.core.Keyword(null,"start","start",-355208981));


var G__53917 = seq__53884_53912;
var G__53918 = chunk__53885_53913;
var G__53919 = count__53886_53914;
var G__53920 = (i__53887_53915 + (1));
seq__53884_53912 = G__53917;
chunk__53885_53913 = G__53918;
count__53886_53914 = G__53919;
i__53887_53915 = G__53920;
continue;
} else {
var temp__5735__auto___53921 = cljs.core.seq(seq__53884_53912);
if(temp__5735__auto___53921){
var seq__53884_53922__$1 = temp__5735__auto___53921;
if(cljs.core.chunked_seq_QMARK_(seq__53884_53922__$1)){
var c__4556__auto___53923 = cljs.core.chunk_first(seq__53884_53922__$1);
var G__53925 = cljs.core.chunk_rest(seq__53884_53922__$1);
var G__53926 = c__4556__auto___53923;
var G__53927 = cljs.core.count(c__4556__auto___53923);
var G__53928 = (0);
seq__53884_53912 = G__53925;
chunk__53885_53913 = G__53926;
count__53886_53914 = G__53927;
i__53887_53915 = G__53928;
continue;
} else {
var controller_53929 = cljs.core.first(seq__53884_53922__$1);
reitit.frontend.controllers.apply_controller(controller_53929,new cljs.core.Keyword(null,"start","start",-355208981));


var G__53930 = cljs.core.next(seq__53884_53922__$1);
var G__53931 = null;
var G__53932 = (0);
var G__53933 = (0);
seq__53884_53912 = G__53930;
chunk__53885_53913 = G__53931;
count__53886_53914 = G__53932;
i__53887_53915 = G__53933;
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
