Ext.define('TSMINFO.model.SaleGoodsModel', {
    extend: 'Ext.data.Model',
    fields : ['id','name','categoryId','categoryName','category','price','imgUrl','thickness','channelNum','remark','saleGoodsNum','outdeviceId','machineNo','channelNo','goodsNum','total','sameSaleGoodsNum','sameTotal']
});
Ext.define('TSMINFO.store.SaleGoodsStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.SaleGoodsModel'
    ],

    model: 'TSMINFO.model.SaleGoodsModel',
    data: []
});
