/**
 * 代理商分类-代理商分类Store
 */
Ext.define('TSMINFO.model.CategoryModel', {
	extend : 'Ext.data.Model',
	fields : ['id','categoryName']
});
Ext.define('TSMINFO.store.CategoryStore', {
	extend : 'Ext.data.Store',
	model : 'TSMINFO.model.CategoryModel',
	autoLoad: true,
	proxy : {
		type : 'ajax',
		url : 'wego/user/usercategory/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}
});