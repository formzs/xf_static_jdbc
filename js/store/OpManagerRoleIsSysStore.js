/**
 * 运营商售货机商品缺货提醒
 */
Ext.define('TSMINFO.store.OpManagerRoleIsSysStore', {
    extend: 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '普通管理员',
        value: '0'
    }, {
        name: '系统超级管理员',
        value: '1'
    }]

});