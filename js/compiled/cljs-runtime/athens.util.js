goog.provide('athens.util');
var module$textarea=shadow.js.require("module$textarea", {});
athens.util.gen_block_uid = (function athens$util$gen_block_uid(){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),(27));
});
/**
 * Modify the block and all the block children to have same embed-id for
 * referencing the embed block rather than block in original page
 */
athens.util.recursively_modify_block_for_embed = (function athens$util$recursively_modify_block_for_embed(block,embed_id){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__37098__auto__ = athens.util.pathcache50792;
var info__37098__auto____$1 = (((info__37098__auto__ == null))?(function (){var info50793 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(athens.util.specter_recursive_path,new cljs.core.Var(function(){return athens.util.specter_recursive_path;},new cljs.core.Symbol("athens.util","specter-recursive-path","athens.util/specter-recursive-path",1130829370,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"declared","declared",92336021),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"athens.util","athens.util",-1545422462,null),new cljs.core.Symbol(null,"specter-recursive-path","specter-recursive-path",1981312529,null),"athens/util.cljs",32,1,21,true,21,cljs.core.List.EMPTY,null,(cljs.core.truth_(athens.util.specter_recursive_path)?athens.util.specter_recursive_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"specter-recursive-path","specter-recursive-path",1981312529,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__50791_SHARP_){
return cljs.core.contains_QMARK_(p1__50791_SHARP_,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50791#","p1__50791#",1880996725,null)], null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"p1__50791#","p1__50791#",1880996725,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167))))], null),cljs.core.list(new cljs.core.Symbol(null,"specter-recursive-path","specter-recursive-path",1981312529,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50791#","p1__50791#",1880996725,null)], null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"p1__50791#","p1__50791#",1880996725,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167)))))], null),"athens.util",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"specter-recursive-path","specter-recursive-path",1981312529,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50791#","p1__50791#",1880996725,null)], null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"p1__50791#","p1__50791#",1880996725,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167)))], null));
athens.util.pathcache50792 = info50793;

return info50793;
})():info__37098__auto__);
var precompiled50794 = com.rpl.specter.impl.cached_path_info_precompiled(info__37098__auto____$1);
var dynamic_QMARK___37099__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__37098__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___37099__auto__)){
var G__50798 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.util.specter_recursive_path,(function (p1__50791_SHARP_){
return cljs.core.contains_QMARK_(p1__50791_SHARP_,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
})], null);
return (precompiled50794.cljs$core$IFn$_invoke$arity$1 ? precompiled50794.cljs$core$IFn$_invoke$arity$1(G__50798) : precompiled50794.call(null,G__50798));
} else {
return precompiled50794;
}
})(),(function (p__50800){
var map__50801 = p__50800;
var map__50801__$1 = (((((!((map__50801 == null))))?(((((map__50801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50801):map__50801);
var block__$1 = map__50801__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50801__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid),"-embed-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(embed_id)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","original-uid","block/original-uid",591552700),uid], 0));
}),block);
});
athens.util.scroll_top_BANG_ = (function athens$util$scroll_top_BANG_(element,pos){
if(cljs.core.truth_(pos)){
return (element.scrollTop = pos);
} else {
return null;
}
});
athens.util.scroll_if_needed = (function athens$util$scroll_if_needed(element,container){
var e_top = element.offsetTop;
var e_height = element.offsetHeight;
var e_bottom = (e_top + e_height);
var cs_top = container.scrollTop;
var c_height = container.offsetHeight;
var cs_bottom = (cs_top + c_height);
return athens.util.scroll_top_BANG_(container,(((e_top < cs_top))?e_top:(((cs_bottom < e_bottom))?(e_bottom - c_height):null)));
});
/**
 * Finds offset between mouse event and container. If container is not passed, use target as container.
 */
