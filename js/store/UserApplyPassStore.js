Ext.define('TSMINFO.store.UserApplyPassStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '未审核',
        value: 0
    }, {
        name: '通过',
        value: 1
    }, {
        name: '未通过',
        value: 2
    }]

});