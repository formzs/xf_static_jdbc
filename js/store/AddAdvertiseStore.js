/**
 * 广告管理 -- 添加广告
 */

Ext.define('TSMINFO.model.AddAdvertiseModel', {
    extend: 'Ext.data.Model',
    fields : ['advertiseId','adType','adTitle', 'adDuration', 'timeBuckets']
});
Ext.define('TSMINFO.store.AddAdvertiseStore', {
    extend: 'Ext.data.Store',

    requires: [
        'TSMINFO.model.AddAdvertiseModel'
    ],

    model: 'TSMINFO.model.AddAdvertiseModel',
    data: []
});