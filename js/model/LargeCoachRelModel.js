/**
 * hockey-课程管理-大课教练关联表Model
 */
Ext.define('TSMINFO.model.LargeCoachRelModel', {
    extend : 'Ext.data.Model',
    fields : ['id','uuid','courseUuid','coachUuid','createdBy','createdAt','updatedBy','updatedAt']
});