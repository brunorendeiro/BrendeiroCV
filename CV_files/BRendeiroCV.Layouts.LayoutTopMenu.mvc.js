define("BRendeiroCV.Layouts.LayoutTopMenu.mvc$model", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$ErrorMessageRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SkipToContent", "OutSystemsUI.controller$AddFavicon", "OutSystemsUI.controller$SetLang", "OutSystemsUI.controller$LayoutReady", "OutSystemsUI.controller$LayoutDestroy"], function (OutSystems, BRendeiroCVModel, OutSystemsUIModel, OutSystemsUIController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("HasFixedHeader", "hasFixedHeaderIn", "HasFixedHeader", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_hasFixedHeaderInDataFetchStatus", "_hasFixedHeaderInDataFetchStatus", "_hasFixedHeaderInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("EnableAccessibilityFeatures", "enableAccessibilityFeaturesIn", "EnableAccessibilityFeatures", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("HasFixedHeader" in inputs) {
this.variables.hasFixedHeaderIn = inputs.HasFixedHeader;
if("_hasFixedHeaderInDataFetchStatus" in inputs) {
this.variables._hasFixedHeaderInDataFetchStatus = inputs._hasFixedHeaderInDataFetchStatus;
}

}

if("EnableAccessibilityFeatures" in inputs) {
this.variables.enableAccessibilityFeaturesIn = inputs.EnableAccessibilityFeatures;
if("_enableAccessibilityFeaturesInDataFetchStatus" in inputs) {
this.variables._enableAccessibilityFeaturesInDataFetchStatus = inputs._enableAccessibilityFeaturesInDataFetchStatus;
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
return new OS.Model.ModelFactory(Model, "Layouts.LayoutTopMenu");
});
define("BRendeiroCV.Layouts.LayoutTopMenu.mvc$view", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "BRendeiroCV.Layouts.LayoutTopMenu.mvc$model", "BRendeiroCV.Layouts.LayoutTopMenu.mvc$controller", "BRendeiroCV.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI.model$ErrorMessageRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SkipToContent", "OutSystemsUI.controller$AddFavicon", "OutSystemsUI.controller$SetLang", "OutSystemsUI.controller$LayoutReady", "OutSystemsUI.controller$LayoutDestroy"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, OutSystemsUIModel, OutSystemsUIController, React, OSView, BRendeiroCV_Layouts_LayoutTopMenu_mvc_model, BRendeiroCV_Layouts_LayoutTopMenu_mvc_controller, BRendeiroCVClientVariables, OSWidgets) {
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
        View.displayName = "Layouts.LayoutTopMenu";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI.OutSystemsUI.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BRendeiroCV_Layouts_LayoutTopMenu_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BRendeiroCV_Layouts_LayoutTopMenu_mvc_controller;
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
style: model.getCachedValue(idService.getId("LayoutWrapper.Style"), function () {
return ((("layout layout-top" + ((model.variables.hasFixedHeaderIn) ? (" fixed-header") : (""))) + ((!(model.variables.enableAccessibilityFeaturesIn)) ? ("") : (" has-accessible-features"))) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
}, function () {
return model.variables.hasFixedHeaderIn;
}, function () {
return model.variables.enableAccessibilityFeaturesIn;
}, function () {
return model.variables.extendedClassIn;
}),
visible: true,
_idProps: {
service: idService,
name: "LayoutWrapper"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hasFixedHeaderInDataFetchStatus, model.variables._enableAccessibilityFeaturesInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "main",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
role: "banner",
className: "header"
},
tag: "header",
_idProps: {
service: idService,
name: "Header2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
"aria-label": "Skip to Content (Press Enter)",
"data-showskipcontent": model.getCachedValue(idService.getId("VUCrXupa4kG8pPfT8AIZBg.data-showskipcontent"), function () {
return ((model.variables.enableAccessibilityFeaturesIn) ? ("true") : ("false"));
}, function () {
return model.variables.enableAccessibilityFeaturesIn;
})
},
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layouts/LayoutTopMenu/Link OnClick");
controller.skipToContentOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "skip-nav",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Skip to Content (Press Enter)"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "header-top ThemeGrid_Container",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "header-content display-flex ",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.header,
gridProperties: {
classes: "OSInline"
},
style: "header-navigation",
_idProps: {
service: idService,
name: "Header"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "content",
visible: true,
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
role: "main"
},
style: "main-content ThemeGrid_Container",
visible: true,
_idProps: {
service: idService,
name: "MainContentWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.breadcrumbs,
style: "content-breadcrumbs ph",
_idProps: {
service: idService,
name: "Breadcrumbs"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "content-top display-flex align-items-center",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.title,
style: "content-top-title heading1 ph",
_idProps: {
service: idService,
name: "Title"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.actions,
style: "content-top-actions ph",
_idProps: {
service: idService,
name: "Actions"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.mainContent,
style: "content-middle",
_idProps: {
service: idService,
name: "MainContent"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
role: "contentinfo",
className: "content-bottom"
},
tag: "footer",
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.footer,
style: "footer ThemeGrid_Container ph",
_idProps: {
service: idService,
name: "Footer"
},
_widgetRecordProvider: widgetsRecordProvider
}))))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BRendeiroCV.Layouts.LayoutTopMenu.mvc$controller", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "BRendeiroCV.languageResources", "BRendeiroCV.clientVariables", "BRendeiroCV.Layouts.LayoutTopMenu.mvc$translationsResources", "BRendeiroCV.Layouts.LayoutTopMenu.mvc$debugger", "OutSystemsUI.model$ErrorMessageRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SkipToContent", "OutSystemsUI.controller$AddFavicon", "OutSystemsUI.controller$SetLang", "OutSystemsUI.controller$LayoutReady", "OutSystemsUI.controller$LayoutDestroy"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, OutSystemsUIModel, OutSystemsUIController, BRendeiroCVLanguageResources, BRendeiroCVClientVariables, BRendeiroCV_Layouts_LayoutTopMenu_mvc_TranslationsResources, BRendeiroCV_Layouts_LayoutTopMenu_mvc_Debugger) {
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
Controller.prototype.translationResources = BRendeiroCV_Layouts_LayoutTopMenu_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._skipToContentOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SkipToContentOnClick");
callContext = controller.callContext(callContext);
var skipToContentVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.skipToContentVar = skipToContentVar;
try {OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:l401039jS0GBZHof0hilpg:/NRWebFlows.h5vDTMuLX06AWEdKRweFvA/NodesShownInESpaceTree.TKLCLOMOTkq37zLH_v8Zgg/ClientActions.l401039jS0GBZHof0hilpg:1oH6Y1TJKhqiBogER_JuJw", "BRendeiroCV", "SkipToContentOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:9Zmws+PxpkOou_QhBpVvrw", callContext.id);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:fXS8Ji4wrES8c4XMhECFPw", callContext.id);
// Execute Action: SkipToContent
skipToContentVar.value = OutSystemsUIController.default.skipToContent$Action(idService.getId("MainContentWrapper"), callContext);

OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:iDBuF94qL02gV+sxq19k_A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:l401039jS0GBZHof0hilpg", callContext.id);
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
var addFaviconVar = new OS.DataTypes.VariableHolder();
var setLangVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.addFaviconVar = addFaviconVar;
varBag.setLangVar = setLangVar;
try {OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:OSGi7r15zUiAl2AsMHGWOw:/NRWebFlows.h5vDTMuLX06AWEdKRweFvA/NodesShownInESpaceTree.TKLCLOMOTkq37zLH_v8Zgg/ClientActions.OSGi7r15zUiAl2AsMHGWOw:L777gLNmd12Hfu+bj_hBsg", "BRendeiroCV", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:Oj8unPOz6EiHQlJLfRQXWw", callContext.id);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:ztfs6UglCkCt2qpwS6pePg", callContext.id);
// Execute Action: LayoutReady
OutSystemsUIController.default.layoutReady$Action(callContext);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:gPcB3dVAwkuEaR9RjyW5DA", callContext.id);
// Execute Action: SetLang
setLangVar.value = OutSystemsUIController.default.setLang$Action("", callContext);

OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:oVqhVyHezEi2InKqQwDvsw", callContext.id);
// Execute Action: AddFavicon
addFaviconVar.value = OutSystemsUIController.default.addFavicon$Action("favicon.png", callContext);

OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:TW50NM3QwkuJn9AJCnNSlw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:OSGi7r15zUiAl2AsMHGWOw", callContext.id);
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:StrK_Nqe5k2rNSpqhYKiNg:/NRWebFlows.h5vDTMuLX06AWEdKRweFvA/NodesShownInESpaceTree.TKLCLOMOTkq37zLH_v8Zgg/ClientActions.StrK_Nqe5k2rNSpqhYKiNg:9V1sIGhVyzLEfdnXBjy9kg", "BRendeiroCV", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:tIWkTsKXjk+Eq1gEH1vrDA", callContext.id);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:LN9U7FnroEGNXm7WH7prFg", callContext.id);
// Execute Action: LayoutDestroy
OutSystemsUIController.default.layoutDestroy$Action(callContext);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:opgN5T7myUi3oKdD5KutHA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:StrK_Nqe5k2rNSpqhYKiNg", callContext.id);
}

};

