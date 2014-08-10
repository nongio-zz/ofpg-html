angular.module('ofPG.services', [])
.factory('OF', ['$q', function($q){
    return function() {
        var fs = require('fs');
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
            },
            addons_list: function() {

                if(localStorage['openframeworks_path'] != '') {
                    var addons_path = localStorage['openframeworks_path']+'/addons/';
                    var files = fs.readdirSync(addons_path);
                    var folders = files.filter(function(path) {
                        var stat = fs.lstatSync(addons_path+path);
                        return stat.isDirectory();
                    });
                    return folders;
                } else {
                    return [];
                }
            },
            is_projectpath: function(path) {
                var files = fs.readdirSync(path);
                return files.filter(function(v){ return v == 'src'}).length > 0;
            }
        }
    }
}])
