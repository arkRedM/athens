goog.provide('athens.devcards.node_page');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.blocks');
goog.require('athens.patterns');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('devcards.core');
goog.require('garden.selectors');
goog.require('komponentit.autosize');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('stylefy.core');
athens.devcards.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","4px","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__60831,editing_uid,linked_refs,unlinked_refs){
var map__60832 = p__60831;
var map__60832__$1 = (((((!((map__60832 == null))))?(((((map__60832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60832):map__60832);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60832__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60832__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60832__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),e.target.value], null)], null)], null);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__60834(s__60835){
return (new cljs.core.LazySeq(null,(function (){
var s__60835__$1 = s__60835;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60835__$1);
if(temp__5735__auto__){
var s__60835__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60835__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60835__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60837 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60836 = (0);
while(true){
if((i__60836 < size__4581__auto__)){
var child = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60836);
cljs.core.chunk_append(b__60837,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child)], null)));

var G__60856 = (i__60836 + (1));
i__60836 = G__60856;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60837),athens$devcards$node_page$node_page_el_$_iter__60834(cljs.core.chunk_rest(s__60835__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60837),null);
}
} else {
var child = cljs.core.first(s__60835__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child)], null)),athens$devcards$node_page$node_page_el_$_iter__60834(cljs.core.rest(s__60835__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Linked References"], null),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__60838(s__60839){
return (new cljs.core.LazySeq(null,(function (){
var s__60839__$1 = s__60839;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60839__$1);
if(temp__5735__auto__){
var s__60839__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60839__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60839__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60841 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60840 = (0);
while(true){
if((i__60840 < size__4581__auto__)){
var ref = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60840);
cljs.core.chunk_append(b__60841,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),ref], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ref], null)));

var G__60857 = (i__60840 + (1));
i__60840 = G__60857;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60841),athens$devcards$node_page$node_page_el_$_iter__60838(cljs.core.chunk_rest(s__60839__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60841),null);
}
} else {
var ref = cljs.core.first(s__60839__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),ref], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ref], null)),athens$devcards$node_page$node_page_el_$_iter__60838(cljs.core.rest(s__60839__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(linked_refs);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Unlinked References"], null),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__60842(s__60843){
return (new cljs.core.LazySeq(null,(function (){
var s__60843__$1 = s__60843;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60843__$1);
if(temp__5735__auto__){
var s__60843__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60843__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60843__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60845 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60844 = (0);
while(true){
if((i__60844 < size__4581__auto__)){
var ref = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60844);
cljs.core.chunk_append(b__60845,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),ref], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ref], null)));

var G__60858 = (i__60844 + (1));
i__60844 = G__60858;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60845),athens$devcards$node_page$node_page_el_$_iter__60842(cljs.core.chunk_rest(s__60843__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60845),null);
}
} else {
var ref = cljs.core.first(s__60843__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),ref], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ref], null)),athens$devcards$node_page$node_page_el_$_iter__60842(cljs.core.rest(s__60843__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(unlinked_refs);
})()], null)], null);
});
/**
 * One diff between datascript and posh: we don't have pull in q for posh
 *   https://github.com/mpdairy/posh/issues/21
 */
athens.devcards.node_page.node_page_component = (function athens$devcards$node_page$node_page_component(ident){
var node = athens.db.sort_block(cljs.core.deref((posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,athens.db.node_pull_pattern,ident) : posh.reagent.pull.call(null,athens.db.dsdb,athens.db.node_pull_pattern,ident))));
var title = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(node);
var editing_uid = cljs.core.deref((function (){var G__60846 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60846) : re_frame.core.subscribe.call(null,G__60846));
})());
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var linked_ref_entids = cljs.core.deref((function (){var G__60847 = athens.db.q_refs;
var G__60848 = athens.db.dsdb;
var G__60849 = athens.patterns.linked(title);
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__60847,G__60848,G__60849) : posh.reagent.q.call(null,G__60847,G__60848,G__60849));
})());
var unlinked_ref_entids = cljs.core.deref((function (){var G__60850 = athens.db.q_refs;
var G__60851 = athens.db.dsdb;
var G__60852 = athens.patterns.unlinked(title);
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__60850,G__60851,G__60852) : posh.reagent.q.call(null,G__60850,G__60851,G__60852));
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,linked_ref_entids,unlinked_ref_entids], null);
}
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.node_page","athens.devcards.node_page",-728487734),new cljs.core.Keyword(null,"Node-Page","Node-Page",2010568893)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Node-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"pull entity 4093: \"Hyperlink\" page",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.node_page !== 'undefined') && (typeof athens.devcards.node_page.t_athens$devcards$node_page60853 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.node_page.t_athens$devcards$node_page60853 = (function (meta60854){
this.meta60854 = meta60854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.node_page.t_athens$devcards$node_page60853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60855,meta60854__$1){
var self__ = this;
var _60855__$1 = this;
return (new athens.devcards.node_page.t_athens$devcards$node_page60853(meta60854__$1));
}));

(athens.devcards.node_page.t_athens$devcards$node_page60853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60855){
var self__ = this;
var _60855__$1 = this;
return self__.meta60854;
}));

(athens.devcards.node_page.t_athens$devcards$node_page60853.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.node_page.t_athens$devcards$node_page60853.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41676__auto__,devcard_opts__41677__auto__){
var self__ = this;
var this__41676__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__41677__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__41695__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_component,(4093)], null);
if(cljs.core.fn_QMARK_(v__41695__auto__)){
return (function (data_atom__41696__auto__,owner__41697__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__41695__auto__,data_atom__41696__auto__,owner__41697__auto__], null));
});
} else {
return reagent.core.as_element(v__41695__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__41677__auto__))], 0))], 0));
}));

(athens.devcards.node_page.t_athens$devcards$node_page60853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60854","meta60854",1393857985,null)], null);
}));

(athens.devcards.node_page.t_athens$devcards$node_page60853.cljs$lang$type = true);

(athens.devcards.node_page.t_athens$devcards$node_page60853.cljs$lang$ctorStr = "athens.devcards.node-page/t_athens$devcards$node_page60853");

(athens.devcards.node_page.t_athens$devcards$node_page60853.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.node-page/t_athens$devcards$node_page60853");
}));

/**
 * Positional factory function for athens.devcards.node-page/t_athens$devcards$node_page60853.
 */
athens.devcards.node_page.__GT_t_athens$devcards$node_page60853 = (function athens$devcards$node_page$__GT_t_athens$devcards$node_page60853(meta60854){
return (new athens.devcards.node_page.t_athens$devcards$node_page60853(meta60854));
});

}

return (new athens.devcards.node_page.t_athens$devcards$node_page60853(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.node_page.js.map