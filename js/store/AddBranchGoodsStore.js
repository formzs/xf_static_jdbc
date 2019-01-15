/**
 * 采购管理 - 选择总库中的商品
 */
Ext.define('TSMINFO.model.AddBranchGoodsModel', {
    extend: 'Ext.data.Model',
    fields : ['goodsId', 'goodsName', 'goodsNum', 'purchasePrice', 'totalPrice', 'stockNum']
});
Ext.define('TSMINFO.store.AddBranchGoodsStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.AddBranchGoodsModel'
    ],

    model: 'TSMINFO.model.AddBranchGoodsModel',
    data: []
});