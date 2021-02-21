goog.provide('instaparse.util');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51126 = arguments.length;
var i__4737__auto___51127 = (0);
while(true){
if((i__4737__auto___51127 < len__4736__auto___51126)){
args__4742__auto__.push((arguments[i__4737__auto___51127]));

var G__51132 = (i__4737__auto___51127 + (1));
i__4737__auto___51127 = G__51132;
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
var len__4736__auto___51141 = arguments.length;
var i__4737__auto___51142 = (0);
while(true){
if((i__4737__auto___51142 < len__4736__auto___51141)){
args__4742__auto__.push((arguments[i__4737__auto___51142]));

var G__51143 = (i__4737__auto___51142 + (1));
i__4737__auto___51142 = G__51143;
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
var G__51100 = "";
var G__51100__$1 = (cljs.core.truth_(re.ignoreCase)?[G__51100,"i"].join(''):G__51100);
var G__51100__$2 = (cljs.core.truth_(re.multiline)?[G__51100__$1,"m"].join(''):G__51100__$1);
if(cljs.core.truth_(re.unicode)){
return [G__51100__$2,"u"].join('');
} else {
return G__51100__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map