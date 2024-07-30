var wms_layers = [];


        var lyr_googlesatellitehybrid_0 = new ol.layer.Tile({
            'title': 'google satellite hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_12_PFS_kWhm2_mensual_1 = new ol.format.GeoJSON();
var features_12_PFS_kWhm2_mensual_1 = format_12_PFS_kWhm2_mensual_1.readFeatures(json_12_PFS_kWhm2_mensual_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12_PFS_kWhm2_mensual_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12_PFS_kWhm2_mensual_1.addFeatures(features_12_PFS_kWhm2_mensual_1);
var lyr_12_PFS_kWhm2_mensual_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_12_PFS_kWhm2_mensual_1, 
                style: style_12_PFS_kWhm2_mensual_1,
                popuplayertitle: "12_PFS_kWhm2_mensual",
                interactive: true,
    title: '12_PFS_kWhm2_mensual<br />\
    <img src="styles/legend/12_PFS_kWhm2_mensual_1_0.png" /> 40 - 58<br />\
    <img src="styles/legend/12_PFS_kWhm2_mensual_1_1.png" /> 58 - 76<br />\
    <img src="styles/legend/12_PFS_kWhm2_mensual_1_2.png" /> 76 - 94<br />\
    <img src="styles/legend/12_PFS_kWhm2_mensual_1_3.png" /> 94 - 112<br />\
    <img src="styles/legend/12_PFS_kWhm2_mensual_1_4.png" /> 112 - 130<br />\
    <img src="styles/legend/12_PFS_kWhm2_mensual_1_5.png" /> 130 - 148<br />\
    <img src="styles/legend/12_PFS_kWhm2_mensual_1_6.png" /> 148 - 166<br />\
    <img src="styles/legend/12_PFS_kWhm2_mensual_1_7.png" /> 166 - 184<br />\
    <img src="styles/legend/12_PFS_kWhm2_mensual_1_8.png" /> 184 - 202<br />\
    <img src="styles/legend/12_PFS_kWhm2_mensual_1_9.png" /> 202 - 220<br />'
        });
var format_11_PFS_kWhm2_mensual_2 = new ol.format.GeoJSON();
var features_11_PFS_kWhm2_mensual_2 = format_11_PFS_kWhm2_mensual_2.readFeatures(json_11_PFS_kWhm2_mensual_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11_PFS_kWhm2_mensual_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11_PFS_kWhm2_mensual_2.addFeatures(features_11_PFS_kWhm2_mensual_2);
var lyr_11_PFS_kWhm2_mensual_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_11_PFS_kWhm2_mensual_2, 
                style: style_11_PFS_kWhm2_mensual_2,
                popuplayertitle: "11_PFS_kWhm2_mensual",
                interactive: true,
    title: '11_PFS_kWhm2_mensual<br />\
    <img src="styles/legend/11_PFS_kWhm2_mensual_2_0.png" /> 40 - 58<br />\
    <img src="styles/legend/11_PFS_kWhm2_mensual_2_1.png" /> 58 - 76<br />\
    <img src="styles/legend/11_PFS_kWhm2_mensual_2_2.png" /> 76 - 94<br />\
    <img src="styles/legend/11_PFS_kWhm2_mensual_2_3.png" /> 94 - 112<br />\
    <img src="styles/legend/11_PFS_kWhm2_mensual_2_4.png" /> 112 - 130<br />\
    <img src="styles/legend/11_PFS_kWhm2_mensual_2_5.png" /> 130 - 148<br />\
    <img src="styles/legend/11_PFS_kWhm2_mensual_2_6.png" /> 148 - 166<br />\
    <img src="styles/legend/11_PFS_kWhm2_mensual_2_7.png" /> 166 - 184<br />\
    <img src="styles/legend/11_PFS_kWhm2_mensual_2_8.png" /> 184 - 202<br />\
    <img src="styles/legend/11_PFS_kWhm2_mensual_2_9.png" /> 202 - 220<br />'
        });
