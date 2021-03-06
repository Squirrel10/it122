const http = require("http");
const fs = require("fs");


//This command starts an HTTP server
http.createServer((req,res) => {
    var path = req.url.toLowerCase();
    switch(path) {
        case '/':
            console.log('step 1')
            fs.readFile("home.html", (err, data) => {
                console.log('step 1')
             if (err) return console.error(err);
                res.writeHead(200, {'Content-Type': 'text/html'});
             res.end(data.toString());
            });

            console.log('step 2')
            break;
        case '/about':
          fs.readFile("about.html", (err, data) => {
             console.log('step 2')
              if (err) return console.error(err);
               res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data.toString());
            });
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
            break;
    }
}).listen(process.env.PORT || 3000);