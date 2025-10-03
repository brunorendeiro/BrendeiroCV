define("BRendeiroCV.clientVariables", ["OutSystems/ClientRuntime/Main"], function (OutSystems) {
var OS = OutSystems.Internal;
var ClientVariables = (function (_super) {
var clientVarsService;
function ClientVariables() {
clientVarsService = OS.Injector.resolve(OS.ServiceNames.ClientVariablesService);
}
ClientVariables.prototype.getLanguageId = function () {
return clientVarsService.getVariable("LanguageId", "BRendeiroCV", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setLanguageId = function (value) {
return clientVarsService.setVariable("LanguageId", "BRendeiroCV", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getClientGuid = function () {
return clientVarsService.getVariable("ClientGuid", "BRendeiroCV", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setClientGuid = function (value) {
return clientVarsService.setVariable("ClientGuid", "BRendeiroCV", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.serialize = function () {
return {
LanguageId: OS.DataConversion.ServerDataConverter.to(this.getLanguageId(), OS.DataTypes.DataTypes.Text),
ClientGuid: OS.DataConversion.ServerDataConverter.to(this.getClientGuid(), OS.DataTypes.DataTypes.Text)
};
};
return ClientVariables;
})();
return new ClientVariables();
});
