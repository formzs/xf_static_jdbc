/**
 * 设备管理-货道管理Store
 */
Ext.define('TSMINFO.model.ChannelModel', {
	extend : 'Ext.data.Model',
	fields : ['id','no','code','status','goods','goodsNum']
});
Ext.define('TSMINFO.store.ChannelStore', {
	extend : 'Ext.data.Store',
	model : 'TSMINFO.model.ChannelModel',
	autoLoad: true,
	proxy : {
		type : 'ajax',
		url : 'wego/devicemnt/channel/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}
});