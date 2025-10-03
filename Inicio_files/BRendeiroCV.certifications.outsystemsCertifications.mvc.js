define("BRendeiroCV.certifications.outsystemsCertifications.mvc$model", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "OutSystemsUI.Utilities.InlineSVG.mvc$model"], function (OutSystems, BRendeiroCVModel, OutSystemsUI_Utilities_InlineSVG_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Nome", "nomeIn", "Nome", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_nomeInDataFetchStatus", "_nomeInDataFetchStatus", "_nomeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("svg", "svgIn", "svg", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_svgInDataFetchStatus", "_svgInDataFetchStatus", "_svgInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("data", "dataIn", "data", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_dataInDataFetchStatus", "_dataInDataFetchStatus", "_dataInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = OutSystemsUI_Utilities_InlineSVG_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Nome" in inputs) {
this.variables.nomeIn = inputs.Nome;
if("_nomeInDataFetchStatus" in inputs) {
this.variables._nomeInDataFetchStatus = inputs._nomeInDataFetchStatus;
}

}

if("svg" in inputs) {
this.variables.svgIn = inputs.svg;
if("_svgInDataFetchStatus" in inputs) {
this.variables._svgInDataFetchStatus = inputs._svgInDataFetchStatus;
}

}

if("data" in inputs) {
this.variables.dataIn = inputs.data;
if("_dataInDataFetchStatus" in inputs) {
this.variables._dataInDataFetchStatus = inputs._dataInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "certifications.outsystemsCertifications");
});
define("BRendeiroCV.certifications.outsystemsCertifications.mvc$view", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "react", "OutSystems/ReactView/Main", "BRendeiroCV.certifications.outsystemsCertifications.mvc$model", "BRendeiroCV.certifications.outsystemsCertifications.mvc$controller", "BRendeiroCV.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI.Utilities.InlineSVG.mvc$view"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, React, OSView, BRendeiroCV_certifications_outsystemsCertifications_mvc_model, BRendeiroCV_certifications_outsystemsCertifications_mvc_controller, BRendeiroCVClientVariables, OSWidgets, OutSystemsUI_Utilities_InlineSVG_mvc_view) {
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
        View.displayName = "certifications.outsystemsCertifications";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_Utilities_InlineSVG_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BRendeiroCV_certifications_outsystemsCertifications_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BRendeiroCV_certifications_outsystemsCertifications_mvc_controller;
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
}, React.createElement(OutSystemsUI_Utilities_InlineSVG_mvc_view, {
inputs: {
SVGCode: model.variables.svgIn,
_sVGCodeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._svgInDataFetchStatus)
},
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
style: "margin-left-s",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.nomeIn,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._nomeInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.dataIn,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._dataInDataFetchStatus)
})))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BRendeiroCV.certifications.outsystemsCertifications.mvc$controller", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "BRendeiroCV.languageResources", "BRendeiroCV.clientVariables", "BRendeiroCV.certifications.outsystemsCertifications.mvc$translationsResources", "BRendeiroCV.certifications.outsystemsCertifications.mvc$debugger"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, BRendeiroCVLanguageResources, BRendeiroCVClientVariables, BRendeiroCV_certifications_outsystemsCertifications_mvc_TranslationsResources, BRendeiroCV_certifications_outsystemsCertifications_mvc_Debugger) {
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
Controller.prototype.translationResources = BRendeiroCV_certifications_outsystemsCertifications_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:4sixS9C25EKD19hHoP3IJg:/NRWebFlows.4sixS9C25EKD19hHoP3IJg:KcgvYu3zpJm1owMBOK57pw", "BRendeiroCV", "certifications", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:G9U0xVR27U+E6pLHDK+n3w:/NRWebFlows.4sixS9C25EKD19hHoP3IJg/NodesShownInESpaceTree.G9U0xVR27U+E6pLHDK+n3w:YbVXmq7dt2W1RFy+HHoAiA", "BRendeiroCV", "outsystemsCertifications", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:G9U0xVR27U+E6pLHDK+n3w", callContext.id);
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:4sixS9C25EKD19hHoP3IJg", callContext.id);
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

define("BRendeiroCV.certifications.outsystemsCertifications.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"rku_Yx4We0axFAg8TkeBgg": {
getter: function (varBag, idService) {
return varBag.model.variables.nomeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"A5ss3gEjeESVn5rbv6r+AQ": {
getter: function (varBag, idService) {
return varBag.model.variables.svgIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NGQsHgtwG0S9EQtn_URfXg": {
getter: function (varBag, idService) {
return varBag.model.variables.dataIn;
},
dataType: OS.DataTypes.DataTypes.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("BRendeiroCV.certifications.outsystemsCertifications.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
