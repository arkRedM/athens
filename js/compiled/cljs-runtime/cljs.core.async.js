goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__62717 = arguments.length;
switch (G__62717) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62718 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62718 = (function (f,blockable,meta62719){
this.f = f;
this.blockable = blockable;
this.meta62719 = meta62719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62720,meta62719__$1){
var self__ = this;
var _62720__$1 = this;
return (new cljs.core.async.t_cljs$core$async62718(self__.f,self__.blockable,meta62719__$1));
}));

(cljs.core.async.t_cljs$core$async62718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62720){
var self__ = this;
var _62720__$1 = this;
return self__.meta62719;
}));

(cljs.core.async.t_cljs$core$async62718.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62718.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async62718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async62718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta62719","meta62719",684151539,null)], null);
}));

(cljs.core.async.t_cljs$core$async62718.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62718");

(cljs.core.async.t_cljs$core$async62718.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async62718");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62718.
 */
cljs.core.async.__GT_t_cljs$core$async62718 = (function cljs$core$async$__GT_t_cljs$core$async62718(f__$1,blockable__$1,meta62719){
return (new cljs.core.async.t_cljs$core$async62718(f__$1,blockable__$1,meta62719));
});

}

return (new cljs.core.async.t_cljs$core$async62718(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__62729 = arguments.length;
switch (G__62729) {
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
var G__62733 = arguments.length;
switch (G__62733) {
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
var G__62735 = arguments.length;
switch (G__62735) {
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
var val_64218 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_64218) : fn1.call(null,val_64218));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_64218) : fn1.call(null,val_64218));
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
var G__62739 = arguments.length;
switch (G__62739) {
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
var n__4613__auto___64220 = n;
var x_64221 = (0);
while(true){
if((x_64221 < n__4613__auto___64220)){
(a[x_64221] = x_64221);

var G__64222 = (x_64221 + (1));
x_64221 = G__64222;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62742 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62742 = (function (flag,meta62743){
this.flag = flag;
this.meta62743 = meta62743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62744,meta62743__$1){
var self__ = this;
var _62744__$1 = this;
return (new cljs.core.async.t_cljs$core$async62742(self__.flag,meta62743__$1));
}));

(cljs.core.async.t_cljs$core$async62742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62744){
var self__ = this;
var _62744__$1 = this;
return self__.meta62743;
}));

(cljs.core.async.t_cljs$core$async62742.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62742.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async62742.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62742.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async62742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta62743","meta62743",-1528557996,null)], null);
}));

(cljs.core.async.t_cljs$core$async62742.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62742");

(cljs.core.async.t_cljs$core$async62742.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async62742");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62742.
 */
cljs.core.async.__GT_t_cljs$core$async62742 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async62742(flag__$1,meta62743){
return (new cljs.core.async.t_cljs$core$async62742(flag__$1,meta62743));
});

}

return (new cljs.core.async.t_cljs$core$async62742(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62745 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62745 = (function (flag,cb,meta62746){
this.flag = flag;
this.cb = cb;
this.meta62746 = meta62746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62747,meta62746__$1){
var self__ = this;
var _62747__$1 = this;
return (new cljs.core.async.t_cljs$core$async62745(self__.flag,self__.cb,meta62746__$1));
}));

(cljs.core.async.t_cljs$core$async62745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62747){
var self__ = this;
var _62747__$1 = this;
return self__.meta62746;
}));

(cljs.core.async.t_cljs$core$async62745.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62745.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async62745.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62745.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async62745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta62746","meta62746",-109539755,null)], null);
}));

(cljs.core.async.t_cljs$core$async62745.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62745");

(cljs.core.async.t_cljs$core$async62745.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async62745");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62745.
 */
cljs.core.async.__GT_t_cljs$core$async62745 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async62745(flag__$1,cb__$1,meta62746){
return (new cljs.core.async.t_cljs$core$async62745(flag__$1,cb__$1,meta62746));
});

}

