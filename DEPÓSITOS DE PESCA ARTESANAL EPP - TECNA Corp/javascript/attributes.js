function filter(evt, column) {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = evt.target;
	filter = input.value.toUpperCase();
	table = evt.path[4];
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 2; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[column];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

function goToMap(layer, featureID){
	var feature = layer._layers[featureID];
	if (feature.feature.geometry.type == 'Point' ) {
		map.setView(feature.getLatLng(), 16);
	} else {
		map.fitBounds(feature.getBounds());
	}

	document.getElementById('mapBtn').click();
	feature.openPopup();

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	};
}

tableHTML__AID_Social_interaccion_200m_crucita = '<table id="_AID_Social_interaccion_200m_crucita_table">';
tableHTML__AID_Social_interaccion_200m_crucita += 	'<tr>';
tableHTML__AID_Social_interaccion_200m_crucita += 		'<th>Mapa</th>';
tableHTML__AID_Social_interaccion_200m_crucita += 		'<th>id</th>';
tableHTML__AID_Social_interaccion_200m_crucita += 	'</tr>';
tableHTML__AID_Social_interaccion_200m_crucita += 	'<tr>';
tableHTML__AID_Social_interaccion_200m_crucita += 		'<td></td>';
tableHTML__AID_Social_interaccion_200m_crucita += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar id"></td>';
tableHTML__AID_Social_interaccion_200m_crucita += 	'</tr>';

var _AID_Social_interaccion_200m_crucita_IDs = Object.keys(_AID_Social_interaccion_200m_crucita._layers);
for (var i=0; i < _AID_Social_interaccion_200m_crucita_IDs.length; i++){
	var feature = _AID_Social_interaccion_200m_crucita._layers[_AID_Social_interaccion_200m_crucita_IDs[i]].feature;
	tableHTML__AID_Social_interaccion_200m_crucita += '<tr>';
	tableHTML__AID_Social_interaccion_200m_crucita += 	'<td onclick="goToMap(_AID_Social_interaccion_200m_crucita, ' + _AID_Social_interaccion_200m_crucita_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__AID_Social_interaccion_200m_crucita += 	'<td>' + feature.properties['id'] + '</td>';
	tableHTML__AID_Social_interaccion_200m_crucita += '</tr>';
}

tableHTML__AID_Social_interaccion_200m_crucita += '</table>';
document.getElementById('_AID_Social_interaccion_200m_crucita_tab').innerHTML = tableHTML__AID_Social_interaccion_200m_crucita;

tableHTML__AID_Social_interaccion_200m_stamarianita = '<table id="_AID_Social_interaccion_200m_stamarianita_table">';
tableHTML__AID_Social_interaccion_200m_stamarianita += 	'<tr>';
tableHTML__AID_Social_interaccion_200m_stamarianita += 		'<th>Mapa</th>';
tableHTML__AID_Social_interaccion_200m_stamarianita += 		'<th>id</th>';
tableHTML__AID_Social_interaccion_200m_stamarianita += 	'</tr>';
tableHTML__AID_Social_interaccion_200m_stamarianita += 	'<tr>';
tableHTML__AID_Social_interaccion_200m_stamarianita += 		'<td></td>';
tableHTML__AID_Social_interaccion_200m_stamarianita += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar id"></td>';
tableHTML__AID_Social_interaccion_200m_stamarianita += 	'</tr>';

var _AID_Social_interaccion_200m_stamarianita_IDs = Object.keys(_AID_Social_interaccion_200m_stamarianita._layers);
for (var i=0; i < _AID_Social_interaccion_200m_stamarianita_IDs.length; i++){
	var feature = _AID_Social_interaccion_200m_stamarianita._layers[_AID_Social_interaccion_200m_stamarianita_IDs[i]].feature;
	tableHTML__AID_Social_interaccion_200m_stamarianita += '<tr>';
	tableHTML__AID_Social_interaccion_200m_stamarianita += 	'<td onclick="goToMap(_AID_Social_interaccion_200m_stamarianita, ' + _AID_Social_interaccion_200m_stamarianita_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__AID_Social_interaccion_200m_stamarianita += 	'<td>' + feature.properties['id'] + '</td>';
	tableHTML__AID_Social_interaccion_200m_stamarianita += '</tr>';
}

tableHTML__AID_Social_interaccion_200m_stamarianita += '</table>';
document.getElementById('_AID_Social_interaccion_200m_stamarianita_tab').innerHTML = tableHTML__AID_Social_interaccion_200m_stamarianita;

tableHTML__Canton_Manta = '<table id="_Canton_Manta_table">';
tableHTML__Canton_Manta += 	'<tr>';
tableHTML__Canton_Manta += 		'<th>Mapa</th>';
tableHTML__Canton_Manta += 		'<th>DPA_ANIO</th>';
tableHTML__Canton_Manta += 		'<th>DPA_CANTON</th>';
tableHTML__Canton_Manta += 		'<th>DPA_DESCAN</th>';
tableHTML__Canton_Manta += 		'<th>DPA_DESPRO</th>';
tableHTML__Canton_Manta += 		'<th>DPA_PROVIN</th>';
tableHTML__Canton_Manta += 		'<th>DPA_VALOR</th>';
tableHTML__Canton_Manta += 	'</tr>';
tableHTML__Canton_Manta += 	'<tr>';
tableHTML__Canton_Manta += 		'<td></td>';
tableHTML__Canton_Manta += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar DPA_ANIO"></td>';
tableHTML__Canton_Manta += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar DPA_CANTON"></td>';
tableHTML__Canton_Manta += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Procurar DPA_DESCAN"></td>';
tableHTML__Canton_Manta += 		'<td><input type="text" onkeyup="filter(event, 4)" placeholder="Procurar DPA_DESPRO"></td>';
tableHTML__Canton_Manta += 		'<td><input type="text" onkeyup="filter(event, 5)" placeholder="Procurar DPA_PROVIN"></td>';
tableHTML__Canton_Manta += 		'<td><input type="text" onkeyup="filter(event, 6)" placeholder="Procurar DPA_VALOR"></td>';
tableHTML__Canton_Manta += 	'</tr>';

