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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq51081){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51081));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51108 = arguments.length;
var i__4737__auto___51109 = (0);
while(true){
if((i__4737__auto___51109 < len__4736__auto___51108)){
args__4742__auto__.push((arguments[i__4737__auto___51109]));

var G__51110 = (i__4737__auto___51109 + (1));
i__4737__auto___51109 = G__51110;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq51082){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51082));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__51083 = "";
var G__51083__$1 = (cljs.core.truth_(re.ignoreCase)?[G__51083,"i"].join(''):G__51083);
var G__51083__$2 = (cljs.core.truth_(re.multiline)?[G__51083__$1,"m"].join(''):G__51083__$1);
if(cljs.core.truth_(re.unicode)){
return [G__51083__$2,"u"].join('');
} else {
return G__51083__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
