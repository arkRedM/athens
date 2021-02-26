goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__32443 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__32444 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__32444);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___32518 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___32518)){
var new_db_32519 = temp__5735__auto___32518;
var fexpr__32445_32520 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32445_32520.cljs$core$IFn$_invoke$arity$1 ? fexpr__32445_32520.cljs$core$IFn$_invoke$arity$1(new_db_32519) : fexpr__32445_32520.call(null,new_db_32519));
} else {
}

var seq__32446 = cljs.core.seq(effects_without_db);
var chunk__32447 = null;
var count__32448 = (0);
var i__32449 = (0);
while(true){
if((i__32449 < count__32448)){
var vec__32456 = chunk__32447.cljs$core$IIndexed$_nth$arity$2(null,i__32449);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32456,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32456,(1),null);
var temp__5733__auto___32521 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___32521)){
var effect_fn_32522 = temp__5733__auto___32521;
(effect_fn_32522.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32522.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32522.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32523 = seq__32446;
var G__32524 = chunk__32447;
var G__32525 = count__32448;
var G__32526 = (i__32449 + (1));
seq__32446 = G__32523;
chunk__32447 = G__32524;
count__32448 = G__32525;
i__32449 = G__32526;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32446);
if(temp__5735__auto__){
var seq__32446__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32446__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32446__$1);
var G__32527 = cljs.core.chunk_rest(seq__32446__$1);
var G__32528 = c__4556__auto__;
var G__32529 = cljs.core.count(c__4556__auto__);
var G__32530 = (0);
seq__32446 = G__32527;
chunk__32447 = G__32528;
count__32448 = G__32529;
i__32449 = G__32530;
continue;
} else {
var vec__32459 = cljs.core.first(seq__32446__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32459,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32459,(1),null);
var temp__5733__auto___32531 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___32531)){
var effect_fn_32532 = temp__5733__auto___32531;
(effect_fn_32532.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32532.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32532.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32533 = cljs.core.next(seq__32446__$1);
var G__32534 = null;
var G__32535 = (0);
var G__32536 = (0);
seq__32446 = G__32533;
chunk__32447 = G__32534;
count__32448 = G__32535;
i__32449 = G__32536;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__32149__auto___32537 = re_frame.interop.now();
var duration__32150__auto___32538 = (end__32149__auto___32537 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32150__auto___32538,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__32149__auto___32537);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__32443);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___32539 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___32539)){
var new_db_32540 = temp__5735__auto___32539;
var fexpr__32462_32541 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32462_32541.cljs$core$IFn$_invoke$arity$1 ? fexpr__32462_32541.cljs$core$IFn$_invoke$arity$1(new_db_32540) : fexpr__32462_32541.call(null,new_db_32540));
} else {
}

