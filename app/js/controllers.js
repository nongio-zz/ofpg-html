angular.module('ofPG.controllers', ['ofPG.services'])

.controller('MainCtrl', ['$scope', '$rootScope',
    function(scope, $rootScope){
    // Main Controller
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
.controller('SettingsCtrl', ['$scope','$rootScope', '$location', 'OF',
    function(scope, $rootScope, $location, OF){
    // Settings Controller
    $rootScope.current_view = 'settings';
    scope.of_path = OF().of_path();
    scope.project_path = OF().default_new_project_path();
    scope.saveSettings = function() {
        OF().set_of_path(scope.of_path);
        OF().set_default_new_project_path(scope.project_path);
        $location.path('/main');
    }
}])
