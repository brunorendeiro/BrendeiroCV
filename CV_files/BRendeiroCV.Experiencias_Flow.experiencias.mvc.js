define("BRendeiroCV.Experiencias_Flow.experiencias.mvc$model", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.Experiencias_Flow.exeperienciaTrilogy.mvc$model", "BRendeiroCV.Experiencias_Flow.exeperienciaBabel.mvc$model", "BRendeiroCV.Experiencias_Flow.exeperienciaCapgemnini.mvc$model", "BRendeiroCV.Experiencias_Flow.exeperienciaNoesis.mvc$model"], function (OutSystems, BRendeiroCVModel, BRendeiroCV_Experiencias_Flow_exeperienciaTrilogy_mvcModel, BRendeiroCV_Experiencias_Flow_exeperienciaBabel_mvcModel, BRendeiroCV_Experiencias_Flow_exeperienciaCapgemnini_mvcModel, BRendeiroCV_Experiencias_Flow_exeperienciaNoesis_mvcModel) {
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
Model._hasValidationWidgetsValue = undefined;
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = (((BRendeiroCV_Experiencias_Flow_exeperienciaTrilogy_mvcModel.hasValidationWidgets || BRendeiroCV_Experiencias_Flow_exeperienciaBabel_mvcModel.hasValidationWidgets) || BRendeiroCV_Experiencias_Flow_exeperienciaCapgemnini_mvcModel.hasValidationWidgets) || BRendeiroCV_Experiencias_Flow_exeperienciaNoesis_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.VariablelessViewModel);
return new OS.Model.ModelFactory(Model, "Experiencias_Flow.experiencias");
});
define("BRendeiroCV.Experiencias_Flow.experiencias.mvc$view", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "react", "OutSystems/ReactView/Main", "BRendeiroCV.Experiencias_Flow.experiencias.mvc$model", "BRendeiroCV.Experiencias_Flow.experiencias.mvc$controller", "BRendeiroCV.clientVariables", "OutSystems/ReactWidgets/Main", "BRendeiroCV.Experiencias_Flow.exeperienciaTrilogy.mvc$view", "BRendeiroCV.Experiencias_Flow.exeperienciaBabel.mvc$view", "BRendeiroCV.Experiencias_Flow.exeperienciaCapgemnini.mvc$view", "BRendeiroCV.Experiencias_Flow.exeperienciaNoesis.mvc$view"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, React, OSView, BRendeiroCV_Experiencias_Flow_experiencias_mvc_model, BRendeiroCV_Experiencias_Flow_experiencias_mvc_controller, BRendeiroCVClientVariables, OSWidgets, BRendeiroCV_Experiencias_Flow_exeperienciaTrilogy_mvc_view, BRendeiroCV_Experiencias_Flow_exeperienciaBabel_mvc_view, BRendeiroCV_Experiencias_Flow_exeperienciaCapgemnini_mvc_view, BRendeiroCV_Experiencias_Flow_exeperienciaNoesis_mvc_view) {
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
        View.displayName = "Experiencias_Flow.experiencias";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [BRendeiroCV_Experiencias_Flow_exeperienciaTrilogy_mvc_view, BRendeiroCV_Experiencias_Flow_exeperienciaBabel_mvc_view, BRendeiroCV_Experiencias_Flow_exeperienciaCapgemnini_mvc_view, BRendeiroCV_Experiencias_Flow_exeperienciaNoesis_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BRendeiroCV_Experiencias_Flow_experiencias_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BRendeiroCV_Experiencias_Flow_experiencias_mvc_controller;
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
style: "flex2",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(BRendeiroCV_Experiencias_Flow_exeperienciaTrilogy_mvc_view, {
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
uuid: "1",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "flex2",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(BRendeiroCV_Experiencias_Flow_exeperienciaBabel_mvc_view, {
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
uuid: "3",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "flex2",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(BRendeiroCV_Experiencias_Flow_exeperienciaCapgemnini_mvc_view, {
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "flex2",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(BRendeiroCV_Experiencias_Flow_exeperienciaNoesis_mvc_view, {
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
uuid: "7",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BRendeiroCV.Experiencias_Flow.experiencias.mvc$controller", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "BRendeiroCV.languageResources", "BRendeiroCV.clientVariables", "BRendeiroCV.Experiencias_Flow.experiencias.mvc$translationsResources", "BRendeiroCV.Experiencias_Flow.experiencias.mvc$debugger"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, BRendeiroCVLanguageResources, BRendeiroCVClientVariables, BRendeiroCV_Experiencias_Flow_experiencias_mvc_TranslationsResources, BRendeiroCV_Experiencias_Flow_experiencias_mvc_Debugger) {
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
Controller.prototype.translationResources = BRendeiroCV_Experiencias_Flow_experiencias_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:wJ+9upxlB0qhN6v634KrBQ:/NRWebFlows.wJ+9upxlB0qhN6v634KrBQ:lT52hO3o4DXO_WqYZjpTLg", "BRendeiroCV", "Experiencias_Flow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:_20iVAGdikOmxwfJosWpaw:/NRWebFlows.wJ+9upxlB0qhN6v634KrBQ/NodesShownInESpaceTree._20iVAGdikOmxwfJosWpaw:jBrF8S3Rqo83ybmMBo6ScA", "BRendeiroCV", "experiencias", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:_20iVAGdikOmxwfJosWpaw", callContext.id);
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:wJ+9upxlB0qhN6v634KrBQ", callContext.id);
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

define("BRendeiroCV.Experiencias_Flow.experiencias.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("BRendeiroCV.Experiencias_Flow.experiencias.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
