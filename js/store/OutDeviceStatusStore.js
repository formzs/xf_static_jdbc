Ext.define('TSMINFO.store.OutDeviceStatusStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.StatusModel'
    ],

    model: 'TSMINFO.model.StatusModel',
    data: [{
        name: '暂停服务',
        value: "0"
    }, {
        name: '运营中',
        value: "1"
    }]
});