var _Canton_Manta_IDs = Object.keys(_Canton_Manta._layers);
for (var i=0; i < _Canton_Manta_IDs.length; i++){
	var feature = _Canton_Manta._layers[_Canton_Manta_IDs[i]].feature;
	tableHTML__Canton_Manta += '<tr>';
	tableHTML__Canton_Manta += 	'<td onclick="goToMap(_Canton_Manta, ' + _Canton_Manta_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__Canton_Manta += 	'<td>' + feature.properties['DPA_ANIO'] + '</td>';
	tableHTML__Canton_Manta += 	'<td>' + feature.properties['DPA_CANTON'] + '</td>';
	tableHTML__Canton_Manta += 	'<td>' + feature.properties['DPA_DESCAN'] + '</td>';
	tableHTML__Canton_Manta += 	'<td>' + feature.properties['DPA_DESPRO'] + '</td>';
	tableHTML__Canton_Manta += 	'<td>' + feature.properties['DPA_PROVIN'] + '</td>';
	tableHTML__Canton_Manta += 	'<td>' + feature.properties['DPA_VALOR'] + '</td>';
	tableHTML__Canton_Manta += '</tr>';
}

tableHTML__Canton_Manta += '</table>';
document.getElementById('_Canton_Manta_tab').innerHTML = tableHTML__Canton_Manta;

tableHTML__Canton_portoviejo = '<table id="_Canton_portoviejo_table">';
tableHTML__Canton_portoviejo += 	'<tr>';
tableHTML__Canton_portoviejo += 		'<th>Mapa</th>';
tableHTML__Canton_portoviejo += 		'<th>DPA_ANIO</th>';
tableHTML__Canton_portoviejo += 		'<th>DPA_CANTON</th>';
tableHTML__Canton_portoviejo += 		'<th>DPA_DESCAN</th>';
tableHTML__Canton_portoviejo += 		'<th>DPA_DESPRO</th>';
tableHTML__Canton_portoviejo += 		'<th>DPA_PROVIN</th>';
tableHTML__Canton_portoviejo += 		'<th>DPA_VALOR</th>';
tableHTML__Canton_portoviejo += 	'</tr>';
tableHTML__Canton_portoviejo += 	'<tr>';
tableHTML__Canton_portoviejo += 		'<td></td>';
tableHTML__Canton_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar DPA_ANIO"></td>';
tableHTML__Canton_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar DPA_CANTON"></td>';
tableHTML__Canton_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Procurar DPA_DESCAN"></td>';
tableHTML__Canton_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 4)" placeholder="Procurar DPA_DESPRO"></td>';
tableHTML__Canton_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 5)" placeholder="Procurar DPA_PROVIN"></td>';
tableHTML__Canton_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 6)" placeholder="Procurar DPA_VALOR"></td>';
tableHTML__Canton_portoviejo += 	'</tr>';

var _Canton_portoviejo_IDs = Object.keys(_Canton_portoviejo._layers);
for (var i=0; i < _Canton_portoviejo_IDs.length; i++){
	var feature = _Canton_portoviejo._layers[_Canton_portoviejo_IDs[i]].feature;
	tableHTML__Canton_portoviejo += '<tr>';
	tableHTML__Canton_portoviejo += 	'<td onclick="goToMap(_Canton_portoviejo, ' + _Canton_portoviejo_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__Canton_portoviejo += 	'<td>' + feature.properties['DPA_ANIO'] + '</td>';
	tableHTML__Canton_portoviejo += 	'<td>' + feature.properties['DPA_CANTON'] + '</td>';
	tableHTML__Canton_portoviejo += 	'<td>' + feature.properties['DPA_DESCAN'] + '</td>';
	tableHTML__Canton_portoviejo += 	'<td>' + feature.properties['DPA_DESPRO'] + '</td>';
	tableHTML__Canton_portoviejo += 	'<td>' + feature.properties['DPA_PROVIN'] + '</td>';
	tableHTML__Canton_portoviejo += 	'<td>' + feature.properties['DPA_VALOR'] + '</td>';
	tableHTML__Canton_portoviejo += '</tr>';
}

tableHTML__Canton_portoviejo += '</table>';
document.getElementById('_Canton_portoviejo_tab').innerHTML = tableHTML__Canton_portoviejo;

tableHTML__DPA_CRUCITA_Aloha_Points = '<table id="_DPA_CRUCITA_Aloha_Points_table">';
tableHTML__DPA_CRUCITA_Aloha_Points += 	'<tr>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<th>Mapa</th>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<th>MarplotID</th>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<th>Name</th>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<th>altitudeMode</th>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<th>begin</th>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<th>description</th>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<th>drawOrder</th>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<th>end</th>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<th>extrude</th>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<th>icon</th>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<th>tessellate</th>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<th>timestamp</th>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<th>visibility</th>';
tableHTML__DPA_CRUCITA_Aloha_Points += 	'</tr>';
tableHTML__DPA_CRUCITA_Aloha_Points += 	'<tr>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<td></td>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar MarplotID"></td>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar Name"></td>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Procurar altitudeMode"></td>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 4)" placeholder="Procurar begin"></td>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 5)" placeholder="Procurar description"></td>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 6)" placeholder="Procurar drawOrder"></td>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 7)" placeholder="Procurar end"></td>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 8)" placeholder="Procurar extrude"></td>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 9)" placeholder="Procurar icon"></td>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 10)" placeholder="Procurar tessellate"></td>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 11)" placeholder="Procurar timestamp"></td>';
tableHTML__DPA_CRUCITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 12)" placeholder="Procurar visibility"></td>';
tableHTML__DPA_CRUCITA_Aloha_Points += 	'</tr>';

