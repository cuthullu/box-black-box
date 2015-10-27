(function () {
    angular.module("BoxBlackBox").controller("BoxTestController",["algorithmService", BoxTestController]);

    function TestCase(box1, box2) {
        this.box1 = box1;
        this.box2 = box2;
        this.results = [];
        this.expected = true;

        this.isValid = function() {
            return box1.isValid() && box2.isValid();
        }
    }

    function Box(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        var self = this;
        
        this.isValid = function() {
            return isInt(self.x) && 
                isInt(self.y) &&
                isInt(self.width) &&
                isInt(self.height);
        }

        function isInt(i) {
            return i === parseInt(i, 10);
        }
    }

    function BoxTestController(algorithmService) {
        var vm = this;
        vm.testCases = [];
        vm.algorithms = algorithmService.getAlgorithms();
        vm.scrolling = isOverflowed();

        vm.runTests = function() {
            vm.testCases.forEach(runTestSuit);
        }

        vm.delete = function(test) {
            vm.testCases.splice(vm.testCases.indexOf(test), 1);
            vm.scrolling = isOverflowed();
        }

        vm.plusTest = newTest;

        function runTestSuit(testCase) {
            testCase.results = [];
            testCase.errors = "";

            if(testCase.isValid()){
                vm.algorithms.forEach(function(algorithm) {
                    testCase.results.push({
                        "algorithm" : algorithm.name,
                        "outCome" : algorithm.run(testCase.box1, testCase.box2)
                    });
                })
            } else {
                testCase.errors = "Test case contains invalid values";
            }
        }

        function newTest() {
            var box1 = new Box(0, 0, 1, 1);
            var box2 = new Box(3, 3, 1, 1);
            var test = new TestCase(box1, box2);
            vm.testCases.push(test);
            vm.scrolling = isOverflowed();
        }

        function isOverflowed(){
            var element = document.getElementById("this-can-scroll");
            return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
        }
        newTest();

        // var box1 = new Box(0,0,4,4)
        // var box2 = new Box(1,1,4,4)
        // vm.testCases.push(new TestCase(box1,box2))

        // box2 = new Box(0,0,4,4)
        // box1 = new Box(1,1,4,4)
        // vm.testCases.push(new TestCase(box1,box2))

        // box1 = new Box(2,0,2,4)
        // box2 = new Box(1,1,4,2)
        // vm.testCases.push(new TestCase(box1,box2))

        // box2 = new Box(2,0,2,4)
        // box1 = new Box(1,1,4,2)
        // vm.testCases.push(new TestCase(box1,box2))

        // box1 = new Box(0,0,2,2)
        // box2 = new Box(1,3,2,2)
        // var testCase = new TestCase(box1,box2);
        // testCase.expected = false;
        // vm.testCases.push(testCase);

        // box2 = new Box(0,0,2,2)
        // box1 = new Box(3,1,2,2)
        // var testCase = new TestCase(box1,box2);
        // testCase.expected = false;
        // vm.testCases.push(testCase);

        // box1 = new Box(0,0,2,2)
        // box2 = new Box(2,2,2,2)
        // var testCase = new TestCase(box1,box2);
        // testCase.expected = false;
        // vm.testCases.push(testCase);

        // box1 = new Box(2,2,2,2)
        // box2 = new Box(2,2,2,2)
        // var testCase = new TestCase(box1,box2);
        // vm.testCases.push(testCase);

        // box1 = new Box(2,2,2,2)
        // box2 = new Box(1,1,3,3)
        // var testCase = new TestCase(box1,box2);
        // vm.testCases.push(testCase);

        // box1 = new Box(0,0,2,2)
        // box2 = new Box(0,2,2,2)
        // var testCase = new TestCase(box1,box2);
        // vm.testCases.push(testCase);

        // box1 = new Box(2,0,3,1)
        // box2 = new Box(0,0,1,2)
        // var testCase = new TestCase(box1,box2);
        // testCase.expected = false;
        // vm.testCases.push(testCase);
    }

})();
