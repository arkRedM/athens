goog.provide('athens.views.node_page');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
athens.views.node_page.page_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2rem auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 2rem 10rem 2rem",new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"100%",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"55rem"], null);
athens.views.node_page.title_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),new cljs.core.Keyword(null,"word-break","word-break",-407281356),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"margin","margin",-995903681)],["1.40em","pre-line","visible","1","break-word",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","0.25rem","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null),"relative","-0.03em","0.10em 0 0.10em 1rem"]);
athens.views.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3em"], null);
athens.views.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 0.5rem 0 0",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null)], null)], null);
athens.views.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.views.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"background-minus-2","background-minus-2",-1711017591),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.25rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"border-color","border-color",-2059162761))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.page_menu_toggle_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"-0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"1000px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.375rem 0.5rem",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703)),new cljs.core.Keyword(null,"top","top",-1856271961),"50%",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-100%, -50%)"], null);
athens.views.node_page.handle_new_first_child_block_click = (function athens$views$node_page$handle_new_first_child_block_click(parent_uid){
var new_uid = athens.util.gen_block_uid();
var now = athens.util.now_ts();
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),parent_uid,new cljs.core.Keyword("edit","time","edit/time",1384867476),now,new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null)], null)], null)], null)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null));
});
athens.views.node_page.handle_enter = (function athens$views$node_page$handle_enter(e,uid,_state,children){
e.preventDefault();

var node_page = e.target.closest(".node-page");
var block_page = e.target.closest(".block-page");
var map__66451 = athens.keybindings.destruct_key_down(e);
var map__66451__$1 = (((((!((map__66451 == null))))?(((((map__66451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66451):map__66451);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66451__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66451__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(block_page)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"split-block-to-children","split-block-to-children",-669108006),uid,value,start], null));
} else {
if(cljs.core.truth_(node_page)){
if(cljs.core.empty_QMARK_(children)){
return athens.views.node_page.handle_new_first_child_block_click(uid);
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down","down",1565245570),uid], null));
}
} else {
return null;
}
}
});
athens.views.node_page.handle_page_arrow_key = (function athens$views$node_page$handle_page_arrow_key(e,uid,state){
var map__66453 = athens.keybindings.destruct_key_down(e);
var map__66453__$1 = (((((!((map__66453 == null))))?(((((map__66453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66453):map__66453);
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66453__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66453__$1,new cljs.core.Keyword(null,"target","target",253001721));
var start_QMARK_ = athens.keybindings.block_start_QMARK_(e);
var end_QMARK_ = athens.keybindings.block_end_QMARK_(e);
var map__66454 = cljs.core.deref(state);
var map__66454__$1 = (((((!((map__66454 == null))))?(((((map__66454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66454):map__66454);
var caret_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66454__$1,new cljs.core.Keyword(null,"caret-position","caret-position",1352592340));
var textarea_height = target.offsetHeight;
var map__66455 = caret_position;
var map__66455__$1 = (((((!((map__66455 == null))))?(((((map__66455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66455):map__66455);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66455__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66455__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var rows = Math.round((textarea_height / height));
var row = Math.ceil((top / height));
var top_row_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,(1));
var bottom_row_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,rows);
var up_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.UP);
var down_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.DOWN);
var left_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.LEFT);
var right_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.RIGHT);
if(((((up_QMARK_) && (top_row_QMARK_))) || (((left_QMARK_) && (start_QMARK_))))){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),uid], null));
} else {
if(((((down_QMARK_) && (bottom_row_QMARK_))) || (((right_QMARK_) && (end_QMARK_))))){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down","down",1565245570),uid], null));
} else {
return null;
}
}
});
athens.views.node_page.handle_key_down = (function athens$views$node_page$handle_key_down(e,uid,state,children){
var map__66459 = athens.keybindings.destruct_key_down(e);
var map__66459__$1 = (((((!((map__66459 == null))))?(((((map__66459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66459):map__66459);
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66459__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66459__$1,new cljs.core.Keyword(null,"shift","shift",997140064));
var caret_position = athens.util.get_caret_position(e.target);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"caret-position","caret-position",1352592340),caret_position);

if(athens.keybindings.arrow_key_direction(e)){
return athens.views.node_page.handle_page_arrow_key(e,uid,state);
} else {
if(((cljs.core.not(shift)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.ENTER)))){
return athens.views.node_page.handle_enter(e,uid,state,children);
} else {
return null;
}
}
});
athens.views.node_page.handle_change = (function athens$views$node_page$handle_change(e,state){
var value = e.target.value;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("title","local","title/local",-1588788316),value);
});
/**
 * Find and replace linked ref with new linked ref, based on title change.
 */
athens.views.node_page.map_new_refs = (function athens$views$node_page$map_new_refs(linked_refs,old_title,new_title){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66461){
var map__66462 = p__66461;
var map__66462__$1 = (((((!((map__66462 == null))))?(((((map__66462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66462):map__66462);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66462__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66462__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var new_str = clojure.string.replace(string,athens.patterns.linked(old_title),["$1$3$4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_title),"$2$5"].join(''));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("block","string","block/string",-2066596447),new_str], null);
}),linked_refs);
});
/**
 * ?uid used for navigate-uid. Go to existing page following the merge.
 */
athens.views.node_page.get_existing_page = (function athens$views$node_page$get_existing_page(local_title){
var G__66464 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null)], null);
var G__66465 = cljs.core.deref(athens.db.dsdb);
var G__66466 = local_title;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__66464,G__66465,G__66466) : datascript.core.q.call(null,G__66464,G__66465,G__66466));
});
/**
 * Count is used to reindex blocks after merge.
 */
athens.views.node_page.existing_block_count = (function athens$views$node_page$existing_block_count(local_title){
return cljs.core.count((function (){var G__66467 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?ch","?ch",-1777351896,null)], null)], null);
var G__66468 = cljs.core.deref(athens.db.dsdb);
var G__66469 = local_title;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__66467,G__66468,G__66469) : datascript.core.q.call(null,G__66467,G__66468,G__66469));
})());
});
/**
 * When textarea blurs and its value is different from initial page title:
 * - if no other page exists, rewrite page title and linked refs
 * - else page with same title does exists: prompt to merge
 *   - confirm-fn: delete current page, rewrite linked refs, merge blocks, and navigate to existing page
 *   - cancel-fn: reset state
 *   The current blocks will be at the end of the existing page.
 */
athens.views.node_page.handle_blur = (function athens$views$node_page$handle_blur(node,state,linked_refs){
var map__66470 = node;
var map__66470__$1 = (((((!((map__66470 == null))))?(((((map__66470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66470):map__66470);
var dbid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66470__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66470__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var map__66471 = cljs.core.deref(state);
var map__66471__$1 = (((((!((map__66471 == null))))?(((((map__66471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66471):map__66471);
var initial = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66471__$1,new cljs.core.Keyword("title","initial","title/initial",-1990636610));
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66471__$1,new cljs.core.Keyword("title","local","title/local",-1588788316));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(initial,local)){
var existing_page = athens.views.node_page.get_existing_page(local);
var linked_ref_blocks = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.second,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([linked_refs], 0));
var new_linked_refs = athens.views.node_page.map_new_refs(linked_ref_blocks,initial,local);
if(cljs.core.empty_QMARK_(existing_page)){
var new_page = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),dbid,new cljs.core.Keyword("node","title","node/title",628940777),local], null);
var new_datoms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_page], null),new_linked_refs);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("title","initial","title/initial",-1990636610),local);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new_datoms], null));
} else {
var new_parent_uid = existing_page;
var existing_page_block_count = athens.views.node_page.existing_block_count(local);
var reindex = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66474){
var map__66475 = p__66474;
var map__66475__$1 = (((((!((map__66475 == null))))?(((((map__66475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66475):map__66475);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66475__$1,new cljs.core.Keyword("block","order","block/order",-1429282437));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66475__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("block","order","block/order",-1429282437),(order + existing_page_block_count),new cljs.core.Keyword("block","_children","block/_children",1128070632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_parent_uid], null)], null);
}),children);
var delete_page = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),dbid], null);
var new_datoms = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [delete_page], null),new_linked_refs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reindex], 0));
var cancel_fn = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,athens.views.node_page.init_state);
});
var confirm_fn = (function (){
athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new_parent_uid);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new_datoms], null));

