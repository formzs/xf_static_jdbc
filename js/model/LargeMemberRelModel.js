/**
 * hockey-课程管理-大课学员关联表Model
 */
Ext.define('TSMINFO.model.LargeMemberRelModel', {
    extend : 'Ext.data.Model',
    fields : ['id','uuid','courseUuid','memberUuid','createdBy','createdAt','updatedBy','updatedAt']
});