athens.util.mouse_offset = (function athens$util$mouse_offset(var_args){
var G__50813 = arguments.length;
switch (G__50813) {
case 1:
return athens.util.mouse_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.util.mouse_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.util.mouse_offset.cljs$core$IFn$_invoke$arity$1 = (function (e){
return athens.util.mouse_offset.cljs$core$IFn$_invoke$arity$2(e,e.target);
}));

(athens.util.mouse_offset.cljs$core$IFn$_invoke$arity$2 = (function (e,container){
var rect = container.getBoundingClientRect();
var offset_x = (e.pageX - rect.left);
var offset_y = (e.pageY - rect.top);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),offset_x,new cljs.core.Keyword(null,"y","y",-1757859776),offset_y], null);
}));

(athens.util.mouse_offset.cljs$lang$maxFixedArity = 2);

athens.util.vertical_center = (function athens$util$vertical_center(el){
var rect = el.getBoundingClientRect();
return ((rect.bottom - rect.top) / (2));
});
/**
 * Checks if any part of the element is above or below the container's bounding rect
 */
athens.util.is_beyond_rect_QMARK_ = (function athens$util$is_beyond_rect_QMARK_(element,container){
var el_box = element.getBoundingClientRect();
var cont_box = container.getBoundingClientRect();
return (((el_box.bottom > cont_box.bottom)) || ((el_box.top < cont_box.top)));
});
athens.util.scroll_into_view = (function athens$util$scroll_into_view(element,container,align_top_QMARK_){
if(athens.util.is_beyond_rect_QMARK_(element,container)){
return element.scrollIntoView(align_top_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),"auto"], null));
} else {
return null;
}
});
athens.util.get_dataset_uid = (function athens$util$get_dataset_uid(el){
var block = (cljs.core.truth_(el)?el.closest(".block-container"):null);
var uid = (cljs.core.truth_(block)?block.dataset.uid:null);
return uid;
});
athens.util.get_caret_position = (function athens$util$get_caret_position(target){
var selectionEnd = target.selectionEnd;
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$textarea(target,selectionEnd),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
/**
 * This and common-ancestor taken from https://stackoverflow.com/a/5350888.
 */
athens.util.dom_parents = (function athens$util$dom_parents(node){
var nodes = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null);
var node__$1 = node;
while(true){
if((node__$1 == null)){
return cljs.core.reverse(nodes);
} else {
var G__50878 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nodes,node__$1);
var G__50879 = node__$1.parentNode;
nodes = G__50878;
node__$1 = G__50879;
continue;
}
break;
}
});
athens.util.common_ancestor = (function athens$util$common_ancestor(node1,node2){
var p1 = athens.util.dom_parents(node1);
var p2 = athens.util.dom_parents(node2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1),cljs.core.first(p2))){
throw (new Error("No common ancestor!"));
} else {
var n = (cljs.core.count(p1) - (1));
var i = (0);
while(true){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(p1,i,null),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(p2,i,null))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1,(i - (1)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return (new Error("No common ancestor after n loops!"));
} else {
var G__50880 = (i + (1));
i = G__50880;
continue;

}
}
break;
}
}
});
athens.util.destruct_key_down = (function athens$util$destruct_key_down(e){
var key = e.keyCode;
var ctrl = e.ctrlKey;
var meta = e.metaKey;
var shift = e.shiftKey;
var alt = e.altKey;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key-code","key-code",-1732114304),key,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),ctrl,new cljs.core.Keyword(null,"meta","meta",1499536964),meta,new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null);
});
athens.util.date_col_format = tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1("LLLL dd, yyyy h':'mma");
athens.util.US_format = tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1("MM-dd-yyyy");
athens.util.title_format = tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1("LLLL dd, yyyy");
athens.util.now_ts = (function athens$util$now_ts(){
return (new Date()).getTime();
});
/**
 * Returns today's date or a date OFFSET days before today
 */