return cancel_fn();
});
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword("alert","show","alert/show",-785861637),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("alert","message","alert/message",-363559142),["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(local),"\""," already exists, merge pages?"].join(''),new cljs.core.Keyword("alert","confirm-fn","alert/confirm-fn",-1115580970),confirm_fn,new cljs.core.Keyword("alert","cancel-fn","alert/cancel-fn",-869919002),cancel_fn], 0));
}
} else {
return null;
}
});
athens.views.node_page.placeholder_block_el = (function athens$views$node_page$placeholder_block_el(parent_uid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-container"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.blocks.bullet_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.node_page.handle_new_first_child_block_click(parent_uid);
})], null),"Click here to add content..."], null)], null)], null);
});
/**
 * Ensures :title/initial is synced to node/title.
 *   Cases:
 *   - User opens a page for the first time.
 *   - User navigates from a page to another page.
 *   - User merges current page with existing page, navigating to existing page.
 */
athens.views.node_page.sync_title = (function athens$views$node_page$sync_title(title,state){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(title,new cljs.core.Keyword("title","initial","title/initial",-1990636610).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword("title","initial","title/initial",-1990636610),title,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("title","local","title/local",-1588788316),title], 0));
} else {
return null;
}
});
athens.views.node_page.init_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("menu","show","menu/show",-580966400),new cljs.core.Keyword("menu","x","menu/x",2085660544),new cljs.core.Keyword("title","local","title/local",-1588788316),new cljs.core.Keyword("alert","cancel-fn","alert/cancel-fn",-869919002),"Unlinked References",new cljs.core.Keyword("alert","confirm-fn","alert/confirm-fn",-1115580970),new cljs.core.Keyword("alert","message","alert/message",-363559142),new cljs.core.Keyword("alert","show","alert/show",-785861637),"Linked References",new cljs.core.Keyword("title","initial","title/initial",-1990636610),new cljs.core.Keyword("menu","y","menu/y",-1754654817)],[false,null,null,null,false,null,null,null,true,null,null]);
athens.views.node_page.menu_dropdown = (function athens$views$node_page$menu_dropdown(_node,state){
var ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var handle_click_outside = (function (e){
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword("menu","show","menu/show",-580966400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.deref(ref).contains(e.target));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("menu","show","menu/show",-580966400),false);
} else {
return null;
}
});
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"node-page-menu",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_this){
return goog.events.listen(document,"mousedown",handle_click_outside);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (_this){
return goog.events.unlisten(document,"mousedown",handle_click_outside);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (node,state__$1){
var map__66478 = node;
var map__66478__$1 = (((((!((map__66478 == null))))?(((((map__66478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66478):map__66478);
var sidebar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66478__$1,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66478__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66478__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var map__66479 = cljs.core.deref(state__$1);
var map__66479__$1 = (((((!((map__66479 == null))))?(((((map__66479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66479):map__66479);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66479__$1,new cljs.core.Keyword("menu","show","menu/show",-580966400));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66479__$1,new cljs.core.Keyword("menu","x","menu/x",2085660544));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66479__$1,new cljs.core.Keyword("menu","y","menu/y",-1754654817));
var timeline_page_QMARK_ = athens.util.is_timeline_page(uid);
if(cljs.core.truth_(show)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.dropdown.dropdown_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__66477_SHARP_){
return cljs.core.reset_BANG_(ref,p1__66477_SHARP_);
})], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('')], null)], null)], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),(cljs.core.truth_(sidebar)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","remove-shortcut","page/remove-shortcut",301722603),uid], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.BookmarkBorder], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Remove Shortcut"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","add-shortcut","page/add-shortcut",467846378),uid], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Bookmark], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Add Shortcut"], null)], null)], null)),((timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_separator_style)], null)),((timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
athens.router.navigate(new cljs.core.Keyword(null,"pages","pages",-285406513));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","delete","page/delete",-1774686917),uid,title], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Delete], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Delete Page"], null)], null)], null))], null)], null);
} else {
return null;
}
})], null));
});
athens.views.node_page.ref_comp = (function athens$views$node_page$ref_comp(block){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"parents","parents",-2027538891),cljs.core.rest(new cljs.core.Keyword("block","parents","block/parents",-1954648902).cljs$core$IFn$_invoke$arity$1(block))], null));
var linked_ref_data = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"linked-ref","linked-ref",-925333945),true,new cljs.core.Keyword(null,"initial-open","initial-open",1546246992),true,new cljs.core.Keyword(null,"linked-ref-uid","linked-ref-uid",-1584425507),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"parent-uids","parent-uids",605223671),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","parents","block/parents",-1954648902).cljs$core$IFn$_invoke$arity$1(block)))], null);
return (function (_){
var map__66482 = cljs.core.deref(state);
var map__66482__$1 = (((((!((map__66482 == null))))?(((((map__66482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66482):map__66482);
var block__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66482__$1,new cljs.core.Keyword(null,"block","block",664686210));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66482__$1,new cljs.core.Keyword(null,"parents","parents",-2027538891));
var block__$2 = athens.db.get_block_document(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$views$node_page$ref_comp_$_iter__66484(s__66485){
return (new cljs.core.LazySeq(null,(function (){
var s__66485__$1 = s__66485;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__66485__$1);
if(temp__5735__auto__){
var s__66485__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66485__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__66485__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__66487 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__66486 = (0);
while(true){
if((i__66486 < size__4528__auto__)){
var map__66488 = cljs.core._nth(c__4527__auto__,i__66486);
var map__66488__$1 = (((((!((map__66488 == null))))?(((((map__66488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66488):map__66488);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66488__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66488__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66488__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__66487,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__66486,map__66488,map__66488__$1,title,string,uid,c__4527__auto__,size__4528__auto__,b__66487,s__66485__$2,temp__5735__auto__,map__66482,map__66482__$1,block__$1,parents,block__$2,state,linked_ref_data){
return (function (){
var new_B = athens.db.get_block_document(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var new_P = cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parents);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"block","block",664686210),new_B,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parents","parents",-2027538891),new_P], 0));
});})(i__66486,map__66488,map__66488__$1,title,string,uid,c__4527__auto__,size__4528__auto__,b__66487,s__66485__$2,temp__5735__auto__,map__66482,map__66482__$1,block__$1,parents,block__$2,state,linked_ref_data))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.parse_renderer.parse_and_render,(function (){var or__4126__auto__ = title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})(),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block__$2)], null)], null));

var G__66555 = (i__66486 + (1));
i__66486 = G__66555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66487),athens$views$node_page$ref_comp_$_iter__66484(cljs.core.chunk_rest(s__66485__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66487),null);
}
} else {
var map__66490 = cljs.core.first(s__66485__$2);
var map__66490__$1 = (((((!((map__66490 == null))))?(((((map__66490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66490):map__66490);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66490__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66490__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66490__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__66490,map__66490__$1,title,string,uid,s__66485__$2,temp__5735__auto__,map__66482,map__66482__$1,block__$1,parents,block__$2,state,linked_ref_data){
return (function (){
var new_B = athens.db.get_block_document(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null));
var new_P = cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parents);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"block","block",664686210),new_B,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parents","parents",-2027538891),new_P], 0));
});})(map__66490,map__66490__$1,title,string,uid,s__66485__$2,temp__5735__auto__,map__66482,map__66482__$1,block__$1,parents,block__$2,state,linked_ref_data))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.parse_renderer.parse_and_render,(function (){var or__4126__auto__ = title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})(),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block__$2)], null)], null),athens$views$node_page$ref_comp_$_iter__66484(cljs.core.rest(s__66485__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parents);
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$2,linked_ref_data], null)], null);
});
});
athens.views.node_page.linked_ref_el = (function athens$views$node_page$linked_ref_el(state,daily_notes_QMARK_,linked_refs){
var linked_QMARK_ = "Linked References";
if(cljs.core.truth_((function (){var or__4126__auto__ = (function (){var and__4115__auto__ = daily_notes_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_empty(linked_refs);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not(daily_notes_QMARK_);
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_style),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,linked_QMARK_,cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),linked_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.KeyboardArrowDown], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ChevronRight], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_QMARK_], null)], null)], null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),linked_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$views$node_page$linked_ref_el_$_iter__66492(s__66493){
return (new cljs.core.LazySeq(null,(function (){
var s__66493__$1 = s__66493;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__66493__$1);
if(temp__5735__auto__){
var s__66493__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66493__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__66493__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__66495 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__66494 = (0);
while(true){
if((i__66494 < size__4528__auto__)){
var vec__66496 = cljs.core._nth(c__4527__auto__,i__66494);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66496,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66496,(1),null);
cljs.core.chunk_append(b__66495,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__66494,vec__66496,group_title,group,c__4527__auto__,size__4528__auto__,b__66495,s__66493__$2,temp__5735__auto__,linked_QMARK_){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__66494,vec__66496,group_title,group,c__4527__auto__,size__4528__auto__,b__66495,s__66493__$2,temp__5735__auto__,linked_QMARK_))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__66494,vec__66496,group_title,group,c__4527__auto__,size__4528__auto__,b__66495,s__66493__$2,temp__5735__auto__,linked_QMARK_){
return (function athens$views$node_page$linked_ref_el_$_iter__66492_$_iter__66499(s__66500){
return (new cljs.core.LazySeq(null,((function (i__66494,vec__66496,group_title,group,c__4527__auto__,size__4528__auto__,b__66495,s__66493__$2,temp__5735__auto__,linked_QMARK_){
return (function (){
var s__66500__$1 = s__66500;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__66500__$1);
if(temp__5735__auto____$1){
var s__66500__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__66500__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__66500__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__66502 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__66501 = (0);
while(true){
if((i__66501 < size__4528__auto____$1)){
var block = cljs.core._nth(c__4527__auto____$1,i__66501);
cljs.core.chunk_append(b__66502,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_block_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.ref_comp,block], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block))].join('')], null)));

var G__66556 = (i__66501 + (1));
i__66501 = G__66556;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66502),athens$views$node_page$linked_ref_el_$_iter__66492_$_iter__66499(cljs.core.chunk_rest(s__66500__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66502),null);
}
} else {
var block = cljs.core.first(s__66500__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_block_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.ref_comp,block], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block))].join('')], null)),athens$views$node_page$linked_ref_el_$_iter__66492_$_iter__66499(cljs.core.rest(s__66500__$2)));
}
} else {
return null;
}
break;
}
});})(i__66494,vec__66496,group_title,group,c__4527__auto__,size__4528__auto__,b__66495,s__66493__$2,temp__5735__auto__,linked_QMARK_))
,null,null));
});})(i__66494,vec__66496,group_title,group,c__4527__auto__,size__4528__auto__,b__66495,s__66493__$2,temp__5735__auto__,linked_QMARK_))
;
return iter__4529__auto__(group);
})())], null));

