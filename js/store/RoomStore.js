// 房间管理Store

Ext.define('TSMINFO.store.RoomStore', {
	extend : 'Ext.data.Store',

	fields : ['id','floorId','roomNumber','floorUnitId','floorUnitName','sort','status'],

	autoLoad: true,

	proxy : {
		type : 'ajax',
		url : 'fire/buildingmnt/room/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}

});