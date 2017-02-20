export default class Service {

    public doAnything(withParam: any) {
        console.log(`doing anything -> ${withParam}`)
    }

    constructor(private $q: angular.IQService, private $http: angular.IHttpService) {
        
    }

}

angular.module('unio').service('grid', Service);