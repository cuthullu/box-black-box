angular.module("BoxBlackBox", [ "ngMessages", "ngMaterial"]).config(function ($mdThemingProvider) {
    $mdThemingProvider.theme("default")
        .primaryPalette("green")
        .warnPalette("red")
        .accentPalette("blue");
});
