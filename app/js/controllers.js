angular.module('ofPG.controllers', [])

.controller('MainCtrl', ['$scope', '$rootScope',
    function(scope, $rootScope){
    // Main Controller
    window.console.log('Main controller');
    $rootScope.current_view = 'main';
    setTimeout(function(){
        $('body').addClass('animations_enabled');
    }, 500);


    scope.onProjectDrop = function(files) {
        var s= 'you just dragged these files';
        for (var i = 0; i < files.length; ++i) {
            s += files[i].path;
        }
        alert(s);
    }

    scope.onAddonDrop = function(files) {
        var s= 'you just dragged these files';
        for (var i = 0; i < files.length; ++i) {
            s += files[i].path + '\n';
        }
        alert(s);
    }

}])
.controller('SettingsCtrl', ['$scope','$rootScope',
    function(scope, $rootScope){
    // Settings Controller
    window.console.log('Settings controller');
    $rootScope.current_view = 'settings';

}])