return (new cljs.core.async.t_cljs$core$async62745(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__62748_SHARP_){
var G__62750 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62748_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__62750) : fret.call(null,G__62750));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__62749_SHARP_){
var G__62751 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62749_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__62751) : fret.call(null,G__62751));
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
var G__64232 = (i + (1));
i = G__64232;
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
var len__4736__auto___64237 = arguments.length;
var i__4737__auto___64238 = (0);
while(true){
if((i__4737__auto___64238 < len__4736__auto___64237)){
args__4742__auto__.push((arguments[i__4737__auto___64238]));

var G__64240 = (i__4737__auto___64238 + (1));
i__4737__auto___64238 = G__64240;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__62754){
var map__62755 = p__62754;
var map__62755__$1 = (((((!((map__62755 == null))))?(((((map__62755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62755):map__62755);
var opts = map__62755__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq62752){
var G__62753 = cljs.core.first(seq62752);
var seq62752__$1 = cljs.core.next(seq62752);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62753,seq62752__$1);
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
var G__62758 = arguments.length;
switch (G__62758) {
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
var c__62659__auto___64246 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = (function (state_62782){
var state_val_62783 = (state_62782[(1)]);
if((state_val_62783 === (7))){
var inst_62778 = (state_62782[(2)]);
var state_62782__$1 = state_62782;
var statearr_62784_64247 = state_62782__$1;
(statearr_62784_64247[(2)] = inst_62778);

(statearr_62784_64247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62783 === (1))){
var state_62782__$1 = state_62782;
var statearr_62785_64250 = state_62782__$1;
(statearr_62785_64250[(2)] = null);

(statearr_62785_64250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62783 === (4))){
var inst_62761 = (state_62782[(7)]);
var inst_62761__$1 = (state_62782[(2)]);
var inst_62762 = (inst_62761__$1 == null);
var state_62782__$1 = (function (){var statearr_62786 = state_62782;
(statearr_62786[(7)] = inst_62761__$1);

return statearr_62786;
})();
if(cljs.core.truth_(inst_62762)){
var statearr_62787_64252 = state_62782__$1;
(statearr_62787_64252[(1)] = (5));

} else {
var statearr_62788_64253 = state_62782__$1;
(statearr_62788_64253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62783 === (13))){
var state_62782__$1 = state_62782;
var statearr_62789_64254 = state_62782__$1;
(statearr_62789_64254[(2)] = null);

(statearr_62789_64254[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62783 === (6))){
var inst_62761 = (state_62782[(7)]);
var state_62782__$1 = state_62782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62782__$1,(11),to,inst_62761);
} else {
if((state_val_62783 === (3))){
var inst_62780 = (state_62782[(2)]);
var state_62782__$1 = state_62782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62782__$1,inst_62780);
} else {
if((state_val_62783 === (12))){
var state_62782__$1 = state_62782;
var statearr_62790_64255 = state_62782__$1;
(statearr_62790_64255[(2)] = null);

(statearr_62790_64255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62783 === (2))){
var state_62782__$1 = state_62782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62782__$1,(4),from);
} else {
if((state_val_62783 === (11))){
var inst_62771 = (state_62782[(2)]);
var state_62782__$1 = state_62782;
if(cljs.core.truth_(inst_62771)){
var statearr_62791_64256 = state_62782__$1;
(statearr_62791_64256[(1)] = (12));

} else {
var statearr_62792_64257 = state_62782__$1;
(statearr_62792_64257[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62783 === (9))){
var state_62782__$1 = state_62782;
var statearr_62793_64258 = state_62782__$1;
(statearr_62793_64258[(2)] = null);

(statearr_62793_64258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62783 === (5))){
var state_62782__$1 = state_62782;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62794_64259 = state_62782__$1;
(statearr_62794_64259[(1)] = (8));

} else {
var statearr_62795_64260 = state_62782__$1;
(statearr_62795_64260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62783 === (14))){
var inst_62776 = (state_62782[(2)]);
var state_62782__$1 = state_62782;
var statearr_62796_64261 = state_62782__$1;
(statearr_62796_64261[(2)] = inst_62776);

(statearr_62796_64261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62783 === (10))){
var inst_62768 = (state_62782[(2)]);
var state_62782__$1 = state_62782;
var statearr_62797_64262 = state_62782__$1;
(statearr_62797_64262[(2)] = inst_62768);

(statearr_62797_64262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62783 === (8))){
var inst_62765 = cljs.core.async.close_BANG_(to);
var state_62782__$1 = state_62782;
var statearr_62798_64263 = state_62782__$1;
(statearr_62798_64263[(2)] = inst_62765);

(statearr_62798_64263[(1)] = (10));


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
var cljs$core$async$state_machine__62624__auto__ = null;
var cljs$core$async$state_machine__62624__auto____0 = (function (){
var statearr_62799 = [null,null,null,null,null,null,null,null];
(statearr_62799[(0)] = cljs$core$async$state_machine__62624__auto__);

(statearr_62799[(1)] = (1));

return statearr_62799;
});
var cljs$core$async$state_machine__62624__auto____1 = (function (state_62782){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_62782);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e62800){var ex__62627__auto__ = e62800;
var statearr_62801_64264 = state_62782;
(statearr_62801_64264[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_62782[(4)]))){
var statearr_62802_64265 = state_62782;
(statearr_62802_64265[(1)] = cljs.core.first((state_62782[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64266 = state_62782;
state_62782 = G__64266;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
cljs$core$async$state_machine__62624__auto__ = function(state_62782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62624__auto____1.call(this,state_62782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62624__auto____0;
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62624__auto____1;
return cljs$core$async$state_machine__62624__auto__;
})()
})();
var state__62661__auto__ = (function (){var statearr_62803 = f__62660__auto__();
(statearr_62803[(6)] = c__62659__auto___64246);

return statearr_62803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
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
var process = (function (p__62804){
var vec__62805 = p__62804;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62805,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62805,(1),null);
var job = vec__62805;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__62659__auto___64275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = (function (state_62812){
var state_val_62813 = (state_62812[(1)]);
if((state_val_62813 === (1))){
var state_62812__$1 = state_62812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62812__$1,(2),res,v);
} else {
if((state_val_62813 === (2))){
var inst_62809 = (state_62812[(2)]);
var inst_62810 = cljs.core.async.close_BANG_(res);
var state_62812__$1 = (function (){var statearr_62814 = state_62812;
(statearr_62814[(7)] = inst_62809);

return statearr_62814;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62812__$1,inst_62810);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____0 = (function (){
var statearr_62815 = [null,null,null,null,null,null,null,null];
(statearr_62815[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__);

(statearr_62815[(1)] = (1));

return statearr_62815;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____1 = (function (state_62812){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_62812);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e62816){var ex__62627__auto__ = e62816;
var statearr_62817_64282 = state_62812;
(statearr_62817_64282[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_62812[(4)]))){
var statearr_62818_64283 = state_62812;
(statearr_62818_64283[(1)] = cljs.core.first((state_62812[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64286 = state_62812;
state_62812 = G__64286;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__ = function(state_62812){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____1.call(this,state_62812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__;
})()
})();
var state__62661__auto__ = (function (){var statearr_62819 = f__62660__auto__();
(statearr_62819[(6)] = c__62659__auto___64275);

return statearr_62819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__62820){
var vec__62821 = p__62820;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62821,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62821,(1),null);
var job = vec__62821;
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
var n__4613__auto___64288 = n;
var __64289 = (0);
while(true){
if((__64289 < n__4613__auto___64288)){
var G__62824_64290 = type;
var G__62824_64291__$1 = (((G__62824_64290 instanceof cljs.core.Keyword))?G__62824_64290.fqn:null);
switch (G__62824_64291__$1) {
case "compute":
var c__62659__auto___64293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__64289,c__62659__auto___64293,G__62824_64290,G__62824_64291__$1,n__4613__auto___64288,jobs,results,process,async){
return (function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = ((function (__64289,c__62659__auto___64293,G__62824_64290,G__62824_64291__$1,n__4613__auto___64288,jobs,results,process,async){
return (function (state_62837){
var state_val_62838 = (state_62837[(1)]);
if((state_val_62838 === (1))){
var state_62837__$1 = state_62837;
var statearr_62839_64294 = state_62837__$1;
(statearr_62839_64294[(2)] = null);

(statearr_62839_64294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62838 === (2))){
var state_62837__$1 = state_62837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62837__$1,(4),jobs);
} else {
if((state_val_62838 === (3))){
var inst_62835 = (state_62837[(2)]);
var state_62837__$1 = state_62837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62837__$1,inst_62835);
} else {
if((state_val_62838 === (4))){
var inst_62827 = (state_62837[(2)]);
var inst_62828 = process(inst_62827);
var state_62837__$1 = state_62837;
if(cljs.core.truth_(inst_62828)){
var statearr_62840_64295 = state_62837__$1;
(statearr_62840_64295[(1)] = (5));

} else {
var statearr_62841_64296 = state_62837__$1;
(statearr_62841_64296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62838 === (5))){
var state_62837__$1 = state_62837;
var statearr_62842_64297 = state_62837__$1;
(statearr_62842_64297[(2)] = null);

(statearr_62842_64297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62838 === (6))){
var state_62837__$1 = state_62837;
var statearr_62843_64298 = state_62837__$1;
(statearr_62843_64298[(2)] = null);

(statearr_62843_64298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62838 === (7))){
var inst_62833 = (state_62837[(2)]);
var state_62837__$1 = state_62837;
var statearr_62844_64299 = state_62837__$1;
(statearr_62844_64299[(2)] = inst_62833);

(statearr_62844_64299[(1)] = (3));


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
});})(__64289,c__62659__auto___64293,G__62824_64290,G__62824_64291__$1,n__4613__auto___64288,jobs,results,process,async))
;
return ((function (__64289,switch__62623__auto__,c__62659__auto___64293,G__62824_64290,G__62824_64291__$1,n__4613__auto___64288,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____0 = (function (){
var statearr_62845 = [null,null,null,null,null,null,null];
(statearr_62845[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__);

(statearr_62845[(1)] = (1));

return statearr_62845;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____1 = (function (state_62837){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_62837);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e62846){var ex__62627__auto__ = e62846;
var statearr_62847_64300 = state_62837;
(statearr_62847_64300[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_62837[(4)]))){
var statearr_62848_64301 = state_62837;
(statearr_62848_64301[(1)] = cljs.core.first((state_62837[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64302 = state_62837;
state_62837 = G__64302;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__ = function(state_62837){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____1.call(this,state_62837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__;
})()
;})(__64289,switch__62623__auto__,c__62659__auto___64293,G__62824_64290,G__62824_64291__$1,n__4613__auto___64288,jobs,results,process,async))
})();
var state__62661__auto__ = (function (){var statearr_62849 = f__62660__auto__();
(statearr_62849[(6)] = c__62659__auto___64293);

return statearr_62849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
});})(__64289,c__62659__auto___64293,G__62824_64290,G__62824_64291__$1,n__4613__auto___64288,jobs,results,process,async))
);


break;
case "async":
var c__62659__auto___64303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__64289,c__62659__auto___64303,G__62824_64290,G__62824_64291__$1,n__4613__auto___64288,jobs,results,process,async){
return (function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = ((function (__64289,c__62659__auto___64303,G__62824_64290,G__62824_64291__$1,n__4613__auto___64288,jobs,results,process,async){
return (function (state_62862){
var state_val_62863 = (state_62862[(1)]);
if((state_val_62863 === (1))){
var state_62862__$1 = state_62862;
var statearr_62864_64304 = state_62862__$1;
(statearr_62864_64304[(2)] = null);

(statearr_62864_64304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (2))){
var state_62862__$1 = state_62862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62862__$1,(4),jobs);
} else {
if((state_val_62863 === (3))){
var inst_62860 = (state_62862[(2)]);
var state_62862__$1 = state_62862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62862__$1,inst_62860);
} else {
if((state_val_62863 === (4))){
var inst_62852 = (state_62862[(2)]);
var inst_62853 = async(inst_62852);
var state_62862__$1 = state_62862;
if(cljs.core.truth_(inst_62853)){
var statearr_62865_64305 = state_62862__$1;
(statearr_62865_64305[(1)] = (5));

} else {
var statearr_62866_64306 = state_62862__$1;
(statearr_62866_64306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (5))){
var state_62862__$1 = state_62862;
var statearr_62867_64307 = state_62862__$1;
(statearr_62867_64307[(2)] = null);

(statearr_62867_64307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (6))){
var state_62862__$1 = state_62862;
var statearr_62868_64308 = state_62862__$1;
(statearr_62868_64308[(2)] = null);

(statearr_62868_64308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (7))){
var inst_62858 = (state_62862[(2)]);
var state_62862__$1 = state_62862;
var statearr_62869_64309 = state_62862__$1;
(statearr_62869_64309[(2)] = inst_62858);

(statearr_62869_64309[(1)] = (3));


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
});})(__64289,c__62659__auto___64303,G__62824_64290,G__62824_64291__$1,n__4613__auto___64288,jobs,results,process,async))
;
return ((function (__64289,switch__62623__auto__,c__62659__auto___64303,G__62824_64290,G__62824_64291__$1,n__4613__auto___64288,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____0 = (function (){
var statearr_62870 = [null,null,null,null,null,null,null];
(statearr_62870[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__);

(statearr_62870[(1)] = (1));

return statearr_62870;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____1 = (function (state_62862){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_62862);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e62871){var ex__62627__auto__ = e62871;
var statearr_62872_64310 = state_62862;
(statearr_62872_64310[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_62862[(4)]))){
var statearr_62873_64311 = state_62862;
(statearr_62873_64311[(1)] = cljs.core.first((state_62862[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64312 = state_62862;
state_62862 = G__64312;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__ = function(state_62862){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____1.call(this,state_62862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__;
})()
;})(__64289,switch__62623__auto__,c__62659__auto___64303,G__62824_64290,G__62824_64291__$1,n__4613__auto___64288,jobs,results,process,async))
})();
var state__62661__auto__ = (function (){var statearr_62874 = f__62660__auto__();
(statearr_62874[(6)] = c__62659__auto___64303);

return statearr_62874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
});})(__64289,c__62659__auto___64303,G__62824_64290,G__62824_64291__$1,n__4613__auto___64288,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62824_64291__$1)].join('')));

}

var G__64313 = (__64289 + (1));
__64289 = G__64313;
continue;
} else {
}
break;
}

var c__62659__auto___64314 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = (function (state_62896){
var state_val_62897 = (state_62896[(1)]);
if((state_val_62897 === (7))){
var inst_62892 = (state_62896[(2)]);
var state_62896__$1 = state_62896;
var statearr_62898_64315 = state_62896__$1;
(statearr_62898_64315[(2)] = inst_62892);

(statearr_62898_64315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62897 === (1))){
var state_62896__$1 = state_62896;
var statearr_62899_64316 = state_62896__$1;
(statearr_62899_64316[(2)] = null);

(statearr_62899_64316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62897 === (4))){
var inst_62877 = (state_62896[(7)]);
var inst_62877__$1 = (state_62896[(2)]);
var inst_62878 = (inst_62877__$1 == null);
var state_62896__$1 = (function (){var statearr_62900 = state_62896;
(statearr_62900[(7)] = inst_62877__$1);

return statearr_62900;
})();
if(cljs.core.truth_(inst_62878)){
var statearr_62901_64317 = state_62896__$1;
(statearr_62901_64317[(1)] = (5));

} else {
var statearr_62902_64318 = state_62896__$1;
(statearr_62902_64318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62897 === (6))){
var inst_62877 = (state_62896[(7)]);
var inst_62882 = (state_62896[(8)]);
var inst_62882__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_62883 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62884 = [inst_62877,inst_62882__$1];
var inst_62885 = (new cljs.core.PersistentVector(null,2,(5),inst_62883,inst_62884,null));
var state_62896__$1 = (function (){var statearr_62903 = state_62896;
(statearr_62903[(8)] = inst_62882__$1);

return statearr_62903;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62896__$1,(8),jobs,inst_62885);
} else {
if((state_val_62897 === (3))){
var inst_62894 = (state_62896[(2)]);
var state_62896__$1 = state_62896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62896__$1,inst_62894);
} else {
if((state_val_62897 === (2))){
var state_62896__$1 = state_62896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62896__$1,(4),from);
} else {
if((state_val_62897 === (9))){
var inst_62889 = (state_62896[(2)]);
var state_62896__$1 = (function (){var statearr_62904 = state_62896;
(statearr_62904[(9)] = inst_62889);

return statearr_62904;
})();
var statearr_62905_64319 = state_62896__$1;
(statearr_62905_64319[(2)] = null);

(statearr_62905_64319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62897 === (5))){
var inst_62880 = cljs.core.async.close_BANG_(jobs);
var state_62896__$1 = state_62896;
var statearr_62906_64320 = state_62896__$1;
(statearr_62906_64320[(2)] = inst_62880);

(statearr_62906_64320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62897 === (8))){
var inst_62882 = (state_62896[(8)]);
var inst_62887 = (state_62896[(2)]);
var state_62896__$1 = (function (){var statearr_62907 = state_62896;
(statearr_62907[(10)] = inst_62887);

return statearr_62907;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62896__$1,(9),results,inst_62882);
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
var cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____0 = (function (){
var statearr_62908 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62908[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__);

(statearr_62908[(1)] = (1));

return statearr_62908;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____1 = (function (state_62896){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_62896);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e62909){var ex__62627__auto__ = e62909;
var statearr_62910_64321 = state_62896;
(statearr_62910_64321[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_62896[(4)]))){
var statearr_62911_64322 = state_62896;
(statearr_62911_64322[(1)] = cljs.core.first((state_62896[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64323 = state_62896;
state_62896 = G__64323;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__ = function(state_62896){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____1.call(this,state_62896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__;
})()
})();
var state__62661__auto__ = (function (){var statearr_62912 = f__62660__auto__();
(statearr_62912[(6)] = c__62659__auto___64314);

return statearr_62912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
}));


var c__62659__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = (function (state_62950){
var state_val_62951 = (state_62950[(1)]);
if((state_val_62951 === (7))){
var inst_62946 = (state_62950[(2)]);
var state_62950__$1 = state_62950;
var statearr_62952_64324 = state_62950__$1;
(statearr_62952_64324[(2)] = inst_62946);

(statearr_62952_64324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62951 === (20))){
var state_62950__$1 = state_62950;
var statearr_62953_64325 = state_62950__$1;
(statearr_62953_64325[(2)] = null);

(statearr_62953_64325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62951 === (1))){
var state_62950__$1 = state_62950;
var statearr_62954_64326 = state_62950__$1;
(statearr_62954_64326[(2)] = null);

(statearr_62954_64326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62951 === (4))){
var inst_62915 = (state_62950[(7)]);
var inst_62915__$1 = (state_62950[(2)]);
var inst_62916 = (inst_62915__$1 == null);
var state_62950__$1 = (function (){var statearr_62955 = state_62950;
(statearr_62955[(7)] = inst_62915__$1);

return statearr_62955;
})();
if(cljs.core.truth_(inst_62916)){
var statearr_62956_64327 = state_62950__$1;
(statearr_62956_64327[(1)] = (5));

} else {
var statearr_62957_64328 = state_62950__$1;
(statearr_62957_64328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62951 === (15))){
var inst_62928 = (state_62950[(8)]);
var state_62950__$1 = state_62950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62950__$1,(18),to,inst_62928);
} else {
if((state_val_62951 === (21))){
var inst_62941 = (state_62950[(2)]);
var state_62950__$1 = state_62950;
var statearr_62958_64329 = state_62950__$1;
(statearr_62958_64329[(2)] = inst_62941);

(statearr_62958_64329[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62951 === (13))){
var inst_62943 = (state_62950[(2)]);
var state_62950__$1 = (function (){var statearr_62959 = state_62950;
(statearr_62959[(9)] = inst_62943);

return statearr_62959;
})();
var statearr_62960_64330 = state_62950__$1;
(statearr_62960_64330[(2)] = null);

(statearr_62960_64330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62951 === (6))){
var inst_62915 = (state_62950[(7)]);
var state_62950__$1 = state_62950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62950__$1,(11),inst_62915);
} else {
if((state_val_62951 === (17))){
var inst_62936 = (state_62950[(2)]);
var state_62950__$1 = state_62950;
if(cljs.core.truth_(inst_62936)){
var statearr_62961_64331 = state_62950__$1;
(statearr_62961_64331[(1)] = (19));

} else {
var statearr_62962_64332 = state_62950__$1;
(statearr_62962_64332[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62951 === (3))){
var inst_62948 = (state_62950[(2)]);
var state_62950__$1 = state_62950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62950__$1,inst_62948);
} else {
if((state_val_62951 === (12))){
var inst_62925 = (state_62950[(10)]);
var state_62950__$1 = state_62950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62950__$1,(14),inst_62925);
} else {
if((state_val_62951 === (2))){
var state_62950__$1 = state_62950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62950__$1,(4),results);
} else {
if((state_val_62951 === (19))){
var state_62950__$1 = state_62950;
var statearr_62963_64333 = state_62950__$1;
(statearr_62963_64333[(2)] = null);

(statearr_62963_64333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62951 === (11))){
var inst_62925 = (state_62950[(2)]);
var state_62950__$1 = (function (){var statearr_62964 = state_62950;
(statearr_62964[(10)] = inst_62925);

return statearr_62964;
})();
var statearr_62965_64334 = state_62950__$1;
(statearr_62965_64334[(2)] = null);

(statearr_62965_64334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62951 === (9))){
var state_62950__$1 = state_62950;
var statearr_62966_64335 = state_62950__$1;
(statearr_62966_64335[(2)] = null);

(statearr_62966_64335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62951 === (5))){
var state_62950__$1 = state_62950;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62967_64336 = state_62950__$1;
(statearr_62967_64336[(1)] = (8));

} else {
var statearr_62968_64337 = state_62950__$1;
(statearr_62968_64337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62951 === (14))){
var inst_62928 = (state_62950[(8)]);
var inst_62928__$1 = (state_62950[(2)]);
var inst_62929 = (inst_62928__$1 == null);
var inst_62930 = cljs.core.not(inst_62929);
var state_62950__$1 = (function (){var statearr_62969 = state_62950;
(statearr_62969[(8)] = inst_62928__$1);

return statearr_62969;
})();
if(inst_62930){
var statearr_62970_64338 = state_62950__$1;
(statearr_62970_64338[(1)] = (15));

} else {
var statearr_62971_64339 = state_62950__$1;
(statearr_62971_64339[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62951 === (16))){
var state_62950__$1 = state_62950;
var statearr_62972_64340 = state_62950__$1;
(statearr_62972_64340[(2)] = false);

(statearr_62972_64340[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62951 === (10))){
var inst_62922 = (state_62950[(2)]);
var state_62950__$1 = state_62950;
var statearr_62973_64341 = state_62950__$1;
(statearr_62973_64341[(2)] = inst_62922);

(statearr_62973_64341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62951 === (18))){
var inst_62933 = (state_62950[(2)]);
var state_62950__$1 = state_62950;
var statearr_62974_64342 = state_62950__$1;
(statearr_62974_64342[(2)] = inst_62933);

(statearr_62974_64342[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62951 === (8))){
var inst_62919 = cljs.core.async.close_BANG_(to);
var state_62950__$1 = state_62950;
var statearr_62975_64343 = state_62950__$1;
(statearr_62975_64343[(2)] = inst_62919);

(statearr_62975_64343[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____0 = (function (){
var statearr_62976 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62976[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__);

(statearr_62976[(1)] = (1));

return statearr_62976;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____1 = (function (state_62950){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_62950);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e62977){var ex__62627__auto__ = e62977;
var statearr_62978_64344 = state_62950;
(statearr_62978_64344[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_62950[(4)]))){
var statearr_62979_64345 = state_62950;
(statearr_62979_64345[(1)] = cljs.core.first((state_62950[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64346 = state_62950;
state_62950 = G__64346;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__ = function(state_62950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____1.call(this,state_62950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62624__auto__;
})()
})();
var state__62661__auto__ = (function (){var statearr_62980 = f__62660__auto__();
(statearr_62980[(6)] = c__62659__auto__);

return statearr_62980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
}));

return c__62659__auto__;
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
var G__62982 = arguments.length;
switch (G__62982) {
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
var G__62984 = arguments.length;
switch (G__62984) {
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
var G__62986 = arguments.length;
switch (G__62986) {
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
var c__62659__auto___64350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = (function (state_63012){
var state_val_63013 = (state_63012[(1)]);
if((state_val_63013 === (7))){
var inst_63008 = (state_63012[(2)]);
var state_63012__$1 = state_63012;
var statearr_63014_64351 = state_63012__$1;
(statearr_63014_64351[(2)] = inst_63008);

(statearr_63014_64351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63013 === (1))){
var state_63012__$1 = state_63012;
var statearr_63015_64352 = state_63012__$1;
(statearr_63015_64352[(2)] = null);

(statearr_63015_64352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63013 === (4))){
var inst_62989 = (state_63012[(7)]);
var inst_62989__$1 = (state_63012[(2)]);
var inst_62990 = (inst_62989__$1 == null);
var state_63012__$1 = (function (){var statearr_63016 = state_63012;
(statearr_63016[(7)] = inst_62989__$1);

return statearr_63016;
})();
if(cljs.core.truth_(inst_62990)){
var statearr_63017_64353 = state_63012__$1;
(statearr_63017_64353[(1)] = (5));

} else {
var statearr_63018_64354 = state_63012__$1;
(statearr_63018_64354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63013 === (13))){
var state_63012__$1 = state_63012;
var statearr_63019_64355 = state_63012__$1;
(statearr_63019_64355[(2)] = null);

(statearr_63019_64355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63013 === (6))){
var inst_62989 = (state_63012[(7)]);
var inst_62995 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_62989) : p.call(null,inst_62989));
var state_63012__$1 = state_63012;
if(cljs.core.truth_(inst_62995)){
var statearr_63020_64356 = state_63012__$1;
(statearr_63020_64356[(1)] = (9));

} else {
var statearr_63021_64357 = state_63012__$1;
(statearr_63021_64357[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63013 === (3))){
var inst_63010 = (state_63012[(2)]);
var state_63012__$1 = state_63012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63012__$1,inst_63010);
} else {
if((state_val_63013 === (12))){
var state_63012__$1 = state_63012;
var statearr_63022_64358 = state_63012__$1;
(statearr_63022_64358[(2)] = null);

(statearr_63022_64358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63013 === (2))){
var state_63012__$1 = state_63012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63012__$1,(4),ch);
} else {
if((state_val_63013 === (11))){
var inst_62989 = (state_63012[(7)]);
var inst_62999 = (state_63012[(2)]);
var state_63012__$1 = state_63012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63012__$1,(8),inst_62999,inst_62989);
} else {
if((state_val_63013 === (9))){
var state_63012__$1 = state_63012;
var statearr_63023_64359 = state_63012__$1;
(statearr_63023_64359[(2)] = tc);

(statearr_63023_64359[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63013 === (5))){
var inst_62992 = cljs.core.async.close_BANG_(tc);
var inst_62993 = cljs.core.async.close_BANG_(fc);
var state_63012__$1 = (function (){var statearr_63024 = state_63012;
(statearr_63024[(8)] = inst_62992);

return statearr_63024;
})();
var statearr_63025_64360 = state_63012__$1;
(statearr_63025_64360[(2)] = inst_62993);

(statearr_63025_64360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63013 === (14))){
var inst_63006 = (state_63012[(2)]);
var state_63012__$1 = state_63012;
var statearr_63026_64361 = state_63012__$1;
(statearr_63026_64361[(2)] = inst_63006);

(statearr_63026_64361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63013 === (10))){
var state_63012__$1 = state_63012;
var statearr_63027_64362 = state_63012__$1;
(statearr_63027_64362[(2)] = fc);

(statearr_63027_64362[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63013 === (8))){
var inst_63001 = (state_63012[(2)]);
var state_63012__$1 = state_63012;
if(cljs.core.truth_(inst_63001)){
var statearr_63028_64363 = state_63012__$1;
(statearr_63028_64363[(1)] = (12));

} else {
var statearr_63029_64364 = state_63012__$1;
(statearr_63029_64364[(1)] = (13));

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
var cljs$core$async$state_machine__62624__auto__ = null;
var cljs$core$async$state_machine__62624__auto____0 = (function (){
var statearr_63030 = [null,null,null,null,null,null,null,null,null];
(statearr_63030[(0)] = cljs$core$async$state_machine__62624__auto__);

(statearr_63030[(1)] = (1));

return statearr_63030;
});
var cljs$core$async$state_machine__62624__auto____1 = (function (state_63012){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_63012);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e63031){var ex__62627__auto__ = e63031;
var statearr_63032_64365 = state_63012;
(statearr_63032_64365[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_63012[(4)]))){
var statearr_63033_64366 = state_63012;
(statearr_63033_64366[(1)] = cljs.core.first((state_63012[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64367 = state_63012;
state_63012 = G__64367;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
cljs$core$async$state_machine__62624__auto__ = function(state_63012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62624__auto____1.call(this,state_63012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62624__auto____0;
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62624__auto____1;
return cljs$core$async$state_machine__62624__auto__;
})()
})();
var state__62661__auto__ = (function (){var statearr_63034 = f__62660__auto__();
(statearr_63034[(6)] = c__62659__auto___64350);

return statearr_63034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
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
var c__62659__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = (function (state_63056){
var state_val_63057 = (state_63056[(1)]);
if((state_val_63057 === (7))){
var inst_63052 = (state_63056[(2)]);
var state_63056__$1 = state_63056;
var statearr_63058_64368 = state_63056__$1;
(statearr_63058_64368[(2)] = inst_63052);

(statearr_63058_64368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63057 === (1))){
var inst_63035 = init;
var inst_63036 = inst_63035;
var state_63056__$1 = (function (){var statearr_63059 = state_63056;
(statearr_63059[(7)] = inst_63036);

return statearr_63059;
})();
var statearr_63060_64369 = state_63056__$1;
(statearr_63060_64369[(2)] = null);

(statearr_63060_64369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63057 === (4))){
var inst_63039 = (state_63056[(8)]);
var inst_63039__$1 = (state_63056[(2)]);
var inst_63040 = (inst_63039__$1 == null);
var state_63056__$1 = (function (){var statearr_63061 = state_63056;
(statearr_63061[(8)] = inst_63039__$1);

return statearr_63061;
})();
if(cljs.core.truth_(inst_63040)){
var statearr_63062_64370 = state_63056__$1;
(statearr_63062_64370[(1)] = (5));

} else {
var statearr_63063_64371 = state_63056__$1;
(statearr_63063_64371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63057 === (6))){
var inst_63043 = (state_63056[(9)]);
var inst_63039 = (state_63056[(8)]);
var inst_63036 = (state_63056[(7)]);
var inst_63043__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_63036,inst_63039) : f.call(null,inst_63036,inst_63039));
var inst_63044 = cljs.core.reduced_QMARK_(inst_63043__$1);
var state_63056__$1 = (function (){var statearr_63064 = state_63056;
(statearr_63064[(9)] = inst_63043__$1);

return statearr_63064;
})();
if(inst_63044){
var statearr_63065_64372 = state_63056__$1;
(statearr_63065_64372[(1)] = (8));

} else {
var statearr_63066_64373 = state_63056__$1;
(statearr_63066_64373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63057 === (3))){
var inst_63054 = (state_63056[(2)]);
var state_63056__$1 = state_63056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63056__$1,inst_63054);
} else {
if((state_val_63057 === (2))){
var state_63056__$1 = state_63056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63056__$1,(4),ch);
} else {
if((state_val_63057 === (9))){
var inst_63043 = (state_63056[(9)]);
var inst_63036 = inst_63043;
var state_63056__$1 = (function (){var statearr_63067 = state_63056;
(statearr_63067[(7)] = inst_63036);

return statearr_63067;
})();
var statearr_63068_64374 = state_63056__$1;
(statearr_63068_64374[(2)] = null);

(statearr_63068_64374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63057 === (5))){
var inst_63036 = (state_63056[(7)]);
var state_63056__$1 = state_63056;
var statearr_63069_64375 = state_63056__$1;
(statearr_63069_64375[(2)] = inst_63036);

(statearr_63069_64375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63057 === (10))){
var inst_63050 = (state_63056[(2)]);
var state_63056__$1 = state_63056;
var statearr_63070_64376 = state_63056__$1;
(statearr_63070_64376[(2)] = inst_63050);

(statearr_63070_64376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63057 === (8))){
var inst_63043 = (state_63056[(9)]);
var inst_63046 = cljs.core.deref(inst_63043);
var state_63056__$1 = state_63056;
var statearr_63071_64377 = state_63056__$1;
(statearr_63071_64377[(2)] = inst_63046);

(statearr_63071_64377[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__62624__auto__ = null;
var cljs$core$async$reduce_$_state_machine__62624__auto____0 = (function (){
var statearr_63072 = [null,null,null,null,null,null,null,null,null,null];
(statearr_63072[(0)] = cljs$core$async$reduce_$_state_machine__62624__auto__);

(statearr_63072[(1)] = (1));

return statearr_63072;
});
var cljs$core$async$reduce_$_state_machine__62624__auto____1 = (function (state_63056){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_63056);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e63073){var ex__62627__auto__ = e63073;
var statearr_63074_64378 = state_63056;
(statearr_63074_64378[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_63056[(4)]))){
var statearr_63075_64379 = state_63056;
(statearr_63075_64379[(1)] = cljs.core.first((state_63056[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64380 = state_63056;
state_63056 = G__64380;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__62624__auto__ = function(state_63056){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__62624__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__62624__auto____1.call(this,state_63056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__62624__auto____0;
cljs$core$async$reduce_$_state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__62624__auto____1;
return cljs$core$async$reduce_$_state_machine__62624__auto__;
})()
})();
var state__62661__auto__ = (function (){var statearr_63076 = f__62660__auto__();
(statearr_63076[(6)] = c__62659__auto__);

return statearr_63076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
}));

return c__62659__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__62659__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = (function (state_63082){
var state_val_63083 = (state_63082[(1)]);
if((state_val_63083 === (1))){
var inst_63077 = cljs.core.async.reduce(f__$1,init,ch);
var state_63082__$1 = state_63082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63082__$1,(2),inst_63077);
} else {
if((state_val_63083 === (2))){
var inst_63079 = (state_63082[(2)]);
var inst_63080 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_63079) : f__$1.call(null,inst_63079));
var state_63082__$1 = state_63082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63082__$1,inst_63080);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__62624__auto__ = null;
var cljs$core$async$transduce_$_state_machine__62624__auto____0 = (function (){
var statearr_63084 = [null,null,null,null,null,null,null];
(statearr_63084[(0)] = cljs$core$async$transduce_$_state_machine__62624__auto__);

(statearr_63084[(1)] = (1));

return statearr_63084;
});
var cljs$core$async$transduce_$_state_machine__62624__auto____1 = (function (state_63082){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_63082);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e63085){var ex__62627__auto__ = e63085;
var statearr_63086_64381 = state_63082;
(statearr_63086_64381[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_63082[(4)]))){
var statearr_63087_64382 = state_63082;
(statearr_63087_64382[(1)] = cljs.core.first((state_63082[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64383 = state_63082;
state_63082 = G__64383;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__62624__auto__ = function(state_63082){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__62624__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__62624__auto____1.call(this,state_63082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__62624__auto____0;
cljs$core$async$transduce_$_state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__62624__auto____1;
return cljs$core$async$transduce_$_state_machine__62624__auto__;
})()
})();
var state__62661__auto__ = (function (){var statearr_63088 = f__62660__auto__();
(statearr_63088[(6)] = c__62659__auto__);

return statearr_63088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
}));

return c__62659__auto__;
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
var G__63090 = arguments.length;
switch (G__63090) {
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
var c__62659__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = (function (state_63115){
var state_val_63116 = (state_63115[(1)]);
if((state_val_63116 === (7))){
var inst_63097 = (state_63115[(2)]);
var state_63115__$1 = state_63115;
var statearr_63117_64385 = state_63115__$1;
(statearr_63117_64385[(2)] = inst_63097);

(statearr_63117_64385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63116 === (1))){
var inst_63091 = cljs.core.seq(coll);
var inst_63092 = inst_63091;
var state_63115__$1 = (function (){var statearr_63118 = state_63115;
(statearr_63118[(7)] = inst_63092);

return statearr_63118;
})();
var statearr_63119_64386 = state_63115__$1;
(statearr_63119_64386[(2)] = null);

(statearr_63119_64386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63116 === (4))){
var inst_63092 = (state_63115[(7)]);
var inst_63095 = cljs.core.first(inst_63092);
var state_63115__$1 = state_63115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63115__$1,(7),ch,inst_63095);
} else {
if((state_val_63116 === (13))){
var inst_63109 = (state_63115[(2)]);
var state_63115__$1 = state_63115;
var statearr_63120_64390 = state_63115__$1;
(statearr_63120_64390[(2)] = inst_63109);

(statearr_63120_64390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63116 === (6))){
var inst_63100 = (state_63115[(2)]);
var state_63115__$1 = state_63115;
if(cljs.core.truth_(inst_63100)){
var statearr_63121_64391 = state_63115__$1;
(statearr_63121_64391[(1)] = (8));

} else {
var statearr_63122_64392 = state_63115__$1;
(statearr_63122_64392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63116 === (3))){
var inst_63113 = (state_63115[(2)]);
var state_63115__$1 = state_63115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63115__$1,inst_63113);
} else {
if((state_val_63116 === (12))){
var state_63115__$1 = state_63115;
var statearr_63123_64398 = state_63115__$1;
(statearr_63123_64398[(2)] = null);

(statearr_63123_64398[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63116 === (2))){
var inst_63092 = (state_63115[(7)]);
var state_63115__$1 = state_63115;
if(cljs.core.truth_(inst_63092)){
var statearr_63124_64401 = state_63115__$1;
(statearr_63124_64401[(1)] = (4));

} else {
var statearr_63125_64402 = state_63115__$1;
(statearr_63125_64402[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63116 === (11))){
var inst_63106 = cljs.core.async.close_BANG_(ch);
var state_63115__$1 = state_63115;
var statearr_63126_64403 = state_63115__$1;
(statearr_63126_64403[(2)] = inst_63106);

(statearr_63126_64403[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63116 === (9))){
var state_63115__$1 = state_63115;
if(cljs.core.truth_(close_QMARK_)){
var statearr_63127_64406 = state_63115__$1;
(statearr_63127_64406[(1)] = (11));

} else {
var statearr_63128_64407 = state_63115__$1;
(statearr_63128_64407[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63116 === (5))){
var inst_63092 = (state_63115[(7)]);
var state_63115__$1 = state_63115;
var statearr_63129_64408 = state_63115__$1;
(statearr_63129_64408[(2)] = inst_63092);

(statearr_63129_64408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63116 === (10))){
var inst_63111 = (state_63115[(2)]);
var state_63115__$1 = state_63115;
var statearr_63130_64411 = state_63115__$1;
(statearr_63130_64411[(2)] = inst_63111);

(statearr_63130_64411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63116 === (8))){
var inst_63092 = (state_63115[(7)]);
var inst_63102 = cljs.core.next(inst_63092);
var inst_63092__$1 = inst_63102;
var state_63115__$1 = (function (){var statearr_63131 = state_63115;
(statearr_63131[(7)] = inst_63092__$1);

return statearr_63131;
})();
var statearr_63132_64412 = state_63115__$1;
(statearr_63132_64412[(2)] = null);

(statearr_63132_64412[(1)] = (2));


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
var cljs$core$async$state_machine__62624__auto__ = null;
var cljs$core$async$state_machine__62624__auto____0 = (function (){
var statearr_63133 = [null,null,null,null,null,null,null,null];
(statearr_63133[(0)] = cljs$core$async$state_machine__62624__auto__);

(statearr_63133[(1)] = (1));

return statearr_63133;
});
var cljs$core$async$state_machine__62624__auto____1 = (function (state_63115){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_63115);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e63134){var ex__62627__auto__ = e63134;
var statearr_63135_64415 = state_63115;
(statearr_63135_64415[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_63115[(4)]))){
var statearr_63136_64416 = state_63115;
(statearr_63136_64416[(1)] = cljs.core.first((state_63115[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64417 = state_63115;
state_63115 = G__64417;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
cljs$core$async$state_machine__62624__auto__ = function(state_63115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62624__auto____1.call(this,state_63115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62624__auto____0;
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62624__auto____1;
return cljs$core$async$state_machine__62624__auto__;
})()
})();
var state__62661__auto__ = (function (){var statearr_63137 = f__62660__auto__();
(statearr_63137[(6)] = c__62659__auto__);

return statearr_63137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
}));

return c__62659__auto__;
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
var G__63139 = arguments.length;
switch (G__63139) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_64420 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_64420(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_64421 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_64421(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_64422 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_64422(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_64423 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_64423(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63140 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63140 = (function (ch,cs,meta63141){
this.ch = ch;
this.cs = cs;
this.meta63141 = meta63141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63142,meta63141__$1){
var self__ = this;
var _63142__$1 = this;
return (new cljs.core.async.t_cljs$core$async63140(self__.ch,self__.cs,meta63141__$1));
}));

(cljs.core.async.t_cljs$core$async63140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63142){
var self__ = this;
var _63142__$1 = this;
return self__.meta63141;
}));

(cljs.core.async.t_cljs$core$async63140.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63140.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async63140.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63140.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async63140.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async63140.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async63140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta63141","meta63141",1703198684,null)], null);
}));

(cljs.core.async.t_cljs$core$async63140.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63140");

(cljs.core.async.t_cljs$core$async63140.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63140");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63140.
 */
cljs.core.async.__GT_t_cljs$core$async63140 = (function cljs$core$async$mult_$___GT_t_cljs$core$async63140(ch__$1,cs__$1,meta63141){
return (new cljs.core.async.t_cljs$core$async63140(ch__$1,cs__$1,meta63141));
});

}

return (new cljs.core.async.t_cljs$core$async63140(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__62659__auto___64424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = (function (state_63275){
var state_val_63276 = (state_63275[(1)]);
if((state_val_63276 === (7))){
var inst_63271 = (state_63275[(2)]);
var state_63275__$1 = state_63275;
var statearr_63277_64425 = state_63275__$1;
(statearr_63277_64425[(2)] = inst_63271);

(statearr_63277_64425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (20))){
var inst_63176 = (state_63275[(7)]);
var inst_63188 = cljs.core.first(inst_63176);
var inst_63189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63188,(0),null);
var inst_63190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63188,(1),null);
var state_63275__$1 = (function (){var statearr_63278 = state_63275;
(statearr_63278[(8)] = inst_63189);

return statearr_63278;
})();
if(cljs.core.truth_(inst_63190)){
var statearr_63279_64426 = state_63275__$1;
(statearr_63279_64426[(1)] = (22));

} else {
var statearr_63280_64427 = state_63275__$1;
(statearr_63280_64427[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (27))){
var inst_63218 = (state_63275[(9)]);
var inst_63225 = (state_63275[(10)]);
var inst_63220 = (state_63275[(11)]);
var inst_63145 = (state_63275[(12)]);
var inst_63225__$1 = cljs.core._nth(inst_63218,inst_63220);
var inst_63226 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_63225__$1,inst_63145,done);
var state_63275__$1 = (function (){var statearr_63281 = state_63275;
(statearr_63281[(10)] = inst_63225__$1);

return statearr_63281;
})();
if(cljs.core.truth_(inst_63226)){
var statearr_63282_64428 = state_63275__$1;
(statearr_63282_64428[(1)] = (30));

} else {
var statearr_63283_64429 = state_63275__$1;
(statearr_63283_64429[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (1))){
var state_63275__$1 = state_63275;
var statearr_63284_64430 = state_63275__$1;
(statearr_63284_64430[(2)] = null);

(statearr_63284_64430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (24))){
var inst_63176 = (state_63275[(7)]);
var inst_63195 = (state_63275[(2)]);
var inst_63196 = cljs.core.next(inst_63176);
var inst_63154 = inst_63196;
var inst_63155 = null;
var inst_63156 = (0);
var inst_63157 = (0);
var state_63275__$1 = (function (){var statearr_63285 = state_63275;
(statearr_63285[(13)] = inst_63195);

(statearr_63285[(14)] = inst_63155);

(statearr_63285[(15)] = inst_63154);

(statearr_63285[(16)] = inst_63156);

(statearr_63285[(17)] = inst_63157);

return statearr_63285;
})();
var statearr_63286_64431 = state_63275__$1;
(statearr_63286_64431[(2)] = null);

(statearr_63286_64431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (39))){
var state_63275__$1 = state_63275;
var statearr_63290_64432 = state_63275__$1;
(statearr_63290_64432[(2)] = null);

(statearr_63290_64432[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (4))){
var inst_63145 = (state_63275[(12)]);
var inst_63145__$1 = (state_63275[(2)]);
var inst_63146 = (inst_63145__$1 == null);
var state_63275__$1 = (function (){var statearr_63291 = state_63275;
(statearr_63291[(12)] = inst_63145__$1);

return statearr_63291;
})();
if(cljs.core.truth_(inst_63146)){
var statearr_63292_64433 = state_63275__$1;
(statearr_63292_64433[(1)] = (5));

} else {
var statearr_63293_64434 = state_63275__$1;
(statearr_63293_64434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (15))){
var inst_63155 = (state_63275[(14)]);
var inst_63154 = (state_63275[(15)]);
var inst_63156 = (state_63275[(16)]);
var inst_63157 = (state_63275[(17)]);
var inst_63172 = (state_63275[(2)]);
var inst_63173 = (inst_63157 + (1));
var tmp63287 = inst_63155;
var tmp63288 = inst_63154;
var tmp63289 = inst_63156;
var inst_63154__$1 = tmp63288;
var inst_63155__$1 = tmp63287;
var inst_63156__$1 = tmp63289;
var inst_63157__$1 = inst_63173;
var state_63275__$1 = (function (){var statearr_63294 = state_63275;
(statearr_63294[(14)] = inst_63155__$1);

(statearr_63294[(18)] = inst_63172);

(statearr_63294[(15)] = inst_63154__$1);

(statearr_63294[(16)] = inst_63156__$1);

(statearr_63294[(17)] = inst_63157__$1);

return statearr_63294;
})();
var statearr_63295_64439 = state_63275__$1;
(statearr_63295_64439[(2)] = null);

(statearr_63295_64439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (21))){
var inst_63199 = (state_63275[(2)]);
var state_63275__$1 = state_63275;
var statearr_63299_64440 = state_63275__$1;
(statearr_63299_64440[(2)] = inst_63199);

(statearr_63299_64440[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (31))){
var inst_63225 = (state_63275[(10)]);
var inst_63229 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_63225);
var state_63275__$1 = state_63275;
var statearr_63300_64441 = state_63275__$1;
(statearr_63300_64441[(2)] = inst_63229);

(statearr_63300_64441[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (32))){
var inst_63218 = (state_63275[(9)]);
var inst_63219 = (state_63275[(19)]);
var inst_63220 = (state_63275[(11)]);
var inst_63217 = (state_63275[(20)]);
var inst_63231 = (state_63275[(2)]);
var inst_63232 = (inst_63220 + (1));
var tmp63296 = inst_63218;
var tmp63297 = inst_63219;
var tmp63298 = inst_63217;
var inst_63217__$1 = tmp63298;
var inst_63218__$1 = tmp63296;
var inst_63219__$1 = tmp63297;
var inst_63220__$1 = inst_63232;
var state_63275__$1 = (function (){var statearr_63301 = state_63275;
(statearr_63301[(9)] = inst_63218__$1);

(statearr_63301[(19)] = inst_63219__$1);

(statearr_63301[(11)] = inst_63220__$1);

(statearr_63301[(20)] = inst_63217__$1);

(statearr_63301[(21)] = inst_63231);

return statearr_63301;
})();
var statearr_63302_64442 = state_63275__$1;
(statearr_63302_64442[(2)] = null);

(statearr_63302_64442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (40))){
var inst_63244 = (state_63275[(22)]);
var inst_63248 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_63244);
var state_63275__$1 = state_63275;
var statearr_63303_64444 = state_63275__$1;
(statearr_63303_64444[(2)] = inst_63248);

(statearr_63303_64444[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (33))){
var inst_63235 = (state_63275[(23)]);
var inst_63237 = cljs.core.chunked_seq_QMARK_(inst_63235);
var state_63275__$1 = state_63275;
if(inst_63237){
var statearr_63304_64446 = state_63275__$1;
(statearr_63304_64446[(1)] = (36));

} else {
var statearr_63305_64447 = state_63275__$1;
(statearr_63305_64447[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (13))){
var inst_63166 = (state_63275[(24)]);
var inst_63169 = cljs.core.async.close_BANG_(inst_63166);
var state_63275__$1 = state_63275;
var statearr_63306_64448 = state_63275__$1;
(statearr_63306_64448[(2)] = inst_63169);

(statearr_63306_64448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (22))){
var inst_63189 = (state_63275[(8)]);
var inst_63192 = cljs.core.async.close_BANG_(inst_63189);
var state_63275__$1 = state_63275;
var statearr_63307_64452 = state_63275__$1;
(statearr_63307_64452[(2)] = inst_63192);

(statearr_63307_64452[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (36))){
var inst_63235 = (state_63275[(23)]);
var inst_63239 = cljs.core.chunk_first(inst_63235);
var inst_63240 = cljs.core.chunk_rest(inst_63235);
var inst_63241 = cljs.core.count(inst_63239);
var inst_63217 = inst_63240;
var inst_63218 = inst_63239;
var inst_63219 = inst_63241;
var inst_63220 = (0);
var state_63275__$1 = (function (){var statearr_63308 = state_63275;
(statearr_63308[(9)] = inst_63218);

(statearr_63308[(19)] = inst_63219);

(statearr_63308[(11)] = inst_63220);

(statearr_63308[(20)] = inst_63217);

return statearr_63308;
})();
var statearr_63309_64457 = state_63275__$1;
(statearr_63309_64457[(2)] = null);

(statearr_63309_64457[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (41))){
var inst_63235 = (state_63275[(23)]);
var inst_63250 = (state_63275[(2)]);
var inst_63251 = cljs.core.next(inst_63235);
var inst_63217 = inst_63251;
var inst_63218 = null;
var inst_63219 = (0);
var inst_63220 = (0);
var state_63275__$1 = (function (){var statearr_63310 = state_63275;
(statearr_63310[(9)] = inst_63218);

(statearr_63310[(19)] = inst_63219);

(statearr_63310[(11)] = inst_63220);

(statearr_63310[(25)] = inst_63250);

(statearr_63310[(20)] = inst_63217);

return statearr_63310;
})();
var statearr_63311_64458 = state_63275__$1;
(statearr_63311_64458[(2)] = null);

(statearr_63311_64458[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (43))){
var state_63275__$1 = state_63275;
var statearr_63312_64459 = state_63275__$1;
(statearr_63312_64459[(2)] = null);

(statearr_63312_64459[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (29))){
var inst_63259 = (state_63275[(2)]);
var state_63275__$1 = state_63275;
var statearr_63313_64460 = state_63275__$1;
(statearr_63313_64460[(2)] = inst_63259);

(statearr_63313_64460[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (44))){
var inst_63268 = (state_63275[(2)]);
var state_63275__$1 = (function (){var statearr_63314 = state_63275;
(statearr_63314[(26)] = inst_63268);

return statearr_63314;
})();
var statearr_63315_64461 = state_63275__$1;
(statearr_63315_64461[(2)] = null);

(statearr_63315_64461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (6))){
var inst_63209 = (state_63275[(27)]);
var inst_63208 = cljs.core.deref(cs);
var inst_63209__$1 = cljs.core.keys(inst_63208);
var inst_63210 = cljs.core.count(inst_63209__$1);
var inst_63211 = cljs.core.reset_BANG_(dctr,inst_63210);
var inst_63216 = cljs.core.seq(inst_63209__$1);
var inst_63217 = inst_63216;
var inst_63218 = null;
var inst_63219 = (0);
var inst_63220 = (0);
var state_63275__$1 = (function (){var statearr_63316 = state_63275;
(statearr_63316[(9)] = inst_63218);

(statearr_63316[(19)] = inst_63219);

(statearr_63316[(11)] = inst_63220);

(statearr_63316[(20)] = inst_63217);

(statearr_63316[(27)] = inst_63209__$1);

(statearr_63316[(28)] = inst_63211);

return statearr_63316;
})();
var statearr_63317_64462 = state_63275__$1;
(statearr_63317_64462[(2)] = null);

(statearr_63317_64462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (28))){
var inst_63217 = (state_63275[(20)]);
var inst_63235 = (state_63275[(23)]);
var inst_63235__$1 = cljs.core.seq(inst_63217);
var state_63275__$1 = (function (){var statearr_63318 = state_63275;
(statearr_63318[(23)] = inst_63235__$1);

return statearr_63318;
})();
if(inst_63235__$1){
var statearr_63319_64463 = state_63275__$1;
(statearr_63319_64463[(1)] = (33));

} else {
var statearr_63320_64464 = state_63275__$1;
(statearr_63320_64464[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (25))){
var inst_63219 = (state_63275[(19)]);
var inst_63220 = (state_63275[(11)]);
var inst_63222 = (inst_63220 < inst_63219);
var inst_63223 = inst_63222;
var state_63275__$1 = state_63275;
if(cljs.core.truth_(inst_63223)){
var statearr_63321_64465 = state_63275__$1;
(statearr_63321_64465[(1)] = (27));

} else {
var statearr_63322_64466 = state_63275__$1;
(statearr_63322_64466[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (34))){
var state_63275__$1 = state_63275;
var statearr_63323_64467 = state_63275__$1;
(statearr_63323_64467[(2)] = null);

(statearr_63323_64467[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (17))){
var state_63275__$1 = state_63275;
var statearr_63324_64468 = state_63275__$1;
(statearr_63324_64468[(2)] = null);

(statearr_63324_64468[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (3))){
var inst_63273 = (state_63275[(2)]);
var state_63275__$1 = state_63275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63275__$1,inst_63273);
} else {
if((state_val_63276 === (12))){
var inst_63204 = (state_63275[(2)]);
var state_63275__$1 = state_63275;
var statearr_63325_64469 = state_63275__$1;
(statearr_63325_64469[(2)] = inst_63204);

(statearr_63325_64469[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (2))){
var state_63275__$1 = state_63275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63275__$1,(4),ch);
} else {
if((state_val_63276 === (23))){
var state_63275__$1 = state_63275;
var statearr_63326_64470 = state_63275__$1;
(statearr_63326_64470[(2)] = null);

(statearr_63326_64470[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (35))){
var inst_63257 = (state_63275[(2)]);
var state_63275__$1 = state_63275;
var statearr_63327_64471 = state_63275__$1;
(statearr_63327_64471[(2)] = inst_63257);

(statearr_63327_64471[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (19))){
var inst_63176 = (state_63275[(7)]);
var inst_63180 = cljs.core.chunk_first(inst_63176);
var inst_63181 = cljs.core.chunk_rest(inst_63176);
var inst_63182 = cljs.core.count(inst_63180);
var inst_63154 = inst_63181;
var inst_63155 = inst_63180;
var inst_63156 = inst_63182;
var inst_63157 = (0);
var state_63275__$1 = (function (){var statearr_63328 = state_63275;
(statearr_63328[(14)] = inst_63155);

(statearr_63328[(15)] = inst_63154);

(statearr_63328[(16)] = inst_63156);

(statearr_63328[(17)] = inst_63157);

return statearr_63328;
})();
var statearr_63329_64473 = state_63275__$1;
(statearr_63329_64473[(2)] = null);

(statearr_63329_64473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (11))){
var inst_63154 = (state_63275[(15)]);
var inst_63176 = (state_63275[(7)]);
var inst_63176__$1 = cljs.core.seq(inst_63154);
var state_63275__$1 = (function (){var statearr_63330 = state_63275;
(statearr_63330[(7)] = inst_63176__$1);

return statearr_63330;
})();
if(inst_63176__$1){
var statearr_63331_64476 = state_63275__$1;
(statearr_63331_64476[(1)] = (16));

} else {
var statearr_63332_64477 = state_63275__$1;
(statearr_63332_64477[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (9))){
var inst_63206 = (state_63275[(2)]);
var state_63275__$1 = state_63275;
var statearr_63333_64482 = state_63275__$1;
(statearr_63333_64482[(2)] = inst_63206);

(statearr_63333_64482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (5))){
var inst_63152 = cljs.core.deref(cs);
var inst_63153 = cljs.core.seq(inst_63152);
var inst_63154 = inst_63153;
var inst_63155 = null;
var inst_63156 = (0);
var inst_63157 = (0);
var state_63275__$1 = (function (){var statearr_63334 = state_63275;
(statearr_63334[(14)] = inst_63155);

(statearr_63334[(15)] = inst_63154);

(statearr_63334[(16)] = inst_63156);

(statearr_63334[(17)] = inst_63157);

return statearr_63334;
})();
var statearr_63335_64489 = state_63275__$1;
(statearr_63335_64489[(2)] = null);

(statearr_63335_64489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (14))){
var state_63275__$1 = state_63275;
var statearr_63336_64494 = state_63275__$1;
(statearr_63336_64494[(2)] = null);

(statearr_63336_64494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (45))){
var inst_63265 = (state_63275[(2)]);
var state_63275__$1 = state_63275;
var statearr_63337_64495 = state_63275__$1;
(statearr_63337_64495[(2)] = inst_63265);

(statearr_63337_64495[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (26))){
var inst_63209 = (state_63275[(27)]);
var inst_63261 = (state_63275[(2)]);
var inst_63262 = cljs.core.seq(inst_63209);
var state_63275__$1 = (function (){var statearr_63338 = state_63275;
(statearr_63338[(29)] = inst_63261);

return statearr_63338;
})();
if(inst_63262){
var statearr_63339_64496 = state_63275__$1;
(statearr_63339_64496[(1)] = (42));

} else {
var statearr_63340_64497 = state_63275__$1;
(statearr_63340_64497[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (16))){
var inst_63176 = (state_63275[(7)]);
var inst_63178 = cljs.core.chunked_seq_QMARK_(inst_63176);
var state_63275__$1 = state_63275;
if(inst_63178){
var statearr_63341_64498 = state_63275__$1;
(statearr_63341_64498[(1)] = (19));

} else {
var statearr_63342_64499 = state_63275__$1;
(statearr_63342_64499[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (38))){
var inst_63254 = (state_63275[(2)]);
var state_63275__$1 = state_63275;
var statearr_63343_64500 = state_63275__$1;
(statearr_63343_64500[(2)] = inst_63254);

(statearr_63343_64500[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (30))){
var state_63275__$1 = state_63275;
var statearr_63344_64501 = state_63275__$1;
(statearr_63344_64501[(2)] = null);

(statearr_63344_64501[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (10))){
var inst_63155 = (state_63275[(14)]);
var inst_63157 = (state_63275[(17)]);
var inst_63165 = cljs.core._nth(inst_63155,inst_63157);
var inst_63166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63165,(0),null);
var inst_63167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63165,(1),null);
var state_63275__$1 = (function (){var statearr_63345 = state_63275;
(statearr_63345[(24)] = inst_63166);

return statearr_63345;
})();
if(cljs.core.truth_(inst_63167)){
var statearr_63346_64502 = state_63275__$1;
(statearr_63346_64502[(1)] = (13));

} else {
var statearr_63347_64503 = state_63275__$1;
(statearr_63347_64503[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (18))){
var inst_63202 = (state_63275[(2)]);
var state_63275__$1 = state_63275;
var statearr_63348_64504 = state_63275__$1;
(statearr_63348_64504[(2)] = inst_63202);

(statearr_63348_64504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (42))){
var state_63275__$1 = state_63275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63275__$1,(45),dchan);
} else {
if((state_val_63276 === (37))){
var inst_63145 = (state_63275[(12)]);
var inst_63244 = (state_63275[(22)]);
var inst_63235 = (state_63275[(23)]);
var inst_63244__$1 = cljs.core.first(inst_63235);
var inst_63245 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_63244__$1,inst_63145,done);
var state_63275__$1 = (function (){var statearr_63349 = state_63275;
(statearr_63349[(22)] = inst_63244__$1);

return statearr_63349;
})();
if(cljs.core.truth_(inst_63245)){
var statearr_63350_64505 = state_63275__$1;
(statearr_63350_64505[(1)] = (39));

} else {
var statearr_63351_64506 = state_63275__$1;
(statearr_63351_64506[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63276 === (8))){
var inst_63156 = (state_63275[(16)]);
var inst_63157 = (state_63275[(17)]);
var inst_63159 = (inst_63157 < inst_63156);
var inst_63160 = inst_63159;
var state_63275__$1 = state_63275;
if(cljs.core.truth_(inst_63160)){
var statearr_63352_64507 = state_63275__$1;
(statearr_63352_64507[(1)] = (10));

} else {
var statearr_63353_64508 = state_63275__$1;
(statearr_63353_64508[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__62624__auto__ = null;
var cljs$core$async$mult_$_state_machine__62624__auto____0 = (function (){
var statearr_63354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63354[(0)] = cljs$core$async$mult_$_state_machine__62624__auto__);

(statearr_63354[(1)] = (1));

return statearr_63354;
});
var cljs$core$async$mult_$_state_machine__62624__auto____1 = (function (state_63275){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_63275);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e63355){var ex__62627__auto__ = e63355;
var statearr_63356_64509 = state_63275;
(statearr_63356_64509[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_63275[(4)]))){
var statearr_63357_64510 = state_63275;
(statearr_63357_64510[(1)] = cljs.core.first((state_63275[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64511 = state_63275;
state_63275 = G__64511;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__62624__auto__ = function(state_63275){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__62624__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__62624__auto____1.call(this,state_63275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__62624__auto____0;
cljs$core$async$mult_$_state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__62624__auto____1;
return cljs$core$async$mult_$_state_machine__62624__auto__;
})()
})();
var state__62661__auto__ = (function (){var statearr_63358 = f__62660__auto__();
(statearr_63358[(6)] = c__62659__auto___64424);

return statearr_63358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
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
var G__63360 = arguments.length;
switch (G__63360) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_64516 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_64516(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_64518 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_64518(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_64519 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_64519(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_64528 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_64528(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_64541 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_64541(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64548 = arguments.length;
var i__4737__auto___64549 = (0);
while(true){
if((i__4737__auto___64549 < len__4736__auto___64548)){
args__4742__auto__.push((arguments[i__4737__auto___64549]));

var G__64550 = (i__4737__auto___64549 + (1));
i__4737__auto___64549 = G__64550;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__63365){
var map__63366 = p__63365;
var map__63366__$1 = (((((!((map__63366 == null))))?(((((map__63366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63366):map__63366);
var opts = map__63366__$1;
var statearr_63368_64551 = state;
(statearr_63368_64551[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_63369_64552 = state;
(statearr_63369_64552[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_63370_64553 = state;
(statearr_63370_64553[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq63361){
var G__63362 = cljs.core.first(seq63361);
var seq63361__$1 = cljs.core.next(seq63361);
var G__63363 = cljs.core.first(seq63361__$1);
var seq63361__$2 = cljs.core.next(seq63361__$1);
var G__63364 = cljs.core.first(seq63361__$2);
var seq63361__$3 = cljs.core.next(seq63361__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63362,G__63363,G__63364,seq63361__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63371 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63371 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta63372){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta63372 = meta63372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63373,meta63372__$1){
var self__ = this;
var _63373__$1 = this;
return (new cljs.core.async.t_cljs$core$async63371(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta63372__$1));
}));

(cljs.core.async.t_cljs$core$async63371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63373){
var self__ = this;
var _63373__$1 = this;
return self__.meta63372;
}));

(cljs.core.async.t_cljs$core$async63371.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async63371.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63371.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63371.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63371.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63371.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63371.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta63372","meta63372",-1288326892,null)], null);
}));

(cljs.core.async.t_cljs$core$async63371.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63371");

(cljs.core.async.t_cljs$core$async63371.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63371");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63371.
 */
cljs.core.async.__GT_t_cljs$core$async63371 = (function cljs$core$async$mix_$___GT_t_cljs$core$async63371(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta63372){
return (new cljs.core.async.t_cljs$core$async63371(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta63372));
});

}

return (new cljs.core.async.t_cljs$core$async63371(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__62659__auto___64554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = (function (state_63475){
var state_val_63476 = (state_63475[(1)]);
if((state_val_63476 === (7))){
var inst_63390 = (state_63475[(2)]);
var state_63475__$1 = state_63475;
var statearr_63477_64555 = state_63475__$1;
(statearr_63477_64555[(2)] = inst_63390);

(statearr_63477_64555[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (20))){
var inst_63402 = (state_63475[(7)]);
var state_63475__$1 = state_63475;
var statearr_63478_64556 = state_63475__$1;
(statearr_63478_64556[(2)] = inst_63402);

(statearr_63478_64556[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (27))){
var state_63475__$1 = state_63475;
var statearr_63479_64557 = state_63475__$1;
(statearr_63479_64557[(2)] = null);

(statearr_63479_64557[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (1))){
var inst_63377 = (state_63475[(8)]);
var inst_63377__$1 = calc_state();
var inst_63379 = (inst_63377__$1 == null);
var inst_63380 = cljs.core.not(inst_63379);
var state_63475__$1 = (function (){var statearr_63480 = state_63475;
(statearr_63480[(8)] = inst_63377__$1);

return statearr_63480;
})();
if(inst_63380){
var statearr_63481_64558 = state_63475__$1;
(statearr_63481_64558[(1)] = (2));

} else {
var statearr_63482_64559 = state_63475__$1;
(statearr_63482_64559[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (24))){
var inst_63449 = (state_63475[(9)]);
var inst_63426 = (state_63475[(10)]);
var inst_63435 = (state_63475[(11)]);
var inst_63449__$1 = (inst_63426.cljs$core$IFn$_invoke$arity$1 ? inst_63426.cljs$core$IFn$_invoke$arity$1(inst_63435) : inst_63426.call(null,inst_63435));
var state_63475__$1 = (function (){var statearr_63483 = state_63475;
(statearr_63483[(9)] = inst_63449__$1);

return statearr_63483;
})();
if(cljs.core.truth_(inst_63449__$1)){
var statearr_63484_64560 = state_63475__$1;
(statearr_63484_64560[(1)] = (29));

} else {
var statearr_63485_64561 = state_63475__$1;
(statearr_63485_64561[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (4))){
var inst_63393 = (state_63475[(2)]);
var state_63475__$1 = state_63475;
if(cljs.core.truth_(inst_63393)){
var statearr_63486_64562 = state_63475__$1;
(statearr_63486_64562[(1)] = (8));

} else {
var statearr_63487_64563 = state_63475__$1;
(statearr_63487_64563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (15))){
var inst_63420 = (state_63475[(2)]);
var state_63475__$1 = state_63475;
if(cljs.core.truth_(inst_63420)){
var statearr_63488_64564 = state_63475__$1;
(statearr_63488_64564[(1)] = (19));

} else {
var statearr_63489_64565 = state_63475__$1;
(statearr_63489_64565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (21))){
var inst_63425 = (state_63475[(12)]);
var inst_63425__$1 = (state_63475[(2)]);
var inst_63426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63425__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63425__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63425__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_63475__$1 = (function (){var statearr_63490 = state_63475;
(statearr_63490[(10)] = inst_63426);

(statearr_63490[(12)] = inst_63425__$1);

(statearr_63490[(13)] = inst_63427);

return statearr_63490;
})();
return cljs.core.async.ioc_alts_BANG_(state_63475__$1,(22),inst_63428);
} else {
if((state_val_63476 === (31))){
var inst_63457 = (state_63475[(2)]);
var state_63475__$1 = state_63475;
if(cljs.core.truth_(inst_63457)){
var statearr_63491_64566 = state_63475__$1;
(statearr_63491_64566[(1)] = (32));

} else {
var statearr_63492_64567 = state_63475__$1;
(statearr_63492_64567[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (32))){
var inst_63434 = (state_63475[(14)]);
var state_63475__$1 = state_63475;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63475__$1,(35),out,inst_63434);
} else {
if((state_val_63476 === (33))){
var inst_63425 = (state_63475[(12)]);
var inst_63402 = inst_63425;
var state_63475__$1 = (function (){var statearr_63493 = state_63475;
(statearr_63493[(7)] = inst_63402);

return statearr_63493;
})();
var statearr_63494_64568 = state_63475__$1;
(statearr_63494_64568[(2)] = null);

(statearr_63494_64568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (13))){
var inst_63402 = (state_63475[(7)]);
var inst_63409 = inst_63402.cljs$lang$protocol_mask$partition0$;
var inst_63410 = (inst_63409 & (64));
var inst_63411 = inst_63402.cljs$core$ISeq$;
var inst_63412 = (cljs.core.PROTOCOL_SENTINEL === inst_63411);
var inst_63413 = ((inst_63410) || (inst_63412));
var state_63475__$1 = state_63475;
if(cljs.core.truth_(inst_63413)){
var statearr_63495_64569 = state_63475__$1;
(statearr_63495_64569[(1)] = (16));

} else {
var statearr_63496_64570 = state_63475__$1;
(statearr_63496_64570[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (22))){
var inst_63435 = (state_63475[(11)]);
var inst_63434 = (state_63475[(14)]);
var inst_63433 = (state_63475[(2)]);
var inst_63434__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63433,(0),null);
var inst_63435__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63433,(1),null);
var inst_63436 = (inst_63434__$1 == null);
var inst_63437 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_63435__$1,change);
var inst_63438 = ((inst_63436) || (inst_63437));
var state_63475__$1 = (function (){var statearr_63497 = state_63475;
(statearr_63497[(11)] = inst_63435__$1);

(statearr_63497[(14)] = inst_63434__$1);

return statearr_63497;
})();
if(cljs.core.truth_(inst_63438)){
var statearr_63498_64571 = state_63475__$1;
(statearr_63498_64571[(1)] = (23));

} else {
var statearr_63499_64572 = state_63475__$1;
(statearr_63499_64572[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (36))){
var inst_63425 = (state_63475[(12)]);
var inst_63402 = inst_63425;
var state_63475__$1 = (function (){var statearr_63500 = state_63475;
(statearr_63500[(7)] = inst_63402);

return statearr_63500;
})();
var statearr_63501_64573 = state_63475__$1;
(statearr_63501_64573[(2)] = null);

(statearr_63501_64573[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (29))){
var inst_63449 = (state_63475[(9)]);
var state_63475__$1 = state_63475;
var statearr_63502_64574 = state_63475__$1;
(statearr_63502_64574[(2)] = inst_63449);

(statearr_63502_64574[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (6))){
var state_63475__$1 = state_63475;
var statearr_63503_64575 = state_63475__$1;
(statearr_63503_64575[(2)] = false);

(statearr_63503_64575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (28))){
var inst_63445 = (state_63475[(2)]);
var inst_63446 = calc_state();
var inst_63402 = inst_63446;
var state_63475__$1 = (function (){var statearr_63504 = state_63475;
(statearr_63504[(15)] = inst_63445);

(statearr_63504[(7)] = inst_63402);

return statearr_63504;
})();
var statearr_63505_64576 = state_63475__$1;
(statearr_63505_64576[(2)] = null);

(statearr_63505_64576[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (25))){
var inst_63471 = (state_63475[(2)]);
var state_63475__$1 = state_63475;
var statearr_63506_64577 = state_63475__$1;
(statearr_63506_64577[(2)] = inst_63471);

(statearr_63506_64577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (34))){
var inst_63469 = (state_63475[(2)]);
var state_63475__$1 = state_63475;
var statearr_63507_64578 = state_63475__$1;
(statearr_63507_64578[(2)] = inst_63469);

(statearr_63507_64578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (17))){
var state_63475__$1 = state_63475;
var statearr_63508_64579 = state_63475__$1;
(statearr_63508_64579[(2)] = false);

(statearr_63508_64579[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (3))){
var state_63475__$1 = state_63475;
var statearr_63509_64580 = state_63475__$1;
(statearr_63509_64580[(2)] = false);

(statearr_63509_64580[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (12))){
var inst_63473 = (state_63475[(2)]);
var state_63475__$1 = state_63475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63475__$1,inst_63473);
} else {
if((state_val_63476 === (2))){
var inst_63377 = (state_63475[(8)]);
var inst_63382 = inst_63377.cljs$lang$protocol_mask$partition0$;
var inst_63383 = (inst_63382 & (64));
var inst_63384 = inst_63377.cljs$core$ISeq$;
var inst_63385 = (cljs.core.PROTOCOL_SENTINEL === inst_63384);
var inst_63386 = ((inst_63383) || (inst_63385));
var state_63475__$1 = state_63475;
if(cljs.core.truth_(inst_63386)){
var statearr_63510_64581 = state_63475__$1;
(statearr_63510_64581[(1)] = (5));

} else {
var statearr_63511_64582 = state_63475__$1;
(statearr_63511_64582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (23))){
var inst_63434 = (state_63475[(14)]);
var inst_63440 = (inst_63434 == null);
var state_63475__$1 = state_63475;
if(cljs.core.truth_(inst_63440)){
var statearr_63512_64583 = state_63475__$1;
(statearr_63512_64583[(1)] = (26));

} else {
var statearr_63513_64584 = state_63475__$1;
(statearr_63513_64584[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (35))){
var inst_63460 = (state_63475[(2)]);
var state_63475__$1 = state_63475;
if(cljs.core.truth_(inst_63460)){
var statearr_63514_64585 = state_63475__$1;
(statearr_63514_64585[(1)] = (36));

} else {
var statearr_63515_64586 = state_63475__$1;
(statearr_63515_64586[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (19))){
var inst_63402 = (state_63475[(7)]);
var inst_63422 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63402);
var state_63475__$1 = state_63475;
var statearr_63516_64587 = state_63475__$1;
(statearr_63516_64587[(2)] = inst_63422);

(statearr_63516_64587[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (11))){
var inst_63402 = (state_63475[(7)]);
var inst_63406 = (inst_63402 == null);
var inst_63407 = cljs.core.not(inst_63406);
var state_63475__$1 = state_63475;
if(inst_63407){
var statearr_63517_64588 = state_63475__$1;
(statearr_63517_64588[(1)] = (13));

} else {
var statearr_63518_64589 = state_63475__$1;
(statearr_63518_64589[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (9))){
var inst_63377 = (state_63475[(8)]);
var state_63475__$1 = state_63475;
var statearr_63519_64590 = state_63475__$1;
(statearr_63519_64590[(2)] = inst_63377);

(statearr_63519_64590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (5))){
var state_63475__$1 = state_63475;
var statearr_63520_64591 = state_63475__$1;
(statearr_63520_64591[(2)] = true);

(statearr_63520_64591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (14))){
var state_63475__$1 = state_63475;
var statearr_63521_64593 = state_63475__$1;
(statearr_63521_64593[(2)] = false);

(statearr_63521_64593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (26))){
var inst_63435 = (state_63475[(11)]);
var inst_63442 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_63435);
var state_63475__$1 = state_63475;
var statearr_63522_64595 = state_63475__$1;
(statearr_63522_64595[(2)] = inst_63442);

(statearr_63522_64595[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (16))){
var state_63475__$1 = state_63475;
var statearr_63523_64596 = state_63475__$1;
(statearr_63523_64596[(2)] = true);

(statearr_63523_64596[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (38))){
var inst_63465 = (state_63475[(2)]);
var state_63475__$1 = state_63475;
var statearr_63524_64597 = state_63475__$1;
(statearr_63524_64597[(2)] = inst_63465);

(statearr_63524_64597[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (30))){
var inst_63426 = (state_63475[(10)]);
var inst_63427 = (state_63475[(13)]);
var inst_63435 = (state_63475[(11)]);
var inst_63452 = cljs.core.empty_QMARK_(inst_63426);
var inst_63453 = (inst_63427.cljs$core$IFn$_invoke$arity$1 ? inst_63427.cljs$core$IFn$_invoke$arity$1(inst_63435) : inst_63427.call(null,inst_63435));
var inst_63454 = cljs.core.not(inst_63453);
var inst_63455 = ((inst_63452) && (inst_63454));
var state_63475__$1 = state_63475;
var statearr_63525_64598 = state_63475__$1;
(statearr_63525_64598[(2)] = inst_63455);

(statearr_63525_64598[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (10))){
var inst_63377 = (state_63475[(8)]);
var inst_63398 = (state_63475[(2)]);
var inst_63399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63398,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63398,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63398,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_63402 = inst_63377;
var state_63475__$1 = (function (){var statearr_63526 = state_63475;
(statearr_63526[(16)] = inst_63399);

(statearr_63526[(17)] = inst_63400);

(statearr_63526[(7)] = inst_63402);

(statearr_63526[(18)] = inst_63401);

return statearr_63526;
})();
var statearr_63527_64601 = state_63475__$1;
(statearr_63527_64601[(2)] = null);

(statearr_63527_64601[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (18))){
var inst_63417 = (state_63475[(2)]);
var state_63475__$1 = state_63475;
var statearr_63528_64602 = state_63475__$1;
(statearr_63528_64602[(2)] = inst_63417);

(statearr_63528_64602[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (37))){
var state_63475__$1 = state_63475;
var statearr_63529_64603 = state_63475__$1;
(statearr_63529_64603[(2)] = null);

(statearr_63529_64603[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63476 === (8))){
var inst_63377 = (state_63475[(8)]);
var inst_63395 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63377);
var state_63475__$1 = state_63475;
var statearr_63530_64604 = state_63475__$1;
(statearr_63530_64604[(2)] = inst_63395);

(statearr_63530_64604[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__62624__auto__ = null;
var cljs$core$async$mix_$_state_machine__62624__auto____0 = (function (){
var statearr_63531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63531[(0)] = cljs$core$async$mix_$_state_machine__62624__auto__);

(statearr_63531[(1)] = (1));

return statearr_63531;
});
var cljs$core$async$mix_$_state_machine__62624__auto____1 = (function (state_63475){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_63475);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e63532){var ex__62627__auto__ = e63532;
var statearr_63533_64607 = state_63475;
(statearr_63533_64607[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_63475[(4)]))){
var statearr_63534_64608 = state_63475;
(statearr_63534_64608[(1)] = cljs.core.first((state_63475[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64609 = state_63475;
state_63475 = G__64609;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__62624__auto__ = function(state_63475){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__62624__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__62624__auto____1.call(this,state_63475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__62624__auto____0;
cljs$core$async$mix_$_state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__62624__auto____1;
return cljs$core$async$mix_$_state_machine__62624__auto__;
})()
})();
var state__62661__auto__ = (function (){var statearr_63535 = f__62660__auto__();
(statearr_63535[(6)] = c__62659__auto___64554);

return statearr_63535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_64612 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_64612(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_64615 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_64615(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_64616 = (function() {
var G__64617 = null;
var G__64617__1 = (function (p){
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
var G__64617__2 = (function (p,v){
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
G__64617 = function(p,v){
switch(arguments.length){
case 1:
return G__64617__1.call(this,p);
case 2:
return G__64617__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__64617.cljs$core$IFn$_invoke$arity$1 = G__64617__1;
G__64617.cljs$core$IFn$_invoke$arity$2 = G__64617__2;
return G__64617;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__63537 = arguments.length;
switch (G__63537) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_64616(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_64616(p,v);
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
var G__63540 = arguments.length;
switch (G__63540) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__63538_SHARP_){
if(cljs.core.truth_((p1__63538_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__63538_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__63538_SHARP_.call(null,topic)))){
return p1__63538_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__63538_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63541 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63541 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta63542){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta63542 = meta63542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63543,meta63542__$1){
var self__ = this;
var _63543__$1 = this;
return (new cljs.core.async.t_cljs$core$async63541(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta63542__$1));
}));

(cljs.core.async.t_cljs$core$async63541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63543){
var self__ = this;
var _63543__$1 = this;
return self__.meta63542;
}));

(cljs.core.async.t_cljs$core$async63541.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63541.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async63541.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63541.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async63541.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async63541.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async63541.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async63541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta63542","meta63542",1241883753,null)], null);
}));

(cljs.core.async.t_cljs$core$async63541.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63541");

(cljs.core.async.t_cljs$core$async63541.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63541");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63541.
 */
cljs.core.async.__GT_t_cljs$core$async63541 = (function cljs$core$async$__GT_t_cljs$core$async63541(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63542){
return (new cljs.core.async.t_cljs$core$async63541(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63542));
});

}

return (new cljs.core.async.t_cljs$core$async63541(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__62659__auto___64622 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = (function (state_63615){
var state_val_63616 = (state_63615[(1)]);
if((state_val_63616 === (7))){
var inst_63611 = (state_63615[(2)]);
var state_63615__$1 = state_63615;
var statearr_63617_64623 = state_63615__$1;
(statearr_63617_64623[(2)] = inst_63611);

(statearr_63617_64623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63616 === (20))){
var state_63615__$1 = state_63615;
var statearr_63618_64627 = state_63615__$1;
(statearr_63618_64627[(2)] = null);

(statearr_63618_64627[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63616 === (1))){
var state_63615__$1 = state_63615;
var statearr_63619_64628 = state_63615__$1;
(statearr_63619_64628[(2)] = null);

(statearr_63619_64628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63616 === (24))){
var inst_63594 = (state_63615[(7)]);
var inst_63603 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_63594);
var state_63615__$1 = state_63615;
var statearr_63620_64629 = state_63615__$1;
(statearr_63620_64629[(2)] = inst_63603);

(statearr_63620_64629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63616 === (4))){
var inst_63546 = (state_63615[(8)]);
var inst_63546__$1 = (state_63615[(2)]);
var inst_63547 = (inst_63546__$1 == null);
var state_63615__$1 = (function (){var statearr_63621 = state_63615;
(statearr_63621[(8)] = inst_63546__$1);

return statearr_63621;
})();
if(cljs.core.truth_(inst_63547)){
var statearr_63622_64630 = state_63615__$1;
(statearr_63622_64630[(1)] = (5));

} else {
var statearr_63623_64631 = state_63615__$1;
(statearr_63623_64631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63616 === (15))){
var inst_63588 = (state_63615[(2)]);
var state_63615__$1 = state_63615;
var statearr_63624_64633 = state_63615__$1;
(statearr_63624_64633[(2)] = inst_63588);

(statearr_63624_64633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63616 === (21))){
var inst_63608 = (state_63615[(2)]);
var state_63615__$1 = (function (){var statearr_63625 = state_63615;
(statearr_63625[(9)] = inst_63608);

return statearr_63625;
})();
var statearr_63626_64634 = state_63615__$1;
(statearr_63626_64634[(2)] = null);

(statearr_63626_64634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63616 === (13))){
var inst_63570 = (state_63615[(10)]);
var inst_63572 = cljs.core.chunked_seq_QMARK_(inst_63570);
var state_63615__$1 = state_63615;
if(inst_63572){
var statearr_63627_64637 = state_63615__$1;
(statearr_63627_64637[(1)] = (16));

} else {
var statearr_63628_64639 = state_63615__$1;
(statearr_63628_64639[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63616 === (22))){
var inst_63600 = (state_63615[(2)]);
var state_63615__$1 = state_63615;
if(cljs.core.truth_(inst_63600)){
var statearr_63629_64640 = state_63615__$1;
(statearr_63629_64640[(1)] = (23));

} else {
var statearr_63630_64641 = state_63615__$1;
(statearr_63630_64641[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63616 === (6))){
var inst_63546 = (state_63615[(8)]);
var inst_63596 = (state_63615[(11)]);
var inst_63594 = (state_63615[(7)]);
var inst_63594__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_63546) : topic_fn.call(null,inst_63546));
var inst_63595 = cljs.core.deref(mults);
var inst_63596__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63595,inst_63594__$1);
var state_63615__$1 = (function (){var statearr_63631 = state_63615;
(statearr_63631[(11)] = inst_63596__$1);

(statearr_63631[(7)] = inst_63594__$1);

return statearr_63631;
})();
if(cljs.core.truth_(inst_63596__$1)){
var statearr_63632_64642 = state_63615__$1;
(statearr_63632_64642[(1)] = (19));

} else {
var statearr_63633_64643 = state_63615__$1;
(statearr_63633_64643[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63616 === (25))){
var inst_63605 = (state_63615[(2)]);
var state_63615__$1 = state_63615;
var statearr_63634_64644 = state_63615__$1;
(statearr_63634_64644[(2)] = inst_63605);

(statearr_63634_64644[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63616 === (17))){
var inst_63570 = (state_63615[(10)]);
var inst_63579 = cljs.core.first(inst_63570);
var inst_63580 = cljs.core.async.muxch_STAR_(inst_63579);
var inst_63581 = cljs.core.async.close_BANG_(inst_63580);
var inst_63582 = cljs.core.next(inst_63570);
var inst_63556 = inst_63582;
var inst_63557 = null;
var inst_63558 = (0);
var inst_63559 = (0);
var state_63615__$1 = (function (){var statearr_63635 = state_63615;
(statearr_63635[(12)] = inst_63556);

(statearr_63635[(13)] = inst_63557);

(statearr_63635[(14)] = inst_63559);

(statearr_63635[(15)] = inst_63558);

(statearr_63635[(16)] = inst_63581);

return statearr_63635;
})();
var statearr_63636_64645 = state_63615__$1;
(statearr_63636_64645[(2)] = null);

(statearr_63636_64645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63616 === (3))){
var inst_63613 = (state_63615[(2)]);
var state_63615__$1 = state_63615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63615__$1,inst_63613);
} else {
if((state_val_63616 === (12))){
var inst_63590 = (state_63615[(2)]);
var state_63615__$1 = state_63615;
var statearr_63637_64646 = state_63615__$1;
(statearr_63637_64646[(2)] = inst_63590);

(statearr_63637_64646[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63616 === (2))){
var state_63615__$1 = state_63615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63615__$1,(4),ch);
} else {
if((state_val_63616 === (23))){
var state_63615__$1 = state_63615;
var statearr_63638_64647 = state_63615__$1;
(statearr_63638_64647[(2)] = null);

(statearr_63638_64647[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63616 === (19))){
var inst_63546 = (state_63615[(8)]);
var inst_63596 = (state_63615[(11)]);
var inst_63598 = cljs.core.async.muxch_STAR_(inst_63596);
var state_63615__$1 = state_63615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63615__$1,(22),inst_63598,inst_63546);
} else {
if((state_val_63616 === (11))){
var inst_63556 = (state_63615[(12)]);
var inst_63570 = (state_63615[(10)]);
var inst_63570__$1 = cljs.core.seq(inst_63556);
var state_63615__$1 = (function (){var statearr_63639 = state_63615;
(statearr_63639[(10)] = inst_63570__$1);

return statearr_63639;
})();
if(inst_63570__$1){
var statearr_63640_64648 = state_63615__$1;
(statearr_63640_64648[(1)] = (13));

} else {
var statearr_63641_64649 = state_63615__$1;
(statearr_63641_64649[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63616 === (9))){
var inst_63592 = (state_63615[(2)]);
var state_63615__$1 = state_63615;
var statearr_63642_64650 = state_63615__$1;
(statearr_63642_64650[(2)] = inst_63592);

(statearr_63642_64650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63616 === (5))){
var inst_63553 = cljs.core.deref(mults);
var inst_63554 = cljs.core.vals(inst_63553);
var inst_63555 = cljs.core.seq(inst_63554);
var inst_63556 = inst_63555;
var inst_63557 = null;
var inst_63558 = (0);
var inst_63559 = (0);
var state_63615__$1 = (function (){var statearr_63643 = state_63615;
(statearr_63643[(12)] = inst_63556);

(statearr_63643[(13)] = inst_63557);

(statearr_63643[(14)] = inst_63559);

(statearr_63643[(15)] = inst_63558);

return statearr_63643;
})();
var statearr_63644_64651 = state_63615__$1;
(statearr_63644_64651[(2)] = null);

(statearr_63644_64651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63616 === (14))){
var state_63615__$1 = state_63615;
var statearr_63648_64652 = state_63615__$1;
(statearr_63648_64652[(2)] = null);

(statearr_63648_64652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63616 === (16))){
var inst_63570 = (state_63615[(10)]);
var inst_63574 = cljs.core.chunk_first(inst_63570);
var inst_63575 = cljs.core.chunk_rest(inst_63570);
var inst_63576 = cljs.core.count(inst_63574);
var inst_63556 = inst_63575;
var inst_63557 = inst_63574;
var inst_63558 = inst_63576;
var inst_63559 = (0);
var state_63615__$1 = (function (){var statearr_63649 = state_63615;
(statearr_63649[(12)] = inst_63556);

(statearr_63649[(13)] = inst_63557);

(statearr_63649[(14)] = inst_63559);

(statearr_63649[(15)] = inst_63558);

return statearr_63649;
})();
var statearr_63650_64653 = state_63615__$1;
(statearr_63650_64653[(2)] = null);

(statearr_63650_64653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63616 === (10))){
var inst_63556 = (state_63615[(12)]);
var inst_63557 = (state_63615[(13)]);
var inst_63559 = (state_63615[(14)]);
var inst_63558 = (state_63615[(15)]);
var inst_63564 = cljs.core._nth(inst_63557,inst_63559);
var inst_63565 = cljs.core.async.muxch_STAR_(inst_63564);
var inst_63566 = cljs.core.async.close_BANG_(inst_63565);
var inst_63567 = (inst_63559 + (1));
var tmp63645 = inst_63556;
var tmp63646 = inst_63557;
var tmp63647 = inst_63558;
var inst_63556__$1 = tmp63645;
var inst_63557__$1 = tmp63646;
var inst_63558__$1 = tmp63647;
var inst_63559__$1 = inst_63567;
var state_63615__$1 = (function (){var statearr_63651 = state_63615;
(statearr_63651[(12)] = inst_63556__$1);

(statearr_63651[(17)] = inst_63566);

(statearr_63651[(13)] = inst_63557__$1);

(statearr_63651[(14)] = inst_63559__$1);

(statearr_63651[(15)] = inst_63558__$1);

return statearr_63651;
})();
var statearr_63652_64654 = state_63615__$1;
(statearr_63652_64654[(2)] = null);

(statearr_63652_64654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63616 === (18))){
var inst_63585 = (state_63615[(2)]);
var state_63615__$1 = state_63615;
var statearr_63653_64655 = state_63615__$1;
(statearr_63653_64655[(2)] = inst_63585);

(statearr_63653_64655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63616 === (8))){
var inst_63559 = (state_63615[(14)]);
var inst_63558 = (state_63615[(15)]);
var inst_63561 = (inst_63559 < inst_63558);
var inst_63562 = inst_63561;
var state_63615__$1 = state_63615;
if(cljs.core.truth_(inst_63562)){
var statearr_63654_64656 = state_63615__$1;
(statearr_63654_64656[(1)] = (10));

} else {
var statearr_63655_64657 = state_63615__$1;
(statearr_63655_64657[(1)] = (11));

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
var cljs$core$async$state_machine__62624__auto__ = null;
var cljs$core$async$state_machine__62624__auto____0 = (function (){
var statearr_63656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63656[(0)] = cljs$core$async$state_machine__62624__auto__);

(statearr_63656[(1)] = (1));

return statearr_63656;
});
var cljs$core$async$state_machine__62624__auto____1 = (function (state_63615){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_63615);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e63657){var ex__62627__auto__ = e63657;
var statearr_63658_64658 = state_63615;
(statearr_63658_64658[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_63615[(4)]))){
var statearr_63659_64659 = state_63615;
(statearr_63659_64659[(1)] = cljs.core.first((state_63615[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64660 = state_63615;
state_63615 = G__64660;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
cljs$core$async$state_machine__62624__auto__ = function(state_63615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62624__auto____1.call(this,state_63615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62624__auto____0;
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62624__auto____1;
return cljs$core$async$state_machine__62624__auto__;
})()
})();
var state__62661__auto__ = (function (){var statearr_63660 = f__62660__auto__();
(statearr_63660[(6)] = c__62659__auto___64622);

return statearr_63660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
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
var G__63662 = arguments.length;
switch (G__63662) {
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
var G__63664 = arguments.length;
switch (G__63664) {
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
var G__63666 = arguments.length;
switch (G__63666) {
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
var c__62659__auto___64664 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = (function (state_63709){
var state_val_63710 = (state_63709[(1)]);
if((state_val_63710 === (7))){
var state_63709__$1 = state_63709;
var statearr_63711_64665 = state_63709__$1;
(statearr_63711_64665[(2)] = null);

(statearr_63711_64665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63710 === (1))){
var state_63709__$1 = state_63709;
var statearr_63712_64666 = state_63709__$1;
(statearr_63712_64666[(2)] = null);

(statearr_63712_64666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63710 === (4))){
var inst_63670 = (state_63709[(7)]);
var inst_63669 = (state_63709[(8)]);
var inst_63672 = (inst_63670 < inst_63669);
var state_63709__$1 = state_63709;
if(cljs.core.truth_(inst_63672)){
var statearr_63713_64667 = state_63709__$1;
(statearr_63713_64667[(1)] = (6));

} else {
var statearr_63714_64668 = state_63709__$1;
(statearr_63714_64668[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63710 === (15))){
var inst_63695 = (state_63709[(9)]);
var inst_63700 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_63695);
var state_63709__$1 = state_63709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63709__$1,(17),out,inst_63700);
} else {
if((state_val_63710 === (13))){
var inst_63695 = (state_63709[(9)]);
var inst_63695__$1 = (state_63709[(2)]);
var inst_63696 = cljs.core.some(cljs.core.nil_QMARK_,inst_63695__$1);
var state_63709__$1 = (function (){var statearr_63715 = state_63709;
(statearr_63715[(9)] = inst_63695__$1);

return statearr_63715;
})();
if(cljs.core.truth_(inst_63696)){
var statearr_63716_64669 = state_63709__$1;
(statearr_63716_64669[(1)] = (14));

} else {
var statearr_63717_64670 = state_63709__$1;
(statearr_63717_64670[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63710 === (6))){
var state_63709__$1 = state_63709;
var statearr_63718_64671 = state_63709__$1;
(statearr_63718_64671[(2)] = null);

(statearr_63718_64671[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63710 === (17))){
var inst_63702 = (state_63709[(2)]);
var state_63709__$1 = (function (){var statearr_63720 = state_63709;
(statearr_63720[(10)] = inst_63702);

return statearr_63720;
})();
var statearr_63721_64672 = state_63709__$1;
(statearr_63721_64672[(2)] = null);

(statearr_63721_64672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63710 === (3))){
var inst_63707 = (state_63709[(2)]);
var state_63709__$1 = state_63709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63709__$1,inst_63707);
} else {
if((state_val_63710 === (12))){
var _ = (function (){var statearr_63722 = state_63709;
(statearr_63722[(4)] = cljs.core.rest((state_63709[(4)])));

return statearr_63722;
})();
var state_63709__$1 = state_63709;
var ex63719 = (state_63709__$1[(2)]);
var statearr_63723_64673 = state_63709__$1;
(statearr_63723_64673[(5)] = ex63719);


if((ex63719 instanceof Object)){
var statearr_63724_64674 = state_63709__$1;
(statearr_63724_64674[(1)] = (11));

(statearr_63724_64674[(5)] = null);

} else {
throw ex63719;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63710 === (2))){
var inst_63668 = cljs.core.reset_BANG_(dctr,cnt);
var inst_63669 = cnt;
var inst_63670 = (0);
var state_63709__$1 = (function (){var statearr_63725 = state_63709;
(statearr_63725[(7)] = inst_63670);

(statearr_63725[(8)] = inst_63669);

(statearr_63725[(11)] = inst_63668);

return statearr_63725;
})();
var statearr_63726_64675 = state_63709__$1;
(statearr_63726_64675[(2)] = null);

(statearr_63726_64675[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63710 === (11))){
var inst_63674 = (state_63709[(2)]);
var inst_63675 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_63709__$1 = (function (){var statearr_63727 = state_63709;
(statearr_63727[(12)] = inst_63674);

return statearr_63727;
})();
var statearr_63728_64676 = state_63709__$1;
(statearr_63728_64676[(2)] = inst_63675);

(statearr_63728_64676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63710 === (9))){
var inst_63670 = (state_63709[(7)]);
var _ = (function (){var statearr_63729 = state_63709;
(statearr_63729[(4)] = cljs.core.cons((12),(state_63709[(4)])));

return statearr_63729;
})();
var inst_63681 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_63670) : chs__$1.call(null,inst_63670));
var inst_63682 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_63670) : done.call(null,inst_63670));
var inst_63683 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_63681,inst_63682);
var ___$1 = (function (){var statearr_63730 = state_63709;
(statearr_63730[(4)] = cljs.core.rest((state_63709[(4)])));

return statearr_63730;
})();
var state_63709__$1 = state_63709;
var statearr_63731_64677 = state_63709__$1;
(statearr_63731_64677[(2)] = inst_63683);

(statearr_63731_64677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63710 === (5))){
var inst_63693 = (state_63709[(2)]);
var state_63709__$1 = (function (){var statearr_63732 = state_63709;
(statearr_63732[(13)] = inst_63693);

return statearr_63732;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63709__$1,(13),dchan);
} else {
if((state_val_63710 === (14))){
var inst_63698 = cljs.core.async.close_BANG_(out);
var state_63709__$1 = state_63709;
var statearr_63733_64678 = state_63709__$1;
(statearr_63733_64678[(2)] = inst_63698);

(statearr_63733_64678[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63710 === (16))){
var inst_63705 = (state_63709[(2)]);
var state_63709__$1 = state_63709;
var statearr_63734_64679 = state_63709__$1;
(statearr_63734_64679[(2)] = inst_63705);

(statearr_63734_64679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63710 === (10))){
var inst_63670 = (state_63709[(7)]);
var inst_63686 = (state_63709[(2)]);
var inst_63687 = (inst_63670 + (1));
var inst_63670__$1 = inst_63687;
var state_63709__$1 = (function (){var statearr_63735 = state_63709;
(statearr_63735[(14)] = inst_63686);

(statearr_63735[(7)] = inst_63670__$1);

return statearr_63735;
})();
var statearr_63736_64680 = state_63709__$1;
(statearr_63736_64680[(2)] = null);

(statearr_63736_64680[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63710 === (8))){
var inst_63691 = (state_63709[(2)]);
var state_63709__$1 = state_63709;
var statearr_63737_64681 = state_63709__$1;
(statearr_63737_64681[(2)] = inst_63691);

(statearr_63737_64681[(1)] = (5));


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
var cljs$core$async$state_machine__62624__auto__ = null;
var cljs$core$async$state_machine__62624__auto____0 = (function (){
var statearr_63738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63738[(0)] = cljs$core$async$state_machine__62624__auto__);

(statearr_63738[(1)] = (1));

return statearr_63738;
});
var cljs$core$async$state_machine__62624__auto____1 = (function (state_63709){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_63709);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e63739){var ex__62627__auto__ = e63739;
var statearr_63740_64682 = state_63709;
(statearr_63740_64682[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_63709[(4)]))){
var statearr_63741_64683 = state_63709;
(statearr_63741_64683[(1)] = cljs.core.first((state_63709[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64684 = state_63709;
state_63709 = G__64684;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
cljs$core$async$state_machine__62624__auto__ = function(state_63709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62624__auto____1.call(this,state_63709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62624__auto____0;
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62624__auto____1;
return cljs$core$async$state_machine__62624__auto__;
})()
})();
var state__62661__auto__ = (function (){var statearr_63742 = f__62660__auto__();
(statearr_63742[(6)] = c__62659__auto___64664);

return statearr_63742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
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
var G__63745 = arguments.length;
switch (G__63745) {
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
var c__62659__auto___64686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = (function (state_63777){
var state_val_63778 = (state_63777[(1)]);
if((state_val_63778 === (7))){
var inst_63756 = (state_63777[(7)]);
var inst_63757 = (state_63777[(8)]);
var inst_63756__$1 = (state_63777[(2)]);
var inst_63757__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63756__$1,(0),null);
var inst_63758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63756__$1,(1),null);
var inst_63759 = (inst_63757__$1 == null);
var state_63777__$1 = (function (){var statearr_63779 = state_63777;
(statearr_63779[(7)] = inst_63756__$1);

(statearr_63779[(9)] = inst_63758);

(statearr_63779[(8)] = inst_63757__$1);

return statearr_63779;
})();
if(cljs.core.truth_(inst_63759)){
var statearr_63780_64687 = state_63777__$1;
(statearr_63780_64687[(1)] = (8));

} else {
var statearr_63781_64689 = state_63777__$1;
(statearr_63781_64689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63778 === (1))){
var inst_63746 = cljs.core.vec(chs);
var inst_63747 = inst_63746;
var state_63777__$1 = (function (){var statearr_63782 = state_63777;
(statearr_63782[(10)] = inst_63747);

return statearr_63782;
})();
var statearr_63783_64691 = state_63777__$1;
(statearr_63783_64691[(2)] = null);

(statearr_63783_64691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63778 === (4))){
var inst_63747 = (state_63777[(10)]);
var state_63777__$1 = state_63777;
return cljs.core.async.ioc_alts_BANG_(state_63777__$1,(7),inst_63747);
} else {
if((state_val_63778 === (6))){
var inst_63773 = (state_63777[(2)]);
var state_63777__$1 = state_63777;
var statearr_63784_64692 = state_63777__$1;
(statearr_63784_64692[(2)] = inst_63773);

(statearr_63784_64692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63778 === (3))){
var inst_63775 = (state_63777[(2)]);
var state_63777__$1 = state_63777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63777__$1,inst_63775);
} else {
if((state_val_63778 === (2))){
var inst_63747 = (state_63777[(10)]);
var inst_63749 = cljs.core.count(inst_63747);
var inst_63750 = (inst_63749 > (0));
var state_63777__$1 = state_63777;
if(cljs.core.truth_(inst_63750)){
var statearr_63786_64693 = state_63777__$1;
(statearr_63786_64693[(1)] = (4));

} else {
var statearr_63787_64694 = state_63777__$1;
(statearr_63787_64694[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63778 === (11))){
var inst_63747 = (state_63777[(10)]);
var inst_63766 = (state_63777[(2)]);
var tmp63785 = inst_63747;
var inst_63747__$1 = tmp63785;
var state_63777__$1 = (function (){var statearr_63788 = state_63777;
(statearr_63788[(10)] = inst_63747__$1);

(statearr_63788[(11)] = inst_63766);

return statearr_63788;
})();
var statearr_63789_64695 = state_63777__$1;
(statearr_63789_64695[(2)] = null);

(statearr_63789_64695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63778 === (9))){
var inst_63757 = (state_63777[(8)]);
var state_63777__$1 = state_63777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63777__$1,(11),out,inst_63757);
} else {
if((state_val_63778 === (5))){
var inst_63771 = cljs.core.async.close_BANG_(out);
var state_63777__$1 = state_63777;
var statearr_63790_64696 = state_63777__$1;
(statearr_63790_64696[(2)] = inst_63771);

(statearr_63790_64696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63778 === (10))){
var inst_63769 = (state_63777[(2)]);
var state_63777__$1 = state_63777;
var statearr_63791_64697 = state_63777__$1;
(statearr_63791_64697[(2)] = inst_63769);

(statearr_63791_64697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63778 === (8))){
var inst_63756 = (state_63777[(7)]);
var inst_63758 = (state_63777[(9)]);
var inst_63757 = (state_63777[(8)]);
var inst_63747 = (state_63777[(10)]);
var inst_63761 = (function (){var cs = inst_63747;
var vec__63752 = inst_63756;
var v = inst_63757;
var c = inst_63758;
return (function (p1__63743_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__63743_SHARP_);
});
})();
var inst_63762 = cljs.core.filterv(inst_63761,inst_63747);
var inst_63747__$1 = inst_63762;
var state_63777__$1 = (function (){var statearr_63792 = state_63777;
(statearr_63792[(10)] = inst_63747__$1);

return statearr_63792;
})();
var statearr_63793_64706 = state_63777__$1;
(statearr_63793_64706[(2)] = null);

(statearr_63793_64706[(1)] = (2));


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
var cljs$core$async$state_machine__62624__auto__ = null;
var cljs$core$async$state_machine__62624__auto____0 = (function (){
var statearr_63794 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63794[(0)] = cljs$core$async$state_machine__62624__auto__);

(statearr_63794[(1)] = (1));

return statearr_63794;
});
var cljs$core$async$state_machine__62624__auto____1 = (function (state_63777){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_63777);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e63795){var ex__62627__auto__ = e63795;
var statearr_63796_64707 = state_63777;
(statearr_63796_64707[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_63777[(4)]))){
var statearr_63797_64708 = state_63777;
(statearr_63797_64708[(1)] = cljs.core.first((state_63777[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64709 = state_63777;
state_63777 = G__64709;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
cljs$core$async$state_machine__62624__auto__ = function(state_63777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62624__auto____1.call(this,state_63777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62624__auto____0;
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62624__auto____1;
return cljs$core$async$state_machine__62624__auto__;
})()
})();
var state__62661__auto__ = (function (){var statearr_63798 = f__62660__auto__();
(statearr_63798[(6)] = c__62659__auto___64686);

return statearr_63798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
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
var G__63800 = arguments.length;
switch (G__63800) {
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
var c__62659__auto___64711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = (function (state_63824){
var state_val_63825 = (state_63824[(1)]);
if((state_val_63825 === (7))){
var inst_63806 = (state_63824[(7)]);
var inst_63806__$1 = (state_63824[(2)]);
var inst_63807 = (inst_63806__$1 == null);
var inst_63808 = cljs.core.not(inst_63807);
var state_63824__$1 = (function (){var statearr_63826 = state_63824;
(statearr_63826[(7)] = inst_63806__$1);

return statearr_63826;
})();
if(inst_63808){
var statearr_63827_64713 = state_63824__$1;
(statearr_63827_64713[(1)] = (8));

} else {
var statearr_63828_64714 = state_63824__$1;
(statearr_63828_64714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63825 === (1))){
var inst_63801 = (0);
var state_63824__$1 = (function (){var statearr_63829 = state_63824;
(statearr_63829[(8)] = inst_63801);

return statearr_63829;
})();
var statearr_63830_64715 = state_63824__$1;
(statearr_63830_64715[(2)] = null);

(statearr_63830_64715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63825 === (4))){
var state_63824__$1 = state_63824;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63824__$1,(7),ch);
} else {
if((state_val_63825 === (6))){
var inst_63819 = (state_63824[(2)]);
var state_63824__$1 = state_63824;
var statearr_63831_64716 = state_63824__$1;
(statearr_63831_64716[(2)] = inst_63819);

(statearr_63831_64716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63825 === (3))){
var inst_63821 = (state_63824[(2)]);
var inst_63822 = cljs.core.async.close_BANG_(out);
var state_63824__$1 = (function (){var statearr_63832 = state_63824;
(statearr_63832[(9)] = inst_63821);

return statearr_63832;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63824__$1,inst_63822);
} else {
if((state_val_63825 === (2))){
var inst_63801 = (state_63824[(8)]);
var inst_63803 = (inst_63801 < n);
var state_63824__$1 = state_63824;
if(cljs.core.truth_(inst_63803)){
var statearr_63833_64717 = state_63824__$1;
(statearr_63833_64717[(1)] = (4));

} else {
var statearr_63834_64718 = state_63824__$1;
(statearr_63834_64718[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63825 === (11))){
var inst_63801 = (state_63824[(8)]);
var inst_63811 = (state_63824[(2)]);
var inst_63812 = (inst_63801 + (1));
var inst_63801__$1 = inst_63812;
var state_63824__$1 = (function (){var statearr_63835 = state_63824;
(statearr_63835[(10)] = inst_63811);

(statearr_63835[(8)] = inst_63801__$1);

return statearr_63835;
})();
var statearr_63836_64719 = state_63824__$1;
(statearr_63836_64719[(2)] = null);

(statearr_63836_64719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63825 === (9))){
var state_63824__$1 = state_63824;
var statearr_63837_64720 = state_63824__$1;
(statearr_63837_64720[(2)] = null);

(statearr_63837_64720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63825 === (5))){
var state_63824__$1 = state_63824;
var statearr_63838_64721 = state_63824__$1;
(statearr_63838_64721[(2)] = null);

(statearr_63838_64721[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63825 === (10))){
var inst_63816 = (state_63824[(2)]);
var state_63824__$1 = state_63824;
var statearr_63839_64722 = state_63824__$1;
(statearr_63839_64722[(2)] = inst_63816);

(statearr_63839_64722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63825 === (8))){
var inst_63806 = (state_63824[(7)]);
var state_63824__$1 = state_63824;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63824__$1,(11),out,inst_63806);
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
var cljs$core$async$state_machine__62624__auto__ = null;
var cljs$core$async$state_machine__62624__auto____0 = (function (){
var statearr_63840 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63840[(0)] = cljs$core$async$state_machine__62624__auto__);

(statearr_63840[(1)] = (1));

return statearr_63840;
});
var cljs$core$async$state_machine__62624__auto____1 = (function (state_63824){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_63824);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e63841){var ex__62627__auto__ = e63841;
var statearr_63842_64723 = state_63824;
(statearr_63842_64723[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_63824[(4)]))){
var statearr_63843_64724 = state_63824;
(statearr_63843_64724[(1)] = cljs.core.first((state_63824[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64725 = state_63824;
state_63824 = G__64725;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
cljs$core$async$state_machine__62624__auto__ = function(state_63824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62624__auto____1.call(this,state_63824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62624__auto____0;
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62624__auto____1;
return cljs$core$async$state_machine__62624__auto__;
})()
})();
var state__62661__auto__ = (function (){var statearr_63844 = f__62660__auto__();
(statearr_63844[(6)] = c__62659__auto___64711);

return statearr_63844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63846 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63846 = (function (f,ch,meta63847){
this.f = f;
this.ch = ch;
this.meta63847 = meta63847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63848,meta63847__$1){
var self__ = this;
var _63848__$1 = this;
return (new cljs.core.async.t_cljs$core$async63846(self__.f,self__.ch,meta63847__$1));
}));

(cljs.core.async.t_cljs$core$async63846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63848){
var self__ = this;
var _63848__$1 = this;
return self__.meta63847;
}));

(cljs.core.async.t_cljs$core$async63846.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63846.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63846.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63846.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63846.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63849 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63849 = (function (f,ch,meta63847,_,fn1,meta63850){
this.f = f;
this.ch = ch;
this.meta63847 = meta63847;
this._ = _;
this.fn1 = fn1;
this.meta63850 = meta63850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63851,meta63850__$1){
var self__ = this;
var _63851__$1 = this;
return (new cljs.core.async.t_cljs$core$async63849(self__.f,self__.ch,self__.meta63847,self__._,self__.fn1,meta63850__$1));
}));

(cljs.core.async.t_cljs$core$async63849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63851){
var self__ = this;
var _63851__$1 = this;
return self__.meta63850;
}));

(cljs.core.async.t_cljs$core$async63849.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63849.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async63849.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async63849.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__63845_SHARP_){
var G__63852 = (((p1__63845_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__63845_SHARP_) : self__.f.call(null,p1__63845_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__63852) : f1.call(null,G__63852));
});
}));

(cljs.core.async.t_cljs$core$async63849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63847","meta63847",1937482351,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async63846","cljs.core.async/t_cljs$core$async63846",-940124931,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta63850","meta63850",1228417527,null)], null);
}));

(cljs.core.async.t_cljs$core$async63849.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63849");

(cljs.core.async.t_cljs$core$async63849.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63849");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63849.
 */
cljs.core.async.__GT_t_cljs$core$async63849 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async63849(f__$1,ch__$1,meta63847__$1,___$2,fn1__$1,meta63850){
return (new cljs.core.async.t_cljs$core$async63849(f__$1,ch__$1,meta63847__$1,___$2,fn1__$1,meta63850));
});

}

return (new cljs.core.async.t_cljs$core$async63849(self__.f,self__.ch,self__.meta63847,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__63853 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__63853) : self__.f.call(null,G__63853));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async63846.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63846.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async63846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63847","meta63847",1937482351,null)], null);
}));

(cljs.core.async.t_cljs$core$async63846.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63846");

(cljs.core.async.t_cljs$core$async63846.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63846");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63846.
 */
cljs.core.async.__GT_t_cljs$core$async63846 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async63846(f__$1,ch__$1,meta63847){
return (new cljs.core.async.t_cljs$core$async63846(f__$1,ch__$1,meta63847));
});

}

return (new cljs.core.async.t_cljs$core$async63846(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63854 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63854 = (function (f,ch,meta63855){
this.f = f;
this.ch = ch;
this.meta63855 = meta63855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63856,meta63855__$1){
var self__ = this;
var _63856__$1 = this;
return (new cljs.core.async.t_cljs$core$async63854(self__.f,self__.ch,meta63855__$1));
}));

(cljs.core.async.t_cljs$core$async63854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63856){
var self__ = this;
var _63856__$1 = this;
return self__.meta63855;
}));

(cljs.core.async.t_cljs$core$async63854.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63854.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63854.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63854.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async63854.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63854.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async63854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63855","meta63855",1902679696,null)], null);
}));

(cljs.core.async.t_cljs$core$async63854.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63854");

(cljs.core.async.t_cljs$core$async63854.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63854");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63854.
 */
cljs.core.async.__GT_t_cljs$core$async63854 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async63854(f__$1,ch__$1,meta63855){
return (new cljs.core.async.t_cljs$core$async63854(f__$1,ch__$1,meta63855));
});

}

return (new cljs.core.async.t_cljs$core$async63854(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63857 = (function (p,ch,meta63858){
this.p = p;
this.ch = ch;
this.meta63858 = meta63858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63859,meta63858__$1){
var self__ = this;
var _63859__$1 = this;
return (new cljs.core.async.t_cljs$core$async63857(self__.p,self__.ch,meta63858__$1));
}));

(cljs.core.async.t_cljs$core$async63857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63859){
var self__ = this;
var _63859__$1 = this;
return self__.meta63858;
}));

(cljs.core.async.t_cljs$core$async63857.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63857.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63857.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63857.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63857.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async63857.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63857.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async63857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63858","meta63858",826833655,null)], null);
}));

(cljs.core.async.t_cljs$core$async63857.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63857");

(cljs.core.async.t_cljs$core$async63857.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63857");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63857.
 */
cljs.core.async.__GT_t_cljs$core$async63857 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async63857(p__$1,ch__$1,meta63858){
return (new cljs.core.async.t_cljs$core$async63857(p__$1,ch__$1,meta63858));
});

}

return (new cljs.core.async.t_cljs$core$async63857(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__63861 = arguments.length;
switch (G__63861) {
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
var c__62659__auto___64729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = (function (state_63882){
var state_val_63883 = (state_63882[(1)]);
if((state_val_63883 === (7))){
var inst_63878 = (state_63882[(2)]);
var state_63882__$1 = state_63882;
var statearr_63884_64730 = state_63882__$1;
(statearr_63884_64730[(2)] = inst_63878);

(statearr_63884_64730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63883 === (1))){
var state_63882__$1 = state_63882;
var statearr_63885_64731 = state_63882__$1;
(statearr_63885_64731[(2)] = null);

(statearr_63885_64731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63883 === (4))){
var inst_63864 = (state_63882[(7)]);
var inst_63864__$1 = (state_63882[(2)]);
var inst_63865 = (inst_63864__$1 == null);
var state_63882__$1 = (function (){var statearr_63886 = state_63882;
(statearr_63886[(7)] = inst_63864__$1);

return statearr_63886;
})();
if(cljs.core.truth_(inst_63865)){
var statearr_63887_64732 = state_63882__$1;
(statearr_63887_64732[(1)] = (5));

} else {
var statearr_63888_64733 = state_63882__$1;
(statearr_63888_64733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63883 === (6))){
var inst_63864 = (state_63882[(7)]);
var inst_63869 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_63864) : p.call(null,inst_63864));
var state_63882__$1 = state_63882;
if(cljs.core.truth_(inst_63869)){
var statearr_63889_64734 = state_63882__$1;
(statearr_63889_64734[(1)] = (8));

} else {
var statearr_63890_64735 = state_63882__$1;
(statearr_63890_64735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63883 === (3))){
var inst_63880 = (state_63882[(2)]);
var state_63882__$1 = state_63882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63882__$1,inst_63880);
} else {
if((state_val_63883 === (2))){
var state_63882__$1 = state_63882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63882__$1,(4),ch);
} else {
if((state_val_63883 === (11))){
var inst_63872 = (state_63882[(2)]);
var state_63882__$1 = state_63882;
var statearr_63891_64736 = state_63882__$1;
(statearr_63891_64736[(2)] = inst_63872);

(statearr_63891_64736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63883 === (9))){
var state_63882__$1 = state_63882;
var statearr_63892_64737 = state_63882__$1;
(statearr_63892_64737[(2)] = null);

(statearr_63892_64737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63883 === (5))){
var inst_63867 = cljs.core.async.close_BANG_(out);
var state_63882__$1 = state_63882;
var statearr_63893_64738 = state_63882__$1;
(statearr_63893_64738[(2)] = inst_63867);

(statearr_63893_64738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63883 === (10))){
var inst_63875 = (state_63882[(2)]);
var state_63882__$1 = (function (){var statearr_63894 = state_63882;
(statearr_63894[(8)] = inst_63875);

return statearr_63894;
})();
var statearr_63895_64739 = state_63882__$1;
(statearr_63895_64739[(2)] = null);

(statearr_63895_64739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63883 === (8))){
var inst_63864 = (state_63882[(7)]);
var state_63882__$1 = state_63882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63882__$1,(11),out,inst_63864);
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
var cljs$core$async$state_machine__62624__auto__ = null;
var cljs$core$async$state_machine__62624__auto____0 = (function (){
var statearr_63896 = [null,null,null,null,null,null,null,null,null];
(statearr_63896[(0)] = cljs$core$async$state_machine__62624__auto__);

(statearr_63896[(1)] = (1));

return statearr_63896;
});
var cljs$core$async$state_machine__62624__auto____1 = (function (state_63882){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_63882);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e63897){var ex__62627__auto__ = e63897;
var statearr_63898_64740 = state_63882;
(statearr_63898_64740[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_63882[(4)]))){
var statearr_63899_64741 = state_63882;
(statearr_63899_64741[(1)] = cljs.core.first((state_63882[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64742 = state_63882;
state_63882 = G__64742;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
cljs$core$async$state_machine__62624__auto__ = function(state_63882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62624__auto____1.call(this,state_63882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62624__auto____0;
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62624__auto____1;
return cljs$core$async$state_machine__62624__auto__;
})()
})();
var state__62661__auto__ = (function (){var statearr_63900 = f__62660__auto__();
(statearr_63900[(6)] = c__62659__auto___64729);

return statearr_63900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__63902 = arguments.length;
switch (G__63902) {
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
var c__62659__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = (function (state_63964){
var state_val_63965 = (state_63964[(1)]);
if((state_val_63965 === (7))){
var inst_63960 = (state_63964[(2)]);
var state_63964__$1 = state_63964;
var statearr_63966_64744 = state_63964__$1;
(statearr_63966_64744[(2)] = inst_63960);

(statearr_63966_64744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63965 === (20))){
var inst_63930 = (state_63964[(7)]);
var inst_63941 = (state_63964[(2)]);
var inst_63942 = cljs.core.next(inst_63930);
var inst_63916 = inst_63942;
var inst_63917 = null;
var inst_63918 = (0);
var inst_63919 = (0);
var state_63964__$1 = (function (){var statearr_63967 = state_63964;
(statearr_63967[(8)] = inst_63918);

(statearr_63967[(9)] = inst_63919);

(statearr_63967[(10)] = inst_63917);

(statearr_63967[(11)] = inst_63941);

(statearr_63967[(12)] = inst_63916);

return statearr_63967;
})();
var statearr_63968_64745 = state_63964__$1;
(statearr_63968_64745[(2)] = null);

(statearr_63968_64745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63965 === (1))){
var state_63964__$1 = state_63964;
var statearr_63969_64746 = state_63964__$1;
(statearr_63969_64746[(2)] = null);

(statearr_63969_64746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63965 === (4))){
var inst_63905 = (state_63964[(13)]);
var inst_63905__$1 = (state_63964[(2)]);
var inst_63906 = (inst_63905__$1 == null);
var state_63964__$1 = (function (){var statearr_63970 = state_63964;
(statearr_63970[(13)] = inst_63905__$1);

return statearr_63970;
})();
if(cljs.core.truth_(inst_63906)){
var statearr_63971_64747 = state_63964__$1;
(statearr_63971_64747[(1)] = (5));

} else {
var statearr_63972_64748 = state_63964__$1;
(statearr_63972_64748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63965 === (15))){
var state_63964__$1 = state_63964;
var statearr_63976_64749 = state_63964__$1;
(statearr_63976_64749[(2)] = null);

(statearr_63976_64749[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63965 === (21))){
var state_63964__$1 = state_63964;
var statearr_63977_64750 = state_63964__$1;
(statearr_63977_64750[(2)] = null);

(statearr_63977_64750[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63965 === (13))){
var inst_63918 = (state_63964[(8)]);
var inst_63919 = (state_63964[(9)]);
var inst_63917 = (state_63964[(10)]);
var inst_63916 = (state_63964[(12)]);
var inst_63926 = (state_63964[(2)]);
var inst_63927 = (inst_63919 + (1));
var tmp63973 = inst_63918;
var tmp63974 = inst_63917;
var tmp63975 = inst_63916;
var inst_63916__$1 = tmp63975;
var inst_63917__$1 = tmp63974;
var inst_63918__$1 = tmp63973;
var inst_63919__$1 = inst_63927;
var state_63964__$1 = (function (){var statearr_63978 = state_63964;
(statearr_63978[(8)] = inst_63918__$1);

(statearr_63978[(9)] = inst_63919__$1);

(statearr_63978[(10)] = inst_63917__$1);

(statearr_63978[(12)] = inst_63916__$1);

(statearr_63978[(14)] = inst_63926);

return statearr_63978;
})();
var statearr_63979_64751 = state_63964__$1;
(statearr_63979_64751[(2)] = null);

(statearr_63979_64751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63965 === (22))){
var state_63964__$1 = state_63964;
var statearr_63980_64752 = state_63964__$1;
(statearr_63980_64752[(2)] = null);

(statearr_63980_64752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63965 === (6))){
var inst_63905 = (state_63964[(13)]);
var inst_63914 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_63905) : f.call(null,inst_63905));
var inst_63915 = cljs.core.seq(inst_63914);
var inst_63916 = inst_63915;
var inst_63917 = null;
var inst_63918 = (0);
var inst_63919 = (0);
var state_63964__$1 = (function (){var statearr_63981 = state_63964;
(statearr_63981[(8)] = inst_63918);

(statearr_63981[(9)] = inst_63919);

(statearr_63981[(10)] = inst_63917);

(statearr_63981[(12)] = inst_63916);

return statearr_63981;
})();
var statearr_63982_64753 = state_63964__$1;
(statearr_63982_64753[(2)] = null);

(statearr_63982_64753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63965 === (17))){
var inst_63930 = (state_63964[(7)]);
var inst_63934 = cljs.core.chunk_first(inst_63930);
var inst_63935 = cljs.core.chunk_rest(inst_63930);
var inst_63936 = cljs.core.count(inst_63934);
var inst_63916 = inst_63935;
var inst_63917 = inst_63934;
var inst_63918 = inst_63936;
var inst_63919 = (0);
var state_63964__$1 = (function (){var statearr_63983 = state_63964;
(statearr_63983[(8)] = inst_63918);

(statearr_63983[(9)] = inst_63919);

(statearr_63983[(10)] = inst_63917);

(statearr_63983[(12)] = inst_63916);

return statearr_63983;
})();
var statearr_63984_64754 = state_63964__$1;
(statearr_63984_64754[(2)] = null);

(statearr_63984_64754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63965 === (3))){
var inst_63962 = (state_63964[(2)]);
var state_63964__$1 = state_63964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63964__$1,inst_63962);
} else {
if((state_val_63965 === (12))){
var inst_63950 = (state_63964[(2)]);
var state_63964__$1 = state_63964;
var statearr_63985_64755 = state_63964__$1;
(statearr_63985_64755[(2)] = inst_63950);

(statearr_63985_64755[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63965 === (2))){
var state_63964__$1 = state_63964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63964__$1,(4),in$);
} else {
if((state_val_63965 === (23))){
var inst_63958 = (state_63964[(2)]);
var state_63964__$1 = state_63964;
var statearr_63986_64756 = state_63964__$1;
(statearr_63986_64756[(2)] = inst_63958);

(statearr_63986_64756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63965 === (19))){
var inst_63945 = (state_63964[(2)]);
var state_63964__$1 = state_63964;
var statearr_63987_64757 = state_63964__$1;
(statearr_63987_64757[(2)] = inst_63945);

(statearr_63987_64757[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63965 === (11))){
var inst_63930 = (state_63964[(7)]);
var inst_63916 = (state_63964[(12)]);
var inst_63930__$1 = cljs.core.seq(inst_63916);
var state_63964__$1 = (function (){var statearr_63988 = state_63964;
(statearr_63988[(7)] = inst_63930__$1);

return statearr_63988;
})();
if(inst_63930__$1){
var statearr_63989_64758 = state_63964__$1;
(statearr_63989_64758[(1)] = (14));

} else {
var statearr_63990_64759 = state_63964__$1;
(statearr_63990_64759[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63965 === (9))){
var inst_63952 = (state_63964[(2)]);
var inst_63953 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_63964__$1 = (function (){var statearr_63991 = state_63964;
(statearr_63991[(15)] = inst_63952);

return statearr_63991;
})();
if(cljs.core.truth_(inst_63953)){
var statearr_63992_64760 = state_63964__$1;
(statearr_63992_64760[(1)] = (21));

} else {
var statearr_63993_64761 = state_63964__$1;
(statearr_63993_64761[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63965 === (5))){
var inst_63908 = cljs.core.async.close_BANG_(out);
var state_63964__$1 = state_63964;
var statearr_63994_64762 = state_63964__$1;
(statearr_63994_64762[(2)] = inst_63908);

(statearr_63994_64762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63965 === (14))){
var inst_63930 = (state_63964[(7)]);
var inst_63932 = cljs.core.chunked_seq_QMARK_(inst_63930);
var state_63964__$1 = state_63964;
if(inst_63932){
var statearr_63995_64763 = state_63964__$1;
(statearr_63995_64763[(1)] = (17));

} else {
var statearr_63996_64764 = state_63964__$1;
(statearr_63996_64764[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63965 === (16))){
var inst_63948 = (state_63964[(2)]);
var state_63964__$1 = state_63964;
var statearr_63997_64765 = state_63964__$1;
(statearr_63997_64765[(2)] = inst_63948);

(statearr_63997_64765[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63965 === (10))){
var inst_63919 = (state_63964[(9)]);
var inst_63917 = (state_63964[(10)]);
var inst_63924 = cljs.core._nth(inst_63917,inst_63919);
var state_63964__$1 = state_63964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63964__$1,(13),out,inst_63924);
} else {
if((state_val_63965 === (18))){
var inst_63930 = (state_63964[(7)]);
var inst_63939 = cljs.core.first(inst_63930);
var state_63964__$1 = state_63964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63964__$1,(20),out,inst_63939);
} else {
if((state_val_63965 === (8))){
var inst_63918 = (state_63964[(8)]);
var inst_63919 = (state_63964[(9)]);
var inst_63921 = (inst_63919 < inst_63918);
var inst_63922 = inst_63921;
var state_63964__$1 = state_63964;
if(cljs.core.truth_(inst_63922)){
var statearr_63998_64766 = state_63964__$1;
(statearr_63998_64766[(1)] = (10));

} else {
var statearr_63999_64767 = state_63964__$1;
(statearr_63999_64767[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__62624__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__62624__auto____0 = (function (){
var statearr_64000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64000[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__62624__auto__);

(statearr_64000[(1)] = (1));

return statearr_64000;
});
var cljs$core$async$mapcat_STAR__$_state_machine__62624__auto____1 = (function (state_63964){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_63964);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e64001){var ex__62627__auto__ = e64001;
var statearr_64002_64768 = state_63964;
(statearr_64002_64768[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_63964[(4)]))){
var statearr_64003_64769 = state_63964;
(statearr_64003_64769[(1)] = cljs.core.first((state_63964[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64770 = state_63964;
state_63964 = G__64770;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__62624__auto__ = function(state_63964){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__62624__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__62624__auto____1.call(this,state_63964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__62624__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__62624__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__62624__auto__;
})()
})();
var state__62661__auto__ = (function (){var statearr_64004 = f__62660__auto__();
(statearr_64004[(6)] = c__62659__auto__);

return statearr_64004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
}));

return c__62659__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__64006 = arguments.length;
switch (G__64006) {
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
var G__64008 = arguments.length;
switch (G__64008) {
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
var G__64010 = arguments.length;
switch (G__64010) {
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
var c__62659__auto___64774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = (function (state_64034){
var state_val_64035 = (state_64034[(1)]);
if((state_val_64035 === (7))){
var inst_64029 = (state_64034[(2)]);
var state_64034__$1 = state_64034;
var statearr_64036_64776 = state_64034__$1;
(statearr_64036_64776[(2)] = inst_64029);

(statearr_64036_64776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64035 === (1))){
var inst_64011 = null;
var state_64034__$1 = (function (){var statearr_64037 = state_64034;
(statearr_64037[(7)] = inst_64011);

return statearr_64037;
})();
var statearr_64038_64778 = state_64034__$1;
(statearr_64038_64778[(2)] = null);

(statearr_64038_64778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64035 === (4))){
var inst_64014 = (state_64034[(8)]);
var inst_64014__$1 = (state_64034[(2)]);
var inst_64015 = (inst_64014__$1 == null);
var inst_64016 = cljs.core.not(inst_64015);
var state_64034__$1 = (function (){var statearr_64039 = state_64034;
(statearr_64039[(8)] = inst_64014__$1);

return statearr_64039;
})();
if(inst_64016){
var statearr_64040_64782 = state_64034__$1;
(statearr_64040_64782[(1)] = (5));

} else {
var statearr_64041_64783 = state_64034__$1;
(statearr_64041_64783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64035 === (6))){
var state_64034__$1 = state_64034;
var statearr_64042_64786 = state_64034__$1;
(statearr_64042_64786[(2)] = null);

(statearr_64042_64786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64035 === (3))){
var inst_64031 = (state_64034[(2)]);
var inst_64032 = cljs.core.async.close_BANG_(out);
var state_64034__$1 = (function (){var statearr_64043 = state_64034;
(statearr_64043[(9)] = inst_64031);

return statearr_64043;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64034__$1,inst_64032);
} else {
if((state_val_64035 === (2))){
var state_64034__$1 = state_64034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64034__$1,(4),ch);
} else {
if((state_val_64035 === (11))){
var inst_64014 = (state_64034[(8)]);
var inst_64023 = (state_64034[(2)]);
var inst_64011 = inst_64014;
var state_64034__$1 = (function (){var statearr_64044 = state_64034;
(statearr_64044[(7)] = inst_64011);

(statearr_64044[(10)] = inst_64023);

return statearr_64044;
})();
var statearr_64045_64789 = state_64034__$1;
(statearr_64045_64789[(2)] = null);

(statearr_64045_64789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64035 === (9))){
var inst_64014 = (state_64034[(8)]);
var state_64034__$1 = state_64034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64034__$1,(11),out,inst_64014);
} else {
if((state_val_64035 === (5))){
var inst_64011 = (state_64034[(7)]);
var inst_64014 = (state_64034[(8)]);
var inst_64018 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64014,inst_64011);
var state_64034__$1 = state_64034;
if(inst_64018){
var statearr_64047_64793 = state_64034__$1;
(statearr_64047_64793[(1)] = (8));

} else {
var statearr_64048_64794 = state_64034__$1;
(statearr_64048_64794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64035 === (10))){
var inst_64026 = (state_64034[(2)]);
var state_64034__$1 = state_64034;
var statearr_64049_64795 = state_64034__$1;
(statearr_64049_64795[(2)] = inst_64026);

(statearr_64049_64795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64035 === (8))){
var inst_64011 = (state_64034[(7)]);
var tmp64046 = inst_64011;
var inst_64011__$1 = tmp64046;
var state_64034__$1 = (function (){var statearr_64050 = state_64034;
(statearr_64050[(7)] = inst_64011__$1);

return statearr_64050;
})();
var statearr_64051_64796 = state_64034__$1;
(statearr_64051_64796[(2)] = null);

(statearr_64051_64796[(1)] = (2));


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
var cljs$core$async$state_machine__62624__auto__ = null;
var cljs$core$async$state_machine__62624__auto____0 = (function (){
var statearr_64052 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64052[(0)] = cljs$core$async$state_machine__62624__auto__);

(statearr_64052[(1)] = (1));

return statearr_64052;
});
var cljs$core$async$state_machine__62624__auto____1 = (function (state_64034){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_64034);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e64053){var ex__62627__auto__ = e64053;
var statearr_64054_64797 = state_64034;
(statearr_64054_64797[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_64034[(4)]))){
var statearr_64055_64798 = state_64034;
(statearr_64055_64798[(1)] = cljs.core.first((state_64034[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64799 = state_64034;
state_64034 = G__64799;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
cljs$core$async$state_machine__62624__auto__ = function(state_64034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62624__auto____1.call(this,state_64034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62624__auto____0;
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62624__auto____1;
return cljs$core$async$state_machine__62624__auto__;
})()
})();
var state__62661__auto__ = (function (){var statearr_64056 = f__62660__auto__();
(statearr_64056[(6)] = c__62659__auto___64774);

return statearr_64056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__64058 = arguments.length;
switch (G__64058) {
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
var c__62659__auto___64804 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = (function (state_64096){
var state_val_64097 = (state_64096[(1)]);
if((state_val_64097 === (7))){
var inst_64092 = (state_64096[(2)]);
var state_64096__$1 = state_64096;
var statearr_64098_64805 = state_64096__$1;
(statearr_64098_64805[(2)] = inst_64092);

(statearr_64098_64805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64097 === (1))){
var inst_64059 = (new Array(n));
var inst_64060 = inst_64059;
var inst_64061 = (0);
var state_64096__$1 = (function (){var statearr_64099 = state_64096;
(statearr_64099[(7)] = inst_64061);

(statearr_64099[(8)] = inst_64060);

return statearr_64099;
})();
var statearr_64100_64806 = state_64096__$1;
(statearr_64100_64806[(2)] = null);

(statearr_64100_64806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64097 === (4))){
var inst_64064 = (state_64096[(9)]);
var inst_64064__$1 = (state_64096[(2)]);
var inst_64065 = (inst_64064__$1 == null);
var inst_64066 = cljs.core.not(inst_64065);
var state_64096__$1 = (function (){var statearr_64101 = state_64096;
(statearr_64101[(9)] = inst_64064__$1);

return statearr_64101;
})();
if(inst_64066){
var statearr_64102_64807 = state_64096__$1;
(statearr_64102_64807[(1)] = (5));

} else {
var statearr_64103_64808 = state_64096__$1;
(statearr_64103_64808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64097 === (15))){
var inst_64086 = (state_64096[(2)]);
var state_64096__$1 = state_64096;
var statearr_64104_64809 = state_64096__$1;
(statearr_64104_64809[(2)] = inst_64086);

(statearr_64104_64809[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64097 === (13))){
var state_64096__$1 = state_64096;
var statearr_64105_64810 = state_64096__$1;
(statearr_64105_64810[(2)] = null);

(statearr_64105_64810[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64097 === (6))){
var inst_64061 = (state_64096[(7)]);
var inst_64082 = (inst_64061 > (0));
var state_64096__$1 = state_64096;
if(cljs.core.truth_(inst_64082)){
var statearr_64106_64811 = state_64096__$1;
(statearr_64106_64811[(1)] = (12));

} else {
var statearr_64107_64812 = state_64096__$1;
(statearr_64107_64812[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64097 === (3))){
var inst_64094 = (state_64096[(2)]);
var state_64096__$1 = state_64096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64096__$1,inst_64094);
} else {
if((state_val_64097 === (12))){
var inst_64060 = (state_64096[(8)]);
var inst_64084 = cljs.core.vec(inst_64060);
var state_64096__$1 = state_64096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64096__$1,(15),out,inst_64084);
} else {
if((state_val_64097 === (2))){
var state_64096__$1 = state_64096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64096__$1,(4),ch);
} else {
if((state_val_64097 === (11))){
var inst_64076 = (state_64096[(2)]);
var inst_64077 = (new Array(n));
var inst_64060 = inst_64077;
var inst_64061 = (0);
var state_64096__$1 = (function (){var statearr_64108 = state_64096;
(statearr_64108[(7)] = inst_64061);

(statearr_64108[(8)] = inst_64060);

(statearr_64108[(10)] = inst_64076);

return statearr_64108;
})();
var statearr_64109_64813 = state_64096__$1;
(statearr_64109_64813[(2)] = null);

(statearr_64109_64813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64097 === (9))){
var inst_64060 = (state_64096[(8)]);
var inst_64074 = cljs.core.vec(inst_64060);
var state_64096__$1 = state_64096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64096__$1,(11),out,inst_64074);
} else {
if((state_val_64097 === (5))){
var inst_64061 = (state_64096[(7)]);
var inst_64069 = (state_64096[(11)]);
var inst_64064 = (state_64096[(9)]);
var inst_64060 = (state_64096[(8)]);
var inst_64068 = (inst_64060[inst_64061] = inst_64064);
var inst_64069__$1 = (inst_64061 + (1));
var inst_64070 = (inst_64069__$1 < n);
var state_64096__$1 = (function (){var statearr_64110 = state_64096;
(statearr_64110[(11)] = inst_64069__$1);

(statearr_64110[(12)] = inst_64068);

return statearr_64110;
})();
if(cljs.core.truth_(inst_64070)){
var statearr_64111_64814 = state_64096__$1;
(statearr_64111_64814[(1)] = (8));

} else {
var statearr_64112_64815 = state_64096__$1;
(statearr_64112_64815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64097 === (14))){
var inst_64089 = (state_64096[(2)]);
var inst_64090 = cljs.core.async.close_BANG_(out);
var state_64096__$1 = (function (){var statearr_64114 = state_64096;
(statearr_64114[(13)] = inst_64089);

return statearr_64114;
})();
var statearr_64115_64816 = state_64096__$1;
(statearr_64115_64816[(2)] = inst_64090);

(statearr_64115_64816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64097 === (10))){
var inst_64080 = (state_64096[(2)]);
var state_64096__$1 = state_64096;
var statearr_64116_64817 = state_64096__$1;
(statearr_64116_64817[(2)] = inst_64080);

(statearr_64116_64817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64097 === (8))){
var inst_64069 = (state_64096[(11)]);
var inst_64060 = (state_64096[(8)]);
var tmp64113 = inst_64060;
var inst_64060__$1 = tmp64113;
var inst_64061 = inst_64069;
var state_64096__$1 = (function (){var statearr_64117 = state_64096;
(statearr_64117[(7)] = inst_64061);

(statearr_64117[(8)] = inst_64060__$1);

return statearr_64117;
})();
var statearr_64118_64818 = state_64096__$1;
(statearr_64118_64818[(2)] = null);

(statearr_64118_64818[(1)] = (2));


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
var cljs$core$async$state_machine__62624__auto__ = null;
var cljs$core$async$state_machine__62624__auto____0 = (function (){
var statearr_64119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64119[(0)] = cljs$core$async$state_machine__62624__auto__);

(statearr_64119[(1)] = (1));

return statearr_64119;
});
var cljs$core$async$state_machine__62624__auto____1 = (function (state_64096){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_64096);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e64120){var ex__62627__auto__ = e64120;
var statearr_64121_64819 = state_64096;
(statearr_64121_64819[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_64096[(4)]))){
var statearr_64122_64820 = state_64096;
(statearr_64122_64820[(1)] = cljs.core.first((state_64096[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64821 = state_64096;
state_64096 = G__64821;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
cljs$core$async$state_machine__62624__auto__ = function(state_64096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62624__auto____1.call(this,state_64096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62624__auto____0;
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62624__auto____1;
return cljs$core$async$state_machine__62624__auto__;
})()
})();
var state__62661__auto__ = (function (){var statearr_64123 = f__62660__auto__();
(statearr_64123[(6)] = c__62659__auto___64804);

return statearr_64123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__64125 = arguments.length;
switch (G__64125) {
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
var c__62659__auto___64826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = (function (state_64167){
var state_val_64168 = (state_64167[(1)]);
if((state_val_64168 === (7))){
var inst_64163 = (state_64167[(2)]);
var state_64167__$1 = state_64167;
var statearr_64169_64827 = state_64167__$1;
(statearr_64169_64827[(2)] = inst_64163);

(statearr_64169_64827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64168 === (1))){
var inst_64126 = [];
var inst_64127 = inst_64126;
var inst_64128 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_64167__$1 = (function (){var statearr_64170 = state_64167;
(statearr_64170[(7)] = inst_64127);

(statearr_64170[(8)] = inst_64128);

return statearr_64170;
})();
var statearr_64171_64828 = state_64167__$1;
(statearr_64171_64828[(2)] = null);

(statearr_64171_64828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64168 === (4))){
var inst_64131 = (state_64167[(9)]);
var inst_64131__$1 = (state_64167[(2)]);
var inst_64132 = (inst_64131__$1 == null);
var inst_64133 = cljs.core.not(inst_64132);
var state_64167__$1 = (function (){var statearr_64172 = state_64167;
(statearr_64172[(9)] = inst_64131__$1);

return statearr_64172;
})();
if(inst_64133){
var statearr_64173_64833 = state_64167__$1;
(statearr_64173_64833[(1)] = (5));

} else {
var statearr_64174_64835 = state_64167__$1;
(statearr_64174_64835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64168 === (15))){
var inst_64157 = (state_64167[(2)]);
var state_64167__$1 = state_64167;
var statearr_64175_64837 = state_64167__$1;
(statearr_64175_64837[(2)] = inst_64157);

(statearr_64175_64837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64168 === (13))){
var state_64167__$1 = state_64167;
var statearr_64176_64838 = state_64167__$1;
(statearr_64176_64838[(2)] = null);

(statearr_64176_64838[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64168 === (6))){
var inst_64127 = (state_64167[(7)]);
var inst_64152 = inst_64127.length;
var inst_64153 = (inst_64152 > (0));
var state_64167__$1 = state_64167;
if(cljs.core.truth_(inst_64153)){
var statearr_64177_64839 = state_64167__$1;
(statearr_64177_64839[(1)] = (12));

} else {
var statearr_64178_64840 = state_64167__$1;
(statearr_64178_64840[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64168 === (3))){
var inst_64165 = (state_64167[(2)]);
var state_64167__$1 = state_64167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64167__$1,inst_64165);
} else {
if((state_val_64168 === (12))){
var inst_64127 = (state_64167[(7)]);
var inst_64155 = cljs.core.vec(inst_64127);
var state_64167__$1 = state_64167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64167__$1,(15),out,inst_64155);
} else {
if((state_val_64168 === (2))){
var state_64167__$1 = state_64167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64167__$1,(4),ch);
} else {
if((state_val_64168 === (11))){
var inst_64131 = (state_64167[(9)]);
var inst_64135 = (state_64167[(10)]);
var inst_64145 = (state_64167[(2)]);
var inst_64146 = [];
var inst_64147 = inst_64146.push(inst_64131);
var inst_64127 = inst_64146;
var inst_64128 = inst_64135;
var state_64167__$1 = (function (){var statearr_64179 = state_64167;
(statearr_64179[(11)] = inst_64147);

(statearr_64179[(12)] = inst_64145);

(statearr_64179[(7)] = inst_64127);

(statearr_64179[(8)] = inst_64128);

return statearr_64179;
})();
var statearr_64180_64844 = state_64167__$1;
(statearr_64180_64844[(2)] = null);

(statearr_64180_64844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64168 === (9))){
var inst_64127 = (state_64167[(7)]);
var inst_64143 = cljs.core.vec(inst_64127);
var state_64167__$1 = state_64167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64167__$1,(11),out,inst_64143);
} else {
if((state_val_64168 === (5))){
var inst_64131 = (state_64167[(9)]);
var inst_64128 = (state_64167[(8)]);
var inst_64135 = (state_64167[(10)]);
var inst_64135__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_64131) : f.call(null,inst_64131));
var inst_64136 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64135__$1,inst_64128);
var inst_64137 = cljs.core.keyword_identical_QMARK_(inst_64128,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_64138 = ((inst_64136) || (inst_64137));
var state_64167__$1 = (function (){var statearr_64181 = state_64167;
(statearr_64181[(10)] = inst_64135__$1);

return statearr_64181;
})();
if(cljs.core.truth_(inst_64138)){
var statearr_64182_64845 = state_64167__$1;
(statearr_64182_64845[(1)] = (8));

} else {
var statearr_64183_64846 = state_64167__$1;
(statearr_64183_64846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64168 === (14))){
var inst_64160 = (state_64167[(2)]);
var inst_64161 = cljs.core.async.close_BANG_(out);
var state_64167__$1 = (function (){var statearr_64185 = state_64167;
(statearr_64185[(13)] = inst_64160);

return statearr_64185;
})();
var statearr_64186_64847 = state_64167__$1;
(statearr_64186_64847[(2)] = inst_64161);

(statearr_64186_64847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64168 === (10))){
var inst_64150 = (state_64167[(2)]);
var state_64167__$1 = state_64167;
var statearr_64187_64848 = state_64167__$1;
(statearr_64187_64848[(2)] = inst_64150);

(statearr_64187_64848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64168 === (8))){
var inst_64131 = (state_64167[(9)]);
var inst_64127 = (state_64167[(7)]);
var inst_64135 = (state_64167[(10)]);
var inst_64140 = inst_64127.push(inst_64131);
var tmp64184 = inst_64127;
var inst_64127__$1 = tmp64184;
var inst_64128 = inst_64135;
var state_64167__$1 = (function (){var statearr_64188 = state_64167;
(statearr_64188[(14)] = inst_64140);

(statearr_64188[(7)] = inst_64127__$1);

(statearr_64188[(8)] = inst_64128);

return statearr_64188;
})();
var statearr_64189_64849 = state_64167__$1;
(statearr_64189_64849[(2)] = null);

(statearr_64189_64849[(1)] = (2));


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
var cljs$core$async$state_machine__62624__auto__ = null;
var cljs$core$async$state_machine__62624__auto____0 = (function (){
var statearr_64190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64190[(0)] = cljs$core$async$state_machine__62624__auto__);

(statearr_64190[(1)] = (1));

return statearr_64190;
});
var cljs$core$async$state_machine__62624__auto____1 = (function (state_64167){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_64167);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e64191){var ex__62627__auto__ = e64191;
var statearr_64192_64850 = state_64167;
(statearr_64192_64850[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_64167[(4)]))){
var statearr_64193_64851 = state_64167;
(statearr_64193_64851[(1)] = cljs.core.first((state_64167[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64852 = state_64167;
state_64167 = G__64852;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
cljs$core$async$state_machine__62624__auto__ = function(state_64167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62624__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62624__auto____1.call(this,state_64167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62624__auto____0;
cljs$core$async$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62624__auto____1;
return cljs$core$async$state_machine__62624__auto__;
})()
})();
var state__62661__auto__ = (function (){var statearr_64194 = f__62660__auto__();
(statearr_64194[(6)] = c__62659__auto___64826);

return statearr_64194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
