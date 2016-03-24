﻿angular.module('app', [])
.controller('PasswordController', function PasswordController($scope) {
        $scope.password = "hello";
        $scope.grade = function () {
            "use strict";
        var size = $scope.password.length;
        if (size > 8) {
            $scope.strength = 'strong';
        } else if (size > 3) {
            $scope.strength = 'medium';
        } else {
            $scope.strength = 'weak';
        }
    };
});