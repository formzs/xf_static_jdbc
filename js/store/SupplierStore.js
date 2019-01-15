/**
 * 供应商管理 -- 供应商Store
 */
Ext.define('TSMINFO.model.SupplierModel', {
	extend : 'Ext.data.Model',
	fields : ['id','supplierName','phone','password','createTime','status']
});
Ext.define('TSMINFO.store.SupplierStore', {
	extend : 'Ext.data.Store',
	model : 'TSMINFO.model.SupplierModel',
	autoLoad: true,
	proxy : {
		type : 'ajax',
		url : 'wego/suppliermnt/supplier/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}
});