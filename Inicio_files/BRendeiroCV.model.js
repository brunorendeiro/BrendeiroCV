define("BRendeiroCV.model$SpaceRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "BRendeiroCV.model", "OutSystemsUI.model$SpaceRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var SpaceRecord = (function (_super) {
__extends(SpaceRecord, _super);
function SpaceRecord(defaults) {
_super.apply(this, arguments);
}
SpaceRecord.attributesToDeclare = function () {
return [
this.attr("Space", "spaceAttr", "Space", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SpaceRec());
}, true, OutSystemsUIModel.SpaceRec)
].concat(_super.attributesToDeclare.call(this));
};
SpaceRecord.fromStructure = function (str) {
return new SpaceRecord(new SpaceRecord.RecordClass({
spaceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpaceRecord._isAnonymousRecord = true;
SpaceRecord.UniqueId = "9589ecc0-6297-88c2-aca6-b47bcbae782c";
SpaceRecord.init();
return SpaceRecord;
})(OS.DataTypes.GenericRecord);
BRendeiroCVModel.SpaceRecord = SpaceRecord;

});
define("BRendeiroCV.model$SpaceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.model$SpaceRecord"], function (exports, OutSystems, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var SpaceRecordList = (function (_super) {
__extends(SpaceRecordList, _super);
function SpaceRecordList(defaults) {
_super.apply(this, arguments);
}
SpaceRecordList.itemType = BRendeiroCVModel.SpaceRecord;
return SpaceRecordList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.SpaceRecordList = SpaceRecordList;

});
define("BRendeiroCV.model$UserLanguageRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.HTTPRequestHandler.model", "BRendeiroCV.model", "Extension.HTTPRequestHandler.model$UserLanguageRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$HTTPRequestHandler"], function (exports, OutSystems, Extension_HTTPRequestHandlerModel, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var UserLanguageRecord = (function (_super) {
__extends(UserLanguageRecord, _super);
function UserLanguageRecord(defaults) {
_super.apply(this, arguments);
}
UserLanguageRecord.attributesToDeclare = function () {
return [
this.attr("UserLanguage", "userLanguageAttr", "UserLanguage", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_HTTPRequestHandlerModel.UserLanguageRec());
}, true, Extension_HTTPRequestHandlerModel.UserLanguageRec)
].concat(_super.attributesToDeclare.call(this));
};
UserLanguageRecord.fromStructure = function (str) {
return new UserLanguageRecord(new UserLanguageRecord.RecordClass({
userLanguageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserLanguageRecord._isAnonymousRecord = true;
UserLanguageRecord.UniqueId = "0d91522b-fe98-b8e2-225c-65a8c955d8b3";
UserLanguageRecord.init();
return UserLanguageRecord;
})(OS.DataTypes.GenericRecord);
BRendeiroCVModel.UserLanguageRecord = UserLanguageRecord;

});
define("BRendeiroCV.model$LongIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model"], function (exports, OutSystems, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var LongIntegerRecord = (function (_super) {
__extends(LongIntegerRecord, _super);
function LongIntegerRecord(defaults) {
_super.apply(this, arguments);
}
LongIntegerRecord.attributesToDeclare = function () {
return [
this.attr("EntradasSum", "entradasSumAttr", "EntradasSum", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LongIntegerRecord.fromStructure = function (str) {
return new LongIntegerRecord(new LongIntegerRecord.RecordClass({
entradasSumAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LongIntegerRecord._isAnonymousRecord = true;
LongIntegerRecord.UniqueId = "1224280d-3259-c507-6a63-6720937dc229";
LongIntegerRecord.init();
return LongIntegerRecord;
})(OS.DataTypes.GenericRecord);
BRendeiroCVModel.LongIntegerRecord = LongIntegerRecord;

});
define("BRendeiroCV.model$SpaceList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "BRendeiroCV.model", "OutSystemsUI.model$SpaceRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var SpaceList = (function (_super) {
__extends(SpaceList, _super);
function SpaceList(defaults) {
_super.apply(this, arguments);
}
SpaceList.itemType = OutSystemsUIModel.SpaceRec;
return SpaceList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.SpaceList = SpaceList;

});
define("BRendeiroCV.model$AccordionIconPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "BRendeiroCV.model", "OutSystemsUI.model$AccordionIconPositionRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var AccordionIconPositionList = (function (_super) {
__extends(AccordionIconPositionList, _super);
function AccordionIconPositionList(defaults) {
_super.apply(this, arguments);
}
AccordionIconPositionList.itemType = OutSystemsUIModel.AccordionIconPositionRec;
return AccordionIconPositionList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.AccordionIconPositionList = AccordionIconPositionList;

});
define("BRendeiroCV.model$BreakColumnsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "BRendeiroCV.model", "OutSystemsUI.model$BreakColumnsRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var BreakColumnsRecord = (function (_super) {
__extends(BreakColumnsRecord, _super);
function BreakColumnsRecord(defaults) {
_super.apply(this, arguments);
}
BreakColumnsRecord.attributesToDeclare = function () {
return [
this.attr("BreakColumns", "breakColumnsAttr", "BreakColumns", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.BreakColumnsRec());
}, true, OutSystemsUIModel.BreakColumnsRec)
].concat(_super.attributesToDeclare.call(this));
};
BreakColumnsRecord.fromStructure = function (str) {
return new BreakColumnsRecord(new BreakColumnsRecord.RecordClass({
breakColumnsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BreakColumnsRecord._isAnonymousRecord = true;
BreakColumnsRecord.UniqueId = "261685da-2c79-9bcc-3b48-73485e008694";
BreakColumnsRecord.init();
return BreakColumnsRecord;
})(OS.DataTypes.GenericRecord);
BRendeiroCVModel.BreakColumnsRecord = BreakColumnsRecord;

});
define("BRendeiroCV.model$ErrorMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "BRendeiroCV.model", "OutSystemsUI.model$ErrorMessageRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var ErrorMessageRecord = (function (_super) {
__extends(ErrorMessageRecord, _super);
function ErrorMessageRecord(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRecord.attributesToDeclare = function () {
return [
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ErrorMessageRec());
}, true, OutSystemsUIModel.ErrorMessageRec)
].concat(_super.attributesToDeclare.call(this));
};
ErrorMessageRecord.fromStructure = function (str) {
return new ErrorMessageRecord(new ErrorMessageRecord.RecordClass({
errorMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ErrorMessageRecord._isAnonymousRecord = true;
ErrorMessageRecord.UniqueId = "27b5a164-e828-de9b-9068-6831c7908b4a";
ErrorMessageRecord.init();
return ErrorMessageRecord;
})(OS.DataTypes.GenericRecord);
BRendeiroCVModel.ErrorMessageRecord = ErrorMessageRecord;

});
define("BRendeiroCV.model$StatusRec", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model"], function (exports, OutSystems, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var StatusRec = (function (_super) {
__extends(StatusRec, _super);
function StatusRec(defaults) {
_super.apply(this, arguments);
}
StatusRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Entradas", "entradasAttr", "Entradas", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("UserIp", "userIpAttr", "UserIp", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SessionId", "sessionIdAttr", "SessionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Language", "languageAttr", "Language", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Guid", "guidAttr", "Guid", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HasDownloadCV", "hasDownloadCVAttr", "HasDownloadCV", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
StatusRec.init();
return StatusRec;
})(OS.DataTypes.GenericRecord);
BRendeiroCVModel.StatusRec = StatusRec;

});
define("BRendeiroCV.model$LanguageRec", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model"], function (exports, OutSystems, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var LanguageRec = (function (_super) {
__extends(LanguageRec, _super);
function LanguageRec(defaults) {
_super.apply(this, arguments);
}
LanguageRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("link", "linkAttr", "link", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LanguageRec.init();
return LanguageRec;
})(OS.DataTypes.GenericRecord);
BRendeiroCVModel.LanguageRec = LanguageRec;

});
define("BRendeiroCV.model$AccordionIconTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "BRendeiroCV.model", "OutSystemsUI.model$AccordionIconTypeRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var AccordionIconTypeRecord = (function (_super) {
__extends(AccordionIconTypeRecord, _super);
function AccordionIconTypeRecord(defaults) {
_super.apply(this, arguments);
}
AccordionIconTypeRecord.attributesToDeclare = function () {
return [
this.attr("AccordionIconType", "accordionIconTypeAttr", "AccordionIconType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AccordionIconTypeRec());
}, true, OutSystemsUIModel.AccordionIconTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
AccordionIconTypeRecord.fromStructure = function (str) {
return new AccordionIconTypeRecord(new AccordionIconTypeRecord.RecordClass({
accordionIconTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccordionIconTypeRecord._isAnonymousRecord = true;
AccordionIconTypeRecord.UniqueId = "73fae692-0f82-1133-20dc-cc89ef073c01";
AccordionIconTypeRecord.init();
return AccordionIconTypeRecord;
})(OS.DataTypes.GenericRecord);
BRendeiroCVModel.AccordionIconTypeRecord = AccordionIconTypeRecord;

});
define("BRendeiroCV.model$AccordionIconTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.model$AccordionIconTypeRecord"], function (exports, OutSystems, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var AccordionIconTypeRecordList = (function (_super) {
__extends(AccordionIconTypeRecordList, _super);
function AccordionIconTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AccordionIconTypeRecordList.itemType = BRendeiroCVModel.AccordionIconTypeRecord;
return AccordionIconTypeRecordList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.AccordionIconTypeRecordList = AccordionIconTypeRecordList;

});
define("BRendeiroCV.model$ErrorMessageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "BRendeiroCV.model", "OutSystemsUI.model$ErrorMessageRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var ErrorMessageList = (function (_super) {
__extends(ErrorMessageList, _super);
function ErrorMessageList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageList.itemType = OutSystemsUIModel.ErrorMessageRec;
return ErrorMessageList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.ErrorMessageList = ErrorMessageList;

});
define("BRendeiroCV.model$BreakColumnsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.model$BreakColumnsRecord"], function (exports, OutSystems, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var BreakColumnsRecordList = (function (_super) {
__extends(BreakColumnsRecordList, _super);
function BreakColumnsRecordList(defaults) {
_super.apply(this, arguments);
}
BreakColumnsRecordList.itemType = BRendeiroCVModel.BreakColumnsRecord;
return BreakColumnsRecordList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.BreakColumnsRecordList = BreakColumnsRecordList;

});
define("BRendeiroCV.model$StatusList", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.model$StatusRec"], function (exports, OutSystems, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var StatusList = (function (_super) {
__extends(StatusList, _super);
function StatusList(defaults) {
_super.apply(this, arguments);
}
StatusList.itemType = BRendeiroCVModel.StatusRec;
return StatusList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.StatusList = StatusList;

});
define("BRendeiroCV.model$AccordionIconTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "BRendeiroCV.model", "OutSystemsUI.model$AccordionIconTypeRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var AccordionIconTypeList = (function (_super) {
__extends(AccordionIconTypeList, _super);
function AccordionIconTypeList(defaults) {
_super.apply(this, arguments);
}
AccordionIconTypeList.itemType = OutSystemsUIModel.AccordionIconTypeRec;
return AccordionIconTypeList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.AccordionIconTypeList = AccordionIconTypeList;

});
define("BRendeiroCV.model$BreakColumnsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "BRendeiroCV.model", "OutSystemsUI.model$BreakColumnsRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var BreakColumnsList = (function (_super) {
__extends(BreakColumnsList, _super);
function BreakColumnsList(defaults) {
_super.apply(this, arguments);
}
BreakColumnsList.itemType = OutSystemsUIModel.BreakColumnsRec;
return BreakColumnsList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.BreakColumnsList = BreakColumnsList;

});
define("BRendeiroCV.model$ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "BRendeiroCV.model", "OutSystemsUI.model$ColorRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var ColorRecord = (function (_super) {
__extends(ColorRecord, _super);
function ColorRecord(defaults) {
_super.apply(this, arguments);
}
ColorRecord.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ColorRec());
}, true, OutSystemsUIModel.ColorRec)
].concat(_super.attributesToDeclare.call(this));
};
ColorRecord.fromStructure = function (str) {
return new ColorRecord(new ColorRecord.RecordClass({
colorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColorRecord._isAnonymousRecord = true;
ColorRecord.UniqueId = "87351e3b-0fa2-ca59-cf6c-6749c6405006";
ColorRecord.init();
return ColorRecord;
})(OS.DataTypes.GenericRecord);
BRendeiroCVModel.ColorRecord = ColorRecord;

});
define("BRendeiroCV.model$LanguageRecord", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.model$LanguageRec"], function (exports, OutSystems, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var LanguageRecord = (function (_super) {
__extends(LanguageRecord, _super);
function LanguageRecord(defaults) {
_super.apply(this, arguments);
}
LanguageRecord.attributesToDeclare = function () {
return [
this.attr("Language", "languageAttr", "Language", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BRendeiroCVModel.LanguageRec());
}, true, BRendeiroCVModel.LanguageRec)
].concat(_super.attributesToDeclare.call(this));
};
LanguageRecord.fromStructure = function (str) {
return new LanguageRecord(new LanguageRecord.RecordClass({
languageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LanguageRecord._isAnonymousRecord = true;
LanguageRecord.UniqueId = "8a458d2e-450c-9761-a642-05e3eb45b983";
LanguageRecord.init();
return LanguageRecord;
})(OS.DataTypes.GenericRecord);
BRendeiroCVModel.LanguageRecord = LanguageRecord;

});
define("BRendeiroCV.model$AccordionIconPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "BRendeiroCV.model", "OutSystemsUI.model$AccordionIconPositionRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var AccordionIconPositionRecord = (function (_super) {
__extends(AccordionIconPositionRecord, _super);
function AccordionIconPositionRecord(defaults) {
_super.apply(this, arguments);
}
AccordionIconPositionRecord.attributesToDeclare = function () {
return [
this.attr("AccordionIconPosition", "accordionIconPositionAttr", "AccordionIconPosition", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AccordionIconPositionRec());
}, true, OutSystemsUIModel.AccordionIconPositionRec)
].concat(_super.attributesToDeclare.call(this));
};
AccordionIconPositionRecord.fromStructure = function (str) {
return new AccordionIconPositionRecord(new AccordionIconPositionRecord.RecordClass({
accordionIconPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccordionIconPositionRecord._isAnonymousRecord = true;
AccordionIconPositionRecord.UniqueId = "ab72f035-aa34-ddb5-ec31-3dc02adb1f18";
AccordionIconPositionRecord.init();
return AccordionIconPositionRecord;
})(OS.DataTypes.GenericRecord);
BRendeiroCVModel.AccordionIconPositionRecord = AccordionIconPositionRecord;

});
define("BRendeiroCV.model$AccordionIconPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.model$AccordionIconPositionRecord"], function (exports, OutSystems, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var AccordionIconPositionRecordList = (function (_super) {
__extends(AccordionIconPositionRecordList, _super);
function AccordionIconPositionRecordList(defaults) {
_super.apply(this, arguments);
}
AccordionIconPositionRecordList.itemType = BRendeiroCVModel.AccordionIconPositionRecord;
return AccordionIconPositionRecordList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.AccordionIconPositionRecordList = AccordionIconPositionRecordList;

});
define("BRendeiroCV.model$ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.model$ColorRecord"], function (exports, OutSystems, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var ColorRecordList = (function (_super) {
__extends(ColorRecordList, _super);
function ColorRecordList(defaults) {
_super.apply(this, arguments);
}
ColorRecordList.itemType = BRendeiroCVModel.ColorRecord;
return ColorRecordList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.ColorRecordList = ColorRecordList;

});
define("BRendeiroCV.model$GutterSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "BRendeiroCV.model", "OutSystemsUI.model$GutterSizeRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var GutterSizeRecord = (function (_super) {
__extends(GutterSizeRecord, _super);
function GutterSizeRecord(defaults) {
_super.apply(this, arguments);
}
GutterSizeRecord.attributesToDeclare = function () {
return [
this.attr("GutterSize", "gutterSizeAttr", "GutterSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.GutterSizeRec());
}, true, OutSystemsUIModel.GutterSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
GutterSizeRecord.fromStructure = function (str) {
return new GutterSizeRecord(new GutterSizeRecord.RecordClass({
gutterSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GutterSizeRecord._isAnonymousRecord = true;
GutterSizeRecord.UniqueId = "a5018402-fa6c-90c5-e826-e54b2748cedc";
GutterSizeRecord.init();
return GutterSizeRecord;
})(OS.DataTypes.GenericRecord);
BRendeiroCVModel.GutterSizeRecord = GutterSizeRecord;

});
define("BRendeiroCV.model$StatusRecord", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.model$StatusRec"], function (exports, OutSystems, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var StatusRecord = (function (_super) {
__extends(StatusRecord, _super);
function StatusRecord(defaults) {
_super.apply(this, arguments);
}
StatusRecord.attributesToDeclare = function () {
return [
this.attr("Status", "statusAttr", "Status", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BRendeiroCVModel.StatusRec());
}, true, BRendeiroCVModel.StatusRec)
].concat(_super.attributesToDeclare.call(this));
};
StatusRecord.fromStructure = function (str) {
return new StatusRecord(new StatusRecord.RecordClass({
statusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StatusRecord._isAnonymousRecord = true;
StatusRecord.UniqueId = "a781ed4e-b7e3-3327-1e35-596f24b8c836";
StatusRecord.init();
return StatusRecord;
})(OS.DataTypes.GenericRecord);
BRendeiroCVModel.StatusRecord = StatusRecord;

});
define("BRendeiroCV.model$StatusRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.model$StatusRecord"], function (exports, OutSystems, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var StatusRecordList = (function (_super) {
__extends(StatusRecordList, _super);
function StatusRecordList(defaults) {
_super.apply(this, arguments);
}
StatusRecordList.itemType = BRendeiroCVModel.StatusRecord;
return StatusRecordList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.StatusRecordList = StatusRecordList;

});
define("BRendeiroCV.model$LongIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.model$LongIntegerRecord"], function (exports, OutSystems, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var LongIntegerRecordList = (function (_super) {
__extends(LongIntegerRecordList, _super);
function LongIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
LongIntegerRecordList.itemType = BRendeiroCVModel.LongIntegerRecord;
return LongIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.LongIntegerRecordList = LongIntegerRecordList;

});
define("BRendeiroCV.model$ErrorMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.model$ErrorMessageRecord"], function (exports, OutSystems, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var ErrorMessageRecordList = (function (_super) {
__extends(ErrorMessageRecordList, _super);
function ErrorMessageRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRecordList.itemType = BRendeiroCVModel.ErrorMessageRecord;
return ErrorMessageRecordList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.ErrorMessageRecordList = ErrorMessageRecordList;

});
define("BRendeiroCV.model$UserLanguageList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.HTTPRequestHandler.model", "BRendeiroCV.model", "Extension.HTTPRequestHandler.model$UserLanguageRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$HTTPRequestHandler"], function (exports, OutSystems, Extension_HTTPRequestHandlerModel, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var UserLanguageList = (function (_super) {
__extends(UserLanguageList, _super);
function UserLanguageList(defaults) {
_super.apply(this, arguments);
}
UserLanguageList.itemType = Extension_HTTPRequestHandlerModel.UserLanguageRec;
return UserLanguageList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.UserLanguageList = UserLanguageList;

});
define("BRendeiroCV.model$LanguageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.model$LanguageRecord"], function (exports, OutSystems, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var LanguageRecordList = (function (_super) {
__extends(LanguageRecordList, _super);
function LanguageRecordList(defaults) {
_super.apply(this, arguments);
}
LanguageRecordList.itemType = BRendeiroCVModel.LanguageRecord;
return LanguageRecordList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.LanguageRecordList = LanguageRecordList;

});
define("BRendeiroCV.model$UserLanguageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.model$UserLanguageRecord"], function (exports, OutSystems, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var UserLanguageRecordList = (function (_super) {
__extends(UserLanguageRecordList, _super);
function UserLanguageRecordList(defaults) {
_super.apply(this, arguments);
}
UserLanguageRecordList.itemType = BRendeiroCVModel.UserLanguageRecord;
return UserLanguageRecordList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.UserLanguageRecordList = UserLanguageRecordList;

});
define("BRendeiroCV.model$SideMenuBehaviorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "BRendeiroCV.model", "OutSystemsUI.model$SideMenuBehaviorRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var SideMenuBehaviorList = (function (_super) {
__extends(SideMenuBehaviorList, _super);
function SideMenuBehaviorList(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorList.itemType = OutSystemsUIModel.SideMenuBehaviorRec;
return SideMenuBehaviorList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.SideMenuBehaviorList = SideMenuBehaviorList;

});
define("BRendeiroCV.model$ColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "BRendeiroCV.model", "OutSystemsUI.model$ColorRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var ColorList = (function (_super) {
__extends(ColorList, _super);
function ColorList(defaults) {
_super.apply(this, arguments);
}
ColorList.itemType = OutSystemsUIModel.ColorRec;
return ColorList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.ColorList = ColorList;

});
define("BRendeiroCV.model$GutterSizeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "BRendeiroCV.model", "OutSystemsUI.model$GutterSizeRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var GutterSizeList = (function (_super) {
__extends(GutterSizeList, _super);
function GutterSizeList(defaults) {
_super.apply(this, arguments);
}
GutterSizeList.itemType = OutSystemsUIModel.GutterSizeRec;
return GutterSizeList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.GutterSizeList = GutterSizeList;

});
define("BRendeiroCV.model$SideMenuBehaviorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "BRendeiroCV.model", "OutSystemsUI.model$SideMenuBehaviorRec", "BRendeiroCV.referencesHealth", "BRendeiroCV.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var SideMenuBehaviorRecord = (function (_super) {
__extends(SideMenuBehaviorRecord, _super);
function SideMenuBehaviorRecord(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorRecord.attributesToDeclare = function () {
return [
this.attr("SideMenuBehavior", "sideMenuBehaviorAttr", "SideMenuBehavior", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SideMenuBehaviorRec());
}, true, OutSystemsUIModel.SideMenuBehaviorRec)
].concat(_super.attributesToDeclare.call(this));
};
SideMenuBehaviorRecord.fromStructure = function (str) {
return new SideMenuBehaviorRecord(new SideMenuBehaviorRecord.RecordClass({
sideMenuBehaviorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SideMenuBehaviorRecord._isAnonymousRecord = true;
SideMenuBehaviorRecord.UniqueId = "e3607d6b-9254-5e57-93fb-eb99fc16b7e7";
SideMenuBehaviorRecord.init();
return SideMenuBehaviorRecord;
})(OS.DataTypes.GenericRecord);
BRendeiroCVModel.SideMenuBehaviorRecord = SideMenuBehaviorRecord;

});
define("BRendeiroCV.model$LanguageList", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.model$LanguageRec"], function (exports, OutSystems, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var LanguageList = (function (_super) {
__extends(LanguageList, _super);
function LanguageList(defaults) {
_super.apply(this, arguments);
}
LanguageList.itemType = BRendeiroCVModel.LanguageRec;
return LanguageList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.LanguageList = LanguageList;

});
define("BRendeiroCV.model$GutterSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.model$GutterSizeRecord"], function (exports, OutSystems, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var GutterSizeRecordList = (function (_super) {
__extends(GutterSizeRecordList, _super);
function GutterSizeRecordList(defaults) {
_super.apply(this, arguments);
}
GutterSizeRecordList.itemType = BRendeiroCVModel.GutterSizeRecord;
return GutterSizeRecordList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.GutterSizeRecordList = GutterSizeRecordList;

});
define("BRendeiroCV.model$SideMenuBehaviorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BRendeiroCV.model", "BRendeiroCV.model$SideMenuBehaviorRecord"], function (exports, OutSystems, BRendeiroCVModel) {
var OS = OutSystems.Internal;
var SideMenuBehaviorRecordList = (function (_super) {
__extends(SideMenuBehaviorRecordList, _super);
function SideMenuBehaviorRecordList(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorRecordList.itemType = BRendeiroCVModel.SideMenuBehaviorRecord;
return SideMenuBehaviorRecordList;
})(OS.DataTypes.GenericRecordList);
BRendeiroCVModel.SideMenuBehaviorRecordList = SideMenuBehaviorRecordList;

});
define("BRendeiroCV.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var BRendeiroCVModel = exports;
Object.defineProperty(BRendeiroCVModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["d6edd783-4eda-44fa-a4b9-868180c21be7"];
}
});

BRendeiroCVModel.staticEntities = {};
BRendeiroCVModel.staticEntities.language = {};
var getLanguageRecord = function (record) {
return BRendeiroCVModel.module.staticEntities["603eb7be-06a9-491b-a5f3-61a1e35e6814"][record];
};
Object.defineProperty(BRendeiroCVModel.staticEntities.language, "gb", {
get: function () {
return getLanguageRecord("cf220693-d167-4721-9a1c-2fb00d7302e1");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.language, "pt", {
get: function () {
return getLanguageRecord("eab7df59-8a61-496b-ad9b-f3297a2b26e7");
}
});

BRendeiroCVModel.staticEntities.sideMenuBehavior = {};
var getSideMenuBehaviorRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["11a5937b-e94d-4250-99a8-9c8358d3d965"][record];
};
Object.defineProperty(BRendeiroCVModel.staticEntities.sideMenuBehavior, "visible", {
get: function () {
return getSideMenuBehaviorRecord("25b95337-61e5-4cc7-95a0-fb2bee22c75f");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.sideMenuBehavior, "expandable", {
get: function () {
return getSideMenuBehaviorRecord("db935269-7a37-40aa-898b-e17e546a932a");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.sideMenuBehavior, "overlay", {
get: function () {
return getSideMenuBehaviorRecord("f194be06-0135-4afc-9be2-3f9a7ecd107c");
}
});

BRendeiroCVModel.staticEntities.gutterSize = {};
var getGutterSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["2e81a1e8-4fa4-4bd0-a945-65352999b0be"][record];
};
Object.defineProperty(BRendeiroCVModel.staticEntities.gutterSize, "xXLarge", {
get: function () {
return getGutterSizeRecord("087ea4c4-96ff-4fc5-87c9-70e35c61fe6e");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.gutterSize, "medium", {
get: function () {
return getGutterSizeRecord("12874371-fb77-4707-afda-cdddbba81173");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.gutterSize, "none", {
get: function () {
return getGutterSizeRecord("1a6cb2a2-b448-4f08-ba92-5bd24d30a422");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.gutterSize, "extraLarge", {
get: function () {
return getGutterSizeRecord("8d669ecd-b220-4b80-b57b-4700987734dd");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.gutterSize, "small", {
get: function () {
return getGutterSizeRecord("96f816b9-2511-49f9-8e9c-c6ab4ff8683e");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.gutterSize, "large", {
get: function () {
return getGutterSizeRecord("a9dce78b-0487-49ef-b5c0-d3054293816b");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.gutterSize, "base", {
get: function () {
return getGutterSizeRecord("b7549354-102c-45e6-8c2e-b171c6f589c5");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.gutterSize, "extraSmall", {
get: function () {
return getGutterSizeRecord("b8734df5-7557-4609-a566-cf5c35a6dade");
}
});

BRendeiroCVModel.staticEntities.accordionIconType = {};
var getAccordionIconTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["635cc1de-f6de-4b65-baf1-c661bc518266"][record];
};
Object.defineProperty(BRendeiroCVModel.staticEntities.accordionIconType, "custom", {
get: function () {
return getAccordionIconTypeRecord("586a9223-5e9e-44d2-9405-4a511c4928ee");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.accordionIconType, "plusMinus", {
get: function () {
return getAccordionIconTypeRecord("a4609550-92ab-4e3b-bb2b-7e1f9759b5ed");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.accordionIconType, "caret", {
get: function () {
return getAccordionIconTypeRecord("b16c3109-4152-4df5-a403-ebb92631443c");
}
});

BRendeiroCVModel.staticEntities.breakColumns = {};
var getBreakColumnsRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["68f74593-a5c4-4e65-858b-f44211eaf122"][record];
};
Object.defineProperty(BRendeiroCVModel.staticEntities.breakColumns, "none", {
get: function () {
return getBreakColumnsRecord("0712904e-03be-4b5f-9b9e-ecc640f84913");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.breakColumns, "first", {
get: function () {
return getBreakColumnsRecord("3d55ca44-9c70-4bd4-bf96-7d0a7ec1c3b6");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.breakColumns, "all", {
get: function () {
return getBreakColumnsRecord("63e0af38-8b6c-4970-b96a-acd8c6d863e4");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.breakColumns, "middle", {
get: function () {
return getBreakColumnsRecord("694d423c-ce17-45a1-9993-cb57c30ec674");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.breakColumns, "last", {
get: function () {
return getBreakColumnsRecord("6c98320a-c178-4925-b42b-7165ed805ea0");
}
});

BRendeiroCVModel.staticEntities.space = {};
var getSpaceRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["8fb3d471-82a4-439c-9cc1-0555dfa91451"][record];
};
Object.defineProperty(BRendeiroCVModel.staticEntities.space, "large", {
get: function () {
return getSpaceRecord("51b55067-e608-49ed-9f00-1faf9e4a694a");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.space, "medium", {
get: function () {
return getSpaceRecord("7340e97f-de64-4337-ad0d-1defcab8adb2");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.space, "xXLarge", {
get: function () {
return getSpaceRecord("823213f8-9df9-4de0-8aba-2b5566e6f87d");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.space, "extraSmall", {
get: function () {
return getSpaceRecord("83adf9ba-fbcf-4ce0-b4a4-bc6330956b89");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.space, "small", {
get: function () {
return getSpaceRecord("919210a5-6b3b-40c9-9a28-b4e2c28a46f8");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.space, "base", {
get: function () {
return getSpaceRecord("f0572ad3-54ac-4755-8c8e-a9004171fcb1");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.space, "extraLarge", {
get: function () {
return getSpaceRecord("f8dafab9-63b9-40b2-9755-f2f8fa3d6e84");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.space, "none", {
get: function () {
return getSpaceRecord("fb937b97-bd94-4ba4-80ff-446cb3bdf6ae");
}
});

BRendeiroCVModel.staticEntities.accordionIconPosition = {};
var getAccordionIconPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["a848db2d-fe6c-4df1-8c10-8bdb3c2e948a"][record];
};
Object.defineProperty(BRendeiroCVModel.staticEntities.accordionIconPosition, "left", {
get: function () {
return getAccordionIconPositionRecord("0395cba2-9124-4125-ad88-d6bab39b2253");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.accordionIconPosition, "right", {
get: function () {
return getAccordionIconPositionRecord("8532648f-6556-4b3b-a42c-a3ba091d5efd");
}
});

BRendeiroCVModel.staticEntities.color = {};
var getColorRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["cb6d1da7-26d4-45d9-bc22-9a4c482e6ce2"][record];
};
Object.defineProperty(BRendeiroCVModel.staticEntities.color, "neutral9", {
get: function () {
return getColorRecord("04a6c700-0ae5-44d5-81ce-34ec81d72c1c");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "grape", {
get: function () {
return getColorRecord("0d81324f-81ae-44eb-b81e-cd27ebce7460");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "neutral7", {
get: function () {
return getColorRecord("1434454b-4d44-4ec7-a9ee-8353529b1621");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "neutral10", {
get: function () {
return getColorRecord("1566893e-a30d-405f-878b-e64efdab7f7b");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "teal", {
get: function () {
return getColorRecord("19254415-08b2-4887-a6cf-36433bb1ade0");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "primary", {
get: function () {
return getColorRecord("1df261bf-454e-49a0-951e-87f6077cbbc1");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "neutral4", {
get: function () {
return getColorRecord("20d4e7d1-c296-4853-b584-d2b004ddf9f5");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "neutral8", {
get: function () {
return getColorRecord("31cd8495-438d-4825-8a93-c083bf6f016a");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "indigo", {
get: function () {
return getColorRecord("47b9565a-4f82-4a9d-a543-4aaa707853ac");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "orange", {
get: function () {
return getColorRecord("4d20d5b8-5570-4e18-9345-55772434a9ad");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "lime", {
get: function () {
return getColorRecord("50b20d51-09a6-43df-aa5d-6ae3c99f31e8");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "cyan", {
get: function () {
return getColorRecord("59edafdd-089e-409e-a2d2-78298e55e0f2");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "secondary", {
get: function () {
return getColorRecord("61f545b9-e074-40ee-a884-8102a56d9ee7");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "neutral6", {
get: function () {
return getColorRecord("69c65fbc-5ddc-4e41-afcf-03acff40e7a8");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "yellow", {
get: function () {
return getColorRecord("80145099-0e84-4301-902b-2bd6a933e319");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "neutral2", {
get: function () {
return getColorRecord("8577e423-4296-434f-9ca1-9a18b91e0c29");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "neutral1", {
get: function () {
return getColorRecord("9946980c-176a-4345-90ff-312523579ef0");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "neutral3", {
get: function () {
return getColorRecord("b7447296-c2b5-4d01-883b-b49d25b1c8a6");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "transparent", {
get: function () {
return getColorRecord("b87c59d9-4a95-4567-876d-b978ca413429");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "violet", {
get: function () {
return getColorRecord("bb39306e-ce82-47a7-9c0f-a78f92ff53c6");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "blue", {
get: function () {
return getColorRecord("c1bb8b1b-2f09-4fe9-bec9-eeb243b903d5");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "neutral5", {
get: function () {
return getColorRecord("c1d63249-fde7-4438-b4c9-d445bcfc9257");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "red", {
get: function () {
return getColorRecord("d6c564f5-847a-4155-ba84-91b826bd676f");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "pink", {
get: function () {
return getColorRecord("e9991560-a98c-431e-a583-b707840dc2f3");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "green", {
get: function () {
return getColorRecord("ede4099b-595f-47f0-98ed-583414f4f6bd");
}
});

Object.defineProperty(BRendeiroCVModel.staticEntities.color, "neutral0", {
get: function () {
return getColorRecord("fb934ce5-6b33-4c96-8d40-b06352706a8d");
}
});

});
