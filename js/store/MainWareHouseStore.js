/**
 * 仓库管理 -- 主仓库Store
 */
Ext.define('TSMINFO.model.MainWareHouseModel', {
	extend : 'Ext.data.Model',
	fields : ['id','operatorId','warehouseNo','warehouseName','address','remark','publish']
});
Ext.define('TSMINFO.store.MainWareHouseStore', {
	extend : 'Ext.data.Store',
	model : 'TSMINFO.model.MainWareHouseModel',
	autoLoad: true,
	proxy : {
		type : 'ajax',
		url : 'wego/warehousemnt/mainwarehouse/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}
});