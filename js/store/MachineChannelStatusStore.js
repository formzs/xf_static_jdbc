/**
 * 售货机管理 -- 货道 -- 状态(启用/停用)
 */
Ext.define('TSMINFO.store.MachineChannelStatusStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '启用',
        value: "1"
    }, {
        name: '停用',
        value: "0"
    }, {
        name: '故障',
        value: "-1"
    }]

});
