//  应急开门开关 -- 要开启的门

Ext.define('TSMINFO.store.CvsOpenDoorStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '所有门',
        value: '0'
    }, {
        name: '1号门',
        value: '1'
    }, {
        name: '2号门',
        value: '2'
    }, {
        name:'3号门',
        value: '3'
    }, {
        name:'4号门',
        value: '4'
    }]

});