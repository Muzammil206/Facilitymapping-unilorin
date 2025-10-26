var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_UnilorinDroneAerialView_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Unilorin Drone Aerial View<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/UnilorinDroneAerialView_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [519469.128758, 946914.612005, 520979.570666, 949060.688953]
        })
    });
var format_BuildingFacilities_2 = new ol.format.GeoJSON();
var features_BuildingFacilities_2 = format_BuildingFacilities_2.readFeatures(json_BuildingFacilities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BuildingFacilities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuildingFacilities_2.addFeatures(features_BuildingFacilities_2);
var lyr_BuildingFacilities_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BuildingFacilities_2, 
                style: style_BuildingFacilities_2,
                popuplayertitle: 'Building Facilities',
                interactive: true,
    title: 'Building Facilities<br />\
    <img src="styles/legend/BuildingFacilities_2_0.png" /> ACADEMICS<br />\
    <img src="styles/legend/BuildingFacilities_2_1.png" /> ADMINISTRATIVE<br />\
    <img src="styles/legend/BuildingFacilities_2_2.png" /> ADMINISTRATIVE/ACADEMICS<br />\
    <img src="styles/legend/BuildingFacilities_2_3.png" /> COMMERCIAL<br />\
    <img src="styles/legend/BuildingFacilities_2_4.png" /> HEALTH<br />\
    <img src="styles/legend/BuildingFacilities_2_5.png" /> HOSTEL<br />\
    <img src="styles/legend/BuildingFacilities_2_6.png" /> UTILITIES<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_UnilorinDroneAerialView_1.setVisible(true);lyr_BuildingFacilities_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_UnilorinDroneAerialView_1,lyr_BuildingFacilities_2];
lyr_BuildingFacilities_2.set('fieldAliases', {'BUILDING': 'Building Name', 'CATEGORY': 'Category', 'CORD_ID': 'CORD_ID', 'OFFICE_NO': 'Number of Offices', 'CLASS_NO': 'Number of Classroom', 'LAB_NO': 'Number of Laboratories', 'LIBRARY_NO': 'Number of Libraries', 'INSITU_NO': 'Professorial Suite', 'CAPACITY_1': 'Capacity for Students', 'SHOP_NO_1': 'Number of Shops', 'No_Toilets': 'Number of Toilets', });
lyr_BuildingFacilities_2.set('fieldImages', {'BUILDING': 'TextEdit', 'CATEGORY': 'TextEdit', 'CORD_ID': 'Range', 'OFFICE_NO': 'TextEdit', 'CLASS_NO': 'TextEdit', 'LAB_NO': 'TextEdit', 'LIBRARY_NO': 'TextEdit', 'INSITU_NO': 'TextEdit', 'CAPACITY_1': 'TextEdit', 'SHOP_NO_1': 'TextEdit', 'No_Toilets': 'Range', });
lyr_BuildingFacilities_2.set('fieldLabels', {'BUILDING': 'header label - always visible', 'CATEGORY': 'inline label - always visible', 'CORD_ID': 'hidden field', 'OFFICE_NO': 'inline label - visible with data', 'CLASS_NO': 'inline label - visible with data', 'LAB_NO': 'inline label - visible with data', 'LIBRARY_NO': 'inline label - visible with data', 'INSITU_NO': 'inline label - visible with data', 'CAPACITY_1': 'inline label - visible with data', 'SHOP_NO_1': 'inline label - visible with data', 'No_Toilets': 'inline label - visible with data', });
lyr_BuildingFacilities_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'darken';
});