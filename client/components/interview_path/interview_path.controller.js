'use strict';

angular.module('recruitingAppApp')
  .controller('InterviewPathCtrl', function ($scope, Auth) {
    $scope.menu = [{
      'title': 'Создание интервью',
      'state': 'interview'
    },
    {
      'title': 'Список вопросов',
      'state': 'interview'
    }
  ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
  });
