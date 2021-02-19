goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__58303 = arguments.length;
switch (G__58303) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58304 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58304 = (function (f,blockable,meta58305){
this.f = f;
this.blockable = blockable;
this.meta58305 = meta58305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58306,meta58305__$1){
var self__ = this;
var _58306__$1 = this;
return (new cljs.core.async.t_cljs$core$async58304(self__.f,self__.blockable,meta58305__$1));
}));

(cljs.core.async.t_cljs$core$async58304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58306){
var self__ = this;
var _58306__$1 = this;
return self__.meta58305;
}));

(cljs.core.async.t_cljs$core$async58304.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58304.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58304.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async58304.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async58304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta58305","meta58305",1512728194,null)], null);
}));

(cljs.core.async.t_cljs$core$async58304.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58304");

(cljs.core.async.t_cljs$core$async58304.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58304");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58304.
 */
cljs.core.async.__GT_t_cljs$core$async58304 = (function cljs$core$async$__GT_t_cljs$core$async58304(f__$1,blockable__$1,meta58305){
return (new cljs.core.async.t_cljs$core$async58304(f__$1,blockable__$1,meta58305));
});

}

return (new cljs.core.async.t_cljs$core$async58304(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__58313 = arguments.length;
switch (G__58313) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__58317 = arguments.length;
switch (G__58317) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__58321 = arguments.length;
switch (G__58321) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_59800 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_59800) : fn1.call(null,val_59800));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_59800) : fn1.call(null,val_59800));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__58324 = arguments.length;
switch (G__58324) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___59806 = n;
var x_59807 = (0);
while(true){
if((x_59807 < n__4613__auto___59806)){
(a[x_59807] = x_59807);

var G__59808 = (x_59807 + (1));
x_59807 = G__59808;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58328 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58328 = (function (flag,meta58329){
this.flag = flag;
this.meta58329 = meta58329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58330,meta58329__$1){
var self__ = this;
var _58330__$1 = this;
return (new cljs.core.async.t_cljs$core$async58328(self__.flag,meta58329__$1));
}));

(cljs.core.async.t_cljs$core$async58328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58330){
var self__ = this;
var _58330__$1 = this;
return self__.meta58329;
}));

(cljs.core.async.t_cljs$core$async58328.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async58328.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async58328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta58329","meta58329",1396124007,null)], null);
}));

(cljs.core.async.t_cljs$core$async58328.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58328");

(cljs.core.async.t_cljs$core$async58328.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58328");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58328.
 */
cljs.core.async.__GT_t_cljs$core$async58328 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async58328(flag__$1,meta58329){
return (new cljs.core.async.t_cljs$core$async58328(flag__$1,meta58329));
});

}

return (new cljs.core.async.t_cljs$core$async58328(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58331 = (function (flag,cb,meta58332){
this.flag = flag;
this.cb = cb;
this.meta58332 = meta58332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58333,meta58332__$1){
var self__ = this;
var _58333__$1 = this;
return (new cljs.core.async.t_cljs$core$async58331(self__.flag,self__.cb,meta58332__$1));
}));

(cljs.core.async.t_cljs$core$async58331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58333){
var self__ = this;
var _58333__$1 = this;
return self__.meta58332;
}));

(cljs.core.async.t_cljs$core$async58331.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58331.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async58331.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58331.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async58331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta58332","meta58332",-932994383,null)], null);
}));

(cljs.core.async.t_cljs$core$async58331.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58331");

(cljs.core.async.t_cljs$core$async58331.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58331");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58331.
 */
cljs.core.async.__GT_t_cljs$core$async58331 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async58331(flag__$1,cb__$1,meta58332){
return (new cljs.core.async.t_cljs$core$async58331(flag__$1,cb__$1,meta58332));
});

}

