(function() {
	'use strict';
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.placeHolder = 'Enter your lunch please';
		$scope.message = '';
		$scope.lunch = '';

		$scope.checkLunch = function () {
			if (!$scope.lunch){
				$scope.message = 'Please enter data first';
				return;
			}
			var lunchItems = $scope.lunch.split(',');
			var parsedItems = lunchItems.filter(function (w) {return w;});
			if (parsedItems.length <= 3)
				$scope.message = 'Enjoy!';
			else
				$scope.message = 'Too Much!';
		};
	}
})();
