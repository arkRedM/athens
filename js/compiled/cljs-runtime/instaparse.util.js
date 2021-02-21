goog.provide('instaparse.util');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51105 = arguments.length;
var i__4737__auto___51106 = (0);
while(true){
if((i__4737__auto___51106 < len__4736__auto___51105)){
args__4742__auto__.push((arguments[i__4737__auto___51106]));

var G__51107 = (i__4737__auto___51106 + (1));
i__4737__auto___51106 = G__51107;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq51088){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51088));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51124 = arguments.length;
var i__4737__auto___51125 = (0);
while(true){
if((i__4737__auto___51125 < len__4736__auto___51124)){
args__4742__auto__.push((arguments[i__4737__auto___51125]));

var G__51127 = (i__4737__auto___51125 + (1));
i__4737__auto___51125 = G__51127;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq51093){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51093));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__51097 = "";
var G__51097__$1 = (cljs.core.truth_(re.ignoreCase)?[G__51097,"i"].join(''):G__51097);
var G__51097__$2 = (cljs.core.truth_(re.multiline)?[G__51097__$1,"m"].join(''):G__51097__$1);
if(cljs.core.truth_(re.unicode)){
return [G__51097__$2,"u"].join('');
} else {
return G__51097__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
