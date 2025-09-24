define("BRendeiroCV.Common.ApplicationTitle.mvc$model", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model"], function (OutSystems, BRendeiroCVModel) {
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
return new OS.Model.ModelFactory(Model, "Common.ApplicationTitle");
});
define("BRendeiroCV.Common.ApplicationTitle.mvc$view", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "react", "OutSystems/ReactView/Main", "BRendeiroCV.Common.ApplicationTitle.mvc$model", "BRendeiroCV.Common.ApplicationTitle.mvc$controller", "BRendeiroCV.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, React, OSView, BRendeiroCV_Common_ApplicationTitle_mvc_model, BRendeiroCV_Common_ApplicationTitle_mvc_controller, BRendeiroCVClientVariables, OSWidgets) {
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
        View.displayName = "Common.ApplicationTitle";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BRendeiroCV_Common_ApplicationTitle_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BRendeiroCV_Common_ApplicationTitle_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "";
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
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/ApplicationTitle/ApplicationTitleWrapper onclick");
controller.onClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onKeyPress: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/ApplicationTitle/ApplicationTitleWrapper onkeypress");
controller.onClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
role: "button",
tabIndex: "0"
},
style: "application-name display-flex align-items-center full-height",
visible: true,
_idProps: {
service: idService,
name: "ApplicationTitleWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
alt: "",
style: "height: 32px;"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/BRendeiroCV.Logo.png"),
style: "app-logo",
type: /*Static*/ 0,
_idProps: {
service: idService,
name: "AppLogo"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("aZ+ALintY06glfRG8XzhyQ.Value"), function () {
return OS.BuiltinFunctions.getEntryEspaceName();
}),
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BRendeiroCV.Common.ApplicationTitle.mvc$controller", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "BRendeiroCV.languageResources", "BRendeiroCV.clientVariables", "BRendeiroCV.Common.ApplicationTitle.mvc$translationsResources", "BRendeiroCV.Common.ApplicationTitle.mvc$debugger"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, BRendeiroCVLanguageResources, BRendeiroCVClientVariables, BRendeiroCV_Common_ApplicationTitle_mvc_TranslationsResources, BRendeiroCV_Common_ApplicationTitle_mvc_Debugger) {
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
Controller.prototype.translationResources = BRendeiroCV_Common_ApplicationTitle_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:NQLuzvOn9UGJ0_EBbmQbNw:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg/NodesShownInESpaceTree.IRImmTFW6k23AYApKoopvw/ClientActions.NQLuzvOn9UGJ0_EBbmQbNw:cx5B1_FJWd7ljQ43vL5UNg", "BRendeiroCV", "OnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:lnNrBAimukKl4xdCUYoawg", callContext.id);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:ehZYFkxGnUGVpCDCMXSn2A", callContext.id);
// Destination: /BRendeiroCV/
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(OS.BuiltinFunctions.getOwnerURLPath(), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:NQLuzvOn9UGJ0_EBbmQbNw", callContext.id);
}

};

Controller.prototype.onClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:B4kRGvrnOEmQonA8ir4Pyg:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg:tqNLB+Jupzy+4vlkl_Ke+g", "BRendeiroCV", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:IRImmTFW6k23AYApKoopvw:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg/NodesShownInESpaceTree.IRImmTFW6k23AYApKoopvw:NSzOztOzpbgo0ExFUsR3qA", "BRendeiroCV", "ApplicationTitle", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:IRImmTFW6k23AYApKoopvw", callContext.id);
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:B4kRGvrnOEmQonA8ir4Pyg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
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

define("BRendeiroCV.Common.ApplicationTitle.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"lXCQeuVwl0eK7ob1AA+PlQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ApplicationTitleWrapper"));
})(varBag.model, idService);
}
},
"cnYxXCG53USuz0h2Mm_ciw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("AppLogo"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("BRendeiroCV.Common.ApplicationTitle.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