var _DPA_CRUCITA_Aloha_Points_IDs = Object.keys(_DPA_CRUCITA_Aloha_Points._layers);
for (var i=0; i < _DPA_CRUCITA_Aloha_Points_IDs.length; i++){
	var feature = _DPA_CRUCITA_Aloha_Points._layers[_DPA_CRUCITA_Aloha_Points_IDs[i]].feature;
	tableHTML__DPA_CRUCITA_Aloha_Points += '<tr>';
	tableHTML__DPA_CRUCITA_Aloha_Points += 	'<td onclick="goToMap(_DPA_CRUCITA_Aloha_Points, ' + _DPA_CRUCITA_Aloha_Points_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__DPA_CRUCITA_Aloha_Points += 	'<td>' + feature.properties['MarplotID'] + '</td>';
	tableHTML__DPA_CRUCITA_Aloha_Points += 	'<td>' + feature.properties['Name'] + '</td>';
	tableHTML__DPA_CRUCITA_Aloha_Points += 	'<td>' + feature.properties['altitudeMode'] + '</td>';
	tableHTML__DPA_CRUCITA_Aloha_Points += 	'<td>' + feature.properties['begin'] + '</td>';
	tableHTML__DPA_CRUCITA_Aloha_Points += 	'<td>' + feature.properties['description'] + '</td>';
	tableHTML__DPA_CRUCITA_Aloha_Points += 	'<td>' + feature.properties['drawOrder'] + '</td>';
	tableHTML__DPA_CRUCITA_Aloha_Points += 	'<td>' + feature.properties['end'] + '</td>';
	tableHTML__DPA_CRUCITA_Aloha_Points += 	'<td>' + feature.properties['extrude'] + '</td>';
	tableHTML__DPA_CRUCITA_Aloha_Points += 	'<td>' + feature.properties['icon'] + '</td>';
	tableHTML__DPA_CRUCITA_Aloha_Points += 	'<td>' + feature.properties['tessellate'] + '</td>';
	tableHTML__DPA_CRUCITA_Aloha_Points += 	'<td>' + feature.properties['timestamp'] + '</td>';
	tableHTML__DPA_CRUCITA_Aloha_Points += 	'<td>' + feature.properties['visibility'] + '</td>';
	tableHTML__DPA_CRUCITA_Aloha_Points += '</tr>';
}

tableHTML__DPA_CRUCITA_Aloha_Points += '</table>';
document.getElementById('_DPA_CRUCITA_Aloha_Points_tab').innerHTML = tableHTML__DPA_CRUCITA_Aloha_Points;

tableHTML__DPA_STA_MARIANITA = '<table id="_DPA_STA_MARIANITA_table">';
tableHTML__DPA_STA_MARIANITA += 	'<tr>';
tableHTML__DPA_STA_MARIANITA += 		'<th>Mapa</th>';
tableHTML__DPA_STA_MARIANITA += 		'<th>Area</th>';
tableHTML__DPA_STA_MARIANITA += 		'<th>Cap gls</th>';
tableHTML__DPA_STA_MARIANITA += 		'<th>ID_1</th>';
tableHTML__DPA_STA_MARIANITA += 		'<th>SCI</th>';
tableHTML__DPA_STA_MARIANITA += 	'</tr>';
tableHTML__DPA_STA_MARIANITA += 	'<tr>';
tableHTML__DPA_STA_MARIANITA += 		'<td></td>';
tableHTML__DPA_STA_MARIANITA += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar Area"></td>';
tableHTML__DPA_STA_MARIANITA += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar Cap gls"></td>';
tableHTML__DPA_STA_MARIANITA += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Procurar ID_1"></td>';
tableHTML__DPA_STA_MARIANITA += 		'<td><input type="text" onkeyup="filter(event, 4)" placeholder="Procurar SCI"></td>';
tableHTML__DPA_STA_MARIANITA += 	'</tr>';

var _DPA_STA_MARIANITA_IDs = Object.keys(_DPA_STA_MARIANITA._layers);
for (var i=0; i < _DPA_STA_MARIANITA_IDs.length; i++){
	var feature = _DPA_STA_MARIANITA._layers[_DPA_STA_MARIANITA_IDs[i]].feature;
	tableHTML__DPA_STA_MARIANITA += '<tr>';
	tableHTML__DPA_STA_MARIANITA += 	'<td onclick="goToMap(_DPA_STA_MARIANITA, ' + _DPA_STA_MARIANITA_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__DPA_STA_MARIANITA += 	'<td>' + feature.properties['Area'] + '</td>';
	tableHTML__DPA_STA_MARIANITA += 	'<td>' + feature.properties['Cap gls'] + '</td>';
	tableHTML__DPA_STA_MARIANITA += 	'<td>' + feature.properties['ID_1'] + '</td>';
	tableHTML__DPA_STA_MARIANITA += 	'<td>' + feature.properties['SCI'] + '</td>';
	tableHTML__DPA_STA_MARIANITA += '</tr>';
}

tableHTML__DPA_STA_MARIANITA += '</table>';
document.getElementById('_DPA_STA_MARIANITA_tab').innerHTML = tableHTML__DPA_STA_MARIANITA;

tableHTML__Permeabilidad_portoviejo = '<table id="_Permeabilidad_portoviejo_table">';
tableHTML__Permeabilidad_portoviejo += 	'<tr>';
tableHTML__Permeabilidad_portoviejo += 		'<th>Mapa</th>';
tableHTML__Permeabilidad_portoviejo += 		'<th>EDAD</th>';
tableHTML__Permeabilidad_portoviejo += 		'<th>FORMACION1</th>';
tableHTML__Permeabilidad_portoviejo += 		'<th>ID</th>';
tableHTML__Permeabilidad_portoviejo += 		'<th>LITOLOGIA</th>';
tableHTML__Permeabilidad_portoviejo += 		'<th>PERM</th>';
tableHTML__Permeabilidad_portoviejo += 		'<th>PERMIABILI</th>';
tableHTML__Permeabilidad_portoviejo += 		'<th>SIMBOLO</th>';
tableHTML__Permeabilidad_portoviejo += 		'<th>SIMBOLO1</th>';
tableHTML__Permeabilidad_portoviejo += 		'<th>TIPO_PERM</th>';
tableHTML__Permeabilidad_portoviejo += 	'</tr>';
tableHTML__Permeabilidad_portoviejo += 	'<tr>';
tableHTML__Permeabilidad_portoviejo += 		'<td></td>';
tableHTML__Permeabilidad_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar EDAD"></td>';
tableHTML__Permeabilidad_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar FORMACION1"></td>';
tableHTML__Permeabilidad_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Procurar ID"></td>';
tableHTML__Permeabilidad_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 4)" placeholder="Procurar LITOLOGIA"></td>';
tableHTML__Permeabilidad_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 5)" placeholder="Procurar PERM"></td>';
tableHTML__Permeabilidad_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 6)" placeholder="Procurar PERMIABILI"></td>';
tableHTML__Permeabilidad_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 7)" placeholder="Procurar SIMBOLO"></td>';
tableHTML__Permeabilidad_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 8)" placeholder="Procurar SIMBOLO1"></td>';
tableHTML__Permeabilidad_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 9)" placeholder="Procurar TIPO_PERM"></td>';
tableHTML__Permeabilidad_portoviejo += 	'</tr>';

