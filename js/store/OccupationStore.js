// 职业Store

Ext.define('TSMINFO.store.OccupationStore', {
	extend : 'Ext.data.Store',

	fields : ['id','occName','orderNo'],

	autoLoad: true,

	proxy : {
		type : 'ajax',
		url : 'wego/dictmnt/occupation/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}

});