var exec = require("child_process").exec;
var querystring = require("querystring");
function start(response,postData) {
    console.log("Request handler 'start' was called.");

//response.write("start handler was called",function(){
//    var startTime = new Date().getTime();
//    while (new Date().getTime() < startTime + 10000);
//    response.write("callback was called");
//    response.end();
//})
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+'</form>'+
        '</body>'+
        '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
function upload(response,postData) {
    console.log("Request handler 'upload' was called.");
    response.write(querystring.parse(postData).text);
    response.end();
}
exports.start = start;
exports.upload = upload;