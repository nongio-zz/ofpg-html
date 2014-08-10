angular.module('ofPG.services', [])
.factory('OF', ['$q', function($){
    return function() {
        return {
            of_path: function() {
                return localStorage['openframeworks_path'];
            },
            set_of_path: function(newpath) {
                localStorage['openframeworks_path'] = newpath;
            },
            default_new_project_path: function(newpath) {
                return localStorage['new_project_path'];
            },
            set_default_new_project_path: function(newpath) {
                localStorage['new_project_path'] = newpath;
            }
        }
    }
}])
