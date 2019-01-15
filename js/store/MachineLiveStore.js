// 设备管理--售货机 直播Store

Ext.define('TSMINFO.store.MachineLiveStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '可直播',
        value: 1
    }, {
        name: '不可直播',
        value: 0
    }]

});