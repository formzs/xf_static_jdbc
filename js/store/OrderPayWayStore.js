Ext.define('TSMINFO.store.OrderPayWayStore', {
    extend: 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '支付宝支付',
        value: 1
    }, {
        name: '支付宝代扣',
        value: 2
    },{
        name:'微信支付',
        value: 3
    },{
        name:'微信代扣',
        value: 4
    }]
});
