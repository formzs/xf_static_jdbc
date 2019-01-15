// 餐馆管理 -- 菜品分类Store

Ext.define('TSMINFO.store.FoodCategoryStore', {
	extend : 'Ext.data.Store',

	fields : ['id','foodShopId','categoryName','orderNum'],

	autoLoad: true,

	proxy : {
		type : 'ajax',
		url : 'wego/eatery/foodcategory/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}

});