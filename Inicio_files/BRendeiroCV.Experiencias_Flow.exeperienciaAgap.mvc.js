define("BRendeiroCV.Experiencias_Flow.exeperienciaAgap.mvc$model", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "OutSystemsUI.Navigation.TimelineItem.mvc$model"], function (OutSystems, BRendeiroCVModel, OutSystemsUI_Navigation_TimelineItem_mvcModel) {
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
Model._hasValidationWidgetsValue = OutSystemsUI_Navigation_TimelineItem_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.VariablelessViewModel);
return new OS.Model.ModelFactory(Model, "Experiencias_Flow.exeperienciaAgap");
});
define("BRendeiroCV.Experiencias_Flow.exeperienciaAgap.mvc$view", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "react", "OutSystems/ReactView/Main", "BRendeiroCV.Experiencias_Flow.exeperienciaAgap.mvc$model", "BRendeiroCV.Experiencias_Flow.exeperienciaAgap.mvc$controller", "BRendeiroCV.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI.Navigation.TimelineItem.mvc$view"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, React, OSView, BRendeiroCV_Experiencias_Flow_exeperienciaAgap_mvc_model, BRendeiroCV_Experiencias_Flow_exeperienciaAgap_mvc_controller, BRendeiroCVClientVariables, OSWidgets, OutSystemsUI_Navigation_TimelineItem_mvc_view) {
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
        View.displayName = "Experiencias_Flow.exeperienciaAgap";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_Navigation_TimelineItem_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BRendeiroCV_Experiencias_Flow_exeperienciaAgap_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BRendeiroCV_Experiencias_Flow_exeperienciaAgap_mvc_controller;
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
style: "display-flex vertical-align",
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
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
"loading": "lazy",
style: "padding: 12px;"
},
style: "round-avatar comp",
type: /*External*/ 1,
url: "https://github.com/brunorendeiro/cv_icons/blob/main/companyLogs/agap2it_portugal_logo.jpeg?raw=true",
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
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
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["agap2IT Portugal"],
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("5jMMn9K3AUumwkhFbnwAfg#Value", "Consultor de TI"))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("BkzWKGNyOUeYiqGxYWkQhw#Value", "Novembro 2017 - Novembro 2018 · 1 ano 1 mes"))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Navigation_TimelineItem_mvc_view, {
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
uuid: "9",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("gbfdNTk4nUKGJULU2AKUCA#Value", "Nov 2017"))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, "- "), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("zS6fMfDuLEWkRp_gFI0iJg#Value", "Nov 2018"))))];
}),
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
"loading": "lazy"
},
style: "round-avatar",
type: /*External*/ 1,
url: "https://github.com/brunorendeiro/cv_icons/blob/main/companyLogs/asseco_pst_logo.jpeg?raw=true",
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
title: new PlaceholderContent(function () {
return ["Asseco PST"];
}),
content: new PlaceholderContent(function () {
return ["Timereport (.NET):", React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("5sKrhk8Kz06Pw+zIGKqQdA#Value", "Desenvolvimento de novas funcionalidades (algumas em Angular) e manutenção evolutiva;")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("BGTKv5dyKkeVaa1vjj+kFQ#Value", "Criação de integrações com SAP."))))), $text(getTranslation("If_2k6mVuUyJs+EQYLzE6g#Value", "Gestor de Relatórios de Pagamentos (OutSystems):")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("wd5cwNBx1E65ixOjHMxrLg#Value", "Desenvolvimento de uma aplicação em OutSystems para gestão de relatórios de pagamentos, incluindo controlo de dívidas e registo de pagamentos;")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("GfyOJ7Uu_Em7qCqzSs8T5Q#Value", "Implementação da capacidade de receber e processar ficheiros CSV;")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("hcAO6Rlp5k+AUd+QCBGpMw#Value", "Integração com uma base de dados externa, assegurando a comunicação entre sistemas;")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("r+TgiD8TmUCF6ji0HMmhEQ#Value", "Apoio à automatização e simplificação dos processos de reporting financeiro.")))))];
}),
right: PlaceholderContent.Empty
},
_dependencies: []
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BRendeiroCV.Experiencias_Flow.exeperienciaAgap.mvc$controller", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "BRendeiroCV.languageResources", "BRendeiroCV.clientVariables", "BRendeiroCV.Experiencias_Flow.exeperienciaAgap.mvc$translationsResources", "BRendeiroCV.Experiencias_Flow.exeperienciaAgap.mvc$debugger"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, BRendeiroCVLanguageResources, BRendeiroCVClientVariables, BRendeiroCV_Experiencias_Flow_exeperienciaAgap_mvc_TranslationsResources, BRendeiroCV_Experiencias_Flow_exeperienciaAgap_mvc_Debugger) {
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
Controller.prototype.translationResources = BRendeiroCV_Experiencias_Flow_exeperienciaAgap_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:wJ+9upxlB0qhN6v634KrBQ:/NRWebFlows.wJ+9upxlB0qhN6v634KrBQ:lT52hO3o4DXO_WqYZjpTLg", "BRendeiroCV", "Experiencias_Flow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:XJAPBq6yP0CWR5GwkIiyog:/NRWebFlows.wJ+9upxlB0qhN6v634KrBQ/NodesShownInESpaceTree.XJAPBq6yP0CWR5GwkIiyog:HOBHkSOUSezAnrncp_DT6A", "BRendeiroCV", "exeperienciaAgap", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:XJAPBq6yP0CWR5GwkIiyog", callContext.id);
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

