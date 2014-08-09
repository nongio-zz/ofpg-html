angular.module('ofPG.directives', [
    'ofPG.services'
])

.directive('navigationBar', [function() {
    return {
            templateUrl: 'templates/_navigationbar.html',
            restrict: 'E',
            link: function(scope, iElement, iAttrs) {
                console.log('navigation bar');
            }
        };
    }])
.directive('section', [function() {
    return {
            template: '<div ng-mouseover="onHover()" ng-transclude></div>',
            restrict: 'E',
            transclude: true,
            link: function(scope, iElement, iAttrs) {
                console.log('navigation bar');
            }
        };
    }])
