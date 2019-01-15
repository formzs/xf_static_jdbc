/**
 * 仓库管理 -- 城市中心仓库Store
 */
Ext.define('TSMINFO.model.CityWarehouseModel', {
	extend : 'Ext.data.Model',
	fields : ['id','operatorId','warehouseNo','warehouseName','cityName','virtual']
});
Ext.define('TSMINFO.store.CityWarehouseStore', {
	extend : 'Ext.data.Store',
	model : 'TSMINFO.model.CityWarehouseModel',
	autoLoad: true,
	proxy : {
		type : 'ajax',
		url : 'wego/warehousemnt/citywarehouse/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}
});