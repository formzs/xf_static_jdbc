Ext.define('Nanjing.extend.BMapPanel', {
    alias:'nanjingMap',
    constructor: function (configParam) {
        var mapStyle = [
            {
                "featureType": "land",
                "elementType": "geometry",
                "stylers": {
                    "color": "#000000ff",
                    "hue": "#000000"
                }
            },
            {
                "featureType": "highway",
                "elementType": "geometry",
                "stylers": {
                    "color": "#444444ff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "green",
                "elementType": "geometry",
                "stylers": {
                    "color": "#000000ff"
                }
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": {
                    "color": "#181818"
                }
            },
            {
                "featureType": "local",
                "elementType": "geometry",
                "stylers": {
                    "color": "#222222ff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "subway",
                "elementType": "all",
                "stylers": {
                    "color": "#666666ff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "railway",
                "elementType": "geometry",
                "stylers": {
                    "color": "#999999ff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "boundary",
                "elementType": "geometry",
                "stylers": {
                    "color": "#666666ff",
                    "weight": "1"
                }
            },
            {
                "featureType": "building",
                "elementType": "geometry",
                "stylers": {
                    "color": "#333333ff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "poilabel",
                "elementType": "all",
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "featureType": "railway",
                "elementType": "geometry",
                "stylers": {
                    "color": "#333333ff"
                }
            },
            {
                "featureType": "subway",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#333333ff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "local",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#222222ff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "arterial",
                "elementType": "geometry",
                "stylers": {
                    "color": "#333333ff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "arterial",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#333333ff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "arterial",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#999999ff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "manmade",
                "elementType": "geometry",
                "stylers": {
                    "color": "#111111ff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "manmade",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#222222ff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "manmade",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#999999ff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "subwaystation",
                "elementType": "geometry",
                "stylers": {
                    "color": "#999999ff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "highway",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#444444ff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "highway",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#999999ff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "district",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#bad616ff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "district",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#ffffffff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "districtlabel",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#999999ff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "city",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#d2f217ff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "districtlabel",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#111111ff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "city",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#111111ff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "subway",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#ccccccff",
                    "visibility": "on"
                }
            },
            {
                "featureType": "highway",
                "elementType": "labels.icon",
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "featureType": "railway",
                "elementType": "labels.icon",
                "stylers": {
                    "color": "#ccccccff"
                }
            }
        ];
        var configBase = {
            bmapType: 'map',
            border: false,
            zoomLevel: 18,
            initPoint: [116.621656,40.127114],
            mapStyle: mapStyle,
            mapConfigs: ['enableScrollWheelZoom'],
            mapControls: [{
                controlName: 'ScaleControl',
                anchor: 'BMAP_ANCHOR_TOP_LEFT'
            }, /*{
                controlName: 'NavigationControl',
                anchor: 'BMAP_ANCHOR_TOP_RIGHT',
                type: 'BMAP_NAVIGATION_CONTROL_SMALL'
            }*/]/*,
            markers: [{
                x: 118.773834,
                y: 32.048698,
                isDragging: true
            }, {
                x: 118.79101,
                y: 32.057083,
                isDragging: false
            }]*/
        };

        Ext.applyIf(configBase, configParam);

        return Ext.create('Ext.ux.BMapPanel', configBase);
    }
});