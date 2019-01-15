Ext.define('TSMINFO.store.EnableStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '启用',
        value: 1
    }, {
        name: '停用',
        value: 0
    }]

});