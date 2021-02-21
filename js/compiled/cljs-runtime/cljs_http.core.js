goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__65901 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__65901.cljs$core$IFn$_invoke$arity$1 ? fexpr__65901.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__65901.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65902){
var vec__65903 = p__65902;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65903,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65903,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__65906 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__65906)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__65906)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__65906)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__65906)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__65906)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__65906)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65906)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__65907){
var map__65908 = p__65907;
var map__65908__$1 = (((((!((map__65908 == null))))?(((((map__65908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65908):map__65908);
var request = map__65908__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65908__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65908__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65908__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__65910 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__65910,default_headers);

cljs_http.core.apply_response_type_BANG_(G__65910,response_type);

G__65910.setTimeoutInterval(timeout);

G__65910.setWithCredentials(send_credentials);

return G__65910;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__65911){
var map__65912 = p__65911;
var map__65912__$1 = (((((!((map__65912 == null))))?(((((map__65912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65912):map__65912);
var request = map__65912__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65912__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65912__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65912__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65912__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65912__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65912__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__65914 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__65914) : cljs_http.core.error_kw.call(null,G__65914));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_65967 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__65915_65968 = xhr;
G__65915_65968.setProgressEventsEnabled(true);

G__65915_65968.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_65967,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__65915_65968.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_65967,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__62648__auto___65969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = (function (state_65926){
var state_val_65927 = (state_65926[(1)]);
if((state_val_65927 === (1))){
var state_65926__$1 = state_65926;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65926__$1,(2),cancel);
} else {
if((state_val_65927 === (2))){
var inst_65917 = (state_65926[(2)]);
var inst_65918 = xhr.isComplete();
var inst_65919 = cljs.core.not(inst_65918);
var state_65926__$1 = (function (){var statearr_65928 = state_65926;
(statearr_65928[(7)] = inst_65917);

return statearr_65928;
})();
if(inst_65919){
var statearr_65929_65971 = state_65926__$1;
(statearr_65929_65971[(1)] = (3));

} else {
var statearr_65930_65972 = state_65926__$1;
(statearr_65930_65972[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (3))){
var inst_65921 = xhr.abort();
var state_65926__$1 = state_65926;
var statearr_65931_65974 = state_65926__$1;
(statearr_65931_65974[(2)] = inst_65921);

(statearr_65931_65974[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (4))){
var state_65926__$1 = state_65926;
var statearr_65932_65975 = state_65926__$1;
(statearr_65932_65975[(2)] = null);

(statearr_65932_65975[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65927 === (5))){
var inst_65924 = (state_65926[(2)]);
var state_65926__$1 = state_65926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65926__$1,inst_65924);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__62613__auto__ = null;
var cljs_http$core$xhr_$_state_machine__62613__auto____0 = (function (){
var statearr_65933 = [null,null,null,null,null,null,null,null];
(statearr_65933[(0)] = cljs_http$core$xhr_$_state_machine__62613__auto__);

(statearr_65933[(1)] = (1));

return statearr_65933;
});
var cljs_http$core$xhr_$_state_machine__62613__auto____1 = (function (state_65926){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_65926);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e65934){var ex__62616__auto__ = e65934;
var statearr_65935_65978 = state_65926;
(statearr_65935_65978[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_65926[(4)]))){
var statearr_65936_65979 = state_65926;
(statearr_65936_65979[(1)] = cljs.core.first((state_65926[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65981 = state_65926;
state_65926 = G__65981;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__62613__auto__ = function(state_65926){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__62613__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__62613__auto____1.call(this,state_65926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__62613__auto____0;
cljs_http$core$xhr_$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__62613__auto____1;
return cljs_http$core$xhr_$_state_machine__62613__auto__;
})()
})();
var state__62650__auto__ = (function (){var statearr_65937 = f__62649__auto__();
(statearr_65937[(6)] = c__62648__auto___65969);

return statearr_65937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__65938){
var map__65939 = p__65938;
var map__65939__$1 = (((((!((map__65939 == null))))?(((((map__65939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65939):map__65939);
var request = map__65939__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65939__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65939__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65939__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65939__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_65988 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_65988], null));

if(cljs.core.truth_(cancel)){
var c__62648__auto___65993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62649__auto__ = (function (){var switch__62612__auto__ = (function (state_65945){
var state_val_65946 = (state_65945[(1)]);
if((state_val_65946 === (1))){
var state_65945__$1 = state_65945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65945__$1,(2),cancel);
} else {
if((state_val_65946 === (2))){
var inst_65942 = (state_65945[(2)]);
var inst_65943 = jsonp.cancel(req_65988);
var state_65945__$1 = (function (){var statearr_65947 = state_65945;
(statearr_65947[(7)] = inst_65942);

return statearr_65947;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_65945__$1,inst_65943);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__62613__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__62613__auto____0 = (function (){
var statearr_65948 = [null,null,null,null,null,null,null,null];
(statearr_65948[(0)] = cljs_http$core$jsonp_$_state_machine__62613__auto__);

(statearr_65948[(1)] = (1));

return statearr_65948;
});
var cljs_http$core$jsonp_$_state_machine__62613__auto____1 = (function (state_65945){
while(true){
var ret_value__62614__auto__ = (function (){try{while(true){
var result__62615__auto__ = switch__62612__auto__(state_65945);
if(cljs.core.keyword_identical_QMARK_(result__62615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62615__auto__;
}
break;
}
}catch (e65949){var ex__62616__auto__ = e65949;
var statearr_65950_65997 = state_65945;
(statearr_65950_65997[(2)] = ex__62616__auto__);


if(cljs.core.seq((state_65945[(4)]))){
var statearr_65951_65998 = state_65945;
(statearr_65951_65998[(1)] = cljs.core.first((state_65945[(4)])));

} else {
throw ex__62616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65999 = state_65945;
state_65945 = G__65999;
continue;
} else {
return ret_value__62614__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__62613__auto__ = function(state_65945){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__62613__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__62613__auto____1.call(this,state_65945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__62613__auto____0;
cljs_http$core$jsonp_$_state_machine__62613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__62613__auto____1;
return cljs_http$core$jsonp_$_state_machine__62613__auto__;
})()
})();
var state__62650__auto__ = (function (){var statearr_65952 = f__62649__auto__();
(statearr_65952[(6)] = c__62648__auto___65993);

return statearr_65952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62650__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__65953){
var map__65954 = p__65953;
var map__65954__$1 = (((((!((map__65954 == null))))?(((((map__65954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65954):map__65954);
var request = map__65954__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65954__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
