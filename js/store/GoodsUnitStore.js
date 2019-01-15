/**
 * 商品管理 -- 商品单位
 */
Ext.define('TSMINFO.store.GoodsUnitStore', {
    extend : 'Ext.data.Store',

    fields: ['name', 'value'],

    data: [{
        name: '瓶',
        value: '瓶'
    }, {
        name: '罐',
        value: '罐'
    }, {
        name:'听',
        value: '听'
    }, {
        name:'盒',
        value: '盒'
    }, {
        name:'箱',
        value: '箱'
    }, {
        name:'条',
        value: '条'
    }, {
        name:'桶',
        value: '桶'
    }, {
        name:'袋',
        value: '袋'
    }, {
        name:'支',
        value: '支'
    }, {
        name:'包',
        value: '包'
    }]

});
