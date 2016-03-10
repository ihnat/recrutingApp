'use strict';

angular.module('recruitingAppApp')
  .directive('interviewpath', function () {
    return {
      templateUrl: 'components/interview_path/interview_path.html',
      restrict: 'E',
      controller: 'InterviewPathCtrl'
    };
  });
