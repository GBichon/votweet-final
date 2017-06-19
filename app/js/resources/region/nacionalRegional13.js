var jsonData = $.ajax({
	//aqui va la url del servicio
	url: "../js/resources/nacional.json",
	dataType: "json",
	async: false
}).responseJSON;

function procesarArray(json) {
	var datos = [];
	for (var i = 0, l = json.length; i < l; i++) {
		datos.push({ State: json[i].Identificador, freq:{Aprobación: json[i].aprobacion, Desaprobación: json[i].desaprobacion}},);
	}
	return datos;
}

var datosPre = procesarArray(jsonData);
/*var freqData=[
	{State:'I',freq:{Aprobación:786, Desaprobación:131}}
	,{State:'II',freq:{Aprobación:401, Desaprobación:400}}
	,{State:'III',freq:{Aprobación:932, Desaprobación:114}}
	,{State:'IV',freq:{Aprobación:832, Desaprobación:115}}
	,{State:'V',freq:{Aprobación:448, Desaprobación:330}}
	,{State:'VI',freq:{Aprobación:261, Desaprobación:106}}
	,{State:'VII',freq:{Aprobación:381, Desaprobación:204}}
	,{State:'VIII',freq:{Aprobación:231, Desaprobación:385}}
	,{State:'IX',freq:{Aprobación:797, Desaprobación:184}}
	,{State:'X',freq:{Aprobación:162, Desaprobación:379}}
	,{State:'XI',freq:{Aprobación:123, Desaprobación:307}}
	,{State:'XII',freq:{Aprobación:130, Desaprobación:457}}
	,{State:'RM',freq:{Aprobación:503, Desaprobación:200}}
	,{State:'XIV',freq:{Aprobación:204, Desaprobación:432}}
	,{State:'XV',freq:{Aprobación:401, Desaprobación:107}}
	];

	console.log(freqData);*/
dashboard('#dashboard',datosPre);