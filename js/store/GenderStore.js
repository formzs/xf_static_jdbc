/**
 * 支付宝用户信息 --性别
 */
Ext.define('TSMINFO.model.GenderModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'value']
});
Ext.define('TSMINFO.store.GenderStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.GenderModel'
    ],

    model: 'TSMINFO.model.GenderModel',
    data: [{
        name: '男',
        value: 'm'
    }, {
        name: '女',
        value: 'f'
    }]
});