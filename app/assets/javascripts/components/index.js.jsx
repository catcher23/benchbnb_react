var Index = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Index</h1>
      {
        this.props.benches.map(function (bench) {
            return <IndexItem key={ bench.id } bench={bench}/>;
        })
    }
    </div>
    );
  }
});
