/**
 * 售货机信息 -- 配置商品 -- 选择商品Store
 */
Ext.define('TSMINFO.model.MachineGoodsSelectedModel', {
    extend: 'Ext.data.Model',
    fields: ['goodsId', 'goodsName', 'goodsPrice']
});
Ext.define('TSMINFO.store.MachineGoodsSelectedStore', {
    extend: 'Ext.data.Store',
    model: 'TSMINFO.model.MachineGoodsSelectedModel',
    data: []
});