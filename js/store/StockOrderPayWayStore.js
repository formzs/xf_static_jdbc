/**
 * 采购管理 -- 进货订单 -- 支付方式
 */
Ext.define('TSMINFO.store.StockOrderPayWayStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '现金',
        value: 1
    }, {
        name: '刷卡',
        value: 2
    }, {
        name: '支付宝',
        value: 3
    }, {
        name: '微信',
        value: 4
    }]

});