var format_10_PFS_kWhm2_mensual_3 = new ol.format.GeoJSON();
var features_10_PFS_kWhm2_mensual_3 = format_10_PFS_kWhm2_mensual_3.readFeatures(json_10_PFS_kWhm2_mensual_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10_PFS_kWhm2_mensual_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10_PFS_kWhm2_mensual_3.addFeatures(features_10_PFS_kWhm2_mensual_3);
var lyr_10_PFS_kWhm2_mensual_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10_PFS_kWhm2_mensual_3, 
                style: style_10_PFS_kWhm2_mensual_3,
                popuplayertitle: "10_PFS_kWhm2_mensual",
                interactive: true,
    title: '10_PFS_kWhm2_mensual<br />\
    <img src="styles/legend/10_PFS_kWhm2_mensual_3_0.png" /> 40 - 58<br />\
    <img src="styles/legend/10_PFS_kWhm2_mensual_3_1.png" /> 58 - 76<br />\
    <img src="styles/legend/10_PFS_kWhm2_mensual_3_2.png" /> 76 - 94<br />\
    <img src="styles/legend/10_PFS_kWhm2_mensual_3_3.png" /> 94 - 112<br />\
    <img src="styles/legend/10_PFS_kWhm2_mensual_3_4.png" /> 112 - 130<br />\
    <img src="styles/legend/10_PFS_kWhm2_mensual_3_5.png" /> 130 - 148<br />\
    <img src="styles/legend/10_PFS_kWhm2_mensual_3_6.png" /> 148 - 166<br />\
    <img src="styles/legend/10_PFS_kWhm2_mensual_3_7.png" /> 166 - 184<br />\
    <img src="styles/legend/10_PFS_kWhm2_mensual_3_8.png" /> 184 - 202<br />\
    <img src="styles/legend/10_PFS_kWhm2_mensual_3_9.png" /> 202 - 220<br />'
        });
var format_09_PFS_kWhm2_mensual_4 = new ol.format.GeoJSON();
var features_09_PFS_kWhm2_mensual_4 = format_09_PFS_kWhm2_mensual_4.readFeatures(json_09_PFS_kWhm2_mensual_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_09_PFS_kWhm2_mensual_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_09_PFS_kWhm2_mensual_4.addFeatures(features_09_PFS_kWhm2_mensual_4);
var lyr_09_PFS_kWhm2_mensual_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_09_PFS_kWhm2_mensual_4, 
                style: style_09_PFS_kWhm2_mensual_4,
                popuplayertitle: "09_PFS_kWhm2_mensual",
                interactive: true,
    title: '09_PFS_kWhm2_mensual<br />\
    <img src="styles/legend/09_PFS_kWhm2_mensual_4_0.png" /> 40 - 58<br />\
    <img src="styles/legend/09_PFS_kWhm2_mensual_4_1.png" /> 58 - 76<br />\
    <img src="styles/legend/09_PFS_kWhm2_mensual_4_2.png" /> 76 - 94<br />\
    <img src="styles/legend/09_PFS_kWhm2_mensual_4_3.png" /> 94 - 112<br />\
    <img src="styles/legend/09_PFS_kWhm2_mensual_4_4.png" /> 112 - 130<br />\
    <img src="styles/legend/09_PFS_kWhm2_mensual_4_5.png" /> 130 - 148<br />\
    <img src="styles/legend/09_PFS_kWhm2_mensual_4_6.png" /> 148 - 166<br />\
    <img src="styles/legend/09_PFS_kWhm2_mensual_4_7.png" /> 166 - 184<br />\
    <img src="styles/legend/09_PFS_kWhm2_mensual_4_8.png" /> 184 - 202<br />\
    <img src="styles/legend/09_PFS_kWhm2_mensual_4_9.png" /> 202 - 220<br />'
        });
var format_08_PFS_kWhm2_mensual_5 = new ol.format.GeoJSON();
var features_08_PFS_kWhm2_mensual_5 = format_08_PFS_kWhm2_mensual_5.readFeatures(json_08_PFS_kWhm2_mensual_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_08_PFS_kWhm2_mensual_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_08_PFS_kWhm2_mensual_5.addFeatures(features_08_PFS_kWhm2_mensual_5);
var lyr_08_PFS_kWhm2_mensual_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_08_PFS_kWhm2_mensual_5, 
                style: style_08_PFS_kWhm2_mensual_5,
                popuplayertitle: "08_PFS_kWhm2_mensual",
                interactive: true,
    title: '08_PFS_kWhm2_mensual<br />\
    <img src="styles/legend/08_PFS_kWhm2_mensual_5_0.png" /> 40 - 58<br />\
    <img src="styles/legend/08_PFS_kWhm2_mensual_5_1.png" /> 58 - 76<br />\
    <img src="styles/legend/08_PFS_kWhm2_mensual_5_2.png" /> 76 - 94<br />\
    <img src="styles/legend/08_PFS_kWhm2_mensual_5_3.png" /> 94 - 112<br />\
    <img src="styles/legend/08_PFS_kWhm2_mensual_5_4.png" /> 112 - 130<br />\
    <img src="styles/legend/08_PFS_kWhm2_mensual_5_5.png" /> 130 - 148<br />\
    <img src="styles/legend/08_PFS_kWhm2_mensual_5_6.png" /> 148 - 166<br />\
    <img src="styles/legend/08_PFS_kWhm2_mensual_5_7.png" /> 166 - 184<br />\
    <img src="styles/legend/08_PFS_kWhm2_mensual_5_8.png" /> 184 - 202<br />\
    <img src="styles/legend/08_PFS_kWhm2_mensual_5_9.png" /> 202 - 220<br />'
        });
