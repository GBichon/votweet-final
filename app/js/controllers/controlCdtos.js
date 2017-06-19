app.controller('controlCdtos',function ($scope,$http) {

  //$scope.candidatos=  ServCandidatos.getCandidatos();
  //console.log(candidatos);
  $scope.candidatos=[];
  $scope.candidatoActivo=[];
  $http({
      method: 'GET',
      url: 'http://localhost:8080/restfull-war/webresources/com.voto.jaxrs.candidato'
   }).then(function (data){
        $scope.candidatos=data.data;
   },function (error){

   });


  $scope.add=function () {
  	var nuevoCandidato={
  	  "cdto_nombre":$scope.Modelcdto_nombre,
      "pdto_id": $scope.Modelpdto_id,
      "cdto_cuenta_twitter": $scope.Modelcdto_cuenta_twitter,
      "cdto_fecha_nacimiento": $scope.Modelcdto_fecha_nacimiento,
      "cdto_edad":$scope.Modelcdto_edad,
      "cdto_imagen": $scope.Modelcdto_imagen
  	};

  	$scope.candidatos.push(nuevoCandidato);
  	$scope.Modelcdto_nombre='';
  	$scope.Modelpdto_id='';
  	$scope.Modelcdto_cuenta_twitter='';
  	$scope.Modelcdto_fecha_nacimiento='';
  	$scope.Modelcdto_edad='';
  	$scope.Modelcdto_imagen='';
  };

  $scope.loadActivo=function(idCandidato){
      $scope.candidatoActivo=idCandidato;
  }

  $scope.delete=function ($index){
  	$scope.candidatos2.splice($scope.candidatos2.indexOf($index),1);
  };

});