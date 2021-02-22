goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__65915 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__65915.cljs$core$IFn$_invoke$arity$1 ? fexpr__65915.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__65915.call(null,channel));
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
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65916){
var vec__65917 = p__65916;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65917,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65917,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__65920 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__65920)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__65920)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__65920)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__65920)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__65920)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__65920)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65920)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__65921){
var map__65922 = p__65921;
var map__65922__$1 = (((((!((map__65922 == null))))?(((((map__65922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65922):map__65922);
var request = map__65922__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65922__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65922__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65922__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__65924 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__65924,default_headers);

cljs_http.core.apply_response_type_BANG_(G__65924,response_type);

G__65924.setTimeoutInterval(timeout);

G__65924.setWithCredentials(send_credentials);

return G__65924;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__65925){
var map__65926 = p__65925;
var map__65926__$1 = (((((!((map__65926 == null))))?(((((map__65926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65926):map__65926);
var request = map__65926__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65926__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65926__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65926__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65926__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65926__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65926__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
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
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__65928 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__65928) : cljs_http.core.error_kw.call(null,G__65928));
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
var listener_65975 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__65929_65976 = xhr;
G__65929_65976.setProgressEventsEnabled(true);

G__65929_65976.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_65975,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__65929_65976.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_65975,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__62654__auto___65977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = (function (state_65940){
var state_val_65941 = (state_65940[(1)]);
if((state_val_65941 === (1))){
var state_65940__$1 = state_65940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65940__$1,(2),cancel);
} else {
if((state_val_65941 === (2))){
var inst_65931 = (state_65940[(2)]);
var inst_65932 = xhr.isComplete();
var inst_65933 = cljs.core.not(inst_65932);
var state_65940__$1 = (function (){var statearr_65942 = state_65940;
(statearr_65942[(7)] = inst_65931);

return statearr_65942;
})();
if(inst_65933){
var statearr_65943_65979 = state_65940__$1;
(statearr_65943_65979[(1)] = (3));

} else {
var statearr_65944_65980 = state_65940__$1;
(statearr_65944_65980[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65941 === (3))){
var inst_65935 = xhr.abort();
var state_65940__$1 = state_65940;
var statearr_65945_65981 = state_65940__$1;
(statearr_65945_65981[(2)] = inst_65935);

(statearr_65945_65981[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65941 === (4))){
var state_65940__$1 = state_65940;
var statearr_65946_65982 = state_65940__$1;
(statearr_65946_65982[(2)] = null);

(statearr_65946_65982[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65941 === (5))){
var inst_65938 = (state_65940[(2)]);
var state_65940__$1 = state_65940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65940__$1,inst_65938);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__62619__auto__ = null;
var cljs_http$core$xhr_$_state_machine__62619__auto____0 = (function (){
var statearr_65947 = [null,null,null,null,null,null,null,null];
(statearr_65947[(0)] = cljs_http$core$xhr_$_state_machine__62619__auto__);

(statearr_65947[(1)] = (1));

return statearr_65947;
});
var cljs_http$core$xhr_$_state_machine__62619__auto____1 = (function (state_65940){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_65940);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e65948){var ex__62622__auto__ = e65948;
var statearr_65949_65987 = state_65940;
(statearr_65949_65987[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_65940[(4)]))){
var statearr_65950_65988 = state_65940;
(statearr_65950_65988[(1)] = cljs.core.first((state_65940[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65990 = state_65940;
state_65940 = G__65990;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__62619__auto__ = function(state_65940){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__62619__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__62619__auto____1.call(this,state_65940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__62619__auto____0;
cljs_http$core$xhr_$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__62619__auto____1;
return cljs_http$core$xhr_$_state_machine__62619__auto__;
})()
})();
var state__62656__auto__ = (function (){var statearr_65951 = f__62655__auto__();
(statearr_65951[(6)] = c__62654__auto___65977);

return statearr_65951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__65952){
var map__65953 = p__65952;
var map__65953__$1 = (((((!((map__65953 == null))))?(((((map__65953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65953):map__65953);
var request = map__65953__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65953__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65953__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65953__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65953__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_65991 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_65991], null));

if(cljs.core.truth_(cancel)){
var c__62654__auto___65992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62655__auto__ = (function (){var switch__62618__auto__ = (function (state_65959){
var state_val_65960 = (state_65959[(1)]);
if((state_val_65960 === (1))){
var state_65959__$1 = state_65959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65959__$1,(2),cancel);
} else {
if((state_val_65960 === (2))){
var inst_65956 = (state_65959[(2)]);
var inst_65957 = jsonp.cancel(req_65991);
var state_65959__$1 = (function (){var statearr_65961 = state_65959;
(statearr_65961[(7)] = inst_65956);

return statearr_65961;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_65959__$1,inst_65957);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__62619__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__62619__auto____0 = (function (){
var statearr_65962 = [null,null,null,null,null,null,null,null];
(statearr_65962[(0)] = cljs_http$core$jsonp_$_state_machine__62619__auto__);

(statearr_65962[(1)] = (1));

return statearr_65962;
});
var cljs_http$core$jsonp_$_state_machine__62619__auto____1 = (function (state_65959){
while(true){
var ret_value__62620__auto__ = (function (){try{while(true){
var result__62621__auto__ = switch__62618__auto__(state_65959);
if(cljs.core.keyword_identical_QMARK_(result__62621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62621__auto__;
}
break;
}
}catch (e65963){var ex__62622__auto__ = e65963;
var statearr_65964_65994 = state_65959;
(statearr_65964_65994[(2)] = ex__62622__auto__);


if(cljs.core.seq((state_65959[(4)]))){
var statearr_65965_65996 = state_65959;
(statearr_65965_65996[(1)] = cljs.core.first((state_65959[(4)])));

} else {
throw ex__62622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65997 = state_65959;
state_65959 = G__65997;
continue;
} else {
return ret_value__62620__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__62619__auto__ = function(state_65959){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__62619__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__62619__auto____1.call(this,state_65959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__62619__auto____0;
cljs_http$core$jsonp_$_state_machine__62619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__62619__auto____1;
return cljs_http$core$jsonp_$_state_machine__62619__auto__;
})()
})();
var state__62656__auto__ = (function (){var statearr_65966 = f__62655__auto__();
(statearr_65966[(6)] = c__62654__auto___65992);

return statearr_65966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62656__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__65967){
var map__65968 = p__65967;
var map__65968__$1 = (((((!((map__65968 == null))))?(((((map__65968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65968):map__65968);
var request = map__65968__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65968__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
