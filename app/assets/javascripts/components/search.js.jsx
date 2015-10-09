var Search = React.createClass({

  render: function() {
    return <div>
      <Map />
      <Index benches={ BenchStore.all() }/>
    </div>;
  }
});
