Ext.define('TSMINFO.model.ModuleTypeModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'value']
});
Ext.define('TSMINFO.store.ModuleTypeStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.ModuleTypeModel'
    ],

    model: 'TSMINFO.model.ModuleTypeModel',
    data: [{
        name: '普通模块',
        value: 'MODULE_COMMON_TYPE'
    }]
});
