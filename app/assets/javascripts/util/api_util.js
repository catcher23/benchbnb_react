ApiUtil = {
  fetchBenches: function (options) {
    $.ajax($.extend({
      url: "api/benches",

      success: function (benches) {
        ApiActions.recieveAll(benches);
      }
    }, options));
  }
};