var format_07_PFS_kWhm2_mensual_6 = new ol.format.GeoJSON();
var features_07_PFS_kWhm2_mensual_6 = format_07_PFS_kWhm2_mensual_6.readFeatures(json_07_PFS_kWhm2_mensual_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_07_PFS_kWhm2_mensual_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07_PFS_kWhm2_mensual_6.addFeatures(features_07_PFS_kWhm2_mensual_6);
var lyr_07_PFS_kWhm2_mensual_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_07_PFS_kWhm2_mensual_6, 
                style: style_07_PFS_kWhm2_mensual_6,
                popuplayertitle: "07_PFS_kWhm2_mensual",
                interactive: true,
    title: '07_PFS_kWhm2_mensual<br />\
    <img src="styles/legend/07_PFS_kWhm2_mensual_6_0.png" /> 40 - 58<br />\
    <img src="styles/legend/07_PFS_kWhm2_mensual_6_1.png" /> 58 - 76<br />\
    <img src="styles/legend/07_PFS_kWhm2_mensual_6_2.png" /> 76 - 94<br />\
    <img src="styles/legend/07_PFS_kWhm2_mensual_6_3.png" /> 94 - 112<br />\
    <img src="styles/legend/07_PFS_kWhm2_mensual_6_4.png" /> 112 - 130<br />\
    <img src="styles/legend/07_PFS_kWhm2_mensual_6_5.png" /> 130 - 148<br />\
    <img src="styles/legend/07_PFS_kWhm2_mensual_6_6.png" /> 148 - 166<br />\
    <img src="styles/legend/07_PFS_kWhm2_mensual_6_7.png" /> 166 - 184<br />\
    <img src="styles/legend/07_PFS_kWhm2_mensual_6_8.png" /> 184 - 202<br />\
    <img src="styles/legend/07_PFS_kWhm2_mensual_6_9.png" /> 202 - 220<br />'
        });
var format_06_PFS_kWhm2_mensual_7 = new ol.format.GeoJSON();
var features_06_PFS_kWhm2_mensual_7 = format_06_PFS_kWhm2_mensual_7.readFeatures(json_06_PFS_kWhm2_mensual_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_06_PFS_kWhm2_mensual_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_06_PFS_kWhm2_mensual_7.addFeatures(features_06_PFS_kWhm2_mensual_7);
var lyr_06_PFS_kWhm2_mensual_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_06_PFS_kWhm2_mensual_7, 
                style: style_06_PFS_kWhm2_mensual_7,
                popuplayertitle: "06_PFS_kWhm2_mensual",
                interactive: true,
    title: '06_PFS_kWhm2_mensual<br />\
    <img src="styles/legend/06_PFS_kWhm2_mensual_7_0.png" /> 40 - 58<br />\
    <img src="styles/legend/06_PFS_kWhm2_mensual_7_1.png" /> 58 - 76<br />\
    <img src="styles/legend/06_PFS_kWhm2_mensual_7_2.png" /> 76 - 94<br />\
    <img src="styles/legend/06_PFS_kWhm2_mensual_7_3.png" /> 94 - 112<br />\
    <img src="styles/legend/06_PFS_kWhm2_mensual_7_4.png" /> 112 - 130<br />\
    <img src="styles/legend/06_PFS_kWhm2_mensual_7_5.png" /> 130 - 148<br />\
    <img src="styles/legend/06_PFS_kWhm2_mensual_7_6.png" /> 148 - 166<br />\
    <img src="styles/legend/06_PFS_kWhm2_mensual_7_7.png" /> 166 - 184<br />\
    <img src="styles/legend/06_PFS_kWhm2_mensual_7_8.png" /> 184 - 202<br />\
    <img src="styles/legend/06_PFS_kWhm2_mensual_7_9.png" /> 202 - 220<br />'
        });