var seq__32463 = cljs.core.seq(effects_without_db);
var chunk__32464 = null;
var count__32465 = (0);
var i__32466 = (0);
while(true){
if((i__32466 < count__32465)){
var vec__32473 = chunk__32464.cljs$core$IIndexed$_nth$arity$2(null,i__32466);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32473,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32473,(1),null);
var temp__5733__auto___32542 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___32542)){
var effect_fn_32543 = temp__5733__auto___32542;
(effect_fn_32543.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32543.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32543.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32544 = seq__32463;
var G__32545 = chunk__32464;
var G__32546 = count__32465;
var G__32547 = (i__32466 + (1));
seq__32463 = G__32544;
chunk__32464 = G__32545;
count__32465 = G__32546;
i__32466 = G__32547;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32463);
if(temp__5735__auto__){
var seq__32463__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32463__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32463__$1);
var G__32548 = cljs.core.chunk_rest(seq__32463__$1);
var G__32549 = c__4556__auto__;
var G__32550 = cljs.core.count(c__4556__auto__);
var G__32551 = (0);
seq__32463 = G__32548;
chunk__32464 = G__32549;
count__32465 = G__32550;
i__32466 = G__32551;
continue;
} else {
var vec__32476 = cljs.core.first(seq__32463__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32476,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32476,(1),null);
var temp__5733__auto___32552 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___32552)){
var effect_fn_32553 = temp__5733__auto___32552;
(effect_fn_32553.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32553.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32553.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32554 = cljs.core.next(seq__32463__$1);
var G__32555 = null;
var G__32556 = (0);
var G__32557 = (0);
seq__32463 = G__32554;
chunk__32464 = G__32555;
count__32465 = G__32556;
i__32466 = G__32557;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__32479 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32480 = null;
var count__32481 = (0);
var i__32482 = (0);
while(true){
if((i__32482 < count__32481)){
var map__32487 = chunk__32480.cljs$core$IIndexed$_nth$arity$2(null,i__32482);
var map__32487__$1 = (((((!((map__32487 == null))))?(((((map__32487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32487):map__32487);
var effect = map__32487__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32487__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32487__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__32479,chunk__32480,count__32481,i__32482,map__32487,map__32487__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__32479,chunk__32480,count__32481,i__32482,map__32487,map__32487__$1,effect,ms,dispatch))
,ms);
}


var G__32558 = seq__32479;
var G__32559 = chunk__32480;
var G__32560 = count__32481;
var G__32561 = (i__32482 + (1));
seq__32479 = G__32558;
chunk__32480 = G__32559;
count__32481 = G__32560;
i__32482 = G__32561;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32479);
if(temp__5735__auto__){
var seq__32479__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32479__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32479__$1);
var G__32562 = cljs.core.chunk_rest(seq__32479__$1);
var G__32563 = c__4556__auto__;
var G__32564 = cljs.core.count(c__4556__auto__);
var G__32565 = (0);
seq__32479 = G__32562;
chunk__32480 = G__32563;
count__32481 = G__32564;
i__32482 = G__32565;
continue;
} else {
var map__32491 = cljs.core.first(seq__32479__$1);
var map__32491__$1 = (((((!((map__32491 == null))))?(((((map__32491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32491):map__32491);
var effect = map__32491__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32491__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32491__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__32479,chunk__32480,count__32481,i__32482,map__32491,map__32491__$1,effect,ms,dispatch,seq__32479__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__32479,chunk__32480,count__32481,i__32482,map__32491,map__32491__$1,effect,ms,dispatch,seq__32479__$1,temp__5735__auto__))
,ms);
}


var G__32566 = cljs.core.next(seq__32479__$1);
var G__32567 = null;
var G__32568 = (0);
var G__32569 = (0);
seq__32479 = G__32566;
chunk__32480 = G__32567;
count__32481 = G__32568;
i__32482 = G__32569;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__32493 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__32494 = null;
var count__32495 = (0);
var i__32496 = (0);
while(true){
if((i__32496 < count__32495)){
var vec__32504 = chunk__32494.cljs$core$IIndexed$_nth$arity$2(null,i__32496);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32504,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32504,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___32570 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___32570)){
var effect_fn_32575 = temp__5733__auto___32570;
(effect_fn_32575.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32575.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32575.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32576 = seq__32493;
var G__32577 = chunk__32494;
var G__32578 = count__32495;
var G__32579 = (i__32496 + (1));
seq__32493 = G__32576;
chunk__32494 = G__32577;
count__32495 = G__32578;
i__32496 = G__32579;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32493);
if(temp__5735__auto__){
var seq__32493__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32493__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32493__$1);
var G__32580 = cljs.core.chunk_rest(seq__32493__$1);
var G__32581 = c__4556__auto__;
var G__32582 = cljs.core.count(c__4556__auto__);
var G__32583 = (0);
seq__32493 = G__32580;
chunk__32494 = G__32581;
count__32495 = G__32582;
i__32496 = G__32583;
continue;
} else {
var vec__32507 = cljs.core.first(seq__32493__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32507,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32507,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___32587 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___32587)){
var effect_fn_32588 = temp__5733__auto___32587;
(effect_fn_32588.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32588.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32588.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32589 = cljs.core.next(seq__32493__$1);
var G__32590 = null;
var G__32591 = (0);
var G__32592 = (0);
seq__32493 = G__32589;
chunk__32494 = G__32590;
count__32495 = G__32591;
i__32496 = G__32592;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__32510 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32511 = null;
var count__32512 = (0);
var i__32513 = (0);
while(true){
if((i__32513 < count__32512)){
var event = chunk__32511.cljs$core$IIndexed$_nth$arity$2(null,i__32513);
re_frame.router.dispatch(event);


var G__32596 = seq__32510;
var G__32597 = chunk__32511;
var G__32598 = count__32512;
var G__32599 = (i__32513 + (1));
seq__32510 = G__32596;
chunk__32511 = G__32597;
count__32512 = G__32598;
i__32513 = G__32599;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32510);
if(temp__5735__auto__){
var seq__32510__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32510__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32510__$1);
var G__32600 = cljs.core.chunk_rest(seq__32510__$1);
var G__32601 = c__4556__auto__;
var G__32602 = cljs.core.count(c__4556__auto__);
var G__32603 = (0);
seq__32510 = G__32600;
chunk__32511 = G__32601;
count__32512 = G__32602;
i__32513 = G__32603;
continue;
} else {
var event = cljs.core.first(seq__32510__$1);
re_frame.router.dispatch(event);


var G__32608 = cljs.core.next(seq__32510__$1);
var G__32609 = null;
var G__32610 = (0);
var G__32611 = (0);
seq__32510 = G__32608;
chunk__32511 = G__32609;
count__32512 = G__32610;
i__32513 = G__32611;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__32514 = cljs.core.seq(value);
var chunk__32515 = null;
var count__32516 = (0);
var i__32517 = (0);
while(true){
if((i__32517 < count__32516)){
var event = chunk__32515.cljs$core$IIndexed$_nth$arity$2(null,i__32517);
clear_event(event);


var G__32612 = seq__32514;
var G__32613 = chunk__32515;
var G__32614 = count__32516;
var G__32615 = (i__32517 + (1));
seq__32514 = G__32612;
chunk__32515 = G__32613;
count__32516 = G__32614;
i__32517 = G__32615;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32514);
if(temp__5735__auto__){
var seq__32514__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32514__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32514__$1);
var G__32619 = cljs.core.chunk_rest(seq__32514__$1);
var G__32620 = c__4556__auto__;
var G__32621 = cljs.core.count(c__4556__auto__);
var G__32622 = (0);
seq__32514 = G__32619;
chunk__32515 = G__32620;
count__32516 = G__32621;
i__32517 = G__32622;
continue;
} else {
var event = cljs.core.first(seq__32514__$1);
clear_event(event);


var G__32623 = cljs.core.next(seq__32514__$1);
var G__32624 = null;
var G__32625 = (0);
var G__32626 = (0);
seq__32514 = G__32623;
chunk__32515 = G__32624;
count__32516 = G__32625;
i__32517 = G__32626;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
