/**
 * 支付宝用户信息 --是否是学生
 */
Ext.define('TSMINFO.model.AliIsStudentCertifiedModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'value']
});
Ext.define('TSMINFO.store.AliIsStudentCertifiedStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.AliIsStudentCertifiedModel'
    ],

    model: 'TSMINFO.model.AliIsStudentCertifiedModel',
    data: [{
        name: '是学生',
        value: 'T'
    }, {
        name: '不是学生',
        value: 'F'
    }]
});