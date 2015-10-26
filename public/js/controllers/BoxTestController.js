(function () {
    angular.module("BoxBlackBox").controller("BoxTestController",["algorithmService", BoxTestController]);

    function TestCase(box1, box2) {
        this.box1 = box1;
        this.box2 = box2;
        this.results = [];
        this.expected = true;
    }

    function Box(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    function BoxTestController(algorithmService) {
        var vm = this;
        vm.testCases = [];
        vm.algorithms = algorithmService.getAlgorithms();

        vm.runTests = function() {
            vm.testCases.forEach(runTestSuit);
        }

        vm.plusTest = newTest;
        function runTestSuit(testCase) {
            testCase.results = [];
            vm.algorithms.forEach(function(algorithm) {
                testCase.results.push({
                    "algorithm" : algorithm.name,
                    "outCome" : algorithm.run(testCase.box1, testCase.box2)
                });
            })
        }

        function newTest() {
            var box1 = new Box(0, 0, 0, 0);
            var box2 = new Box(0, 0, 0, 0);
            var test = new TestCase(box1, box2);
            vm.testCases.push(test);
        }

        var box1 = new Box(0,0,4,4)
        var box2 = new Box(1,1,4,4)
        vm.testCases.push(new TestCase(box1,box2))

        box2 = new Box(0,0,4,4)
        box1 = new Box(1,1,4,4)
        vm.testCases.push(new TestCase(box1,box2))

        box1 = new Box(2,0,2,4)
        box2 = new Box(1,1,4,2)
        vm.testCases.push(new TestCase(box1,box2))

        box2 = new Box(2,0,2,4)
        box1 = new Box(1,1,4,2)
        vm.testCases.push(new TestCase(box1,box2))

        box1 = new Box(0,0,2,2)
        box2 = new Box(1,3,2,2)
        var testCase = new TestCase(box1,box2);
        testCase.expected = false;
        vm.testCases.push(testCase);

        box1 = new Box(0,0,2,2)
        box2 = new Box(3,1,2,2)
        var testCase = new TestCase(box1,box2);
        testCase.expected = false;
        vm.testCases.push(testCase);

        box1 = new Box(0,0,2,2)
        box2 = new Box(2,2,2,2)
        var testCase = new TestCase(box1,box2);
        testCase.expected = false;
        vm.testCases.push(testCase);

    }

})();