var _Permeabilidad_portoviejo_IDs = Object.keys(_Permeabilidad_portoviejo._layers);
for (var i=0; i < _Permeabilidad_portoviejo_IDs.length; i++){
	var feature = _Permeabilidad_portoviejo._layers[_Permeabilidad_portoviejo_IDs[i]].feature;
	tableHTML__Permeabilidad_portoviejo += '<tr>';
	tableHTML__Permeabilidad_portoviejo += 	'<td onclick="goToMap(_Permeabilidad_portoviejo, ' + _Permeabilidad_portoviejo_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__Permeabilidad_portoviejo += 	'<td>' + feature.properties['EDAD'] + '</td>';
	tableHTML__Permeabilidad_portoviejo += 	'<td>' + feature.properties['FORMACION1'] + '</td>';
	tableHTML__Permeabilidad_portoviejo += 	'<td>' + feature.properties['ID'] + '</td>';
	tableHTML__Permeabilidad_portoviejo += 	'<td>' + feature.properties['LITOLOGIA'] + '</td>';
	tableHTML__Permeabilidad_portoviejo += 	'<td>' + feature.properties['PERM'] + '</td>';
	tableHTML__Permeabilidad_portoviejo += 	'<td>' + feature.properties['PERMIABILI'] + '</td>';
	tableHTML__Permeabilidad_portoviejo += 	'<td>' + feature.properties['SIMBOLO'] + '</td>';
	tableHTML__Permeabilidad_portoviejo += 	'<td>' + feature.properties['SIMBOLO1'] + '</td>';
	tableHTML__Permeabilidad_portoviejo += 	'<td>' + feature.properties['TIPO_PERM'] + '</td>';
	tableHTML__Permeabilidad_portoviejo += '</tr>';
}

tableHTML__Permeabilidad_portoviejo += '</table>';
document.getElementById('_Permeabilidad_portoviejo_tab').innerHTML = tableHTML__Permeabilidad_portoviejo;

tableHTML__Permeabilidad_manta = '<table id="_Permeabilidad_manta_table">';
tableHTML__Permeabilidad_manta += 	'<tr>';
tableHTML__Permeabilidad_manta += 		'<th>Mapa</th>';
tableHTML__Permeabilidad_manta += 		'<th>EDAD</th>';
tableHTML__Permeabilidad_manta += 		'<th>FORMACION1</th>';
tableHTML__Permeabilidad_manta += 		'<th>ID</th>';
tableHTML__Permeabilidad_manta += 		'<th>LITOLOGIA</th>';
tableHTML__Permeabilidad_manta += 		'<th>PERM</th>';
tableHTML__Permeabilidad_manta += 		'<th>PERMIABILI</th>';
tableHTML__Permeabilidad_manta += 		'<th>SIMBOLO</th>';
tableHTML__Permeabilidad_manta += 		'<th>SIMBOLO1</th>';
tableHTML__Permeabilidad_manta += 		'<th>TIPO_PERM</th>';
tableHTML__Permeabilidad_manta += 	'</tr>';
tableHTML__Permeabilidad_manta += 	'<tr>';
tableHTML__Permeabilidad_manta += 		'<td></td>';
tableHTML__Permeabilidad_manta += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar EDAD"></td>';
tableHTML__Permeabilidad_manta += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar FORMACION1"></td>';
tableHTML__Permeabilidad_manta += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Procurar ID"></td>';
tableHTML__Permeabilidad_manta += 		'<td><input type="text" onkeyup="filter(event, 4)" placeholder="Procurar LITOLOGIA"></td>';
tableHTML__Permeabilidad_manta += 		'<td><input type="text" onkeyup="filter(event, 5)" placeholder="Procurar PERM"></td>';
tableHTML__Permeabilidad_manta += 		'<td><input type="text" onkeyup="filter(event, 6)" placeholder="Procurar PERMIABILI"></td>';
tableHTML__Permeabilidad_manta += 		'<td><input type="text" onkeyup="filter(event, 7)" placeholder="Procurar SIMBOLO"></td>';
tableHTML__Permeabilidad_manta += 		'<td><input type="text" onkeyup="filter(event, 8)" placeholder="Procurar SIMBOLO1"></td>';
tableHTML__Permeabilidad_manta += 		'<td><input type="text" onkeyup="filter(event, 9)" placeholder="Procurar TIPO_PERM"></td>';
tableHTML__Permeabilidad_manta += 	'</tr>';

var _Permeabilidad_manta_IDs = Object.keys(_Permeabilidad_manta._layers);
for (var i=0; i < _Permeabilidad_manta_IDs.length; i++){
	var feature = _Permeabilidad_manta._layers[_Permeabilidad_manta_IDs[i]].feature;
	tableHTML__Permeabilidad_manta += '<tr>';
	tableHTML__Permeabilidad_manta += 	'<td onclick="goToMap(_Permeabilidad_manta, ' + _Permeabilidad_manta_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__Permeabilidad_manta += 	'<td>' + feature.properties['EDAD'] + '</td>';
	tableHTML__Permeabilidad_manta += 	'<td>' + feature.properties['FORMACION1'] + '</td>';
	tableHTML__Permeabilidad_manta += 	'<td>' + feature.properties['ID'] + '</td>';
	tableHTML__Permeabilidad_manta += 	'<td>' + feature.properties['LITOLOGIA'] + '</td>';
	tableHTML__Permeabilidad_manta += 	'<td>' + feature.properties['PERM'] + '</td>';
	tableHTML__Permeabilidad_manta += 	'<td>' + feature.properties['PERMIABILI'] + '</td>';
	tableHTML__Permeabilidad_manta += 	'<td>' + feature.properties['SIMBOLO'] + '</td>';
	tableHTML__Permeabilidad_manta += 	'<td>' + feature.properties['SIMBOLO1'] + '</td>';
	tableHTML__Permeabilidad_manta += 	'<td>' + feature.properties['TIPO_PERM'] + '</td>';
	tableHTML__Permeabilidad_manta += '</tr>';
}