Controller.prototype.skipToContentOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._skipToContentOnClick$Action, callContext);

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
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:h5vDTMuLX06AWEdKRweFvA:/NRWebFlows.h5vDTMuLX06AWEdKRweFvA:lwBqpM5MEmNYSGKQjqDzFw", "BRendeiroCV", "Layouts", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:TKLCLOMOTkq37zLH_v8Zgg:/NRWebFlows.h5vDTMuLX06AWEdKRweFvA/NodesShownInESpaceTree.TKLCLOMOTkq37zLH_v8Zgg:chZd+WangpFtd7dNf2Jo6w", "BRendeiroCV", "LayoutTopMenu", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:TKLCLOMOTkq37zLH_v8Zgg", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/LayoutTopMenu On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/LayoutTopMenu On Destroy");
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
return BRendeiroCVController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, BRendeiroCVLanguageResources);
});

define("BRendeiroCV.Layouts.LayoutTopMenu.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"fXS8Ji4wrES8c4XMhECFPw": {
getter: function (varBag, idService) {
return varBag.skipToContentVar.value;
}
},
"oVqhVyHezEi2InKqQwDvsw": {
getter: function (varBag, idService) {
return varBag.addFaviconVar.value;
}
},
"gPcB3dVAwkuEaR9RjyW5DA": {
getter: function (varBag, idService) {
return varBag.setLangVar.value;
}
},
"EdeaCWXSMUSxzqpiE0KKYA": {
getter: function (varBag, idService) {
return varBag.model.variables.hasFixedHeaderIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"hiO1kfQPD0ivEA7mXgB6WA": {
getter: function (varBag, idService) {
return varBag.model.variables.enableAccessibilityFeaturesIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"u9W2rnlGP0SyqYsRYv5aFQ": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2Sger9KurkWEwTsTZgV6mA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LayoutWrapper"));
})(varBag.model, idService);
}
},
"q25cOk7jikqSg5Ky08dmdw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Header2"));
})(varBag.model, idService);
}
},
"hGjCjQFKJUiZ7wpdztrClA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Header"));
})(varBag.model, idService);
}
},
"7GIexzVBZUOmwdgbDPGYPQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"C1ehR40rKEC8KVpLI_Z0wA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MainContentWrapper"));
})(varBag.model, idService);
}
},
"uTLFFXWCsUqFVFtPcbUt1A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Breadcrumbs"));
})(varBag.model, idService);
}
},
"UhGHUqctjEaECg1GOQrXNg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"+NFeHwnLn0yMUFX5dOX6iw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Actions"));
})(varBag.model, idService);
}
},
"39aEYND42USl0Jn73MK9eQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MainContent"));
})(varBag.model, idService);
}
},
"+efkyrnRiEOilxL5TjBxHw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Footer"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("BRendeiroCV.Layouts.LayoutTopMenu.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
