// 设备管理--售货机Store

Ext.define('TSMINFO.store.MachineStatusStore', {
	extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '暂停服务',
        value: '0'
    }, {
        name: '正常运行',
        value: '1'
    }, {
        name:'升级维护',
        value: '2'
    }]

});