define("BRendeiroCV.controller$OnApplicationReady", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "BRendeiroCV.controller$OnApplicationReady.JavaScript1JS", "BRendeiroCV.clientVariables", "BRendeiroCV.controller$ServerAction.GenerateGuid2"], function (exports, OutSystems, BRendeiroCVModel, BRendeiroCVController, BRendeiroCV_controller_OnApplicationReady_JavaScript1JS, BRendeiroCVClientVariables) {
var OS = OutSystems.Internal;
BRendeiroCVController.default.onApplicationReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
callContext = controller.callContext(callContext);
var generateGuid2Var = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.generateGuid2Var = generateGuid2Var;
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:g9ft1tpO+kSkuYaBgMIb5w.#OnApplicationReady:/SystemClientActions.#OnApplicationReady:La5e8OfhYAvfokaBqmfJ7w", "BRendeiroCV", "OnApplicationReady", "SystemClientActions.OnApplicationReady", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:p_diOz1SwEOH9jyzIOP9cA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:kYB7gpNlMUK3HnRn81NfTA", callContext.id);
controller.safeExecuteJSNode(BRendeiroCV_controller_OnApplicationReady_JavaScript1JS, "JavaScript1", "On Application Ready", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:__m8rKOnc0uoHnGQXIgvCg", callContext.id);
// Execute Action: SetCurrentLocale
OS.SystemActions.setCurrentLocale("pt-PT", callContext);
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:rpNNA0Q5N0GNTrwc0MTYgw", callContext.id) && (BRendeiroCVClientVariables.getClientGuid() === ""))) {
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:zsUcCe3bT0GDYD+7x+SjzQ", callContext.id);
// Execute Action: GenerateGuid2
return controller.generateGuid2$ServerAction(callContext).then(function (value) {
generateGuid2Var.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:cUBHietYI0KWfpZnSVa8qg", callContext.id);
// ClientGuid = GenerateGuid2.Guid
BRendeiroCVClientVariables.setClientGuid(generateGuid2Var.value.guidOut);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:PPT7u_i8rkid7xVCAKjolg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:PPT7u_i8rkid7xVCAKjolg", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:g9ft1tpO+kSkuYaBgMIb5w.#OnApplicationReady", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:g9ft1tpO+kSkuYaBgMIb5w.#OnApplicationReady", callContext.id);
throw ex;

});
};
var controller = BRendeiroCVController.default;
BRendeiroCVController.default.clientActionProxies.onApplicationReady$Action = function () {
return controller.executeActionInsideJSNode(BRendeiroCVController.default.onApplicationReady$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("BRendeiroCV.controller$OnApplicationReady.JavaScript1JS", [], function () {
return function ($actions, $roles, $public) {
 const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;800&family=Space+Grotesk:wght@300;400;600&display=swap";
    document.head.appendChild(link);
};
});

define("BRendeiroCV.controller$ServerAction.GenerateGuid2", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller"], function (exports, OutSystems, BRendeiroCVModel, BRendeiroCVController) {
var OS = OutSystems.Internal;
BRendeiroCVController.default.generateGuid2$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("GenerateGuid2", "screenservices/BRendeiroCV/ActionGenerateGuid2", "FpDv20KMLHJ0lKMDkiY7JQ", {}, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, true).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("BRendeiroCV$ActionGenerateGuid2"))();
executeServerActionResult.guidOut = OS.DataConversion.ServerDataConverter.from(outputs.Guid, OS.DataTypes.DataTypes.Text);
return executeServerActionResult;
});
};
BRendeiroCVController.default.constructor.registerVariableGroupType("BRendeiroCV$ActionGenerateGuid2", [{
name: "Guid",
attrName: "guidOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
});
define("BRendeiroCV.controller", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller$debugger", "BRendeiroCV.controller$translationsResources"], function (exports, OutSystems, BRendeiroCVModel, BRendeiroCV_Controller_debugger, BRendeiroCV_Controller_translationsResources) {
var OS = OutSystems.Internal;
var BRendeiroCVController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
this.registerOnApplicationReadyHandler("BRendeiroCV.controller$OnApplicationReady", "onApplicationReady$Action");
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return BRendeiroCVController.default.defaultTimeout;
};
Controller.prototype.getClientActionProxies = function (controller) {
var _this = this;
var thisController = controller;
return Object.keys(this.clientActionProxies).reduce(function (acc, actionName) {
acc[actionName] = function () {
if(thisController.isActive()) {
return _this.clientActionProxies[actionName].apply(thisController, arguments);
}

return Promise.resolve();
};
return acc;
}, {});
};
return Controller;
})(OS.Controller.BaseModuleController);
BRendeiroCVController.default = new Controller(BRendeiroCV_Controller_translationsResources, "BRendeiroCV");
});
define("BRendeiroCV.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main", "BRendeiroCV.clientVariables"], function (exports, Debugger, OutSystems, BRendeiroCVClientVariables) {
var OS = OutSystems.Internal;
var metaInfo = {
"zsUcCe3bT0GDYD+7x+SjzQ": {
getter: function (varBag, idService) {
return varBag.generateGuid2Var.value;
}
},
"kYB7gpNlMUK3HnRn81NfTA": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"83DXL68pg02pCXmgg_f4gQ": {
getter: function (varBag, idService) {
return BRendeiroCVClientVariables.getLanguageId();
},
dataType: OS.DataTypes.DataTypes.Text
},
"jP_B3CfGGEKCUrZl1ejswA": {
getter: function (varBag, idService) {
return BRendeiroCVClientVariables.getClientGuid();
},
dataType: OS.DataTypes.DataTypes.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("BRendeiroCV.controller$translationsResources", ["exports"], function (exports) {
return {};
});
