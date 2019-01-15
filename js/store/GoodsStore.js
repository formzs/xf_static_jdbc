/**
 * 商品管理-商品信息Store
 */
Ext.define('TSMINFO.model.GoodsModel', {
    extend: 'Ext.data.Model',
    fields : ['id','goodsName']
});
Ext.define('TSMINFO.store.GoodsStore', {
    extend: 'Ext.data.Store',
    model: 'TSMINFO.model.GoodsModel',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        async:false,
        url: 'wego/goodsmnt/goods/list',
        actionMethods: 'POST',
        reader: {
            root: 'data',
            type: 'json'
        }
    }
});