goog.provide('athens.components');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
athens.components.todo_on_click = (function athens$components$todo_on_click(uid,from_str,to_str){
var current_block_content = new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("block","string","block/string",-2066596447),clojure.string.replace(current_block_content,from_str,to_str),new cljs.core.Keyword("edit","time","edit/time",1384867476),athens.util.now_ts()], null)], null)], null));
});
/**
 * Stop clicks from propagating to textarea and thus preventing edit mode
 * TODO() - might be a good idea to keep an edit icon at top right
 *   for every component.
 */
athens.components.span_click_stop = (function athens$components$span_click_stop(children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return e.stopPropagation();
})], null),children], null);
});
athens.parse_renderer.component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"todo","todo",-1046442570),(function (_content,uid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.components.span_click_stop,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return athens.components.todo_on_click(uid,/\{\{\[\[TODO\]\]\}\}/,"{{[[DONE]]}}");
})], null)], null)], null);
}));
athens.parse_renderer.component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"done","done",-889844188),(function (_content,uid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.components.span_click_stop,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return athens.components.todo_on_click(uid,/\{\{\[\[DONE\]\]\}\}/,"{{[[TODO]]}}");
})], null)], null)], null);
}));
athens.parse_renderer.component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"youtube","youtube",-1932361085),(function (content,_uid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.components.span_click_stop,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-16-9","div.media-16-9",-1557022170),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),["https://www.youtube.com/embed/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.re_find(/.*v=([a-zA-Z0-9_\-]+)/,content),(1)))].join(''),new cljs.core.Keyword(null,"allow","allow",-1857325745),"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"], null)], null)], null)], null);
}));
athens.parse_renderer.component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"iframe","iframe",884422026),(function (content,_uid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.components.span_click_stop,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-16-9","div.media-16-9",-1557022170),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.re_find(/http.*/,content)], null)], null)], null)], null);
}));
athens.parse_renderer.component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"self","self",-1547428899),(function (content,_uid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.components.span_click_stop,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null),content], null)], null);
}));
athens.components.block_embed_adjustments = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"background-minus-2","background-minus-2",-1711017591),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190)),new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">.block-container",">.block-container",-1169473817),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"transparent"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">svg",">svg",-545460043),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),"5px",new cljs.core.Keyword(null,"top","top",-1856271961),"5px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"5",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null)], null)], null);
athens.parse_renderer.component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"block-embed","block-embed",-417443082),(function (content,uid){
var with_let65864 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let65864","with-let65864",-1833877635));
var temp__5739__auto___65867 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___65867 == null)){
} else {
var c__26835__auto___65868 = temp__5739__auto___65867;
if((with_let65864.generation === c__26835__auto___65868.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let65864.generation = c__26835__auto___65868.ratomGeneration);
}


var init65865 = (with_let65864.length === (0));
var embed_id = ((init65865)?(with_let65864[(0)] = cljs.core.random_uuid()):(with_let65864[(0)]));
var res__26836__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-embed","div.block-embed",1649385290),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.components.block_embed_adjustments),(function (){var block = athens.db.get_block_document((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("block","uid","block/uid",-1623585167),cljs.core.last(cljs.core.re_find(/\(\((.+)\)\)/,content))],null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,athens.util.recursively_modify_block_for_embed(block,embed_id),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"linked-ref","linked-ref",-925333945),false], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block-embed?","block-embed?",-216201089),true], null)], null),(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","is-editing","editing/is-editing",-1509220484),uid], null))))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Edit,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),uid], null));
})], null)], null))], null);
})()], null);

return res__26836__auto__;
}));

//# sourceMappingURL=athens.components.js.map
