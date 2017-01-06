/*
   Inferences -->
   1.  this keyword used outside any object is equal to the global default namespace
       variable, which is equal to 'window' in browser enviornment
       and 'global' in nodeJS enviornment.

   2.  this keyword used inside any explicitly declared object is equal to the object itself

   3.  this keyword cannot be directly initialized or assigned or reinitialized or reassigned for that matter.
*/
// "use strict";
console.log("printing this object directly");
console.log(this);

this.fnExplicitAccessToGlobalThisVariable = function() {
    // "use strict";
    console.log("inside fnExplicitAccessToGlobalThisVariable object");
    console.log("printing global this object");
    console.log(this);
    console.log("\n\n\n\n");
};

var fnGlobalScopeCall = function() {
    // "use strict";
    console.log("inside fnGlobalScopeCall object");
    console.log("printing global this object");
    console.log(this);
    console.log("\n\n\n\n");
};

var compareGlobalThisVariableAndNodeJsGlobalVariable = function() {
    // "use strict";
    this === global ? console.log("this is equal to global") : console.log("this is not equal to global");
};

var oEncapsulatedNamespace = {
    fnExecuteThis : function() {
        // "use strict";
        console.log("inside oEncapsulatedNamespace fnExecuteThis object");
        console.log("printing oEncapsulatedNamespace this object");
        console.log(this);
        console.log("\n\n\n\n");
    },

    /*
    *   Inference -->
    *   We cannot assign this variable with a completely new Object in javascript.
    *   So commenting out the below method
    */
    /*
    fnReassignEncapsulatedNamespace : function() {
        this = new Object();
    },
    */

    fnExplicitAccessToEncapsulatedNamespaceThisVariable : function() {
        // "use strict";
        this.fnExplicitAccessToThisVariable = function() {
            // "use strict";
            console.log("inside fnExplicitAccessToEncapsulatedNamespaceThisVariable object");
            console.log("printing oEncapsulatedNamespace this object");
            console.log(this);
            console.log("\n\n\n\n");
        };
        this.fnExplicitAccessToThisVariable();
    },
    fnEncapsulatedScopeCall : function() {
        // "use strict";
        console.log("inside oEncapsulatedNamespace fnEncapsulatedScopeCall object");
        var oOuterScopeVariable = {
            key1 : "value1",
            key2 : "value2",
            key3 : "value3",
            key4 : "value4",
            key5 : "value5",
        };
        var oInnerNamespace = {
            oContainerForOuterScopeVariables : oOuterScopeVariable,
            fnInnerScopeExecuteThis : function() {
                "use strict";
                console.log("inside oEncapsulatedNamespace fnEncapsulatedScopeCall oInnerNamespace fnInnerScopeExecuteThis object");
                console.log("printing oInnerNamespace this object");
                console.log(this);
                console.log("\n\n\n\n");
            },
            fnAccessOuterScopedVariables : function() {
                // "use strict";
                console.log("inside oEncapsulatedNamespace fnEncapsulatedScopeCall oInnerNamespace fnAccessOuterScopedVariables object");
                console.log("accessing outerScopeVariable");
                console.log(oOuterScopeVariable);
                console.log("\n\n\n\n");
            },
            fnAccessOtherThisMembers : function() {
                // "use strict";
                console.log("inside oEncapsulatedNamespace fnEncapsulatedScopeCall oInnerNamespace fnAccessOtherThisMembers object");
                console.log("accessing other member of oInnerNamespace this object");
                console.log(this.containerForOuterScopeVariables);
                console.log("\n\n\n\n");
            }
        };
        oInnerNamespace.fnInnerScopeExecuteThis();
        oInnerNamespace.fnAccessOuterScopedVariables();
        oInnerNamespace.fnAccessOtherThisMembers();
        console.log("Adding new member to oContainerForOuterScopeVariables for oInnerNamespace from outside its scope");
        oInnerNamespace.oContainerForOuterScopeVariables.newKey1 = "newValue1";
        console.log("printing oContainerForOuterScopeVariables");
        console.log(oInnerNamespace.oContainerForOuterScopeVariables);
        console.log("\n\n\n\n");
        console.log("printing oOuterScopeVariable and observing the changes caused by modifying oInnerNamespace.oContainerForOuterScopeVariables object");
        console.log(oOuterScopeVariable);
        console.log("oOuterScopeVariable is also modified");
    }

};

this.fnExplicitAccessToGlobalThisVariable();
fnGlobalScopeCall();
compareGlobalThisVariableAndNodeJsGlobalVariable();
oEncapsulatedNamespace.fnExecuteThis();
oEncapsulatedNamespace.fnExplicitAccessToEncapsulatedNamespaceThisVariable();
oEncapsulatedNamespace.fnEncapsulatedScopeCall();
