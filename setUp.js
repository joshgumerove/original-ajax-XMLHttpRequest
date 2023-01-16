// steps:

// 1. create AJAX object

let xhr = new XMLHttpRequest();

// 2. configure the request (details)
xhr.open("GET", "/", true); // (method, url, async, user, password) method, url are required
// only configures the request -- does not open connection with the server

// 3. send your request to s server --> xhr.send([body])

xhr.send();
// opens a connection with the server and sends the data to the server

// 4. do something with the response (when it arrives)
// different ways to do this:
// usually listing for even:
// 1. load 2. error 3. progress (are most common)

// remember --> ajax can be viewed as engine that sits between browser and server (AJAX handles request and response)
// above uses the XMLHttpRequest object
