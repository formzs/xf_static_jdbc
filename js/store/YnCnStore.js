Ext.define('TSMINFO.model.YnCnModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'value']
});
Ext.define('TSMINFO.store.YnCnStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.YnCnModel'
    ],

    model: 'TSMINFO.model.YnCnModel',
    data: [{
        name: '是',
        value: '是'
    }, {
        name: '否',
        value: '否'
    }]
});
