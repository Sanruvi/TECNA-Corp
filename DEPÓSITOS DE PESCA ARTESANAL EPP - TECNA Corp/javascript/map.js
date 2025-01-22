var map = L.map('map', {});

// PAINEIS
map.createPane('pane_1').style.zIndex = 498;
map.createPane('pane_2').style.zIndex = 497;
map.createPane('pane_5').style.zIndex = 494;
map.createPane('pane_6').style.zIndex = 493;
map.createPane('pane_16').style.zIndex = 483;
map.createPane('pane_17').style.zIndex = 482;
map.createPane('pane_26').style.zIndex = 473;
map.createPane('pane_27').style.zIndex = 472;
map.createPane('pane_30').style.zIndex = 469;
map.createPane('pane_31').style.zIndex = 468;
map.createPane('pane_32').style.zIndex = 467;
map.createPane('pane_33').style.zIndex = 466;
map.createPane('pane_34').style.zIndex = 465;
map.createPane('pane_35').style.zIndex = 464;
map.createPane('pane_36').style.zIndex = 463;
map.createPane('pane_37').style.zIndex = 462;
map.createPane('pane_41').style.zIndex = 458;
map.createPane('pane_42').style.zIndex = 457;
map.createPane('pane_43').style.zIndex = 456;
map.createPane('pane_44').style.zIndex = 455;

var baseMaps = {};
var overlayMaps = {};

