angular.module('ofPG.directives', [
    'ofPG.services'
])
.directive('noDrag', [function() {
    return {
            template: '<a onmousedown="return false"><span ng-transclude></span></a>',
            restrict: 'A',
            replace: true,
            transclude: true,
            link: function(scope, iElement, iAttrs) {
            }
        };
    }])
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
            template: '<div ng-transclude></div>',
            restrict: 'E',
            transclude: true,
            link: function(scope, iElement, iAttrs) {
                var hintbaloon = iElement.find('.hint');
                iElement.hover(function(){
                    iElement.addClass('focus');
                    hintbaloon.show();
                    setTimeout(function(){
                        hintbaloon.addClass('visible');
                    });
                },
                function(){
                    iElement.removeClass('focus');
                    hintbaloon.removeClass('visible');
                    setTimeout(function(){
                        hintbaloon.hide();
                    });
                });
                hintbaloon.hide();

            }
        };
    }])
.directive('browseFolder', [function() {
    return {
            templateUrl: 'templates/_browsefolder.html',
            restrict: 'E',
            scope: {},
            link: function(scope, iElement, iAttrs) {
                // https://github.com/rogerwang/node-webkit/wiki/File-dialogs#pure-javascript
                var chooser = iElement.find('.folderDialog');
                chooser.change(function(evt) {
                    var folder = $(this).val();
                    if(folder != '') {
                        scope.$apply(function(){
                            scope.folder = folder;
                        });
                    }
                });
                iElement.find('button').click(function(){
                    chooser[0].click();
                });
            }
        };
    }])
