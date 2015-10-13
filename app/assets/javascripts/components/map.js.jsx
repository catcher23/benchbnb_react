(function(root){
  function _getCoordsObj(latLng) {
    return {
      lat: latLng.lat(),
      lng: latLng.lng()
    };
  }


  root.Map = React.createClass({
    componentDidMount: function(){
      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(map, mapOptions);
      this.registerListeners();
      this.markers = [];
      this.props.benches.forEach(this.createMarkerFromBench);
    },

    registerListeners: function(){
      var that = this;
      google.maps.event.addListener(this.map, 'idle', function() {
        var bounds = that.map.getBounds();
        var northEast = _getCoordsObj(bounds.getNorthEast());
        var southWest = _getCoordsObj(bounds.getSouthWest());
        //actually issue the request
        bounds = {
          northEast: northEast,
          southWest: southWest
        };
        FilterActions.updateBounds(bounds); //ajax request?
      });
      google.maps.event.addListener(this.map, 'click', function(event) {
        var coords = { lat: event.latLng.lat(), lng: event.latLng.lng() };
        that.props.onMapClick(coords); //adding listener for a click event
      });
    },

    createMarkerFromBench: function (bench) {
      var that = this;
      var pos = new google.maps.LatLng(bench.lat, bench.lng);
      var marker = new google.maps.Marker({
        position: pos,
        map: this.map,
        benchId: bench.id
      });
      marker.addListener('click', function () {
        that.props.onMarkerClick(bench)
      });
      this.markers.push(marker);
    },
  render: function(){
      return ( <div className="map" ref="map">Map</div>);
    }
  });

})(this);
