goog.provide('athens.effects');
/**
 * Filter: node/title doesn't exist yet in the db or in the titles being asserted (e.g. when renaming a page and changing it's references).
 *   Map: new node/title entity.
 */
athens.effects.new_titles_to_tx_data = (function athens$effects$new_titles_to_tx_data(new_titles,assert_titles){
var now = athens.util.now_ts();
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (t){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("node","title","node/title",628940777),t,new cljs.core.Keyword("block","uid","block/uid",-1623585167),athens.util.gen_block_uid(),new cljs.core.Keyword("create","time","create/time",-1563077754),now,new cljs.core.Keyword("edit","time","edit/time",1384867476),now], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
return (((athens.db.search_exact_node_title(x) == null)) && ((!(cljs.core.contains_QMARK_(assert_titles,x)))));
}),new_titles));
});
/**
 * Purpose is to remove orphan pages. However, if entire entity is retracted, orphan pages are still created.
 * 
 *   Filter: new-str doesn't include link, page exists, page has no children, and has no other [[linked refs]].
 *   Map: retractEntity
 */
athens.effects.old_titles_to_tx_data = (function athens$effects$old_titles_to_tx_data(old_titles,new_str,with_db){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (title){
var temp__5735__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(athens.db.pull_nil(with_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),title], null)));
if(cljs.core.truth_(temp__5735__auto__)){
var eid = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),eid], null);
} else {
return null;
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (title){
var node = athens.db.pull_nil(with_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),title], null));
if((!(clojure.string.includes_QMARK_(new_str,title)))){
var and__4115__auto__ = node;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.empty_QMARK_(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(node))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),athens.db.linked_refs_count(title))));
} else {
return and__4115__auto__;
}
} else {
return false;
}
}),old_titles));
});
/**
 * Filter: ((ref-uid)) points to a valid block (no :node/title).
 *   Map: add block/ref relationship.
 */
athens.effects.new_refs_to_tx_data = (function athens$effects$new_refs_to_tx_data(new_block_refs,e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref_uid){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),ref_uid], null)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (ref_uid){
var block = (function (){var G__66177 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null)], null);
var G__66178 = cljs.core.deref(athens.db.dsdb);
var G__66179 = ref_uid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__66177,G__66178,G__66179) : datascript.core.q.call(null,G__66177,G__66178,G__66179));
})();
var map__66176 = block;
var map__66176__$1 = (((((!((map__66176 == null))))?(((((map__66176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66176):map__66176);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66176__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var and__4115__auto__ = block;
if(cljs.core.truth_(and__4115__auto__)){
return (title == null);
} else {
return and__4115__auto__;
}
}),new_block_refs));
});
/**
 * Filter: No filter.
 *   Map: add block/ref relationship.
 */
athens.effects.new_page_refs_to_tx_data = (function athens$effects$new_page_refs_to_tx_data(new_page_refs,source_eid){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page_id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),source_eid,new cljs.core.Keyword("block","refs","block/refs",-1214495349),page_id], null);
}),new_page_refs);
});
/**
 * Filter: new-str doesn't include block ref anymore, ((ref-uid)) points to an actual block, and block/ref relationship exists.
 *   Map: retract relationship.
 */
athens.effects.old_block_refs_to_tx_data = (function athens$effects$old_block_refs_to_tx_data(old_block_refs,e,new_str){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref_uid){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),e,new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),ref_uid], null)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (ref_uid){
var eid = athens.db.e_by_av(new cljs.core.Keyword("block","uid","block/uid",-1623585167),ref_uid);
var and__4115__auto__ = eid;
if(cljs.core.truth_(and__4115__auto__)){
return (!(clojure.string.includes_QMARK_(new_str,["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ref_uid),"))"].join(''))));
} else {
return and__4115__auto__;
}
}),old_block_refs));
});
/**
 * Filter: [[page]] points to a page and block/ref relationship does exist.
 *   Map: retract block/ref relationship.
 * 
 *   Edge Cases:
 *   1. Merging two pages (renaming a page to a title that already exists).
 *   - This attempt to update all the Linked References strings
 *   - Querying with-db rather than the current-db to check that entity retraction already takes care of block/ref retraction.
 * 
 *   2. Deleting an orphan page, i.e. deleting a [[link]] when the [[link]] has no children and no other linked references
 *   - In this case, we can't use with-db, because the orphan page retraction happens in old-titles-to-tx-data.
 *   - Pass `old-titles` and check that the block/ref being deleted is not there to avoid double retraction.
 *   - Don't use :db.fn/retractAttribute because :db.cardinality/many
 */
