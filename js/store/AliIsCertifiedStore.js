/**
 * 支付宝用户信息 --实名认证
 */
Ext.define('TSMINFO.model.AliIsCertifiedModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'value']
});
Ext.define('TSMINFO.store.AliIsCertifiedStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.AliIsCertifiedModel'
    ],

    model: 'TSMINFO.model.AliIsCertifiedModel',
    data: [{
        name: '通过',
        value: 'T'
    }, {
        name: '未实名认证',
        value: 'f'
    }]
});