athens.util.get_day = (function athens$util$get_day(var_args){
var G__50844 = arguments.length;
switch (G__50844) {
case 0:
return athens.util.get_day.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return athens.util.get_day.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.util.get_day.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.util.get_day.cljs$core$IFn$_invoke$arity$0 = (function (){
return athens.util.get_day.cljs$core$IFn$_invoke$arity$1((0));
}));

(athens.util.get_day.cljs$core$IFn$_invoke$arity$1 = (function (offset){
var day = tick.alpha.api._.cljs$core$IFn$_invoke$arity$variadic(tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$0(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.alpha.api.new_duration(offset,new cljs.core.Keyword(null,"days","days",-1394072564))], 0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uid","uid",-1447769400),tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(athens.util.US_format,day),new cljs.core.Keyword(null,"title","title",636505583),tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(athens.util.title_format,day)], null);
}));

(athens.util.get_day.cljs$core$IFn$_invoke$arity$2 = (function (date,offset){
var day = tick.alpha.api._.cljs$core$IFn$_invoke$arity$variadic(tick.alpha.api.at(date,"0"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.alpha.api.new_duration(offset,new cljs.core.Keyword(null,"days","days",-1394072564))], 0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uid","uid",-1447769400),tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(athens.util.US_format,day),new cljs.core.Keyword(null,"title","title",636505583),tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(athens.util.title_format,day)], null);
}));

(athens.util.get_day.cljs$lang$maxFixedArity = 2);

athens.util.date_string = (function athens$util$date_string(ts){
if(cljs.core.not(ts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"(unknown date)"], null);
} else {
var x = tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$1(ts);
var x__$1 = tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$1(x);
var x__$2 = tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(athens.util.date_col_format,x__$1);
var x__$3 = clojure.string.replace(x__$2,/AM/,"am");
return clojure.string.replace(x__$3,/PM/,"pm");
}
});
athens.util.uid_to_date = (function athens$util$uid_to_date(uid){
try{var vec__50860 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50860,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50860,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50860,(2),null);
var rejoin = clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null));
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(rejoin);
}catch (e50857){if((e50857 instanceof Object)){
var _ = e50857;
return null;
} else {
throw e50857;

}
}});
athens.util.is_timeline_page = (function athens$util$is_timeline_page(uid){
return cljs.core.boolean$(athens.util.uid_to_date(uid));
});
athens.util.regex_esc_char_map = (function (){var esc_chars = "()*&^%$#![]";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50863_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50863_SHARP_)].join('');
}),esc_chars));
})();
/**
 * Take a string and escape all regex special characters in it
 */
athens.util.escape_str = (function athens$util$escape_str(str){
return clojure.string.escape(str,athens.util.regex_esc_char_map);
});
/**
 * Navigates across maps and lists to find the sub that
 * satisfies the function
 */
