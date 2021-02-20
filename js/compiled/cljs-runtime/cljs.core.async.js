goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__62731 = arguments.length;
switch (G__62731) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62732 = (function (f,blockable,meta62733){
this.f = f;
this.blockable = blockable;
this.meta62733 = meta62733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62734,meta62733__$1){
var self__ = this;
var _62734__$1 = this;
return (new cljs.core.async.t_cljs$core$async62732(self__.f,self__.blockable,meta62733__$1));
}));

(cljs.core.async.t_cljs$core$async62732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62734){
var self__ = this;
var _62734__$1 = this;
return self__.meta62733;
}));

(cljs.core.async.t_cljs$core$async62732.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62732.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62732.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async62732.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async62732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta62733","meta62733",-69749463,null)], null);
}));

(cljs.core.async.t_cljs$core$async62732.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62732");

(cljs.core.async.t_cljs$core$async62732.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async62732");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62732.
 */
cljs.core.async.__GT_t_cljs$core$async62732 = (function cljs$core$async$__GT_t_cljs$core$async62732(f__$1,blockable__$1,meta62733){
return (new cljs.core.async.t_cljs$core$async62732(f__$1,blockable__$1,meta62733));
});

}

return (new cljs.core.async.t_cljs$core$async62732(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__62743 = arguments.length;
switch (G__62743) {
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
var G__62747 = arguments.length;
switch (G__62747) {
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
var G__62750 = arguments.length;
switch (G__62750) {
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
var val_64223 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_64223) : fn1.call(null,val_64223));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_64223) : fn1.call(null,val_64223));
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
var G__62755 = arguments.length;
switch (G__62755) {
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
var n__4613__auto___64234 = n;
var x_64235 = (0);
while(true){
if((x_64235 < n__4613__auto___64234)){
(a[x_64235] = x_64235);

var G__64236 = (x_64235 + (1));
x_64235 = G__64236;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62756 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62756 = (function (flag,meta62757){
this.flag = flag;
this.meta62757 = meta62757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62758,meta62757__$1){
var self__ = this;
var _62758__$1 = this;
return (new cljs.core.async.t_cljs$core$async62756(self__.flag,meta62757__$1));
}));

(cljs.core.async.t_cljs$core$async62756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62758){
var self__ = this;
var _62758__$1 = this;
return self__.meta62757;
}));

(cljs.core.async.t_cljs$core$async62756.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62756.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async62756.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62756.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async62756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta62757","meta62757",1350923082,null)], null);
}));

(cljs.core.async.t_cljs$core$async62756.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62756");

(cljs.core.async.t_cljs$core$async62756.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async62756");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62756.
 */
cljs.core.async.__GT_t_cljs$core$async62756 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async62756(flag__$1,meta62757){
return (new cljs.core.async.t_cljs$core$async62756(flag__$1,meta62757));
});

}

return (new cljs.core.async.t_cljs$core$async62756(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62759 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62759 = (function (flag,cb,meta62760){
this.flag = flag;
this.cb = cb;
this.meta62760 = meta62760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62761,meta62760__$1){
var self__ = this;
var _62761__$1 = this;
return (new cljs.core.async.t_cljs$core$async62759(self__.flag,self__.cb,meta62760__$1));
}));

(cljs.core.async.t_cljs$core$async62759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62761){
var self__ = this;
var _62761__$1 = this;
return self__.meta62760;
}));

(cljs.core.async.t_cljs$core$async62759.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62759.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async62759.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62759.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async62759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta62760","meta62760",1101866249,null)], null);
}));

(cljs.core.async.t_cljs$core$async62759.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62759");

(cljs.core.async.t_cljs$core$async62759.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async62759");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62759.
 */
cljs.core.async.__GT_t_cljs$core$async62759 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async62759(flag__$1,cb__$1,meta62760){
return (new cljs.core.async.t_cljs$core$async62759(flag__$1,cb__$1,meta62760));
});

}

