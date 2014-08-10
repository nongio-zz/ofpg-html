angular.module('ofPG.controllers', ['ofPG.services'])

.controller('MainCtrl', ['$scope', '$rootScope', 'OF',
    function(scope, $rootScope, OF){
    // Main Controller
    $rootScope.current_view = 'main';
    setTimeout(function(){
        $('body').addClass('animations_enabled');
    }, 500);


    scope.onProjectDrop = function(files) {
        var projects = [];
        for (var i = 0; i < files.length; ++i) {
            projects.push(files[i].path);
        }
        scope.projects = OF(projects).projects();
        if(scope.projects.length == 1) {
            scope.project_path = scope.projects[0].path;
        }
        if(scope.projects.length > 1) {
            scope.project_path = '';
        }
        scope.$apply();
    }

    scope.onAddonDrop = function(files) {
        var s= 'you just dragged these files';
        for (var i = 0; i < files.length; ++i) {
            s += files[i].path + '\n';
        }
        alert(s);
    }
    scope.$watch('project_path', function(v) {
        if(v != '') {
            scope.project_already_exists = OF().is_projectpath(v);
            scope.projects = OF(v).projects();
        }
    });
    scope.available_addons = OF().addons_list();
    scope.project_path = OF().default_new_project_path();

    scope.clearSelection = function() {
        scope.projects = []
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