var format_05_PFS_kWhm2_mensual_8 = new ol.format.GeoJSON();
var features_05_PFS_kWhm2_mensual_8 = format_05_PFS_kWhm2_mensual_8.readFeatures(json_05_PFS_kWhm2_mensual_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_PFS_kWhm2_mensual_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_PFS_kWhm2_mensual_8.addFeatures(features_05_PFS_kWhm2_mensual_8);
var lyr_05_PFS_kWhm2_mensual_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_PFS_kWhm2_mensual_8, 
                style: style_05_PFS_kWhm2_mensual_8,
                popuplayertitle: "05_PFS_kWhm2_mensual",
                interactive: true,
    title: '05_PFS_kWhm2_mensual<br />\
    <img src="styles/legend/05_PFS_kWhm2_mensual_8_0.png" /> 40 - 58<br />\
    <img src="styles/legend/05_PFS_kWhm2_mensual_8_1.png" /> 58 - 76<br />\
    <img src="styles/legend/05_PFS_kWhm2_mensual_8_2.png" /> 76 - 94<br />\
    <img src="styles/legend/05_PFS_kWhm2_mensual_8_3.png" /> 94 - 112<br />\
    <img src="styles/legend/05_PFS_kWhm2_mensual_8_4.png" /> 112 - 130<br />\
    <img src="styles/legend/05_PFS_kWhm2_mensual_8_5.png" /> 130 - 148<br />\
    <img src="styles/legend/05_PFS_kWhm2_mensual_8_6.png" /> 148 - 166<br />\
    <img src="styles/legend/05_PFS_kWhm2_mensual_8_7.png" /> 166 - 184<br />\
    <img src="styles/legend/05_PFS_kWhm2_mensual_8_8.png" /> 184 - 202<br />\
    <img src="styles/legend/05_PFS_kWhm2_mensual_8_9.png" /> 202 - 220<br />'
        });
var format_04_PFS_kWhm2_mensual_9 = new ol.format.GeoJSON();
var features_04_PFS_kWhm2_mensual_9 = format_04_PFS_kWhm2_mensual_9.readFeatures(json_04_PFS_kWhm2_mensual_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_PFS_kWhm2_mensual_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_PFS_kWhm2_mensual_9.addFeatures(features_04_PFS_kWhm2_mensual_9);
var lyr_04_PFS_kWhm2_mensual_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_PFS_kWhm2_mensual_9, 
                style: style_04_PFS_kWhm2_mensual_9,
                popuplayertitle: "04_PFS_kWhm2_mensual",
                interactive: true,
    title: '04_PFS_kWhm2_mensual<br />\
    <img src="styles/legend/04_PFS_kWhm2_mensual_9_0.png" /> 40 - 58<br />\
    <img src="styles/legend/04_PFS_kWhm2_mensual_9_1.png" /> 58 - 76<br />\
    <img src="styles/legend/04_PFS_kWhm2_mensual_9_2.png" /> 76 - 94<br />\
    <img src="styles/legend/04_PFS_kWhm2_mensual_9_3.png" /> 94 - 112<br />\
    <img src="styles/legend/04_PFS_kWhm2_mensual_9_4.png" /> 112 - 130<br />\
    <img src="styles/legend/04_PFS_kWhm2_mensual_9_5.png" /> 130 - 148<br />\
    <img src="styles/legend/04_PFS_kWhm2_mensual_9_6.png" /> 148 - 166<br />\
    <img src="styles/legend/04_PFS_kWhm2_mensual_9_7.png" /> 166 - 184<br />\
    <img src="styles/legend/04_PFS_kWhm2_mensual_9_8.png" /> 184 - 202<br />\
    <img src="styles/legend/04_PFS_kWhm2_mensual_9_9.png" /> 202 - 220<br />'
        });
