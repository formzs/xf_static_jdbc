/**
 * 商品管理 -- SPUStore
 */
Ext.define('TSMINFO.model.SpuModel', {
	extend : 'Ext.data.Model',
	fields : ['id','spuName','remark']
});
Ext.define('TSMINFO.store.SpuStore', {
	extend : 'Ext.data.Store',
	model : 'TSMINFO.model.SpuModel',
	autoLoad: true,
	proxy : {
		type : 'ajax',
		url : 'wego/goodsmnt/spu/list',
		actionMethods : 'POST',
		reader : {
			root : 'data',
			type : 'json'
		}
	}
});