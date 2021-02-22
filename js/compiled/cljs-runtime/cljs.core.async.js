goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__62712 = arguments.length;
switch (G__62712) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62713 = (function (f,blockable,meta62714){
this.f = f;
this.blockable = blockable;
this.meta62714 = meta62714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62715,meta62714__$1){
var self__ = this;
var _62715__$1 = this;
return (new cljs.core.async.t_cljs$core$async62713(self__.f,self__.blockable,meta62714__$1));
}));

(cljs.core.async.t_cljs$core$async62713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62715){
var self__ = this;
var _62715__$1 = this;
return self__.meta62714;
}));

(cljs.core.async.t_cljs$core$async62713.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62713.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async62713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async62713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta62714","meta62714",-864272950,null)], null);
}));

(cljs.core.async.t_cljs$core$async62713.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62713");

(cljs.core.async.t_cljs$core$async62713.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async62713");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62713.
 */
cljs.core.async.__GT_t_cljs$core$async62713 = (function cljs$core$async$__GT_t_cljs$core$async62713(f__$1,blockable__$1,meta62714){
return (new cljs.core.async.t_cljs$core$async62713(f__$1,blockable__$1,meta62714));
});

}

return (new cljs.core.async.t_cljs$core$async62713(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__62726 = arguments.length;
switch (G__62726) {
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
var G__62729 = arguments.length;
switch (G__62729) {
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
var G__62734 = arguments.length;
switch (G__62734) {
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
var val_64204 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_64204) : fn1.call(null,val_64204));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_64204) : fn1.call(null,val_64204));
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
var G__62736 = arguments.length;
switch (G__62736) {
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
var n__4613__auto___64213 = n;
var x_64215 = (0);
while(true){
if((x_64215 < n__4613__auto___64213)){
(a[x_64215] = x_64215);

var G__64217 = (x_64215 + (1));
x_64215 = G__64217;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62737 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62737 = (function (flag,meta62738){
this.flag = flag;
this.meta62738 = meta62738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62739,meta62738__$1){
var self__ = this;
var _62739__$1 = this;
return (new cljs.core.async.t_cljs$core$async62737(self__.flag,meta62738__$1));
}));

(cljs.core.async.t_cljs$core$async62737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62739){
var self__ = this;
var _62739__$1 = this;
return self__.meta62738;
}));

(cljs.core.async.t_cljs$core$async62737.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62737.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async62737.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62737.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async62737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta62738","meta62738",1560245695,null)], null);
}));

(cljs.core.async.t_cljs$core$async62737.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62737");

(cljs.core.async.t_cljs$core$async62737.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async62737");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62737.
 */
cljs.core.async.__GT_t_cljs$core$async62737 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async62737(flag__$1,meta62738){
return (new cljs.core.async.t_cljs$core$async62737(flag__$1,meta62738));
});

}

return (new cljs.core.async.t_cljs$core$async62737(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62740 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62740 = (function (flag,cb,meta62741){
this.flag = flag;
this.cb = cb;
this.meta62741 = meta62741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62742,meta62741__$1){
var self__ = this;
var _62742__$1 = this;
return (new cljs.core.async.t_cljs$core$async62740(self__.flag,self__.cb,meta62741__$1));
}));

(cljs.core.async.t_cljs$core$async62740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62742){
var self__ = this;
var _62742__$1 = this;
return self__.meta62741;
}));

(cljs.core.async.t_cljs$core$async62740.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62740.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async62740.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62740.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async62740.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta62741","meta62741",-568722581,null)], null);
}));

(cljs.core.async.t_cljs$core$async62740.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62740.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62740");

(cljs.core.async.t_cljs$core$async62740.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async62740");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62740.
 */
cljs.core.async.__GT_t_cljs$core$async62740 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async62740(flag__$1,cb__$1,meta62741){
return (new cljs.core.async.t_cljs$core$async62740(flag__$1,cb__$1,meta62741));
});

}

