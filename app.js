(function (){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.menu = "";
  $scope.colorClass = "";
  $scope.checkIfTooMuch = function (){
    $scope.message = "";
    var count = 0;
    if ($scope.menu.length !=0 || $scope.menu == " "){
      var fields =   $scope.menu.split(',');
      for (var i = 0; i< fields.length; i++){
        if(fields[i]!= " ")
          count++;
      }
    }
    if(count <= 3 && count!=0){
       $scope.message = "Enjoy";
       $scope.colorClass = "green";
     }
    if(count === 0){
      $scope.message = "Please enter data first";
      $scope.colorClass = "red";
    }
    if(count>3){
      $scope.message = "Too much";
      $scope.colorClass = "green";
    }
    return $scope.message;
  }
}

})();
