var wms_layers = [];
var format_buildings_0 = new ol.format.GeoJSON();
var features_buildings_0 = format_buildings_0.readFeatures(json_buildings_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_buildings_0.addFeatures(features_buildings_0);var lyr_buildings_0 = new ol.layer.Vector({
                source:jsonSource_buildings_0, 
                style: style_buildings_0,
                title: '<img src="styles/legend/buildings_0.png" /> buildings'
            });var format_paths_1 = new ol.format.GeoJSON();
var features_paths_1 = format_paths_1.readFeatures(json_paths_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_paths_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_paths_1.addFeatures(features_paths_1);var lyr_paths_1 = new ol.layer.Vector({
                source:jsonSource_paths_1, 
                style: style_paths_1,
                title: '<img src="styles/legend/paths_1.png" /> paths'
            });var format_places_2 = new ol.format.GeoJSON();
var features_places_2 = format_places_2.readFeatures(json_places_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_places_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_places_2.addFeatures(features_places_2);var lyr_places_2 = new ol.layer.Vector({
                source:jsonSource_places_2, 
                style: style_places_2,
                title: '<img src="styles/legend/places_2.png" /> places'
            });

lyr_buildings_0.setVisible(true);lyr_paths_1.setVisible(true);lyr_places_2.setVisible(true);
var layersList = [lyr_buildings_0,lyr_paths_1,lyr_places_2];
lyr_buildings_0.set('fieldAliases', {'id': 'id', 'name': 'name', 'year_from': 'year_from', 'year_to': 'year_to', });
lyr_paths_1.set('fieldAliases', {'id': 'id', 'year_from': 'year_from', 'year_to': 'year_to', });
lyr_places_2.set('fieldAliases', {'id': 'id', 'year_from': 'year_from', 'year_to': 'year_to', });
lyr_buildings_0.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'year_from': 'TextEdit', 'year_to': 'TextEdit', });
lyr_paths_1.set('fieldImages', {'id': 'TextEdit', 'year_from': 'TextEdit', 'year_to': 'TextEdit', });
lyr_places_2.set('fieldImages', {'id': 'TextEdit', 'year_from': 'TextEdit', 'year_to': 'TextEdit', });
lyr_buildings_0.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'year_from': 'no label', 'year_to': 'no label', });
lyr_paths_1.set('fieldLabels', {'id': 'no label', 'year_from': 'no label', 'year_to': 'no label', });
lyr_places_2.set('fieldLabels', {'id': 'no label', 'year_from': 'no label', 'year_to': 'no label', });
lyr_places_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr_places_2.on("postcompose", update);

    var listenerKey = lyr_places_2.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });