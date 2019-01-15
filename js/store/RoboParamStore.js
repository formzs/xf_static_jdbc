Ext.define('TSMINFO.model.RoboParamModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'value']
});
Ext.define('TSMINFO.store.RoboParamStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.RoboParamModel'
    ],

    model: 'TSMINFO.model.RoboParamModel',
    data: [{
        name: '启用',
        value: true
    }, {
        name: '停止',
        value: false
    }]
});
