angular.module("BoxBlackBox", [ "ngMessages", "ngMaterial",  "ui.sortable"]).config(function ($mdThemingProvider) {
    $mdThemingProvider.theme("default")
        .primaryPalette("green")
        .warnPalette("red")
        .accentPalette("blue");
});
