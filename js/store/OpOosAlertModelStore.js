/**
 * 运营商 商品缺货提醒方式
 */
Ext.define('TSMINFO.store.OpOosAlertModelStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '微信服务通知',
        value: '1'
    }, {
        name: '短信',
        value: '2'
    }]

});