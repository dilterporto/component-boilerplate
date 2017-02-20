import Service from './_service';

function create(service: Service): angular.IDirective {
    
    var template = require("../../../html/component.html");
    
    return {
        replace: true,
        restrict: "E",
        require: 'ngModel',
        scope: {
            // your component instance
            component: '=ngModel'
        },
        template: template,
        link(scope: angular.IScope, instanceElement: angular.IAugmentedJQuery, attributes: angular.IAttributes, ngModel: angular.INgModelController) {

            
        }
    }
}
var directive: any[] = ['service', create];

export default directive;

angular.module('unio').directive('component', directive);