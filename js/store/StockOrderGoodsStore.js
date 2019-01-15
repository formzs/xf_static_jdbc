/**
 * 采购管理 - 采购订单商品
 */
Ext.define('TSMINFO.model.StockOrderGoodsModel', {
    extend: 'Ext.data.Model',
    fields : ['id','buyingPrice','goodsNum','goodsTotal','intro']
});
Ext.define('TSMINFO.store.StockOrderGoodsStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.StockOrderGoodsModel'
    ],

    model: 'TSMINFO.model.StockOrderGoodsModel',
    data: []
});