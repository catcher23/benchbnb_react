ApiUtil = {
  fetchBenches: function(filter){
    filter = filter || {};
    $.get('api/benches', filter, function(benches){
      ApiActions.receiveAll(benches);
    });
  },
  createBench: function(data){
    $.post('api/benches', { bench: data }, function(bench) {
      ApiActions.receiveAll([bench]);
    });
  }
};
