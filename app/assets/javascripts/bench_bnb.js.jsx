$(function() {
  var root = document.getElementById('content');
  var RouteHandler = ReactRouter.Routehandler;
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;
  var App = React.createClass({
    render: function(){
      return (
          <div>
            <header><h1>Bench BnB</h1></header>
            {this.props.children}
          </div>
      );
    }
  });
  var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={Search}/>
      </Route>
  );
  React.render(<Router>{routes}</Router>, root);
});
