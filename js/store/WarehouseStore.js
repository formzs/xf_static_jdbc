/**
 * 仓库管理 -- 仓库Store
 */
Ext.define('TSMINFO.model.WarehouseModel', {
	extend : 'Ext.data.Model',
	fields : ['id','warehouseNo','warehouseName','storekeeperId','storekeeper','address','remark']
});
Ext.define('TSMINFO.store.WarehouseStore', {
	extend : 'Ext.data.Store',
	model : 'TSMINFO.model.WarehouseModel',
	autoLoad: true,
	proxy : {
		type : 'ajax',
		url : 'wego/warehousemnt/warehouse/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}
});