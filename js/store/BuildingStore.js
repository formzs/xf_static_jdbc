// 建筑管理Store

Ext.define('TSMINFO.store.BuildingStore', {
	extend : 'Ext.data.Store',

	fields : ['id','name','location','pointx','pointy','buildYear','property','structure','area','type','firechief','firechiefPhone','floors','floorInfo','modelCode','heightOfBuilding','orgId','orgName'],

	autoLoad: true,

	proxy : {
		type : 'ajax',
		url : 'fire/buildingmnt/building/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}

});