/**
 * 用户管理 -- 意见反馈 -- 反馈类型
 */
Ext.define('TSMINFO.store.UserFeedbackTypeStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '功能异常',
        value: 1
    }, {
        name: '产品建议',
        value: 2
    }, {
        name: '其他问题',
        value: 3
    }]

});