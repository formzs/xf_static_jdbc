// 运营商 库存功能

Ext.define('TSMINFO.store.OperatorStockStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '停用',
        value: '0'
    }, {
        name: '启用',
        value: '1'
    }]

});