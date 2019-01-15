/**
 * 运营管理-运营商Store
 */
Ext.define('TSMINFO.model.OperatorModel', {
	extend : 'Ext.data.Model',
	fields : ['id','operatorName','phone','password','createTime','status','machineNos']
});
Ext.define('TSMINFO.store.OperatorStore', {
	extend : 'Ext.data.Store',
	model : 'TSMINFO.model.OperatorModel',
	autoLoad: true,
	proxy : {
		type : 'ajax',
		url : 'wego/operatormnt/operator/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}
});