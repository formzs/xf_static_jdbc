/**
 * 支付宝用户信息 --用户类型
 */
Ext.define('TSMINFO.model.AliUserTypeModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'value']
});
Ext.define('TSMINFO.store.AliUserTypeStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.AliUserTypeModel'
    ],

    model: 'TSMINFO.model.AliUserTypeModel',
    data: [{
        name: '公司账户',
        value: '1'
    }, {
        name: '个人账户',
        value: '2'
    }]
});
