angular.module("BoxBlackBox", [ "ngMessages", "ngMaterial"]).config(function ($mdThemingProvider) {
    $mdThemingProvider.theme("default")
        .primaryPalette("blue-grey")
        .warnPalette("deep-orange")
        .accentPalette("red");
});
