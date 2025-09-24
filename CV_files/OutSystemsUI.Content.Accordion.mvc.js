define("OutSystemsUI.Content.Accordion.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$Accordion_InternalConfigsRec", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$AccordionInitialize", "OutSystemsUI.controller$AccordionRegisterCallback", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$AccordionCreate", "OutSystemsUI.controller$AccordionChangeTextProperty", "OutSystemsUI.controller$AccordionChangeBooleanProperty", "OutSystemsUI.controller$AccordionDestroy"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.Accordion_InternalConfigsRec());
}, false, OutSystemsUIModel.Accordion_InternalConfigsRec), 
this.attr("MultipleItems", "multipleItemsIn", "MultipleItems", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_multipleItemsInDataFetchStatus", "_multipleItemsInDataFetchStatus", "_multipleItemsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("MultipleItems" in inputs) {
this.variables.multipleItemsIn = inputs.MultipleItems;
if("_multipleItemsInDataFetchStatus" in inputs) {
this.variables._multipleItemsInDataFetchStatus = inputs._multipleItemsInDataFetchStatus;
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
return new OS.Model.ModelFactory(Model, "Content.Accordion");
});
define("OutSystemsUI.Content.Accordion.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Content.Accordion.mvc$model", "OutSystemsUI.Content.Accordion.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI.model$Accordion_InternalConfigsRec", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$AccordionInitialize", "OutSystemsUI.controller$AccordionRegisterCallback", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$AccordionCreate", "OutSystemsUI.controller$AccordionChangeTextProperty", "OutSystemsUI.controller$AccordionChangeBooleanProperty", "OutSystemsUI.controller$AccordionDestroy"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Content_Accordion_mvc_model, OutSystemsUI_Content_Accordion_mvc_controller, OSWidgets) {
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
        View.displayName = "Content.Accordion";
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
                return OutSystemsUI_Content_Accordion_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_Content_Accordion_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
extendedProperties: {
name: model.variables.internalConfigsVar.uniqueIdAttr
},
style: "osui-accordion",
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUI.Content.Accordion.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Content.Accordion.mvc$translationsResources", "OutSystemsUI.Content.Accordion.mvc$debugger", "OutSystemsUI.Content.Accordion.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", "OutSystemsUI.model$Accordion_InternalConfigsRec", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$AccordionInitialize", "OutSystemsUI.controller$AccordionRegisterCallback", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$AccordionCreate", "OutSystemsUI.controller$AccordionChangeTextProperty", "OutSystemsUI.controller$AccordionChangeBooleanProperty", "OutSystemsUI.controller$AccordionDestroy"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Content_Accordion_mvc_TranslationsResources, OutSystemsUI_Content_Accordion_mvc_Debugger, OutSystemsUI_Content_Accordion_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
initializedHandler$Action: function (accordionIdIn) {
accordionIdIn = (accordionIdIn === undefined) ? "" : accordionIdIn;
return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(accordionIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "InitializedHandler");
}
};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
Controller.prototype.translationResources = OutSystemsUI_Content_Accordion_mvc_TranslationsResources;
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
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:+LoUB3R4ykaL+wVsmgzU+w:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.xzXesAZvmEyUJEpGSiqtcw/ClientActions.+LoUB3R4ykaL+wVsmgzU+w:xEFwszEzQa1nmxpRIAj_4w", "OutSystemsUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:OgLd7a7IiUa9l9_DiMGyeg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:UsQ7rBdB8Eq81Z+f5Kob4w", callContext.id);
// Execute Action: AccordionInitialize
OutSystemsUIController.default.accordionInitialize$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:XGsyHCA2R02_gLYo16Cvcw", callContext.id);
// Execute Action: LogEnd
OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "Accordion created", callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:2IjZ7qQPg0KEJ2DD496NUg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:+LoUB3R4ykaL+wVsmgzU+w", callContext.id);
}

};
Controller.prototype._registerCallbacks$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RegisterCallbacks");
callContext = controller.callContext(callContext);
var getCallbackHandlersJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getCallbackHandlersJSResult = getCallbackHandlersJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:PT7PDKOXx0m_8sj20PFnrA:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.xzXesAZvmEyUJEpGSiqtcw/ClientActions.PT7PDKOXx0m_8sj20PFnrA:y54rQu_tsBZSG9dO_xdsrA", "OutSystemsUI", "RegisterCallbacks", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1CJMSd7rVUq+zJWtRNeBUA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:a7OoLCqqg0OAbai2Kf9sEA", callContext.id);
getCallbackHandlersJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_Content_Accordion_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS, "GetCallbackHandlers", "RegisterCallbacks", {
Initialized: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Content.Accordion.RegisterCallbacks$getCallbackHandlersJSResult"))();
jsNodeResult.initializedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Initialized, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
InitializedHandler: controller.clientActionProxies.initializedHandler$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Eftn3cg5xUaE2BsrQNxVPg", callContext.id);
// Execute Action: RegisterOnInitialize
OutSystemsUIController.default.accordionRegisterCallback$Action(model.variables.internalConfigsVar.uniqueIdAttr, OutSystemsUIModel.staticEntities.registeredCallbackEvents.initialized, getCallbackHandlersJSResult.value.initializedOut, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:X259srZupE6e+E8+I+sQ7A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:PT7PDKOXx0m_8sj20PFnrA", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI.Content.Accordion.RegisterCallbacks$getCallbackHandlersJSResult", [{
name: "Initialized",
attrName: "initializedOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var generateUniqueIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.generateUniqueIdVar = generateUniqueIdVar;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:eQvTRO_d90qVhcYzJz5FOA:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.xzXesAZvmEyUJEpGSiqtcw/ClientActions.eQvTRO_d90qVhcYzJz5FOA:qbLQjja1BcZSHsCFYiQl2A", "OutSystemsUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:6Rl02AFKFEuMYIODHLvhJA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GRcAqSjXGEaKxQ_KPElEiA", callContext.id);
// Execute Action: LogStart
OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "Going to create Accordion", callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:av4JHLeOgEWTYmb8TyhMcg", callContext.id);
// Execute Action: GenerateUniqueId
generateUniqueIdVar.value = OutSystemsUIController.default.generateUniqueId$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);

// Set Internal Configs
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:XYMN6DzloEOLaxe1HhBd0Q", callContext.id);
// InternalConfigs.UniqueId = GenerateUniqueId.Unique_ID
model.variables.internalConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:XYMN6DzloEOLaxe1HhBd0Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// InternalConfigs.MultipleItems = MultipleItems
model.variables.internalConfigsVar.multipleItemsAttr = model.variables.multipleItemsIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:XYMN6DzloEOLaxe1HhBd0Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// InternalConfigs.ExtendedClass = ExtendedClass
model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lr7Oas5rmkOkekhEihUlqg", callContext.id);
// Execute Action: AccordionCreate
OutSystemsUIController.default.accordionCreate$Action(model.variables.internalConfigsVar, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:3lkUzGEILkSCfQwwdjqf7g", callContext.id);
// Execute Action: RegisterCallbacks
controller._registerCallbacks$Action(callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:sHdXV7Zl1E6+dtgjEcuelg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:eQvTRO_d90qVhcYzJz5FOA", callContext.id);
}

};
Controller.prototype._onParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:VGn1cJuVwE+ElHfi63Y4xQ:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.xzXesAZvmEyUJEpGSiqtcw/ClientActions.VGn1cJuVwE+ElHfi63Y4xQ:K_p7YzRAcp+QXS8KiugKjQ", "OutSystemsUI", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:myzVltfLF0OftizRBx7v0g", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ooC1lv1SkkqiPVWNVg00Rg", callContext.id) && ((model.variables.multipleItemsIn) !== (model.variables.internalConfigsVar.multipleItemsAttr)))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:oyylVIdK5Ui_uTNR8O+SAw", callContext.id);
// InternalConfigs.MultipleItems = MultipleItems
model.variables.internalConfigsVar.multipleItemsAttr = model.variables.multipleItemsIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:tzxZr+vjYk2kLDpRQvn7Ew", callContext.id);
// Execute Action: Update_MultipleItems
OutSystemsUIController.default.accordionChangeBooleanProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "MultipleItems", model.variables.multipleItemsIn, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BBv9AvblGkmnj_COHwpfzw", callContext.id) && ((model.variables.extendedClassIn) !== (model.variables.internalConfigsVar.extendedClassAttr)))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:jG8sjCZk40y0fzgjfnO4vg", callContext.id);
// InternalConfigs.ExtendedClass = ExtendedClass
model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wgxKL0TGNE6T68thKlQHtg", callContext.id);
// Execute Action: Update_ExtendedClass
OutSystemsUIController.default.accordionChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", model.variables.internalConfigsVar.extendedClassAttr, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:QjyuX_tzlU6stOAXv9v0BQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:QjyuX_tzlU6stOAXv9v0BQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:VGn1cJuVwE+ElHfi63Y4xQ", callContext.id);
}

};
Controller.prototype._initializedHandler$Action = function (accordionIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("InitializedHandler");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Content.Accordion.InitializedHandler$vars"))());
vars.value.accordionIdInLocal = accordionIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:WshygoiNc0uSW0nbpSj2nw:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.xzXesAZvmEyUJEpGSiqtcw/ClientActions.WshygoiNc0uSW0nbpSj2nw:d8CsfpGjvm8QufOUViF6Mg", "OutSystemsUI", "InitializedHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:oLRqAh8_70GbhFDGdwyC+Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xj_VdZ0kJkubq1ZXxKRsqQ", callContext.id);
// Trigger Event: Initialized
return controller.initialized$Action(vars.value.accordionIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8BsHF3Y9EUykCxbfIjDuqQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:WshygoiNc0uSW0nbpSj2nw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:WshygoiNc0uSW0nbpSj2nw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI.Content.Accordion.InitializedHandler$vars", [{
name: "AccordionId",
attrName: "accordionIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
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
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:J4kK0Pz0Y0KNV1MdhSzahA:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.xzXesAZvmEyUJEpGSiqtcw/ClientActions.J4kK0Pz0Y0KNV1MdhSzahA:6iC0c1qnhPaABfonQ09SUQ", "OutSystemsUI", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:l1E0ZsrIx0uEr35LT5+2tw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:iQmkAsZuu0idqmFIgy20Gg", callContext.id);
// Execute Action: AccordionDestroy
OutSystemsUIController.default.accordionDestroy$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qg3OBX7ydUS1iIr8BlELNg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:J4kK0Pz0Y0KNV1MdhSzahA", callContext.id);
}

};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.registerCallbacks$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._registerCallbacks$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.initializedHandler$Action = function (accordionIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, accordionIdIn);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.initialized$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:I9m14fELdkiW+b3sqQ+k7Q:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q:AUjgzFQezVYFy+ax1Bu5WA", "OutSystemsUI", "Content", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:xzXesAZvmEyUJEpGSiqtcw:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.xzXesAZvmEyUJEpGSiqtcw:e5EQo8rAqZq9TDDAAR7LPg", "OutSystemsUI", "Accordion", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:xzXesAZvmEyUJEpGSiqtcw", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:I9m14fELdkiW+b3sqQ+k7Q", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Content/Accordion On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Content/Accordion On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Content/Accordion On Destroy");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Content/Accordion On Parameters Changed");
return controller.onParametersChanged$Action(callContext);

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
return OutSystemsUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});
define("OutSystemsUI.Content.Accordion.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Initialized = $actions.InitializedHandler;
};
});

define("OutSystemsUI.Content.Accordion.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"a7OoLCqqg0OAbai2Kf9sEA": {
getter: function (varBag, idService) {
return varBag.getCallbackHandlersJSResult.value;
}
},
"av4JHLeOgEWTYmb8TyhMcg": {
getter: function (varBag, idService) {
return varBag.generateUniqueIdVar.value;
}
},
"zWNZMSpVTUihKJfwOeezbg": {
getter: function (varBag, idService) {
return varBag.vars.value.accordionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ijJ_F025kUKeMvSL1ov9oA": {
getter: function (varBag, idService) {
return varBag.model.variables.internalConfigsVar;
}
},
"t3+q3gl8m069OLXIhPd7vg": {
getter: function (varBag, idService) {
return varBag.model.variables.multipleItemsIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"lFn3HwBbS0+YoLTUkXwRFg": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jug+1GoTyUykYNjTagSTRQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI.Content.Accordion.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
