// 设备管理-- 售货机发布状态Store

Ext.define('TSMINFO.store.MachinePublishStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '未投放',
        value: 0
    }, {
        name: '已投放',
        value: 1
    }]

});