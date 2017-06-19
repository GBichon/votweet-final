var app=angular.module('graficaApp',[])

.controller('mainCtrl',['$scope',function ($scope) {
var freqData=[
	{State:'I',freq:{Aprobación:14786, Desaprobación:1319}}
	,{State:'II',freq:{Aprobación:1101, Desaprobación:4012}}
	,{State:'III',freq:{Aprobación:932, Desaprobación:2149}}
	,{State:'IV',freq:{Aprobación:832, Desaprobación:1152}}
	,{State:'V',freq:{Aprobación:4481, Desaprobación:3304}}
	,{State:'VI',freq:{Aprobación:1619, Desaprobación:1067}}
	,{State:'VII',freq:{Aprobación:1819, Desaprobación:2047}}
	,{State:'VIII',freq:{Aprobación:4498, Desaprobación:3852}}
	,{State:'IX',freq:{Aprobación:797, Desaprobación:1849}}
	,{State:'X',freq:{Aprobación:162, Desaprobación:379}}
	,{State:'XI',freq:{Aprobación:1234, Desaprobación:3079}}
	,{State:'XII',freq:{Aprobación:132, Desaprobación:4579}}
	,{State:'RM',freq:{Aprobación:503, Desaprobación:2002}}
	,{State:'XIV',freq:{Aprobación:204, Desaprobación:4322}}
	,{State:'XV',freq:{Aprobación:4012, Desaprobación:1079}}
	];
	dashboard('#dashboard',freqData);


	$scope.data=[
		{value: 30, label: 'Sebastian Piñera'},
		{value: 31, label: 'Alejandro Guiller'},
		{value: 5, label: 'Felipe Kast'},
		{value: 14, label: 'Manuel José Ossandon'},
		{value: 10, label: 'Beatriz Sanchez'},
		{value: 10, label: 'Carolina Goic'}
	];

	var dona=Morris.Donut({
	element:'graph',
	data:[{}],
  	formatter: function (x) { return x + "%"}
	});

	function actualizar_grafico(){
		dona.setData($scope.data);
	};

	actualizar_grafico()

}]);