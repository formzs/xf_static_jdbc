Ext.define('TSMINFO.model.WithholdStatusModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'value']
});
Ext.define('TSMINFO.store.WithholdStatusStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.WithholdStatusModel'
    ],

    model: 'TSMINFO.model.WithholdStatusModel',
    data: [{
        name: '已开通',
        value: true
    }, {
        name: '未开通',
        value: false
    }]
});