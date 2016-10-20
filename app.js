(function(){
    'use strict';
    angular.module("myFirstApp", [])

    .controller("myFirstController", DIController); 
    function DIController($scope, $filter){
        $scope.name = "";
        $scope.totalValue=0;

        $scope.displayNumeric = function(){
            var totalNameValue = calculateNumericForString($scope.name);
            $scope.totalValue = totalNameValue;
        };

        $scope.upper = function(){
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        }

        function calculateNumericForString(string){
            var totalnamevalue = 0;
            for(var i=0; i<string.length; i++){
                totalnamevalue += string.charCodeAt(i);
            }
            return totalnamevalue;
            
        }
    }
})();











/*var student = {
    name : "",
    type : "student"
};
document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded(event){
    document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event){
    calculateNumericOutput();
}

function calculateNumericOutput(){
    student.name = document.getElementById('name').value;

    var totalnamevalue = 0;
    for(var i=0; i<student.name.length; i++){
        totalnamevalue += student.name.charCodeAt(i);
    }

    var output = "total numeric value of the person name is" + totalnamevalue;
    document.getElementById('output').innerText = output;
}
*/
