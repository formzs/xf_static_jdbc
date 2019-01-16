/*
 * 单位管理
 */
Ext.define('TSMINFO.view.fire.orgmnt.OrgsView', {
    extend: 'Ext.Panel',

    alias: 'widget.fireorgmntOrgsView',

    layout: 'border',

    initComponent: function () {
        this.items = [this.initFormPanel(), {
            layout: 'fit',
            region: 'center',
            tbar: this.initTbar(),
            border: false,
            items: [this.initGridPanel()]
        }];
        this.grid.addListener('cellclick', this.operates, this);
        this.callParent(arguments);
    },

    initFormPanel: function () {
        return this.form = Ext.create('Ext.form.Panel', {
            labelWidth: 100,
            height: 60,
            region: 'north',
            bodyStyle: 'padding-top:15px',
            layout: {
                type: 'hbox',
                align: 'top'
            },
            defaults: {
                border: false,
                flex: 1
            },
            cls: 'clear-tlr-border',
            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 80,
                width: 220
            },


            items: [{

                items: [{
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: "部门名称"

                }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'location',
            //        fieldLabel: "部门地址"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'telephone',
            //        fieldLabel: "部门电话"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'staffnum',
            //        fieldLabel: "员工数量"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'corporation',
            //        fieldLabel: "法人代表名称"
            //
            //    }]
            }, {
                items: [{
                    xtype: 'textfield',
                    name: 'property',
                    fieldLabel: "单位性质"

                }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'firemenName',
            //        fieldLabel: "消防负责人名称"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'firemenTel',
            //        fieldLabel: "消防负责人电话"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'combobox',
            //        name: 'status',
            //        fieldLabel: "状态",
            //        hiddenName: 'status',
            //        editable: false,
            //        forceSelection: false,
            //        store: Ext.create('TSMINFO.store.StatusStore'),
            //        queryMode: 'local',
            //        valueField: 'value',
            //        displayField: 'name'
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'numberfield',
            //        name: 'pointx',
            //        fieldLabel: "地图横坐标"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'numberfield',
            //        name: 'pointy',
            //        fieldLabel: "地图纵坐标"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'numberfield',
            //        name: 'parentId',
            //        fieldLabel: "父id"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'imgUrl',
            //        fieldLabel: "单位图片路径"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'createTime',
            //        fieldLabel: "创建时间"
            //
            //    }]
            }, {
                //layout
                layout: {
                    type: 'hbox',
                    align: 'top'
                },
                defaults: {
                    margins: '0 5 0 0',
                    height: 30
                },
                items: [{
                    xtype: 'button',
                    text: '查询',
                    cls: 't-panel-top-form-btn',
                    width: 80,
                    scope: this,
                    handler: this.searchData
                }, {
                    xtype: 'button',
                    cls: 't-panel-top-form-btn',
                    width: 80,
                    text: '重置',
                    scope: this,
                    handler: function () {
                        this.form.getForm().reset();
                    }
                }]
            }]
        });
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
            }, {
                text: '删除',
                height: TOOLBAR_BTN_HEIGHT,
                style: 'margin-right:8px;',
                cls: 't-panel-toolbar-btn',
                handler: this.deleteWin,
                scope: this
            }, {
                text: '导入excel',
                height: TOOLBAR_BTN_HEIGHT,
                style: 'margin-right:8px;',
                cls: 't-panel-toolbar-btn',
                handler: this.importWin,
                scope: this
            }, {
                text: '导出excel',
                height: TOOLBAR_BTN_HEIGHT,
                style: 'margin-right:8px;',
                cls: 't-panel-toolbar-btn',
                handler: function () {
                    Ext.Ajax.request({
                        url: '/api/fire/orgmnt/orgs/exportExcel',
                        method: 'POST',
                        form: Ext.getBody().createChild({
                            tag: 'form'
                        }),
                        params: this.form.getForm().getValues(),
                        scope: this,
                        isUpload: true
                    });
                },
                scope: this
            }]
        });
    },


    initGridPanel: function () {
        var selModel = Ext.create('Ext.selection.CheckboxModel');

        var store = Ext.create('Ext.data.Store', {
            fields: ['id', 'name', 'location', 'telephone', 'staffnum', 'corporation', 'property', 'firemenName', 'firemenTel', 'status', 'pointx', 'pointy', 'parentId', 'parentName', 'imgUrl', 'createTime'],
            proxy: {
                type: 'ajax',
                url: '/api/fire/orgmnt/orgs/search',
                actionMethods: 'POST',
                reader: {
                    type: 'json',
                    root: 'data',
                    totalProperty: 'totalCount'
                }
            },
            remoteSort: true
        });
        var bbar = TsmFunc.createPagingToolbar(store);

        this.grid = Ext.create('Ext.grid.Panel', {
            cls: 'x-panel-grid-border',
            region: 'center',
            selModel: selModel,
            border: false,
            store: store,
            bbar: bbar,
            columnLines: true,
            loadMask: true,
            columns: [Ext.create('Ext.grid.RowNumberer', {
                width: 30
            }), {

                text: '部门名称',
                flex: 1,
                dataIndex: 'name',
                align: 'center'

            }, {
                text: '部门地址',
                flex: 1,
                dataIndex: 'location',
                align: 'center'

            }, {
                text: '部门电话',
                flex: 1,
                dataIndex: 'telephone',
                align: 'center'

            }, {
                text: '员工数量',
                flex: 1,
                dataIndex: 'staffnum',
                align: 'center'

            }, {
                text: '法人代表名称',
                flex: 1,
                dataIndex: 'corporation',
                align: 'center'

            }, {
                text: '单位性质',
                flex: 1,
                dataIndex: 'property',
                align: 'center'

            }, {
                text: '消防负责人名称',
                flex: 1,
                dataIndex: 'firemenName',
                align: 'center'

            }, {
                text: '消防负责人电话',
                flex: 1,
                dataIndex: 'firemenTel',
                align: 'center'

            }, {
                text: '状态',
                flex: 1,
                dataIndex: 'status',
                align: 'center',
                renderer: TsmFunc.rendererStore(Ext.create('TSMINFO.store.StatusStore'))

            }, /*{
                text: '地图横坐标',
                flex: 1,
                dataIndex: 'pointx',
                renderer: Ext.util.Format.numberRenderer('00.00'),
                align: 'center'

            }, {
                text: '地图纵坐标',
                flex: 1,
                dataIndex: 'pointy',
                renderer: Ext.util.Format.numberRenderer('00.00'),
                align: 'center'

            }, {
                text: '父id',
                flex: 1,
                dataIndex: 'parentId',
                renderer: Ext.util.Format.numberRenderer('000'),
                align: 'center'

            },*/ {
                text: '上级单位名称',
                flex: 1,
                dataIndex: 'parentName',
                align: 'center'

            }, /*{
                text: '单位图片路径',
                flex: 1,
                dataIndex: 'imgUrl',
                align: 'center'

            },*/ {
                text: '创建时间',
                flex: 1,
                dataIndex: 'createTime',
                align: 'center'

            }, {
                text: '操作',
                width: 120,
                dataIndex: 'operate',
                align: 'center',
                sortable: false,
                renderer: function (v, a, record) {
                    var opts = [];
                    //opts.push('<a href="javascript:;" class="details-handler view-operate">查看</a>');
                    opts.push('<a href="javascript:;" class="details-handler edit-operate">修改</a>');
                    opts.push('<a href="javascript:;" class="details-handler remove-operate">删除</a>');
                    return opts.join(' ');
                }


            }]//
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
                labelWidth: 120,
                width: 420
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

                xtype: 'textfield',
                name: 'name',
                fieldLabel: "部门名称",
                allowBlank: true
            }, {
                xtype: 'textfield',
                name: 'location',
                fieldLabel: "部门地址",
                allowBlank: true
            }, {
                xtype: 'textfield',
                name: 'telephone',
                fieldLabel: "部门电话",
                allowBlank: true
            }, {
                xtype: 'textfield',
                name: 'staffnum',
                fieldLabel: "员工数量",
                allowBlank: true
            }, {
                xtype: 'textfield',
                name: 'corporation',
                fieldLabel: "法人代表名称",
                allowBlank: true
            }, {
                xtype: 'textfield',
                name: 'property',
                fieldLabel: "单位性质",
                allowBlank: true
            }, {
                xtype: 'textfield',
                name: 'firemenName',
                fieldLabel: "消防负责人名称",
                allowBlank: true
            }, {
                xtype: 'textfield',
                name: 'firemenTel',
                fieldLabel: "消防负责人电话",
                allowBlank: true
            }, {
                xtype: 'combobox',
                name: 'status',
                hiddenName: 'status',
                fieldLabel: "状态",
                editable: false,
                forceSelection: true,
                store: Ext.create('TSMINFO.store.StatusStore'),
                queryMode: 'local',
                valueField: 'value',
                displayField: 'name',
                value: 'STATUS_ENABLE',
                text: '启用',
                allowBlank: false
            }, {
                xtype: 'numberfield',
                decimalPrecision: 6,
                format_style: "000.00",
                name: 'pointx',
                fieldLabel: "地图横坐标",
                allowBlank: true
            }, {
                xtype: 'numberfield',
                decimalPrecision: 6,
                format_style: "000.00",
                name: 'pointy',
                fieldLabel: "地图纵坐标",
                allowBlank: true
            }, {
                xtype: 'numberfield',
                decimalPrecision: 6,
                format_style: "000",
                name: 'parentId',
                fieldLabel: "父id",
                allowBlank: true
            }, {
                xtype: 'textfield',
                name: 'parentName',
                fieldLabel: "上级单位名称",
                allowBlank: true
            }, {
                xtype: 'textfield',
                name: 'imgUrl',
                fieldLabel: "单位图片路径",
                allowBlank: true
            }, {
                xtype: 'textfield',
                name: 'createTime',
                fieldLabel: "创建时间",
                allowBlank: true
            }]
        });
        var baiduMap = Ext.create('nanjingMap');
        var win = Ext.create('Ext.Window', {
            title: cfg.title,
            width: 1200,
            modal: true,
            layout: { type: 'hbox'},
            buttons: [{
                text: '确定',
                    handler: function () {
                    cfg.callback.call(this, form, win)
                },
                scope: this
            }, {
                text: '关闭',
                handler: function () {
                    win.close();
                }
            }],
            items: [form, baiduMap]
        })
        return win;
    },

    addWin: function () {
        var win = this.createWindow({
            title: '新增单位管理',
            callback: function (form) {
                if (form.getForm().isValid()) {
                    form.getForm().submit({
                        url: '/api/fire/orgmnt/orgs/add',
                        waitTitle: '提示',
                        waitMsg: '正在提交数据, 请稍侯 ...',
                        scope: this,
                        success: function () {
                            this.grid.getStore().reload();
                            win.close();
                        },
                        failure: function (f, action) {
                            TsmFunc.showError(action.response);
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
        var win = this.createWindow({
            title: '修改单位管理',
            callback: function (form) {
                if (form.getForm().isValid()) {
                    form.getForm().submit({
                        url: '/api/fire/orgmnt/orgs/update',
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
                            TsmFunc.showError(action);
                        }
                    });
                }
            }
        });
        win.down('panel').getForm().setValues(rows[0].data);
        win.show();
    },
    deleteWin: function () {
        var rows = this.grid.getSelectionModel().getSelection();

        if (rows.length == 0) {
            Ext.MessageBox.alert('提示', '请选择一条信息!');
            return;
        }
        var ids = '';
        for (i = 0; i < rows.length; i++) {
            if (i == rows.length - 1)
                ids += rows[i].data.id;
            else
                ids += rows[i].data.id + ',';
        }
        Ext.Msg.confirm(
            "提示",
            "确定要删除吗？",
            function (val) {
                if (val == 'yes') {
                    Ext.MessageBox.wait('正在提交数据, 请稍侯 ...', '提示');
                    Ext.Ajax.request({
                        url: '/api/fire/orgmnt/orgs/deletes',
                        method: 'post',
                        scope: this,
                        params: {
                            id: ids
                        },
                        success: function (response) {
                            Ext.MessageBox.hide();
                            var r = Ext.decode(response.responseText);
                            if (r.success === false) {
                                TsmFunc.showError(r);
                            } else {
                                this.grid.getStore().reload();
                            }
                        },
                        failure: function (response) {
                            Ext.MessageBox.hide();
                            var r = Ext.decode(response.responseText);
                            TsmFunc.showError(r);
                        }
                    });
                }
            }, this);


    },
    //
    importWin: function () {
        var form = Ext.create('Ext.form.Panel', {
            border: false,
            autoScroll: true,
            bodyStyle: 'padding:10px',
            fileUpload: true,
            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 85,
                width: 220
            },
            layout: {
                type: 'hbox',
                align: 'top'
            },
            items: [{
                xtype: 'filefield',
                hideLabel: true,
                name: 'uploadFile',
                buttonText: '选择文件',
                width: 295,
                validator: function (v) {
                    if ((!/^(.)*(\.xls)$/ig.test(v))
                        && (!/^(.)*(\.xlsx)$/ig.test(v))) {
                        return '只能上传EXCEL文件';
                    } else {
                        return true;
                    }
                }
            }]
        })
        var win = Ext.create('Ext.Window', {
            title: '导入EXCEL',
            layout: 'fit',
            width: 400,
            modal: true,
            items: [form],
            buttons: [{
                text: '导入',
                handler: function () {
                    if (form.getForm().isValid()) {
                        form.getForm().submit({
                            waitTitle: '提示',
                            waitMsg: '正在解析EXCEL....',
                            url: '/api/fire/orgmnt/orgs/importExcel',
                            method: 'post',
                            scope: this,
                            success: function () {
                                this.grid.getStore().reload();
                                win.close();
                            },
                            failure: function (f, action) {
                                TsmFunc.showError(action.result);
                            }
                        })
                    }
                },
                scope: this
            }, {
                text: '关闭',
                handler: function () {
                    win.close();
                },
                scope: this
            }]
        })
        win.show();
    },
    //
    operates: function (view, cell, colIdx, record, row, rowIdx, e) {
        var name = this.grid.columns[colIdx].dataIndex;
        if (name == 'operate') {
            var target = Ext.get(e.getTarget());
            if (target.hasCls('remove-operate')) {
                Ext.Msg.confirm(
                    "提示",
                    "确定要删除吗？",
                    function (val) {
                        if (val == 'yes') {
                            Ext.MessageBox.wait('正在提交数据, 请稍侯 ...', '提示');
                            Ext.Ajax.request({
                                url: '/api/fire/orgmnt/orgs/delete',
                                method: 'post',
                                scope: this,
                                params: {
                                    id: record.data.id
                                },
                                success: function (response) {
                                    Ext.MessageBox.hide();
                                    var r = Ext.decode(response.responseText);
                                    if (r.success === false) {
                                        TsmFunc.showError(r);
                                    } else {
                                        this.grid.getStore().reload();
                                    }
                                },
                                failure: function (response) {
                                    Ext.MessageBox.hide();
                                    var r = Ext.decode(response.responseText);
                                    TsmFunc.showError(r);
                                }
                            });
                        }
                    }, this);
            } else if (target.hasCls('edit-operate')) {
                var win = this.createWindow({
                    title: '修改单位管理',
                    callback: function (form) {
                        if (form.getForm().isValid()) {
                            form.getForm().submit({
                                url: '/api/fire/orgmnt/orgs/update',
                                waitTitle: '提示',
                                waitMsg: '正在提交数据, 请稍侯 ...',
                                scope: this,
                                params: {
                                    id: record.data.id
                                },
                                success: function () {
                                    this.grid.getStore().reload();
                                    win.close();
                                },
                                failure: function (f, action) {
                                    TsmFunc.showError(action);
                                }
                            });
                        }
                    }
                });
                win.down('panel').getForm().setValues(record.data);
                win.show();
            }
        }
    },
    //
    searchData: function () {
        Ext.apply(this.grid.store.proxy.extraParams, this.form.getForm().getValues());
        TsmFunc.storeLoad(this.grid);
    }

});