define("BRendeiroCV.Experiencias_Flow.exeperienciaAgap.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"O2w9+T3rdEqpu9eGeI+bsg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"ysS8DMv83EKVpTT950XyLw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"LC1P1JeDMEmribe1ZwzSHQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"I7Greyv5XUi39wO2AxPY8w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"+879Wrj71EG2qidyWSqbqw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("BRendeiroCV.Experiencias_Flow.exeperienciaAgap.mvc$translationsResources", ["exports", "BRendeiroCV.Experiencias_Flow.exeperienciaAgap.mvc$translationsResources.en-GB"], function (exports, BRendeiroCV_Experiencias_Flow_exeperienciaAgap_mvc_translationsResources_enGB) {
return {
"en-GB": {
"translations": BRendeiroCV_Experiencias_Flow_exeperienciaAgap_mvc_translationsResources_enGB,
"isRTL": false
}
};
});
define("BRendeiroCV.Experiencias_Flow.exeperienciaAgap.mvc$translationsResources.en-GB", [], function () {
return {
"r+TgiD8TmUCF6ji0HMmhEQ#Value": "Support in automating and simplifying financial reporting processes.",
"hcAO6Rlp5k+AUd+QCBGpMw#Value": "Integration with an external database, ensuring seamless communication between systems;",
"GfyOJ7Uu_Em7qCqzSs8T5Q#Value": "Implementation of the capability to receive and process CSV files;",
"wd5cwNBx1E65ixOjHMxrLg#Value": "Development of an OutSystems application for managing payment reports, including debt control and payment registration;",
"If_2k6mVuUyJs+EQYLzE6g#Value": "Payment Reports Manager (OutSystems):",
"BGTKv5dyKkeVaa1vjj+kFQ#Value": "Creation of SAP integrations.",
"5sKrhk8Kz06Pw+zIGKqQdA#Value": "Development of new features (some in Angular) and evolutionary maintenance;",
"zS6fMfDuLEWkRp_gFI0iJg#Value": "Nov 2018",
"gbfdNTk4nUKGJULU2AKUCA#Value": "Nov 2017",
"BkzWKGNyOUeYiqGxYWkQhw#Value": "November 2017 – November 2018 · 1 year 1 month",
"5jMMn9K3AUumwkhFbnwAfg#Value": "IT Consultant"
};
});
