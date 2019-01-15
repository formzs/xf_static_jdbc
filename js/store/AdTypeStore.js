Ext.define('TSMINFO.store.AdTypeStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '无链接',
        value: "0"
    }, {
        name: '网页',
        value: "1"
    }, {
        name: '视频',
        value: "2"
    }, {
        name: '直播',
        value: "3"
    }]

});