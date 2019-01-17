Ext.define('Ext.ux.BMapPanel', {
    extend: 'Ext.Panel',

    alias: 'widget.bmappanel',

    requires: ['Ext.window.MessageBox'],

    initComponent: function () {
        Ext.applyIf(this.bmap, this.config);
        this.callParent();
    },

    afterRender: function () {
        //设置panel属性
        var wh = this.ownerCt.getSize();
        Ext.applyIf(this, wh);
        this.callParent();

        //设置百度地图属性
        if (this.bmapType === 'map') {
            this.bmap = new BMap.Map(this.body.dom);
        }

        if (this.bmapType === 'map') {
            this.bmap.centerAndZoom(new BMap.Point(this.initPoint[0],this.initPoint[1]), this.zoomLevel); //设置初始化中心点
        }

        this.onMapReady(); //地图加载项
    },
    onMapReady: function () {
        this.addMapConfigs(); //添加地图属性
        this.addMapControls(); //添加地图控件
        this.addMapMarkers(this.markers); //添加标记
        this.addMapStyle(this.mapStyle);
    },
    getMap: function () {
        return this.bmap;
    },
    addMapMarkers: function (markerArray) {
        if (Ext.isArray(markerArray)) {
            for (var i = 0; i < markerArray.length; i++) {
                this.addMapMarker(markerArray[i]);
            }
        }
    },
    addMapMarker: function (markerParam) {
        var point = new BMap.Point(markerParam.x, markerParam.y); //创建图点
        var markerBase = new BMap.Marker(point); //创建标记

        if (markerParam.isDragging == true)
            markerBase.enableDragging();
        else
            markerBase.disableDragging();

        this.getMap().addOverlay(markerBase); //标记覆盖入地图
    },
    addMapControls: function () {
        if (Ext.isArray(this.mapControls)) {
            for (var i = 0; i < this.mapControls.length; i++) {
                this.addMapControl(this.mapControls[i]);
            }
        }
    },
    addMapControl: function (controlParam) {
        var controlBase = new BMap[controlParam.controlName](controlParam);
        this.getMap().addControl(controlBase);
    },
    addMapConfigs: function () {
        if (Ext.isArray(this.mapConfigs)) {
            for (var i = 0; i < this.mapConfigs.length; i++) {
                this.addMapConfig(this.mapConfigs[i]);
            }
        } else if (typeof this.mapConfigs === 'string') {
            this.addMapConfig(this.mapConfigs);
        }

    },
    addMapConfig: function (configParam) {
        this.getMap()[configParam]();
    },
    addMapStyle: function (mapStyle) {
        this.getMap().setMapStyle({styleJson:mapStyle});
    }
});