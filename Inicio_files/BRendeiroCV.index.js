require(["es6-promise", "tslib"], function (es6promise, tslib) {
require(["OutSystems/ClientRuntime/Main", "BRendeiroCV.appDefinition", "OutSystems/ClientRuntime/Debugger"], function (OutSystems, BRendeiroCVAppDefinition, Debugger) {
var OS = OutSystems.Internal;
OS.Settings.setPlatformSettings({
IndexedDBOffline: false,
UseNewWebSQLImpl: false,
SendEnvParamOnManifestRequest: true
});
if(OS.Navigation.ensureRequestSecurity()) {
return;
}

OutSystemsDebugger.initialize().then(function () {
return OS.Application.default.initialize(BRendeiroCVAppDefinition, OS.Interfaces.Application.InitializationType.Full, new OS.Format.DateTimeFormatInfo("yyyy-MM-dd", "HH:mm:ss"), new OS.Format.NumberFormatInfo(".", "")).then(function (success) {
function initViewPromise() {
return OS.Flow.promise(function (resolve, reject) {
require(["OutSystems/ReactView/Main"], function (OSView) {
try {OSView.Router.load(OS.Application.default);
resolve();
} catch (error) {
reject(error);
}

});
});
};
if(success) {
return initViewPromise();
}


});
}).catch(function (error) {
OS.ErrorHandling.handleError(error);
});
});
});

