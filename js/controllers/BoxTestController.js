(function () {
    angular.module("BoxBlackBox").controller("BoxTestController",["algorithmService", "focus", BoxTestController]);

    function TestCase(number, box1, box2) {
        this.number =number;
        this.box1 = box1;
        this.box2 = box2;
        this.results = [];
        this.expected = true;
        this.resultsInvalid = false;

        this.isValid = function() {
            return box1.isValid() && box2.isValid();
        }

        this.backup = function() {
            box1.backup();
            box2.backup();
        }

        this.revert = function() {
            box1.revert();
            box2.revert();
            this.resultsInvalid = false;
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

        this.backup = function() {
            self.back = {
                x : self.x,
                y : self.y,
                width : self.width,
                height : self.height
            }
        }

        this.revert = function() {
            if(this.back !== undefined){
                self.x = self.back.x;
                self.y = self.back.y;
                self.width = self.back.width;
                self.history = self.back.history;
            }
        }
    }

    function BoxTestController(algorithmService, focus) {
        var vm = this;
        vm.testCases = [];
        vm.algorithms = algorithmService.getAlgorithms();
        vm.scrolling = isOverflowed();
        vm.number = 0;

        vm.runTests = function() {
            vm.testCases.forEach(runTestSuit);
        }

        vm.delete = function(test) {
            vm.testCases.splice(vm.testCases.indexOf(test), 1);
            vm.scrolling = isOverflowed();
        }

        vm.testChanged = function(test){
            if(test.results.length > 0 && !test.resultsInvalid) {
                test.resultsInvalid = true;
            }
        }

        vm.revert = function(test) {
            test.revert();
        }

        vm.plusTest = newTest;
        vm.runTest = runTestSuit;

        function runTestSuit(testCase) {
            testCase.results = [];
            testCase.errors = "";
            testCase.backup();

            if(testCase.isValid()){
                testCase.resultsInvalid = false;
                vm.algorithms.forEach(function(algorithm) {
                    var out = algorithm.run(testCase.box1, testCase.box2);
                    testCase.results.push({
                        "algorithm" : algorithm.name,
                        "algOutCome" : out,
                        "result" : out === testCase.expected

                    });
                })
            } else {
                testCase.errors = "Test case contains invalid values";
            }
        }

        function newTest() {
            var box1 = new Box(0, 0, 1, 1);
            var box2 = new Box(3, 3, 1, 1);
            var test = new TestCase(vm.number, box1, box2);
            vm.number++;
            vm.testCases.push(test);
            vm.scrolling = isOverflowed();
            focus('xcoord0');
        }

        function isOverflowed(){
            var element = document.getElementById("this-can-scroll");
            return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
        }
        newTest();
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
