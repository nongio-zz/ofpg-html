angular.module('ofPG.services', [])
.factory('OF', ['$q', function($q){
    var addons = [];
    var platforms = [];
    var projects = [];
    var FS = require('fs');
    var Path = require('path');
    function isProjectPath(path) {
        var files = FS.readdirSync(path);
        return files.filter(function(v){ return v == 'src'}).length > 0;
    }
    return function(projectpath) {
        if(projectpath instanceof Array) {
            projects = [];
            for(var i in projectpath) {
                var p = projectpath[i];
                if(isProjectPath(p)) {
                    var path_parts = p.split(Path.sep);
                    var project_name = path_parts.length > 0 ?  path_parts[path_parts.length-1] : 'emptyExample';
                    projects.push({
                        path: p,
                        name: project_name
                    });
                }
            }
        }
        if(projectpath instanceof String) {
            projects = [];
            if(isProjectPath(projectpath)) {
                var path_parts = projectpath.split(Path.sep);
                var project_name = path_parts.length > 0 ?  path_parts[path_parts.length-1] : 'emptyExample';
                projects.push({
                    path: projectpath,
                    name: project_name
                });
            }
        }
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
                    var files = FS.readdirSync(addons_path);
                    var folders = files.filter(function(path) {
                        var stat = FS.lstatSync(addons_path+path);
                        return stat.isDirectory();
                    });
                    return folders;
                } else {
                    return [];
                }
            },
            projects: function() {
                return projects;
            },
            set_projects: function(array_of_paths) {
                projects = array_of_paths;
            },
            is_projectpath: isProjectPath
        }
    }
}])
