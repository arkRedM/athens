goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__62706 = arguments.length;
switch (G__62706) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62707 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62707 = (function (f,blockable,meta62708){
this.f = f;
this.blockable = blockable;
this.meta62708 = meta62708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62709,meta62708__$1){
var self__ = this;
var _62709__$1 = this;
return (new cljs.core.async.t_cljs$core$async62707(self__.f,self__.blockable,meta62708__$1));
}));

(cljs.core.async.t_cljs$core$async62707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62709){
var self__ = this;
var _62709__$1 = this;
return self__.meta62708;
}));

(cljs.core.async.t_cljs$core$async62707.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62707.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async62707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async62707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta62708","meta62708",1651375890,null)], null);
}));

(cljs.core.async.t_cljs$core$async62707.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62707");

(cljs.core.async.t_cljs$core$async62707.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async62707");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62707.
 */
cljs.core.async.__GT_t_cljs$core$async62707 = (function cljs$core$async$__GT_t_cljs$core$async62707(f__$1,blockable__$1,meta62708){
return (new cljs.core.async.t_cljs$core$async62707(f__$1,blockable__$1,meta62708));
});

}

return (new cljs.core.async.t_cljs$core$async62707(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__62720 = arguments.length;
switch (G__62720) {
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
var G__62722 = arguments.length;
switch (G__62722) {
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
var G__62727 = arguments.length;
switch (G__62727) {
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
var val_64207 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_64207) : fn1.call(null,val_64207));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_64207) : fn1.call(null,val_64207));
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
var G__62730 = arguments.length;
switch (G__62730) {
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
var n__4613__auto___64209 = n;
var x_64214 = (0);
while(true){
if((x_64214 < n__4613__auto___64209)){
(a[x_64214] = x_64214);

var G__64215 = (x_64214 + (1));
x_64214 = G__64215;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62731 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62731 = (function (flag,meta62732){
this.flag = flag;
this.meta62732 = meta62732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62733,meta62732__$1){
var self__ = this;
var _62733__$1 = this;
return (new cljs.core.async.t_cljs$core$async62731(self__.flag,meta62732__$1));
}));

(cljs.core.async.t_cljs$core$async62731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62733){
var self__ = this;
var _62733__$1 = this;
return self__.meta62732;
}));

(cljs.core.async.t_cljs$core$async62731.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62731.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async62731.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62731.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async62731.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta62732","meta62732",-922238697,null)], null);
}));

(cljs.core.async.t_cljs$core$async62731.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62731.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62731");

(cljs.core.async.t_cljs$core$async62731.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async62731");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62731.
 */
cljs.core.async.__GT_t_cljs$core$async62731 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async62731(flag__$1,meta62732){
return (new cljs.core.async.t_cljs$core$async62731(flag__$1,meta62732));
});

}

return (new cljs.core.async.t_cljs$core$async62731(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62734 = (function (flag,cb,meta62735){
this.flag = flag;
this.cb = cb;
this.meta62735 = meta62735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62736,meta62735__$1){
var self__ = this;
var _62736__$1 = this;
return (new cljs.core.async.t_cljs$core$async62734(self__.flag,self__.cb,meta62735__$1));
}));

(cljs.core.async.t_cljs$core$async62734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62736){
var self__ = this;
var _62736__$1 = this;
return self__.meta62735;
}));

(cljs.core.async.t_cljs$core$async62734.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62734.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async62734.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62734.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async62734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta62735","meta62735",307167215,null)], null);
}));

(cljs.core.async.t_cljs$core$async62734.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62734");

(cljs.core.async.t_cljs$core$async62734.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async62734");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62734.
 */
cljs.core.async.__GT_t_cljs$core$async62734 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async62734(flag__$1,cb__$1,meta62735){
return (new cljs.core.async.t_cljs$core$async62734(flag__$1,cb__$1,meta62735));
});

}

