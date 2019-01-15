Ext.define('TSMINFO.store.MenuStore', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'Ext.data.proxy.Ajax'
    ],

    proxy: {
        type: 'ajax',
        url: '/api/system/module/userMenu',
        reader: {
            cfg: {
                expanded: true
            },
            read: TsmFunc.readSysTreeNode
        }
    },
    fields: ['moduleName', 'moduleUrl'],
    root: {
        moduleName: '系统菜单',
        id: '0',
        expanded: true,
        checked: false
    }

});
