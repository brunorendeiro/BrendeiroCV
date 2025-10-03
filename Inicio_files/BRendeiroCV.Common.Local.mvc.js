define("BRendeiroCV.Common.Local.mvc$model", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.model$LanguageRecordList"], function (OutSystems, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var GetLanguagesAggrRec = (function (_super) {
__extends(GetLanguagesAggrRec, _super);
function GetLanguagesAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLanguagesAggrRec.RecordListType = BRendeiroCVModel.LanguageRecordList;
GetLanguagesAggrRec.init();
return GetLanguagesAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("GetLanguages", "getLanguagesAggr", "getLanguagesAggr", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLanguagesAggrRec());
}, true, GetLanguagesAggrRec)
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.fromStructure = function (str) {
return new VariablesRecord(new VariablesRecord.RecordClass({
getLanguagesAggr: OS.DataTypes.ImmutableBase.getData(str)
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
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Common.Local");
});
define("BRendeiroCV.Common.Local.mvc$view", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "react", "OutSystems/ReactView/Main", "BRendeiroCV.Common.Local.mvc$model", "BRendeiroCV.Common.Local.mvc$controller", "BRendeiroCV.clientVariables", "OutSystems/ReactWidgets/Main", "BRendeiroCV.model$LanguageRecordList"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, React, OSView, BRendeiroCV_Common_Local_mvc_model, BRendeiroCV_Common_Local_mvc_controller, BRendeiroCVClientVariables, OSWidgets) {
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
        View.displayName = "Common.Local";
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
                return BRendeiroCV_Common_Local_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BRendeiroCV_Common_Local_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(true, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "language"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BRendeiroCV.Common.Local.mvc$controller", ["OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.controller", "BRendeiroCV.languageResources", "BRendeiroCV.clientVariables", "BRendeiroCV.Common.Local.mvc$translationsResources", "BRendeiroCV.Common.Local.mvc$debugger", "BRendeiroCV.Common.Local.mvc$controller.OnReady.globalseo_jsJS", "BRendeiroCV.model$LanguageRecordList"], function (OutSystems, BRendeiroCVModel, BRendeiroCVController, BRendeiroCVLanguageResources, BRendeiroCVClientVariables, BRendeiroCV_Common_Local_mvc_TranslationsResources, BRendeiroCV_Common_Local_mvc_Debugger, BRendeiroCV_Common_Local_mvc_controller_OnReady_globalseo_jsJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getLanguages$AggrRefresh: 0
};
this.dataFetchDependentsGraph = {
getLanguages$AggrRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
Controller.prototype.translationResources = BRendeiroCV_Common_Local_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getLanguages$AggrRefresh = function (maxRecords, startIndex, callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:mg2qHkOryU+mNYr39NJeBA:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg/NodesShownInESpaceTree.GDEXeHDdf0WAPt7Km1yHIw/ScreenDataSets.mg2qHkOryU+mNYr39NJeBA:IXKS3Gi6829IgrzqGiojeA", "BRendeiroCV", "GetLanguages", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Local/GetLanguages");
return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetLanguages", "screenservices/BRendeiroCV/Common/Local/ScreenDataSetGetLanguages", "QhxX4HjJjzYKwy8GDwI+Fw", maxRecords, startIndex, function (b) {
model.variables.getLanguagesAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getLanguagesAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getLanguagesAggr.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, true);

}, function () {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:mg2qHkOryU+mNYr39NJeBA", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getLanguages$AggrRefresh"];
// Client Actions
Controller.prototype._dropdown1OnChange$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Dropdown1OnChange");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:7iLkHY6vJ0qzUjDOZWbJTQ:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg/NodesShownInESpaceTree.GDEXeHDdf0WAPt7Km1yHIw/ClientActions.7iLkHY6vJ0qzUjDOZWbJTQ:rSDqayFFmwo5JuUcNJzKWA", "BRendeiroCV", "Dropdown1OnChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:ajGMO6PBGUCNKsqCo_EOWg", callContext.id);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:hPRQcrQYnUiTYWOJJeyH8Q", callContext.id);
// Execute Action: SetCurrentLocale
OS.SystemActions.setCurrentLocale((((BRendeiroCVClientVariables.getLanguageId() === OS.BuiltinFunctions.textToIdentifier("pt"))) ? ("pt-PT") : ("en-GB")), callContext);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:TbK8xhfMX02jlWeDmyF+mw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:7iLkHY6vJ0qzUjDOZWbJTQ", callContext.id);
}

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
try {OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:4sWugeq8rkWvMrlDFaapLg:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg/NodesShownInESpaceTree.GDEXeHDdf0WAPt7Km1yHIw/ClientActions.4sWugeq8rkWvMrlDFaapLg:+45ArgzPZkTeTtpJ56EkuA", "BRendeiroCV", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:YMfvynKF9UiH4CpZBNxMbQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:y3AnTON2JUaNypXvbK+nUg", callContext.id);
controller.safeExecuteJSNode(BRendeiroCV_Common_Local_mvc_controller_OnReady_globalseo_jsJS, "globalseo_js", "OnReady", {
id: OS.DataConversion.JSNodeParamConverter.to(idService.getId("language"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("g9ft1tpO+kSkuYaBgMIb5w:HOXAUpoRaUS6c72gfFCWcQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:4sWugeq8rkWvMrlDFaapLg", callContext.id);
}

};

Controller.prototype.dropdown1OnChange$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._dropdown1OnChange$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:B4kRGvrnOEmQonA8ir4Pyg:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg:ivuksxjiFREeoaJTHRjeGA", "BRendeiroCV", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("g9ft1tpO+kSkuYaBgMIb5w:GDEXeHDdf0WAPt7Km1yHIw:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg/NodesShownInESpaceTree.GDEXeHDdf0WAPt7Km1yHIw:uhcIlBZZn91ix8EupJ1ytg", "BRendeiroCV", "Local", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:GDEXeHDdf0WAPt7Km1yHIw", callContext.id);
OutSystemsDebugger.pop("g9ft1tpO+kSkuYaBgMIb5w:B4kRGvrnOEmQonA8ir4Pyg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Local On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
define("BRendeiroCV.Common.Local.mvc$controller.OnReady.globalseo_jsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
(function() {
  // Verifica se existe o elemento com id "teste"
  var target = document.getElementById($parameters.id);
  if (target) {
    // Cria o novo bloco de HTML
    var html = `
<div class="globalseo-select globalseo-lang-selector-wrapper globalseo-exclude">
  <details role="group">
    <summary role="button" class="globalseo-lang-selector-loading">
      <svg class="globalseo-lang-selector-loading-icon" width="20" height="20" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.7906 28.9982C14.131 28.9516 11.5622 28.0231 9.48748 26.3584C7.4128 24.6937 5.94973 22.3871 5.328 19.8007M16.7906 28.9982C13.4777 28.9404 10.8853 23.521 11.0009 16.8953C11.1166 10.2697 13.8966 4.94402 17.2094 5.00185M16.7906 28.9982C17.4055 29.0089 18.0021 28.8342 18.5667 28.5M16.7906 28.9982C17.4353 29.0094 17.904 28.9456 18.4338 28.8411M5.328 19.8007C8.73815 21.7699 12.6799 22.9255 16.8953 22.9991C17.5541 23.0116 18.2116 22.9969 18.8663 22.9553M5.328 19.8007C5.09283 18.8151 4.98323 17.8037 5.00182 16.7906C5.03917 14.6509 5.63417 12.6503 6.64706 10.9277M17.2094 5.00185C20.5222 5.05968 23.1147 10.4791 22.9991 17.1047C22.9878 17.7501 22.9513 18.3831 22.8914 19M17.2094 5.00185C19.3374 5.03811 21.4175 5.63986 23.2362 6.74538C25.0548 7.8509 26.5467 9.42037 27.5585 11.2928M17.2094 5.00185C15.0814 4.96382 12.9816 5.49262 11.1255 6.53399C9.26935 7.57536 7.72367 9.09181 6.64706 10.9277M27.5585 11.2928C24.612 13.7563 20.8749 15.0729 17.0349 15.0003C13.0382 14.9306 9.40832 13.4003 6.64706 10.9277M27.5585 11.2928C28.5415 13.1075 29.0375 15.146 28.9982 17.2095C28.9905 17.6459 28.9597 18.0764 28.9068 18.5" 
          stroke="#000000" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        <g style="animation: globalseospin 2s linear infinite; transform-origin: 26px 26px;">
          <circle cx="26" cy="26" r="7.125" stroke="#000000" stroke-width="1.75" stroke-dasharray="31.42" stroke-dashoffset="10.47"></circle>
        </g>
      </svg>
    </summary>
  </details>
</div>`;

    // Adiciona o HTML dentro do elemento
    target.insertAdjacentHTML("beforeend", html);
  }
})();

};
});

define("BRendeiroCV.Common.Local.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"y3AnTON2JUaNypXvbK+nUg": {
getter: function (varBag, idService) {
return varBag.globalseo_jsJSResult.value;
}
},
"mg2qHkOryU+mNYr39NJeBA": {
getter: function (varBag, idService) {
return varBag.model.variables.getLanguagesAggr;
}
},
"N0WAvkba2kmpx8qSsIYq_Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("True2"));
})(varBag.model, idService);
}
},
"UCswTkrueUKF3aZ8Oz46Og": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("language"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("BRendeiroCV.Common.Local.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
