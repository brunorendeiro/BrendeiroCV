define("OutSystemsUI.Interaction.FloatingActions.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$ErrorMessageRec", "OutSystemsUI.controller$MoveElement"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsOpen", "isOpenVar", "IsOpen", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsInsideBottomBar", "isInsideBottomBarVar", "IsInsideBottomBar", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("DOMElem", "dOMElemVar", "DOMElem", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("IsExpanded", "isExpandedIn", "IsExpanded", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isExpandedInDataFetchStatus", "_isExpandedInDataFetchStatus", "_isExpandedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsHover", "isHoverIn", "IsHover", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isHoverInDataFetchStatus", "_isHoverInDataFetchStatus", "_isHoverInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return false;
}
});

Model.prototype.setInputs = function (inputs) {
if("IsExpanded" in inputs) {
this.variables.isExpandedIn = inputs.IsExpanded;
if("_isExpandedInDataFetchStatus" in inputs) {
this.variables._isExpandedInDataFetchStatus = inputs._isExpandedInDataFetchStatus;
}

}

if("IsHover" in inputs) {
this.variables.isHoverIn = inputs.IsHover;
if("_isHoverInDataFetchStatus" in inputs) {
this.variables._isHoverInDataFetchStatus = inputs._isHoverInDataFetchStatus;
}

}

if("ExtendedClass" in inputs) {
this.variables.extendedClassIn = inputs.ExtendedClass;
if("_extendedClassInDataFetchStatus" in inputs) {
this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Interaction.FloatingActions");
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Interaction.FloatingActions.mvc$model", "OutSystemsUI.Interaction.FloatingActions.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI.model$ErrorMessageRec", "OutSystemsUI.controller$MoveElement"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Interaction_FloatingActions_mvc_model, OutSystemsUI_Interaction_FloatingActions_mvc_controller, OSWidgets) {
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
        View.displayName = "Interaction.FloatingActions";
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
                return OutSystemsUI_Interaction_FloatingActions_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_Interaction_FloatingActions_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Interaction/FloatingActions/Container onclick");
return controller.toggleClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
gridProperties: {
classes: "OSInline"
},
style: model.getCachedValue(idService.getId("G9JDl_3xN0mAlPt+68SuzA.Style"), function () {
return ("floating-overlay " + ((!(model.variables.isOpenVar)) ? ("") : (" is--open")));
}, function () {
return model.variables.isOpenVar;
}),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
role: "menubar"
},
gridProperties: {
classes: "OSInline"
},
style: model.getCachedValue(idService.getId("FloatingActions.Style"), function () {
return (((("floating-actions-wrapper" + ((!(model.variables.isOpenVar)) ? ("") : (" is--open"))) + ((!(model.variables.isInsideBottomBarVar)) ? ("") : (" bottom-bar-exists"))) + " ") + model.variables.extendedClassIn);
}, function () {
return model.variables.isOpenVar;
}, function () {
return model.variables.isInsideBottomBarVar;
}, function () {
return model.variables.extendedClassIn;
}),
visible: true,
_idProps: {
service: idService,
name: "FloatingActions"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus)
}, $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.items,
extendedProperties: {
"aria-hidden": model.getCachedValue(idService.getId("Items.aria-hidden"), function () {
return ((model.variables.isOpenVar) ? ("false") : ("true"));
}, function () {
return model.variables.isOpenVar;
}),
role: "menu"
},
style: "floating-items",
_idProps: {
service: idService,
name: "Items"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.button,
extendedProperties: {
role: "menuitem",
tabIndex: "0",
"aria-expanded": model.getCachedValue(idService.getId("Button.aria-expanded"), function () {
return ((model.variables.isOpenVar) ? ("true") : ("false"));
}, function () {
return model.variables.isOpenVar;
}),
"aria-haspopup": "true",
"aria-label": model.getCachedValue(idService.getId("Button.aria-label"), function () {
return ((model.variables.isOpenVar) ? (OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("GIz2P7I5J0qsipaGa1e6Fg#Value.-126484825.1", "Close menu")) : (OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("GIz2P7I5J0qsipaGa1e6Fg#Value.-803054251.1", "Open menu")));
}, function () {
return model.variables.isOpenVar;
})
},
style: "floating-button",
_idProps: {
service: idService,
name: "Button"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources", "OutSystemsUI.Interaction.FloatingActions.mvc$debugger", "OutSystemsUI.Interaction.FloatingActions.mvc$controller.ToggleTabIndex.ToggleTabindexJS", "OutSystemsUI.Interaction.FloatingActions.mvc$controller.ToggleClick.ToggleEventsJS", "OutSystemsUI.Interaction.FloatingActions.mvc$controller.OnDestroy.RemoveListenersJS", "OutSystemsUI.Interaction.FloatingActions.mvc$controller.OnReady.InitJS", "OutSystemsUI.model$ErrorMessageRec", "OutSystemsUI.controller$MoveElement"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Interaction_FloatingActions_mvc_TranslationsResources, OutSystemsUI_Interaction_FloatingActions_mvc_Debugger, OutSystemsUI_Interaction_FloatingActions_mvc_controller_ToggleTabIndex_ToggleTabindexJS, OutSystemsUI_Interaction_FloatingActions_mvc_controller_ToggleClick_ToggleEventsJS, OutSystemsUI_Interaction_FloatingActions_mvc_controller_OnDestroy_RemoveListenersJS, OutSystemsUI_Interaction_FloatingActions_mvc_controller_OnReady_InitJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
toggleClick$Action: function () {
return controller.executeActionInsideJSNode(controller._toggleClick$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "ToggleClick");
}
};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
Controller.prototype.translationResources = OutSystemsUI_Interaction_FloatingActions_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._toggleTabIndex$Action = function (isOnReadyIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ToggleTabIndex");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Interaction.FloatingActions.ToggleTabIndex$vars"))());
vars.value.isOnReadyInLocal = isOnReadyIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:YxfTKdw5LECsz4haomghzw:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.OE4w+stEpEOzFZCcaCbAeA/ClientActions.YxfTKdw5LECsz4haomghzw:qr1pY+g4KA6i19c8xY6E1g", "OutSystemsUI", "ToggleTabIndex", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:QZ10ih7LBEeqy8OHIalabg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:h5e2WOw4RUW2JgcifnncxA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_Interaction_FloatingActions_mvc_controller_ToggleTabIndex_ToggleTabindexJS, "ToggleTabindex", "ToggleTabIndex", {
IsOpen: OS.DataConversion.JSNodeParamConverter.to(model.variables.isOpenVar, OS.DataTypes.DataTypes.Boolean),
FloatingId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("FloatingActions"), OS.DataTypes.DataTypes.Text),
IsOnReady: OS.DataConversion.JSNodeParamConverter.to(vars.value.isOnReadyInLocal, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:buIg0SUxJUCoFCRiwiMY6Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:YxfTKdw5LECsz4haomghzw", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI.Interaction.FloatingActions.ToggleTabIndex$vars", [{
name: "IsOnReady",
attrName: "isOnReadyInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._toggleClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ToggleClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:7VjTMRY2R0G7NWo+HUnQdw:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.OE4w+stEpEOzFZCcaCbAeA/ClientActions.7VjTMRY2R0G7NWo+HUnQdw:5Om59tFAHkYGKLbkPFqIQA", "OutSystemsUI", "ToggleClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Emj1TlDK_UeoDLQS2KHkrg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:90TM1F7ybEaWG9W04Vt3fg", callContext.id);
// IsOpen = notIsOpen
model.variables.isOpenVar = !(model.variables.isOpenVar);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xcr9j35py0i9KK91e0BALA", callContext.id);
// Execute Action: ToggleTabIndex
controller._toggleTabIndex$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:haP3y_6M5kKKme4ZxAelTQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_Interaction_FloatingActions_mvc_controller_ToggleClick_ToggleEventsJS, "ToggleEvents", "ToggleClick", {
IsOpen: OS.DataConversion.JSNodeParamConverter.to(model.variables.isOpenVar, OS.DataTypes.DataTypes.Boolean),
IsHover: OS.DataConversion.JSNodeParamConverter.to(model.variables.isHoverIn, OS.DataTypes.DataTypes.Boolean),
FloatingId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("FloatingActions"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
ToggleClick: controller.clientActionProxies.toggleClick$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qE7inwOCM0qMW1M5j1p7bA", callContext.id);
// Trigger Event: OnToggle
return controller.onToggle$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:MxPso8BWKk+aRVHi5GCv5w", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:7VjTMRY2R0G7NWo+HUnQdw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:7VjTMRY2R0G7NWo+HUnQdw", callContext.id);
throw ex;

});
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:zFnbM5vJx0eCv8gqSyBkog:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.OE4w+stEpEOzFZCcaCbAeA/ClientActions.zFnbM5vJx0eCv8gqSyBkog:WxR1kLmxaO2e+QpwWKq_ng", "OutSystemsUI", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:yYrfL1U5ZECZ3rSx7Ca6MA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:X2rZrGS15kWSPgIMxCFbcA", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_Interaction_FloatingActions_mvc_controller_OnDestroy_RemoveListenersJS, "RemoveListeners", "OnDestroy", {
DOMElem: OS.DataConversion.JSNodeParamConverter.to(model.variables.dOMElemVar, OS.DataTypes.DataTypes.Object),
IsHover: OS.DataConversion.JSNodeParamConverter.to(model.variables.isHoverIn, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
}, {
ToggleClick: controller.clientActionProxies.toggleClick$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GUKVqSkNvEieZfuqvQuyKQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:zFnbM5vJx0eCv8gqSyBkog", callContext.id);
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
var initJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.initJSResult = initJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:0Uff8M1md0GTd8vwUxzB2g:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.OE4w+stEpEOzFZCcaCbAeA/ClientActions.0Uff8M1md0GTd8vwUxzB2g:+8+Z4ggSuwKqJ7ZrqB2daA", "OutSystemsUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_cjXXuujlkKVvvJUlIPhnA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:c7lp8UfUZ0qLPIfMvpZF3w", callContext.id);
initJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_Interaction_FloatingActions_mvc_controller_OnReady_InitJS, "Init", "OnReady", {
IsExpanded: OS.DataConversion.JSNodeParamConverter.to(model.variables.isExpandedIn, OS.DataTypes.DataTypes.Boolean),
WidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("FloatingActions"), OS.DataTypes.DataTypes.Text),
IsHover: OS.DataConversion.JSNodeParamConverter.to(model.variables.isHoverIn, OS.DataTypes.DataTypes.Boolean),
IsInsideBottomBar: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
DOMElem: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Interaction.FloatingActions.OnReady$initJSResult"))();
jsNodeResult.isInsideBottomBarOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsInsideBottomBar, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.dOMElemOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DOMElem, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
ToggleClick: controller.clientActionProxies.toggleClick$Action,
MoveElement: OutSystemsUIController.default.getClientActionProxies(controller).moveElement$Action
}, {});
// Set vars
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0heVA6gbs0i+LPNAQcNHAw", callContext.id);
// IsOpen = IsExpanded
model.variables.isOpenVar = model.variables.isExpandedIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0heVA6gbs0i+LPNAQcNHAw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsInsideBottomBar = Init.IsInsideBottomBar
model.variables.isInsideBottomBarVar = initJSResult.value.isInsideBottomBarOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0heVA6gbs0i+LPNAQcNHAw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// DOMElem = Init.DOMElem
model.variables.dOMElemVar = initJSResult.value.dOMElemOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:XpOcbQjxiUGHCKAo4+sj5A", callContext.id);
// Execute Action: ToggleTabIndex
controller._toggleTabIndex$Action(true, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:IEtdbs1QnEOUz79vCsZ6ww", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:0Uff8M1md0GTd8vwUxzB2g", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI.Interaction.FloatingActions.OnReady$initJSResult", [{
name: "IsInsideBottomBar",
attrName: "isInsideBottomBarOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "DOMElem",
attrName: "dOMElemOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);

Controller.prototype.toggleTabIndex$Action = function (isOnReadyIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._toggleTabIndex$Action, callContext, isOnReadyIn);

};
Controller.prototype.toggleClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._toggleClick$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onToggle$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:qQS9OZYcu0SRmBsR92a4Og:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og:lqPcl3zEGn9YSs1SWHw12A", "OutSystemsUI", "Interaction", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:OE4w+stEpEOzFZCcaCbAeA:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.OE4w+stEpEOzFZCcaCbAeA:Wj5XW67XXpWe3QZGnmXEBg", "OutSystemsUI", "FloatingActions", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:OE4w+stEpEOzFZCcaCbAeA", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:qQS9OZYcu0SRmBsR92a4Og", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/FloatingActions On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/FloatingActions On Destroy");
return controller.onDestroy$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return OutSystemsUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$controller.ToggleTabIndex.ToggleTabindexJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var floatingActions = document.getElementById($parameters.FloatingId);
var floatingActionsButton = floatingActions.querySelector('.floating-button');
var floatingActionsItems = floatingActions.querySelector('.floating-items');
var firstItem;
var focusableElems = 'a[href]:not([disabled]),[tabindex="0"], button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]),input[type="submit"]:not([disabled]), select:not([disabled])';

// Accessibility SetTabIndex values
var setTabIndex = function (value) {
    var tabIndexItems = floatingActionsItems.querySelectorAll(focusableElems);

    tabIndexItems.forEach(function(item) {
        item.setAttribute('tabindex', value);
    });
};

// Toggle Attributes and focus
if($parameters.IsOpen) {
    setTabIndex("0");
    firstItem = floatingActionsItems.querySelector(".floating-actions-item");
    
    if(firstItem) {
        firstItem.focus();
    }
} else {
    if($parameters.IsOnReady === false) {
        floatingActionsButton.focus();
    }

    setTabIndex("-1");
}



};
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$controller.ToggleClick.ToggleEventsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var floatingActions = document.getElementById($parameters.FloatingId);
var floatingActionsButton = floatingActions.querySelector('.floating-button');

