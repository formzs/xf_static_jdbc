// 设备管理Store

Ext.define('TSMINFO.store.DeviceStore', {
	extend : 'Ext.data.Store',

	fields : ['id','name','location','mac','createTime','startDate','lifeMonth','orgId','orgName','buildingId','buildingName','pointx','pointy','floorId','floorNumber','roomId','roomNumber','deviceTypeId','deviceTypeName','xrate','yrate','height','fheight','cheight','fireChiefPhone','fireChief','controllerId','maintenanceUnit','maintenanceuser','maintenancephone','firm','productdate','idcode','deviceurl','propertyvalue','status'],

	autoLoad: true,

	proxy : {
		type : 'ajax',
		url : 'fire/devicemnt/device/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}

});