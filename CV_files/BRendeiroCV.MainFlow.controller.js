define("BRendeiroCV.MainFlow.controller", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "BRendeiroCV.Common.controller", "BRendeiroCV.clientVariables", "BRendeiroCV.MainFlow.controller$debugger", "BRendeiroCV.MainFlow.controller$translationsResources"], function (exports, OutSystems, BRendeiroCVModel, BRendeiroCVController, BRendeiroCV_CommonController, BRendeiroCVClientVariables, BRendeiroCV_MainFlow_Controller_debugger, BRendeiroCV_MainFlow_Controller_translationsResources) {
var OS = OutSystems.Internal;
var BRendeiroCV_MainFlowController = exports;
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
OS.Logger.trace("MainFlow", OS.Exceptions.getMessage(ex), ex.name);
return BRendeiroCV_CommonController.default.handleError(ex, callContext);


};
return Controller;
})(OS.Controller.BaseController);
BRendeiroCV_MainFlowController.default = new Controller(BRendeiroCV_MainFlow_Controller_translationsResources);
});

define("BRendeiroCV.MainFlow.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
});
define("BRendeiroCV.MainFlow.controller$translationsResources", ["exports"], function (exports) {
return {};
});
