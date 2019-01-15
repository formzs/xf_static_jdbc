//
/**
 * WeGo -- 货道配置 -- 货位
 */
Ext.define('TSMINFO.model.MachineAllAllocationModel', {
    extend: 'Ext.data.Model',
    fields: ['data', 'allocationNo','allocationCode']
});
Ext.define('TSMINFO.store.MachineAllAllocationStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.MachineAllAllocationModel'
    ],

    model: 'TSMINFO.model.MachineAllAllocationModel',
    data: []
});
