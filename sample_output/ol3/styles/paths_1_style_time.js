var size = 0;


var style_paths_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(43,131,74,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];var featuredatefrom = String(feature.get('year_from'));
var featuredateto = String(feature.get('year_to'));
if (featuredatefrom.length == 4) { featuredatefrom = featuredatefrom + '-01-01'; }
if (featuredatefrom.length == 7) { featuredatefrom = featuredatefrom + '-01'; }
if (featuredateto.length == 4) { featuredateto = featuredateto + '-01-01'; }
if (featuredateto.length == 7) { featuredateto = featuredateto + '-01'; }
if (
(featuredatefrom <= $('#datefrom').val() && featuredateto <= $('#datefrom').val())
||
(featuredatefrom >= $('#dateto').val() && featuredateto >= $('#dateto').val())
) {
style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(43,131,74,0.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill)
    })];
}

    return style;
}
function update() {

    var features = lyr_paths_1.getSource().getFeatures();
    features.forEach(function(feature){
        var context = {
            feature: feature,
            variables: {}
        };

        // Get the label text as a string
        var text = "";

        // Get the center point in pixel space
        var center = ol.extent.getCenter(feature.getGeometry().getExtent());
        var pixelCenter = map.getPixelFromCoordinate(center);

        var size = 12;
        var halfText = (size + 1) * (text.length / 4);

        // Create a bounding box for the label using known pixel heights
        var minx = parseInt(pixelCenter[0] - halfText);
        var maxx = parseInt(pixelCenter[0] + halfText);

        var maxy = parseInt(pixelCenter[1] - (size / 2));
        var miny = parseInt(pixelCenter[1] + (size / 2));

        // Get bounding box points back into coordinate space
        var min = map.getCoordinateFromPixel([minx, miny]);
        var max = map.getCoordinateFromPixel([maxx, maxy]);

        // Create the bounds
        var bounds = {
            bottomLeft: min,
            topRight: max
        };
        // Weight longer labels higher, use their name as the ID
        labelEngine.ingestLabel(bounds, text, text.length, feature)

    });

    // Call the label callbacks for showing and hiding
    labelEngine.update();

};
