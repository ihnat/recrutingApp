'use strict';

angular.module('recruitingAppApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('interview', {
        url: '/interview',
        templateUrl: 'app/main/interview/interview.html',
        controller: 'InterviewCtrl'
      })
      .state('question-list', {
        url: '/question-list',
        templateUrl: 'app/main/question_list/question_list.html',
        controller: 'QuestionListCtrl'
      });
  });