var format_03_PFS_kWhm2_mensual_10 = new ol.format.GeoJSON();
var features_03_PFS_kWhm2_mensual_10 = format_03_PFS_kWhm2_mensual_10.readFeatures(json_03_PFS_kWhm2_mensual_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03_PFS_kWhm2_mensual_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03_PFS_kWhm2_mensual_10.addFeatures(features_03_PFS_kWhm2_mensual_10);
var lyr_03_PFS_kWhm2_mensual_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03_PFS_kWhm2_mensual_10, 
                style: style_03_PFS_kWhm2_mensual_10,
                popuplayertitle: "03_PFS_kWhm2_mensual",
                interactive: true,
    title: '03_PFS_kWhm2_mensual<br />\
    <img src="styles/legend/03_PFS_kWhm2_mensual_10_0.png" /> 40 - 58<br />\
    <img src="styles/legend/03_PFS_kWhm2_mensual_10_1.png" /> 58 - 76<br />\
    <img src="styles/legend/03_PFS_kWhm2_mensual_10_2.png" /> 76 - 94<br />\
    <img src="styles/legend/03_PFS_kWhm2_mensual_10_3.png" /> 94 - 112<br />\
    <img src="styles/legend/03_PFS_kWhm2_mensual_10_4.png" /> 112 - 130<br />\
    <img src="styles/legend/03_PFS_kWhm2_mensual_10_5.png" /> 130 - 148<br />\
    <img src="styles/legend/03_PFS_kWhm2_mensual_10_6.png" /> 148 - 166<br />\
    <img src="styles/legend/03_PFS_kWhm2_mensual_10_7.png" /> 166 - 184<br />\
    <img src="styles/legend/03_PFS_kWhm2_mensual_10_8.png" /> 184 - 202<br />\
    <img src="styles/legend/03_PFS_kWhm2_mensual_10_9.png" /> 202 - 220<br />'
        });
var format_02_PFS_kWhm2_mensual_11 = new ol.format.GeoJSON();
var features_02_PFS_kWhm2_mensual_11 = format_02_PFS_kWhm2_mensual_11.readFeatures(json_02_PFS_kWhm2_mensual_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_02_PFS_kWhm2_mensual_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02_PFS_kWhm2_mensual_11.addFeatures(features_02_PFS_kWhm2_mensual_11);
var lyr_02_PFS_kWhm2_mensual_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_02_PFS_kWhm2_mensual_11, 
                style: style_02_PFS_kWhm2_mensual_11,
                popuplayertitle: "02_PFS_kWhm2_mensual",
                interactive: true,
    title: '02_PFS_kWhm2_mensual<br />\
    <img src="styles/legend/02_PFS_kWhm2_mensual_11_0.png" /> 40 - 58<br />\
    <img src="styles/legend/02_PFS_kWhm2_mensual_11_1.png" /> 58 - 76<br />\
    <img src="styles/legend/02_PFS_kWhm2_mensual_11_2.png" /> 76 - 94<br />\
    <img src="styles/legend/02_PFS_kWhm2_mensual_11_3.png" /> 94 - 112<br />\
    <img src="styles/legend/02_PFS_kWhm2_mensual_11_4.png" /> 112 - 130<br />\
    <img src="styles/legend/02_PFS_kWhm2_mensual_11_5.png" /> 130 - 148<br />\
    <img src="styles/legend/02_PFS_kWhm2_mensual_11_6.png" /> 148 - 166<br />\
    <img src="styles/legend/02_PFS_kWhm2_mensual_11_7.png" /> 166 - 184<br />\
    <img src="styles/legend/02_PFS_kWhm2_mensual_11_8.png" /> 184 - 202<br />\
    <img src="styles/legend/02_PFS_kWhm2_mensual_11_9.png" /> 202 - 220<br />'
        });
var format_01_PFS_kWhm2_mensual_12 = new ol.format.GeoJSON();
var features_01_PFS_kWhm2_mensual_12 = format_01_PFS_kWhm2_mensual_12.readFeatures(json_01_PFS_kWhm2_mensual_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_01_PFS_kWhm2_mensual_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01_PFS_kWhm2_mensual_12.addFeatures(features_01_PFS_kWhm2_mensual_12);
var lyr_01_PFS_kWhm2_mensual_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01_PFS_kWhm2_mensual_12, 
                style: style_01_PFS_kWhm2_mensual_12,
                popuplayertitle: "01_PFS_kWhm2_mensual",
                interactive: true,
    title: '01_PFS_kWhm2_mensual<br />\
    <img src="styles/legend/01_PFS_kWhm2_mensual_12_0.png" /> 40 - 58<br />\
    <img src="styles/legend/01_PFS_kWhm2_mensual_12_1.png" /> 58 - 76<br />\
    <img src="styles/legend/01_PFS_kWhm2_mensual_12_2.png" /> 76 - 94<br />\
    <img src="styles/legend/01_PFS_kWhm2_mensual_12_3.png" /> 94 - 112<br />\
    <img src="styles/legend/01_PFS_kWhm2_mensual_12_4.png" /> 112 - 130<br />\
    <img src="styles/legend/01_PFS_kWhm2_mensual_12_5.png" /> 130 - 148<br />\
    <img src="styles/legend/01_PFS_kWhm2_mensual_12_6.png" /> 148 - 166<br />\
    <img src="styles/legend/01_PFS_kWhm2_mensual_12_7.png" /> 166 - 184<br />\
    <img src="styles/legend/01_PFS_kWhm2_mensual_12_8.png" /> 184 - 202<br />\
    <img src="styles/legend/01_PFS_kWhm2_mensual_12_9.png" /> 202 - 220<br />'
        });
