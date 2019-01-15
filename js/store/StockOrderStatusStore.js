/**
 * 采购管理 -- 进货订单 -- 订单状态
 */
Ext.define('TSMINFO.store.StockOrderStatusStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '初始状态',
        value: 0
    }, {
        name: '已入库',
        value: 1
    }]

});