var G__66557 = (i__66494 + (1));
i__66494 = G__66557;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66495),athens$views$node_page$linked_ref_el_$_iter__66492(cljs.core.chunk_rest(s__66493__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66495),null);
}
} else {
var vec__66503 = cljs.core.first(s__66493__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66503,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66503,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__66503,group_title,group,s__66493__$2,temp__5735__auto__,linked_QMARK_){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(vec__66503,group_title,group,s__66493__$2,temp__5735__auto__,linked_QMARK_))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (vec__66503,group_title,group,s__66493__$2,temp__5735__auto__,linked_QMARK_){
return (function athens$views$node_page$linked_ref_el_$_iter__66492_$_iter__66506(s__66507){
return (new cljs.core.LazySeq(null,(function (){
var s__66507__$1 = s__66507;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__66507__$1);
if(temp__5735__auto____$1){
var s__66507__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__66507__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__66507__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__66509 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__66508 = (0);
while(true){
if((i__66508 < size__4528__auto__)){
var block = cljs.core._nth(c__4527__auto__,i__66508);
cljs.core.chunk_append(b__66509,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_block_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.ref_comp,block], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block))].join('')], null)));

var G__66558 = (i__66508 + (1));
i__66508 = G__66558;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66509),athens$views$node_page$linked_ref_el_$_iter__66492_$_iter__66506(cljs.core.chunk_rest(s__66507__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66509),null);
}
} else {
var block = cljs.core.first(s__66507__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_block_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.ref_comp,block], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block))].join('')], null)),athens$views$node_page$linked_ref_el_$_iter__66492_$_iter__66506(cljs.core.rest(s__66507__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__66503,group_title,group,s__66493__$2,temp__5735__auto__,linked_QMARK_))
;
return iter__4529__auto__(group);
})())], null),athens$views$node_page$linked_ref_el_$_iter__66492(cljs.core.rest(s__66493__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(linked_refs);
})())], null):null)], null);
} else {
return null;
}
});
athens.views.node_page.unlinked_ref_el = (function athens$views$node_page$unlinked_ref_el(state,daily_notes_QMARK_,unlinked_refs,title){
var unlinked_QMARK_ = "Unlinked References";
if(cljs.core.not(daily_notes_QMARK_)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_style),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),unlinked_QMARK_))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,unlinked_QMARK_,false);
} else {
var un_refs = athens.db.get_unlinked_references(athens.util.escape_str(title));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,unlinked_QMARK_,true);

