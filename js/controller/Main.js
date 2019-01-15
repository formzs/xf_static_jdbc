Ext.define('TSMINFO.controller.Main', {

	extend : 'Ext.app.Controller',

	stores : ['MenuStore'],

	views : ['CenterPanel', 'NorthPanel', 'WestPanel'],

	refs : [{
		ref : 'centerPanel',
		selector : 'centerPanel'
	}, {
		ref : 'northPanel',
		selector : 'northPanel'
	}, {
		ref : 'westPanel',
		selector : 'westPanel'
	}],

	panelPrefix : 'tab-panel-',

	init : function() {
		this.control({
			'viewport westPanel' : {
				'itemclick' : function(me, record, item, index,
					e) {
					if (!record.isLeaf()) {
						return;
					}
					this.setActivePanel(record);
				},
				afterrender : function() {
				}
			}
		});
	},
	setActivePanel : function(record) {
		var className = record.raw.moduleUrl || record.raw.view;
		var tab = this.getCenterPanel();
		var currtabid = this.panelPrefix + '-' + className;
		var panel = tab.getComponent(currtabid);
		if (panel == null) {
			panel = Ext.create(className, {
				id : currtabid,
				title : record.raw.moduleName
				|| record.raw.text,
				closable : true
			});
			tab.add(panel);
		}
		tab.setActiveTab(panel)
	}

});
