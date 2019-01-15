/**
 * 商品管理-商品小类Store
 */
Ext.define('TSMINFO.model.SmallCategoryModel', {
	extend : 'Ext.data.Model',
	fields : ['id','name','parentid','parentname','orderNum','depth']
});
Ext.define('TSMINFO.store.SmallCategoryStore', {
	extend : 'Ext.data.Store',
	model : 'TSMINFO.model.SmallCategoryModel',
	proxy : {
		type : 'ajax',
		url : 'wego/goodsmnt/category/small/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}
});