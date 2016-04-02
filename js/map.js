$( document ).ready(function() {
    console.log( "ready!" );

	L.mapbox.accessToken = 'pk.eyJ1IjoibWFsZW5hbG9wZXo1IiwiYSI6ImNpbHBqYzBrMTA4ZnB0c20xemYzM2F2azUifQ.HqfiPXTJxF4hXa1ktcURNw';
  	L.mapbox.map('map-one', 'malenalopez5.pi5gln11').setView([38.8929,-77.0252], 14);

  });