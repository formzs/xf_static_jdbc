/**
 * 商品管理-商品信息Store
 */
Ext.define('TSMINFO.model.GoodsSelectedModel', {
    extend: 'Ext.data.Model',
    fields : ['id','goodsName']
});
Ext.define('TSMINFO.store.GoodsSelectedStore', {
    extend: 'Ext.data.Store',
    model: 'TSMINFO.model.GoodsSelectedModel',
    data:[]
});