(function() {
    angular.module("BoxBlackBox").factory("algorithmService", algorithmService);
    function algorithmService() {
        var service = {
            getAlgorithms : getAlgorithms
        };
        var algorithms = [];

        algorithms.push({"name": "a", "run" : a });
        algorithms.push({"name": "b", "run" : b });
        algorithms.push({"name": "d", "run" : d });
        algorithms.push({"name": "e", "run" : e });
        algorithms.push({"name": "f", "run" : f });
        algorithms.push({"name": "g", "run" : g });
        algorithms.push({"name": "h", "run" : h });
        algorithms.push({"name": "i", "run" : i });
        algorithms.push({"name": "j", "run" : j });
        algorithms.push({"name": "k", "run" : k });

        return service;

        ////////////////////////////////////////
        function getAlgorithms() {
            return algorithms;
        }

        function doBothWays(box1, box2, func){
            if(!func(box1, box2)) {
                return func(box2, box1);
            }else {
                return true;
            }
        }

        //fine for everything except the plus sign
        function a(box1, box2) {
            return doBothWays(box1, box2, function(box1, box2) {
                if(((box1.y >= box2.y && box1.x >= box2.x) &&
                    (box1.y < (box2.y + box2.height) && box1.x < (box2.x + box2.width) )) ||
                    ((box1.y >= box2.y && box1.x + box1.width <= box2.x + box2.width) &&
                    (box1.y < (box2.y + box2.height) && box1.x + box1.width > box2.x))) {

                    return true;
                }
                return false;
            });

        }

        //correct answer without reversing
        function b(box2, box1) {
            if(((box1.y >= box2.y && box1.x >= box2.x) &&
                (box1.y < (box2.y + box2.height) && box1.x < (box2.x + box2.width) )) ||
                ((box1.y >= box2.y && box1.x + box1.width <= box2.x + box1.width) &&
                (box1.y < (box2.y + box2.height) && box1.x + box1.width < box2.x)) ||
                ((box1.y < box2.y && box1.x > box2.x ) &&
                ((box1.y + box1.height) > (box2.y + box2.height) &&
                (box1.x + box1.width) < (box2.x + box2.width)))) {

                return true;
            }
            return false;
        }

        //true unless rectangles fail to overlap in both planes (so we get too many ‘true’ answers).
        function d(box1, box2) {
            if((box1.x < (box2.x + box2.width) &&
                (box1.x + box1.width) > box2.x ) ||
                (box1.y < (box2.y + box2.height) &&
                (box1.y + box1.height) > box2.y )){

                return true;
            }
            return false;
        }

        //correct answer but also any touching [edge/vertex] is considered an overlap – incorrect according to spec
        function e(box1, box2) {
            if(box1.x <= (box2.x + box2.width) &&
                (box1.x + box1.width) >= box2.x  &&
                box1.y <= (box2.y + box2.height) &&
                (box1.y + box1.height) >= box2.y ){

                return true;
            }
            return false;
        }

        //correct answer but out by one errors?  Is there an ‘out-by-one’ error available without duplicating ‘e’?
        function f(box1, box2) {
            box2 = {
                "x" : box2.x,
                "y" : box2.y,
                "width" : box1.width -1,
                "height" : box1.height -1,
            }
            if(box1.x < (box2.x + box2.width) &&
                (box1.x + box1.width) > box2.x  &&
                box1.y < (box2.y + box2.height) &&
                (box1.y + box1.height) > box2.y ){

                return true;
            }
            return false;
        }


        //any vertex inside the area of the opposite rectangle is an overlap, and nothing else is
        //only plus sign and identical rectangles fail
        function g(box1, box2) {
            return doBothWays(box1, box2, function(box1, box2) { 
                if((box1.x > box2.x && box1.x < (box2.x + box2.width)) ||
                    (box1.y > box2.y && box1.y < (box2.y + box2.height)) ||
                    ((box1.x + box1.width) > box2.x && (box1.x + box1.width) < (box2.x + box2.width)) ||
                    ((box1.y + box1.height) > box2.y && (box1.y + box1.height)< (box2.y + box2.height))) {
                    return true;
                }
                return false;

            });
        }

        // any vertex of B inside rectangle A
        //plus sign, identical rectangles and B bigger than A fail
        function h(box2, box1) {
            if((box1.x > box2.x && box1.x < (box2.x + box2.width)) ||
                    (box1.y > box2.y && box1.y < (box2.y + box2.height)) ||
                    ((box1.x + box1.width) > box2.x && (box1.x + box1.width) < (box2.x + box2.width)) ||
                    ((box1.y + box1.height) > box2.y && (box1.y + box1.height)< (box2.y + box2.height))) {
                    return true;
                }
                return false;
        }

        //My Way
        function i(box1, box2) {
            if(box1.x < (box2.x + box2.width) &&
                (box1.x + box1.width) > box2.x  &&
                box1.y < (box2.y + box2.height) &&
                (box1.y + box1.height) > box2.y ){

                return true;
            }
            return false;
        }

        //The highway 
        function j(box1, box2) {
            return doBothWays(box1, box2, function(box1, box2) {
                if(((box1.y >= box2.y && box1.x >= box2.x) &&
                    (box1.y < (box2.y + box2.height) && box1.x < (box2.x + box2.width) )) ||
                    ((box1.y >= box2.y && box1.x + box1.width <= box2.x + box2.width) &&
                    (box1.y < (box2.y + box2.height) && box1.x + box1.width > box2.x)) ||
                    ((box1.y < box2.y && box1.x > box2.x ) &&
                    ((box1.y + box1.height) > (box2.y + box2.height) &&
                    (box1.x + box1.width) < (box2.x + box2.width)))) {

                    return true;
                }
                return false;
            })
        }

        //Mixed up x/y width/height
        function k(box1, box2) {
            if(box1.x < (box2.x + box2.height) &&
                (box1.x + box1.height) > box2.x  &&
                box1.y < (box2.y + box2.width) &&
                (box1.y + box1.width) > box2.y ){

                return true;
            }
            return false;
        }

    }
})();
