/**
 * 创建空字段
 */
Ext.define('TSMINFO.model.BusinessCloumnModel', {
    extend : 'Ext.data.Model',
    fields:['uuid','tableId','tableUuid','cloumnName','typeUuid','displayType','info','cnDisplay','enDisplay','orderNum','createdBy','createdAt','updatedBy','updatedAt']
});