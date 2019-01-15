Ext.define('TSMINFO.view.sys.TsminfoModuleView', {

    extend: 'Ext.Panel',

    alias: 'widget.tsminfoModuleView',

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
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'Ext.layout.container.Border',
        'Ext.layout.container.Fit',
        'Ext.layout.container.HBox',
        'Ext.selection.CheckboxModel',
        'Ext.toolbar.Separator',
        'Ext.tree.Panel',
        'Ext.window.Window',
        'TSMINFO.store.ModuleTypeStore',
        'TSMINFO.store.StatusStore',
        'TSMINFO.ux.ComboTree'
    ],

    rootName: '系统模块',
    initComponent: function () {
        this.items = [this.initFormPanel(), {
            layout: 'border',
            region: 'center',
            tbar: this.initTbar(),
            border: false,
            items: [this.initTreePanel(), this.initGridPanel()]
        }];
        this.callParent();

    },
    initTreePanel: function () {
        this.tree = Ext.create('Ext.tree.Panel', {
            region: 'west',
            width: 200,
            title: '模块信息',
            cls: 'examples-list x-tree-lines clear-ltb-border',
            bodyStyle: 'border-top:1px solid',
            lines: true,
            useArrows: true,
            split: true,
            displayField: 'moduleName',
            store: Ext.create('Ext.data.TreeStore', {
                proxy: {
                    type: 'ajax',
                    url: '/api/system/module/tree',
                    reader: {
                        read: TsmFunc.readTreeNode
                    }
                },
                fields: ['moduleName'],
                root: {
                    moduleName: this.rootName,
                    id: '0',
                    expanded: true
                }
            }),
            listeners: {
                load: function () {
                    var lastId = this.tree.lastId
                    if (lastId) {
                        var node = this.tree.store.getNodeById(lastId)
                        if (node) {
                            node.expand();
                        }
                    }
                },
                itemclick: function (me, node, index) {
                    var ids = [];
                    node.cascade(function (n) {
                        ids.push(n.get('id'));
                    })
                    this.grid.store.proxy.extraParams.ids = ids
                        .join(',');
                    this.searchData();
                },
                scope: this
            }
        })
        return this.tree;
    },
    initTbar: function () {
        return Ext.create('Ext.toolbar.Toolbar', {
            height: PANEL_TOOLBAR_HEIGHT,
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
                style: 'margin-right:8px;',
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
                    name: 'moduleName',
                    fieldLabel: "模块名称"
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
            fields: ['id', 'moduleName', 'moduleCode',
                'parentId', 'moduleUrl', 'status', 'parentName'],
            proxy: {
                type: 'ajax',
                url: '/api/system/module/list',
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
            selModel: selModel,
            cls: 'clear-trb-border',
            store: store,
            bbar: bbar,
            columnLines: true,
            loadMask: true,
            columns: [Ext.create('Ext.grid.RowNumberer'), {
                header: '模块名称',
                flex: 1,
                dataIndex: 'moduleName',
                align: 'center'
            }, {
                header: '模块序号',
                flex: 1,
                dataIndex: 'moduleCode',
                align: 'center'
            }, {
                text: '上级模块',
                flex: 1,
                dataIndex: 'parentName',
                align: 'center',
                renderer: function (v) {
                    return v || '系统模块';
                }
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
                labelWidth: 85,
                width: 300
            },
            items: [{
                items: [{

                    //status
                    xtype: 'textfield',
                    name: 'status',
                    fieldLabel: "状态",
                    hidden: true,
                    width: 300
                }, {
                    xtype: 'textfield',
                    name: 'moduleName',
                    fieldLabel: "模块名称",
                    width: 300,
                    allowBlank: false
                }, {
                    xtype: 'combotree',
                    name: 'parentId',
                    fieldLabel: '上级模块',
                    matchFieldWidth: false,
                    multiple: true,
                    selectNodeModel: 'all',
                    tree: Ext.create('Ext.tree.Panel', {
                        width: 300,
                        height: 300,
                        autoScroll: true,
                        floating: true,
                        focusOnToFront: false,
                        shadow: true,
                        cls: 'examples-list x-tree-lines ',
                        lines: true,
                        useArrows: true,
                        displayField: 'moduleName',
                        store: Ext.create(
                            'Ext.data.TreeStore', {
                                proxy: {
                                    type: 'ajax',
                                    url: '/api/system/module/tree',
                                    reader: {
                                        read: TsmFunc.readTreeNode
                                    }
                                },
                                fields: ['moduleName'],
                                root: {
                                    moduleName: this.rootName,
                                    id: '0',
                                    expanded: true
                                }
                            })
                    }),
                    listeners: {
                        beforeselect: cfg.beforeselect || Ext.emptyFn,
                        scope: this
                    },
                    allowBlank: false
                }]
            }, {
                items: [{
                    xtype: 'textfield',
                    name: 'moduleCode',
                    fieldLabel: "模块序号",
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    name: 'moduleUrl',
                    fieldLabel: "模块连接",
                    allowBlank: true
                }]
            }]

        })
        var win = Ext.create('Ext.Window', {
            title: cfg.title,
            width: 720,
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
            title: '新增模块',
            callback: function (form) {
                this.tree.lastId = form.getForm().getValues().parentId;
                if (form.getForm().isValid()) {
                    form.getForm().submit({
                        url: '/api/system/module/add',
                        waitTitle: '提示',
                        waitMsg: '正在提交数据, 请稍侯 ...',
                        scope: this,
                        success: function () {
                            this.grid.getStore().reload();
                            this.tree.store.load();
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
            Ext.MessageBox.alert('提示', '只能选择一条信息!');
            return;
        }
        if (rows.length == 0) {
            Ext.MessageBox.alert('提示', '请选择一条信息!');
            return;
        }
        var id = rows[0].data.id;
        var win = this.createWindow({
            title: '修改模块',
            beforeselect: function (com, node) {
                var nid = node.get('id');
                var r = true;
                com.picker.store.getNodeById(id).cascade(function (n) {
                    if (n.get('id') == nid) {
                        r = false;
                        return false;
                    }
                });
                if (r === false) {
                    Ext.Msg.alert('提示', '上级模块不能为该模块或子模块')
                }
                return r;
            },
            callback: function (form) {
                this.tree.lastId = form.getForm().getValues().parentId;
                if (form.getForm().isValid()) {
                    form.getForm().submit({
                        url: '/api/system/module/update',
                        waitTitle: '提示',
                        params: {
                            id: id
                        },
                        waitMsg: '正在提交数据, 请稍侯 ...',
                        scope: this,
                        success: function () {
                            this.grid.getStore().reload();
                            this.tree.store.load();
                            win.close();
                        },
                        failure: function (f, action) {
                            TsmFunc.showError(action.result);
                        }
                    });
                }
            }
        });
        var form = win.down('panel').getForm();
        form.setValues(rows[0].data);
        var parentId = form.findField('parentId');
        parentId.myValue = rows[0].data.parentId;
        parentId.setValue(rows[0].data.parentName || this.rootName);
        form.isValid();
        win.show();
    },
    start: function () {
        var rows = this.grid.getSelectionModel().getSelection();
        if (rows.length == 0) {
            Ext.MessageBox.alert('提示', '至少选择一条信息!');
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
                    url: '/api/system/module/start',
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
            Ext.MessageBox.alert('提示', '至少选择一条信息!');
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
                    url: '/api/system/module/stop',
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
    searchData: function () {
        Ext.apply(this.grid.store.proxy.extraParams, this.form.getForm()
            .getValues());
        TsmFunc.storeLoad(this.grid);
    }
})