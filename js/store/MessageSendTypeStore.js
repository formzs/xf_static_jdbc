Ext.define('TSMINFO.model.MessageSendTypeModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'value']
});
Ext.define('TSMINFO.store.MessageSendTypeStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.MessageSendTypeModel'
    ],

    model: 'TSMINFO.model.MessageSendTypeModel',
    data: [{
        name: '已发送',
        value: 'send'
    }, {
        name: '未发送',
        value: 'unsend'
    }]
});
