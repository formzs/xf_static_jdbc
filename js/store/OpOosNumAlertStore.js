/**
 * 运营商售货机商品缺货提醒
 */
Ext.define('TSMINFO.store.OpOosNumAlertStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '按百分比提醒',
        value: '1'
    }, {
        name: '按数量提醒',
        value: '2'
    }]

});