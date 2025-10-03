define("BRendeiroCV.Common.Footer.mvc$model", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "OutSystemsUI.Adaptive.Columns4.mvc$model"], function (OutSystems, BRendeiroCVModel, OutSystemsUI_Adaptive_Columns4_mvcModel) {
var OS = OutSystems.Internal;

var DataAction1DataActRec = (function (_super) {
__extends(DataAction1DataActRec, _super);
function DataAction1DataActRec(defaults) {
_super.apply(this, arguments);
}
DataAction1DataActRec.attributesToDeclare = function () {
return [
this.attr("ViewsNumber", "viewsNumberOut", "ViewsNumber", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DataAction1DataActRec.fromStructure = function (str) {
return new DataAction1DataActRec(new DataAction1DataActRec.RecordClass({
viewsNumberOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataAction1DataActRec.init();
return DataAction1DataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("DataAction1", "dataAction1DataAct", "dataAction1DataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DataAction1DataActRec());
}, true, DataAction1DataActRec)
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.fromStructure = function (str) {
return new VariablesRecord(new VariablesRecord.RecordClass({
dataAction1DataAct: OS.DataTypes.ImmutableBase.getData(str)
}));
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
Model._hasValidationWidgetsValue = OutSystemsUI_Adaptive_Columns4_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Common.Footer");
});
define("BRendeiroCV.Common.Footer.mvc$view", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "react", "OutSystems/ReactView/Main", "BRendeiroCV.Common.Footer.mvc$model", "BRendeiroCV.Common.Footer.mvc$controller", "BRendeiroCV.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI.Adaptive.Columns4.mvc$view"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, React, OSView, BRendeiroCV_Common_Footer_mvc_model, BRendeiroCV_Common_Footer_mvc_controller, BRendeiroCVClientVariables, OSWidgets, OutSystemsUI_Adaptive_Columns4_mvc_view) {
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
        View.displayName = "Common.Footer";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_Adaptive_Columns4_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BRendeiroCV_Common_Footer_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BRendeiroCV_Common_Footer_mvc_controller;
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
style: "padding-x-m padding-y-s",
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
value: "@ 2025",
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}), $text(getTranslation("tL33ZeG8SUGdhddKl4rtqA#Value", " Bruno Rendeiro. Todos os direitos reservados."))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-x-m padding-y-xs font-size-xs",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("4A+UjhVcx0+PuQwyrDuLOw#Value", "Este CV nasceu para ser lido no ecrã, não na impressora."))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Adaptive_Columns4_mvc_view, {
inputs: {
TabletBehavior: BRendeiroCVModel.staticEntities.breakColumns.middle,
PhoneBehavior: BRendeiroCVModel.staticEntities.breakColumns.all
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
uuid: "5",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
column1: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
style: "flex2",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Footer/Link OnClick");
controller.onClick_Linkedin$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "linkedin",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-xs",
text: ["Bruno Rendeiro"],
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}),
column2: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
style: "flex2",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Footer/Link OnClick");
controller.onClick_Email$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "envelope",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-xs",
text: ["brunorendeiro88@gmail.com"],
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}),
column3: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
style: "flex2",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Footer/Link OnClick");
controller.onClick_Whatsapp$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "whatsapp",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-xs",
text: ["+351 967356430"],
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}),
column4: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
style: "flex2",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Footer/Link OnClick");
return controller.onClick_CV$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "download",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-xs",
text: ["Download CV"],
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
})
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "flex-wrap: wrap; text-align: center;"
},
style: "display-flex padding-x-m padding-y-s",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
style: "padding-x-m padding-y-s font-size-xs",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("_16dRqq1gU+yynQnjAqacg#Value", "Você é o visitante nº")), React.createElement(OSWidgets.Expression, {
value: ((" " + OS.BuiltinFunctions.longIntegerToText(model.variables.dataAction1DataAct.viewsNumberOut)) + " "),
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dataAction1DataAct.dataFetchStatusAttr)
}), $text(getTranslation("Q2vstqYAJUaQ_dFCryUm7Q#Value", "deste portfólio."))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BRendeiroCV.Common.Footer.mvc$controller", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "BRendeiroCV.languageResources", "BRendeiroCV.clientVariables", "BRendeiroCV.Common.Footer.mvc$translationsResources", "BRendeiroCV.Common.Footer.mvc$debugger", "BRendeiroCV.Common.Footer.mvc$controller.OnClick_Linkedin.JavaScript1JS"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, BRendeiroCVLanguageResources, BRendeiroCVClientVariables, BRendeiroCV_Common_Footer_mvc_TranslationsResources, BRendeiroCV_Common_Footer_mvc_Debugger, BRendeiroCV_Common_Footer_mvc_controller_OnClick_Linkedin_JavaScript1JS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
dataAction1$DataActRefresh: 0
};
this.dataFetchDependentsGraph = {
dataAction1$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
Controller.prototype.translationResources = BRendeiroCV_Common_Footer_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions
Controller.prototype.dataAction1$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:7+rnojzTYkuJaioQj8hcOA:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg/NodesShownInESpaceTree.yx2w4X6T2EW6HPDpZp6BEA/DataActions.7+rnojzTYkuJaioQj8hcOA:oVTHKk_GUma8eIG+cCv_Wg", "BRendeiroCV", "DataAction1", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Footer/DataAction1");
return controller.callDataAction("DataActionDataAction1", "screenservices/BRendeiroCV/Common/Footer/DataActionDataAction1", "iNrXLEH4H1j3oeP4J6XlCg", function (b) {
model.variables.dataAction1DataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.dataAction1DataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.dataAction1DataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, true);

}, function () {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:7+rnojzTYkuJaioQj8hcOA", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["dataAction1$DataActRefresh"];
// Client Actions
Controller.prototype._onClick_Email$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_Email");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:A1hhbFGfj0ayNRzPUu28SA:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg/NodesShownInESpaceTree.yx2w4X6T2EW6HPDpZp6BEA/ClientActions.A1hhbFGfj0ayNRzPUu28SA:Yoka7guTd_dtoIzqC1CuFQ", "BRendeiroCV", "OnClick_Email", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:CJa0qdDf_06FYEigqmT+_A", callContext.id);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:YTD65gt7MUGc3fjqCyjehA", callContext.id);
// Destination: /BRendeiroCV/
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("mailto:brunorendeiro88@gmail.com", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:A1hhbFGfj0ayNRzPUu28SA", callContext.id);
}

};
Controller.prototype._onClick_Whatsapp$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_Whatsapp");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:izyMkFAeAEOX+0h8iMnVRg:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg/NodesShownInESpaceTree.yx2w4X6T2EW6HPDpZp6BEA/ClientActions.izyMkFAeAEOX+0h8iMnVRg:K6wediyj5Ds5ERW+08jslQ", "BRendeiroCV", "OnClick_Whatsapp", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:dxaGFKOJf0iFKtyGzmS9RA", callContext.id);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:mB12J8VcXEWS3lbtqD7zrA", callContext.id);
// Destination: /BRendeiroCV/
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tel:+351967356430", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:izyMkFAeAEOX+0h8iMnVRg", callContext.id);
}

};
Controller.prototype._onClick_CV$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_CV");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:4WagsI9vfESEut6c07nmYg:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg/NodesShownInESpaceTree.yx2w4X6T2EW6HPDpZp6BEA/ClientActions.4WagsI9vfESEut6c07nmYg:3+dGlJ27tyf0_ZlTywohiA", "BRendeiroCV", "OnClick_CV", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:VUYU07bGREa17UU+x6syOg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:WPEXOioM8UqEXc_zYOQ2Xw", callContext.id);
// Trigger Event: DownloadCV
return controller.downloadCV$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:43cmC_0Au0m2aOqPF1bxdg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:4WagsI9vfESEut6c07nmYg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:4WagsI9vfESEut6c07nmYg", callContext.id);
throw ex;

});
};
Controller.prototype._onClick_Linkedin$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_Linkedin");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:bcG92Bfq0Ui7dfNpb2ko2g:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg/NodesShownInESpaceTree.yx2w4X6T2EW6HPDpZp6BEA/ClientActions.bcG92Bfq0Ui7dfNpb2ko2g:C6cuV6XMSRfZdRwawe0tpw", "BRendeiroCV", "OnClick_Linkedin", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:jGZXFvbRBEq025uU99bqUQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:nq5NRgdYJE6qqlnQoJg4UA", callContext.id);
controller.safeExecuteJSNode(BRendeiroCV_Common_Footer_mvc_controller_OnClick_Linkedin_JavaScript1JS, "JavaScript1", "OnClick_Linkedin", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:Rg5YCpnwI0iD8N1CFWEpyg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:bcG92Bfq0Ui7dfNpb2ko2g", callContext.id);
}

};