athens.effects.old_page_refs_to_tx_data = (function athens$effects$old_page_refs_to_tx_data(old_page_refs,source_eid,new_str,with_db,old_titles){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page_id){
var temp__5735__auto__ = athens.db.pull_nil(with_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),page_id);
if(cljs.core.truth_(temp__5735__auto__)){
var page = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),source_eid,new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(page)], null)], null);
} else {
return null;
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (page_id){
var page = athens.db.pull_nil(with_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),page_id);
var old_pages_eids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,old_titles));
var map__66190 = page;
var map__66190__$1 = (((((!((map__66190 == null))))?(((((map__66190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66190):map__66190);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66190__$1,new cljs.core.Keyword("node","title","node/title",628940777));
if((!(clojure.string.includes_QMARK_(new_str,["[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),"]]"].join(''))))){
var and__4115__auto__ = page;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = title;
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_pages_eids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
} else {
return false;
}
}),old_page_refs));
});
/**
 * When block/string is asserted, parse for links and block refs to add.
 *   When block/string is retracted, parse for links and block refs to remove.
 *   Retractions need to look at asserted block/string. Use empty string if only retract.
 */
athens.effects.parse_for_links = (function athens$effects$parse_for_links(with_tx){
var with_tx_data = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(with_tx);
var with_db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(with_tx);
var assert_titles = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66193_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__66193_SHARP_,(2));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66192_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__66192_SHARP_),new cljs.core.Keyword("node","title","node/title",628940777))) && (cljs.core.last(p1__66192_SHARP_) === true));
}),with_tx_data)));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__66196){
var vec__66197 = p__66196;
var assertion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66197,(0),null);
var retraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66197,(1),null);
if(((cljs.core.last(assertion) === true) && (cljs.core.last(retraction) === false))){
var eid = cljs.core.first(assertion);
var assert_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assertion,(2));
var retract_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(retraction,(2));
var assert_data = athens.walk.walk_string(assert_string);
var retract_data = athens.walk.walk_string(retract_string);
var new_block_refs = athens.effects.new_refs_to_tx_data(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(assert_data),eid);
var old_titles = athens.effects.old_titles_to_tx_data(new cljs.core.Keyword("node","titles","node/titles",783660933).cljs$core$IFn$_invoke$arity$1(retract_data),assert_string,with_db);
var new_titles = athens.effects.new_titles_to_tx_data(new cljs.core.Keyword("node","titles","node/titles",783660933).cljs$core$IFn$_invoke$arity$1(assert_data),assert_titles);
var new_page_refs = athens.effects.new_page_refs_to_tx_data(new cljs.core.Keyword("page","refs","page/refs",-1563352171).cljs$core$IFn$_invoke$arity$1(assert_data),eid);
var old_block_refs = athens.effects.old_block_refs_to_tx_data(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(retract_data),eid,assert_string);
var old_page_refs = athens.effects.old_page_refs_to_tx_data(new cljs.core.Keyword("page","refs","page/refs",-1563352171).cljs$core$IFn$_invoke$arity$1(retract_data),eid,assert_string,with_db,old_titles);
var tx_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,new_titles,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_block_refs,new_page_refs,old_titles,old_block_refs,old_page_refs], 0));
return tx_data;
} else {
if(((cljs.core.last(assertion) === true) && ((retraction == null)))){
var eid = cljs.core.first(assertion);
var assert_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(assertion,(2));
var assert_data = athens.walk.walk_string(assert_string);
var new_titles = athens.effects.new_titles_to_tx_data(new cljs.core.Keyword("node","titles","node/titles",783660933).cljs$core$IFn$_invoke$arity$1(assert_data),assert_titles);
var new_page_refs = athens.effects.new_page_refs_to_tx_data(new cljs.core.Keyword("page","refs","page/refs",-1563352171).cljs$core$IFn$_invoke$arity$1(assert_data),eid);
var new_block_refs = athens.effects.new_refs_to_tx_data(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(assert_data),eid);
var tx_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,new_titles,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_block_refs,new_page_refs], 0));
return tx_data;
} else {
if(((cljs.core.last(assertion) === false) && ((retraction == null)))){
var eid = cljs.core.first(retraction);
var assert_string = "";
var retract_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(retraction,(2));
var retract_data = athens.walk.walk_string(retract_string);
var old_titles = athens.effects.old_titles_to_tx_data(new cljs.core.Keyword("node","titles","node/titles",783660933).cljs$core$IFn$_invoke$arity$1(retract_data),assert_string,with_db);
var old_block_refs = athens.effects.old_block_refs_to_tx_data(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(retract_data),eid,assert_string);
var old_page_refs = athens.effects.old_page_refs_to_tx_data(new cljs.core.Keyword("page","refs","page/refs",-1563352171).cljs$core$IFn$_invoke$arity$1(retract_data),eid,assert_string,with_db,old_titles);
var tx_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,old_titles,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_block_refs,old_page_refs], 0));
return tx_data;
} else {
return null;
}
}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__66200){
var vec__66201 = p__66200;
var _eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66201,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66201,(1),null);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__66195_SHARP_){
return cljs.core.not(cljs.core.last(p1__66195_SHARP_));
}),datoms);
}),cljs.core.group_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66194_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__66194_SHARP_),new cljs.core.Keyword("block","string","block/string",-2066596447));
}),with_tx_data)))], 0));
});
/**
 * Only creates `link-created` events for now.
 *   TODO: link-deleted events
 */