// CAMADAS BASE
var googleStreet = L.tileLayer('http://{s}.google.com/vt/lyrs=m,h&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
baseMaps["Google Street"] = googleStreet;

var googleSatellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
googleSatellite.addTo(map);
baseMaps['Google Satellite'] = googleSatellite;

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
baseMaps["Google Hybrid"] = googleHybrid;

// CAMADAS VETORIAIS
var _AID_Social_interaccion_200m_crucita = L.geoJSON(_AID_Social_interaccion_200m_crucita_data, {
			pane: 'pane_1',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(190, 207, 80, 0.25)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: AID Social_interaccion_200m_crucita</h4><br/>'  +
							'<b>ID:</b>&ensp;' + feature.properties['id'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['AID_Social_interaccion_200m_crucita'] = _AID_Social_interaccion_200m_crucita;

var _AID_Social_interaccion_200m_stamarianita = L.geoJSON(_AID_Social_interaccion_200m_stamarianita_data, {
			pane: 'pane_2',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(190, 207, 80, 0.25)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: AID Social_interaccion_200m_stamarianita</h4><br/>'  +
							'<b>ID:</b>&ensp;' + feature.properties['id'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['AID_Social_interaccion_200m_stamarianita'] = _AID_Social_interaccion_200m_stamarianita;

var _Canton_Manta = L.geoJSON(_Canton_Manta_data, {
			pane: 'pane_5',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 0.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(204, 204, 204, 0.25)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Canton_Manta</h4><br/>'  +
							'<b>DPA_ANIO:</b>&ensp;' + feature.properties['DPA_ANIO'] + '<br/>' +
							'<b>DPA_CANTON:</b>&ensp;' + feature.properties['DPA_CANTON'] + '<br/>' +
							'<b>DPA_DESCAN:</b>&ensp;' + feature.properties['DPA_DESCAN'] + '<br/>' +
							'<b>DPA_DESPRO:</b>&ensp;' + feature.properties['DPA_DESPRO'] + '<br/>' +
							'<b>DPA_PROVIN:</b>&ensp;' + feature.properties['DPA_PROVIN'] + '<br/>' +
							'<b>DPA_VALOR:</b>&ensp;' + feature.properties['DPA_VALOR'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['Canton_Manta'] = _Canton_Manta;

var _Canton_portoviejo = L.geoJSON(_Canton_portoviejo_data, {
			pane: 'pane_6',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 0.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(204, 204, 204, 0.25)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Canton_portoviejo</h4><br/>'  +
							'<b>DPA_ANIO:</b>&ensp;' + feature.properties['DPA_ANIO'] + '<br/>' +
							'<b>DPA_CANTON:</b>&ensp;' + feature.properties['DPA_CANTON'] + '<br/>' +
							'<b>DPA_DESCAN:</b>&ensp;' + feature.properties['DPA_DESCAN'] + '<br/>' +
							'<b>DPA_DESPRO:</b>&ensp;' + feature.properties['DPA_DESPRO'] + '<br/>' +
							'<b>DPA_PROVIN:</b>&ensp;' + feature.properties['DPA_PROVIN'] + '<br/>' +
							'<b>DPA_VALOR:</b>&ensp;' + feature.properties['DPA_VALOR'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['Canton_portoviejo'] = _Canton_portoviejo;

var _DPA_CRUCITA_Aloha_Points = L.geoJSON(_DPA_CRUCITA_Aloha_Points_data, {
			pointToLayer: function(geoJsonPoint, latlng) {return L.circleMarker(latlng, {pane: 'pane_16'})},
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 3.2,
						weight: 1.0,
						color: 'rgba(0, 0, 0, 1.00)',
						fillColor: 'rgba(0, 255, 102, 1.00)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: DPA_CRUCITA Aloha Points</h4><br/>'  +
							'<b>MARPLOTID:</b>&ensp;' + feature.properties['MarplotID'] + '<br/>' +
							'<b>NAME:</b>&ensp;' + feature.properties['Name'] + '<br/>' +
							'<b>ALTITUDEMODE:</b>&ensp;' + feature.properties['altitudeMode'] + '<br/>' +
							'<b>BEGIN:</b>&ensp;' + feature.properties['begin'] + '<br/>' +
							'<b>DESCRIPTION:</b>&ensp;' + feature.properties['description'] + '<br/>' +
							'<b>DRAWORDER:</b>&ensp;' + feature.properties['drawOrder'] + '<br/>' +
							'<b>END:</b>&ensp;' + feature.properties['end'] + '<br/>' +
							'<b>EXTRUDE:</b>&ensp;' + feature.properties['extrude'] + '<br/>' +
							'<b>ICON:</b>&ensp;' + feature.properties['icon'] + '<br/>' +
							'<b>TESSELLATE:</b>&ensp;' + feature.properties['tessellate'] + '<br/>' +
							'<b>TIMESTAMP:</b>&ensp;' + feature.properties['timestamp'] + '<br/>' +
							'<b>VISIBILITY:</b>&ensp;' + feature.properties['visibility'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['DPA_CRUCITA_Aloha_Points'] = _DPA_CRUCITA_Aloha_Points;

var _DPA_STA_MARIANITA = L.geoJSON(_DPA_STA_MARIANITA_data, {
			pane: 'pane_17',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 3.3000000000000003,
						color: 'rgba(20, 202, 0, 1.00)',
						fillColor: 'rgba(241, 64, 35, 1.00)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: DPA STA MARIANITA</h4><br/>'  +
							'<b>AREA:</b>&ensp;' + feature.properties['Area'] + '<br/>' +
							'<b>CAP GLS:</b>&ensp;' + feature.properties['Cap gls'] + '<br/>' +
							'<b>ID_1:</b>&ensp;' + feature.properties['ID_1'] + '<br/>' +
							'<b>SCI:</b>&ensp;' + feature.properties['SCI'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['DPA_STA_MARIANITA'] = _DPA_STA_MARIANITA;

var _Permeabilidad_portoviejo = L.geoJSON(_Permeabilidad_portoviejo_data, {
			pane: 'pane_26',
			style: function (feature) {
				if ( feature.properties["PERMIABILI"] == 'GENERALMENTE ALTA') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(255, 245, 240, 1.00)'
					}
				} else if ( feature.properties["PERMIABILI"] == 'GENERALMENTE BAJA') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(253, 190, 165, 1.00)'
					}
				} else if ( feature.properties["PERMIABILI"] == 'MEDIA') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(252, 112, 80, 1.00)'
					}
				} else if ( feature.properties["PERMIABILI"] == 'MUY BAJA') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(212, 32, 32, 1.00)'
					}
				} else if ( feature.properties["PERMIABILI"] == 'PRACTICAMENTE IMPERMEABLE') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(103, 0, 13, 1.00)'
					}
				} 
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Permeabilidad_portoviejo</h4><br/>'  +
							'<b>EDAD:</b>&ensp;' + feature.properties['EDAD'] + '<br/>' +
							'<b>FORMACION1:</b>&ensp;' + feature.properties['FORMACION1'] + '<br/>' +
							'<b>ID:</b>&ensp;' + feature.properties['ID'] + '<br/>' +
							'<b>LITOLOGIA:</b>&ensp;' + feature.properties['LITOLOGIA'] + '<br/>' +
							'<b>PERM:</b>&ensp;' + feature.properties['PERM'] + '<br/>' +
							'<b>PERMIABILI:</b>&ensp;' + feature.properties['PERMIABILI'] + '<br/>' +
							'<b>SIMBOLO:</b>&ensp;' + feature.properties['SIMBOLO'] + '<br/>' +
							'<b>SIMBOLO1:</b>&ensp;' + feature.properties['SIMBOLO1'] + '<br/>' +
							'<b>TIPO_PERM:</b>&ensp;' + feature.properties['TIPO_PERM'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['Permeabilidad_portoviejo'] = _Permeabilidad_portoviejo;

var _Permeabilidad_manta = L.geoJSON(_Permeabilidad_manta_data, {
			pane: 'pane_27',
			style: function (feature) {
				if ( feature.properties["PERMIABILI"] == 'BAJA') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(255, 255, 255, 1.00)'
					}
				} else if ( feature.properties["PERMIABILI"] == 'GENERALMENTE ALTA') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(253, 204, 184, 1.00)'
					}
				} else if ( feature.properties["PERMIABILI"] == 'GENERALMENTE BAJA') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(252, 143, 111, 1.00)'
					}
				} else if ( feature.properties["PERMIABILI"] == 'MEDIA') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(244, 77, 55, 1.00)'
					}
				} else if ( feature.properties["PERMIABILI"] == 'MUY BAJA') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(197, 22, 27, 1.00)'
					}
				} else if ( feature.properties["PERMIABILI"] == 'SOMERO PRACTICAMENTE IMPERMEABLE PROFUNDO VARIADO') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(241, 35, 35, 1.00)'
					}
				} 
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Permeabilidad_manta</h4><br/>'  +
							'<b>EDAD:</b>&ensp;' + feature.properties['EDAD'] + '<br/>' +
							'<b>FORMACION1:</b>&ensp;' + feature.properties['FORMACION1'] + '<br/>' +
							'<b>ID:</b>&ensp;' + feature.properties['ID'] + '<br/>' +
							'<b>LITOLOGIA:</b>&ensp;' + feature.properties['LITOLOGIA'] + '<br/>' +
							'<b>PERM:</b>&ensp;' + feature.properties['PERM'] + '<br/>' +
							'<b>PERMIABILI:</b>&ensp;' + feature.properties['PERMIABILI'] + '<br/>' +
							'<b>SIMBOLO:</b>&ensp;' + feature.properties['SIMBOLO'] + '<br/>' +
							'<b>SIMBOLO1:</b>&ensp;' + feature.properties['SIMBOLO1'] + '<br/>' +
							'<b>TIPO_PERM:</b>&ensp;' + feature.properties['TIPO_PERM'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['Permeabilidad_manta'] = _Permeabilidad_manta;

var _Poligono_ci_maate_crucita = L.geoJSON(_Poligono_ci_maate_crucita_data, {
			pane: 'pane_30',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 3.3000000000000003,
						color: 'rgba(20, 202, 0, 1.00)',
						fillColor: 'rgba(241, 64, 35, 1.00)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Poligono_ci_maate_crucita</h4><br/>'  +
							'<b>AREA:</b>&ensp;' + feature.properties['Area'] + '<br/>' +
							'<b>CAP GLS:</b>&ensp;' + feature.properties['Cap gls'] + '<br/>' +
							'<b>ID_:</b>&ensp;' + feature.properties['ID_'] + '<br/>' +
							'<b>SCI:</b>&ensp;' + feature.properties['SCI'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['Poligono_ci_maate_crucita'] = _Poligono_ci_maate_crucita;

var _Precipitacion_Portoviejo = L.geoJSON(_Precipitacion_Portoviejo_data, {
			pane: 'pane_31',
			style: function (feature) {
				if ( feature.properties["RANGO"] == '0-500') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(247, 251, 255, 1.00)'
					}
				} else if ( feature.properties["RANGO"] == '500-750') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(220, 234, 247, 1.00)'
					}
				} else if ( feature.properties["RANGO"] == '750-1000') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(190, 216, 237, 1.00)'
					}
				} else if ( feature.properties["RANGO"] == '1000-1250') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(180, 205, 224, 1.00)'
					}
				} else if ( feature.properties["RANGO"] == '1250-1500') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(137, 168, 191, 1.00)'
					}
				} else if ( feature.properties["RANGO"] == '1500-1750') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(120, 174, 203, 1.00)'
					}
				} else if ( feature.properties["RANGO"] == '1750-2000') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(80, 141, 177, 1.00)'
					}
				} 
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Precipitacion_Portoviejo</h4><br/>'  +
							'<b>RANGO:</b>&ensp;' + feature.properties['RANGO'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['Precipitacion_Portoviejo'] = _Precipitacion_Portoviejo;

var _Precipitacion_manta = L.geoJSON(_Precipitacion_manta_data, {
			pane: 'pane_32',
			style: function (feature) {
				if ( feature.properties["RANGO"] == '0-500') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(247, 251, 255, 1.00)'
					}
				} 
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Precipitacion_manta</h4><br/>'  +
							'<b>RANGO:</b>&ensp;' + feature.properties['RANGO'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['Precipitacion_manta'] = _Precipitacion_manta;

var _Rio_manta = L.geoJSON(_Rio_manta_data, {
			pane: 'pane_33',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 3.3000000000000003,
						color: 'rgba(31, 120, 180, 1.00)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Rio_manta</h4><br/>'  +
							'<b>CAT_HIDRO:</b>&ensp;' + feature.properties['cat_hidro'] + '<br/>' +
							'<b>F_CODE:</b>&ensp;' + feature.properties['f_code'] + '<br/>' +
							'<b>HYC:</b>&ensp;' + feature.properties['hyc'] + '<br/>' +
							'<b>NOMBRE:</b>&ensp;' + feature.properties['nombre'] + '<br/>' +
							'<b>SOC:</b>&ensp;' + feature.properties['soc'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['Rio_manta'] = _Rio_manta;

var _Rio_portoviejo = L.geoJSON(_Rio_portoviejo_data, {
			pane: 'pane_34',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 3.3000000000000003,
						color: 'rgba(31, 120, 180, 1.00)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Rio_portoviejo</h4><br/>'  +
							'<b>CAT_HIDRO:</b>&ensp;' + feature.properties['cat_hidro'] + '<br/>' +
							'<b>F_CODE:</b>&ensp;' + feature.properties['f_code'] + '<br/>' +
							'<b>HYC:</b>&ensp;' + feature.properties['hyc'] + '<br/>' +
							'<b>NOMBRE:</b>&ensp;' + feature.properties['nombre'] + '<br/>' +
							'<b>SOC:</b>&ensp;' + feature.properties['soc'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['Rio_portoviejo'] = _Rio_portoviejo;

var _STA_MARIANITA_Aloha_Points = L.geoJSON(_STA_MARIANITA_Aloha_Points_data, {
			pointToLayer: function(geoJsonPoint, latlng) {return L.circleMarker(latlng, {pane: 'pane_35'})},
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 3.2,
						weight: 1.0,
						color: 'rgba(0, 0, 0, 1.00)',
						fillColor: 'rgba(0, 255, 102, 1.00)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: STA_MARIANITA Aloha Points</h4><br/>'  +
							'<b>MARPLOTID:</b>&ensp;' + feature.properties['MarplotID'] + '<br/>' +
							'<b>NAME:</b>&ensp;' + feature.properties['Name'] + '<br/>' +
							'<b>ALTITUDEMODE:</b>&ensp;' + feature.properties['altitudeMode'] + '<br/>' +
							'<b>BEGIN:</b>&ensp;' + feature.properties['begin'] + '<br/>' +
							'<b>DESCRIPTION:</b>&ensp;' + feature.properties['description'] + '<br/>' +
							'<b>DRAWORDER:</b>&ensp;' + feature.properties['drawOrder'] + '<br/>' +
							'<b>END:</b>&ensp;' + feature.properties['end'] + '<br/>' +
							'<b>EXTRUDE:</b>&ensp;' + feature.properties['extrude'] + '<br/>' +
							'<b>ICON:</b>&ensp;' + feature.properties['icon'] + '<br/>' +
							'<b>TESSELLATE:</b>&ensp;' + feature.properties['tessellate'] + '<br/>' +
							'<b>TIMESTAMP:</b>&ensp;' + feature.properties['timestamp'] + '<br/>' +
							'<b>VISIBILITY:</b>&ensp;' + feature.properties['visibility'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['STA_MARIANITA_Aloha_Points'] = _STA_MARIANITA_Aloha_Points;

var _Zonas_amenaza_crucita = L.geoJSON(_Zonas_amenaza_crucita_data, {
			pane: 'pane_36',
			style: function (feature) {
				if ( feature.properties["Name"] == 'Yellow Threat Zone 2.0 kW/(sq m) = pain within 60 sec') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(227, 217, 123, 1.00)'
					}
				} else if ( feature.properties["Name"] == 'Orange Threat Zone 5.0 kW/(sq m) = 2nd degree burns within 60 sec') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(255, 127, 0, 1.00)'
					}
				} else if ( feature.properties["Name"] == 'Red Threat Zone 10.0 kW/(sq m) = potentially lethal within 60 sec') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(241, 35, 35, 1.00)'
					}
				} 
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Zonas_amenaza_crucita</h4><br/>'  +
							'<b>NAME:</b>&ensp;' + feature.properties['Name'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['Zonas_amenaza_crucita'] = _Zonas_amenaza_crucita;

var _Zonas_amenaza_stamarianita = L.geoJSON(_Zonas_amenaza_stamarianita_data, {
			pane: 'pane_37',
			style: function (feature) {
				if ( feature.properties["Name"] == 'Yellow Threat Zone 2.0 kW/(sq m) = pain within 60 sec') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(227, 217, 123, 1.00)'
					}
				} else if ( feature.properties["Name"] == 'Orange Threat Zone 5.0 kW/(sq m) = 2nd degree burns within 60 sec') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(255, 127, 0, 1.00)'
					}
				} else if ( feature.properties["Name"] == 'Red Threat Zone 10.0 kW/(sq m) = potentially lethal within 60 sec') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(241, 35, 35, 1.00)'
					}
				} 
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Zonas_amenaza_stamarianita</h4><br/>'  +
							'<b>NAME:</b>&ensp;' + feature.properties['Name'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['Zonas_amenaza_stamarianita'] = _Zonas_amenaza_stamarianita;

var _erosion_manta = L.geoJSON(_erosion_manta_data, {
			pane: 'pane_41',
			style: function (feature) {
				if ( feature.properties["EROSION"] == 'AREA EROSIONADAS') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(255, 245, 240, 1.00)'
					}
				} else if ( feature.properties["EROSION"] == 'AREAS EN PROCESO DE EROSION') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(103, 0, 13, 1.00)'
					}
				} 
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: erosion_manta</h4><br/>'  +
							'<b>EROSION:</b>&ensp;' + feature.properties['EROSION'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['erosion_manta'] = _erosion_manta;

var _erosion_portoviejo = L.geoJSON(_erosion_portoviejo_data, {
			pane: 'pane_42',
			style: function (feature) {
				if ( feature.properties["EROSION"] == 'AREA EROSIONADAS') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(255, 245, 240, 1.00)'
					}
				} else if ( feature.properties["EROSION"] == 'AREAS EN PROCESO DE EROSION') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(103, 0, 13, 1.00)'
					}
				} 
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: erosion_portoviejo</h4><br/>'  +
							'<b>EROSION:</b>&ensp;' + feature.properties['EROSION'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['erosion_portoviejo'] = _erosion_portoviejo;

var _inundacion_manta = L.geoJSON(_inundacion_manta_data, {
			pane: 'pane_43',
			style: function (feature) {
				if ( feature.properties["DESCRIPCIO"] == 'ZONAS INUNDADAS PERMANENTEMENTE (MANGLARES Y PANTANOS)') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(215, 25, 28, 1.00)'
					}
				} else if ( feature.properties["DESCRIPCIO"] == 'ZONAS INUNDADAS TEMPORALMENTE (CADA EPOCA LLUVIOSA)') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(254, 201, 128, 1.00)'
					}
				} else if ( feature.properties["DESCRIPCIO"] == 'ZONAS PROPENSAS A INUNDACIONES (DESBORDAMIENTO DE RIOS O FUERTES PRESCIPITACIONES)') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(31, 120, 180, 1.00)'
					}
				} 
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: inundacion_manta</h4><br/>'  +
							'<b>DESCRIPCIO:</b>&ensp;' + feature.properties['DESCRIPCIO'] + '<br/>' +
							'<b>HECTARES:</b>&ensp;' + feature.properties['HECTARES'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['inundacion_manta'] = _inundacion_manta;

var _inundacion_portoviejo = L.geoJSON(_inundacion_portoviejo_data, {
			pane: 'pane_44',
			style: function (feature) {
				if ( feature.properties["DESCRIPCIO"] == 'ZONAS INUNDADAS PERMANENTEMENTE (MANGLARES Y PANTANOS)') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(215, 25, 28, 1.00)'
					}
				} else if ( feature.properties["DESCRIPCIO"] == 'ZONAS INUNDADAS TEMPORALMENTE (CADA EPOCA LLUVIOSA)') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(254, 201, 128, 1.00)'
					}
				} else if ( feature.properties["DESCRIPCIO"] == 'ZONAS PROPENSAS A INUNDACIONES (DESBORDAMIENTO DE RIOS O FUERTES PRESCIPITACIONES)') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(31, 120, 180, 1.00)'
					}
				} 
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: inundacion_portoviejo</h4><br/>'  +
							'<b>DESCRIPCIO:</b>&ensp;' + feature.properties['DESCRIPCIO'] + '<br/>' +
							'<b>HECTARES:</b>&ensp;' + feature.properties['HECTARES'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['inundacion_portoviejo'] = _inundacion_portoviejo;

//Função que dá zoom sobre a feição clicada
function clickedFeature(e) {
	var feature = e.target;
	if (feature.feature.geometry.type == 'Point' ) {
		map.setView(feature.getLatLng(), 16);
	} else {
		map.fitBounds(feature.getBounds());
	}
}

// LEGENDA
//ESCALA
L.control.scale({
	maxWidth: 250,
	imperial: false
}).addTo(map);

// CONTROLE DE CAMADAS
L.control.layers(baseMaps, overlayMaps, {
	position: 'bottomleft',
	collapsed: false,
	sortLayers: true
}).addTo(map);

function layerON (event){
	var className = event.name + '_lgd';
	var legendItems = document.getElementsByClassName(className);
	for (var i = 0; i < legendItems.length; i++) {
		legendItems[i].style.display = 'block';
	}
}

function layerOFF (event){
	var className = event.name + '_lgd';
	var legendItems = document.getElementsByClassName(className);
	for (var i = 0; i < legendItems.length; i++) {
		legendItems[i].style.display = 'none';
	}
}

map.on('overlayadd', layerON);
map.on('overlayremove', layerOFF);

// CALCULA A AREA QUE COBRE TODAS AS CAMADAS
var bounds = {xmin: 180, ymin: 90, xmax: -180, ymax: -90};
for (var layer in overlayMaps) {
	var layerBounds = overlayMaps[layer].getBounds();
	if (bounds.xmin > layerBounds.getSouthWest().lng) {bounds.xmin = layerBounds.getSouthWest().lng};
	if (bounds.ymin > layerBounds.getSouthWest().lat) {bounds.ymin = layerBounds.getSouthWest().lat};
	if (bounds.xmax < layerBounds.getNorthEast().lng) {bounds.xmax = layerBounds.getNorthEast().lng};
	if (bounds.ymax < layerBounds.getNorthEast().lat) {bounds.ymax = layerBounds.getNorthEast().lat};
}
map.fitBounds([
	[bounds.ymin, bounds.xmin],
	[bounds.ymax, bounds.xmax]
]);
