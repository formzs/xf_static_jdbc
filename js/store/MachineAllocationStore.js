/**
 * WeGo -- 货道配置 -- 货位
 */
Ext.define('TSMINFO.model.MachineAllocationModel', {
    extend: 'Ext.data.Model',
    fields: ['data', 'allocationNo','allocationCode']
});
Ext.define('TSMINFO.store.MachineAllocationStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.MachineAllocationModel'
    ],

    model: 'TSMINFO.model.MachineAllocationModel',
    data: []
});
