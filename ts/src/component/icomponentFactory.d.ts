declare namespace Unio.Controls {
    interface IComponentFactory {
        create($q: angular.IQService, $http: angular.IHttpService): IComponent
    }
}