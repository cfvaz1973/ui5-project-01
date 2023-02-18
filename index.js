sap.ui.define(
  ["sap/m/Button", "sap/ui/core/mvc/XMLView"],
  function (Button, XMLView) {
    "use strict";

    XMLView.create({
      viewName: "sap.ui.demo.view.App",
    }).then(function (oView) {
      oView.placeAt("content");
    });
  }
);
// comment
