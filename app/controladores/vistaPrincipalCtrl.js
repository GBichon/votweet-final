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


  $scope.candidatos2= [
    {
      "cdto_id": "1",
      "pdto_id": "1",
      "cdto_nombre": "Felipe Kast",
      "cdto_cuenta_twitter": "@felipekast",
      "cdto_fecha_nacimiento": "09/06/1977",
      "cdto_edad": "39",
      "cdto_imagen": "http://vignette4.wikia.nocookie.net/althistory/images/b/b0/Felipe_Kast.jpg/revision/latest?cb=20150402072336&path-prefix=es",
      "cdto_activo": "1"
    },
    {
      "cdto_id": "2",
      "pdto_id": "2",
      "cdto_nombre": "Jose Ossandon",
      "cdto_cuenta_twitter": "@mjossandon",
      "cdto_fecha_nacimiento": "24/08/1962",
      "cdto_edad": "54",
      "cdto_imagen": "http://www.nuevopoder.cl/nuevo_sitio/wp-content/uploads/2016/06/Ossandon-Manuel-Jose-La-Naci%C3%B3n.jpg",
      "cdto_activo": "1"
    },
    {
      "cdto_id": "3",
      "pdto_id": "3",
      "cdto_nombre": "Sebastian Piñera",
      "cdto_cuenta_twitter": "@sebastinapinera",
      "cdto_fecha_nacimiento": "01/12/1949",
      "cdto_edad": "67",
      "cdto_imagen": "https://upload.wikimedia.org/wikipedia/commons/4/49/Sebastian_Pinera.JPG",
      "cdto_activo": "1"
    },
    {
      "cdto_id": "4",
      "pdto_id": "4",
      "cdto_nombre": "Beatriz Sanchez",
      "cdto_cuenta_twitter": "@labeasanchez",
      "cdto_fecha_nacimiento": "24/12/1970",
      "cdto_edad": "46",
      "cdto_imagen": "http://www.diarioantofagasta.cl/wp-content/uploads/2017/04/beatrizsanchez.jpg",
      "cdto_activo": "1"
    },
    {
      "cdto_id": "5",
      "pdto_id": "5",
      "cdto_nombre": "Alejandro Guiller",
      "cdto_cuenta_twitter": "@aleguiller",
      "cdto_fecha_nacimiento": "05/03/1953",
      "cdto_edad": "64",
      "cdto_imagen": "http://radio.uchile.cl/wp-content/uploads/2016/08/alejandro-guillier.jpg",
      "cdto_activo": "1"
    },
    {
      "cdto_id": "6",
      "pdto_id": "6",
      "cdto_nombre": "Carolina Goinc",
      "cdto_cuenta_twitter": "@carolinagoic",
      "cdto_fecha_nacimiento": "20/12/1972",
      "cdto_edad": "44",
      "cdto_imagen": "http://3.bp.blogspot.com/-AyVS1TWSll4/Tl7D4cBjMxI/AAAAAAAAHEc/wp8WJXyIcow/s1600/DSC_4182_ok.jpg",
      "cdto_activo": "1"
    }
  ];

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

$scope.relevantes=[ 
        {
          "usuario": "@ajale",
          "destinatario": "@sebastianPiñera",
          "likes": 1500,
          "retweet": 800,
          "contenido": "sebastian piñera no robará porque ya tiene dinero... si claro",
          "region": "Metropolitana",
          "ciudad": "Santiago",
        },
        {
          "usuario": "@unMasterPolitico",
          "destinatario": "@sebastianPiñera",
          "likes": 2643,
          "retweet": 921,
          "contenido": "piñera ganará primarias solo porque los otros son peores",
          "region": "Atacama",
          "ciudad": "Copiapo",
        },          
        {
          "usuario": "@pameRo",
          "destinatario": "@sebastianPiñera",
          "likes": 1232,
          "retweet": 231,
          "contenido": "ex presidente piñera devolvera el crecimiento de la economia y de empleos",
          "region": "Valparaiso",
          "ciudad": "Viña del mar",
        },
        {
          "usuario": "@oliverAtom",
          "destinatario": "@sebastianPiñera",
          "likes": 1232,
          "retweet": 231,
          "contenido": "piñera viene a mejorar todo! se vienen #mejoresTiempos",
          "region": "ohiggins",
          "ciudad": "Rancagua",
        },          
        {
          "usuario": "@miraUnPerro",
          "destinatario": "@sebastianPiñera",
          "likes": 1954,
          "retweet": 142,
          "contenido": "Piñera el mejor empresario que podria tener Chile",
          "region": "De los lagos",
          "ciudad": "Osorno",
        }         
        ];
$scope.internacional=[ 
        {
          "usuario": "@huirDificil",
          "destinatario": "@sebastianPiñera",
          "likes": 1500,
          "retweet": 800,
          "contenido": "no voten por piñera chilenos, sino les pasara lo que a nosotros ahora!",
          "pais": "Argentina",
        },
        {
          "usuario": "@unMasterPolitico",
          "destinatario": "@sebastianPiñera",
          "likes": 2643,
          "retweet": 921,
          "contenido": "desde españa todo mi apoyo para el presidente piñera",
          "pais": "España",

        },          
        {
          "usuario": "@pepeTeamo",
          "destinatario": "@sebastianPiñera",
          "likes": 1232,
          "retweet": 231,
          "contenido": "piñera esta en contra de la legalizacion, personas asi sobran",
          "pais": "Uruguay",

        },
        {
          "usuario": "@veneQuerido",
          "destinatario": "@sebastianPiñera",
          "likes": 1232,
          "retweet": 231,
          "contenido": "piñera si sale electo le abrirá las puertas a los empresarios a evadir impuestos",
          "pais": "Venezuela"
        }                 
        ];
});