var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        //alert("initalized");
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        //alert("bindEvents");
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //app.receivedEvent('deviceready');
        //alert("deviceready");
        //alert("take picture!");
        //app.capturePhoto();
        
    },

    capturePhoto: function() {
        navigator.camera.getPicture(app.onSuccess, app.onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI
        });
    },

    onSuccess: function(imageData) {
        var image = document.getElementById('mypicture');
        //image.src = "data:image/jpeg;base64," + imageData;
        console.log(imageData);
        image.src = imageData;
        //alert("success");
    },

    onFail: function(message) {
        alert('Failed because: ' + message);
    },

    getLocation: function() {
        navigator.geolocation.getCurrentPosition(app.locOnSuccess, app.locOnError);
    },

    locOnSuccess: function(position) {
        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;
        var latLong = new google.maps.LatLng(latitude, longitude);

        var mapOptions = {
            center: latLong,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        document.getElementById("map").innerHTML = map;

        var marker = new google.maps.Marker({
                  position: latLong,
                  map: map,
                  title: 'my location'
                });
        alert("Photo take at: " + latLong);
    },    
    
    locOnError: function(error) {
        alert('code: ' + error.code + '\n' + 'message' + error.message + '\n');
    }
    
};








