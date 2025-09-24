define("BRendeiroCV.education.educationBlock.mvc$model", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "OutSystemsUI.Content.CardItem.mvc$model"], function (OutSystems, BRendeiroCVModel, OutSystemsUI_Content_CardItem_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Title", "titleIn", "Title", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Curso", "cursoIn", "Curso", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_cursoInDataFetchStatus", "_cursoInDataFetchStatus", "_cursoInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("dataTimeline", "dataTimelineIn", "dataTimeline", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_dataTimelineInDataFetchStatus", "_dataTimelineInDataFetchStatus", "_dataTimelineInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Imagem", "imagemIn", "Imagem", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_imagemInDataFetchStatus", "_imagemInDataFetchStatus", "_imagemInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = OutSystemsUI_Content_CardItem_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Title" in inputs) {
this.variables.titleIn = inputs.Title;
if("_titleInDataFetchStatus" in inputs) {
this.variables._titleInDataFetchStatus = inputs._titleInDataFetchStatus;
}

}

if("Curso" in inputs) {
this.variables.cursoIn = inputs.Curso;
if("_cursoInDataFetchStatus" in inputs) {
this.variables._cursoInDataFetchStatus = inputs._cursoInDataFetchStatus;
}

}

if("dataTimeline" in inputs) {
this.variables.dataTimelineIn = inputs.dataTimeline;
if("_dataTimelineInDataFetchStatus" in inputs) {
this.variables._dataTimelineInDataFetchStatus = inputs._dataTimelineInDataFetchStatus;
}

}

if("Imagem" in inputs) {
this.variables.imagemIn = inputs.Imagem;
if("_imagemInDataFetchStatus" in inputs) {
this.variables._imagemInDataFetchStatus = inputs._imagemInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "education.educationBlock");
});
define("BRendeiroCV.education.educationBlock.mvc$view", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "react", "OutSystems/ReactView/Main", "BRendeiroCV.education.educationBlock.mvc$model", "BRendeiroCV.education.educationBlock.mvc$controller", "BRendeiroCV.clientVariables", "OutSystemsUI.Content.CardItem.mvc$view", "OutSystems/ReactWidgets/Main"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, React, OSView, BRendeiroCV_education_educationBlock_mvc_model, BRendeiroCV_education_educationBlock_mvc_controller, BRendeiroCVClientVariables, OutSystemsUI_Content_CardItem_mvc_view, OSWidgets) {
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
        View.displayName = "education.educationBlock";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_Content_CardItem_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BRendeiroCV_education_educationBlock_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BRendeiroCV_education_educationBlock_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OutSystemsUI_Content_CardItem_mvc_view, {
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: PlaceholderContent.Empty,
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "height: 100px; max-width: unset; text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "height: 100px;"
},
type: /*External*/ 1,
url: model.variables.imagemIn,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._imagemInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
style: " margin-top-base",
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
value: model.variables.titleIn,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 16px;"
},
value: model.variables.cursoIn,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cursoInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 16px;"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
value: model.variables.dataTimelineIn,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._dataTimelineInDataFetchStatus)
})))))];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder1,
_idProps: {
service: idService,
name: "Placeholder1"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
right: PlaceholderContent.Empty
}
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BRendeiroCV.education.educationBlock.mvc$controller", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "BRendeiroCV.languageResources", "BRendeiroCV.clientVariables", "BRendeiroCV.education.educationBlock.mvc$translationsResources", "BRendeiroCV.education.educationBlock.mvc$debugger"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, BRendeiroCVLanguageResources, BRendeiroCVClientVariables, BRendeiroCV_education_educationBlock_mvc_TranslationsResources, BRendeiroCV_education_educationBlock_mvc_Debugger) {
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
Controller.prototype.translationResources = BRendeiroCV_education_educationBlock_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:izx9Pi4mKUyn1Sw992yVbA:/NRWebFlows.izx9Pi4mKUyn1Sw992yVbA:oJBtO05bbDOScyFe+vHFGw", "BRendeiroCV", "education", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:66VRj_nL+kyuM3CrEDIP7g:/NRWebFlows.izx9Pi4mKUyn1Sw992yVbA/NodesShownInESpaceTree.66VRj_nL+kyuM3CrEDIP7g:NfwT6Q+UO4o1oeynqH8LaA", "BRendeiroCV", "educationBlock", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:66VRj_nL+kyuM3CrEDIP7g", callContext.id);
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

define("BRendeiroCV.education.educationBlock.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"NyQPfRH4xkWylwVNWeSaow": {
getter: function (varBag, idService) {
return varBag.model.variables.titleIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"x7dejxV6a0anaYhV8g93rg": {
getter: function (varBag, idService) {
return varBag.model.variables.cursoIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"TwNmnlIjPkyWOe8ywkWXKQ": {
getter: function (varBag, idService) {
return varBag.model.variables.dataTimelineIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"cvJtBFkA5UeIBZgaKjYpvg": {
getter: function (varBag, idService) {
return varBag.model.variables.imagemIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"PAkhim4VZE2XvtA77uIMNQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"Iyrk6TLt90y3ZMzmNzsfzA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"6PESAyysuUes6QeuJybgWQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"ziVlWRqFsk25UrB7PdQbTA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder1"));
})(varBag.model, idService);
}
},
"R1rVW3ojoEqniEdkEMf3vA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("BRendeiroCV.education.educationBlock.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