tableHTML__Permeabilidad_manta += '</table>';
document.getElementById('_Permeabilidad_manta_tab').innerHTML = tableHTML__Permeabilidad_manta;

tableHTML__Poligono_ci_maate_crucita = '<table id="_Poligono_ci_maate_crucita_table">';
tableHTML__Poligono_ci_maate_crucita += 	'<tr>';
tableHTML__Poligono_ci_maate_crucita += 		'<th>Mapa</th>';
tableHTML__Poligono_ci_maate_crucita += 		'<th>Area</th>';
tableHTML__Poligono_ci_maate_crucita += 		'<th>Cap gls</th>';
tableHTML__Poligono_ci_maate_crucita += 		'<th>ID_</th>';
tableHTML__Poligono_ci_maate_crucita += 		'<th>SCI</th>';
tableHTML__Poligono_ci_maate_crucita += 	'</tr>';
tableHTML__Poligono_ci_maate_crucita += 	'<tr>';
tableHTML__Poligono_ci_maate_crucita += 		'<td></td>';
tableHTML__Poligono_ci_maate_crucita += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar Area"></td>';
tableHTML__Poligono_ci_maate_crucita += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar Cap gls"></td>';
tableHTML__Poligono_ci_maate_crucita += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Procurar ID_"></td>';
tableHTML__Poligono_ci_maate_crucita += 		'<td><input type="text" onkeyup="filter(event, 4)" placeholder="Procurar SCI"></td>';
tableHTML__Poligono_ci_maate_crucita += 	'</tr>';

var _Poligono_ci_maate_crucita_IDs = Object.keys(_Poligono_ci_maate_crucita._layers);
for (var i=0; i < _Poligono_ci_maate_crucita_IDs.length; i++){
	var feature = _Poligono_ci_maate_crucita._layers[_Poligono_ci_maate_crucita_IDs[i]].feature;
	tableHTML__Poligono_ci_maate_crucita += '<tr>';
	tableHTML__Poligono_ci_maate_crucita += 	'<td onclick="goToMap(_Poligono_ci_maate_crucita, ' + _Poligono_ci_maate_crucita_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__Poligono_ci_maate_crucita += 	'<td>' + feature.properties['Area'] + '</td>';
	tableHTML__Poligono_ci_maate_crucita += 	'<td>' + feature.properties['Cap gls'] + '</td>';
	tableHTML__Poligono_ci_maate_crucita += 	'<td>' + feature.properties['ID_'] + '</td>';
	tableHTML__Poligono_ci_maate_crucita += 	'<td>' + feature.properties['SCI'] + '</td>';
	tableHTML__Poligono_ci_maate_crucita += '</tr>';
}

tableHTML__Poligono_ci_maate_crucita += '</table>';
document.getElementById('_Poligono_ci_maate_crucita_tab').innerHTML = tableHTML__Poligono_ci_maate_crucita;

tableHTML__Precipitacion_Portoviejo = '<table id="_Precipitacion_Portoviejo_table">';
tableHTML__Precipitacion_Portoviejo += 	'<tr>';
tableHTML__Precipitacion_Portoviejo += 		'<th>Mapa</th>';
tableHTML__Precipitacion_Portoviejo += 		'<th>RANGO</th>';
tableHTML__Precipitacion_Portoviejo += 	'</tr>';
tableHTML__Precipitacion_Portoviejo += 	'<tr>';
tableHTML__Precipitacion_Portoviejo += 		'<td></td>';
tableHTML__Precipitacion_Portoviejo += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar RANGO"></td>';
tableHTML__Precipitacion_Portoviejo += 	'</tr>';

var _Precipitacion_Portoviejo_IDs = Object.keys(_Precipitacion_Portoviejo._layers);
for (var i=0; i < _Precipitacion_Portoviejo_IDs.length; i++){
	var feature = _Precipitacion_Portoviejo._layers[_Precipitacion_Portoviejo_IDs[i]].feature;
	tableHTML__Precipitacion_Portoviejo += '<tr>';
	tableHTML__Precipitacion_Portoviejo += 	'<td onclick="goToMap(_Precipitacion_Portoviejo, ' + _Precipitacion_Portoviejo_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__Precipitacion_Portoviejo += 	'<td>' + feature.properties['RANGO'] + '</td>';
	tableHTML__Precipitacion_Portoviejo += '</tr>';
}

tableHTML__Precipitacion_Portoviejo += '</table>';
document.getElementById('_Precipitacion_Portoviejo_tab').innerHTML = tableHTML__Precipitacion_Portoviejo;

tableHTML__Precipitacion_manta = '<table id="_Precipitacion_manta_table">';
tableHTML__Precipitacion_manta += 	'<tr>';
tableHTML__Precipitacion_manta += 		'<th>Mapa</th>';
tableHTML__Precipitacion_manta += 		'<th>RANGO</th>';
tableHTML__Precipitacion_manta += 	'</tr>';
tableHTML__Precipitacion_manta += 	'<tr>';
tableHTML__Precipitacion_manta += 		'<td></td>';
tableHTML__Precipitacion_manta += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar RANGO"></td>';
tableHTML__Precipitacion_manta += 	'</tr>';

var _Precipitacion_manta_IDs = Object.keys(_Precipitacion_manta._layers);
for (var i=0; i < _Precipitacion_manta_IDs.length; i++){
	var feature = _Precipitacion_manta._layers[_Precipitacion_manta_IDs[i]].feature;
	tableHTML__Precipitacion_manta += '<tr>';
	tableHTML__Precipitacion_manta += 	'<td onclick="goToMap(_Precipitacion_manta, ' + _Precipitacion_manta_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__Precipitacion_manta += 	'<td>' + feature.properties['RANGO'] + '</td>';
	tableHTML__Precipitacion_manta += '</tr>';
}

