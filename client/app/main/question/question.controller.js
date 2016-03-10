'use strict';

angular.module('recruitingAppApp')
  .controller('QuestionListCtrl', function($scope, $http, socket) {

    var questionList = [
      // junior
      { name: "Типы дынных в javascript", level: "Junior" },
      { name: "Таймауты и асинхронный код", level: "Junior" },
      { name: "Замыкания и область видимости", level: "Junior" },
      { name: "Простые обработчики событий", level: "Junior" },
      { name: "Отмена событий", level: "Junior" },
      { name: "Некоторые встроенные методы массивов", level: "Junior" },
      { name: "Семантика", level: "Junior" },
      { name: "CSS3(рисование фигур, новые св-ва)", level: "Junior"},
      { name: "Верстка типичных шаблонов(трехколоночный, две колонки фикс., средняя тянется на оставшуюся ширину)", level: "Junior"},
      { name: "DOCTYPE", level: "Junior"},
      { name: "Работа с CSS спрайтами", level: "Junior"},
      { name: "HTML5 теги", level: "Junior" },

      // middle
      { name: "Prototype", level: "Middle" },
      { name: "Функции-конструкторы", level: "Middle" },
      { name: "this", level: "Middle" },
      { name: "Наследование", level: "Middle" },
      { name: "Делегирование событий", level: "Middle" },
      { name: "Методы Object.xxx (keys, defineProperty и т.д.)", level: "Middle" },
      { name: "Оптимизация кода (documentFragment, requestAnimationFrame и т.д.)", level: "Middle" },
      { name: "Строгий режим", level: "Middle" },
      { name: "Приведение типов и отличие == от ===", level: "Middle" },
      { name: "HTML5 API(canvas, localStorage…)", level: "Middle" },
      { name: "CSS3 animation", level: "Middle" },
      { name: "AJAX", level: "Middle" },
      { name: "Unit tests и тестовые фреймворки ", level: "Middle" },
      { name: "CSS препроцессоры(LESS, SASS)", level: "Middle" },
      { name: "Инструменты для валидации кода(JSLint, JSHint)", level: "Middle" },
      { name: "Работа с простыми регулярными выражениями", level: "Middle" },

      // senior
      { name: "Паттерны", level: "Senior" },
      { name: "Фреймворки", level: "Senior" },
      { name: "Сборщики и генераторы (Grunt, Yeoman и т.п.)", level: "Senior" },
      { name: "Профилирование", level: "Senior" },
      { name: "Поиск утечек памяти", level: "Senior" },
      { name: "Написание сложных регулярных выражений", level: "Senior" }
    ];

    var person = {
      name: "Ян Малинович",
      level: "Junior",
      date:  new Date()
    }

    var personalQuestionList = (function(level) {
      var result = [];
      questionList.forEach(function(item, num) {
        if (item.level === level) {
          result;
        }
      })
    })(person.level);




    // $scope.awesomeThings = [];
    //
    // $http.get('/api/questions').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    //   socket.syncUpdates('thing', $scope.awesomeThings);
    // });
    //
    // $scope.addQuestion = function() {
    //   if ($scope.newQuestion === '') {
    //     return;
    //   }
    //   $http.post('/api/questions', { name: $scope.newQuestion });
    //   $scope.newThing = '';
    // };
    //
    // $scope.deleteQuestion = function(question) {
    //   $http.delete('/api/questions/' + question._id);
    // };
    //
    // $scope.$on('$destroy', function() {
    //   socket.unsyncUpdates('question');
    // });



  });
