/**
 * 运营商管理 -- 交易流水
 */
Ext.define('TSMINFO.store.OperatorPayOrderStatus', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '初始状态',
        value: 0
    }, {
        name: '已完成',
        value: 2
    }]

});