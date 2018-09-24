const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/demoApp'));
// Start the app by listening on the default

// app.listen(process.env.PORT || 8080);
var server_port = process.env.server_port || 80
var server_ip_address = process.env.server_port || '0.0.0.0'

app.listen(server_port, server_ip_address, function () {  
        console.log( "Listening on " + server_ip_address + ", port " + server_p$
});
