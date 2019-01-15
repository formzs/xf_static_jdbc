/**
 * 采购管理 - 添加采购订单商品
 */
Ext.define('TSMINFO.model.AddStockGoodsModel', {
    extend: 'Ext.data.Model',
    fields : ['id','buyingPrice','goodsNum','goodsTotal','intro','goodsName', 'assistPrice', 'unitConversion', 'goodsAssistNum']
});
Ext.define('TSMINFO.store.AddStockGoodsStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.AddStockGoodsModel'
    ],

    model: 'TSMINFO.model.AddStockGoodsModel',
    data: [],
    //groupField: 'group'
});