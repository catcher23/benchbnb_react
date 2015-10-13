
var Search = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function () {
    BenchStore.addChangeListener(this.handleChange);
  },

  componentWillUnmount: function(){
    BenchStore.removeChangeListener(this.handleChange);
  },

  handleChange: function () {
    this.setState({ benches: BenchStore.all() });
  },
  render: function() {
    return <div>
      <Map />
      <Index benches={ BenchStore.all() }/>
    </div>;
  }
});
