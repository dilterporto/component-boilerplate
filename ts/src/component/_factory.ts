import Component from './_component';
import Service from './_service';

var factory = ['$q', '$http', ($q, $http) => {
    var f: Unio.Controls.IComponentFactory = {
        create: () => {
            
            // create some services
            var service = new Service($q, $http);

            //  instaciate component
            var component = new Component(service);

            return component;
        }
    };
    return f;
}];

angular.module('unio').factory('componentFactory', factory);