tableHTML__Precipitacion_manta += '</table>';
document.getElementById('_Precipitacion_manta_tab').innerHTML = tableHTML__Precipitacion_manta;

tableHTML__Rio_manta = '<table id="_Rio_manta_table">';
tableHTML__Rio_manta += 	'<tr>';
tableHTML__Rio_manta += 		'<th>Mapa</th>';
tableHTML__Rio_manta += 		'<th>cat_hidro</th>';
tableHTML__Rio_manta += 		'<th>f_code</th>';
tableHTML__Rio_manta += 		'<th>hyc</th>';
tableHTML__Rio_manta += 		'<th>nombre</th>';
tableHTML__Rio_manta += 		'<th>soc</th>';
tableHTML__Rio_manta += 	'</tr>';
tableHTML__Rio_manta += 	'<tr>';
tableHTML__Rio_manta += 		'<td></td>';
tableHTML__Rio_manta += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar cat_hidro"></td>';
tableHTML__Rio_manta += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar f_code"></td>';
tableHTML__Rio_manta += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Procurar hyc"></td>';
tableHTML__Rio_manta += 		'<td><input type="text" onkeyup="filter(event, 4)" placeholder="Procurar nombre"></td>';
tableHTML__Rio_manta += 		'<td><input type="text" onkeyup="filter(event, 5)" placeholder="Procurar soc"></td>';
tableHTML__Rio_manta += 	'</tr>';

var _Rio_manta_IDs = Object.keys(_Rio_manta._layers);
for (var i=0; i < _Rio_manta_IDs.length; i++){
	var feature = _Rio_manta._layers[_Rio_manta_IDs[i]].feature;
	tableHTML__Rio_manta += '<tr>';
	tableHTML__Rio_manta += 	'<td onclick="goToMap(_Rio_manta, ' + _Rio_manta_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__Rio_manta += 	'<td>' + feature.properties['cat_hidro'] + '</td>';
	tableHTML__Rio_manta += 	'<td>' + feature.properties['f_code'] + '</td>';
	tableHTML__Rio_manta += 	'<td>' + feature.properties['hyc'] + '</td>';
	tableHTML__Rio_manta += 	'<td>' + feature.properties['nombre'] + '</td>';
	tableHTML__Rio_manta += 	'<td>' + feature.properties['soc'] + '</td>';
	tableHTML__Rio_manta += '</tr>';
}

tableHTML__Rio_manta += '</table>';
document.getElementById('_Rio_manta_tab').innerHTML = tableHTML__Rio_manta;

tableHTML__Rio_portoviejo = '<table id="_Rio_portoviejo_table">';
tableHTML__Rio_portoviejo += 	'<tr>';
tableHTML__Rio_portoviejo += 		'<th>Mapa</th>';
tableHTML__Rio_portoviejo += 		'<th>cat_hidro</th>';
tableHTML__Rio_portoviejo += 		'<th>f_code</th>';
tableHTML__Rio_portoviejo += 		'<th>hyc</th>';
tableHTML__Rio_portoviejo += 		'<th>nombre</th>';
tableHTML__Rio_portoviejo += 		'<th>soc</th>';
tableHTML__Rio_portoviejo += 	'</tr>';
tableHTML__Rio_portoviejo += 	'<tr>';
tableHTML__Rio_portoviejo += 		'<td></td>';
tableHTML__Rio_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar cat_hidro"></td>';
tableHTML__Rio_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar f_code"></td>';
tableHTML__Rio_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Procurar hyc"></td>';
tableHTML__Rio_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 4)" placeholder="Procurar nombre"></td>';
tableHTML__Rio_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 5)" placeholder="Procurar soc"></td>';
tableHTML__Rio_portoviejo += 	'</tr>';

var _Rio_portoviejo_IDs = Object.keys(_Rio_portoviejo._layers);
for (var i=0; i < _Rio_portoviejo_IDs.length; i++){
	var feature = _Rio_portoviejo._layers[_Rio_portoviejo_IDs[i]].feature;
	tableHTML__Rio_portoviejo += '<tr>';
	tableHTML__Rio_portoviejo += 	'<td onclick="goToMap(_Rio_portoviejo, ' + _Rio_portoviejo_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__Rio_portoviejo += 	'<td>' + feature.properties['cat_hidro'] + '</td>';
	tableHTML__Rio_portoviejo += 	'<td>' + feature.properties['f_code'] + '</td>';
	tableHTML__Rio_portoviejo += 	'<td>' + feature.properties['hyc'] + '</td>';
	tableHTML__Rio_portoviejo += 	'<td>' + feature.properties['nombre'] + '</td>';
	tableHTML__Rio_portoviejo += 	'<td>' + feature.properties['soc'] + '</td>';
	tableHTML__Rio_portoviejo += '</tr>';
}

tableHTML__Rio_portoviejo += '</table>';
document.getElementById('_Rio_portoviejo_tab').innerHTML = tableHTML__Rio_portoviejo;

tableHTML__STA_MARIANITA_Aloha_Points = '<table id="_STA_MARIANITA_Aloha_Points_table">';
tableHTML__STA_MARIANITA_Aloha_Points += 	'<tr>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<th>Mapa</th>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<th>MarplotID</th>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<th>Name</th>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<th>altitudeMode</th>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<th>begin</th>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<th>description</th>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<th>drawOrder</th>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<th>end</th>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<th>extrude</th>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<th>icon</th>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<th>tessellate</th>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<th>timestamp</th>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<th>visibility</th>';
tableHTML__STA_MARIANITA_Aloha_Points += 	'</tr>';
tableHTML__STA_MARIANITA_Aloha_Points += 	'<tr>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<td></td>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar MarplotID"></td>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar Name"></td>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Procurar altitudeMode"></td>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 4)" placeholder="Procurar begin"></td>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 5)" placeholder="Procurar description"></td>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 6)" placeholder="Procurar drawOrder"></td>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 7)" placeholder="Procurar end"></td>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 8)" placeholder="Procurar extrude"></td>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 9)" placeholder="Procurar icon"></td>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 10)" placeholder="Procurar tessellate"></td>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 11)" placeholder="Procurar timestamp"></td>';
tableHTML__STA_MARIANITA_Aloha_Points += 		'<td><input type="text" onkeyup="filter(event, 12)" placeholder="Procurar visibility"></td>';
tableHTML__STA_MARIANITA_Aloha_Points += 	'</tr>';

