/**
 * 售货机管理 -- 售货机 Dto
 */

Ext.define('TSMINFO.store.MachineDtoStore', {
    extend : 'Ext.data.Store',

    fields : ['id','machineName','machineNo'],

    autoLoad: true,

    proxy : {
        type : 'ajax',
        url : 'wego/devicemnt/machine/dto/list',
        actionMethods : 'POST',
        reader : {
            root : 'data',
            type : 'json'
        }
    }

});