athens.effects.ph_link_created_BANG_ = (function athens$effects$ph_link_created_BANG_(outputs){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return posthog.capture("link-created",cljs.core.clj__GT_js(x));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66204){
var vec__66209 = p__66204;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66209,(0),null);
var _a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66209,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66209,(2),null);
var _t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66209,(3),null);
var _t_or_f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66209,(4),null);
var num_refs = cljs.core.count(new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1((function (){var G__66215 = cljs.core.deref(athens.db.dsdb);
var G__66216 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","_refs","block/_refs",830218531)], null);
var G__66217 = v;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__66215,G__66216,G__66217) : datascript.core.pull.call(null,G__66215,G__66216,G__66217));
})()));
var block_or_page = (cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1((function (){var G__66218 = cljs.core.deref(athens.db.dsdb);
var G__66219 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","string","block/string",-2066596447)], null);
var G__66220 = e;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__66218,G__66219,G__66220) : datascript.core.pull.call(null,G__66218,G__66219,G__66220));
})()))?new cljs.core.Keyword(null,"page","page",849072397):new cljs.core.Keyword(null,"block","block",664686210));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"refs","refs",-1560051448),num_refs,new cljs.core.Keyword(null,"attr","attr",-604132353),block_or_page], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__66232){
var vec__66236 = p__66232;
var _e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66236,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66236,(1),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66236,(2),null);
var _t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66236,(3),null);
var t_or_f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66236,(4),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.Keyword("block","refs","block/refs",-1214495349))){
return t_or_f;
} else {
return false;
}
}),outputs))));
});
athens.effects.walk_transact = (function athens$effects$walk_transact(tx_data){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX RAW INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(tx_data);

try{var with_tx = datascript.core.with$.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(athens.db.dsdb),tx_data);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX WITH"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(with_tx));

var more_tx_data = athens.effects.parse_for_links(with_tx);
var final_tx_data = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx_data,more_tx_data));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX MORE"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(more_tx_data);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX FINAL INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(final_tx_data);

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(posh.reagent.transact_BANG_(athens.db.dsdb,final_tx_data));
athens.effects.ph_link_created_BANG_(outputs);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
}catch (e66243){if((e66243 instanceof Error)){
var e = e66243;
alert(cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["EXCEPTION",e], 0));
} else {
throw e66243;

}
}});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"transact!","transact!",-822725810),(function (tx_data){
return athens.effects.walk_transact(tx_data);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379),(function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("local-storage","set!","local-storage/set!",901741855),(function (p__66244){
var vec__66245 = p__66244;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66245,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66245,(1),null);
return localStorage.setItem(key,value);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949),(function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http","http",382524695),(function (p__66248){
var map__66249 = p__66248;
var map__66249__$1 = (((((!((map__66249 == null))))?(((((map__66249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66249):map__66249);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66249__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66249__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66249__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66249__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66249__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__62659__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__62660__auto__ = (function (){var switch__62623__auto__ = (function (state_66296){
var state_val_66297 = (state_66296[(1)]);
if((state_val_66297 === (7))){
var inst_66263 = (state_66296[(7)]);
var inst_66263__$1 = (state_66296[(2)]);
var inst_66265 = (inst_66263__$1 == null);
var inst_66266 = cljs.core.not(inst_66265);
var state_66296__$1 = (function (){var statearr_66301 = state_66296;
(statearr_66301[(7)] = inst_66263__$1);

return statearr_66301;
})();
if(inst_66266){
var statearr_66304_66376 = state_66296__$1;
(statearr_66304_66376[(1)] = (8));

} else {
var statearr_66306_66377 = state_66296__$1;
(statearr_66306_66377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66297 === (1))){
var state_66296__$1 = state_66296;
var G__66307_66378 = method;
var G__66307_66379__$1 = (((G__66307_66378 instanceof cljs.core.Keyword))?G__66307_66378.fqn:null);
switch (G__66307_66379__$1) {
case "post":
var statearr_66308_66381 = state_66296__$1;
(statearr_66308_66381[(1)] = (3));


break;
case "get":
var statearr_66309_66382 = state_66296__$1;
(statearr_66309_66382[(1)] = (4));


break;
case "put":
var statearr_66310_66383 = state_66296__$1;
(statearr_66310_66383[(1)] = (5));


break;
case "delete":
var statearr_66311_66384 = state_66296__$1;
(statearr_66311_66384[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66307_66379__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66297 === (4))){
var state_66296__$1 = state_66296;
var statearr_66312_66385 = state_66296__$1;
(statearr_66312_66385[(2)] = cljs_http.client.get);

(statearr_66312_66385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66297 === (15))){
var inst_66263 = (state_66296[(7)]);
var state_66296__$1 = state_66296;
var statearr_66315_66386 = state_66296__$1;
(statearr_66315_66386[(2)] = inst_66263);

(statearr_66315_66386[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66297 === (13))){
var inst_66276 = (state_66296[(2)]);
var state_66296__$1 = state_66296;
var statearr_66317_66387 = state_66296__$1;
(statearr_66317_66387[(2)] = inst_66276);

(statearr_66317_66387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66297 === (6))){
var state_66296__$1 = state_66296;
var statearr_66318_66388 = state_66296__$1;
(statearr_66318_66388[(2)] = cljs_http.client.delete$);

(statearr_66318_66388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66297 === (17))){
var inst_66286 = (state_66296[(8)]);
var inst_66288 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_66286);
var inst_66289 = re_frame.core.dispatch(inst_66288);
var state_66296__$1 = state_66296;
var statearr_66319_66389 = state_66296__$1;
(statearr_66319_66389[(2)] = inst_66289);

(statearr_66319_66389[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66297 === (3))){
var state_66296__$1 = state_66296;
var statearr_66320_66390 = state_66296__$1;
(statearr_66320_66390[(2)] = cljs_http.client.post);

(statearr_66320_66390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66297 === (12))){
var state_66296__$1 = state_66296;
var statearr_66324_66391 = state_66296__$1;
(statearr_66324_66391[(2)] = false);

(statearr_66324_66391[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66297 === (2))){
var inst_66260 = (state_66296[(2)]);
var inst_66261 = (inst_66260.cljs$core$IFn$_invoke$arity$2 ? inst_66260.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_66260.call(null,url,opts));
var state_66296__$1 = state_66296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66296__$1,(7),inst_66261);
} else {
if((state_val_66297 === (19))){
var inst_66294 = (state_66296[(2)]);
var state_66296__$1 = state_66296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66296__$1,inst_66294);
} else {
if((state_val_66297 === (11))){
var state_66296__$1 = state_66296;
var statearr_66325_66392 = state_66296__$1;
(statearr_66325_66392[(2)] = true);

(statearr_66325_66392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66297 === (9))){
var state_66296__$1 = state_66296;
var statearr_66326_66393 = state_66296__$1;
(statearr_66326_66393[(2)] = false);

(statearr_66326_66393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66297 === (5))){
var state_66296__$1 = state_66296;
var statearr_66327_66394 = state_66296__$1;
(statearr_66327_66394[(2)] = cljs_http.client.put);

(statearr_66327_66394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66297 === (14))){
var inst_66263 = (state_66296[(7)]);
var inst_66281 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_66263);
var state_66296__$1 = state_66296;
var statearr_66331_66395 = state_66296__$1;
(statearr_66331_66395[(2)] = inst_66281);

(statearr_66331_66395[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66297 === (16))){
var inst_66284 = (state_66296[(9)]);
var inst_66284__$1 = (state_66296[(2)]);
var inst_66285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66284__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_66286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66284__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_66296__$1 = (function (){var statearr_66332 = state_66296;
(statearr_66332[(8)] = inst_66286);

(statearr_66332[(9)] = inst_66284__$1);

return statearr_66332;
})();
if(cljs.core.truth_(inst_66285)){
var statearr_66333_66396 = state_66296__$1;
(statearr_66333_66396[(1)] = (17));

} else {
var statearr_66334_66397 = state_66296__$1;
(statearr_66334_66397[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66297 === (10))){
var inst_66279 = (state_66296[(2)]);
var state_66296__$1 = state_66296;
if(cljs.core.truth_(inst_66279)){
var statearr_66336_66398 = state_66296__$1;
(statearr_66336_66398[(1)] = (14));

} else {
var statearr_66338_66399 = state_66296__$1;
(statearr_66338_66399[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66297 === (18))){
var inst_66284 = (state_66296[(9)]);
var inst_66291 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_66284);
var inst_66292 = re_frame.core.dispatch(inst_66291);
var state_66296__$1 = state_66296;
var statearr_66340_66400 = state_66296__$1;
(statearr_66340_66400[(2)] = inst_66292);

(statearr_66340_66400[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66297 === (8))){
var inst_66263 = (state_66296[(7)]);
var inst_66268 = inst_66263.cljs$lang$protocol_mask$partition0$;
var inst_66269 = (inst_66268 & (64));
var inst_66270 = inst_66263.cljs$core$ISeq$;
var inst_66271 = (cljs.core.PROTOCOL_SENTINEL === inst_66270);
var inst_66272 = ((inst_66269) || (inst_66271));
var state_66296__$1 = state_66296;
if(cljs.core.truth_(inst_66272)){
var statearr_66341_66401 = state_66296__$1;
(statearr_66341_66401[(1)] = (11));

} else {
var statearr_66342_66402 = state_66296__$1;
(statearr_66342_66402[(1)] = (12));

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
});
return (function() {
var athens$effects$state_machine__62624__auto__ = null;
var athens$effects$state_machine__62624__auto____0 = (function (){
var statearr_66345 = [null,null,null,null,null,null,null,null,null,null];
(statearr_66345[(0)] = athens$effects$state_machine__62624__auto__);

(statearr_66345[(1)] = (1));

return statearr_66345;
});
var athens$effects$state_machine__62624__auto____1 = (function (state_66296){
while(true){
var ret_value__62625__auto__ = (function (){try{while(true){
var result__62626__auto__ = switch__62623__auto__(state_66296);
if(cljs.core.keyword_identical_QMARK_(result__62626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__62626__auto__;
}
break;
}
}catch (e66347){var ex__62627__auto__ = e66347;
var statearr_66348_66403 = state_66296;
(statearr_66348_66403[(2)] = ex__62627__auto__);


if(cljs.core.seq((state_66296[(4)]))){
var statearr_66349_66404 = state_66296;
(statearr_66349_66404[(1)] = cljs.core.first((state_66296[(4)])));

} else {
throw ex__62627__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__62625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66405 = state_66296;
state_66296 = G__66405;
continue;
} else {
return ret_value__62625__auto__;
}
break;
}
});
athens$effects$state_machine__62624__auto__ = function(state_66296){
switch(arguments.length){
case 0:
return athens$effects$state_machine__62624__auto____0.call(this);
case 1:
return athens$effects$state_machine__62624__auto____1.call(this,state_66296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__62624__auto____0;
athens$effects$state_machine__62624__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__62624__auto____1;
return athens$effects$state_machine__62624__auto__;
})()
})();
var state__62661__auto__ = (function (){var statearr_66350 = f__62660__auto__();
(statearr_66350[(6)] = c__62659__auto__);

return statearr_66350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__62661__auto__);
}));

return c__62659__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"timeout","timeout",-318625318),(function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__66354){
var map__66355 = p__66354;
var map__66355__$1 = (((((!((map__66355 == null))))?(((((map__66355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66355):map__66355);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66355__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66355__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66355__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66355__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__66357 = action;
var G__66357__$1 = (((G__66357 instanceof cljs.core.Keyword))?G__66357.fqn:null);
switch (G__66357__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return re_frame.core.dispatch(event);
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66357__$1)].join('')));

}
});
})());
re_frame.core.reg_fx(new cljs.core.Keyword("editing","focus","editing/focus",-1669016321),(function (p__66361){
var vec__66362 = p__66361;
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66362,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66362,(1),null);
if((uid == null)){
var temp__5735__auto__ = document.activeElement;
if(cljs.core.truth_(temp__5735__auto__)){
var active_el = temp__5735__auto__;
return active_el.blur();
} else {
return null;
}
} else {
return setTimeout((function (){
var vec__66365 = athens.db.uid_and_embed_id(uid);
var uid__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66365,(0),null);
var embed_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66365,(1),null);
var html_id = ["editable-uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('');
var el = document.querySelector((cljs.core.truth_(embed_id)?(function (){var or__4126__auto__ = ["textarea[id='",html_id,"-embed-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(embed_id),"']"].join('');
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ["textarea[id^='",html_id,"-embed-']"].join('');
}
})():["#",html_id].join('')));
if(cljs.core.truth_(el)){
el.focus();

if(cljs.core.truth_(index)){
return goog.dom.selection.setCursorPosition(el,index);
} else {
return null;
}
} else {
return null;
}
}),(100));
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"set-cursor-position","set-cursor-position",1058534914),(function (p__66368){
var vec__66369 = p__66368;
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66369,(0),null);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66369,(1),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66369,(2),null);
return setTimeout((function (){
var temp__5735__auto__ = document.querySelector(["#editable-uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join(''));
if(cljs.core.truth_(temp__5735__auto__)){
var target = temp__5735__auto__;
target.focus();

(target.selectionStart = start);

return (target.selectionEnd = end);
} else {
return null;
}
}),(100));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("stylefy","tag","stylefy/tag",1120934997),(function (p__66372){
var vec__66373 = p__66372;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66373,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66373,(1),null);
return stylefy.core.tag(tag,properties);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("alert","js!","alert/js!",-1297535531),(function (message){
return alert(message);
}));

//# sourceMappingURL=athens.effects.js.map
