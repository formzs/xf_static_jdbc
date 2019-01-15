/**
 * 售货机管理 -- 售货机 Dto
 */

Ext.define('TSMINFO.store.SelfPaymentDtoStore', {
    extend : 'Ext.data.Store',

    fields : ['cvsNo','cvsName'],

    autoLoad: true,

    proxy : {
        type : 'ajax',
        url : 'wego/cvs/selfpayment/dto/list',
        actionMethods : 'POST',
        reader : {
            root : 'data',
            type : 'json'
        }
    }

});