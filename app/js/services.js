angular.module('ofPG.services', [])
.factory('ex', ['$q', function($){
    return function() {
        return {
            something: function(q){

                return;
            }
        }
    }
}])
