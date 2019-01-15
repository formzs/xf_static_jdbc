Ext.override(Ext.data.Store, {
    defaultPageSize: TSM_STORE_LIMIT
})
Ext.override(Ext.form.ComboBox, {
    getSubmitData: function () {
        var me = this, data = null, val;
        if (!me.disabled && me.submitValue && !me.isFileUpload()) {
            val = me.getSubmitValue();
            data = {};
            if (val !== null) {
                data[me.getName()] = val;
            } else {
                data[me.getName()] = '';
            }
        }
        return data;
    }
})
Ext.override(Ext.form.Basic, {
    afterAction: function (action, success) {
        if (action.waitMsg) {
            var messageBox = Ext.MessageBox, waitMsgTarget = this.waitMsgTarget;
            if (waitMsgTarget === true) {
                this.owner.el.unmask();
            } else if (waitMsgTarget) {
                waitMsgTarget.unmask();
            } else {
                messageBox.suspendEvents();
                messageBox.hide();
                Ext.WindowMgr.sendToBack(messageBox);
                messageBox.resumeEvents();
            }
        }
        if (success) {
            if (action.reset) {
                this.reset();
            }
            Ext
                .callback(action.success, action.scope || action, [this,
                    action]);
            this.fireEvent('actioncomplete', this, action);
        } else {
            Ext.Function.defer(action.failure, 10, action.scope || action, [
                this, action]);
            this.fireEvent('actionfailed', this, action);
        }
    }
})

Ext.override(Ext.form.NumberField, {


    format_style: "000",
    setValue: function (v) {

        v = typeof v == 'number' ? v : String(v).replace(this.decimalSeparator,

            ".").replace(/,/g, "");

        v = isNaN(v) ? '' : Ext.util.Format.number(this.fixPrecision(String(v)), this.format_style);
        this.setRawValue(v);


    }

});

