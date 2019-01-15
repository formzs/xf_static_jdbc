Ext.define('TSMINFO.view.CenterPanel', {

    extend: 'Ext.TabPanel',

    id: 'CenterPanel',

    alias: 'widget.centerPanel',

    minTabWidth: 105,

    tabWidth: 105,

    bodyStyle: {
        background: '#ffffff',
        padding: '0'
    },

    border: 0,

    tabBar: {
        height: 34,
        defaults: {
            height: 30
        }
    }
});