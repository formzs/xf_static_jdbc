Ext.define('TSMINFO.model.AuditModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'value']
});
Ext.define('TSMINFO.store.AuditStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.AuditModel'
    ],

    model: 'TSMINFO.model.AuditModel',
    data: [{
        name: '未通过',
        value: 0
    }, {
        name: '通过',
        value: 1
    }, {
        name: '已拒绝',
        value: 2
    }]
});
