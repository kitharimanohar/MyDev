
var myApp = angular.module("myModule", []);

myApp.filter("gender", function () {
    return function (gender) {
        switch (gender) {
            case "1":
                return "Male";
            case "2":
                return "Female";
            case "3":
                return "Not Disclosed";
        }
    }
});

myApp.filter("state", function () {
    return function (state) {
        switch (state) {
            case "AZ":
                return "Arizona";
            case "AL":
                return "Alabama";
            case "AK":
                return "Alaska";
            case "AR":
                return "Arkansas";
        }
    }
});

myApp.controller("myController", function ($scope) {

    $scope.childMessage = "Hi I am here";
    $scope.Type = "You You You";
    var employee = {
        firstName: "John",
        lastName: "Smith",
        Geneder: "Male"
    };

    var oneDigitNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var twoDigitNumbers = Array(10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99);

    var item = twoDigitNumbers[Math.floor(Math.random() * twoDigitNumbers.length)];
    $scope.item = item;
    var employee = [
        { name: "Mich", dateOfBirth: new Date("April 30, 1988"), gender: "Female", salary:"98700.00" },
        { name: "John", dateOfBirth: new Date("August 15, 1981"), gender: "Male", salary: "45600.44564" },
        { name: "Stella", dateOfBirth: new Date("September 5, 1989"), gender: "Female", salary:"85400.00" },
        { name: "Thomas", dateOfBirth: new Date("August 11, 1991"), gender: "Male", salary: "23100.001" },
        { name: "Raghu", dateOfBirth: new Date("March 19, 1971"), gender: "Male", salary: "54600.005" }
        
    ];

    var employees = [
        { name: "Mich", dateOfBirth: new Date("April 30, 1988"), gender: "Female", salary: "98700.00" },
        { name: "John", dateOfBirth: new Date("August 15, 1981"), gender: "Male", salary: "45600.44564" },
        { name: "Stella", dateOfBirth: new Date("September 5, 1989"), gender: "Female", salary: "85400.00" },
        { name: "Thomas", dateOfBirth: new Date("August 11, 1991"), gender: "Male", salary: "23100.001" },
        { name: "Raghu", dateOfBirth: new Date("March 19, 1971"), gender: "Male", salary: "54600.005" }

    ];

    var employees1 = [
      { name: "Mich", dateOfBirth: new Date("April 30, 1988"), gender: "2", salary: "98700.00" ,city:"London",state:"AZ"},
      { name: "John", dateOfBirth: new Date("August 15, 1981"), gender: "1", salary: "45600.44564", city: "Chennai", state: "AK" },
      { name: "Stella", dateOfBirth: new Date("September 5, 1989"), gender: "2", salary: "85400.00", city: "London", state: "AR" },
      { name: "Thomas", dateOfBirth: new Date("August 11, 1991"), gender: "1", salary: "23100.001", city: "New York", state: "AL" },
      { name: "Raghu", dateOfBirth: new Date("March 19, 1971"), gender: "3", salary: "54600.005", city: "New York", state: "AZ" }
    ];

    $scope.employees1 = employees1;
    $scope.employee = employee;
    $scope.employees = employees;
    $scope.rowsToDisplay = 3;

    $scope.sortColumn = "name";

    //var numbers = [
    //    { number1: 123, number2: 456, result: 579 },
    //    { number1: 123, number2: 456, result: 579 },
    //    { number1: 123, number2: 456, result: 579 }
    //];
    //$scope.numbers = numbers;



    $scope.reverseSort=false;

    $scope.sortData = function (column) {
        $scope.reverseSort = $scope.sortColumn == column ? !$scope.reverseSort : false;
        $scope.sortColumn = column;
        };

    $scope.getSortClass = function (column) {
        if ($scope.sortColumn == column) {
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
        }
        else
            return '';
    };
    
    function loadNumbers () {
        alert('123');
        var twoDigitNumbers = Array(01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                                          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                                          41, 42, 43, 44, 45, 46, 47, 48, 49);
        $scope.firstNumber = twoDigitNumbers[Math.floor(Math.random() * twoDigitNumbers.length)];
        $scope.secondNumber = twoDigitNumbers[Math.floor(Math.random() * twoDigitNumbers.length)];
    };

    $scope.secondNumber = function () {
        var twoDigitNumbers = Array(01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                                          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                                          41, 42, 43, 44, 45, 46, 47, 48, 49);
        return twoDigitNumbers[Math.floor(Math.random() * twoDigitNumbers.length)];
    };
});

