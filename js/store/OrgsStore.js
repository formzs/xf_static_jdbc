// 单位管理Store

Ext.define('TSMINFO.store.OrgsStore', {
	extend : 'Ext.data.Store',

	fields : ['id','name','location','telephone','staffnum','corporation','property','firemenName','firemenTel','status','pointx','pointy','parentId','imgUrl','createTime'],

	autoLoad: true,

	proxy : {
		type : 'ajax',
		url : 'fire/orgmnt/orgs/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}

});