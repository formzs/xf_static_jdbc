/**
 * 登录视图
 */
Ext.define("TSMINFO.view.LoginPanel", {

    extend: 'Ext.Panel',

    alias: 'widget.login',

    requires: [
        'Ext.button.Button',
        'Ext.layout.container.Fit'
    ],

    layout: 'fit',

    closable:false,

    width: 400,

    //title: '用户登录',

    id: 'loginPanel',

    initComponent: function () {
        this.callParent();
        this.loginForm = Ext.widget('form', {
            bodyStyle: 'padding:20px;background:white;',

            buttonsAlign: 'center',
            url: '/api/system/login',
            border: false,
            defaults: {
                labelAlign: 'top',
                allowBlank: false,
                msgTarget: 'side',
                labelWidth: 50,
                height: 70
            },
            defaultType: 'textfield',
            items: [{
                xtype:'tbtext',
                height:40,
                text:'<Text style="font-size: 18px;color: #373D41">用户登录</Text>',
                cls:'x-login-body-text'
            },{
                fieldLabel: '用户名',
                anchor: '100%',
                name: 'name',
                allowBlank: false,
                value: ''
            }, {
                fieldLabel: '密码',
                anchor: '100%',
                inputType: 'password',
                name: 'password',
                allowBlank: false,
                enableKeyEvents: true,
                value: '',
                listeners: {
                    specialkey: function (fied, e) {
                        if (e.getKey() == e.ENTER) {
                            this.onLogin();
                        }
                    },
                    scope: this
                }
            }, {
                xtype: 'button',
                text: '登录',
                style:'color: white !important;',
                anchor : '100%',
                cls:'x-login-btn',
                height:40,
                handler: function () {
                    this.onLogin();
                },
                scope: this
            }]
        });
        this.add(this.loginForm);
    },
    onLogin: function () {
        var form = this.loginForm.getForm();

        if (form.isValid()) {

            form.submit({
                waitTitle: '用户登录',
                waitMsg: '正在登录...',
                scope: this,
                success: function (form, action) {
                    Ext.util.Cookies.set("userName", action.result.currentUser.userName);
                    Ext.util.Cookies.set("userType", action.result.userType);
                    this.loginForm.setVisible(false);
                    this.close();
                    this.successFn();
                },
                failure: function (form, action) {
                    Ext.Msg.alert('提示', action.result.msg
                        || '用户名或密码错误！');
                }
            });
        }
    },
    successFn: Ext.emptyFn
});