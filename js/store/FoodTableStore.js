// 餐馆管理 -- 餐桌管理Store

Ext.define('TSMINFO.store.FoodTableStore', {
	extend : 'Ext.data.Store',

	fields : ['id','foodShopId','tableName','qr','qrUrl','orderNum'],

	autoLoad: true,

	proxy : {
		type : 'ajax',
		url : 'wego/eatery/foodtable/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}

});