var TsmFunc = {

    showMask: function () {
        TsmFunc.scmMyMask = new Ext.LoadMask(Ext.getBody(), {
            removeMask: true,
            msg: "数据保存中..."
        });
        TsmFunc.scmMyMask.show();
    },
    hideMask: function () {
        if (TsmFunc.scmMyMask) {
            TsmFunc.scmMyMask.hide();
        }
    },
    createPagingToolbar: function (store) {
        return Ext.create('Ext.PagingToolbar', {
            cls:'t-panel-toolbar',
            height:34,
            store: store,
            pageSize: TSM_STORE_LIMIT,
            displayInfo: true
        });
    },
    storeLoad: function (grid) {
        grid.getStore().load({
            params: {
                start: 0,
                limit: TSM_STORE_LIMIT
            }
        });
    },
    storeIdsLoad: function (grid, ids) {
        grid.getStore().load({
            params: {
                ids: ids
            }
        });
    },
    rendererStore: function (store) {
        return function (v) {
            var index = store.find('value', v);
            if (index > -1) {
                v = store.getAt(index).data.name;
            }
            return v;
        }
    },

    rendererIdStore: function (store,valueName) {
        return function (v) {
            var s = store.findRecord('id', v);
            if (s != null) {
                v = s.data[valueName];
            }
            return v;
        }
    },

    renderer2Store: function (store, fieldName, valueName) {
        console.debug('fieldName:'+fieldName);
        return function (v) {
            var s = store.findRecord(fieldName, v);
            if (s != null) {
                v = s.data[valueName];
            }
            return v
        }
    },

    rendererCloumnTypeStore: function (store, fieldName, valueName) {

        return function (v) {
            var index = store.find(fieldName, v);
            if (index > -1) {
                v = store.getAt(index).data.typeName;
            }
            return v;
        }
    },



    showError: function (result, callback) {
        var message = '提交数据失败！';
        if (result && !Ext.isEmpty(result.errorCode)) {
            switch (result.errorCode) {
                case '200' :
                    message = '该用户已存在！';
                    break;
                case '100' :
                    message = '该数据不存在！';
                    break;
                case '114' :
                    message = result.message || '提交数据失败！';
                    break;
                case '115' :
                    message = 'EXCEL解析错误！';
                case '40031':
                    message = result.message;
                    break;
                default:
                    message = result.msg;

            }
        }
        setTimeout(function () {
            Ext.Msg.alert('提示', message, callback);
        }, 10)
    },

    showLocalError: function (errorText, callback) {

        setTimeout(function () {
            Ext.MessageBox.show({
                title: "提示",
                titleAlign:'center',
                closable:false,
                msg: errorText,
                modal: true,
                buttons: Ext.Msg.OK
            });
        }, 10);
    },

    /**
     * 服务器返回的错误提示
     * @param response
     */
    showRequestError: function(result, callback){
        var reponseText = "提交数据失败!";
        if (result != null && result.msg != null){
            reponseText = result.msg;
        }
        Ext.Msg.alert('提示', reponseText, callback);
    },

    readTreeNode: function (response) {
        var sNodes = Ext.decode(response.responseText);
        cfg = this.cfg || {};
        var key = cfg.key || 'id';
        var text = cfg.text || 'text';
        var parentKey = cfg.parentKey || 'parentId';
        var childKey = cfg.childKey || 'children';
        var checked = cfg.checked || false;
        var checkedVal = cfg.checkedVal || 'exist';
        var r = [];
        var tmpMap = [];
        var children;
        for (i = 0, l = sNodes.length; i < l; i++) {
            if (sNodes[i][key] != 0) {
                var c = {
                    id: sNodes[i].id,
                    leaf: true,
                    text: sNodes[i][text]
                };
                if (checked !== false) {
                    c.checked = sNodes[i][checkedVal] || false;
                    if (c.checked === true) {
                        c.expanded = true;
                    }
                }
                if (cfg.expanded === true) {
                    c.expanded = true;
                }
                Ext.applyIf(c, sNodes[i]);
                tmpMap[sNodes[i][key]] = c;
            }
        }
        for (i = 0, l = sNodes.length; i < l; i++) {
            if (sNodes[i][key] != 0) {
                if (tmpMap[sNodes[i][parentKey]]
                    && sNodes[i][key] != sNodes[i][parentKey]) {
                    if (!tmpMap[sNodes[i][parentKey]][childKey]) {
                        tmpMap[sNodes[i][parentKey]][childKey] = [];
                    }
                    if (!tmpMap[sNodes[i][parentKey]].children) {
                        tmpMap[sNodes[i][parentKey]].children = [];
                    }
                    tmpMap[sNodes[i][parentKey]].children
                        .push(tmpMap[sNodes[i][key]]);
                    tmpMap[sNodes[i][parentKey]].leaf = false;
                } else {
                    if (!children) {
                        children = [];
                    }
                    var pid = tmpMap[sNodes[i][key]][parentKey];
                    if (Ext.isEmpty(pid) || pid == 0 || pid == -1) {
                        children.push(tmpMap[sNodes[i][key]]);
                    }
                }
            }
        }
        return this.readRecords(children) || this.nullResultSet;
    },


    readSysTreeNode: function (response) {
        var sNodes = Ext.decode(response.responseText);
        cfg = this.cfg || {};
        var key = cfg.key || 'id';
        var text = cfg.text || 'text';
        var parentKey = cfg.parentKey || 'parentId';
        var childKey = cfg.childKey || 'children';
        var checked = cfg.checked || false;
        var checkedVal = cfg.checkedVal || 'exist';
        var r = [];
        var tmpMap = [];
        var children;
        for (i = 0, l = sNodes.length; i < l; i++) {
            if (sNodes[i][key] != 0) {
                var c = {
                    id: sNodes[i].id,
                    leaf: true,
                    text: sNodes[i][text],
                    cls:'tree-item-leaf'
                };
                if (checked !== false) {
                    c.checked = sNodes[i][checkedVal] || false;
                    if (c.checked === true) {
                        c.expanded = true;
                    }
                }
                if (cfg.expanded === true) {
                    c.expanded = true;
                }
                if(c.expanded && i != 0){
                    c.expanded = false;
                }
                Ext.applyIf(c, sNodes[i]);
                tmpMap[sNodes[i][key]] = c;
            }
        }
        for (i = 0, l = sNodes.length; i < l; i++) {
            if (sNodes[i][key] != 0) {
                if (tmpMap[sNodes[i][parentKey]]
                    && sNodes[i][key] != sNodes[i][parentKey]) {
                    if (!tmpMap[sNodes[i][parentKey]][childKey]) {
                        tmpMap[sNodes[i][parentKey]][childKey] = [];
                    }
                    if (!tmpMap[sNodes[i][parentKey]].children) {
                        tmpMap[sNodes[i][parentKey]].children = [];
                    }
                    tmpMap[sNodes[i][parentKey]].children
                        .push(tmpMap[sNodes[i][key]]);
                    tmpMap[sNodes[i][parentKey]].leaf = false;
                    tmpMap[sNodes[i][parentKey]].cls = 'tree-item-parent';
                } else {
                    if (!children) {
                        children = [];
                    }
                    var pid = tmpMap[sNodes[i][key]][parentKey];
                    if (Ext.isEmpty(pid) || pid == 0 || pid == -1) {
                        children.push(tmpMap[sNodes[i][key]]);
                    }
                }
            }
        }
        return this.readRecords(children) || this.nullResultSet;
    },

    updPassword: function (v) {
        var win = Ext.create('Ext.Window', {
            title: '修改密码',
            modal: true,
            width: 360,
            layout: 'fit',
            items: [{
                xtype: 'form',
                border: false,
                bodyStyle: 'padding:10px;',
                labelWidth: 60,
                labelAlign: 'right',
                items: [{
                    name: 'oldpwd',
                    xtype: 'textfield',
                    allowBlank: false,
                    fieldLabel: '旧密码',
                    anchor: '-20',
                    inputType: 'password'
                }, {
                    name: 'password',
                    xtype: 'textfield',
                    allowBlank: false,
                    fieldLabel: '新密码',
                    anchor: '-20',
                    inputType: 'password'
                }, {
                    xtype: 'textfield',
                    allowBlank: false,
                    fieldLabel: '确认密码',
                    anchor: '-20',
                    inputType: 'password',
                    validator: function (v) {
                        var pwd = win.getComponent(0).getForm()
                            .findField('password');
                        if (v != pwd.getValue()) {
                            return "两次输入的密码不一致"
                        } else {
                            return true;
                        }
                    }
                }]
            }],
            buttons: [{
                text: '保存',
                scope: this,
                handler: function () {
                    var form = win.getComponent(0);
                    if (form.getForm().isValid()) {
                        form.getForm().submit({
                            url: 'system/sysuser/updatePassword',
                            method: 'post',
                            waitTitle: '提示',
                            scope: this,
                            params: {
                                id: v
                            },
                            waitMsg: '正在提交数据, 请稍侯 ...',
                            success: function () {
                                win.close();
                                Ext.Msg.alert("提示", "你的密码修改成功！",
                                    function () {

                                    }, this)
                            },
                            failure: function (f, action) {
                                Ext.Msg.alert("提示",
                                    action.result.message
                                    || "你的密码修改失败！")
                            }
                        })
                    }
                }
            }, {
                text: '关闭',
                handler: function () {
                    win.close();
                }
            }]
        })
        win.show();
    },

    mapIsEmpty: function(map){

        for (var key in map){
            return false;
        }
        return true;
    }
}

