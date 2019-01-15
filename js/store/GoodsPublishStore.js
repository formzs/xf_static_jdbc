// 设备管理-- 商品发布状态Store

Ext.define('TSMINFO.store.GoodsPublishStore', {
	extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '下架',
        value: '0'
    }, {
        name: '上架',
        value: '1'
    }]

});