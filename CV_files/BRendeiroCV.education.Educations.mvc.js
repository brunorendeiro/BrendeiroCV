define("BRendeiroCV.education.Educations.mvc$model", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.education.educationBlock.mvc$model"], function (OutSystems, BRendeiroCVModel, BRendeiroCV_education_educationBlock_mvcModel) {
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
Model._hasValidationWidgetsValue = BRendeiroCV_education_educationBlock_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.VariablelessViewModel);
return new OS.Model.ModelFactory(Model, "education.Educations");
});
define("BRendeiroCV.education.Educations.mvc$view", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "react", "OutSystems/ReactView/Main", "BRendeiroCV.education.Educations.mvc$model", "BRendeiroCV.education.Educations.mvc$controller", "BRendeiroCV.clientVariables", "OutSystems/ReactWidgets/Main", "BRendeiroCV.education.educationBlock.mvc$view"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, React, OSView, BRendeiroCV_education_Educations_mvc_model, BRendeiroCV_education_Educations_mvc_controller, BRendeiroCVClientVariables, OSWidgets, BRendeiroCV_education_educationBlock_mvc_view) {
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
        View.displayName = "education.Educations";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [BRendeiroCV_education_educationBlock_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BRendeiroCV_education_Educations_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BRendeiroCV_education_Educations_mvc_controller;
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
style: "flex-wrap: wrap;"
},
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
style: "flex2 padding-base",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(BRendeiroCV_education_educationBlock_mvc_view, {
inputs: {
Imagem: "https://github.com/brunorendeiro/cv_icons/blob/main/companyLogs/estig.jpeg?raw=true",
dataTimeline: "2011-2016",
Curso: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("_wU7184T0U6+gS6pSjVeGQ#Value.-546545815.1", "Licenciatura em Engenharia Informática"),
Title: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("kFMS9FTud025+8mRJl+5tw#Value.973485236.1", "Escola Superior de Tecnologia e Gestão (ESTIG), Instituto Politécnico de Beja")
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
placeholders: {
placeholder1: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "ul",
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, "💻Programação (Java, Python, .NET, C#, C++, HTML, MATLAB)")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, "🗄️Redes de Computadores e Bases de Dados")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, "🌐Desenvolvimento Web & Engenharia de Software")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, "🔢Projetos: algoritmos em Python, aplicações académicas em Java, rede empresarial"))))];
})
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "flex2 padding-base",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(BRendeiroCV_education_educationBlock_mvc_view, {
inputs: {
Title: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("2QPoFjLcmE6sgq5otz79OQ#Value.723276431.1", "Escola Secundária de Aljustrel"),
Imagem: "https://github.com/brunorendeiro/cv_icons/blob/main/companyLogs/aljustrel.jpeg?raw=true",
Curso: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("TCoQbuKwhEC59+bnHZ7KZA#Value.-1954033093.1", "Curso Técnico de Informática"),
dataTimeline: "2006 - 2009"
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
uuid: "14",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder1: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "ul",
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, "📝Aplicações Office (Word, Excel) e Pascal")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, "🔌Montagem física de redes (cabling e configuração)")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
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
}, "🖥️Manutenção e reparação de PCs (hardware)")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
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
}, "🌍Projetos: criação e manutenção de rede local escolar")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
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
}, "🎨Edição de imagens e criação de páginas web com Adobe / Dreamweaver"))))];
})
},
_dependencies: []
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BRendeiroCV.education.Educations.mvc$controller", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "BRendeiroCV.languageResources", "BRendeiroCV.clientVariables", "BRendeiroCV.education.Educations.mvc$translationsResources", "BRendeiroCV.education.Educations.mvc$debugger"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, BRendeiroCVLanguageResources, BRendeiroCVClientVariables, BRendeiroCV_education_Educations_mvc_TranslationsResources, BRendeiroCV_education_Educations_mvc_Debugger) {
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
Controller.prototype.translationResources = BRendeiroCV_education_Educations_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:izx9Pi4mKUyn1Sw992yVbA:/NRWebFlows.izx9Pi4mKUyn1Sw992yVbA:oJBtO05bbDOScyFe+vHFGw", "BRendeiroCV", "education", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:lsrihTqa4E2p0cwCzS46gA:/NRWebFlows.izx9Pi4mKUyn1Sw992yVbA/NodesShownInESpaceTree.lsrihTqa4E2p0cwCzS46gA:Dq7NJdT8lnNeo1r2bQoyag", "BRendeiroCV", "Educations", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:lsrihTqa4E2p0cwCzS46gA", callContext.id);
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:izx9Pi4mKUyn1Sw992yVbA", callContext.id);
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

define("BRendeiroCV.education.Educations.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"0CwgQGLU0Ei1T3l8jlVqqw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder1"));
})(varBag.model, idService);
}
},
"aSLxiF86nkGOwy60J9ocdQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder1"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("BRendeiroCV.education.Educations.mvc$translationsResources", ["exports", "BRendeiroCV.education.Educations.mvc$translationsResources.en-GB"], function (exports, BRendeiroCV_education_Educations_mvc_translationsResources_enGB) {
return {
"en-GB": {
"translations": BRendeiroCV_education_Educations_mvc_translationsResources_enGB,
"isRTL": false
}
};
});
define("BRendeiroCV.education.Educations.mvc$translationsResources.en-GB", [], function () {
return {
"TCoQbuKwhEC59+bnHZ7KZA#Value.-1954033093.1": "Technical Course in Computer Science",
"2QPoFjLcmE6sgq5otz79OQ#Value.723276431.1": "Aljustrel Secondary School",
"kFMS9FTud025+8mRJl+5tw#Value.973485236.1": "School of Technology and Management (ESTIG), Polytechnic Institute of Beja",
"_wU7184T0U6+gS6pSjVeGQ#Value.-546545815.1": "Bachelor’s Degree in Computer Engineering"
};
});
