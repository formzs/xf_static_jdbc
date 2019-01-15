// 设备管理--BindAliPushStore

Ext.define('TSMINFO.store.BindAliPushStore', {
	extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '未绑定',
        value: '0'
    }, {
        name: '绑定',
        value: '1'
    }, {
        name: '重新绑定',
        value: '2'
    }]

});