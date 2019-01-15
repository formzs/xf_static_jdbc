

/** 入口 * */
Ext.Loader.setConfig({
			enabled : true
		});
Ext.Loader.setPath('Ext.ux', 'js/ux');

Ext.BLANK_IMAGE_URL = "extjs-4.1.1/resources/themes/images/default/tree/s.gif";

Ext.application({
	name : 'TSMINFO',

	appFolder : 'js',

	requires : ['Ext.container.Viewport', 'TSMINFO.view.LoginPanel'],

	controllers : ['Main'],

	showViewport : function() {
		Ext.create('Ext.container.Viewport', {
			layout : 'border',
			items : [{
						region : 'north',
						xtype : 'northPanel'
					}, {
						region : 'west',
						xtype : 'westPanel'

					}, {
						region : 'center',
						xtype : 'centerPanel'
					//}, {
					//	region : 'south',
					//	cls : 'main-south',
					//	height : 30,
					//	html : '<font size="2px">IceBall</font>'
					}]
		});
	},
	launch : function() {
		Ext.get('loading').fadeOut({
					remove : true
				});
		// var win = Ext.widget('login', {
		// successFn : this.showViewport
		// });
		// win.show();
		this.showViewport();
	}
});
