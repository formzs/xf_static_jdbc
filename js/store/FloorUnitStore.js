// 楼层单元管理Store

Ext.define('TSMINFO.store.FloorUnitStore', {
	extend : 'Ext.data.Store',

	fields : ['id','floorId','floorUnitName','status'],

	autoLoad: true,

	proxy : {
		type : 'ajax',
		url : 'fire/buildingmnt/floorunit/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}

});