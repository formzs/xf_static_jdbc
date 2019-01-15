// 设备管理--售货机 拿出商品是否可以放回 Store

Ext.define('TSMINFO.store.MachineGoodsPutBackStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '允许放回',
        value: 0
    }, {
        name: '不允许放回',
        value: 1
    }]

});