/**
 * 采购管理 - 添加商品
 */
Ext.define('TSMINFO.model.AddInputGoodsModel', {
    extend: 'Ext.data.Model',
    fields: ['id', 'goodsName', 'goodsNum', 'buyingPrice', 'goodsTotal', 'stockNum']
});
Ext.define('TSMINFO.store.AddInputGoodsStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.AddInputGoodsModel'
    ],

    model: 'TSMINFO.model.AddInputGoodsModel',
    data: []
});