angular.module("BoxBlackBox", [ "ngMessages", "ngMaterial",  "ui.sortable"]).config(['$mdThemingProvider',function ($mdThemingProvider) {
    $mdThemingProvider.theme("default")
        .primaryPalette("blue-grey")
        .warnPalette("red")
        .accentPalette("deep-orange");
}]);