var _STA_MARIANITA_Aloha_Points_IDs = Object.keys(_STA_MARIANITA_Aloha_Points._layers);
for (var i=0; i < _STA_MARIANITA_Aloha_Points_IDs.length; i++){
	var feature = _STA_MARIANITA_Aloha_Points._layers[_STA_MARIANITA_Aloha_Points_IDs[i]].feature;
	tableHTML__STA_MARIANITA_Aloha_Points += '<tr>';
	tableHTML__STA_MARIANITA_Aloha_Points += 	'<td onclick="goToMap(_STA_MARIANITA_Aloha_Points, ' + _STA_MARIANITA_Aloha_Points_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__STA_MARIANITA_Aloha_Points += 	'<td>' + feature.properties['MarplotID'] + '</td>';
	tableHTML__STA_MARIANITA_Aloha_Points += 	'<td>' + feature.properties['Name'] + '</td>';
	tableHTML__STA_MARIANITA_Aloha_Points += 	'<td>' + feature.properties['altitudeMode'] + '</td>';
	tableHTML__STA_MARIANITA_Aloha_Points += 	'<td>' + feature.properties['begin'] + '</td>';
	tableHTML__STA_MARIANITA_Aloha_Points += 	'<td>' + feature.properties['description'] + '</td>';
	tableHTML__STA_MARIANITA_Aloha_Points += 	'<td>' + feature.properties['drawOrder'] + '</td>';
	tableHTML__STA_MARIANITA_Aloha_Points += 	'<td>' + feature.properties['end'] + '</td>';
	tableHTML__STA_MARIANITA_Aloha_Points += 	'<td>' + feature.properties['extrude'] + '</td>';
	tableHTML__STA_MARIANITA_Aloha_Points += 	'<td>' + feature.properties['icon'] + '</td>';
	tableHTML__STA_MARIANITA_Aloha_Points += 	'<td>' + feature.properties['tessellate'] + '</td>';
	tableHTML__STA_MARIANITA_Aloha_Points += 	'<td>' + feature.properties['timestamp'] + '</td>';
	tableHTML__STA_MARIANITA_Aloha_Points += 	'<td>' + feature.properties['visibility'] + '</td>';
	tableHTML__STA_MARIANITA_Aloha_Points += '</tr>';
}

tableHTML__STA_MARIANITA_Aloha_Points += '</table>';
document.getElementById('_STA_MARIANITA_Aloha_Points_tab').innerHTML = tableHTML__STA_MARIANITA_Aloha_Points;

tableHTML__Zonas_amenaza_crucita = '<table id="_Zonas_amenaza_crucita_table">';
tableHTML__Zonas_amenaza_crucita += 	'<tr>';
tableHTML__Zonas_amenaza_crucita += 		'<th>Mapa</th>';
tableHTML__Zonas_amenaza_crucita += 		'<th>Name</th>';
tableHTML__Zonas_amenaza_crucita += 	'</tr>';
tableHTML__Zonas_amenaza_crucita += 	'<tr>';
tableHTML__Zonas_amenaza_crucita += 		'<td></td>';
tableHTML__Zonas_amenaza_crucita += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar Name"></td>';
tableHTML__Zonas_amenaza_crucita += 	'</tr>';

var _Zonas_amenaza_crucita_IDs = Object.keys(_Zonas_amenaza_crucita._layers);
for (var i=0; i < _Zonas_amenaza_crucita_IDs.length; i++){
	var feature = _Zonas_amenaza_crucita._layers[_Zonas_amenaza_crucita_IDs[i]].feature;
	tableHTML__Zonas_amenaza_crucita += '<tr>';
	tableHTML__Zonas_amenaza_crucita += 	'<td onclick="goToMap(_Zonas_amenaza_crucita, ' + _Zonas_amenaza_crucita_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__Zonas_amenaza_crucita += 	'<td>' + feature.properties['Name'] + '</td>';
	tableHTML__Zonas_amenaza_crucita += '</tr>';
}

tableHTML__Zonas_amenaza_crucita += '</table>';
document.getElementById('_Zonas_amenaza_crucita_tab').innerHTML = tableHTML__Zonas_amenaza_crucita;

tableHTML__Zonas_amenaza_stamarianita = '<table id="_Zonas_amenaza_stamarianita_table">';
tableHTML__Zonas_amenaza_stamarianita += 	'<tr>';
tableHTML__Zonas_amenaza_stamarianita += 		'<th>Mapa</th>';
tableHTML__Zonas_amenaza_stamarianita += 		'<th>Name</th>';
tableHTML__Zonas_amenaza_stamarianita += 	'</tr>';
tableHTML__Zonas_amenaza_stamarianita += 	'<tr>';
tableHTML__Zonas_amenaza_stamarianita += 		'<td></td>';
tableHTML__Zonas_amenaza_stamarianita += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar Name"></td>';
tableHTML__Zonas_amenaza_stamarianita += 	'</tr>';

var _Zonas_amenaza_stamarianita_IDs = Object.keys(_Zonas_amenaza_stamarianita._layers);
for (var i=0; i < _Zonas_amenaza_stamarianita_IDs.length; i++){
	var feature = _Zonas_amenaza_stamarianita._layers[_Zonas_amenaza_stamarianita_IDs[i]].feature;
	tableHTML__Zonas_amenaza_stamarianita += '<tr>';
	tableHTML__Zonas_amenaza_stamarianita += 	'<td onclick="goToMap(_Zonas_amenaza_stamarianita, ' + _Zonas_amenaza_stamarianita_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__Zonas_amenaza_stamarianita += 	'<td>' + feature.properties['Name'] + '</td>';
	tableHTML__Zonas_amenaza_stamarianita += '</tr>';
}

