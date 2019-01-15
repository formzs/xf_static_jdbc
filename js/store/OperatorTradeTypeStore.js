/**
 * 运营商管理 -- 交易流水
 */
Ext.define('TSMINFO.store.OperatorTradeTypeStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '充值/转入',
        value: 0
    }, {
        name: '提现/转出',
        value: 1
    }, {
        name:'收入',
        value: 2
    }, {
        name: '进货/消费',
        value: 3
    }]

});
