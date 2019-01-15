// 运营管理-运营人员Store

Ext.define('TSMINFO.store.StaffStore', {
	extend : 'Ext.data.Store',

	fields : ['id','name','phone','password','avatar','createTime','token','status','operatorId'],

	autoLoad: true,

	proxy : {
		type : 'ajax',
		url : 'wego/operatormnt/staff/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}

});