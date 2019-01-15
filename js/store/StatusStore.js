Ext.define('TSMINFO.store.StatusStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.StatusModel'
    ],

    model: 'TSMINFO.model.StatusModel',
    data: [{
        name: '启用',
        value: 'STATUS_ENABLE'
    }, {
        name: '停用',
        value: 'STATUS_DISABLE'
    }]
});
