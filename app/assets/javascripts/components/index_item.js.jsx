var IndexItem = React.createClass({

  render: function() {

    return <a className="index-item list-group-item">
      {this.props.description}
    <br></br>
    </a>;
  }
});
