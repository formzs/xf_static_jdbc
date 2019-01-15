Ext.define('TSMINFO.model.AuditStatusModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'value']
});
Ext.define('TSMINFO.store.AuditStatusStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.AuditStatusModel'
    ],

    model: 'TSMINFO.model.AuditStatusModel',
    data: [{
        name: '未提交认证',
        value: 0
    }, {
        name: '待审核',
        value: 1
    }, {
        name: '未通过',
        value: 2
    }, {
        name: '通过',
        value: 3
    }]
});
