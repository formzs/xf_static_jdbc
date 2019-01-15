Ext.define('TSMINFO.model.FillGoodsModel', {
    extend: 'Ext.data.Model',
    fields : ['id','outdeviceId','machineNo','channelNo','fillGoodsNum','goodsId','goods','goodsName','categoryName',  'price', 'imgUrl', 'thickness', 'channelNum', 'remark']
});
Ext.define('TSMINFO.store.FillGoodsStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.FillGoodsModel'
    ],

    model: 'TSMINFO.model.FillGoodsModel',
    data: []
});