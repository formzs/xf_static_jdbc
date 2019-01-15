Ext.define('TSMINFO.store.OrderStatusStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.StatusModel'
    ],

    model: 'TSMINFO.model.StatusModel',
    data: [{
        name: '未支付',
        value: 0
    }, {
        name: '已支付',
        value: 1
    },{
        name:'已完成',
        value: 2
    //},{
    //    name:'已取消',
    //    value: 3
    }]
});
