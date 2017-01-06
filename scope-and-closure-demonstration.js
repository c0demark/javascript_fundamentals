(function() {
    console.log("outer iife function call");
    var oOuterScopeVariable = {
        key1 : "value1",
        key2 : "value2",
        key3 : "value3",
        key4 : "value4",
        key5 : "value5",
    };

    var fnAccessOuterScopedVariables = function() {
            console.log("inside fnAccessOuterScopedVariables object");
            console.log("accessing outerScopeVariable");
            console.log(oOuterScopeVariable);
            console.log("\n\n\n\n");
    };

    var fnCallInnerIife = function() {
        (function() {
            console.log("inner iife function call");
            console.log("\n\n\n\n");
        })();
    };

    var fnCallInnerIifeWithCallback = function() {
        (function(callback) {
            callback();
            console.log("logging callback function definition");
            console.log(callback);
            console.log("\n\n\n\n");
        })(function() {
            console.log("inside callback function");
            console.log("\n\n\n\n");
        });
    };

    var fnCallInnerIifeWithOutsideVariableAccessFromClosure = function() {
        var oLocalVariableOutsideClosure = {
            localKey1 : "localvalue1",
            localKey2 : "localValue2"
        };
        (function() {
            console.log(oLocalVariableOutsideClosure);
        })();
    };

    var fnCallInnerIifeWithClosureReturningFunction = function() {
        return (function() {
            return function() {
                console.log("returned function");
            };
        })();
    };

    var fnCallInnerIifeWithPrivateVariablesInsideClosure = function() {
        (function() {
            // simulates the DOM element
            var element = {
                event : "click",
                eventHandler : null,
                addEventListener : function(event, eventHandler) {
                    var functionObject = arguments[1];
                    // functionObject("a", "b");
                    // functionObject.arguments["0"] = "MouseEvent";
                    console.log(functionObject);
                    if (this.event === event) {
                        this.eventHandler = eventHandler;
                        console.log("eventHandler added");
                    }
                }
            };
            // simulates adding adding event listener on DOM element
            element.addEventListener("click", function() {
                console.log(arguments);
                console.log("eventHandler function called");
            });
            // simulates "click" event on DOM element
            setTimeout(element.eventHandler, 2000);
        })();
    };

    fnAccessOuterScopedVariables();
    fnCallInnerIife();
    fnCallInnerIifeWithCallback();
    fnCallInnerIifeWithOutsideVariableAccessFromClosure();
    var returnedFunctionHolder = fnCallInnerIifeWithClosureReturningFunction();
    returnedFunctionHolder();
    fnCallInnerIifeWithPrivateVariablesInsideClosure();
})();