return (new cljs.core.async.t_cljs$core$async58331(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__58334_SHARP_){
var G__58336 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58334_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__58336) : fret.call(null,G__58336));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__58335_SHARP_){
var G__58337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58335_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__58337) : fret.call(null,G__58337));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__59813 = (i + (1));
i = G__59813;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59814 = arguments.length;
var i__4737__auto___59815 = (0);
while(true){
if((i__4737__auto___59815 < len__4736__auto___59814)){
args__4742__auto__.push((arguments[i__4737__auto___59815]));

var G__59816 = (i__4737__auto___59815 + (1));
i__4737__auto___59815 = G__59816;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__58340){
var map__58341 = p__58340;
var map__58341__$1 = (((((!((map__58341 == null))))?(((((map__58341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58341):map__58341);
var opts = map__58341__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq58338){
var G__58339 = cljs.core.first(seq58338);
var seq58338__$1 = cljs.core.next(seq58338);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58339,seq58338__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__58344 = arguments.length;
switch (G__58344) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__58245__auto___59823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58246__auto__ = (function (){var switch__58209__auto__ = (function (state_58368){
var state_val_58369 = (state_58368[(1)]);
if((state_val_58369 === (7))){
var inst_58364 = (state_58368[(2)]);
var state_58368__$1 = state_58368;
var statearr_58370_59824 = state_58368__$1;
(statearr_58370_59824[(2)] = inst_58364);

(statearr_58370_59824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (1))){
var state_58368__$1 = state_58368;
var statearr_58371_59826 = state_58368__$1;
(statearr_58371_59826[(2)] = null);

(statearr_58371_59826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (4))){
var inst_58347 = (state_58368[(7)]);
var inst_58347__$1 = (state_58368[(2)]);
var inst_58348 = (inst_58347__$1 == null);
var state_58368__$1 = (function (){var statearr_58372 = state_58368;
(statearr_58372[(7)] = inst_58347__$1);

return statearr_58372;
})();
if(cljs.core.truth_(inst_58348)){
var statearr_58373_59830 = state_58368__$1;
(statearr_58373_59830[(1)] = (5));

} else {
var statearr_58374_59831 = state_58368__$1;
(statearr_58374_59831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (13))){
var state_58368__$1 = state_58368;
var statearr_58375_59832 = state_58368__$1;
(statearr_58375_59832[(2)] = null);

(statearr_58375_59832[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (6))){
var inst_58347 = (state_58368[(7)]);
var state_58368__$1 = state_58368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58368__$1,(11),to,inst_58347);
} else {
if((state_val_58369 === (3))){
var inst_58366 = (state_58368[(2)]);
var state_58368__$1 = state_58368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58368__$1,inst_58366);
} else {
if((state_val_58369 === (12))){
var state_58368__$1 = state_58368;
var statearr_58376_59834 = state_58368__$1;
(statearr_58376_59834[(2)] = null);

(statearr_58376_59834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (2))){
var state_58368__$1 = state_58368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58368__$1,(4),from);
} else {
if((state_val_58369 === (11))){
var inst_58357 = (state_58368[(2)]);
var state_58368__$1 = state_58368;
if(cljs.core.truth_(inst_58357)){
var statearr_58377_59838 = state_58368__$1;
(statearr_58377_59838[(1)] = (12));

} else {
var statearr_58378_59839 = state_58368__$1;
(statearr_58378_59839[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (9))){
var state_58368__$1 = state_58368;
var statearr_58379_59840 = state_58368__$1;
(statearr_58379_59840[(2)] = null);

(statearr_58379_59840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (5))){
var state_58368__$1 = state_58368;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58380_59841 = state_58368__$1;
(statearr_58380_59841[(1)] = (8));

} else {
var statearr_58381_59842 = state_58368__$1;
(statearr_58381_59842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (14))){
var inst_58362 = (state_58368[(2)]);
var state_58368__$1 = state_58368;
var statearr_58382_59843 = state_58368__$1;
(statearr_58382_59843[(2)] = inst_58362);

(statearr_58382_59843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (10))){
var inst_58354 = (state_58368[(2)]);
var state_58368__$1 = state_58368;
var statearr_58383_59845 = state_58368__$1;
(statearr_58383_59845[(2)] = inst_58354);

(statearr_58383_59845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (8))){
var inst_58351 = cljs.core.async.close_BANG_(to);
var state_58368__$1 = state_58368;
var statearr_58384_59846 = state_58368__$1;
(statearr_58384_59846[(2)] = inst_58351);

(statearr_58384_59846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58210__auto__ = null;
var cljs$core$async$state_machine__58210__auto____0 = (function (){
var statearr_58385 = [null,null,null,null,null,null,null,null];
(statearr_58385[(0)] = cljs$core$async$state_machine__58210__auto__);

(statearr_58385[(1)] = (1));

return statearr_58385;
});
var cljs$core$async$state_machine__58210__auto____1 = (function (state_58368){
while(true){
var ret_value__58211__auto__ = (function (){try{while(true){
var result__58212__auto__ = switch__58209__auto__(state_58368);
if(cljs.core.keyword_identical_QMARK_(result__58212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58212__auto__;
}
break;
}
}catch (e58386){var ex__58213__auto__ = e58386;
var statearr_58387_59847 = state_58368;
(statearr_58387_59847[(2)] = ex__58213__auto__);


if(cljs.core.seq((state_58368[(4)]))){
var statearr_58388_59848 = state_58368;
(statearr_58388_59848[(1)] = cljs.core.first((state_58368[(4)])));

} else {
throw ex__58213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59849 = state_58368;
state_58368 = G__59849;
continue;
} else {
return ret_value__58211__auto__;
}
break;
}
});
cljs$core$async$state_machine__58210__auto__ = function(state_58368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58210__auto____1.call(this,state_58368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58210__auto____0;
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58210__auto____1;
return cljs$core$async$state_machine__58210__auto__;
})()
})();
var state__58247__auto__ = (function (){var statearr_58389 = f__58246__auto__();
(statearr_58389[(6)] = c__58245__auto___59823);

return statearr_58389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58247__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__58390){
var vec__58391 = p__58390;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58391,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58391,(1),null);
var job = vec__58391;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__58245__auto___59853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58246__auto__ = (function (){var switch__58209__auto__ = (function (state_58398){
var state_val_58399 = (state_58398[(1)]);
if((state_val_58399 === (1))){
var state_58398__$1 = state_58398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58398__$1,(2),res,v);
} else {
if((state_val_58399 === (2))){
var inst_58395 = (state_58398[(2)]);
var inst_58396 = cljs.core.async.close_BANG_(res);
var state_58398__$1 = (function (){var statearr_58400 = state_58398;
(statearr_58400[(7)] = inst_58395);

return statearr_58400;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58398__$1,inst_58396);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____0 = (function (){
var statearr_58401 = [null,null,null,null,null,null,null,null];
(statearr_58401[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__);

(statearr_58401[(1)] = (1));

return statearr_58401;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____1 = (function (state_58398){
while(true){
var ret_value__58211__auto__ = (function (){try{while(true){
var result__58212__auto__ = switch__58209__auto__(state_58398);
if(cljs.core.keyword_identical_QMARK_(result__58212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58212__auto__;
}
break;
}
}catch (e58402){var ex__58213__auto__ = e58402;
var statearr_58403_59854 = state_58398;
(statearr_58403_59854[(2)] = ex__58213__auto__);


if(cljs.core.seq((state_58398[(4)]))){
var statearr_58404_59855 = state_58398;
(statearr_58404_59855[(1)] = cljs.core.first((state_58398[(4)])));

} else {
throw ex__58213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59856 = state_58398;
state_58398 = G__59856;
continue;
} else {
return ret_value__58211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__ = function(state_58398){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____1.call(this,state_58398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__;
})()
})();
var state__58247__auto__ = (function (){var statearr_58405 = f__58246__auto__();
(statearr_58405[(6)] = c__58245__auto___59853);

return statearr_58405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58247__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__58406){
var vec__58407 = p__58406;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58407,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58407,(1),null);
var job = vec__58407;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___59857 = n;
var __59858 = (0);
while(true){
if((__59858 < n__4613__auto___59857)){
var G__58410_59859 = type;
var G__58410_59860__$1 = (((G__58410_59859 instanceof cljs.core.Keyword))?G__58410_59859.fqn:null);
switch (G__58410_59860__$1) {
case "compute":
var c__58245__auto___59862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__59858,c__58245__auto___59862,G__58410_59859,G__58410_59860__$1,n__4613__auto___59857,jobs,results,process,async){
return (function (){
var f__58246__auto__ = (function (){var switch__58209__auto__ = ((function (__59858,c__58245__auto___59862,G__58410_59859,G__58410_59860__$1,n__4613__auto___59857,jobs,results,process,async){
return (function (state_58423){
var state_val_58424 = (state_58423[(1)]);
if((state_val_58424 === (1))){
var state_58423__$1 = state_58423;
var statearr_58425_59863 = state_58423__$1;
(statearr_58425_59863[(2)] = null);

(statearr_58425_59863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58424 === (2))){
var state_58423__$1 = state_58423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58423__$1,(4),jobs);
} else {
if((state_val_58424 === (3))){
var inst_58421 = (state_58423[(2)]);
var state_58423__$1 = state_58423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58423__$1,inst_58421);
} else {
if((state_val_58424 === (4))){
var inst_58413 = (state_58423[(2)]);
var inst_58414 = process(inst_58413);
var state_58423__$1 = state_58423;
if(cljs.core.truth_(inst_58414)){
var statearr_58426_59864 = state_58423__$1;
(statearr_58426_59864[(1)] = (5));

} else {
var statearr_58427_59865 = state_58423__$1;
(statearr_58427_59865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58424 === (5))){
var state_58423__$1 = state_58423;
var statearr_58428_59866 = state_58423__$1;
(statearr_58428_59866[(2)] = null);

(statearr_58428_59866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58424 === (6))){
var state_58423__$1 = state_58423;
var statearr_58429_59867 = state_58423__$1;
(statearr_58429_59867[(2)] = null);

(statearr_58429_59867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58424 === (7))){
var inst_58419 = (state_58423[(2)]);
var state_58423__$1 = state_58423;
var statearr_58430_59868 = state_58423__$1;
(statearr_58430_59868[(2)] = inst_58419);

(statearr_58430_59868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__59858,c__58245__auto___59862,G__58410_59859,G__58410_59860__$1,n__4613__auto___59857,jobs,results,process,async))
;
return ((function (__59858,switch__58209__auto__,c__58245__auto___59862,G__58410_59859,G__58410_59860__$1,n__4613__auto___59857,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____0 = (function (){
var statearr_58431 = [null,null,null,null,null,null,null];
(statearr_58431[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__);

(statearr_58431[(1)] = (1));

return statearr_58431;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____1 = (function (state_58423){
while(true){
var ret_value__58211__auto__ = (function (){try{while(true){
var result__58212__auto__ = switch__58209__auto__(state_58423);
if(cljs.core.keyword_identical_QMARK_(result__58212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58212__auto__;
}
break;
}
}catch (e58432){var ex__58213__auto__ = e58432;
var statearr_58433_59873 = state_58423;
(statearr_58433_59873[(2)] = ex__58213__auto__);


if(cljs.core.seq((state_58423[(4)]))){
var statearr_58434_59874 = state_58423;
(statearr_58434_59874[(1)] = cljs.core.first((state_58423[(4)])));

} else {
throw ex__58213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59879 = state_58423;
state_58423 = G__59879;
continue;
} else {
return ret_value__58211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__ = function(state_58423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____1.call(this,state_58423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__;
})()
;})(__59858,switch__58209__auto__,c__58245__auto___59862,G__58410_59859,G__58410_59860__$1,n__4613__auto___59857,jobs,results,process,async))
})();
var state__58247__auto__ = (function (){var statearr_58435 = f__58246__auto__();
(statearr_58435[(6)] = c__58245__auto___59862);

return statearr_58435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58247__auto__);
});})(__59858,c__58245__auto___59862,G__58410_59859,G__58410_59860__$1,n__4613__auto___59857,jobs,results,process,async))
);


break;
case "async":
var c__58245__auto___59884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__59858,c__58245__auto___59884,G__58410_59859,G__58410_59860__$1,n__4613__auto___59857,jobs,results,process,async){
return (function (){
var f__58246__auto__ = (function (){var switch__58209__auto__ = ((function (__59858,c__58245__auto___59884,G__58410_59859,G__58410_59860__$1,n__4613__auto___59857,jobs,results,process,async){
return (function (state_58448){
var state_val_58449 = (state_58448[(1)]);
if((state_val_58449 === (1))){
var state_58448__$1 = state_58448;
var statearr_58450_59885 = state_58448__$1;
(statearr_58450_59885[(2)] = null);

(statearr_58450_59885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58449 === (2))){
var state_58448__$1 = state_58448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58448__$1,(4),jobs);
} else {
if((state_val_58449 === (3))){
var inst_58446 = (state_58448[(2)]);
var state_58448__$1 = state_58448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58448__$1,inst_58446);
} else {
if((state_val_58449 === (4))){
var inst_58438 = (state_58448[(2)]);
var inst_58439 = async(inst_58438);
var state_58448__$1 = state_58448;
if(cljs.core.truth_(inst_58439)){
var statearr_58451_59887 = state_58448__$1;
(statearr_58451_59887[(1)] = (5));

} else {
var statearr_58452_59888 = state_58448__$1;
(statearr_58452_59888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58449 === (5))){
var state_58448__$1 = state_58448;
var statearr_58453_59890 = state_58448__$1;
(statearr_58453_59890[(2)] = null);

(statearr_58453_59890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58449 === (6))){
var state_58448__$1 = state_58448;
var statearr_58454_59891 = state_58448__$1;
(statearr_58454_59891[(2)] = null);

(statearr_58454_59891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58449 === (7))){
var inst_58444 = (state_58448[(2)]);
var state_58448__$1 = state_58448;
var statearr_58455_59892 = state_58448__$1;
(statearr_58455_59892[(2)] = inst_58444);

(statearr_58455_59892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__59858,c__58245__auto___59884,G__58410_59859,G__58410_59860__$1,n__4613__auto___59857,jobs,results,process,async))
;
return ((function (__59858,switch__58209__auto__,c__58245__auto___59884,G__58410_59859,G__58410_59860__$1,n__4613__auto___59857,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____0 = (function (){
var statearr_58456 = [null,null,null,null,null,null,null];
(statearr_58456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__);

(statearr_58456[(1)] = (1));

return statearr_58456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____1 = (function (state_58448){
while(true){
var ret_value__58211__auto__ = (function (){try{while(true){
var result__58212__auto__ = switch__58209__auto__(state_58448);
if(cljs.core.keyword_identical_QMARK_(result__58212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58212__auto__;
}
break;
}
}catch (e58457){var ex__58213__auto__ = e58457;
var statearr_58458_59896 = state_58448;
(statearr_58458_59896[(2)] = ex__58213__auto__);


if(cljs.core.seq((state_58448[(4)]))){
var statearr_58459_59897 = state_58448;
(statearr_58459_59897[(1)] = cljs.core.first((state_58448[(4)])));

} else {
throw ex__58213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59898 = state_58448;
state_58448 = G__59898;
continue;
} else {
return ret_value__58211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__ = function(state_58448){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____1.call(this,state_58448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__;
})()
;})(__59858,switch__58209__auto__,c__58245__auto___59884,G__58410_59859,G__58410_59860__$1,n__4613__auto___59857,jobs,results,process,async))
})();
var state__58247__auto__ = (function (){var statearr_58460 = f__58246__auto__();
(statearr_58460[(6)] = c__58245__auto___59884);

return statearr_58460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58247__auto__);
});})(__59858,c__58245__auto___59884,G__58410_59859,G__58410_59860__$1,n__4613__auto___59857,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58410_59860__$1)].join('')));

}

var G__59899 = (__59858 + (1));
__59858 = G__59899;
continue;
} else {
}
break;
}

var c__58245__auto___59900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58246__auto__ = (function (){var switch__58209__auto__ = (function (state_58482){
var state_val_58483 = (state_58482[(1)]);
if((state_val_58483 === (7))){
var inst_58478 = (state_58482[(2)]);
var state_58482__$1 = state_58482;
var statearr_58484_59901 = state_58482__$1;
(statearr_58484_59901[(2)] = inst_58478);

(statearr_58484_59901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58483 === (1))){
var state_58482__$1 = state_58482;
var statearr_58485_59902 = state_58482__$1;
(statearr_58485_59902[(2)] = null);

(statearr_58485_59902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58483 === (4))){
var inst_58463 = (state_58482[(7)]);
var inst_58463__$1 = (state_58482[(2)]);
var inst_58464 = (inst_58463__$1 == null);
var state_58482__$1 = (function (){var statearr_58486 = state_58482;
(statearr_58486[(7)] = inst_58463__$1);

return statearr_58486;
})();
if(cljs.core.truth_(inst_58464)){
var statearr_58487_59903 = state_58482__$1;
(statearr_58487_59903[(1)] = (5));

} else {
var statearr_58488_59904 = state_58482__$1;
(statearr_58488_59904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58483 === (6))){
var inst_58463 = (state_58482[(7)]);
var inst_58468 = (state_58482[(8)]);
var inst_58468__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_58469 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_58470 = [inst_58463,inst_58468__$1];
var inst_58471 = (new cljs.core.PersistentVector(null,2,(5),inst_58469,inst_58470,null));
var state_58482__$1 = (function (){var statearr_58489 = state_58482;
(statearr_58489[(8)] = inst_58468__$1);

return statearr_58489;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58482__$1,(8),jobs,inst_58471);
} else {
if((state_val_58483 === (3))){
var inst_58480 = (state_58482[(2)]);
var state_58482__$1 = state_58482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58482__$1,inst_58480);
} else {
if((state_val_58483 === (2))){
var state_58482__$1 = state_58482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58482__$1,(4),from);
} else {
if((state_val_58483 === (9))){
var inst_58475 = (state_58482[(2)]);
var state_58482__$1 = (function (){var statearr_58490 = state_58482;
(statearr_58490[(9)] = inst_58475);

return statearr_58490;
})();
var statearr_58491_59905 = state_58482__$1;
(statearr_58491_59905[(2)] = null);

(statearr_58491_59905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58483 === (5))){
var inst_58466 = cljs.core.async.close_BANG_(jobs);
var state_58482__$1 = state_58482;
var statearr_58492_59906 = state_58482__$1;
(statearr_58492_59906[(2)] = inst_58466);

(statearr_58492_59906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58483 === (8))){
var inst_58468 = (state_58482[(8)]);
var inst_58473 = (state_58482[(2)]);
var state_58482__$1 = (function (){var statearr_58493 = state_58482;
(statearr_58493[(10)] = inst_58473);

return statearr_58493;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58482__$1,(9),results,inst_58468);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____0 = (function (){
var statearr_58494 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58494[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__);

(statearr_58494[(1)] = (1));

return statearr_58494;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____1 = (function (state_58482){
while(true){
var ret_value__58211__auto__ = (function (){try{while(true){
var result__58212__auto__ = switch__58209__auto__(state_58482);
if(cljs.core.keyword_identical_QMARK_(result__58212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58212__auto__;
}
break;
}
}catch (e58495){var ex__58213__auto__ = e58495;
var statearr_58496_59907 = state_58482;
(statearr_58496_59907[(2)] = ex__58213__auto__);


if(cljs.core.seq((state_58482[(4)]))){
var statearr_58497_59908 = state_58482;
(statearr_58497_59908[(1)] = cljs.core.first((state_58482[(4)])));

} else {
throw ex__58213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59909 = state_58482;
state_58482 = G__59909;
continue;
} else {
return ret_value__58211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__ = function(state_58482){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____1.call(this,state_58482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__;
})()
})();
var state__58247__auto__ = (function (){var statearr_58498 = f__58246__auto__();
(statearr_58498[(6)] = c__58245__auto___59900);

return statearr_58498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58247__auto__);
}));


var c__58245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58246__auto__ = (function (){var switch__58209__auto__ = (function (state_58536){
var state_val_58537 = (state_58536[(1)]);
if((state_val_58537 === (7))){
var inst_58532 = (state_58536[(2)]);
var state_58536__$1 = state_58536;
var statearr_58538_59910 = state_58536__$1;
(statearr_58538_59910[(2)] = inst_58532);

(statearr_58538_59910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58537 === (20))){
var state_58536__$1 = state_58536;
var statearr_58539_59911 = state_58536__$1;
(statearr_58539_59911[(2)] = null);

(statearr_58539_59911[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58537 === (1))){
var state_58536__$1 = state_58536;
var statearr_58540_59912 = state_58536__$1;
(statearr_58540_59912[(2)] = null);

(statearr_58540_59912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58537 === (4))){
var inst_58501 = (state_58536[(7)]);
var inst_58501__$1 = (state_58536[(2)]);
var inst_58502 = (inst_58501__$1 == null);
var state_58536__$1 = (function (){var statearr_58541 = state_58536;
(statearr_58541[(7)] = inst_58501__$1);

return statearr_58541;
})();
if(cljs.core.truth_(inst_58502)){
var statearr_58542_59913 = state_58536__$1;
(statearr_58542_59913[(1)] = (5));

} else {
var statearr_58543_59914 = state_58536__$1;
(statearr_58543_59914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58537 === (15))){
var inst_58514 = (state_58536[(8)]);
var state_58536__$1 = state_58536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58536__$1,(18),to,inst_58514);
} else {
if((state_val_58537 === (21))){
var inst_58527 = (state_58536[(2)]);
var state_58536__$1 = state_58536;
var statearr_58544_59915 = state_58536__$1;
(statearr_58544_59915[(2)] = inst_58527);

(statearr_58544_59915[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58537 === (13))){
var inst_58529 = (state_58536[(2)]);
var state_58536__$1 = (function (){var statearr_58545 = state_58536;
(statearr_58545[(9)] = inst_58529);

return statearr_58545;
})();
var statearr_58546_59916 = state_58536__$1;
(statearr_58546_59916[(2)] = null);

(statearr_58546_59916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58537 === (6))){
var inst_58501 = (state_58536[(7)]);
var state_58536__$1 = state_58536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58536__$1,(11),inst_58501);
} else {
if((state_val_58537 === (17))){
var inst_58522 = (state_58536[(2)]);
var state_58536__$1 = state_58536;
if(cljs.core.truth_(inst_58522)){
var statearr_58547_59917 = state_58536__$1;
(statearr_58547_59917[(1)] = (19));

} else {
var statearr_58548_59918 = state_58536__$1;
(statearr_58548_59918[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58537 === (3))){
var inst_58534 = (state_58536[(2)]);
var state_58536__$1 = state_58536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58536__$1,inst_58534);
} else {
if((state_val_58537 === (12))){
var inst_58511 = (state_58536[(10)]);
var state_58536__$1 = state_58536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58536__$1,(14),inst_58511);
} else {
if((state_val_58537 === (2))){
var state_58536__$1 = state_58536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58536__$1,(4),results);
} else {
if((state_val_58537 === (19))){
var state_58536__$1 = state_58536;
var statearr_58549_59919 = state_58536__$1;
(statearr_58549_59919[(2)] = null);

(statearr_58549_59919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58537 === (11))){
var inst_58511 = (state_58536[(2)]);
var state_58536__$1 = (function (){var statearr_58550 = state_58536;
(statearr_58550[(10)] = inst_58511);

return statearr_58550;
})();
var statearr_58551_59920 = state_58536__$1;
(statearr_58551_59920[(2)] = null);

(statearr_58551_59920[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58537 === (9))){
var state_58536__$1 = state_58536;
var statearr_58552_59921 = state_58536__$1;
(statearr_58552_59921[(2)] = null);

(statearr_58552_59921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58537 === (5))){
var state_58536__$1 = state_58536;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58553_59922 = state_58536__$1;
(statearr_58553_59922[(1)] = (8));

} else {
var statearr_58554_59923 = state_58536__$1;
(statearr_58554_59923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58537 === (14))){
var inst_58514 = (state_58536[(8)]);
var inst_58514__$1 = (state_58536[(2)]);
var inst_58515 = (inst_58514__$1 == null);
var inst_58516 = cljs.core.not(inst_58515);
var state_58536__$1 = (function (){var statearr_58555 = state_58536;
(statearr_58555[(8)] = inst_58514__$1);

return statearr_58555;
})();
if(inst_58516){
var statearr_58556_59924 = state_58536__$1;
(statearr_58556_59924[(1)] = (15));

} else {
var statearr_58557_59925 = state_58536__$1;
(statearr_58557_59925[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58537 === (16))){
var state_58536__$1 = state_58536;
var statearr_58558_59926 = state_58536__$1;
(statearr_58558_59926[(2)] = false);

(statearr_58558_59926[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58537 === (10))){
var inst_58508 = (state_58536[(2)]);
var state_58536__$1 = state_58536;
var statearr_58559_59927 = state_58536__$1;
(statearr_58559_59927[(2)] = inst_58508);

(statearr_58559_59927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58537 === (18))){
var inst_58519 = (state_58536[(2)]);
var state_58536__$1 = state_58536;
var statearr_58560_59928 = state_58536__$1;
(statearr_58560_59928[(2)] = inst_58519);

(statearr_58560_59928[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58537 === (8))){
var inst_58505 = cljs.core.async.close_BANG_(to);
var state_58536__$1 = state_58536;
var statearr_58561_59929 = state_58536__$1;
(statearr_58561_59929[(2)] = inst_58505);

(statearr_58561_59929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____0 = (function (){
var statearr_58562 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58562[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__);

(statearr_58562[(1)] = (1));

return statearr_58562;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____1 = (function (state_58536){
while(true){
var ret_value__58211__auto__ = (function (){try{while(true){
var result__58212__auto__ = switch__58209__auto__(state_58536);
if(cljs.core.keyword_identical_QMARK_(result__58212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58212__auto__;
}
break;
}
}catch (e58563){var ex__58213__auto__ = e58563;
var statearr_58564_59930 = state_58536;
(statearr_58564_59930[(2)] = ex__58213__auto__);


if(cljs.core.seq((state_58536[(4)]))){
var statearr_58565_59931 = state_58536;
(statearr_58565_59931[(1)] = cljs.core.first((state_58536[(4)])));

} else {
throw ex__58213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59932 = state_58536;
state_58536 = G__59932;
continue;
} else {
return ret_value__58211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__ = function(state_58536){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____1.call(this,state_58536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58210__auto__;
})()
})();
var state__58247__auto__ = (function (){var statearr_58566 = f__58246__auto__();
(statearr_58566[(6)] = c__58245__auto__);

return statearr_58566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58247__auto__);
}));

return c__58245__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__58568 = arguments.length;
switch (G__58568) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__58570 = arguments.length;
switch (G__58570) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__58572 = arguments.length;
switch (G__58572) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__58245__auto___59936 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58246__auto__ = (function (){var switch__58209__auto__ = (function (state_58598){
var state_val_58599 = (state_58598[(1)]);
if((state_val_58599 === (7))){
var inst_58594 = (state_58598[(2)]);
var state_58598__$1 = state_58598;
var statearr_58600_59937 = state_58598__$1;
(statearr_58600_59937[(2)] = inst_58594);

(statearr_58600_59937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58599 === (1))){
var state_58598__$1 = state_58598;
var statearr_58601_59938 = state_58598__$1;
(statearr_58601_59938[(2)] = null);

(statearr_58601_59938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58599 === (4))){
var inst_58575 = (state_58598[(7)]);
var inst_58575__$1 = (state_58598[(2)]);
var inst_58576 = (inst_58575__$1 == null);
var state_58598__$1 = (function (){var statearr_58602 = state_58598;
(statearr_58602[(7)] = inst_58575__$1);

return statearr_58602;
})();
if(cljs.core.truth_(inst_58576)){
var statearr_58603_59939 = state_58598__$1;
(statearr_58603_59939[(1)] = (5));

} else {
var statearr_58604_59940 = state_58598__$1;
(statearr_58604_59940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58599 === (13))){
var state_58598__$1 = state_58598;
var statearr_58605_59941 = state_58598__$1;
(statearr_58605_59941[(2)] = null);

(statearr_58605_59941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58599 === (6))){
var inst_58575 = (state_58598[(7)]);
var inst_58581 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_58575) : p.call(null,inst_58575));
var state_58598__$1 = state_58598;
if(cljs.core.truth_(inst_58581)){
var statearr_58606_59942 = state_58598__$1;
(statearr_58606_59942[(1)] = (9));

} else {
var statearr_58607_59943 = state_58598__$1;
(statearr_58607_59943[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58599 === (3))){
var inst_58596 = (state_58598[(2)]);
var state_58598__$1 = state_58598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58598__$1,inst_58596);
} else {
if((state_val_58599 === (12))){
var state_58598__$1 = state_58598;
var statearr_58608_59944 = state_58598__$1;
(statearr_58608_59944[(2)] = null);

(statearr_58608_59944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58599 === (2))){
var state_58598__$1 = state_58598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58598__$1,(4),ch);
} else {
if((state_val_58599 === (11))){
var inst_58575 = (state_58598[(7)]);
var inst_58585 = (state_58598[(2)]);
var state_58598__$1 = state_58598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58598__$1,(8),inst_58585,inst_58575);
} else {
if((state_val_58599 === (9))){
var state_58598__$1 = state_58598;
var statearr_58609_59945 = state_58598__$1;
(statearr_58609_59945[(2)] = tc);

(statearr_58609_59945[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58599 === (5))){
var inst_58578 = cljs.core.async.close_BANG_(tc);
var inst_58579 = cljs.core.async.close_BANG_(fc);
var state_58598__$1 = (function (){var statearr_58610 = state_58598;
(statearr_58610[(8)] = inst_58578);

return statearr_58610;
})();
var statearr_58611_59946 = state_58598__$1;
(statearr_58611_59946[(2)] = inst_58579);

(statearr_58611_59946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58599 === (14))){
var inst_58592 = (state_58598[(2)]);
var state_58598__$1 = state_58598;
var statearr_58612_59947 = state_58598__$1;
(statearr_58612_59947[(2)] = inst_58592);

(statearr_58612_59947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58599 === (10))){
var state_58598__$1 = state_58598;
var statearr_58613_59948 = state_58598__$1;
(statearr_58613_59948[(2)] = fc);

(statearr_58613_59948[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58599 === (8))){
var inst_58587 = (state_58598[(2)]);
var state_58598__$1 = state_58598;
if(cljs.core.truth_(inst_58587)){
var statearr_58614_59949 = state_58598__$1;
(statearr_58614_59949[(1)] = (12));

} else {
var statearr_58615_59950 = state_58598__$1;
(statearr_58615_59950[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58210__auto__ = null;
var cljs$core$async$state_machine__58210__auto____0 = (function (){
var statearr_58616 = [null,null,null,null,null,null,null,null,null];
(statearr_58616[(0)] = cljs$core$async$state_machine__58210__auto__);

(statearr_58616[(1)] = (1));

return statearr_58616;
});
var cljs$core$async$state_machine__58210__auto____1 = (function (state_58598){
while(true){
var ret_value__58211__auto__ = (function (){try{while(true){
var result__58212__auto__ = switch__58209__auto__(state_58598);
if(cljs.core.keyword_identical_QMARK_(result__58212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58212__auto__;
}
break;
}
}catch (e58617){var ex__58213__auto__ = e58617;
var statearr_58618_59951 = state_58598;
(statearr_58618_59951[(2)] = ex__58213__auto__);


if(cljs.core.seq((state_58598[(4)]))){
var statearr_58619_59952 = state_58598;
(statearr_58619_59952[(1)] = cljs.core.first((state_58598[(4)])));

} else {
throw ex__58213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59953 = state_58598;
state_58598 = G__59953;
continue;
} else {
return ret_value__58211__auto__;
}
break;
}
});
cljs$core$async$state_machine__58210__auto__ = function(state_58598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58210__auto____1.call(this,state_58598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58210__auto____0;
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58210__auto____1;
return cljs$core$async$state_machine__58210__auto__;
})()
})();
var state__58247__auto__ = (function (){var statearr_58620 = f__58246__auto__();
(statearr_58620[(6)] = c__58245__auto___59936);

return statearr_58620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58247__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__58245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58246__auto__ = (function (){var switch__58209__auto__ = (function (state_58642){
var state_val_58643 = (state_58642[(1)]);
if((state_val_58643 === (7))){
var inst_58638 = (state_58642[(2)]);
var state_58642__$1 = state_58642;
var statearr_58644_59954 = state_58642__$1;
(statearr_58644_59954[(2)] = inst_58638);

(statearr_58644_59954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58643 === (1))){
var inst_58621 = init;
var inst_58622 = inst_58621;
var state_58642__$1 = (function (){var statearr_58645 = state_58642;
(statearr_58645[(7)] = inst_58622);

return statearr_58645;
})();
var statearr_58646_59955 = state_58642__$1;
(statearr_58646_59955[(2)] = null);

(statearr_58646_59955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58643 === (4))){
var inst_58625 = (state_58642[(8)]);
var inst_58625__$1 = (state_58642[(2)]);
var inst_58626 = (inst_58625__$1 == null);
var state_58642__$1 = (function (){var statearr_58647 = state_58642;
(statearr_58647[(8)] = inst_58625__$1);

return statearr_58647;
})();
if(cljs.core.truth_(inst_58626)){
var statearr_58648_59956 = state_58642__$1;
(statearr_58648_59956[(1)] = (5));

} else {
var statearr_58649_59957 = state_58642__$1;
(statearr_58649_59957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58643 === (6))){
var inst_58622 = (state_58642[(7)]);
var inst_58625 = (state_58642[(8)]);
var inst_58629 = (state_58642[(9)]);
var inst_58629__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_58622,inst_58625) : f.call(null,inst_58622,inst_58625));
var inst_58630 = cljs.core.reduced_QMARK_(inst_58629__$1);
var state_58642__$1 = (function (){var statearr_58650 = state_58642;
(statearr_58650[(9)] = inst_58629__$1);

return statearr_58650;
})();
if(inst_58630){
var statearr_58651_59958 = state_58642__$1;
(statearr_58651_59958[(1)] = (8));

} else {
var statearr_58652_59959 = state_58642__$1;
(statearr_58652_59959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58643 === (3))){
var inst_58640 = (state_58642[(2)]);
var state_58642__$1 = state_58642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58642__$1,inst_58640);
} else {
if((state_val_58643 === (2))){
var state_58642__$1 = state_58642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58642__$1,(4),ch);
} else {
if((state_val_58643 === (9))){
var inst_58629 = (state_58642[(9)]);
var inst_58622 = inst_58629;
var state_58642__$1 = (function (){var statearr_58653 = state_58642;
(statearr_58653[(7)] = inst_58622);

return statearr_58653;
})();
var statearr_58654_59960 = state_58642__$1;
(statearr_58654_59960[(2)] = null);

(statearr_58654_59960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58643 === (5))){
var inst_58622 = (state_58642[(7)]);
var state_58642__$1 = state_58642;
var statearr_58655_59961 = state_58642__$1;
(statearr_58655_59961[(2)] = inst_58622);

(statearr_58655_59961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58643 === (10))){
var inst_58636 = (state_58642[(2)]);
var state_58642__$1 = state_58642;
var statearr_58656_59962 = state_58642__$1;
(statearr_58656_59962[(2)] = inst_58636);

(statearr_58656_59962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58643 === (8))){
var inst_58629 = (state_58642[(9)]);
var inst_58632 = cljs.core.deref(inst_58629);
var state_58642__$1 = state_58642;
var statearr_58657_59963 = state_58642__$1;
(statearr_58657_59963[(2)] = inst_58632);

(statearr_58657_59963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__58210__auto__ = null;
var cljs$core$async$reduce_$_state_machine__58210__auto____0 = (function (){
var statearr_58658 = [null,null,null,null,null,null,null,null,null,null];
(statearr_58658[(0)] = cljs$core$async$reduce_$_state_machine__58210__auto__);

(statearr_58658[(1)] = (1));

return statearr_58658;
});
var cljs$core$async$reduce_$_state_machine__58210__auto____1 = (function (state_58642){
while(true){
var ret_value__58211__auto__ = (function (){try{while(true){
var result__58212__auto__ = switch__58209__auto__(state_58642);
if(cljs.core.keyword_identical_QMARK_(result__58212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58212__auto__;
}
break;
}
}catch (e58659){var ex__58213__auto__ = e58659;
var statearr_58660_59964 = state_58642;
(statearr_58660_59964[(2)] = ex__58213__auto__);


if(cljs.core.seq((state_58642[(4)]))){
var statearr_58661_59965 = state_58642;
(statearr_58661_59965[(1)] = cljs.core.first((state_58642[(4)])));

} else {
throw ex__58213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59966 = state_58642;
state_58642 = G__59966;
continue;
} else {
return ret_value__58211__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__58210__auto__ = function(state_58642){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__58210__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__58210__auto____1.call(this,state_58642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__58210__auto____0;
cljs$core$async$reduce_$_state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__58210__auto____1;
return cljs$core$async$reduce_$_state_machine__58210__auto__;
})()
})();
var state__58247__auto__ = (function (){var statearr_58662 = f__58246__auto__();
(statearr_58662[(6)] = c__58245__auto__);

return statearr_58662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58247__auto__);
}));

return c__58245__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__58245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58246__auto__ = (function (){var switch__58209__auto__ = (function (state_58668){
var state_val_58669 = (state_58668[(1)]);
if((state_val_58669 === (1))){
var inst_58663 = cljs.core.async.reduce(f__$1,init,ch);
var state_58668__$1 = state_58668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58668__$1,(2),inst_58663);
} else {
if((state_val_58669 === (2))){
var inst_58665 = (state_58668[(2)]);
var inst_58666 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_58665) : f__$1.call(null,inst_58665));
var state_58668__$1 = state_58668;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58668__$1,inst_58666);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__58210__auto__ = null;
var cljs$core$async$transduce_$_state_machine__58210__auto____0 = (function (){
var statearr_58670 = [null,null,null,null,null,null,null];
(statearr_58670[(0)] = cljs$core$async$transduce_$_state_machine__58210__auto__);

(statearr_58670[(1)] = (1));

return statearr_58670;
});
var cljs$core$async$transduce_$_state_machine__58210__auto____1 = (function (state_58668){
while(true){
var ret_value__58211__auto__ = (function (){try{while(true){
var result__58212__auto__ = switch__58209__auto__(state_58668);
if(cljs.core.keyword_identical_QMARK_(result__58212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58212__auto__;
}
break;
}
}catch (e58671){var ex__58213__auto__ = e58671;
var statearr_58672_59967 = state_58668;
(statearr_58672_59967[(2)] = ex__58213__auto__);


if(cljs.core.seq((state_58668[(4)]))){
var statearr_58673_59968 = state_58668;
(statearr_58673_59968[(1)] = cljs.core.first((state_58668[(4)])));

} else {
throw ex__58213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59969 = state_58668;
state_58668 = G__59969;
continue;
} else {
return ret_value__58211__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__58210__auto__ = function(state_58668){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__58210__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__58210__auto____1.call(this,state_58668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__58210__auto____0;
cljs$core$async$transduce_$_state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__58210__auto____1;
return cljs$core$async$transduce_$_state_machine__58210__auto__;
})()
})();
var state__58247__auto__ = (function (){var statearr_58674 = f__58246__auto__();
(statearr_58674[(6)] = c__58245__auto__);

return statearr_58674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58247__auto__);
}));

return c__58245__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__58676 = arguments.length;
switch (G__58676) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__58245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58246__auto__ = (function (){var switch__58209__auto__ = (function (state_58701){
var state_val_58702 = (state_58701[(1)]);
if((state_val_58702 === (7))){
var inst_58683 = (state_58701[(2)]);
var state_58701__$1 = state_58701;
var statearr_58703_59971 = state_58701__$1;
(statearr_58703_59971[(2)] = inst_58683);

(statearr_58703_59971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58702 === (1))){
var inst_58677 = cljs.core.seq(coll);
var inst_58678 = inst_58677;
var state_58701__$1 = (function (){var statearr_58704 = state_58701;
(statearr_58704[(7)] = inst_58678);

return statearr_58704;
})();
var statearr_58705_59972 = state_58701__$1;
(statearr_58705_59972[(2)] = null);

(statearr_58705_59972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58702 === (4))){
var inst_58678 = (state_58701[(7)]);
var inst_58681 = cljs.core.first(inst_58678);
var state_58701__$1 = state_58701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58701__$1,(7),ch,inst_58681);
} else {
if((state_val_58702 === (13))){
var inst_58695 = (state_58701[(2)]);
var state_58701__$1 = state_58701;
var statearr_58706_59973 = state_58701__$1;
(statearr_58706_59973[(2)] = inst_58695);

(statearr_58706_59973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58702 === (6))){
var inst_58686 = (state_58701[(2)]);
var state_58701__$1 = state_58701;
if(cljs.core.truth_(inst_58686)){
var statearr_58707_59974 = state_58701__$1;
(statearr_58707_59974[(1)] = (8));

} else {
var statearr_58708_59975 = state_58701__$1;
(statearr_58708_59975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58702 === (3))){
var inst_58699 = (state_58701[(2)]);
var state_58701__$1 = state_58701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58701__$1,inst_58699);
} else {
if((state_val_58702 === (12))){
var state_58701__$1 = state_58701;
var statearr_58709_59976 = state_58701__$1;
(statearr_58709_59976[(2)] = null);

(statearr_58709_59976[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58702 === (2))){
var inst_58678 = (state_58701[(7)]);
var state_58701__$1 = state_58701;
if(cljs.core.truth_(inst_58678)){
var statearr_58710_59977 = state_58701__$1;
(statearr_58710_59977[(1)] = (4));

} else {
var statearr_58711_59978 = state_58701__$1;
(statearr_58711_59978[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58702 === (11))){
var inst_58692 = cljs.core.async.close_BANG_(ch);
var state_58701__$1 = state_58701;
var statearr_58712_59979 = state_58701__$1;
(statearr_58712_59979[(2)] = inst_58692);

(statearr_58712_59979[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58702 === (9))){
var state_58701__$1 = state_58701;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58713_59980 = state_58701__$1;
(statearr_58713_59980[(1)] = (11));

} else {
var statearr_58714_59981 = state_58701__$1;
(statearr_58714_59981[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58702 === (5))){
var inst_58678 = (state_58701[(7)]);
var state_58701__$1 = state_58701;
var statearr_58715_59982 = state_58701__$1;
(statearr_58715_59982[(2)] = inst_58678);

(statearr_58715_59982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58702 === (10))){
var inst_58697 = (state_58701[(2)]);
var state_58701__$1 = state_58701;
var statearr_58716_59983 = state_58701__$1;
(statearr_58716_59983[(2)] = inst_58697);

(statearr_58716_59983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58702 === (8))){
var inst_58678 = (state_58701[(7)]);
var inst_58688 = cljs.core.next(inst_58678);
var inst_58678__$1 = inst_58688;
var state_58701__$1 = (function (){var statearr_58717 = state_58701;
(statearr_58717[(7)] = inst_58678__$1);

return statearr_58717;
})();
var statearr_58718_59984 = state_58701__$1;
(statearr_58718_59984[(2)] = null);

(statearr_58718_59984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58210__auto__ = null;
var cljs$core$async$state_machine__58210__auto____0 = (function (){
var statearr_58719 = [null,null,null,null,null,null,null,null];
(statearr_58719[(0)] = cljs$core$async$state_machine__58210__auto__);

(statearr_58719[(1)] = (1));

return statearr_58719;
});
var cljs$core$async$state_machine__58210__auto____1 = (function (state_58701){
while(true){
var ret_value__58211__auto__ = (function (){try{while(true){
var result__58212__auto__ = switch__58209__auto__(state_58701);
if(cljs.core.keyword_identical_QMARK_(result__58212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58212__auto__;
}
break;
}
}catch (e58720){var ex__58213__auto__ = e58720;
var statearr_58721_59985 = state_58701;
(statearr_58721_59985[(2)] = ex__58213__auto__);


if(cljs.core.seq((state_58701[(4)]))){
var statearr_58722_59986 = state_58701;
(statearr_58722_59986[(1)] = cljs.core.first((state_58701[(4)])));

} else {
throw ex__58213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59987 = state_58701;
state_58701 = G__59987;
continue;
} else {
return ret_value__58211__auto__;
}
break;
}
});
cljs$core$async$state_machine__58210__auto__ = function(state_58701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58210__auto____1.call(this,state_58701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58210__auto____0;
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58210__auto____1;
return cljs$core$async$state_machine__58210__auto__;
})()
})();
var state__58247__auto__ = (function (){var statearr_58723 = f__58246__auto__();
(statearr_58723[(6)] = c__58245__auto__);

return statearr_58723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58247__auto__);
}));

return c__58245__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__58725 = arguments.length;
switch (G__58725) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_59989 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_59989(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_59990 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_59990(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_59991 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_59991(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_59992 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_59992(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58726 = (function (ch,cs,meta58727){
this.ch = ch;
this.cs = cs;
this.meta58727 = meta58727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58728,meta58727__$1){
var self__ = this;
var _58728__$1 = this;
return (new cljs.core.async.t_cljs$core$async58726(self__.ch,self__.cs,meta58727__$1));
}));

(cljs.core.async.t_cljs$core$async58726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58728){
var self__ = this;
var _58728__$1 = this;
return self__.meta58727;
}));

(cljs.core.async.t_cljs$core$async58726.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58726.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async58726.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58726.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async58726.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async58726.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async58726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta58727","meta58727",937589396,null)], null);
}));

(cljs.core.async.t_cljs$core$async58726.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58726");

(cljs.core.async.t_cljs$core$async58726.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58726");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58726.
 */
cljs.core.async.__GT_t_cljs$core$async58726 = (function cljs$core$async$mult_$___GT_t_cljs$core$async58726(ch__$1,cs__$1,meta58727){
return (new cljs.core.async.t_cljs$core$async58726(ch__$1,cs__$1,meta58727));
});

}

return (new cljs.core.async.t_cljs$core$async58726(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__58245__auto___59993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58246__auto__ = (function (){var switch__58209__auto__ = (function (state_58861){
var state_val_58862 = (state_58861[(1)]);
if((state_val_58862 === (7))){
var inst_58857 = (state_58861[(2)]);
var state_58861__$1 = state_58861;
var statearr_58863_59994 = state_58861__$1;
(statearr_58863_59994[(2)] = inst_58857);

(statearr_58863_59994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (20))){
var inst_58762 = (state_58861[(7)]);
var inst_58774 = cljs.core.first(inst_58762);
var inst_58775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58774,(0),null);
var inst_58776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58774,(1),null);
var state_58861__$1 = (function (){var statearr_58864 = state_58861;
(statearr_58864[(8)] = inst_58775);

return statearr_58864;
})();
if(cljs.core.truth_(inst_58776)){
var statearr_58865_59995 = state_58861__$1;
(statearr_58865_59995[(1)] = (22));

} else {
var statearr_58866_59996 = state_58861__$1;
(statearr_58866_59996[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (27))){
var inst_58806 = (state_58861[(9)]);
var inst_58731 = (state_58861[(10)]);
var inst_58804 = (state_58861[(11)]);
var inst_58811 = (state_58861[(12)]);
var inst_58811__$1 = cljs.core._nth(inst_58804,inst_58806);
var inst_58812 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_58811__$1,inst_58731,done);
var state_58861__$1 = (function (){var statearr_58867 = state_58861;
(statearr_58867[(12)] = inst_58811__$1);

return statearr_58867;
})();
if(cljs.core.truth_(inst_58812)){
var statearr_58868_59997 = state_58861__$1;
(statearr_58868_59997[(1)] = (30));

} else {
var statearr_58869_59998 = state_58861__$1;
(statearr_58869_59998[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (1))){
var state_58861__$1 = state_58861;
var statearr_58870_59999 = state_58861__$1;
(statearr_58870_59999[(2)] = null);

(statearr_58870_59999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (24))){
var inst_58762 = (state_58861[(7)]);
var inst_58781 = (state_58861[(2)]);
var inst_58782 = cljs.core.next(inst_58762);
var inst_58740 = inst_58782;
var inst_58741 = null;
var inst_58742 = (0);
var inst_58743 = (0);
var state_58861__$1 = (function (){var statearr_58871 = state_58861;
(statearr_58871[(13)] = inst_58781);

(statearr_58871[(14)] = inst_58742);

(statearr_58871[(15)] = inst_58741);

(statearr_58871[(16)] = inst_58740);

(statearr_58871[(17)] = inst_58743);

return statearr_58871;
})();
var statearr_58872_60000 = state_58861__$1;
(statearr_58872_60000[(2)] = null);

(statearr_58872_60000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (39))){
var state_58861__$1 = state_58861;
var statearr_58876_60001 = state_58861__$1;
(statearr_58876_60001[(2)] = null);

(statearr_58876_60001[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (4))){
var inst_58731 = (state_58861[(10)]);
var inst_58731__$1 = (state_58861[(2)]);
var inst_58732 = (inst_58731__$1 == null);
var state_58861__$1 = (function (){var statearr_58877 = state_58861;
(statearr_58877[(10)] = inst_58731__$1);

return statearr_58877;
})();
if(cljs.core.truth_(inst_58732)){
var statearr_58878_60002 = state_58861__$1;
(statearr_58878_60002[(1)] = (5));

} else {
var statearr_58879_60003 = state_58861__$1;
(statearr_58879_60003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (15))){
var inst_58742 = (state_58861[(14)]);
var inst_58741 = (state_58861[(15)]);
var inst_58740 = (state_58861[(16)]);
var inst_58743 = (state_58861[(17)]);
var inst_58758 = (state_58861[(2)]);
var inst_58759 = (inst_58743 + (1));
var tmp58873 = inst_58742;
var tmp58874 = inst_58741;
var tmp58875 = inst_58740;
var inst_58740__$1 = tmp58875;
var inst_58741__$1 = tmp58874;
var inst_58742__$1 = tmp58873;
var inst_58743__$1 = inst_58759;
var state_58861__$1 = (function (){var statearr_58880 = state_58861;
(statearr_58880[(14)] = inst_58742__$1);

(statearr_58880[(15)] = inst_58741__$1);

(statearr_58880[(16)] = inst_58740__$1);

(statearr_58880[(17)] = inst_58743__$1);

(statearr_58880[(18)] = inst_58758);

return statearr_58880;
})();
var statearr_58881_60007 = state_58861__$1;
(statearr_58881_60007[(2)] = null);

(statearr_58881_60007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (21))){
var inst_58785 = (state_58861[(2)]);
var state_58861__$1 = state_58861;
var statearr_58885_60013 = state_58861__$1;
(statearr_58885_60013[(2)] = inst_58785);

(statearr_58885_60013[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (31))){
var inst_58811 = (state_58861[(12)]);
var inst_58815 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_58811);
var state_58861__$1 = state_58861;
var statearr_58886_60016 = state_58861__$1;
(statearr_58886_60016[(2)] = inst_58815);

(statearr_58886_60016[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (32))){
var inst_58806 = (state_58861[(9)]);
var inst_58803 = (state_58861[(19)]);
var inst_58804 = (state_58861[(11)]);
var inst_58805 = (state_58861[(20)]);
var inst_58817 = (state_58861[(2)]);
var inst_58818 = (inst_58806 + (1));
var tmp58882 = inst_58803;
var tmp58883 = inst_58804;
var tmp58884 = inst_58805;
var inst_58803__$1 = tmp58882;
var inst_58804__$1 = tmp58883;
var inst_58805__$1 = tmp58884;
var inst_58806__$1 = inst_58818;
var state_58861__$1 = (function (){var statearr_58887 = state_58861;
(statearr_58887[(9)] = inst_58806__$1);

(statearr_58887[(21)] = inst_58817);

(statearr_58887[(19)] = inst_58803__$1);

(statearr_58887[(11)] = inst_58804__$1);

(statearr_58887[(20)] = inst_58805__$1);

return statearr_58887;
})();
var statearr_58888_60019 = state_58861__$1;
(statearr_58888_60019[(2)] = null);

(statearr_58888_60019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (40))){
var inst_58830 = (state_58861[(22)]);
var inst_58834 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_58830);
var state_58861__$1 = state_58861;
var statearr_58889_60022 = state_58861__$1;
(statearr_58889_60022[(2)] = inst_58834);

(statearr_58889_60022[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (33))){
var inst_58821 = (state_58861[(23)]);
var inst_58823 = cljs.core.chunked_seq_QMARK_(inst_58821);
var state_58861__$1 = state_58861;
if(inst_58823){
var statearr_58890_60023 = state_58861__$1;
(statearr_58890_60023[(1)] = (36));

} else {
var statearr_58891_60024 = state_58861__$1;
(statearr_58891_60024[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (13))){
var inst_58752 = (state_58861[(24)]);
var inst_58755 = cljs.core.async.close_BANG_(inst_58752);
var state_58861__$1 = state_58861;
var statearr_58892_60027 = state_58861__$1;
(statearr_58892_60027[(2)] = inst_58755);

(statearr_58892_60027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (22))){
var inst_58775 = (state_58861[(8)]);
var inst_58778 = cljs.core.async.close_BANG_(inst_58775);
var state_58861__$1 = state_58861;
var statearr_58893_60028 = state_58861__$1;
(statearr_58893_60028[(2)] = inst_58778);

(statearr_58893_60028[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (36))){
var inst_58821 = (state_58861[(23)]);
var inst_58825 = cljs.core.chunk_first(inst_58821);
var inst_58826 = cljs.core.chunk_rest(inst_58821);
var inst_58827 = cljs.core.count(inst_58825);
var inst_58803 = inst_58826;
var inst_58804 = inst_58825;
var inst_58805 = inst_58827;
var inst_58806 = (0);
var state_58861__$1 = (function (){var statearr_58894 = state_58861;
(statearr_58894[(9)] = inst_58806);

(statearr_58894[(19)] = inst_58803);

(statearr_58894[(11)] = inst_58804);

(statearr_58894[(20)] = inst_58805);

return statearr_58894;
})();
var statearr_58895_60029 = state_58861__$1;
(statearr_58895_60029[(2)] = null);

(statearr_58895_60029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (41))){
var inst_58821 = (state_58861[(23)]);
var inst_58836 = (state_58861[(2)]);
var inst_58837 = cljs.core.next(inst_58821);
var inst_58803 = inst_58837;
var inst_58804 = null;
var inst_58805 = (0);
var inst_58806 = (0);
var state_58861__$1 = (function (){var statearr_58896 = state_58861;
(statearr_58896[(9)] = inst_58806);

(statearr_58896[(19)] = inst_58803);

(statearr_58896[(11)] = inst_58804);

(statearr_58896[(20)] = inst_58805);

(statearr_58896[(25)] = inst_58836);

return statearr_58896;
})();
var statearr_58897_60031 = state_58861__$1;
(statearr_58897_60031[(2)] = null);

(statearr_58897_60031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (43))){
var state_58861__$1 = state_58861;
var statearr_58898_60032 = state_58861__$1;
(statearr_58898_60032[(2)] = null);

(statearr_58898_60032[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (29))){
var inst_58845 = (state_58861[(2)]);
var state_58861__$1 = state_58861;
var statearr_58899_60033 = state_58861__$1;
(statearr_58899_60033[(2)] = inst_58845);

(statearr_58899_60033[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (44))){
var inst_58854 = (state_58861[(2)]);
var state_58861__$1 = (function (){var statearr_58900 = state_58861;
(statearr_58900[(26)] = inst_58854);

return statearr_58900;
})();
var statearr_58901_60034 = state_58861__$1;
(statearr_58901_60034[(2)] = null);

(statearr_58901_60034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (6))){
var inst_58795 = (state_58861[(27)]);
var inst_58794 = cljs.core.deref(cs);
var inst_58795__$1 = cljs.core.keys(inst_58794);
var inst_58796 = cljs.core.count(inst_58795__$1);
var inst_58797 = cljs.core.reset_BANG_(dctr,inst_58796);
var inst_58802 = cljs.core.seq(inst_58795__$1);
var inst_58803 = inst_58802;
var inst_58804 = null;
var inst_58805 = (0);
var inst_58806 = (0);
var state_58861__$1 = (function (){var statearr_58902 = state_58861;
(statearr_58902[(28)] = inst_58797);

(statearr_58902[(9)] = inst_58806);

(statearr_58902[(27)] = inst_58795__$1);

(statearr_58902[(19)] = inst_58803);

(statearr_58902[(11)] = inst_58804);

(statearr_58902[(20)] = inst_58805);

return statearr_58902;
})();
var statearr_58903_60035 = state_58861__$1;
(statearr_58903_60035[(2)] = null);

(statearr_58903_60035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (28))){
var inst_58803 = (state_58861[(19)]);
var inst_58821 = (state_58861[(23)]);
var inst_58821__$1 = cljs.core.seq(inst_58803);
var state_58861__$1 = (function (){var statearr_58904 = state_58861;
(statearr_58904[(23)] = inst_58821__$1);

return statearr_58904;
})();
if(inst_58821__$1){
var statearr_58905_60036 = state_58861__$1;
(statearr_58905_60036[(1)] = (33));

} else {
var statearr_58906_60037 = state_58861__$1;
(statearr_58906_60037[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (25))){
var inst_58806 = (state_58861[(9)]);
var inst_58805 = (state_58861[(20)]);
var inst_58808 = (inst_58806 < inst_58805);
var inst_58809 = inst_58808;
var state_58861__$1 = state_58861;
if(cljs.core.truth_(inst_58809)){
var statearr_58907_60038 = state_58861__$1;
(statearr_58907_60038[(1)] = (27));

} else {
var statearr_58908_60039 = state_58861__$1;
(statearr_58908_60039[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (34))){
var state_58861__$1 = state_58861;
var statearr_58909_60040 = state_58861__$1;
(statearr_58909_60040[(2)] = null);

(statearr_58909_60040[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (17))){
var state_58861__$1 = state_58861;
var statearr_58910_60041 = state_58861__$1;
(statearr_58910_60041[(2)] = null);

(statearr_58910_60041[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (3))){
var inst_58859 = (state_58861[(2)]);
var state_58861__$1 = state_58861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58861__$1,inst_58859);
} else {
if((state_val_58862 === (12))){
var inst_58790 = (state_58861[(2)]);
var state_58861__$1 = state_58861;
var statearr_58911_60042 = state_58861__$1;
(statearr_58911_60042[(2)] = inst_58790);

(statearr_58911_60042[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (2))){
var state_58861__$1 = state_58861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58861__$1,(4),ch);
} else {
if((state_val_58862 === (23))){
var state_58861__$1 = state_58861;
var statearr_58912_60043 = state_58861__$1;
(statearr_58912_60043[(2)] = null);

(statearr_58912_60043[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (35))){
var inst_58843 = (state_58861[(2)]);
var state_58861__$1 = state_58861;
var statearr_58913_60044 = state_58861__$1;
(statearr_58913_60044[(2)] = inst_58843);

(statearr_58913_60044[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (19))){
var inst_58762 = (state_58861[(7)]);
var inst_58766 = cljs.core.chunk_first(inst_58762);
var inst_58767 = cljs.core.chunk_rest(inst_58762);
var inst_58768 = cljs.core.count(inst_58766);
var inst_58740 = inst_58767;
var inst_58741 = inst_58766;
var inst_58742 = inst_58768;
var inst_58743 = (0);
var state_58861__$1 = (function (){var statearr_58914 = state_58861;
(statearr_58914[(14)] = inst_58742);

(statearr_58914[(15)] = inst_58741);

(statearr_58914[(16)] = inst_58740);

(statearr_58914[(17)] = inst_58743);

return statearr_58914;
})();
var statearr_58915_60045 = state_58861__$1;
(statearr_58915_60045[(2)] = null);

(statearr_58915_60045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (11))){
var inst_58762 = (state_58861[(7)]);
var inst_58740 = (state_58861[(16)]);
var inst_58762__$1 = cljs.core.seq(inst_58740);
var state_58861__$1 = (function (){var statearr_58916 = state_58861;
(statearr_58916[(7)] = inst_58762__$1);

return statearr_58916;
})();
if(inst_58762__$1){
var statearr_58917_60046 = state_58861__$1;
(statearr_58917_60046[(1)] = (16));

} else {
var statearr_58918_60047 = state_58861__$1;
(statearr_58918_60047[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (9))){
var inst_58792 = (state_58861[(2)]);
var state_58861__$1 = state_58861;
var statearr_58919_60048 = state_58861__$1;
(statearr_58919_60048[(2)] = inst_58792);

(statearr_58919_60048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (5))){
var inst_58738 = cljs.core.deref(cs);
var inst_58739 = cljs.core.seq(inst_58738);
var inst_58740 = inst_58739;
var inst_58741 = null;
var inst_58742 = (0);
var inst_58743 = (0);
var state_58861__$1 = (function (){var statearr_58920 = state_58861;
(statearr_58920[(14)] = inst_58742);

(statearr_58920[(15)] = inst_58741);

(statearr_58920[(16)] = inst_58740);

(statearr_58920[(17)] = inst_58743);

return statearr_58920;
})();
var statearr_58921_60049 = state_58861__$1;
(statearr_58921_60049[(2)] = null);

(statearr_58921_60049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (14))){
var state_58861__$1 = state_58861;
var statearr_58922_60050 = state_58861__$1;
(statearr_58922_60050[(2)] = null);

(statearr_58922_60050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (45))){
var inst_58851 = (state_58861[(2)]);
var state_58861__$1 = state_58861;
var statearr_58923_60051 = state_58861__$1;
(statearr_58923_60051[(2)] = inst_58851);

(statearr_58923_60051[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (26))){
var inst_58795 = (state_58861[(27)]);
var inst_58847 = (state_58861[(2)]);
var inst_58848 = cljs.core.seq(inst_58795);
var state_58861__$1 = (function (){var statearr_58924 = state_58861;
(statearr_58924[(29)] = inst_58847);

return statearr_58924;
})();
if(inst_58848){
var statearr_58925_60052 = state_58861__$1;
(statearr_58925_60052[(1)] = (42));

} else {
var statearr_58926_60053 = state_58861__$1;
(statearr_58926_60053[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (16))){
var inst_58762 = (state_58861[(7)]);
var inst_58764 = cljs.core.chunked_seq_QMARK_(inst_58762);
var state_58861__$1 = state_58861;
if(inst_58764){
var statearr_58927_60054 = state_58861__$1;
(statearr_58927_60054[(1)] = (19));

} else {
var statearr_58928_60055 = state_58861__$1;
(statearr_58928_60055[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (38))){
var inst_58840 = (state_58861[(2)]);
var state_58861__$1 = state_58861;
var statearr_58929_60056 = state_58861__$1;
(statearr_58929_60056[(2)] = inst_58840);

(statearr_58929_60056[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (30))){
var state_58861__$1 = state_58861;
var statearr_58930_60057 = state_58861__$1;
(statearr_58930_60057[(2)] = null);

(statearr_58930_60057[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (10))){
var inst_58741 = (state_58861[(15)]);
var inst_58743 = (state_58861[(17)]);
var inst_58751 = cljs.core._nth(inst_58741,inst_58743);
var inst_58752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58751,(0),null);
var inst_58753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58751,(1),null);
var state_58861__$1 = (function (){var statearr_58931 = state_58861;
(statearr_58931[(24)] = inst_58752);

return statearr_58931;
})();
if(cljs.core.truth_(inst_58753)){
var statearr_58932_60058 = state_58861__$1;
(statearr_58932_60058[(1)] = (13));

} else {
var statearr_58933_60059 = state_58861__$1;
(statearr_58933_60059[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (18))){
var inst_58788 = (state_58861[(2)]);
var state_58861__$1 = state_58861;
var statearr_58934_60060 = state_58861__$1;
(statearr_58934_60060[(2)] = inst_58788);

(statearr_58934_60060[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (42))){
var state_58861__$1 = state_58861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58861__$1,(45),dchan);
} else {
if((state_val_58862 === (37))){
var inst_58731 = (state_58861[(10)]);
var inst_58821 = (state_58861[(23)]);
var inst_58830 = (state_58861[(22)]);
var inst_58830__$1 = cljs.core.first(inst_58821);
var inst_58831 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_58830__$1,inst_58731,done);
var state_58861__$1 = (function (){var statearr_58935 = state_58861;
(statearr_58935[(22)] = inst_58830__$1);

return statearr_58935;
})();
if(cljs.core.truth_(inst_58831)){
var statearr_58936_60061 = state_58861__$1;
(statearr_58936_60061[(1)] = (39));

} else {
var statearr_58937_60062 = state_58861__$1;
(statearr_58937_60062[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58862 === (8))){
var inst_58742 = (state_58861[(14)]);
var inst_58743 = (state_58861[(17)]);
var inst_58745 = (inst_58743 < inst_58742);
var inst_58746 = inst_58745;
var state_58861__$1 = state_58861;
if(cljs.core.truth_(inst_58746)){
var statearr_58938_60063 = state_58861__$1;
(statearr_58938_60063[(1)] = (10));

} else {
var statearr_58939_60064 = state_58861__$1;
(statearr_58939_60064[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__58210__auto__ = null;
var cljs$core$async$mult_$_state_machine__58210__auto____0 = (function (){
var statearr_58940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58940[(0)] = cljs$core$async$mult_$_state_machine__58210__auto__);

(statearr_58940[(1)] = (1));

return statearr_58940;
});
var cljs$core$async$mult_$_state_machine__58210__auto____1 = (function (state_58861){
while(true){
var ret_value__58211__auto__ = (function (){try{while(true){
var result__58212__auto__ = switch__58209__auto__(state_58861);
if(cljs.core.keyword_identical_QMARK_(result__58212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58212__auto__;
}
break;
}
}catch (e58941){var ex__58213__auto__ = e58941;
var statearr_58942_60067 = state_58861;
(statearr_58942_60067[(2)] = ex__58213__auto__);


if(cljs.core.seq((state_58861[(4)]))){
var statearr_58943_60068 = state_58861;
(statearr_58943_60068[(1)] = cljs.core.first((state_58861[(4)])));

} else {
throw ex__58213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60071 = state_58861;
state_58861 = G__60071;
continue;
} else {
return ret_value__58211__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__58210__auto__ = function(state_58861){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__58210__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__58210__auto____1.call(this,state_58861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__58210__auto____0;
cljs$core$async$mult_$_state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__58210__auto____1;
return cljs$core$async$mult_$_state_machine__58210__auto__;
})()
})();
var state__58247__auto__ = (function (){var statearr_58944 = f__58246__auto__();
(statearr_58944[(6)] = c__58245__auto___59993);

return statearr_58944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58247__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__58946 = arguments.length;
switch (G__58946) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_60073 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_60073(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_60076 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_60076(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_60079 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_60079(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_60085 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_60085(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_60086 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_60086(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60087 = arguments.length;
var i__4737__auto___60088 = (0);
while(true){
if((i__4737__auto___60088 < len__4736__auto___60087)){
args__4742__auto__.push((arguments[i__4737__auto___60088]));

var G__60089 = (i__4737__auto___60088 + (1));
i__4737__auto___60088 = G__60089;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__58951){
var map__58952 = p__58951;
var map__58952__$1 = (((((!((map__58952 == null))))?(((((map__58952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58952):map__58952);
var opts = map__58952__$1;
var statearr_58954_60090 = state;
(statearr_58954_60090[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_58955_60091 = state;
(statearr_58955_60091[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_58956_60092 = state;
(statearr_58956_60092[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq58947){
var G__58948 = cljs.core.first(seq58947);
var seq58947__$1 = cljs.core.next(seq58947);
var G__58949 = cljs.core.first(seq58947__$1);
var seq58947__$2 = cljs.core.next(seq58947__$1);
var G__58950 = cljs.core.first(seq58947__$2);
var seq58947__$3 = cljs.core.next(seq58947__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58948,G__58949,G__58950,seq58947__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58957 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58957 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta58958){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta58958 = meta58958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58959,meta58958__$1){
var self__ = this;
var _58959__$1 = this;
return (new cljs.core.async.t_cljs$core$async58957(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta58958__$1));
}));

(cljs.core.async.t_cljs$core$async58957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58959){
var self__ = this;
var _58959__$1 = this;
return self__.meta58958;
}));

(cljs.core.async.t_cljs$core$async58957.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58957.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async58957.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58957.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58957.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58957.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58957.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58957.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta58958","meta58958",-1487795728,null)], null);
}));

(cljs.core.async.t_cljs$core$async58957.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58957");

(cljs.core.async.t_cljs$core$async58957.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58957");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58957.
 */
cljs.core.async.__GT_t_cljs$core$async58957 = (function cljs$core$async$mix_$___GT_t_cljs$core$async58957(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta58958){
return (new cljs.core.async.t_cljs$core$async58957(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta58958));
});

}

return (new cljs.core.async.t_cljs$core$async58957(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58245__auto___60110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58246__auto__ = (function (){var switch__58209__auto__ = (function (state_59061){
var state_val_59062 = (state_59061[(1)]);
if((state_val_59062 === (7))){
var inst_58976 = (state_59061[(2)]);
var state_59061__$1 = state_59061;
var statearr_59063_60111 = state_59061__$1;
(statearr_59063_60111[(2)] = inst_58976);

(statearr_59063_60111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (20))){
var inst_58988 = (state_59061[(7)]);
var state_59061__$1 = state_59061;
var statearr_59064_60112 = state_59061__$1;
(statearr_59064_60112[(2)] = inst_58988);

(statearr_59064_60112[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (27))){
var state_59061__$1 = state_59061;
var statearr_59065_60113 = state_59061__$1;
(statearr_59065_60113[(2)] = null);

(statearr_59065_60113[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (1))){
var inst_58963 = (state_59061[(8)]);
var inst_58963__$1 = calc_state();
var inst_58965 = (inst_58963__$1 == null);
var inst_58966 = cljs.core.not(inst_58965);
var state_59061__$1 = (function (){var statearr_59066 = state_59061;
(statearr_59066[(8)] = inst_58963__$1);

return statearr_59066;
})();
if(inst_58966){
var statearr_59067_60114 = state_59061__$1;
(statearr_59067_60114[(1)] = (2));

} else {
var statearr_59068_60115 = state_59061__$1;
(statearr_59068_60115[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (24))){
var inst_59021 = (state_59061[(9)]);
var inst_59035 = (state_59061[(10)]);
var inst_59012 = (state_59061[(11)]);
var inst_59035__$1 = (inst_59012.cljs$core$IFn$_invoke$arity$1 ? inst_59012.cljs$core$IFn$_invoke$arity$1(inst_59021) : inst_59012.call(null,inst_59021));
var state_59061__$1 = (function (){var statearr_59069 = state_59061;
(statearr_59069[(10)] = inst_59035__$1);

return statearr_59069;
})();
if(cljs.core.truth_(inst_59035__$1)){
var statearr_59070_60116 = state_59061__$1;
(statearr_59070_60116[(1)] = (29));

} else {
var statearr_59071_60117 = state_59061__$1;
(statearr_59071_60117[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (4))){
var inst_58979 = (state_59061[(2)]);
var state_59061__$1 = state_59061;
if(cljs.core.truth_(inst_58979)){
var statearr_59072_60118 = state_59061__$1;
(statearr_59072_60118[(1)] = (8));

} else {
var statearr_59073_60119 = state_59061__$1;
(statearr_59073_60119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (15))){
var inst_59006 = (state_59061[(2)]);
var state_59061__$1 = state_59061;
if(cljs.core.truth_(inst_59006)){
var statearr_59074_60120 = state_59061__$1;
(statearr_59074_60120[(1)] = (19));

} else {
var statearr_59075_60121 = state_59061__$1;
(statearr_59075_60121[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (21))){
var inst_59011 = (state_59061[(12)]);
var inst_59011__$1 = (state_59061[(2)]);
var inst_59012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59011__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59011__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59011__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_59061__$1 = (function (){var statearr_59076 = state_59061;
(statearr_59076[(12)] = inst_59011__$1);

(statearr_59076[(13)] = inst_59013);

(statearr_59076[(11)] = inst_59012);

return statearr_59076;
})();
return cljs.core.async.ioc_alts_BANG_(state_59061__$1,(22),inst_59014);
} else {
if((state_val_59062 === (31))){
var inst_59043 = (state_59061[(2)]);
var state_59061__$1 = state_59061;
if(cljs.core.truth_(inst_59043)){
var statearr_59077_60124 = state_59061__$1;
(statearr_59077_60124[(1)] = (32));

} else {
var statearr_59078_60125 = state_59061__$1;
(statearr_59078_60125[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (32))){
var inst_59020 = (state_59061[(14)]);
var state_59061__$1 = state_59061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59061__$1,(35),out,inst_59020);
} else {
if((state_val_59062 === (33))){
var inst_59011 = (state_59061[(12)]);
var inst_58988 = inst_59011;
var state_59061__$1 = (function (){var statearr_59079 = state_59061;
(statearr_59079[(7)] = inst_58988);

return statearr_59079;
})();
var statearr_59080_60127 = state_59061__$1;
(statearr_59080_60127[(2)] = null);

(statearr_59080_60127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (13))){
var inst_58988 = (state_59061[(7)]);
var inst_58995 = inst_58988.cljs$lang$protocol_mask$partition0$;
var inst_58996 = (inst_58995 & (64));
var inst_58997 = inst_58988.cljs$core$ISeq$;
var inst_58998 = (cljs.core.PROTOCOL_SENTINEL === inst_58997);
var inst_58999 = ((inst_58996) || (inst_58998));
var state_59061__$1 = state_59061;
if(cljs.core.truth_(inst_58999)){
var statearr_59081_60128 = state_59061__$1;
(statearr_59081_60128[(1)] = (16));

} else {
var statearr_59082_60129 = state_59061__$1;
(statearr_59082_60129[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (22))){
var inst_59020 = (state_59061[(14)]);
var inst_59021 = (state_59061[(9)]);
var inst_59019 = (state_59061[(2)]);
var inst_59020__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59019,(0),null);
var inst_59021__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59019,(1),null);
var inst_59022 = (inst_59020__$1 == null);
var inst_59023 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59021__$1,change);
var inst_59024 = ((inst_59022) || (inst_59023));
var state_59061__$1 = (function (){var statearr_59083 = state_59061;
(statearr_59083[(14)] = inst_59020__$1);

(statearr_59083[(9)] = inst_59021__$1);

return statearr_59083;
})();
if(cljs.core.truth_(inst_59024)){
var statearr_59084_60131 = state_59061__$1;
(statearr_59084_60131[(1)] = (23));

} else {
var statearr_59085_60132 = state_59061__$1;
(statearr_59085_60132[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (36))){
var inst_59011 = (state_59061[(12)]);
var inst_58988 = inst_59011;
var state_59061__$1 = (function (){var statearr_59086 = state_59061;
(statearr_59086[(7)] = inst_58988);

return statearr_59086;
})();
var statearr_59087_60133 = state_59061__$1;
(statearr_59087_60133[(2)] = null);

(statearr_59087_60133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (29))){
var inst_59035 = (state_59061[(10)]);
var state_59061__$1 = state_59061;
var statearr_59088_60134 = state_59061__$1;
(statearr_59088_60134[(2)] = inst_59035);

(statearr_59088_60134[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (6))){
var state_59061__$1 = state_59061;
var statearr_59089_60140 = state_59061__$1;
(statearr_59089_60140[(2)] = false);

(statearr_59089_60140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (28))){
var inst_59031 = (state_59061[(2)]);
var inst_59032 = calc_state();
var inst_58988 = inst_59032;
var state_59061__$1 = (function (){var statearr_59090 = state_59061;
(statearr_59090[(15)] = inst_59031);

(statearr_59090[(7)] = inst_58988);

return statearr_59090;
})();
var statearr_59091_60144 = state_59061__$1;
(statearr_59091_60144[(2)] = null);

(statearr_59091_60144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (25))){
var inst_59057 = (state_59061[(2)]);
var state_59061__$1 = state_59061;
var statearr_59092_60149 = state_59061__$1;
(statearr_59092_60149[(2)] = inst_59057);

(statearr_59092_60149[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (34))){
var inst_59055 = (state_59061[(2)]);
var state_59061__$1 = state_59061;
var statearr_59093_60152 = state_59061__$1;
(statearr_59093_60152[(2)] = inst_59055);

(statearr_59093_60152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (17))){
var state_59061__$1 = state_59061;
var statearr_59094_60153 = state_59061__$1;
(statearr_59094_60153[(2)] = false);

(statearr_59094_60153[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (3))){
var state_59061__$1 = state_59061;
var statearr_59095_60154 = state_59061__$1;
(statearr_59095_60154[(2)] = false);

(statearr_59095_60154[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (12))){
var inst_59059 = (state_59061[(2)]);
var state_59061__$1 = state_59061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59061__$1,inst_59059);
} else {
if((state_val_59062 === (2))){
var inst_58963 = (state_59061[(8)]);
var inst_58968 = inst_58963.cljs$lang$protocol_mask$partition0$;
var inst_58969 = (inst_58968 & (64));
var inst_58970 = inst_58963.cljs$core$ISeq$;
var inst_58971 = (cljs.core.PROTOCOL_SENTINEL === inst_58970);
var inst_58972 = ((inst_58969) || (inst_58971));
var state_59061__$1 = state_59061;
if(cljs.core.truth_(inst_58972)){
var statearr_59096_60161 = state_59061__$1;
(statearr_59096_60161[(1)] = (5));

} else {
var statearr_59097_60163 = state_59061__$1;
(statearr_59097_60163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (23))){
var inst_59020 = (state_59061[(14)]);
var inst_59026 = (inst_59020 == null);
var state_59061__$1 = state_59061;
if(cljs.core.truth_(inst_59026)){
var statearr_59098_60169 = state_59061__$1;
(statearr_59098_60169[(1)] = (26));

} else {
var statearr_59099_60170 = state_59061__$1;
(statearr_59099_60170[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (35))){
var inst_59046 = (state_59061[(2)]);
var state_59061__$1 = state_59061;
if(cljs.core.truth_(inst_59046)){
var statearr_59100_60171 = state_59061__$1;
(statearr_59100_60171[(1)] = (36));

} else {
var statearr_59101_60172 = state_59061__$1;
(statearr_59101_60172[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (19))){
var inst_58988 = (state_59061[(7)]);
var inst_59008 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58988);
var state_59061__$1 = state_59061;
var statearr_59102_60173 = state_59061__$1;
(statearr_59102_60173[(2)] = inst_59008);

(statearr_59102_60173[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (11))){
var inst_58988 = (state_59061[(7)]);
var inst_58992 = (inst_58988 == null);
var inst_58993 = cljs.core.not(inst_58992);
var state_59061__$1 = state_59061;
if(inst_58993){
var statearr_59103_60174 = state_59061__$1;
(statearr_59103_60174[(1)] = (13));

} else {
var statearr_59104_60175 = state_59061__$1;
(statearr_59104_60175[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (9))){
var inst_58963 = (state_59061[(8)]);
var state_59061__$1 = state_59061;
var statearr_59105_60176 = state_59061__$1;
(statearr_59105_60176[(2)] = inst_58963);

(statearr_59105_60176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (5))){
var state_59061__$1 = state_59061;
var statearr_59106_60177 = state_59061__$1;
(statearr_59106_60177[(2)] = true);

(statearr_59106_60177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (14))){
var state_59061__$1 = state_59061;
var statearr_59107_60178 = state_59061__$1;
(statearr_59107_60178[(2)] = false);

(statearr_59107_60178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (26))){
var inst_59021 = (state_59061[(9)]);
var inst_59028 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_59021);
var state_59061__$1 = state_59061;
var statearr_59108_60179 = state_59061__$1;
(statearr_59108_60179[(2)] = inst_59028);

(statearr_59108_60179[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (16))){
var state_59061__$1 = state_59061;
var statearr_59109_60180 = state_59061__$1;
(statearr_59109_60180[(2)] = true);

(statearr_59109_60180[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (38))){
var inst_59051 = (state_59061[(2)]);
var state_59061__$1 = state_59061;
var statearr_59110_60181 = state_59061__$1;
(statearr_59110_60181[(2)] = inst_59051);

(statearr_59110_60181[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (30))){
var inst_59021 = (state_59061[(9)]);
var inst_59013 = (state_59061[(13)]);
var inst_59012 = (state_59061[(11)]);
var inst_59038 = cljs.core.empty_QMARK_(inst_59012);
var inst_59039 = (inst_59013.cljs$core$IFn$_invoke$arity$1 ? inst_59013.cljs$core$IFn$_invoke$arity$1(inst_59021) : inst_59013.call(null,inst_59021));
var inst_59040 = cljs.core.not(inst_59039);
var inst_59041 = ((inst_59038) && (inst_59040));
var state_59061__$1 = state_59061;
var statearr_59111_60182 = state_59061__$1;
(statearr_59111_60182[(2)] = inst_59041);

(statearr_59111_60182[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (10))){
var inst_58963 = (state_59061[(8)]);
var inst_58984 = (state_59061[(2)]);
var inst_58985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58984,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_58986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58984,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_58987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58984,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_58988 = inst_58963;
var state_59061__$1 = (function (){var statearr_59112 = state_59061;
(statearr_59112[(16)] = inst_58986);

(statearr_59112[(17)] = inst_58985);

(statearr_59112[(7)] = inst_58988);

(statearr_59112[(18)] = inst_58987);

return statearr_59112;
})();
var statearr_59113_60183 = state_59061__$1;
(statearr_59113_60183[(2)] = null);

(statearr_59113_60183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (18))){
var inst_59003 = (state_59061[(2)]);
var state_59061__$1 = state_59061;
var statearr_59114_60184 = state_59061__$1;
(statearr_59114_60184[(2)] = inst_59003);

(statearr_59114_60184[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (37))){
var state_59061__$1 = state_59061;
var statearr_59115_60185 = state_59061__$1;
(statearr_59115_60185[(2)] = null);

(statearr_59115_60185[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59062 === (8))){
var inst_58963 = (state_59061[(8)]);
var inst_58981 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58963);
var state_59061__$1 = state_59061;
var statearr_59116_60186 = state_59061__$1;
(statearr_59116_60186[(2)] = inst_58981);

(statearr_59116_60186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__58210__auto__ = null;
var cljs$core$async$mix_$_state_machine__58210__auto____0 = (function (){
var statearr_59117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59117[(0)] = cljs$core$async$mix_$_state_machine__58210__auto__);

(statearr_59117[(1)] = (1));

return statearr_59117;
});
var cljs$core$async$mix_$_state_machine__58210__auto____1 = (function (state_59061){
while(true){
var ret_value__58211__auto__ = (function (){try{while(true){
var result__58212__auto__ = switch__58209__auto__(state_59061);
if(cljs.core.keyword_identical_QMARK_(result__58212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58212__auto__;
}
break;
}
}catch (e59118){var ex__58213__auto__ = e59118;
var statearr_59119_60187 = state_59061;
(statearr_59119_60187[(2)] = ex__58213__auto__);


if(cljs.core.seq((state_59061[(4)]))){
var statearr_59120_60188 = state_59061;
(statearr_59120_60188[(1)] = cljs.core.first((state_59061[(4)])));

} else {
throw ex__58213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60189 = state_59061;
state_59061 = G__60189;
continue;
} else {
return ret_value__58211__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__58210__auto__ = function(state_59061){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__58210__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__58210__auto____1.call(this,state_59061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__58210__auto____0;
cljs$core$async$mix_$_state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__58210__auto____1;
return cljs$core$async$mix_$_state_machine__58210__auto__;
})()
})();
var state__58247__auto__ = (function (){var statearr_59121 = f__58246__auto__();
(statearr_59121[(6)] = c__58245__auto___60110);

return statearr_59121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58247__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_60190 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_60190(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_60191 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_60191(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_60192 = (function() {
var G__60193 = null;
var G__60193__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__60193__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__60193 = function(p,v){
switch(arguments.length){
case 1:
return G__60193__1.call(this,p);
case 2:
return G__60193__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60193.cljs$core$IFn$_invoke$arity$1 = G__60193__1;
G__60193.cljs$core$IFn$_invoke$arity$2 = G__60193__2;
return G__60193;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__59123 = arguments.length;
switch (G__59123) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_60192(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_60192(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__59126 = arguments.length;
switch (G__59126) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__59124_SHARP_){
if(cljs.core.truth_((p1__59124_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__59124_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__59124_SHARP_.call(null,topic)))){
return p1__59124_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__59124_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59127 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta59128){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta59128 = meta59128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59129,meta59128__$1){
var self__ = this;
var _59129__$1 = this;
return (new cljs.core.async.t_cljs$core$async59127(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta59128__$1));
}));

(cljs.core.async.t_cljs$core$async59127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59129){
var self__ = this;
var _59129__$1 = this;
return self__.meta59128;
}));

(cljs.core.async.t_cljs$core$async59127.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59127.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async59127.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59127.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async59127.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async59127.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async59127.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async59127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta59128","meta59128",-1023034903,null)], null);
}));

(cljs.core.async.t_cljs$core$async59127.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59127");

(cljs.core.async.t_cljs$core$async59127.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59127");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59127.
 */
cljs.core.async.__GT_t_cljs$core$async59127 = (function cljs$core$async$__GT_t_cljs$core$async59127(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59128){
return (new cljs.core.async.t_cljs$core$async59127(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59128));
});

}

return (new cljs.core.async.t_cljs$core$async59127(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58245__auto___60196 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58246__auto__ = (function (){var switch__58209__auto__ = (function (state_59201){
var state_val_59202 = (state_59201[(1)]);
if((state_val_59202 === (7))){
var inst_59197 = (state_59201[(2)]);
var state_59201__$1 = state_59201;
var statearr_59203_60197 = state_59201__$1;
(statearr_59203_60197[(2)] = inst_59197);

(statearr_59203_60197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (20))){
var state_59201__$1 = state_59201;
var statearr_59204_60198 = state_59201__$1;
(statearr_59204_60198[(2)] = null);

(statearr_59204_60198[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (1))){
var state_59201__$1 = state_59201;
var statearr_59205_60199 = state_59201__$1;
(statearr_59205_60199[(2)] = null);

(statearr_59205_60199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (24))){
var inst_59180 = (state_59201[(7)]);
var inst_59189 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_59180);
var state_59201__$1 = state_59201;
var statearr_59206_60200 = state_59201__$1;
(statearr_59206_60200[(2)] = inst_59189);

(statearr_59206_60200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (4))){
var inst_59132 = (state_59201[(8)]);
var inst_59132__$1 = (state_59201[(2)]);
var inst_59133 = (inst_59132__$1 == null);
var state_59201__$1 = (function (){var statearr_59207 = state_59201;
(statearr_59207[(8)] = inst_59132__$1);

return statearr_59207;
})();
if(cljs.core.truth_(inst_59133)){
var statearr_59208_60201 = state_59201__$1;
(statearr_59208_60201[(1)] = (5));

} else {
var statearr_59209_60202 = state_59201__$1;
(statearr_59209_60202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (15))){
var inst_59174 = (state_59201[(2)]);
var state_59201__$1 = state_59201;
var statearr_59210_60203 = state_59201__$1;
(statearr_59210_60203[(2)] = inst_59174);

(statearr_59210_60203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (21))){
var inst_59194 = (state_59201[(2)]);
var state_59201__$1 = (function (){var statearr_59211 = state_59201;
(statearr_59211[(9)] = inst_59194);

return statearr_59211;
})();
var statearr_59212_60204 = state_59201__$1;
(statearr_59212_60204[(2)] = null);

(statearr_59212_60204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (13))){
var inst_59156 = (state_59201[(10)]);
var inst_59158 = cljs.core.chunked_seq_QMARK_(inst_59156);
var state_59201__$1 = state_59201;
if(inst_59158){
var statearr_59213_60205 = state_59201__$1;
(statearr_59213_60205[(1)] = (16));

} else {
var statearr_59214_60206 = state_59201__$1;
(statearr_59214_60206[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (22))){
var inst_59186 = (state_59201[(2)]);
var state_59201__$1 = state_59201;
if(cljs.core.truth_(inst_59186)){
var statearr_59215_60207 = state_59201__$1;
(statearr_59215_60207[(1)] = (23));

} else {
var statearr_59216_60208 = state_59201__$1;
(statearr_59216_60208[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (6))){
var inst_59132 = (state_59201[(8)]);
var inst_59180 = (state_59201[(7)]);
var inst_59182 = (state_59201[(11)]);
var inst_59180__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_59132) : topic_fn.call(null,inst_59132));
var inst_59181 = cljs.core.deref(mults);
var inst_59182__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59181,inst_59180__$1);
var state_59201__$1 = (function (){var statearr_59217 = state_59201;
(statearr_59217[(7)] = inst_59180__$1);

(statearr_59217[(11)] = inst_59182__$1);

return statearr_59217;
})();
if(cljs.core.truth_(inst_59182__$1)){
var statearr_59218_60209 = state_59201__$1;
(statearr_59218_60209[(1)] = (19));

} else {
var statearr_59219_60210 = state_59201__$1;
(statearr_59219_60210[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (25))){
var inst_59191 = (state_59201[(2)]);
var state_59201__$1 = state_59201;
var statearr_59220_60211 = state_59201__$1;
(statearr_59220_60211[(2)] = inst_59191);

(statearr_59220_60211[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (17))){
var inst_59156 = (state_59201[(10)]);
var inst_59165 = cljs.core.first(inst_59156);
var inst_59166 = cljs.core.async.muxch_STAR_(inst_59165);
var inst_59167 = cljs.core.async.close_BANG_(inst_59166);
var inst_59168 = cljs.core.next(inst_59156);
var inst_59142 = inst_59168;
var inst_59143 = null;
var inst_59144 = (0);
var inst_59145 = (0);
var state_59201__$1 = (function (){var statearr_59221 = state_59201;
(statearr_59221[(12)] = inst_59143);

(statearr_59221[(13)] = inst_59145);

(statearr_59221[(14)] = inst_59167);

(statearr_59221[(15)] = inst_59144);

(statearr_59221[(16)] = inst_59142);

return statearr_59221;
})();
var statearr_59222_60212 = state_59201__$1;
(statearr_59222_60212[(2)] = null);

(statearr_59222_60212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (3))){
var inst_59199 = (state_59201[(2)]);
var state_59201__$1 = state_59201;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59201__$1,inst_59199);
} else {
if((state_val_59202 === (12))){
var inst_59176 = (state_59201[(2)]);
var state_59201__$1 = state_59201;
var statearr_59223_60213 = state_59201__$1;
(statearr_59223_60213[(2)] = inst_59176);

(statearr_59223_60213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (2))){
var state_59201__$1 = state_59201;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59201__$1,(4),ch);
} else {
if((state_val_59202 === (23))){
var state_59201__$1 = state_59201;
var statearr_59224_60214 = state_59201__$1;
(statearr_59224_60214[(2)] = null);

(statearr_59224_60214[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (19))){
var inst_59132 = (state_59201[(8)]);
var inst_59182 = (state_59201[(11)]);
var inst_59184 = cljs.core.async.muxch_STAR_(inst_59182);
var state_59201__$1 = state_59201;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59201__$1,(22),inst_59184,inst_59132);
} else {
if((state_val_59202 === (11))){
var inst_59156 = (state_59201[(10)]);
var inst_59142 = (state_59201[(16)]);
var inst_59156__$1 = cljs.core.seq(inst_59142);
var state_59201__$1 = (function (){var statearr_59225 = state_59201;
(statearr_59225[(10)] = inst_59156__$1);

return statearr_59225;
})();
if(inst_59156__$1){
var statearr_59226_60215 = state_59201__$1;
(statearr_59226_60215[(1)] = (13));

} else {
var statearr_59227_60216 = state_59201__$1;
(statearr_59227_60216[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (9))){
var inst_59178 = (state_59201[(2)]);
var state_59201__$1 = state_59201;
var statearr_59228_60217 = state_59201__$1;
(statearr_59228_60217[(2)] = inst_59178);

(statearr_59228_60217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (5))){
var inst_59139 = cljs.core.deref(mults);
var inst_59140 = cljs.core.vals(inst_59139);
var inst_59141 = cljs.core.seq(inst_59140);
var inst_59142 = inst_59141;
var inst_59143 = null;
var inst_59144 = (0);
var inst_59145 = (0);
var state_59201__$1 = (function (){var statearr_59229 = state_59201;
(statearr_59229[(12)] = inst_59143);

(statearr_59229[(13)] = inst_59145);

(statearr_59229[(15)] = inst_59144);

(statearr_59229[(16)] = inst_59142);

return statearr_59229;
})();
var statearr_59230_60218 = state_59201__$1;
(statearr_59230_60218[(2)] = null);

(statearr_59230_60218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (14))){
var state_59201__$1 = state_59201;
var statearr_59234_60219 = state_59201__$1;
(statearr_59234_60219[(2)] = null);

(statearr_59234_60219[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (16))){
var inst_59156 = (state_59201[(10)]);
var inst_59160 = cljs.core.chunk_first(inst_59156);
var inst_59161 = cljs.core.chunk_rest(inst_59156);
var inst_59162 = cljs.core.count(inst_59160);
var inst_59142 = inst_59161;
var inst_59143 = inst_59160;
var inst_59144 = inst_59162;
var inst_59145 = (0);
var state_59201__$1 = (function (){var statearr_59235 = state_59201;
(statearr_59235[(12)] = inst_59143);

(statearr_59235[(13)] = inst_59145);

(statearr_59235[(15)] = inst_59144);

(statearr_59235[(16)] = inst_59142);

return statearr_59235;
})();
var statearr_59236_60220 = state_59201__$1;
(statearr_59236_60220[(2)] = null);

(statearr_59236_60220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (10))){
var inst_59143 = (state_59201[(12)]);
var inst_59145 = (state_59201[(13)]);
var inst_59144 = (state_59201[(15)]);
var inst_59142 = (state_59201[(16)]);
var inst_59150 = cljs.core._nth(inst_59143,inst_59145);
var inst_59151 = cljs.core.async.muxch_STAR_(inst_59150);
var inst_59152 = cljs.core.async.close_BANG_(inst_59151);
var inst_59153 = (inst_59145 + (1));
var tmp59231 = inst_59143;
var tmp59232 = inst_59144;
var tmp59233 = inst_59142;
var inst_59142__$1 = tmp59233;
var inst_59143__$1 = tmp59231;
var inst_59144__$1 = tmp59232;
var inst_59145__$1 = inst_59153;
var state_59201__$1 = (function (){var statearr_59237 = state_59201;
(statearr_59237[(12)] = inst_59143__$1);

(statearr_59237[(17)] = inst_59152);

(statearr_59237[(13)] = inst_59145__$1);

(statearr_59237[(15)] = inst_59144__$1);

(statearr_59237[(16)] = inst_59142__$1);

return statearr_59237;
})();
var statearr_59238_60223 = state_59201__$1;
(statearr_59238_60223[(2)] = null);

(statearr_59238_60223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (18))){
var inst_59171 = (state_59201[(2)]);
var state_59201__$1 = state_59201;
var statearr_59239_60224 = state_59201__$1;
(statearr_59239_60224[(2)] = inst_59171);

(statearr_59239_60224[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59202 === (8))){
var inst_59145 = (state_59201[(13)]);
var inst_59144 = (state_59201[(15)]);
var inst_59147 = (inst_59145 < inst_59144);
var inst_59148 = inst_59147;
var state_59201__$1 = state_59201;
if(cljs.core.truth_(inst_59148)){
var statearr_59240_60225 = state_59201__$1;
(statearr_59240_60225[(1)] = (10));

} else {
var statearr_59241_60226 = state_59201__$1;
(statearr_59241_60226[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58210__auto__ = null;
var cljs$core$async$state_machine__58210__auto____0 = (function (){
var statearr_59242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59242[(0)] = cljs$core$async$state_machine__58210__auto__);

(statearr_59242[(1)] = (1));

return statearr_59242;
});
var cljs$core$async$state_machine__58210__auto____1 = (function (state_59201){
while(true){
var ret_value__58211__auto__ = (function (){try{while(true){
var result__58212__auto__ = switch__58209__auto__(state_59201);
if(cljs.core.keyword_identical_QMARK_(result__58212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58212__auto__;
}
break;
}
}catch (e59243){var ex__58213__auto__ = e59243;
var statearr_59244_60227 = state_59201;
(statearr_59244_60227[(2)] = ex__58213__auto__);


if(cljs.core.seq((state_59201[(4)]))){
var statearr_59245_60228 = state_59201;
(statearr_59245_60228[(1)] = cljs.core.first((state_59201[(4)])));

} else {
throw ex__58213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60229 = state_59201;
state_59201 = G__60229;
continue;
} else {
return ret_value__58211__auto__;
}
break;
}
});
cljs$core$async$state_machine__58210__auto__ = function(state_59201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58210__auto____1.call(this,state_59201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58210__auto____0;
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58210__auto____1;
return cljs$core$async$state_machine__58210__auto__;
})()
})();
var state__58247__auto__ = (function (){var statearr_59246 = f__58246__auto__();
(statearr_59246[(6)] = c__58245__auto___60196);

return statearr_59246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58247__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__59248 = arguments.length;
switch (G__59248) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__59250 = arguments.length;
switch (G__59250) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__59252 = arguments.length;
switch (G__59252) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__58245__auto___60237 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58246__auto__ = (function (){var switch__58209__auto__ = (function (state_59295){
var state_val_59296 = (state_59295[(1)]);
if((state_val_59296 === (7))){
var state_59295__$1 = state_59295;
var statearr_59297_60238 = state_59295__$1;
(statearr_59297_60238[(2)] = null);

(statearr_59297_60238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59296 === (1))){
var state_59295__$1 = state_59295;
var statearr_59298_60239 = state_59295__$1;
(statearr_59298_60239[(2)] = null);

(statearr_59298_60239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59296 === (4))){
var inst_59255 = (state_59295[(7)]);
var inst_59256 = (state_59295[(8)]);
var inst_59258 = (inst_59256 < inst_59255);
var state_59295__$1 = state_59295;
if(cljs.core.truth_(inst_59258)){
var statearr_59299_60240 = state_59295__$1;
(statearr_59299_60240[(1)] = (6));

} else {
var statearr_59300_60241 = state_59295__$1;
(statearr_59300_60241[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59296 === (15))){
var inst_59281 = (state_59295[(9)]);
var inst_59286 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_59281);
var state_59295__$1 = state_59295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59295__$1,(17),out,inst_59286);
} else {
if((state_val_59296 === (13))){
var inst_59281 = (state_59295[(9)]);
var inst_59281__$1 = (state_59295[(2)]);
var inst_59282 = cljs.core.some(cljs.core.nil_QMARK_,inst_59281__$1);
var state_59295__$1 = (function (){var statearr_59301 = state_59295;
(statearr_59301[(9)] = inst_59281__$1);

return statearr_59301;
})();
if(cljs.core.truth_(inst_59282)){
var statearr_59302_60244 = state_59295__$1;
(statearr_59302_60244[(1)] = (14));

} else {
var statearr_59303_60245 = state_59295__$1;
(statearr_59303_60245[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59296 === (6))){
var state_59295__$1 = state_59295;
var statearr_59304_60246 = state_59295__$1;
(statearr_59304_60246[(2)] = null);

(statearr_59304_60246[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59296 === (17))){
var inst_59288 = (state_59295[(2)]);
var state_59295__$1 = (function (){var statearr_59306 = state_59295;
(statearr_59306[(10)] = inst_59288);

return statearr_59306;
})();
var statearr_59307_60247 = state_59295__$1;
(statearr_59307_60247[(2)] = null);

(statearr_59307_60247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59296 === (3))){
var inst_59293 = (state_59295[(2)]);
var state_59295__$1 = state_59295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59295__$1,inst_59293);
} else {
if((state_val_59296 === (12))){
var _ = (function (){var statearr_59308 = state_59295;
(statearr_59308[(4)] = cljs.core.rest((state_59295[(4)])));

return statearr_59308;
})();
var state_59295__$1 = state_59295;
var ex59305 = (state_59295__$1[(2)]);
var statearr_59309_60248 = state_59295__$1;
(statearr_59309_60248[(5)] = ex59305);


if((ex59305 instanceof Object)){
var statearr_59310_60251 = state_59295__$1;
(statearr_59310_60251[(1)] = (11));

(statearr_59310_60251[(5)] = null);

} else {
throw ex59305;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59296 === (2))){
var inst_59254 = cljs.core.reset_BANG_(dctr,cnt);
var inst_59255 = cnt;
var inst_59256 = (0);
var state_59295__$1 = (function (){var statearr_59311 = state_59295;
(statearr_59311[(11)] = inst_59254);

(statearr_59311[(7)] = inst_59255);

(statearr_59311[(8)] = inst_59256);

return statearr_59311;
})();
var statearr_59312_60252 = state_59295__$1;
(statearr_59312_60252[(2)] = null);

(statearr_59312_60252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59296 === (11))){
var inst_59260 = (state_59295[(2)]);
var inst_59261 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_59295__$1 = (function (){var statearr_59313 = state_59295;
(statearr_59313[(12)] = inst_59260);

return statearr_59313;
})();
var statearr_59314_60253 = state_59295__$1;
(statearr_59314_60253[(2)] = inst_59261);

(statearr_59314_60253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59296 === (9))){
var inst_59256 = (state_59295[(8)]);
var _ = (function (){var statearr_59315 = state_59295;
(statearr_59315[(4)] = cljs.core.cons((12),(state_59295[(4)])));

return statearr_59315;
})();
var inst_59267 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_59256) : chs__$1.call(null,inst_59256));
var inst_59268 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_59256) : done.call(null,inst_59256));
var inst_59269 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59267,inst_59268);
var ___$1 = (function (){var statearr_59316 = state_59295;
(statearr_59316[(4)] = cljs.core.rest((state_59295[(4)])));

return statearr_59316;
})();
var state_59295__$1 = state_59295;
var statearr_59317_60254 = state_59295__$1;
(statearr_59317_60254[(2)] = inst_59269);

(statearr_59317_60254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59296 === (5))){
var inst_59279 = (state_59295[(2)]);
var state_59295__$1 = (function (){var statearr_59318 = state_59295;
(statearr_59318[(13)] = inst_59279);

return statearr_59318;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59295__$1,(13),dchan);
} else {
if((state_val_59296 === (14))){
var inst_59284 = cljs.core.async.close_BANG_(out);
var state_59295__$1 = state_59295;
var statearr_59319_60255 = state_59295__$1;
(statearr_59319_60255[(2)] = inst_59284);

(statearr_59319_60255[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59296 === (16))){
var inst_59291 = (state_59295[(2)]);
var state_59295__$1 = state_59295;
var statearr_59320_60256 = state_59295__$1;
(statearr_59320_60256[(2)] = inst_59291);

(statearr_59320_60256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59296 === (10))){
var inst_59256 = (state_59295[(8)]);
var inst_59272 = (state_59295[(2)]);
var inst_59273 = (inst_59256 + (1));
var inst_59256__$1 = inst_59273;
var state_59295__$1 = (function (){var statearr_59321 = state_59295;
(statearr_59321[(14)] = inst_59272);

(statearr_59321[(8)] = inst_59256__$1);

return statearr_59321;
})();
var statearr_59322_60257 = state_59295__$1;
(statearr_59322_60257[(2)] = null);

(statearr_59322_60257[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59296 === (8))){
var inst_59277 = (state_59295[(2)]);
var state_59295__$1 = state_59295;
var statearr_59323_60258 = state_59295__$1;
(statearr_59323_60258[(2)] = inst_59277);

(statearr_59323_60258[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58210__auto__ = null;
var cljs$core$async$state_machine__58210__auto____0 = (function (){
var statearr_59324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59324[(0)] = cljs$core$async$state_machine__58210__auto__);

(statearr_59324[(1)] = (1));

return statearr_59324;
});
var cljs$core$async$state_machine__58210__auto____1 = (function (state_59295){
while(true){
var ret_value__58211__auto__ = (function (){try{while(true){
var result__58212__auto__ = switch__58209__auto__(state_59295);
if(cljs.core.keyword_identical_QMARK_(result__58212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58212__auto__;
}
break;
}
}catch (e59325){var ex__58213__auto__ = e59325;
var statearr_59326_60259 = state_59295;
(statearr_59326_60259[(2)] = ex__58213__auto__);


if(cljs.core.seq((state_59295[(4)]))){
var statearr_59327_60260 = state_59295;
(statearr_59327_60260[(1)] = cljs.core.first((state_59295[(4)])));

} else {
throw ex__58213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60261 = state_59295;
state_59295 = G__60261;
continue;
} else {
return ret_value__58211__auto__;
}
break;
}
});
cljs$core$async$state_machine__58210__auto__ = function(state_59295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58210__auto____1.call(this,state_59295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58210__auto____0;
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58210__auto____1;
return cljs$core$async$state_machine__58210__auto__;
})()
})();
var state__58247__auto__ = (function (){var statearr_59328 = f__58246__auto__();
(statearr_59328[(6)] = c__58245__auto___60237);

return statearr_59328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58247__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__59331 = arguments.length;
switch (G__59331) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58245__auto___60263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58246__auto__ = (function (){var switch__58209__auto__ = (function (state_59363){
var state_val_59364 = (state_59363[(1)]);
if((state_val_59364 === (7))){
var inst_59343 = (state_59363[(7)]);
var inst_59342 = (state_59363[(8)]);
var inst_59342__$1 = (state_59363[(2)]);
var inst_59343__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59342__$1,(0),null);
var inst_59344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59342__$1,(1),null);
var inst_59345 = (inst_59343__$1 == null);
var state_59363__$1 = (function (){var statearr_59365 = state_59363;
(statearr_59365[(7)] = inst_59343__$1);

(statearr_59365[(8)] = inst_59342__$1);

(statearr_59365[(9)] = inst_59344);

return statearr_59365;
})();
if(cljs.core.truth_(inst_59345)){
var statearr_59366_60264 = state_59363__$1;
(statearr_59366_60264[(1)] = (8));

} else {
var statearr_59367_60265 = state_59363__$1;
(statearr_59367_60265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59364 === (1))){
var inst_59332 = cljs.core.vec(chs);
var inst_59333 = inst_59332;
var state_59363__$1 = (function (){var statearr_59368 = state_59363;
(statearr_59368[(10)] = inst_59333);

return statearr_59368;
})();
var statearr_59369_60266 = state_59363__$1;
(statearr_59369_60266[(2)] = null);

(statearr_59369_60266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59364 === (4))){
var inst_59333 = (state_59363[(10)]);
var state_59363__$1 = state_59363;
return cljs.core.async.ioc_alts_BANG_(state_59363__$1,(7),inst_59333);
} else {
if((state_val_59364 === (6))){
var inst_59359 = (state_59363[(2)]);
var state_59363__$1 = state_59363;
var statearr_59370_60267 = state_59363__$1;
(statearr_59370_60267[(2)] = inst_59359);

(statearr_59370_60267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59364 === (3))){
var inst_59361 = (state_59363[(2)]);
var state_59363__$1 = state_59363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59363__$1,inst_59361);
} else {
if((state_val_59364 === (2))){
var inst_59333 = (state_59363[(10)]);
var inst_59335 = cljs.core.count(inst_59333);
var inst_59336 = (inst_59335 > (0));
var state_59363__$1 = state_59363;
if(cljs.core.truth_(inst_59336)){
var statearr_59372_60268 = state_59363__$1;
(statearr_59372_60268[(1)] = (4));

} else {
var statearr_59373_60269 = state_59363__$1;
(statearr_59373_60269[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59364 === (11))){
var inst_59333 = (state_59363[(10)]);
var inst_59352 = (state_59363[(2)]);
var tmp59371 = inst_59333;
var inst_59333__$1 = tmp59371;
var state_59363__$1 = (function (){var statearr_59374 = state_59363;
(statearr_59374[(11)] = inst_59352);

(statearr_59374[(10)] = inst_59333__$1);

return statearr_59374;
})();
var statearr_59375_60270 = state_59363__$1;
(statearr_59375_60270[(2)] = null);

(statearr_59375_60270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59364 === (9))){
var inst_59343 = (state_59363[(7)]);
var state_59363__$1 = state_59363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59363__$1,(11),out,inst_59343);
} else {
if((state_val_59364 === (5))){
var inst_59357 = cljs.core.async.close_BANG_(out);
var state_59363__$1 = state_59363;
var statearr_59376_60272 = state_59363__$1;
(statearr_59376_60272[(2)] = inst_59357);

(statearr_59376_60272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59364 === (10))){
var inst_59355 = (state_59363[(2)]);
var state_59363__$1 = state_59363;
var statearr_59377_60273 = state_59363__$1;
(statearr_59377_60273[(2)] = inst_59355);

(statearr_59377_60273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59364 === (8))){
var inst_59343 = (state_59363[(7)]);
var inst_59342 = (state_59363[(8)]);
var inst_59344 = (state_59363[(9)]);
var inst_59333 = (state_59363[(10)]);
var inst_59347 = (function (){var cs = inst_59333;
var vec__59338 = inst_59342;
var v = inst_59343;
var c = inst_59344;
return (function (p1__59329_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__59329_SHARP_);
});
})();
var inst_59348 = cljs.core.filterv(inst_59347,inst_59333);
var inst_59333__$1 = inst_59348;
var state_59363__$1 = (function (){var statearr_59378 = state_59363;
(statearr_59378[(10)] = inst_59333__$1);

return statearr_59378;
})();
var statearr_59379_60275 = state_59363__$1;
(statearr_59379_60275[(2)] = null);

(statearr_59379_60275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58210__auto__ = null;
var cljs$core$async$state_machine__58210__auto____0 = (function (){
var statearr_59380 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59380[(0)] = cljs$core$async$state_machine__58210__auto__);

(statearr_59380[(1)] = (1));

return statearr_59380;
});
var cljs$core$async$state_machine__58210__auto____1 = (function (state_59363){
while(true){
var ret_value__58211__auto__ = (function (){try{while(true){
var result__58212__auto__ = switch__58209__auto__(state_59363);
if(cljs.core.keyword_identical_QMARK_(result__58212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58212__auto__;
}
break;
}
}catch (e59381){var ex__58213__auto__ = e59381;
var statearr_59382_60276 = state_59363;
(statearr_59382_60276[(2)] = ex__58213__auto__);


if(cljs.core.seq((state_59363[(4)]))){
var statearr_59383_60279 = state_59363;
(statearr_59383_60279[(1)] = cljs.core.first((state_59363[(4)])));

} else {
throw ex__58213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60281 = state_59363;
state_59363 = G__60281;
continue;
} else {
return ret_value__58211__auto__;
}
break;
}
});
cljs$core$async$state_machine__58210__auto__ = function(state_59363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58210__auto____1.call(this,state_59363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58210__auto____0;
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58210__auto____1;
return cljs$core$async$state_machine__58210__auto__;
})()
})();
var state__58247__auto__ = (function (){var statearr_59384 = f__58246__auto__();
(statearr_59384[(6)] = c__58245__auto___60263);

return statearr_59384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58247__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__59386 = arguments.length;
switch (G__59386) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58245__auto___60284 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58246__auto__ = (function (){var switch__58209__auto__ = (function (state_59410){
var state_val_59411 = (state_59410[(1)]);
if((state_val_59411 === (7))){
var inst_59392 = (state_59410[(7)]);
var inst_59392__$1 = (state_59410[(2)]);
var inst_59393 = (inst_59392__$1 == null);
var inst_59394 = cljs.core.not(inst_59393);
var state_59410__$1 = (function (){var statearr_59412 = state_59410;
(statearr_59412[(7)] = inst_59392__$1);

return statearr_59412;
})();
if(inst_59394){
var statearr_59413_60285 = state_59410__$1;
(statearr_59413_60285[(1)] = (8));

} else {
var statearr_59414_60288 = state_59410__$1;
(statearr_59414_60288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59411 === (1))){
var inst_59387 = (0);
var state_59410__$1 = (function (){var statearr_59415 = state_59410;
(statearr_59415[(8)] = inst_59387);

return statearr_59415;
})();
var statearr_59416_60290 = state_59410__$1;
(statearr_59416_60290[(2)] = null);

(statearr_59416_60290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59411 === (4))){
var state_59410__$1 = state_59410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59410__$1,(7),ch);
} else {
if((state_val_59411 === (6))){
var inst_59405 = (state_59410[(2)]);
var state_59410__$1 = state_59410;
var statearr_59417_60291 = state_59410__$1;
(statearr_59417_60291[(2)] = inst_59405);

(statearr_59417_60291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59411 === (3))){
var inst_59407 = (state_59410[(2)]);
var inst_59408 = cljs.core.async.close_BANG_(out);
var state_59410__$1 = (function (){var statearr_59418 = state_59410;
(statearr_59418[(9)] = inst_59407);

return statearr_59418;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59410__$1,inst_59408);
} else {
if((state_val_59411 === (2))){
var inst_59387 = (state_59410[(8)]);
var inst_59389 = (inst_59387 < n);
var state_59410__$1 = state_59410;
if(cljs.core.truth_(inst_59389)){
var statearr_59419_60292 = state_59410__$1;
(statearr_59419_60292[(1)] = (4));

} else {
var statearr_59420_60293 = state_59410__$1;
(statearr_59420_60293[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59411 === (11))){
var inst_59387 = (state_59410[(8)]);
var inst_59397 = (state_59410[(2)]);
var inst_59398 = (inst_59387 + (1));
var inst_59387__$1 = inst_59398;
var state_59410__$1 = (function (){var statearr_59421 = state_59410;
(statearr_59421[(8)] = inst_59387__$1);

(statearr_59421[(10)] = inst_59397);

return statearr_59421;
})();
var statearr_59422_60294 = state_59410__$1;
(statearr_59422_60294[(2)] = null);

(statearr_59422_60294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59411 === (9))){
var state_59410__$1 = state_59410;
var statearr_59423_60295 = state_59410__$1;
(statearr_59423_60295[(2)] = null);

(statearr_59423_60295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59411 === (5))){
var state_59410__$1 = state_59410;
var statearr_59424_60296 = state_59410__$1;
(statearr_59424_60296[(2)] = null);

(statearr_59424_60296[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59411 === (10))){
var inst_59402 = (state_59410[(2)]);
var state_59410__$1 = state_59410;
var statearr_59425_60297 = state_59410__$1;
(statearr_59425_60297[(2)] = inst_59402);

(statearr_59425_60297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59411 === (8))){
var inst_59392 = (state_59410[(7)]);
var state_59410__$1 = state_59410;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59410__$1,(11),out,inst_59392);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58210__auto__ = null;
var cljs$core$async$state_machine__58210__auto____0 = (function (){
var statearr_59426 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59426[(0)] = cljs$core$async$state_machine__58210__auto__);

(statearr_59426[(1)] = (1));

return statearr_59426;
});
var cljs$core$async$state_machine__58210__auto____1 = (function (state_59410){
while(true){
var ret_value__58211__auto__ = (function (){try{while(true){
var result__58212__auto__ = switch__58209__auto__(state_59410);
if(cljs.core.keyword_identical_QMARK_(result__58212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58212__auto__;
}
break;
}
}catch (e59427){var ex__58213__auto__ = e59427;
var statearr_59428_60298 = state_59410;
(statearr_59428_60298[(2)] = ex__58213__auto__);


if(cljs.core.seq((state_59410[(4)]))){
var statearr_59429_60299 = state_59410;
(statearr_59429_60299[(1)] = cljs.core.first((state_59410[(4)])));

} else {
throw ex__58213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60300 = state_59410;
state_59410 = G__60300;
continue;
} else {
return ret_value__58211__auto__;
}
break;
}
});
cljs$core$async$state_machine__58210__auto__ = function(state_59410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58210__auto____1.call(this,state_59410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58210__auto____0;
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58210__auto____1;
return cljs$core$async$state_machine__58210__auto__;
})()
})();
var state__58247__auto__ = (function (){var statearr_59430 = f__58246__auto__();
(statearr_59430[(6)] = c__58245__auto___60284);

return statearr_59430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58247__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59432 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59432 = (function (f,ch,meta59433){
this.f = f;
this.ch = ch;
this.meta59433 = meta59433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59434,meta59433__$1){
var self__ = this;
var _59434__$1 = this;
return (new cljs.core.async.t_cljs$core$async59432(self__.f,self__.ch,meta59433__$1));
}));

(cljs.core.async.t_cljs$core$async59432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59434){
var self__ = this;
var _59434__$1 = this;
return self__.meta59433;
}));

(cljs.core.async.t_cljs$core$async59432.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59432.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59432.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59432.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59432.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59435 = (function (f,ch,meta59433,_,fn1,meta59436){
this.f = f;
this.ch = ch;
this.meta59433 = meta59433;
this._ = _;
this.fn1 = fn1;
this.meta59436 = meta59436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59437,meta59436__$1){
var self__ = this;
var _59437__$1 = this;
return (new cljs.core.async.t_cljs$core$async59435(self__.f,self__.ch,self__.meta59433,self__._,self__.fn1,meta59436__$1));
}));

(cljs.core.async.t_cljs$core$async59435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59437){
var self__ = this;
var _59437__$1 = this;
return self__.meta59436;
}));

(cljs.core.async.t_cljs$core$async59435.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59435.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async59435.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async59435.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__59431_SHARP_){
var G__59438 = (((p1__59431_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__59431_SHARP_) : self__.f.call(null,p1__59431_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__59438) : f1.call(null,G__59438));
});
}));

(cljs.core.async.t_cljs$core$async59435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59433","meta59433",918068391,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async59432","cljs.core.async/t_cljs$core$async59432",-686497326,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta59436","meta59436",-772879353,null)], null);
}));

(cljs.core.async.t_cljs$core$async59435.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59435");

(cljs.core.async.t_cljs$core$async59435.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59435");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59435.
 */
cljs.core.async.__GT_t_cljs$core$async59435 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async59435(f__$1,ch__$1,meta59433__$1,___$2,fn1__$1,meta59436){
return (new cljs.core.async.t_cljs$core$async59435(f__$1,ch__$1,meta59433__$1,___$2,fn1__$1,meta59436));
});

}

return (new cljs.core.async.t_cljs$core$async59435(self__.f,self__.ch,self__.meta59433,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__59439 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__59439) : self__.f.call(null,G__59439));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async59432.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59432.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async59432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59433","meta59433",918068391,null)], null);
}));

(cljs.core.async.t_cljs$core$async59432.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59432");

(cljs.core.async.t_cljs$core$async59432.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59432");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59432.
 */
cljs.core.async.__GT_t_cljs$core$async59432 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async59432(f__$1,ch__$1,meta59433){
return (new cljs.core.async.t_cljs$core$async59432(f__$1,ch__$1,meta59433));
});

}

return (new cljs.core.async.t_cljs$core$async59432(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59440 = (function (f,ch,meta59441){
this.f = f;
this.ch = ch;
this.meta59441 = meta59441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59442,meta59441__$1){
var self__ = this;
var _59442__$1 = this;
return (new cljs.core.async.t_cljs$core$async59440(self__.f,self__.ch,meta59441__$1));
}));

(cljs.core.async.t_cljs$core$async59440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59442){
var self__ = this;
var _59442__$1 = this;
return self__.meta59441;
}));

(cljs.core.async.t_cljs$core$async59440.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59440.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59440.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59440.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async59440.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59440.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async59440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59441","meta59441",1662422775,null)], null);
}));

(cljs.core.async.t_cljs$core$async59440.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59440");

(cljs.core.async.t_cljs$core$async59440.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59440");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59440.
 */
cljs.core.async.__GT_t_cljs$core$async59440 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async59440(f__$1,ch__$1,meta59441){
return (new cljs.core.async.t_cljs$core$async59440(f__$1,ch__$1,meta59441));
});

}

return (new cljs.core.async.t_cljs$core$async59440(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59443 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59443 = (function (p,ch,meta59444){
this.p = p;
this.ch = ch;
this.meta59444 = meta59444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59445,meta59444__$1){
var self__ = this;
var _59445__$1 = this;
return (new cljs.core.async.t_cljs$core$async59443(self__.p,self__.ch,meta59444__$1));
}));

(cljs.core.async.t_cljs$core$async59443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59445){
var self__ = this;
var _59445__$1 = this;
return self__.meta59444;
}));

(cljs.core.async.t_cljs$core$async59443.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59443.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59443.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async59443.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async59443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59444","meta59444",661748266,null)], null);
}));

(cljs.core.async.t_cljs$core$async59443.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59443");

(cljs.core.async.t_cljs$core$async59443.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59443");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59443.
 */
cljs.core.async.__GT_t_cljs$core$async59443 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async59443(p__$1,ch__$1,meta59444){
return (new cljs.core.async.t_cljs$core$async59443(p__$1,ch__$1,meta59444));
});

}

return (new cljs.core.async.t_cljs$core$async59443(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__59447 = arguments.length;
switch (G__59447) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58245__auto___60302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58246__auto__ = (function (){var switch__58209__auto__ = (function (state_59468){
var state_val_59469 = (state_59468[(1)]);
if((state_val_59469 === (7))){
var inst_59464 = (state_59468[(2)]);
var state_59468__$1 = state_59468;
var statearr_59470_60303 = state_59468__$1;
(statearr_59470_60303[(2)] = inst_59464);

(statearr_59470_60303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59469 === (1))){
var state_59468__$1 = state_59468;
var statearr_59471_60304 = state_59468__$1;
(statearr_59471_60304[(2)] = null);

(statearr_59471_60304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59469 === (4))){
var inst_59450 = (state_59468[(7)]);
var inst_59450__$1 = (state_59468[(2)]);
var inst_59451 = (inst_59450__$1 == null);
var state_59468__$1 = (function (){var statearr_59472 = state_59468;
(statearr_59472[(7)] = inst_59450__$1);

return statearr_59472;
})();
if(cljs.core.truth_(inst_59451)){
var statearr_59473_60305 = state_59468__$1;
(statearr_59473_60305[(1)] = (5));

} else {
var statearr_59474_60306 = state_59468__$1;
(statearr_59474_60306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59469 === (6))){
var inst_59450 = (state_59468[(7)]);
var inst_59455 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_59450) : p.call(null,inst_59450));
var state_59468__$1 = state_59468;
if(cljs.core.truth_(inst_59455)){
var statearr_59475_60307 = state_59468__$1;
(statearr_59475_60307[(1)] = (8));

} else {
var statearr_59476_60308 = state_59468__$1;
(statearr_59476_60308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59469 === (3))){
var inst_59466 = (state_59468[(2)]);
var state_59468__$1 = state_59468;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59468__$1,inst_59466);
} else {
if((state_val_59469 === (2))){
var state_59468__$1 = state_59468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59468__$1,(4),ch);
} else {
if((state_val_59469 === (11))){
var inst_59458 = (state_59468[(2)]);
var state_59468__$1 = state_59468;
var statearr_59477_60309 = state_59468__$1;
(statearr_59477_60309[(2)] = inst_59458);

(statearr_59477_60309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59469 === (9))){
var state_59468__$1 = state_59468;
var statearr_59478_60310 = state_59468__$1;
(statearr_59478_60310[(2)] = null);

(statearr_59478_60310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59469 === (5))){
var inst_59453 = cljs.core.async.close_BANG_(out);
var state_59468__$1 = state_59468;
var statearr_59479_60311 = state_59468__$1;
(statearr_59479_60311[(2)] = inst_59453);

(statearr_59479_60311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59469 === (10))){
var inst_59461 = (state_59468[(2)]);
var state_59468__$1 = (function (){var statearr_59480 = state_59468;
(statearr_59480[(8)] = inst_59461);

return statearr_59480;
})();
var statearr_59481_60312 = state_59468__$1;
(statearr_59481_60312[(2)] = null);

(statearr_59481_60312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59469 === (8))){
var inst_59450 = (state_59468[(7)]);
var state_59468__$1 = state_59468;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59468__$1,(11),out,inst_59450);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58210__auto__ = null;
var cljs$core$async$state_machine__58210__auto____0 = (function (){
var statearr_59482 = [null,null,null,null,null,null,null,null,null];
(statearr_59482[(0)] = cljs$core$async$state_machine__58210__auto__);

(statearr_59482[(1)] = (1));

return statearr_59482;
});
var cljs$core$async$state_machine__58210__auto____1 = (function (state_59468){
while(true){
var ret_value__58211__auto__ = (function (){try{while(true){
var result__58212__auto__ = switch__58209__auto__(state_59468);
if(cljs.core.keyword_identical_QMARK_(result__58212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58212__auto__;
}
break;
}
}catch (e59483){var ex__58213__auto__ = e59483;
var statearr_59484_60313 = state_59468;
(statearr_59484_60313[(2)] = ex__58213__auto__);


if(cljs.core.seq((state_59468[(4)]))){
var statearr_59485_60314 = state_59468;
(statearr_59485_60314[(1)] = cljs.core.first((state_59468[(4)])));

} else {
throw ex__58213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60315 = state_59468;
state_59468 = G__60315;
continue;
} else {
return ret_value__58211__auto__;
}
break;
}
});
cljs$core$async$state_machine__58210__auto__ = function(state_59468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58210__auto____1.call(this,state_59468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58210__auto____0;
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58210__auto____1;
return cljs$core$async$state_machine__58210__auto__;
})()
})();
var state__58247__auto__ = (function (){var statearr_59486 = f__58246__auto__();
(statearr_59486[(6)] = c__58245__auto___60302);

return statearr_59486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58247__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__59488 = arguments.length;
switch (G__59488) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__58245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58246__auto__ = (function (){var switch__58209__auto__ = (function (state_59550){
var state_val_59551 = (state_59550[(1)]);
if((state_val_59551 === (7))){
var inst_59546 = (state_59550[(2)]);
var state_59550__$1 = state_59550;
var statearr_59552_60317 = state_59550__$1;
(statearr_59552_60317[(2)] = inst_59546);

(statearr_59552_60317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59551 === (20))){
var inst_59516 = (state_59550[(7)]);
var inst_59527 = (state_59550[(2)]);
var inst_59528 = cljs.core.next(inst_59516);
var inst_59502 = inst_59528;
var inst_59503 = null;
var inst_59504 = (0);
var inst_59505 = (0);
var state_59550__$1 = (function (){var statearr_59553 = state_59550;
(statearr_59553[(8)] = inst_59505);

(statearr_59553[(9)] = inst_59527);

(statearr_59553[(10)] = inst_59503);

(statearr_59553[(11)] = inst_59502);

(statearr_59553[(12)] = inst_59504);

return statearr_59553;
})();
var statearr_59554_60318 = state_59550__$1;
(statearr_59554_60318[(2)] = null);

(statearr_59554_60318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59551 === (1))){
var state_59550__$1 = state_59550;
var statearr_59555_60319 = state_59550__$1;
(statearr_59555_60319[(2)] = null);

(statearr_59555_60319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59551 === (4))){
var inst_59491 = (state_59550[(13)]);
var inst_59491__$1 = (state_59550[(2)]);
var inst_59492 = (inst_59491__$1 == null);
var state_59550__$1 = (function (){var statearr_59556 = state_59550;
(statearr_59556[(13)] = inst_59491__$1);

return statearr_59556;
})();
if(cljs.core.truth_(inst_59492)){
var statearr_59557_60320 = state_59550__$1;
(statearr_59557_60320[(1)] = (5));

} else {
var statearr_59558_60321 = state_59550__$1;
(statearr_59558_60321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59551 === (15))){
var state_59550__$1 = state_59550;
var statearr_59562_60322 = state_59550__$1;
(statearr_59562_60322[(2)] = null);

(statearr_59562_60322[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59551 === (21))){
var state_59550__$1 = state_59550;
var statearr_59563_60323 = state_59550__$1;
(statearr_59563_60323[(2)] = null);

(statearr_59563_60323[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59551 === (13))){
var inst_59505 = (state_59550[(8)]);
var inst_59503 = (state_59550[(10)]);
var inst_59502 = (state_59550[(11)]);
var inst_59504 = (state_59550[(12)]);
var inst_59512 = (state_59550[(2)]);
var inst_59513 = (inst_59505 + (1));
var tmp59559 = inst_59503;
var tmp59560 = inst_59502;
var tmp59561 = inst_59504;
var inst_59502__$1 = tmp59560;
var inst_59503__$1 = tmp59559;
var inst_59504__$1 = tmp59561;
var inst_59505__$1 = inst_59513;
var state_59550__$1 = (function (){var statearr_59564 = state_59550;
(statearr_59564[(8)] = inst_59505__$1);

(statearr_59564[(10)] = inst_59503__$1);

(statearr_59564[(11)] = inst_59502__$1);

(statearr_59564[(14)] = inst_59512);

(statearr_59564[(12)] = inst_59504__$1);

return statearr_59564;
})();
var statearr_59565_60324 = state_59550__$1;
(statearr_59565_60324[(2)] = null);

(statearr_59565_60324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59551 === (22))){
var state_59550__$1 = state_59550;
var statearr_59566_60325 = state_59550__$1;
(statearr_59566_60325[(2)] = null);

(statearr_59566_60325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59551 === (6))){
var inst_59491 = (state_59550[(13)]);
var inst_59500 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_59491) : f.call(null,inst_59491));
var inst_59501 = cljs.core.seq(inst_59500);
var inst_59502 = inst_59501;
var inst_59503 = null;
var inst_59504 = (0);
var inst_59505 = (0);
var state_59550__$1 = (function (){var statearr_59567 = state_59550;
(statearr_59567[(8)] = inst_59505);

(statearr_59567[(10)] = inst_59503);

(statearr_59567[(11)] = inst_59502);

(statearr_59567[(12)] = inst_59504);

return statearr_59567;
})();
var statearr_59568_60326 = state_59550__$1;
(statearr_59568_60326[(2)] = null);

(statearr_59568_60326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59551 === (17))){
var inst_59516 = (state_59550[(7)]);
var inst_59520 = cljs.core.chunk_first(inst_59516);
var inst_59521 = cljs.core.chunk_rest(inst_59516);
var inst_59522 = cljs.core.count(inst_59520);
var inst_59502 = inst_59521;
var inst_59503 = inst_59520;
var inst_59504 = inst_59522;
var inst_59505 = (0);
var state_59550__$1 = (function (){var statearr_59569 = state_59550;
(statearr_59569[(8)] = inst_59505);

(statearr_59569[(10)] = inst_59503);

(statearr_59569[(11)] = inst_59502);

(statearr_59569[(12)] = inst_59504);

return statearr_59569;
})();
var statearr_59570_60327 = state_59550__$1;
(statearr_59570_60327[(2)] = null);

(statearr_59570_60327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59551 === (3))){
var inst_59548 = (state_59550[(2)]);
var state_59550__$1 = state_59550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59550__$1,inst_59548);
} else {
if((state_val_59551 === (12))){
var inst_59536 = (state_59550[(2)]);
var state_59550__$1 = state_59550;
var statearr_59571_60328 = state_59550__$1;
(statearr_59571_60328[(2)] = inst_59536);

(statearr_59571_60328[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59551 === (2))){
var state_59550__$1 = state_59550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59550__$1,(4),in$);
} else {
if((state_val_59551 === (23))){
var inst_59544 = (state_59550[(2)]);
var state_59550__$1 = state_59550;
var statearr_59572_60329 = state_59550__$1;
(statearr_59572_60329[(2)] = inst_59544);

(statearr_59572_60329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59551 === (19))){
var inst_59531 = (state_59550[(2)]);
var state_59550__$1 = state_59550;
var statearr_59573_60330 = state_59550__$1;
(statearr_59573_60330[(2)] = inst_59531);

(statearr_59573_60330[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59551 === (11))){
var inst_59502 = (state_59550[(11)]);
var inst_59516 = (state_59550[(7)]);
var inst_59516__$1 = cljs.core.seq(inst_59502);
var state_59550__$1 = (function (){var statearr_59574 = state_59550;
(statearr_59574[(7)] = inst_59516__$1);

return statearr_59574;
})();
if(inst_59516__$1){
var statearr_59575_60333 = state_59550__$1;
(statearr_59575_60333[(1)] = (14));

} else {
var statearr_59576_60334 = state_59550__$1;
(statearr_59576_60334[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59551 === (9))){
var inst_59538 = (state_59550[(2)]);
var inst_59539 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_59550__$1 = (function (){var statearr_59577 = state_59550;
(statearr_59577[(15)] = inst_59538);

return statearr_59577;
})();
if(cljs.core.truth_(inst_59539)){
var statearr_59578_60335 = state_59550__$1;
(statearr_59578_60335[(1)] = (21));

} else {
var statearr_59579_60336 = state_59550__$1;
(statearr_59579_60336[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59551 === (5))){
var inst_59494 = cljs.core.async.close_BANG_(out);
var state_59550__$1 = state_59550;
var statearr_59580_60337 = state_59550__$1;
(statearr_59580_60337[(2)] = inst_59494);

(statearr_59580_60337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59551 === (14))){
var inst_59516 = (state_59550[(7)]);
var inst_59518 = cljs.core.chunked_seq_QMARK_(inst_59516);
var state_59550__$1 = state_59550;
if(inst_59518){
var statearr_59581_60338 = state_59550__$1;
(statearr_59581_60338[(1)] = (17));

} else {
var statearr_59582_60339 = state_59550__$1;
(statearr_59582_60339[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59551 === (16))){
var inst_59534 = (state_59550[(2)]);
var state_59550__$1 = state_59550;
var statearr_59583_60340 = state_59550__$1;
(statearr_59583_60340[(2)] = inst_59534);

(statearr_59583_60340[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59551 === (10))){
var inst_59505 = (state_59550[(8)]);
var inst_59503 = (state_59550[(10)]);
var inst_59510 = cljs.core._nth(inst_59503,inst_59505);
var state_59550__$1 = state_59550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59550__$1,(13),out,inst_59510);
} else {
if((state_val_59551 === (18))){
var inst_59516 = (state_59550[(7)]);
var inst_59525 = cljs.core.first(inst_59516);
var state_59550__$1 = state_59550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59550__$1,(20),out,inst_59525);
} else {
if((state_val_59551 === (8))){
var inst_59505 = (state_59550[(8)]);
var inst_59504 = (state_59550[(12)]);
var inst_59507 = (inst_59505 < inst_59504);
var inst_59508 = inst_59507;
var state_59550__$1 = state_59550;
if(cljs.core.truth_(inst_59508)){
var statearr_59584_60341 = state_59550__$1;
(statearr_59584_60341[(1)] = (10));

} else {
var statearr_59585_60342 = state_59550__$1;
(statearr_59585_60342[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__58210__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__58210__auto____0 = (function (){
var statearr_59586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59586[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__58210__auto__);

(statearr_59586[(1)] = (1));

return statearr_59586;
});
var cljs$core$async$mapcat_STAR__$_state_machine__58210__auto____1 = (function (state_59550){
while(true){
var ret_value__58211__auto__ = (function (){try{while(true){
var result__58212__auto__ = switch__58209__auto__(state_59550);
if(cljs.core.keyword_identical_QMARK_(result__58212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58212__auto__;
}
break;
}
}catch (e59587){var ex__58213__auto__ = e59587;
var statearr_59588_60347 = state_59550;
(statearr_59588_60347[(2)] = ex__58213__auto__);


if(cljs.core.seq((state_59550[(4)]))){
var statearr_59589_60348 = state_59550;
(statearr_59589_60348[(1)] = cljs.core.first((state_59550[(4)])));

} else {
throw ex__58213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60350 = state_59550;
state_59550 = G__60350;
continue;
} else {
return ret_value__58211__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__58210__auto__ = function(state_59550){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__58210__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__58210__auto____1.call(this,state_59550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__58210__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__58210__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__58210__auto__;
})()
})();
var state__58247__auto__ = (function (){var statearr_59590 = f__58246__auto__();
(statearr_59590[(6)] = c__58245__auto__);

return statearr_59590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58247__auto__);
}));

return c__58245__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__59592 = arguments.length;
switch (G__59592) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__59594 = arguments.length;
switch (G__59594) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__59596 = arguments.length;
switch (G__59596) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58245__auto___60357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58246__auto__ = (function (){var switch__58209__auto__ = (function (state_59620){
var state_val_59621 = (state_59620[(1)]);
if((state_val_59621 === (7))){
var inst_59615 = (state_59620[(2)]);
var state_59620__$1 = state_59620;
var statearr_59622_60358 = state_59620__$1;
(statearr_59622_60358[(2)] = inst_59615);

(statearr_59622_60358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59621 === (1))){
var inst_59597 = null;
var state_59620__$1 = (function (){var statearr_59623 = state_59620;
(statearr_59623[(7)] = inst_59597);

return statearr_59623;
})();
var statearr_59624_60360 = state_59620__$1;
(statearr_59624_60360[(2)] = null);

(statearr_59624_60360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59621 === (4))){
var inst_59600 = (state_59620[(8)]);
var inst_59600__$1 = (state_59620[(2)]);
var inst_59601 = (inst_59600__$1 == null);
var inst_59602 = cljs.core.not(inst_59601);
var state_59620__$1 = (function (){var statearr_59625 = state_59620;
(statearr_59625[(8)] = inst_59600__$1);

return statearr_59625;
})();
if(inst_59602){
var statearr_59626_60361 = state_59620__$1;
(statearr_59626_60361[(1)] = (5));

} else {
var statearr_59627_60362 = state_59620__$1;
(statearr_59627_60362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59621 === (6))){
var state_59620__$1 = state_59620;
var statearr_59628_60363 = state_59620__$1;
(statearr_59628_60363[(2)] = null);

(statearr_59628_60363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59621 === (3))){
var inst_59617 = (state_59620[(2)]);
var inst_59618 = cljs.core.async.close_BANG_(out);
var state_59620__$1 = (function (){var statearr_59629 = state_59620;
(statearr_59629[(9)] = inst_59617);

return statearr_59629;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59620__$1,inst_59618);
} else {
if((state_val_59621 === (2))){
var state_59620__$1 = state_59620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59620__$1,(4),ch);
} else {
if((state_val_59621 === (11))){
var inst_59600 = (state_59620[(8)]);
var inst_59609 = (state_59620[(2)]);
var inst_59597 = inst_59600;
var state_59620__$1 = (function (){var statearr_59630 = state_59620;
(statearr_59630[(7)] = inst_59597);

(statearr_59630[(10)] = inst_59609);

return statearr_59630;
})();
var statearr_59631_60364 = state_59620__$1;
(statearr_59631_60364[(2)] = null);

(statearr_59631_60364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59621 === (9))){
var inst_59600 = (state_59620[(8)]);
var state_59620__$1 = state_59620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59620__$1,(11),out,inst_59600);
} else {
if((state_val_59621 === (5))){
var inst_59597 = (state_59620[(7)]);
var inst_59600 = (state_59620[(8)]);
var inst_59604 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59600,inst_59597);
var state_59620__$1 = state_59620;
if(inst_59604){
var statearr_59633_60365 = state_59620__$1;
(statearr_59633_60365[(1)] = (8));

} else {
var statearr_59634_60366 = state_59620__$1;
(statearr_59634_60366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59621 === (10))){
var inst_59612 = (state_59620[(2)]);
var state_59620__$1 = state_59620;
var statearr_59635_60367 = state_59620__$1;
(statearr_59635_60367[(2)] = inst_59612);

(statearr_59635_60367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59621 === (8))){
var inst_59597 = (state_59620[(7)]);
var tmp59632 = inst_59597;
var inst_59597__$1 = tmp59632;
var state_59620__$1 = (function (){var statearr_59636 = state_59620;
(statearr_59636[(7)] = inst_59597__$1);

return statearr_59636;
})();
var statearr_59637_60368 = state_59620__$1;
(statearr_59637_60368[(2)] = null);

(statearr_59637_60368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58210__auto__ = null;
var cljs$core$async$state_machine__58210__auto____0 = (function (){
var statearr_59638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59638[(0)] = cljs$core$async$state_machine__58210__auto__);

(statearr_59638[(1)] = (1));

return statearr_59638;
});
var cljs$core$async$state_machine__58210__auto____1 = (function (state_59620){
while(true){
var ret_value__58211__auto__ = (function (){try{while(true){
var result__58212__auto__ = switch__58209__auto__(state_59620);
if(cljs.core.keyword_identical_QMARK_(result__58212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58212__auto__;
}
break;
}
}catch (e59639){var ex__58213__auto__ = e59639;
var statearr_59640_60371 = state_59620;
(statearr_59640_60371[(2)] = ex__58213__auto__);


if(cljs.core.seq((state_59620[(4)]))){
var statearr_59641_60372 = state_59620;
(statearr_59641_60372[(1)] = cljs.core.first((state_59620[(4)])));

} else {
throw ex__58213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60373 = state_59620;
state_59620 = G__60373;
continue;
} else {
return ret_value__58211__auto__;
}
break;
}
});
cljs$core$async$state_machine__58210__auto__ = function(state_59620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58210__auto____1.call(this,state_59620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58210__auto____0;
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58210__auto____1;
return cljs$core$async$state_machine__58210__auto__;
})()
})();
var state__58247__auto__ = (function (){var statearr_59642 = f__58246__auto__();
(statearr_59642[(6)] = c__58245__auto___60357);

return statearr_59642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58247__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__59644 = arguments.length;
switch (G__59644) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58245__auto___60375 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58246__auto__ = (function (){var switch__58209__auto__ = (function (state_59682){
var state_val_59683 = (state_59682[(1)]);
if((state_val_59683 === (7))){
var inst_59678 = (state_59682[(2)]);
var state_59682__$1 = state_59682;
var statearr_59684_60376 = state_59682__$1;
(statearr_59684_60376[(2)] = inst_59678);

(statearr_59684_60376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59683 === (1))){
var inst_59645 = (new Array(n));
var inst_59646 = inst_59645;
var inst_59647 = (0);
var state_59682__$1 = (function (){var statearr_59685 = state_59682;
(statearr_59685[(7)] = inst_59647);

(statearr_59685[(8)] = inst_59646);

return statearr_59685;
})();
var statearr_59686_60377 = state_59682__$1;
(statearr_59686_60377[(2)] = null);

(statearr_59686_60377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59683 === (4))){
var inst_59650 = (state_59682[(9)]);
var inst_59650__$1 = (state_59682[(2)]);
var inst_59651 = (inst_59650__$1 == null);
var inst_59652 = cljs.core.not(inst_59651);
var state_59682__$1 = (function (){var statearr_59687 = state_59682;
(statearr_59687[(9)] = inst_59650__$1);

return statearr_59687;
})();
if(inst_59652){
var statearr_59688_60378 = state_59682__$1;
(statearr_59688_60378[(1)] = (5));

} else {
var statearr_59689_60379 = state_59682__$1;
(statearr_59689_60379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59683 === (15))){
var inst_59672 = (state_59682[(2)]);
var state_59682__$1 = state_59682;
var statearr_59690_60380 = state_59682__$1;
(statearr_59690_60380[(2)] = inst_59672);

(statearr_59690_60380[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59683 === (13))){
var state_59682__$1 = state_59682;
var statearr_59691_60381 = state_59682__$1;
(statearr_59691_60381[(2)] = null);

(statearr_59691_60381[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59683 === (6))){
var inst_59647 = (state_59682[(7)]);
var inst_59668 = (inst_59647 > (0));
var state_59682__$1 = state_59682;
if(cljs.core.truth_(inst_59668)){
var statearr_59692_60382 = state_59682__$1;
(statearr_59692_60382[(1)] = (12));

} else {
var statearr_59693_60383 = state_59682__$1;
(statearr_59693_60383[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59683 === (3))){
var inst_59680 = (state_59682[(2)]);
var state_59682__$1 = state_59682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59682__$1,inst_59680);
} else {
if((state_val_59683 === (12))){
var inst_59646 = (state_59682[(8)]);
var inst_59670 = cljs.core.vec(inst_59646);
var state_59682__$1 = state_59682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59682__$1,(15),out,inst_59670);
} else {
if((state_val_59683 === (2))){
var state_59682__$1 = state_59682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59682__$1,(4),ch);
} else {
if((state_val_59683 === (11))){
var inst_59662 = (state_59682[(2)]);
var inst_59663 = (new Array(n));
var inst_59646 = inst_59663;
var inst_59647 = (0);
var state_59682__$1 = (function (){var statearr_59694 = state_59682;
(statearr_59694[(10)] = inst_59662);

(statearr_59694[(7)] = inst_59647);

(statearr_59694[(8)] = inst_59646);

return statearr_59694;
})();
var statearr_59695_60384 = state_59682__$1;
(statearr_59695_60384[(2)] = null);

(statearr_59695_60384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59683 === (9))){
var inst_59646 = (state_59682[(8)]);
var inst_59660 = cljs.core.vec(inst_59646);
var state_59682__$1 = state_59682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59682__$1,(11),out,inst_59660);
} else {
if((state_val_59683 === (5))){
var inst_59650 = (state_59682[(9)]);
var inst_59655 = (state_59682[(11)]);
var inst_59647 = (state_59682[(7)]);
var inst_59646 = (state_59682[(8)]);
var inst_59654 = (inst_59646[inst_59647] = inst_59650);
var inst_59655__$1 = (inst_59647 + (1));
var inst_59656 = (inst_59655__$1 < n);
var state_59682__$1 = (function (){var statearr_59696 = state_59682;
(statearr_59696[(12)] = inst_59654);

(statearr_59696[(11)] = inst_59655__$1);

return statearr_59696;
})();
if(cljs.core.truth_(inst_59656)){
var statearr_59697_60385 = state_59682__$1;
(statearr_59697_60385[(1)] = (8));

} else {
var statearr_59698_60386 = state_59682__$1;
(statearr_59698_60386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59683 === (14))){
var inst_59675 = (state_59682[(2)]);
var inst_59676 = cljs.core.async.close_BANG_(out);
var state_59682__$1 = (function (){var statearr_59700 = state_59682;
(statearr_59700[(13)] = inst_59675);

return statearr_59700;
})();
var statearr_59701_60387 = state_59682__$1;
(statearr_59701_60387[(2)] = inst_59676);

(statearr_59701_60387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59683 === (10))){
var inst_59666 = (state_59682[(2)]);
var state_59682__$1 = state_59682;
var statearr_59702_60388 = state_59682__$1;
(statearr_59702_60388[(2)] = inst_59666);

(statearr_59702_60388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59683 === (8))){
var inst_59655 = (state_59682[(11)]);
var inst_59646 = (state_59682[(8)]);
var tmp59699 = inst_59646;
var inst_59646__$1 = tmp59699;
var inst_59647 = inst_59655;
var state_59682__$1 = (function (){var statearr_59703 = state_59682;
(statearr_59703[(7)] = inst_59647);

(statearr_59703[(8)] = inst_59646__$1);

return statearr_59703;
})();
var statearr_59704_60389 = state_59682__$1;
(statearr_59704_60389[(2)] = null);

(statearr_59704_60389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58210__auto__ = null;
var cljs$core$async$state_machine__58210__auto____0 = (function (){
var statearr_59705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59705[(0)] = cljs$core$async$state_machine__58210__auto__);

(statearr_59705[(1)] = (1));

return statearr_59705;
});
var cljs$core$async$state_machine__58210__auto____1 = (function (state_59682){
while(true){
var ret_value__58211__auto__ = (function (){try{while(true){
var result__58212__auto__ = switch__58209__auto__(state_59682);
if(cljs.core.keyword_identical_QMARK_(result__58212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58212__auto__;
}
break;
}
}catch (e59706){var ex__58213__auto__ = e59706;
var statearr_59707_60390 = state_59682;
(statearr_59707_60390[(2)] = ex__58213__auto__);


if(cljs.core.seq((state_59682[(4)]))){
var statearr_59708_60391 = state_59682;
(statearr_59708_60391[(1)] = cljs.core.first((state_59682[(4)])));

} else {
throw ex__58213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60392 = state_59682;
state_59682 = G__60392;
continue;
} else {
return ret_value__58211__auto__;
}
break;
}
});
cljs$core$async$state_machine__58210__auto__ = function(state_59682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58210__auto____1.call(this,state_59682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58210__auto____0;
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58210__auto____1;
return cljs$core$async$state_machine__58210__auto__;
})()
})();
var state__58247__auto__ = (function (){var statearr_59709 = f__58246__auto__();
(statearr_59709[(6)] = c__58245__auto___60375);

return statearr_59709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58247__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__59711 = arguments.length;
switch (G__59711) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58245__auto___60394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58246__auto__ = (function (){var switch__58209__auto__ = (function (state_59753){
var state_val_59754 = (state_59753[(1)]);
if((state_val_59754 === (7))){
var inst_59749 = (state_59753[(2)]);
var state_59753__$1 = state_59753;
var statearr_59755_60395 = state_59753__$1;
(statearr_59755_60395[(2)] = inst_59749);

(statearr_59755_60395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59754 === (1))){
var inst_59712 = [];
var inst_59713 = inst_59712;
var inst_59714 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_59753__$1 = (function (){var statearr_59756 = state_59753;
(statearr_59756[(7)] = inst_59713);

(statearr_59756[(8)] = inst_59714);

return statearr_59756;
})();
var statearr_59757_60396 = state_59753__$1;
(statearr_59757_60396[(2)] = null);

(statearr_59757_60396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59754 === (4))){
var inst_59717 = (state_59753[(9)]);
var inst_59717__$1 = (state_59753[(2)]);
var inst_59718 = (inst_59717__$1 == null);
var inst_59719 = cljs.core.not(inst_59718);
var state_59753__$1 = (function (){var statearr_59758 = state_59753;
(statearr_59758[(9)] = inst_59717__$1);

return statearr_59758;
})();
if(inst_59719){
var statearr_59759_60397 = state_59753__$1;
(statearr_59759_60397[(1)] = (5));

} else {
var statearr_59760_60398 = state_59753__$1;
(statearr_59760_60398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59754 === (15))){
var inst_59743 = (state_59753[(2)]);
var state_59753__$1 = state_59753;
var statearr_59761_60399 = state_59753__$1;
(statearr_59761_60399[(2)] = inst_59743);

(statearr_59761_60399[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59754 === (13))){
var state_59753__$1 = state_59753;
var statearr_59762_60400 = state_59753__$1;
(statearr_59762_60400[(2)] = null);

(statearr_59762_60400[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59754 === (6))){
var inst_59713 = (state_59753[(7)]);
var inst_59738 = inst_59713.length;
var inst_59739 = (inst_59738 > (0));
var state_59753__$1 = state_59753;
if(cljs.core.truth_(inst_59739)){
var statearr_59763_60401 = state_59753__$1;
(statearr_59763_60401[(1)] = (12));

} else {
var statearr_59764_60402 = state_59753__$1;
(statearr_59764_60402[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59754 === (3))){
var inst_59751 = (state_59753[(2)]);
var state_59753__$1 = state_59753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59753__$1,inst_59751);
} else {
if((state_val_59754 === (12))){
var inst_59713 = (state_59753[(7)]);
var inst_59741 = cljs.core.vec(inst_59713);
var state_59753__$1 = state_59753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59753__$1,(15),out,inst_59741);
} else {
if((state_val_59754 === (2))){
var state_59753__$1 = state_59753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59753__$1,(4),ch);
} else {
if((state_val_59754 === (11))){
var inst_59721 = (state_59753[(10)]);
var inst_59717 = (state_59753[(9)]);
var inst_59731 = (state_59753[(2)]);
var inst_59732 = [];
var inst_59733 = inst_59732.push(inst_59717);
var inst_59713 = inst_59732;
var inst_59714 = inst_59721;
var state_59753__$1 = (function (){var statearr_59765 = state_59753;
(statearr_59765[(7)] = inst_59713);

(statearr_59765[(8)] = inst_59714);

(statearr_59765[(11)] = inst_59731);

(statearr_59765[(12)] = inst_59733);

return statearr_59765;
})();
var statearr_59766_60403 = state_59753__$1;
(statearr_59766_60403[(2)] = null);

(statearr_59766_60403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59754 === (9))){
var inst_59713 = (state_59753[(7)]);
var inst_59729 = cljs.core.vec(inst_59713);
var state_59753__$1 = state_59753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59753__$1,(11),out,inst_59729);
} else {
if((state_val_59754 === (5))){
var inst_59714 = (state_59753[(8)]);
var inst_59721 = (state_59753[(10)]);
var inst_59717 = (state_59753[(9)]);
var inst_59721__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_59717) : f.call(null,inst_59717));
var inst_59722 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59721__$1,inst_59714);
var inst_59723 = cljs.core.keyword_identical_QMARK_(inst_59714,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_59724 = ((inst_59722) || (inst_59723));
var state_59753__$1 = (function (){var statearr_59767 = state_59753;
(statearr_59767[(10)] = inst_59721__$1);

return statearr_59767;
})();
if(cljs.core.truth_(inst_59724)){
var statearr_59768_60404 = state_59753__$1;
(statearr_59768_60404[(1)] = (8));

} else {
var statearr_59769_60405 = state_59753__$1;
(statearr_59769_60405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59754 === (14))){
var inst_59746 = (state_59753[(2)]);
var inst_59747 = cljs.core.async.close_BANG_(out);
var state_59753__$1 = (function (){var statearr_59771 = state_59753;
(statearr_59771[(13)] = inst_59746);

return statearr_59771;
})();
var statearr_59772_60406 = state_59753__$1;
(statearr_59772_60406[(2)] = inst_59747);

(statearr_59772_60406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59754 === (10))){
var inst_59736 = (state_59753[(2)]);
var state_59753__$1 = state_59753;
var statearr_59773_60407 = state_59753__$1;
(statearr_59773_60407[(2)] = inst_59736);

(statearr_59773_60407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59754 === (8))){
var inst_59713 = (state_59753[(7)]);
var inst_59721 = (state_59753[(10)]);
var inst_59717 = (state_59753[(9)]);
var inst_59726 = inst_59713.push(inst_59717);
var tmp59770 = inst_59713;
var inst_59713__$1 = tmp59770;
var inst_59714 = inst_59721;
var state_59753__$1 = (function (){var statearr_59774 = state_59753;
(statearr_59774[(7)] = inst_59713__$1);

(statearr_59774[(8)] = inst_59714);

(statearr_59774[(14)] = inst_59726);

return statearr_59774;
})();
var statearr_59775_60408 = state_59753__$1;
(statearr_59775_60408[(2)] = null);

(statearr_59775_60408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58210__auto__ = null;
var cljs$core$async$state_machine__58210__auto____0 = (function (){
var statearr_59776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59776[(0)] = cljs$core$async$state_machine__58210__auto__);

(statearr_59776[(1)] = (1));

return statearr_59776;
});
var cljs$core$async$state_machine__58210__auto____1 = (function (state_59753){
while(true){
var ret_value__58211__auto__ = (function (){try{while(true){
var result__58212__auto__ = switch__58209__auto__(state_59753);
if(cljs.core.keyword_identical_QMARK_(result__58212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58212__auto__;
}
break;
}
}catch (e59777){var ex__58213__auto__ = e59777;
var statearr_59778_60409 = state_59753;
(statearr_59778_60409[(2)] = ex__58213__auto__);


if(cljs.core.seq((state_59753[(4)]))){
var statearr_59779_60410 = state_59753;
(statearr_59779_60410[(1)] = cljs.core.first((state_59753[(4)])));

} else {
throw ex__58213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60411 = state_59753;
state_59753 = G__60411;
continue;
} else {
return ret_value__58211__auto__;
}
break;
}
});
cljs$core$async$state_machine__58210__auto__ = function(state_59753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58210__auto____1.call(this,state_59753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58210__auto____0;
cljs$core$async$state_machine__58210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58210__auto____1;
return cljs$core$async$state_machine__58210__auto__;
})()
})();
var state__58247__auto__ = (function (){var statearr_59780 = f__58246__auto__();
(statearr_59780[(6)] = c__58245__auto___60394);

return statearr_59780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58247__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