return cljs.core.reset_BANG_(unlinked_refs,un_refs);
}
})], null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),unlinked_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.KeyboardArrowDown], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ChevronRight], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),unlinked_QMARK_], null),(cljs.core.truth_((function (){var and__4115__auto__ = unlinked_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_empty(cljs.core.deref(unlinked_refs));
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unlinked-references","link-all","unlinked-references/link-all",1891274179),cljs.core.deref(unlinked_refs),title], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,unlinked_QMARK_,false);

return cljs.core.reset_BANG_(unlinked_refs,cljs.core.PersistentVector.EMPTY);
})], null),"Link All"], null):null)], null)], null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),unlinked_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$views$node_page$unlinked_ref_el_$_iter__66511(s__66512){
return (new cljs.core.LazySeq(null,(function (){
var s__66512__$1 = s__66512;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__66512__$1);
if(temp__5735__auto__){
var s__66512__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66512__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__66512__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__66514 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__66513 = (0);
while(true){
if((i__66513 < size__4528__auto__)){
var vec__66515 = cljs.core._nth(c__4527__auto__,i__66513);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66515,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66515,(1),null);
cljs.core.chunk_append(b__66514,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__66513,vec__66515,group_title,group,c__4527__auto__,size__4528__auto__,b__66514,s__66512__$2,temp__5735__auto__,unlinked_QMARK_){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__66513,vec__66515,group_title,group,c__4527__auto__,size__4528__auto__,b__66514,s__66512__$2,temp__5735__auto__,unlinked_QMARK_))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__66513,vec__66515,group_title,group,c__4527__auto__,size__4528__auto__,b__66514,s__66512__$2,temp__5735__auto__,unlinked_QMARK_){
return (function athens$views$node_page$unlinked_ref_el_$_iter__66511_$_iter__66518(s__66519){
return (new cljs.core.LazySeq(null,((function (i__66513,vec__66515,group_title,group,c__4527__auto__,size__4528__auto__,b__66514,s__66512__$2,temp__5735__auto__,unlinked_QMARK_){
return (function (){
var s__66519__$1 = s__66519;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__66519__$1);
if(temp__5735__auto____$1){
var s__66519__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__66519__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__66519__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__66521 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__66520 = (0);
while(true){
if((i__66520 < size__4528__auto____$1)){
var block = cljs.core._nth(c__4527__auto____$1,i__66520);
cljs.core.chunk_append(b__66521,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_block_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.ref_comp,block], null)], null),(cljs.core.truth_(unlinked_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1.5em"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__66520,i__66513,block,c__4527__auto____$1,size__4528__auto____$1,b__66521,s__66519__$2,temp__5735__auto____$1,vec__66515,group_title,group,c__4527__auto__,size__4528__auto__,b__66514,s__66512__$2,temp__5735__auto__,unlinked_QMARK_){
return (function (){
var hm = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,cljs.core.deref(unlinked_refs));
var new_unlinked_refs = cljs.core.seq(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(hm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_title], null),((function (i__66520,i__66513,hm,block,c__4527__auto____$1,size__4528__auto____$1,b__66521,s__66519__$2,temp__5735__auto____$1,vec__66515,group_title,group,c__4527__auto__,size__4528__auto__,b__66514,s__66512__$2,temp__5735__auto__,unlinked_QMARK_){
return (function (p1__66510_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__66520,i__66513,hm,block,c__4527__auto____$1,size__4528__auto____$1,b__66521,s__66519__$2,temp__5735__auto____$1,vec__66515,group_title,group,c__4527__auto__,size__4528__auto__,b__66514,s__66512__$2,temp__5735__auto__,unlinked_QMARK_){
return (function (p__66522){
var map__66523 = p__66522;
var map__66523__$1 = (((((!((map__66523 == null))))?(((((map__66523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66523):map__66523);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66523__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uid,new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block));
});})(i__66520,i__66513,hm,block,c__4527__auto____$1,size__4528__auto____$1,b__66521,s__66519__$2,temp__5735__auto____$1,vec__66515,group_title,group,c__4527__auto__,size__4528__auto__,b__66514,s__66512__$2,temp__5735__auto__,unlinked_QMARK_))
,p1__66510_SHARP_);
});})(i__66520,i__66513,hm,block,c__4527__auto____$1,size__4528__auto____$1,b__66521,s__66519__$2,temp__5735__auto____$1,vec__66515,group_title,group,c__4527__auto__,size__4528__auto__,b__66514,s__66512__$2,temp__5735__auto__,unlinked_QMARK_))
));
cljs.core.reset_BANG_(unlinked_refs,new_unlinked_refs);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unlinked-references","link","unlinked-references/link",-157284879),block,title], null));
});})(i__66520,i__66513,block,c__4527__auto____$1,size__4528__auto____$1,b__66521,s__66519__$2,temp__5735__auto____$1,vec__66515,group_title,group,c__4527__auto__,size__4528__auto__,b__66514,s__66512__$2,temp__5735__auto__,unlinked_QMARK_))
], null),"Link"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block))].join('')], null)));

