// 餐馆管理 -- 菜品管理Store

Ext.define('TSMINFO.store.FoodStore', {
	extend : 'Ext.data.Store',

	fields : ['id','foodShopId','foodCategoryId','foodName','pic','picUrl','price','unit','remark','orderNum'],

	autoLoad: true,

	proxy : {
		type : 'ajax',
		url : 'wego/eatery/food/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}

});