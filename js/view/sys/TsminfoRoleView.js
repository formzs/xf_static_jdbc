Ext.define('TSMINFO.view.sys.TsminfoRoleView', {

    extend: 'Ext.Panel',

    alias: 'widget.tsminfoUserRole',

    layout: 'border',

    requires: [
        'Ext.button.Button',
        'Ext.data.Store',
        'Ext.data.TreeStore',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'Ext.layout.container.Anchor',
        'Ext.layout.container.Border',
        'Ext.layout.container.Fit',
        'Ext.layout.container.HBox',
        'Ext.selection.CheckboxModel',
        'Ext.toolbar.Separator',
        'Ext.tree.Panel',
        'Ext.window.Window',
        'TSMINFO.store.StatusStore'
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
                height: TOOLBAR_BTN_HEIGHT,
                style: 'margin:0 8px;',
                cls: 't-panel-toolbar-btn',
                handler: this.addWin,
                scope: this
            }, {
                text: '修改',
                height: TOOLBAR_BTN_HEIGHT,
                style: 'margin-right:8px;',
                cls: 't-panel-toolbar-btn',
                handler: this.editWin,
                scope: this
            }, '-', {
                text: '启用',
                height: TOOLBAR_BTN_HEIGHT,
                style: 'margin:0 8px;',
                cls: 't-panel-toolbar-btn',
                handler: this.start,
                scope: this
            }, {
                text: '停用',
                height: TOOLBAR_BTN_HEIGHT,
                style: 'margin-right:8px;',
                cls: 't-panel-toolbar-btn',
                handler: this.stop,
                scope: this
            }, '-', {
                text: '分配模块',
                height: TOOLBAR_BTN_HEIGHT,
                style: 'margin:0 8px;',
                cls: 't-panel-toolbar-btn',
                handler: this.distributeModule,
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
                    name: 'roleName',
                    fieldLabel: "角色名称"
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
                    align: 'middle'
                },
                defaults: {
                    margins: '0 5 0 0',
                    height: 30
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
            fields: ['id', 'roleName', 'roleCode', 'status', 'remark'],
            proxy: {
                type: 'ajax',
                url: '/api/system/role/list',
                method: 'post',
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
                text: '角色编号',
                flex: 1,
                dataIndex: 'roleCode',
                align: 'center'
            }, {
                header: '角色名称',
                flex: 1,
                dataIndex: 'roleName',
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
            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 70,
                width: 250
            },
            defaults: {
                border: false
            },
            items: [{
                layout: {
                    type: 'hbox',
                    align: 'top'
                },
                defaults: {
                    border: false,
                    flex: 1
                },
                items: [{
                    items: [{
                        xtype: 'textfield',
                        name: 'roleCode',
                        fieldLabel: "角色编号",
                        allowBlank: false

                    }]
                }, {
                    items: [{
                        xtype: 'textfield',
                        name: 'roleName',
                        fieldLabel: "角色名称",
                        allowBlank: false
                    }]
                }]
            }, {
                layout: 'anchor',
                items: [{
                    anchor: '-19',
                    xtype: 'textarea',
                    name: 'remark',
                    fieldLabel: "备注"
                }]
            }]
        })
        var win = Ext.create('Ext.Window', {
            title: cfg.title,
            width: 550,
            closable: false,
            modal: true,
            layout: 'fit',
            buttons: [{
                text: '确定',
                width: 80,
                height: 30,
                handler: function () {
                    cfg.callback.call(this, form, win)
                },
                scope: this
            }, {
                text: '关闭',
                width: 80,
                height: 30,
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
            title: '新增角色',
            callback: function (form) {
                if (form.getForm().isValid()) {
                    form.getForm().submit({
                        url: '/api/system/role/add',
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
        var win = this.createWindow({
            title: '修改角色',
            callback: function (form) {
                if (form.getForm().isValid()) {
                    form.getForm().submit({
                        url: '/api/system/role/update',
                        waitTitle: '提示',
                        waitMsg: '正在提交数据, 请稍侯 ...',
                        scope: this,
                        params: {
                            id: rows[0].data.id
                        },
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
        win.down('panel').getForm().setValues(rows[0].data);
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
                    url: '/api/system/role/start',
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
                    url: '/api/system/role/stop',
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
    distributeModule: function () {
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
        var tree = Ext.create('Ext.tree.Panel', {
            cls: 'examples-list x-tree-lines',
            border: false,
            lines: true,
            useArrows: true,
            rootVisible: false,
            displayField: 'moduleName',
            store: Ext.create('Ext.data.TreeStore', {
                proxy: {
                    type: 'ajax',
                    url: '/api/system/module/roletree',
                    extraParams: {
                        roleId: id
                    },
                    reader: {
                        cfg: {
                            checked: true
                        },
                        read: TsmFunc.readTreeNode
                    }
                },
                fields: ['moduleName'],
                root: {
                    moduleName: '系统模块',
                    id: '0',
                    expanded: true,
                    checked: false
                }
            }),
            listeners: {
                checkchange: TsmFunc.treeUtil.checkchangeFunc
            }
        })
        var win = Ext.create('Ext.Window', {
            title: '分配模块',
            width: 300,
            height: 280,
            modal: true,
            layout: 'fit',
            buttons: [{
                text: '确定',
                handler: function () {
                    var modules = [];
                    var records = tree.getView().getChecked();
                    Ext.each(records, function (item) {
                        modules.push(item.get('id'));
                    })
                    Ext.MessageBox.wait('正在提交数据, 请稍侯 ...', '提示');
                    Ext.Ajax.request({
                        url: '/api/system/role/savemodule',
                        method: 'post',
                        scope: this,
                        params: {
                            id: id,
                            modules: modules.join(',')
                        },
                        success: function (response) {
                            Ext.MessageBox.hide();
                            var r = Ext.decode(response.responseText);
                            if (r.success === false) {
                                TsmFunc.showError(r);
                            } else {
                                win.close();
                            }
                        },
                        failure: function (response) {
                            Ext.MessageBox.hide();
                            var r = Ext.decode(response.responseText);
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
            items: [tree]
        })
        win.show();
    },
    searchData: function () {
        Ext.apply(this.grid.store.proxy.extraParams, this.form.getForm()
            .getValues());
        TsmFunc.storeLoad(this.grid);
    }
})