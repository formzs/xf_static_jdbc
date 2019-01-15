

/** 入口 * */

Ext.Loader.setConfig({
	enabled : true
});

Ext.BLANK_IMAGE_URL = "extjs-4.1.1/resources/themes/images/default/tree/s.gif";

Ext.application({
	name : 'TSMINFO',
	appFolder : 'js',
	requires : ['TSMINFO.view.LoginPanel'],
	showViewport : function() {

		Ext.create('Ext.container.Viewport', {
			layout : 'absolute',
			items : [{
				xtype:'tbtext',
				text:'<Text style="font-size: 40px;color: white">智慧消防管理平台</Text>',
				cls:'x-login-body-text'
			},{
				xtype:'login',
				cls:'x-login-panel',
				successFn : function() {
					window.location.href = '/api/system/index';
				}
			}]
		});
	},
	launch : function() {

		this.showViewport();
	}
});