athens.util.specter_recursive_path = (function athens$util$specter_recursive_path(afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__37098__auto__ = athens.util.pathcache50871;
var info__37098__auto____$1 = (((info__37098__auto__ == null))?(function (){var info50872 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1394,1394,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol("s","cond-path","s/cond-path",-1167797856,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(cljs.core.map_QMARK_,new cljs.core.Var(function(){return cljs.core.map_QMARK_;},new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),"cljs/core.cljs",11,1,2167,2167,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Return true if x satisfies IMap",(cljs.core.truth_(cljs.core.map_QMARK_)?cljs.core.map_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.multi_path,new cljs.core.Var(function(){return com.rpl.specter.multi_path;},new cljs.core.Symbol("com.rpl.specter","multi-path","com.rpl.specter/multi-path",-1001794121,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"multi-path","multi-path",-1340561368,null),"com/rpl/specter.cljc",26,1,1409,1409,cljs.core.List.EMPTY,"A path that branches on multiple paths. For updates,\n   applies updates to the paths in order.",(cljs.core.truth_(com.rpl.specter.multi_path)?com.rpl.specter.multi_path.cljs$lang$test:null)])),new cljs.core.Symbol("s","multi-path","s/multi-path",-1340561315,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"com/rpl/specter.cljc",11,1,702,705,cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol("s","multi-path","s/multi-path",-1340561315,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(cljs.core.sequential_QMARK_,new cljs.core.Var(function(){return cljs.core.sequential_QMARK_;},new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),"cljs/core.cljs",18,1,2155,2155,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if coll satisfies ISequential",(cljs.core.truth_(cljs.core.sequential_QMARK_)?cljs.core.sequential_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol("s","cond-path","s/cond-path",-1167797856,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol("s","multi-path","s/multi-path",-1340561315,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"athens.util",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","cond-path","s/cond-path",-1167797856,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("s","multi-path","s/multi-path",-1340561315,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
athens.util.pathcache50871 = info50872;

return info50872;
})():info__37098__auto__);
var precompiled50873 = com.rpl.specter.impl.cached_path_info_precompiled(info__37098__auto____$1);
var dynamic_QMARK___37099__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__37098__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___37099__auto__)){
var G__50876 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,cljs.core.map_QMARK_,com.rpl.specter.multi_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.MAP_VALS,p], null),com.rpl.specter.MAP_VALS,p,afn,cljs.core.sequential_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled50873.cljs$core$IFn$_invoke$arity$1 ? precompiled50873.cljs$core$IFn$_invoke$arity$1(G__50876) : precompiled50873.call(null,G__50876));
} else {
return precompiled50873;
}
})());

return p;
});
athens.util.get_os = (function athens$util$get_os(){
var os = window.navigator.appVersion;
if(cljs.core.truth_(cljs.core.re_find(/Windows/,os))){
return new cljs.core.Keyword(null,"windows","windows",2068861701);
} else {
if(cljs.core.truth_(cljs.core.re_find(/Linux/,os))){
return new cljs.core.Keyword(null,"linux","linux",-238042662);
} else {
if(cljs.core.truth_(cljs.core.re_find(/Mac/,os))){
return new cljs.core.Keyword(null,"mac","mac",-1879391650);
} else {
return null;
}
}
}
});
/**
 * Use meta for mac, ctrl for others.
 */
athens.util.shortcut_key_QMARK_ = (function athens$util$shortcut_key_QMARK_(meta,ctrl){
var os = athens.util.get_os();
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(os,new cljs.core.Keyword(null,"mac","mac",-1879391650)))?meta:false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(os,new cljs.core.Keyword(null,"windows","windows",2068861701)))?ctrl:false);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(os,new cljs.core.Keyword(null,"linux","linux",-238042662))){
return ctrl;
} else {
return false;
}
}
}
});
athens.util.re_frame_10x_open_QMARK_ = (function athens$util$re_frame_10x_open_QMARK_(){
var el_10x = goog.dom.getElement("--re-frame-10x--");
var display_10x = el_10x.style.display;
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("none",display_10x)));
});
athens.util.open_10x = (function athens$util$open_10x(){
var el = document.querySelector("#--re-frame-10x--");
return goog.dom.setProperties(el,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["style","display: block"], null)));
});
athens.util.hide_10x = (function athens$util$hide_10x(){
var el = document.querySelector("#--re-frame-10x--");
return goog.dom.setProperties(el,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["style","display: none"], null)));
});
athens.util.toggle_10x = (function athens$util$toggle_10x(){
var open_QMARK_ = athens.util.re_frame_10x_open_QMARK_();
if(open_QMARK_){
return athens.util.hide_10x();
} else {
return athens.util.open_10x();
}
});
athens.util.electron_QMARK_ = (function athens$util$electron_QMARK_(){
var user_agent = navigator.userAgent.toLowerCase();
return cljs.core.boolean$(cljs.core.re_find(/electron/,user_agent));
});
athens.util.athens_version = (function athens$util$athens_version(){
if(athens.util.electron_QMARK_()){
return require("electron").remote.app.getVersion();
} else {
return null;
}
});

//# sourceMappingURL=athens.util.js.map
