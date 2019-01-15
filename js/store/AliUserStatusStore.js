/**
 * 生活号用户信息 --用户类型
 */
Ext.define('TSMINFO.model.AliUserStatusModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'value']
});
Ext.define('TSMINFO.store.AliUserStatusStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.AliUserStatusModel'
    ],

    model: 'TSMINFO.model.AliUserStatusModel',
    data: [{
        name: '快速注册用户',
        value: 'Q'
    }, {
        name: '已认证用户',
        value: 'T'
    }, {
        name: '被冻结账户',
        value: 'B'
    }, {
        name: '已注册，未激活的账户',
        value: 'W'
    }]
});