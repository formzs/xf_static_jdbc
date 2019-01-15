// 设备管理--售货机开门状态Store

Ext.define('TSMINFO.store.MachineOpenStatusStore', {
	extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '故障 未开门',
        value: 0
    }, {
        name: '已开锁',
        value: 1
    }, {
        name: '已开门',
        value: 2
    }, {
        name: '已关门,可扫码开门',
        value: 3
    }]

});