TsmFunc.treeUtil = {
    checkchangeFunc: function (node, checked) {
        var parentNode = node.parentNode;
        TsmFunc.treeUtil.parentCheck(node.parentNode, checked);
        TsmFunc.treeUtil.childCheck(node, checked);
    },
    parentCheck: function (node, checked) {
        if ((Ext.isEmpty(node)) || node && !checked
            && TsmFunc.treeUtil.childHasChecked(node)) {
            return;
        }
        node.set('checked', checked)
        this.parentCheck(node.parentNode, checked);
    },
    childCheck: function (node, checked) {
        if (!node.get('leaf')) {
            var cs = node.childNodes;
            var csui;
            for (var i = 0; i < cs.length; i++) {
                if (cs[i].get('checked') ^ checked)
                    cs[i].set('checked', checked)
            }
        }
    },
    childHasChecked: function (node) {
        var childNodes = node.childNodes;
        if (childNodes || childNodes.length > 0) {
            for (var i = 0; i < childNodes.length; i++) {
                if (childNodes[i].get('checked')) {
                    return true;
                }
            }
        }
        return false;
    }
}

Ext.Ajax.CheckUserSessionStatus = function (conn, response, options) {
    if (response.getResponseHeader) {
        if (response.getResponseHeader('sessionstatus') == 'timeout') {
            var opt = Ext.apply({}, options);
            options.success = Ext.emptyFn;
            options.failure = Ext.emptyFn;
            var win = Ext.getCmp('loginPanel');
            if (Ext.isEmpty(win)) {
                win = Ext.widget('login', {
                    successFn: function () {
                        conn.request(opt);
                    }
                });
            }
            win.show();
        }
    }
}

TsmFunc.dateUtil = {
    calculateDays: function (beginDate, endDate) {
        if (!Ext.isEmpty(beginDate) && !Ext.isEmpty(endDate)) {
            var end = new Date(Ext.util.Format.date(endDate, 'Y-m-d'));
            var start = new Date(Ext.util.Format.date(beginDate, 'Y-m-d'));
            return ( end.getTime() - start.getTime() ) / 86400000;
        }
    }
}

TsmFunc.createImageWindow = function (cfg) {
    var form = Ext.create('Ext.form.Panel', {
        cls:'tsminfo_form',
        border: false,
        height: 440,
        scrollable:'y',
        defaults: {
            border: false
        },

        items: [{

            layout: {
                type: 'hbox',
                align: 'middle ',
                pack: 'center'
            },
            xtype: 'image',
            name: 'avatarPath',
            width: 440,
            cls:'tsminfo_img',
            src: cfg.imagePath,
            readOnly: true

        }]
    });
    var win = Ext.create('Ext.Window', {
        title: cfg.title,
        width: 500,
        height: 500,
        modal: true,
        layout: 'fit',
        buttons: [{
            text: '关闭',
            handler: function () {
                win.close();
            }
        }],
        items: [form]
    });
    return win;
}



Ext.Ajax.on('requestcomplete', Ext.Ajax.CheckUserSessionStatus, this);

