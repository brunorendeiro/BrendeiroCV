define("BRendeiroCV.Experiencias_Flow.exeperienciaBabel.mvc$model", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "OutSystemsUI.Navigation.TimelineItem.mvc$model"], function (OutSystems, BRendeiroCVModel, OutSystemsUI_Navigation_TimelineItem_mvcModel) {
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
return new OS.Model.ModelFactory(Model, "Experiencias_Flow.exeperienciaBabel");
});
define("BRendeiroCV.Experiencias_Flow.exeperienciaBabel.mvc$view", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "react", "OutSystems/ReactView/Main", "BRendeiroCV.Experiencias_Flow.exeperienciaBabel.mvc$model", "BRendeiroCV.Experiencias_Flow.exeperienciaBabel.mvc$controller", "BRendeiroCV.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI.Navigation.TimelineItem.mvc$view"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, React, OSView, BRendeiroCV_Experiencias_Flow_exeperienciaBabel_mvc_model, BRendeiroCV_Experiencias_Flow_exeperienciaBabel_mvc_controller, BRendeiroCVClientVariables, OSWidgets, OutSystemsUI_Navigation_TimelineItem_mvc_view) {
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
        View.displayName = "Experiencias_Flow.exeperienciaBabel";
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
                return BRendeiroCV_Experiencias_Flow_exeperienciaBabel_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BRendeiroCV_Experiencias_Flow_exeperienciaBabel_mvc_controller;
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
url: "https://github.com/brunorendeiro/cv_icons/blob/main/companyLogs/kinetit_logo.jpeg?raw=true",
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
text: ["KinetIT - a Babel company"],
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
}, "Senior OutSystems Developer & Tech Lead"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("inL7OcEcUUmxkBoKkgOUaA#Value", "Janeiro 2023 - Junho 2024 · 1 ano 6 meses"))))), React.createElement(OSWidgets.Container, {
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
}, $text(getTranslation("TicPkDoKpE2VRU7W147WBw#Value", "Abr 2024"))), React.createElement(OSWidgets.Container, {
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
}, $text(getTranslation("SeUtB9IfgUaeaeZvGtsUUA#Value", "Jun 2024"))))];
}),
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
style: "round-avatar",
type: /*External*/ 1,
url: "https://github.com/brunorendeiro/cv_icons/blob/main/companyLogs/PRR.jpg?raw=true",
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
text: ["Recuperar Portugal: PRR"],
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
content: new PlaceholderContent(function () {
return [$text(getTranslation("oXZycYsvCUmOzxUh+J21jQ#Value", "Projeto: Desenvolvimento e gestão da aplicação SRTD, no âmbito do programa “Recuperar Portugal: PRR”.\nDescrição: Participação ativa no desenho, implementação e manutenção da aplicação SRTD, garantindo a gestão e monitorização eficientes do Plano de Recuperação e Resiliência (PRR) em Portugal."))];
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
uuid: "17",
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
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("pfm5QJVt_0SqMTzRR08hcg#Value", "Nov 2023"))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, "- "), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("NC5N2EI3TEKsendrTw6Adw#Value", "Abr 2024"))))];
}),
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
style: "round-avatar",
type: /*External*/ 1,
url: "https://github.com/brunorendeiro/cv_icons/blob/main/companyLogs/volkswagen_group_logo.jpeg?raw=true",
_idProps: {
service: idService,
uuid: "22"
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
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["Volkswagen Group (Germany)"],
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
content: new PlaceholderContent(function () {
return [$text(getTranslation("RUMg_+G2UEmSugIf8pj+OQ#Value", "Projeto: Desenvolvimento e liderança técnica da app ADMS (AeroDynamic Management System) para a Volkswagen.\nDescrição: Funções de Tech Lead, com foco na correção e evolução de uma aplicação já iniciada, bem como na implementação de novas funcionalidades. Responsável por:")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
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
}, $text(getTranslation("iqpcoYPVYUuKljbfKtvbyQ#Value", "Garantir a ma nutenção e melhoria contínua da aplicação existente, assegurando estabilidade e correção de erros;")))), React.createElement(OSWidgets.Container, {
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
}, $text(getTranslation("PvcJvpiVakqEbbw0Gssj5w#Value", "Limpar e corrigir todos os problemas identificados no OutSystems Architecture Dashboard, garantindo conformidade com boas práticas;")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("VpxSCxRHHkGnA6sRdqxCMw#Value", "Adicionar novos conteúdos e evoluções funcionais ao sistema de marcação (booking) de testes em túnel de vento;")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("phmNkWbevE+wVW0n1n04Zg#Value", "Apoiar a integração de dados recebidos das APIs dos túneis de vento, de modo a melhorar os processos de validação;")), React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("AF6x1pJk1UqkvfQqW5urig#Value", "Criar uma aplicação WPA para dispositivos Zebra utilizados nas operações de campo, permitindo ao pessoal de operação consultar a agenda dos túneis em tempo real;"))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("IQ1c8fAz4k+7ctq4QVYPLA#Value", "Desenvolver uma página dinâmica para mupis, apresentando a calendarização das próximas 3 horas de testes.")))))];
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
uuid: "37",
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
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("7y1CzdofHkWd6UyDSYIp+A#Value", "Set 2023"))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}, "- "), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("Rh5DjCVxIUGiMCu1tvO9pQ#Value", "Nov 2023"))))];
}),
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
style: "round-avatar",
type: /*External*/ 1,
url: "https://github.com/brunorendeiro/cv_icons/blob/main/companyLogs/nos.jpeg?raw=true",
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "font-weight: bold;"
},
visible: true,
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}, "NOS")];
}),
content: new PlaceholderContent(function () {
return [$text(getTranslation("JR3gQ3l3uUKtq_MH3iqhjg#Value", "Projeto: Desenvolvimento de novas funcionalidades em duas aplicações relacionadas com a venda de pacotes, para a NOS.\nDescrição: Responsável por implementar novos requisitos nas aplicações existentes, assegurando a evolução contínua da solução e o suporte ao processo de comercialização de pacotes."))];
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
uuid: "44",
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
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("tgw_QRbppUifkvK4gOo_FQ#Value", "Abr 2023"))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}, "- "), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("QTTRGHxaski0VxP3s5mLkA#Value", "Set 2023"))))];
}),
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
style: "round-avatar",
type: /*External*/ 1,
url: "https://github.com/brunorendeiro/cv_icons/blob/main/companyLogs/LuzSaude.jpeg?raw=true",
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "font-weight: bold;"
},
visible: true,
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Luz Saúde")];
}),
content: new PlaceholderContent(function () {
return [$text(getTranslation("Xmp4jwzjXUC0qriN2Wqesg#Value", "Projeto: Desenvolvimento de aplicações para gestão e monitorização do sistema de senhas nos hospitais da Luz Saúde.\nDescrição:")), React.createElement(OSWidgets.Container, {
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
}, $text(getTranslation("XsRJSWXIEkS+9SAfCYABbw#Value", "Desenvolver uma aplicação para monitorizar todo o fluxo das senhas, desde a sua emissão nos sistemas até ao momento do atendimento do paciente pelo médico;")))), React.createElement(OSWidgets.Container, {
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
}, $text(getTranslation("QbDOJVX7LUiyNCf6SI_38Q#Value", "Criar uma aplicação de front-end para exibição em ecrãs (live) do chamamento de senhas em cada unidade hospitalar.")))))];
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
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "58"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("_BqfwcnlmkaZso7m+_lPmw#Value", "Jan 2023"))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "59"
},
_widgetRecordProvider: widgetsRecordProvider
}, "- "), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("HRbTMsv_Q0mEIFgXJs2D5A#Value", "Abr 2023"))))];
}),
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
style: "round-avatar",
type: /*External*/ 1,
url: "https://github.com/brunorendeiro/cv_icons/blob/main/companyLogs/kinetit_logo.jpeg?raw=true",
_idProps: {
service: idService,
uuid: "61"
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
uuid: "62"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["GSA"],
_idProps: {
service: idService,
uuid: "63"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
content: new PlaceholderContent(function () {
return [$text(getTranslation("7zFu3cHP6keK7r5rCvsgOA#Value", "Projeto: Desenvolvimento de novas funcionalidades no sistema de reporte de tempos e ausências e no sistema de controlo de projetos, integrados numa suite de aplicações para gestão da empresa e dos seus colaboradores (GSA).\nDescrição: Responsável por implementar evoluções que suportam a gestão de assiduidade, ausências e controlo de projetos, garantindo a integração com o ecossistema de aplicações de gestão interna."))];
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
uuid: "64",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: PlaceholderContent.Empty,
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
style: "round-avatar",
type: /*External*/ 1,
url: "https://github.com/brunorendeiro/cv_icons/blob/main/companyLogs/kinetit_logo.jpeg?raw=true",
_idProps: {
service: idService,
uuid: "65"
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
uuid: "66"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: [$text(getTranslation("gwgZijWZf0uVIriHWm3qeg#Value", "Outros projetos: apoio em diferentes iniciativas OutSystems e web, nomeadamente:"))],
_idProps: {
service: idService,
uuid: "67"
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
uuid: "68"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "69"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "70"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("KHEYWlJFa0OBKofNMEaErA#Value", "Colaboração na criação do POC “Electric Charging Control System” em OutSystems;")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "71"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "72"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("L3up+Wgb0U+SvDtBOM2d1Q#Value", "Apoio na atualização do site")), React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
marginLeft: "0"
},
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("https://www.concursocantofrp.com/", {}),
visible: true,
_idProps: {
service: idService,
uuid: "73"
},
_widgetRecordProvider: widgetsRecordProvider
}, " https://www.concursocantofrp.com/"))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-base",
visible: true,
_idProps: {
service: idService,
uuid: "74"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "li",
_idProps: {
service: idService,
uuid: "75"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("42y7MUfW0EuBMGOcsQJ4og#Value", "Alterações e manutenção na página institucional da KinetIT através de ")), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-style: italic; font-weight: bold;"
},
text: ["WebForms."],
_idProps: {
service: idService,
uuid: "76"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
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
define("BRendeiroCV.Experiencias_Flow.exeperienciaBabel.mvc$controller", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "BRendeiroCV.languageResources", "BRendeiroCV.clientVariables", "BRendeiroCV.Experiencias_Flow.exeperienciaBabel.mvc$translationsResources", "BRendeiroCV.Experiencias_Flow.exeperienciaBabel.mvc$debugger"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, BRendeiroCVLanguageResources, BRendeiroCVClientVariables, BRendeiroCV_Experiencias_Flow_exeperienciaBabel_mvc_TranslationsResources, BRendeiroCV_Experiencias_Flow_exeperienciaBabel_mvc_Debugger) {
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
Controller.prototype.translationResources = BRendeiroCV_Experiencias_Flow_exeperienciaBabel_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:wJ+9upxlB0qhN6v634KrBQ:/NRWebFlows.wJ+9upxlB0qhN6v634KrBQ:lT52hO3o4DXO_WqYZjpTLg", "BRendeiroCV", "Experiencias_Flow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:tPjIjXZwhEGJO1DkI_HWyg:/NRWebFlows.wJ+9upxlB0qhN6v634KrBQ/NodesShownInESpaceTree.tPjIjXZwhEGJO1DkI_HWyg:4q5x6IFlyIszXRaeiAvNbA", "BRendeiroCV", "exeperienciaBabel", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:tPjIjXZwhEGJO1DkI_HWyg", callContext.id);
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

define("BRendeiroCV.Experiencias_Flow.exeperienciaBabel.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"U1rz2Gkj0US8SNcaF31dSw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"WcdiQhGoak6D5kxLjWrr8Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"MF69GTY9c0KeeNKsGbprbQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"K3PGH3nwcUa7CeUcCJzWXw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"WkLm5vry9kmRa8nWobCA+Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"SY3c22xU6kWjlawMU0SfBg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"swke0kRuE0mK5ZSqAwbOJQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"SUvScwTEDU6h_D0PiIKL_w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"d1zsDYE5R0KL+3OOm2AZNw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"qYpnoD2dCUinLB8QeSTW1g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"EJzHvl3O+0anOEa+pQcsag": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"XMK+OWhz5EuzMfXsb_FjtA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"kIsLZUzYk0ipkwrgdoQDow": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"cxgQ99Qiek2Bg9X+chN9uQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"R64Xk2MsTkGbej5F+XYAHg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"KvnG+sWR60WjunixaRVrWg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"q3oOsVyvHESVTgxix5PS0g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"pgFCkwYvQ0KWUklbegY40A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"qpcWeRzmb0aX3X4l8wWIxg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"lN11X8ft10emlopLt7yvvw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"rtPUSrAFrUKt+OJqLEYoMQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"wOOcgtpEPEWVzZqd6r_28Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"jn3Aq0QRr06IX02LWrLAAQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"uOfU99HdZEm4DrdxBrWmUQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"dkoLpVAgQ0qQZFawZs5TnA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"bu3rnNqumku4sUM6xtshoQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"DqBbZy5CqUm0IFPGGDZCgg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"tUoCQzRzckiyK1f64Y69eA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"t3Q8yxKDWEKkgR8wBxxD_g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"By9ljuOfn0CToc_kvUOv8w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("BRendeiroCV.Experiencias_Flow.exeperienciaBabel.mvc$translationsResources", ["exports", "BRendeiroCV.Experiencias_Flow.exeperienciaBabel.mvc$translationsResources.en-GB"], function (exports, BRendeiroCV_Experiencias_Flow_exeperienciaBabel_mvc_translationsResources_enGB) {
return {
"en-GB": {
"translations": BRendeiroCV_Experiencias_Flow_exeperienciaBabel_mvc_translationsResources_enGB,
"isRTL": false
}
};
});
define("BRendeiroCV.Experiencias_Flow.exeperienciaBabel.mvc$translationsResources.en-GB", [], function () {
return {
"42y7MUfW0EuBMGOcsQJ4og#Value": "Changes and maintenance of the KinetIT corporate webpage using ",
"L3up+Wgb0U+SvDtBOM2d1Q#Value": "Assistance in updating the website",
"KHEYWlJFa0OBKofNMEaErA#Value": "Contribution to the creation of the POC “Electric Charging Control System” in OutSystems;",
"gwgZijWZf0uVIriHWm3qeg#Value": "Other projects: support in several OutSystems and web initiatives, including:",
"7zFu3cHP6keK7r5rCvsgOA#Value": "Project: Development of new features in the time and absences reporting system and in the project control system, integrated into a suite of applications for managing the company and its employees (GSA). Description: Responsible for implementing enhancements to support attendance, absence management, and project control, ensuring seamless integration within the internal management application ecosystem.",
"HRbTMsv_Q0mEIFgXJs2D5A#Value": "Apr 2023",
"_BqfwcnlmkaZso7m+_lPmw#Value": "Jan 2023",
"QbDOJVX7LUiyNCf6SI_38Q#Value": "Create a front-end application to display, in real time, the ticket calls on screens in each hospital unit.",
"XsRJSWXIEkS+9SAfCYABbw#Value": "Develop an application to monitor the entire ticket flow, from its issuance in the systems to the moment the patient is attended by the doctor;",
"Xmp4jwzjXUC0qriN2Wqesg#Value": "Project: Development of applications for the management and monitoring of the ticketing system in Luz Saúde hospitals. Description:",
"QTTRGHxaski0VxP3s5mLkA#Value": "Sep 2023",
"tgw_QRbppUifkvK4gOo_FQ#Value": "Apr 2023",
"JR3gQ3l3uUKtq_MH3iqhjg#Value": "Project: Development of new features in two applications related to package sales for NOS. Description: Responsible for implementing new requirements in the existing applications, ensuring the continuous evolution of the solution and supporting the package commercialization process.",
"Rh5DjCVxIUGiMCu1tvO9pQ#Value": "Nov 2023",
"7y1CzdofHkWd6UyDSYIp+A#Value": "Sep 2023",
"IQ1c8fAz4k+7ctq4QVYPLA#Value": "Develop a dynamic page for mupis, displaying the scheduling of the next 3 hours of tests.",
"AF6x1pJk1UqkvfQqW5urig#Value": "Create a WPA application for Zebra devices used in field operations, allowing staff to consult the wind tunnel schedule in real time;",
"phmNkWbevE+wVW0n1n04Zg#Value": "Support the integration of data received from wind tunnel APIs to improve validation processes;",
"VpxSCxRHHkGnA6sRdqxCMw#Value": "Add new content and functional evolutions to the booking system for wind tunnel tests;",
"PvcJvpiVakqEbbw0Gssj5w#Value": "Clean and fix all issues identified in the OutSystems Architecture Dashboard, ensuring compliance with best practices;",
"iqpcoYPVYUuKljbfKtvbyQ#Value": "Ensure the maintenance and continuous improvement of the existing application, guaranteeing stability and error correction;",
"RUMg_+G2UEmSugIf8pj+OQ#Value": "Project: Development and technical leadership of the ADMS (AeroDynamic Management System) application for Volkswagen. Description: Performed Tech Lead functions, focusing on fixing and evolving an already initiated application, as well as implementing new functionalities. Responsible for:",
"NC5N2EI3TEKsendrTw6Adw#Value": "Apr 2024",
"pfm5QJVt_0SqMTzRR08hcg#Value": "Nov 2023",
"oXZycYsvCUmOzxUh+J21jQ#Value": "Project: Development and management of the SRTD application, within the scope of the “Recuperar Portugal: PRR” program. Description: Active participation in the design, implementation, and maintenance of the SRTD application, ensuring efficient management and monitoring of Portugal’s Recovery and Resilience Plan (PRR).",
"SeUtB9IfgUaeaeZvGtsUUA#Value": "Jun 2024",
"TicPkDoKpE2VRU7W147WBw#Value": "Apr 2024",
"inL7OcEcUUmxkBoKkgOUaA#Value": "January 2023 – June 2024 · 1 year 6 months"
};
});
