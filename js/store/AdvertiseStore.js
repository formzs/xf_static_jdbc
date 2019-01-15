/**
 * 广告管理 -- 广告Store
 */
Ext.define('TSMINFO.model.AdvertiseModel', {
	extend : 'Ext.data.Model',
	fields : ['id','adType','adTitle','adImgUrl','adUrl','orderNum','status', 'adDuration', 'operatorId']
});
Ext.define('TSMINFO.store.AdvertiseStore', {
	extend : 'Ext.data.Store',
	model : 'TSMINFO.model.AdvertiseModel',
	autoLoad: true,
	proxy : {
		type : 'ajax',
		url : 'wego/admnt/advertise/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}
});