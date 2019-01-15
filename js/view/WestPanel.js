/** 左边区域定义 * */

var lastExpandNode = null;

Ext.define('TSMINFO.view.WestPanel', {

	title : '| | |',

	alias : 'widget.westPanel',

	extend : 'Ext.tree.Panel',

	rootVisible : false,

	bodyStyle: 'background:#333744;padding:0px !important;border-style:none;',

	lines : false,

	displayField : 'moduleName',

	useArrows : true,

	collapsible : true,

	split : true,

	store : 'MenuStore',

	titleCollapse:true,

	collapsedCls:'x-panel-tree-collapsed',

	buttonAlign:'center',

	titleAlign:'center',

	width : 200,

	listeners: {
		itemclick: function (me, node, index) {
			if(!node.isLeaf()){
				if(lastExpandNode == null){
					lastExpandNode = me.node.childNodes[0];
				}
				if(node == lastExpandNode){
					if(node.isExpanded()){
						node.collapse(true, function(){

						}, this)
					}else{
						node.expand(true,function(){

						},this)
					}
				}else{
					if (lastExpandNode.isExpanded()){
						lastExpandNode.collapse(true, function(){

						}, this)
					}

					node.expand(true,function(){

					},this)
				}
				lastExpandNode = node

			}

		},

		scope: this
	}
});
