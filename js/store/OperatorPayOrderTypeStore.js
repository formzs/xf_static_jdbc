/**
 * 运营商管理 -- 交易累心
 */
Ext.define('TSMINFO.store.OperatorPayOrderTypeStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '充值',
        value: 0
    }, {
        name: '提现',
        value: 1
    }]

});