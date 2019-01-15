/**
 * hockey-会员系统-战队队员Model
 */
Ext.define('TSMINFO.model.TeamPlayerRelModel', {
    extend : 'Ext.data.Model',
    fields : ['id','uuid','teamUuid','memberUuid','orderNum','playerTypeUUID','status','startDate','endDate','createdBy','createdAt','updatedBy','updatedAt']
});