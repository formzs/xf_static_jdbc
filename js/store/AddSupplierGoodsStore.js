/**
 * 供应商管理 -- 添加供应商商品
 */
Ext.define('TSMINFO.model.AddSupplierGoodsModel', {
    extend: 'Ext.data.Model',
    fields : ['id','supplierId','supplier','goodsId','goods','supplyPrice']
});
Ext.define('TSMINFO.store.AddSupplierGoodsStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.AddSupplierGoodsModel'
    ],

    model: 'TSMINFO.model.AddSupplierGoodsModel',
    data: []
});