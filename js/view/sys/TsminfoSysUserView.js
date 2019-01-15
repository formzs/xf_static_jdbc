Ext.define('TSMINFO.view.sys.TsminfoSysUserView', {

	extend: 'Ext.Panel',

	alias: 'widget.tsminfoSysUserView',

	layout: 'border',

	requires: [
		'Ext.button.Button',
		'Ext.data.Store',
		'Ext.data.proxy.Ajax',
		'Ext.data.reader.Json',
		'Ext.form.Panel',
		'Ext.form.field.ComboBox',
		'Ext.form.field.Date',
		'Ext.form.field.Text',
		'Ext.grid.Panel',
		'Ext.grid.RowNumberer',
		'Ext.layout.container.Border',
		'Ext.layout.container.Fit',
		'Ext.layout.container.HBox',
		'Ext.selection.CheckboxModel',
		'Ext.toolbar.Separator',
		'Ext.window.Window',
		'TSMINFO.store.StatusStore',
		'TSMINFO.ux.form.ItemSelector'
	],

	initComponent: function () {
		this.items = [this.initFormPanel(), {
			layout: 'fit',
			region: 'center',
			tbar: this.initTbar(),
			border: false,
			items: [this.initGridPanel()]
		}];
		this.callParent();

	},
	initTbar: function () {
		return Ext.create('Ext.toolbar.Toolbar', {
			height: PANEL_TOOLBAR_HEIGHT,
			cls: 't-panel-toolbar',
			items: [{
				text: '新增',
				height:TOOLBAR_BTN_HEIGHT,
				style:'margin:0 8px;',
				cls:'t-panel-toolbar-btn',
				handler: this.addWin,
				scope: this
			}, {
				text: '修改',
				height:TOOLBAR_BTN_HEIGHT,
				style:'margin-right:8px;',
				cls:'t-panel-toolbar-btn',
				handler: this.editWin,
				scope: this
			}, '-', {
				text: '启用',
				height:TOOLBAR_BTN_HEIGHT,
				style:'margin:0 8px;',
				cls:'t-panel-toolbar-btn',
				handler: this.start,
				scope: this
			}, {
				text: '停用',
				height:TOOLBAR_BTN_HEIGHT,
				style:'margin-right:8px;',
				cls:'t-panel-toolbar-btn',
				handler: this.stop,
				scope: this
			}, '-', {
				text: '重置密码',
				height:TOOLBAR_BTN_HEIGHT,
				style:'margin:0 8px;',
				cls:'t-panel-toolbar-btn',
				handler: this.reset,
				scope: this
			}, {
				text: '分配角色',
				height:TOOLBAR_BTN_HEIGHT,
				style:'margin-right:8px;',
				cls:'t-panel-toolbar-btn',
				handler: this.distributeRole,
				scope: this
			}]
		});
	},
	initFormPanel: function () {
		return this.form = Ext.create('Ext.form.Panel', {
			labelWidth: 100,
			height: 60,
			region: 'north',
			layout: {
				type: 'hbox',
				align: 'middle'
			},
			defaults: {
				border: false,
				flex: 1
			},
			cls: 'clear-tlr-border',
			fieldDefaults: {
				labelAlign: 'right',
				labelWidth: 85,
				width: 220
			},
			items: [{
				items: [{
					xtype: 'textfield',
					name: 'userAccount',
					fieldLabel: "用户账号"
				}]
			}, {
				items: [{
					xtype: 'combobox',
					name: 'status',
					hiddenName: 'status',
					fieldLabel: "状态",
					editable: false,
					store: Ext
							.create('TSMINFO.store.StatusStore'),
					displayField: 'name',
					valueField: 'value',
					queryMode: 'local'
				}]
			}, {
				layout: {
					type: 'hbox',
					//padding : '5',
					align: 'middle'
				},
				defaults: {
					margins: '0 5 0 0',
					height:30
				},
				items: [{
					iconCls: 'search-handler',
					xtype: 'button',
					text: '查询',
					cls: 't-panel-top-form-btn',
					width: 80,
					scope: this,
					handler: this.searchData
				}, {
					xtype: 'button',
					width: 80,
					text: '重置',
					cls: 't-panel-top-form-btn',
					scope: this,
					handler: function () {
						this.form.getForm().reset();
					}
				}]
			}]
		});
	},
	initGridPanel: function () {
		var selModel = Ext.create('Ext.selection.CheckboxModel');
		var store = Ext.create('Ext.data.Store', {
			fields: ['id', 'userAccount', 'userName', 'userStartDate',
				'userEndDate', 'userType', 'userPassword',
				'employeeCode', 'status', 'remark'],
			proxy: {
				type: 'ajax',
				url: '/api/system/sysuser/list',
				actionMethods: 'POST',
				reader: {
					type: 'json',
					root: 'data',
					totalProperty: 'totalCount'
				}
			}
		})
		var bbar = TsmFunc.createPagingToolbar(store);

		this.grid = Ext.create('Ext.grid.Panel', {
			region: 'center',
			border: false,
			selModel: selModel,
			store: store,
			bbar: bbar,
			columnLines: true,
			loadMask: true,
			columns: [Ext.create('Ext.grid.RowNumberer'), {
				text: '用户名称(中文名称)',
				flex: 1,
				dataIndex: 'userName',
				align: 'center'
			}, {
				header: '用户账号',
				flex: 1,
				dataIndex: 'userAccount',
				align: 'center'
			}, {
				text: '创建日期',
				flex: 1,
				dataIndex: 'userStartDate',
				align: 'center'
			}, {
				header: '有效期',
				flex: 1,
				dataIndex: 'userEndDate',
				align: 'center'
			}, {
				text: '状态',
				flex: 1,
				dataIndex: 'status',
				align: 'center',
				renderer: TsmFunc.rendererStore(Ext
						.create('TSMINFO.store.StatusStore'))
			}]
		});
		this.grid.on('render', TsmFunc.storeLoad, this, {
			delay: 1,
			single: true
		});
		return this.grid;
	},
	createWindow: function (cfg) {
		var form = Ext.create('Ext.form.Panel', {
			border: false,
			bodyStyle: 'padding:10px 0',
			layout: {
				type: 'hbox',
				align: 'top'
			},
			defaults: {
				border: false,
				flex: 1
			},
			fieldDefaults: {
				labelAlign: 'right',
				labelWidth: 70,
				width: 250
			},
			items: [{
				items: [{
					xtype: 'textfield',
					name: 'userName',
					fieldLabel: "用户名称",
					allowBlank: false
				}, {
					xtype: 'textfield',
					name: 'userPassword',
					fieldLabel: "用户密码",
					inputType: 'password',
					allowBlank: false
				}]
			}, {
				items: [{
					xtype: 'textfield',
					name: 'userAccount',
					fieldLabel: "用户账号",
					allowBlank: false
				}, {
					xtype: 'datefield',
					name: 'userEndDate',
					fieldLabel: "有效期",
					format: 'Y-m-d',
					editable: false,
					value: '2018-12-31'
				}]
			}]
		})
		var win = Ext.create('Ext.Window', {
			title: cfg.title,
			width: 550,
			closable:false,
			modal: true,
			layout: 'fit',
			buttons: [{
				text: '确定',
				width:80,
				height:30,
				handler: function () {
					cfg.callback.call(this, form, win)
				},
				scope: this
			}, {
				text: '关闭',
				width:80,
				height:30,
				handler: function () {
					win.close();
				}
			}],
			items: [form]
		})
		return win;
	},
	addWin: function () {
		var win = this.createWindow({
			title: '新增用户',
			callback: function (form) {
				if (form.getForm().isValid()) {
					form.getForm().submit({
						url: '/api/system/sysuser/add',
						waitTitle: '提示',
						waitMsg: '正在提交数据, 请稍侯 ...',
						scope: this,
						success: function () {
							this.grid.getStore().reload();
							win.close();
						},
						failure: function (f, action) {
							TsmFunc.showError(action.result);
						}
					});
				}
			}
		});
		win.show();
	},

	editWin: function () {
		var rows = this.grid.getSelectionModel().getSelection();
		if (rows.length > 1) {
			TsmFunc.showLocalError('只能选择一条信息!');
			return;
		}
		if (rows.length == 0) {
			TsmFunc.showLocalError('请选择一条信息!');
			return;
		}
		var form = Ext.create('Ext.form.Panel', {
			border: false,
			bodyStyle: 'padding:10px 0',
			layout: {
				type: 'hbox',
				align: 'top'
			},
			defaults: {
				border: false,
				flex: 1
			},
			fieldDefaults: {
				labelAlign: 'right',
				labelWidth: 70,
				width: 250
			},
			items: [{
				items: [{
					xtype: 'textfield',
					name: 'userName',
					fieldLabel: "用户名称",
					allowBlank: false
				}, {
					xtype: 'datefield',
					name: 'userEndDate',
					fieldLabel: "有效期",
					editable: false,
					format: 'Y-m-d',
					value: '2013-12-31'
				}]
			}, {
				items: [{
					xtype: 'textfield',
					name: 'userAccount',
					fieldLabel: "用户账号",
					readOnly: true,
					allowBlank: false
				}]
			}]
		})
		var win = Ext.create('Ext.Window', {
			title: '修改用户信息',
			width: 550,
			closable:false,
			layout: 'fit',
			modal: true,
			buttons: [{
				text: '确定',
				handler: function () {
					if (form.getForm().isValid()) {
						form.getForm().submit({
							url: '/api/system/sysuser/update',
							method: 'post',
							waitTitle: '提示',
							waitMsg: '正在提交数据, 请稍侯 ...',
							scope: this,
							params: {
								'id': rows[0].data.id
							},
							success: function () {
								this.grid.getStore().reload();
								win.close();
							},
							failure: function (f, action) {
								TsmFunc
										.showError(action.result);
							}
						})
					}
				},
				scope: this
			}, {
				text: '关闭',
				handler: function () {
					win.close();
				}
			}],
			items: [form]
		})
		form.getForm().setValues(rows[0].data);
		win.show();
	},
	start: function () {
		var rows = this.grid.getSelectionModel().getSelection();
		if (rows.length == 0) {
			TsmFunc.showLocalError('至少选择一条信息!');
			return;
		}
		Ext.Msg.confirm("提示", "确定要启用吗？", function (val) {
			if (val == 'yes') {
				Ext.MessageBox.wait('正在提交数据, 请稍侯 ...', '提示');
				var ids = [];
				Ext.each(rows, function (module) {
					ids.push(module.data.id);
				})
				Ext.Ajax.request({
					url: '/api/system/sysuser/start',
					method: 'post',
					scope: this,
					params: {
						'ids': ids.join(',')
					},
					success: function (response) {
						Ext.MessageBox.hide();
						var r = Ext
								.decode(response.responseText);
						if (r.success === false) {
							TsmFunc.showError(r);
						} else {
							this.grid.getStore().reload();
						}
					},
					failure: function (response) {
						Ext.MessageBox.hide();
						var r = Ext
								.decode(response.responseText);
						TsmFunc.showError(r);
					}
				})
			}
		}, this)
	},
	stop: function () {
		var rows = this.grid.getSelectionModel().getSelection();
		if (rows.length == 0) {
			TsmFunc.showLocalError('至少选择一条信息!');
			return;
		}
		Ext.Msg.confirm("提示", "确定要停用吗？", function (val) {
			if (val == 'yes') {
				Ext.MessageBox.wait('正在提交数据, 请稍侯 ...', '提示');
				var ids = [];
				Ext.each(rows, function (module) {
					ids.push(module.data.id);
				})
				Ext.Ajax.request({
					url: '/api/system/sysuser/stop',
					method: 'post',
					scope: this,
					params: {
						'ids': ids.join(',')
					},
					success: function (response) {
						Ext.MessageBox.hide();
						var r = Ext
								.decode(response.responseText);
						if (r.success === false) {
							TsmFunc.showError(r);
						} else {
							this.grid.getStore().reload();
						}
					},
					failure: function (response) {
						Ext.MessageBox.hide();
						var r = Ext
								.decode(response.responseText);
						TsmFunc.showError(r);
					}
				})
			}
		}, this)
	},
	reset: function () {
		var rows = this.grid.getSelectionModel().getSelection();
		if (rows.length == 0) {
			TsmFunc.showLocalError('至少选择一条信息!');
			return;
		}
		Ext.Msg.confirm("提示", "确定要重置用户密码吗？", function (val) {
			if (val == 'yes') {
				Ext.MessageBox.wait('正在提交数据, 请稍侯 ...', '提示');
				var ids = [];
				Ext.each(rows, function (module) {
					ids.push(module.data.id);
				})
				Ext.Ajax.request({
					url: '/api/system/sysuser/reset',
					method: 'post',
					scope: this,
					params: {
						'ids': ids.join(',')
					},
					success: function (response) {
						Ext.MessageBox.hide();
						var r = Ext
								.decode(response.responseText);
						if (r.success === false) {
							TsmFunc.showError(r);
						} else {
							this.grid.getStore().reload();
						}
					},
					failure: function (response) {
						Ext.MessageBox.hide();
						var r = Ext
								.decode(response.responseText);
						TsmFunc.showError(r);
					}
				})
			}
		}, this)
	},
	distributeRole: function () {
		var rows = this.grid.getSelectionModel().getSelection();
		if (rows.length > 1) {
			TsmFunc.showLocalError('只能选择一条信息!');
			return;
		}
		if (rows.length == 0) {
			TsmFunc.showLocalError('请选择一条信息!');
			return;
		}
		var id = rows[0].data.id;
		var form = Ext.create('TSMINFO.ux.form.ItemSelector', {
			store: Ext.create('Ext.data.Store', {
				fields: ['id', 'roleName', 'exist'],
				data: []
			}),
			valueField: 'id',
			displayField: 'roleName',
			buttons: ['add', 'remove'],
			fromTitle: "未分配角色：",
			toTitle: "已分配角色：",
			bodyStyle: 'padding:10px'
		})
		var win = Ext.create('Ext.Window', {
			width: 650,
			height: 300,
			layout: 'fit',
			items: [{
				border: false,
				bodyStyle: 'padding:10px',
				layout: 'fit',
				items: [form]
			}],
			title: '分配角色',
			modal: true,
			buttons: [{
				text: '确定',
				handler: function () {
					Ext.MessageBox.wait('正在提交数据, 请稍侯 ...', '提示');
					Ext.Ajax.request({
						url: '/api/system/sysuser/saverole',
						method: 'post',
						scope: this,
						params: {
							userId: id,
							roles: form.getValue()
						},
						success: function (response) {
							Ext.MessageBox.hide();
							var r = Ext
									.decode(response.responseText);
							if (r.success === false) {
								TsmFunc.showError(r);
							} else {
								win.close();
							}
						},
						failure: function (response) {
							Ext.MessageBox.hide();
							var r = Ext
									.decode(response.responseText);
							TsmFunc.showError(r);
						}
					})
				},
				scope: this
			}, {
				text: '关闭',
				handler: function () {
					win.close();
				}
			}],
			listeners: {
				show: function (f) {
					var myMask = new Ext.LoadMask(win.body, {
						removeMask: true,
						msg: "数据加载中..."
					});
					myMask.show();
					Ext.Ajax.request({
						url: '/api/system/role/userrole',
						params: {
							userid: id
						},
						success: function (response) {
							myMask.hide();
							var r = Ext.decode(response.responseText);
							var data = new Ext.util.MixedCollection();
							data.addAll(r);
							form.fromField.store.loadData(data.filter(
									'exist', false).items);
							form.toField.store.loadData(data.filter(
									'exist', true).items);
						},
						failure: function (response) {
							myMask.hide();
						}
					})
				}
			}
		})
		win.show();
	},
	searchData: function () {
		Ext.apply(this.grid.store.proxy.extraParams, this.form.getForm()
				.getValues());
		TsmFunc.storeLoad(this.grid);
	}
})