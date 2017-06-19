   /* Radar chart design created by Nadieh Bremer - VisualCinnamon.com */
      
			////////////////////////////////////////////////////////////// 
			//////////////////////// Set-Up ////////////////////////////// 
			////////////////////////////////////////////////////////////// 

var margin = {top: 100, right: 100, bottom: 100, left: 100},
			width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
			height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
					
			////////////////////////////////////////////////////////////// 
			////////////////////////// Data ////////////////////////////// 
			////////////////////////////////////////////////////////////// 



var jsonData = $.ajax({
	//aqui va la url del servicio
	url: "../js/resources/nacional.json",
	dataType: "json",
	async: false
}).responseJSON;

function procesarArrayAprobacion(json) {
	var datos = [];
	for (var i = 0, l = json.length; i < l; i++) {
		datos.push({ axis: json[i].Nombre, value:json[i].aprobacion},);
	}
	return datos;
}

function procesarArrayDesaprobacion(json) {
	var datos = [];
	for (var i = 0, l = json.length; i < l; i++) {
		datos.push({ axis: json[i].Nombre, value:json[i].desaprobacion},);
	}
	return datos;
}

var datosAprobacion = procesarArrayAprobacion(jsonData);
var datosDesaprobacion=procesarArrayDesaprobacion(jsonData);
var datosFinal=[];

datosFinal.push(datosAprobacion);
datosFinal.push(datosDesaprobacion);
console.log(datosFinal);


var data = [
		[//APROBACION
			{axis:"XV de Arica y Parinacota",value:0.3},
			{axis:"I de Tarapacá",value:0.50},
			{axis:"II de Antofagasta",value:0.28},
			{axis:"III de Atacama",value:0.29},
			{axis:"IV de Coquimbo",value:0.17},
			{axis:"V de Valparaiso",value:0.22},
			{axis:"VI del Libertador General Bernardo O'Higgins",value:0.6},
			{axis:"VII del Maule",value:0.6},
			{axis:"VIII del Bío Bío",value:0.60},
			{axis:"IX de la Araucanía",value:0.65},
			{axis:"XIV de los Ríos",value:0.40},			
			{axis:"X de los Lagos",value:0.70},
			{axis:"XI Aisén del General Carlos Ibáñez del Campo",value:0.40},
			{axis:"XII de Magallanes y Antártica Chilena",value:0.30},
			{axis:"RM Metropolitana de Santiago",value:0.70},
		],[//DESAPROBACION
			{axis:"XV de Arica y Parinacota",value:0.7},
			{axis:"I de Tarapacá",value:0.50},
			{axis:"II de Antofagasta",value:0.16},
			{axis:"III de Atacama",value:0.35},
			{axis:"IV de Coquimbo",value:0.13},
			{axis:"V de Valparaiso",value:0.20},
			{axis:"VI del Libertador General Bernardo O'Higgins",value:0.4},
			{axis:"VII del Maule",value:0.4},
			{axis:"VIII del Bío Bío",value:0.4},
			{axis:"IX de la Araucanía",value:0.35},
			{axis:"XIV de los Ríos",value:0.60},
			{axis:"X de los Lagos",value:0.30},
			{axis:"XI Aisén del General Carlos Ibáñez del Campo",value:0.60},
			{axis:"XII de Magallanes y Antártica Chilena",value:0.70},
			{axis:"RM Metropolitana de Santiago",value:0.30},
			]
		];
			////////////////////////////////////////////////////////////// 
			//////////////////// Draw the Chart ////////////////////////// 
			////////////////////////////////////////////////////////////// 
var color = d3.scale.ordinal()
			.range(["#EDC951","#CC333F","#00A0B0"]);
				
var radarChartOptions = {
	w: width,
	h: height,
	margin: margin,
	maxValue: 0.5,
	levels: 10,
	roundStrokes: true,
	color: color
	};
//Call function to draw the Radar chart
RadarChart(".radarChart", datosFinal, radarChartOptions);