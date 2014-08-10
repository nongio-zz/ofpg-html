angular.module('ofPG.controllers', [])

.controller('MainCtrl', ['$scope',
    function(scope){
    // Main Controller
    window.console.log('Main controller');
    scope.current_view = 'main';
    setTimeout(function(){
        $('body').addClass('animations_enabled');
    }, 500);
}])
.controller('SettingsCtrl', ['$scope',
    function(scope){
    // Main Controller
    window.console.log('Settings controller');
    scope.current_view = 'settings';

}])
