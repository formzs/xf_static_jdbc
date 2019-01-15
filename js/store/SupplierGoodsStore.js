/**
 * 供应商管理 -- 供应商商品Store
 */
Ext.define('TSMINFO.model.SupplierGoodsModel', {
	extend : 'Ext.data.Model',
	fields : ['id','supplierId','supplier','goodsId','goods','supplyPrice']
});
Ext.define('TSMINFO.store.SupplierGoodsStore', {
	extend : 'Ext.data.Store',
	model : 'TSMINFO.model.SupplierGoodsModel',
	autoLoad: true,
	proxy : {
		type : 'ajax',
		url : 'wego/suppliermnt/suppliergoods/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}
});