return (new cljs.core.async.t_cljs$core$async62740(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__62743_SHARP_){
var G__62745 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62743_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__62745) : fret.call(null,G__62745));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__62744_SHARP_){
var G__62746 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62744_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__62746) : fret.call(null,G__62746));
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
var G__64222 = (i + (1));
i = G__64222;
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
var len__4736__auto___64223 = arguments.length;
var i__4737__auto___64224 = (0);
while(true){
if((i__4737__auto___64224 < len__4736__auto___64223)){
args__4742__auto__.push((arguments[i__4737__auto___64224]));

var G__64225 = (i__4737__auto___64224 + (1));
i__4737__auto___64224 = G__64225;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__62749){
var map__62750 = p__62749;
var map__62750__$1 = (((((!((map__62750 == null))))?(((((map__62750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62750):map__62750);
var opts = map__62750__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq62747){
var G__62748 = cljs.core.first(seq62747);
var seq62747__$1 = cljs.core.next(seq62747);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62748,seq62747__$1);
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
var G__62753 = arguments.length;
switch (G__62753) {
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
var c__62654__auto___64227 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = (function (state_62777){
var state_val_62778 = (state_62777[(1)]);
if((state_val_62778 === (7))){
var inst_62773 = (state_62777[(2)]);
var state_62777__$1 = state_62777;
var statearr_62779_64229 = state_62777__$1;
(statearr_62779_64229[(2)] = inst_62773);

(statearr_62779_64229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62778 === (1))){
var state_62777__$1 = state_62777;
var statearr_62780_64230 = state_62777__$1;
(statearr_62780_64230[(2)] = null);

(statearr_62780_64230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62778 === (4))){
var inst_62756 = (state_62777[(7)]);
var inst_62756__$1 = (state_62777[(2)]);
var inst_62757 = (inst_62756__$1 == null);
var state_62777__$1 = (function (){var statearr_62781 = state_62777;
(statearr_62781[(7)] = inst_62756__$1);

return statearr_62781;
})();
if(cljs.core.truth_(inst_62757)){
var statearr_62782_64231 = state_62777__$1;
(statearr_62782_64231[(1)] = (5));

} else {
var statearr_62783_64232 = state_62777__$1;
(statearr_62783_64232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62778 === (13))){
var state_62777__$1 = state_62777;
var statearr_62784_64233 = state_62777__$1;
(statearr_62784_64233[(2)] = null);

(statearr_62784_64233[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62778 === (6))){
var inst_62756 = (state_62777[(7)]);
var state_62777__$1 = state_62777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62777__$1,(11),to,inst_62756);
} else {
if((state_val_62778 === (3))){
var inst_62775 = (state_62777[(2)]);
var state_62777__$1 = state_62777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62777__$1,inst_62775);
} else {
if((state_val_62778 === (12))){
var state_62777__$1 = state_62777;
var statearr_62785_64238 = state_62777__$1;
(statearr_62785_64238[(2)] = null);

(statearr_62785_64238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62778 === (2))){
var state_62777__$1 = state_62777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62777__$1,(4),from);
} else {
if((state_val_62778 === (11))){
var inst_62766 = (state_62777[(2)]);
var state_62777__$1 = state_62777;
if(cljs.core.truth_(inst_62766)){
var statearr_62786_64239 = state_62777__$1;
(statearr_62786_64239[(1)] = (12));

} else {
var statearr_62787_64240 = state_62777__$1;
(statearr_62787_64240[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62778 === (9))){
var state_62777__$1 = state_62777;
var statearr_62788_64241 = state_62777__$1;
(statearr_62788_64241[(2)] = null);

(statearr_62788_64241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62778 === (5))){
var state_62777__$1 = state_62777;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62789_64243 = state_62777__$1;
(statearr_62789_64243[(1)] = (8));

} else {
var statearr_62790_64244 = state_62777__$1;
(statearr_62790_64244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62778 === (14))){
var inst_62771 = (state_62777[(2)]);
var state_62777__$1 = state_62777;
var statearr_62791_64247 = state_62777__$1;
(statearr_62791_64247[(2)] = inst_62771);

(statearr_62791_64247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62778 === (10))){
var inst_62763 = (state_62777[(2)]);
var state_62777__$1 = state_62777;
var statearr_62792_64249 = state_62777__$1;
(statearr_62792_64249[(2)] = inst_62763);

(statearr_62792_64249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62778 === (8))){
var inst_62760 = cljs.core.async.close_BANG_(to);
var state_62777__$1 = state_62777;
var statearr_62793_64251 = state_62777__$1;
(statearr_62793_64251[(2)] = inst_62760);

(statearr_62793_64251[(1)] = (10));


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
var cljs$core$async$state_machine__62619__auto__ = null;
var cljs$core$async$state_machine__62619__auto____0 = (function (){
var statearr_62794 = [null,null,null,null,null,null,null,null];
(statearr_62794[(0)] = cljs$core$async$state_machine__62619__auto__);

(statearr_62794[(1)] = (1));

return statearr_62794;
});
var cljs$core$async$state_machine__62619__auto____1 = (function (state_62777){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_62777);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e62795){var ex__62622__auto__ = e62795;
var statearr_62796_64253 = state_62777;
(statearr_62796_64253[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_62777[(4)]))){
var statearr_62797_64256 = state_62777;
(statearr_62797_64256[(1)] = cljs.core.first((state_62777[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64257 = state_62777;
state_62777 = G__64257;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs$core$async$state_machine__62619__auto__ = function(state_62777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62619__auto____1.call(this,state_62777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62619__auto____0;
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62619__auto____1;
return cljs$core$async$state_machine__62619__auto__;
})()
})();
var state__62656__auto__ = (function (){var statearr_62798 = f__62655__auto__();
(statearr_62798[(6)] = c__62654__auto___64227);

return statearr_62798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
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
var process = (function (p__62799){
var vec__62800 = p__62799;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62800,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62800,(1),null);
var job = vec__62800;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__62654__auto___64259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = (function (state_62807){
var state_val_62808 = (state_62807[(1)]);
if((state_val_62808 === (1))){
var state_62807__$1 = state_62807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62807__$1,(2),res,v);
} else {
if((state_val_62808 === (2))){
var inst_62804 = (state_62807[(2)]);
var inst_62805 = cljs.core.async.close_BANG_(res);
var state_62807__$1 = (function (){var statearr_62809 = state_62807;
(statearr_62809[(7)] = inst_62804);

return statearr_62809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62807__$1,inst_62805);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____0 = (function (){
var statearr_62810 = [null,null,null,null,null,null,null,null];
(statearr_62810[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__);

(statearr_62810[(1)] = (1));

return statearr_62810;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____1 = (function (state_62807){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_62807);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e62811){var ex__62622__auto__ = e62811;
var statearr_62812_64260 = state_62807;
(statearr_62812_64260[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_62807[(4)]))){
var statearr_62813_64261 = state_62807;
(statearr_62813_64261[(1)] = cljs.core.first((state_62807[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64264 = state_62807;
state_62807 = G__64264;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__ = function(state_62807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____1.call(this,state_62807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__;
})()
})();
var state__62656__auto__ = (function (){var statearr_62814 = f__62655__auto__();
(statearr_62814[(6)] = c__62654__auto___64259);

return statearr_62814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__62815){
var vec__62816 = p__62815;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62816,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62816,(1),null);
var job = vec__62816;
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
var n__4613__auto___64266 = n;
var __64267 = (0);
while(true){
if((__64267 < n__4613__auto___64266)){
var G__62819_64268 = type;
var G__62819_64269__$1 = (((G__62819_64268 instanceof cljs.core.Keyword))?G__62819_64268.fqn:null);
switch (G__62819_64269__$1) {
case "compute":
var c__62654__auto___64271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__64267,c__62654__auto___64271,G__62819_64268,G__62819_64269__$1,n__4613__auto___64266,jobs,results,process,async){
return (function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = ((function (__64267,c__62654__auto___64271,G__62819_64268,G__62819_64269__$1,n__4613__auto___64266,jobs,results,process,async){
return (function (state_62832){
var state_val_62833 = (state_62832[(1)]);
if((state_val_62833 === (1))){
var state_62832__$1 = state_62832;
var statearr_62834_64272 = state_62832__$1;
(statearr_62834_64272[(2)] = null);

(statearr_62834_64272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62833 === (2))){
var state_62832__$1 = state_62832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62832__$1,(4),jobs);
} else {
if((state_val_62833 === (3))){
var inst_62830 = (state_62832[(2)]);
var state_62832__$1 = state_62832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62832__$1,inst_62830);
} else {
if((state_val_62833 === (4))){
var inst_62822 = (state_62832[(2)]);
var inst_62823 = process(inst_62822);
var state_62832__$1 = state_62832;
if(cljs.core.truth_(inst_62823)){
var statearr_62835_64273 = state_62832__$1;
(statearr_62835_64273[(1)] = (5));

} else {
var statearr_62836_64274 = state_62832__$1;
(statearr_62836_64274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62833 === (5))){
var state_62832__$1 = state_62832;
var statearr_62837_64275 = state_62832__$1;
(statearr_62837_64275[(2)] = null);

(statearr_62837_64275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62833 === (6))){
var state_62832__$1 = state_62832;
var statearr_62838_64276 = state_62832__$1;
(statearr_62838_64276[(2)] = null);

(statearr_62838_64276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62833 === (7))){
var inst_62828 = (state_62832[(2)]);
var state_62832__$1 = state_62832;
var statearr_62839_64277 = state_62832__$1;
(statearr_62839_64277[(2)] = inst_62828);

(statearr_62839_64277[(1)] = (3));


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
});})(__64267,c__62654__auto___64271,G__62819_64268,G__62819_64269__$1,n__4613__auto___64266,jobs,results,process,async))
;
return ((function (__64267,switch__62618__auto__,c__62654__auto___64271,G__62819_64268,G__62819_64269__$1,n__4613__auto___64266,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____0 = (function (){
var statearr_62840 = [null,null,null,null,null,null,null];
(statearr_62840[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__);

(statearr_62840[(1)] = (1));

return statearr_62840;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____1 = (function (state_62832){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_62832);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e62841){var ex__62622__auto__ = e62841;
var statearr_62842_64278 = state_62832;
(statearr_62842_64278[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_62832[(4)]))){
var statearr_62843_64279 = state_62832;
(statearr_62843_64279[(1)] = cljs.core.first((state_62832[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64280 = state_62832;
state_62832 = G__64280;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__ = function(state_62832){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____1.call(this,state_62832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__;
})()
;})(__64267,switch__62618__auto__,c__62654__auto___64271,G__62819_64268,G__62819_64269__$1,n__4613__auto___64266,jobs,results,process,async))
})();
var state__62656__auto__ = (function (){var statearr_62844 = f__62655__auto__();
(statearr_62844[(6)] = c__62654__auto___64271);

return statearr_62844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
});})(__64267,c__62654__auto___64271,G__62819_64268,G__62819_64269__$1,n__4613__auto___64266,jobs,results,process,async))
);


break;
case "async":
var c__62654__auto___64281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__64267,c__62654__auto___64281,G__62819_64268,G__62819_64269__$1,n__4613__auto___64266,jobs,results,process,async){
return (function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = ((function (__64267,c__62654__auto___64281,G__62819_64268,G__62819_64269__$1,n__4613__auto___64266,jobs,results,process,async){
return (function (state_62857){
var state_val_62858 = (state_62857[(1)]);
if((state_val_62858 === (1))){
var state_62857__$1 = state_62857;
var statearr_62859_64282 = state_62857__$1;
(statearr_62859_64282[(2)] = null);

(statearr_62859_64282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62858 === (2))){
var state_62857__$1 = state_62857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62857__$1,(4),jobs);
} else {
if((state_val_62858 === (3))){
var inst_62855 = (state_62857[(2)]);
var state_62857__$1 = state_62857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62857__$1,inst_62855);
} else {
if((state_val_62858 === (4))){
var inst_62847 = (state_62857[(2)]);
var inst_62848 = async(inst_62847);
var state_62857__$1 = state_62857;
if(cljs.core.truth_(inst_62848)){
var statearr_62860_64283 = state_62857__$1;
(statearr_62860_64283[(1)] = (5));

} else {
var statearr_62861_64284 = state_62857__$1;
(statearr_62861_64284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62858 === (5))){
var state_62857__$1 = state_62857;
var statearr_62862_64285 = state_62857__$1;
(statearr_62862_64285[(2)] = null);

(statearr_62862_64285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62858 === (6))){
var state_62857__$1 = state_62857;
var statearr_62863_64290 = state_62857__$1;
(statearr_62863_64290[(2)] = null);

(statearr_62863_64290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62858 === (7))){
var inst_62853 = (state_62857[(2)]);
var state_62857__$1 = state_62857;
var statearr_62864_64295 = state_62857__$1;
(statearr_62864_64295[(2)] = inst_62853);

(statearr_62864_64295[(1)] = (3));


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
});})(__64267,c__62654__auto___64281,G__62819_64268,G__62819_64269__$1,n__4613__auto___64266,jobs,results,process,async))
;
return ((function (__64267,switch__62618__auto__,c__62654__auto___64281,G__62819_64268,G__62819_64269__$1,n__4613__auto___64266,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____0 = (function (){
var statearr_62865 = [null,null,null,null,null,null,null];
(statearr_62865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__);

(statearr_62865[(1)] = (1));

return statearr_62865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____1 = (function (state_62857){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_62857);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e62866){var ex__62622__auto__ = e62866;
var statearr_62867_64300 = state_62857;
(statearr_62867_64300[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_62857[(4)]))){
var statearr_62868_64301 = state_62857;
(statearr_62868_64301[(1)] = cljs.core.first((state_62857[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64302 = state_62857;
state_62857 = G__64302;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__ = function(state_62857){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____1.call(this,state_62857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__;
})()
;})(__64267,switch__62618__auto__,c__62654__auto___64281,G__62819_64268,G__62819_64269__$1,n__4613__auto___64266,jobs,results,process,async))
})();
var state__62656__auto__ = (function (){var statearr_62869 = f__62655__auto__();
(statearr_62869[(6)] = c__62654__auto___64281);

return statearr_62869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
});})(__64267,c__62654__auto___64281,G__62819_64268,G__62819_64269__$1,n__4613__auto___64266,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62819_64269__$1)].join('')));

}

var G__64304 = (__64267 + (1));
__64267 = G__64304;
continue;
} else {
}
break;
}

var c__62654__auto___64305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = (function (state_62891){
var state_val_62892 = (state_62891[(1)]);
if((state_val_62892 === (7))){
var inst_62887 = (state_62891[(2)]);
var state_62891__$1 = state_62891;
var statearr_62893_64307 = state_62891__$1;
(statearr_62893_64307[(2)] = inst_62887);

(statearr_62893_64307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62892 === (1))){
var state_62891__$1 = state_62891;
var statearr_62894_64308 = state_62891__$1;
(statearr_62894_64308[(2)] = null);

(statearr_62894_64308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62892 === (4))){
var inst_62872 = (state_62891[(7)]);
var inst_62872__$1 = (state_62891[(2)]);
var inst_62873 = (inst_62872__$1 == null);
var state_62891__$1 = (function (){var statearr_62895 = state_62891;
(statearr_62895[(7)] = inst_62872__$1);

return statearr_62895;
})();
if(cljs.core.truth_(inst_62873)){
var statearr_62896_64310 = state_62891__$1;
(statearr_62896_64310[(1)] = (5));

} else {
var statearr_62897_64312 = state_62891__$1;
(statearr_62897_64312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62892 === (6))){
var inst_62872 = (state_62891[(7)]);
var inst_62877 = (state_62891[(8)]);
var inst_62877__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_62878 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62879 = [inst_62872,inst_62877__$1];
var inst_62880 = (new cljs.core.PersistentVector(null,2,(5),inst_62878,inst_62879,null));
var state_62891__$1 = (function (){var statearr_62898 = state_62891;
(statearr_62898[(8)] = inst_62877__$1);

return statearr_62898;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62891__$1,(8),jobs,inst_62880);
} else {
if((state_val_62892 === (3))){
var inst_62889 = (state_62891[(2)]);
var state_62891__$1 = state_62891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62891__$1,inst_62889);
} else {
if((state_val_62892 === (2))){
var state_62891__$1 = state_62891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62891__$1,(4),from);
} else {
if((state_val_62892 === (9))){
var inst_62884 = (state_62891[(2)]);
var state_62891__$1 = (function (){var statearr_62899 = state_62891;
(statearr_62899[(9)] = inst_62884);

return statearr_62899;
})();
var statearr_62900_64314 = state_62891__$1;
(statearr_62900_64314[(2)] = null);

(statearr_62900_64314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62892 === (5))){
var inst_62875 = cljs.core.async.close_BANG_(jobs);
var state_62891__$1 = state_62891;
var statearr_62901_64315 = state_62891__$1;
(statearr_62901_64315[(2)] = inst_62875);

(statearr_62901_64315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62892 === (8))){
var inst_62877 = (state_62891[(8)]);
var inst_62882 = (state_62891[(2)]);
var state_62891__$1 = (function (){var statearr_62902 = state_62891;
(statearr_62902[(10)] = inst_62882);

return statearr_62902;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62891__$1,(9),results,inst_62877);
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
var cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____0 = (function (){
var statearr_62903 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62903[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__);

(statearr_62903[(1)] = (1));

return statearr_62903;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____1 = (function (state_62891){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_62891);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e62904){var ex__62622__auto__ = e62904;
var statearr_62905_64316 = state_62891;
(statearr_62905_64316[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_62891[(4)]))){
var statearr_62906_64317 = state_62891;
(statearr_62906_64317[(1)] = cljs.core.first((state_62891[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64318 = state_62891;
state_62891 = G__64318;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__ = function(state_62891){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____1.call(this,state_62891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__;
})()
})();
var state__62656__auto__ = (function (){var statearr_62907 = f__62655__auto__();
(statearr_62907[(6)] = c__62654__auto___64305);

return statearr_62907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
}));


var c__62654__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = (function (state_62945){
var state_val_62946 = (state_62945[(1)]);
if((state_val_62946 === (7))){
var inst_62941 = (state_62945[(2)]);
var state_62945__$1 = state_62945;
var statearr_62947_64319 = state_62945__$1;
(statearr_62947_64319[(2)] = inst_62941);

(statearr_62947_64319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62946 === (20))){
var state_62945__$1 = state_62945;
var statearr_62948_64320 = state_62945__$1;
(statearr_62948_64320[(2)] = null);

(statearr_62948_64320[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62946 === (1))){
var state_62945__$1 = state_62945;
var statearr_62949_64321 = state_62945__$1;
(statearr_62949_64321[(2)] = null);

(statearr_62949_64321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62946 === (4))){
var inst_62910 = (state_62945[(7)]);
var inst_62910__$1 = (state_62945[(2)]);
var inst_62911 = (inst_62910__$1 == null);
var state_62945__$1 = (function (){var statearr_62950 = state_62945;
(statearr_62950[(7)] = inst_62910__$1);

return statearr_62950;
})();
if(cljs.core.truth_(inst_62911)){
var statearr_62951_64322 = state_62945__$1;
(statearr_62951_64322[(1)] = (5));

} else {
var statearr_62952_64323 = state_62945__$1;
(statearr_62952_64323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62946 === (15))){
var inst_62923 = (state_62945[(8)]);
var state_62945__$1 = state_62945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62945__$1,(18),to,inst_62923);
} else {
if((state_val_62946 === (21))){
var inst_62936 = (state_62945[(2)]);
var state_62945__$1 = state_62945;
var statearr_62953_64324 = state_62945__$1;
(statearr_62953_64324[(2)] = inst_62936);

(statearr_62953_64324[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62946 === (13))){
var inst_62938 = (state_62945[(2)]);
var state_62945__$1 = (function (){var statearr_62954 = state_62945;
(statearr_62954[(9)] = inst_62938);

return statearr_62954;
})();
var statearr_62955_64325 = state_62945__$1;
(statearr_62955_64325[(2)] = null);

(statearr_62955_64325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62946 === (6))){
var inst_62910 = (state_62945[(7)]);
var state_62945__$1 = state_62945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62945__$1,(11),inst_62910);
} else {
if((state_val_62946 === (17))){
var inst_62931 = (state_62945[(2)]);
var state_62945__$1 = state_62945;
if(cljs.core.truth_(inst_62931)){
var statearr_62956_64326 = state_62945__$1;
(statearr_62956_64326[(1)] = (19));

} else {
var statearr_62957_64327 = state_62945__$1;
(statearr_62957_64327[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62946 === (3))){
var inst_62943 = (state_62945[(2)]);
var state_62945__$1 = state_62945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62945__$1,inst_62943);
} else {
if((state_val_62946 === (12))){
var inst_62920 = (state_62945[(10)]);
var state_62945__$1 = state_62945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62945__$1,(14),inst_62920);
} else {
if((state_val_62946 === (2))){
var state_62945__$1 = state_62945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62945__$1,(4),results);
} else {
if((state_val_62946 === (19))){
var state_62945__$1 = state_62945;
var statearr_62958_64328 = state_62945__$1;
(statearr_62958_64328[(2)] = null);

(statearr_62958_64328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62946 === (11))){
var inst_62920 = (state_62945[(2)]);
var state_62945__$1 = (function (){var statearr_62959 = state_62945;
(statearr_62959[(10)] = inst_62920);

return statearr_62959;
})();
var statearr_62960_64329 = state_62945__$1;
(statearr_62960_64329[(2)] = null);

(statearr_62960_64329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62946 === (9))){
var state_62945__$1 = state_62945;
var statearr_62961_64330 = state_62945__$1;
(statearr_62961_64330[(2)] = null);

(statearr_62961_64330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62946 === (5))){
var state_62945__$1 = state_62945;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62962_64331 = state_62945__$1;
(statearr_62962_64331[(1)] = (8));

} else {
var statearr_62963_64332 = state_62945__$1;
(statearr_62963_64332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62946 === (14))){
var inst_62923 = (state_62945[(8)]);
var inst_62923__$1 = (state_62945[(2)]);
var inst_62924 = (inst_62923__$1 == null);
var inst_62925 = cljs.core.not(inst_62924);
var state_62945__$1 = (function (){var statearr_62964 = state_62945;
(statearr_62964[(8)] = inst_62923__$1);

return statearr_62964;
})();
if(inst_62925){
var statearr_62965_64333 = state_62945__$1;
(statearr_62965_64333[(1)] = (15));

} else {
var statearr_62966_64334 = state_62945__$1;
(statearr_62966_64334[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62946 === (16))){
var state_62945__$1 = state_62945;
var statearr_62967_64335 = state_62945__$1;
(statearr_62967_64335[(2)] = false);

(statearr_62967_64335[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62946 === (10))){
var inst_62917 = (state_62945[(2)]);
var state_62945__$1 = state_62945;
var statearr_62968_64336 = state_62945__$1;
(statearr_62968_64336[(2)] = inst_62917);

(statearr_62968_64336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62946 === (18))){
var inst_62928 = (state_62945[(2)]);
var state_62945__$1 = state_62945;
var statearr_62969_64337 = state_62945__$1;
(statearr_62969_64337[(2)] = inst_62928);

(statearr_62969_64337[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62946 === (8))){
var inst_62914 = cljs.core.async.close_BANG_(to);
var state_62945__$1 = state_62945;
var statearr_62970_64338 = state_62945__$1;
(statearr_62970_64338[(2)] = inst_62914);

(statearr_62970_64338[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____0 = (function (){
var statearr_62971 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62971[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__);

(statearr_62971[(1)] = (1));

return statearr_62971;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____1 = (function (state_62945){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_62945);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e62972){var ex__62622__auto__ = e62972;
var statearr_62973_64339 = state_62945;
(statearr_62973_64339[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_62945[(4)]))){
var statearr_62974_64340 = state_62945;
(statearr_62974_64340[(1)] = cljs.core.first((state_62945[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64341 = state_62945;
state_62945 = G__64341;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__ = function(state_62945){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____1.call(this,state_62945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62619__auto__;
})()
})();
var state__62656__auto__ = (function (){var statearr_62975 = f__62655__auto__();
(statearr_62975[(6)] = c__62654__auto__);

return statearr_62975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
}));

return c__62654__auto__;
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
var G__62977 = arguments.length;
switch (G__62977) {
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
var G__62979 = arguments.length;
switch (G__62979) {
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
var G__62981 = arguments.length;
switch (G__62981) {
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
var c__62654__auto___64345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = (function (state_63007){
var state_val_63008 = (state_63007[(1)]);
if((state_val_63008 === (7))){
var inst_63003 = (state_63007[(2)]);
var state_63007__$1 = state_63007;
var statearr_63009_64346 = state_63007__$1;
(statearr_63009_64346[(2)] = inst_63003);

(statearr_63009_64346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63008 === (1))){
var state_63007__$1 = state_63007;
var statearr_63010_64347 = state_63007__$1;
(statearr_63010_64347[(2)] = null);

(statearr_63010_64347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63008 === (4))){
var inst_62984 = (state_63007[(7)]);
var inst_62984__$1 = (state_63007[(2)]);
var inst_62985 = (inst_62984__$1 == null);
var state_63007__$1 = (function (){var statearr_63011 = state_63007;
(statearr_63011[(7)] = inst_62984__$1);

return statearr_63011;
})();
if(cljs.core.truth_(inst_62985)){
var statearr_63012_64348 = state_63007__$1;
(statearr_63012_64348[(1)] = (5));

} else {
var statearr_63013_64349 = state_63007__$1;
(statearr_63013_64349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63008 === (13))){
var state_63007__$1 = state_63007;
var statearr_63014_64350 = state_63007__$1;
(statearr_63014_64350[(2)] = null);

(statearr_63014_64350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63008 === (6))){
var inst_62984 = (state_63007[(7)]);
var inst_62990 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_62984) : p.call(null,inst_62984));
var state_63007__$1 = state_63007;
if(cljs.core.truth_(inst_62990)){
var statearr_63015_64351 = state_63007__$1;
(statearr_63015_64351[(1)] = (9));

} else {
var statearr_63016_64352 = state_63007__$1;
(statearr_63016_64352[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63008 === (3))){
var inst_63005 = (state_63007[(2)]);
var state_63007__$1 = state_63007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63007__$1,inst_63005);
} else {
if((state_val_63008 === (12))){
var state_63007__$1 = state_63007;
var statearr_63017_64353 = state_63007__$1;
(statearr_63017_64353[(2)] = null);

(statearr_63017_64353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63008 === (2))){
var state_63007__$1 = state_63007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63007__$1,(4),ch);
} else {
if((state_val_63008 === (11))){
var inst_62984 = (state_63007[(7)]);
var inst_62994 = (state_63007[(2)]);
var state_63007__$1 = state_63007;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63007__$1,(8),inst_62994,inst_62984);
} else {
if((state_val_63008 === (9))){
var state_63007__$1 = state_63007;
var statearr_63018_64354 = state_63007__$1;
(statearr_63018_64354[(2)] = tc);

(statearr_63018_64354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63008 === (5))){
var inst_62987 = cljs.core.async.close_BANG_(tc);
var inst_62988 = cljs.core.async.close_BANG_(fc);
var state_63007__$1 = (function (){var statearr_63019 = state_63007;
(statearr_63019[(8)] = inst_62987);

return statearr_63019;
})();
var statearr_63020_64355 = state_63007__$1;
(statearr_63020_64355[(2)] = inst_62988);

(statearr_63020_64355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63008 === (14))){
var inst_63001 = (state_63007[(2)]);
var state_63007__$1 = state_63007;
var statearr_63021_64356 = state_63007__$1;
(statearr_63021_64356[(2)] = inst_63001);

(statearr_63021_64356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63008 === (10))){
var state_63007__$1 = state_63007;
var statearr_63022_64357 = state_63007__$1;
(statearr_63022_64357[(2)] = fc);

(statearr_63022_64357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63008 === (8))){
var inst_62996 = (state_63007[(2)]);
var state_63007__$1 = state_63007;
if(cljs.core.truth_(inst_62996)){
var statearr_63023_64358 = state_63007__$1;
(statearr_63023_64358[(1)] = (12));

} else {
var statearr_63024_64359 = state_63007__$1;
(statearr_63024_64359[(1)] = (13));

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
var cljs$core$async$state_machine__62619__auto__ = null;
var cljs$core$async$state_machine__62619__auto____0 = (function (){
var statearr_63025 = [null,null,null,null,null,null,null,null,null];
(statearr_63025[(0)] = cljs$core$async$state_machine__62619__auto__);

(statearr_63025[(1)] = (1));

return statearr_63025;
});
var cljs$core$async$state_machine__62619__auto____1 = (function (state_63007){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_63007);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e63026){var ex__62622__auto__ = e63026;
var statearr_63027_64360 = state_63007;
(statearr_63027_64360[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_63007[(4)]))){
var statearr_63028_64361 = state_63007;
(statearr_63028_64361[(1)] = cljs.core.first((state_63007[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64362 = state_63007;
state_63007 = G__64362;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs$core$async$state_machine__62619__auto__ = function(state_63007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62619__auto____1.call(this,state_63007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62619__auto____0;
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62619__auto____1;
return cljs$core$async$state_machine__62619__auto__;
})()
})();
var state__62656__auto__ = (function (){var statearr_63029 = f__62655__auto__();
(statearr_63029[(6)] = c__62654__auto___64345);

return statearr_63029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
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
var c__62654__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = (function (state_63051){
var state_val_63052 = (state_63051[(1)]);
if((state_val_63052 === (7))){
var inst_63047 = (state_63051[(2)]);
var state_63051__$1 = state_63051;
var statearr_63053_64363 = state_63051__$1;
(statearr_63053_64363[(2)] = inst_63047);

(statearr_63053_64363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63052 === (1))){
var inst_63030 = init;
var inst_63031 = inst_63030;
var state_63051__$1 = (function (){var statearr_63054 = state_63051;
(statearr_63054[(7)] = inst_63031);

return statearr_63054;
})();
var statearr_63055_64364 = state_63051__$1;
(statearr_63055_64364[(2)] = null);

(statearr_63055_64364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63052 === (4))){
var inst_63034 = (state_63051[(8)]);
var inst_63034__$1 = (state_63051[(2)]);
var inst_63035 = (inst_63034__$1 == null);
var state_63051__$1 = (function (){var statearr_63056 = state_63051;
(statearr_63056[(8)] = inst_63034__$1);

return statearr_63056;
})();
if(cljs.core.truth_(inst_63035)){
var statearr_63057_64365 = state_63051__$1;
(statearr_63057_64365[(1)] = (5));

} else {
var statearr_63058_64366 = state_63051__$1;
(statearr_63058_64366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63052 === (6))){
var inst_63038 = (state_63051[(9)]);
var inst_63034 = (state_63051[(8)]);
var inst_63031 = (state_63051[(7)]);
var inst_63038__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_63031,inst_63034) : f.call(null,inst_63031,inst_63034));
var inst_63039 = cljs.core.reduced_QMARK_(inst_63038__$1);
var state_63051__$1 = (function (){var statearr_63059 = state_63051;
(statearr_63059[(9)] = inst_63038__$1);

return statearr_63059;
})();
if(inst_63039){
var statearr_63060_64367 = state_63051__$1;
(statearr_63060_64367[(1)] = (8));

} else {
var statearr_63061_64368 = state_63051__$1;
(statearr_63061_64368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63052 === (3))){
var inst_63049 = (state_63051[(2)]);
var state_63051__$1 = state_63051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63051__$1,inst_63049);
} else {
if((state_val_63052 === (2))){
var state_63051__$1 = state_63051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63051__$1,(4),ch);
} else {
if((state_val_63052 === (9))){
var inst_63038 = (state_63051[(9)]);
var inst_63031 = inst_63038;
var state_63051__$1 = (function (){var statearr_63062 = state_63051;
(statearr_63062[(7)] = inst_63031);

return statearr_63062;
})();
var statearr_63063_64369 = state_63051__$1;
(statearr_63063_64369[(2)] = null);

(statearr_63063_64369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63052 === (5))){
var inst_63031 = (state_63051[(7)]);
var state_63051__$1 = state_63051;
var statearr_63064_64370 = state_63051__$1;
(statearr_63064_64370[(2)] = inst_63031);

(statearr_63064_64370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63052 === (10))){
var inst_63045 = (state_63051[(2)]);
var state_63051__$1 = state_63051;
var statearr_63065_64371 = state_63051__$1;
(statearr_63065_64371[(2)] = inst_63045);

(statearr_63065_64371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63052 === (8))){
var inst_63038 = (state_63051[(9)]);
var inst_63041 = cljs.core.deref(inst_63038);
var state_63051__$1 = state_63051;
var statearr_63066_64372 = state_63051__$1;
(statearr_63066_64372[(2)] = inst_63041);

(statearr_63066_64372[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__62619__auto__ = null;
var cljs$core$async$reduce_$_state_machine__62619__auto____0 = (function (){
var statearr_63067 = [null,null,null,null,null,null,null,null,null,null];
(statearr_63067[(0)] = cljs$core$async$reduce_$_state_machine__62619__auto__);

(statearr_63067[(1)] = (1));

return statearr_63067;
});
var cljs$core$async$reduce_$_state_machine__62619__auto____1 = (function (state_63051){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_63051);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e63068){var ex__62622__auto__ = e63068;
var statearr_63069_64373 = state_63051;
(statearr_63069_64373[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_63051[(4)]))){
var statearr_63070_64374 = state_63051;
(statearr_63070_64374[(1)] = cljs.core.first((state_63051[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64375 = state_63051;
state_63051 = G__64375;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__62619__auto__ = function(state_63051){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__62619__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__62619__auto____1.call(this,state_63051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__62619__auto____0;
cljs$core$async$reduce_$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__62619__auto____1;
return cljs$core$async$reduce_$_state_machine__62619__auto__;
})()
})();
var state__62656__auto__ = (function (){var statearr_63071 = f__62655__auto__();
(statearr_63071[(6)] = c__62654__auto__);

return statearr_63071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
}));

return c__62654__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__62654__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = (function (state_63077){
var state_val_63078 = (state_63077[(1)]);
if((state_val_63078 === (1))){
var inst_63072 = cljs.core.async.reduce(f__$1,init,ch);
var state_63077__$1 = state_63077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63077__$1,(2),inst_63072);
} else {
if((state_val_63078 === (2))){
var inst_63074 = (state_63077[(2)]);
var inst_63075 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_63074) : f__$1.call(null,inst_63074));
var state_63077__$1 = state_63077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63077__$1,inst_63075);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__62619__auto__ = null;
var cljs$core$async$transduce_$_state_machine__62619__auto____0 = (function (){
var statearr_63079 = [null,null,null,null,null,null,null];
(statearr_63079[(0)] = cljs$core$async$transduce_$_state_machine__62619__auto__);

(statearr_63079[(1)] = (1));

return statearr_63079;
});
var cljs$core$async$transduce_$_state_machine__62619__auto____1 = (function (state_63077){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_63077);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e63080){var ex__62622__auto__ = e63080;
var statearr_63081_64376 = state_63077;
(statearr_63081_64376[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_63077[(4)]))){
var statearr_63082_64377 = state_63077;
(statearr_63082_64377[(1)] = cljs.core.first((state_63077[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64378 = state_63077;
state_63077 = G__64378;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__62619__auto__ = function(state_63077){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__62619__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__62619__auto____1.call(this,state_63077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__62619__auto____0;
cljs$core$async$transduce_$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__62619__auto____1;
return cljs$core$async$transduce_$_state_machine__62619__auto__;
})()
})();
var state__62656__auto__ = (function (){var statearr_63083 = f__62655__auto__();
(statearr_63083[(6)] = c__62654__auto__);

return statearr_63083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
}));

return c__62654__auto__;
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
var G__63085 = arguments.length;
switch (G__63085) {
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
var c__62654__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = (function (state_63110){
var state_val_63111 = (state_63110[(1)]);
if((state_val_63111 === (7))){
var inst_63092 = (state_63110[(2)]);
var state_63110__$1 = state_63110;
var statearr_63112_64380 = state_63110__$1;
(statearr_63112_64380[(2)] = inst_63092);

(statearr_63112_64380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63111 === (1))){
var inst_63086 = cljs.core.seq(coll);
var inst_63087 = inst_63086;
var state_63110__$1 = (function (){var statearr_63113 = state_63110;
(statearr_63113[(7)] = inst_63087);

return statearr_63113;
})();
var statearr_63114_64381 = state_63110__$1;
(statearr_63114_64381[(2)] = null);

(statearr_63114_64381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63111 === (4))){
var inst_63087 = (state_63110[(7)]);
var inst_63090 = cljs.core.first(inst_63087);
var state_63110__$1 = state_63110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63110__$1,(7),ch,inst_63090);
} else {
if((state_val_63111 === (13))){
var inst_63104 = (state_63110[(2)]);
var state_63110__$1 = state_63110;
var statearr_63115_64382 = state_63110__$1;
(statearr_63115_64382[(2)] = inst_63104);

(statearr_63115_64382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63111 === (6))){
var inst_63095 = (state_63110[(2)]);
var state_63110__$1 = state_63110;
if(cljs.core.truth_(inst_63095)){
var statearr_63116_64383 = state_63110__$1;
(statearr_63116_64383[(1)] = (8));

} else {
var statearr_63117_64384 = state_63110__$1;
(statearr_63117_64384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63111 === (3))){
var inst_63108 = (state_63110[(2)]);
var state_63110__$1 = state_63110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63110__$1,inst_63108);
} else {
if((state_val_63111 === (12))){
var state_63110__$1 = state_63110;
var statearr_63118_64385 = state_63110__$1;
(statearr_63118_64385[(2)] = null);

(statearr_63118_64385[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63111 === (2))){
var inst_63087 = (state_63110[(7)]);
var state_63110__$1 = state_63110;
if(cljs.core.truth_(inst_63087)){
var statearr_63119_64386 = state_63110__$1;
(statearr_63119_64386[(1)] = (4));

} else {
var statearr_63120_64387 = state_63110__$1;
(statearr_63120_64387[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63111 === (11))){
var inst_63101 = cljs.core.async.close_BANG_(ch);
var state_63110__$1 = state_63110;
var statearr_63121_64388 = state_63110__$1;
(statearr_63121_64388[(2)] = inst_63101);

(statearr_63121_64388[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63111 === (9))){
var state_63110__$1 = state_63110;
if(cljs.core.truth_(close_QMARK_)){
var statearr_63122_64389 = state_63110__$1;
(statearr_63122_64389[(1)] = (11));

} else {
var statearr_63123_64390 = state_63110__$1;
(statearr_63123_64390[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63111 === (5))){
var inst_63087 = (state_63110[(7)]);
var state_63110__$1 = state_63110;
var statearr_63124_64391 = state_63110__$1;
(statearr_63124_64391[(2)] = inst_63087);

(statearr_63124_64391[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63111 === (10))){
var inst_63106 = (state_63110[(2)]);
var state_63110__$1 = state_63110;
var statearr_63125_64392 = state_63110__$1;
(statearr_63125_64392[(2)] = inst_63106);

(statearr_63125_64392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63111 === (8))){
var inst_63087 = (state_63110[(7)]);
var inst_63097 = cljs.core.next(inst_63087);
var inst_63087__$1 = inst_63097;
var state_63110__$1 = (function (){var statearr_63126 = state_63110;
(statearr_63126[(7)] = inst_63087__$1);

return statearr_63126;
})();
var statearr_63127_64393 = state_63110__$1;
(statearr_63127_64393[(2)] = null);

(statearr_63127_64393[(1)] = (2));


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
var cljs$core$async$state_machine__62619__auto__ = null;
var cljs$core$async$state_machine__62619__auto____0 = (function (){
var statearr_63128 = [null,null,null,null,null,null,null,null];
(statearr_63128[(0)] = cljs$core$async$state_machine__62619__auto__);

(statearr_63128[(1)] = (1));

return statearr_63128;
});
var cljs$core$async$state_machine__62619__auto____1 = (function (state_63110){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_63110);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e63129){var ex__62622__auto__ = e63129;
var statearr_63130_64394 = state_63110;
(statearr_63130_64394[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_63110[(4)]))){
var statearr_63131_64395 = state_63110;
(statearr_63131_64395[(1)] = cljs.core.first((state_63110[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64396 = state_63110;
state_63110 = G__64396;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs$core$async$state_machine__62619__auto__ = function(state_63110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62619__auto____1.call(this,state_63110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62619__auto____0;
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62619__auto____1;
return cljs$core$async$state_machine__62619__auto__;
})()
})();
var state__62656__auto__ = (function (){var statearr_63132 = f__62655__auto__();
(statearr_63132[(6)] = c__62654__auto__);

return statearr_63132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
}));

return c__62654__auto__;
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
var G__63134 = arguments.length;
switch (G__63134) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_64398 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_64398(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_64399 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_64399(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_64400 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_64400(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_64401 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_64401(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63135 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63135 = (function (ch,cs,meta63136){
this.ch = ch;
this.cs = cs;
this.meta63136 = meta63136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63137,meta63136__$1){
var self__ = this;
var _63137__$1 = this;
return (new cljs.core.async.t_cljs$core$async63135(self__.ch,self__.cs,meta63136__$1));
}));

(cljs.core.async.t_cljs$core$async63135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63137){
var self__ = this;
var _63137__$1 = this;
return self__.meta63136;
}));

(cljs.core.async.t_cljs$core$async63135.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63135.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async63135.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63135.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async63135.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async63135.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async63135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta63136","meta63136",262105990,null)], null);
}));

(cljs.core.async.t_cljs$core$async63135.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63135");

(cljs.core.async.t_cljs$core$async63135.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63135");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63135.
 */
cljs.core.async.__GT_t_cljs$core$async63135 = (function cljs$core$async$mult_$___GT_t_cljs$core$async63135(ch__$1,cs__$1,meta63136){
return (new cljs.core.async.t_cljs$core$async63135(ch__$1,cs__$1,meta63136));
});

}

return (new cljs.core.async.t_cljs$core$async63135(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__62654__auto___64402 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = (function (state_63270){
var state_val_63271 = (state_63270[(1)]);
if((state_val_63271 === (7))){
var inst_63266 = (state_63270[(2)]);
var state_63270__$1 = state_63270;
var statearr_63272_64403 = state_63270__$1;
(statearr_63272_64403[(2)] = inst_63266);

(statearr_63272_64403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (20))){
var inst_63171 = (state_63270[(7)]);
var inst_63183 = cljs.core.first(inst_63171);
var inst_63184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63183,(0),null);
var inst_63185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63183,(1),null);
var state_63270__$1 = (function (){var statearr_63273 = state_63270;
(statearr_63273[(8)] = inst_63184);

return statearr_63273;
})();
if(cljs.core.truth_(inst_63185)){
var statearr_63274_64404 = state_63270__$1;
(statearr_63274_64404[(1)] = (22));

} else {
var statearr_63275_64405 = state_63270__$1;
(statearr_63275_64405[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (27))){
var inst_63213 = (state_63270[(9)]);
var inst_63140 = (state_63270[(10)]);
var inst_63220 = (state_63270[(11)]);
var inst_63215 = (state_63270[(12)]);
var inst_63220__$1 = cljs.core._nth(inst_63213,inst_63215);
var inst_63221 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_63220__$1,inst_63140,done);
var state_63270__$1 = (function (){var statearr_63276 = state_63270;
(statearr_63276[(11)] = inst_63220__$1);

return statearr_63276;
})();
if(cljs.core.truth_(inst_63221)){
var statearr_63277_64406 = state_63270__$1;
(statearr_63277_64406[(1)] = (30));

} else {
var statearr_63278_64407 = state_63270__$1;
(statearr_63278_64407[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (1))){
var state_63270__$1 = state_63270;
var statearr_63279_64408 = state_63270__$1;
(statearr_63279_64408[(2)] = null);

(statearr_63279_64408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (24))){
var inst_63171 = (state_63270[(7)]);
var inst_63190 = (state_63270[(2)]);
var inst_63191 = cljs.core.next(inst_63171);
var inst_63149 = inst_63191;
var inst_63150 = null;
var inst_63151 = (0);
var inst_63152 = (0);
var state_63270__$1 = (function (){var statearr_63280 = state_63270;
(statearr_63280[(13)] = inst_63152);

(statearr_63280[(14)] = inst_63190);

(statearr_63280[(15)] = inst_63151);

(statearr_63280[(16)] = inst_63150);

(statearr_63280[(17)] = inst_63149);

return statearr_63280;
})();
var statearr_63281_64409 = state_63270__$1;
(statearr_63281_64409[(2)] = null);

(statearr_63281_64409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (39))){
var state_63270__$1 = state_63270;
var statearr_63285_64410 = state_63270__$1;
(statearr_63285_64410[(2)] = null);

(statearr_63285_64410[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (4))){
var inst_63140 = (state_63270[(10)]);
var inst_63140__$1 = (state_63270[(2)]);
var inst_63141 = (inst_63140__$1 == null);
var state_63270__$1 = (function (){var statearr_63286 = state_63270;
(statearr_63286[(10)] = inst_63140__$1);

return statearr_63286;
})();
if(cljs.core.truth_(inst_63141)){
var statearr_63287_64411 = state_63270__$1;
(statearr_63287_64411[(1)] = (5));

} else {
var statearr_63288_64412 = state_63270__$1;
(statearr_63288_64412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (15))){
var inst_63152 = (state_63270[(13)]);
var inst_63151 = (state_63270[(15)]);
var inst_63150 = (state_63270[(16)]);
var inst_63149 = (state_63270[(17)]);
var inst_63167 = (state_63270[(2)]);
var inst_63168 = (inst_63152 + (1));
var tmp63282 = inst_63151;
var tmp63283 = inst_63150;
var tmp63284 = inst_63149;
var inst_63149__$1 = tmp63284;
var inst_63150__$1 = tmp63283;
var inst_63151__$1 = tmp63282;
var inst_63152__$1 = inst_63168;
var state_63270__$1 = (function (){var statearr_63289 = state_63270;
(statearr_63289[(13)] = inst_63152__$1);

(statearr_63289[(15)] = inst_63151__$1);

(statearr_63289[(16)] = inst_63150__$1);

(statearr_63289[(18)] = inst_63167);

(statearr_63289[(17)] = inst_63149__$1);

return statearr_63289;
})();
var statearr_63290_64413 = state_63270__$1;
(statearr_63290_64413[(2)] = null);

(statearr_63290_64413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (21))){
var inst_63194 = (state_63270[(2)]);
var state_63270__$1 = state_63270;
var statearr_63294_64414 = state_63270__$1;
(statearr_63294_64414[(2)] = inst_63194);

(statearr_63294_64414[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (31))){
var inst_63220 = (state_63270[(11)]);
var inst_63224 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_63220);
var state_63270__$1 = state_63270;
var statearr_63295_64415 = state_63270__$1;
(statearr_63295_64415[(2)] = inst_63224);

(statearr_63295_64415[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (32))){
var inst_63213 = (state_63270[(9)]);
var inst_63215 = (state_63270[(12)]);
var inst_63214 = (state_63270[(19)]);
var inst_63212 = (state_63270[(20)]);
var inst_63226 = (state_63270[(2)]);
var inst_63227 = (inst_63215 + (1));
var tmp63291 = inst_63213;
var tmp63292 = inst_63214;
var tmp63293 = inst_63212;
var inst_63212__$1 = tmp63293;
var inst_63213__$1 = tmp63291;
var inst_63214__$1 = tmp63292;
var inst_63215__$1 = inst_63227;
var state_63270__$1 = (function (){var statearr_63296 = state_63270;
(statearr_63296[(21)] = inst_63226);

(statearr_63296[(9)] = inst_63213__$1);

(statearr_63296[(12)] = inst_63215__$1);

(statearr_63296[(19)] = inst_63214__$1);

(statearr_63296[(20)] = inst_63212__$1);

return statearr_63296;
})();
var statearr_63297_64416 = state_63270__$1;
(statearr_63297_64416[(2)] = null);

(statearr_63297_64416[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (40))){
var inst_63239 = (state_63270[(22)]);
var inst_63243 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_63239);
var state_63270__$1 = state_63270;
var statearr_63298_64417 = state_63270__$1;
(statearr_63298_64417[(2)] = inst_63243);

(statearr_63298_64417[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (33))){
var inst_63230 = (state_63270[(23)]);
var inst_63232 = cljs.core.chunked_seq_QMARK_(inst_63230);
var state_63270__$1 = state_63270;
if(inst_63232){
var statearr_63299_64418 = state_63270__$1;
(statearr_63299_64418[(1)] = (36));

} else {
var statearr_63300_64419 = state_63270__$1;
(statearr_63300_64419[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (13))){
var inst_63161 = (state_63270[(24)]);
var inst_63164 = cljs.core.async.close_BANG_(inst_63161);
var state_63270__$1 = state_63270;
var statearr_63301_64420 = state_63270__$1;
(statearr_63301_64420[(2)] = inst_63164);

(statearr_63301_64420[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (22))){
var inst_63184 = (state_63270[(8)]);
var inst_63187 = cljs.core.async.close_BANG_(inst_63184);
var state_63270__$1 = state_63270;
var statearr_63302_64424 = state_63270__$1;
(statearr_63302_64424[(2)] = inst_63187);

(statearr_63302_64424[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (36))){
var inst_63230 = (state_63270[(23)]);
var inst_63234 = cljs.core.chunk_first(inst_63230);
var inst_63235 = cljs.core.chunk_rest(inst_63230);
var inst_63236 = cljs.core.count(inst_63234);
var inst_63212 = inst_63235;
var inst_63213 = inst_63234;
var inst_63214 = inst_63236;
var inst_63215 = (0);
var state_63270__$1 = (function (){var statearr_63303 = state_63270;
(statearr_63303[(9)] = inst_63213);

(statearr_63303[(12)] = inst_63215);

(statearr_63303[(19)] = inst_63214);

(statearr_63303[(20)] = inst_63212);

return statearr_63303;
})();
var statearr_63304_64430 = state_63270__$1;
(statearr_63304_64430[(2)] = null);

(statearr_63304_64430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (41))){
var inst_63230 = (state_63270[(23)]);
var inst_63245 = (state_63270[(2)]);
var inst_63246 = cljs.core.next(inst_63230);
var inst_63212 = inst_63246;
var inst_63213 = null;
var inst_63214 = (0);
var inst_63215 = (0);
var state_63270__$1 = (function (){var statearr_63305 = state_63270;
(statearr_63305[(9)] = inst_63213);

(statearr_63305[(25)] = inst_63245);

(statearr_63305[(12)] = inst_63215);

(statearr_63305[(19)] = inst_63214);

(statearr_63305[(20)] = inst_63212);

return statearr_63305;
})();
var statearr_63306_64433 = state_63270__$1;
(statearr_63306_64433[(2)] = null);

(statearr_63306_64433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (43))){
var state_63270__$1 = state_63270;
var statearr_63307_64436 = state_63270__$1;
(statearr_63307_64436[(2)] = null);

(statearr_63307_64436[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (29))){
var inst_63254 = (state_63270[(2)]);
var state_63270__$1 = state_63270;
var statearr_63308_64437 = state_63270__$1;
(statearr_63308_64437[(2)] = inst_63254);

(statearr_63308_64437[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (44))){
var inst_63263 = (state_63270[(2)]);
var state_63270__$1 = (function (){var statearr_63309 = state_63270;
(statearr_63309[(26)] = inst_63263);

return statearr_63309;
})();
var statearr_63310_64440 = state_63270__$1;
(statearr_63310_64440[(2)] = null);

(statearr_63310_64440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (6))){
var inst_63204 = (state_63270[(27)]);
var inst_63203 = cljs.core.deref(cs);
var inst_63204__$1 = cljs.core.keys(inst_63203);
var inst_63205 = cljs.core.count(inst_63204__$1);
var inst_63206 = cljs.core.reset_BANG_(dctr,inst_63205);
var inst_63211 = cljs.core.seq(inst_63204__$1);
var inst_63212 = inst_63211;
var inst_63213 = null;
var inst_63214 = (0);
var inst_63215 = (0);
var state_63270__$1 = (function (){var statearr_63311 = state_63270;
(statearr_63311[(9)] = inst_63213);

(statearr_63311[(12)] = inst_63215);

(statearr_63311[(19)] = inst_63214);

(statearr_63311[(20)] = inst_63212);

(statearr_63311[(27)] = inst_63204__$1);

(statearr_63311[(28)] = inst_63206);

return statearr_63311;
})();
var statearr_63312_64443 = state_63270__$1;
(statearr_63312_64443[(2)] = null);

(statearr_63312_64443[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (28))){
var inst_63230 = (state_63270[(23)]);
var inst_63212 = (state_63270[(20)]);
var inst_63230__$1 = cljs.core.seq(inst_63212);
var state_63270__$1 = (function (){var statearr_63313 = state_63270;
(statearr_63313[(23)] = inst_63230__$1);

return statearr_63313;
})();
if(inst_63230__$1){
var statearr_63314_64444 = state_63270__$1;
(statearr_63314_64444[(1)] = (33));

} else {
var statearr_63315_64445 = state_63270__$1;
(statearr_63315_64445[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (25))){
var inst_63215 = (state_63270[(12)]);
var inst_63214 = (state_63270[(19)]);
var inst_63217 = (inst_63215 < inst_63214);
var inst_63218 = inst_63217;
var state_63270__$1 = state_63270;
if(cljs.core.truth_(inst_63218)){
var statearr_63316_64446 = state_63270__$1;
(statearr_63316_64446[(1)] = (27));

} else {
var statearr_63317_64447 = state_63270__$1;
(statearr_63317_64447[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (34))){
var state_63270__$1 = state_63270;
var statearr_63318_64449 = state_63270__$1;
(statearr_63318_64449[(2)] = null);

(statearr_63318_64449[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (17))){
var state_63270__$1 = state_63270;
var statearr_63319_64450 = state_63270__$1;
(statearr_63319_64450[(2)] = null);

(statearr_63319_64450[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (3))){
var inst_63268 = (state_63270[(2)]);
var state_63270__$1 = state_63270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63270__$1,inst_63268);
} else {
if((state_val_63271 === (12))){
var inst_63199 = (state_63270[(2)]);
var state_63270__$1 = state_63270;
var statearr_63320_64451 = state_63270__$1;
(statearr_63320_64451[(2)] = inst_63199);

(statearr_63320_64451[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (2))){
var state_63270__$1 = state_63270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63270__$1,(4),ch);
} else {
if((state_val_63271 === (23))){
var state_63270__$1 = state_63270;
var statearr_63321_64452 = state_63270__$1;
(statearr_63321_64452[(2)] = null);

(statearr_63321_64452[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (35))){
var inst_63252 = (state_63270[(2)]);
var state_63270__$1 = state_63270;
var statearr_63322_64453 = state_63270__$1;
(statearr_63322_64453[(2)] = inst_63252);

(statearr_63322_64453[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (19))){
var inst_63171 = (state_63270[(7)]);
var inst_63175 = cljs.core.chunk_first(inst_63171);
var inst_63176 = cljs.core.chunk_rest(inst_63171);
var inst_63177 = cljs.core.count(inst_63175);
var inst_63149 = inst_63176;
var inst_63150 = inst_63175;
var inst_63151 = inst_63177;
var inst_63152 = (0);
var state_63270__$1 = (function (){var statearr_63323 = state_63270;
(statearr_63323[(13)] = inst_63152);

(statearr_63323[(15)] = inst_63151);

(statearr_63323[(16)] = inst_63150);

(statearr_63323[(17)] = inst_63149);

return statearr_63323;
})();
var statearr_63324_64454 = state_63270__$1;
(statearr_63324_64454[(2)] = null);

(statearr_63324_64454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (11))){
var inst_63171 = (state_63270[(7)]);
var inst_63149 = (state_63270[(17)]);
var inst_63171__$1 = cljs.core.seq(inst_63149);
var state_63270__$1 = (function (){var statearr_63325 = state_63270;
(statearr_63325[(7)] = inst_63171__$1);

return statearr_63325;
})();
if(inst_63171__$1){
var statearr_63326_64455 = state_63270__$1;
(statearr_63326_64455[(1)] = (16));

} else {
var statearr_63327_64456 = state_63270__$1;
(statearr_63327_64456[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (9))){
var inst_63201 = (state_63270[(2)]);
var state_63270__$1 = state_63270;
var statearr_63328_64457 = state_63270__$1;
(statearr_63328_64457[(2)] = inst_63201);

(statearr_63328_64457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (5))){
var inst_63147 = cljs.core.deref(cs);
var inst_63148 = cljs.core.seq(inst_63147);
var inst_63149 = inst_63148;
var inst_63150 = null;
var inst_63151 = (0);
var inst_63152 = (0);
var state_63270__$1 = (function (){var statearr_63329 = state_63270;
(statearr_63329[(13)] = inst_63152);

(statearr_63329[(15)] = inst_63151);

(statearr_63329[(16)] = inst_63150);

(statearr_63329[(17)] = inst_63149);

return statearr_63329;
})();
var statearr_63330_64458 = state_63270__$1;
(statearr_63330_64458[(2)] = null);

(statearr_63330_64458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (14))){
var state_63270__$1 = state_63270;
var statearr_63331_64459 = state_63270__$1;
(statearr_63331_64459[(2)] = null);

(statearr_63331_64459[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (45))){
var inst_63260 = (state_63270[(2)]);
var state_63270__$1 = state_63270;
var statearr_63332_64460 = state_63270__$1;
(statearr_63332_64460[(2)] = inst_63260);

(statearr_63332_64460[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (26))){
var inst_63204 = (state_63270[(27)]);
var inst_63256 = (state_63270[(2)]);
var inst_63257 = cljs.core.seq(inst_63204);
var state_63270__$1 = (function (){var statearr_63333 = state_63270;
(statearr_63333[(29)] = inst_63256);

return statearr_63333;
})();
if(inst_63257){
var statearr_63334_64461 = state_63270__$1;
(statearr_63334_64461[(1)] = (42));

} else {
var statearr_63335_64462 = state_63270__$1;
(statearr_63335_64462[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (16))){
var inst_63171 = (state_63270[(7)]);
var inst_63173 = cljs.core.chunked_seq_QMARK_(inst_63171);
var state_63270__$1 = state_63270;
if(inst_63173){
var statearr_63336_64463 = state_63270__$1;
(statearr_63336_64463[(1)] = (19));

} else {
var statearr_63337_64464 = state_63270__$1;
(statearr_63337_64464[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (38))){
var inst_63249 = (state_63270[(2)]);
var state_63270__$1 = state_63270;
var statearr_63338_64465 = state_63270__$1;
(statearr_63338_64465[(2)] = inst_63249);

(statearr_63338_64465[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (30))){
var state_63270__$1 = state_63270;
var statearr_63339_64466 = state_63270__$1;
(statearr_63339_64466[(2)] = null);

(statearr_63339_64466[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (10))){
var inst_63152 = (state_63270[(13)]);
var inst_63150 = (state_63270[(16)]);
var inst_63160 = cljs.core._nth(inst_63150,inst_63152);
var inst_63161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63160,(0),null);
var inst_63162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63160,(1),null);
var state_63270__$1 = (function (){var statearr_63340 = state_63270;
(statearr_63340[(24)] = inst_63161);

return statearr_63340;
})();
if(cljs.core.truth_(inst_63162)){
var statearr_63341_64467 = state_63270__$1;
(statearr_63341_64467[(1)] = (13));

} else {
var statearr_63342_64468 = state_63270__$1;
(statearr_63342_64468[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (18))){
var inst_63197 = (state_63270[(2)]);
var state_63270__$1 = state_63270;
var statearr_63343_64469 = state_63270__$1;
(statearr_63343_64469[(2)] = inst_63197);

(statearr_63343_64469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (42))){
var state_63270__$1 = state_63270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63270__$1,(45),dchan);
} else {
if((state_val_63271 === (37))){
var inst_63140 = (state_63270[(10)]);
var inst_63239 = (state_63270[(22)]);
var inst_63230 = (state_63270[(23)]);
var inst_63239__$1 = cljs.core.first(inst_63230);
var inst_63240 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_63239__$1,inst_63140,done);
var state_63270__$1 = (function (){var statearr_63344 = state_63270;
(statearr_63344[(22)] = inst_63239__$1);

return statearr_63344;
})();
if(cljs.core.truth_(inst_63240)){
var statearr_63345_64470 = state_63270__$1;
(statearr_63345_64470[(1)] = (39));

} else {
var statearr_63346_64471 = state_63270__$1;
(statearr_63346_64471[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63271 === (8))){
var inst_63152 = (state_63270[(13)]);
var inst_63151 = (state_63270[(15)]);
var inst_63154 = (inst_63152 < inst_63151);
var inst_63155 = inst_63154;
var state_63270__$1 = state_63270;
if(cljs.core.truth_(inst_63155)){
var statearr_63347_64472 = state_63270__$1;
(statearr_63347_64472[(1)] = (10));

} else {
var statearr_63348_64473 = state_63270__$1;
(statearr_63348_64473[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__62619__auto__ = null;
var cljs$core$async$mult_$_state_machine__62619__auto____0 = (function (){
var statearr_63349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63349[(0)] = cljs$core$async$mult_$_state_machine__62619__auto__);

(statearr_63349[(1)] = (1));

return statearr_63349;
});
var cljs$core$async$mult_$_state_machine__62619__auto____1 = (function (state_63270){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_63270);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e63350){var ex__62622__auto__ = e63350;
var statearr_63351_64474 = state_63270;
(statearr_63351_64474[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_63270[(4)]))){
var statearr_63352_64475 = state_63270;
(statearr_63352_64475[(1)] = cljs.core.first((state_63270[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64476 = state_63270;
state_63270 = G__64476;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__62619__auto__ = function(state_63270){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__62619__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__62619__auto____1.call(this,state_63270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__62619__auto____0;
cljs$core$async$mult_$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__62619__auto____1;
return cljs$core$async$mult_$_state_machine__62619__auto__;
})()
})();
var state__62656__auto__ = (function (){var statearr_63353 = f__62655__auto__();
(statearr_63353[(6)] = c__62654__auto___64402);

return statearr_63353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
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
var G__63355 = arguments.length;
switch (G__63355) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_64478 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_64478(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_64483 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_64483(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_64484 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_64484(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_64485 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_64485(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_64488 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_64488(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64492 = arguments.length;
var i__4737__auto___64493 = (0);
while(true){
if((i__4737__auto___64493 < len__4736__auto___64492)){
args__4742__auto__.push((arguments[i__4737__auto___64493]));

var G__64494 = (i__4737__auto___64493 + (1));
i__4737__auto___64493 = G__64494;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__63360){
var map__63361 = p__63360;
var map__63361__$1 = (((((!((map__63361 == null))))?(((((map__63361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63361):map__63361);
var opts = map__63361__$1;
var statearr_63363_64499 = state;
(statearr_63363_64499[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_63364_64500 = state;
(statearr_63364_64500[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_63365_64501 = state;
(statearr_63365_64501[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq63356){
var G__63357 = cljs.core.first(seq63356);
var seq63356__$1 = cljs.core.next(seq63356);
var G__63358 = cljs.core.first(seq63356__$1);
var seq63356__$2 = cljs.core.next(seq63356__$1);
var G__63359 = cljs.core.first(seq63356__$2);
var seq63356__$3 = cljs.core.next(seq63356__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63357,G__63358,G__63359,seq63356__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63366 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63366 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta63367){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta63367 = meta63367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63368,meta63367__$1){
var self__ = this;
var _63368__$1 = this;
return (new cljs.core.async.t_cljs$core$async63366(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta63367__$1));
}));

(cljs.core.async.t_cljs$core$async63366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63368){
var self__ = this;
var _63368__$1 = this;
return self__.meta63367;
}));

(cljs.core.async.t_cljs$core$async63366.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63366.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async63366.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63366.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63366.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63366.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63366.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63366.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta63367","meta63367",786333680,null)], null);
}));

(cljs.core.async.t_cljs$core$async63366.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63366");

(cljs.core.async.t_cljs$core$async63366.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63366");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63366.
 */
cljs.core.async.__GT_t_cljs$core$async63366 = (function cljs$core$async$mix_$___GT_t_cljs$core$async63366(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta63367){
return (new cljs.core.async.t_cljs$core$async63366(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta63367));
});

}

return (new cljs.core.async.t_cljs$core$async63366(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__62654__auto___64519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = (function (state_63470){
var state_val_63471 = (state_63470[(1)]);
if((state_val_63471 === (7))){
var inst_63385 = (state_63470[(2)]);
var state_63470__$1 = state_63470;
var statearr_63472_64520 = state_63470__$1;
(statearr_63472_64520[(2)] = inst_63385);

(statearr_63472_64520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (20))){
var inst_63397 = (state_63470[(7)]);
var state_63470__$1 = state_63470;
var statearr_63473_64521 = state_63470__$1;
(statearr_63473_64521[(2)] = inst_63397);

(statearr_63473_64521[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (27))){
var state_63470__$1 = state_63470;
var statearr_63474_64522 = state_63470__$1;
(statearr_63474_64522[(2)] = null);

(statearr_63474_64522[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (1))){
var inst_63372 = (state_63470[(8)]);
var inst_63372__$1 = calc_state();
var inst_63374 = (inst_63372__$1 == null);
var inst_63375 = cljs.core.not(inst_63374);
var state_63470__$1 = (function (){var statearr_63475 = state_63470;
(statearr_63475[(8)] = inst_63372__$1);

return statearr_63475;
})();
if(inst_63375){
var statearr_63476_64523 = state_63470__$1;
(statearr_63476_64523[(1)] = (2));

} else {
var statearr_63477_64524 = state_63470__$1;
(statearr_63477_64524[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (24))){
var inst_63421 = (state_63470[(9)]);
var inst_63430 = (state_63470[(10)]);
var inst_63444 = (state_63470[(11)]);
var inst_63444__$1 = (inst_63421.cljs$core$IFn$_invoke$arity$1 ? inst_63421.cljs$core$IFn$_invoke$arity$1(inst_63430) : inst_63421.call(null,inst_63430));
var state_63470__$1 = (function (){var statearr_63478 = state_63470;
(statearr_63478[(11)] = inst_63444__$1);

return statearr_63478;
})();
if(cljs.core.truth_(inst_63444__$1)){
var statearr_63479_64525 = state_63470__$1;
(statearr_63479_64525[(1)] = (29));

} else {
var statearr_63480_64526 = state_63470__$1;
(statearr_63480_64526[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (4))){
var inst_63388 = (state_63470[(2)]);
var state_63470__$1 = state_63470;
if(cljs.core.truth_(inst_63388)){
var statearr_63481_64527 = state_63470__$1;
(statearr_63481_64527[(1)] = (8));

} else {
var statearr_63482_64528 = state_63470__$1;
(statearr_63482_64528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (15))){
var inst_63415 = (state_63470[(2)]);
var state_63470__$1 = state_63470;
if(cljs.core.truth_(inst_63415)){
var statearr_63483_64529 = state_63470__$1;
(statearr_63483_64529[(1)] = (19));

} else {
var statearr_63484_64530 = state_63470__$1;
(statearr_63484_64530[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (21))){
var inst_63420 = (state_63470[(12)]);
var inst_63420__$1 = (state_63470[(2)]);
var inst_63421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63420__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63420__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63420__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_63470__$1 = (function (){var statearr_63485 = state_63470;
(statearr_63485[(13)] = inst_63422);

(statearr_63485[(9)] = inst_63421);

(statearr_63485[(12)] = inst_63420__$1);

return statearr_63485;
})();
return cljs.core.async.ioc_alts_BANG_(state_63470__$1,(22),inst_63423);
} else {
if((state_val_63471 === (31))){
var inst_63452 = (state_63470[(2)]);
var state_63470__$1 = state_63470;
if(cljs.core.truth_(inst_63452)){
var statearr_63486_64531 = state_63470__$1;
(statearr_63486_64531[(1)] = (32));

} else {
var statearr_63487_64532 = state_63470__$1;
(statearr_63487_64532[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (32))){
var inst_63429 = (state_63470[(14)]);
var state_63470__$1 = state_63470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63470__$1,(35),out,inst_63429);
} else {
if((state_val_63471 === (33))){
var inst_63420 = (state_63470[(12)]);
var inst_63397 = inst_63420;
var state_63470__$1 = (function (){var statearr_63488 = state_63470;
(statearr_63488[(7)] = inst_63397);

return statearr_63488;
})();
var statearr_63489_64533 = state_63470__$1;
(statearr_63489_64533[(2)] = null);

(statearr_63489_64533[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (13))){
var inst_63397 = (state_63470[(7)]);
var inst_63404 = inst_63397.cljs$lang$protocol_mask$partition0$;
var inst_63405 = (inst_63404 & (64));
var inst_63406 = inst_63397.cljs$core$ISeq$;
var inst_63407 = (cljs.core.PROTOCOL_SENTINEL === inst_63406);
var inst_63408 = ((inst_63405) || (inst_63407));
var state_63470__$1 = state_63470;
if(cljs.core.truth_(inst_63408)){
var statearr_63490_64534 = state_63470__$1;
(statearr_63490_64534[(1)] = (16));

} else {
var statearr_63491_64535 = state_63470__$1;
(statearr_63491_64535[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (22))){
var inst_63430 = (state_63470[(10)]);
var inst_63429 = (state_63470[(14)]);
var inst_63428 = (state_63470[(2)]);
var inst_63429__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63428,(0),null);
var inst_63430__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63428,(1),null);
var inst_63431 = (inst_63429__$1 == null);
var inst_63432 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_63430__$1,change);
var inst_63433 = ((inst_63431) || (inst_63432));
var state_63470__$1 = (function (){var statearr_63492 = state_63470;
(statearr_63492[(10)] = inst_63430__$1);

(statearr_63492[(14)] = inst_63429__$1);

return statearr_63492;
})();
if(cljs.core.truth_(inst_63433)){
var statearr_63493_64539 = state_63470__$1;
(statearr_63493_64539[(1)] = (23));

} else {
var statearr_63494_64540 = state_63470__$1;
(statearr_63494_64540[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (36))){
var inst_63420 = (state_63470[(12)]);
var inst_63397 = inst_63420;
var state_63470__$1 = (function (){var statearr_63495 = state_63470;
(statearr_63495[(7)] = inst_63397);

return statearr_63495;
})();
var statearr_63496_64541 = state_63470__$1;
(statearr_63496_64541[(2)] = null);

(statearr_63496_64541[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (29))){
var inst_63444 = (state_63470[(11)]);
var state_63470__$1 = state_63470;
var statearr_63497_64542 = state_63470__$1;
(statearr_63497_64542[(2)] = inst_63444);

(statearr_63497_64542[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (6))){
var state_63470__$1 = state_63470;
var statearr_63498_64544 = state_63470__$1;
(statearr_63498_64544[(2)] = false);

(statearr_63498_64544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (28))){
var inst_63440 = (state_63470[(2)]);
var inst_63441 = calc_state();
var inst_63397 = inst_63441;
var state_63470__$1 = (function (){var statearr_63499 = state_63470;
(statearr_63499[(15)] = inst_63440);

(statearr_63499[(7)] = inst_63397);

return statearr_63499;
})();
var statearr_63500_64545 = state_63470__$1;
(statearr_63500_64545[(2)] = null);

(statearr_63500_64545[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (25))){
var inst_63466 = (state_63470[(2)]);
var state_63470__$1 = state_63470;
var statearr_63501_64551 = state_63470__$1;
(statearr_63501_64551[(2)] = inst_63466);

(statearr_63501_64551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (34))){
var inst_63464 = (state_63470[(2)]);
var state_63470__$1 = state_63470;
var statearr_63502_64553 = state_63470__$1;
(statearr_63502_64553[(2)] = inst_63464);

(statearr_63502_64553[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (17))){
var state_63470__$1 = state_63470;
var statearr_63503_64556 = state_63470__$1;
(statearr_63503_64556[(2)] = false);

(statearr_63503_64556[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (3))){
var state_63470__$1 = state_63470;
var statearr_63504_64561 = state_63470__$1;
(statearr_63504_64561[(2)] = false);

(statearr_63504_64561[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (12))){
var inst_63468 = (state_63470[(2)]);
var state_63470__$1 = state_63470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63470__$1,inst_63468);
} else {
if((state_val_63471 === (2))){
var inst_63372 = (state_63470[(8)]);
var inst_63377 = inst_63372.cljs$lang$protocol_mask$partition0$;
var inst_63378 = (inst_63377 & (64));
var inst_63379 = inst_63372.cljs$core$ISeq$;
var inst_63380 = (cljs.core.PROTOCOL_SENTINEL === inst_63379);
var inst_63381 = ((inst_63378) || (inst_63380));
var state_63470__$1 = state_63470;
if(cljs.core.truth_(inst_63381)){
var statearr_63505_64571 = state_63470__$1;
(statearr_63505_64571[(1)] = (5));

} else {
var statearr_63506_64573 = state_63470__$1;
(statearr_63506_64573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (23))){
var inst_63429 = (state_63470[(14)]);
var inst_63435 = (inst_63429 == null);
var state_63470__$1 = state_63470;
if(cljs.core.truth_(inst_63435)){
var statearr_63507_64578 = state_63470__$1;
(statearr_63507_64578[(1)] = (26));

} else {
var statearr_63508_64579 = state_63470__$1;
(statearr_63508_64579[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (35))){
var inst_63455 = (state_63470[(2)]);
var state_63470__$1 = state_63470;
if(cljs.core.truth_(inst_63455)){
var statearr_63509_64580 = state_63470__$1;
(statearr_63509_64580[(1)] = (36));

} else {
var statearr_63510_64581 = state_63470__$1;
(statearr_63510_64581[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (19))){
var inst_63397 = (state_63470[(7)]);
var inst_63417 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63397);
var state_63470__$1 = state_63470;
var statearr_63511_64582 = state_63470__$1;
(statearr_63511_64582[(2)] = inst_63417);

(statearr_63511_64582[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (11))){
var inst_63397 = (state_63470[(7)]);
var inst_63401 = (inst_63397 == null);
var inst_63402 = cljs.core.not(inst_63401);
var state_63470__$1 = state_63470;
if(inst_63402){
var statearr_63512_64583 = state_63470__$1;
(statearr_63512_64583[(1)] = (13));

} else {
var statearr_63513_64584 = state_63470__$1;
(statearr_63513_64584[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (9))){
var inst_63372 = (state_63470[(8)]);
var state_63470__$1 = state_63470;
var statearr_63514_64585 = state_63470__$1;
(statearr_63514_64585[(2)] = inst_63372);

(statearr_63514_64585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (5))){
var state_63470__$1 = state_63470;
var statearr_63515_64586 = state_63470__$1;
(statearr_63515_64586[(2)] = true);

(statearr_63515_64586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (14))){
var state_63470__$1 = state_63470;
var statearr_63516_64587 = state_63470__$1;
(statearr_63516_64587[(2)] = false);

(statearr_63516_64587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (26))){
var inst_63430 = (state_63470[(10)]);
var inst_63437 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_63430);
var state_63470__$1 = state_63470;
var statearr_63517_64588 = state_63470__$1;
(statearr_63517_64588[(2)] = inst_63437);

(statearr_63517_64588[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (16))){
var state_63470__$1 = state_63470;
var statearr_63518_64589 = state_63470__$1;
(statearr_63518_64589[(2)] = true);

(statearr_63518_64589[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (38))){
var inst_63460 = (state_63470[(2)]);
var state_63470__$1 = state_63470;
var statearr_63519_64590 = state_63470__$1;
(statearr_63519_64590[(2)] = inst_63460);

(statearr_63519_64590[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (30))){
var inst_63422 = (state_63470[(13)]);
var inst_63421 = (state_63470[(9)]);
var inst_63430 = (state_63470[(10)]);
var inst_63447 = cljs.core.empty_QMARK_(inst_63421);
var inst_63448 = (inst_63422.cljs$core$IFn$_invoke$arity$1 ? inst_63422.cljs$core$IFn$_invoke$arity$1(inst_63430) : inst_63422.call(null,inst_63430));
var inst_63449 = cljs.core.not(inst_63448);
var inst_63450 = ((inst_63447) && (inst_63449));
var state_63470__$1 = state_63470;
var statearr_63520_64591 = state_63470__$1;
(statearr_63520_64591[(2)] = inst_63450);

(statearr_63520_64591[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (10))){
var inst_63372 = (state_63470[(8)]);
var inst_63393 = (state_63470[(2)]);
var inst_63394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63393,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63393,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63393,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_63397 = inst_63372;
var state_63470__$1 = (function (){var statearr_63521 = state_63470;
(statearr_63521[(16)] = inst_63394);

(statearr_63521[(17)] = inst_63395);

(statearr_63521[(18)] = inst_63396);

(statearr_63521[(7)] = inst_63397);

return statearr_63521;
})();
var statearr_63522_64592 = state_63470__$1;
(statearr_63522_64592[(2)] = null);

(statearr_63522_64592[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (18))){
var inst_63412 = (state_63470[(2)]);
var state_63470__$1 = state_63470;
var statearr_63523_64593 = state_63470__$1;
(statearr_63523_64593[(2)] = inst_63412);

(statearr_63523_64593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (37))){
var state_63470__$1 = state_63470;
var statearr_63524_64594 = state_63470__$1;
(statearr_63524_64594[(2)] = null);

(statearr_63524_64594[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63471 === (8))){
var inst_63372 = (state_63470[(8)]);
var inst_63390 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63372);
var state_63470__$1 = state_63470;
var statearr_63525_64595 = state_63470__$1;
(statearr_63525_64595[(2)] = inst_63390);

(statearr_63525_64595[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__62619__auto__ = null;
var cljs$core$async$mix_$_state_machine__62619__auto____0 = (function (){
var statearr_63526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63526[(0)] = cljs$core$async$mix_$_state_machine__62619__auto__);

(statearr_63526[(1)] = (1));

return statearr_63526;
});
var cljs$core$async$mix_$_state_machine__62619__auto____1 = (function (state_63470){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_63470);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e63527){var ex__62622__auto__ = e63527;
var statearr_63528_64596 = state_63470;
(statearr_63528_64596[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_63470[(4)]))){
var statearr_63529_64597 = state_63470;
(statearr_63529_64597[(1)] = cljs.core.first((state_63470[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64598 = state_63470;
state_63470 = G__64598;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__62619__auto__ = function(state_63470){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__62619__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__62619__auto____1.call(this,state_63470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__62619__auto____0;
cljs$core$async$mix_$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__62619__auto____1;
return cljs$core$async$mix_$_state_machine__62619__auto__;
})()
})();
var state__62656__auto__ = (function (){var statearr_63530 = f__62655__auto__();
(statearr_63530[(6)] = c__62654__auto___64519);

return statearr_63530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_64599 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_64599(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_64600 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_64600(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_64601 = (function() {
var G__64602 = null;
var G__64602__1 = (function (p){
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
var G__64602__2 = (function (p,v){
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
G__64602 = function(p,v){
switch(arguments.length){
case 1:
return G__64602__1.call(this,p);
case 2:
return G__64602__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__64602.cljs$core$IFn$_invoke$arity$1 = G__64602__1;
G__64602.cljs$core$IFn$_invoke$arity$2 = G__64602__2;
return G__64602;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__63532 = arguments.length;
switch (G__63532) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_64601(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_64601(p,v);
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
var G__63535 = arguments.length;
switch (G__63535) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__63533_SHARP_){
if(cljs.core.truth_((p1__63533_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__63533_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__63533_SHARP_.call(null,topic)))){
return p1__63533_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__63533_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63536 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63536 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta63537){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta63537 = meta63537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63538,meta63537__$1){
var self__ = this;
var _63538__$1 = this;
return (new cljs.core.async.t_cljs$core$async63536(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta63537__$1));
}));

(cljs.core.async.t_cljs$core$async63536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63538){
var self__ = this;
var _63538__$1 = this;
return self__.meta63537;
}));

(cljs.core.async.t_cljs$core$async63536.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63536.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async63536.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63536.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async63536.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async63536.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async63536.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async63536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta63537","meta63537",-591132181,null)], null);
}));

(cljs.core.async.t_cljs$core$async63536.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63536");

(cljs.core.async.t_cljs$core$async63536.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63536");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63536.
 */
cljs.core.async.__GT_t_cljs$core$async63536 = (function cljs$core$async$__GT_t_cljs$core$async63536(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63537){
return (new cljs.core.async.t_cljs$core$async63536(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63537));
});

}

return (new cljs.core.async.t_cljs$core$async63536(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__62654__auto___64605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = (function (state_63610){
var state_val_63611 = (state_63610[(1)]);
if((state_val_63611 === (7))){
var inst_63606 = (state_63610[(2)]);
var state_63610__$1 = state_63610;
var statearr_63612_64606 = state_63610__$1;
(statearr_63612_64606[(2)] = inst_63606);

(statearr_63612_64606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63611 === (20))){
var state_63610__$1 = state_63610;
var statearr_63613_64607 = state_63610__$1;
(statearr_63613_64607[(2)] = null);

(statearr_63613_64607[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63611 === (1))){
var state_63610__$1 = state_63610;
var statearr_63614_64608 = state_63610__$1;
(statearr_63614_64608[(2)] = null);

(statearr_63614_64608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63611 === (24))){
var inst_63589 = (state_63610[(7)]);
var inst_63598 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_63589);
var state_63610__$1 = state_63610;
var statearr_63615_64609 = state_63610__$1;
(statearr_63615_64609[(2)] = inst_63598);

(statearr_63615_64609[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63611 === (4))){
var inst_63541 = (state_63610[(8)]);
var inst_63541__$1 = (state_63610[(2)]);
var inst_63542 = (inst_63541__$1 == null);
var state_63610__$1 = (function (){var statearr_63616 = state_63610;
(statearr_63616[(8)] = inst_63541__$1);

return statearr_63616;
})();
if(cljs.core.truth_(inst_63542)){
var statearr_63617_64610 = state_63610__$1;
(statearr_63617_64610[(1)] = (5));

} else {
var statearr_63618_64611 = state_63610__$1;
(statearr_63618_64611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63611 === (15))){
var inst_63583 = (state_63610[(2)]);
var state_63610__$1 = state_63610;
var statearr_63619_64612 = state_63610__$1;
(statearr_63619_64612[(2)] = inst_63583);

(statearr_63619_64612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63611 === (21))){
var inst_63603 = (state_63610[(2)]);
var state_63610__$1 = (function (){var statearr_63620 = state_63610;
(statearr_63620[(9)] = inst_63603);

return statearr_63620;
})();
var statearr_63621_64613 = state_63610__$1;
(statearr_63621_64613[(2)] = null);

(statearr_63621_64613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63611 === (13))){
var inst_63565 = (state_63610[(10)]);
var inst_63567 = cljs.core.chunked_seq_QMARK_(inst_63565);
var state_63610__$1 = state_63610;
if(inst_63567){
var statearr_63622_64614 = state_63610__$1;
(statearr_63622_64614[(1)] = (16));

} else {
var statearr_63623_64615 = state_63610__$1;
(statearr_63623_64615[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63611 === (22))){
var inst_63595 = (state_63610[(2)]);
var state_63610__$1 = state_63610;
if(cljs.core.truth_(inst_63595)){
var statearr_63624_64616 = state_63610__$1;
(statearr_63624_64616[(1)] = (23));

} else {
var statearr_63625_64617 = state_63610__$1;
(statearr_63625_64617[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63611 === (6))){
var inst_63591 = (state_63610[(11)]);
var inst_63589 = (state_63610[(7)]);
var inst_63541 = (state_63610[(8)]);
var inst_63589__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_63541) : topic_fn.call(null,inst_63541));
var inst_63590 = cljs.core.deref(mults);
var inst_63591__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63590,inst_63589__$1);
var state_63610__$1 = (function (){var statearr_63626 = state_63610;
(statearr_63626[(11)] = inst_63591__$1);

(statearr_63626[(7)] = inst_63589__$1);

return statearr_63626;
})();
if(cljs.core.truth_(inst_63591__$1)){
var statearr_63627_64618 = state_63610__$1;
(statearr_63627_64618[(1)] = (19));

} else {
var statearr_63628_64619 = state_63610__$1;
(statearr_63628_64619[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63611 === (25))){
var inst_63600 = (state_63610[(2)]);
var state_63610__$1 = state_63610;
var statearr_63629_64620 = state_63610__$1;
(statearr_63629_64620[(2)] = inst_63600);

(statearr_63629_64620[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63611 === (17))){
var inst_63565 = (state_63610[(10)]);
var inst_63574 = cljs.core.first(inst_63565);
var inst_63575 = cljs.core.async.muxch_STAR_(inst_63574);
var inst_63576 = cljs.core.async.close_BANG_(inst_63575);
var inst_63577 = cljs.core.next(inst_63565);
var inst_63551 = inst_63577;
var inst_63552 = null;
var inst_63553 = (0);
var inst_63554 = (0);
var state_63610__$1 = (function (){var statearr_63630 = state_63610;
(statearr_63630[(12)] = inst_63553);

(statearr_63630[(13)] = inst_63554);

(statearr_63630[(14)] = inst_63552);

(statearr_63630[(15)] = inst_63576);

(statearr_63630[(16)] = inst_63551);

return statearr_63630;
})();
var statearr_63631_64621 = state_63610__$1;
(statearr_63631_64621[(2)] = null);

(statearr_63631_64621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63611 === (3))){
var inst_63608 = (state_63610[(2)]);
var state_63610__$1 = state_63610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63610__$1,inst_63608);
} else {
if((state_val_63611 === (12))){
var inst_63585 = (state_63610[(2)]);
var state_63610__$1 = state_63610;
var statearr_63632_64622 = state_63610__$1;
(statearr_63632_64622[(2)] = inst_63585);

(statearr_63632_64622[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63611 === (2))){
var state_63610__$1 = state_63610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63610__$1,(4),ch);
} else {
if((state_val_63611 === (23))){
var state_63610__$1 = state_63610;
var statearr_63633_64623 = state_63610__$1;
(statearr_63633_64623[(2)] = null);

(statearr_63633_64623[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63611 === (19))){
var inst_63591 = (state_63610[(11)]);
var inst_63541 = (state_63610[(8)]);
var inst_63593 = cljs.core.async.muxch_STAR_(inst_63591);
var state_63610__$1 = state_63610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63610__$1,(22),inst_63593,inst_63541);
} else {
if((state_val_63611 === (11))){
var inst_63565 = (state_63610[(10)]);
var inst_63551 = (state_63610[(16)]);
var inst_63565__$1 = cljs.core.seq(inst_63551);
var state_63610__$1 = (function (){var statearr_63634 = state_63610;
(statearr_63634[(10)] = inst_63565__$1);

return statearr_63634;
})();
if(inst_63565__$1){
var statearr_63635_64624 = state_63610__$1;
(statearr_63635_64624[(1)] = (13));

} else {
var statearr_63636_64625 = state_63610__$1;
(statearr_63636_64625[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63611 === (9))){
var inst_63587 = (state_63610[(2)]);
var state_63610__$1 = state_63610;
var statearr_63637_64626 = state_63610__$1;
(statearr_63637_64626[(2)] = inst_63587);

(statearr_63637_64626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63611 === (5))){
var inst_63548 = cljs.core.deref(mults);
var inst_63549 = cljs.core.vals(inst_63548);
var inst_63550 = cljs.core.seq(inst_63549);
var inst_63551 = inst_63550;
var inst_63552 = null;
var inst_63553 = (0);
var inst_63554 = (0);
var state_63610__$1 = (function (){var statearr_63638 = state_63610;
(statearr_63638[(12)] = inst_63553);

(statearr_63638[(13)] = inst_63554);

(statearr_63638[(14)] = inst_63552);

(statearr_63638[(16)] = inst_63551);

return statearr_63638;
})();
var statearr_63639_64627 = state_63610__$1;
(statearr_63639_64627[(2)] = null);

(statearr_63639_64627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63611 === (14))){
var state_63610__$1 = state_63610;
var statearr_63643_64628 = state_63610__$1;
(statearr_63643_64628[(2)] = null);

(statearr_63643_64628[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63611 === (16))){
var inst_63565 = (state_63610[(10)]);
var inst_63569 = cljs.core.chunk_first(inst_63565);
var inst_63570 = cljs.core.chunk_rest(inst_63565);
var inst_63571 = cljs.core.count(inst_63569);
var inst_63551 = inst_63570;
var inst_63552 = inst_63569;
var inst_63553 = inst_63571;
var inst_63554 = (0);
var state_63610__$1 = (function (){var statearr_63644 = state_63610;
(statearr_63644[(12)] = inst_63553);

(statearr_63644[(13)] = inst_63554);

(statearr_63644[(14)] = inst_63552);

(statearr_63644[(16)] = inst_63551);

return statearr_63644;
})();
var statearr_63645_64629 = state_63610__$1;
(statearr_63645_64629[(2)] = null);

(statearr_63645_64629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63611 === (10))){
var inst_63553 = (state_63610[(12)]);
var inst_63554 = (state_63610[(13)]);
var inst_63552 = (state_63610[(14)]);
var inst_63551 = (state_63610[(16)]);
var inst_63559 = cljs.core._nth(inst_63552,inst_63554);
var inst_63560 = cljs.core.async.muxch_STAR_(inst_63559);
var inst_63561 = cljs.core.async.close_BANG_(inst_63560);
var inst_63562 = (inst_63554 + (1));
var tmp63640 = inst_63553;
var tmp63641 = inst_63552;
var tmp63642 = inst_63551;
var inst_63551__$1 = tmp63642;
var inst_63552__$1 = tmp63641;
var inst_63553__$1 = tmp63640;
var inst_63554__$1 = inst_63562;
var state_63610__$1 = (function (){var statearr_63646 = state_63610;
(statearr_63646[(17)] = inst_63561);

(statearr_63646[(12)] = inst_63553__$1);

(statearr_63646[(13)] = inst_63554__$1);

(statearr_63646[(14)] = inst_63552__$1);

(statearr_63646[(16)] = inst_63551__$1);

return statearr_63646;
})();
var statearr_63647_64632 = state_63610__$1;
(statearr_63647_64632[(2)] = null);

(statearr_63647_64632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63611 === (18))){
var inst_63580 = (state_63610[(2)]);
var state_63610__$1 = state_63610;
var statearr_63648_64633 = state_63610__$1;
(statearr_63648_64633[(2)] = inst_63580);

(statearr_63648_64633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63611 === (8))){
var inst_63553 = (state_63610[(12)]);
var inst_63554 = (state_63610[(13)]);
var inst_63556 = (inst_63554 < inst_63553);
var inst_63557 = inst_63556;
var state_63610__$1 = state_63610;
if(cljs.core.truth_(inst_63557)){
var statearr_63649_64634 = state_63610__$1;
(statearr_63649_64634[(1)] = (10));

} else {
var statearr_63650_64635 = state_63610__$1;
(statearr_63650_64635[(1)] = (11));

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
var cljs$core$async$state_machine__62619__auto__ = null;
var cljs$core$async$state_machine__62619__auto____0 = (function (){
var statearr_63651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63651[(0)] = cljs$core$async$state_machine__62619__auto__);

(statearr_63651[(1)] = (1));

return statearr_63651;
});
var cljs$core$async$state_machine__62619__auto____1 = (function (state_63610){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_63610);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e63652){var ex__62622__auto__ = e63652;
var statearr_63653_64636 = state_63610;
(statearr_63653_64636[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_63610[(4)]))){
var statearr_63654_64637 = state_63610;
(statearr_63654_64637[(1)] = cljs.core.first((state_63610[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64638 = state_63610;
state_63610 = G__64638;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs$core$async$state_machine__62619__auto__ = function(state_63610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62619__auto____1.call(this,state_63610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62619__auto____0;
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62619__auto____1;
return cljs$core$async$state_machine__62619__auto__;
})()
})();
var state__62656__auto__ = (function (){var statearr_63655 = f__62655__auto__();
(statearr_63655[(6)] = c__62654__auto___64605);

return statearr_63655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
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
var G__63657 = arguments.length;
switch (G__63657) {
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
var G__63659 = arguments.length;
switch (G__63659) {
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
var G__63661 = arguments.length;
switch (G__63661) {
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
var c__62654__auto___64646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = (function (state_63704){
var state_val_63705 = (state_63704[(1)]);
if((state_val_63705 === (7))){
var state_63704__$1 = state_63704;
var statearr_63706_64647 = state_63704__$1;
(statearr_63706_64647[(2)] = null);

(statearr_63706_64647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63705 === (1))){
var state_63704__$1 = state_63704;
var statearr_63707_64648 = state_63704__$1;
(statearr_63707_64648[(2)] = null);

(statearr_63707_64648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63705 === (4))){
var inst_63665 = (state_63704[(7)]);
var inst_63664 = (state_63704[(8)]);
var inst_63667 = (inst_63665 < inst_63664);
var state_63704__$1 = state_63704;
if(cljs.core.truth_(inst_63667)){
var statearr_63708_64649 = state_63704__$1;
(statearr_63708_64649[(1)] = (6));

} else {
var statearr_63709_64650 = state_63704__$1;
(statearr_63709_64650[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63705 === (15))){
var inst_63690 = (state_63704[(9)]);
var inst_63695 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_63690);
var state_63704__$1 = state_63704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63704__$1,(17),out,inst_63695);
} else {
if((state_val_63705 === (13))){
var inst_63690 = (state_63704[(9)]);
var inst_63690__$1 = (state_63704[(2)]);
var inst_63691 = cljs.core.some(cljs.core.nil_QMARK_,inst_63690__$1);
var state_63704__$1 = (function (){var statearr_63710 = state_63704;
(statearr_63710[(9)] = inst_63690__$1);

return statearr_63710;
})();
if(cljs.core.truth_(inst_63691)){
var statearr_63711_64652 = state_63704__$1;
(statearr_63711_64652[(1)] = (14));

} else {
var statearr_63712_64653 = state_63704__$1;
(statearr_63712_64653[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63705 === (6))){
var state_63704__$1 = state_63704;
var statearr_63713_64655 = state_63704__$1;
(statearr_63713_64655[(2)] = null);

(statearr_63713_64655[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63705 === (17))){
var inst_63697 = (state_63704[(2)]);
var state_63704__$1 = (function (){var statearr_63715 = state_63704;
(statearr_63715[(10)] = inst_63697);

return statearr_63715;
})();
var statearr_63716_64656 = state_63704__$1;
(statearr_63716_64656[(2)] = null);

(statearr_63716_64656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63705 === (3))){
var inst_63702 = (state_63704[(2)]);
var state_63704__$1 = state_63704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63704__$1,inst_63702);
} else {
if((state_val_63705 === (12))){
var _ = (function (){var statearr_63717 = state_63704;
(statearr_63717[(4)] = cljs.core.rest((state_63704[(4)])));

return statearr_63717;
})();
var state_63704__$1 = state_63704;
var ex63714 = (state_63704__$1[(2)]);
var statearr_63718_64657 = state_63704__$1;
(statearr_63718_64657[(5)] = ex63714);


if((ex63714 instanceof Object)){
var statearr_63719_64658 = state_63704__$1;
(statearr_63719_64658[(1)] = (11));

(statearr_63719_64658[(5)] = null);

} else {
throw ex63714;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63705 === (2))){
var inst_63663 = cljs.core.reset_BANG_(dctr,cnt);
var inst_63664 = cnt;
var inst_63665 = (0);
var state_63704__$1 = (function (){var statearr_63720 = state_63704;
(statearr_63720[(11)] = inst_63663);

(statearr_63720[(7)] = inst_63665);

(statearr_63720[(8)] = inst_63664);

return statearr_63720;
})();
var statearr_63721_64661 = state_63704__$1;
(statearr_63721_64661[(2)] = null);

(statearr_63721_64661[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63705 === (11))){
var inst_63669 = (state_63704[(2)]);
var inst_63670 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_63704__$1 = (function (){var statearr_63722 = state_63704;
(statearr_63722[(12)] = inst_63669);

return statearr_63722;
})();
var statearr_63723_64662 = state_63704__$1;
(statearr_63723_64662[(2)] = inst_63670);

(statearr_63723_64662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63705 === (9))){
var inst_63665 = (state_63704[(7)]);
var _ = (function (){var statearr_63724 = state_63704;
(statearr_63724[(4)] = cljs.core.cons((12),(state_63704[(4)])));

return statearr_63724;
})();
var inst_63676 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_63665) : chs__$1.call(null,inst_63665));
var inst_63677 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_63665) : done.call(null,inst_63665));
var inst_63678 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_63676,inst_63677);
var ___$1 = (function (){var statearr_63725 = state_63704;
(statearr_63725[(4)] = cljs.core.rest((state_63704[(4)])));

return statearr_63725;
})();
var state_63704__$1 = state_63704;
var statearr_63726_64663 = state_63704__$1;
(statearr_63726_64663[(2)] = inst_63678);

(statearr_63726_64663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63705 === (5))){
var inst_63688 = (state_63704[(2)]);
var state_63704__$1 = (function (){var statearr_63727 = state_63704;
(statearr_63727[(13)] = inst_63688);

return statearr_63727;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63704__$1,(13),dchan);
} else {
if((state_val_63705 === (14))){
var inst_63693 = cljs.core.async.close_BANG_(out);
var state_63704__$1 = state_63704;
var statearr_63728_64664 = state_63704__$1;
(statearr_63728_64664[(2)] = inst_63693);

(statearr_63728_64664[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63705 === (16))){
var inst_63700 = (state_63704[(2)]);
var state_63704__$1 = state_63704;
var statearr_63729_64665 = state_63704__$1;
(statearr_63729_64665[(2)] = inst_63700);

(statearr_63729_64665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63705 === (10))){
var inst_63665 = (state_63704[(7)]);
var inst_63681 = (state_63704[(2)]);
var inst_63682 = (inst_63665 + (1));
var inst_63665__$1 = inst_63682;
var state_63704__$1 = (function (){var statearr_63730 = state_63704;
(statearr_63730[(7)] = inst_63665__$1);

(statearr_63730[(14)] = inst_63681);

return statearr_63730;
})();
var statearr_63731_64666 = state_63704__$1;
(statearr_63731_64666[(2)] = null);

(statearr_63731_64666[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63705 === (8))){
var inst_63686 = (state_63704[(2)]);
var state_63704__$1 = state_63704;
var statearr_63732_64667 = state_63704__$1;
(statearr_63732_64667[(2)] = inst_63686);

(statearr_63732_64667[(1)] = (5));


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
var cljs$core$async$state_machine__62619__auto__ = null;
var cljs$core$async$state_machine__62619__auto____0 = (function (){
var statearr_63733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63733[(0)] = cljs$core$async$state_machine__62619__auto__);

(statearr_63733[(1)] = (1));

return statearr_63733;
});
var cljs$core$async$state_machine__62619__auto____1 = (function (state_63704){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_63704);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e63734){var ex__62622__auto__ = e63734;
var statearr_63735_64668 = state_63704;
(statearr_63735_64668[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_63704[(4)]))){
var statearr_63736_64669 = state_63704;
(statearr_63736_64669[(1)] = cljs.core.first((state_63704[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64670 = state_63704;
state_63704 = G__64670;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs$core$async$state_machine__62619__auto__ = function(state_63704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62619__auto____1.call(this,state_63704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62619__auto____0;
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62619__auto____1;
return cljs$core$async$state_machine__62619__auto__;
})()
})();
var state__62656__auto__ = (function (){var statearr_63737 = f__62655__auto__();
(statearr_63737[(6)] = c__62654__auto___64646);

return statearr_63737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
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
var G__63740 = arguments.length;
switch (G__63740) {
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
var c__62654__auto___64672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = (function (state_63772){
var state_val_63773 = (state_63772[(1)]);
if((state_val_63773 === (7))){
var inst_63751 = (state_63772[(7)]);
var inst_63752 = (state_63772[(8)]);
var inst_63751__$1 = (state_63772[(2)]);
var inst_63752__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63751__$1,(0),null);
var inst_63753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63751__$1,(1),null);
var inst_63754 = (inst_63752__$1 == null);
var state_63772__$1 = (function (){var statearr_63774 = state_63772;
(statearr_63774[(7)] = inst_63751__$1);

(statearr_63774[(8)] = inst_63752__$1);

(statearr_63774[(9)] = inst_63753);

return statearr_63774;
})();
if(cljs.core.truth_(inst_63754)){
var statearr_63775_64673 = state_63772__$1;
(statearr_63775_64673[(1)] = (8));

} else {
var statearr_63776_64674 = state_63772__$1;
(statearr_63776_64674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63773 === (1))){
var inst_63741 = cljs.core.vec(chs);
var inst_63742 = inst_63741;
var state_63772__$1 = (function (){var statearr_63777 = state_63772;
(statearr_63777[(10)] = inst_63742);

return statearr_63777;
})();
var statearr_63778_64675 = state_63772__$1;
(statearr_63778_64675[(2)] = null);

(statearr_63778_64675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63773 === (4))){
var inst_63742 = (state_63772[(10)]);
var state_63772__$1 = state_63772;
return cljs.core.async.ioc_alts_BANG_(state_63772__$1,(7),inst_63742);
} else {
if((state_val_63773 === (6))){
var inst_63768 = (state_63772[(2)]);
var state_63772__$1 = state_63772;
var statearr_63779_64676 = state_63772__$1;
(statearr_63779_64676[(2)] = inst_63768);

(statearr_63779_64676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63773 === (3))){
var inst_63770 = (state_63772[(2)]);
var state_63772__$1 = state_63772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63772__$1,inst_63770);
} else {
if((state_val_63773 === (2))){
var inst_63742 = (state_63772[(10)]);
var inst_63744 = cljs.core.count(inst_63742);
var inst_63745 = (inst_63744 > (0));
var state_63772__$1 = state_63772;
if(cljs.core.truth_(inst_63745)){
var statearr_63781_64677 = state_63772__$1;
(statearr_63781_64677[(1)] = (4));

} else {
var statearr_63782_64678 = state_63772__$1;
(statearr_63782_64678[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63773 === (11))){
var inst_63742 = (state_63772[(10)]);
var inst_63761 = (state_63772[(2)]);
var tmp63780 = inst_63742;
var inst_63742__$1 = tmp63780;
var state_63772__$1 = (function (){var statearr_63783 = state_63772;
(statearr_63783[(10)] = inst_63742__$1);

(statearr_63783[(11)] = inst_63761);

return statearr_63783;
})();
var statearr_63784_64679 = state_63772__$1;
(statearr_63784_64679[(2)] = null);

(statearr_63784_64679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63773 === (9))){
var inst_63752 = (state_63772[(8)]);
var state_63772__$1 = state_63772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63772__$1,(11),out,inst_63752);
} else {
if((state_val_63773 === (5))){
var inst_63766 = cljs.core.async.close_BANG_(out);
var state_63772__$1 = state_63772;
var statearr_63785_64680 = state_63772__$1;
(statearr_63785_64680[(2)] = inst_63766);

(statearr_63785_64680[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63773 === (10))){
var inst_63764 = (state_63772[(2)]);
var state_63772__$1 = state_63772;
var statearr_63786_64681 = state_63772__$1;
(statearr_63786_64681[(2)] = inst_63764);

(statearr_63786_64681[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63773 === (8))){
var inst_63751 = (state_63772[(7)]);
var inst_63752 = (state_63772[(8)]);
var inst_63742 = (state_63772[(10)]);
var inst_63753 = (state_63772[(9)]);
var inst_63756 = (function (){var cs = inst_63742;
var vec__63747 = inst_63751;
var v = inst_63752;
var c = inst_63753;
return (function (p1__63738_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__63738_SHARP_);
});
})();
var inst_63757 = cljs.core.filterv(inst_63756,inst_63742);
var inst_63742__$1 = inst_63757;
var state_63772__$1 = (function (){var statearr_63787 = state_63772;
(statearr_63787[(10)] = inst_63742__$1);

return statearr_63787;
})();
var statearr_63788_64682 = state_63772__$1;
(statearr_63788_64682[(2)] = null);

(statearr_63788_64682[(1)] = (2));


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
var cljs$core$async$state_machine__62619__auto__ = null;
var cljs$core$async$state_machine__62619__auto____0 = (function (){
var statearr_63789 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63789[(0)] = cljs$core$async$state_machine__62619__auto__);

(statearr_63789[(1)] = (1));

return statearr_63789;
});
var cljs$core$async$state_machine__62619__auto____1 = (function (state_63772){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_63772);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e63790){var ex__62622__auto__ = e63790;
var statearr_63791_64683 = state_63772;
(statearr_63791_64683[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_63772[(4)]))){
var statearr_63792_64684 = state_63772;
(statearr_63792_64684[(1)] = cljs.core.first((state_63772[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64685 = state_63772;
state_63772 = G__64685;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs$core$async$state_machine__62619__auto__ = function(state_63772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62619__auto____1.call(this,state_63772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62619__auto____0;
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62619__auto____1;
return cljs$core$async$state_machine__62619__auto__;
})()
})();
var state__62656__auto__ = (function (){var statearr_63793 = f__62655__auto__();
(statearr_63793[(6)] = c__62654__auto___64672);

return statearr_63793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
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
var G__63795 = arguments.length;
switch (G__63795) {
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
var c__62654__auto___64688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = (function (state_63819){
var state_val_63820 = (state_63819[(1)]);
if((state_val_63820 === (7))){
var inst_63801 = (state_63819[(7)]);
var inst_63801__$1 = (state_63819[(2)]);
var inst_63802 = (inst_63801__$1 == null);
var inst_63803 = cljs.core.not(inst_63802);
var state_63819__$1 = (function (){var statearr_63821 = state_63819;
(statearr_63821[(7)] = inst_63801__$1);

return statearr_63821;
})();
if(inst_63803){
var statearr_63822_64690 = state_63819__$1;
(statearr_63822_64690[(1)] = (8));

} else {
var statearr_63823_64691 = state_63819__$1;
(statearr_63823_64691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63820 === (1))){
var inst_63796 = (0);
var state_63819__$1 = (function (){var statearr_63824 = state_63819;
(statearr_63824[(8)] = inst_63796);

return statearr_63824;
})();
var statearr_63825_64692 = state_63819__$1;
(statearr_63825_64692[(2)] = null);

(statearr_63825_64692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63820 === (4))){
var state_63819__$1 = state_63819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63819__$1,(7),ch);
} else {
if((state_val_63820 === (6))){
var inst_63814 = (state_63819[(2)]);
var state_63819__$1 = state_63819;
var statearr_63826_64695 = state_63819__$1;
(statearr_63826_64695[(2)] = inst_63814);

(statearr_63826_64695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63820 === (3))){
var inst_63816 = (state_63819[(2)]);
var inst_63817 = cljs.core.async.close_BANG_(out);
var state_63819__$1 = (function (){var statearr_63827 = state_63819;
(statearr_63827[(9)] = inst_63816);

return statearr_63827;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63819__$1,inst_63817);
} else {
if((state_val_63820 === (2))){
var inst_63796 = (state_63819[(8)]);
var inst_63798 = (inst_63796 < n);
var state_63819__$1 = state_63819;
if(cljs.core.truth_(inst_63798)){
var statearr_63828_64697 = state_63819__$1;
(statearr_63828_64697[(1)] = (4));

} else {
var statearr_63829_64698 = state_63819__$1;
(statearr_63829_64698[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63820 === (11))){
var inst_63796 = (state_63819[(8)]);
var inst_63806 = (state_63819[(2)]);
var inst_63807 = (inst_63796 + (1));
var inst_63796__$1 = inst_63807;
var state_63819__$1 = (function (){var statearr_63830 = state_63819;
(statearr_63830[(10)] = inst_63806);

(statearr_63830[(8)] = inst_63796__$1);

return statearr_63830;
})();
var statearr_63831_64699 = state_63819__$1;
(statearr_63831_64699[(2)] = null);

(statearr_63831_64699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63820 === (9))){
var state_63819__$1 = state_63819;
var statearr_63832_64701 = state_63819__$1;
(statearr_63832_64701[(2)] = null);

(statearr_63832_64701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63820 === (5))){
var state_63819__$1 = state_63819;
var statearr_63833_64702 = state_63819__$1;
(statearr_63833_64702[(2)] = null);

(statearr_63833_64702[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63820 === (10))){
var inst_63811 = (state_63819[(2)]);
var state_63819__$1 = state_63819;
var statearr_63834_64703 = state_63819__$1;
(statearr_63834_64703[(2)] = inst_63811);

(statearr_63834_64703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63820 === (8))){
var inst_63801 = (state_63819[(7)]);
var state_63819__$1 = state_63819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63819__$1,(11),out,inst_63801);
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
var cljs$core$async$state_machine__62619__auto__ = null;
var cljs$core$async$state_machine__62619__auto____0 = (function (){
var statearr_63835 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63835[(0)] = cljs$core$async$state_machine__62619__auto__);

(statearr_63835[(1)] = (1));

return statearr_63835;
});
var cljs$core$async$state_machine__62619__auto____1 = (function (state_63819){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_63819);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e63836){var ex__62622__auto__ = e63836;
var statearr_63837_64707 = state_63819;
(statearr_63837_64707[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_63819[(4)]))){
var statearr_63838_64708 = state_63819;
(statearr_63838_64708[(1)] = cljs.core.first((state_63819[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64709 = state_63819;
state_63819 = G__64709;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs$core$async$state_machine__62619__auto__ = function(state_63819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62619__auto____1.call(this,state_63819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62619__auto____0;
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62619__auto____1;
return cljs$core$async$state_machine__62619__auto__;
})()
})();
var state__62656__auto__ = (function (){var statearr_63839 = f__62655__auto__();
(statearr_63839[(6)] = c__62654__auto___64688);

return statearr_63839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63841 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63841 = (function (f,ch,meta63842){
this.f = f;
this.ch = ch;
this.meta63842 = meta63842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63843,meta63842__$1){
var self__ = this;
var _63843__$1 = this;
return (new cljs.core.async.t_cljs$core$async63841(self__.f,self__.ch,meta63842__$1));
}));

(cljs.core.async.t_cljs$core$async63841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63843){
var self__ = this;
var _63843__$1 = this;
return self__.meta63842;
}));

(cljs.core.async.t_cljs$core$async63841.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63841.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63841.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63841.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63841.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63844 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63844 = (function (f,ch,meta63842,_,fn1,meta63845){
this.f = f;
this.ch = ch;
this.meta63842 = meta63842;
this._ = _;
this.fn1 = fn1;
this.meta63845 = meta63845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63846,meta63845__$1){
var self__ = this;
var _63846__$1 = this;
return (new cljs.core.async.t_cljs$core$async63844(self__.f,self__.ch,self__.meta63842,self__._,self__.fn1,meta63845__$1));
}));

(cljs.core.async.t_cljs$core$async63844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63846){
var self__ = this;
var _63846__$1 = this;
return self__.meta63845;
}));

(cljs.core.async.t_cljs$core$async63844.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63844.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async63844.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async63844.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__63840_SHARP_){
var G__63847 = (((p1__63840_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__63840_SHARP_) : self__.f.call(null,p1__63840_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__63847) : f1.call(null,G__63847));
});
}));

(cljs.core.async.t_cljs$core$async63844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63842","meta63842",-313947264,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async63841","cljs.core.async/t_cljs$core$async63841",1518020826,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta63845","meta63845",-986996105,null)], null);
}));

(cljs.core.async.t_cljs$core$async63844.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63844");

(cljs.core.async.t_cljs$core$async63844.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63844");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63844.
 */
cljs.core.async.__GT_t_cljs$core$async63844 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async63844(f__$1,ch__$1,meta63842__$1,___$2,fn1__$1,meta63845){
return (new cljs.core.async.t_cljs$core$async63844(f__$1,ch__$1,meta63842__$1,___$2,fn1__$1,meta63845));
});

}

return (new cljs.core.async.t_cljs$core$async63844(self__.f,self__.ch,self__.meta63842,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__63848 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__63848) : self__.f.call(null,G__63848));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async63841.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63841.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async63841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63842","meta63842",-313947264,null)], null);
}));

(cljs.core.async.t_cljs$core$async63841.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63841");

(cljs.core.async.t_cljs$core$async63841.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63841");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63841.
 */
cljs.core.async.__GT_t_cljs$core$async63841 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async63841(f__$1,ch__$1,meta63842){
return (new cljs.core.async.t_cljs$core$async63841(f__$1,ch__$1,meta63842));
});

}

return (new cljs.core.async.t_cljs$core$async63841(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63849 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63849 = (function (f,ch,meta63850){
this.f = f;
this.ch = ch;
this.meta63850 = meta63850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63851,meta63850__$1){
var self__ = this;
var _63851__$1 = this;
return (new cljs.core.async.t_cljs$core$async63849(self__.f,self__.ch,meta63850__$1));
}));

(cljs.core.async.t_cljs$core$async63849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63851){
var self__ = this;
var _63851__$1 = this;
return self__.meta63850;
}));

(cljs.core.async.t_cljs$core$async63849.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63849.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63849.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63849.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async63849.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63849.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async63849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63850","meta63850",1228417527,null)], null);
}));

(cljs.core.async.t_cljs$core$async63849.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63849");

(cljs.core.async.t_cljs$core$async63849.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63849");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63849.
 */
cljs.core.async.__GT_t_cljs$core$async63849 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async63849(f__$1,ch__$1,meta63850){
return (new cljs.core.async.t_cljs$core$async63849(f__$1,ch__$1,meta63850));
});

}

return (new cljs.core.async.t_cljs$core$async63849(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63852 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63852 = (function (p,ch,meta63853){
this.p = p;
this.ch = ch;
this.meta63853 = meta63853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63854,meta63853__$1){
var self__ = this;
var _63854__$1 = this;
return (new cljs.core.async.t_cljs$core$async63852(self__.p,self__.ch,meta63853__$1));
}));

(cljs.core.async.t_cljs$core$async63852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63854){
var self__ = this;
var _63854__$1 = this;
return self__.meta63853;
}));

(cljs.core.async.t_cljs$core$async63852.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63852.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63852.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63852.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63852.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async63852.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63852.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async63852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63853","meta63853",1062023329,null)], null);
}));

(cljs.core.async.t_cljs$core$async63852.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63852");

(cljs.core.async.t_cljs$core$async63852.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63852");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63852.
 */
cljs.core.async.__GT_t_cljs$core$async63852 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async63852(p__$1,ch__$1,meta63853){
return (new cljs.core.async.t_cljs$core$async63852(p__$1,ch__$1,meta63853));
});

}

return (new cljs.core.async.t_cljs$core$async63852(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__63856 = arguments.length;
switch (G__63856) {
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
var c__62654__auto___64711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = (function (state_63877){
var state_val_63878 = (state_63877[(1)]);
if((state_val_63878 === (7))){
var inst_63873 = (state_63877[(2)]);
var state_63877__$1 = state_63877;
var statearr_63879_64712 = state_63877__$1;
(statearr_63879_64712[(2)] = inst_63873);

(statearr_63879_64712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63878 === (1))){
var state_63877__$1 = state_63877;
var statearr_63880_64713 = state_63877__$1;
(statearr_63880_64713[(2)] = null);

(statearr_63880_64713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63878 === (4))){
var inst_63859 = (state_63877[(7)]);
var inst_63859__$1 = (state_63877[(2)]);
var inst_63860 = (inst_63859__$1 == null);
var state_63877__$1 = (function (){var statearr_63881 = state_63877;
(statearr_63881[(7)] = inst_63859__$1);

return statearr_63881;
})();
if(cljs.core.truth_(inst_63860)){
var statearr_63882_64714 = state_63877__$1;
(statearr_63882_64714[(1)] = (5));

} else {
var statearr_63883_64715 = state_63877__$1;
(statearr_63883_64715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63878 === (6))){
var inst_63859 = (state_63877[(7)]);
var inst_63864 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_63859) : p.call(null,inst_63859));
var state_63877__$1 = state_63877;
if(cljs.core.truth_(inst_63864)){
var statearr_63884_64716 = state_63877__$1;
(statearr_63884_64716[(1)] = (8));

} else {
var statearr_63885_64717 = state_63877__$1;
(statearr_63885_64717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63878 === (3))){
var inst_63875 = (state_63877[(2)]);
var state_63877__$1 = state_63877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63877__$1,inst_63875);
} else {
if((state_val_63878 === (2))){
var state_63877__$1 = state_63877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63877__$1,(4),ch);
} else {
if((state_val_63878 === (11))){
var inst_63867 = (state_63877[(2)]);
var state_63877__$1 = state_63877;
var statearr_63886_64718 = state_63877__$1;
(statearr_63886_64718[(2)] = inst_63867);

(statearr_63886_64718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63878 === (9))){
var state_63877__$1 = state_63877;
var statearr_63887_64719 = state_63877__$1;
(statearr_63887_64719[(2)] = null);

(statearr_63887_64719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63878 === (5))){
var inst_63862 = cljs.core.async.close_BANG_(out);
var state_63877__$1 = state_63877;
var statearr_63888_64720 = state_63877__$1;
(statearr_63888_64720[(2)] = inst_63862);

(statearr_63888_64720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63878 === (10))){
var inst_63870 = (state_63877[(2)]);
var state_63877__$1 = (function (){var statearr_63889 = state_63877;
(statearr_63889[(8)] = inst_63870);

return statearr_63889;
})();
var statearr_63890_64721 = state_63877__$1;
(statearr_63890_64721[(2)] = null);

(statearr_63890_64721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63878 === (8))){
var inst_63859 = (state_63877[(7)]);
var state_63877__$1 = state_63877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63877__$1,(11),out,inst_63859);
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
var cljs$core$async$state_machine__62619__auto__ = null;
var cljs$core$async$state_machine__62619__auto____0 = (function (){
var statearr_63891 = [null,null,null,null,null,null,null,null,null];
(statearr_63891[(0)] = cljs$core$async$state_machine__62619__auto__);

(statearr_63891[(1)] = (1));

return statearr_63891;
});
var cljs$core$async$state_machine__62619__auto____1 = (function (state_63877){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_63877);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e63892){var ex__62622__auto__ = e63892;
var statearr_63893_64722 = state_63877;
(statearr_63893_64722[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_63877[(4)]))){
var statearr_63894_64723 = state_63877;
(statearr_63894_64723[(1)] = cljs.core.first((state_63877[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64724 = state_63877;
state_63877 = G__64724;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs$core$async$state_machine__62619__auto__ = function(state_63877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62619__auto____1.call(this,state_63877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62619__auto____0;
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62619__auto____1;
return cljs$core$async$state_machine__62619__auto__;
})()
})();
var state__62656__auto__ = (function (){var statearr_63895 = f__62655__auto__();
(statearr_63895[(6)] = c__62654__auto___64711);

return statearr_63895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__63897 = arguments.length;
switch (G__63897) {
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
var c__62654__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = (function (state_63959){
var state_val_63960 = (state_63959[(1)]);
if((state_val_63960 === (7))){
var inst_63955 = (state_63959[(2)]);
var state_63959__$1 = state_63959;
var statearr_63961_64726 = state_63959__$1;
(statearr_63961_64726[(2)] = inst_63955);

(statearr_63961_64726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63960 === (20))){
var inst_63925 = (state_63959[(7)]);
var inst_63936 = (state_63959[(2)]);
var inst_63937 = cljs.core.next(inst_63925);
var inst_63911 = inst_63937;
var inst_63912 = null;
var inst_63913 = (0);
var inst_63914 = (0);
var state_63959__$1 = (function (){var statearr_63962 = state_63959;
(statearr_63962[(8)] = inst_63911);

(statearr_63962[(9)] = inst_63912);

(statearr_63962[(10)] = inst_63914);

(statearr_63962[(11)] = inst_63913);

(statearr_63962[(12)] = inst_63936);

return statearr_63962;
})();
var statearr_63963_64727 = state_63959__$1;
(statearr_63963_64727[(2)] = null);

(statearr_63963_64727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63960 === (1))){
var state_63959__$1 = state_63959;
var statearr_63964_64728 = state_63959__$1;
(statearr_63964_64728[(2)] = null);

(statearr_63964_64728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63960 === (4))){
var inst_63900 = (state_63959[(13)]);
var inst_63900__$1 = (state_63959[(2)]);
var inst_63901 = (inst_63900__$1 == null);
var state_63959__$1 = (function (){var statearr_63965 = state_63959;
(statearr_63965[(13)] = inst_63900__$1);

return statearr_63965;
})();
if(cljs.core.truth_(inst_63901)){
var statearr_63966_64729 = state_63959__$1;
(statearr_63966_64729[(1)] = (5));

} else {
var statearr_63967_64730 = state_63959__$1;
(statearr_63967_64730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63960 === (15))){
var state_63959__$1 = state_63959;
var statearr_63971_64731 = state_63959__$1;
(statearr_63971_64731[(2)] = null);

(statearr_63971_64731[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63960 === (21))){
var state_63959__$1 = state_63959;
var statearr_63972_64732 = state_63959__$1;
(statearr_63972_64732[(2)] = null);

(statearr_63972_64732[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63960 === (13))){
var inst_63911 = (state_63959[(8)]);
var inst_63912 = (state_63959[(9)]);
var inst_63914 = (state_63959[(10)]);
var inst_63913 = (state_63959[(11)]);
var inst_63921 = (state_63959[(2)]);
var inst_63922 = (inst_63914 + (1));
var tmp63968 = inst_63911;
var tmp63969 = inst_63912;
var tmp63970 = inst_63913;
var inst_63911__$1 = tmp63968;
var inst_63912__$1 = tmp63969;
var inst_63913__$1 = tmp63970;
var inst_63914__$1 = inst_63922;
var state_63959__$1 = (function (){var statearr_63973 = state_63959;
(statearr_63973[(8)] = inst_63911__$1);

(statearr_63973[(9)] = inst_63912__$1);

(statearr_63973[(10)] = inst_63914__$1);

(statearr_63973[(11)] = inst_63913__$1);

(statearr_63973[(14)] = inst_63921);

return statearr_63973;
})();
var statearr_63974_64733 = state_63959__$1;
(statearr_63974_64733[(2)] = null);

(statearr_63974_64733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63960 === (22))){
var state_63959__$1 = state_63959;
var statearr_63975_64734 = state_63959__$1;
(statearr_63975_64734[(2)] = null);

(statearr_63975_64734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63960 === (6))){
var inst_63900 = (state_63959[(13)]);
var inst_63909 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_63900) : f.call(null,inst_63900));
var inst_63910 = cljs.core.seq(inst_63909);
var inst_63911 = inst_63910;
var inst_63912 = null;
var inst_63913 = (0);
var inst_63914 = (0);
var state_63959__$1 = (function (){var statearr_63976 = state_63959;
(statearr_63976[(8)] = inst_63911);

(statearr_63976[(9)] = inst_63912);

(statearr_63976[(10)] = inst_63914);

(statearr_63976[(11)] = inst_63913);

return statearr_63976;
})();
var statearr_63977_64735 = state_63959__$1;
(statearr_63977_64735[(2)] = null);

(statearr_63977_64735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63960 === (17))){
var inst_63925 = (state_63959[(7)]);
var inst_63929 = cljs.core.chunk_first(inst_63925);
var inst_63930 = cljs.core.chunk_rest(inst_63925);
var inst_63931 = cljs.core.count(inst_63929);
var inst_63911 = inst_63930;
var inst_63912 = inst_63929;
var inst_63913 = inst_63931;
var inst_63914 = (0);
var state_63959__$1 = (function (){var statearr_63978 = state_63959;
(statearr_63978[(8)] = inst_63911);

(statearr_63978[(9)] = inst_63912);

(statearr_63978[(10)] = inst_63914);

(statearr_63978[(11)] = inst_63913);

return statearr_63978;
})();
var statearr_63979_64736 = state_63959__$1;
(statearr_63979_64736[(2)] = null);

(statearr_63979_64736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63960 === (3))){
var inst_63957 = (state_63959[(2)]);
var state_63959__$1 = state_63959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63959__$1,inst_63957);
} else {
if((state_val_63960 === (12))){
var inst_63945 = (state_63959[(2)]);
var state_63959__$1 = state_63959;
var statearr_63980_64737 = state_63959__$1;
(statearr_63980_64737[(2)] = inst_63945);

(statearr_63980_64737[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63960 === (2))){
var state_63959__$1 = state_63959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63959__$1,(4),in$);
} else {
if((state_val_63960 === (23))){
var inst_63953 = (state_63959[(2)]);
var state_63959__$1 = state_63959;
var statearr_63981_64738 = state_63959__$1;
(statearr_63981_64738[(2)] = inst_63953);

(statearr_63981_64738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63960 === (19))){
var inst_63940 = (state_63959[(2)]);
var state_63959__$1 = state_63959;
var statearr_63982_64739 = state_63959__$1;
(statearr_63982_64739[(2)] = inst_63940);

(statearr_63982_64739[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63960 === (11))){
var inst_63911 = (state_63959[(8)]);
var inst_63925 = (state_63959[(7)]);
var inst_63925__$1 = cljs.core.seq(inst_63911);
var state_63959__$1 = (function (){var statearr_63983 = state_63959;
(statearr_63983[(7)] = inst_63925__$1);

return statearr_63983;
})();
if(inst_63925__$1){
var statearr_63984_64740 = state_63959__$1;
(statearr_63984_64740[(1)] = (14));

} else {
var statearr_63985_64741 = state_63959__$1;
(statearr_63985_64741[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63960 === (9))){
var inst_63947 = (state_63959[(2)]);
var inst_63948 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_63959__$1 = (function (){var statearr_63986 = state_63959;
(statearr_63986[(15)] = inst_63947);

return statearr_63986;
})();
if(cljs.core.truth_(inst_63948)){
var statearr_63987_64742 = state_63959__$1;
(statearr_63987_64742[(1)] = (21));

} else {
var statearr_63988_64743 = state_63959__$1;
(statearr_63988_64743[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63960 === (5))){
var inst_63903 = cljs.core.async.close_BANG_(out);
var state_63959__$1 = state_63959;
var statearr_63989_64744 = state_63959__$1;
(statearr_63989_64744[(2)] = inst_63903);

(statearr_63989_64744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63960 === (14))){
var inst_63925 = (state_63959[(7)]);
var inst_63927 = cljs.core.chunked_seq_QMARK_(inst_63925);
var state_63959__$1 = state_63959;
if(inst_63927){
var statearr_63990_64745 = state_63959__$1;
(statearr_63990_64745[(1)] = (17));

} else {
var statearr_63991_64746 = state_63959__$1;
(statearr_63991_64746[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63960 === (16))){
var inst_63943 = (state_63959[(2)]);
var state_63959__$1 = state_63959;
var statearr_63992_64747 = state_63959__$1;
(statearr_63992_64747[(2)] = inst_63943);

(statearr_63992_64747[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63960 === (10))){
var inst_63912 = (state_63959[(9)]);
var inst_63914 = (state_63959[(10)]);
var inst_63919 = cljs.core._nth(inst_63912,inst_63914);
var state_63959__$1 = state_63959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63959__$1,(13),out,inst_63919);
} else {
if((state_val_63960 === (18))){
var inst_63925 = (state_63959[(7)]);
var inst_63934 = cljs.core.first(inst_63925);
var state_63959__$1 = state_63959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63959__$1,(20),out,inst_63934);
} else {
if((state_val_63960 === (8))){
var inst_63914 = (state_63959[(10)]);
var inst_63913 = (state_63959[(11)]);
var inst_63916 = (inst_63914 < inst_63913);
var inst_63917 = inst_63916;
var state_63959__$1 = state_63959;
if(cljs.core.truth_(inst_63917)){
var statearr_63993_64748 = state_63959__$1;
(statearr_63993_64748[(1)] = (10));

} else {
var statearr_63994_64749 = state_63959__$1;
(statearr_63994_64749[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__62619__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__62619__auto____0 = (function (){
var statearr_63995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63995[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__62619__auto__);

(statearr_63995[(1)] = (1));

return statearr_63995;
});
var cljs$core$async$mapcat_STAR__$_state_machine__62619__auto____1 = (function (state_63959){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_63959);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e63996){var ex__62622__auto__ = e63996;
var statearr_63997_64750 = state_63959;
(statearr_63997_64750[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_63959[(4)]))){
var statearr_63998_64751 = state_63959;
(statearr_63998_64751[(1)] = cljs.core.first((state_63959[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64752 = state_63959;
state_63959 = G__64752;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__62619__auto__ = function(state_63959){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__62619__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__62619__auto____1.call(this,state_63959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__62619__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__62619__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__62619__auto__;
})()
})();
var state__62656__auto__ = (function (){var statearr_63999 = f__62655__auto__();
(statearr_63999[(6)] = c__62654__auto__);

return statearr_63999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
}));

return c__62654__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__64001 = arguments.length;
switch (G__64001) {
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
var G__64003 = arguments.length;
switch (G__64003) {
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
var G__64005 = arguments.length;
switch (G__64005) {
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
var c__62654__auto___64758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = (function (state_64029){
var state_val_64030 = (state_64029[(1)]);
if((state_val_64030 === (7))){
var inst_64024 = (state_64029[(2)]);
var state_64029__$1 = state_64029;
var statearr_64031_64759 = state_64029__$1;
(statearr_64031_64759[(2)] = inst_64024);

(statearr_64031_64759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64030 === (1))){
var inst_64006 = null;
var state_64029__$1 = (function (){var statearr_64032 = state_64029;
(statearr_64032[(7)] = inst_64006);

return statearr_64032;
})();
var statearr_64033_64760 = state_64029__$1;
(statearr_64033_64760[(2)] = null);

(statearr_64033_64760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64030 === (4))){
var inst_64009 = (state_64029[(8)]);
var inst_64009__$1 = (state_64029[(2)]);
var inst_64010 = (inst_64009__$1 == null);
var inst_64011 = cljs.core.not(inst_64010);
var state_64029__$1 = (function (){var statearr_64034 = state_64029;
(statearr_64034[(8)] = inst_64009__$1);

return statearr_64034;
})();
if(inst_64011){
var statearr_64035_64762 = state_64029__$1;
(statearr_64035_64762[(1)] = (5));

} else {
var statearr_64036_64763 = state_64029__$1;
(statearr_64036_64763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64030 === (6))){
var state_64029__$1 = state_64029;
var statearr_64037_64767 = state_64029__$1;
(statearr_64037_64767[(2)] = null);

(statearr_64037_64767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64030 === (3))){
var inst_64026 = (state_64029[(2)]);
var inst_64027 = cljs.core.async.close_BANG_(out);
var state_64029__$1 = (function (){var statearr_64038 = state_64029;
(statearr_64038[(9)] = inst_64026);

return statearr_64038;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64029__$1,inst_64027);
} else {
if((state_val_64030 === (2))){
var state_64029__$1 = state_64029;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64029__$1,(4),ch);
} else {
if((state_val_64030 === (11))){
var inst_64009 = (state_64029[(8)]);
var inst_64018 = (state_64029[(2)]);
var inst_64006 = inst_64009;
var state_64029__$1 = (function (){var statearr_64039 = state_64029;
(statearr_64039[(10)] = inst_64018);

(statearr_64039[(7)] = inst_64006);

return statearr_64039;
})();
var statearr_64040_64772 = state_64029__$1;
(statearr_64040_64772[(2)] = null);

(statearr_64040_64772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64030 === (9))){
var inst_64009 = (state_64029[(8)]);
var state_64029__$1 = state_64029;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64029__$1,(11),out,inst_64009);
} else {
if((state_val_64030 === (5))){
var inst_64006 = (state_64029[(7)]);
var inst_64009 = (state_64029[(8)]);
var inst_64013 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64009,inst_64006);
var state_64029__$1 = state_64029;
if(inst_64013){
var statearr_64042_64773 = state_64029__$1;
(statearr_64042_64773[(1)] = (8));

} else {
var statearr_64043_64774 = state_64029__$1;
(statearr_64043_64774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64030 === (10))){
var inst_64021 = (state_64029[(2)]);
var state_64029__$1 = state_64029;
var statearr_64044_64775 = state_64029__$1;
(statearr_64044_64775[(2)] = inst_64021);

(statearr_64044_64775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64030 === (8))){
var inst_64006 = (state_64029[(7)]);
var tmp64041 = inst_64006;
var inst_64006__$1 = tmp64041;
var state_64029__$1 = (function (){var statearr_64045 = state_64029;
(statearr_64045[(7)] = inst_64006__$1);

return statearr_64045;
})();
var statearr_64046_64776 = state_64029__$1;
(statearr_64046_64776[(2)] = null);

(statearr_64046_64776[(1)] = (2));


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
var cljs$core$async$state_machine__62619__auto__ = null;
var cljs$core$async$state_machine__62619__auto____0 = (function (){
var statearr_64047 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64047[(0)] = cljs$core$async$state_machine__62619__auto__);

(statearr_64047[(1)] = (1));

return statearr_64047;
});
var cljs$core$async$state_machine__62619__auto____1 = (function (state_64029){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_64029);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e64048){var ex__62622__auto__ = e64048;
var statearr_64049_64777 = state_64029;
(statearr_64049_64777[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_64029[(4)]))){
var statearr_64050_64778 = state_64029;
(statearr_64050_64778[(1)] = cljs.core.first((state_64029[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64779 = state_64029;
state_64029 = G__64779;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs$core$async$state_machine__62619__auto__ = function(state_64029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62619__auto____1.call(this,state_64029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62619__auto____0;
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62619__auto____1;
return cljs$core$async$state_machine__62619__auto__;
})()
})();
var state__62656__auto__ = (function (){var statearr_64051 = f__62655__auto__();
(statearr_64051[(6)] = c__62654__auto___64758);

return statearr_64051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__64053 = arguments.length;
switch (G__64053) {
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
var c__62654__auto___64782 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = (function (state_64091){
var state_val_64092 = (state_64091[(1)]);
if((state_val_64092 === (7))){
var inst_64087 = (state_64091[(2)]);
var state_64091__$1 = state_64091;
var statearr_64093_64783 = state_64091__$1;
(statearr_64093_64783[(2)] = inst_64087);

(statearr_64093_64783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64092 === (1))){
var inst_64054 = (new Array(n));
var inst_64055 = inst_64054;
var inst_64056 = (0);
var state_64091__$1 = (function (){var statearr_64094 = state_64091;
(statearr_64094[(7)] = inst_64055);

(statearr_64094[(8)] = inst_64056);

return statearr_64094;
})();
var statearr_64095_64784 = state_64091__$1;
(statearr_64095_64784[(2)] = null);

(statearr_64095_64784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64092 === (4))){
var inst_64059 = (state_64091[(9)]);
var inst_64059__$1 = (state_64091[(2)]);
var inst_64060 = (inst_64059__$1 == null);
var inst_64061 = cljs.core.not(inst_64060);
var state_64091__$1 = (function (){var statearr_64096 = state_64091;
(statearr_64096[(9)] = inst_64059__$1);

return statearr_64096;
})();
if(inst_64061){
var statearr_64097_64785 = state_64091__$1;
(statearr_64097_64785[(1)] = (5));

} else {
var statearr_64098_64786 = state_64091__$1;
(statearr_64098_64786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64092 === (15))){
var inst_64081 = (state_64091[(2)]);
var state_64091__$1 = state_64091;
var statearr_64099_64787 = state_64091__$1;
(statearr_64099_64787[(2)] = inst_64081);

(statearr_64099_64787[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64092 === (13))){
var state_64091__$1 = state_64091;
var statearr_64100_64788 = state_64091__$1;
(statearr_64100_64788[(2)] = null);

(statearr_64100_64788[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64092 === (6))){
var inst_64056 = (state_64091[(8)]);
var inst_64077 = (inst_64056 > (0));
var state_64091__$1 = state_64091;
if(cljs.core.truth_(inst_64077)){
var statearr_64101_64789 = state_64091__$1;
(statearr_64101_64789[(1)] = (12));

} else {
var statearr_64102_64790 = state_64091__$1;
(statearr_64102_64790[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64092 === (3))){
var inst_64089 = (state_64091[(2)]);
var state_64091__$1 = state_64091;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64091__$1,inst_64089);
} else {
if((state_val_64092 === (12))){
var inst_64055 = (state_64091[(7)]);
var inst_64079 = cljs.core.vec(inst_64055);
var state_64091__$1 = state_64091;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64091__$1,(15),out,inst_64079);
} else {
if((state_val_64092 === (2))){
var state_64091__$1 = state_64091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64091__$1,(4),ch);
} else {
if((state_val_64092 === (11))){
var inst_64071 = (state_64091[(2)]);
var inst_64072 = (new Array(n));
var inst_64055 = inst_64072;
var inst_64056 = (0);
var state_64091__$1 = (function (){var statearr_64103 = state_64091;
(statearr_64103[(10)] = inst_64071);

(statearr_64103[(7)] = inst_64055);

(statearr_64103[(8)] = inst_64056);

return statearr_64103;
})();
var statearr_64104_64791 = state_64091__$1;
(statearr_64104_64791[(2)] = null);

(statearr_64104_64791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64092 === (9))){
var inst_64055 = (state_64091[(7)]);
var inst_64069 = cljs.core.vec(inst_64055);
var state_64091__$1 = state_64091;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64091__$1,(11),out,inst_64069);
} else {
if((state_val_64092 === (5))){
var inst_64059 = (state_64091[(9)]);
var inst_64064 = (state_64091[(11)]);
var inst_64055 = (state_64091[(7)]);
var inst_64056 = (state_64091[(8)]);
var inst_64063 = (inst_64055[inst_64056] = inst_64059);
var inst_64064__$1 = (inst_64056 + (1));
var inst_64065 = (inst_64064__$1 < n);
var state_64091__$1 = (function (){var statearr_64105 = state_64091;
(statearr_64105[(12)] = inst_64063);

(statearr_64105[(11)] = inst_64064__$1);

return statearr_64105;
})();
if(cljs.core.truth_(inst_64065)){
var statearr_64106_64794 = state_64091__$1;
(statearr_64106_64794[(1)] = (8));

} else {
var statearr_64107_64795 = state_64091__$1;
(statearr_64107_64795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64092 === (14))){
var inst_64084 = (state_64091[(2)]);
var inst_64085 = cljs.core.async.close_BANG_(out);
var state_64091__$1 = (function (){var statearr_64109 = state_64091;
(statearr_64109[(13)] = inst_64084);

return statearr_64109;
})();
var statearr_64110_64796 = state_64091__$1;
(statearr_64110_64796[(2)] = inst_64085);

(statearr_64110_64796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64092 === (10))){
var inst_64075 = (state_64091[(2)]);
var state_64091__$1 = state_64091;
var statearr_64111_64797 = state_64091__$1;
(statearr_64111_64797[(2)] = inst_64075);

(statearr_64111_64797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64092 === (8))){
var inst_64064 = (state_64091[(11)]);
var inst_64055 = (state_64091[(7)]);
var tmp64108 = inst_64055;
var inst_64055__$1 = tmp64108;
var inst_64056 = inst_64064;
var state_64091__$1 = (function (){var statearr_64112 = state_64091;
(statearr_64112[(7)] = inst_64055__$1);

(statearr_64112[(8)] = inst_64056);

return statearr_64112;
})();
var statearr_64113_64798 = state_64091__$1;
(statearr_64113_64798[(2)] = null);

(statearr_64113_64798[(1)] = (2));


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
var cljs$core$async$state_machine__62619__auto__ = null;
var cljs$core$async$state_machine__62619__auto____0 = (function (){
var statearr_64114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64114[(0)] = cljs$core$async$state_machine__62619__auto__);

(statearr_64114[(1)] = (1));

return statearr_64114;
});
var cljs$core$async$state_machine__62619__auto____1 = (function (state_64091){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_64091);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e64115){var ex__62622__auto__ = e64115;
var statearr_64116_64799 = state_64091;
(statearr_64116_64799[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_64091[(4)]))){
var statearr_64117_64800 = state_64091;
(statearr_64117_64800[(1)] = cljs.core.first((state_64091[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64801 = state_64091;
state_64091 = G__64801;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs$core$async$state_machine__62619__auto__ = function(state_64091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62619__auto____1.call(this,state_64091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62619__auto____0;
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62619__auto____1;
return cljs$core$async$state_machine__62619__auto__;
})()
})();
var state__62656__auto__ = (function (){var statearr_64118 = f__62655__auto__();
(statearr_64118[(6)] = c__62654__auto___64782);

return statearr_64118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__64120 = arguments.length;
switch (G__64120) {
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
var c__62654__auto___64803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = (function (state_64162){
var state_val_64163 = (state_64162[(1)]);
if((state_val_64163 === (7))){
var inst_64158 = (state_64162[(2)]);
var state_64162__$1 = state_64162;
var statearr_64164_64804 = state_64162__$1;
(statearr_64164_64804[(2)] = inst_64158);

(statearr_64164_64804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64163 === (1))){
var inst_64121 = [];
var inst_64122 = inst_64121;
var inst_64123 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_64162__$1 = (function (){var statearr_64165 = state_64162;
(statearr_64165[(7)] = inst_64123);

(statearr_64165[(8)] = inst_64122);

return statearr_64165;
})();
var statearr_64166_64805 = state_64162__$1;
(statearr_64166_64805[(2)] = null);

(statearr_64166_64805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64163 === (4))){
var inst_64126 = (state_64162[(9)]);
var inst_64126__$1 = (state_64162[(2)]);
var inst_64127 = (inst_64126__$1 == null);
var inst_64128 = cljs.core.not(inst_64127);
var state_64162__$1 = (function (){var statearr_64167 = state_64162;
(statearr_64167[(9)] = inst_64126__$1);

return statearr_64167;
})();
if(inst_64128){
var statearr_64168_64806 = state_64162__$1;
(statearr_64168_64806[(1)] = (5));

} else {
var statearr_64169_64807 = state_64162__$1;
(statearr_64169_64807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64163 === (15))){
var inst_64152 = (state_64162[(2)]);
var state_64162__$1 = state_64162;
var statearr_64170_64808 = state_64162__$1;
(statearr_64170_64808[(2)] = inst_64152);

(statearr_64170_64808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64163 === (13))){
var state_64162__$1 = state_64162;
var statearr_64171_64809 = state_64162__$1;
(statearr_64171_64809[(2)] = null);

(statearr_64171_64809[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64163 === (6))){
var inst_64122 = (state_64162[(8)]);
var inst_64147 = inst_64122.length;
var inst_64148 = (inst_64147 > (0));
var state_64162__$1 = state_64162;
if(cljs.core.truth_(inst_64148)){
var statearr_64172_64810 = state_64162__$1;
(statearr_64172_64810[(1)] = (12));

} else {
var statearr_64173_64811 = state_64162__$1;
(statearr_64173_64811[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64163 === (3))){
var inst_64160 = (state_64162[(2)]);
var state_64162__$1 = state_64162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64162__$1,inst_64160);
} else {
if((state_val_64163 === (12))){
var inst_64122 = (state_64162[(8)]);
var inst_64150 = cljs.core.vec(inst_64122);
var state_64162__$1 = state_64162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64162__$1,(15),out,inst_64150);
} else {
if((state_val_64163 === (2))){
var state_64162__$1 = state_64162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64162__$1,(4),ch);
} else {
if((state_val_64163 === (11))){
var inst_64126 = (state_64162[(9)]);
var inst_64130 = (state_64162[(10)]);
var inst_64140 = (state_64162[(2)]);
var inst_64141 = [];
var inst_64142 = inst_64141.push(inst_64126);
var inst_64122 = inst_64141;
var inst_64123 = inst_64130;
var state_64162__$1 = (function (){var statearr_64174 = state_64162;
(statearr_64174[(11)] = inst_64140);

(statearr_64174[(12)] = inst_64142);

(statearr_64174[(7)] = inst_64123);

(statearr_64174[(8)] = inst_64122);

return statearr_64174;
})();
var statearr_64175_64812 = state_64162__$1;
(statearr_64175_64812[(2)] = null);

(statearr_64175_64812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64163 === (9))){
var inst_64122 = (state_64162[(8)]);
var inst_64138 = cljs.core.vec(inst_64122);
var state_64162__$1 = state_64162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64162__$1,(11),out,inst_64138);
} else {
if((state_val_64163 === (5))){
var inst_64126 = (state_64162[(9)]);
var inst_64130 = (state_64162[(10)]);
var inst_64123 = (state_64162[(7)]);
var inst_64130__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_64126) : f.call(null,inst_64126));
var inst_64131 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64130__$1,inst_64123);
var inst_64132 = cljs.core.keyword_identical_QMARK_(inst_64123,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_64133 = ((inst_64131) || (inst_64132));
var state_64162__$1 = (function (){var statearr_64176 = state_64162;
(statearr_64176[(10)] = inst_64130__$1);

return statearr_64176;
})();
if(cljs.core.truth_(inst_64133)){
var statearr_64177_64813 = state_64162__$1;
(statearr_64177_64813[(1)] = (8));

} else {
var statearr_64178_64814 = state_64162__$1;
(statearr_64178_64814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64163 === (14))){
var inst_64155 = (state_64162[(2)]);
var inst_64156 = cljs.core.async.close_BANG_(out);
var state_64162__$1 = (function (){var statearr_64180 = state_64162;
(statearr_64180[(13)] = inst_64155);

return statearr_64180;
})();
var statearr_64181_64815 = state_64162__$1;
(statearr_64181_64815[(2)] = inst_64156);

(statearr_64181_64815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64163 === (10))){
var inst_64145 = (state_64162[(2)]);
var state_64162__$1 = state_64162;
var statearr_64182_64816 = state_64162__$1;
(statearr_64182_64816[(2)] = inst_64145);

(statearr_64182_64816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64163 === (8))){
var inst_64126 = (state_64162[(9)]);
var inst_64130 = (state_64162[(10)]);
var inst_64122 = (state_64162[(8)]);
var inst_64135 = inst_64122.push(inst_64126);
var tmp64179 = inst_64122;
var inst_64122__$1 = tmp64179;
var inst_64123 = inst_64130;
var state_64162__$1 = (function (){var statearr_64183 = state_64162;
(statearr_64183[(7)] = inst_64123);

(statearr_64183[(14)] = inst_64135);

(statearr_64183[(8)] = inst_64122__$1);

return statearr_64183;
})();
var statearr_64184_64817 = state_64162__$1;
(statearr_64184_64817[(2)] = null);

(statearr_64184_64817[(1)] = (2));


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
var cljs$core$async$state_machine__62619__auto__ = null;
var cljs$core$async$state_machine__62619__auto____0 = (function (){
var statearr_64185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64185[(0)] = cljs$core$async$state_machine__62619__auto__);

(statearr_64185[(1)] = (1));

return statearr_64185;
});
var cljs$core$async$state_machine__62619__auto____1 = (function (state_64162){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_64162);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e64186){var ex__62622__auto__ = e64186;
var statearr_64187_64818 = state_64162;
(statearr_64187_64818[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_64162[(4)]))){
var statearr_64188_64819 = state_64162;
(statearr_64188_64819[(1)] = cljs.core.first((state_64162[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64820 = state_64162;
state_64162 = G__64820;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs$core$async$state_machine__62619__auto__ = function(state_64162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62619__auto____1.call(this,state_64162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62619__auto____0;
cljs$core$async$state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62619__auto____1;
return cljs$core$async$state_machine__62619__auto__;
})()
})();
var state__62656__auto__ = (function (){var statearr_64189 = f__62655__auto__();
(statearr_64189[(6)] = c__62654__auto___64803);

return statearr_64189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
