define("BRendeiroCV.MainFlow.Home.mvc$model", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.HomeBlocks.DownloadPopUp.mvc$model", "BRendeiroCV.Layouts.LayoutTopMenu.mvc$model", "BRendeiroCV.Common.Menu.mvc$model", "BRendeiroCV.HomeBlocks.home_Block.mvc$model", "OutSystemsUI.Content.Accordion.mvc$model", "OutSystemsUI.Content.AccordionItem.mvc$model", "BRendeiroCV.Experiencias_Flow.experiencias.mvc$model", "BRendeiroCV.Estagios.Estagios.mvc$model", "BRendeiroCV.Pessoais.PessoaisBlock.mvc$model", "BRendeiroCV.certifications.certificacoes.mvc$model", "BRendeiroCV.education.Educations.mvc$model", "BRendeiroCV.skills.skills.mvc$model", "OutSystemsUI.Interaction.FloatingActions.mvc$model", "OutSystemsUI.Interaction.FloatingActionsItem.mvc$model", "BRendeiroCV.Common.Footer.mvc$model"], function (OutSystems, BRendeiroCVModel, BRendeiroCV_HomeBlocks_DownloadPopUp_mvcModel, BRendeiroCV_Layouts_LayoutTopMenu_mvcModel, BRendeiroCV_Common_Menu_mvcModel, BRendeiroCV_HomeBlocks_home_Block_mvcModel, OutSystemsUI_Content_Accordion_mvcModel, OutSystemsUI_Content_AccordionItem_mvcModel, BRendeiroCV_Experiencias_Flow_experiencias_mvcModel, BRendeiroCV_Estagios_Estagios_mvcModel, BRendeiroCV_Pessoais_PessoaisBlock_mvcModel, BRendeiroCV_certifications_certificacoes_mvcModel, BRendeiroCV_education_Educations_mvcModel, BRendeiroCV_skills_skills_mvcModel, OutSystemsUI_Interaction_FloatingActions_mvcModel, OutSystemsUI_Interaction_FloatingActionsItem_mvcModel, BRendeiroCV_Common_Footer_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ShowDownload_PopUp", "showDownload_PopUpVar", "ShowDownload_PopUp", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsReady", "isReadyVar", "IsReady", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
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
Model._hasValidationWidgetsValue = ((((((((((((((BRendeiroCV_HomeBlocks_DownloadPopUp_mvcModel.hasValidationWidgets || BRendeiroCV_Layouts_LayoutTopMenu_mvcModel.hasValidationWidgets) || BRendeiroCV_Common_Menu_mvcModel.hasValidationWidgets) || BRendeiroCV_HomeBlocks_home_Block_mvcModel.hasValidationWidgets) || OutSystemsUI_Content_Accordion_mvcModel.hasValidationWidgets) || OutSystemsUI_Content_AccordionItem_mvcModel.hasValidationWidgets) || BRendeiroCV_Experiencias_Flow_experiencias_mvcModel.hasValidationWidgets) || BRendeiroCV_Estagios_Estagios_mvcModel.hasValidationWidgets) || BRendeiroCV_Pessoais_PessoaisBlock_mvcModel.hasValidationWidgets) || BRendeiroCV_certifications_certificacoes_mvcModel.hasValidationWidgets) || BRendeiroCV_education_Educations_mvcModel.hasValidationWidgets) || BRendeiroCV_skills_skills_mvcModel.hasValidationWidgets) || OutSystemsUI_Interaction_FloatingActions_mvcModel.hasValidationWidgets) || OutSystemsUI_Interaction_FloatingActionsItem_mvcModel.hasValidationWidgets) || BRendeiroCV_Common_Footer_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "MainFlow.Home");
});
define("BRendeiroCV.MainFlow.Home.mvc$view", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "react", "OutSystems/ReactView/Main", "BRendeiroCV.MainFlow.Home.mvc$model", "BRendeiroCV.MainFlow.Home.mvc$controller", "BRendeiroCV.clientVariables", "OutSystems/ReactWidgets/Main", "BRendeiroCV.HomeBlocks.DownloadPopUp.mvc$view", "BRendeiroCV.Layouts.LayoutTopMenu.mvc$view", "BRendeiroCV.Common.Menu.mvc$view", "BRendeiroCV.HomeBlocks.home_Block.mvc$view", "OutSystemsUI.Content.Accordion.mvc$view", "OutSystemsUI.Content.AccordionItem.mvc$view", "BRendeiroCV.Experiencias_Flow.experiencias.mvc$view", "BRendeiroCV.Estagios.Estagios.mvc$view", "BRendeiroCV.Pessoais.PessoaisBlock.mvc$view", "BRendeiroCV.certifications.certificacoes.mvc$view", "BRendeiroCV.education.Educations.mvc$view", "BRendeiroCV.skills.skills.mvc$view", "OutSystemsUI.Interaction.FloatingActions.mvc$view", "OutSystemsUI.Interaction.FloatingActionsItem.mvc$view", "BRendeiroCV.Common.Footer.mvc$view"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, React, OSView, BRendeiroCV_MainFlow_Home_mvc_model, BRendeiroCV_MainFlow_Home_mvc_controller, BRendeiroCVClientVariables, OSWidgets, BRendeiroCV_HomeBlocks_DownloadPopUp_mvc_view, BRendeiroCV_Layouts_LayoutTopMenu_mvc_view, BRendeiroCV_Common_Menu_mvc_view, BRendeiroCV_HomeBlocks_home_Block_mvc_view, OutSystemsUI_Content_Accordion_mvc_view, OutSystemsUI_Content_AccordionItem_mvc_view, BRendeiroCV_Experiencias_Flow_experiencias_mvc_view, BRendeiroCV_Estagios_Estagios_mvc_view, BRendeiroCV_Pessoais_PessoaisBlock_mvc_view, BRendeiroCV_certifications_certificacoes_mvc_view, BRendeiroCV_education_Educations_mvc_view, BRendeiroCV_skills_skills_mvc_view, OutSystemsUI_Interaction_FloatingActions_mvc_view, OutSystemsUI_Interaction_FloatingActionsItem_mvc_view, BRendeiroCV_Common_Footer_mvc_view) {
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
        View.displayName = "MainFlow.Home";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/BRendeiroCV.BR.css", "css/BRendeiroCV.BR.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [BRendeiroCV_HomeBlocks_DownloadPopUp_mvc_view, BRendeiroCV_Layouts_LayoutTopMenu_mvc_view, BRendeiroCV_Common_Menu_mvc_view, BRendeiroCV_HomeBlocks_home_Block_mvc_view, OutSystemsUI_Content_Accordion_mvc_view, OutSystemsUI_Content_AccordionItem_mvc_view, BRendeiroCV_Experiencias_Flow_experiencias_mvc_view, BRendeiroCV_Estagios_Estagios_mvc_view, BRendeiroCV_Pessoais_PessoaisBlock_mvc_view, BRendeiroCV_certifications_certificacoes_mvc_view, BRendeiroCV_education_Educations_mvc_view, BRendeiroCV_skills_skills_mvc_view, OutSystemsUI_Interaction_FloatingActions_mvc_view, OutSystemsUI_Interaction_FloatingActionsItem_mvc_view, BRendeiroCV_Common_Footer_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BRendeiroCV_MainFlow_Home_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BRendeiroCV_MainFlow_Home_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return OSView.BaseView.BaseWebScreen.getTranslation("mBXFEt0B4kuDr1qdLfxSvw#Title", "Home");
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

            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.isReadyVar, false, this, function () {
return [React.createElement(OSWidgets.Popup, {
showPopup: model.variables.showDownload_PopUpVar,
style: "popup-dialog",
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
style: "popup-title display-flex justify-content-space-between",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["Download CV"],
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/Home/Link OnClick");
controller.popUp_Donwload$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "times",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-base",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(BRendeiroCV_HomeBlocks_DownloadPopUp_mvc_view, {
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
uuid: "8",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(BRendeiroCV_Layouts_LayoutTopMenu_mvc_view, {
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
header: new PlaceholderContent(function () {
return [React.createElement(BRendeiroCV_Common_Menu_mvc_view, {
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
uuid: "10",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
breadcrumbs: PlaceholderContent.Empty,
title: PlaceholderContent.Empty,
actions: PlaceholderContent.Empty,
mainContent: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-bottom-base",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(BRendeiroCV_HomeBlocks_home_Block_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
downloadCV$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "HomeBlocks/home_Block DownloadCV");
controller.popUp_Donwload$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "12",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-bottom-base",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Content_Accordion_mvc_view, {
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
uuid: "14",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_Content_AccordionItem_mvc_view, {
inputs: {
StartsExpanded: true
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
name: "experienciasAccordionItem",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-bottom-base",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "font-size-h2",
text: [$text(getTranslation("MpkkO0Yjckiy8saVZosqug#Value", "Experiência Profissional"))],
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
customIcon: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(BRendeiroCV_Experiencias_Flow_experiencias_mvc_view, {
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
uuid: "18",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}), React.createElement(OutSystemsUI_Content_AccordionItem_mvc_view, {
inputs: {
StartsExpanded: false
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
name: "estagiosAccordionItem",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-bottom-base",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "font-size-h2",
text: [$text(getTranslation("_hzZSVFs10arC9EB9Cq+CQ#Value", "Experiência em Estágio"))],
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
customIcon: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(BRendeiroCV_Estagios_Estagios_mvc_view, {
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
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}), React.createElement(OutSystemsUI_Content_AccordionItem_mvc_view, {
inputs: {
StartsExpanded: false
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
name: "PessoalAccordionItem",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-bottom-base",
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "font-size-h2",
text: [$text(getTranslation("VX5BR3cL1U+fzIZDyrBHjQ#Value", "Projetos Pessoais"))],
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
customIcon: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(BRendeiroCV_Pessoais_PessoaisBlock_mvc_view, {
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
uuid: "26",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}), React.createElement(OutSystemsUI_Content_AccordionItem_mvc_view, {
inputs: {
StartsExpanded: false
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
name: "certificacoesAccordionItem",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-bottom-base",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "font-size-h2",
text: [$text(getTranslation("rMjUi95X0Ue+VrLnXqI5Qg#Value", "Certificacões"))],
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
customIcon: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(BRendeiroCV_certifications_certificacoes_mvc_view, {
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
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}), React.createElement(OutSystemsUI_Content_AccordionItem_mvc_view, {
inputs: {
StartsExpanded: false
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
name: "educacaoAccordionItem",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-bottom-base",
visible: true,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "font-size-h2",
text: [$text(getTranslation("rYjedmMDa0Wt1zBFpaQFTw#Value", "Educação"))],
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
customIcon: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(BRendeiroCV_education_Educations_mvc_view, {
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
uuid: "34",
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}), React.createElement(OutSystemsUI_Content_AccordionItem_mvc_view, {
inputs: {
StartsExpanded: false
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
name: "skillsAccordionItem",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-bottom-base",
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "font-size-h2",
text: ["Skills"],
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
customIcon: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(BRendeiroCV_skills_skills_mvc_view, {
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
uuid: "38",
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})];
})
},
_dependencies: []
})), React.createElement(OutSystemsUI_Interaction_FloatingActions_mvc_view, {
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
uuid: "39",
alias: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
items: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_Interaction_FloatingActionsItem_mvc_view, {
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
uuid: "40",
alias: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["Europass"],
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
item: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/Home/Link OnClick");
return controller.onClick_Europass$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "download",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
}), React.createElement(OutSystemsUI_Interaction_FloatingActionsItem_mvc_view, {
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
alias: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "font-weight: bold;"
},
text: ["Minimalist CV"],
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
item: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MainFlow/Home/Link OnClick");
return controller.onClick_Minimalist$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "download",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
})];
}),
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "plus",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
})];
}),
footer: new PlaceholderContent(function () {
return [React.createElement(BRendeiroCV_Common_Footer_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
downloadCV$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Footer DownloadCV");
controller.popUp_Donwload$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "51",
alias: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "align-items: center; display: flex; height: 100vh; justify-content: center; text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "spinner",
visible: true,
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "spinner",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("BRendeiroCV.MainFlow.Home.mvc$controller", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "BRendeiroCV.languageResources", "BRendeiroCV.clientVariables", "BRendeiroCV.MainFlow.Home.mvc$translationsResources", "BRendeiroCV.MainFlow.Home.mvc$debugger", "BRendeiroCV.MainFlow.controller", "BRendeiroCV.MainFlow.Home.mvc$controller.OnReady.globalseo_jsJS"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, BRendeiroCVLanguageResources, BRendeiroCVClientVariables, BRendeiroCV_MainFlow_Home_mvc_TranslationsResources, BRendeiroCV_MainFlow_Home_mvc_Debugger, BRendeiroCV_MainFlowController, BRendeiroCV_MainFlow_Home_mvc_controller_OnReady_globalseo_jsJS) {
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
Controller.prototype.translationResources = BRendeiroCV_MainFlow_Home_mvc_TranslationsResources;
// Server Actions
Controller.prototype.hasDoneDownload$ServerAction = function (gUIDIn, callContext) {
var controller = this.controller;
var inputs = {
GUID: OS.DataConversion.ServerDataConverter.to(gUIDIn, OS.DataTypes.DataTypes.Text)
};
return controller.callServerAction("HasDoneDownload", "screenservices/BRendeiroCV/MainFlow/Home/ActionHasDoneDownload", "KfYGpGbiFvu3sv_Zqdg1Lw", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, true).then(function (outputs) {
});
};
Controller.prototype.updateViewByIp$ServerAction = function (gUIDIn, callContext) {
var controller = this.controller;
var inputs = {
GUID: OS.DataConversion.ServerDataConverter.to(gUIDIn, OS.DataTypes.DataTypes.Text)
};
return controller.callServerAction("UpdateViewByIp", "screenservices/BRendeiroCV/MainFlow/Home/ActionUpdateViewByIp", "7QtfOuXIKtafm52Rzbywig", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, true).then(function (outputs) {
});
};

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onClick_Europass$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_Europass");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:UjM3I_zvc0ijZVAFiMMMpA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.mBXFEt0B4kuDr1qdLfxSvw/ClientActions.UjM3I_zvc0ijZVAFiMMMpA:0zq75mjJ922cHbaabtIY5g", "BRendeiroCV", "OnClick_Europass", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:XWZ3KPeBu0eiSNTau2u1FA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:ClrEOJv1J0ubUp+OdbUXng", callContext.id);
// Execute Action: HasDoneDownload
model.flush();
return controller.hasDoneDownload$ServerAction(BRendeiroCVClientVariables.getClientGuid(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:fPC+19mecE2SUCA_dcw6TQ", callContext.id);
// Destination: /BRendeiroCV/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://raw.githubusercontent.com/brunorendeiro/cv_icons/main/CV/Europass_BrunoRendeiro_2025.pdf", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).then(function (res) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:UjM3I_zvc0ijZVAFiMMMpA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:UjM3I_zvc0ijZVAFiMMMpA", callContext.id);
throw ex;

});
};
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
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:45RsJEBlD02fiLXazIIM2g:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.mBXFEt0B4kuDr1qdLfxSvw/ClientActions.45RsJEBlD02fiLXazIIM2g:MY4U9_gCkygp1pr9DmUXCA", "BRendeiroCV", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:pd+BSPOtT0yvJgmExr4yhg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:YpzwacL6RUS6TWMrlzBfHw", callContext.id);
controller.safeExecuteJSNode(BRendeiroCV_MainFlow_Home_mvc_controller_OnReady_globalseo_jsJS, "globalseo_js", "OnReady", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:IdpLWG1lWkukdRLH12wECg", callContext.id);
// Execute Action: UpdateViewByIp
model.flush();
return controller.updateViewByIp$ServerAction(BRendeiroCVClientVariables.getClientGuid(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:fPTIZcGHXk2WhbPCbvjUgA", callContext.id);
// IsReady = True
model.variables.isReadyVar = true;
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:dFLj5NbSk0CWeCK21cyMvg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:45RsJEBlD02fiLXazIIM2g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:45RsJEBlD02fiLXazIIM2g", callContext.id);
throw ex;

});
};
Controller.prototype._onClick_Minimalist$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_Minimalist");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:26rjJYHBZkCq2urY5wJxFQ:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.mBXFEt0B4kuDr1qdLfxSvw/ClientActions.26rjJYHBZkCq2urY5wJxFQ:dGD1m7Z9IKwZEgQjwcby6Q", "BRendeiroCV", "OnClick_Minimalist", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:Y3Po6D6fP0WcjxvGp4w_Qg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:V0gvAvxxTE6HvvI2WL20HA", callContext.id);
// Execute Action: HasDoneDownload
model.flush();
return controller.hasDoneDownload$ServerAction(BRendeiroCVClientVariables.getClientGuid(), callContext).then(function () {
// pt
if((OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:uGNnhCQxfkSBs5M2uLH2Sg", callContext.id) && (BRendeiroCVClientVariables.getLanguageId() === BRendeiroCVModel.staticEntities.language.pt))) {
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:NXGMAhVvYUuSItgT4PJ7aQ", callContext.id);
// Destination: /BRendeiroCV/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://raw.githubusercontent.com/brunorendeiro/cv_icons/main/CV/CV_BrunoRendeiro_Minimal_PT_full.pdf", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:Wx2NMdODwkWaa3xaKlr0ag", callContext.id);
// Destination: /BRendeiroCV/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://raw.githubusercontent.com/brunorendeiro/cv_icons/main/CV/CV_BrunoRendeiro_Minimal_EN_full.pdf", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
}).then(function (res) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:26rjJYHBZkCq2urY5wJxFQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:26rjJYHBZkCq2urY5wJxFQ", callContext.id);
throw ex;

});
};
Controller.prototype._popUp_Donwload$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("PopUp_Donwload");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:jvOHO_kEAUmRdjAtby0lMQ:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.mBXFEt0B4kuDr1qdLfxSvw/ClientActions.jvOHO_kEAUmRdjAtby0lMQ:rE2n324wL2fnBmn3ecVzpA", "BRendeiroCV", "PopUp_Donwload", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:drdzxosJR0ukKWcvLDpJ2w", callContext.id);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:QyV7szHepk2fzHSSuClTtg", callContext.id);
// ShowDownload_PopUp = notShowDownload_PopUp
model.variables.showDownload_PopUpVar = !(model.variables.showDownload_PopUpVar);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:xg8rjdP8iUaz7OTF0Q0rsQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:jvOHO_kEAUmRdjAtby0lMQ", callContext.id);
}

};

Controller.prototype.onClick_Europass$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Europass$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onClick_Minimalist$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Minimalist$Action, callContext);

};
Controller.prototype.popUp_Donwload$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._popUp_Donwload$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:fWtJs57lI0qCTlwkcDoxDA:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA:l_PFc9BB4g74My60JSlEkw", "BRendeiroCV", "MainFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:mBXFEt0B4kuDr1qdLfxSvw:/NRWebFlows.fWtJs57lI0qCTlwkcDoxDA/NodesShownInESpaceTree.mBXFEt0B4kuDr1qdLfxSvw:qa43C36MmIBY+Ou3jasLJA", "BRendeiroCV", "Home", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:mBXFEt0B4kuDr1qdLfxSvw", callContext.id);
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:fWtJs57lI0qCTlwkcDoxDA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "MainFlow/Home On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return BRendeiroCV_MainFlowController.default.handleError(ex, this.callContext());
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
define("BRendeiroCV.MainFlow.Home.mvc$controller.OnReady.globalseo_jsJS", [], function () {
return function ($actions, $roles, $public) {
(function() {
  // HEAD da página
  var head = document.getElementsByTagName('head')[0];

  // Verificar se já existe o link
  if (!document.querySelector('link[href="https://unpkg.com/globalseo/dist/translate.css"]')) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/globalseo/dist/translate.css';
    head.appendChild(link);
  }

  // Verificar se já existe o script
  if (!document.querySelector('script[src="https://unpkg.com/globalseo/dist/translate.js"]')) {
    var script = document.createElement('script');
    script.src = 'https://unpkg.com/globalseo/dist/translate.js';
    script.setAttribute('data-globalseo-key', 'd704673b-18ef-4155-84d2-e112e43d5a7f');
    script.setAttribute('data-use-browser-language', 'true');
    script.setAttribute('data-original-language', 'pt');
    script.setAttribute('data-translation-mode', 'searchParams');
    script.setAttribute('data-allowed-languages', 'en');
    script.setAttribute('data-exclude-classes', '');
    head.appendChild(script);
  }
})();

};
});

define("BRendeiroCV.MainFlow.Home.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"YpzwacL6RUS6TWMrlzBfHw": {
getter: function (varBag, idService) {
return varBag.globalseo_jsJSResult.value;
}
},
"wphqBo2PK0aR9J64CGyWJQ": {
getter: function (varBag, idService) {
return varBag.model.variables.showDownload_PopUpVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+gtNsL_b_0am20w+AAOfgQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isReadyVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"3NGGh8SbhEKTZMNx0jLSNQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsReady2"));
})(varBag.model, idService);
}
},
"irzWRI3wPUuRlo74Ewx+rw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Header"));
})(varBag.model, idService);
}
},
"tjHlex8WvUK7aiZzBNYb0Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Breadcrumbs"));
})(varBag.model, idService);
}
},
"WLGr2oTzAkKdDvGlronaLA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"91jIXA8hWEi+kl8e25dE+Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Actions"));
})(varBag.model, idService);
}
},
"beIsGUJvOkCNJ_PWj436YA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MainContent"));
})(varBag.model, idService);
}
},
"UP0aijB_w0m55eoGayXmqw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"nU_MfaZZwkO2fo_cZfrjUA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("experienciasAccordionItem"));
})(varBag.model, idService);
}
},
"1uMIgPm3EkK0DKTjzpRGgw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"BLUAJbv_oESK0Sqpqkqv0Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CustomIcon"));
})(varBag.model, idService);
}
},
"qztF9PacgkqBJ0Bzyrz8gg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"MdRZTGYRc068ElnpX0ZleQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("estagiosAccordionItem"));
})(varBag.model, idService);
}
},
"X+9k9xtd3kef8r2rqXky7A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"uFZa5gDCEEyqMAKnZFIWkQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CustomIcon"));
})(varBag.model, idService);
}
},
"3bH4Hy88I0upYOXwiT2ZAA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"d7mzUJIfK0ad8XU8PWdmYQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PessoalAccordionItem"));
})(varBag.model, idService);
}
},
"mFCW5sfqOUu1Lf+ua0s6aA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"i538CfTFvUi7VuYhiDDIPA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CustomIcon"));
})(varBag.model, idService);
}
},
"WktmJDqXlkKjvMWY4GbjGA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"hmejTsVLzE+Lzf3AflPGYw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("certificacoesAccordionItem"));
})(varBag.model, idService);
}
},
"ih0T4wQjNEqtAHy4mLQAdQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"8r_NMpTu706nFhl1Nt8Ayg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CustomIcon"));
})(varBag.model, idService);
}
},
"jS6u3tMTKUi8uMOLltCIwA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"O05LWTrRhEKfvsPVwfZc4g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("educacaoAccordionItem"));
})(varBag.model, idService);
}
},
"IcXggUnhDkGu16OHjkFMlw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"Q62AWvQ+WU65uazdfJ5J2A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CustomIcon"));
})(varBag.model, idService);
}
},
"U+MQN1hNiEi_Km6drBdLoA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Yp97qyLaeEmpOVCXAwfRYA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("skillsAccordionItem"));
})(varBag.model, idService);
}
},
"zs+l+FLZs0KvxbOmG0Xxhw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"YZM8l6dlOEyAHNQ2IQeQyA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CustomIcon"));
})(varBag.model, idService);
}
},
"M7f5G9B13k6iCIRaOAXkwQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"i2ipGxuLIkyLPKbdyUa+kA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Items"));
})(varBag.model, idService);
}
},
"kowcotnbBkircJ_a9qPcCg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"BkMa+Z+d8UCCBg_nghg_nA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Item"));
})(varBag.model, idService);
}
},
"1eWP6JV63EWmZGUSNgBZyA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"2SSLyPnEcUe03RMK+q8FKQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Item"));
})(varBag.model, idService);
}
},
"JZSq7w88_kC1jdsbvDfTQw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Button"));
})(varBag.model, idService);
}
},
"h8fDCNLmlUqoHE6rIvggug": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Footer"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("BRendeiroCV.MainFlow.Home.mvc$translationsResources", ["exports", "BRendeiroCV.MainFlow.Home.mvc$translationsResources.en-GB"], function (exports, BRendeiroCV_MainFlow_Home_mvc_translationsResources_enGB) {
return {
"en-GB": {
"translations": BRendeiroCV_MainFlow_Home_mvc_translationsResources_enGB,
"isRTL": false
}
};
});
define("BRendeiroCV.MainFlow.Home.mvc$translationsResources.en-GB", [], function () {
return {
"rYjedmMDa0Wt1zBFpaQFTw#Value": "Education",
"rMjUi95X0Ue+VrLnXqI5Qg#Value": "Certifications",
"VX5BR3cL1U+fzIZDyrBHjQ#Value": "Personal Projects",
"_hzZSVFs10arC9EB9Cq+CQ#Value": "Internship Experience",
"MpkkO0Yjckiy8saVZosqug#Value": "Professional Experience"
};
});
