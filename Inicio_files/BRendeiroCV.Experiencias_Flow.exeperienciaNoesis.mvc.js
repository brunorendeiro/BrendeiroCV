define("BRendeiroCV.Experiencias_Flow.exeperienciaNoesis.mvc$model", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "OutSystemsUI.Navigation.TimelineItem.mvc$model"], function (OutSystems, BRendeiroCVModel, OutSystemsUI_Navigation_TimelineItem_mvcModel) {
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
return new OS.Model.ModelFactory(Model, "Experiencias_Flow.exeperienciaNoesis");
});
define("BRendeiroCV.Experiencias_Flow.exeperienciaNoesis.mvc$view", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "react", "OutSystems/ReactView/Main", "BRendeiroCV.Experiencias_Flow.exeperienciaNoesis.mvc$model", "BRendeiroCV.Experiencias_Flow.exeperienciaNoesis.mvc$controller", "BRendeiroCV.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI.Navigation.TimelineItem.mvc$view"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, React, OSView, BRendeiroCV_Experiencias_Flow_exeperienciaNoesis_mvc_model, BRendeiroCV_Experiencias_Flow_exeperienciaNoesis_mvc_controller, BRendeiroCVClientVariables, OSWidgets, OutSystemsUI_Navigation_TimelineItem_mvc_view) {
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
        View.displayName = "Experiencias_Flow.exeperienciaNoesis";
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
                return BRendeiroCV_Experiencias_Flow_exeperienciaNoesis_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BRendeiroCV_Experiencias_Flow_exeperienciaNoesis_mvc_controller;
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
style: "padding: 10px;"
},
style: "round-avatar comp",
type: /*External*/ 1,
url: "https://github.com/brunorendeiro/cv_icons/blob/main/companyLogs/noesis_portugal_logo.jpeg?raw=true",
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
text: ["Noesis"],
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
}, "OutSystems Developer"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("TQDZ9ea2EkKpsLVb39yo+w#Value", "Dezembro 2018 - Dezembro 2021 · 3 anos 1 mes"))))), React.createElement(OSWidgets.Container, {
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
}, $text(getTranslation("amWcQZNHXkOTHYVz27mp7A#Value", "Fev 2020"))), React.createElement(OSWidgets.Container, {
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
}, $text(getTranslation("zQSKB1KVkEG0tC4xc9nWNg#Value", "Dez 2021"))))];
}),
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
style: "round-avatar",
type: /*External*/ 1,
url: "https://github.com/brunorendeiro/cv_icons/blob/main/companyLogs/galp_logo.jpeg?raw=true",
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
title: new PlaceholderContent(function () {
return ["Galp"];
}),
content: new PlaceholderContent(function () {
return [$text(getTranslation("z7Q8dsiUA0uM1AYdW6RnjQ#Value", "Projeto: Desenvolvimento de raiz da aplicação “3 Minutos”, uma aplicação aberta para contratação de novos contratos de gás e eletricidade para habitação, com um backoffice para gestão da aplicação e dos contratos, e uma aplicação de simulação para realizar simulações de contratos.")), React.createElement(OSWidgets.Container, {
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
}, $text(getTranslation("eY+4YXu03USYhqeNNJJ6RQ#Value", "O backoffice permitia visualizar todas as chamadas à API, responsável por executar jobs de 15 em 15 minutos para envio dos contratos ao sistema principal;")))), React.createElement(OSWidgets.Container, {
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
}, $text(getTranslation("I+4ekY_LIE+GRjiw2r4ySw#Value", "Possibilidade de alterar alguns textos e valores fixos diretamente no backoffice, facilitando a gestão e manutenção da aplicação 3 Minutos;"))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-base",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("https://sols.galp.com/Minute_FE/", {}),
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Galp - 3 Minutos")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-base",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("https://sols.galp.com/MinuteSimulator_FE/", {}),
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Simulador de Poupança"))];
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
uuid: "24",
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
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("XLvOtRD5vkSFxO9zWtvjmg#Value", "Jan 2020"))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, "- "), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("nymhocmDvE+kEeB_j7YLQw#Value", "Fev 2020"))))];
}),
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
style: "round-avatar",
type: /*External*/ 1,
url: "https://github.com/brunorendeiro/cv_icons/blob/main/companyLogs/oney.jpeg?raw=true",
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
title: new PlaceholderContent(function () {
return ["Oney IT"];
}),
content: new PlaceholderContent(function () {
return [$text(getTranslation("OwGCt7LZekO+gQ4j+6UIWA#Value", "Criação de um relatório em OutSystems sobre análise de infraestruturas, abrangendo segurança, boas práticas e performance."))];
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
uuid: "30",
alias: "3"
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
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("9BJ7CgkUv0e4K4blIhzvUw#Value", "Out 2019"))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, "- "), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("_Vh80eCFbECka5CZXoyZbw#Value", "Out 2019"))))];
}),
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
style: "round-avatar",
type: /*External*/ 1,
url: "https://github.com/brunorendeiro/cv_icons/blob/main/companyLogs/medicare.jpeg?raw=true",
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
title: new PlaceholderContent(function () {
return ["Medicare"];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("mJpMV8xHAUOYjHliaikn2g#Value", "Apoio no arranque da infraestrutura de OutSystems na empresa;")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("Y4p+8figSUacuYX4dgCenw#Value", "Criação de páginas para mostrar a comunicação com as APIs REST existentes;")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("JZ3A9WPTqECJFRJGOcsd6Q#Value", "Desenvolvimento de uma página para identificação do tipo de cartões do utilizador através do NIF;")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("BNMeTtSrAkqsKNiFVYnWCg#Value", "Criação de uma nova réplica da página de autenticação de utilizadores finais, para permitir autenticação via LDAP.")))))];
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
uuid: "45",
alias: "4"
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
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("zRZRw30ZnkWxqdILtD+xdw#Value", "Fev 2019"))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
}, "- "), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("VOfYd0bwREyCFi1cGT2fOA#Value", "Set 2019"))))];
}),
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
style: "round-avatar",
type: /*External*/ 1,
url: "https://github.com/brunorendeiro/cv_icons/blob/main/companyLogs/parques_de_sintra_logo.jpeg?raw=true",
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
title: new PlaceholderContent(function () {
return [$text(getTranslation("6SV+YFf9NkK95Phkjlcvsg#Value", "Parques de Sintra – Monte da Lua (PSML) | Departamento de IT"))];
}),
content: new PlaceholderContent(function () {
return [$text(getTranslation("aTZYLljhXEOP8o28LqVnhA#Value", "Desenvolvimento de uma aplicação web B2B para venda de bilhetes a outras empresas, com dois backoffices:")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("uQSO0foPXECSdIPiQxeKGA#Value", "Um para gestão de museus, monumentos, espetáculos e bilhetes;")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("UCJvev7dykeG+jkn2bxIFQ#Value", "Outro para gestão das empresas envolvidas na revenda de bilhetes.")))))];
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
uuid: "56",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: PlaceholderContent.Empty,
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
style: "round-avatar",
type: /*External*/ 1,
url: "https://github.com/brunorendeiro/cv_icons/blob/main/companyLogs/noesis_portugal_logo.jpeg?raw=true",
_idProps: {
service: idService,
uuid: "57"
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
uuid: "58"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: [$text(getTranslation("HpSd+tmcXUuI130LAGa8XQ#Value", "Outros projetos: apoio em diferentes iniciativas internas"))],
_idProps: {
service: idService,
uuid: "59"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
})];
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
define("BRendeiroCV.Experiencias_Flow.exeperienciaNoesis.mvc$controller", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "BRendeiroCV.languageResources", "BRendeiroCV.clientVariables", "BRendeiroCV.Experiencias_Flow.exeperienciaNoesis.mvc$translationsResources", "BRendeiroCV.Experiencias_Flow.exeperienciaNoesis.mvc$debugger"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, BRendeiroCVLanguageResources, BRendeiroCVClientVariables, BRendeiroCV_Experiencias_Flow_exeperienciaNoesis_mvc_TranslationsResources, BRendeiroCV_Experiencias_Flow_exeperienciaNoesis_mvc_Debugger) {
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
Controller.prototype.translationResources = BRendeiroCV_Experiencias_Flow_exeperienciaNoesis_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:wJ+9upxlB0qhN6v634KrBQ:/NRWebFlows.wJ+9upxlB0qhN6v634KrBQ:lT52hO3o4DXO_WqYZjpTLg", "BRendeiroCV", "Experiencias_Flow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:aHzWo2JMBEaCEjfkiBH2Ag:/NRWebFlows.wJ+9upxlB0qhN6v634KrBQ/NodesShownInESpaceTree.aHzWo2JMBEaCEjfkiBH2Ag:8trdDjj_NkgJu+mnTJJ4Gg", "BRendeiroCV", "exeperienciaNoesis", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:aHzWo2JMBEaCEjfkiBH2Ag", callContext.id);
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

