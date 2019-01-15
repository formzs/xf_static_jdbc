/**
 * 售货机网络状态
 */
Ext.define('TSMINFO.store.MachineNetworkStatusStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '25%',
        value: '1'
    }, {
        name: '50%',
        value: '2'
    }, {
        name: '75%',
        value: '3'
    }, {
        name: '100%',
        value: '4'
    }]

});