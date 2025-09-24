define("BRendeiroCV.appDefinition", ["OutSystems/ClientRuntime/Main"], function (OutSystems) {
var OS = OutSystems.Internal;
return {
environmentKey: "3690ccf4-301a-4825-89bf-b49d6454cbc8",
environmentName: "Development",
applicationKey: "0e35c3b7-6525-4376-9528-56dc0de74b98",
applicationName: "CV_BR",
userProviderName: "Users",
debugEnabled: true,
homeModuleName: "BRendeiroCV",
homeModuleKey: "d6edd783-4eda-44fa-a4b9-868180c21be7",
homeModuleControllerName: "BRendeiroCV.controller",
homeModuleLanguageResourcesName: "BRendeiroCV.languageResources",
defaultTransition: "Fade",
errorPageConfig: {
showExceptionStack: false
},
isWeb: true,
personalArea: null,
showWatermark: false
};
});