var G__66559 = (i__66520 + (1));
i__66520 = G__66559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66521),athens$views$node_page$unlinked_ref_el_$_iter__66511_$_iter__66518(cljs.core.chunk_rest(s__66519__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66521),null);
}
} else {
var block = cljs.core.first(s__66519__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_block_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.ref_comp,block], null)], null),(cljs.core.truth_(unlinked_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1.5em"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__66513,block,s__66519__$2,temp__5735__auto____$1,vec__66515,group_title,group,c__4527__auto__,size__4528__auto__,b__66514,s__66512__$2,temp__5735__auto__,unlinked_QMARK_){
return (function (){
var hm = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,cljs.core.deref(unlinked_refs));
var new_unlinked_refs = cljs.core.seq(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(hm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_title], null),((function (i__66513,hm,block,s__66519__$2,temp__5735__auto____$1,vec__66515,group_title,group,c__4527__auto__,size__4528__auto__,b__66514,s__66512__$2,temp__5735__auto__,unlinked_QMARK_){
return (function (p1__66510_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__66513,hm,block,s__66519__$2,temp__5735__auto____$1,vec__66515,group_title,group,c__4527__auto__,size__4528__auto__,b__66514,s__66512__$2,temp__5735__auto__,unlinked_QMARK_){
return (function (p__66525){
var map__66526 = p__66525;
var map__66526__$1 = (((((!((map__66526 == null))))?(((((map__66526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66526):map__66526);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66526__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uid,new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block));
});})(i__66513,hm,block,s__66519__$2,temp__5735__auto____$1,vec__66515,group_title,group,c__4527__auto__,size__4528__auto__,b__66514,s__66512__$2,temp__5735__auto__,unlinked_QMARK_))
,p1__66510_SHARP_);
});})(i__66513,hm,block,s__66519__$2,temp__5735__auto____$1,vec__66515,group_title,group,c__4527__auto__,size__4528__auto__,b__66514,s__66512__$2,temp__5735__auto__,unlinked_QMARK_))
));
cljs.core.reset_BANG_(unlinked_refs,new_unlinked_refs);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unlinked-references","link","unlinked-references/link",-157284879),block,title], null));
});})(i__66513,block,s__66519__$2,temp__5735__auto____$1,vec__66515,group_title,group,c__4527__auto__,size__4528__auto__,b__66514,s__66512__$2,temp__5735__auto__,unlinked_QMARK_))
], null),"Link"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block))].join('')], null)),athens$views$node_page$unlinked_ref_el_$_iter__66511_$_iter__66518(cljs.core.rest(s__66519__$2)));
}
} else {
return null;
}
break;
}
});})(i__66513,vec__66515,group_title,group,c__4527__auto__,size__4528__auto__,b__66514,s__66512__$2,temp__5735__auto__,unlinked_QMARK_))
,null,null));
});})(i__66513,vec__66515,group_title,group,c__4527__auto__,size__4528__auto__,b__66514,s__66512__$2,temp__5735__auto__,unlinked_QMARK_))
;
return iter__4529__auto__(group);
})())], null));