if($parameters.IsHover) {
    floatingActionsButton.removeEventListener("focus", $actions.ToggleClick);
    
    //Handle event listeners
    if($parameters.IsOpen) {
        floatingActionsButton.removeEventListener("mouseenter", $actions.ToggleClick);
        floatingActions.addEventListener("mouseleave", $actions.ToggleClick);
    } else {
        floatingActionsButton.addEventListener("mouseenter", $actions.ToggleClick);
        floatingActions.removeEventListener("mouseleave", $actions.ToggleClick);
        floatingActionsButton.addEventListener("focus", $actions.ToggleClick);
    } 
}

};
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$controller.OnDestroy.RemoveListenersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.DOMElem) {
    var floatingActionsButton = $parameters.DOMElem.querySelector('.floating-button');

    if($parameters.IsHover) {
        floatingActionsButton.removeEventListener("mouseleave",$actions.ToggleClick);
        $parameters.DOMElem.removeEventListener("mouseleave",$actions.ToggleClick);
    } else {
        floatingActionsButton.removeEventListener("click", $actions.ToggleClick);
    }

    // Remove detached DOM element
    $parameters.DOMElem.remove();
}
};
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$controller.OnReady.InitJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var toggleId;
var indexArray = [];
var insideBottomBar;
var bottomBar = document.querySelector(".active-screen .bottom-bar");
var floatingActions = document.getElementById($parameters.WidgetId);
var floatingActionsButton = floatingActions.querySelector('.floating-button');
var floatingActionsItemsWrapper = floatingActions.querySelector('.floating-items');
var floatingActionsItems = floatingActionsItemsWrapper.querySelectorAll('.floating-actions-item');
var firstButton = floatingActionsItems[0];
var lastButton = floatingActionsItems[floatingActionsItems.length - 1];

