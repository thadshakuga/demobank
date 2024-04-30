sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/library",
    "sap/m/List",
    "sap/m/StandardListItem",
    "sap/m/Text"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Dialog, Button) {
        "use strict";

        return Controller.extend("com.sap.demobank.controller.App", {
            onInit: function () {
            //alert("This is on Init Function Block")

            //   debugger
            //Check browser lanquage and set the text
                var appLan = navigator.language;
                var i18nLa;
                if (appLan == "es")
                    i18nLa = "i18n_es";
                else
                    i18nLa = "i18n";
                var i18nModel = this.getOwnerComponent().getModel(i18nLa);
                this.getOwnerComponent().setModel(i18nModel, "i18n")
            },
            onOpenBankDetails: function () {
                //create easily
                if (!this.moreDetails) {

                    this.moreDetails = this.loadFragment(
                        { name: "com.sap.demobank.view.fragments.MoreDetails" }
                    );
                }

                this.moreDetails.then(
                    function (oDialog) {
                        //this.oDialog.Open();
                        oDialog.open();
                    }
                );
            },
            onCloseBankDetails: function () {
                this.byId("moreBankDetails").close();
            }

        });
    });
