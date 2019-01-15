// 设备管理-- 上线状态Store

Ext.define('TSMINFO.store.PublishStatusStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '线下',
        value: 0
    }, {
        name: '线上',
        value: 1
    }]

});