// Set the HTML Object of FloatingActions
$parameters.DOMElem = document.getElementById($parameters.WidgetId);

var setFocusTrap = function(e) {
    if(floatingActionsItems.length > 0) {
        var isShiftKey = e.shiftKey;
        
        // Focus trap to circle all buttons inside
        if(isShiftKey) {
            if(document.activeElement === firstButton) {
                lastButton.focus();
                e.preventDefault();
            }
        } else if (document.activeElement === lastButton){
            firstButton.focus();
            e.preventDefault();
        }
    }
};

// Check if there are FloatingActionsItemsWrapper
if(floatingActionsItems.length > 0) {

    // Push every floating-item index into a empty array
    for (var i = 0; i < floatingActionsItems.length; i++) { 
        indexArray.push(i);
    }
    
    // reverse order of array for css animation
    indexArray.reverse();
    
    // set CSS variable instead of inline styles for sequential animations
    for (var i = 0; i < floatingActionsItems.length; i++) { 
        floatingActionsItems[i].style.setProperty('--delay', indexArray[i] + 1);
    }
    
}

// Set keyboard interaction - Accessibility
var onButtonKeypress = function(e) {
    
    //If esc, Close Items
    if (e.keyCode == "27" && floatingActions.classList.contains('is--open')) {
        $actions.ToggleClick();
    }
    
    //If enter or space toggle Items
    if (e.keyCode == "32" || e.keyCode == "13") {
        $actions.ToggleClick();
    }
    
    setFocusTrap(e);

};

