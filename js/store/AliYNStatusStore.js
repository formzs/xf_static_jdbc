/**
 * 支付宝用户信息 --是否
 */
Ext.define('TSMINFO.model.AliYNStatusModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'value']
});
Ext.define('TSMINFO.store.AliYNStatusStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.AliYNStatusModel'
    ],

    model: 'TSMINFO.model.AliYNStatusModel',
    data: [{
        name: '是',
        value: 'T'
    }, {
        name: '不是',
        value: 'F'
    }]
});