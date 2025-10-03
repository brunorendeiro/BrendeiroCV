define("BRendeiroCV.HomeBlocks.home_Block.mvc$model", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model"], function (OutSystems, BRendeiroCVModel) {
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
return new OS.Model.ModelFactory(Model, "HomeBlocks.home_Block");
});
define("BRendeiroCV.HomeBlocks.home_Block.mvc$view", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "react", "OutSystems/ReactView/Main", "BRendeiroCV.HomeBlocks.home_Block.mvc$model", "BRendeiroCV.HomeBlocks.home_Block.mvc$controller", "BRendeiroCV.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, React, OSView, BRendeiroCV_HomeBlocks_home_Block_mvc_model, BRendeiroCV_HomeBlocks_home_Block_mvc_controller, BRendeiroCVClientVariables, OSWidgets) {
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
        View.displayName = "HomeBlocks.home_Block";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/BRendeiroCV.HomeBlocks.home_Block.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BRendeiroCV_HomeBlocks_home_Block_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BRendeiroCV_HomeBlocks_home_Block_mvc_controller;
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
style: "cv-hero",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex vertical-align",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
style: "flex1 vertical-align padding-base",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
"loading": "lazy"
},
style: "round-avatar",
type: /*External*/ 1,
url: "https://github.com/brunorendeiro/cv_icons/blob/main/me/IMG_5440.jpeg?raw=true",
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "flex3",
visible: true,
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
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "h1",
text: ["Bruno Rendeiro"],
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "subtitle",
text: ["Bruno Miguel das Neves Rendeiro"],
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-base",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("3IUrOetUf0KIzbB9Nm2iog#Value", "OutSystems Tech Lead com mais de 6 anos de experiência. Desenvolvi soluções low-code em áreas como saúde, banca, telecomunicações e automóvel. Certificado em Architecture Specialist, Security Specialist e Teach Lead."))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "cv-actions display-flex margin-top-l",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
style: "flex2",
visible: true,
_idProps: {
service: idService,
uuid: "12"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "HomeBlocks/home_Block/Link OnClick");
return controller.downloadCvPdfOnClick$Action(controller.callContext(eventHandlerContext));
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
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "link-underline",
text: ["Download CV"],
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
style: "flex2",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "HomeBlocks/home_Block/Link OnClick");
controller.onClick_ContactarMe$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "btn-secondary",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "link-underline",
text: [$text(getTranslation("TK4AeXpxaEqIrK+eCpCyCQ#Value", "Contactar-me"))],
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}))))))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BRendeiroCV.HomeBlocks.home_Block.mvc$controller", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "BRendeiroCV.languageResources", "BRendeiroCV.clientVariables", "BRendeiroCV.HomeBlocks.home_Block.mvc$translationsResources", "BRendeiroCV.HomeBlocks.home_Block.mvc$debugger"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, BRendeiroCVLanguageResources, BRendeiroCVClientVariables, BRendeiroCV_HomeBlocks_home_Block_mvc_TranslationsResources, BRendeiroCV_HomeBlocks_home_Block_mvc_Debugger) {
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
Controller.prototype.translationResources = BRendeiroCV_HomeBlocks_home_Block_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onClick_ContactarMe$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_ContactarMe");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:TuM+Bp8IGEykfzLOAj1FTQ:/NRWebFlows._5ioy9kobke2cz+EnQWZ8w/NodesShownInESpaceTree.CQ1EPDkyDkyuJjyrxRhCnA/ClientActions.TuM+Bp8IGEykfzLOAj1FTQ:kCsl4HU_pxEsiLgTBPj2bw", "BRendeiroCV", "OnClick_ContactarMe", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:SxQgk+GuokampQjNJJlIuw", callContext.id);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:aYO5dN3JckGe0wuVLLuZIQ", callContext.id);
// Destination: /BRendeiroCV/
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tel:+351967356430", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:TuM+Bp8IGEykfzLOAj1FTQ", callContext.id);
}

};
Controller.prototype._downloadCvPdfOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("DownloadCvPdfOnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:zhlLD03byUSBgaqx_yjAZw:/NRWebFlows._5ioy9kobke2cz+EnQWZ8w/NodesShownInESpaceTree.CQ1EPDkyDkyuJjyrxRhCnA/ClientActions.zhlLD03byUSBgaqx_yjAZw:ILH+Cy55iYSe0SC6IBCNaQ", "BRendeiroCV", "DownloadCvPdfOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:ZfqZWeYLAUaHB+MAnkxNxA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:MhetC8lLQEebYxxv6lO90g", callContext.id);
// Trigger Event: DownloadCV
return controller.downloadCV$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:XK326oCV6kWm0OvtTWeadg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:zhlLD03byUSBgaqx_yjAZw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:zhlLD03byUSBgaqx_yjAZw", callContext.id);
throw ex;

});
};

Controller.prototype.onClick_ContactarMe$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_ContactarMe$Action, callContext);

};
Controller.prototype.downloadCvPdfOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._downloadCvPdfOnClick$Action, callContext);

};
Controller.prototype.downloadCV$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:_5ioy9kobke2cz+EnQWZ8w:/NRWebFlows._5ioy9kobke2cz+EnQWZ8w:KPgf0Vr1eymcEDPaRk1wxA", "BRendeiroCV", "HomeBlocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:CQ1EPDkyDkyuJjyrxRhCnA:/NRWebFlows._5ioy9kobke2cz+EnQWZ8w/NodesShownInESpaceTree.CQ1EPDkyDkyuJjyrxRhCnA:_35_RrCyyJ7CapcdeKmBhA", "BRendeiroCV", "home_Block", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:CQ1EPDkyDkyuJjyrxRhCnA", callContext.id);
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

define("BRendeiroCV.HomeBlocks.home_Block.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("BRendeiroCV.HomeBlocks.home_Block.mvc$translationsResources", ["exports", "BRendeiroCV.HomeBlocks.home_Block.mvc$translationsResources.en-GB"], function (exports, BRendeiroCV_HomeBlocks_home_Block_mvc_translationsResources_enGB) {
return {
"en-GB": {
"translations": BRendeiroCV_HomeBlocks_home_Block_mvc_translationsResources_enGB,
"isRTL": false
}
};
});
define("BRendeiroCV.HomeBlocks.home_Block.mvc$translationsResources.en-GB", [], function () {
return {
"TK4AeXpxaEqIrK+eCpCyCQ#Value": "Contact me",
"3IUrOetUf0KIzbB9Nm2iog#Value": "OutSystems Tech Lead with over 6 years of experience. Developed low-code solutions in sectors such as healthcare, banking, telecommunications, and automotive. Certified as Architecture Specialist, Security Specialist, and Tech Lead."
};
});
