Ext.define('TSMINFO.store.ChannelStatusStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.StatusModel'
    ],

    model: 'TSMINFO.model.StatusModel',
    data: [{
        name: '停用',
        value: '0'
    }, {
        name: '空闲',
        value: '1'
    }, {
        name: '有货',
        value: '2'
    }]
});
