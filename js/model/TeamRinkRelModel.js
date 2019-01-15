/**
 * 战队球场关联表 - model
 */
Ext.define('TSMINFO.model.TeamRinkRelModel', {
    extend : 'Ext.data.Model',
    fields : ['id','uuid','teamUuid','rinkUuid','orderNum','rinkTypeUUID','status','startDate','endDate','createdBy','createdAt','updatedBy','updatedAt']
});