if($parameters.IsHover) {
    
    if($parameters.IsExpanded) {
        floatingActions.addEventListener("mouseleave", $actions.ToggleClick);
    } else {
        floatingActionsButton.addEventListener("mouseenter", $actions.ToggleClick);
    }

    floatingActionsButton.addEventListener("focus", $actions.ToggleClick);
    
} else {
    floatingActionsButton.addEventListener("click", $actions.ToggleClick);
    floatingActionsButton.addEventListener("keydown", onButtonKeypress);
}

// Exception for clicking Esc on items wrapper 
floatingActionsItemsWrapper.addEventListener("keydown", function(e){
    if (e.keyCode == "27") {
        if($parameters.IsHover) {
           floatingActionsButton.removeEventListener("focus", $actions.ToggleClick); 
        }        
        $actions.ToggleClick();

        if($parameters.IsHover) {
            floatingActionsButton.addEventListener("focus", $actions.ToggleClick);
        }
    }

    //If Up or Down Arrows
    if(e.keyCode == "38" || e.keyCode == "40") {
        const currTargetIndex = Array.from(floatingActionsItems).indexOf(e.target);

        // Up
        if(e.keyCode == "38") {
            if(currTargetIndex === 0) {
                $actions.ToggleClick();
            } else {
                Array.from(floatingActionsItems)[currTargetIndex-1].focus();
            }
        }

        // Down
        if(e.keyCode == "40") {
            if(currTargetIndex === floatingActionsItems.length-1) {
                $actions.ToggleClick();
            } else {
                Array.from(floatingActionsItems)[currTargetIndex+1].focus();
            }
        }
    } else {
         setFocusTrap(e);   
    }
});


