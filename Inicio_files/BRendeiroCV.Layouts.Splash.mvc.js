define("BRendeiroCV.Layouts.Splash.mvc$model", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model"], function (OutSystems, BRendeiroCVModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.init();
return VariablesRecord;
})(OS.DataTypes.GenericRecord);
var WidgetsRecord = (function (_super) {
__extends(WidgetsRecord, _super);
function WidgetsRecord() {
_super.apply(this, arguments);
}
WidgetsRecord.getWidgetsType = function () {
return {};
};

return WidgetsRecord;
})(OS.Model.BaseWidgetRecordMap);
var Model = (function (_super) {
__extends(Model, _super);
function Model() {
_super.apply(this, arguments);
}
Model.getVariablesRecordConstructor = function () {
return VariablesRecord;
};
Model.getWidgetsRecordConstructor = function () {
return WidgetsRecord;
};
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return false;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.VariablelessViewModel);
return new OS.Model.ModelFactory(Model, "Layouts.Splash");
});
define("BRendeiroCV.Layouts.Splash.mvc$view", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "react", "OutSystems/ReactView/Main", "BRendeiroCV.Layouts.Splash.mvc$model", "BRendeiroCV.Layouts.Splash.mvc$controller", "BRendeiroCV.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, React, OSView, BRendeiroCV_Layouts_Splash_mvc_model, BRendeiroCV_Layouts_Splash_mvc_controller, BRendeiroCVClientVariables, OSWidgets) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;


    var View = (function (_super) {
        __extends(View,_super);
        function View() {
            var thisIsInstanceOfSuper = this instanceof _super;
            if (thisIsInstanceOfSuper == false) {
                return;
            }

            try {
                this.initialize.apply(this, arguments);
            } catch (error) {
                View.handleError(error);
                throw error;
            }
        }
        View.prototype.initialize = function() {
            _super.apply(this, arguments);
        };
        View.displayName = "Layouts.Splash";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/BRendeiroCV.BRendeiroCV.css", "css/BRendeiroCV.BRendeiroCV.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BRendeiroCV_Layouts_Splash_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BRendeiroCV_Layouts_Splash_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return OSView.BaseView.BaseWebScreen.getTranslation("9UOm82C9gkGwwPJkFlnYgA#Title", "Splash");
            },
            enumerable: true,
            configurable: true
        });
        View.prototype.internalRender = function() {
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var widgetsRecordProvider = this.widgetsRecordProvider;
            var callContext = controller.callContext();
            var $if = View.ifWidget;
            var $text = View.textWidget;
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "align-items: center; display: flex; height: 100vh; justify-content: center; text-align: center;"
},
style: "iconImage",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "spinner",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "color: #fff; font-size: 100px;"
},
icon: "spinner",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})))));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("BRendeiroCV.Layouts.Splash.mvc$controller", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "BRendeiroCV.languageResources", "BRendeiroCV.clientVariables", "BRendeiroCV.Layouts.Splash.mvc$translationsResources", "BRendeiroCV.Layouts.Splash.mvc$debugger", "BRendeiroCV.Layouts.controller", "BRendeiroCV.Layouts.Splash.mvc$controller.OnReady.JavaScript1JS"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, BRendeiroCVLanguageResources, BRendeiroCVClientVariables, BRendeiroCV_Layouts_Splash_mvc_TranslationsResources, BRendeiroCV_Layouts_Splash_mvc_Debugger, BRendeiroCV_LayoutsController, BRendeiroCV_Layouts_Splash_mvc_controller_OnReady_JavaScript1JS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
Controller.prototype.translationResources = BRendeiroCV_Layouts_Splash_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:19ZuUqj97E6nAJHfFeMdhg:/NRWebFlows.h5vDTMuLX06AWEdKRweFvA/NodesShownInESpaceTree.9UOm82C9gkGwwPJkFlnYgA/ClientActions.19ZuUqj97E6nAJHfFeMdhg:DcoGyX7PNFxn+Fa4qHQj5g", "BRendeiroCV", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:FRENy4VAEUeQ2PbVGIJUxQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:xN38L5bjhU6qgruTtbVCSA", callContext.id);
controller.safeExecuteJSNode(BRendeiroCV_Layouts_Splash_mvc_controller_OnReady_JavaScript1JS, "JavaScript1", "OnReady", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:bmnZiwyk5Uq_58s2rzkCUA", callContext.id);
// Destination: /BRendeiroCV/Home
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("BRendeiroCV", "Home", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:19ZuUqj97E6nAJHfFeMdhg", callContext.id);
}

};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:h5vDTMuLX06AWEdKRweFvA:/NRWebFlows.h5vDTMuLX06AWEdKRweFvA:n8NpQVBj04xvdDZloAzc6g", "BRendeiroCV", "Layouts", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:9UOm82C9gkGwwPJkFlnYgA:/NRWebFlows.h5vDTMuLX06AWEdKRweFvA/NodesShownInESpaceTree.9UOm82C9gkGwwPJkFlnYgA:xGsB6jXSeGAHgmRY0K2w2g", "BRendeiroCV", "Splash", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:9UOm82C9gkGwwPJkFlnYgA", callContext.id);
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:h5vDTMuLX06AWEdKRweFvA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/Splash On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return BRendeiroCV_LayoutsController.default.handleError(ex, this.callContext());
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return BRendeiroCVController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, BRendeiroCVLanguageResources);
});
define("BRendeiroCV.Layouts.Splash.mvc$controller.OnReady.JavaScript1JS", [], function () {
return function ($actions, $roles, $public) {
setTimeout(function() {
  
}, 9000);
};
});

define("BRendeiroCV.Layouts.Splash.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"xN38L5bjhU6qgruTtbVCSA": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("BRendeiroCV.Layouts.Splash.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
