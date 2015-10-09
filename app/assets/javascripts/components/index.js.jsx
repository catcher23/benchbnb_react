var Index = React.createClass({

  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function () {
    BenchStore.addChangeListener(this.handleChange);
  },

  handleChange: function () {
    this.setState({ benches: BenchStore.all() });
  },

  render: function() {
    var benches = this.state.benches;
    return <div className="list-group">{
      benches.map(function (bench) {
        return <IndexItem key={ bench.id } description={ bench.description } />
      })
    }</div>;
  }
});
