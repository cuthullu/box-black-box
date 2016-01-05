angular.module("BoxBlackBox", [ "ngMessages", "ngMaterial",  "ui.sortable"]).config(['$mdThemingProvider',function ($mdThemingProvider) {
    $mdThemingProvider.definePalette('scottLogicCharcoal', {
	    '50': 'ffebee',
	    '100': 'ffcdd2',
	    '200': 'ef9a9a',
	    '300': 'e57373',
	    '400': 'ef5350',
	    '500': '231f20',
	    '600': 'e53935',
	    '700': 'd32f2f',
	    '800': 'c62828',
	    '900': 'b71c1c',
	    'A100': 'ff8a80',
	    'A200': 'ff5252',
	    'A400': 'ff1744',
	    'A700': 'd50000',
	    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
	                                        // on this palette should be dark or light
	    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
	     '200', '300', '400', 'A100'],
	    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  	});
    $mdThemingProvider.definePalette('scottLogicTurquoise', {
	    '50': '2bb3bb',
	    '100': '2bb3bb',
	    '200': '2bb3bb',
	    '300': '2bb3bb',
	    '400': '2bb3bb',
	    '500': '2bb3bb',
	    '600': '2bb3bb',
	    '700': '2bb3bb',
	    '800': '2bb3bb',
	    '900': '2bb3bb',
	    'A100': '2bb3bb',
	    'A200': '2bb3bb',
	    'A400': '2bb3bb',
	    'A700': '2bb3bb',
	    'contrastDefaultColor': 'dark',    // whether, by default, text (contrast)
	                                        // on this palette should be dark or light
	    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
	     '200', '300', '400', 'A100'],
	    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  	});

  	$mdThemingProvider.definePalette('scottLogicPink', {
	    '50': '2bb3bb',
	    '100': '2bb3bb',
	    '200': '2bb3bb',
	    '300': '2bb3bb',
	    '400': '2bb3bb',
	    '500': '2bb3bb',
	    '600': '2bb3bb',
	    '700': '2bb3bb',
	    '800': '2bb3bb',
	    '900': '2bb3bb',
	    'A100': '2bb3bb',
	    'A200': '2bb3bb',
	    'A400': '2bb3bb',
	    'A700': '2bb3bb',
	    'contrastDefaultColor': 'dark',    // whether, by default, text (contrast)
	                                        // on this palette should be dark or light
	    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
	     '200', '300', '400', 'A100'],
	    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  	});

    $mdThemingProvider.theme("default")
        .primaryPalette("scottLogicCharcoal")
        .warnPalette("red")
        .accentPalette("scottLogicTurquoise");
}]);
