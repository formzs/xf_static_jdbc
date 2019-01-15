Ext.define('TSMINFO.model.UserTypeModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'value']
});
Ext.define('TSMINFO.store.UserTypeStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.UserTypeModel'
    ],

    model: 'TSMINFO.model.UserTypeModel',
    data: [{
        name: '普通用户',
        value: 'USER_COMMON_TYPE'
    }, {
        name: '一般用户',
        value: 'USER_GENERAL_TYPE'
    }]
});
