goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__65902 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__65902.cljs$core$IFn$_invoke$arity$1 ? fexpr__65902.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__65902.call(null,channel));
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
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65903){
var vec__65904 = p__65903;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65904,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65904,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__65907 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__65907)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__65907)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__65907)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__65907)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__65907)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__65907)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65907)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__65908){
var map__65909 = p__65908;
var map__65909__$1 = (((((!((map__65909 == null))))?(((((map__65909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65909):map__65909);
var request = map__65909__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65909__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65909__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65909__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__65911 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__65911,default_headers);

cljs_http.core.apply_response_type_BANG_(G__65911,response_type);

G__65911.setTimeoutInterval(timeout);

G__65911.setWithCredentials(send_credentials);

return G__65911;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__65912){
var map__65913 = p__65912;
var map__65913__$1 = (((((!((map__65913 == null))))?(((((map__65913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65913):map__65913);
var request = map__65913__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65913__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65913__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65913__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65913__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65913__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65913__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
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
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__65915 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__65915) : cljs_http.core.error_kw.call(null,G__65915));
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
var listener_65963 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__65916_65964 = xhr;
G__65916_65964.setProgressEventsEnabled(true);

G__65916_65964.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_65963,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__65916_65964.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_65963,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__62673__auto___65965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = (function (state_65927){
var state_val_65928 = (state_65927[(1)]);
if((state_val_65928 === (1))){
var state_65927__$1 = state_65927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65927__$1,(2),cancel);
} else {
if((state_val_65928 === (2))){
var inst_65918 = (state_65927[(2)]);
var inst_65919 = xhr.isComplete();
var inst_65920 = cljs.core.not(inst_65919);
var state_65927__$1 = (function (){var statearr_65929 = state_65927;
(statearr_65929[(7)] = inst_65918);

return statearr_65929;
})();
if(inst_65920){
var statearr_65930_65970 = state_65927__$1;
(statearr_65930_65970[(1)] = (3));

} else {
var statearr_65931_65971 = state_65927__$1;
(statearr_65931_65971[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65928 === (3))){
var inst_65922 = xhr.abort();
var state_65927__$1 = state_65927;
var statearr_65932_65972 = state_65927__$1;
(statearr_65932_65972[(2)] = inst_65922);

(statearr_65932_65972[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65928 === (4))){
var state_65927__$1 = state_65927;
var statearr_65933_65974 = state_65927__$1;
(statearr_65933_65974[(2)] = null);

(statearr_65933_65974[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65928 === (5))){
var inst_65925 = (state_65927[(2)]);
var state_65927__$1 = state_65927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65927__$1,inst_65925);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__62638__auto__ = null;
var cljs_http$core$xhr_$_state_machine__62638__auto____0 = (function (){
var statearr_65934 = [null,null,null,null,null,null,null,null];
(statearr_65934[(0)] = cljs_http$core$xhr_$_state_machine__62638__auto__);

(statearr_65934[(1)] = (1));

return statearr_65934;
});
var cljs_http$core$xhr_$_state_machine__62638__auto____1 = (function (state_65927){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_65927);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e65935){var ex__62641__auto__ = e65935;
var statearr_65936_65975 = state_65927;
(statearr_65936_65975[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_65927[(4)]))){
var statearr_65937_65976 = state_65927;
(statearr_65937_65976[(1)] = cljs.core.first((state_65927[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65977 = state_65927;
state_65927 = G__65977;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__62638__auto__ = function(state_65927){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__62638__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__62638__auto____1.call(this,state_65927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__62638__auto____0;
cljs_http$core$xhr_$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__62638__auto____1;
return cljs_http$core$xhr_$_state_machine__62638__auto__;
})()
})();
var state__62675__auto__ = (function (){var statearr_65938 = f__62674__auto__();
(statearr_65938[(6)] = c__62673__auto___65965);

return statearr_65938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__65939){
var map__65940 = p__65939;
var map__65940__$1 = (((((!((map__65940 == null))))?(((((map__65940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65940):map__65940);
var request = map__65940__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65940__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65940__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65940__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65940__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_65978 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_65978], null));

if(cljs.core.truth_(cancel)){
var c__62673__auto___65981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62674__auto__ = (function (){var switch__62637__auto__ = (function (state_65946){
var state_val_65947 = (state_65946[(1)]);
if((state_val_65947 === (1))){
var state_65946__$1 = state_65946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65946__$1,(2),cancel);
} else {
if((state_val_65947 === (2))){
var inst_65943 = (state_65946[(2)]);
var inst_65944 = jsonp.cancel(req_65978);
var state_65946__$1 = (function (){var statearr_65948 = state_65946;
(statearr_65948[(7)] = inst_65943);

return statearr_65948;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_65946__$1,inst_65944);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__62638__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__62638__auto____0 = (function (){
var statearr_65949 = [null,null,null,null,null,null,null,null];
(statearr_65949[(0)] = cljs_http$core$jsonp_$_state_machine__62638__auto__);

(statearr_65949[(1)] = (1));

return statearr_65949;
});
var cljs_http$core$jsonp_$_state_machine__62638__auto____1 = (function (state_65946){
while(true){
var ret_value__62639__auto__ = (function (){try{while(true){
var result__62640__auto__ = switch__62637__auto__(state_65946);
if(cljs.core.keyword_identical_QMARK_(result__62640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62640__auto__;
}
break;
}
}catch (e65950){var ex__62641__auto__ = e65950;
var statearr_65951_65984 = state_65946;
(statearr_65951_65984[(2)] = ex__62641__auto__);


if(cljs.core.seq((state_65946[(4)]))){
var statearr_65952_65985 = state_65946;
(statearr_65952_65985[(1)] = cljs.core.first((state_65946[(4)])));

} else {
throw ex__62641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65986 = state_65946;
state_65946 = G__65986;
continue;
} else {
return ret_value__62639__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__62638__auto__ = function(state_65946){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__62638__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__62638__auto____1.call(this,state_65946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__62638__auto____0;
cljs_http$core$jsonp_$_state_machine__62638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__62638__auto____1;
return cljs_http$core$jsonp_$_state_machine__62638__auto__;
})()
})();
var state__62675__auto__ = (function (){var statearr_65953 = f__62674__auto__();
(statearr_65953[(6)] = c__62673__auto___65981);

return statearr_65953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62675__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__65954){
var map__65955 = p__65954;
var map__65955__$1 = (((((!((map__65955 == null))))?(((((map__65955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65955):map__65955);
var request = map__65955__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65955__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
