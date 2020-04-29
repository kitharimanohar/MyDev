
var myApp2 = angular.module("myCalculator", []);

myApp2.controller("myCalcController", function ($scope) {

    var oneDigitNumbers = Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

    var Numbers = Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25);
    
                        //,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                        //51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
                        //76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99);

    //var firstNumbers = Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
    //                    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    //                    51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
    //                    76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99);

    //var secondNumbers = Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
    //                26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    //                51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
    //                76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99);

    $scope.blnShow = true;
    $scope.firstNumber = 0;
    $scope.secondNumber = 0;
    $scope.operation = '+';

    $scope.getFirstNumbers = function () {
        return Numbers[Math.floor(Math.random() * Numbers.length)];
    };
    $scope.getSecondNumbers = function () {
        return oneDigitNumbers[Math.floor(Math.random() * oneDigitNumbers.length)];
    };

    $scope.getDetails = function () {
        var a = $scope.getFirstNumbers();
        var b = $scope.getSecondNumbers();
        var result = a + b;
    };

    $scope.validate = function(num1, num2, result)
    {
        switch ($scope.operation)
        {
            case "+":
                if (num1 + num2 == result)
                    alert("Good");
                else
                    alert("Check");
                break;
            case "-":
                if (num1 - num2 == result)
                    alert("Good");
                else
                    alert("Check");
                break;
            default:
                break;
        }
    };

    var details = [
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers()},
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() }
    ];
    $scope.firstRowNumbers = details;


    var seconddetails = [
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() }
    ];
    $scope.secondRowNumbers = seconddetails;


    var thirddetails = [
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() }
    ];
    $scope.thirdRowNumbers = thirddetails;

    var fourthdetails = [
       { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() }
    ];
    $scope.fourthRowNumbers = fourthdetails;

    var fifthdetails = [
    { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() },
        { firstNo: $scope.getFirstNumbers(), secondNo: $scope.getSecondNumbers() }
    ];
    $scope.fifthRowNumbers = fifthdetails;

    var firstNumbers = {};
    var secondNumbers = {};

    $scope.loadNumbers = function () {
        $scope.display = true;
        //$scope.firstNumber = Numbers[Math.floor(Math.random() * Numbers.length)];
        //$scope.secondNumber = Numbers[Math.floor(Math.random() * Numbers.length)];
        //$scope.operation = document.getElementById("typeOfOperation").value;
        //for (var i = 0; i < $scope.numberOfSums; i++)
        //{
        //    firstNumbers[i.toString()] = Numbers[Math.floor(Math.random() * Numbers.length)];
        //    secondNumbers[i.toString()] = Numbers[Math.floor(Math.random() * Numbers.length)];
        //    alert(firstNumbers[i.toString()]);
        //    alert(secondNumbers[i.toString()]);
        //}
       // $scope.actualNumbers = [firstNumbers, secondNumbers];
    };

    $scope.fncCheck = function () {
        alert(scope.result1);
        alert(scope.result2);
        if ($scope.result1 == $scope.result2)
            $scope.blnResult =  true;
        else
            $scope.blnResult = false;
    };


    $scope.loadControls = function () {
        // document.getElementById("typeOfOperation").selected = 0;
        $scope.display = false;
        $scope.blnResult = false;
        //$scope.result2 = 0;
    };

    
    $scope.validateResult = function (oper) {
        switch (oper) {
            case "+":
                if ($scope.firstNumber + $scope.secondNumber == $scope.result)
                    alert('Correct');
                else
                    alert('Please check');
                break;
            case "-":
                if ($scope.firstNumber - $scope.secondNumber == $scope.result)
                    alert('Correct');
                else
                    alert('Please check');
                break;
            case "*":
                if ($scope.firstNumber * $scope.secondNumber == $scope.result)
                    alert('Correct');
                else
                    alert('Please check');
                break;
            case "/":
                if ($scope.firstNumber / $scope.secondNumber == $scope.result)
                    alert('Correct');
                else
                    alert('Please check');
                break;
            default:
                break;

        }
    };

});

