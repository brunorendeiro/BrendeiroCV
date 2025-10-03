define("OutSystemsUI.Navigation.TimelineItem.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$IsWebApp"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsWebApp", "isWebAppVar", "IsWebApp", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsActive", "isActiveIn", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isActiveInDataFetchStatus", "_isActiveInDataFetchStatus", "_isActiveInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Color", "colorIn", "Color", true, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUIModel.staticEntities.color.primary;
}, false), 
this.attr("_colorInDataFetchStatus", "_colorInDataFetchStatus", "_colorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("IsActive" in inputs) {
this.variables.isActiveIn = inputs.IsActive;
if("_isActiveInDataFetchStatus" in inputs) {
this.variables._isActiveInDataFetchStatus = inputs._isActiveInDataFetchStatus;
}

}

if("Color" in inputs) {
this.variables.colorIn = inputs.Color;
if("_colorInDataFetchStatus" in inputs) {
this.variables._colorInDataFetchStatus = inputs._colorInDataFetchStatus;
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
return new OS.Model.ModelFactory(Model, "Navigation.TimelineItem");
});
define("OutSystemsUI.Navigation.TimelineItem.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Navigation.TimelineItem.mvc$model", "OutSystemsUI.Navigation.TimelineItem.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI.controller$IsWebApp"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Navigation_TimelineItem_mvc_model, OutSystemsUI_Navigation_TimelineItem_mvc_controller, OSWidgets) {
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
        View.displayName = "Navigation.TimelineItem";
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
                return OutSystemsUI_Navigation_TimelineItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_Navigation_TimelineItem_mvc_controller;
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
role: "listitem"
},
style: model.getCachedValue(idService.getId("96901qZm7EaVtIZ3SZz7gA.Style"), function () {
return ((("timeline-item" + ((model.variables.isActiveIn) ? (" active") : (""))) + " ") + model.variables.extendedClassIn);
}, function () {
return model.variables.isActiveIn;
}, function () {
return model.variables.extendedClassIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isActiveInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.left,
gridProperties: {
classes: "OSInline"
},
style: model.getCachedValue(idService.getId("Left.Style"), function () {
return ("ph timeline-left" + ((model.variables.isActiveIn) ? (" text-primary-color") : ("")));
}, function () {
return model.variables.isActiveIn;
}),
_idProps: {
service: idService,
name: "Left"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isActiveInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "timeline-icon",
visible: true,
_idProps: {
service: idService,
name: "TimelineIcon"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: model.getCachedValue(idService.getId("NCGhlR37sk6vkMjwm9BEdw.Style"), function () {
return ("timeline-icon-line" + ((model.variables.isWebAppVar) ? ("") : (" background-primary-color")));
}, function () {
return model.variables.isWebAppVar;
}),
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.icon,
gridProperties: {
classes: "OSInline"
},
style: ("timeline-icon-container background-" + model.variables.colorIn),
_idProps: {
service: idService,
name: "Icon"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._colorInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "timeline-content",
visible: true,
_idProps: {
service: idService,
name: "TimelineContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.title,
style: model.getCachedValue(idService.getId("Title.Style"), function () {
return ((!(model.variables.isWebAppVar)) ? (("bold" + ((model.variables.isActiveIn) ? (" text-primary-color") : ("")))) : (""));
}, function () {
return model.variables.isWebAppVar;
}, function () {
return model.variables.isActiveIn;
}),
_idProps: {
service: idService,
name: "Title"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isActiveInDataFetchStatus)
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: "timeline-content-inner",
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.right,
gridProperties: {
classes: "OSInline"
},
style: "ph timeline-right",
_idProps: {
service: idService,
name: "Right"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUI.Navigation.TimelineItem.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Navigation.TimelineItem.mvc$translationsResources", "OutSystemsUI.Navigation.TimelineItem.mvc$debugger", "OutSystemsUI.controller$IsWebApp"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Navigation_TimelineItem_mvc_TranslationsResources, OutSystemsUI_Navigation_TimelineItem_mvc_Debugger) {
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
Controller.prototype.translationResources = OutSystemsUI_Navigation_TimelineItem_mvc_TranslationsResources;
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
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Xi1YtIEnLU+OFYVshT_klw:/NRWebFlows.4IyGEdDlC0yweUOrtzVtVQ/NodesShownInESpaceTree.M4aLVb78D0eca+E+CzylSg/ClientActions.Xi1YtIEnLU+OFYVshT_klw:kd33ALldy8+wsyj+B3j7GQ", "OutSystemsUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lDU679ZbiUyJmD0EiVZ36A", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:t5Qz9iGOOU6dMX1+q3HWCA", callContext.id);
// IsWebApp = IsWebApp()
model.variables.isWebAppVar = OutSystemsDebugger.handleFunctionCall(function () {
return OutSystemsUIController.default.isWebApp$Action(callContext).isWebAppOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:fiT49ySdHEqIdkU5wJTRbQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Xi1YtIEnLU+OFYVshT_klw", callContext.id);
}

};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:4IyGEdDlC0yweUOrtzVtVQ:/NRWebFlows.4IyGEdDlC0yweUOrtzVtVQ:OIzPV+L_8TrNS0PFWhhjcg", "OutSystemsUI", "Navigation", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:M4aLVb78D0eca+E+CzylSg:/NRWebFlows.4IyGEdDlC0yweUOrtzVtVQ/NodesShownInESpaceTree.M4aLVb78D0eca+E+CzylSg:I2pjE7EafB5gtuJNd2m2mw", "OutSystemsUI", "TimelineItem", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:M4aLVb78D0eca+E+CzylSg", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:4IyGEdDlC0yweUOrtzVtVQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Navigation/TimelineItem On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
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

define("OutSystemsUI.Navigation.TimelineItem.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"u7FMyPHmwEKVsSU9OO28cw": {
getter: function (varBag, idService) {
return varBag.model.variables.isWebAppVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+2b67zPDuE+R1Kq0uVB0uQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isActiveIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"YxElblMzSEqpLecyRCcVeg": {
getter: function (varBag, idService) {
return varBag.model.variables.colorIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ky14yFibF0WOnk916VXVIg": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"VOAHslG_qkevq43ECVDGSw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"FPHJPfLm+Uu82k2OdINJsQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TimelineIcon"));
})(varBag.model, idService);
}
},
"3_hlyObCRk+J6_D3jY0fow": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"jkXLXuirtEO0IuXjgyQszg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TimelineContent"));
})(varBag.model, idService);
}
},
"GSSHigtLE0uGWlpU5OU1ow": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"t8gGzEkTVUGns+jhHFLdTg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"thDLiTJHt0eV01C7gmLF6Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI.Navigation.TimelineItem.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
