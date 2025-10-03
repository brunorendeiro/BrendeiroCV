define("OutSystemsUI.Utilities.InlineSVG.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$InlineSVG_InternalConfigRec", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$InlineSVGCreate", "OutSystemsUI.controller$InlineSVGRegisterCallback", "OutSystemsUI.controller$InlineSVGDestroy", "OutSystemsUI.controller$InlineSVGChangeTextProperty", "OutSystemsUI.controller$InlineSVGInitialize"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.InlineSVG_InternalConfigRec());
}, false, OutSystemsUIModel.InlineSVG_InternalConfigRec), 
this.attr("SVGCode", "sVGCodeIn", "SVGCode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_sVGCodeInDataFetchStatus", "_sVGCodeInDataFetchStatus", "_sVGCodeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("SVGCode" in inputs) {
this.variables.sVGCodeIn = inputs.SVGCode;
if("_sVGCodeInDataFetchStatus" in inputs) {
this.variables._sVGCodeInDataFetchStatus = inputs._sVGCodeInDataFetchStatus;
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
return new OS.Model.ModelFactory(Model, "Utilities.InlineSVG");
});
define("OutSystemsUI.Utilities.InlineSVG.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Utilities.InlineSVG.mvc$model", "OutSystemsUI.Utilities.InlineSVG.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI.model$InlineSVG_InternalConfigRec", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$InlineSVGCreate", "OutSystemsUI.controller$InlineSVGRegisterCallback", "OutSystemsUI.controller$InlineSVGDestroy", "OutSystemsUI.controller$InlineSVGChangeTextProperty", "OutSystemsUI.controller$InlineSVGInitialize"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Utilities_InlineSVG_mvc_model, OutSystemsUI_Utilities_InlineSVG_mvc_controller, OSWidgets) {
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
        View.displayName = "Utilities.InlineSVG";
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
                return OutSystemsUI_Utilities_InlineSVG_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_Utilities_InlineSVG_mvc_controller;
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
extendedProperties: {
name: model.variables.internal_ConfigsVar.uniqueIdAttr,
style: "height: 100%;"
},
gridProperties: {
classes: "OSInline"
},
style: "osui-inline-svg svg-wrapper",
visible: true,
_idProps: {
service: idService,
name: "SVG"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUI.Utilities.InlineSVG.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Utilities.InlineSVG.mvc$translationsResources", "OutSystemsUI.Utilities.InlineSVG.mvc$debugger", "OutSystemsUI.Utilities.InlineSVG.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", "OutSystemsUI.model$InlineSVG_InternalConfigRec", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$InlineSVGCreate", "OutSystemsUI.controller$InlineSVGRegisterCallback", "OutSystemsUI.controller$InlineSVGDestroy", "OutSystemsUI.controller$InlineSVGChangeTextProperty", "OutSystemsUI.controller$InlineSVGInitialize"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Utilities_InlineSVG_mvc_TranslationsResources, OutSystemsUI_Utilities_InlineSVG_mvc_Debugger, OutSystemsUI_Utilities_InlineSVG_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
initializedHandler$Action: function (inlineSVGIdIn) {
inlineSVGIdIn = (inlineSVGIdIn === undefined) ? "" : inlineSVGIdIn;
return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(inlineSVGIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
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
Controller.prototype.translationResources = OutSystemsUI_Utilities_InlineSVG_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
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
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:fBnYFiT1S0WH6CSLd396GQ:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.YRQYWJSl_Ue_0SGIsTgCIA/ClientActions.fBnYFiT1S0WH6CSLd396GQ:iFM0FVy1OWPL+0UF+7GHiQ", "OutSystemsUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Ork41C+gM0S0Y+H9BjaThw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dc2D7W8PAUKVIMeKnvMDxQ", callContext.id);
// Execute Action: LogEvent
OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "Going to create InlineSVG", callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:w9ckOzd8ykaxkH2U1Q4B_g", callContext.id);
// Execute Action: GenerateUniqueId
generateUniqueIdVar.value = OutSystemsUIController.default.generateUniqueId$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);

// Set Internal Configs
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:AnPajd2V40eTe4S3bzSeMg", callContext.id);
// Internal_Configs.UniqueId = GenerateUniqueId.Unique_ID
model.variables.internal_ConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:AnPajd2V40eTe4S3bzSeMg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Internal_Configs.SVGCode = SVGCode
model.variables.internal_ConfigsVar.sVGCodeAttr = model.variables.sVGCodeIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:AnPajd2V40eTe4S3bzSeMg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Internal_Configs.ExtendedClass = ExtendedClass
model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:TJ658Pau9k2d1NPPRDS0RA", callContext.id);
// Execute Action: InlineSVGCreate
OutSystemsUIController.default.inlineSVGCreate$Action(model.variables.internal_ConfigsVar, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1V3U4BYDTUCVc0vOiWIjvg", callContext.id);
// Execute Action: RegisterCallbacks
controller._registerCallbacks$Action(callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:08gLXOSy7k2mH+DjTTRw3Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:fBnYFiT1S0WH6CSLd396GQ", callContext.id);
}

};
Controller.prototype._initializedHandler$Action = function (inlineSVGIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("InitializedHandler");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Utilities.InlineSVG.InitializedHandler$vars"))());
vars.value.inlineSVGIdInLocal = inlineSVGIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:J14yIxQXFka6mAogQ_aFoQ:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.YRQYWJSl_Ue_0SGIsTgCIA/ClientActions.J14yIxQXFka6mAogQ_aFoQ:FgAQVEgm_72IoXQM+TRkOg", "OutSystemsUI", "InitializedHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:88cw0i7QgUGOG9bJa0ALjg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:5vOgk82VpUKxW7HZzXXr1A", callContext.id);
// Trigger Event: Initialized
return controller.initialized$Action(vars.value.inlineSVGIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:QGe3SK2xfkGaQclDLrzK3Q", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:J14yIxQXFka6mAogQ_aFoQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:J14yIxQXFka6mAogQ_aFoQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI.Utilities.InlineSVG.InitializedHandler$vars", [{
name: "InlineSVGId",
attrName: "inlineSVGIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
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
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:rMc3hfqY0kaZtwu4AGG2AQ:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.YRQYWJSl_Ue_0SGIsTgCIA/ClientActions.rMc3hfqY0kaZtwu4AGG2AQ:a9e8PWCXVO2pjLeZDpymrw", "OutSystemsUI", "RegisterCallbacks", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pT7dKNdtfEGd0DiRG1EMuw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lNeRmylE9kqwvSpyU7vfpg", callContext.id);
getCallbackHandlersJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_Utilities_InlineSVG_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS, "GetCallbackHandlers", "RegisterCallbacks", {
OnInitialize: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Utilities.InlineSVG.RegisterCallbacks$getCallbackHandlersJSResult"))();
jsNodeResult.onInitializeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnInitialize, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
InitializedHandler: controller.clientActionProxies.initializedHandler$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:OR5yEhQzHU2O9FJF4G_jTQ", callContext.id);
// Execute Action: InlineSVGRegisterCallback
OutSystemsUIController.default.inlineSVGRegisterCallback$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, OutSystemsUIModel.staticEntities.registeredCallbackEvents.initialized, getCallbackHandlersJSResult.value.onInitializeOut, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4+c6wI301kae0BbaNc2KmQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:rMc3hfqY0kaZtwu4AGG2AQ", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI.Utilities.InlineSVG.RegisterCallbacks$getCallbackHandlersJSResult", [{
name: "OnInitialize",
attrName: "onInitializeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
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
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:P6iGoM99EkyayvlAgXof8A:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.YRQYWJSl_Ue_0SGIsTgCIA/ClientActions.P6iGoM99EkyayvlAgXof8A:A0f23ndY+CtAAkmBiuqsrA", "OutSystemsUI", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:OQbwUoB1+EqmrDD3uWKVFg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Ky46qKw3ukO2hS7yM9+23Q", callContext.id);
// Execute Action: InlineSVGDestroy
OutSystemsUIController.default.inlineSVGDestroy$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:c94qoGDoO0ywjRRbyOAQvg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:P6iGoM99EkyayvlAgXof8A", callContext.id);
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
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:o2z_oiA+ckezwRgKcrQCTw:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.YRQYWJSl_Ue_0SGIsTgCIA/ClientActions.o2z_oiA+ckezwRgKcrQCTw:lLkc1mqDMAhPd9AU8mQvdA", "OutSystemsUI", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Fvx2iIBO5ESzeZXIRMrpMg", callContext.id);
// SVGCode?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_U4kqapx8UKQ0epe2vV7yA", callContext.id) && ((model.variables.sVGCodeIn) !== (model.variables.internal_ConfigsVar.sVGCodeAttr)))) {
// Set SVGCode
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BU3PLRVdAUe4Cfg_R8MWvw", callContext.id);
// Internal_Configs.SVGCode = SVGCode
model.variables.internal_ConfigsVar.sVGCodeAttr = model.variables.sVGCodeIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Fek9fswuJUaJvy2msbAddA", callContext.id);
// Execute Action: Update_SVGCode
OutSystemsUIController.default.inlineSVGChangeTextProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "SVGCode", model.variables.sVGCodeIn, callContext);
}

// ExtendedClass?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:AGqZRUtw3kmyHbc_yGEKqg", callContext.id) && ((model.variables.extendedClassIn) !== (model.variables.internal_ConfigsVar.extendedClassAttr)))) {
// Set ExtendedClass
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:o6m5V5FB+UCv9ICnCc_XgQ", callContext.id);
// Internal_Configs.ExtendedClass = ExtendedClass
model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mA5zKMacKkaSZk00H+gZ5w", callContext.id);
// Execute Action: Update_ExtendedClass
OutSystemsUIController.default.inlineSVGChangeTextProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", model.variables.extendedClassIn, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WRQp99s+1kGNMV6gvtEmtQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WRQp99s+1kGNMV6gvtEmtQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:o2z_oiA+ckezwRgKcrQCTw", callContext.id);
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Cyx_+Bp3_kWVPSfNCOUfPg:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.YRQYWJSl_Ue_0SGIsTgCIA/ClientActions.Cyx_+Bp3_kWVPSfNCOUfPg:qg4JnufVhW1P8Suy4aSwiw", "OutSystemsUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:54+m2sSTRU2j70Y6Db1W+Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PHvIGDKNQkOrxnYA7gbjlQ", callContext.id);
// Execute Action: InlineSVGInitialize
OutSystemsUIController.default.inlineSVGInitialize$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:AnDDvkGUS0a7PXvifrSiVg", callContext.id);
// Execute Action: LogEnd
OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "InlineSVG created", callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:osKha38d30aKJwX9+tswBA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Cyx_+Bp3_kWVPSfNCOUfPg", callContext.id);
}

};

Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.initializedHandler$Action = function (inlineSVGIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, inlineSVGIdIn);

};
Controller.prototype.registerCallbacks$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._registerCallbacks$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.initialized$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:_j+WNB+Er0ymD9g1Fl+Pmw:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw:_sU6Z6zEdfa0yPg51D1SZg", "OutSystemsUI", "Utilities", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:YRQYWJSl_Ue_0SGIsTgCIA:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.YRQYWJSl_Ue_0SGIsTgCIA:61btzCjbCLnYTvHOuwFbSg", "OutSystemsUI", "InlineSVG", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:YRQYWJSl_Ue_0SGIsTgCIA", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:_j+WNB+Er0ymD9g1Fl+Pmw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/InlineSVG On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/InlineSVG On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/InlineSVG On Destroy");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/InlineSVG On Parameters Changed");
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
define("OutSystemsUI.Utilities.InlineSVG.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.OnInitialize = $actions.InitializedHandler;
};
});

define("OutSystemsUI.Utilities.InlineSVG.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"w9ckOzd8ykaxkH2U1Q4B_g": {
getter: function (varBag, idService) {
return varBag.generateUniqueIdVar.value;
}
},
"fluvAr7zoUOKCcI6agQTwg": {
getter: function (varBag, idService) {
return varBag.vars.value.inlineSVGIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"lNeRmylE9kqwvSpyU7vfpg": {
getter: function (varBag, idService) {
return varBag.getCallbackHandlersJSResult.value;
}
},
"lekjcHW3EEaNQ91QOU+uqw": {
getter: function (varBag, idService) {
return varBag.model.variables.internal_ConfigsVar;
}
},
"vVrt57vuzUO+00qM9QGqHg": {
getter: function (varBag, idService) {
return varBag.model.variables.sVGCodeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"COmcFXGzOESx6dEqNQ9DfA": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"uF8s1Klqn0eq0yWZpRi_bA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SVG"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI.Utilities.InlineSVG.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
