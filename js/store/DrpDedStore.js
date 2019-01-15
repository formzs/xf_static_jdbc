/**
 * 提成设置 -- 分销提成
 */
Ext.define('TSMINFO.store.DrpDedStore', {
    extend: 'Ext.data.Store',

    fields: ['levelCode', 'levelName'],

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'wego/ded/drpded/list',
        actionMethods: 'POST',
        reader: {
            root: 'data',
            type: 'json'
        }
    }

});