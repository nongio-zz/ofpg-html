angular.module('ofPG.directives', [
    'ofPG.services'
])
//needed to prevent drag drop of links into input fields
.directive('noDrag', [function() {
    return {
            restrict: 'A',
            link: function(scope, iElement, iAttrs) {
                iElement[0].onmousedown = function(){
                    return false;
                }
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
.directive('buttonsBar', ['$rootScope', function($rootScope) {
    return {
            templateUrl: 'templates/_footer.html',
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
.directive('onDragFile', [function() {
    return {
            restrict: 'A',
            scope: {
                onDragFile: "&"
            },
            link: function(scope, iElement, iAttrs) {
                window.ondragover = function(e) { e.preventDefault(); return false };
                window.ondrop = function(e) { e.preventDefault(); return false };

                var holder = iElement[0];
                holder.ondragover = function () {
                    iElement.addClass('focus');
                    return false;
                };
                holder.ondragleave = function () {
                    iElement.removeClass('focus');
                    return false;
                };
                scope.$files = [];
                holder.ondrop = function (e) {
                    e.preventDefault();
                    iElement.removeClass('focus');
                    scope.onDragFile({
                        $files:  e.dataTransfer.files
                    });
                    return false;
                };
            }
        };
    }])
