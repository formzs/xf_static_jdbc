Ext.define('TSMINFO.model.UserBindStatusModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'value']
});
Ext.define('TSMINFO.store.UserBindStatusStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.UserBindStatusModel'
    ],

    model: 'TSMINFO.model.UserBindStatusModel',
    data: [{
        name: '已绑定',
        value: true
    }, {
        name: '未绑定',
        value: false
    }]
});