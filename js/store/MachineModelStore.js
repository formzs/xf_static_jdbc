// 设备管理--售货机型号Store

Ext.define('TSMINFO.store.MachineModelStore', {
	extend : 'Ext.data.Store',

	fields : ['id','modelCode','modelName','orderNum','remark','machineModelSeriesId','machineModelSeries','doorDefaultNum','floorDefaultNum','floorAllNum','channelDefaultNum','channleAllNum','allocationDefaultNum','allocationAllNum'],

	autoLoad: true,

	proxy : {
		type : 'ajax',
		url : 'wego/devicemnt/machinemodel/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}

});