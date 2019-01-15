Ext.define('TSMINFO.model.DefaultModel', {
			extend : 'Ext.data.Model',
			fields : ['name', 'value']
		});
Ext.define('TSMINFO.store.DefaultStore', {
			extend : 'Ext.data.Store',

	requires: [
		'TSMINFO.model.DefaultModel'
	],

	model : 'TSMINFO.model.DefaultModel',
			data : [{
						name : '是',
						value : 'STATUS_YES'
					}, {
						name : '否',
						value : 'STATUS_NO'
					}]
		});
