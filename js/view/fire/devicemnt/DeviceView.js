/*
 * 设备管理
 */
Ext.define('TSMINFO.view.fire.devicemnt.DeviceView', {
    extend: 'Ext.Panel',

    alias: 'widget.firedevicemntDeviceView',

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
                    fieldLabel: "设备名称"

                }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'location',
            //        fieldLabel: "设备位置描述"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'mac',
            //        fieldLabel: "设备物理地址"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'createTime',
            //        fieldLabel: "设备添加时间"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'startDate',
            //        fieldLabel: "设备投入使用时间"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'numberfield',
            //        name: 'lifeMonth',
            //        fieldLabel: "寿命月数"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'numberfield',
            //        name: 'orgId',
            //        fieldLabel: "所属单位id"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'orgName',
            //        fieldLabel: "所属单位名称"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'numberfield',
            //        name: 'buildingId',
            //        fieldLabel: "所属建筑id"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'buildingName',
            //        fieldLabel: "所属建筑名称"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'numberfield',
            //        name: 'pointx',
            //        fieldLabel: "经度"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'numberfield',
            //        name: 'pointy',
            //        fieldLabel: "纬度"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'numberfield',
            //        name: 'floorId',
            //        fieldLabel: "所属楼层id"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'floorNumber',
            //        fieldLabel: "所属楼层名称"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'numberfield',
            //        name: 'roomId',
            //        fieldLabel: "所属房间id"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'roomNumber',
            //        fieldLabel: "所属房间号"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'numberfield',
            //        name: 'deviceTypeId',
            //        fieldLabel: "设备类型id"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'deviceTypeName',
            //        fieldLabel: "设备类型名称"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'numberfield',
            //        name: 'xrate',
            //        fieldLabel: "平面图横轴位置"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'numberfield',
            //        name: 'yrate',
            //        fieldLabel: "平面图纵轴位置"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'numberfield',
            //        name: 'height',
            //        fieldLabel: "设备相对高度"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'numberfield',
            //        name: 'fheight',
            //        fieldLabel: "地板板高度"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'numberfield',
            //        name: 'cheight',
            //        fieldLabel: "天花板高度"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'fireChiefPhone',
            //        fieldLabel: "消防负责人电话"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'fireChief',
            //        fieldLabel: "消防负责人姓名"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'controllerId',
            //        fieldLabel: "所属报警主机id"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'maintenanceUnit',
            //        fieldLabel: "维保单位"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'maintenanceuser',
            //        fieldLabel: "维保人员"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'maintenancephone',
            //        fieldLabel: "维保电话"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'firm',
            //        fieldLabel: "生产厂家"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'productdate',
            //        fieldLabel: "生产日期"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'idcode',
            //        fieldLabel: "设备序号"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'deviceurl',
            //        fieldLabel: "设备url"
            //
            //    }]
            //}, {
            //    items: [{
            //        xtype: 'textfield',
            //        name: 'propertyvalue',
            //        fieldLabel: "设备属性值"
            //
            //    }]
            }, {
                items: [{
                    xtype: 'combobox',
                    name: 'status',
                    fieldLabel: "状态",
                    hiddenName: 'status',
                    editable: false,
                    forceSelection: false,
                    store: Ext.create('TSMINFO.store.StatusStore'),
                    queryMode: 'local',
                    valueField: 'value',
                    displayField: 'name'
                }]
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
                        url: '/api/fire/devicemnt/device/exportExcel',
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
            fields: ['id', 'name', 'location', 'mac', 'createTime', 'startDate', 'lifeMonth', 'orgId', 'orgName', 'buildingId', 'buildingName', 'pointx', 'pointy', 'floorId', 'floorNumber', 'roomId', 'roomNumber', 'deviceTypeId', 'deviceTypeName', 'xrate', 'yrate', 'height', 'fheight', 'cheight', 'fireChiefPhone', 'fireChief', 'controllerId', 'maintenanceUnit', 'maintenanceuser', 'maintenancephone', 'firm', 'productdate', 'idcode', 'deviceurl', 'propertyvalue', 'status'],
            proxy: {
                type: 'ajax',
                url: '/api/fire/devicemnt/device/search',
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

                text: '设备名称',
                flex: 1,
                dataIndex: 'name',
                align: 'center'

            }, {
                text: '设备位置描述',
                flex: 1,
                dataIndex: 'location',
                align: 'center'

            }, /*{
                text: '设备物理地址',
                flex: 1,
                dataIndex: 'mac',
                align: 'center'

            },*/ {
                text: '设备添加时间',
                flex: 1,
                dataIndex: 'createTime',
                align: 'center'

            }, {
                text: '设备投入使用时间',
                flex: 1,
                dataIndex: 'startDate',
                align: 'center'

            }, /*{
                text: '寿命月数',
                flex: 1,
                dataIndex: 'lifeMonth',
                renderer: Ext.util.Format.numberRenderer('000'),
                align: 'center'

            }, {
                text: '所属单位id',
                flex: 1,
                dataIndex: 'orgId',
                renderer: Ext.util.Format.numberRenderer('000'),
                align: 'center'

            },*/ {
                text: '所属单位名称',
                flex: 1,
                dataIndex: 'orgName',
                align: 'center'

            }, /*{
                text: '所属建筑id',
                flex: 1,
                dataIndex: 'buildingId',
                renderer: Ext.util.Format.numberRenderer('000'),
                align: 'center'

            },*/ {
                text: '所属建筑名称',
                flex: 1,
                dataIndex: 'buildingName',
                align: 'center'

            }, /*{
                text: '经度',
                flex: 1,
                dataIndex: 'pointx',
                renderer: Ext.util.Format.numberRenderer('00.00'),
                align: 'center'

            }, {
                text: '纬度',
                flex: 1,
                dataIndex: 'pointy',
                renderer: Ext.util.Format.numberRenderer('00.00'),
                align: 'center'

            }, {
                text: '所属楼层id',
                flex: 1,
                dataIndex: 'floorId',
                renderer: Ext.util.Format.numberRenderer('000'),
                align: 'center'

            }, {
                text: '所属楼层名称',
                flex: 1,
                dataIndex: 'floorNumber',
                align: 'center'

            }, {
                text: '所属房间id',
                flex: 1,
                dataIndex: 'roomId',
                renderer: Ext.util.Format.numberRenderer('000'),
                align: 'center'

            },*/ {
                text: '所属房间号',
                flex: 1,
                dataIndex: 'roomNumber',
                align: 'center'

            }, /*{
                text: '设备类型id',
                flex: 1,
                dataIndex: 'deviceTypeId',
                renderer: Ext.util.Format.numberRenderer('000'),
                align: 'center'

            },*/ {
                text: '设备类型名称',
                flex: 1,
                dataIndex: 'deviceTypeName',
                align: 'center'

            }, /*{
                text: '平面图横轴位置',
                flex: 1,
                dataIndex: 'xrate',
                renderer: Ext.util.Format.numberRenderer('00.00'),
                align: 'center'

            }, {
                text: '平面图纵轴位置',
                flex: 1,
                dataIndex: 'yrate',
                renderer: Ext.util.Format.numberRenderer('00.00'),
                align: 'center'

            }, {
                text: '设备相对高度',
                flex: 1,
                dataIndex: 'height',
                renderer: Ext.util.Format.numberRenderer('000'),
                align: 'center'

            }, {
                text: '地板板高度',
                flex: 1,
                dataIndex: 'fheight',
                renderer: Ext.util.Format.numberRenderer('000'),
                align: 'center'

            }, {
                text: '天花板高度',
                flex: 1,
                dataIndex: 'cheight',
                renderer: Ext.util.Format.numberRenderer('00.00'),
                align: 'center'

            },*/ {
                text: '消防负责人电话',
                flex: 1,
                dataIndex: 'fireChiefPhone',
                align: 'center'

            }, {
                text: '消防负责人姓名',
                flex: 1,
                dataIndex: 'fireChief',
                align: 'center'

            }, /*{
                text: '所属报警主机id',
                flex: 1,
                dataIndex: 'controllerId',
                align: 'center'

            }, {
                text: '维保单位',
                flex: 1,
                dataIndex: 'maintenanceUnit',
                align: 'center'

            }, {
                text: '维保人员',
                flex: 1,
                dataIndex: 'maintenanceuser',
                align: 'center'

            }, {
                text: '维保电话',
                flex: 1,
                dataIndex: 'maintenancephone',
                align: 'center'

            }, {
                text: '生产厂家',
                flex: 1,
                dataIndex: 'firm',
                align: 'center'

            }, {
                text: '生产日期',
                flex: 1,
                dataIndex: 'productdate',
                align: 'center'

            }, {
                text: '设备序号',
                flex: 1,
                dataIndex: 'idcode',
                align: 'center'

            }, {
                text: '设备url',
                flex: 1,
                dataIndex: 'deviceurl',
                align: 'center'

            }, {
                text: '设备属性值',
                flex: 1,
                dataIndex: 'propertyvalue',
                align: 'center'

            },*/ {
                text: '状态',
                flex: 1,
                dataIndex: 'status',
                align: 'center',
                renderer: TsmFunc.rendererStore(Ext.create('TSMINFO.store.StatusStore'))

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
                fieldLabel: "设备名称",
                allowBlank: true
            }, {
                xtype: 'textfield',
                name: 'location',
                fieldLabel: "设备位置描述",
                allowBlank: true
            }, {
                xtype: 'textfield',
                name: 'mac',
                fieldLabel: "设备物理地址",
                allowBlank: true
            }, /*{
                xtype: 'textfield',
                name: 'createTime',
                fieldLabel: "设备添加时间",
                allowBlank: true
            },*/ {
                xtype: 'textfield',
                name: 'startDate',
                fieldLabel: "设备投入使用时间",
                allowBlank: true
            }, {
                xtype: 'numberfield',
                decimalPrecision: 6,
                format_style: "000",
                name: 'lifeMonth',
                fieldLabel: "寿命月数",
                allowBlank: true
            }, /*{
                xtype: 'numberfield',
                decimalPrecision: 6,
                format_style: "000",
                name: 'orgId',
                fieldLabel: "所属单位id",
                allowBlank: true
            },*/ {
                xtype: 'textfield',
                name: 'orgName',
                fieldLabel: "所属单位名称",
                allowBlank: true
            }, /*{
                xtype: 'numberfield',
                decimalPrecision: 6,
                format_style: "000",
                name: 'buildingId',
                fieldLabel: "所属建筑id",
                allowBlank: true
            },*/ {
                xtype: 'textfield',
                name: 'buildingName',
                fieldLabel: "所属建筑名称",
                allowBlank: true
            }, {
                xtype: 'numberfield',
                decimalPrecision: 6,
                format_style: "000.00",
                name: 'pointx',
                fieldLabel: "经度",
                allowBlank: true
            }, {
                xtype: 'numberfield',
                decimalPrecision: 6,
                format_style: "000.00",
                name: 'pointy',
                fieldLabel: "纬度",
                allowBlank: true
            }, /*{
                xtype: 'numberfield',
                decimalPrecision: 6,
                format_style: "000",
                name: 'floorId',
                fieldLabel: "所属楼层id",
                allowBlank: true
            },*/ {
                xtype: 'textfield',
                name: 'floorNumber',
                fieldLabel: "所属楼层名称",
                allowBlank: true
            }, /*{
                xtype: 'numberfield',
                decimalPrecision: 6,
                format_style: "000",
                name: 'roomId',
                fieldLabel: "所属房间id",
                allowBlank: true
            },*/ {
                xtype: 'textfield',
                name: 'roomNumber',
                fieldLabel: "所属房间号",
                allowBlank: true
            }, /*{
                xtype: 'numberfield',
                decimalPrecision: 6,
                format_style: "000",
                name: 'deviceTypeId',
                fieldLabel: "设备类型id",
                allowBlank: true
            },*/ {
                xtype: 'textfield',
                name: 'deviceTypeName',
                fieldLabel: "设备类型名称",
                allowBlank: true
            }, {
                xtype: 'numberfield',
                decimalPrecision: 6,
                format_style: "000.00",
                name: 'xrate',
                fieldLabel: "平面图横轴位置",
                allowBlank: true
            }, {
                xtype: 'numberfield',
                decimalPrecision: 6,
                format_style: "000.00",
                name: 'yrate',
                fieldLabel: "平面图纵轴位置",
                allowBlank: true
            }, /*{
                xtype: 'numberfield',
                decimalPrecision: 6,
                format_style: "000",
                name: 'height',
                fieldLabel: "设备相对高度",
                allowBlank: true
            }, {
                xtype: 'numberfield',
                decimalPrecision: 6,
                format_style: "000",
                name: 'fheight',
                fieldLabel: "地板板高度",
                allowBlank: true
            }, {
                xtype: 'numberfield',
                decimalPrecision: 6,
                format_style: "000.00",
                name: 'cheight',
                fieldLabel: "天花板高度",
                allowBlank: true
            },*/ {
                xtype: 'textfield',
                name: 'fireChiefPhone',
                fieldLabel: "消防负责人电话",
                allowBlank: true
            }, {
                xtype: 'textfield',
                name: 'fireChief',
                fieldLabel: "消防负责人姓名",
                allowBlank: true
            }, {
                xtype: 'textfield',
                name: 'controllerId',
                fieldLabel: "所属报警主机id",
                allowBlank: true
            }, {
                xtype: 'textfield',
                name: 'maintenanceUnit',
                fieldLabel: "维保单位",
                allowBlank: true
            }, {
                xtype: 'textfield',
                name: 'maintenanceuser',
                fieldLabel: "维保人员",
                allowBlank: true
            }, {
                xtype: 'textfield',
                name: 'maintenancephone',
                fieldLabel: "维保电话",
                allowBlank: true
            }, {
                xtype: 'textfield',
                name: 'firm',
                fieldLabel: "生产厂家",
                allowBlank: true
            }, {
                xtype: 'textfield',
                name: 'productdate',
                fieldLabel: "生产日期",
                allowBlank: true
            }, {
                xtype: 'textfield',
                name: 'idcode',
                fieldLabel: "设备序号",
                allowBlank: true
            }, {
                xtype: 'textfield',
                name: 'deviceurl',
                fieldLabel: "设备url",
                allowBlank: true
            }, /*{
                xtype: 'textfield',
                name: 'propertyvalue',
                fieldLabel: "设备属性值",
                allowBlank: true
            },*/ {
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
            }]
        })
        var win = Ext.create('Ext.Window', {
            title: cfg.title,
            width: 460,
            modal: true,
            layout: 'fit',
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
            items: [form]
        })
        return win;
    },
    addWin: function () {
        var win = this.createWindow({
            title: '新增设备管理',
            callback: function (form) {
                if (form.getForm().isValid()) {
                    form.getForm().submit({
                        url: '/api/fire/devicemnt/device/add',
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
            title: '修改设备管理',
            callback: function (form) {
                if (form.getForm().isValid()) {
                    form.getForm().submit({
                        url: '/api/fire/devicemnt/device/update',
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
                        url: '/api/fire/devicemnt/device/deletes',
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
                            url: '/api/fire/devicemnt/device/importExcel',
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
                                url: '/api/fire/devicemnt/device/delete',
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
                    title: '修改设备管理',
                    callback: function (form) {
                        if (form.getForm().isValid()) {
                            form.getForm().submit({
                                url: '/api/fire/devicemnt/device/update',
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