// Inside Bottom Bar and IOS fix
if(bottomBar && floatingActions) {
    insideBottomBar = bottomBar.contains(floatingActions);
}

if(!insideBottomBar && floatingActions) {
    
    var layout = document.querySelector('.layout');

    if(layout) {
        var nativeLayout = layout.classList.contains('layout-native');
        
        if(nativeLayout) { // new native layouts
            $actions.MoveElement($parameters.WidgetId, ".active-screen .main");
        } else {// Old native layouts
            $actions.MoveElement($parameters.WidgetId, ".active-screen .screen"); 
        }
    }

    if(bottomBar) {
        $parameters.IsInsideBottomBar = true;
    }
}

};
});

define("OutSystemsUI.Interaction.FloatingActions.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"HlELSjJAbkqhtVq0KnrKHA": {
getter: function (varBag, idService) {
return varBag.vars.value.isOnReadyInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"h5e2WOw4RUW2JgcifnncxA": {
getter: function (varBag, idService) {
return varBag.toggleTabindexJSResult.value;
}
},
"haP3y_6M5kKKme4ZxAelTQ": {
getter: function (varBag, idService) {
return varBag.toggleEventsJSResult.value;
}
},
"X2rZrGS15kWSPgIMxCFbcA": {
getter: function (varBag, idService) {
return varBag.removeListenersJSResult.value;
}
},
"c7lp8UfUZ0qLPIfMvpZF3w": {
getter: function (varBag, idService) {
return varBag.initJSResult.value;
}
},
"rCZCAdBzMUqWVFCyT5EX_g": {
getter: function (varBag, idService) {
return varBag.model.variables.isOpenVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"_sSh6ibmukagPTJS8l_K5g": {
getter: function (varBag, idService) {
return varBag.model.variables.isInsideBottomBarVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+1cPIGsN00K2UQjuZUAQWw": {
getter: function (varBag, idService) {
return varBag.model.variables.dOMElemVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"bE_r5sSC6kK0Xb+DYKit1Q": {
getter: function (varBag, idService) {
return varBag.model.variables.isExpandedIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"rvMg8R+uHkG93Qjf5kBJoA": {
getter: function (varBag, idService) {
return varBag.model.variables.isHoverIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"x3+TEaTYKUaA_SDDTPESeg": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"B2RC6oGfE0i7hdkJPShQWg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("FloatingActions"));
})(varBag.model, idService);
}
},
"wAgxHM1Ki0u3Z49OuTsROQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Items"));
})(varBag.model, idService);
}
},
"uztY1KjHcEm0zXvZ1t73Pg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Button"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources", ["exports", "OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.ar", "OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.de-DE", "OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.en", "OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.es", "OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.fr-CA", "OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.fr-FR", "OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.hi-IN", "OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.it-IT", "OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.ja-JP", "OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.ko-KR", "OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.nl", "OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.pt", "OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.pt-BR", "OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.zh-CN", "OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.zh-Hans", "OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.zh-Hant"], function (exports, OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_ar, OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_deDE, OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_en, OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_es, OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_frCA, OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_frFR, OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_hiIN, OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_itIT, OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_jaJP, OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_koKR, OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_nl, OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_pt, OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_ptBR, OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_zhCN, OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_zhHans, OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_zhHant) {
return {
"ar": {
"translations": OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_ar,
"isRTL": true
},
"de-DE": {
"translations": OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_deDE,
"isRTL": false
},
"en": {
"translations": OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_en,
"isRTL": false
},
"es": {
"translations": OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_es,
"isRTL": false
},
"fr-CA": {
"translations": OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_frCA,
"isRTL": false
},
"fr-FR": {
"translations": OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_frFR,
"isRTL": false
},
"hi-IN": {
"translations": OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_hiIN,
"isRTL": false
},
"it-IT": {
"translations": OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_itIT,
"isRTL": false
},
"ja-JP": {
"translations": OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_jaJP,
"isRTL": false
},
"ko-KR": {
"translations": OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_koKR,
"isRTL": false
},
"nl": {
"translations": OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_nl,
"isRTL": false
},
"pt": {
"translations": OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_pt,
"isRTL": false
},
"pt-BR": {
"translations": OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_ptBR,
"isRTL": false
},
"zh-CN": {
"translations": OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_zhCN,
"isRTL": false
},
"zh-Hans": {
"translations": OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_zhHans,
"isRTL": false
},
"zh-Hant": {
"translations": OutSystemsUI_Interaction_FloatingActions_mvc_translationsResources_zhHant,
"isRTL": false
}
};
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.ar", [], function () {
return {
"GIz2P7I5J0qsipaGa1e6Fg#Value.-126484825.1": "إغلاق القائمة",
"GIz2P7I5J0qsipaGa1e6Fg#Value.-803054251.1": "فتح القائمة"
};
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.de-DE", [], function () {
return {
"GIz2P7I5J0qsipaGa1e6Fg#Value.-126484825.1": "Menü schließen",
"GIz2P7I5J0qsipaGa1e6Fg#Value.-803054251.1": "Menü öffnen"
};
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.en", [], function () {
return {
"GIz2P7I5J0qsipaGa1e6Fg#Value.-126484825.1": "Close menu",
"GIz2P7I5J0qsipaGa1e6Fg#Value.-803054251.1": "Open menu"
};
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.es", [], function () {
return {
"GIz2P7I5J0qsipaGa1e6Fg#Value.-126484825.1": "Menú cerrado",
"GIz2P7I5J0qsipaGa1e6Fg#Value.-803054251.1": "Abrir Menú"
};
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.fr-CA", [], function () {
return {
"GIz2P7I5J0qsipaGa1e6Fg#Value.-126484825.1": "Fermer le menu",
"GIz2P7I5J0qsipaGa1e6Fg#Value.-803054251.1": "Ouvrir le menu"
};
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.fr-FR", [], function () {
return {
"GIz2P7I5J0qsipaGa1e6Fg#Value.-126484825.1": "Fermer le menu",
"GIz2P7I5J0qsipaGa1e6Fg#Value.-803054251.1": "Ouvrir le menu"
};
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.hi-IN", [], function () {
return {
"GIz2P7I5J0qsipaGa1e6Fg#Value.-126484825.1": "मेनू बंद करें\r",
"GIz2P7I5J0qsipaGa1e6Fg#Value.-803054251.1": "मेनू खोलें"
};
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.it-IT", [], function () {
return {
"GIz2P7I5J0qsipaGa1e6Fg#Value.-126484825.1": "Chiudi menu",
"GIz2P7I5J0qsipaGa1e6Fg#Value.-803054251.1": "Apri il menù"
};
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.ja-JP", [], function () {
return {
"GIz2P7I5J0qsipaGa1e6Fg#Value.-126484825.1": "メニューを閉じます",
"GIz2P7I5J0qsipaGa1e6Fg#Value.-803054251.1": "メニューを開く"
};
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.ko-KR", [], function () {
return {
"GIz2P7I5J0qsipaGa1e6Fg#Value.-126484825.1": "닫기 메뉴",
"GIz2P7I5J0qsipaGa1e6Fg#Value.-803054251.1": "메뉴 열기"
};
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.nl", [], function () {
return {
"GIz2P7I5J0qsipaGa1e6Fg#Value.-126484825.1": "Sluit het menu",
"GIz2P7I5J0qsipaGa1e6Fg#Value.-803054251.1": "Menu openen"
};
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.pt", [], function () {
return {
"GIz2P7I5J0qsipaGa1e6Fg#Value.-126484825.1": "Fechar menu",
"GIz2P7I5J0qsipaGa1e6Fg#Value.-803054251.1": "Abrir menu"
};
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.pt-BR", [], function () {
return {
"GIz2P7I5J0qsipaGa1e6Fg#Value.-126484825.1": "Fechar menu",
"GIz2P7I5J0qsipaGa1e6Fg#Value.-803054251.1": "Abrir menu"
};
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.zh-CN", [], function () {
return {
"GIz2P7I5J0qsipaGa1e6Fg#Value.-126484825.1": "关闭菜单",
"GIz2P7I5J0qsipaGa1e6Fg#Value.-803054251.1": "打开菜单"
};
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.zh-Hans", [], function () {
return {
"GIz2P7I5J0qsipaGa1e6Fg#Value.-126484825.1": "关闭菜单",
"GIz2P7I5J0qsipaGa1e6Fg#Value.-803054251.1": "打开菜单"
};
});
define("OutSystemsUI.Interaction.FloatingActions.mvc$translationsResources.zh-Hant", [], function () {
return {
"GIz2P7I5J0qsipaGa1e6Fg#Value.-126484825.1": "关闭菜单",
"GIz2P7I5J0qsipaGa1e6Fg#Value.-803054251.1": "打開菜單"
};
});