return (new cljs.core.async.t_cljs$core$async62759(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__62762_SHARP_){
var G__62764 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62762_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__62764) : fret.call(null,G__62764));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__62763_SHARP_){
var G__62765 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62763_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__62765) : fret.call(null,G__62765));
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
var G__64241 = (i + (1));
i = G__64241;
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
var len__4736__auto___64242 = arguments.length;
var i__4737__auto___64243 = (0);
while(true){
if((i__4737__auto___64243 < len__4736__auto___64242)){
args__4742__auto__.push((arguments[i__4737__auto___64243]));

var G__64244 = (i__4737__auto___64243 + (1));
i__4737__auto___64243 = G__64244;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__62768){
var map__62769 = p__62768;
var map__62769__$1 = (((((!((map__62769 == null))))?(((((map__62769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62769):map__62769);
var opts = map__62769__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq62766){
var G__62767 = cljs.core.first(seq62766);
var seq62766__$1 = cljs.core.next(seq62766);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62767,seq62766__$1);
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
var G__62772 = arguments.length;
switch (G__62772) {
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
var c__62673__auto___64247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = (function (state_62796){
var state_val_62797 = (state_62796[(1)]);
if((state_val_62797 === (7))){
var inst_62792 = (state_62796[(2)]);
var state_62796__$1 = state_62796;
var statearr_62798_64248 = state_62796__$1;
(statearr_62798_64248[(2)] = inst_62792);

(statearr_62798_64248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62797 === (1))){
var state_62796__$1 = state_62796;
var statearr_62799_64249 = state_62796__$1;
(statearr_62799_64249[(2)] = null);

(statearr_62799_64249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62797 === (4))){
var inst_62775 = (state_62796[(7)]);
var inst_62775__$1 = (state_62796[(2)]);
var inst_62776 = (inst_62775__$1 == null);
var state_62796__$1 = (function (){var statearr_62800 = state_62796;
(statearr_62800[(7)] = inst_62775__$1);

return statearr_62800;
})();
if(cljs.core.truth_(inst_62776)){
var statearr_62801_64254 = state_62796__$1;
(statearr_62801_64254[(1)] = (5));

} else {
var statearr_62802_64255 = state_62796__$1;
(statearr_62802_64255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62797 === (13))){
var state_62796__$1 = state_62796;
var statearr_62803_64256 = state_62796__$1;
(statearr_62803_64256[(2)] = null);

(statearr_62803_64256[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62797 === (6))){
var inst_62775 = (state_62796[(7)]);
var state_62796__$1 = state_62796;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62796__$1,(11),to,inst_62775);
} else {
if((state_val_62797 === (3))){
var inst_62794 = (state_62796[(2)]);
var state_62796__$1 = state_62796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62796__$1,inst_62794);
} else {
if((state_val_62797 === (12))){
var state_62796__$1 = state_62796;
var statearr_62804_64258 = state_62796__$1;
(statearr_62804_64258[(2)] = null);

(statearr_62804_64258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62797 === (2))){
var state_62796__$1 = state_62796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62796__$1,(4),from);
} else {
if((state_val_62797 === (11))){
var inst_62785 = (state_62796[(2)]);
var state_62796__$1 = state_62796;
if(cljs.core.truth_(inst_62785)){
var statearr_62805_64262 = state_62796__$1;
(statearr_62805_64262[(1)] = (12));

} else {
var statearr_62806_64263 = state_62796__$1;
(statearr_62806_64263[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62797 === (9))){
var state_62796__$1 = state_62796;
var statearr_62807_64264 = state_62796__$1;
(statearr_62807_64264[(2)] = null);

(statearr_62807_64264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62797 === (5))){
var state_62796__$1 = state_62796;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62808_64266 = state_62796__$1;
(statearr_62808_64266[(1)] = (8));

} else {
var statearr_62809_64267 = state_62796__$1;
(statearr_62809_64267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62797 === (14))){
var inst_62790 = (state_62796[(2)]);
var state_62796__$1 = state_62796;
var statearr_62810_64268 = state_62796__$1;
(statearr_62810_64268[(2)] = inst_62790);

(statearr_62810_64268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62797 === (10))){
var inst_62782 = (state_62796[(2)]);
var state_62796__$1 = state_62796;
var statearr_62811_64272 = state_62796__$1;
(statearr_62811_64272[(2)] = inst_62782);

(statearr_62811_64272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62797 === (8))){
var inst_62779 = cljs.core.async.close_BANG_(to);
var state_62796__$1 = state_62796;
var statearr_62812_64273 = state_62796__$1;
(statearr_62812_64273[(2)] = inst_62779);

(statearr_62812_64273[(1)] = (10));


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
var cljs$core$async$state_machine__62638__auto__ = null;
var cljs$core$async$state_machine__62638__auto____0 = (function (){
var statearr_62813 = [null,null,null,null,null,null,null,null];
(statearr_62813[(0)] = cljs$core$async$state_machine__62638__auto__);

(statearr_62813[(1)] = (1));

return statearr_62813;
});
var cljs$core$async$state_machine__62638__auto____1 = (function (state_62796){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_62796);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e62814){var ex__62641__auto__ = e62814;
var statearr_62815_64274 = state_62796;
(statearr_62815_64274[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_62796[(4)]))){
var statearr_62816_64275 = state_62796;
(statearr_62816_64275[(1)] = cljs.core.first((state_62796[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64277 = state_62796;
state_62796 = G__64277;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs$core$async$state_machine__62638__auto__ = function(state_62796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62638__auto____1.call(this,state_62796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62638__auto____0;
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62638__auto____1;
return cljs$core$async$state_machine__62638__auto__;
})()
})();
var state__62675__auto__ = (function (){var statearr_62817 = f__62674__auto__();
(statearr_62817[(6)] = c__62673__auto___64247);

return statearr_62817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
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
var process = (function (p__62818){
var vec__62819 = p__62818;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62819,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62819,(1),null);
var job = vec__62819;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__62673__auto___64278 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = (function (state_62826){
var state_val_62827 = (state_62826[(1)]);
if((state_val_62827 === (1))){
var state_62826__$1 = state_62826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62826__$1,(2),res,v);
} else {
if((state_val_62827 === (2))){
var inst_62823 = (state_62826[(2)]);
var inst_62824 = cljs.core.async.close_BANG_(res);
var state_62826__$1 = (function (){var statearr_62828 = state_62826;
(statearr_62828[(7)] = inst_62823);

return statearr_62828;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62826__$1,inst_62824);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____0 = (function (){
var statearr_62829 = [null,null,null,null,null,null,null,null];
(statearr_62829[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__);

(statearr_62829[(1)] = (1));

return statearr_62829;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____1 = (function (state_62826){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_62826);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e62830){var ex__62641__auto__ = e62830;
var statearr_62831_64282 = state_62826;
(statearr_62831_64282[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_62826[(4)]))){
var statearr_62832_64283 = state_62826;
(statearr_62832_64283[(1)] = cljs.core.first((state_62826[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64284 = state_62826;
state_62826 = G__64284;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__ = function(state_62826){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____1.call(this,state_62826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__;
})()
})();
var state__62675__auto__ = (function (){var statearr_62833 = f__62674__auto__();
(statearr_62833[(6)] = c__62673__auto___64278);

return statearr_62833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__62834){
var vec__62835 = p__62834;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62835,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62835,(1),null);
var job = vec__62835;
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
var n__4613__auto___64285 = n;
var __64286 = (0);
while(true){
if((__64286 < n__4613__auto___64285)){
var G__62838_64287 = type;
var G__62838_64288__$1 = (((G__62838_64287 instanceof cljs.core.Keyword))?G__62838_64287.fqn:null);
switch (G__62838_64288__$1) {
case "compute":
var c__62673__auto___64290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__64286,c__62673__auto___64290,G__62838_64287,G__62838_64288__$1,n__4613__auto___64285,jobs,results,process,async){
return (function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = ((function (__64286,c__62673__auto___64290,G__62838_64287,G__62838_64288__$1,n__4613__auto___64285,jobs,results,process,async){
return (function (state_62851){
var state_val_62852 = (state_62851[(1)]);
if((state_val_62852 === (1))){
var state_62851__$1 = state_62851;
var statearr_62853_64291 = state_62851__$1;
(statearr_62853_64291[(2)] = null);

(statearr_62853_64291[(1)] = (2));


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
var inst_62842 = process(inst_62841);
var state_62851__$1 = state_62851;
if(cljs.core.truth_(inst_62842)){
var statearr_62854_64292 = state_62851__$1;
(statearr_62854_64292[(1)] = (5));

} else {
var statearr_62855_64293 = state_62851__$1;
(statearr_62855_64293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (5))){
var state_62851__$1 = state_62851;
var statearr_62856_64294 = state_62851__$1;
(statearr_62856_64294[(2)] = null);

(statearr_62856_64294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (6))){
var state_62851__$1 = state_62851;
var statearr_62857_64295 = state_62851__$1;
(statearr_62857_64295[(2)] = null);

(statearr_62857_64295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (7))){
var inst_62847 = (state_62851[(2)]);
var state_62851__$1 = state_62851;
var statearr_62858_64296 = state_62851__$1;
(statearr_62858_64296[(2)] = inst_62847);

(statearr_62858_64296[(1)] = (3));


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
});})(__64286,c__62673__auto___64290,G__62838_64287,G__62838_64288__$1,n__4613__auto___64285,jobs,results,process,async))
;
return ((function (__64286,switch__62637__auto__,c__62673__auto___64290,G__62838_64287,G__62838_64288__$1,n__4613__auto___64285,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____0 = (function (){
var statearr_62859 = [null,null,null,null,null,null,null];
(statearr_62859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__);

(statearr_62859[(1)] = (1));

return statearr_62859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____1 = (function (state_62851){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_62851);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e62860){var ex__62641__auto__ = e62860;
var statearr_62861_64297 = state_62851;
(statearr_62861_64297[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_62851[(4)]))){
var statearr_62862_64298 = state_62851;
(statearr_62862_64298[(1)] = cljs.core.first((state_62851[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64299 = state_62851;
state_62851 = G__64299;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__ = function(state_62851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____1.call(this,state_62851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__;
})()
;})(__64286,switch__62637__auto__,c__62673__auto___64290,G__62838_64287,G__62838_64288__$1,n__4613__auto___64285,jobs,results,process,async))
})();
var state__62675__auto__ = (function (){var statearr_62863 = f__62674__auto__();
(statearr_62863[(6)] = c__62673__auto___64290);

return statearr_62863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
});})(__64286,c__62673__auto___64290,G__62838_64287,G__62838_64288__$1,n__4613__auto___64285,jobs,results,process,async))
);


break;
case "async":
var c__62673__auto___64300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__64286,c__62673__auto___64300,G__62838_64287,G__62838_64288__$1,n__4613__auto___64285,jobs,results,process,async){
return (function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = ((function (__64286,c__62673__auto___64300,G__62838_64287,G__62838_64288__$1,n__4613__auto___64285,jobs,results,process,async){
return (function (state_62876){
var state_val_62877 = (state_62876[(1)]);
if((state_val_62877 === (1))){
var state_62876__$1 = state_62876;
var statearr_62878_64309 = state_62876__$1;
(statearr_62878_64309[(2)] = null);

(statearr_62878_64309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62877 === (2))){
var state_62876__$1 = state_62876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62876__$1,(4),jobs);
} else {
if((state_val_62877 === (3))){
var inst_62874 = (state_62876[(2)]);
var state_62876__$1 = state_62876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62876__$1,inst_62874);
} else {
if((state_val_62877 === (4))){
var inst_62866 = (state_62876[(2)]);
var inst_62867 = async(inst_62866);
var state_62876__$1 = state_62876;
if(cljs.core.truth_(inst_62867)){
var statearr_62879_64314 = state_62876__$1;
(statearr_62879_64314[(1)] = (5));

} else {
var statearr_62880_64315 = state_62876__$1;
(statearr_62880_64315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62877 === (5))){
var state_62876__$1 = state_62876;
var statearr_62881_64316 = state_62876__$1;
(statearr_62881_64316[(2)] = null);

(statearr_62881_64316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62877 === (6))){
var state_62876__$1 = state_62876;
var statearr_62882_64317 = state_62876__$1;
(statearr_62882_64317[(2)] = null);

(statearr_62882_64317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62877 === (7))){
var inst_62872 = (state_62876[(2)]);
var state_62876__$1 = state_62876;
var statearr_62883_64318 = state_62876__$1;
(statearr_62883_64318[(2)] = inst_62872);

(statearr_62883_64318[(1)] = (3));


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
});})(__64286,c__62673__auto___64300,G__62838_64287,G__62838_64288__$1,n__4613__auto___64285,jobs,results,process,async))
;
return ((function (__64286,switch__62637__auto__,c__62673__auto___64300,G__62838_64287,G__62838_64288__$1,n__4613__auto___64285,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____0 = (function (){
var statearr_62884 = [null,null,null,null,null,null,null];
(statearr_62884[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__);

(statearr_62884[(1)] = (1));

return statearr_62884;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____1 = (function (state_62876){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_62876);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e62885){var ex__62641__auto__ = e62885;
var statearr_62886_64321 = state_62876;
(statearr_62886_64321[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_62876[(4)]))){
var statearr_62887_64322 = state_62876;
(statearr_62887_64322[(1)] = cljs.core.first((state_62876[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64323 = state_62876;
state_62876 = G__64323;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__ = function(state_62876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____1.call(this,state_62876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__;
})()
;})(__64286,switch__62637__auto__,c__62673__auto___64300,G__62838_64287,G__62838_64288__$1,n__4613__auto___64285,jobs,results,process,async))
})();
var state__62675__auto__ = (function (){var statearr_62888 = f__62674__auto__();
(statearr_62888[(6)] = c__62673__auto___64300);

return statearr_62888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
});})(__64286,c__62673__auto___64300,G__62838_64287,G__62838_64288__$1,n__4613__auto___64285,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62838_64288__$1)].join('')));

}

var G__64326 = (__64286 + (1));
__64286 = G__64326;
continue;
} else {
}
break;
}

var c__62673__auto___64327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = (function (state_62910){
var state_val_62911 = (state_62910[(1)]);
if((state_val_62911 === (7))){
var inst_62906 = (state_62910[(2)]);
var state_62910__$1 = state_62910;
var statearr_62912_64329 = state_62910__$1;
(statearr_62912_64329[(2)] = inst_62906);

(statearr_62912_64329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62911 === (1))){
var state_62910__$1 = state_62910;
var statearr_62913_64330 = state_62910__$1;
(statearr_62913_64330[(2)] = null);

(statearr_62913_64330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62911 === (4))){
var inst_62891 = (state_62910[(7)]);
var inst_62891__$1 = (state_62910[(2)]);
var inst_62892 = (inst_62891__$1 == null);
var state_62910__$1 = (function (){var statearr_62914 = state_62910;
(statearr_62914[(7)] = inst_62891__$1);

return statearr_62914;
})();
if(cljs.core.truth_(inst_62892)){
var statearr_62915_64331 = state_62910__$1;
(statearr_62915_64331[(1)] = (5));

} else {
var statearr_62916_64332 = state_62910__$1;
(statearr_62916_64332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62911 === (6))){
var inst_62896 = (state_62910[(8)]);
var inst_62891 = (state_62910[(7)]);
var inst_62896__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_62897 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62898 = [inst_62891,inst_62896__$1];
var inst_62899 = (new cljs.core.PersistentVector(null,2,(5),inst_62897,inst_62898,null));
var state_62910__$1 = (function (){var statearr_62917 = state_62910;
(statearr_62917[(8)] = inst_62896__$1);

return statearr_62917;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62910__$1,(8),jobs,inst_62899);
} else {
if((state_val_62911 === (3))){
var inst_62908 = (state_62910[(2)]);
var state_62910__$1 = state_62910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62910__$1,inst_62908);
} else {
if((state_val_62911 === (2))){
var state_62910__$1 = state_62910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62910__$1,(4),from);
} else {
if((state_val_62911 === (9))){
var inst_62903 = (state_62910[(2)]);
var state_62910__$1 = (function (){var statearr_62918 = state_62910;
(statearr_62918[(9)] = inst_62903);

return statearr_62918;
})();
var statearr_62919_64333 = state_62910__$1;
(statearr_62919_64333[(2)] = null);

(statearr_62919_64333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62911 === (5))){
var inst_62894 = cljs.core.async.close_BANG_(jobs);
var state_62910__$1 = state_62910;
var statearr_62920_64334 = state_62910__$1;
(statearr_62920_64334[(2)] = inst_62894);

(statearr_62920_64334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62911 === (8))){
var inst_62896 = (state_62910[(8)]);
var inst_62901 = (state_62910[(2)]);
var state_62910__$1 = (function (){var statearr_62921 = state_62910;
(statearr_62921[(10)] = inst_62901);

return statearr_62921;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62910__$1,(9),results,inst_62896);
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
var cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____0 = (function (){
var statearr_62922 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62922[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__);

(statearr_62922[(1)] = (1));

return statearr_62922;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____1 = (function (state_62910){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_62910);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e62923){var ex__62641__auto__ = e62923;
var statearr_62924_64335 = state_62910;
(statearr_62924_64335[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_62910[(4)]))){
var statearr_62925_64336 = state_62910;
(statearr_62925_64336[(1)] = cljs.core.first((state_62910[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64337 = state_62910;
state_62910 = G__64337;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__ = function(state_62910){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____1.call(this,state_62910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__;
})()
})();
var state__62675__auto__ = (function (){var statearr_62926 = f__62674__auto__();
(statearr_62926[(6)] = c__62673__auto___64327);

return statearr_62926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
}));


var c__62673__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = (function (state_62964){
var state_val_62965 = (state_62964[(1)]);
if((state_val_62965 === (7))){
var inst_62960 = (state_62964[(2)]);
var state_62964__$1 = state_62964;
var statearr_62966_64338 = state_62964__$1;
(statearr_62966_64338[(2)] = inst_62960);

(statearr_62966_64338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62965 === (20))){
var state_62964__$1 = state_62964;
var statearr_62967_64339 = state_62964__$1;
(statearr_62967_64339[(2)] = null);

(statearr_62967_64339[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62965 === (1))){
var state_62964__$1 = state_62964;
var statearr_62968_64340 = state_62964__$1;
(statearr_62968_64340[(2)] = null);

(statearr_62968_64340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62965 === (4))){
var inst_62929 = (state_62964[(7)]);
var inst_62929__$1 = (state_62964[(2)]);
var inst_62930 = (inst_62929__$1 == null);
var state_62964__$1 = (function (){var statearr_62969 = state_62964;
(statearr_62969[(7)] = inst_62929__$1);

return statearr_62969;
})();
if(cljs.core.truth_(inst_62930)){
var statearr_62970_64341 = state_62964__$1;
(statearr_62970_64341[(1)] = (5));

} else {
var statearr_62971_64342 = state_62964__$1;
(statearr_62971_64342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62965 === (15))){
var inst_62942 = (state_62964[(8)]);
var state_62964__$1 = state_62964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62964__$1,(18),to,inst_62942);
} else {
if((state_val_62965 === (21))){
var inst_62955 = (state_62964[(2)]);
var state_62964__$1 = state_62964;
var statearr_62972_64343 = state_62964__$1;
(statearr_62972_64343[(2)] = inst_62955);

(statearr_62972_64343[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62965 === (13))){
var inst_62957 = (state_62964[(2)]);
var state_62964__$1 = (function (){var statearr_62973 = state_62964;
(statearr_62973[(9)] = inst_62957);

return statearr_62973;
})();
var statearr_62974_64344 = state_62964__$1;
(statearr_62974_64344[(2)] = null);

(statearr_62974_64344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62965 === (6))){
var inst_62929 = (state_62964[(7)]);
var state_62964__$1 = state_62964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62964__$1,(11),inst_62929);
} else {
if((state_val_62965 === (17))){
var inst_62950 = (state_62964[(2)]);
var state_62964__$1 = state_62964;
if(cljs.core.truth_(inst_62950)){
var statearr_62975_64345 = state_62964__$1;
(statearr_62975_64345[(1)] = (19));

} else {
var statearr_62976_64346 = state_62964__$1;
(statearr_62976_64346[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62965 === (3))){
var inst_62962 = (state_62964[(2)]);
var state_62964__$1 = state_62964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62964__$1,inst_62962);
} else {
if((state_val_62965 === (12))){
var inst_62939 = (state_62964[(10)]);
var state_62964__$1 = state_62964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62964__$1,(14),inst_62939);
} else {
if((state_val_62965 === (2))){
var state_62964__$1 = state_62964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62964__$1,(4),results);
} else {
if((state_val_62965 === (19))){
var state_62964__$1 = state_62964;
var statearr_62977_64347 = state_62964__$1;
(statearr_62977_64347[(2)] = null);

(statearr_62977_64347[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62965 === (11))){
var inst_62939 = (state_62964[(2)]);
var state_62964__$1 = (function (){var statearr_62978 = state_62964;
(statearr_62978[(10)] = inst_62939);

return statearr_62978;
})();
var statearr_62979_64348 = state_62964__$1;
(statearr_62979_64348[(2)] = null);

(statearr_62979_64348[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62965 === (9))){
var state_62964__$1 = state_62964;
var statearr_62980_64349 = state_62964__$1;
(statearr_62980_64349[(2)] = null);

(statearr_62980_64349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62965 === (5))){
var state_62964__$1 = state_62964;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62981_64350 = state_62964__$1;
(statearr_62981_64350[(1)] = (8));

} else {
var statearr_62982_64351 = state_62964__$1;
(statearr_62982_64351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62965 === (14))){
var inst_62942 = (state_62964[(8)]);
var inst_62942__$1 = (state_62964[(2)]);
var inst_62943 = (inst_62942__$1 == null);
var inst_62944 = cljs.core.not(inst_62943);
var state_62964__$1 = (function (){var statearr_62983 = state_62964;
(statearr_62983[(8)] = inst_62942__$1);

return statearr_62983;
})();
if(inst_62944){
var statearr_62984_64352 = state_62964__$1;
(statearr_62984_64352[(1)] = (15));

} else {
var statearr_62985_64353 = state_62964__$1;
(statearr_62985_64353[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62965 === (16))){
var state_62964__$1 = state_62964;
var statearr_62986_64354 = state_62964__$1;
(statearr_62986_64354[(2)] = false);

(statearr_62986_64354[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62965 === (10))){
var inst_62936 = (state_62964[(2)]);
var state_62964__$1 = state_62964;
var statearr_62987_64355 = state_62964__$1;
(statearr_62987_64355[(2)] = inst_62936);

(statearr_62987_64355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62965 === (18))){
var inst_62947 = (state_62964[(2)]);
var state_62964__$1 = state_62964;
var statearr_62988_64356 = state_62964__$1;
(statearr_62988_64356[(2)] = inst_62947);

(statearr_62988_64356[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62965 === (8))){
var inst_62933 = cljs.core.async.close_BANG_(to);
var state_62964__$1 = state_62964;
var statearr_62989_64357 = state_62964__$1;
(statearr_62989_64357[(2)] = inst_62933);

(statearr_62989_64357[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____0 = (function (){
var statearr_62990 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62990[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__);

(statearr_62990[(1)] = (1));

return statearr_62990;
});
var cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____1 = (function (state_62964){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_62964);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e62991){var ex__62641__auto__ = e62991;
var statearr_62992_64358 = state_62964;
(statearr_62992_64358[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_62964[(4)]))){
var statearr_62993_64359 = state_62964;
(statearr_62993_64359[(1)] = cljs.core.first((state_62964[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64360 = state_62964;
state_62964 = G__64360;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__ = function(state_62964){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____1.call(this,state_62964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__62638__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__62638__auto__;
})()
})();
var state__62675__auto__ = (function (){var statearr_62994 = f__62674__auto__();
(statearr_62994[(6)] = c__62673__auto__);

return statearr_62994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
}));

return c__62673__auto__;
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
var G__62996 = arguments.length;
switch (G__62996) {
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
var G__62998 = arguments.length;
switch (G__62998) {
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
var G__63000 = arguments.length;
switch (G__63000) {
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
var c__62673__auto___64364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = (function (state_63026){
var state_val_63027 = (state_63026[(1)]);
if((state_val_63027 === (7))){
var inst_63022 = (state_63026[(2)]);
var state_63026__$1 = state_63026;
var statearr_63028_64365 = state_63026__$1;
(statearr_63028_64365[(2)] = inst_63022);

(statearr_63028_64365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63027 === (1))){
var state_63026__$1 = state_63026;
var statearr_63029_64366 = state_63026__$1;
(statearr_63029_64366[(2)] = null);

(statearr_63029_64366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63027 === (4))){
var inst_63003 = (state_63026[(7)]);
var inst_63003__$1 = (state_63026[(2)]);
var inst_63004 = (inst_63003__$1 == null);
var state_63026__$1 = (function (){var statearr_63030 = state_63026;
(statearr_63030[(7)] = inst_63003__$1);

return statearr_63030;
})();
if(cljs.core.truth_(inst_63004)){
var statearr_63031_64367 = state_63026__$1;
(statearr_63031_64367[(1)] = (5));

} else {
var statearr_63032_64368 = state_63026__$1;
(statearr_63032_64368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63027 === (13))){
var state_63026__$1 = state_63026;
var statearr_63033_64369 = state_63026__$1;
(statearr_63033_64369[(2)] = null);

(statearr_63033_64369[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63027 === (6))){
var inst_63003 = (state_63026[(7)]);
var inst_63009 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_63003) : p.call(null,inst_63003));
var state_63026__$1 = state_63026;
if(cljs.core.truth_(inst_63009)){
var statearr_63034_64370 = state_63026__$1;
(statearr_63034_64370[(1)] = (9));

} else {
var statearr_63035_64371 = state_63026__$1;
(statearr_63035_64371[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63027 === (3))){
var inst_63024 = (state_63026[(2)]);
var state_63026__$1 = state_63026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63026__$1,inst_63024);
} else {
if((state_val_63027 === (12))){
var state_63026__$1 = state_63026;
var statearr_63036_64372 = state_63026__$1;
(statearr_63036_64372[(2)] = null);

(statearr_63036_64372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63027 === (2))){
var state_63026__$1 = state_63026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63026__$1,(4),ch);
} else {
if((state_val_63027 === (11))){
var inst_63003 = (state_63026[(7)]);
var inst_63013 = (state_63026[(2)]);
var state_63026__$1 = state_63026;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63026__$1,(8),inst_63013,inst_63003);
} else {
if((state_val_63027 === (9))){
var state_63026__$1 = state_63026;
var statearr_63037_64373 = state_63026__$1;
(statearr_63037_64373[(2)] = tc);

(statearr_63037_64373[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63027 === (5))){
var inst_63006 = cljs.core.async.close_BANG_(tc);
var inst_63007 = cljs.core.async.close_BANG_(fc);
var state_63026__$1 = (function (){var statearr_63038 = state_63026;
(statearr_63038[(8)] = inst_63006);

return statearr_63038;
})();
var statearr_63039_64374 = state_63026__$1;
(statearr_63039_64374[(2)] = inst_63007);

(statearr_63039_64374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63027 === (14))){
var inst_63020 = (state_63026[(2)]);
var state_63026__$1 = state_63026;
var statearr_63040_64375 = state_63026__$1;
(statearr_63040_64375[(2)] = inst_63020);

(statearr_63040_64375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63027 === (10))){
var state_63026__$1 = state_63026;
var statearr_63041_64376 = state_63026__$1;
(statearr_63041_64376[(2)] = fc);

(statearr_63041_64376[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63027 === (8))){
var inst_63015 = (state_63026[(2)]);
var state_63026__$1 = state_63026;
if(cljs.core.truth_(inst_63015)){
var statearr_63042_64377 = state_63026__$1;
(statearr_63042_64377[(1)] = (12));

} else {
var statearr_63043_64378 = state_63026__$1;
(statearr_63043_64378[(1)] = (13));

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
var cljs$core$async$state_machine__62638__auto__ = null;
var cljs$core$async$state_machine__62638__auto____0 = (function (){
var statearr_63044 = [null,null,null,null,null,null,null,null,null];
(statearr_63044[(0)] = cljs$core$async$state_machine__62638__auto__);

(statearr_63044[(1)] = (1));

return statearr_63044;
});
var cljs$core$async$state_machine__62638__auto____1 = (function (state_63026){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_63026);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e63045){var ex__62641__auto__ = e63045;
var statearr_63046_64379 = state_63026;
(statearr_63046_64379[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_63026[(4)]))){
var statearr_63047_64380 = state_63026;
(statearr_63047_64380[(1)] = cljs.core.first((state_63026[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64381 = state_63026;
state_63026 = G__64381;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs$core$async$state_machine__62638__auto__ = function(state_63026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62638__auto____1.call(this,state_63026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62638__auto____0;
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62638__auto____1;
return cljs$core$async$state_machine__62638__auto__;
})()
})();
var state__62675__auto__ = (function (){var statearr_63048 = f__62674__auto__();
(statearr_63048[(6)] = c__62673__auto___64364);

return statearr_63048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
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
var c__62673__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = (function (state_63070){
var state_val_63071 = (state_63070[(1)]);
if((state_val_63071 === (7))){
var inst_63066 = (state_63070[(2)]);
var state_63070__$1 = state_63070;
var statearr_63072_64382 = state_63070__$1;
(statearr_63072_64382[(2)] = inst_63066);

(statearr_63072_64382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63071 === (1))){
var inst_63049 = init;
var inst_63050 = inst_63049;
var state_63070__$1 = (function (){var statearr_63073 = state_63070;
(statearr_63073[(7)] = inst_63050);

return statearr_63073;
})();
var statearr_63074_64383 = state_63070__$1;
(statearr_63074_64383[(2)] = null);

(statearr_63074_64383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63071 === (4))){
var inst_63053 = (state_63070[(8)]);
var inst_63053__$1 = (state_63070[(2)]);
var inst_63054 = (inst_63053__$1 == null);
var state_63070__$1 = (function (){var statearr_63075 = state_63070;
(statearr_63075[(8)] = inst_63053__$1);

return statearr_63075;
})();
if(cljs.core.truth_(inst_63054)){
var statearr_63076_64384 = state_63070__$1;
(statearr_63076_64384[(1)] = (5));

} else {
var statearr_63077_64385 = state_63070__$1;
(statearr_63077_64385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63071 === (6))){
var inst_63057 = (state_63070[(9)]);
var inst_63053 = (state_63070[(8)]);
var inst_63050 = (state_63070[(7)]);
var inst_63057__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_63050,inst_63053) : f.call(null,inst_63050,inst_63053));
var inst_63058 = cljs.core.reduced_QMARK_(inst_63057__$1);
var state_63070__$1 = (function (){var statearr_63078 = state_63070;
(statearr_63078[(9)] = inst_63057__$1);

return statearr_63078;
})();
if(inst_63058){
var statearr_63079_64386 = state_63070__$1;
(statearr_63079_64386[(1)] = (8));

} else {
var statearr_63080_64387 = state_63070__$1;
(statearr_63080_64387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63071 === (3))){
var inst_63068 = (state_63070[(2)]);
var state_63070__$1 = state_63070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63070__$1,inst_63068);
} else {
if((state_val_63071 === (2))){
var state_63070__$1 = state_63070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63070__$1,(4),ch);
} else {
if((state_val_63071 === (9))){
var inst_63057 = (state_63070[(9)]);
var inst_63050 = inst_63057;
var state_63070__$1 = (function (){var statearr_63081 = state_63070;
(statearr_63081[(7)] = inst_63050);

return statearr_63081;
})();
var statearr_63082_64388 = state_63070__$1;
(statearr_63082_64388[(2)] = null);

(statearr_63082_64388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63071 === (5))){
var inst_63050 = (state_63070[(7)]);
var state_63070__$1 = state_63070;
var statearr_63083_64389 = state_63070__$1;
(statearr_63083_64389[(2)] = inst_63050);

(statearr_63083_64389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63071 === (10))){
var inst_63064 = (state_63070[(2)]);
var state_63070__$1 = state_63070;
var statearr_63084_64390 = state_63070__$1;
(statearr_63084_64390[(2)] = inst_63064);

(statearr_63084_64390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63071 === (8))){
var inst_63057 = (state_63070[(9)]);
var inst_63060 = cljs.core.deref(inst_63057);
var state_63070__$1 = state_63070;
var statearr_63085_64391 = state_63070__$1;
(statearr_63085_64391[(2)] = inst_63060);

(statearr_63085_64391[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__62638__auto__ = null;
var cljs$core$async$reduce_$_state_machine__62638__auto____0 = (function (){
var statearr_63086 = [null,null,null,null,null,null,null,null,null,null];
(statearr_63086[(0)] = cljs$core$async$reduce_$_state_machine__62638__auto__);

(statearr_63086[(1)] = (1));

return statearr_63086;
});
var cljs$core$async$reduce_$_state_machine__62638__auto____1 = (function (state_63070){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_63070);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e63087){var ex__62641__auto__ = e63087;
var statearr_63088_64392 = state_63070;
(statearr_63088_64392[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_63070[(4)]))){
var statearr_63089_64393 = state_63070;
(statearr_63089_64393[(1)] = cljs.core.first((state_63070[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64394 = state_63070;
state_63070 = G__64394;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__62638__auto__ = function(state_63070){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__62638__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__62638__auto____1.call(this,state_63070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__62638__auto____0;
cljs$core$async$reduce_$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__62638__auto____1;
return cljs$core$async$reduce_$_state_machine__62638__auto__;
})()
})();
var state__62675__auto__ = (function (){var statearr_63090 = f__62674__auto__();
(statearr_63090[(6)] = c__62673__auto__);

return statearr_63090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
}));

return c__62673__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__62673__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = (function (state_63096){
var state_val_63097 = (state_63096[(1)]);
if((state_val_63097 === (1))){
var inst_63091 = cljs.core.async.reduce(f__$1,init,ch);
var state_63096__$1 = state_63096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63096__$1,(2),inst_63091);
} else {
if((state_val_63097 === (2))){
var inst_63093 = (state_63096[(2)]);
var inst_63094 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_63093) : f__$1.call(null,inst_63093));
var state_63096__$1 = state_63096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63096__$1,inst_63094);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__62638__auto__ = null;
var cljs$core$async$transduce_$_state_machine__62638__auto____0 = (function (){
var statearr_63098 = [null,null,null,null,null,null,null];
(statearr_63098[(0)] = cljs$core$async$transduce_$_state_machine__62638__auto__);

(statearr_63098[(1)] = (1));

return statearr_63098;
});
var cljs$core$async$transduce_$_state_machine__62638__auto____1 = (function (state_63096){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_63096);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e63099){var ex__62641__auto__ = e63099;
var statearr_63100_64395 = state_63096;
(statearr_63100_64395[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_63096[(4)]))){
var statearr_63101_64396 = state_63096;
(statearr_63101_64396[(1)] = cljs.core.first((state_63096[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64397 = state_63096;
state_63096 = G__64397;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__62638__auto__ = function(state_63096){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__62638__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__62638__auto____1.call(this,state_63096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__62638__auto____0;
cljs$core$async$transduce_$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__62638__auto____1;
return cljs$core$async$transduce_$_state_machine__62638__auto__;
})()
})();
var state__62675__auto__ = (function (){var statearr_63102 = f__62674__auto__();
(statearr_63102[(6)] = c__62673__auto__);

return statearr_63102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
}));

return c__62673__auto__;
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
var G__63104 = arguments.length;
switch (G__63104) {
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
var c__62673__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = (function (state_63129){
var state_val_63130 = (state_63129[(1)]);
if((state_val_63130 === (7))){
var inst_63111 = (state_63129[(2)]);
var state_63129__$1 = state_63129;
var statearr_63131_64399 = state_63129__$1;
(statearr_63131_64399[(2)] = inst_63111);

(statearr_63131_64399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63130 === (1))){
var inst_63105 = cljs.core.seq(coll);
var inst_63106 = inst_63105;
var state_63129__$1 = (function (){var statearr_63132 = state_63129;
(statearr_63132[(7)] = inst_63106);

return statearr_63132;
})();
var statearr_63133_64400 = state_63129__$1;
(statearr_63133_64400[(2)] = null);

(statearr_63133_64400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63130 === (4))){
var inst_63106 = (state_63129[(7)]);
var inst_63109 = cljs.core.first(inst_63106);
var state_63129__$1 = state_63129;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63129__$1,(7),ch,inst_63109);
} else {
if((state_val_63130 === (13))){
var inst_63123 = (state_63129[(2)]);
var state_63129__$1 = state_63129;
var statearr_63134_64401 = state_63129__$1;
(statearr_63134_64401[(2)] = inst_63123);

(statearr_63134_64401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63130 === (6))){
var inst_63114 = (state_63129[(2)]);
var state_63129__$1 = state_63129;
if(cljs.core.truth_(inst_63114)){
var statearr_63135_64402 = state_63129__$1;
(statearr_63135_64402[(1)] = (8));

} else {
var statearr_63136_64403 = state_63129__$1;
(statearr_63136_64403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63130 === (3))){
var inst_63127 = (state_63129[(2)]);
var state_63129__$1 = state_63129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63129__$1,inst_63127);
} else {
if((state_val_63130 === (12))){
var state_63129__$1 = state_63129;
var statearr_63137_64404 = state_63129__$1;
(statearr_63137_64404[(2)] = null);

(statearr_63137_64404[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63130 === (2))){
var inst_63106 = (state_63129[(7)]);
var state_63129__$1 = state_63129;
if(cljs.core.truth_(inst_63106)){
var statearr_63138_64405 = state_63129__$1;
(statearr_63138_64405[(1)] = (4));

} else {
var statearr_63139_64406 = state_63129__$1;
(statearr_63139_64406[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63130 === (11))){
var inst_63120 = cljs.core.async.close_BANG_(ch);
var state_63129__$1 = state_63129;
var statearr_63140_64407 = state_63129__$1;
(statearr_63140_64407[(2)] = inst_63120);

(statearr_63140_64407[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63130 === (9))){
var state_63129__$1 = state_63129;
if(cljs.core.truth_(close_QMARK_)){
var statearr_63141_64408 = state_63129__$1;
(statearr_63141_64408[(1)] = (11));

} else {
var statearr_63142_64409 = state_63129__$1;
(statearr_63142_64409[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63130 === (5))){
var inst_63106 = (state_63129[(7)]);
var state_63129__$1 = state_63129;
var statearr_63143_64410 = state_63129__$1;
(statearr_63143_64410[(2)] = inst_63106);

(statearr_63143_64410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63130 === (10))){
var inst_63125 = (state_63129[(2)]);
var state_63129__$1 = state_63129;
var statearr_63144_64411 = state_63129__$1;
(statearr_63144_64411[(2)] = inst_63125);

(statearr_63144_64411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63130 === (8))){
var inst_63106 = (state_63129[(7)]);
var inst_63116 = cljs.core.next(inst_63106);
var inst_63106__$1 = inst_63116;
var state_63129__$1 = (function (){var statearr_63145 = state_63129;
(statearr_63145[(7)] = inst_63106__$1);

return statearr_63145;
})();
var statearr_63146_64412 = state_63129__$1;
(statearr_63146_64412[(2)] = null);

(statearr_63146_64412[(1)] = (2));


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
var cljs$core$async$state_machine__62638__auto__ = null;
var cljs$core$async$state_machine__62638__auto____0 = (function (){
var statearr_63147 = [null,null,null,null,null,null,null,null];
(statearr_63147[(0)] = cljs$core$async$state_machine__62638__auto__);

(statearr_63147[(1)] = (1));

return statearr_63147;
});
var cljs$core$async$state_machine__62638__auto____1 = (function (state_63129){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_63129);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e63148){var ex__62641__auto__ = e63148;
var statearr_63149_64413 = state_63129;
(statearr_63149_64413[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_63129[(4)]))){
var statearr_63150_64414 = state_63129;
(statearr_63150_64414[(1)] = cljs.core.first((state_63129[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64415 = state_63129;
state_63129 = G__64415;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs$core$async$state_machine__62638__auto__ = function(state_63129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62638__auto____1.call(this,state_63129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62638__auto____0;
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62638__auto____1;
return cljs$core$async$state_machine__62638__auto__;
})()
})();
var state__62675__auto__ = (function (){var statearr_63151 = f__62674__auto__();
(statearr_63151[(6)] = c__62673__auto__);

return statearr_63151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
}));

return c__62673__auto__;
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
var G__63153 = arguments.length;
switch (G__63153) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_64417 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_64417(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_64418 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_64418(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_64419 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_64419(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_64420 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_64420(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63154 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63154 = (function (ch,cs,meta63155){
this.ch = ch;
this.cs = cs;
this.meta63155 = meta63155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63156,meta63155__$1){
var self__ = this;
var _63156__$1 = this;
return (new cljs.core.async.t_cljs$core$async63154(self__.ch,self__.cs,meta63155__$1));
}));

(cljs.core.async.t_cljs$core$async63154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63156){
var self__ = this;
var _63156__$1 = this;
return self__.meta63155;
}));

(cljs.core.async.t_cljs$core$async63154.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63154.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async63154.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63154.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async63154.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async63154.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async63154.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta63155","meta63155",2011964172,null)], null);
}));

(cljs.core.async.t_cljs$core$async63154.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63154");

(cljs.core.async.t_cljs$core$async63154.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63154");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63154.
 */
cljs.core.async.__GT_t_cljs$core$async63154 = (function cljs$core$async$mult_$___GT_t_cljs$core$async63154(ch__$1,cs__$1,meta63155){
return (new cljs.core.async.t_cljs$core$async63154(ch__$1,cs__$1,meta63155));
});

}

return (new cljs.core.async.t_cljs$core$async63154(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__62673__auto___64421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = (function (state_63289){
var state_val_63290 = (state_63289[(1)]);
if((state_val_63290 === (7))){
var inst_63285 = (state_63289[(2)]);
var state_63289__$1 = state_63289;
var statearr_63291_64422 = state_63289__$1;
(statearr_63291_64422[(2)] = inst_63285);

(statearr_63291_64422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (20))){
var inst_63190 = (state_63289[(7)]);
var inst_63202 = cljs.core.first(inst_63190);
var inst_63203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63202,(0),null);
var inst_63204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63202,(1),null);
var state_63289__$1 = (function (){var statearr_63292 = state_63289;
(statearr_63292[(8)] = inst_63203);

return statearr_63292;
})();
if(cljs.core.truth_(inst_63204)){
var statearr_63293_64423 = state_63289__$1;
(statearr_63293_64423[(1)] = (22));

} else {
var statearr_63294_64424 = state_63289__$1;
(statearr_63294_64424[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (27))){
var inst_63232 = (state_63289[(9)]);
var inst_63159 = (state_63289[(10)]);
var inst_63239 = (state_63289[(11)]);
var inst_63234 = (state_63289[(12)]);
var inst_63239__$1 = cljs.core._nth(inst_63232,inst_63234);
var inst_63240 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_63239__$1,inst_63159,done);
var state_63289__$1 = (function (){var statearr_63295 = state_63289;
(statearr_63295[(11)] = inst_63239__$1);

return statearr_63295;
})();
if(cljs.core.truth_(inst_63240)){
var statearr_63296_64425 = state_63289__$1;
(statearr_63296_64425[(1)] = (30));

} else {
var statearr_63297_64426 = state_63289__$1;
(statearr_63297_64426[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (1))){
var state_63289__$1 = state_63289;
var statearr_63298_64427 = state_63289__$1;
(statearr_63298_64427[(2)] = null);

(statearr_63298_64427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (24))){
var inst_63190 = (state_63289[(7)]);
var inst_63209 = (state_63289[(2)]);
var inst_63210 = cljs.core.next(inst_63190);
var inst_63168 = inst_63210;
var inst_63169 = null;
var inst_63170 = (0);
var inst_63171 = (0);
var state_63289__$1 = (function (){var statearr_63299 = state_63289;
(statearr_63299[(13)] = inst_63169);

(statearr_63299[(14)] = inst_63209);

(statearr_63299[(15)] = inst_63168);

(statearr_63299[(16)] = inst_63171);

(statearr_63299[(17)] = inst_63170);

return statearr_63299;
})();
var statearr_63300_64428 = state_63289__$1;
(statearr_63300_64428[(2)] = null);

(statearr_63300_64428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (39))){
var state_63289__$1 = state_63289;
var statearr_63304_64429 = state_63289__$1;
(statearr_63304_64429[(2)] = null);

(statearr_63304_64429[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (4))){
var inst_63159 = (state_63289[(10)]);
var inst_63159__$1 = (state_63289[(2)]);
var inst_63160 = (inst_63159__$1 == null);
var state_63289__$1 = (function (){var statearr_63305 = state_63289;
(statearr_63305[(10)] = inst_63159__$1);

return statearr_63305;
})();
if(cljs.core.truth_(inst_63160)){
var statearr_63306_64430 = state_63289__$1;
(statearr_63306_64430[(1)] = (5));

} else {
var statearr_63307_64431 = state_63289__$1;
(statearr_63307_64431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (15))){
var inst_63169 = (state_63289[(13)]);
var inst_63168 = (state_63289[(15)]);
var inst_63171 = (state_63289[(16)]);
var inst_63170 = (state_63289[(17)]);
var inst_63186 = (state_63289[(2)]);
var inst_63187 = (inst_63171 + (1));
var tmp63301 = inst_63169;
var tmp63302 = inst_63168;
var tmp63303 = inst_63170;
var inst_63168__$1 = tmp63302;
var inst_63169__$1 = tmp63301;
var inst_63170__$1 = tmp63303;
var inst_63171__$1 = inst_63187;
var state_63289__$1 = (function (){var statearr_63308 = state_63289;
(statearr_63308[(13)] = inst_63169__$1);

(statearr_63308[(18)] = inst_63186);

(statearr_63308[(15)] = inst_63168__$1);

(statearr_63308[(16)] = inst_63171__$1);

(statearr_63308[(17)] = inst_63170__$1);

return statearr_63308;
})();
var statearr_63309_64432 = state_63289__$1;
(statearr_63309_64432[(2)] = null);

(statearr_63309_64432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (21))){
var inst_63213 = (state_63289[(2)]);
var state_63289__$1 = state_63289;
var statearr_63313_64433 = state_63289__$1;
(statearr_63313_64433[(2)] = inst_63213);

(statearr_63313_64433[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (31))){
var inst_63239 = (state_63289[(11)]);
var inst_63243 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_63239);
var state_63289__$1 = state_63289;
var statearr_63314_64434 = state_63289__$1;
(statearr_63314_64434[(2)] = inst_63243);

(statearr_63314_64434[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (32))){
var inst_63232 = (state_63289[(9)]);
var inst_63231 = (state_63289[(19)]);
var inst_63234 = (state_63289[(12)]);
var inst_63233 = (state_63289[(20)]);
var inst_63245 = (state_63289[(2)]);
var inst_63246 = (inst_63234 + (1));
var tmp63310 = inst_63232;
var tmp63311 = inst_63231;
var tmp63312 = inst_63233;
var inst_63231__$1 = tmp63311;
var inst_63232__$1 = tmp63310;
var inst_63233__$1 = tmp63312;
var inst_63234__$1 = inst_63246;
var state_63289__$1 = (function (){var statearr_63315 = state_63289;
(statearr_63315[(9)] = inst_63232__$1);

(statearr_63315[(21)] = inst_63245);

(statearr_63315[(19)] = inst_63231__$1);

(statearr_63315[(12)] = inst_63234__$1);

(statearr_63315[(20)] = inst_63233__$1);

return statearr_63315;
})();
var statearr_63316_64435 = state_63289__$1;
(statearr_63316_64435[(2)] = null);

(statearr_63316_64435[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (40))){
var inst_63258 = (state_63289[(22)]);
var inst_63262 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_63258);
var state_63289__$1 = state_63289;
var statearr_63317_64436 = state_63289__$1;
(statearr_63317_64436[(2)] = inst_63262);

(statearr_63317_64436[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (33))){
var inst_63249 = (state_63289[(23)]);
var inst_63251 = cljs.core.chunked_seq_QMARK_(inst_63249);
var state_63289__$1 = state_63289;
if(inst_63251){
var statearr_63318_64437 = state_63289__$1;
(statearr_63318_64437[(1)] = (36));

} else {
var statearr_63319_64438 = state_63289__$1;
(statearr_63319_64438[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (13))){
var inst_63180 = (state_63289[(24)]);
var inst_63183 = cljs.core.async.close_BANG_(inst_63180);
var state_63289__$1 = state_63289;
var statearr_63320_64439 = state_63289__$1;
(statearr_63320_64439[(2)] = inst_63183);

(statearr_63320_64439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (22))){
var inst_63203 = (state_63289[(8)]);
var inst_63206 = cljs.core.async.close_BANG_(inst_63203);
var state_63289__$1 = state_63289;
var statearr_63321_64440 = state_63289__$1;
(statearr_63321_64440[(2)] = inst_63206);

(statearr_63321_64440[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (36))){
var inst_63249 = (state_63289[(23)]);
var inst_63253 = cljs.core.chunk_first(inst_63249);
var inst_63254 = cljs.core.chunk_rest(inst_63249);
var inst_63255 = cljs.core.count(inst_63253);
var inst_63231 = inst_63254;
var inst_63232 = inst_63253;
var inst_63233 = inst_63255;
var inst_63234 = (0);
var state_63289__$1 = (function (){var statearr_63322 = state_63289;
(statearr_63322[(9)] = inst_63232);

(statearr_63322[(19)] = inst_63231);

(statearr_63322[(12)] = inst_63234);

(statearr_63322[(20)] = inst_63233);

return statearr_63322;
})();
var statearr_63323_64441 = state_63289__$1;
(statearr_63323_64441[(2)] = null);

(statearr_63323_64441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (41))){
var inst_63249 = (state_63289[(23)]);
var inst_63264 = (state_63289[(2)]);
var inst_63265 = cljs.core.next(inst_63249);
var inst_63231 = inst_63265;
var inst_63232 = null;
var inst_63233 = (0);
var inst_63234 = (0);
var state_63289__$1 = (function (){var statearr_63324 = state_63289;
(statearr_63324[(9)] = inst_63232);

(statearr_63324[(19)] = inst_63231);

(statearr_63324[(25)] = inst_63264);

(statearr_63324[(12)] = inst_63234);

(statearr_63324[(20)] = inst_63233);

return statearr_63324;
})();
var statearr_63325_64446 = state_63289__$1;
(statearr_63325_64446[(2)] = null);

(statearr_63325_64446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (43))){
var state_63289__$1 = state_63289;
var statearr_63326_64451 = state_63289__$1;
(statearr_63326_64451[(2)] = null);

(statearr_63326_64451[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (29))){
var inst_63273 = (state_63289[(2)]);
var state_63289__$1 = state_63289;
var statearr_63327_64454 = state_63289__$1;
(statearr_63327_64454[(2)] = inst_63273);

(statearr_63327_64454[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (44))){
var inst_63282 = (state_63289[(2)]);
var state_63289__$1 = (function (){var statearr_63328 = state_63289;
(statearr_63328[(26)] = inst_63282);

return statearr_63328;
})();
var statearr_63329_64455 = state_63289__$1;
(statearr_63329_64455[(2)] = null);

(statearr_63329_64455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (6))){
var inst_63223 = (state_63289[(27)]);
var inst_63222 = cljs.core.deref(cs);
var inst_63223__$1 = cljs.core.keys(inst_63222);
var inst_63224 = cljs.core.count(inst_63223__$1);
var inst_63225 = cljs.core.reset_BANG_(dctr,inst_63224);
var inst_63230 = cljs.core.seq(inst_63223__$1);
var inst_63231 = inst_63230;
var inst_63232 = null;
var inst_63233 = (0);
var inst_63234 = (0);
var state_63289__$1 = (function (){var statearr_63330 = state_63289;
(statearr_63330[(28)] = inst_63225);

(statearr_63330[(9)] = inst_63232);

(statearr_63330[(27)] = inst_63223__$1);

(statearr_63330[(19)] = inst_63231);

(statearr_63330[(12)] = inst_63234);

(statearr_63330[(20)] = inst_63233);

return statearr_63330;
})();
var statearr_63331_64460 = state_63289__$1;
(statearr_63331_64460[(2)] = null);

(statearr_63331_64460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (28))){
var inst_63231 = (state_63289[(19)]);
var inst_63249 = (state_63289[(23)]);
var inst_63249__$1 = cljs.core.seq(inst_63231);
var state_63289__$1 = (function (){var statearr_63332 = state_63289;
(statearr_63332[(23)] = inst_63249__$1);

return statearr_63332;
})();
if(inst_63249__$1){
var statearr_63333_64463 = state_63289__$1;
(statearr_63333_64463[(1)] = (33));

} else {
var statearr_63334_64464 = state_63289__$1;
(statearr_63334_64464[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (25))){
var inst_63234 = (state_63289[(12)]);
var inst_63233 = (state_63289[(20)]);
var inst_63236 = (inst_63234 < inst_63233);
var inst_63237 = inst_63236;
var state_63289__$1 = state_63289;
if(cljs.core.truth_(inst_63237)){
var statearr_63335_64465 = state_63289__$1;
(statearr_63335_64465[(1)] = (27));

} else {
var statearr_63336_64466 = state_63289__$1;
(statearr_63336_64466[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (34))){
var state_63289__$1 = state_63289;
var statearr_63337_64467 = state_63289__$1;
(statearr_63337_64467[(2)] = null);

(statearr_63337_64467[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (17))){
var state_63289__$1 = state_63289;
var statearr_63338_64468 = state_63289__$1;
(statearr_63338_64468[(2)] = null);

(statearr_63338_64468[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (3))){
var inst_63287 = (state_63289[(2)]);
var state_63289__$1 = state_63289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63289__$1,inst_63287);
} else {
if((state_val_63290 === (12))){
var inst_63218 = (state_63289[(2)]);
var state_63289__$1 = state_63289;
var statearr_63339_64469 = state_63289__$1;
(statearr_63339_64469[(2)] = inst_63218);

(statearr_63339_64469[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (2))){
var state_63289__$1 = state_63289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63289__$1,(4),ch);
} else {
if((state_val_63290 === (23))){
var state_63289__$1 = state_63289;
var statearr_63340_64471 = state_63289__$1;
(statearr_63340_64471[(2)] = null);

(statearr_63340_64471[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (35))){
var inst_63271 = (state_63289[(2)]);
var state_63289__$1 = state_63289;
var statearr_63341_64472 = state_63289__$1;
(statearr_63341_64472[(2)] = inst_63271);

(statearr_63341_64472[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (19))){
var inst_63190 = (state_63289[(7)]);
var inst_63194 = cljs.core.chunk_first(inst_63190);
var inst_63195 = cljs.core.chunk_rest(inst_63190);
var inst_63196 = cljs.core.count(inst_63194);
var inst_63168 = inst_63195;
var inst_63169 = inst_63194;
var inst_63170 = inst_63196;
var inst_63171 = (0);
var state_63289__$1 = (function (){var statearr_63342 = state_63289;
(statearr_63342[(13)] = inst_63169);

(statearr_63342[(15)] = inst_63168);

(statearr_63342[(16)] = inst_63171);

(statearr_63342[(17)] = inst_63170);

return statearr_63342;
})();
var statearr_63343_64473 = state_63289__$1;
(statearr_63343_64473[(2)] = null);

(statearr_63343_64473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (11))){
var inst_63190 = (state_63289[(7)]);
var inst_63168 = (state_63289[(15)]);
var inst_63190__$1 = cljs.core.seq(inst_63168);
var state_63289__$1 = (function (){var statearr_63344 = state_63289;
(statearr_63344[(7)] = inst_63190__$1);

return statearr_63344;
})();
if(inst_63190__$1){
var statearr_63345_64474 = state_63289__$1;
(statearr_63345_64474[(1)] = (16));

} else {
var statearr_63346_64475 = state_63289__$1;
(statearr_63346_64475[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (9))){
var inst_63220 = (state_63289[(2)]);
var state_63289__$1 = state_63289;
var statearr_63347_64476 = state_63289__$1;
(statearr_63347_64476[(2)] = inst_63220);

(statearr_63347_64476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (5))){
var inst_63166 = cljs.core.deref(cs);
var inst_63167 = cljs.core.seq(inst_63166);
var inst_63168 = inst_63167;
var inst_63169 = null;
var inst_63170 = (0);
var inst_63171 = (0);
var state_63289__$1 = (function (){var statearr_63348 = state_63289;
(statearr_63348[(13)] = inst_63169);

(statearr_63348[(15)] = inst_63168);

(statearr_63348[(16)] = inst_63171);

(statearr_63348[(17)] = inst_63170);

return statearr_63348;
})();
var statearr_63349_64477 = state_63289__$1;
(statearr_63349_64477[(2)] = null);

(statearr_63349_64477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (14))){
var state_63289__$1 = state_63289;
var statearr_63350_64478 = state_63289__$1;
(statearr_63350_64478[(2)] = null);

(statearr_63350_64478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (45))){
var inst_63279 = (state_63289[(2)]);
var state_63289__$1 = state_63289;
var statearr_63351_64479 = state_63289__$1;
(statearr_63351_64479[(2)] = inst_63279);

(statearr_63351_64479[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (26))){
var inst_63223 = (state_63289[(27)]);
var inst_63275 = (state_63289[(2)]);
var inst_63276 = cljs.core.seq(inst_63223);
var state_63289__$1 = (function (){var statearr_63352 = state_63289;
(statearr_63352[(29)] = inst_63275);

return statearr_63352;
})();
if(inst_63276){
var statearr_63353_64480 = state_63289__$1;
(statearr_63353_64480[(1)] = (42));

} else {
var statearr_63354_64481 = state_63289__$1;
(statearr_63354_64481[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (16))){
var inst_63190 = (state_63289[(7)]);
var inst_63192 = cljs.core.chunked_seq_QMARK_(inst_63190);
var state_63289__$1 = state_63289;
if(inst_63192){
var statearr_63355_64482 = state_63289__$1;
(statearr_63355_64482[(1)] = (19));

} else {
var statearr_63356_64483 = state_63289__$1;
(statearr_63356_64483[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (38))){
var inst_63268 = (state_63289[(2)]);
var state_63289__$1 = state_63289;
var statearr_63357_64484 = state_63289__$1;
(statearr_63357_64484[(2)] = inst_63268);

(statearr_63357_64484[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (30))){
var state_63289__$1 = state_63289;
var statearr_63358_64485 = state_63289__$1;
(statearr_63358_64485[(2)] = null);

(statearr_63358_64485[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (10))){
var inst_63169 = (state_63289[(13)]);
var inst_63171 = (state_63289[(16)]);
var inst_63179 = cljs.core._nth(inst_63169,inst_63171);
var inst_63180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63179,(0),null);
var inst_63181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63179,(1),null);
var state_63289__$1 = (function (){var statearr_63359 = state_63289;
(statearr_63359[(24)] = inst_63180);

return statearr_63359;
})();
if(cljs.core.truth_(inst_63181)){
var statearr_63360_64486 = state_63289__$1;
(statearr_63360_64486[(1)] = (13));

} else {
var statearr_63361_64487 = state_63289__$1;
(statearr_63361_64487[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (18))){
var inst_63216 = (state_63289[(2)]);
var state_63289__$1 = state_63289;
var statearr_63362_64488 = state_63289__$1;
(statearr_63362_64488[(2)] = inst_63216);

(statearr_63362_64488[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (42))){
var state_63289__$1 = state_63289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63289__$1,(45),dchan);
} else {
if((state_val_63290 === (37))){
var inst_63159 = (state_63289[(10)]);
var inst_63249 = (state_63289[(23)]);
var inst_63258 = (state_63289[(22)]);
var inst_63258__$1 = cljs.core.first(inst_63249);
var inst_63259 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_63258__$1,inst_63159,done);
var state_63289__$1 = (function (){var statearr_63363 = state_63289;
(statearr_63363[(22)] = inst_63258__$1);

return statearr_63363;
})();
if(cljs.core.truth_(inst_63259)){
var statearr_63364_64489 = state_63289__$1;
(statearr_63364_64489[(1)] = (39));

} else {
var statearr_63365_64490 = state_63289__$1;
(statearr_63365_64490[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63290 === (8))){
var inst_63171 = (state_63289[(16)]);
var inst_63170 = (state_63289[(17)]);
var inst_63173 = (inst_63171 < inst_63170);
var inst_63174 = inst_63173;
var state_63289__$1 = state_63289;
if(cljs.core.truth_(inst_63174)){
var statearr_63366_64491 = state_63289__$1;
(statearr_63366_64491[(1)] = (10));

} else {
var statearr_63367_64492 = state_63289__$1;
(statearr_63367_64492[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__62638__auto__ = null;
var cljs$core$async$mult_$_state_machine__62638__auto____0 = (function (){
var statearr_63368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63368[(0)] = cljs$core$async$mult_$_state_machine__62638__auto__);

(statearr_63368[(1)] = (1));

return statearr_63368;
});
var cljs$core$async$mult_$_state_machine__62638__auto____1 = (function (state_63289){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_63289);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e63369){var ex__62641__auto__ = e63369;
var statearr_63370_64493 = state_63289;
(statearr_63370_64493[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_63289[(4)]))){
var statearr_63371_64494 = state_63289;
(statearr_63371_64494[(1)] = cljs.core.first((state_63289[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64495 = state_63289;
state_63289 = G__64495;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__62638__auto__ = function(state_63289){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__62638__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__62638__auto____1.call(this,state_63289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__62638__auto____0;
cljs$core$async$mult_$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__62638__auto____1;
return cljs$core$async$mult_$_state_machine__62638__auto__;
})()
})();
var state__62675__auto__ = (function (){var statearr_63372 = f__62674__auto__();
(statearr_63372[(6)] = c__62673__auto___64421);

return statearr_63372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
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
var G__63374 = arguments.length;
switch (G__63374) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_64497 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_64497(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_64498 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_64498(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_64500 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_64500(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_64504 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_64504(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_64505 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_64505(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64507 = arguments.length;
var i__4737__auto___64508 = (0);
while(true){
if((i__4737__auto___64508 < len__4736__auto___64507)){
args__4742__auto__.push((arguments[i__4737__auto___64508]));

var G__64510 = (i__4737__auto___64508 + (1));
i__4737__auto___64508 = G__64510;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__63379){
var map__63380 = p__63379;
var map__63380__$1 = (((((!((map__63380 == null))))?(((((map__63380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63380):map__63380);
var opts = map__63380__$1;
var statearr_63382_64514 = state;
(statearr_63382_64514[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_63383_64515 = state;
(statearr_63383_64515[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_63384_64516 = state;
(statearr_63384_64516[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq63375){
var G__63376 = cljs.core.first(seq63375);
var seq63375__$1 = cljs.core.next(seq63375);
var G__63377 = cljs.core.first(seq63375__$1);
var seq63375__$2 = cljs.core.next(seq63375__$1);
var G__63378 = cljs.core.first(seq63375__$2);
var seq63375__$3 = cljs.core.next(seq63375__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63376,G__63377,G__63378,seq63375__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63385 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63385 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta63386){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta63386 = meta63386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63387,meta63386__$1){
var self__ = this;
var _63387__$1 = this;
return (new cljs.core.async.t_cljs$core$async63385(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta63386__$1));
}));

(cljs.core.async.t_cljs$core$async63385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63387){
var self__ = this;
var _63387__$1 = this;
return self__.meta63386;
}));

(cljs.core.async.t_cljs$core$async63385.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63385.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async63385.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63385.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63385.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63385.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63385.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63385.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta63386","meta63386",-1468864970,null)], null);
}));

(cljs.core.async.t_cljs$core$async63385.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63385");

(cljs.core.async.t_cljs$core$async63385.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63385");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63385.
 */
cljs.core.async.__GT_t_cljs$core$async63385 = (function cljs$core$async$mix_$___GT_t_cljs$core$async63385(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta63386){
return (new cljs.core.async.t_cljs$core$async63385(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta63386));
});

}

return (new cljs.core.async.t_cljs$core$async63385(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__62673__auto___64524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = (function (state_63489){
var state_val_63490 = (state_63489[(1)]);
if((state_val_63490 === (7))){
var inst_63404 = (state_63489[(2)]);
var state_63489__$1 = state_63489;
var statearr_63491_64529 = state_63489__$1;
(statearr_63491_64529[(2)] = inst_63404);

(statearr_63491_64529[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (20))){
var inst_63416 = (state_63489[(7)]);
var state_63489__$1 = state_63489;
var statearr_63492_64534 = state_63489__$1;
(statearr_63492_64534[(2)] = inst_63416);

(statearr_63492_64534[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (27))){
var state_63489__$1 = state_63489;
var statearr_63493_64537 = state_63489__$1;
(statearr_63493_64537[(2)] = null);

(statearr_63493_64537[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (1))){
var inst_63391 = (state_63489[(8)]);
var inst_63391__$1 = calc_state();
var inst_63393 = (inst_63391__$1 == null);
var inst_63394 = cljs.core.not(inst_63393);
var state_63489__$1 = (function (){var statearr_63494 = state_63489;
(statearr_63494[(8)] = inst_63391__$1);

return statearr_63494;
})();
if(inst_63394){
var statearr_63495_64542 = state_63489__$1;
(statearr_63495_64542[(1)] = (2));

} else {
var statearr_63496_64543 = state_63489__$1;
(statearr_63496_64543[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (24))){
var inst_63449 = (state_63489[(9)]);
var inst_63463 = (state_63489[(10)]);
var inst_63440 = (state_63489[(11)]);
var inst_63463__$1 = (inst_63440.cljs$core$IFn$_invoke$arity$1 ? inst_63440.cljs$core$IFn$_invoke$arity$1(inst_63449) : inst_63440.call(null,inst_63449));
var state_63489__$1 = (function (){var statearr_63497 = state_63489;
(statearr_63497[(10)] = inst_63463__$1);

return statearr_63497;
})();
if(cljs.core.truth_(inst_63463__$1)){
var statearr_63498_64544 = state_63489__$1;
(statearr_63498_64544[(1)] = (29));

} else {
var statearr_63499_64545 = state_63489__$1;
(statearr_63499_64545[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (4))){
var inst_63407 = (state_63489[(2)]);
var state_63489__$1 = state_63489;
if(cljs.core.truth_(inst_63407)){
var statearr_63500_64546 = state_63489__$1;
(statearr_63500_64546[(1)] = (8));

} else {
var statearr_63501_64547 = state_63489__$1;
(statearr_63501_64547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (15))){
var inst_63434 = (state_63489[(2)]);
var state_63489__$1 = state_63489;
if(cljs.core.truth_(inst_63434)){
var statearr_63502_64548 = state_63489__$1;
(statearr_63502_64548[(1)] = (19));

} else {
var statearr_63503_64549 = state_63489__$1;
(statearr_63503_64549[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (21))){
var inst_63439 = (state_63489[(12)]);
var inst_63439__$1 = (state_63489[(2)]);
var inst_63440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63439__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63439__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63439__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_63489__$1 = (function (){var statearr_63504 = state_63489;
(statearr_63504[(13)] = inst_63441);

(statearr_63504[(12)] = inst_63439__$1);

(statearr_63504[(11)] = inst_63440);

return statearr_63504;
})();
return cljs.core.async.ioc_alts_BANG_(state_63489__$1,(22),inst_63442);
} else {
if((state_val_63490 === (31))){
var inst_63471 = (state_63489[(2)]);
var state_63489__$1 = state_63489;
if(cljs.core.truth_(inst_63471)){
var statearr_63505_64550 = state_63489__$1;
(statearr_63505_64550[(1)] = (32));

} else {
var statearr_63506_64551 = state_63489__$1;
(statearr_63506_64551[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (32))){
var inst_63448 = (state_63489[(14)]);
var state_63489__$1 = state_63489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63489__$1,(35),out,inst_63448);
} else {
if((state_val_63490 === (33))){
var inst_63439 = (state_63489[(12)]);
var inst_63416 = inst_63439;
var state_63489__$1 = (function (){var statearr_63507 = state_63489;
(statearr_63507[(7)] = inst_63416);

return statearr_63507;
})();
var statearr_63508_64552 = state_63489__$1;
(statearr_63508_64552[(2)] = null);

(statearr_63508_64552[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (13))){
var inst_63416 = (state_63489[(7)]);
var inst_63423 = inst_63416.cljs$lang$protocol_mask$partition0$;
var inst_63424 = (inst_63423 & (64));
var inst_63425 = inst_63416.cljs$core$ISeq$;
var inst_63426 = (cljs.core.PROTOCOL_SENTINEL === inst_63425);
var inst_63427 = ((inst_63424) || (inst_63426));
var state_63489__$1 = state_63489;
if(cljs.core.truth_(inst_63427)){
var statearr_63509_64553 = state_63489__$1;
(statearr_63509_64553[(1)] = (16));

} else {
var statearr_63510_64554 = state_63489__$1;
(statearr_63510_64554[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (22))){
var inst_63449 = (state_63489[(9)]);
var inst_63448 = (state_63489[(14)]);
var inst_63447 = (state_63489[(2)]);
var inst_63448__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63447,(0),null);
var inst_63449__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63447,(1),null);
var inst_63450 = (inst_63448__$1 == null);
var inst_63451 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_63449__$1,change);
var inst_63452 = ((inst_63450) || (inst_63451));
var state_63489__$1 = (function (){var statearr_63511 = state_63489;
(statearr_63511[(9)] = inst_63449__$1);

(statearr_63511[(14)] = inst_63448__$1);

return statearr_63511;
})();
if(cljs.core.truth_(inst_63452)){
var statearr_63512_64555 = state_63489__$1;
(statearr_63512_64555[(1)] = (23));

} else {
var statearr_63513_64556 = state_63489__$1;
(statearr_63513_64556[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (36))){
var inst_63439 = (state_63489[(12)]);
var inst_63416 = inst_63439;
var state_63489__$1 = (function (){var statearr_63514 = state_63489;
(statearr_63514[(7)] = inst_63416);

return statearr_63514;
})();
var statearr_63515_64557 = state_63489__$1;
(statearr_63515_64557[(2)] = null);

(statearr_63515_64557[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (29))){
var inst_63463 = (state_63489[(10)]);
var state_63489__$1 = state_63489;
var statearr_63516_64560 = state_63489__$1;
(statearr_63516_64560[(2)] = inst_63463);

(statearr_63516_64560[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (6))){
var state_63489__$1 = state_63489;
var statearr_63517_64562 = state_63489__$1;
(statearr_63517_64562[(2)] = false);

(statearr_63517_64562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (28))){
var inst_63459 = (state_63489[(2)]);
var inst_63460 = calc_state();
var inst_63416 = inst_63460;
var state_63489__$1 = (function (){var statearr_63518 = state_63489;
(statearr_63518[(15)] = inst_63459);

(statearr_63518[(7)] = inst_63416);

return statearr_63518;
})();
var statearr_63519_64563 = state_63489__$1;
(statearr_63519_64563[(2)] = null);

(statearr_63519_64563[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (25))){
var inst_63485 = (state_63489[(2)]);
var state_63489__$1 = state_63489;
var statearr_63520_64564 = state_63489__$1;
(statearr_63520_64564[(2)] = inst_63485);

(statearr_63520_64564[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (34))){
var inst_63483 = (state_63489[(2)]);
var state_63489__$1 = state_63489;
var statearr_63521_64566 = state_63489__$1;
(statearr_63521_64566[(2)] = inst_63483);

(statearr_63521_64566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (17))){
var state_63489__$1 = state_63489;
var statearr_63522_64567 = state_63489__$1;
(statearr_63522_64567[(2)] = false);

(statearr_63522_64567[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (3))){
var state_63489__$1 = state_63489;
var statearr_63523_64568 = state_63489__$1;
(statearr_63523_64568[(2)] = false);

(statearr_63523_64568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (12))){
var inst_63487 = (state_63489[(2)]);
var state_63489__$1 = state_63489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63489__$1,inst_63487);
} else {
if((state_val_63490 === (2))){
var inst_63391 = (state_63489[(8)]);
var inst_63396 = inst_63391.cljs$lang$protocol_mask$partition0$;
var inst_63397 = (inst_63396 & (64));
var inst_63398 = inst_63391.cljs$core$ISeq$;
var inst_63399 = (cljs.core.PROTOCOL_SENTINEL === inst_63398);
var inst_63400 = ((inst_63397) || (inst_63399));
var state_63489__$1 = state_63489;
if(cljs.core.truth_(inst_63400)){
var statearr_63524_64575 = state_63489__$1;
(statearr_63524_64575[(1)] = (5));

} else {
var statearr_63525_64577 = state_63489__$1;
(statearr_63525_64577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (23))){
var inst_63448 = (state_63489[(14)]);
var inst_63454 = (inst_63448 == null);
var state_63489__$1 = state_63489;
if(cljs.core.truth_(inst_63454)){
var statearr_63526_64579 = state_63489__$1;
(statearr_63526_64579[(1)] = (26));

} else {
var statearr_63527_64584 = state_63489__$1;
(statearr_63527_64584[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (35))){
var inst_63474 = (state_63489[(2)]);
var state_63489__$1 = state_63489;
if(cljs.core.truth_(inst_63474)){
var statearr_63528_64587 = state_63489__$1;
(statearr_63528_64587[(1)] = (36));

} else {
var statearr_63529_64593 = state_63489__$1;
(statearr_63529_64593[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (19))){
var inst_63416 = (state_63489[(7)]);
var inst_63436 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63416);
var state_63489__$1 = state_63489;
var statearr_63530_64596 = state_63489__$1;
(statearr_63530_64596[(2)] = inst_63436);

(statearr_63530_64596[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (11))){
var inst_63416 = (state_63489[(7)]);
var inst_63420 = (inst_63416 == null);
var inst_63421 = cljs.core.not(inst_63420);
var state_63489__$1 = state_63489;
if(inst_63421){
var statearr_63531_64602 = state_63489__$1;
(statearr_63531_64602[(1)] = (13));

} else {
var statearr_63532_64603 = state_63489__$1;
(statearr_63532_64603[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (9))){
var inst_63391 = (state_63489[(8)]);
var state_63489__$1 = state_63489;
var statearr_63533_64604 = state_63489__$1;
(statearr_63533_64604[(2)] = inst_63391);

(statearr_63533_64604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (5))){
var state_63489__$1 = state_63489;
var statearr_63534_64605 = state_63489__$1;
(statearr_63534_64605[(2)] = true);

(statearr_63534_64605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (14))){
var state_63489__$1 = state_63489;
var statearr_63535_64606 = state_63489__$1;
(statearr_63535_64606[(2)] = false);

(statearr_63535_64606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (26))){
var inst_63449 = (state_63489[(9)]);
var inst_63456 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_63449);
var state_63489__$1 = state_63489;
var statearr_63536_64607 = state_63489__$1;
(statearr_63536_64607[(2)] = inst_63456);

(statearr_63536_64607[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (16))){
var state_63489__$1 = state_63489;
var statearr_63537_64608 = state_63489__$1;
(statearr_63537_64608[(2)] = true);

(statearr_63537_64608[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (38))){
var inst_63479 = (state_63489[(2)]);
var state_63489__$1 = state_63489;
var statearr_63538_64609 = state_63489__$1;
(statearr_63538_64609[(2)] = inst_63479);

(statearr_63538_64609[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (30))){
var inst_63449 = (state_63489[(9)]);
var inst_63441 = (state_63489[(13)]);
var inst_63440 = (state_63489[(11)]);
var inst_63466 = cljs.core.empty_QMARK_(inst_63440);
var inst_63467 = (inst_63441.cljs$core$IFn$_invoke$arity$1 ? inst_63441.cljs$core$IFn$_invoke$arity$1(inst_63449) : inst_63441.call(null,inst_63449));
var inst_63468 = cljs.core.not(inst_63467);
var inst_63469 = ((inst_63466) && (inst_63468));
var state_63489__$1 = state_63489;
var statearr_63539_64610 = state_63489__$1;
(statearr_63539_64610[(2)] = inst_63469);

(statearr_63539_64610[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (10))){
var inst_63391 = (state_63489[(8)]);
var inst_63412 = (state_63489[(2)]);
var inst_63413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63412,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63412,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63412,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_63416 = inst_63391;
var state_63489__$1 = (function (){var statearr_63540 = state_63489;
(statearr_63540[(16)] = inst_63415);

(statearr_63540[(17)] = inst_63413);

(statearr_63540[(7)] = inst_63416);

(statearr_63540[(18)] = inst_63414);

return statearr_63540;
})();
var statearr_63541_64611 = state_63489__$1;
(statearr_63541_64611[(2)] = null);

(statearr_63541_64611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (18))){
var inst_63431 = (state_63489[(2)]);
var state_63489__$1 = state_63489;
var statearr_63542_64612 = state_63489__$1;
(statearr_63542_64612[(2)] = inst_63431);

(statearr_63542_64612[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (37))){
var state_63489__$1 = state_63489;
var statearr_63543_64613 = state_63489__$1;
(statearr_63543_64613[(2)] = null);

(statearr_63543_64613[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63490 === (8))){
var inst_63391 = (state_63489[(8)]);
var inst_63409 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63391);
var state_63489__$1 = state_63489;
var statearr_63544_64614 = state_63489__$1;
(statearr_63544_64614[(2)] = inst_63409);

(statearr_63544_64614[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__62638__auto__ = null;
var cljs$core$async$mix_$_state_machine__62638__auto____0 = (function (){
var statearr_63545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63545[(0)] = cljs$core$async$mix_$_state_machine__62638__auto__);

(statearr_63545[(1)] = (1));

return statearr_63545;
});
var cljs$core$async$mix_$_state_machine__62638__auto____1 = (function (state_63489){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_63489);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e63546){var ex__62641__auto__ = e63546;
var statearr_63547_64615 = state_63489;
(statearr_63547_64615[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_63489[(4)]))){
var statearr_63548_64616 = state_63489;
(statearr_63548_64616[(1)] = cljs.core.first((state_63489[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64617 = state_63489;
state_63489 = G__64617;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__62638__auto__ = function(state_63489){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__62638__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__62638__auto____1.call(this,state_63489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__62638__auto____0;
cljs$core$async$mix_$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__62638__auto____1;
return cljs$core$async$mix_$_state_machine__62638__auto__;
})()
})();
var state__62675__auto__ = (function (){var statearr_63549 = f__62674__auto__();
(statearr_63549[(6)] = c__62673__auto___64524);

return statearr_63549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_64618 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_64618(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_64619 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_64619(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_64620 = (function() {
var G__64621 = null;
var G__64621__1 = (function (p){
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
var G__64621__2 = (function (p,v){
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
G__64621 = function(p,v){
switch(arguments.length){
case 1:
return G__64621__1.call(this,p);
case 2:
return G__64621__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__64621.cljs$core$IFn$_invoke$arity$1 = G__64621__1;
G__64621.cljs$core$IFn$_invoke$arity$2 = G__64621__2;
return G__64621;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__63551 = arguments.length;
switch (G__63551) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_64620(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_64620(p,v);
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
var G__63554 = arguments.length;
switch (G__63554) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__63552_SHARP_){
if(cljs.core.truth_((p1__63552_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__63552_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__63552_SHARP_.call(null,topic)))){
return p1__63552_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__63552_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63555 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta63556){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta63556 = meta63556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63557,meta63556__$1){
var self__ = this;
var _63557__$1 = this;
return (new cljs.core.async.t_cljs$core$async63555(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta63556__$1));
}));

(cljs.core.async.t_cljs$core$async63555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63557){
var self__ = this;
var _63557__$1 = this;
return self__.meta63556;
}));

(cljs.core.async.t_cljs$core$async63555.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63555.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async63555.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63555.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async63555.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async63555.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async63555.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async63555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta63556","meta63556",1530626058,null)], null);
}));

(cljs.core.async.t_cljs$core$async63555.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63555");

(cljs.core.async.t_cljs$core$async63555.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63555");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63555.
 */
cljs.core.async.__GT_t_cljs$core$async63555 = (function cljs$core$async$__GT_t_cljs$core$async63555(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63556){
return (new cljs.core.async.t_cljs$core$async63555(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63556));
});

}

return (new cljs.core.async.t_cljs$core$async63555(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__62673__auto___64624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = (function (state_63629){
var state_val_63630 = (state_63629[(1)]);
if((state_val_63630 === (7))){
var inst_63625 = (state_63629[(2)]);
var state_63629__$1 = state_63629;
var statearr_63631_64625 = state_63629__$1;
(statearr_63631_64625[(2)] = inst_63625);

(statearr_63631_64625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63630 === (20))){
var state_63629__$1 = state_63629;
var statearr_63632_64626 = state_63629__$1;
(statearr_63632_64626[(2)] = null);

(statearr_63632_64626[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63630 === (1))){
var state_63629__$1 = state_63629;
var statearr_63633_64627 = state_63629__$1;
(statearr_63633_64627[(2)] = null);

(statearr_63633_64627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63630 === (24))){
var inst_63608 = (state_63629[(7)]);
var inst_63617 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_63608);
var state_63629__$1 = state_63629;
var statearr_63634_64628 = state_63629__$1;
(statearr_63634_64628[(2)] = inst_63617);

(statearr_63634_64628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63630 === (4))){
var inst_63560 = (state_63629[(8)]);
var inst_63560__$1 = (state_63629[(2)]);
var inst_63561 = (inst_63560__$1 == null);
var state_63629__$1 = (function (){var statearr_63635 = state_63629;
(statearr_63635[(8)] = inst_63560__$1);

return statearr_63635;
})();
if(cljs.core.truth_(inst_63561)){
var statearr_63636_64629 = state_63629__$1;
(statearr_63636_64629[(1)] = (5));

} else {
var statearr_63637_64630 = state_63629__$1;
(statearr_63637_64630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63630 === (15))){
var inst_63602 = (state_63629[(2)]);
var state_63629__$1 = state_63629;
var statearr_63638_64631 = state_63629__$1;
(statearr_63638_64631[(2)] = inst_63602);

(statearr_63638_64631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63630 === (21))){
var inst_63622 = (state_63629[(2)]);
var state_63629__$1 = (function (){var statearr_63639 = state_63629;
(statearr_63639[(9)] = inst_63622);

return statearr_63639;
})();
var statearr_63640_64632 = state_63629__$1;
(statearr_63640_64632[(2)] = null);

(statearr_63640_64632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63630 === (13))){
var inst_63584 = (state_63629[(10)]);
var inst_63586 = cljs.core.chunked_seq_QMARK_(inst_63584);
var state_63629__$1 = state_63629;
if(inst_63586){
var statearr_63641_64633 = state_63629__$1;
(statearr_63641_64633[(1)] = (16));

} else {
var statearr_63642_64634 = state_63629__$1;
(statearr_63642_64634[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63630 === (22))){
var inst_63614 = (state_63629[(2)]);
var state_63629__$1 = state_63629;
if(cljs.core.truth_(inst_63614)){
var statearr_63643_64635 = state_63629__$1;
(statearr_63643_64635[(1)] = (23));

} else {
var statearr_63644_64636 = state_63629__$1;
(statearr_63644_64636[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63630 === (6))){
var inst_63610 = (state_63629[(11)]);
var inst_63608 = (state_63629[(7)]);
var inst_63560 = (state_63629[(8)]);
var inst_63608__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_63560) : topic_fn.call(null,inst_63560));
var inst_63609 = cljs.core.deref(mults);
var inst_63610__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63609,inst_63608__$1);
var state_63629__$1 = (function (){var statearr_63645 = state_63629;
(statearr_63645[(11)] = inst_63610__$1);

(statearr_63645[(7)] = inst_63608__$1);

return statearr_63645;
})();
if(cljs.core.truth_(inst_63610__$1)){
var statearr_63646_64637 = state_63629__$1;
(statearr_63646_64637[(1)] = (19));

} else {
var statearr_63647_64638 = state_63629__$1;
(statearr_63647_64638[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63630 === (25))){
var inst_63619 = (state_63629[(2)]);
var state_63629__$1 = state_63629;
var statearr_63648_64639 = state_63629__$1;
(statearr_63648_64639[(2)] = inst_63619);

(statearr_63648_64639[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63630 === (17))){
var inst_63584 = (state_63629[(10)]);
var inst_63593 = cljs.core.first(inst_63584);
var inst_63594 = cljs.core.async.muxch_STAR_(inst_63593);
var inst_63595 = cljs.core.async.close_BANG_(inst_63594);
var inst_63596 = cljs.core.next(inst_63584);
var inst_63570 = inst_63596;
var inst_63571 = null;
var inst_63572 = (0);
var inst_63573 = (0);
var state_63629__$1 = (function (){var statearr_63649 = state_63629;
(statearr_63649[(12)] = inst_63572);

(statearr_63649[(13)] = inst_63595);

(statearr_63649[(14)] = inst_63570);

(statearr_63649[(15)] = inst_63571);

(statearr_63649[(16)] = inst_63573);

return statearr_63649;
})();
var statearr_63650_64640 = state_63629__$1;
(statearr_63650_64640[(2)] = null);

(statearr_63650_64640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63630 === (3))){
var inst_63627 = (state_63629[(2)]);
var state_63629__$1 = state_63629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63629__$1,inst_63627);
} else {
if((state_val_63630 === (12))){
var inst_63604 = (state_63629[(2)]);
var state_63629__$1 = state_63629;
var statearr_63651_64641 = state_63629__$1;
(statearr_63651_64641[(2)] = inst_63604);

(statearr_63651_64641[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63630 === (2))){
var state_63629__$1 = state_63629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63629__$1,(4),ch);
} else {
if((state_val_63630 === (23))){
var state_63629__$1 = state_63629;
var statearr_63652_64642 = state_63629__$1;
(statearr_63652_64642[(2)] = null);

(statearr_63652_64642[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63630 === (19))){
var inst_63610 = (state_63629[(11)]);
var inst_63560 = (state_63629[(8)]);
var inst_63612 = cljs.core.async.muxch_STAR_(inst_63610);
var state_63629__$1 = state_63629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63629__$1,(22),inst_63612,inst_63560);
} else {
if((state_val_63630 === (11))){
var inst_63570 = (state_63629[(14)]);
var inst_63584 = (state_63629[(10)]);
var inst_63584__$1 = cljs.core.seq(inst_63570);
var state_63629__$1 = (function (){var statearr_63653 = state_63629;
(statearr_63653[(10)] = inst_63584__$1);

return statearr_63653;
})();
if(inst_63584__$1){
var statearr_63654_64643 = state_63629__$1;
(statearr_63654_64643[(1)] = (13));

} else {
var statearr_63655_64644 = state_63629__$1;
(statearr_63655_64644[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63630 === (9))){
var inst_63606 = (state_63629[(2)]);
var state_63629__$1 = state_63629;
var statearr_63656_64645 = state_63629__$1;
(statearr_63656_64645[(2)] = inst_63606);

(statearr_63656_64645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63630 === (5))){
var inst_63567 = cljs.core.deref(mults);
var inst_63568 = cljs.core.vals(inst_63567);
var inst_63569 = cljs.core.seq(inst_63568);
var inst_63570 = inst_63569;
var inst_63571 = null;
var inst_63572 = (0);
var inst_63573 = (0);
var state_63629__$1 = (function (){var statearr_63657 = state_63629;
(statearr_63657[(12)] = inst_63572);

(statearr_63657[(14)] = inst_63570);

(statearr_63657[(15)] = inst_63571);

(statearr_63657[(16)] = inst_63573);

return statearr_63657;
})();
var statearr_63658_64646 = state_63629__$1;
(statearr_63658_64646[(2)] = null);

(statearr_63658_64646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63630 === (14))){
var state_63629__$1 = state_63629;
var statearr_63662_64647 = state_63629__$1;
(statearr_63662_64647[(2)] = null);

(statearr_63662_64647[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63630 === (16))){
var inst_63584 = (state_63629[(10)]);
var inst_63588 = cljs.core.chunk_first(inst_63584);
var inst_63589 = cljs.core.chunk_rest(inst_63584);
var inst_63590 = cljs.core.count(inst_63588);
var inst_63570 = inst_63589;
var inst_63571 = inst_63588;
var inst_63572 = inst_63590;
var inst_63573 = (0);
var state_63629__$1 = (function (){var statearr_63663 = state_63629;
(statearr_63663[(12)] = inst_63572);

(statearr_63663[(14)] = inst_63570);

(statearr_63663[(15)] = inst_63571);

(statearr_63663[(16)] = inst_63573);

return statearr_63663;
})();
var statearr_63664_64648 = state_63629__$1;
(statearr_63664_64648[(2)] = null);

(statearr_63664_64648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63630 === (10))){
var inst_63572 = (state_63629[(12)]);
var inst_63570 = (state_63629[(14)]);
var inst_63571 = (state_63629[(15)]);
var inst_63573 = (state_63629[(16)]);
var inst_63578 = cljs.core._nth(inst_63571,inst_63573);
var inst_63579 = cljs.core.async.muxch_STAR_(inst_63578);
var inst_63580 = cljs.core.async.close_BANG_(inst_63579);
var inst_63581 = (inst_63573 + (1));
var tmp63659 = inst_63572;
var tmp63660 = inst_63570;
var tmp63661 = inst_63571;
var inst_63570__$1 = tmp63660;
var inst_63571__$1 = tmp63661;
var inst_63572__$1 = tmp63659;
var inst_63573__$1 = inst_63581;
var state_63629__$1 = (function (){var statearr_63665 = state_63629;
(statearr_63665[(12)] = inst_63572__$1);

(statearr_63665[(14)] = inst_63570__$1);

(statearr_63665[(15)] = inst_63571__$1);

(statearr_63665[(17)] = inst_63580);

(statearr_63665[(16)] = inst_63573__$1);

return statearr_63665;
})();
var statearr_63666_64649 = state_63629__$1;
(statearr_63666_64649[(2)] = null);

(statearr_63666_64649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63630 === (18))){
var inst_63599 = (state_63629[(2)]);
var state_63629__$1 = state_63629;
var statearr_63667_64650 = state_63629__$1;
(statearr_63667_64650[(2)] = inst_63599);

(statearr_63667_64650[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63630 === (8))){
var inst_63572 = (state_63629[(12)]);
var inst_63573 = (state_63629[(16)]);
var inst_63575 = (inst_63573 < inst_63572);
var inst_63576 = inst_63575;
var state_63629__$1 = state_63629;
if(cljs.core.truth_(inst_63576)){
var statearr_63668_64653 = state_63629__$1;
(statearr_63668_64653[(1)] = (10));

} else {
var statearr_63669_64654 = state_63629__$1;
(statearr_63669_64654[(1)] = (11));

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
var cljs$core$async$state_machine__62638__auto__ = null;
var cljs$core$async$state_machine__62638__auto____0 = (function (){
var statearr_63670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63670[(0)] = cljs$core$async$state_machine__62638__auto__);

(statearr_63670[(1)] = (1));

return statearr_63670;
});
var cljs$core$async$state_machine__62638__auto____1 = (function (state_63629){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_63629);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e63671){var ex__62641__auto__ = e63671;
var statearr_63672_64655 = state_63629;
(statearr_63672_64655[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_63629[(4)]))){
var statearr_63673_64656 = state_63629;
(statearr_63673_64656[(1)] = cljs.core.first((state_63629[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64657 = state_63629;
state_63629 = G__64657;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs$core$async$state_machine__62638__auto__ = function(state_63629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62638__auto____1.call(this,state_63629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62638__auto____0;
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62638__auto____1;
return cljs$core$async$state_machine__62638__auto__;
})()
})();
var state__62675__auto__ = (function (){var statearr_63674 = f__62674__auto__();
(statearr_63674[(6)] = c__62673__auto___64624);

return statearr_63674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
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
var G__63676 = arguments.length;
switch (G__63676) {
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
var G__63678 = arguments.length;
switch (G__63678) {
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
var G__63680 = arguments.length;
switch (G__63680) {
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
var c__62673__auto___64665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = (function (state_63723){
var state_val_63724 = (state_63723[(1)]);
if((state_val_63724 === (7))){
var state_63723__$1 = state_63723;
var statearr_63725_64666 = state_63723__$1;
(statearr_63725_64666[(2)] = null);

(statearr_63725_64666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63724 === (1))){
var state_63723__$1 = state_63723;
var statearr_63726_64667 = state_63723__$1;
(statearr_63726_64667[(2)] = null);

(statearr_63726_64667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63724 === (4))){
var inst_63683 = (state_63723[(7)]);
var inst_63684 = (state_63723[(8)]);
var inst_63686 = (inst_63684 < inst_63683);
var state_63723__$1 = state_63723;
if(cljs.core.truth_(inst_63686)){
var statearr_63727_64668 = state_63723__$1;
(statearr_63727_64668[(1)] = (6));

} else {
var statearr_63728_64669 = state_63723__$1;
(statearr_63728_64669[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63724 === (15))){
var inst_63709 = (state_63723[(9)]);
var inst_63714 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_63709);
var state_63723__$1 = state_63723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63723__$1,(17),out,inst_63714);
} else {
if((state_val_63724 === (13))){
var inst_63709 = (state_63723[(9)]);
var inst_63709__$1 = (state_63723[(2)]);
var inst_63710 = cljs.core.some(cljs.core.nil_QMARK_,inst_63709__$1);
var state_63723__$1 = (function (){var statearr_63729 = state_63723;
(statearr_63729[(9)] = inst_63709__$1);

return statearr_63729;
})();
if(cljs.core.truth_(inst_63710)){
var statearr_63730_64670 = state_63723__$1;
(statearr_63730_64670[(1)] = (14));

} else {
var statearr_63731_64671 = state_63723__$1;
(statearr_63731_64671[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63724 === (6))){
var state_63723__$1 = state_63723;
var statearr_63732_64672 = state_63723__$1;
(statearr_63732_64672[(2)] = null);

(statearr_63732_64672[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63724 === (17))){
var inst_63716 = (state_63723[(2)]);
var state_63723__$1 = (function (){var statearr_63734 = state_63723;
(statearr_63734[(10)] = inst_63716);

return statearr_63734;
})();
var statearr_63735_64675 = state_63723__$1;
(statearr_63735_64675[(2)] = null);

(statearr_63735_64675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63724 === (3))){
var inst_63721 = (state_63723[(2)]);
var state_63723__$1 = state_63723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63723__$1,inst_63721);
} else {
if((state_val_63724 === (12))){
var _ = (function (){var statearr_63736 = state_63723;
(statearr_63736[(4)] = cljs.core.rest((state_63723[(4)])));

return statearr_63736;
})();
var state_63723__$1 = state_63723;
var ex63733 = (state_63723__$1[(2)]);
var statearr_63737_64676 = state_63723__$1;
(statearr_63737_64676[(5)] = ex63733);


if((ex63733 instanceof Object)){
var statearr_63738_64677 = state_63723__$1;
(statearr_63738_64677[(1)] = (11));

(statearr_63738_64677[(5)] = null);

} else {
throw ex63733;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63724 === (2))){
var inst_63682 = cljs.core.reset_BANG_(dctr,cnt);
var inst_63683 = cnt;
var inst_63684 = (0);
var state_63723__$1 = (function (){var statearr_63739 = state_63723;
(statearr_63739[(11)] = inst_63682);

(statearr_63739[(7)] = inst_63683);

(statearr_63739[(8)] = inst_63684);

return statearr_63739;
})();
var statearr_63740_64678 = state_63723__$1;
(statearr_63740_64678[(2)] = null);

(statearr_63740_64678[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63724 === (11))){
var inst_63688 = (state_63723[(2)]);
var inst_63689 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_63723__$1 = (function (){var statearr_63741 = state_63723;
(statearr_63741[(12)] = inst_63688);

return statearr_63741;
})();
var statearr_63742_64681 = state_63723__$1;
(statearr_63742_64681[(2)] = inst_63689);

(statearr_63742_64681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63724 === (9))){
var inst_63684 = (state_63723[(8)]);
var _ = (function (){var statearr_63743 = state_63723;
(statearr_63743[(4)] = cljs.core.cons((12),(state_63723[(4)])));

return statearr_63743;
})();
var inst_63695 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_63684) : chs__$1.call(null,inst_63684));
var inst_63696 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_63684) : done.call(null,inst_63684));
var inst_63697 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_63695,inst_63696);
var ___$1 = (function (){var statearr_63744 = state_63723;
(statearr_63744[(4)] = cljs.core.rest((state_63723[(4)])));

return statearr_63744;
})();
var state_63723__$1 = state_63723;
var statearr_63745_64682 = state_63723__$1;
(statearr_63745_64682[(2)] = inst_63697);

(statearr_63745_64682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63724 === (5))){
var inst_63707 = (state_63723[(2)]);
var state_63723__$1 = (function (){var statearr_63746 = state_63723;
(statearr_63746[(13)] = inst_63707);

return statearr_63746;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63723__$1,(13),dchan);
} else {
if((state_val_63724 === (14))){
var inst_63712 = cljs.core.async.close_BANG_(out);
var state_63723__$1 = state_63723;
var statearr_63747_64683 = state_63723__$1;
(statearr_63747_64683[(2)] = inst_63712);

(statearr_63747_64683[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63724 === (16))){
var inst_63719 = (state_63723[(2)]);
var state_63723__$1 = state_63723;
var statearr_63748_64684 = state_63723__$1;
(statearr_63748_64684[(2)] = inst_63719);

(statearr_63748_64684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63724 === (10))){
var inst_63684 = (state_63723[(8)]);
var inst_63700 = (state_63723[(2)]);
var inst_63701 = (inst_63684 + (1));
var inst_63684__$1 = inst_63701;
var state_63723__$1 = (function (){var statearr_63749 = state_63723;
(statearr_63749[(14)] = inst_63700);

(statearr_63749[(8)] = inst_63684__$1);

return statearr_63749;
})();
var statearr_63750_64685 = state_63723__$1;
(statearr_63750_64685[(2)] = null);

(statearr_63750_64685[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63724 === (8))){
var inst_63705 = (state_63723[(2)]);
var state_63723__$1 = state_63723;
var statearr_63751_64686 = state_63723__$1;
(statearr_63751_64686[(2)] = inst_63705);

(statearr_63751_64686[(1)] = (5));


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
var cljs$core$async$state_machine__62638__auto__ = null;
var cljs$core$async$state_machine__62638__auto____0 = (function (){
var statearr_63752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63752[(0)] = cljs$core$async$state_machine__62638__auto__);

(statearr_63752[(1)] = (1));

return statearr_63752;
});
var cljs$core$async$state_machine__62638__auto____1 = (function (state_63723){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_63723);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e63753){var ex__62641__auto__ = e63753;
var statearr_63754_64687 = state_63723;
(statearr_63754_64687[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_63723[(4)]))){
var statearr_63755_64688 = state_63723;
(statearr_63755_64688[(1)] = cljs.core.first((state_63723[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64689 = state_63723;
state_63723 = G__64689;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs$core$async$state_machine__62638__auto__ = function(state_63723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62638__auto____1.call(this,state_63723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62638__auto____0;
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62638__auto____1;
return cljs$core$async$state_machine__62638__auto__;
})()
})();
var state__62675__auto__ = (function (){var statearr_63756 = f__62674__auto__();
(statearr_63756[(6)] = c__62673__auto___64665);

return statearr_63756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
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
var G__63759 = arguments.length;
switch (G__63759) {
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
var c__62673__auto___64691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = (function (state_63791){
var state_val_63792 = (state_63791[(1)]);
if((state_val_63792 === (7))){
var inst_63771 = (state_63791[(7)]);
var inst_63770 = (state_63791[(8)]);
var inst_63770__$1 = (state_63791[(2)]);
var inst_63771__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63770__$1,(0),null);
var inst_63772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63770__$1,(1),null);
var inst_63773 = (inst_63771__$1 == null);
var state_63791__$1 = (function (){var statearr_63793 = state_63791;
(statearr_63793[(7)] = inst_63771__$1);

(statearr_63793[(8)] = inst_63770__$1);

(statearr_63793[(9)] = inst_63772);

return statearr_63793;
})();
if(cljs.core.truth_(inst_63773)){
var statearr_63794_64692 = state_63791__$1;
(statearr_63794_64692[(1)] = (8));

} else {
var statearr_63795_64693 = state_63791__$1;
(statearr_63795_64693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63792 === (1))){
var inst_63760 = cljs.core.vec(chs);
var inst_63761 = inst_63760;
var state_63791__$1 = (function (){var statearr_63796 = state_63791;
(statearr_63796[(10)] = inst_63761);

return statearr_63796;
})();
var statearr_63797_64694 = state_63791__$1;
(statearr_63797_64694[(2)] = null);

(statearr_63797_64694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63792 === (4))){
var inst_63761 = (state_63791[(10)]);
var state_63791__$1 = state_63791;
return cljs.core.async.ioc_alts_BANG_(state_63791__$1,(7),inst_63761);
} else {
if((state_val_63792 === (6))){
var inst_63787 = (state_63791[(2)]);
var state_63791__$1 = state_63791;
var statearr_63798_64695 = state_63791__$1;
(statearr_63798_64695[(2)] = inst_63787);

(statearr_63798_64695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63792 === (3))){
var inst_63789 = (state_63791[(2)]);
var state_63791__$1 = state_63791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63791__$1,inst_63789);
} else {
if((state_val_63792 === (2))){
var inst_63761 = (state_63791[(10)]);
var inst_63763 = cljs.core.count(inst_63761);
var inst_63764 = (inst_63763 > (0));
var state_63791__$1 = state_63791;
if(cljs.core.truth_(inst_63764)){
var statearr_63800_64696 = state_63791__$1;
(statearr_63800_64696[(1)] = (4));

} else {
var statearr_63801_64697 = state_63791__$1;
(statearr_63801_64697[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63792 === (11))){
var inst_63761 = (state_63791[(10)]);
var inst_63780 = (state_63791[(2)]);
var tmp63799 = inst_63761;
var inst_63761__$1 = tmp63799;
var state_63791__$1 = (function (){var statearr_63802 = state_63791;
(statearr_63802[(11)] = inst_63780);

(statearr_63802[(10)] = inst_63761__$1);

return statearr_63802;
})();
var statearr_63803_64698 = state_63791__$1;
(statearr_63803_64698[(2)] = null);

(statearr_63803_64698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63792 === (9))){
var inst_63771 = (state_63791[(7)]);
var state_63791__$1 = state_63791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63791__$1,(11),out,inst_63771);
} else {
if((state_val_63792 === (5))){
var inst_63785 = cljs.core.async.close_BANG_(out);
var state_63791__$1 = state_63791;
var statearr_63804_64699 = state_63791__$1;
(statearr_63804_64699[(2)] = inst_63785);

(statearr_63804_64699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63792 === (10))){
var inst_63783 = (state_63791[(2)]);
var state_63791__$1 = state_63791;
var statearr_63805_64700 = state_63791__$1;
(statearr_63805_64700[(2)] = inst_63783);

(statearr_63805_64700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63792 === (8))){
var inst_63771 = (state_63791[(7)]);
var inst_63770 = (state_63791[(8)]);
var inst_63772 = (state_63791[(9)]);
var inst_63761 = (state_63791[(10)]);
var inst_63775 = (function (){var cs = inst_63761;
var vec__63766 = inst_63770;
var v = inst_63771;
var c = inst_63772;
return (function (p1__63757_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__63757_SHARP_);
});
})();
var inst_63776 = cljs.core.filterv(inst_63775,inst_63761);
var inst_63761__$1 = inst_63776;
var state_63791__$1 = (function (){var statearr_63806 = state_63791;
(statearr_63806[(10)] = inst_63761__$1);

return statearr_63806;
})();
var statearr_63807_64702 = state_63791__$1;
(statearr_63807_64702[(2)] = null);

(statearr_63807_64702[(1)] = (2));


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
var cljs$core$async$state_machine__62638__auto__ = null;
var cljs$core$async$state_machine__62638__auto____0 = (function (){
var statearr_63808 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63808[(0)] = cljs$core$async$state_machine__62638__auto__);

(statearr_63808[(1)] = (1));

return statearr_63808;
});
var cljs$core$async$state_machine__62638__auto____1 = (function (state_63791){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_63791);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e63809){var ex__62641__auto__ = e63809;
var statearr_63810_64703 = state_63791;
(statearr_63810_64703[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_63791[(4)]))){
var statearr_63811_64705 = state_63791;
(statearr_63811_64705[(1)] = cljs.core.first((state_63791[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64706 = state_63791;
state_63791 = G__64706;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs$core$async$state_machine__62638__auto__ = function(state_63791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62638__auto____1.call(this,state_63791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62638__auto____0;
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62638__auto____1;
return cljs$core$async$state_machine__62638__auto__;
})()
})();
var state__62675__auto__ = (function (){var statearr_63812 = f__62674__auto__();
(statearr_63812[(6)] = c__62673__auto___64691);

return statearr_63812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
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
var G__63814 = arguments.length;
switch (G__63814) {
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
var c__62673__auto___64711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = (function (state_63838){
var state_val_63839 = (state_63838[(1)]);
if((state_val_63839 === (7))){
var inst_63820 = (state_63838[(7)]);
var inst_63820__$1 = (state_63838[(2)]);
var inst_63821 = (inst_63820__$1 == null);
var inst_63822 = cljs.core.not(inst_63821);
var state_63838__$1 = (function (){var statearr_63840 = state_63838;
(statearr_63840[(7)] = inst_63820__$1);

return statearr_63840;
})();
if(inst_63822){
var statearr_63841_64712 = state_63838__$1;
(statearr_63841_64712[(1)] = (8));

} else {
var statearr_63842_64713 = state_63838__$1;
(statearr_63842_64713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63839 === (1))){
var inst_63815 = (0);
var state_63838__$1 = (function (){var statearr_63843 = state_63838;
(statearr_63843[(8)] = inst_63815);

return statearr_63843;
})();
var statearr_63844_64715 = state_63838__$1;
(statearr_63844_64715[(2)] = null);

(statearr_63844_64715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63839 === (4))){
var state_63838__$1 = state_63838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63838__$1,(7),ch);
} else {
if((state_val_63839 === (6))){
var inst_63833 = (state_63838[(2)]);
var state_63838__$1 = state_63838;
var statearr_63845_64716 = state_63838__$1;
(statearr_63845_64716[(2)] = inst_63833);

(statearr_63845_64716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63839 === (3))){
var inst_63835 = (state_63838[(2)]);
var inst_63836 = cljs.core.async.close_BANG_(out);
var state_63838__$1 = (function (){var statearr_63846 = state_63838;
(statearr_63846[(9)] = inst_63835);

return statearr_63846;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63838__$1,inst_63836);
} else {
if((state_val_63839 === (2))){
var inst_63815 = (state_63838[(8)]);
var inst_63817 = (inst_63815 < n);
var state_63838__$1 = state_63838;
if(cljs.core.truth_(inst_63817)){
var statearr_63847_64720 = state_63838__$1;
(statearr_63847_64720[(1)] = (4));

} else {
var statearr_63848_64721 = state_63838__$1;
(statearr_63848_64721[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63839 === (11))){
var inst_63815 = (state_63838[(8)]);
var inst_63825 = (state_63838[(2)]);
var inst_63826 = (inst_63815 + (1));
var inst_63815__$1 = inst_63826;
var state_63838__$1 = (function (){var statearr_63849 = state_63838;
(statearr_63849[(8)] = inst_63815__$1);

(statearr_63849[(10)] = inst_63825);

return statearr_63849;
})();
var statearr_63850_64722 = state_63838__$1;
(statearr_63850_64722[(2)] = null);

(statearr_63850_64722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63839 === (9))){
var state_63838__$1 = state_63838;
var statearr_63851_64723 = state_63838__$1;
(statearr_63851_64723[(2)] = null);

(statearr_63851_64723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63839 === (5))){
var state_63838__$1 = state_63838;
var statearr_63852_64724 = state_63838__$1;
(statearr_63852_64724[(2)] = null);

(statearr_63852_64724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63839 === (10))){
var inst_63830 = (state_63838[(2)]);
var state_63838__$1 = state_63838;
var statearr_63853_64725 = state_63838__$1;
(statearr_63853_64725[(2)] = inst_63830);

(statearr_63853_64725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63839 === (8))){
var inst_63820 = (state_63838[(7)]);
var state_63838__$1 = state_63838;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63838__$1,(11),out,inst_63820);
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
var cljs$core$async$state_machine__62638__auto__ = null;
var cljs$core$async$state_machine__62638__auto____0 = (function (){
var statearr_63854 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63854[(0)] = cljs$core$async$state_machine__62638__auto__);

(statearr_63854[(1)] = (1));

return statearr_63854;
});
var cljs$core$async$state_machine__62638__auto____1 = (function (state_63838){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_63838);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e63855){var ex__62641__auto__ = e63855;
var statearr_63856_64726 = state_63838;
(statearr_63856_64726[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_63838[(4)]))){
var statearr_63857_64727 = state_63838;
(statearr_63857_64727[(1)] = cljs.core.first((state_63838[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64728 = state_63838;
state_63838 = G__64728;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs$core$async$state_machine__62638__auto__ = function(state_63838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62638__auto____1.call(this,state_63838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62638__auto____0;
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62638__auto____1;
return cljs$core$async$state_machine__62638__auto__;
})()
})();
var state__62675__auto__ = (function (){var statearr_63858 = f__62674__auto__();
(statearr_63858[(6)] = c__62673__auto___64711);

return statearr_63858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63860 = (function (f,ch,meta63861){
this.f = f;
this.ch = ch;
this.meta63861 = meta63861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63862,meta63861__$1){
var self__ = this;
var _63862__$1 = this;
return (new cljs.core.async.t_cljs$core$async63860(self__.f,self__.ch,meta63861__$1));
}));

(cljs.core.async.t_cljs$core$async63860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63862){
var self__ = this;
var _63862__$1 = this;
return self__.meta63861;
}));

(cljs.core.async.t_cljs$core$async63860.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63860.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63860.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63860.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63860.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63863 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63863 = (function (f,ch,meta63861,_,fn1,meta63864){
this.f = f;
this.ch = ch;
this.meta63861 = meta63861;
this._ = _;
this.fn1 = fn1;
this.meta63864 = meta63864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63865,meta63864__$1){
var self__ = this;
var _63865__$1 = this;
return (new cljs.core.async.t_cljs$core$async63863(self__.f,self__.ch,self__.meta63861,self__._,self__.fn1,meta63864__$1));
}));

(cljs.core.async.t_cljs$core$async63863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63865){
var self__ = this;
var _63865__$1 = this;
return self__.meta63864;
}));

(cljs.core.async.t_cljs$core$async63863.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63863.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async63863.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async63863.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__63859_SHARP_){
var G__63866 = (((p1__63859_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__63859_SHARP_) : self__.f.call(null,p1__63859_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__63866) : f1.call(null,G__63866));
});
}));

(cljs.core.async.t_cljs$core$async63863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63861","meta63861",-723281549,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async63860","cljs.core.async/t_cljs$core$async63860",-284846201,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta63864","meta63864",-1061068041,null)], null);
}));

(cljs.core.async.t_cljs$core$async63863.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63863");

(cljs.core.async.t_cljs$core$async63863.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63863");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63863.
 */
cljs.core.async.__GT_t_cljs$core$async63863 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async63863(f__$1,ch__$1,meta63861__$1,___$2,fn1__$1,meta63864){
return (new cljs.core.async.t_cljs$core$async63863(f__$1,ch__$1,meta63861__$1,___$2,fn1__$1,meta63864));
});

}

return (new cljs.core.async.t_cljs$core$async63863(self__.f,self__.ch,self__.meta63861,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__63867 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__63867) : self__.f.call(null,G__63867));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async63860.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63860.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async63860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63861","meta63861",-723281549,null)], null);
}));

(cljs.core.async.t_cljs$core$async63860.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63860");

(cljs.core.async.t_cljs$core$async63860.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63860");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63860.
 */
cljs.core.async.__GT_t_cljs$core$async63860 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async63860(f__$1,ch__$1,meta63861){
return (new cljs.core.async.t_cljs$core$async63860(f__$1,ch__$1,meta63861));
});

}

return (new cljs.core.async.t_cljs$core$async63860(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63868 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63868 = (function (f,ch,meta63869){
this.f = f;
this.ch = ch;
this.meta63869 = meta63869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63870,meta63869__$1){
var self__ = this;
var _63870__$1 = this;
return (new cljs.core.async.t_cljs$core$async63868(self__.f,self__.ch,meta63869__$1));
}));

(cljs.core.async.t_cljs$core$async63868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63870){
var self__ = this;
var _63870__$1 = this;
return self__.meta63869;
}));

(cljs.core.async.t_cljs$core$async63868.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63868.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63868.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63868.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async63868.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63868.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async63868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63869","meta63869",-1906504539,null)], null);
}));

(cljs.core.async.t_cljs$core$async63868.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63868");

(cljs.core.async.t_cljs$core$async63868.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63868");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63868.
 */
cljs.core.async.__GT_t_cljs$core$async63868 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async63868(f__$1,ch__$1,meta63869){
return (new cljs.core.async.t_cljs$core$async63868(f__$1,ch__$1,meta63869));
});

}

return (new cljs.core.async.t_cljs$core$async63868(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63871 = (function (p,ch,meta63872){
this.p = p;
this.ch = ch;
this.meta63872 = meta63872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63873,meta63872__$1){
var self__ = this;
var _63873__$1 = this;
return (new cljs.core.async.t_cljs$core$async63871(self__.p,self__.ch,meta63872__$1));
}));

(cljs.core.async.t_cljs$core$async63871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63873){
var self__ = this;
var _63873__$1 = this;
return self__.meta63872;
}));

(cljs.core.async.t_cljs$core$async63871.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63871.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63871.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63871.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63871.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async63871.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63871.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async63871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63872","meta63872",617702796,null)], null);
}));

(cljs.core.async.t_cljs$core$async63871.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63871");

(cljs.core.async.t_cljs$core$async63871.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63871");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63871.
 */
cljs.core.async.__GT_t_cljs$core$async63871 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async63871(p__$1,ch__$1,meta63872){
return (new cljs.core.async.t_cljs$core$async63871(p__$1,ch__$1,meta63872));
});

}

return (new cljs.core.async.t_cljs$core$async63871(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__63875 = arguments.length;
switch (G__63875) {
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
var c__62673__auto___64730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = (function (state_63896){
var state_val_63897 = (state_63896[(1)]);
if((state_val_63897 === (7))){
var inst_63892 = (state_63896[(2)]);
var state_63896__$1 = state_63896;
var statearr_63898_64731 = state_63896__$1;
(statearr_63898_64731[(2)] = inst_63892);

(statearr_63898_64731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63897 === (1))){
var state_63896__$1 = state_63896;
var statearr_63899_64732 = state_63896__$1;
(statearr_63899_64732[(2)] = null);

(statearr_63899_64732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63897 === (4))){
var inst_63878 = (state_63896[(7)]);
var inst_63878__$1 = (state_63896[(2)]);
var inst_63879 = (inst_63878__$1 == null);
var state_63896__$1 = (function (){var statearr_63900 = state_63896;
(statearr_63900[(7)] = inst_63878__$1);

return statearr_63900;
})();
if(cljs.core.truth_(inst_63879)){
var statearr_63901_64733 = state_63896__$1;
(statearr_63901_64733[(1)] = (5));

} else {
var statearr_63902_64734 = state_63896__$1;
(statearr_63902_64734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63897 === (6))){
var inst_63878 = (state_63896[(7)]);
var inst_63883 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_63878) : p.call(null,inst_63878));
var state_63896__$1 = state_63896;
if(cljs.core.truth_(inst_63883)){
var statearr_63903_64735 = state_63896__$1;
(statearr_63903_64735[(1)] = (8));

} else {
var statearr_63904_64736 = state_63896__$1;
(statearr_63904_64736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63897 === (3))){
var inst_63894 = (state_63896[(2)]);
var state_63896__$1 = state_63896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63896__$1,inst_63894);
} else {
if((state_val_63897 === (2))){
var state_63896__$1 = state_63896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63896__$1,(4),ch);
} else {
if((state_val_63897 === (11))){
var inst_63886 = (state_63896[(2)]);
var state_63896__$1 = state_63896;
var statearr_63905_64737 = state_63896__$1;
(statearr_63905_64737[(2)] = inst_63886);

(statearr_63905_64737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63897 === (9))){
var state_63896__$1 = state_63896;
var statearr_63906_64738 = state_63896__$1;
(statearr_63906_64738[(2)] = null);

(statearr_63906_64738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63897 === (5))){
var inst_63881 = cljs.core.async.close_BANG_(out);
var state_63896__$1 = state_63896;
var statearr_63907_64739 = state_63896__$1;
(statearr_63907_64739[(2)] = inst_63881);

(statearr_63907_64739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63897 === (10))){
var inst_63889 = (state_63896[(2)]);
var state_63896__$1 = (function (){var statearr_63908 = state_63896;
(statearr_63908[(8)] = inst_63889);

return statearr_63908;
})();
var statearr_63909_64740 = state_63896__$1;
(statearr_63909_64740[(2)] = null);

(statearr_63909_64740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63897 === (8))){
var inst_63878 = (state_63896[(7)]);
var state_63896__$1 = state_63896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63896__$1,(11),out,inst_63878);
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
var cljs$core$async$state_machine__62638__auto__ = null;
var cljs$core$async$state_machine__62638__auto____0 = (function (){
var statearr_63910 = [null,null,null,null,null,null,null,null,null];
(statearr_63910[(0)] = cljs$core$async$state_machine__62638__auto__);

(statearr_63910[(1)] = (1));

return statearr_63910;
});
var cljs$core$async$state_machine__62638__auto____1 = (function (state_63896){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_63896);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e63911){var ex__62641__auto__ = e63911;
var statearr_63912_64741 = state_63896;
(statearr_63912_64741[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_63896[(4)]))){
var statearr_63913_64742 = state_63896;
(statearr_63913_64742[(1)] = cljs.core.first((state_63896[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64743 = state_63896;
state_63896 = G__64743;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs$core$async$state_machine__62638__auto__ = function(state_63896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62638__auto____1.call(this,state_63896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62638__auto____0;
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62638__auto____1;
return cljs$core$async$state_machine__62638__auto__;
})()
})();
var state__62675__auto__ = (function (){var statearr_63914 = f__62674__auto__();
(statearr_63914[(6)] = c__62673__auto___64730);

return statearr_63914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__63916 = arguments.length;
switch (G__63916) {
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
var c__62673__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = (function (state_63978){
var state_val_63979 = (state_63978[(1)]);
if((state_val_63979 === (7))){
var inst_63974 = (state_63978[(2)]);
var state_63978__$1 = state_63978;
var statearr_63980_64745 = state_63978__$1;
(statearr_63980_64745[(2)] = inst_63974);

(statearr_63980_64745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63979 === (20))){
var inst_63944 = (state_63978[(7)]);
var inst_63955 = (state_63978[(2)]);
var inst_63956 = cljs.core.next(inst_63944);
var inst_63930 = inst_63956;
var inst_63931 = null;
var inst_63932 = (0);
var inst_63933 = (0);
var state_63978__$1 = (function (){var statearr_63981 = state_63978;
(statearr_63981[(8)] = inst_63931);

(statearr_63981[(9)] = inst_63932);

(statearr_63981[(10)] = inst_63930);

(statearr_63981[(11)] = inst_63933);

(statearr_63981[(12)] = inst_63955);

return statearr_63981;
})();
var statearr_63982_64746 = state_63978__$1;
(statearr_63982_64746[(2)] = null);

(statearr_63982_64746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63979 === (1))){
var state_63978__$1 = state_63978;
var statearr_63983_64747 = state_63978__$1;
(statearr_63983_64747[(2)] = null);

(statearr_63983_64747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63979 === (4))){
var inst_63919 = (state_63978[(13)]);
var inst_63919__$1 = (state_63978[(2)]);
var inst_63920 = (inst_63919__$1 == null);
var state_63978__$1 = (function (){var statearr_63984 = state_63978;
(statearr_63984[(13)] = inst_63919__$1);

return statearr_63984;
})();
if(cljs.core.truth_(inst_63920)){
var statearr_63985_64748 = state_63978__$1;
(statearr_63985_64748[(1)] = (5));

} else {
var statearr_63986_64749 = state_63978__$1;
(statearr_63986_64749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63979 === (15))){
var state_63978__$1 = state_63978;
var statearr_63990_64750 = state_63978__$1;
(statearr_63990_64750[(2)] = null);

(statearr_63990_64750[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63979 === (21))){
var state_63978__$1 = state_63978;
var statearr_63991_64751 = state_63978__$1;
(statearr_63991_64751[(2)] = null);

(statearr_63991_64751[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63979 === (13))){
var inst_63931 = (state_63978[(8)]);
var inst_63932 = (state_63978[(9)]);
var inst_63930 = (state_63978[(10)]);
var inst_63933 = (state_63978[(11)]);
var inst_63940 = (state_63978[(2)]);
var inst_63941 = (inst_63933 + (1));
var tmp63987 = inst_63931;
var tmp63988 = inst_63932;
var tmp63989 = inst_63930;
var inst_63930__$1 = tmp63989;
var inst_63931__$1 = tmp63987;
var inst_63932__$1 = tmp63988;
var inst_63933__$1 = inst_63941;
var state_63978__$1 = (function (){var statearr_63992 = state_63978;
(statearr_63992[(14)] = inst_63940);

(statearr_63992[(8)] = inst_63931__$1);

(statearr_63992[(9)] = inst_63932__$1);

(statearr_63992[(10)] = inst_63930__$1);

(statearr_63992[(11)] = inst_63933__$1);

return statearr_63992;
})();
var statearr_63993_64752 = state_63978__$1;
(statearr_63993_64752[(2)] = null);

(statearr_63993_64752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63979 === (22))){
var state_63978__$1 = state_63978;
var statearr_63994_64753 = state_63978__$1;
(statearr_63994_64753[(2)] = null);

(statearr_63994_64753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63979 === (6))){
var inst_63919 = (state_63978[(13)]);
var inst_63928 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_63919) : f.call(null,inst_63919));
var inst_63929 = cljs.core.seq(inst_63928);
var inst_63930 = inst_63929;
var inst_63931 = null;
var inst_63932 = (0);
var inst_63933 = (0);
var state_63978__$1 = (function (){var statearr_63995 = state_63978;
(statearr_63995[(8)] = inst_63931);

(statearr_63995[(9)] = inst_63932);

(statearr_63995[(10)] = inst_63930);

(statearr_63995[(11)] = inst_63933);

return statearr_63995;
})();
var statearr_63996_64754 = state_63978__$1;
(statearr_63996_64754[(2)] = null);

(statearr_63996_64754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63979 === (17))){
var inst_63944 = (state_63978[(7)]);
var inst_63948 = cljs.core.chunk_first(inst_63944);
var inst_63949 = cljs.core.chunk_rest(inst_63944);
var inst_63950 = cljs.core.count(inst_63948);
var inst_63930 = inst_63949;
var inst_63931 = inst_63948;
var inst_63932 = inst_63950;
var inst_63933 = (0);
var state_63978__$1 = (function (){var statearr_63997 = state_63978;
(statearr_63997[(8)] = inst_63931);

(statearr_63997[(9)] = inst_63932);

(statearr_63997[(10)] = inst_63930);

(statearr_63997[(11)] = inst_63933);

return statearr_63997;
})();
var statearr_63998_64755 = state_63978__$1;
(statearr_63998_64755[(2)] = null);

(statearr_63998_64755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63979 === (3))){
var inst_63976 = (state_63978[(2)]);
var state_63978__$1 = state_63978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63978__$1,inst_63976);
} else {
if((state_val_63979 === (12))){
var inst_63964 = (state_63978[(2)]);
var state_63978__$1 = state_63978;
var statearr_63999_64756 = state_63978__$1;
(statearr_63999_64756[(2)] = inst_63964);

(statearr_63999_64756[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63979 === (2))){
var state_63978__$1 = state_63978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63978__$1,(4),in$);
} else {
if((state_val_63979 === (23))){
var inst_63972 = (state_63978[(2)]);
var state_63978__$1 = state_63978;
var statearr_64000_64757 = state_63978__$1;
(statearr_64000_64757[(2)] = inst_63972);

(statearr_64000_64757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63979 === (19))){
var inst_63959 = (state_63978[(2)]);
var state_63978__$1 = state_63978;
var statearr_64001_64758 = state_63978__$1;
(statearr_64001_64758[(2)] = inst_63959);

(statearr_64001_64758[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63979 === (11))){
var inst_63930 = (state_63978[(10)]);
var inst_63944 = (state_63978[(7)]);
var inst_63944__$1 = cljs.core.seq(inst_63930);
var state_63978__$1 = (function (){var statearr_64002 = state_63978;
(statearr_64002[(7)] = inst_63944__$1);

return statearr_64002;
})();
if(inst_63944__$1){
var statearr_64003_64759 = state_63978__$1;
(statearr_64003_64759[(1)] = (14));

} else {
var statearr_64004_64760 = state_63978__$1;
(statearr_64004_64760[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63979 === (9))){
var inst_63966 = (state_63978[(2)]);
var inst_63967 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_63978__$1 = (function (){var statearr_64005 = state_63978;
(statearr_64005[(15)] = inst_63966);

return statearr_64005;
})();
if(cljs.core.truth_(inst_63967)){
var statearr_64006_64761 = state_63978__$1;
(statearr_64006_64761[(1)] = (21));

} else {
var statearr_64007_64762 = state_63978__$1;
(statearr_64007_64762[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63979 === (5))){
var inst_63922 = cljs.core.async.close_BANG_(out);
var state_63978__$1 = state_63978;
var statearr_64008_64763 = state_63978__$1;
(statearr_64008_64763[(2)] = inst_63922);

(statearr_64008_64763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63979 === (14))){
var inst_63944 = (state_63978[(7)]);
var inst_63946 = cljs.core.chunked_seq_QMARK_(inst_63944);
var state_63978__$1 = state_63978;
if(inst_63946){
var statearr_64009_64764 = state_63978__$1;
(statearr_64009_64764[(1)] = (17));

} else {
var statearr_64010_64765 = state_63978__$1;
(statearr_64010_64765[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63979 === (16))){
var inst_63962 = (state_63978[(2)]);
var state_63978__$1 = state_63978;
var statearr_64011_64766 = state_63978__$1;
(statearr_64011_64766[(2)] = inst_63962);

(statearr_64011_64766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63979 === (10))){
var inst_63931 = (state_63978[(8)]);
var inst_63933 = (state_63978[(11)]);
var inst_63938 = cljs.core._nth(inst_63931,inst_63933);
var state_63978__$1 = state_63978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63978__$1,(13),out,inst_63938);
} else {
if((state_val_63979 === (18))){
var inst_63944 = (state_63978[(7)]);
var inst_63953 = cljs.core.first(inst_63944);
var state_63978__$1 = state_63978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63978__$1,(20),out,inst_63953);
} else {
if((state_val_63979 === (8))){
var inst_63932 = (state_63978[(9)]);
var inst_63933 = (state_63978[(11)]);
var inst_63935 = (inst_63933 < inst_63932);
var inst_63936 = inst_63935;
var state_63978__$1 = state_63978;
if(cljs.core.truth_(inst_63936)){
var statearr_64012_64769 = state_63978__$1;
(statearr_64012_64769[(1)] = (10));

} else {
var statearr_64013_64770 = state_63978__$1;
(statearr_64013_64770[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__62638__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__62638__auto____0 = (function (){
var statearr_64014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64014[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__62638__auto__);

(statearr_64014[(1)] = (1));

return statearr_64014;
});
var cljs$core$async$mapcat_STAR__$_state_machine__62638__auto____1 = (function (state_63978){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_63978);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e64015){var ex__62641__auto__ = e64015;
var statearr_64016_64771 = state_63978;
(statearr_64016_64771[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_63978[(4)]))){
var statearr_64017_64772 = state_63978;
(statearr_64017_64772[(1)] = cljs.core.first((state_63978[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64773 = state_63978;
state_63978 = G__64773;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__62638__auto__ = function(state_63978){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__62638__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__62638__auto____1.call(this,state_63978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__62638__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__62638__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__62638__auto__;
})()
})();
var state__62675__auto__ = (function (){var statearr_64018 = f__62674__auto__();
(statearr_64018[(6)] = c__62673__auto__);

return statearr_64018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
}));

return c__62673__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__64020 = arguments.length;
switch (G__64020) {
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
var G__64022 = arguments.length;
switch (G__64022) {
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
var G__64024 = arguments.length;
switch (G__64024) {
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
var c__62673__auto___64785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = (function (state_64048){
var state_val_64049 = (state_64048[(1)]);
if((state_val_64049 === (7))){
var inst_64043 = (state_64048[(2)]);
var state_64048__$1 = state_64048;
var statearr_64050_64786 = state_64048__$1;
(statearr_64050_64786[(2)] = inst_64043);

(statearr_64050_64786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64049 === (1))){
var inst_64025 = null;
var state_64048__$1 = (function (){var statearr_64051 = state_64048;
(statearr_64051[(7)] = inst_64025);

return statearr_64051;
})();
var statearr_64052_64787 = state_64048__$1;
(statearr_64052_64787[(2)] = null);

(statearr_64052_64787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64049 === (4))){
var inst_64028 = (state_64048[(8)]);
var inst_64028__$1 = (state_64048[(2)]);
var inst_64029 = (inst_64028__$1 == null);
var inst_64030 = cljs.core.not(inst_64029);
var state_64048__$1 = (function (){var statearr_64053 = state_64048;
(statearr_64053[(8)] = inst_64028__$1);

return statearr_64053;
})();
if(inst_64030){
var statearr_64054_64788 = state_64048__$1;
(statearr_64054_64788[(1)] = (5));

} else {
var statearr_64055_64789 = state_64048__$1;
(statearr_64055_64789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64049 === (6))){
var state_64048__$1 = state_64048;
var statearr_64056_64790 = state_64048__$1;
(statearr_64056_64790[(2)] = null);

(statearr_64056_64790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64049 === (3))){
var inst_64045 = (state_64048[(2)]);
var inst_64046 = cljs.core.async.close_BANG_(out);
var state_64048__$1 = (function (){var statearr_64057 = state_64048;
(statearr_64057[(9)] = inst_64045);

return statearr_64057;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64048__$1,inst_64046);
} else {
if((state_val_64049 === (2))){
var state_64048__$1 = state_64048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64048__$1,(4),ch);
} else {
if((state_val_64049 === (11))){
var inst_64028 = (state_64048[(8)]);
var inst_64037 = (state_64048[(2)]);
var inst_64025 = inst_64028;
var state_64048__$1 = (function (){var statearr_64058 = state_64048;
(statearr_64058[(10)] = inst_64037);

(statearr_64058[(7)] = inst_64025);

return statearr_64058;
})();
var statearr_64059_64791 = state_64048__$1;
(statearr_64059_64791[(2)] = null);

(statearr_64059_64791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64049 === (9))){
var inst_64028 = (state_64048[(8)]);
var state_64048__$1 = state_64048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64048__$1,(11),out,inst_64028);
} else {
if((state_val_64049 === (5))){
var inst_64028 = (state_64048[(8)]);
var inst_64025 = (state_64048[(7)]);
var inst_64032 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64028,inst_64025);
var state_64048__$1 = state_64048;
if(inst_64032){
var statearr_64061_64793 = state_64048__$1;
(statearr_64061_64793[(1)] = (8));

} else {
var statearr_64062_64794 = state_64048__$1;
(statearr_64062_64794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64049 === (10))){
var inst_64040 = (state_64048[(2)]);
var state_64048__$1 = state_64048;
var statearr_64063_64795 = state_64048__$1;
(statearr_64063_64795[(2)] = inst_64040);

(statearr_64063_64795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64049 === (8))){
var inst_64025 = (state_64048[(7)]);
var tmp64060 = inst_64025;
var inst_64025__$1 = tmp64060;
var state_64048__$1 = (function (){var statearr_64064 = state_64048;
(statearr_64064[(7)] = inst_64025__$1);

return statearr_64064;
})();
var statearr_64065_64796 = state_64048__$1;
(statearr_64065_64796[(2)] = null);

(statearr_64065_64796[(1)] = (2));


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
var cljs$core$async$state_machine__62638__auto__ = null;
var cljs$core$async$state_machine__62638__auto____0 = (function (){
var statearr_64066 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64066[(0)] = cljs$core$async$state_machine__62638__auto__);

(statearr_64066[(1)] = (1));

return statearr_64066;
});
var cljs$core$async$state_machine__62638__auto____1 = (function (state_64048){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_64048);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e64067){var ex__62641__auto__ = e64067;
var statearr_64068_64797 = state_64048;
(statearr_64068_64797[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_64048[(4)]))){
var statearr_64069_64798 = state_64048;
(statearr_64069_64798[(1)] = cljs.core.first((state_64048[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64799 = state_64048;
state_64048 = G__64799;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs$core$async$state_machine__62638__auto__ = function(state_64048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62638__auto____1.call(this,state_64048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62638__auto____0;
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62638__auto____1;
return cljs$core$async$state_machine__62638__auto__;
})()
})();
var state__62675__auto__ = (function (){var statearr_64070 = f__62674__auto__();
(statearr_64070[(6)] = c__62673__auto___64785);

return statearr_64070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__64072 = arguments.length;
switch (G__64072) {
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
var c__62673__auto___64801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = (function (state_64110){
var state_val_64111 = (state_64110[(1)]);
if((state_val_64111 === (7))){
var inst_64106 = (state_64110[(2)]);
var state_64110__$1 = state_64110;
var statearr_64112_64802 = state_64110__$1;
(statearr_64112_64802[(2)] = inst_64106);

(statearr_64112_64802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (1))){
var inst_64073 = (new Array(n));
var inst_64074 = inst_64073;
var inst_64075 = (0);
var state_64110__$1 = (function (){var statearr_64113 = state_64110;
(statearr_64113[(7)] = inst_64074);

(statearr_64113[(8)] = inst_64075);

return statearr_64113;
})();
var statearr_64114_64803 = state_64110__$1;
(statearr_64114_64803[(2)] = null);

(statearr_64114_64803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (4))){
var inst_64078 = (state_64110[(9)]);
var inst_64078__$1 = (state_64110[(2)]);
var inst_64079 = (inst_64078__$1 == null);
var inst_64080 = cljs.core.not(inst_64079);
var state_64110__$1 = (function (){var statearr_64115 = state_64110;
(statearr_64115[(9)] = inst_64078__$1);

return statearr_64115;
})();
if(inst_64080){
var statearr_64116_64806 = state_64110__$1;
(statearr_64116_64806[(1)] = (5));

} else {
var statearr_64117_64807 = state_64110__$1;
(statearr_64117_64807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (15))){
var inst_64100 = (state_64110[(2)]);
var state_64110__$1 = state_64110;
var statearr_64118_64808 = state_64110__$1;
(statearr_64118_64808[(2)] = inst_64100);

(statearr_64118_64808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (13))){
var state_64110__$1 = state_64110;
var statearr_64119_64809 = state_64110__$1;
(statearr_64119_64809[(2)] = null);

(statearr_64119_64809[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (6))){
var inst_64075 = (state_64110[(8)]);
var inst_64096 = (inst_64075 > (0));
var state_64110__$1 = state_64110;
if(cljs.core.truth_(inst_64096)){
var statearr_64120_64810 = state_64110__$1;
(statearr_64120_64810[(1)] = (12));

} else {
var statearr_64121_64811 = state_64110__$1;
(statearr_64121_64811[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (3))){
var inst_64108 = (state_64110[(2)]);
var state_64110__$1 = state_64110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64110__$1,inst_64108);
} else {
if((state_val_64111 === (12))){
var inst_64074 = (state_64110[(7)]);
var inst_64098 = cljs.core.vec(inst_64074);
var state_64110__$1 = state_64110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64110__$1,(15),out,inst_64098);
} else {
if((state_val_64111 === (2))){
var state_64110__$1 = state_64110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64110__$1,(4),ch);
} else {
if((state_val_64111 === (11))){
var inst_64090 = (state_64110[(2)]);
var inst_64091 = (new Array(n));
var inst_64074 = inst_64091;
var inst_64075 = (0);
var state_64110__$1 = (function (){var statearr_64122 = state_64110;
(statearr_64122[(7)] = inst_64074);

(statearr_64122[(8)] = inst_64075);

(statearr_64122[(10)] = inst_64090);

return statearr_64122;
})();
var statearr_64123_64812 = state_64110__$1;
(statearr_64123_64812[(2)] = null);

(statearr_64123_64812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (9))){
var inst_64074 = (state_64110[(7)]);
var inst_64088 = cljs.core.vec(inst_64074);
var state_64110__$1 = state_64110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64110__$1,(11),out,inst_64088);
} else {
if((state_val_64111 === (5))){
var inst_64074 = (state_64110[(7)]);
var inst_64075 = (state_64110[(8)]);
var inst_64083 = (state_64110[(11)]);
var inst_64078 = (state_64110[(9)]);
var inst_64082 = (inst_64074[inst_64075] = inst_64078);
var inst_64083__$1 = (inst_64075 + (1));
var inst_64084 = (inst_64083__$1 < n);
var state_64110__$1 = (function (){var statearr_64124 = state_64110;
(statearr_64124[(11)] = inst_64083__$1);

(statearr_64124[(12)] = inst_64082);

return statearr_64124;
})();
if(cljs.core.truth_(inst_64084)){
var statearr_64125_64813 = state_64110__$1;
(statearr_64125_64813[(1)] = (8));

} else {
var statearr_64126_64814 = state_64110__$1;
(statearr_64126_64814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (14))){
var inst_64103 = (state_64110[(2)]);
var inst_64104 = cljs.core.async.close_BANG_(out);
var state_64110__$1 = (function (){var statearr_64128 = state_64110;
(statearr_64128[(13)] = inst_64103);

return statearr_64128;
})();
var statearr_64129_64815 = state_64110__$1;
(statearr_64129_64815[(2)] = inst_64104);

(statearr_64129_64815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (10))){
var inst_64094 = (state_64110[(2)]);
var state_64110__$1 = state_64110;
var statearr_64130_64816 = state_64110__$1;
(statearr_64130_64816[(2)] = inst_64094);

(statearr_64130_64816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64111 === (8))){
var inst_64074 = (state_64110[(7)]);
var inst_64083 = (state_64110[(11)]);
var tmp64127 = inst_64074;
var inst_64074__$1 = tmp64127;
var inst_64075 = inst_64083;
var state_64110__$1 = (function (){var statearr_64131 = state_64110;
(statearr_64131[(7)] = inst_64074__$1);

(statearr_64131[(8)] = inst_64075);

return statearr_64131;
})();
var statearr_64132_64817 = state_64110__$1;
(statearr_64132_64817[(2)] = null);

(statearr_64132_64817[(1)] = (2));


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
var cljs$core$async$state_machine__62638__auto__ = null;
var cljs$core$async$state_machine__62638__auto____0 = (function (){
var statearr_64133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64133[(0)] = cljs$core$async$state_machine__62638__auto__);

(statearr_64133[(1)] = (1));

return statearr_64133;
});
var cljs$core$async$state_machine__62638__auto____1 = (function (state_64110){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_64110);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e64134){var ex__62641__auto__ = e64134;
var statearr_64135_64818 = state_64110;
(statearr_64135_64818[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_64110[(4)]))){
var statearr_64136_64819 = state_64110;
(statearr_64136_64819[(1)] = cljs.core.first((state_64110[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64820 = state_64110;
state_64110 = G__64820;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs$core$async$state_machine__62638__auto__ = function(state_64110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62638__auto____1.call(this,state_64110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62638__auto____0;
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62638__auto____1;
return cljs$core$async$state_machine__62638__auto__;
})()
})();
var state__62675__auto__ = (function (){var statearr_64137 = f__62674__auto__();
(statearr_64137[(6)] = c__62673__auto___64801);

return statearr_64137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__64139 = arguments.length;
switch (G__64139) {
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
var c__62673__auto___64822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = (function (state_64181){
var state_val_64182 = (state_64181[(1)]);
if((state_val_64182 === (7))){
var inst_64177 = (state_64181[(2)]);
var state_64181__$1 = state_64181;
var statearr_64183_64823 = state_64181__$1;
(statearr_64183_64823[(2)] = inst_64177);

(statearr_64183_64823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64182 === (1))){
var inst_64140 = [];
var inst_64141 = inst_64140;
var inst_64142 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_64181__$1 = (function (){var statearr_64184 = state_64181;
(statearr_64184[(7)] = inst_64142);

(statearr_64184[(8)] = inst_64141);

return statearr_64184;
})();
var statearr_64185_64824 = state_64181__$1;
(statearr_64185_64824[(2)] = null);

(statearr_64185_64824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64182 === (4))){
var inst_64145 = (state_64181[(9)]);
var inst_64145__$1 = (state_64181[(2)]);
var inst_64146 = (inst_64145__$1 == null);
var inst_64147 = cljs.core.not(inst_64146);
var state_64181__$1 = (function (){var statearr_64186 = state_64181;
(statearr_64186[(9)] = inst_64145__$1);

return statearr_64186;
})();
if(inst_64147){
var statearr_64187_64825 = state_64181__$1;
(statearr_64187_64825[(1)] = (5));

} else {
var statearr_64188_64826 = state_64181__$1;
(statearr_64188_64826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64182 === (15))){
var inst_64171 = (state_64181[(2)]);
var state_64181__$1 = state_64181;
var statearr_64189_64827 = state_64181__$1;
(statearr_64189_64827[(2)] = inst_64171);

(statearr_64189_64827[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64182 === (13))){
var state_64181__$1 = state_64181;
var statearr_64190_64828 = state_64181__$1;
(statearr_64190_64828[(2)] = null);

(statearr_64190_64828[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64182 === (6))){
var inst_64141 = (state_64181[(8)]);
var inst_64166 = inst_64141.length;
var inst_64167 = (inst_64166 > (0));
var state_64181__$1 = state_64181;
if(cljs.core.truth_(inst_64167)){
var statearr_64191_64829 = state_64181__$1;
(statearr_64191_64829[(1)] = (12));

} else {
var statearr_64192_64830 = state_64181__$1;
(statearr_64192_64830[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64182 === (3))){
var inst_64179 = (state_64181[(2)]);
var state_64181__$1 = state_64181;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64181__$1,inst_64179);
} else {
if((state_val_64182 === (12))){
var inst_64141 = (state_64181[(8)]);
var inst_64169 = cljs.core.vec(inst_64141);
var state_64181__$1 = state_64181;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64181__$1,(15),out,inst_64169);
} else {
if((state_val_64182 === (2))){
var state_64181__$1 = state_64181;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64181__$1,(4),ch);
} else {
if((state_val_64182 === (11))){
var inst_64145 = (state_64181[(9)]);
var inst_64149 = (state_64181[(10)]);
var inst_64159 = (state_64181[(2)]);
var inst_64160 = [];
var inst_64161 = inst_64160.push(inst_64145);
var inst_64141 = inst_64160;
var inst_64142 = inst_64149;
var state_64181__$1 = (function (){var statearr_64193 = state_64181;
(statearr_64193[(11)] = inst_64161);

(statearr_64193[(12)] = inst_64159);

(statearr_64193[(7)] = inst_64142);

(statearr_64193[(8)] = inst_64141);

return statearr_64193;
})();
var statearr_64194_64831 = state_64181__$1;
(statearr_64194_64831[(2)] = null);

(statearr_64194_64831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64182 === (9))){
var inst_64141 = (state_64181[(8)]);
var inst_64157 = cljs.core.vec(inst_64141);
var state_64181__$1 = state_64181;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64181__$1,(11),out,inst_64157);
} else {
if((state_val_64182 === (5))){
var inst_64145 = (state_64181[(9)]);
var inst_64142 = (state_64181[(7)]);
var inst_64149 = (state_64181[(10)]);
var inst_64149__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_64145) : f.call(null,inst_64145));
var inst_64150 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64149__$1,inst_64142);
var inst_64151 = cljs.core.keyword_identical_QMARK_(inst_64142,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_64152 = ((inst_64150) || (inst_64151));
var state_64181__$1 = (function (){var statearr_64195 = state_64181;
(statearr_64195[(10)] = inst_64149__$1);

return statearr_64195;
})();
if(cljs.core.truth_(inst_64152)){
var statearr_64196_64832 = state_64181__$1;
(statearr_64196_64832[(1)] = (8));

} else {
var statearr_64197_64833 = state_64181__$1;
(statearr_64197_64833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64182 === (14))){
var inst_64174 = (state_64181[(2)]);
var inst_64175 = cljs.core.async.close_BANG_(out);
var state_64181__$1 = (function (){var statearr_64199 = state_64181;
(statearr_64199[(13)] = inst_64174);

return statearr_64199;
})();
var statearr_64200_64834 = state_64181__$1;
(statearr_64200_64834[(2)] = inst_64175);

(statearr_64200_64834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64182 === (10))){
var inst_64164 = (state_64181[(2)]);
var state_64181__$1 = state_64181;
var statearr_64201_64835 = state_64181__$1;
(statearr_64201_64835[(2)] = inst_64164);

(statearr_64201_64835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64182 === (8))){
var inst_64145 = (state_64181[(9)]);
var inst_64149 = (state_64181[(10)]);
var inst_64141 = (state_64181[(8)]);
var inst_64154 = inst_64141.push(inst_64145);
var tmp64198 = inst_64141;
var inst_64141__$1 = tmp64198;
var inst_64142 = inst_64149;
var state_64181__$1 = (function (){var statearr_64202 = state_64181;
(statearr_64202[(14)] = inst_64154);

(statearr_64202[(7)] = inst_64142);

(statearr_64202[(8)] = inst_64141__$1);

return statearr_64202;
})();
var statearr_64203_64836 = state_64181__$1;
(statearr_64203_64836[(2)] = null);

(statearr_64203_64836[(1)] = (2));


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
var cljs$core$async$state_machine__62638__auto__ = null;
var cljs$core$async$state_machine__62638__auto____0 = (function (){
var statearr_64204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64204[(0)] = cljs$core$async$state_machine__62638__auto__);

(statearr_64204[(1)] = (1));

return statearr_64204;
});
var cljs$core$async$state_machine__62638__auto____1 = (function (state_64181){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_64181);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e64205){var ex__62641__auto__ = e64205;
var statearr_64206_64837 = state_64181;
(statearr_64206_64837[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_64181[(4)]))){
var statearr_64207_64838 = state_64181;
(statearr_64207_64838[(1)] = cljs.core.first((state_64181[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64839 = state_64181;
state_64181 = G__64839;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs$core$async$state_machine__62638__auto__ = function(state_64181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__62638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__62638__auto____1.call(this,state_64181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__62638__auto____0;
cljs$core$async$state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__62638__auto____1;
return cljs$core$async$state_machine__62638__auto__;
})()
})();
var state__62675__auto__ = (function (){var statearr_64208 = f__62674__auto__();
(statearr_64208[(6)] = c__62673__auto___64822);

return statearr_64208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
