Ext.define('TSMINFO.view.sys.TsminfoSysCodeView', {

    extend: 'Ext.Panel',

    alias: 'widget.tsminfoSysCodeView',

    layout: 'border',

    requires: [
        'Ext.button.Button',
        'Ext.data.Store',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Text',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'Ext.grid.plugin.CellEditing',
        'Ext.layout.container.Border',
        'Ext.layout.container.Fit',
        'Ext.layout.container.HBox',
        'Ext.selection.CheckboxModel',
        'Ext.toolbar.Separator',
        'Ext.window.Window',
        'TSMINFO.store.DefaultStore',
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
                    name: 'codeName',
                    fieldLabel: "代码名称"
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
            fields: ['id', 'codeName', 'codeNum', 'codeValue',
                'status', 'remark'],
            proxy: {
                type: 'ajax',
                url: '/api/system/syscode/list',
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
                header: '代码名称',
                flex: 1,
                dataIndex: 'codeName',
                align: 'center'
            }, {
                header: '代码类值',
                flex: 1,
                dataIndex: 'codeValue',
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
            region: 'north',
            height: 40,
            bodyStyle: 'padding:10px 0;border-bottom:0px',
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
                width: 220
            },
            items: [{
                items: [{
                    xtype: 'textfield',
                    name: 'codeName',
                    fieldLabel: "代码名称",
                    allowBlank: false
                }]
            }, {
                items: [{
                    xtype: 'textfield',
                    name: 'codeValue',
                    fieldLabel: "代码类值",
                    allowBlank: false
                }]
            }]
        })
        var selModel = Ext.create('Ext.selection.CheckboxModel');
        var store = Ext.create('Ext.data.Store', {
            fields: ['itemName', 'itemValue',
                'status', 'isDefault'],
            proxy: {
                type: 'ajax',
                url: cfg.isUpdate
                    ? '/api/system/syscode/syscodeitem'
                    : undefined,
                extraParams: {
                    id: cfg.id
                },
                reader: {
                    type: 'json'
                }
            },
            autoLoad: cfg.isUpdate
        })
        var status = Ext.create('Ext.form.field.ComboBox', {
            xtype: 'combobox',
            name: 'status',
            hiddenName: 'status',
            store: Ext.create('TSMINFO.store.StatusStore'),
            displayField: 'name',
            valueField: 'value',
            queryMode: 'local',
            editable: false
        })
        var isDefault = Ext.create('Ext.form.field.ComboBox', {
            xtype: 'combobox',
            name: 'isDefault',
            hiddenName: 'isDefault',
            store: Ext.create('TSMINFO.store.DefaultStore'),
            displayField: 'name',
            valueField: 'value',
            queryMode: 'local',
            editable: false
        })
        var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        });
        var grid = Ext.create('Ext.grid.Panel', {
            region: 'center',
            selModel: selModel,
            plugins: [cellEditing],
            tbar: [{
                text: '新增',
                iconCls: 'add-icon',
                handler: function () {
                    store.loadData([{
                        status: 'STATUS_ENABLE',
                        isDefault: 'STATUS_NO'
                    }], true);
                    cellEditing.startEditByPosition({
                        row: store.getCount() - 1,
                        column: 2
                    });
                },
                scope: this
            }, {
                text: '删除',
                iconCls: 'remove-icon',
                handler: function () {
                    var rows = grid.getSelectionModel()
                        .getSelection();
                    Ext.each(rows, function (item) {
                        store.remove(item);
                    }, this)
                },
                scope: this
            }],
            store: store,
            columnLines: true,
            loadMask: true,
            columns: [Ext.create('Ext.grid.RowNumberer'), {
                header: '代码项名称',
                flex: 1,
                dataIndex: 'itemName',
                align: 'center',
                editor: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            }, {
                header: '代码项值',
                flex: 1,
                dataIndex: 'itemValue',
                align: 'center',
                editor: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            }, {
                text: '状态',
                flex: 1,
                dataIndex: 'status',
                align: 'center',
                editor: status,
                renderer: TsmFunc.rendererStore(status.store)
            }, {
                text: '是否默认',
                flex: 1,
                dataIndex: 'isDefault',
                align: 'center',
                editor: isDefault,
                renderer: TsmFunc
                    .rendererStore(isDefault.store)
            }]
        });
        var win = Ext.create('Ext.Window', {
            title: cfg.title,
            width: 730,
            border: false,
            modal: true,
            layout: 'border',
            buttons: [{
                text: '确定',
                width: 80,
                height: 30,
                handler: function () {
                    cfg.callback.call(this, form, grid, win)
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
            items: [form, grid]
        })
        return win;
    },
    addWin: function () {
        var win = this.createWindow({
            title: '新增代码类',
            callback: function (form, grid) {
                if (form.getForm().isValid()) {
                    var data = [];
                    if (grid.getStore().getCount() <= 0) {
                        Ext.Msg.alert('提示', '请输入代码项！');
                        return;
                    }
                    var isValidate = false;
                    grid.getStore().each(function (item) {
                        if (Ext.isEmpty(item.data.itemName)
                            || Ext.isEmpty(item.data.itemValue)) {
                            isValidate = true;
                            return false;
                        }
                        data.push(item.data);
                    });
                    if (isValidate) {
                        Ext.Msg.alert('提示', '请输入代码项名称或代码项值！');
                        return;
                    }
                    var jsonData = Ext.apply({}, {
                        codeItemList: data
                    }, form.getForm().getValues());
                    Ext.MessageBox.wait('正在提交数据, 请稍侯 ...', '提示');
                    Ext.Ajax.request({
                        url: 'system/syscode/add',
                        method: 'post',
                        scope: this,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        jsonData: Ext.encode(jsonData),
                        success: function (response) {
                            Ext.MessageBox.hide();
                            var r = Ext.decode(response.responseText);
                            if (r.success === false) {
                                TsmFunc.showError(r);
                            } else {
                                this.grid.getStore().reload();
                                win.close();
                            }
                        },
                        failure: function (response) {
                            Ext.MessageBox.hide();
                            var r = Ext.decode(response.responseText);
                            TsmFunc.showError(r);
                        }
                    })
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
        var id = rows[0].data.id;
        var win = this.createWindow({
            title: '修改代码类',
            isUpdate: true,
            id: id,
            callback: function (form, grid) {
                if (form.getForm().isValid()) {
                    var data = [];
                    if (grid.getStore().getCount() <= 0) {
                        Ext.Msg.alert('提示', '请输入代码项！');
                        return;
                    }
                    var isValidate = false;
                    grid.getStore().each(function (item) {
                        if (Ext.isEmpty(item.data.itemName)
                            || Ext.isEmpty(item.data.itemValue)) {
                            isValidate = true;
                            return false;
                        }
                        data.push(item.data);
                    });
                    if (isValidate) {
                        Ext.Msg.alert('提示', '请输入代码项名称或代码项值！');
                        return;
                    }
                    var jsonData = Ext.apply({}, {
                        id: id,
                        codeItemList: data
                    }, form.getForm().getValues());
                    Ext.MessageBox.wait('正在提交数据, 请稍侯 ...', '提示');
                    Ext.Ajax.request({
                        url: '/api/system/syscode/update',
                        method: 'post',
                        scope: this,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        jsonData: Ext.encode(jsonData),
                        success: function (response) {
                            Ext.MessageBox.hide();
                            var r = Ext
                                .decode(response.responseText);
                            if (r.success === false) {
                                TsmFunc.showError(r);
                            } else {
                                this.grid.getStore().reload();
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
                }
            }
        });
        var form = win.down('form.panel').getForm();
        form.setValues(rows[0].data);
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
                    url: '/api/system/syscode/start',
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
                    url: '/api/system/syscode/stop',
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