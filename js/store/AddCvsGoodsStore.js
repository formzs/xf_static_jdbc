/**
 * 便利店管理 -- 配置商品
 */
Ext.define('TSMINFO.model.AddCvsGoodsModel', {
    extend: 'Ext.data.Model',
    fields: ['goodsId', 'goodsName', 'goodsNum', 'goodsImgUrl', 'goodsTotal', 'currentNum', 'price', 'purchasePrice']
});
Ext.define('TSMINFO.store.AddCvsGoodsStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.AddCvsGoodsModel'
    ],

    model: 'TSMINFO.model.AddCvsGoodsModel',
    data: []
});