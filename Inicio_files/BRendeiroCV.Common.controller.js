define("BRendeiroCV.Common.controller", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "BRendeiroCV.clientVariables", "BRendeiroCV.Common.controller$debugger", "BRendeiroCV.Common.controller$translationsResources"], function (exports, OutSystems, BRendeiroCVModel, BRendeiroCVController, BRendeiroCVClientVariables, BRendeiroCV_Common_Controller_debugger, BRendeiroCV_Common_Controller_translationsResources) {
var OS = OutSystems.Internal;
var BRendeiroCV_CommonController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.getDefaultTimeout = function () {
return BRendeiroCVController.default.defaultTimeout;
};
Controller.prototype.handleError = function (ex, callContext) {
var varBag = {};
var controller = this.controller;
var securityExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.securityExceptionVar = securityExceptionVar;
varBag.allExceptionsVar = allExceptionsVar;
varBag.communicationExceptionVar = communicationExceptionVar;
OS.Logger.trace("Common.OnException", OS.Exceptions.getMessage(ex), ex.name);
if(OS.ErrorHandling.ignoreError(ex, callContext)) {
return OS.ErrorHandling.IGNORED_ERROR_RESULT;
}

try {OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:B4kRGvrnOEmQonA8ir4Pyg.#FlowExceptionHandler:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg/FlowExceptionHandler:YpzFFosKl2p7ugdgaUNv0Q", "BRendeiroCV", "OnException", "NRFlows.FlowExceptionHandlingFlow", callContext.id, varBag);
OS.Logger.trace("Common.OnException", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: SecurityException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.SecurityException)) {
securityExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:+tKwHaommkeVIJmjpddaOg", callContext.id);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:hSWnSk8V00aDCWh778OkiQ", callContext.id);
return ;

}

// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:UEw6n9qWe06ZuSWntFQS4w", callContext.id);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:ZW2tO1gq9ke3K4B8INEM6w", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(communicationExceptionVar.value.exceptionMessageAttr, /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:4qeSJUNPsU2eKIm6gj0sdw", callContext.id);
return ;

}

// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:YJDpIiqj+kystnvSyst84Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:hd35JhN3zEmey3w4Y9h7LQ", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(allExceptionsVar.value.exceptionMessageAttr, /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:lR4WVBAPvki5mxBvHbkoEg", callContext.id);
return ;

}

throw ex;
} catch (unhandledEx) {
OS.Logger.trace("Common.OnException", OS.Exceptions.getMessage(ex), ex.name);
if(!(OS.ErrorHandling.ignoreError(unhandledEx, callContext))) {
OS.ErrorHandling.handleError(unhandledEx, callContext);
OutSystemsDebugger.handleException(unhandledEx, callContext.id);
return OS.ErrorHandling.UNHANDLED_ERROR_RESULT;

}

OutSystemsDebugger.handleException(unhandledEx, callContext.id);
return OS.ErrorHandling.IGNORED_ERROR_RESULT;

} finally {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:B4kRGvrnOEmQonA8ir4Pyg.#FlowExceptionHandler", callContext.id);
}



};
return Controller;
})(OS.Controller.BaseController);
BRendeiroCV_CommonController.default = new Controller(BRendeiroCV_Common_Controller_translationsResources);
});

define("BRendeiroCV.Common.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"+tKwHaommkeVIJmjpddaOg": {
getter: function (varBag, idService) {
return varBag.securityExceptionVar.value;
}
},
"YJDpIiqj+kystnvSyst84Q": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"UEw6n9qWe06ZuSWntFQS4w": {
getter: function (varBag, idService) {
return varBag.communicationExceptionVar.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("BRendeiroCV.Common.controller$translationsResources", ["exports"], function (exports) {
return {};
});
