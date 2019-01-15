/**
 * 运营商管理 -- 提现方式
 */
Ext.define('TSMINFO.store.OperatorWithdrawWayStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '微信钱包',
        value: 1
    }, {
        name: '微信转账银行卡',
        value: 2
    }, {
        name: '支付宝钱包',
        value: 3
    }]

});
