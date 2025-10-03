define("BRendeiroCV.Pessoais.PessoaisBlock.mvc$model", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model"], function (OutSystems, BRendeiroCVModel) {
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
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return false;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.VariablelessViewModel);
return new OS.Model.ModelFactory(Model, "Pessoais.PessoaisBlock");
});
define("BRendeiroCV.Pessoais.PessoaisBlock.mvc$view", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "react", "OutSystems/ReactView/Main", "BRendeiroCV.Pessoais.PessoaisBlock.mvc$model", "BRendeiroCV.Pessoais.PessoaisBlock.mvc$controller", "BRendeiroCV.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, React, OSView, BRendeiroCV_Pessoais_PessoaisBlock_mvc_model, BRendeiroCV_Pessoais_PessoaisBlock_mvc_controller, BRendeiroCVClientVariables, OSWidgets) {
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
        View.displayName = "Pessoais.PessoaisBlock";
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
                return BRendeiroCV_Pessoais_PessoaisBlock_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BRendeiroCV_Pessoais_PessoaisBlock_mvc_controller;
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
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-weight: bold;"
},
value: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("TsoMouUUFU2h55AFoB+8+A#ValueExpression.-580572480.1", "CV Online"),
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
}, $text(getTranslation("9Z7Haoz8Y0iXwZwiZh2Esg#Value", "Página desenvolvida em OutSystems para apresentar o meu currículo de forma interativa e responsiva.")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-base",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-weight: bold;"
},
value: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("+aRI5fVOUUqkVzc03GtUzQ#ValueExpression.1057584941.1", "Aplicação do meu Casamento (WPA)"),
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("SmFEB4SXcEWoOwEbcLvUPg#Value", "Aplicação web progressiva (WPA) desenvolvida em OutSystems para apoiar a gestão do meu casamento."))), React.createElement(OSWidgets.AdvancedHtml, {
tag: "ul",
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-weight: bold;"
},
value: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("KCr2_yf60EeWn58R_uHSEg#ValueExpression.236277800.1", "Integração com Google Maps:"),
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}), $text(getTranslation("0h6VlvCW0ESbaMNeZmW9jA#Value", " convidados podiam abrir diretamente a navegação GPS até ao local do casamento;")))), React.createElement(OSWidgets.Container, {
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
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-weight: bold;"
},
value: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("kiXKLiVur0O3ICUJXwikHw#ValueExpression.-1412176518.1", "Gestão de convidados:"),
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}), $text(getTranslation("9VW_WmmhNU2iFNe382p1dQ#Value", " sistema de registo onde os convidados indicavam o número de pessoas, sendo depois enviado um email automático via SendGrid (SMTP) para mim e para a noiva com essa informação;")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-weight: bold;"
},
value: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("3vCWTEE5uEqsjPh0Tjl2tQ#ValueExpression.2117681757.1", "Partilha de fotos e vídeo:"),
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}), $text(getTranslation("LaywS4ouiUe6Pb15SC2s5Q#Value", " pré-visualizações guardadas em OutSystems e conteúdos completos armazenados em AWS S3, incluindo o vídeo do pedido de casamento, que podia ser visualizado pelos convidados;")))), React.createElement(OSWidgets.Container, {
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
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-weight: bold;"
},
value: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("UF8bmL5fR0a8Km6a2Q8oKg#ValueExpression.-1237352665.1", "Contador em tempo real:"),
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}), $text(getTranslation("LTRi0QF79UuTGCSSkTETxA#Value", " cronómetro que mostrava quanto tempo faltava para o evento;")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
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
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-weight: bold;"
},
value: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("xDWG3BN39UeBGhqYUt69fQ#ValueExpression.-1613836601.1", "Mural de mensagens:"),
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}), $text(getTranslation("dygxbhMHZUi4mFXHOF3Sow#Value", " espaço onde os convidados podiam deixar mensagens personalizadas para os noivos;")))), React.createElement(OSWidgets.Container, {
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
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-weight: bold;"
},
value: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("qJPhJpVPEUG4Vu64nAGs9g#ValueExpression.-113819763.1", "Experiência mobile-first:"),
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}), $text(getTranslation("zSnw+ib1CUGi2ALJjYLkBw#Value", " a aplicação podia ser instalada como uma app nativa no telemóvel (WPA)."))))), React.createElement(OSWidgets.Image, {
extendedProperties: {
"loading": "lazy"
},
gridProperties: {
classes: "ThemeGrid_Width2 ThemeGrid_MarginGutter"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/BRendeiroCV.appCasamento.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BRendeiroCV.Pessoais.PessoaisBlock.mvc$controller", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "BRendeiroCV.languageResources", "BRendeiroCV.clientVariables", "BRendeiroCV.Pessoais.PessoaisBlock.mvc$translationsResources", "BRendeiroCV.Pessoais.PessoaisBlock.mvc$debugger"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, BRendeiroCVLanguageResources, BRendeiroCVClientVariables, BRendeiroCV_Pessoais_PessoaisBlock_mvc_TranslationsResources, BRendeiroCV_Pessoais_PessoaisBlock_mvc_Debugger) {
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
Controller.prototype.translationResources = BRendeiroCV_Pessoais_PessoaisBlock_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:V4gRoIQTzUWy7qOPrm+XDQ:/NRWebFlows.V4gRoIQTzUWy7qOPrm+XDQ:bc9JhS9s1fg7wHYfvP8g6A", "BRendeiroCV", "Pessoais", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:2WnwchoFZkyok2STbd+g7w:/NRWebFlows.V4gRoIQTzUWy7qOPrm+XDQ/NodesShownInESpaceTree.2WnwchoFZkyok2STbd+g7w:4oSMRs3OIhgm38qoLjMwjQ", "BRendeiroCV", "PessoaisBlock", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:2WnwchoFZkyok2STbd+g7w", callContext.id);
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:V4gRoIQTzUWy7qOPrm+XDQ", callContext.id);
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

define("BRendeiroCV.Pessoais.PessoaisBlock.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("BRendeiroCV.Pessoais.PessoaisBlock.mvc$translationsResources", ["exports", "BRendeiroCV.Pessoais.PessoaisBlock.mvc$translationsResources.en-GB"], function (exports, BRendeiroCV_Pessoais_PessoaisBlock_mvc_translationsResources_enGB) {
return {
"en-GB": {
"translations": BRendeiroCV_Pessoais_PessoaisBlock_mvc_translationsResources_enGB,
"isRTL": false
}
};
});
define("BRendeiroCV.Pessoais.PessoaisBlock.mvc$translationsResources.en-GB", [], function () {
return {
"zSnw+ib1CUGi2ALJjYLkBw#Value": " the app could be installed on smartphones as a native-like application (PWA).",
"qJPhJpVPEUG4Vu64nAGs9g#ValueExpression.-113819763.1": "Mobile-first experience:",
"dygxbhMHZUi4mFXHOF3Sow#Value": " a space where guests could leave personalized messages for the couple;",
"xDWG3BN39UeBGhqYUt69fQ#ValueExpression.-1613836601.1": "Message board:",
"LTRi0QF79UuTGCSSkTETxA#Value": " timer showing the remaining time until the event;",
"UF8bmL5fR0a8Km6a2Q8oKg#ValueExpression.-1237352665.1": "Real-time countdown:",
"LaywS4ouiUe6Pb15SC2s5Q#Value": "previews stored in OutSystems and full content hosted on AWS S3, including the engagement proposal video, which could be watched by the guests;",
"3vCWTEE5uEqsjPh0Tjl2tQ#ValueExpression.2117681757.1": "Photo and video sharing:",
"9VW_WmmhNU2iFNe382p1dQ#Value": " registration system where invitees indicated the number of attendees, with an automatic email notification via SendGrid (SMTP) sent to me and my wife;",
"kiXKLiVur0O3ICUJXwikHw#ValueExpression.-1412176518.1": "Guest management:",
"0h6VlvCW0ESbaMNeZmW9jA#Value": " guests could open GPS navigation directly to the wedding venue;",
"KCr2_yf60EeWn58R_uHSEg#ValueExpression.236277800.1": "Google Maps integration:",
"SmFEB4SXcEWoOwEbcLvUPg#Value": "Progressive Web Application (PWA) developed in OutSystems to support my wedding management.",
"+aRI5fVOUUqkVzc03GtUzQ#ValueExpression.1057584941.1": "My Wedding App (PWA)",
"9Z7Haoz8Y0iXwZwiZh2Esg#Value": "Web Application developed in OutSystems to present my CV in an interactive and responsive way.",
"TsoMouUUFU2h55AFoB+8+A#ValueExpression.-580572480.1": "Interactive CV"
};
});
