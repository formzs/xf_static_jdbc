/**
 * 机器管理 -- 机器类型
 */
Ext.define('TSMINFO.store.DeviceTypeStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '售货机',
        value: 0
    }, {
        name: '便利店',
        value: 1
    }]

});