Controller.prototype.onClick_Email$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Email$Action, callContext);

};
Controller.prototype.onClick_Whatsapp$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Whatsapp$Action, callContext);

};
Controller.prototype.onClick_CV$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_CV$Action, callContext);

};
Controller.prototype.onClick_Linkedin$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Linkedin$Action, callContext);

};
Controller.prototype.downloadCV$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:B4kRGvrnOEmQonA8ir4Pyg:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg:tqNLB+Jupzy+4vlkl_Ke+g", "BRendeiroCV", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:yx2w4X6T2EW6HPDpZp6BEA:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg/NodesShownInESpaceTree.yx2w4X6T2EW6HPDpZp6BEA:uzzeSheUQcDQPO_0aN4VRQ", "BRendeiroCV", "Footer", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:yx2w4X6T2EW6HPDpZp6BEA", callContext.id);
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:B4kRGvrnOEmQonA8ir4Pyg", callContext.id);
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
define("BRendeiroCV.Common.Footer.mvc$controller.OnClick_Linkedin.JavaScript1JS", [], function () {
return function ($actions, $roles, $public) {
window.open("https://www.linkedin.com/in/brunorendeiro88/", "_blank");
};
});

define("BRendeiroCV.Common.Footer.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"nq5NRgdYJE6qqlnQoJg4UA": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"7+rnojzTYkuJaioQj8hcOA": {
getter: function (varBag, idService) {
return varBag.model.variables.dataAction1DataAct;
}
},
"GbiEYC3ddkezHxGuTj+fRA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column1"));
})(varBag.model, idService);
}
},
"5Ok1_qjgDE+kk_X+pSfq9g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column2"));
})(varBag.model, idService);
}
},
"vz4mSVsVIU+FnqDB5j4QDA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column3"));
})(varBag.model, idService);
}
},
"zoa+3M2haEuJ9NbSo1L7yQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column4"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("BRendeiroCV.Common.Footer.mvc$translationsResources", ["exports", "BRendeiroCV.Common.Footer.mvc$translationsResources.en-GB"], function (exports, BRendeiroCV_Common_Footer_mvc_translationsResources_enGB) {
return {
"en-GB": {
"translations": BRendeiroCV_Common_Footer_mvc_translationsResources_enGB,
"isRTL": false
}
};
});
define("BRendeiroCV.Common.Footer.mvc$translationsResources.en-GB", [], function () {
return {
"Q2vstqYAJUaQ_dFCryUm7Q#Value": "of this portfolio.",
"_16dRqq1gU+yynQnjAqacg#Value": "You are visitor no.",
"4A+UjhVcx0+PuQwyrDuLOw#Value": "This CV was made for screens, not for printers.",
"tL33ZeG8SUGdhddKl4rtqA#Value": " Bruno Rendeiro. All rights reserved."
};
});