var G__66560 = (i__66513 + (1));
i__66513 = G__66560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66514),athens$views$node_page$unlinked_ref_el_$_iter__66511(cljs.core.chunk_rest(s__66512__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66514),null);
}
} else {
var vec__66528 = cljs.core.first(s__66512__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66528,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66528,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__66528,group_title,group,s__66512__$2,temp__5735__auto__,unlinked_QMARK_){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(vec__66528,group_title,group,s__66512__$2,temp__5735__auto__,unlinked_QMARK_))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (vec__66528,group_title,group,s__66512__$2,temp__5735__auto__,unlinked_QMARK_){
return (function athens$views$node_page$unlinked_ref_el_$_iter__66511_$_iter__66531(s__66532){
return (new cljs.core.LazySeq(null,(function (){
var s__66532__$1 = s__66532;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__66532__$1);
if(temp__5735__auto____$1){
var s__66532__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__66532__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__66532__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__66534 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__66533 = (0);
while(true){
if((i__66533 < size__4528__auto__)){
var block = cljs.core._nth(c__4527__auto__,i__66533);
cljs.core.chunk_append(b__66534,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_block_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.ref_comp,block], null)], null),(cljs.core.truth_(unlinked_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1.5em"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__66533,block,c__4527__auto__,size__4528__auto__,b__66534,s__66532__$2,temp__5735__auto____$1,vec__66528,group_title,group,s__66512__$2,temp__5735__auto__,unlinked_QMARK_){
return (function (){
var hm = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,cljs.core.deref(unlinked_refs));
var new_unlinked_refs = cljs.core.seq(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(hm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_title], null),((function (i__66533,hm,block,c__4527__auto__,size__4528__auto__,b__66534,s__66532__$2,temp__5735__auto____$1,vec__66528,group_title,group,s__66512__$2,temp__5735__auto__,unlinked_QMARK_){
return (function (p1__66510_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__66533,hm,block,c__4527__auto__,size__4528__auto__,b__66534,s__66532__$2,temp__5735__auto____$1,vec__66528,group_title,group,s__66512__$2,temp__5735__auto__,unlinked_QMARK_){
return (function (p__66535){
var map__66536 = p__66535;
var map__66536__$1 = (((((!((map__66536 == null))))?(((((map__66536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66536):map__66536);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66536__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uid,new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block));
});})(i__66533,hm,block,c__4527__auto__,size__4528__auto__,b__66534,s__66532__$2,temp__5735__auto____$1,vec__66528,group_title,group,s__66512__$2,temp__5735__auto__,unlinked_QMARK_))
,p1__66510_SHARP_);
});})(i__66533,hm,block,c__4527__auto__,size__4528__auto__,b__66534,s__66532__$2,temp__5735__auto____$1,vec__66528,group_title,group,s__66512__$2,temp__5735__auto__,unlinked_QMARK_))
));
cljs.core.reset_BANG_(unlinked_refs,new_unlinked_refs);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unlinked-references","link","unlinked-references/link",-157284879),block,title], null));
});})(i__66533,block,c__4527__auto__,size__4528__auto__,b__66534,s__66532__$2,temp__5735__auto____$1,vec__66528,group_title,group,s__66512__$2,temp__5735__auto__,unlinked_QMARK_))
], null),"Link"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block))].join('')], null)));

