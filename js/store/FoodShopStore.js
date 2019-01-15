// 餐馆管理 -- 门店管理Store

Ext.define('TSMINFO.store.FoodShopStore', {
	extend : 'Ext.data.Store',

	fields : ['id','shopName','shopAddress'],

	autoLoad: true,

	proxy : {
		type : 'ajax',
		url : 'wego/eatery/foodshop/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}

});