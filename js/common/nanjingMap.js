Ext.define('Nanjing.extend.BMapPanel', {
    alias:'nanjingMap',
    constructor: function (configParam) {
        var configBase = {
            bmapType: 'map',
            border: false,
            zoomLevel: 15,
            centerCity: '南京',
            mapConfigs: ['enableScrollWheelZoom'],
            mapControls: [{
                controlName: 'ScaleControl',
                anchor: 'BMAP_ANCHOR_TOP_LEFT'
            }, {
                controlName: 'NavigationControl',
                anchor: 'BMAP_ANCHOR_TOP_RIGHT',
                type: 'BMAP_NAVIGATION_CONTROL_SMALL'
            }],
            markers: [{
                x: 118.773834,
                y: 32.048698,
                isDragging: true
            }, {
                x: 118.79101,
                y: 32.057083,
                isDragging: false
            }]
        };

        Ext.applyIf(configBase, configParam);

        return Ext.create('Ext.ux.BMapPanel', configBase);
    }
});