var format_PFS_kWhm2_diario_13 = new ol.format.GeoJSON();
var features_PFS_kWhm2_diario_13 = format_PFS_kWhm2_diario_13.readFeatures(json_PFS_kWhm2_diario_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PFS_kWhm2_diario_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PFS_kWhm2_diario_13.addFeatures(features_PFS_kWhm2_diario_13);
var lyr_PFS_kWhm2_diario_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PFS_kWhm2_diario_13, 
                style: style_PFS_kWhm2_diario_13,
                popuplayertitle: "PFS_kWhm2_diario",
                interactive: true,
    title: 'PFS_kWhm2_diario<br />\
    <img src="styles/legend/PFS_kWhm2_diario_13_0.png" /> 3 - 3.18<br />\
    <img src="styles/legend/PFS_kWhm2_diario_13_1.png" /> 3.18 - 3.36<br />\
    <img src="styles/legend/PFS_kWhm2_diario_13_2.png" /> 3.36 - 3.54<br />\
    <img src="styles/legend/PFS_kWhm2_diario_13_3.png" /> 3.54 - 3.72<br />\
    <img src="styles/legend/PFS_kWhm2_diario_13_4.png" /> 3.72 - 3.9<br />\
    <img src="styles/legend/PFS_kWhm2_diario_13_5.png" /> 3.9 - 4.08<br />\
    <img src="styles/legend/PFS_kWhm2_diario_13_6.png" /> 4.08 - 4.26<br />\
    <img src="styles/legend/PFS_kWhm2_diario_13_7.png" /> 4.26 - 4.44<br />\
    <img src="styles/legend/PFS_kWhm2_diario_13_8.png" /> 4.44 - 4.62<br />\
    <img src="styles/legend/PFS_kWhm2_diario_13_9.png" /> 4.62 - 4.8<br />'
        });
var format_PFS_kWhm2_anual_14 = new ol.format.GeoJSON();
var features_PFS_kWhm2_anual_14 = format_PFS_kWhm2_anual_14.readFeatures(json_PFS_kWhm2_anual_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PFS_kWhm2_anual_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PFS_kWhm2_anual_14.addFeatures(features_PFS_kWhm2_anual_14);
var lyr_PFS_kWhm2_anual_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PFS_kWhm2_anual_14, 
                style: style_PFS_kWhm2_anual_14,
                popuplayertitle: "PFS_kWhm2_anual",
                interactive: true,
    title: 'PFS_kWhm2_anual<br />\
    <img src="styles/legend/PFS_kWhm2_anual_14_0.png" /> 1095 - 1153<br />\
    <img src="styles/legend/PFS_kWhm2_anual_14_1.png" /> 1153 - 1212<br />\
    <img src="styles/legend/PFS_kWhm2_anual_14_2.png" /> 1212 - 1270<br />\
    <img src="styles/legend/PFS_kWhm2_anual_14_3.png" /> 1270 - 1329<br />\
    <img src="styles/legend/PFS_kWhm2_anual_14_4.png" /> 1329 - 1387<br />\
    <img src="styles/legend/PFS_kWhm2_anual_14_5.png" /> 1387 - 1445<br />\
    <img src="styles/legend/PFS_kWhm2_anual_14_6.png" /> 1445 - 1504<br />\
    <img src="styles/legend/PFS_kWhm2_anual_14_7.png" /> 1504 - 1562<br />\
    <img src="styles/legend/PFS_kWhm2_anual_14_8.png" /> 1562 - 1621<br />\
    <img src="styles/legend/PFS_kWhm2_anual_14_9.png" /> 1621 - 1679<br />'
        });

