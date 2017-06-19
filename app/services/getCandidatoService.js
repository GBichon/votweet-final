app.service('getCandidatoService',function ($http) {
	var urlBase='http://localhost:8080/restfull-war/webresources/com.voto.jaxrs'



	this.getAll=function (success,failure) {
        $http.get('http://localhost:8080/restfull-war/webresources/com.voto.jaxrs.candidato')
        .success(success)
        .failure(failure);
    }

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
})