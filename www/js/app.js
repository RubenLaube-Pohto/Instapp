/*
 * Main module for Instapp.
 *
 * Combines all required modules together and starts the application.
 */
angular
  .module('instapp', [
    'ionic',
    'ngCordova',
    'instapp.detailController',
    'instapp.loginController',
    'instapp.logoutController',
    'instapp.tasksController',
    'instapp.qrController',
    'instapp.baasBoxService',
    'instapp.errorService'])
  .run(appRun)

appRun.$inject = ['$ionicPlatform']

// Default Ionic run
function appRun ($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}