var G__66561 = (i__66533 + (1));
i__66533 = G__66561;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66534),athens$views$node_page$unlinked_ref_el_$_iter__66511_$_iter__66531(cljs.core.chunk_rest(s__66532__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66534),null);
}
} else {
var block = cljs.core.first(s__66532__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_block_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.ref_comp,block], null)], null),(cljs.core.truth_(unlinked_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1.5em"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (block,s__66532__$2,temp__5735__auto____$1,vec__66528,group_title,group,s__66512__$2,temp__5735__auto__,unlinked_QMARK_){
return (function (){
var hm = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,cljs.core.deref(unlinked_refs));
var new_unlinked_refs = cljs.core.seq(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(hm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_title], null),(function (p1__66510_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__66538){
var map__66539 = p__66538;
var map__66539__$1 = (((((!((map__66539 == null))))?(((((map__66539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66539):map__66539);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66539__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uid,new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block));
}),p1__66510_SHARP_);
})));
cljs.core.reset_BANG_(unlinked_refs,new_unlinked_refs);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unlinked-references","link","unlinked-references/link",-157284879),block,title], null));
});})(block,s__66532__$2,temp__5735__auto____$1,vec__66528,group_title,group,s__66512__$2,temp__5735__auto__,unlinked_QMARK_))
], null),"Link"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block))].join('')], null)),athens$views$node_page$unlinked_ref_el_$_iter__66511_$_iter__66531(cljs.core.rest(s__66532__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__66528,group_title,group,s__66512__$2,temp__5735__auto__,unlinked_QMARK_))
;
return iter__4529__auto__(group);
})())], null),athens$views$node_page$unlinked_ref_el_$_iter__66511(cljs.core.rest(s__66512__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref(unlinked_refs));
})())], null):null)], null);
} else {
return null;
}
});
/**
 * title/initial is the title when a page is first loaded.
 *   title/local is the value of the textarea.
 *   We have both, because we want to be able to change the local title without transacting to the db until user confirms.
 *   Similar to atom-string in blocks. Hacky, but state consistency is hard!
 */
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(_,___$1,___$2,___$3){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.init_state);
var unlinked_refs = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
return (function (node,editing_uid,linked_refs){
var map__66541 = node;
var map__66541__$1 = (((((!((map__66541 == null))))?(((((map__66541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66541):map__66541);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66541__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66541__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66541__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var map__66542 = cljs.core.deref(state);
var map__66542__$1 = (((((!((map__66542 == null))))?(((((map__66542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66542):map__66542);
var alert_show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66542__$1,new cljs.core.Keyword("alert","show","alert/show",-785861637));
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66542__$1,new cljs.core.Keyword("menu","show","menu/show",-580966400));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66542__$1,new cljs.core.Keyword("alert","message","alert/message",-363559142));
var confirm_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66542__$1,new cljs.core.Keyword("alert","confirm-fn","alert/confirm-fn",-1115580970));
var cancel_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66542__$1,new cljs.core.Keyword("alert","cancel-fn","alert/cancel-fn",-869919002));
var timeline_page_QMARK_ = athens.util.is_timeline_page(uid);
var daily_notes_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"home","home",-74557309),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-route","name","current-route/name",-1583049420)], null))));
athens.views.node_page.sync_title(title,state);

return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-page"], null),new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid], null)),(cljs.core.truth_(alert_show)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"50px",new cljs.core.Keyword(null,"left","left",-399115937),"35%"], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.alerts.alert_component,message,confirm_fn,cancel_fn], null)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(uid,e);
})], null)),((timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("title","local","title/local",-1588788316).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"id","id",-1388402092),["editable-uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (___$4){
return athens.views.node_page.handle_blur(node,state,linked_refs);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
return athens.views.node_page.handle_key_down(e,uid,state,children);
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return athens.views.node_page.handle_change(e,state);
})], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(show)?"active":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

if(cljs.core.truth_(show)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("menu","show","menu/show",-580966400),false);
} else {
var rect = e.target.getBoundingClientRect();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("menu","show","menu/show",-580966400),true,new cljs.core.Keyword("menu","x","menu/x",2085660544),rect.left,new cljs.core.Keyword("menu","y","menu/y",-1754654817),rect.bottom], null));
}
}),new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.page_menu_toggle_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.MoreHoriz], null)], null),new cljs.core.Keyword("title","local","title/local",-1588788316).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.menu_dropdown,node,state], null),((cljs.core.empty_QMARK_(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.placeholder_block_el,uid], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function athens$views$node_page$node_page_el_$_iter__66545(s__66546){
return (new cljs.core.LazySeq(null,(function (){
var s__66546__$1 = s__66546;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__66546__$1);
if(temp__5735__auto__){
var s__66546__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66546__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__66546__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__66548 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__66547 = (0);
while(true){
if((i__66547 < size__4528__auto__)){
var map__66549 = cljs.core._nth(c__4527__auto__,i__66547);
var map__66549__$1 = (((((!((map__66549 == null))))?(((((map__66549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66549):map__66549);
var child = map__66549__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66549__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__66548,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__66562 = (i__66547 + (1));
i__66547 = G__66562;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66548),athens$views$node_page$node_page_el_$_iter__66545(cljs.core.chunk_rest(s__66546__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66548),null);
}
} else {
var map__66551 = cljs.core.first(s__66546__$2);
var map__66551__$1 = (((((!((map__66551 == null))))?(((((map__66551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66551):map__66551);
var child = map__66551__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66551__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__66545(cljs.core.rest(s__66546__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(children);
})()], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.linked_ref_el,state,daily_notes_QMARK_,linked_refs], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.unlinked_ref_el,state,daily_notes_QMARK_,unlinked_refs,title], null)], null);
});
});
athens.views.node_page.node_page_component = (function athens$views$node_page$node_page_component(ident){
var map__66553 = athens.db.get_node_document(ident);
var map__66553__$1 = (((((!((map__66553 == null))))?(((((map__66553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66553):map__66553);
var node = map__66553__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66553__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null)));
var linked_refs = athens.db.get_linked_references(title);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_el,node,editing_uid,linked_refs], null);
});

//# sourceMappingURL=athens.views.node_page.js.map
