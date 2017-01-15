var size = 0;

var styleCache_paths={}
var style_paths = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(43,131,74,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
    })];if (feature.get('year_from') <= $('#date').val() && feature.get('year_to') >= $('#date').val()) {
style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(43,131,74,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
    })];
} else {
style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(43,131,74,0.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
    })];
}
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_paths[key]){
        var text = new ol.style.Text({
              font: '10px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(None, None, None, 255)"
              }),
            });
        styleCache_paths[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_paths[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};