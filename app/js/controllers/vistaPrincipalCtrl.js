var app = angular.module('candidatos',[]);

app.service('getCandidatoService',function ($http) {
  var urlBase='http://localhost:8080/restfull-war/webresources/com.voto.jaxrs'
  this.getAll=function (success,failure) {
        $http.get('http://localhost:8080/restfull-war/webresources/com.voto.jaxrs.candidato')
        .success(success)
        .failure(failure);
    };

  this.getCandidatos = function(){
        url = urlBase + '.candidato';
        return $http.get(url);
    };
    this.getUsuarios = function(){
        url = urlBase+'.usuario'+id;
        return $http.get(url);
    };

    this.getPartidos = function(){
        url = urlBase+'.partido';
        return $http.get(url);
    };
});


app.controller('controlCdtos',function ($scope,$http) {

  //$scope.candidatos=  ServCandidatos.getCandidatos();
  //console.log(candidatos);

  $scope.candidatos=[];
  $http({
      method: 'GET',
      url: 'http://localhost:8080/restfull-war/webresources/com.voto.jaxrs.candidato'
   }).then(function (data){
        $scope.candidatos=data.data;
        console.log($scope.candidatos[0]);
   },function (error){

   });




console.log($scope.candidatos.length);
for (var i = 0; i < $scope.candidatos.length; i++) {
  console.log($scope.candidatos[i]);
}


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

  $scope.delete=function ($index){
  	$scope.candidatos2.splice($scope.candidatos2.indexOf($index),1);
  };

});