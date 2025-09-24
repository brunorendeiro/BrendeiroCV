define("BRendeiroCV.HomeBlocks.DownloadPopUp.mvc$model", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model"], function (OutSystems, BRendeiroCVModel) {
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
return new OS.Model.ModelFactory(Model, "HomeBlocks.DownloadPopUp");
});
define("BRendeiroCV.HomeBlocks.DownloadPopUp.mvc$view", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "react", "OutSystems/ReactView/Main", "BRendeiroCV.HomeBlocks.DownloadPopUp.mvc$model", "BRendeiroCV.HomeBlocks.DownloadPopUp.mvc$controller", "BRendeiroCV.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, React, OSView, BRendeiroCV_HomeBlocks_DownloadPopUp_mvc_model, BRendeiroCV_HomeBlocks_DownloadPopUp_mvc_controller, BRendeiroCVClientVariables, OSWidgets) {
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
        View.displayName = "HomeBlocks.DownloadPopUp";
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
                return BRendeiroCV_HomeBlocks_DownloadPopUp_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BRendeiroCV_HomeBlocks_DownloadPopUp_mvc_controller;
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
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "1"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "HomeBlocks/DownloadPopUp/Link OnClick");
return controller.onClick_Europass$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Europass ENG")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
style: "margin-top-l",
visible: true,
_idProps: {
service: idService,
uuid: "3"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "HomeBlocks/DownloadPopUp/Link OnClick");
return controller.onClick_Minimalist$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn-secondary",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Minimalist CV"))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BRendeiroCV.HomeBlocks.DownloadPopUp.mvc$controller", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "BRendeiroCV.languageResources", "BRendeiroCV.clientVariables", "BRendeiroCV.HomeBlocks.DownloadPopUp.mvc$translationsResources", "BRendeiroCV.HomeBlocks.DownloadPopUp.mvc$debugger"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, BRendeiroCVLanguageResources, BRendeiroCVClientVariables, BRendeiroCV_HomeBlocks_DownloadPopUp_mvc_TranslationsResources, BRendeiroCV_HomeBlocks_DownloadPopUp_mvc_Debugger) {
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
Controller.prototype.translationResources = BRendeiroCV_HomeBlocks_DownloadPopUp_mvc_TranslationsResources;
// Server Actions
Controller.prototype.hasDoneDownload$ServerAction = function (gUIDIn, callContext) {
var controller = this.controller;
var inputs = {
GUID: OS.DataConversion.ServerDataConverter.to(gUIDIn, OS.DataTypes.DataTypes.Text)
};
return controller.callServerAction("HasDoneDownload", "screenservices/BRendeiroCV/HomeBlocks/DownloadPopUp/ActionHasDoneDownload", "KfYGpGbiFvu3sv_Zqdg1Lw", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
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
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:uM15LjpIMEmdv0qj3ac1+w:/NRWebFlows._5ioy9kobke2cz+EnQWZ8w/NodesShownInESpaceTree.IktKxiZXtkiHhMwvvYbUCw/ClientActions.uM15LjpIMEmdv0qj3ac1+w:+g0Ev1b+tnTwkUTj8iH0NQ", "BRendeiroCV", "OnClick_Europass", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:aOTVEDtcWE6MmPYh1hSlNA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:PSsWhiVzXEOjXLE1ugqQow", callContext.id);
// Execute Action: HasDoneDownload
model.flush();
return controller.hasDoneDownload$ServerAction(BRendeiroCVClientVariables.getClientGuid(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:l_9Uaaih00+OV8ZDL0BSLQ", callContext.id);
// Destination: /BRendeiroCV/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://raw.githubusercontent.com/brunorendeiro/cv_icons/main/CV/Europass_BrunoRendeiro_2025.pdf", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).then(function (res) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:uM15LjpIMEmdv0qj3ac1+w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:uM15LjpIMEmdv0qj3ac1+w", callContext.id);
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
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:C4QUutGD7kuIgDZp2VKGQg:/NRWebFlows._5ioy9kobke2cz+EnQWZ8w/NodesShownInESpaceTree.IktKxiZXtkiHhMwvvYbUCw/ClientActions.C4QUutGD7kuIgDZp2VKGQg:lYnlMBpRGhTz2R02sNz2jQ", "BRendeiroCV", "OnClick_Minimalist", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:mHMhahGxUESK42gCx4N3gg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:ot4l9wNFS0mZyfpgBAtUSQ", callContext.id);
// Execute Action: HasDoneDownload
model.flush();
return controller.hasDoneDownload$ServerAction(BRendeiroCVClientVariables.getClientGuid(), callContext).then(function () {
// pt
if((OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:kc1UG15FWkuD1_WbXF3WHw", callContext.id) && (BRendeiroCVClientVariables.getLanguageId() === BRendeiroCVModel.staticEntities.language.pt))) {
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:WHOR1OwpjESh9t2NorEHrg", callContext.id);
// Destination: /BRendeiroCV/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://raw.githubusercontent.com/brunorendeiro/cv_icons/main/CV/CV_BrunoRendeiro_Minimal_PT_full.pdf", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:JJ+_XQUGZESDoyZdSwPwhw", callContext.id);
// Destination: /BRendeiroCV/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://raw.githubusercontent.com/brunorendeiro/cv_icons/main/CV/CV_BrunoRendeiro_Minimal_EN_full.pdf", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
}).then(function (res) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:C4QUutGD7kuIgDZp2VKGQg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:C4QUutGD7kuIgDZp2VKGQg", callContext.id);
throw ex;

});
};

Controller.prototype.onClick_Europass$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Europass$Action, callContext);

};
Controller.prototype.onClick_Minimalist$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Minimalist$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:_5ioy9kobke2cz+EnQWZ8w:/NRWebFlows._5ioy9kobke2cz+EnQWZ8w:KPgf0Vr1eymcEDPaRk1wxA", "BRendeiroCV", "HomeBlocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:IktKxiZXtkiHhMwvvYbUCw:/NRWebFlows._5ioy9kobke2cz+EnQWZ8w/NodesShownInESpaceTree.IktKxiZXtkiHhMwvvYbUCw:Cv1D14l7zx8gawvi857jhg", "BRendeiroCV", "DownloadPopUp", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:IktKxiZXtkiHhMwvvYbUCw", callContext.id);
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:_5ioy9kobke2cz+EnQWZ8w", callContext.id);
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

define("BRendeiroCV.HomeBlocks.DownloadPopUp.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("BRendeiroCV.HomeBlocks.DownloadPopUp.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