tableHTML__Zonas_amenaza_stamarianita += '</table>';
document.getElementById('_Zonas_amenaza_stamarianita_tab').innerHTML = tableHTML__Zonas_amenaza_stamarianita;

tableHTML__erosion_manta = '<table id="_erosion_manta_table">';
tableHTML__erosion_manta += 	'<tr>';
tableHTML__erosion_manta += 		'<th>Mapa</th>';
tableHTML__erosion_manta += 		'<th>EROSION</th>';
tableHTML__erosion_manta += 	'</tr>';
tableHTML__erosion_manta += 	'<tr>';
tableHTML__erosion_manta += 		'<td></td>';
tableHTML__erosion_manta += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar EROSION"></td>';
tableHTML__erosion_manta += 	'</tr>';

var _erosion_manta_IDs = Object.keys(_erosion_manta._layers);
for (var i=0; i < _erosion_manta_IDs.length; i++){
	var feature = _erosion_manta._layers[_erosion_manta_IDs[i]].feature;
	tableHTML__erosion_manta += '<tr>';
	tableHTML__erosion_manta += 	'<td onclick="goToMap(_erosion_manta, ' + _erosion_manta_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__erosion_manta += 	'<td>' + feature.properties['EROSION'] + '</td>';
	tableHTML__erosion_manta += '</tr>';
}

tableHTML__erosion_manta += '</table>';
document.getElementById('_erosion_manta_tab').innerHTML = tableHTML__erosion_manta;

tableHTML__erosion_portoviejo = '<table id="_erosion_portoviejo_table">';
tableHTML__erosion_portoviejo += 	'<tr>';
tableHTML__erosion_portoviejo += 		'<th>Mapa</th>';
tableHTML__erosion_portoviejo += 		'<th>EROSION</th>';
tableHTML__erosion_portoviejo += 	'</tr>';
tableHTML__erosion_portoviejo += 	'<tr>';
tableHTML__erosion_portoviejo += 		'<td></td>';
tableHTML__erosion_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar EROSION"></td>';
tableHTML__erosion_portoviejo += 	'</tr>';

var _erosion_portoviejo_IDs = Object.keys(_erosion_portoviejo._layers);
for (var i=0; i < _erosion_portoviejo_IDs.length; i++){
	var feature = _erosion_portoviejo._layers[_erosion_portoviejo_IDs[i]].feature;
	tableHTML__erosion_portoviejo += '<tr>';
	tableHTML__erosion_portoviejo += 	'<td onclick="goToMap(_erosion_portoviejo, ' + _erosion_portoviejo_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__erosion_portoviejo += 	'<td>' + feature.properties['EROSION'] + '</td>';
	tableHTML__erosion_portoviejo += '</tr>';
}

tableHTML__erosion_portoviejo += '</table>';
document.getElementById('_erosion_portoviejo_tab').innerHTML = tableHTML__erosion_portoviejo;

tableHTML__inundacion_manta = '<table id="_inundacion_manta_table">';
tableHTML__inundacion_manta += 	'<tr>';
tableHTML__inundacion_manta += 		'<th>Mapa</th>';
tableHTML__inundacion_manta += 		'<th>DESCRIPCIO</th>';
tableHTML__inundacion_manta += 		'<th>HECTARES</th>';
tableHTML__inundacion_manta += 	'</tr>';
tableHTML__inundacion_manta += 	'<tr>';
tableHTML__inundacion_manta += 		'<td></td>';
tableHTML__inundacion_manta += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar DESCRIPCIO"></td>';
tableHTML__inundacion_manta += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar HECTARES"></td>';
tableHTML__inundacion_manta += 	'</tr>';

var _inundacion_manta_IDs = Object.keys(_inundacion_manta._layers);
for (var i=0; i < _inundacion_manta_IDs.length; i++){
	var feature = _inundacion_manta._layers[_inundacion_manta_IDs[i]].feature;
	tableHTML__inundacion_manta += '<tr>';
	tableHTML__inundacion_manta += 	'<td onclick="goToMap(_inundacion_manta, ' + _inundacion_manta_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__inundacion_manta += 	'<td>' + feature.properties['DESCRIPCIO'] + '</td>';
	tableHTML__inundacion_manta += 	'<td>' + feature.properties['HECTARES'] + '</td>';
	tableHTML__inundacion_manta += '</tr>';
}

tableHTML__inundacion_manta += '</table>';
document.getElementById('_inundacion_manta_tab').innerHTML = tableHTML__inundacion_manta;

tableHTML__inundacion_portoviejo = '<table id="_inundacion_portoviejo_table">';
tableHTML__inundacion_portoviejo += 	'<tr>';
tableHTML__inundacion_portoviejo += 		'<th>Mapa</th>';
tableHTML__inundacion_portoviejo += 		'<th>DESCRIPCIO</th>';
tableHTML__inundacion_portoviejo += 		'<th>HECTARES</th>';
tableHTML__inundacion_portoviejo += 	'</tr>';
tableHTML__inundacion_portoviejo += 	'<tr>';
tableHTML__inundacion_portoviejo += 		'<td></td>';
tableHTML__inundacion_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar DESCRIPCIO"></td>';
tableHTML__inundacion_portoviejo += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar HECTARES"></td>';
tableHTML__inundacion_portoviejo += 	'</tr>';

var _inundacion_portoviejo_IDs = Object.keys(_inundacion_portoviejo._layers);
for (var i=0; i < _inundacion_portoviejo_IDs.length; i++){
	var feature = _inundacion_portoviejo._layers[_inundacion_portoviejo_IDs[i]].feature;
	tableHTML__inundacion_portoviejo += '<tr>';
	tableHTML__inundacion_portoviejo += 	'<td onclick="goToMap(_inundacion_portoviejo, ' + _inundacion_portoviejo_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__inundacion_portoviejo += 	'<td>' + feature.properties['DESCRIPCIO'] + '</td>';
	tableHTML__inundacion_portoviejo += 	'<td>' + feature.properties['HECTARES'] + '</td>';
	tableHTML__inundacion_portoviejo += '</tr>';
}

tableHTML__inundacion_portoviejo += '</table>';
document.getElementById('_inundacion_portoviejo_tab').innerHTML = tableHTML__inundacion_portoviejo;