return (new cljs.core.async.t_cljs$core$async62734(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__62737_SHARP_){
var G__62739 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62737_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__62739) : fret.call(null,G__62739));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__62738_SHARP_){
var G__62740 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62738_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__62740) : fret.call(null,G__62740));
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
var G__64217 = (i + (1));
i = G__64217;
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
var len__4736__auto___64222 = arguments.length;
var i__4737__auto___64223 = (0);
while(true){
if((i__4737__auto___64223 < len__4736__auto___64222)){
args__4742__auto__.push((arguments[i__4737__auto___64223]));

var G__64224 = (i__4737__auto___64223 + (1));
i__4737__auto___64223 = G__64224;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__62743){
var map__62744 = p__62743;
var map__62744__$1 = (((((!((map__62744 == null))))?(((((map__62744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62744):map__62744);
var opts = map__62744__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq62741){
var G__62742 = cljs.core.first(seq62741);
var seq62741__$1 = cljs.core.next(seq62741);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62742,seq62741__$1);
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
var G__62747 = arguments.length;
switch (G__62747) {
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
var c__62648__auto___64234 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = (function (state_62771){
var state_val_62772 = (state_62771[(1)]);
if((state_val_62772 === (7))){
var inst_62767 = (state_62771[(2)]);
var state_62771__$1 = state_62771;
var statearr_62773_64235 = state_62771__$1;
(statearr_62773_64235[(2)] = inst_62767);

(statearr_62773_64235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62772 === (1))){
var state_62771__$1 = state_62771;
var statearr_62774_64236 = state_62771__$1;
(statearr_62774_64236[(2)] = null);

(statearr_62774_64236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62772 === (4))){
var inst_62750 = (state_62771[(7)]);
var inst_62750__$1 = (state_62771[(2)]);
var inst_62751 = (inst_62750__$1 == null);
var state_62771__$1 = (function (){var statearr_62775 = state_62771;
(statearr_62775[(7)] = inst_62750__$1);

return statearr_62775;
})();
if(cljs.core.truth_(inst_62751)){
var statearr_62776_64238 = state_62771__$1;
(statearr_62776_64238[(1)] = (5));

} else {
var statearr_62777_64239 = state_62771__$1;
(statearr_62777_64239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62772 === (13))){
var state_62771__$1 = state_62771;
var statearr_62778_64240 = state_62771__$1;
(statearr_62778_64240[(2)] = null);

(statearr_62778_64240[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62772 === (6))){
var inst_62750 = (state_62771[(7)]);
var state_62771__$1 = state_62771;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62771__$1,(11),to,inst_62750);
} else {
if((state_val_62772 === (3))){
var inst_62769 = (state_62771[(2)]);
var state_62771__$1 = state_62771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62771__$1,inst_62769);
} else {
if((state_val_62772 === (12))){
var state_62771__$1 = state_62771;
var statearr_62779_64241 = state_62771__$1;
(statearr_62779_64241[(2)] = null);

(statearr_62779_64241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62772 === (2))){
var state_62771__$1 = state_62771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62771__$1,(4),from);
} else {
if((state_val_62772 === (11))){
var inst_62760 = (state_62771[(2)]);
var state_62771__$1 = state_62771;
if(cljs.core.truth_(inst_62760)){
var statearr_62780_64242 = state_62771__$1;
(statearr_62780_64242[(1)] = (12));

} else {
var statearr_62781_64243 = state_62771__$1;
(statearr_62781_64243[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62772 === (9))){
var state_62771__$1 = state_62771;
var statearr_62782_64247 = state_62771__$1;
(statearr_62782_64247[(2)] = null);

(statearr_62782_64247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62772 === (5))){
var state_62771__$1 = state_62771;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62783_64248 = state_62771__$1;
(statearr_62783_64248[(1)] = (8));

} else {
var statearr_62784_64249 = state_62771__$1;
(statearr_62784_64249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62772 === (14))){
var inst_62765 = (state_62771[(2)]);
var state_62771__$1 = state_62771;
var statearr_62785_64250 = state_62771__$1;
(statearr_62785_64250[(2)] = inst_62765);

(statearr_62785_64250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62772 === (10))){
var inst_62757 = (state_62771[(2)]);
var state_62771__$1 = state_62771;
var statearr_62786_64251 = state_62771__$1;
(statearr_62786_64251[(2)] = inst_62757);

(statearr_62786_64251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62772 === (8))){
var inst_62754 = cljs.core.async.close_BANG_(to);
var state_62771__$1 = state_62771;
var statearr_62787_64252 = state_62771__$1;
(statearr_62787_64252[(2)] = inst_62754);

(statearr_62787_64252[(1)] = (10));


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
var cljs$core$async$state_machine__62613__auto__ = null;
var cljs$core$async$state_machine__62613__auto____0 = (function (){
var statearr_62788 = [null,null,null,null,null,null,null,null];
(statearr_62788[(0)] = cljs$core$async$state_machine__62613__auto__);

(statearr_62788[(1)] = (1));

return statearr_62788;
});
var cljs$core$async$state_machine__62613__auto____1 = (function (state_62771){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_62771);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e62789){var ex__62616__auto__ = e62789;
var statearr_62790_64253 = state_62771;
(statearr_62790_64253[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_62771[(4)]))){
var statearr_62791_64254 = state_62771;
(statearr_62791_64254[(1)] = cljs.core.first((state_62771[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64255 = state_62771;
state_62771 = G__64255;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs$core$async$state_machine__62613__auto__ = function(state_62771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62613__auto____1.call(this,state_62771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62613__auto____0;
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62613__auto____1;
return cljs$core$async$state_machine__62613__auto__;
})()
})();
var state__62650__auto__ = (function (){var statearr_62792 = f__62649__auto__();
(statearr_62792[(6)] = c__62648__auto___64234);

return statearr_62792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
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
var process = (function (p__62793){
var vec__62794 = p__62793;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62794,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62794,(1),null);
var job = vec__62794;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__62648__auto___64256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = (function (state_62801){
var state_val_62802 = (state_62801[(1)]);
if((state_val_62802 === (1))){
var state_62801__$1 = state_62801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62801__$1,(2),res,v);
} else {
if((state_val_62802 === (2))){
var inst_62798 = (state_62801[(2)]);
var inst_62799 = cljs.core.async.close_BANG_(res);
var state_62801__$1 = (function (){var statearr_62803 = state_62801;
(statearr_62803[(7)] = inst_62798);

return statearr_62803;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62801__$1,inst_62799);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____0 = (function (){
var statearr_62804 = [null,null,null,null,null,null,null,null];
(statearr_62804[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__);

(statearr_62804[(1)] = (1));

return statearr_62804;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____1 = (function (state_62801){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_62801);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e62805){var ex__62616__auto__ = e62805;
var statearr_62806_64257 = state_62801;
(statearr_62806_64257[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_62801[(4)]))){
var statearr_62807_64258 = state_62801;
(statearr_62807_64258[(1)] = cljs.core.first((state_62801[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64259 = state_62801;
state_62801 = G__64259;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__ = function(state_62801){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____1.call(this,state_62801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__;
})()
})();
var state__62650__auto__ = (function (){var statearr_62808 = f__62649__auto__();
(statearr_62808[(6)] = c__62648__auto___64256);

return statearr_62808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__62809){
var vec__62810 = p__62809;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62810,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62810,(1),null);
var job = vec__62810;
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
var n__4613__auto___64260 = n;
var __64261 = (0);
while(true){
if((__64261 < n__4613__auto___64260)){
var G__62813_64262 = type;
var G__62813_64263__$1 = (((G__62813_64262 instanceof cljs.core.Keyword))?G__62813_64262.fqn:null);
switch (G__62813_64263__$1) {
case "compute":
var c__62648__auto___64269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__64261,c__62648__auto___64269,G__62813_64262,G__62813_64263__$1,n__4613__auto___64260,jobs,results,process,async){
return (function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = ((function (__64261,c__62648__auto___64269,G__62813_64262,G__62813_64263__$1,n__4613__auto___64260,jobs,results,process,async){
return (function (state_62826){
var state_val_62827 = (state_62826[(1)]);
if((state_val_62827 === (1))){
var state_62826__$1 = state_62826;
var statearr_62828_64274 = state_62826__$1;
(statearr_62828_64274[(2)] = null);

(statearr_62828_64274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62827 === (2))){
var state_62826__$1 = state_62826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62826__$1,(4),jobs);
} else {
if((state_val_62827 === (3))){
var inst_62824 = (state_62826[(2)]);
var state_62826__$1 = state_62826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62826__$1,inst_62824);
} else {
if((state_val_62827 === (4))){
var inst_62816 = (state_62826[(2)]);
var inst_62817 = process(inst_62816);
var state_62826__$1 = state_62826;
if(cljs.core.truth_(inst_62817)){
var statearr_62829_64279 = state_62826__$1;
(statearr_62829_64279[(1)] = (5));

} else {
var statearr_62830_64280 = state_62826__$1;
(statearr_62830_64280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62827 === (5))){
var state_62826__$1 = state_62826;
var statearr_62831_64281 = state_62826__$1;
(statearr_62831_64281[(2)] = null);

(statearr_62831_64281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62827 === (6))){
var state_62826__$1 = state_62826;
var statearr_62832_64283 = state_62826__$1;
(statearr_62832_64283[(2)] = null);

(statearr_62832_64283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62827 === (7))){
var inst_62822 = (state_62826[(2)]);
var state_62826__$1 = state_62826;
var statearr_62833_64284 = state_62826__$1;
(statearr_62833_64284[(2)] = inst_62822);

(statearr_62833_64284[(1)] = (3));


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
});})(__64261,c__62648__auto___64269,G__62813_64262,G__62813_64263__$1,n__4613__auto___64260,jobs,results,process,async))
;
return ((function (__64261,switch__62612__auto__,c__62648__auto___64269,G__62813_64262,G__62813_64263__$1,n__4613__auto___64260,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____0 = (function (){
var statearr_62834 = [null,null,null,null,null,null,null];
(statearr_62834[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__);

(statearr_62834[(1)] = (1));

return statearr_62834;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____1 = (function (state_62826){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_62826);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e62835){var ex__62616__auto__ = e62835;
var statearr_62836_64286 = state_62826;
(statearr_62836_64286[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_62826[(4)]))){
var statearr_62837_64287 = state_62826;
(statearr_62837_64287[(1)] = cljs.core.first((state_62826[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64289 = state_62826;
state_62826 = G__64289;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__ = function(state_62826){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____1.call(this,state_62826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__;
})()
;})(__64261,switch__62612__auto__,c__62648__auto___64269,G__62813_64262,G__62813_64263__$1,n__4613__auto___64260,jobs,results,process,async))
})();
var state__62650__auto__ = (function (){var statearr_62838 = f__62649__auto__();
(statearr_62838[(6)] = c__62648__auto___64269);

return statearr_62838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
});})(__64261,c__62648__auto___64269,G__62813_64262,G__62813_64263__$1,n__4613__auto___64260,jobs,results,process,async))
);


break;
case "async":
var c__62648__auto___64292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__64261,c__62648__auto___64292,G__62813_64262,G__62813_64263__$1,n__4613__auto___64260,jobs,results,process,async){
return (function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = ((function (__64261,c__62648__auto___64292,G__62813_64262,G__62813_64263__$1,n__4613__auto___64260,jobs,results,process,async){
return (function (state_62851){
var state_val_62852 = (state_62851[(1)]);
if((state_val_62852 === (1))){
var state_62851__$1 = state_62851;
var statearr_62853_64293 = state_62851__$1;
(statearr_62853_64293[(2)] = null);

(statearr_62853_64293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (2))){
var state_62851__$1 = state_62851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62851__$1,(4),jobs);
} else {
if((state_val_62852 === (3))){
var inst_62849 = (state_62851[(2)]);
var state_62851__$1 = state_62851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62851__$1,inst_62849);
} else {
if((state_val_62852 === (4))){
var inst_62841 = (state_62851[(2)]);
var inst_62842 = async(inst_62841);
var state_62851__$1 = state_62851;
if(cljs.core.truth_(inst_62842)){
var statearr_62854_64294 = state_62851__$1;
(statearr_62854_64294[(1)] = (5));

} else {
var statearr_62855_64295 = state_62851__$1;
(statearr_62855_64295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (5))){
var state_62851__$1 = state_62851;
var statearr_62856_64296 = state_62851__$1;
(statearr_62856_64296[(2)] = null);

(statearr_62856_64296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (6))){
var state_62851__$1 = state_62851;
var statearr_62857_64297 = state_62851__$1;
(statearr_62857_64297[(2)] = null);

(statearr_62857_64297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (7))){
var inst_62847 = (state_62851[(2)]);
var state_62851__$1 = state_62851;
var statearr_62858_64298 = state_62851__$1;
(statearr_62858_64298[(2)] = inst_62847);

(statearr_62858_64298[(1)] = (3));


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
});})(__64261,c__62648__auto___64292,G__62813_64262,G__62813_64263__$1,n__4613__auto___64260,jobs,results,process,async))
;
return ((function (__64261,switch__62612__auto__,c__62648__auto___64292,G__62813_64262,G__62813_64263__$1,n__4613__auto___64260,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____0 = (function (){
var statearr_62859 = [null,null,null,null,null,null,null];
(statearr_62859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__);

(statearr_62859[(1)] = (1));

return statearr_62859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____1 = (function (state_62851){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_62851);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e62860){var ex__62616__auto__ = e62860;
var statearr_62861_64299 = state_62851;
(statearr_62861_64299[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_62851[(4)]))){
var statearr_62862_64300 = state_62851;
(statearr_62862_64300[(1)] = cljs.core.first((state_62851[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64301 = state_62851;
state_62851 = G__64301;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__ = function(state_62851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____1.call(this,state_62851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__;
})()
;})(__64261,switch__62612__auto__,c__62648__auto___64292,G__62813_64262,G__62813_64263__$1,n__4613__auto___64260,jobs,results,process,async))
})();
var state__62650__auto__ = (function (){var statearr_62863 = f__62649__auto__();
(statearr_62863[(6)] = c__62648__auto___64292);

return statearr_62863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
});})(__64261,c__62648__auto___64292,G__62813_64262,G__62813_64263__$1,n__4613__auto___64260,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62813_64263__$1)].join('')));

}

var G__64302 = (__64261 + (1));
__64261 = G__64302;
continue;
} else {
}
break;
}

var c__62648__auto___64303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = (function (state_62885){
var state_val_62886 = (state_62885[(1)]);
if((state_val_62886 === (7))){
var inst_62881 = (state_62885[(2)]);
var state_62885__$1 = state_62885;
var statearr_62887_64304 = state_62885__$1;
(statearr_62887_64304[(2)] = inst_62881);

(statearr_62887_64304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62886 === (1))){
var state_62885__$1 = state_62885;
var statearr_62888_64305 = state_62885__$1;
(statearr_62888_64305[(2)] = null);

(statearr_62888_64305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62886 === (4))){
var inst_62866 = (state_62885[(7)]);
var inst_62866__$1 = (state_62885[(2)]);
var inst_62867 = (inst_62866__$1 == null);
var state_62885__$1 = (function (){var statearr_62889 = state_62885;
(statearr_62889[(7)] = inst_62866__$1);

return statearr_62889;
})();
if(cljs.core.truth_(inst_62867)){
var statearr_62890_64306 = state_62885__$1;
(statearr_62890_64306[(1)] = (5));

} else {
var statearr_62891_64307 = state_62885__$1;
(statearr_62891_64307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62886 === (6))){
var inst_62866 = (state_62885[(7)]);
var inst_62871 = (state_62885[(8)]);
var inst_62871__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_62872 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62873 = [inst_62866,inst_62871__$1];
var inst_62874 = (new cljs.core.PersistentVector(null,2,(5),inst_62872,inst_62873,null));
var state_62885__$1 = (function (){var statearr_62892 = state_62885;
(statearr_62892[(8)] = inst_62871__$1);

return statearr_62892;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62885__$1,(8),jobs,inst_62874);
} else {
if((state_val_62886 === (3))){
var inst_62883 = (state_62885[(2)]);
var state_62885__$1 = state_62885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62885__$1,inst_62883);
} else {
if((state_val_62886 === (2))){
var state_62885__$1 = state_62885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62885__$1,(4),from);
} else {
if((state_val_62886 === (9))){
var inst_62878 = (state_62885[(2)]);
var state_62885__$1 = (function (){var statearr_62893 = state_62885;
(statearr_62893[(9)] = inst_62878);

return statearr_62893;
})();
var statearr_62894_64308 = state_62885__$1;
(statearr_62894_64308[(2)] = null);

(statearr_62894_64308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62886 === (5))){
var inst_62869 = cljs.core.async.close_BANG_(jobs);
var state_62885__$1 = state_62885;
var statearr_62895_64309 = state_62885__$1;
(statearr_62895_64309[(2)] = inst_62869);

(statearr_62895_64309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62886 === (8))){
var inst_62871 = (state_62885[(8)]);
var inst_62876 = (state_62885[(2)]);
var state_62885__$1 = (function (){var statearr_62896 = state_62885;
(statearr_62896[(10)] = inst_62876);

return statearr_62896;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62885__$1,(9),results,inst_62871);
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
var cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____0 = (function (){
var statearr_62897 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62897[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__);

(statearr_62897[(1)] = (1));

return statearr_62897;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____1 = (function (state_62885){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_62885);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e62898){var ex__62616__auto__ = e62898;
var statearr_62899_64310 = state_62885;
(statearr_62899_64310[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_62885[(4)]))){
var statearr_62900_64311 = state_62885;
(statearr_62900_64311[(1)] = cljs.core.first((state_62885[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64312 = state_62885;
state_62885 = G__64312;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__ = function(state_62885){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____1.call(this,state_62885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__;
})()
})();
var state__62650__auto__ = (function (){var statearr_62901 = f__62649__auto__();
(statearr_62901[(6)] = c__62648__auto___64303);

return statearr_62901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
}));


var c__62648__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = (function (state_62939){
var state_val_62940 = (state_62939[(1)]);
if((state_val_62940 === (7))){
var inst_62935 = (state_62939[(2)]);
var state_62939__$1 = state_62939;
var statearr_62941_64313 = state_62939__$1;
(statearr_62941_64313[(2)] = inst_62935);

(statearr_62941_64313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (20))){
var state_62939__$1 = state_62939;
var statearr_62942_64314 = state_62939__$1;
(statearr_62942_64314[(2)] = null);

(statearr_62942_64314[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (1))){
var state_62939__$1 = state_62939;
var statearr_62943_64315 = state_62939__$1;
(statearr_62943_64315[(2)] = null);

(statearr_62943_64315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (4))){
var inst_62904 = (state_62939[(7)]);
var inst_62904__$1 = (state_62939[(2)]);
var inst_62905 = (inst_62904__$1 == null);
var state_62939__$1 = (function (){var statearr_62944 = state_62939;
(statearr_62944[(7)] = inst_62904__$1);

return statearr_62944;
})();
if(cljs.core.truth_(inst_62905)){
var statearr_62945_64316 = state_62939__$1;
(statearr_62945_64316[(1)] = (5));

} else {
var statearr_62946_64317 = state_62939__$1;
(statearr_62946_64317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (15))){
var inst_62917 = (state_62939[(8)]);
var state_62939__$1 = state_62939;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62939__$1,(18),to,inst_62917);
} else {
if((state_val_62940 === (21))){
var inst_62930 = (state_62939[(2)]);
var state_62939__$1 = state_62939;
var statearr_62947_64318 = state_62939__$1;
(statearr_62947_64318[(2)] = inst_62930);

(statearr_62947_64318[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (13))){
var inst_62932 = (state_62939[(2)]);
var state_62939__$1 = (function (){var statearr_62948 = state_62939;
(statearr_62948[(9)] = inst_62932);

return statearr_62948;
})();
var statearr_62949_64319 = state_62939__$1;
(statearr_62949_64319[(2)] = null);

(statearr_62949_64319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (6))){
var inst_62904 = (state_62939[(7)]);
var state_62939__$1 = state_62939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62939__$1,(11),inst_62904);
} else {
if((state_val_62940 === (17))){
var inst_62925 = (state_62939[(2)]);
var state_62939__$1 = state_62939;
if(cljs.core.truth_(inst_62925)){
var statearr_62950_64320 = state_62939__$1;
(statearr_62950_64320[(1)] = (19));

} else {
var statearr_62951_64321 = state_62939__$1;
(statearr_62951_64321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (3))){
var inst_62937 = (state_62939[(2)]);
var state_62939__$1 = state_62939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62939__$1,inst_62937);
} else {
if((state_val_62940 === (12))){
var inst_62914 = (state_62939[(10)]);
var state_62939__$1 = state_62939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62939__$1,(14),inst_62914);
} else {
if((state_val_62940 === (2))){
var state_62939__$1 = state_62939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62939__$1,(4),results);
} else {
if((state_val_62940 === (19))){
var state_62939__$1 = state_62939;
var statearr_62952_64322 = state_62939__$1;
(statearr_62952_64322[(2)] = null);

(statearr_62952_64322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (11))){
var inst_62914 = (state_62939[(2)]);
var state_62939__$1 = (function (){var statearr_62953 = state_62939;
(statearr_62953[(10)] = inst_62914);

return statearr_62953;
})();
var statearr_62954_64323 = state_62939__$1;
(statearr_62954_64323[(2)] = null);

(statearr_62954_64323[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (9))){
var state_62939__$1 = state_62939;
var statearr_62955_64324 = state_62939__$1;
(statearr_62955_64324[(2)] = null);

(statearr_62955_64324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (5))){
var state_62939__$1 = state_62939;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62956_64325 = state_62939__$1;
(statearr_62956_64325[(1)] = (8));

} else {
var statearr_62957_64326 = state_62939__$1;
(statearr_62957_64326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (14))){
var inst_62917 = (state_62939[(8)]);
var inst_62917__$1 = (state_62939[(2)]);
var inst_62918 = (inst_62917__$1 == null);
var inst_62919 = cljs.core.not(inst_62918);
var state_62939__$1 = (function (){var statearr_62958 = state_62939;
(statearr_62958[(8)] = inst_62917__$1);

return statearr_62958;
})();
if(inst_62919){
var statearr_62959_64327 = state_62939__$1;
(statearr_62959_64327[(1)] = (15));

} else {
var statearr_62960_64328 = state_62939__$1;
(statearr_62960_64328[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (16))){
var state_62939__$1 = state_62939;
var statearr_62961_64329 = state_62939__$1;
(statearr_62961_64329[(2)] = false);

(statearr_62961_64329[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (10))){
var inst_62911 = (state_62939[(2)]);
var state_62939__$1 = state_62939;
var statearr_62962_64330 = state_62939__$1;
(statearr_62962_64330[(2)] = inst_62911);

(statearr_62962_64330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (18))){
var inst_62922 = (state_62939[(2)]);
var state_62939__$1 = state_62939;
var statearr_62963_64331 = state_62939__$1;
(statearr_62963_64331[(2)] = inst_62922);

(statearr_62963_64331[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62940 === (8))){
var inst_62908 = cljs.core.async.close_BANG_(to);
var state_62939__$1 = state_62939;
var statearr_62964_64332 = state_62939__$1;
(statearr_62964_64332[(2)] = inst_62908);

(statearr_62964_64332[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____0 = (function (){
var statearr_62965 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62965[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__);

(statearr_62965[(1)] = (1));

return statearr_62965;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____1 = (function (state_62939){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_62939);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e62966){var ex__62616__auto__ = e62966;
var statearr_62967_64333 = state_62939;
(statearr_62967_64333[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_62939[(4)]))){
var statearr_62968_64334 = state_62939;
(statearr_62968_64334[(1)] = cljs.core.first((state_62939[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64335 = state_62939;
state_62939 = G__64335;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__ = function(state_62939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____1.call(this,state_62939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62613__auto__;
})()
})();
var state__62650__auto__ = (function (){var statearr_62969 = f__62649__auto__();
(statearr_62969[(6)] = c__62648__auto__);

return statearr_62969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
}));

return c__62648__auto__;
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
var G__62971 = arguments.length;
switch (G__62971) {
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
var G__62973 = arguments.length;
switch (G__62973) {
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
var G__62975 = arguments.length;
switch (G__62975) {
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
var c__62648__auto___64339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = (function (state_63001){
var state_val_63002 = (state_63001[(1)]);
if((state_val_63002 === (7))){
var inst_62997 = (state_63001[(2)]);
var state_63001__$1 = state_63001;
var statearr_63003_64340 = state_63001__$1;
(statearr_63003_64340[(2)] = inst_62997);

(statearr_63003_64340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63002 === (1))){
var state_63001__$1 = state_63001;
var statearr_63004_64341 = state_63001__$1;
(statearr_63004_64341[(2)] = null);

(statearr_63004_64341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63002 === (4))){
var inst_62978 = (state_63001[(7)]);
var inst_62978__$1 = (state_63001[(2)]);
var inst_62979 = (inst_62978__$1 == null);
var state_63001__$1 = (function (){var statearr_63005 = state_63001;
(statearr_63005[(7)] = inst_62978__$1);

return statearr_63005;
})();
if(cljs.core.truth_(inst_62979)){
var statearr_63006_64342 = state_63001__$1;
(statearr_63006_64342[(1)] = (5));

} else {
var statearr_63007_64343 = state_63001__$1;
(statearr_63007_64343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63002 === (13))){
var state_63001__$1 = state_63001;
var statearr_63008_64344 = state_63001__$1;
(statearr_63008_64344[(2)] = null);

(statearr_63008_64344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63002 === (6))){
var inst_62978 = (state_63001[(7)]);
var inst_62984 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_62978) : p.call(null,inst_62978));
var state_63001__$1 = state_63001;
if(cljs.core.truth_(inst_62984)){
var statearr_63009_64345 = state_63001__$1;
(statearr_63009_64345[(1)] = (9));

} else {
var statearr_63010_64346 = state_63001__$1;
(statearr_63010_64346[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63002 === (3))){
var inst_62999 = (state_63001[(2)]);
var state_63001__$1 = state_63001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63001__$1,inst_62999);
} else {
if((state_val_63002 === (12))){
var state_63001__$1 = state_63001;
var statearr_63011_64347 = state_63001__$1;
(statearr_63011_64347[(2)] = null);

(statearr_63011_64347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63002 === (2))){
var state_63001__$1 = state_63001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63001__$1,(4),ch);
} else {
if((state_val_63002 === (11))){
var inst_62978 = (state_63001[(7)]);
var inst_62988 = (state_63001[(2)]);
var state_63001__$1 = state_63001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63001__$1,(8),inst_62988,inst_62978);
} else {
if((state_val_63002 === (9))){
var state_63001__$1 = state_63001;
var statearr_63012_64348 = state_63001__$1;
(statearr_63012_64348[(2)] = tc);

(statearr_63012_64348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63002 === (5))){
var inst_62981 = cljs.core.async.close_BANG_(tc);
var inst_62982 = cljs.core.async.close_BANG_(fc);
var state_63001__$1 = (function (){var statearr_63013 = state_63001;
(statearr_63013[(8)] = inst_62981);

return statearr_63013;
})();
var statearr_63014_64349 = state_63001__$1;
(statearr_63014_64349[(2)] = inst_62982);

(statearr_63014_64349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63002 === (14))){
var inst_62995 = (state_63001[(2)]);
var state_63001__$1 = state_63001;
var statearr_63015_64350 = state_63001__$1;
(statearr_63015_64350[(2)] = inst_62995);

(statearr_63015_64350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63002 === (10))){
var state_63001__$1 = state_63001;
var statearr_63016_64351 = state_63001__$1;
(statearr_63016_64351[(2)] = fc);

(statearr_63016_64351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63002 === (8))){
var inst_62990 = (state_63001[(2)]);
var state_63001__$1 = state_63001;
if(cljs.core.truth_(inst_62990)){
var statearr_63017_64352 = state_63001__$1;
(statearr_63017_64352[(1)] = (12));

} else {
var statearr_63018_64353 = state_63001__$1;
(statearr_63018_64353[(1)] = (13));

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
var cljs$core$async$state_machine__62613__auto__ = null;
var cljs$core$async$state_machine__62613__auto____0 = (function (){
var statearr_63019 = [null,null,null,null,null,null,null,null,null];
(statearr_63019[(0)] = cljs$core$async$state_machine__62613__auto__);

(statearr_63019[(1)] = (1));

return statearr_63019;
});
var cljs$core$async$state_machine__62613__auto____1 = (function (state_63001){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_63001);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e63020){var ex__62616__auto__ = e63020;
var statearr_63021_64354 = state_63001;
(statearr_63021_64354[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_63001[(4)]))){
var statearr_63022_64355 = state_63001;
(statearr_63022_64355[(1)] = cljs.core.first((state_63001[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64356 = state_63001;
state_63001 = G__64356;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs$core$async$state_machine__62613__auto__ = function(state_63001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62613__auto____1.call(this,state_63001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62613__auto____0;
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62613__auto____1;
return cljs$core$async$state_machine__62613__auto__;
})()
})();
var state__62650__auto__ = (function (){var statearr_63023 = f__62649__auto__();
(statearr_63023[(6)] = c__62648__auto___64339);

return statearr_63023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
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
var c__62648__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = (function (state_63045){
var state_val_63046 = (state_63045[(1)]);
if((state_val_63046 === (7))){
var inst_63041 = (state_63045[(2)]);
var state_63045__$1 = state_63045;
var statearr_63047_64357 = state_63045__$1;
(statearr_63047_64357[(2)] = inst_63041);

(statearr_63047_64357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63046 === (1))){
var inst_63024 = init;
var inst_63025 = inst_63024;
var state_63045__$1 = (function (){var statearr_63048 = state_63045;
(statearr_63048[(7)] = inst_63025);

return statearr_63048;
})();
var statearr_63049_64358 = state_63045__$1;
(statearr_63049_64358[(2)] = null);

(statearr_63049_64358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63046 === (4))){
var inst_63028 = (state_63045[(8)]);
var inst_63028__$1 = (state_63045[(2)]);
var inst_63029 = (inst_63028__$1 == null);
var state_63045__$1 = (function (){var statearr_63050 = state_63045;
(statearr_63050[(8)] = inst_63028__$1);

return statearr_63050;
})();
if(cljs.core.truth_(inst_63029)){
var statearr_63051_64359 = state_63045__$1;
(statearr_63051_64359[(1)] = (5));

} else {
var statearr_63052_64360 = state_63045__$1;
(statearr_63052_64360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63046 === (6))){
var inst_63028 = (state_63045[(8)]);
var inst_63032 = (state_63045[(9)]);
var inst_63025 = (state_63045[(7)]);
var inst_63032__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_63025,inst_63028) : f.call(null,inst_63025,inst_63028));
var inst_63033 = cljs.core.reduced_QMARK_(inst_63032__$1);
var state_63045__$1 = (function (){var statearr_63053 = state_63045;
(statearr_63053[(9)] = inst_63032__$1);

return statearr_63053;
})();
if(inst_63033){
var statearr_63054_64361 = state_63045__$1;
(statearr_63054_64361[(1)] = (8));

} else {
var statearr_63055_64362 = state_63045__$1;
(statearr_63055_64362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63046 === (3))){
var inst_63043 = (state_63045[(2)]);
var state_63045__$1 = state_63045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63045__$1,inst_63043);
} else {
if((state_val_63046 === (2))){
var state_63045__$1 = state_63045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63045__$1,(4),ch);
} else {
if((state_val_63046 === (9))){
var inst_63032 = (state_63045[(9)]);
var inst_63025 = inst_63032;
var state_63045__$1 = (function (){var statearr_63056 = state_63045;
(statearr_63056[(7)] = inst_63025);

return statearr_63056;
})();
var statearr_63057_64363 = state_63045__$1;
(statearr_63057_64363[(2)] = null);

(statearr_63057_64363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63046 === (5))){
var inst_63025 = (state_63045[(7)]);
var state_63045__$1 = state_63045;
var statearr_63058_64364 = state_63045__$1;
(statearr_63058_64364[(2)] = inst_63025);

(statearr_63058_64364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63046 === (10))){
var inst_63039 = (state_63045[(2)]);
var state_63045__$1 = state_63045;
var statearr_63059_64365 = state_63045__$1;
(statearr_63059_64365[(2)] = inst_63039);

(statearr_63059_64365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63046 === (8))){
var inst_63032 = (state_63045[(9)]);
var inst_63035 = cljs.core.deref(inst_63032);
var state_63045__$1 = state_63045;
var statearr_63060_64366 = state_63045__$1;
(statearr_63060_64366[(2)] = inst_63035);

(statearr_63060_64366[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__62613__auto__ = null;
var cljs$core$async$reduce_$_state_machine__62613__auto____0 = (function (){
var statearr_63061 = [null,null,null,null,null,null,null,null,null,null];
(statearr_63061[(0)] = cljs$core$async$reduce_$_state_machine__62613__auto__);

(statearr_63061[(1)] = (1));

return statearr_63061;
});
var cljs$core$async$reduce_$_state_machine__62613__auto____1 = (function (state_63045){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_63045);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e63062){var ex__62616__auto__ = e63062;
var statearr_63063_64367 = state_63045;
(statearr_63063_64367[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_63045[(4)]))){
var statearr_63064_64368 = state_63045;
(statearr_63064_64368[(1)] = cljs.core.first((state_63045[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64369 = state_63045;
state_63045 = G__64369;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__62613__auto__ = function(state_63045){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__62613__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__62613__auto____1.call(this,state_63045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__62613__auto____0;
cljs$core$async$reduce_$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__62613__auto____1;
return cljs$core$async$reduce_$_state_machine__62613__auto__;
})()
})();
var state__62650__auto__ = (function (){var statearr_63065 = f__62649__auto__();
(statearr_63065[(6)] = c__62648__auto__);

return statearr_63065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
}));

return c__62648__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__62648__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = (function (state_63071){
var state_val_63072 = (state_63071[(1)]);
if((state_val_63072 === (1))){
var inst_63066 = cljs.core.async.reduce(f__$1,init,ch);
var state_63071__$1 = state_63071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63071__$1,(2),inst_63066);
} else {
if((state_val_63072 === (2))){
var inst_63068 = (state_63071[(2)]);
var inst_63069 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_63068) : f__$1.call(null,inst_63068));
var state_63071__$1 = state_63071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63071__$1,inst_63069);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__62613__auto__ = null;
var cljs$core$async$transduce_$_state_machine__62613__auto____0 = (function (){
var statearr_63073 = [null,null,null,null,null,null,null];
(statearr_63073[(0)] = cljs$core$async$transduce_$_state_machine__62613__auto__);

(statearr_63073[(1)] = (1));

return statearr_63073;
});
var cljs$core$async$transduce_$_state_machine__62613__auto____1 = (function (state_63071){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_63071);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e63074){var ex__62616__auto__ = e63074;
var statearr_63075_64370 = state_63071;
(statearr_63075_64370[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_63071[(4)]))){
var statearr_63076_64371 = state_63071;
(statearr_63076_64371[(1)] = cljs.core.first((state_63071[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64372 = state_63071;
state_63071 = G__64372;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__62613__auto__ = function(state_63071){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__62613__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__62613__auto____1.call(this,state_63071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__62613__auto____0;
cljs$core$async$transduce_$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__62613__auto____1;
return cljs$core$async$transduce_$_state_machine__62613__auto__;
})()
})();
var state__62650__auto__ = (function (){var statearr_63077 = f__62649__auto__();
(statearr_63077[(6)] = c__62648__auto__);

return statearr_63077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
}));

return c__62648__auto__;
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
var G__63079 = arguments.length;
switch (G__63079) {
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
var c__62648__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = (function (state_63104){
var state_val_63105 = (state_63104[(1)]);
if((state_val_63105 === (7))){
var inst_63086 = (state_63104[(2)]);
var state_63104__$1 = state_63104;
var statearr_63106_64374 = state_63104__$1;
(statearr_63106_64374[(2)] = inst_63086);

(statearr_63106_64374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63105 === (1))){
var inst_63080 = cljs.core.seq(coll);
var inst_63081 = inst_63080;
var state_63104__$1 = (function (){var statearr_63107 = state_63104;
(statearr_63107[(7)] = inst_63081);

return statearr_63107;
})();
var statearr_63108_64375 = state_63104__$1;
(statearr_63108_64375[(2)] = null);

(statearr_63108_64375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63105 === (4))){
var inst_63081 = (state_63104[(7)]);
var inst_63084 = cljs.core.first(inst_63081);
var state_63104__$1 = state_63104;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63104__$1,(7),ch,inst_63084);
} else {
if((state_val_63105 === (13))){
var inst_63098 = (state_63104[(2)]);
var state_63104__$1 = state_63104;
var statearr_63109_64376 = state_63104__$1;
(statearr_63109_64376[(2)] = inst_63098);

(statearr_63109_64376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63105 === (6))){
var inst_63089 = (state_63104[(2)]);
var state_63104__$1 = state_63104;
if(cljs.core.truth_(inst_63089)){
var statearr_63110_64377 = state_63104__$1;
(statearr_63110_64377[(1)] = (8));

} else {
var statearr_63111_64378 = state_63104__$1;
(statearr_63111_64378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63105 === (3))){
var inst_63102 = (state_63104[(2)]);
var state_63104__$1 = state_63104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63104__$1,inst_63102);
} else {
if((state_val_63105 === (12))){
var state_63104__$1 = state_63104;
var statearr_63112_64379 = state_63104__$1;
(statearr_63112_64379[(2)] = null);

(statearr_63112_64379[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63105 === (2))){
var inst_63081 = (state_63104[(7)]);
var state_63104__$1 = state_63104;
if(cljs.core.truth_(inst_63081)){
var statearr_63113_64380 = state_63104__$1;
(statearr_63113_64380[(1)] = (4));

} else {
var statearr_63114_64381 = state_63104__$1;
(statearr_63114_64381[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63105 === (11))){
var inst_63095 = cljs.core.async.close_BANG_(ch);
var state_63104__$1 = state_63104;
var statearr_63115_64382 = state_63104__$1;
(statearr_63115_64382[(2)] = inst_63095);

(statearr_63115_64382[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63105 === (9))){
var state_63104__$1 = state_63104;
if(cljs.core.truth_(close_QMARK_)){
var statearr_63116_64383 = state_63104__$1;
(statearr_63116_64383[(1)] = (11));

} else {
var statearr_63117_64384 = state_63104__$1;
(statearr_63117_64384[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63105 === (5))){
var inst_63081 = (state_63104[(7)]);
var state_63104__$1 = state_63104;
var statearr_63118_64385 = state_63104__$1;
(statearr_63118_64385[(2)] = inst_63081);

(statearr_63118_64385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63105 === (10))){
var inst_63100 = (state_63104[(2)]);
var state_63104__$1 = state_63104;
var statearr_63119_64386 = state_63104__$1;
(statearr_63119_64386[(2)] = inst_63100);

(statearr_63119_64386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63105 === (8))){
var inst_63081 = (state_63104[(7)]);
var inst_63091 = cljs.core.next(inst_63081);
var inst_63081__$1 = inst_63091;
var state_63104__$1 = (function (){var statearr_63120 = state_63104;
(statearr_63120[(7)] = inst_63081__$1);

return statearr_63120;
})();
var statearr_63121_64387 = state_63104__$1;
(statearr_63121_64387[(2)] = null);

(statearr_63121_64387[(1)] = (2));


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
var cljs$core$async$state_machine__62613__auto__ = null;
var cljs$core$async$state_machine__62613__auto____0 = (function (){
var statearr_63122 = [null,null,null,null,null,null,null,null];
(statearr_63122[(0)] = cljs$core$async$state_machine__62613__auto__);

(statearr_63122[(1)] = (1));

return statearr_63122;
});
var cljs$core$async$state_machine__62613__auto____1 = (function (state_63104){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_63104);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e63123){var ex__62616__auto__ = e63123;
var statearr_63124_64388 = state_63104;
(statearr_63124_64388[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_63104[(4)]))){
var statearr_63125_64389 = state_63104;
(statearr_63125_64389[(1)] = cljs.core.first((state_63104[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64390 = state_63104;
state_63104 = G__64390;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs$core$async$state_machine__62613__auto__ = function(state_63104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62613__auto____1.call(this,state_63104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62613__auto____0;
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62613__auto____1;
return cljs$core$async$state_machine__62613__auto__;
})()
})();
var state__62650__auto__ = (function (){var statearr_63126 = f__62649__auto__();
(statearr_63126[(6)] = c__62648__auto__);

return statearr_63126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
}));

return c__62648__auto__;
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
var G__63128 = arguments.length;
switch (G__63128) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_64392 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_64392(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_64393 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_64393(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_64394 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_64394(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_64395 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_64395(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63129 = (function (ch,cs,meta63130){
this.ch = ch;
this.cs = cs;
this.meta63130 = meta63130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63131,meta63130__$1){
var self__ = this;
var _63131__$1 = this;
return (new cljs.core.async.t_cljs$core$async63129(self__.ch,self__.cs,meta63130__$1));
}));

(cljs.core.async.t_cljs$core$async63129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63131){
var self__ = this;
var _63131__$1 = this;
return self__.meta63130;
}));

(cljs.core.async.t_cljs$core$async63129.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63129.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async63129.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63129.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async63129.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async63129.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async63129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta63130","meta63130",87871009,null)], null);
}));

(cljs.core.async.t_cljs$core$async63129.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63129");

(cljs.core.async.t_cljs$core$async63129.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63129");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63129.
 */
cljs.core.async.__GT_t_cljs$core$async63129 = (function cljs$core$async$mult_$___GT_t_cljs$core$async63129(ch__$1,cs__$1,meta63130){
return (new cljs.core.async.t_cljs$core$async63129(ch__$1,cs__$1,meta63130));
});

}

return (new cljs.core.async.t_cljs$core$async63129(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__62648__auto___64396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = (function (state_63264){
var state_val_63265 = (state_63264[(1)]);
if((state_val_63265 === (7))){
var inst_63260 = (state_63264[(2)]);
var state_63264__$1 = state_63264;
var statearr_63266_64397 = state_63264__$1;
(statearr_63266_64397[(2)] = inst_63260);

(statearr_63266_64397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (20))){
var inst_63165 = (state_63264[(7)]);
var inst_63177 = cljs.core.first(inst_63165);
var inst_63178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63177,(0),null);
var inst_63179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63177,(1),null);
var state_63264__$1 = (function (){var statearr_63267 = state_63264;
(statearr_63267[(8)] = inst_63178);

return statearr_63267;
})();
if(cljs.core.truth_(inst_63179)){
var statearr_63268_64398 = state_63264__$1;
(statearr_63268_64398[(1)] = (22));

} else {
var statearr_63269_64399 = state_63264__$1;
(statearr_63269_64399[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (27))){
var inst_63207 = (state_63264[(9)]);
var inst_63214 = (state_63264[(10)]);
var inst_63209 = (state_63264[(11)]);
var inst_63134 = (state_63264[(12)]);
var inst_63214__$1 = cljs.core._nth(inst_63207,inst_63209);
var inst_63215 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_63214__$1,inst_63134,done);
var state_63264__$1 = (function (){var statearr_63270 = state_63264;
(statearr_63270[(10)] = inst_63214__$1);

return statearr_63270;
})();
if(cljs.core.truth_(inst_63215)){
var statearr_63271_64400 = state_63264__$1;
(statearr_63271_64400[(1)] = (30));

} else {
var statearr_63272_64401 = state_63264__$1;
(statearr_63272_64401[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (1))){
var state_63264__$1 = state_63264;
var statearr_63273_64402 = state_63264__$1;
(statearr_63273_64402[(2)] = null);

(statearr_63273_64402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (24))){
var inst_63165 = (state_63264[(7)]);
var inst_63184 = (state_63264[(2)]);
var inst_63185 = cljs.core.next(inst_63165);
var inst_63143 = inst_63185;
var inst_63144 = null;
var inst_63145 = (0);
var inst_63146 = (0);
var state_63264__$1 = (function (){var statearr_63274 = state_63264;
(statearr_63274[(13)] = inst_63143);

(statearr_63274[(14)] = inst_63144);

(statearr_63274[(15)] = inst_63146);

(statearr_63274[(16)] = inst_63184);

(statearr_63274[(17)] = inst_63145);

return statearr_63274;
})();
var statearr_63275_64403 = state_63264__$1;
(statearr_63275_64403[(2)] = null);

(statearr_63275_64403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (39))){
var state_63264__$1 = state_63264;
var statearr_63279_64406 = state_63264__$1;
(statearr_63279_64406[(2)] = null);

(statearr_63279_64406[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (4))){
var inst_63134 = (state_63264[(12)]);
var inst_63134__$1 = (state_63264[(2)]);
var inst_63135 = (inst_63134__$1 == null);
var state_63264__$1 = (function (){var statearr_63280 = state_63264;
(statearr_63280[(12)] = inst_63134__$1);

return statearr_63280;
})();
if(cljs.core.truth_(inst_63135)){
var statearr_63281_64408 = state_63264__$1;
(statearr_63281_64408[(1)] = (5));

} else {
var statearr_63282_64409 = state_63264__$1;
(statearr_63282_64409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (15))){
var inst_63143 = (state_63264[(13)]);
var inst_63144 = (state_63264[(14)]);
var inst_63146 = (state_63264[(15)]);
var inst_63145 = (state_63264[(17)]);
var inst_63161 = (state_63264[(2)]);
var inst_63162 = (inst_63146 + (1));
var tmp63276 = inst_63143;
var tmp63277 = inst_63144;
var tmp63278 = inst_63145;
var inst_63143__$1 = tmp63276;
var inst_63144__$1 = tmp63277;
var inst_63145__$1 = tmp63278;
var inst_63146__$1 = inst_63162;
var state_63264__$1 = (function (){var statearr_63283 = state_63264;
(statearr_63283[(13)] = inst_63143__$1);

(statearr_63283[(14)] = inst_63144__$1);

(statearr_63283[(15)] = inst_63146__$1);

(statearr_63283[(17)] = inst_63145__$1);

(statearr_63283[(18)] = inst_63161);

return statearr_63283;
})();
var statearr_63284_64417 = state_63264__$1;
(statearr_63284_64417[(2)] = null);

(statearr_63284_64417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (21))){
var inst_63188 = (state_63264[(2)]);
var state_63264__$1 = state_63264;
var statearr_63288_64420 = state_63264__$1;
(statearr_63288_64420[(2)] = inst_63188);

(statearr_63288_64420[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (31))){
var inst_63214 = (state_63264[(10)]);
var inst_63218 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_63214);
var state_63264__$1 = state_63264;
var statearr_63289_64421 = state_63264__$1;
(statearr_63289_64421[(2)] = inst_63218);

(statearr_63289_64421[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (32))){
var inst_63207 = (state_63264[(9)]);
var inst_63208 = (state_63264[(19)]);
var inst_63209 = (state_63264[(11)]);
var inst_63206 = (state_63264[(20)]);
var inst_63220 = (state_63264[(2)]);
var inst_63221 = (inst_63209 + (1));
var tmp63285 = inst_63207;
var tmp63286 = inst_63208;
var tmp63287 = inst_63206;
var inst_63206__$1 = tmp63287;
var inst_63207__$1 = tmp63285;
var inst_63208__$1 = tmp63286;
var inst_63209__$1 = inst_63221;
var state_63264__$1 = (function (){var statearr_63290 = state_63264;
(statearr_63290[(9)] = inst_63207__$1);

(statearr_63290[(19)] = inst_63208__$1);

(statearr_63290[(21)] = inst_63220);

(statearr_63290[(11)] = inst_63209__$1);

(statearr_63290[(20)] = inst_63206__$1);

return statearr_63290;
})();
var statearr_63291_64426 = state_63264__$1;
(statearr_63291_64426[(2)] = null);

(statearr_63291_64426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (40))){
var inst_63233 = (state_63264[(22)]);
var inst_63237 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_63233);
var state_63264__$1 = state_63264;
var statearr_63292_64427 = state_63264__$1;
(statearr_63292_64427[(2)] = inst_63237);

(statearr_63292_64427[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (33))){
var inst_63224 = (state_63264[(23)]);
var inst_63226 = cljs.core.chunked_seq_QMARK_(inst_63224);
var state_63264__$1 = state_63264;
if(inst_63226){
var statearr_63293_64428 = state_63264__$1;
(statearr_63293_64428[(1)] = (36));

} else {
var statearr_63294_64429 = state_63264__$1;
(statearr_63294_64429[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (13))){
var inst_63155 = (state_63264[(24)]);
var inst_63158 = cljs.core.async.close_BANG_(inst_63155);
var state_63264__$1 = state_63264;
var statearr_63295_64431 = state_63264__$1;
(statearr_63295_64431[(2)] = inst_63158);

(statearr_63295_64431[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (22))){
var inst_63178 = (state_63264[(8)]);
var inst_63181 = cljs.core.async.close_BANG_(inst_63178);
var state_63264__$1 = state_63264;
var statearr_63296_64432 = state_63264__$1;
(statearr_63296_64432[(2)] = inst_63181);

(statearr_63296_64432[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (36))){
var inst_63224 = (state_63264[(23)]);
var inst_63228 = cljs.core.chunk_first(inst_63224);
var inst_63229 = cljs.core.chunk_rest(inst_63224);
var inst_63230 = cljs.core.count(inst_63228);
var inst_63206 = inst_63229;
var inst_63207 = inst_63228;
var inst_63208 = inst_63230;
var inst_63209 = (0);
var state_63264__$1 = (function (){var statearr_63297 = state_63264;
(statearr_63297[(9)] = inst_63207);

(statearr_63297[(19)] = inst_63208);

(statearr_63297[(11)] = inst_63209);

(statearr_63297[(20)] = inst_63206);

return statearr_63297;
})();
var statearr_63298_64433 = state_63264__$1;
(statearr_63298_64433[(2)] = null);

(statearr_63298_64433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (41))){
var inst_63224 = (state_63264[(23)]);
var inst_63239 = (state_63264[(2)]);
var inst_63240 = cljs.core.next(inst_63224);
var inst_63206 = inst_63240;
var inst_63207 = null;
var inst_63208 = (0);
var inst_63209 = (0);
var state_63264__$1 = (function (){var statearr_63299 = state_63264;
(statearr_63299[(9)] = inst_63207);

(statearr_63299[(19)] = inst_63208);

(statearr_63299[(11)] = inst_63209);

(statearr_63299[(25)] = inst_63239);

(statearr_63299[(20)] = inst_63206);

return statearr_63299;
})();
var statearr_63300_64434 = state_63264__$1;
(statearr_63300_64434[(2)] = null);

(statearr_63300_64434[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (43))){
var state_63264__$1 = state_63264;
var statearr_63301_64435 = state_63264__$1;
(statearr_63301_64435[(2)] = null);

(statearr_63301_64435[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (29))){
var inst_63248 = (state_63264[(2)]);
var state_63264__$1 = state_63264;
var statearr_63302_64436 = state_63264__$1;
(statearr_63302_64436[(2)] = inst_63248);

(statearr_63302_64436[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (44))){
var inst_63257 = (state_63264[(2)]);
var state_63264__$1 = (function (){var statearr_63303 = state_63264;
(statearr_63303[(26)] = inst_63257);

return statearr_63303;
})();
var statearr_63304_64437 = state_63264__$1;
(statearr_63304_64437[(2)] = null);

(statearr_63304_64437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (6))){
var inst_63198 = (state_63264[(27)]);
var inst_63197 = cljs.core.deref(cs);
var inst_63198__$1 = cljs.core.keys(inst_63197);
var inst_63199 = cljs.core.count(inst_63198__$1);
var inst_63200 = cljs.core.reset_BANG_(dctr,inst_63199);
var inst_63205 = cljs.core.seq(inst_63198__$1);
var inst_63206 = inst_63205;
var inst_63207 = null;
var inst_63208 = (0);
var inst_63209 = (0);
var state_63264__$1 = (function (){var statearr_63305 = state_63264;
(statearr_63305[(9)] = inst_63207);

(statearr_63305[(19)] = inst_63208);

(statearr_63305[(27)] = inst_63198__$1);

(statearr_63305[(11)] = inst_63209);

(statearr_63305[(28)] = inst_63200);

(statearr_63305[(20)] = inst_63206);

return statearr_63305;
})();
var statearr_63306_64438 = state_63264__$1;
(statearr_63306_64438[(2)] = null);

(statearr_63306_64438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (28))){
var inst_63224 = (state_63264[(23)]);
var inst_63206 = (state_63264[(20)]);
var inst_63224__$1 = cljs.core.seq(inst_63206);
var state_63264__$1 = (function (){var statearr_63307 = state_63264;
(statearr_63307[(23)] = inst_63224__$1);

return statearr_63307;
})();
if(inst_63224__$1){
var statearr_63308_64439 = state_63264__$1;
(statearr_63308_64439[(1)] = (33));

} else {
var statearr_63309_64440 = state_63264__$1;
(statearr_63309_64440[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (25))){
var inst_63208 = (state_63264[(19)]);
var inst_63209 = (state_63264[(11)]);
var inst_63211 = (inst_63209 < inst_63208);
var inst_63212 = inst_63211;
var state_63264__$1 = state_63264;
if(cljs.core.truth_(inst_63212)){
var statearr_63310_64441 = state_63264__$1;
(statearr_63310_64441[(1)] = (27));

} else {
var statearr_63311_64442 = state_63264__$1;
(statearr_63311_64442[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (34))){
var state_63264__$1 = state_63264;
var statearr_63312_64443 = state_63264__$1;
(statearr_63312_64443[(2)] = null);

(statearr_63312_64443[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (17))){
var state_63264__$1 = state_63264;
var statearr_63313_64444 = state_63264__$1;
(statearr_63313_64444[(2)] = null);

(statearr_63313_64444[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (3))){
var inst_63262 = (state_63264[(2)]);
var state_63264__$1 = state_63264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63264__$1,inst_63262);
} else {
if((state_val_63265 === (12))){
var inst_63193 = (state_63264[(2)]);
var state_63264__$1 = state_63264;
var statearr_63314_64445 = state_63264__$1;
(statearr_63314_64445[(2)] = inst_63193);

(statearr_63314_64445[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (2))){
var state_63264__$1 = state_63264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63264__$1,(4),ch);
} else {
if((state_val_63265 === (23))){
var state_63264__$1 = state_63264;
var statearr_63315_64446 = state_63264__$1;
(statearr_63315_64446[(2)] = null);

(statearr_63315_64446[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (35))){
var inst_63246 = (state_63264[(2)]);
var state_63264__$1 = state_63264;
var statearr_63316_64447 = state_63264__$1;
(statearr_63316_64447[(2)] = inst_63246);

(statearr_63316_64447[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (19))){
var inst_63165 = (state_63264[(7)]);
var inst_63169 = cljs.core.chunk_first(inst_63165);
var inst_63170 = cljs.core.chunk_rest(inst_63165);
var inst_63171 = cljs.core.count(inst_63169);
var inst_63143 = inst_63170;
var inst_63144 = inst_63169;
var inst_63145 = inst_63171;
var inst_63146 = (0);
var state_63264__$1 = (function (){var statearr_63317 = state_63264;
(statearr_63317[(13)] = inst_63143);

(statearr_63317[(14)] = inst_63144);

(statearr_63317[(15)] = inst_63146);

(statearr_63317[(17)] = inst_63145);

return statearr_63317;
})();
var statearr_63318_64448 = state_63264__$1;
(statearr_63318_64448[(2)] = null);

(statearr_63318_64448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (11))){
var inst_63143 = (state_63264[(13)]);
var inst_63165 = (state_63264[(7)]);
var inst_63165__$1 = cljs.core.seq(inst_63143);
var state_63264__$1 = (function (){var statearr_63319 = state_63264;
(statearr_63319[(7)] = inst_63165__$1);

return statearr_63319;
})();
if(inst_63165__$1){
var statearr_63320_64449 = state_63264__$1;
(statearr_63320_64449[(1)] = (16));

} else {
var statearr_63321_64450 = state_63264__$1;
(statearr_63321_64450[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (9))){
var inst_63195 = (state_63264[(2)]);
var state_63264__$1 = state_63264;
var statearr_63322_64451 = state_63264__$1;
(statearr_63322_64451[(2)] = inst_63195);

(statearr_63322_64451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (5))){
var inst_63141 = cljs.core.deref(cs);
var inst_63142 = cljs.core.seq(inst_63141);
var inst_63143 = inst_63142;
var inst_63144 = null;
var inst_63145 = (0);
var inst_63146 = (0);
var state_63264__$1 = (function (){var statearr_63323 = state_63264;
(statearr_63323[(13)] = inst_63143);

(statearr_63323[(14)] = inst_63144);

(statearr_63323[(15)] = inst_63146);

(statearr_63323[(17)] = inst_63145);

return statearr_63323;
})();
var statearr_63324_64452 = state_63264__$1;
(statearr_63324_64452[(2)] = null);

(statearr_63324_64452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (14))){
var state_63264__$1 = state_63264;
var statearr_63325_64453 = state_63264__$1;
(statearr_63325_64453[(2)] = null);

(statearr_63325_64453[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (45))){
var inst_63254 = (state_63264[(2)]);
var state_63264__$1 = state_63264;
var statearr_63326_64454 = state_63264__$1;
(statearr_63326_64454[(2)] = inst_63254);

(statearr_63326_64454[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (26))){
var inst_63198 = (state_63264[(27)]);
var inst_63250 = (state_63264[(2)]);
var inst_63251 = cljs.core.seq(inst_63198);
var state_63264__$1 = (function (){var statearr_63327 = state_63264;
(statearr_63327[(29)] = inst_63250);

return statearr_63327;
})();
if(inst_63251){
var statearr_63328_64455 = state_63264__$1;
(statearr_63328_64455[(1)] = (42));

} else {
var statearr_63329_64456 = state_63264__$1;
(statearr_63329_64456[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (16))){
var inst_63165 = (state_63264[(7)]);
var inst_63167 = cljs.core.chunked_seq_QMARK_(inst_63165);
var state_63264__$1 = state_63264;
if(inst_63167){
var statearr_63330_64457 = state_63264__$1;
(statearr_63330_64457[(1)] = (19));

} else {
var statearr_63331_64458 = state_63264__$1;
(statearr_63331_64458[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (38))){
var inst_63243 = (state_63264[(2)]);
var state_63264__$1 = state_63264;
var statearr_63332_64459 = state_63264__$1;
(statearr_63332_64459[(2)] = inst_63243);

(statearr_63332_64459[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (30))){
var state_63264__$1 = state_63264;
var statearr_63333_64460 = state_63264__$1;
(statearr_63333_64460[(2)] = null);

(statearr_63333_64460[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (10))){
var inst_63144 = (state_63264[(14)]);
var inst_63146 = (state_63264[(15)]);
var inst_63154 = cljs.core._nth(inst_63144,inst_63146);
var inst_63155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63154,(0),null);
var inst_63156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63154,(1),null);
var state_63264__$1 = (function (){var statearr_63334 = state_63264;
(statearr_63334[(24)] = inst_63155);

return statearr_63334;
})();
if(cljs.core.truth_(inst_63156)){
var statearr_63335_64461 = state_63264__$1;
(statearr_63335_64461[(1)] = (13));

} else {
var statearr_63336_64462 = state_63264__$1;
(statearr_63336_64462[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (18))){
var inst_63191 = (state_63264[(2)]);
var state_63264__$1 = state_63264;
var statearr_63337_64463 = state_63264__$1;
(statearr_63337_64463[(2)] = inst_63191);

(statearr_63337_64463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (42))){
var state_63264__$1 = state_63264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63264__$1,(45),dchan);
} else {
if((state_val_63265 === (37))){
var inst_63224 = (state_63264[(23)]);
var inst_63134 = (state_63264[(12)]);
var inst_63233 = (state_63264[(22)]);
var inst_63233__$1 = cljs.core.first(inst_63224);
var inst_63234 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_63233__$1,inst_63134,done);
var state_63264__$1 = (function (){var statearr_63338 = state_63264;
(statearr_63338[(22)] = inst_63233__$1);

return statearr_63338;
})();
if(cljs.core.truth_(inst_63234)){
var statearr_63339_64468 = state_63264__$1;
(statearr_63339_64468[(1)] = (39));

} else {
var statearr_63340_64469 = state_63264__$1;
(statearr_63340_64469[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63265 === (8))){
var inst_63146 = (state_63264[(15)]);
var inst_63145 = (state_63264[(17)]);
var inst_63148 = (inst_63146 < inst_63145);
var inst_63149 = inst_63148;
var state_63264__$1 = state_63264;
if(cljs.core.truth_(inst_63149)){
var statearr_63341_64470 = state_63264__$1;
(statearr_63341_64470[(1)] = (10));

} else {
var statearr_63342_64471 = state_63264__$1;
(statearr_63342_64471[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__62613__auto__ = null;
var cljs$core$async$mult_$_state_machine__62613__auto____0 = (function (){
var statearr_63343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63343[(0)] = cljs$core$async$mult_$_state_machine__62613__auto__);

(statearr_63343[(1)] = (1));

return statearr_63343;
});
var cljs$core$async$mult_$_state_machine__62613__auto____1 = (function (state_63264){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_63264);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e63344){var ex__62616__auto__ = e63344;
var statearr_63345_64472 = state_63264;
(statearr_63345_64472[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_63264[(4)]))){
var statearr_63346_64473 = state_63264;
(statearr_63346_64473[(1)] = cljs.core.first((state_63264[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64474 = state_63264;
state_63264 = G__64474;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__62613__auto__ = function(state_63264){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__62613__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__62613__auto____1.call(this,state_63264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__62613__auto____0;
cljs$core$async$mult_$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__62613__auto____1;
return cljs$core$async$mult_$_state_machine__62613__auto__;
})()
})();
var state__62650__auto__ = (function (){var statearr_63347 = f__62649__auto__();
(statearr_63347[(6)] = c__62648__auto___64396);

return statearr_63347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
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
var G__63349 = arguments.length;
switch (G__63349) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_64481 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_64481(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_64486 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_64486(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_64487 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_64487(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_64488 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_64488(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_64489 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_64489(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64490 = arguments.length;
var i__4737__auto___64491 = (0);
while(true){
if((i__4737__auto___64491 < len__4736__auto___64490)){
args__4742__auto__.push((arguments[i__4737__auto___64491]));

var G__64492 = (i__4737__auto___64491 + (1));
i__4737__auto___64491 = G__64492;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__63354){
var map__63355 = p__63354;
var map__63355__$1 = (((((!((map__63355 == null))))?(((((map__63355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63355):map__63355);
var opts = map__63355__$1;
var statearr_63357_64493 = state;
(statearr_63357_64493[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_63358_64494 = state;
(statearr_63358_64494[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_63359_64496 = state;
(statearr_63359_64496[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq63350){
var G__63351 = cljs.core.first(seq63350);
var seq63350__$1 = cljs.core.next(seq63350);
var G__63352 = cljs.core.first(seq63350__$1);
var seq63350__$2 = cljs.core.next(seq63350__$1);
var G__63353 = cljs.core.first(seq63350__$2);
var seq63350__$3 = cljs.core.next(seq63350__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63351,G__63352,G__63353,seq63350__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63360 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63360 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta63361){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta63361 = meta63361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63362,meta63361__$1){
var self__ = this;
var _63362__$1 = this;
return (new cljs.core.async.t_cljs$core$async63360(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta63361__$1));
}));

(cljs.core.async.t_cljs$core$async63360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63362){
var self__ = this;
var _63362__$1 = this;
return self__.meta63361;
}));

(cljs.core.async.t_cljs$core$async63360.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63360.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async63360.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63360.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63360.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63360.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63360.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63360.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta63361","meta63361",-590911024,null)], null);
}));

(cljs.core.async.t_cljs$core$async63360.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63360");

(cljs.core.async.t_cljs$core$async63360.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63360");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63360.
 */
cljs.core.async.__GT_t_cljs$core$async63360 = (function cljs$core$async$mix_$___GT_t_cljs$core$async63360(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta63361){
return (new cljs.core.async.t_cljs$core$async63360(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta63361));
});

}

return (new cljs.core.async.t_cljs$core$async63360(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__62648__auto___64513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = (function (state_63464){
var state_val_63465 = (state_63464[(1)]);
if((state_val_63465 === (7))){
var inst_63379 = (state_63464[(2)]);
var state_63464__$1 = state_63464;
var statearr_63466_64514 = state_63464__$1;
(statearr_63466_64514[(2)] = inst_63379);

(statearr_63466_64514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (20))){
var inst_63391 = (state_63464[(7)]);
var state_63464__$1 = state_63464;
var statearr_63467_64515 = state_63464__$1;
(statearr_63467_64515[(2)] = inst_63391);

(statearr_63467_64515[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (27))){
var state_63464__$1 = state_63464;
var statearr_63468_64518 = state_63464__$1;
(statearr_63468_64518[(2)] = null);

(statearr_63468_64518[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (1))){
var inst_63366 = (state_63464[(8)]);
var inst_63366__$1 = calc_state();
var inst_63368 = (inst_63366__$1 == null);
var inst_63369 = cljs.core.not(inst_63368);
var state_63464__$1 = (function (){var statearr_63469 = state_63464;
(statearr_63469[(8)] = inst_63366__$1);

return statearr_63469;
})();
if(inst_63369){
var statearr_63470_64520 = state_63464__$1;
(statearr_63470_64520[(1)] = (2));

} else {
var statearr_63471_64521 = state_63464__$1;
(statearr_63471_64521[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (24))){
var inst_63424 = (state_63464[(9)]);
var inst_63415 = (state_63464[(10)]);
var inst_63438 = (state_63464[(11)]);
var inst_63438__$1 = (inst_63415.cljs$core$IFn$_invoke$arity$1 ? inst_63415.cljs$core$IFn$_invoke$arity$1(inst_63424) : inst_63415.call(null,inst_63424));
var state_63464__$1 = (function (){var statearr_63472 = state_63464;
(statearr_63472[(11)] = inst_63438__$1);

return statearr_63472;
})();
if(cljs.core.truth_(inst_63438__$1)){
var statearr_63473_64522 = state_63464__$1;
(statearr_63473_64522[(1)] = (29));

} else {
var statearr_63474_64523 = state_63464__$1;
(statearr_63474_64523[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (4))){
var inst_63382 = (state_63464[(2)]);
var state_63464__$1 = state_63464;
if(cljs.core.truth_(inst_63382)){
var statearr_63475_64525 = state_63464__$1;
(statearr_63475_64525[(1)] = (8));

} else {
var statearr_63476_64526 = state_63464__$1;
(statearr_63476_64526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (15))){
var inst_63409 = (state_63464[(2)]);
var state_63464__$1 = state_63464;
if(cljs.core.truth_(inst_63409)){
var statearr_63477_64527 = state_63464__$1;
(statearr_63477_64527[(1)] = (19));

} else {
var statearr_63478_64528 = state_63464__$1;
(statearr_63478_64528[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (21))){
var inst_63414 = (state_63464[(12)]);
var inst_63414__$1 = (state_63464[(2)]);
var inst_63415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63414__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63414__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63414__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_63464__$1 = (function (){var statearr_63479 = state_63464;
(statearr_63479[(10)] = inst_63415);

(statearr_63479[(13)] = inst_63416);

(statearr_63479[(12)] = inst_63414__$1);

return statearr_63479;
})();
return cljs.core.async.ioc_alts_BANG_(state_63464__$1,(22),inst_63417);
} else {
if((state_val_63465 === (31))){
var inst_63446 = (state_63464[(2)]);
var state_63464__$1 = state_63464;
if(cljs.core.truth_(inst_63446)){
var statearr_63480_64537 = state_63464__$1;
(statearr_63480_64537[(1)] = (32));

} else {
var statearr_63481_64538 = state_63464__$1;
(statearr_63481_64538[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (32))){
var inst_63423 = (state_63464[(14)]);
var state_63464__$1 = state_63464;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63464__$1,(35),out,inst_63423);
} else {
if((state_val_63465 === (33))){
var inst_63414 = (state_63464[(12)]);
var inst_63391 = inst_63414;
var state_63464__$1 = (function (){var statearr_63482 = state_63464;
(statearr_63482[(7)] = inst_63391);

return statearr_63482;
})();
var statearr_63483_64550 = state_63464__$1;
(statearr_63483_64550[(2)] = null);

(statearr_63483_64550[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (13))){
var inst_63391 = (state_63464[(7)]);
var inst_63398 = inst_63391.cljs$lang$protocol_mask$partition0$;
var inst_63399 = (inst_63398 & (64));
var inst_63400 = inst_63391.cljs$core$ISeq$;
var inst_63401 = (cljs.core.PROTOCOL_SENTINEL === inst_63400);
var inst_63402 = ((inst_63399) || (inst_63401));
var state_63464__$1 = state_63464;
if(cljs.core.truth_(inst_63402)){
var statearr_63484_64558 = state_63464__$1;
(statearr_63484_64558[(1)] = (16));

} else {
var statearr_63485_64559 = state_63464__$1;
(statearr_63485_64559[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (22))){
var inst_63424 = (state_63464[(9)]);
var inst_63423 = (state_63464[(14)]);
var inst_63422 = (state_63464[(2)]);
var inst_63423__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63422,(0),null);
var inst_63424__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63422,(1),null);
var inst_63425 = (inst_63423__$1 == null);
var inst_63426 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_63424__$1,change);
var inst_63427 = ((inst_63425) || (inst_63426));
var state_63464__$1 = (function (){var statearr_63486 = state_63464;
(statearr_63486[(9)] = inst_63424__$1);

(statearr_63486[(14)] = inst_63423__$1);

return statearr_63486;
})();
if(cljs.core.truth_(inst_63427)){
var statearr_63487_64560 = state_63464__$1;
(statearr_63487_64560[(1)] = (23));

} else {
var statearr_63488_64561 = state_63464__$1;
(statearr_63488_64561[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (36))){
var inst_63414 = (state_63464[(12)]);
var inst_63391 = inst_63414;
var state_63464__$1 = (function (){var statearr_63489 = state_63464;
(statearr_63489[(7)] = inst_63391);

return statearr_63489;
})();
var statearr_63490_64562 = state_63464__$1;
(statearr_63490_64562[(2)] = null);

(statearr_63490_64562[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (29))){
var inst_63438 = (state_63464[(11)]);
var state_63464__$1 = state_63464;
var statearr_63491_64563 = state_63464__$1;
(statearr_63491_64563[(2)] = inst_63438);

(statearr_63491_64563[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (6))){
var state_63464__$1 = state_63464;
var statearr_63492_64564 = state_63464__$1;
(statearr_63492_64564[(2)] = false);

(statearr_63492_64564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (28))){
var inst_63434 = (state_63464[(2)]);
var inst_63435 = calc_state();
var inst_63391 = inst_63435;
var state_63464__$1 = (function (){var statearr_63493 = state_63464;
(statearr_63493[(7)] = inst_63391);

(statearr_63493[(15)] = inst_63434);

return statearr_63493;
})();
var statearr_63494_64565 = state_63464__$1;
(statearr_63494_64565[(2)] = null);

(statearr_63494_64565[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (25))){
var inst_63460 = (state_63464[(2)]);
var state_63464__$1 = state_63464;
var statearr_63495_64566 = state_63464__$1;
(statearr_63495_64566[(2)] = inst_63460);

(statearr_63495_64566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (34))){
var inst_63458 = (state_63464[(2)]);
var state_63464__$1 = state_63464;
var statearr_63496_64567 = state_63464__$1;
(statearr_63496_64567[(2)] = inst_63458);

(statearr_63496_64567[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (17))){
var state_63464__$1 = state_63464;
var statearr_63497_64568 = state_63464__$1;
(statearr_63497_64568[(2)] = false);

(statearr_63497_64568[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (3))){
var state_63464__$1 = state_63464;
var statearr_63498_64569 = state_63464__$1;
(statearr_63498_64569[(2)] = false);

(statearr_63498_64569[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (12))){
var inst_63462 = (state_63464[(2)]);
var state_63464__$1 = state_63464;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63464__$1,inst_63462);
} else {
if((state_val_63465 === (2))){
var inst_63366 = (state_63464[(8)]);
var inst_63371 = inst_63366.cljs$lang$protocol_mask$partition0$;
var inst_63372 = (inst_63371 & (64));
var inst_63373 = inst_63366.cljs$core$ISeq$;
var inst_63374 = (cljs.core.PROTOCOL_SENTINEL === inst_63373);
var inst_63375 = ((inst_63372) || (inst_63374));
var state_63464__$1 = state_63464;
if(cljs.core.truth_(inst_63375)){
var statearr_63499_64570 = state_63464__$1;
(statearr_63499_64570[(1)] = (5));

} else {
var statearr_63500_64571 = state_63464__$1;
(statearr_63500_64571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (23))){
var inst_63423 = (state_63464[(14)]);
var inst_63429 = (inst_63423 == null);
var state_63464__$1 = state_63464;
if(cljs.core.truth_(inst_63429)){
var statearr_63501_64572 = state_63464__$1;
(statearr_63501_64572[(1)] = (26));

} else {
var statearr_63502_64573 = state_63464__$1;
(statearr_63502_64573[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (35))){
var inst_63449 = (state_63464[(2)]);
var state_63464__$1 = state_63464;
if(cljs.core.truth_(inst_63449)){
var statearr_63503_64574 = state_63464__$1;
(statearr_63503_64574[(1)] = (36));

} else {
var statearr_63504_64575 = state_63464__$1;
(statearr_63504_64575[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (19))){
var inst_63391 = (state_63464[(7)]);
var inst_63411 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63391);
var state_63464__$1 = state_63464;
var statearr_63505_64576 = state_63464__$1;
(statearr_63505_64576[(2)] = inst_63411);

(statearr_63505_64576[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (11))){
var inst_63391 = (state_63464[(7)]);
var inst_63395 = (inst_63391 == null);
var inst_63396 = cljs.core.not(inst_63395);
var state_63464__$1 = state_63464;
if(inst_63396){
var statearr_63506_64577 = state_63464__$1;
(statearr_63506_64577[(1)] = (13));

} else {
var statearr_63507_64578 = state_63464__$1;
(statearr_63507_64578[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (9))){
var inst_63366 = (state_63464[(8)]);
var state_63464__$1 = state_63464;
var statearr_63508_64579 = state_63464__$1;
(statearr_63508_64579[(2)] = inst_63366);

(statearr_63508_64579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (5))){
var state_63464__$1 = state_63464;
var statearr_63509_64580 = state_63464__$1;
(statearr_63509_64580[(2)] = true);

(statearr_63509_64580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (14))){
var state_63464__$1 = state_63464;
var statearr_63510_64581 = state_63464__$1;
(statearr_63510_64581[(2)] = false);

(statearr_63510_64581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (26))){
var inst_63424 = (state_63464[(9)]);
var inst_63431 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_63424);
var state_63464__$1 = state_63464;
var statearr_63511_64582 = state_63464__$1;
(statearr_63511_64582[(2)] = inst_63431);

(statearr_63511_64582[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (16))){
var state_63464__$1 = state_63464;
var statearr_63512_64583 = state_63464__$1;
(statearr_63512_64583[(2)] = true);

(statearr_63512_64583[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (38))){
var inst_63454 = (state_63464[(2)]);
var state_63464__$1 = state_63464;
var statearr_63513_64584 = state_63464__$1;
(statearr_63513_64584[(2)] = inst_63454);

(statearr_63513_64584[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (30))){
var inst_63424 = (state_63464[(9)]);
var inst_63415 = (state_63464[(10)]);
var inst_63416 = (state_63464[(13)]);
var inst_63441 = cljs.core.empty_QMARK_(inst_63415);
var inst_63442 = (inst_63416.cljs$core$IFn$_invoke$arity$1 ? inst_63416.cljs$core$IFn$_invoke$arity$1(inst_63424) : inst_63416.call(null,inst_63424));
var inst_63443 = cljs.core.not(inst_63442);
var inst_63444 = ((inst_63441) && (inst_63443));
var state_63464__$1 = state_63464;
var statearr_63514_64585 = state_63464__$1;
(statearr_63514_64585[(2)] = inst_63444);

(statearr_63514_64585[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (10))){
var inst_63366 = (state_63464[(8)]);
var inst_63387 = (state_63464[(2)]);
var inst_63388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63387,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63387,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63387,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_63391 = inst_63366;
var state_63464__$1 = (function (){var statearr_63515 = state_63464;
(statearr_63515[(7)] = inst_63391);

(statearr_63515[(16)] = inst_63389);

(statearr_63515[(17)] = inst_63388);

(statearr_63515[(18)] = inst_63390);

return statearr_63515;
})();
var statearr_63516_64586 = state_63464__$1;
(statearr_63516_64586[(2)] = null);

(statearr_63516_64586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (18))){
var inst_63406 = (state_63464[(2)]);
var state_63464__$1 = state_63464;
var statearr_63517_64587 = state_63464__$1;
(statearr_63517_64587[(2)] = inst_63406);

(statearr_63517_64587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (37))){
var state_63464__$1 = state_63464;
var statearr_63518_64588 = state_63464__$1;
(statearr_63518_64588[(2)] = null);

(statearr_63518_64588[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63465 === (8))){
var inst_63366 = (state_63464[(8)]);
var inst_63384 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63366);
var state_63464__$1 = state_63464;
var statearr_63519_64589 = state_63464__$1;
(statearr_63519_64589[(2)] = inst_63384);

(statearr_63519_64589[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__62613__auto__ = null;
var cljs$core$async$mix_$_state_machine__62613__auto____0 = (function (){
var statearr_63520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63520[(0)] = cljs$core$async$mix_$_state_machine__62613__auto__);

(statearr_63520[(1)] = (1));

return statearr_63520;
});
var cljs$core$async$mix_$_state_machine__62613__auto____1 = (function (state_63464){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_63464);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e63521){var ex__62616__auto__ = e63521;
var statearr_63522_64590 = state_63464;
(statearr_63522_64590[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_63464[(4)]))){
var statearr_63523_64591 = state_63464;
(statearr_63523_64591[(1)] = cljs.core.first((state_63464[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64592 = state_63464;
state_63464 = G__64592;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__62613__auto__ = function(state_63464){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__62613__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__62613__auto____1.call(this,state_63464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__62613__auto____0;
cljs$core$async$mix_$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__62613__auto____1;
return cljs$core$async$mix_$_state_machine__62613__auto__;
})()
})();
var state__62650__auto__ = (function (){var statearr_63524 = f__62649__auto__();
(statearr_63524[(6)] = c__62648__auto___64513);

return statearr_63524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_64593 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_64593(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_64594 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_64594(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_64595 = (function() {
var G__64596 = null;
var G__64596__1 = (function (p){
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
var G__64596__2 = (function (p,v){
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
G__64596 = function(p,v){
switch(arguments.length){
case 1:
return G__64596__1.call(this,p);
case 2:
return G__64596__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__64596.cljs$core$IFn$_invoke$arity$1 = G__64596__1;
G__64596.cljs$core$IFn$_invoke$arity$2 = G__64596__2;
return G__64596;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__63526 = arguments.length;
switch (G__63526) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_64595(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_64595(p,v);
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
var G__63529 = arguments.length;
switch (G__63529) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__63527_SHARP_){
if(cljs.core.truth_((p1__63527_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__63527_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__63527_SHARP_.call(null,topic)))){
return p1__63527_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__63527_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63530 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63530 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta63531){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta63531 = meta63531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63532,meta63531__$1){
var self__ = this;
var _63532__$1 = this;
return (new cljs.core.async.t_cljs$core$async63530(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta63531__$1));
}));

(cljs.core.async.t_cljs$core$async63530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63532){
var self__ = this;
var _63532__$1 = this;
return self__.meta63531;
}));

(cljs.core.async.t_cljs$core$async63530.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63530.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async63530.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63530.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async63530.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async63530.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async63530.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async63530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta63531","meta63531",588402695,null)], null);
}));

(cljs.core.async.t_cljs$core$async63530.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63530");

(cljs.core.async.t_cljs$core$async63530.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63530");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63530.
 */
cljs.core.async.__GT_t_cljs$core$async63530 = (function cljs$core$async$__GT_t_cljs$core$async63530(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63531){
return (new cljs.core.async.t_cljs$core$async63530(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63531));
});

}

return (new cljs.core.async.t_cljs$core$async63530(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__62648__auto___64599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = (function (state_63604){
var state_val_63605 = (state_63604[(1)]);
if((state_val_63605 === (7))){
var inst_63600 = (state_63604[(2)]);
var state_63604__$1 = state_63604;
var statearr_63606_64600 = state_63604__$1;
(statearr_63606_64600[(2)] = inst_63600);

(statearr_63606_64600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63605 === (20))){
var state_63604__$1 = state_63604;
var statearr_63607_64601 = state_63604__$1;
(statearr_63607_64601[(2)] = null);

(statearr_63607_64601[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63605 === (1))){
var state_63604__$1 = state_63604;
var statearr_63608_64602 = state_63604__$1;
(statearr_63608_64602[(2)] = null);

(statearr_63608_64602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63605 === (24))){
var inst_63583 = (state_63604[(7)]);
var inst_63592 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_63583);
var state_63604__$1 = state_63604;
var statearr_63609_64603 = state_63604__$1;
(statearr_63609_64603[(2)] = inst_63592);

(statearr_63609_64603[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63605 === (4))){
var inst_63535 = (state_63604[(8)]);
var inst_63535__$1 = (state_63604[(2)]);
var inst_63536 = (inst_63535__$1 == null);
var state_63604__$1 = (function (){var statearr_63610 = state_63604;
(statearr_63610[(8)] = inst_63535__$1);

return statearr_63610;
})();
if(cljs.core.truth_(inst_63536)){
var statearr_63611_64604 = state_63604__$1;
(statearr_63611_64604[(1)] = (5));

} else {
var statearr_63612_64605 = state_63604__$1;
(statearr_63612_64605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63605 === (15))){
var inst_63577 = (state_63604[(2)]);
var state_63604__$1 = state_63604;
var statearr_63613_64606 = state_63604__$1;
(statearr_63613_64606[(2)] = inst_63577);

(statearr_63613_64606[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63605 === (21))){
var inst_63597 = (state_63604[(2)]);
var state_63604__$1 = (function (){var statearr_63614 = state_63604;
(statearr_63614[(9)] = inst_63597);

return statearr_63614;
})();
var statearr_63615_64607 = state_63604__$1;
(statearr_63615_64607[(2)] = null);

(statearr_63615_64607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63605 === (13))){
var inst_63559 = (state_63604[(10)]);
var inst_63561 = cljs.core.chunked_seq_QMARK_(inst_63559);
var state_63604__$1 = state_63604;
if(inst_63561){
var statearr_63616_64608 = state_63604__$1;
(statearr_63616_64608[(1)] = (16));

} else {
var statearr_63617_64609 = state_63604__$1;
(statearr_63617_64609[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63605 === (22))){
var inst_63589 = (state_63604[(2)]);
var state_63604__$1 = state_63604;
if(cljs.core.truth_(inst_63589)){
var statearr_63618_64610 = state_63604__$1;
(statearr_63618_64610[(1)] = (23));

} else {
var statearr_63619_64611 = state_63604__$1;
(statearr_63619_64611[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63605 === (6))){
var inst_63583 = (state_63604[(7)]);
var inst_63535 = (state_63604[(8)]);
var inst_63585 = (state_63604[(11)]);
var inst_63583__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_63535) : topic_fn.call(null,inst_63535));
var inst_63584 = cljs.core.deref(mults);
var inst_63585__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63584,inst_63583__$1);
var state_63604__$1 = (function (){var statearr_63620 = state_63604;
(statearr_63620[(7)] = inst_63583__$1);

(statearr_63620[(11)] = inst_63585__$1);

return statearr_63620;
})();
if(cljs.core.truth_(inst_63585__$1)){
var statearr_63621_64612 = state_63604__$1;
(statearr_63621_64612[(1)] = (19));

} else {
var statearr_63622_64613 = state_63604__$1;
(statearr_63622_64613[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63605 === (25))){
var inst_63594 = (state_63604[(2)]);
var state_63604__$1 = state_63604;
var statearr_63623_64614 = state_63604__$1;
(statearr_63623_64614[(2)] = inst_63594);

(statearr_63623_64614[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63605 === (17))){
var inst_63559 = (state_63604[(10)]);
var inst_63568 = cljs.core.first(inst_63559);
var inst_63569 = cljs.core.async.muxch_STAR_(inst_63568);
var inst_63570 = cljs.core.async.close_BANG_(inst_63569);
var inst_63571 = cljs.core.next(inst_63559);
var inst_63545 = inst_63571;
var inst_63546 = null;
var inst_63547 = (0);
var inst_63548 = (0);
var state_63604__$1 = (function (){var statearr_63624 = state_63604;
(statearr_63624[(12)] = inst_63546);

(statearr_63624[(13)] = inst_63570);

(statearr_63624[(14)] = inst_63545);

(statearr_63624[(15)] = inst_63548);

(statearr_63624[(16)] = inst_63547);

return statearr_63624;
})();
var statearr_63625_64617 = state_63604__$1;
(statearr_63625_64617[(2)] = null);

(statearr_63625_64617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63605 === (3))){
var inst_63602 = (state_63604[(2)]);
var state_63604__$1 = state_63604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63604__$1,inst_63602);
} else {
if((state_val_63605 === (12))){
var inst_63579 = (state_63604[(2)]);
var state_63604__$1 = state_63604;
var statearr_63626_64618 = state_63604__$1;
(statearr_63626_64618[(2)] = inst_63579);

(statearr_63626_64618[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63605 === (2))){
var state_63604__$1 = state_63604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63604__$1,(4),ch);
} else {
if((state_val_63605 === (23))){
var state_63604__$1 = state_63604;
var statearr_63627_64619 = state_63604__$1;
(statearr_63627_64619[(2)] = null);

(statearr_63627_64619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63605 === (19))){
var inst_63535 = (state_63604[(8)]);
var inst_63585 = (state_63604[(11)]);
var inst_63587 = cljs.core.async.muxch_STAR_(inst_63585);
var state_63604__$1 = state_63604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63604__$1,(22),inst_63587,inst_63535);
} else {
if((state_val_63605 === (11))){
var inst_63545 = (state_63604[(14)]);
var inst_63559 = (state_63604[(10)]);
var inst_63559__$1 = cljs.core.seq(inst_63545);
var state_63604__$1 = (function (){var statearr_63628 = state_63604;
(statearr_63628[(10)] = inst_63559__$1);

return statearr_63628;
})();
if(inst_63559__$1){
var statearr_63629_64620 = state_63604__$1;
(statearr_63629_64620[(1)] = (13));

} else {
var statearr_63630_64621 = state_63604__$1;
(statearr_63630_64621[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63605 === (9))){
var inst_63581 = (state_63604[(2)]);
var state_63604__$1 = state_63604;
var statearr_63631_64624 = state_63604__$1;
(statearr_63631_64624[(2)] = inst_63581);

(statearr_63631_64624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63605 === (5))){
var inst_63542 = cljs.core.deref(mults);
var inst_63543 = cljs.core.vals(inst_63542);
var inst_63544 = cljs.core.seq(inst_63543);
var inst_63545 = inst_63544;
var inst_63546 = null;
var inst_63547 = (0);
var inst_63548 = (0);
var state_63604__$1 = (function (){var statearr_63632 = state_63604;
(statearr_63632[(12)] = inst_63546);

(statearr_63632[(14)] = inst_63545);

(statearr_63632[(15)] = inst_63548);

(statearr_63632[(16)] = inst_63547);

return statearr_63632;
})();
var statearr_63633_64625 = state_63604__$1;
(statearr_63633_64625[(2)] = null);

(statearr_63633_64625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63605 === (14))){
var state_63604__$1 = state_63604;
var statearr_63637_64626 = state_63604__$1;
(statearr_63637_64626[(2)] = null);

(statearr_63637_64626[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63605 === (16))){
var inst_63559 = (state_63604[(10)]);
var inst_63563 = cljs.core.chunk_first(inst_63559);
var inst_63564 = cljs.core.chunk_rest(inst_63559);
var inst_63565 = cljs.core.count(inst_63563);
var inst_63545 = inst_63564;
var inst_63546 = inst_63563;
var inst_63547 = inst_63565;
var inst_63548 = (0);
var state_63604__$1 = (function (){var statearr_63638 = state_63604;
(statearr_63638[(12)] = inst_63546);

(statearr_63638[(14)] = inst_63545);

(statearr_63638[(15)] = inst_63548);

(statearr_63638[(16)] = inst_63547);

return statearr_63638;
})();
var statearr_63639_64627 = state_63604__$1;
(statearr_63639_64627[(2)] = null);

(statearr_63639_64627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63605 === (10))){
var inst_63546 = (state_63604[(12)]);
var inst_63545 = (state_63604[(14)]);
var inst_63548 = (state_63604[(15)]);
var inst_63547 = (state_63604[(16)]);
var inst_63553 = cljs.core._nth(inst_63546,inst_63548);
var inst_63554 = cljs.core.async.muxch_STAR_(inst_63553);
var inst_63555 = cljs.core.async.close_BANG_(inst_63554);
var inst_63556 = (inst_63548 + (1));
var tmp63634 = inst_63546;
var tmp63635 = inst_63545;
var tmp63636 = inst_63547;
var inst_63545__$1 = tmp63635;
var inst_63546__$1 = tmp63634;
var inst_63547__$1 = tmp63636;
var inst_63548__$1 = inst_63556;
var state_63604__$1 = (function (){var statearr_63640 = state_63604;
(statearr_63640[(12)] = inst_63546__$1);

(statearr_63640[(14)] = inst_63545__$1);

(statearr_63640[(15)] = inst_63548__$1);

(statearr_63640[(16)] = inst_63547__$1);

(statearr_63640[(17)] = inst_63555);

return statearr_63640;
})();
var statearr_63641_64630 = state_63604__$1;
(statearr_63641_64630[(2)] = null);

(statearr_63641_64630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63605 === (18))){
var inst_63574 = (state_63604[(2)]);
var state_63604__$1 = state_63604;
var statearr_63642_64631 = state_63604__$1;
(statearr_63642_64631[(2)] = inst_63574);

(statearr_63642_64631[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63605 === (8))){
var inst_63548 = (state_63604[(15)]);
var inst_63547 = (state_63604[(16)]);
var inst_63550 = (inst_63548 < inst_63547);
var inst_63551 = inst_63550;
var state_63604__$1 = state_63604;
if(cljs.core.truth_(inst_63551)){
var statearr_63643_64632 = state_63604__$1;
(statearr_63643_64632[(1)] = (10));

} else {
var statearr_63644_64633 = state_63604__$1;
(statearr_63644_64633[(1)] = (11));

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
var cljs$core$async$state_machine__62613__auto__ = null;
var cljs$core$async$state_machine__62613__auto____0 = (function (){
var statearr_63645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63645[(0)] = cljs$core$async$state_machine__62613__auto__);

(statearr_63645[(1)] = (1));

return statearr_63645;
});
var cljs$core$async$state_machine__62613__auto____1 = (function (state_63604){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_63604);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e63646){var ex__62616__auto__ = e63646;
var statearr_63647_64634 = state_63604;
(statearr_63647_64634[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_63604[(4)]))){
var statearr_63648_64636 = state_63604;
(statearr_63648_64636[(1)] = cljs.core.first((state_63604[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64638 = state_63604;
state_63604 = G__64638;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs$core$async$state_machine__62613__auto__ = function(state_63604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62613__auto____1.call(this,state_63604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62613__auto____0;
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62613__auto____1;
return cljs$core$async$state_machine__62613__auto__;
})()
})();
var state__62650__auto__ = (function (){var statearr_63649 = f__62649__auto__();
(statearr_63649[(6)] = c__62648__auto___64599);

return statearr_63649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
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
var G__63651 = arguments.length;
switch (G__63651) {
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
var G__63653 = arguments.length;
switch (G__63653) {
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
var G__63655 = arguments.length;
switch (G__63655) {
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
var c__62648__auto___64644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = (function (state_63698){
var state_val_63699 = (state_63698[(1)]);
if((state_val_63699 === (7))){
var state_63698__$1 = state_63698;
var statearr_63700_64645 = state_63698__$1;
(statearr_63700_64645[(2)] = null);

(statearr_63700_64645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63699 === (1))){
var state_63698__$1 = state_63698;
var statearr_63701_64646 = state_63698__$1;
(statearr_63701_64646[(2)] = null);

(statearr_63701_64646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63699 === (4))){
var inst_63659 = (state_63698[(7)]);
var inst_63658 = (state_63698[(8)]);
var inst_63661 = (inst_63659 < inst_63658);
var state_63698__$1 = state_63698;
if(cljs.core.truth_(inst_63661)){
var statearr_63702_64647 = state_63698__$1;
(statearr_63702_64647[(1)] = (6));

} else {
var statearr_63703_64648 = state_63698__$1;
(statearr_63703_64648[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63699 === (15))){
var inst_63684 = (state_63698[(9)]);
var inst_63689 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_63684);
var state_63698__$1 = state_63698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63698__$1,(17),out,inst_63689);
} else {
if((state_val_63699 === (13))){
var inst_63684 = (state_63698[(9)]);
var inst_63684__$1 = (state_63698[(2)]);
var inst_63685 = cljs.core.some(cljs.core.nil_QMARK_,inst_63684__$1);
var state_63698__$1 = (function (){var statearr_63704 = state_63698;
(statearr_63704[(9)] = inst_63684__$1);

return statearr_63704;
})();
if(cljs.core.truth_(inst_63685)){
var statearr_63705_64649 = state_63698__$1;
(statearr_63705_64649[(1)] = (14));

} else {
var statearr_63706_64650 = state_63698__$1;
(statearr_63706_64650[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63699 === (6))){
var state_63698__$1 = state_63698;
var statearr_63707_64651 = state_63698__$1;
(statearr_63707_64651[(2)] = null);

(statearr_63707_64651[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63699 === (17))){
var inst_63691 = (state_63698[(2)]);
var state_63698__$1 = (function (){var statearr_63709 = state_63698;
(statearr_63709[(10)] = inst_63691);

return statearr_63709;
})();
var statearr_63710_64652 = state_63698__$1;
(statearr_63710_64652[(2)] = null);

(statearr_63710_64652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63699 === (3))){
var inst_63696 = (state_63698[(2)]);
var state_63698__$1 = state_63698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63698__$1,inst_63696);
} else {
if((state_val_63699 === (12))){
var _ = (function (){var statearr_63711 = state_63698;
(statearr_63711[(4)] = cljs.core.rest((state_63698[(4)])));

return statearr_63711;
})();
var state_63698__$1 = state_63698;
var ex63708 = (state_63698__$1[(2)]);
var statearr_63712_64653 = state_63698__$1;
(statearr_63712_64653[(5)] = ex63708);


if((ex63708 instanceof Object)){
var statearr_63713_64654 = state_63698__$1;
(statearr_63713_64654[(1)] = (11));

(statearr_63713_64654[(5)] = null);

} else {
throw ex63708;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63699 === (2))){
var inst_63657 = cljs.core.reset_BANG_(dctr,cnt);
var inst_63658 = cnt;
var inst_63659 = (0);
var state_63698__$1 = (function (){var statearr_63714 = state_63698;
(statearr_63714[(11)] = inst_63657);

(statearr_63714[(7)] = inst_63659);

(statearr_63714[(8)] = inst_63658);

return statearr_63714;
})();
var statearr_63715_64655 = state_63698__$1;
(statearr_63715_64655[(2)] = null);

(statearr_63715_64655[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63699 === (11))){
var inst_63663 = (state_63698[(2)]);
var inst_63664 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_63698__$1 = (function (){var statearr_63716 = state_63698;
(statearr_63716[(12)] = inst_63663);

return statearr_63716;
})();
var statearr_63717_64656 = state_63698__$1;
(statearr_63717_64656[(2)] = inst_63664);

(statearr_63717_64656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63699 === (9))){
var inst_63659 = (state_63698[(7)]);
var _ = (function (){var statearr_63718 = state_63698;
(statearr_63718[(4)] = cljs.core.cons((12),(state_63698[(4)])));

return statearr_63718;
})();
var inst_63670 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_63659) : chs__$1.call(null,inst_63659));
var inst_63671 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_63659) : done.call(null,inst_63659));
var inst_63672 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_63670,inst_63671);
var ___$1 = (function (){var statearr_63719 = state_63698;
(statearr_63719[(4)] = cljs.core.rest((state_63698[(4)])));

return statearr_63719;
})();
var state_63698__$1 = state_63698;
var statearr_63720_64657 = state_63698__$1;
(statearr_63720_64657[(2)] = inst_63672);

(statearr_63720_64657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63699 === (5))){
var inst_63682 = (state_63698[(2)]);
var state_63698__$1 = (function (){var statearr_63721 = state_63698;
(statearr_63721[(13)] = inst_63682);

return statearr_63721;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63698__$1,(13),dchan);
} else {
if((state_val_63699 === (14))){
var inst_63687 = cljs.core.async.close_BANG_(out);
var state_63698__$1 = state_63698;
var statearr_63722_64658 = state_63698__$1;
(statearr_63722_64658[(2)] = inst_63687);

(statearr_63722_64658[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63699 === (16))){
var inst_63694 = (state_63698[(2)]);
var state_63698__$1 = state_63698;
var statearr_63723_64659 = state_63698__$1;
(statearr_63723_64659[(2)] = inst_63694);

(statearr_63723_64659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63699 === (10))){
var inst_63659 = (state_63698[(7)]);
var inst_63675 = (state_63698[(2)]);
var inst_63676 = (inst_63659 + (1));
var inst_63659__$1 = inst_63676;
var state_63698__$1 = (function (){var statearr_63724 = state_63698;
(statearr_63724[(7)] = inst_63659__$1);

(statearr_63724[(14)] = inst_63675);

return statearr_63724;
})();
var statearr_63725_64660 = state_63698__$1;
(statearr_63725_64660[(2)] = null);

(statearr_63725_64660[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63699 === (8))){
var inst_63680 = (state_63698[(2)]);
var state_63698__$1 = state_63698;
var statearr_63726_64661 = state_63698__$1;
(statearr_63726_64661[(2)] = inst_63680);

(statearr_63726_64661[(1)] = (5));


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
var cljs$core$async$state_machine__62613__auto__ = null;
var cljs$core$async$state_machine__62613__auto____0 = (function (){
var statearr_63727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63727[(0)] = cljs$core$async$state_machine__62613__auto__);

(statearr_63727[(1)] = (1));

return statearr_63727;
});
var cljs$core$async$state_machine__62613__auto____1 = (function (state_63698){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_63698);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e63728){var ex__62616__auto__ = e63728;
var statearr_63729_64663 = state_63698;
(statearr_63729_64663[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_63698[(4)]))){
var statearr_63730_64664 = state_63698;
(statearr_63730_64664[(1)] = cljs.core.first((state_63698[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64665 = state_63698;
state_63698 = G__64665;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs$core$async$state_machine__62613__auto__ = function(state_63698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62613__auto____1.call(this,state_63698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62613__auto____0;
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62613__auto____1;
return cljs$core$async$state_machine__62613__auto__;
})()
})();
var state__62650__auto__ = (function (){var statearr_63731 = f__62649__auto__();
(statearr_63731[(6)] = c__62648__auto___64644);

return statearr_63731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
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
var G__63734 = arguments.length;
switch (G__63734) {
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
var c__62648__auto___64668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = (function (state_63766){
var state_val_63767 = (state_63766[(1)]);
if((state_val_63767 === (7))){
var inst_63746 = (state_63766[(7)]);
var inst_63745 = (state_63766[(8)]);
var inst_63745__$1 = (state_63766[(2)]);
var inst_63746__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63745__$1,(0),null);
var inst_63747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63745__$1,(1),null);
var inst_63748 = (inst_63746__$1 == null);
var state_63766__$1 = (function (){var statearr_63768 = state_63766;
(statearr_63768[(7)] = inst_63746__$1);

(statearr_63768[(9)] = inst_63747);

(statearr_63768[(8)] = inst_63745__$1);

return statearr_63768;
})();
if(cljs.core.truth_(inst_63748)){
var statearr_63769_64672 = state_63766__$1;
(statearr_63769_64672[(1)] = (8));

} else {
var statearr_63770_64673 = state_63766__$1;
(statearr_63770_64673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63767 === (1))){
var inst_63735 = cljs.core.vec(chs);
var inst_63736 = inst_63735;
var state_63766__$1 = (function (){var statearr_63771 = state_63766;
(statearr_63771[(10)] = inst_63736);

return statearr_63771;
})();
var statearr_63772_64674 = state_63766__$1;
(statearr_63772_64674[(2)] = null);

(statearr_63772_64674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63767 === (4))){
var inst_63736 = (state_63766[(10)]);
var state_63766__$1 = state_63766;
return cljs.core.async.ioc_alts_BANG_(state_63766__$1,(7),inst_63736);
} else {
if((state_val_63767 === (6))){
var inst_63762 = (state_63766[(2)]);
var state_63766__$1 = state_63766;
var statearr_63773_64675 = state_63766__$1;
(statearr_63773_64675[(2)] = inst_63762);

(statearr_63773_64675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63767 === (3))){
var inst_63764 = (state_63766[(2)]);
var state_63766__$1 = state_63766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63766__$1,inst_63764);
} else {
if((state_val_63767 === (2))){
var inst_63736 = (state_63766[(10)]);
var inst_63738 = cljs.core.count(inst_63736);
var inst_63739 = (inst_63738 > (0));
var state_63766__$1 = state_63766;
if(cljs.core.truth_(inst_63739)){
var statearr_63775_64677 = state_63766__$1;
(statearr_63775_64677[(1)] = (4));

} else {
var statearr_63776_64678 = state_63766__$1;
(statearr_63776_64678[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63767 === (11))){
var inst_63736 = (state_63766[(10)]);
var inst_63755 = (state_63766[(2)]);
var tmp63774 = inst_63736;
var inst_63736__$1 = tmp63774;
var state_63766__$1 = (function (){var statearr_63777 = state_63766;
(statearr_63777[(10)] = inst_63736__$1);

(statearr_63777[(11)] = inst_63755);

return statearr_63777;
})();
var statearr_63778_64682 = state_63766__$1;
(statearr_63778_64682[(2)] = null);

(statearr_63778_64682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63767 === (9))){
var inst_63746 = (state_63766[(7)]);
var state_63766__$1 = state_63766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63766__$1,(11),out,inst_63746);
} else {
if((state_val_63767 === (5))){
var inst_63760 = cljs.core.async.close_BANG_(out);
var state_63766__$1 = state_63766;
var statearr_63779_64683 = state_63766__$1;
(statearr_63779_64683[(2)] = inst_63760);

(statearr_63779_64683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63767 === (10))){
var inst_63758 = (state_63766[(2)]);
var state_63766__$1 = state_63766;
var statearr_63780_64684 = state_63766__$1;
(statearr_63780_64684[(2)] = inst_63758);

(statearr_63780_64684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63767 === (8))){
var inst_63746 = (state_63766[(7)]);
var inst_63736 = (state_63766[(10)]);
var inst_63747 = (state_63766[(9)]);
var inst_63745 = (state_63766[(8)]);
var inst_63750 = (function (){var cs = inst_63736;
var vec__63741 = inst_63745;
var v = inst_63746;
var c = inst_63747;
return (function (p1__63732_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__63732_SHARP_);
});
})();
var inst_63751 = cljs.core.filterv(inst_63750,inst_63736);
var inst_63736__$1 = inst_63751;
var state_63766__$1 = (function (){var statearr_63781 = state_63766;
(statearr_63781[(10)] = inst_63736__$1);

return statearr_63781;
})();
var statearr_63782_64685 = state_63766__$1;
(statearr_63782_64685[(2)] = null);

(statearr_63782_64685[(1)] = (2));


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
var cljs$core$async$state_machine__62613__auto__ = null;
var cljs$core$async$state_machine__62613__auto____0 = (function (){
var statearr_63783 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63783[(0)] = cljs$core$async$state_machine__62613__auto__);

(statearr_63783[(1)] = (1));

return statearr_63783;
});
var cljs$core$async$state_machine__62613__auto____1 = (function (state_63766){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_63766);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e63784){var ex__62616__auto__ = e63784;
var statearr_63785_64686 = state_63766;
(statearr_63785_64686[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_63766[(4)]))){
var statearr_63786_64687 = state_63766;
(statearr_63786_64687[(1)] = cljs.core.first((state_63766[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64688 = state_63766;
state_63766 = G__64688;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs$core$async$state_machine__62613__auto__ = function(state_63766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62613__auto____1.call(this,state_63766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62613__auto____0;
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62613__auto____1;
return cljs$core$async$state_machine__62613__auto__;
})()
})();
var state__62650__auto__ = (function (){var statearr_63787 = f__62649__auto__();
(statearr_63787[(6)] = c__62648__auto___64668);

return statearr_63787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
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
var G__63789 = arguments.length;
switch (G__63789) {
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
var c__62648__auto___64690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = (function (state_63813){
var state_val_63814 = (state_63813[(1)]);
if((state_val_63814 === (7))){
var inst_63795 = (state_63813[(7)]);
var inst_63795__$1 = (state_63813[(2)]);
var inst_63796 = (inst_63795__$1 == null);
var inst_63797 = cljs.core.not(inst_63796);
var state_63813__$1 = (function (){var statearr_63815 = state_63813;
(statearr_63815[(7)] = inst_63795__$1);

return statearr_63815;
})();
if(inst_63797){
var statearr_63816_64691 = state_63813__$1;
(statearr_63816_64691[(1)] = (8));

} else {
var statearr_63817_64692 = state_63813__$1;
(statearr_63817_64692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63814 === (1))){
var inst_63790 = (0);
var state_63813__$1 = (function (){var statearr_63818 = state_63813;
(statearr_63818[(8)] = inst_63790);

return statearr_63818;
})();
var statearr_63819_64693 = state_63813__$1;
(statearr_63819_64693[(2)] = null);

(statearr_63819_64693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63814 === (4))){
var state_63813__$1 = state_63813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63813__$1,(7),ch);
} else {
if((state_val_63814 === (6))){
var inst_63808 = (state_63813[(2)]);
var state_63813__$1 = state_63813;
var statearr_63820_64694 = state_63813__$1;
(statearr_63820_64694[(2)] = inst_63808);

(statearr_63820_64694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63814 === (3))){
var inst_63810 = (state_63813[(2)]);
var inst_63811 = cljs.core.async.close_BANG_(out);
var state_63813__$1 = (function (){var statearr_63821 = state_63813;
(statearr_63821[(9)] = inst_63810);

return statearr_63821;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63813__$1,inst_63811);
} else {
if((state_val_63814 === (2))){
var inst_63790 = (state_63813[(8)]);
var inst_63792 = (inst_63790 < n);
var state_63813__$1 = state_63813;
if(cljs.core.truth_(inst_63792)){
var statearr_63822_64695 = state_63813__$1;
(statearr_63822_64695[(1)] = (4));

} else {
var statearr_63823_64696 = state_63813__$1;
(statearr_63823_64696[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63814 === (11))){
var inst_63790 = (state_63813[(8)]);
var inst_63800 = (state_63813[(2)]);
var inst_63801 = (inst_63790 + (1));
var inst_63790__$1 = inst_63801;
var state_63813__$1 = (function (){var statearr_63824 = state_63813;
(statearr_63824[(8)] = inst_63790__$1);

(statearr_63824[(10)] = inst_63800);

return statearr_63824;
})();
var statearr_63825_64697 = state_63813__$1;
(statearr_63825_64697[(2)] = null);

(statearr_63825_64697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63814 === (9))){
var state_63813__$1 = state_63813;
var statearr_63826_64698 = state_63813__$1;
(statearr_63826_64698[(2)] = null);

(statearr_63826_64698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63814 === (5))){
var state_63813__$1 = state_63813;
var statearr_63827_64699 = state_63813__$1;
(statearr_63827_64699[(2)] = null);

(statearr_63827_64699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63814 === (10))){
var inst_63805 = (state_63813[(2)]);
var state_63813__$1 = state_63813;
var statearr_63828_64700 = state_63813__$1;
(statearr_63828_64700[(2)] = inst_63805);

(statearr_63828_64700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63814 === (8))){
var inst_63795 = (state_63813[(7)]);
var state_63813__$1 = state_63813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63813__$1,(11),out,inst_63795);
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
var cljs$core$async$state_machine__62613__auto__ = null;
var cljs$core$async$state_machine__62613__auto____0 = (function (){
var statearr_63829 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63829[(0)] = cljs$core$async$state_machine__62613__auto__);

(statearr_63829[(1)] = (1));

return statearr_63829;
});
var cljs$core$async$state_machine__62613__auto____1 = (function (state_63813){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_63813);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e63830){var ex__62616__auto__ = e63830;
var statearr_63831_64701 = state_63813;
(statearr_63831_64701[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_63813[(4)]))){
var statearr_63832_64702 = state_63813;
(statearr_63832_64702[(1)] = cljs.core.first((state_63813[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64703 = state_63813;
state_63813 = G__64703;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs$core$async$state_machine__62613__auto__ = function(state_63813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62613__auto____1.call(this,state_63813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62613__auto____0;
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62613__auto____1;
return cljs$core$async$state_machine__62613__auto__;
})()
})();
var state__62650__auto__ = (function (){var statearr_63833 = f__62649__auto__();
(statearr_63833[(6)] = c__62648__auto___64690);

return statearr_63833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63835 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63835 = (function (f,ch,meta63836){
this.f = f;
this.ch = ch;
this.meta63836 = meta63836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63837,meta63836__$1){
var self__ = this;
var _63837__$1 = this;
return (new cljs.core.async.t_cljs$core$async63835(self__.f,self__.ch,meta63836__$1));
}));

(cljs.core.async.t_cljs$core$async63835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63837){
var self__ = this;
var _63837__$1 = this;
return self__.meta63836;
}));

(cljs.core.async.t_cljs$core$async63835.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63835.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63835.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63835.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63835.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63838 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63838 = (function (f,ch,meta63836,_,fn1,meta63839){
this.f = f;
this.ch = ch;
this.meta63836 = meta63836;
this._ = _;
this.fn1 = fn1;
this.meta63839 = meta63839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63840,meta63839__$1){
var self__ = this;
var _63840__$1 = this;
return (new cljs.core.async.t_cljs$core$async63838(self__.f,self__.ch,self__.meta63836,self__._,self__.fn1,meta63839__$1));
}));

(cljs.core.async.t_cljs$core$async63838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63840){
var self__ = this;
var _63840__$1 = this;
return self__.meta63839;
}));

(cljs.core.async.t_cljs$core$async63838.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async63838.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async63838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__63834_SHARP_){
var G__63841 = (((p1__63834_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__63834_SHARP_) : self__.f.call(null,p1__63834_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__63841) : f1.call(null,G__63841));
});
}));

(cljs.core.async.t_cljs$core$async63838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63836","meta63836",488393727,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async63835","cljs.core.async/t_cljs$core$async63835",-1380614862,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta63839","meta63839",-312998865,null)], null);
}));

(cljs.core.async.t_cljs$core$async63838.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63838");

(cljs.core.async.t_cljs$core$async63838.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63838");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63838.
 */
cljs.core.async.__GT_t_cljs$core$async63838 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async63838(f__$1,ch__$1,meta63836__$1,___$2,fn1__$1,meta63839){
return (new cljs.core.async.t_cljs$core$async63838(f__$1,ch__$1,meta63836__$1,___$2,fn1__$1,meta63839));
});

}

return (new cljs.core.async.t_cljs$core$async63838(self__.f,self__.ch,self__.meta63836,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__63842 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__63842) : self__.f.call(null,G__63842));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async63835.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63835.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async63835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63836","meta63836",488393727,null)], null);
}));

(cljs.core.async.t_cljs$core$async63835.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63835");

(cljs.core.async.t_cljs$core$async63835.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63835");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63835.
 */
cljs.core.async.__GT_t_cljs$core$async63835 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async63835(f__$1,ch__$1,meta63836){
return (new cljs.core.async.t_cljs$core$async63835(f__$1,ch__$1,meta63836));
});

}

return (new cljs.core.async.t_cljs$core$async63835(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63843 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63843 = (function (f,ch,meta63844){
this.f = f;
this.ch = ch;
this.meta63844 = meta63844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63845,meta63844__$1){
var self__ = this;
var _63845__$1 = this;
return (new cljs.core.async.t_cljs$core$async63843(self__.f,self__.ch,meta63844__$1));
}));

(cljs.core.async.t_cljs$core$async63843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63845){
var self__ = this;
var _63845__$1 = this;
return self__.meta63844;
}));

(cljs.core.async.t_cljs$core$async63843.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63843.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63843.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63843.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async63843.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63843.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async63843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63844","meta63844",-1150530587,null)], null);
}));

(cljs.core.async.t_cljs$core$async63843.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63843");

(cljs.core.async.t_cljs$core$async63843.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63843");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63843.
 */
cljs.core.async.__GT_t_cljs$core$async63843 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async63843(f__$1,ch__$1,meta63844){
return (new cljs.core.async.t_cljs$core$async63843(f__$1,ch__$1,meta63844));
});

}

return (new cljs.core.async.t_cljs$core$async63843(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
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
cljs.core.async.t_cljs$core$async63846 = (function (p,ch,meta63847){
this.p = p;
this.ch = ch;
this.meta63847 = meta63847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63848,meta63847__$1){
var self__ = this;
var _63848__$1 = this;
return (new cljs.core.async.t_cljs$core$async63846(self__.p,self__.ch,meta63847__$1));
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
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async63846.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63846.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async63846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63847","meta63847",1937482351,null)], null);
}));

(cljs.core.async.t_cljs$core$async63846.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63846");

(cljs.core.async.t_cljs$core$async63846.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63846");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63846.
 */
cljs.core.async.__GT_t_cljs$core$async63846 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async63846(p__$1,ch__$1,meta63847){
return (new cljs.core.async.t_cljs$core$async63846(p__$1,ch__$1,meta63847));
});

}

return (new cljs.core.async.t_cljs$core$async63846(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__63850 = arguments.length;
switch (G__63850) {
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
var c__62648__auto___64705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = (function (state_63871){
var state_val_63872 = (state_63871[(1)]);
if((state_val_63872 === (7))){
var inst_63867 = (state_63871[(2)]);
var state_63871__$1 = state_63871;
var statearr_63873_64706 = state_63871__$1;
(statearr_63873_64706[(2)] = inst_63867);

(statearr_63873_64706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63872 === (1))){
var state_63871__$1 = state_63871;
var statearr_63874_64707 = state_63871__$1;
(statearr_63874_64707[(2)] = null);

(statearr_63874_64707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63872 === (4))){
var inst_63853 = (state_63871[(7)]);
var inst_63853__$1 = (state_63871[(2)]);
var inst_63854 = (inst_63853__$1 == null);
var state_63871__$1 = (function (){var statearr_63875 = state_63871;
(statearr_63875[(7)] = inst_63853__$1);

return statearr_63875;
})();
if(cljs.core.truth_(inst_63854)){
var statearr_63876_64708 = state_63871__$1;
(statearr_63876_64708[(1)] = (5));

} else {
var statearr_63877_64709 = state_63871__$1;
(statearr_63877_64709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63872 === (6))){
var inst_63853 = (state_63871[(7)]);
var inst_63858 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_63853) : p.call(null,inst_63853));
var state_63871__$1 = state_63871;
if(cljs.core.truth_(inst_63858)){
var statearr_63878_64710 = state_63871__$1;
(statearr_63878_64710[(1)] = (8));

} else {
var statearr_63879_64711 = state_63871__$1;
(statearr_63879_64711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63872 === (3))){
var inst_63869 = (state_63871[(2)]);
var state_63871__$1 = state_63871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63871__$1,inst_63869);
} else {
if((state_val_63872 === (2))){
var state_63871__$1 = state_63871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63871__$1,(4),ch);
} else {
if((state_val_63872 === (11))){
var inst_63861 = (state_63871[(2)]);
var state_63871__$1 = state_63871;
var statearr_63880_64712 = state_63871__$1;
(statearr_63880_64712[(2)] = inst_63861);

(statearr_63880_64712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63872 === (9))){
var state_63871__$1 = state_63871;
var statearr_63881_64713 = state_63871__$1;
(statearr_63881_64713[(2)] = null);

(statearr_63881_64713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63872 === (5))){
var inst_63856 = cljs.core.async.close_BANG_(out);
var state_63871__$1 = state_63871;
var statearr_63882_64714 = state_63871__$1;
(statearr_63882_64714[(2)] = inst_63856);

(statearr_63882_64714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63872 === (10))){
var inst_63864 = (state_63871[(2)]);
var state_63871__$1 = (function (){var statearr_63883 = state_63871;
(statearr_63883[(8)] = inst_63864);

return statearr_63883;
})();
var statearr_63884_64715 = state_63871__$1;
(statearr_63884_64715[(2)] = null);

(statearr_63884_64715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63872 === (8))){
var inst_63853 = (state_63871[(7)]);
var state_63871__$1 = state_63871;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63871__$1,(11),out,inst_63853);
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
var cljs$core$async$state_machine__62613__auto__ = null;
var cljs$core$async$state_machine__62613__auto____0 = (function (){
var statearr_63885 = [null,null,null,null,null,null,null,null,null];
(statearr_63885[(0)] = cljs$core$async$state_machine__62613__auto__);

(statearr_63885[(1)] = (1));

return statearr_63885;
});
var cljs$core$async$state_machine__62613__auto____1 = (function (state_63871){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_63871);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e63886){var ex__62616__auto__ = e63886;
var statearr_63887_64716 = state_63871;
(statearr_63887_64716[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_63871[(4)]))){
var statearr_63888_64717 = state_63871;
(statearr_63888_64717[(1)] = cljs.core.first((state_63871[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64718 = state_63871;
state_63871 = G__64718;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs$core$async$state_machine__62613__auto__ = function(state_63871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62613__auto____1.call(this,state_63871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62613__auto____0;
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62613__auto____1;
return cljs$core$async$state_machine__62613__auto__;
})()
})();
var state__62650__auto__ = (function (){var statearr_63889 = f__62649__auto__();
(statearr_63889[(6)] = c__62648__auto___64705);

return statearr_63889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__63891 = arguments.length;
switch (G__63891) {
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
var c__62648__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = (function (state_63953){
var state_val_63954 = (state_63953[(1)]);
if((state_val_63954 === (7))){
var inst_63949 = (state_63953[(2)]);
var state_63953__$1 = state_63953;
var statearr_63955_64720 = state_63953__$1;
(statearr_63955_64720[(2)] = inst_63949);

(statearr_63955_64720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63954 === (20))){
var inst_63919 = (state_63953[(7)]);
var inst_63930 = (state_63953[(2)]);
var inst_63931 = cljs.core.next(inst_63919);
var inst_63905 = inst_63931;
var inst_63906 = null;
var inst_63907 = (0);
var inst_63908 = (0);
var state_63953__$1 = (function (){var statearr_63956 = state_63953;
(statearr_63956[(8)] = inst_63905);

(statearr_63956[(9)] = inst_63906);

(statearr_63956[(10)] = inst_63908);

(statearr_63956[(11)] = inst_63930);

(statearr_63956[(12)] = inst_63907);

return statearr_63956;
})();
var statearr_63957_64721 = state_63953__$1;
(statearr_63957_64721[(2)] = null);

(statearr_63957_64721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63954 === (1))){
var state_63953__$1 = state_63953;
var statearr_63958_64722 = state_63953__$1;
(statearr_63958_64722[(2)] = null);

(statearr_63958_64722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63954 === (4))){
var inst_63894 = (state_63953[(13)]);
var inst_63894__$1 = (state_63953[(2)]);
var inst_63895 = (inst_63894__$1 == null);
var state_63953__$1 = (function (){var statearr_63959 = state_63953;
(statearr_63959[(13)] = inst_63894__$1);

return statearr_63959;
})();
if(cljs.core.truth_(inst_63895)){
var statearr_63960_64723 = state_63953__$1;
(statearr_63960_64723[(1)] = (5));

} else {
var statearr_63961_64724 = state_63953__$1;
(statearr_63961_64724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63954 === (15))){
var state_63953__$1 = state_63953;
var statearr_63965_64726 = state_63953__$1;
(statearr_63965_64726[(2)] = null);

(statearr_63965_64726[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63954 === (21))){
var state_63953__$1 = state_63953;
var statearr_63966_64728 = state_63953__$1;
(statearr_63966_64728[(2)] = null);

(statearr_63966_64728[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63954 === (13))){
var inst_63905 = (state_63953[(8)]);
var inst_63906 = (state_63953[(9)]);
var inst_63908 = (state_63953[(10)]);
var inst_63907 = (state_63953[(12)]);
var inst_63915 = (state_63953[(2)]);
var inst_63916 = (inst_63908 + (1));
var tmp63962 = inst_63905;
var tmp63963 = inst_63906;
var tmp63964 = inst_63907;
var inst_63905__$1 = tmp63962;
var inst_63906__$1 = tmp63963;
var inst_63907__$1 = tmp63964;
var inst_63908__$1 = inst_63916;
var state_63953__$1 = (function (){var statearr_63967 = state_63953;
(statearr_63967[(8)] = inst_63905__$1);

(statearr_63967[(9)] = inst_63906__$1);

(statearr_63967[(10)] = inst_63908__$1);

(statearr_63967[(12)] = inst_63907__$1);

(statearr_63967[(14)] = inst_63915);

return statearr_63967;
})();
var statearr_63968_64729 = state_63953__$1;
(statearr_63968_64729[(2)] = null);

(statearr_63968_64729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63954 === (22))){
var state_63953__$1 = state_63953;
var statearr_63969_64730 = state_63953__$1;
(statearr_63969_64730[(2)] = null);

(statearr_63969_64730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63954 === (6))){
var inst_63894 = (state_63953[(13)]);
var inst_63903 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_63894) : f.call(null,inst_63894));
var inst_63904 = cljs.core.seq(inst_63903);
var inst_63905 = inst_63904;
var inst_63906 = null;
var inst_63907 = (0);
var inst_63908 = (0);
var state_63953__$1 = (function (){var statearr_63970 = state_63953;
(statearr_63970[(8)] = inst_63905);

(statearr_63970[(9)] = inst_63906);

(statearr_63970[(10)] = inst_63908);

(statearr_63970[(12)] = inst_63907);

return statearr_63970;
})();
var statearr_63971_64731 = state_63953__$1;
(statearr_63971_64731[(2)] = null);

(statearr_63971_64731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63954 === (17))){
var inst_63919 = (state_63953[(7)]);
var inst_63923 = cljs.core.chunk_first(inst_63919);
var inst_63924 = cljs.core.chunk_rest(inst_63919);
var inst_63925 = cljs.core.count(inst_63923);
var inst_63905 = inst_63924;
var inst_63906 = inst_63923;
var inst_63907 = inst_63925;
var inst_63908 = (0);
var state_63953__$1 = (function (){var statearr_63972 = state_63953;
(statearr_63972[(8)] = inst_63905);

(statearr_63972[(9)] = inst_63906);

(statearr_63972[(10)] = inst_63908);

(statearr_63972[(12)] = inst_63907);

return statearr_63972;
})();
var statearr_63973_64732 = state_63953__$1;
(statearr_63973_64732[(2)] = null);

(statearr_63973_64732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63954 === (3))){
var inst_63951 = (state_63953[(2)]);
var state_63953__$1 = state_63953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63953__$1,inst_63951);
} else {
if((state_val_63954 === (12))){
var inst_63939 = (state_63953[(2)]);
var state_63953__$1 = state_63953;
var statearr_63974_64737 = state_63953__$1;
(statearr_63974_64737[(2)] = inst_63939);

(statearr_63974_64737[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63954 === (2))){
var state_63953__$1 = state_63953;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63953__$1,(4),in$);
} else {
if((state_val_63954 === (23))){
var inst_63947 = (state_63953[(2)]);
var state_63953__$1 = state_63953;
var statearr_63975_64742 = state_63953__$1;
(statearr_63975_64742[(2)] = inst_63947);

(statearr_63975_64742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63954 === (19))){
var inst_63934 = (state_63953[(2)]);
var state_63953__$1 = state_63953;
var statearr_63976_64743 = state_63953__$1;
(statearr_63976_64743[(2)] = inst_63934);

(statearr_63976_64743[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63954 === (11))){
var inst_63905 = (state_63953[(8)]);
var inst_63919 = (state_63953[(7)]);
var inst_63919__$1 = cljs.core.seq(inst_63905);
var state_63953__$1 = (function (){var statearr_63977 = state_63953;
(statearr_63977[(7)] = inst_63919__$1);

return statearr_63977;
})();
if(inst_63919__$1){
var statearr_63978_64744 = state_63953__$1;
(statearr_63978_64744[(1)] = (14));

} else {
var statearr_63979_64745 = state_63953__$1;
(statearr_63979_64745[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63954 === (9))){
var inst_63941 = (state_63953[(2)]);
var inst_63942 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_63953__$1 = (function (){var statearr_63980 = state_63953;
(statearr_63980[(15)] = inst_63941);

return statearr_63980;
})();
if(cljs.core.truth_(inst_63942)){
var statearr_63981_64746 = state_63953__$1;
(statearr_63981_64746[(1)] = (21));

} else {
var statearr_63982_64747 = state_63953__$1;
(statearr_63982_64747[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63954 === (5))){
var inst_63897 = cljs.core.async.close_BANG_(out);
var state_63953__$1 = state_63953;
var statearr_63983_64748 = state_63953__$1;
(statearr_63983_64748[(2)] = inst_63897);

(statearr_63983_64748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63954 === (14))){
var inst_63919 = (state_63953[(7)]);
var inst_63921 = cljs.core.chunked_seq_QMARK_(inst_63919);
var state_63953__$1 = state_63953;
if(inst_63921){
var statearr_63984_64749 = state_63953__$1;
(statearr_63984_64749[(1)] = (17));

} else {
var statearr_63985_64750 = state_63953__$1;
(statearr_63985_64750[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63954 === (16))){
var inst_63937 = (state_63953[(2)]);
var state_63953__$1 = state_63953;
var statearr_63986_64751 = state_63953__$1;
(statearr_63986_64751[(2)] = inst_63937);

(statearr_63986_64751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63954 === (10))){
var inst_63906 = (state_63953[(9)]);
var inst_63908 = (state_63953[(10)]);
var inst_63913 = cljs.core._nth(inst_63906,inst_63908);
var state_63953__$1 = state_63953;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63953__$1,(13),out,inst_63913);
} else {
if((state_val_63954 === (18))){
var inst_63919 = (state_63953[(7)]);
var inst_63928 = cljs.core.first(inst_63919);
var state_63953__$1 = state_63953;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63953__$1,(20),out,inst_63928);
} else {
if((state_val_63954 === (8))){
var inst_63908 = (state_63953[(10)]);
var inst_63907 = (state_63953[(12)]);
var inst_63910 = (inst_63908 < inst_63907);
var inst_63911 = inst_63910;
var state_63953__$1 = state_63953;
if(cljs.core.truth_(inst_63911)){
var statearr_63987_64752 = state_63953__$1;
(statearr_63987_64752[(1)] = (10));

} else {
var statearr_63988_64753 = state_63953__$1;
(statearr_63988_64753[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__62613__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__62613__auto____0 = (function (){
var statearr_63989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63989[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__62613__auto__);

(statearr_63989[(1)] = (1));

return statearr_63989;
});
var cljs$core$async$mapcat_STAR__$_state_machine__62613__auto____1 = (function (state_63953){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_63953);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e63990){var ex__62616__auto__ = e63990;
var statearr_63991_64755 = state_63953;
(statearr_63991_64755[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_63953[(4)]))){
var statearr_63992_64756 = state_63953;
(statearr_63992_64756[(1)] = cljs.core.first((state_63953[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64757 = state_63953;
state_63953 = G__64757;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__62613__auto__ = function(state_63953){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__62613__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__62613__auto____1.call(this,state_63953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__62613__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__62613__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__62613__auto__;
})()
})();
var state__62650__auto__ = (function (){var statearr_63993 = f__62649__auto__();
(statearr_63993[(6)] = c__62648__auto__);

return statearr_63993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
}));

return c__62648__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__63995 = arguments.length;
switch (G__63995) {
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
var G__63997 = arguments.length;
switch (G__63997) {
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
var G__63999 = arguments.length;
switch (G__63999) {
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
var c__62648__auto___64761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = (function (state_64023){
var state_val_64024 = (state_64023[(1)]);
if((state_val_64024 === (7))){
var inst_64018 = (state_64023[(2)]);
var state_64023__$1 = state_64023;
var statearr_64025_64762 = state_64023__$1;
(statearr_64025_64762[(2)] = inst_64018);

(statearr_64025_64762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64024 === (1))){
var inst_64000 = null;
var state_64023__$1 = (function (){var statearr_64026 = state_64023;
(statearr_64026[(7)] = inst_64000);

return statearr_64026;
})();
var statearr_64027_64765 = state_64023__$1;
(statearr_64027_64765[(2)] = null);

(statearr_64027_64765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64024 === (4))){
var inst_64003 = (state_64023[(8)]);
var inst_64003__$1 = (state_64023[(2)]);
var inst_64004 = (inst_64003__$1 == null);
var inst_64005 = cljs.core.not(inst_64004);
var state_64023__$1 = (function (){var statearr_64028 = state_64023;
(statearr_64028[(8)] = inst_64003__$1);

return statearr_64028;
})();
if(inst_64005){
var statearr_64029_64766 = state_64023__$1;
(statearr_64029_64766[(1)] = (5));

} else {
var statearr_64030_64767 = state_64023__$1;
(statearr_64030_64767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64024 === (6))){
var state_64023__$1 = state_64023;
var statearr_64031_64768 = state_64023__$1;
(statearr_64031_64768[(2)] = null);

(statearr_64031_64768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64024 === (3))){
var inst_64020 = (state_64023[(2)]);
var inst_64021 = cljs.core.async.close_BANG_(out);
var state_64023__$1 = (function (){var statearr_64032 = state_64023;
(statearr_64032[(9)] = inst_64020);

return statearr_64032;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64023__$1,inst_64021);
} else {
if((state_val_64024 === (2))){
var state_64023__$1 = state_64023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64023__$1,(4),ch);
} else {
if((state_val_64024 === (11))){
var inst_64003 = (state_64023[(8)]);
var inst_64012 = (state_64023[(2)]);
var inst_64000 = inst_64003;
var state_64023__$1 = (function (){var statearr_64033 = state_64023;
(statearr_64033[(7)] = inst_64000);

(statearr_64033[(10)] = inst_64012);

return statearr_64033;
})();
var statearr_64034_64769 = state_64023__$1;
(statearr_64034_64769[(2)] = null);

(statearr_64034_64769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64024 === (9))){
var inst_64003 = (state_64023[(8)]);
var state_64023__$1 = state_64023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64023__$1,(11),out,inst_64003);
} else {
if((state_val_64024 === (5))){
var inst_64000 = (state_64023[(7)]);
var inst_64003 = (state_64023[(8)]);
var inst_64007 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64003,inst_64000);
var state_64023__$1 = state_64023;
if(inst_64007){
var statearr_64036_64770 = state_64023__$1;
(statearr_64036_64770[(1)] = (8));

} else {
var statearr_64037_64771 = state_64023__$1;
(statearr_64037_64771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64024 === (10))){
var inst_64015 = (state_64023[(2)]);
var state_64023__$1 = state_64023;
var statearr_64038_64772 = state_64023__$1;
(statearr_64038_64772[(2)] = inst_64015);

(statearr_64038_64772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64024 === (8))){
var inst_64000 = (state_64023[(7)]);
var tmp64035 = inst_64000;
var inst_64000__$1 = tmp64035;
var state_64023__$1 = (function (){var statearr_64039 = state_64023;
(statearr_64039[(7)] = inst_64000__$1);

return statearr_64039;
})();
var statearr_64040_64773 = state_64023__$1;
(statearr_64040_64773[(2)] = null);

(statearr_64040_64773[(1)] = (2));


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
var cljs$core$async$state_machine__62613__auto__ = null;
var cljs$core$async$state_machine__62613__auto____0 = (function (){
var statearr_64041 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64041[(0)] = cljs$core$async$state_machine__62613__auto__);

(statearr_64041[(1)] = (1));

return statearr_64041;
});
var cljs$core$async$state_machine__62613__auto____1 = (function (state_64023){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_64023);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e64042){var ex__62616__auto__ = e64042;
var statearr_64043_64774 = state_64023;
(statearr_64043_64774[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_64023[(4)]))){
var statearr_64044_64775 = state_64023;
(statearr_64044_64775[(1)] = cljs.core.first((state_64023[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64776 = state_64023;
state_64023 = G__64776;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs$core$async$state_machine__62613__auto__ = function(state_64023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62613__auto____1.call(this,state_64023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62613__auto____0;
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62613__auto____1;
return cljs$core$async$state_machine__62613__auto__;
})()
})();
var state__62650__auto__ = (function (){var statearr_64045 = f__62649__auto__();
(statearr_64045[(6)] = c__62648__auto___64761);

return statearr_64045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__64047 = arguments.length;
switch (G__64047) {
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
var c__62648__auto___64778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = (function (state_64085){
var state_val_64086 = (state_64085[(1)]);
if((state_val_64086 === (7))){
var inst_64081 = (state_64085[(2)]);
var state_64085__$1 = state_64085;
var statearr_64087_64779 = state_64085__$1;
(statearr_64087_64779[(2)] = inst_64081);

(statearr_64087_64779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64086 === (1))){
var inst_64048 = (new Array(n));
var inst_64049 = inst_64048;
var inst_64050 = (0);
var state_64085__$1 = (function (){var statearr_64088 = state_64085;
(statearr_64088[(7)] = inst_64049);

(statearr_64088[(8)] = inst_64050);

return statearr_64088;
})();
var statearr_64089_64780 = state_64085__$1;
(statearr_64089_64780[(2)] = null);

(statearr_64089_64780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64086 === (4))){
var inst_64053 = (state_64085[(9)]);
var inst_64053__$1 = (state_64085[(2)]);
var inst_64054 = (inst_64053__$1 == null);
var inst_64055 = cljs.core.not(inst_64054);
var state_64085__$1 = (function (){var statearr_64090 = state_64085;
(statearr_64090[(9)] = inst_64053__$1);

return statearr_64090;
})();
if(inst_64055){
var statearr_64091_64781 = state_64085__$1;
(statearr_64091_64781[(1)] = (5));

} else {
var statearr_64092_64782 = state_64085__$1;
(statearr_64092_64782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64086 === (15))){
var inst_64075 = (state_64085[(2)]);
var state_64085__$1 = state_64085;
var statearr_64093_64783 = state_64085__$1;
(statearr_64093_64783[(2)] = inst_64075);

(statearr_64093_64783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64086 === (13))){
var state_64085__$1 = state_64085;
var statearr_64094_64784 = state_64085__$1;
(statearr_64094_64784[(2)] = null);

(statearr_64094_64784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64086 === (6))){
var inst_64050 = (state_64085[(8)]);
var inst_64071 = (inst_64050 > (0));
var state_64085__$1 = state_64085;
if(cljs.core.truth_(inst_64071)){
var statearr_64095_64785 = state_64085__$1;
(statearr_64095_64785[(1)] = (12));

} else {
var statearr_64096_64786 = state_64085__$1;
(statearr_64096_64786[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64086 === (3))){
var inst_64083 = (state_64085[(2)]);
var state_64085__$1 = state_64085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64085__$1,inst_64083);
} else {
if((state_val_64086 === (12))){
var inst_64049 = (state_64085[(7)]);
var inst_64073 = cljs.core.vec(inst_64049);
var state_64085__$1 = state_64085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64085__$1,(15),out,inst_64073);
} else {
if((state_val_64086 === (2))){
var state_64085__$1 = state_64085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64085__$1,(4),ch);
} else {
if((state_val_64086 === (11))){
var inst_64065 = (state_64085[(2)]);
var inst_64066 = (new Array(n));
var inst_64049 = inst_64066;
var inst_64050 = (0);
var state_64085__$1 = (function (){var statearr_64097 = state_64085;
(statearr_64097[(10)] = inst_64065);

(statearr_64097[(7)] = inst_64049);

(statearr_64097[(8)] = inst_64050);

return statearr_64097;
})();
var statearr_64098_64787 = state_64085__$1;
(statearr_64098_64787[(2)] = null);

(statearr_64098_64787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64086 === (9))){
var inst_64049 = (state_64085[(7)]);
var inst_64063 = cljs.core.vec(inst_64049);
var state_64085__$1 = state_64085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64085__$1,(11),out,inst_64063);
} else {
if((state_val_64086 === (5))){
var inst_64058 = (state_64085[(11)]);
var inst_64053 = (state_64085[(9)]);
var inst_64049 = (state_64085[(7)]);
var inst_64050 = (state_64085[(8)]);
var inst_64057 = (inst_64049[inst_64050] = inst_64053);
var inst_64058__$1 = (inst_64050 + (1));
var inst_64059 = (inst_64058__$1 < n);
var state_64085__$1 = (function (){var statearr_64099 = state_64085;
(statearr_64099[(11)] = inst_64058__$1);

(statearr_64099[(12)] = inst_64057);

return statearr_64099;
})();
if(cljs.core.truth_(inst_64059)){
var statearr_64100_64788 = state_64085__$1;
(statearr_64100_64788[(1)] = (8));

} else {
var statearr_64101_64789 = state_64085__$1;
(statearr_64101_64789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64086 === (14))){
var inst_64078 = (state_64085[(2)]);
var inst_64079 = cljs.core.async.close_BANG_(out);
var state_64085__$1 = (function (){var statearr_64103 = state_64085;
(statearr_64103[(13)] = inst_64078);

return statearr_64103;
})();
var statearr_64104_64790 = state_64085__$1;
(statearr_64104_64790[(2)] = inst_64079);

(statearr_64104_64790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64086 === (10))){
var inst_64069 = (state_64085[(2)]);
var state_64085__$1 = state_64085;
var statearr_64105_64791 = state_64085__$1;
(statearr_64105_64791[(2)] = inst_64069);

(statearr_64105_64791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64086 === (8))){
var inst_64058 = (state_64085[(11)]);
var inst_64049 = (state_64085[(7)]);
var tmp64102 = inst_64049;
var inst_64049__$1 = tmp64102;
var inst_64050 = inst_64058;
var state_64085__$1 = (function (){var statearr_64106 = state_64085;
(statearr_64106[(7)] = inst_64049__$1);

(statearr_64106[(8)] = inst_64050);

return statearr_64106;
})();
var statearr_64107_64792 = state_64085__$1;
(statearr_64107_64792[(2)] = null);

(statearr_64107_64792[(1)] = (2));


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
var cljs$core$async$state_machine__62613__auto__ = null;
var cljs$core$async$state_machine__62613__auto____0 = (function (){
var statearr_64108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64108[(0)] = cljs$core$async$state_machine__62613__auto__);

(statearr_64108[(1)] = (1));

return statearr_64108;
});
var cljs$core$async$state_machine__62613__auto____1 = (function (state_64085){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_64085);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e64109){var ex__62616__auto__ = e64109;
var statearr_64110_64793 = state_64085;
(statearr_64110_64793[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_64085[(4)]))){
var statearr_64111_64794 = state_64085;
(statearr_64111_64794[(1)] = cljs.core.first((state_64085[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64795 = state_64085;
state_64085 = G__64795;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs$core$async$state_machine__62613__auto__ = function(state_64085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62613__auto____1.call(this,state_64085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62613__auto____0;
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62613__auto____1;
return cljs$core$async$state_machine__62613__auto__;
})()
})();
var state__62650__auto__ = (function (){var statearr_64112 = f__62649__auto__();
(statearr_64112[(6)] = c__62648__auto___64778);

return statearr_64112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__64114 = arguments.length;
switch (G__64114) {
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
var c__62648__auto___64797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = (function (state_64156){
var state_val_64157 = (state_64156[(1)]);
if((state_val_64157 === (7))){
var inst_64152 = (state_64156[(2)]);
var state_64156__$1 = state_64156;
var statearr_64158_64798 = state_64156__$1;
(statearr_64158_64798[(2)] = inst_64152);

(statearr_64158_64798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64157 === (1))){
var inst_64115 = [];
var inst_64116 = inst_64115;
var inst_64117 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_64156__$1 = (function (){var statearr_64159 = state_64156;
(statearr_64159[(7)] = inst_64116);

(statearr_64159[(8)] = inst_64117);

return statearr_64159;
})();
var statearr_64160_64799 = state_64156__$1;
(statearr_64160_64799[(2)] = null);

(statearr_64160_64799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64157 === (4))){
var inst_64120 = (state_64156[(9)]);
var inst_64120__$1 = (state_64156[(2)]);
var inst_64121 = (inst_64120__$1 == null);
var inst_64122 = cljs.core.not(inst_64121);
var state_64156__$1 = (function (){var statearr_64161 = state_64156;
(statearr_64161[(9)] = inst_64120__$1);

return statearr_64161;
})();
if(inst_64122){
var statearr_64162_64800 = state_64156__$1;
(statearr_64162_64800[(1)] = (5));

} else {
var statearr_64163_64801 = state_64156__$1;
(statearr_64163_64801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64157 === (15))){
var inst_64146 = (state_64156[(2)]);
var state_64156__$1 = state_64156;
var statearr_64164_64802 = state_64156__$1;
(statearr_64164_64802[(2)] = inst_64146);

(statearr_64164_64802[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64157 === (13))){
var state_64156__$1 = state_64156;
var statearr_64165_64803 = state_64156__$1;
(statearr_64165_64803[(2)] = null);

(statearr_64165_64803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64157 === (6))){
var inst_64116 = (state_64156[(7)]);
var inst_64141 = inst_64116.length;
var inst_64142 = (inst_64141 > (0));
var state_64156__$1 = state_64156;
if(cljs.core.truth_(inst_64142)){
var statearr_64166_64804 = state_64156__$1;
(statearr_64166_64804[(1)] = (12));

} else {
var statearr_64167_64805 = state_64156__$1;
(statearr_64167_64805[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64157 === (3))){
var inst_64154 = (state_64156[(2)]);
var state_64156__$1 = state_64156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64156__$1,inst_64154);
} else {
if((state_val_64157 === (12))){
var inst_64116 = (state_64156[(7)]);
var inst_64144 = cljs.core.vec(inst_64116);
var state_64156__$1 = state_64156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64156__$1,(15),out,inst_64144);
} else {
if((state_val_64157 === (2))){
var state_64156__$1 = state_64156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64156__$1,(4),ch);
} else {
if((state_val_64157 === (11))){
var inst_64120 = (state_64156[(9)]);
var inst_64124 = (state_64156[(10)]);
var inst_64134 = (state_64156[(2)]);
var inst_64135 = [];
var inst_64136 = inst_64135.push(inst_64120);
var inst_64116 = inst_64135;
var inst_64117 = inst_64124;
var state_64156__$1 = (function (){var statearr_64168 = state_64156;
(statearr_64168[(7)] = inst_64116);

(statearr_64168[(8)] = inst_64117);

(statearr_64168[(11)] = inst_64134);

(statearr_64168[(12)] = inst_64136);

return statearr_64168;
})();
var statearr_64169_64806 = state_64156__$1;
(statearr_64169_64806[(2)] = null);

(statearr_64169_64806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64157 === (9))){
var inst_64116 = (state_64156[(7)]);
var inst_64132 = cljs.core.vec(inst_64116);
var state_64156__$1 = state_64156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64156__$1,(11),out,inst_64132);
} else {
if((state_val_64157 === (5))){
var inst_64117 = (state_64156[(8)]);
var inst_64120 = (state_64156[(9)]);
var inst_64124 = (state_64156[(10)]);
var inst_64124__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_64120) : f.call(null,inst_64120));
var inst_64125 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64124__$1,inst_64117);
var inst_64126 = cljs.core.keyword_identical_QMARK_(inst_64117,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_64127 = ((inst_64125) || (inst_64126));
var state_64156__$1 = (function (){var statearr_64170 = state_64156;
(statearr_64170[(10)] = inst_64124__$1);

return statearr_64170;
})();
if(cljs.core.truth_(inst_64127)){
var statearr_64171_64807 = state_64156__$1;
(statearr_64171_64807[(1)] = (8));

} else {
var statearr_64172_64808 = state_64156__$1;
(statearr_64172_64808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64157 === (14))){
var inst_64149 = (state_64156[(2)]);
var inst_64150 = cljs.core.async.close_BANG_(out);
var state_64156__$1 = (function (){var statearr_64174 = state_64156;
(statearr_64174[(13)] = inst_64149);

return statearr_64174;
})();
var statearr_64175_64809 = state_64156__$1;
(statearr_64175_64809[(2)] = inst_64150);

(statearr_64175_64809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64157 === (10))){
var inst_64139 = (state_64156[(2)]);
var state_64156__$1 = state_64156;
var statearr_64176_64810 = state_64156__$1;
(statearr_64176_64810[(2)] = inst_64139);

(statearr_64176_64810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64157 === (8))){
var inst_64116 = (state_64156[(7)]);
var inst_64120 = (state_64156[(9)]);
var inst_64124 = (state_64156[(10)]);
var inst_64129 = inst_64116.push(inst_64120);
var tmp64173 = inst_64116;
var inst_64116__$1 = tmp64173;
var inst_64117 = inst_64124;
var state_64156__$1 = (function (){var statearr_64177 = state_64156;
(statearr_64177[(7)] = inst_64116__$1);

(statearr_64177[(8)] = inst_64117);

(statearr_64177[(14)] = inst_64129);

return statearr_64177;
})();
var statearr_64178_64811 = state_64156__$1;
(statearr_64178_64811[(2)] = null);

(statearr_64178_64811[(1)] = (2));


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
var cljs$core$async$state_machine__62613__auto__ = null;
var cljs$core$async$state_machine__62613__auto____0 = (function (){
var statearr_64179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64179[(0)] = cljs$core$async$state_machine__62613__auto__);

(statearr_64179[(1)] = (1));

return statearr_64179;
});
var cljs$core$async$state_machine__62613__auto____1 = (function (state_64156){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_64156);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e64180){var ex__62616__auto__ = e64180;
var statearr_64181_64812 = state_64156;
(statearr_64181_64812[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_64156[(4)]))){
var statearr_64182_64813 = state_64156;
(statearr_64182_64813[(1)] = cljs.core.first((state_64156[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64814 = state_64156;
state_64156 = G__64814;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs$core$async$state_machine__62613__auto__ = function(state_64156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62613__auto____1.call(this,state_64156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62613__auto____0;
cljs$core$async$state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62613__auto____1;
return cljs$core$async$state_machine__62613__auto__;
})()
})();
var state__62650__auto__ = (function (){var statearr_64183 = f__62649__auto__();
(statearr_64183[(6)] = c__62648__auto___64797);

return statearr_64183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
