(function(){
app = angular.module('mynotes', ['ionic']);

app.controller('ListCtrl', function($scope){
  $scope.notes = [
    {
      title: "第一个笔记",
      description: "这是我的第一个笔记"
    },
    {
      title: "第二个笔记",
      description: "这是我的第二个笔记"
    }
  ];
});

app.config(function($stateProvider, $urlRouterProvider) {
  //配置路由
  $stateProvider.state('list',{
    url: '/list',
    templateUrl: 'templates/list.html'
  });

  $stateProvider.state('edit',{
    url: '/edit',
    templateUrl: 'templates/edit.html'
  });

  $urlRouterProvider.otherwise('/list');
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

}());
