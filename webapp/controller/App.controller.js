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
            onCloseBankDetails:function(){
                this.byId("moreBankDetails").close();
            }

        });
    });
