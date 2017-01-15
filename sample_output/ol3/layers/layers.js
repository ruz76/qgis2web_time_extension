var format_buildings = new ol.format.GeoJSON();
var features_buildings = format_buildings.readFeatures(geojson_buildings, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings = new ol.source.Vector();
jsonSource_buildings.addFeatures(features_buildings);var lyr_buildings = new ol.layer.Vector({
                source:jsonSource_buildings, 
                style: style_buildings,
                title: "buildings"
            });var format_paths = new ol.format.GeoJSON();
var features_paths = format_paths.readFeatures(geojson_paths, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_paths = new ol.source.Vector();
jsonSource_paths.addFeatures(features_paths);var lyr_paths = new ol.layer.Vector({
                source:jsonSource_paths, 
                style: style_paths,
                title: "paths"
            });var format_places = new ol.format.GeoJSON();
var features_places = format_places.readFeatures(geojson_places, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_places = new ol.source.Vector();
jsonSource_places.addFeatures(features_places);var lyr_places = new ol.layer.Vector({
                source:jsonSource_places, 
                style: style_places,
                title: "places"
            });

lyr_buildings.setVisible(true);lyr_paths.setVisible(true);lyr_places.setVisible(true);
var layersList = [lyr_buildings,lyr_paths,lyr_places];