define("BRendeiroCV.Experiencias_Flow.exeperienciaNoesis.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"EKChtvYj7E6FHmdN2r7O8g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"y+fELMIwFUqRKV7oDr1Xdg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"XBa79jyNOE2Z5SYHXq9gCA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"dc5dqi5aEEy556xeV0D6Kw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"PgxmNWpjjk+bKL3125kG8Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"q8diFfj38063Y9V8TR9whw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"t8EfT2TG7EWWkSDl9kBTOA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"6BLAk09hEEmLQQZOgQiDkQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"xVCcrzS1W0Sye5MiQnYAlg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"o7v_+9rR8UWSNqZaa_jX+A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"kiWgvw31o0ic8bxE6CttXg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"TMKnyJUbZkmiYo7WFHtEtg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"+y2iEln7Kk2YCUImQ_k+hQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"RiiRRhIhIkeJSiacS+4vgw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"zt9rBXIcZUiD350iWzzMfQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"Ign_iJ0OSEOqksF1kbVK_A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"48cV4PlAx0yNiReHoTol7g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"1su2dEDcyUO7izX+Q+kHvg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"wkMjp8RJVUuB0OD6Cu8Yrg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"v6O5Mhw7vUuQNlbrBAl+Zw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"azrvyhcwdkqFD0Xm8DUqWw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"a5nII8nOl0uCJMsWqNFtjA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"foy27Rb1mkOs5gA1LVIbXQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"fp9BVyvYP0i_pg+CE32t4A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"C8cgQMhpJkyqbrWTdqDq8w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("BRendeiroCV.Experiencias_Flow.exeperienciaNoesis.mvc$translationsResources", ["exports", "BRendeiroCV.Experiencias_Flow.exeperienciaNoesis.mvc$translationsResources.en-GB"], function (exports, BRendeiroCV_Experiencias_Flow_exeperienciaNoesis_mvc_translationsResources_enGB) {
return {
"en-GB": {
"translations": BRendeiroCV_Experiencias_Flow_exeperienciaNoesis_mvc_translationsResources_enGB,
"isRTL": false
}
};
});
define("BRendeiroCV.Experiencias_Flow.exeperienciaNoesis.mvc$translationsResources.en-GB", [], function () {
return {
"HpSd+tmcXUuI130LAGa8XQ#Value": "Other projects: support in various internal initiatives.",
"UCJvev7dykeG+jkn2bxIFQ#Value": "Another for managing the companies involved in ticket reselling.",
"uQSO0foPXECSdIPiQxeKGA#Value": "One for managing museums, monuments, shows, and tickets;",
"aTZYLljhXEOP8o28LqVnhA#Value": "Development of a B2B web application for selling tickets to other businesses, with two backoffices:",
"6SV+YFf9NkK95Phkjlcvsg#Value": "Parques de Sintra – Monte da Lua (PSML) | IT Department",
"VOfYd0bwREyCFi1cGT2fOA#Value": "Sep 2019",
"zRZRw30ZnkWxqdILtD+xdw#Value": "Feb 2019",
"BNMeTtSrAkqsKNiFVYnWCg#Value": "Development of a new replica of the end-user authentication page, enabling authentication via LDAP.",
"JZ3A9WPTqECJFRJGOcsd6Q#Value": "Creation of a page to identify the type of user cards through the NIF;",
"Y4p+8figSUacuYX4dgCenw#Value": "Development of pages to display communication with existing REST APIs;",
"mJpMV8xHAUOYjHliaikn2g#Value": "Support in the launch of the company’s OutSystems infrastructure;",
"_Vh80eCFbECka5CZXoyZbw#Value": "Oct 2019",
"9BJ7CgkUv0e4K4blIhzvUw#Value": "Oct 2019",
"OwGCt7LZekO+gQ4j+6UIWA#Value": "Creation of an OutSystems report on infrastructure analysis, covering security, best practices, and performance.",
"nymhocmDvE+kEeB_j7YLQw#Value": "Feb 2020",
"XLvOtRD5vkSFxO9zWtvjmg#Value": "Jan 2020",
"I+4ekY_LIE+GRjiw2r4ySw#Value": "Possibility to modify certain texts and fixed values directly in the backoffice, facilitating the management and maintenance of the 3 Minutos application.",
"eY+4YXu03USYhqeNNJJ6RQ#Value": "The backoffice allowed the visualization of all API calls, responsible for executing jobs every 15 minutes to send the contracts to the main system.",
"z7Q8dsiUA0uM1AYdW6RnjQ#Value": "Project: Development from scratch of the “3 Minutos” application, an open application for contracting new gas and electricity contracts for households, with a backoffice for managing the application and contracts, and a simulation application for performing contract simulations.",
"zQSKB1KVkEG0tC4xc9nWNg#Value": "Dec 2021",
"amWcQZNHXkOTHYVz27mp7A#Value": "Feb 2020",
"TQDZ9ea2EkKpsLVb39yo+w#Value": "December 2018 – December 2021 · 3 years 1 month"
};
});
