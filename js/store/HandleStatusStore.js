/**
 * 处理状态
 */
Ext.define('TSMINFO.model.HandleStatusModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'value', 'price']
});
Ext.define('TSMINFO.store.HandleStatusStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.HandleStatusModel'
    ],

    model: 'TSMINFO.model.HandleStatusModel',
    data: [{
        name: '等待处理',
        value: 0
    }, {
        name: '处理中',
        value: 1
    }, {
        name: '处理完成',
        value: 2
    }]
});