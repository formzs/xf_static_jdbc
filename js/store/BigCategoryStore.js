/**
 * 商品管理-商品大类Store
 */
Ext.define('TSMINFO.store.BigCategoryStore', {
    extend: 'Ext.data.Store',

    fields: ['id', 'name'],

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'wego/goodsmnt/category/list',
        actionMethods: 'POST',
        reader: {
            root: 'data',
            type: 'json'
        }
    }

});