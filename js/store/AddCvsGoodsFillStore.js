/**
 * 便利店管理 -- 补货
 */
Ext.define('TSMINFO.model.AddCvsGoodsFillModel', {
    extend: 'Ext.data.Model',
    fields: ['goodsId', 'goodsName', 'goodsNum', 'goodsTotal', 'currentNum', 'needNum', 'actualFillNum']
});
Ext.define('TSMINFO.store.AddCvsGoodsFillStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.AddCvsGoodsFillModel'
    ],

    model: 'TSMINFO.model.AddCvsGoodsFillModel',
    data: []
});
