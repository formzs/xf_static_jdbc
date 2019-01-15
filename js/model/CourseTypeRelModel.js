/**
 * hockey-课程管理-课程分类教练级别关联表Model
 */
Ext.define('TSMINFO.model.CourseTypeRelModel', {
    extend : 'Ext.data.Model',
    fields : ['id','uuid','courseTypeUuid','coachLevelUuid']
});
