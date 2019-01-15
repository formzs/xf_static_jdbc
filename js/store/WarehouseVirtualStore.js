/**
 * 仓库管理 -- 是否虚拟仓库
 */
Ext.define('TSMINFO.store.WarehouseVirtualStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '虚拟仓库',
        value: 0
    }, {
        name: '实际仓库',
        value: 1
    }]

});
