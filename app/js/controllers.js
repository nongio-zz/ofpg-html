angular.module('ofPG.controllers', [])

.controller('MainCtrl', ['$scope', '$rootScope',
    function(scope, $rootScope){
    // Main Controller
    window.console.log('Main controller');
    $rootScope.current_view = 'main';
    setTimeout(function(){
        $('body').addClass('animations_enabled');
    }, 500);
}])
.controller('SettingsCtrl', ['$scope','$rootScope',
    function(scope, $rootScope){
    // Settings Controller
    window.console.log('Settings controller');
    $rootScope.current_view = 'settings';

}])