lyr_googlesatellitehybrid_0.setVisible(true);lyr_12_PFS_kWhm2_mensual_1.setVisible(false);lyr_11_PFS_kWhm2_mensual_2.setVisible(false);lyr_10_PFS_kWhm2_mensual_3.setVisible(false);lyr_09_PFS_kWhm2_mensual_4.setVisible(false);lyr_08_PFS_kWhm2_mensual_5.setVisible(false);lyr_07_PFS_kWhm2_mensual_6.setVisible(false);lyr_06_PFS_kWhm2_mensual_7.setVisible(false);lyr_05_PFS_kWhm2_mensual_8.setVisible(false);lyr_04_PFS_kWhm2_mensual_9.setVisible(false);lyr_03_PFS_kWhm2_mensual_10.setVisible(false);lyr_02_PFS_kWhm2_mensual_11.setVisible(false);lyr_01_PFS_kWhm2_mensual_12.setVisible(false);lyr_PFS_kWhm2_diario_13.setVisible(false);lyr_PFS_kWhm2_anual_14.setVisible(true);
var layersList = [lyr_googlesatellitehybrid_0,lyr_12_PFS_kWhm2_mensual_1,lyr_11_PFS_kWhm2_mensual_2,lyr_10_PFS_kWhm2_mensual_3,lyr_09_PFS_kWhm2_mensual_4,lyr_08_PFS_kWhm2_mensual_5,lyr_07_PFS_kWhm2_mensual_6,lyr_06_PFS_kWhm2_mensual_7,lyr_05_PFS_kWhm2_mensual_8,lyr_04_PFS_kWhm2_mensual_9,lyr_03_PFS_kWhm2_mensual_10,lyr_02_PFS_kWhm2_mensual_11,lyr_01_PFS_kWhm2_mensual_12,lyr_PFS_kWhm2_diario_13,lyr_PFS_kWhm2_anual_14];
lyr_12_PFS_kWhm2_mensual_1.set('fieldAliases', {'VALUE': 'VALUE', 'AreaHa': 'AreaHa', });
lyr_11_PFS_kWhm2_mensual_2.set('fieldAliases', {'VALUE': 'VALUE', 'AreaHa': 'AreaHa', });
lyr_10_PFS_kWhm2_mensual_3.set('fieldAliases', {'VALUE': 'VALUE', 'AreaHa': 'AreaHa', });
lyr_09_PFS_kWhm2_mensual_4.set('fieldAliases', {'VALUE': 'VALUE', 'AreaHa': 'AreaHa', });
lyr_08_PFS_kWhm2_mensual_5.set('fieldAliases', {'VALUE': 'VALUE', 'AreaHa': 'AreaHa', });
lyr_07_PFS_kWhm2_mensual_6.set('fieldAliases', {'VALUE': 'VALUE', 'AreaHa': 'AreaHa', });
lyr_06_PFS_kWhm2_mensual_7.set('fieldAliases', {'VALUE': 'VALUE', 'AreaHa': 'AreaHa', });
lyr_05_PFS_kWhm2_mensual_8.set('fieldAliases', {'VALUE': 'VALUE', 'AreaHa': 'AreaHa', });
lyr_04_PFS_kWhm2_mensual_9.set('fieldAliases', {'VALUE': 'VALUE', 'AreaHa': 'AreaHa', });
lyr_03_PFS_kWhm2_mensual_10.set('fieldAliases', {'VALUE': 'VALUE', 'AreaHa': 'AreaHa', });
lyr_02_PFS_kWhm2_mensual_11.set('fieldAliases', {'VALUE': 'VALUE', 'AreaHa': 'AreaHa', });
lyr_01_PFS_kWhm2_mensual_12.set('fieldAliases', {'VALUE': 'VALUE', 'AreaHa': 'AreaHa', });
lyr_PFS_kWhm2_diario_13.set('fieldAliases', {'VALUE': 'VALUE', 'AreaHa': 'AreaHa', });
lyr_PFS_kWhm2_anual_14.set('fieldAliases', {'VALUE': 'VALUE', 'AreaHa': 'AreaHa', });
lyr_12_PFS_kWhm2_mensual_1.set('fieldImages', {'VALUE': 'TextEdit', 'AreaHa': 'TextEdit', });
lyr_11_PFS_kWhm2_mensual_2.set('fieldImages', {'VALUE': 'TextEdit', 'AreaHa': 'TextEdit', });
lyr_10_PFS_kWhm2_mensual_3.set('fieldImages', {'VALUE': 'TextEdit', 'AreaHa': 'TextEdit', });
lyr_09_PFS_kWhm2_mensual_4.set('fieldImages', {'VALUE': 'TextEdit', 'AreaHa': 'TextEdit', });
lyr_08_PFS_kWhm2_mensual_5.set('fieldImages', {'VALUE': 'TextEdit', 'AreaHa': 'TextEdit', });
lyr_07_PFS_kWhm2_mensual_6.set('fieldImages', {'VALUE': 'TextEdit', 'AreaHa': 'TextEdit', });
lyr_06_PFS_kWhm2_mensual_7.set('fieldImages', {'VALUE': 'TextEdit', 'AreaHa': 'TextEdit', });
lyr_05_PFS_kWhm2_mensual_8.set('fieldImages', {'VALUE': 'TextEdit', 'AreaHa': 'TextEdit', });
lyr_04_PFS_kWhm2_mensual_9.set('fieldImages', {'VALUE': 'TextEdit', 'AreaHa': 'TextEdit', });
lyr_03_PFS_kWhm2_mensual_10.set('fieldImages', {'VALUE': 'TextEdit', 'AreaHa': 'TextEdit', });
lyr_02_PFS_kWhm2_mensual_11.set('fieldImages', {'VALUE': 'TextEdit', 'AreaHa': 'TextEdit', });
lyr_01_PFS_kWhm2_mensual_12.set('fieldImages', {'VALUE': 'TextEdit', 'AreaHa': 'TextEdit', });
lyr_PFS_kWhm2_diario_13.set('fieldImages', {'VALUE': 'TextEdit', 'AreaHa': 'TextEdit', });
lyr_PFS_kWhm2_anual_14.set('fieldImages', {'VALUE': 'TextEdit', 'AreaHa': 'TextEdit', });
lyr_12_PFS_kWhm2_mensual_1.set('fieldLabels', {'VALUE': 'inline label - always visible', 'AreaHa': 'inline label - always visible', });
lyr_11_PFS_kWhm2_mensual_2.set('fieldLabels', {'VALUE': 'inline label - always visible', 'AreaHa': 'inline label - always visible', });
lyr_10_PFS_kWhm2_mensual_3.set('fieldLabels', {'VALUE': 'inline label - always visible', 'AreaHa': 'inline label - always visible', });
lyr_09_PFS_kWhm2_mensual_4.set('fieldLabels', {'VALUE': 'inline label - always visible', 'AreaHa': 'inline label - always visible', });
lyr_08_PFS_kWhm2_mensual_5.set('fieldLabels', {'VALUE': 'inline label - always visible', 'AreaHa': 'inline label - always visible', });
lyr_07_PFS_kWhm2_mensual_6.set('fieldLabels', {'VALUE': 'inline label - always visible', 'AreaHa': 'inline label - always visible', });
lyr_06_PFS_kWhm2_mensual_7.set('fieldLabels', {'VALUE': 'inline label - always visible', 'AreaHa': 'inline label - always visible', });
lyr_05_PFS_kWhm2_mensual_8.set('fieldLabels', {'VALUE': 'inline label - always visible', 'AreaHa': 'inline label - always visible', });
lyr_04_PFS_kWhm2_mensual_9.set('fieldLabels', {'VALUE': 'inline label - always visible', 'AreaHa': 'inline label - always visible', });
lyr_03_PFS_kWhm2_mensual_10.set('fieldLabels', {'VALUE': 'inline label - always visible', 'AreaHa': 'inline label - always visible', });
lyr_02_PFS_kWhm2_mensual_11.set('fieldLabels', {'VALUE': 'inline label - always visible', 'AreaHa': 'inline label - always visible', });
lyr_01_PFS_kWhm2_mensual_12.set('fieldLabels', {'VALUE': 'inline label - always visible', 'AreaHa': 'inline label - always visible', });
lyr_PFS_kWhm2_diario_13.set('fieldLabels', {'VALUE': 'inline label - always visible', 'AreaHa': 'inline label - always visible', });
lyr_PFS_kWhm2_anual_14.set('fieldLabels', {'VALUE': 'inline label - always visible', 'AreaHa': 'inline label - always visible', });
lyr_PFS_kWhm2_anual_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});