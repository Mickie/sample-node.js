sample-node.js
==============

a sample of dealing with post request using node.js

parse  function router.route and object handle as parameters to server.start. inside server.start function, call router.route
function, read url , get handle property value and postdata chunck as new parameter parse to router.route. inside router.
route, call requestHandler functions with the new assigned parameter postData.
