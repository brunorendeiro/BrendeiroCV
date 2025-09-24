define("BRendeiroCV.Experiencias_Flow.exeperienciaTrilogy.mvc$model", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "OutSystemsUI.Navigation.TimelineItem.mvc$model"], function (OutSystems, BRendeiroCVModel, OutSystemsUI_Navigation_TimelineItem_mvcModel) {
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
return new OS.Model.ModelFactory(Model, "Experiencias_Flow.exeperienciaTrilogy");
});
define("BRendeiroCV.Experiencias_Flow.exeperienciaTrilogy.mvc$view", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "react", "OutSystems/ReactView/Main", "BRendeiroCV.Experiencias_Flow.exeperienciaTrilogy.mvc$model", "BRendeiroCV.Experiencias_Flow.exeperienciaTrilogy.mvc$controller", "BRendeiroCV.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI.Navigation.TimelineItem.mvc$view"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, React, OSView, BRendeiroCV_Experiencias_Flow_exeperienciaTrilogy_mvc_model, BRendeiroCV_Experiencias_Flow_exeperienciaTrilogy_mvc_controller, BRendeiroCVClientVariables, OSWidgets, OutSystemsUI_Navigation_TimelineItem_mvc_view) {
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
        View.displayName = "Experiencias_Flow.exeperienciaTrilogy";
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
                return BRendeiroCV_Experiencias_Flow_exeperienciaTrilogy_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BRendeiroCV_Experiencias_Flow_exeperienciaTrilogy_mvc_controller;
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
"loading": "lazy"
},
style: "round-avatar comp",
type: /*External*/ 1,
url: "https://raw.githubusercontent.com/brunorendeiro/cv_icons/refs/heads/main/companyLogs/trilogy_international_ltd_logo.jpeg",
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
text: ["Trilogy International, A Korn Ferry Company"],
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
}, $text(getTranslation("GXSzgB3BM0uw72zfJeF8Lg#Value", "Julho 2024 - Presente"))))), React.createElement(OSWidgets.Container, {
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
}, $text(getTranslation("kUEm+L5xsE2oRIi3CD_0Lw#Value", "Jul 2024 "))), React.createElement(OSWidgets.Container, {
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
}, $text(getTranslation("ez9sq_Of8kqsIaluRw6lQg#Value", "Presente"))))];
}),
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
style: "round-avatar",
type: /*External*/ 1,
url: "https://github.com/brunorendeiro/cv_icons/blob/main/companyLogs/western_union_logo.jpeg?raw=true",
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["Western Union"],
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
content: new PlaceholderContent(function () {
return [$text(getTranslation("xsrZGquV6kGebJfZlLGJHQ#Value", "Projeto: Desenvolvimento da aplicação móvel “Digital Bank” para a Western Union.\nDescrição: Integração na equipa de User Experience, com foco em aspetos visuais da aplicação móvel. Responsável por:")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
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
}, $text(getTranslation("JztyoGAfz0qjQH+_UyTtig#Value", "Adicionar e integrar novos plugins (mParticle, Appsflyer, AppShield);")))), React.createElement(OSWidgets.Container, {
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
}, $text(getTranslation("M7gIMLhZVUObZ3rsGlJYhg#Value", "Analisar e corrigir erros na aplicação;")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("aWMEjs4exUekWIVQdHA3cA#Value", "Criar novos widgets reutilizáveis;")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("X0__Zj5o7kGJubsDKrphdQ#Value", "Alterar flows para facilitar a usabilidade do utilizador;")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("nyRydBw1DEieAMK32WQV4w#Value", "Reformular e redesenhar ecrãs para melhorar a experiência do utilizador;")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("N1C9M0Ym60245SNQ8sMSGw#Value", "Acompanhar as passagens para produção da equipa.")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-base",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("https://play.google.com/store/apps/details/Western_Union_Digital_Banking?id=com.westernunion.wuplus.eu&hl=pt_PT&pli=1", {}),
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, "WU Digital Bank App")))];
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
define("BRendeiroCV.Experiencias_Flow.exeperienciaTrilogy.mvc$controller", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "BRendeiroCV.languageResources", "BRendeiroCV.clientVariables", "BRendeiroCV.Experiencias_Flow.exeperienciaTrilogy.mvc$translationsResources", "BRendeiroCV.Experiencias_Flow.exeperienciaTrilogy.mvc$debugger"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, BRendeiroCVLanguageResources, BRendeiroCVClientVariables, BRendeiroCV_Experiencias_Flow_exeperienciaTrilogy_mvc_TranslationsResources, BRendeiroCV_Experiencias_Flow_exeperienciaTrilogy_mvc_Debugger) {
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
Controller.prototype.translationResources = BRendeiroCV_Experiencias_Flow_exeperienciaTrilogy_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:wJ+9upxlB0qhN6v634KrBQ:/NRWebFlows.wJ+9upxlB0qhN6v634KrBQ:lT52hO3o4DXO_WqYZjpTLg", "BRendeiroCV", "Experiencias_Flow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:2L3qdvBMOESX3X_PdyAnoA:/NRWebFlows.wJ+9upxlB0qhN6v634KrBQ/NodesShownInESpaceTree.2L3qdvBMOESX3X_PdyAnoA:rvbGoYfx7j1aMp787bl3zQ", "BRendeiroCV", "exeperienciaTrilogy", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:2L3qdvBMOESX3X_PdyAnoA", callContext.id);
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

define("BRendeiroCV.Experiencias_Flow.exeperienciaTrilogy.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"u3X4iwIA302v0NVGKBBjeg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"PGtGXT5KNkGOJWjEH3uplw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"RQtQxuoubEiATGFlYtwGMQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"EncdClkNeU6pCLL2yHPkrQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"h4JjMOlgpkyuwYGlSVPNeA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("BRendeiroCV.Experiencias_Flow.exeperienciaTrilogy.mvc$translationsResources", ["exports", "BRendeiroCV.Experiencias_Flow.exeperienciaTrilogy.mvc$translationsResources.en-GB"], function (exports, BRendeiroCV_Experiencias_Flow_exeperienciaTrilogy_mvc_translationsResources_enGB) {
return {
"en-GB": {
"translations": BRendeiroCV_Experiencias_Flow_exeperienciaTrilogy_mvc_translationsResources_enGB,
"isRTL": false
}
};
});
define("BRendeiroCV.Experiencias_Flow.exeperienciaTrilogy.mvc$translationsResources.en-GB", [], function () {
return {
"N1C9M0Ym60245SNQ8sMSGw#Value": "Monitor and support the team’s production deployments.",
"nyRydBw1DEieAMK32WQV4w#Value": "Redesign and restructure screens to improve the user experience;",
"X0__Zj5o7kGJubsDKrphdQ#Value": "Modify flows to improve user usability;",
"aWMEjs4exUekWIVQdHA3cA#Value": "Create new reusable widgets;",
"M7gIMLhZVUObZ3rsGlJYhg#Value": "Analyze and fix application errors;",
"JztyoGAfz0qjQH+_UyTtig#Value": "Add and integrate new plugins (mParticle, Appsflyer, AppShield);",
"xsrZGquV6kGebJfZlLGJHQ#Value": "Project: Development of the “Digital Bank” mobile application for Western Union. Description: Member of the User Experience team, focusing on the visual aspects of the mobile application. Responsible for:",
"ez9sq_Of8kqsIaluRw6lQg#Value": "Present",
"kUEm+L5xsE2oRIi3CD_0Lw#Value": "Jul 2024",
"GXSzgB3BM0uw72zfJeF8Lg#Value": "July 2024 – Present"
};
});
