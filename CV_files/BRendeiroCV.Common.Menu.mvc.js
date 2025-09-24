define("BRendeiroCV.Common.Menu.mvc$model", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "OutSystemsUI.model", "OutSystemsUI.controller", "BRendeiroCV.Common.ApplicationTitle.mvc$model", "BRendeiroCV.Common.Local.mvc$model", "OutSystemsUI.model$ErrorMessageRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetActiveMenuItems", "OutSystemsUI.controller$SetMenuListeners", "OutSystemsUI.controller$MenuReady", "OutSystemsUI.controller$MenuDestroy"], function (OutSystems, BRendeiroCVModel, OutSystemsUIModel, OutSystemsUIController, BRendeiroCV_Common_ApplicationTitle_mvcModel, BRendeiroCV_Common_Local_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ActiveItem", "activeItemIn", "ActiveItem", true, false, OS.DataTypes.DataTypes.Integer, function () {
return -1;
}, false), 
this.attr("_activeItemInDataFetchStatus", "_activeItemInDataFetchStatus", "_activeItemInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ActiveSubItem", "activeSubItemIn", "ActiveSubItem", true, false, OS.DataTypes.DataTypes.Integer, function () {
return -1;
}, false), 
this.attr("_activeSubItemInDataFetchStatus", "_activeSubItemInDataFetchStatus", "_activeSubItemInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false)
].concat(_super.attributesToDeclare.call(this));
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
Model._hasValidationWidgetsValue = undefined;
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = (BRendeiroCV_Common_ApplicationTitle_mvcModel.hasValidationWidgets || BRendeiroCV_Common_Local_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("ActiveItem" in inputs) {
this.variables.activeItemIn = inputs.ActiveItem;
if("_activeItemInDataFetchStatus" in inputs) {
this.variables._activeItemInDataFetchStatus = inputs._activeItemInDataFetchStatus;
}

}

if("ActiveSubItem" in inputs) {
this.variables.activeSubItemIn = inputs.ActiveSubItem;
if("_activeSubItemInDataFetchStatus" in inputs) {
this.variables._activeSubItemInDataFetchStatus = inputs._activeSubItemInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Common.Menu");
});
define("BRendeiroCV.Common.Menu.mvc$view", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "BRendeiroCV.Common.Menu.mvc$model", "BRendeiroCV.Common.Menu.mvc$controller", "BRendeiroCV.clientVariables", "OutSystems/ReactWidgets/Main", "BRendeiroCV.Common.ApplicationTitle.mvc$view", "BRendeiroCV.Common.Local.mvc$view", "OutSystemsUI.model$ErrorMessageRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetActiveMenuItems", "OutSystemsUI.controller$SetMenuListeners", "OutSystemsUI.controller$MenuReady", "OutSystemsUI.controller$MenuDestroy"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, OutSystemsUIModel, OutSystemsUIController, React, OSView, BRendeiroCV_Common_Menu_mvc_model, BRendeiroCV_Common_Menu_mvc_controller, BRendeiroCVClientVariables, OSWidgets, BRendeiroCV_Common_ApplicationTitle_mvc_view, BRendeiroCV_Common_Local_mvc_view) {
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
        View.displayName = "Common.Menu";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [BRendeiroCV_Common_ApplicationTitle_mvc_view, BRendeiroCV_Common_Local_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BRendeiroCV_Common_Menu_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BRendeiroCV_Common_Menu_mvc_controller;
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
extendedProperties: {
style: "justify-content: space-between;"
},
style: "display-flex",
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
}, React.createElement(BRendeiroCV_Common_ApplicationTitle_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "2",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding-top: 5px; text-align: right;"
},
style: "flex2",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(BRendeiroCV_Common_Local_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "5",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BRendeiroCV.Common.Menu.mvc$controller", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "BRendeiroCV.languageResources", "BRendeiroCV.clientVariables", "BRendeiroCV.Common.Menu.mvc$translationsResources", "BRendeiroCV.Common.Menu.mvc$debugger", "OutSystemsUI.model$ErrorMessageRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetActiveMenuItems", "OutSystemsUI.controller$SetMenuListeners", "OutSystemsUI.controller$MenuReady", "OutSystemsUI.controller$MenuDestroy"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, OutSystemsUIModel, OutSystemsUIController, BRendeiroCVLanguageResources, BRendeiroCVClientVariables, BRendeiroCV_Common_Menu_mvc_TranslationsResources, BRendeiroCV_Common_Menu_mvc_Debugger) {
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
Controller.prototype.translationResources = BRendeiroCV_Common_Menu_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onRender$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnRender");
callContext = controller.callContext(callContext);
var setActiveMenuItemsVar = new OS.DataTypes.VariableHolder();
var setMenuListenersVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.setActiveMenuItemsVar = setActiveMenuItemsVar;
varBag.setMenuListenersVar = setMenuListenersVar;
try {OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:uQo8Zs6KU0SmliiDGVoEgA:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg/NodesShownInESpaceTree.DWl6nx5eD0Ws5ElP75cfgQ/ClientActions.uQo8Zs6KU0SmliiDGVoEgA:2HoWfMY0geTdJrqkdupt6g", "BRendeiroCV", "OnRender", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:q4b_MuRpsUCQI8QNmroWDg", callContext.id);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:ybfbrNUmt0ytedKMT7znCg", callContext.id);
// Execute Action: SetMenuListeners
setMenuListenersVar.value = OutSystemsUIController.default.setMenuListeners$Action("", callContext);

OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:9TkklMcyAkasJTKrzyKp8w", callContext.id);
// Execute Action: SetActiveMenuItems
setActiveMenuItemsVar.value = OutSystemsUIController.default.setActiveMenuItems$Action("", model.variables.activeItemIn, model.variables.activeSubItemIn, callContext);

OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:+LKSWldf20erCYHokuPjUw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:uQo8Zs6KU0SmliiDGVoEgA", callContext.id);
}

};
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var menuReadyVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.menuReadyVar = menuReadyVar;
try {OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:KHrAcPSneEaS_bf7EAzZ+w:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg/NodesShownInESpaceTree.DWl6nx5eD0Ws5ElP75cfgQ/ClientActions.KHrAcPSneEaS_bf7EAzZ+w:v6QemE_FSysIYyF1JB2TcQ", "BRendeiroCV", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:LZlcwQztDk+eK83tD0_pvA", callContext.id);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:9gYokxQnbk68bMvCwuR89g", callContext.id);
// Execute Action: MenuReady
menuReadyVar.value = OutSystemsUIController.default.menuReady$Action(null, callContext);

OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:IXrqyN5eLEeK1Drm9GFCwg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:KHrAcPSneEaS_bf7EAzZ+w", callContext.id);
}

};
Controller.prototype._onDestroy$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
var menuDestroyVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.menuDestroyVar = menuDestroyVar;
try {OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:Xn4ilO58lkCtaqmMRMNmFg:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg/NodesShownInESpaceTree.DWl6nx5eD0Ws5ElP75cfgQ/ClientActions.Xn4ilO58lkCtaqmMRMNmFg:fr1srNgvhfqzZxMmdu3Xug", "BRendeiroCV", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:SXEOnx3H5kGH9F1JRCra_w", callContext.id);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:+EocR9WtQUWeqvwMT+UzvQ", callContext.id);
// Execute Action: MenuDestroy
menuDestroyVar.value = OutSystemsUIController.default.menuDestroy$Action(callContext);

OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:VH+noB0I2EGCdj1nYKNiUw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:Xn4ilO58lkCtaqmMRMNmFg", callContext.id);
}

};

Controller.prototype.onRender$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onRender$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:B4kRGvrnOEmQonA8ir4Pyg:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg:ivuksxjiFREeoaJTHRjeGA", "BRendeiroCV", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:DWl6nx5eD0Ws5ElP75cfgQ:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg/NodesShownInESpaceTree.DWl6nx5eD0Ws5ElP75cfgQ:Nt7Iotx1K0Vblt9nK_BuBQ", "BRendeiroCV", "Menu", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:DWl6nx5eD0Ws5ElP75cfgQ", callContext.id);
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:B4kRGvrnOEmQonA8ir4Pyg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Menu On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Menu On Render");
return controller.onRender$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Menu On Destroy");
return controller.onDestroy$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Menu On Parameters Changed");
return controller.onRender$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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

define("BRendeiroCV.Common.Menu.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"9TkklMcyAkasJTKrzyKp8w": {
getter: function (varBag, idService) {
return varBag.setActiveMenuItemsVar.value;
}
},
"ybfbrNUmt0ytedKMT7znCg": {
getter: function (varBag, idService) {
return varBag.setMenuListenersVar.value;
}
},
"9gYokxQnbk68bMvCwuR89g": {
getter: function (varBag, idService) {
return varBag.menuReadyVar.value;
}
},
"+EocR9WtQUWeqvwMT+UzvQ": {
getter: function (varBag, idService) {
return varBag.menuDestroyVar.value;
}
},
"xUViFccLZ0eB6TNufZrsNw": {
getter: function (varBag, idService) {
return varBag.model.variables.activeItemIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"x2DhSU+zL0+WnXcW5C9Xig": {
getter: function (varBag, idService) {
return varBag.model.variables.activeSubItemIn;
},
dataType: OS.DataTypes.DataTypes.Integer
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("BRendeiroCV.Common.Menu.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
