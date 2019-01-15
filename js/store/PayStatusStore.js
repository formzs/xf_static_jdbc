/**
 * 采购管理 -- 进货订单 -- 支付状态
 */
Ext.define('TSMINFO.store.PayStatusStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '未付款',
        value: 0
    }, {
        name: '已付款',
        value: 1
    }]

});