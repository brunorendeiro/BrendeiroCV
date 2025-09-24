define("BRendeiroCV.Experiencias_Flow.exeperienciaCapgemnini.mvc$model", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "OutSystemsUI.Navigation.TimelineItem.mvc$model"], function (OutSystems, BRendeiroCVModel, OutSystemsUI_Navigation_TimelineItem_mvcModel) {
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
return new OS.Model.ModelFactory(Model, "Experiencias_Flow.exeperienciaCapgemnini");
});
define("BRendeiroCV.Experiencias_Flow.exeperienciaCapgemnini.mvc$view", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "react", "OutSystems/ReactView/Main", "BRendeiroCV.Experiencias_Flow.exeperienciaCapgemnini.mvc$model", "BRendeiroCV.Experiencias_Flow.exeperienciaCapgemnini.mvc$controller", "BRendeiroCV.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI.Navigation.TimelineItem.mvc$view"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, React, OSView, BRendeiroCV_Experiencias_Flow_exeperienciaCapgemnini_mvc_model, BRendeiroCV_Experiencias_Flow_exeperienciaCapgemnini_mvc_controller, BRendeiroCVClientVariables, OSWidgets, OutSystemsUI_Navigation_TimelineItem_mvc_view) {
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
        View.displayName = "Experiencias_Flow.exeperienciaCapgemnini";
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
                return BRendeiroCV_Experiencias_Flow_exeperienciaCapgemnini_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BRendeiroCV_Experiencias_Flow_exeperienciaCapgemnini_mvc_controller;
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
url: "https://github.com/brunorendeiro/cv_icons/blob/main/companyLogs/capgemini_logo.jpeg?raw=true",
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
text: ["Capgemini"],
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
}, "Senior OutSystems Developer"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("8O__o38vakaYZs9dqiYZrQ#Value", "Janeiro 2022 - Janeiro 2023 · 1 ano 1 mes"))))), React.createElement(OSWidgets.Container, {
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
}, $text(getTranslation("nVX3wyOoqkG8I29oX0aoig#Value", "Jan 2022"))), React.createElement(OSWidgets.Container, {
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
}, $text(getTranslation("t09rTOaEKEKMLI1klawTCA#Value", "Jan 2023"))))];
}),
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
style: "round-avatar",
type: /*External*/ 1,
url: "https://github.com/brunorendeiro/cv_icons/blob/main/companyLogs/schneider.jpeg?raw=true",
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
title: new PlaceholderContent(function () {
return ["Schneider Electric"];
}),
content: new PlaceholderContent(function () {
return [$text(getTranslation("WfKHMBLbi0OZDXaJmmNp5w#Value", "Vários projetos tradicionais para a Schneider Electric.")), React.createElement(OSWidgets.Container, {
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
}, $text(getTranslation("zgf0EWvz_UyQ6vhm3J6uoA#Value", "Aplicação Air-Freight: Desenvolvimento de novas funcionalidades e requisitos para uma aplicação tradicional de transporte aéreo, com foco no cálculo do preço das encomendas entregues por avião.")))), React.createElement(OSWidgets.Container, {
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
}, $text(getTranslation("iIJ3zuSQ4U2juORFA220Og#Value", "Aplicação Interna de Armazéns: Manutenção, evolução e melhoria de performance de uma aplicação tradicional relacionada com a organização de armazéns e contentores.")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("iNFpPQGBhka1z8bxJgFR9g#Value", "Outras Aplicações Internas: Desenvolvimento de novos requisitos e suporte a várias aplicações tradicionais internas da empresa.")))))];
}),
right: PlaceholderContent.Empty
},
_dependencies: []
}), React.createElement(OutSystemsUI_Navigation_TimelineItem_mvc_view, {
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
uuid: "22",
alias: "2"
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
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("im7tp4y8mky3wIPkUIJIPg#Value", "Jan 2022"))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, "- "), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("iTp7cHHY806WUjVVxD+dSA#Value", "Jan 2022"))))];
}),
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
style: "round-avatar",
type: /*External*/ 1,
url: "https://github.com/brunorendeiro/cv_icons/blob/main/companyLogs/bancoPortugal.jpeg?raw=true",
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
title: new PlaceholderContent(function () {
return ["Banco de Portugal"];
}),
content: new PlaceholderContent(function () {
return [$text(getTranslation("cZUHgE3Hb0yHy9wjJEkLHg#Value", "Responsável, durante um mês, por reforçar a equipa existente, assegurando a resolução de todos os tickets de bugs em aberto."))];
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
define("BRendeiroCV.Experiencias_Flow.exeperienciaCapgemnini.mvc$controller", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "BRendeiroCV.languageResources", "BRendeiroCV.clientVariables", "BRendeiroCV.Experiencias_Flow.exeperienciaCapgemnini.mvc$translationsResources", "BRendeiroCV.Experiencias_Flow.exeperienciaCapgemnini.mvc$debugger"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, BRendeiroCVLanguageResources, BRendeiroCVClientVariables, BRendeiroCV_Experiencias_Flow_exeperienciaCapgemnini_mvc_TranslationsResources, BRendeiroCV_Experiencias_Flow_exeperienciaCapgemnini_mvc_Debugger) {
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
Controller.prototype.translationResources = BRendeiroCV_Experiencias_Flow_exeperienciaCapgemnini_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:wJ+9upxlB0qhN6v634KrBQ:/NRWebFlows.wJ+9upxlB0qhN6v634KrBQ:lT52hO3o4DXO_WqYZjpTLg", "BRendeiroCV", "Experiencias_Flow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:769JS1Wax0W217KD92QSKA:/NRWebFlows.wJ+9upxlB0qhN6v634KrBQ/NodesShownInESpaceTree.769JS1Wax0W217KD92QSKA:2s4qtG376ovPsn24Iepueg", "BRendeiroCV", "exeperienciaCapgemnini", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:769JS1Wax0W217KD92QSKA", callContext.id);
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

define("BRendeiroCV.Experiencias_Flow.exeperienciaCapgemnini.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"d02zlaFxSkKNABF38rQJ4w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"2GY_Ydv++02lOZzDUN4H3Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"EE4HHDDclEaipN5yoyKgbg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"h3Z+A8ljSE+pN9PlbeZmLg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"ScGtIRrH+Ua7Qweaqegr0g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"u9AZITGtIk2EDLzf24dCRw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"OvqP7ZXaKU2FweMNvS8ZlA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"SV7OfFWlMUKK0lYurClgVA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"QsEU_WjFskuBMuOi1Jy4mA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"ruafq6INGEmZYEbMmo632w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("BRendeiroCV.Experiencias_Flow.exeperienciaCapgemnini.mvc$translationsResources", ["exports", "BRendeiroCV.Experiencias_Flow.exeperienciaCapgemnini.mvc$translationsResources.en-GB"], function (exports, BRendeiroCV_Experiencias_Flow_exeperienciaCapgemnini_mvc_translationsResources_enGB) {
return {
"en-GB": {
"translations": BRendeiroCV_Experiencias_Flow_exeperienciaCapgemnini_mvc_translationsResources_enGB,
"isRTL": false
}
};
});
define("BRendeiroCV.Experiencias_Flow.exeperienciaCapgemnini.mvc$translationsResources.en-GB", [], function () {
return {
"cZUHgE3Hb0yHy9wjJEkLHg#Value": "Responsible, for one month, for reinforcing the existing team and ensuring the resolution of all open bug tickets.",
"iTp7cHHY806WUjVVxD+dSA#Value": "Jan 2022",
"im7tp4y8mky3wIPkUIJIPg#Value": "Jan 2022",
"iNFpPQGBhka1z8bxJgFR9g#Value": "Other Internal Applications: Development of new requirements and support for several traditional internal applications of the company.",
"iIJ3zuSQ4U2juORFA220Og#Value": "Warehouse Internal Application: Maintenance, evolution, and performance improvement of a traditional application related to the organization of warehouses and containers.",
"zgf0EWvz_UyQ6vhm3J6uoA#Value": "Air-Freight Application: Development of new features and requirements for a traditional air-freight application, focusing on the calculation of the price of orders delivered by plane.",
"WfKHMBLbi0OZDXaJmmNp5w#Value": "Several traditional projects for Schneider Electric.",
"t09rTOaEKEKMLI1klawTCA#Value": "Jan 2023",
"nVX3wyOoqkG8I29oX0aoig#Value": "Jan 2022",
"8O__o38vakaYZs9dqiYZrQ#Value": "January 2022 – January 2023 · 1 year 1 month"
};
});
