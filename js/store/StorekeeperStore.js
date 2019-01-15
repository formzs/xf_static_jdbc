/**
 * 仓库管理 -- 仓管员Store
 */
Ext.define('TSMINFO.model.StorekeeperModel', {
	extend : 'Ext.data.Model',
	fields : ['id','storekeeperName','phone','createTime']
});
Ext.define('TSMINFO.store.StorekeeperStore', {
	extend : 'Ext.data.Store',
	model : 'TSMINFO.model.StorekeeperModel',
	autoLoad: true,
	proxy : {
		type : 'ajax',
		url : 'wego/warehousemnt/storekeeper/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}
});