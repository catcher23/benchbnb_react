(function(root){
  var _benches = [];
  var CHANGE_EVENT = "change";

  var resetBenches = function(benches){
  _benches = benches.slice(0);
};

  var BenchStore = root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _benches.slice(0);
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

  dispatcherID: AppDispatcher.register(function(payload){
     if(payload.actionType === BenchConstants.BENCHES_RECEIVED){
         var result = resetBenches(payload.benches);
         BenchStore.emit(CHANGE_EVENT);
     }
   })
  });
})(this);
