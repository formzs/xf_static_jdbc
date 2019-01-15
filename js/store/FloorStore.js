// 楼层管理Store

Ext.define('TSMINFO.store.FloorStore', {
	extend : 'Ext.data.Store',

	fields : ['id','buildingId','sort','floorName','url','status'],

	autoLoad: true,

	proxy : {
		type : 'ajax',
		url : 'fire/buildingmnt/floor/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}

});