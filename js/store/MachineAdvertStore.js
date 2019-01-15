// 设备管理--售货机 广告Store

Ext.define('TSMINFO.store.MachineAdvertStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '有广告屏',
        value: 1
    }, {
        name: '无广告屏',
        value: 0
    }]

});