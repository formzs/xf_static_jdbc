/**
 * 创建空字段
 */
Ext.define('TSMINFO.model.TeamCoachRelModel', {
    extend : 'Ext.data.Model',
    fields:['id', 'uuid', 'teamUuid', 'coachUuid', 'orderNum','coachTypeUUID', 'status', 'startDate', 'endDate', 'createdBy', 'createdAt', 'updatedBy', 'updatedAt']
});