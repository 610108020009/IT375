const http = require('http');
// create server
const server = http.createServer((req,res) =>{
    res.end('Hello from the server');

});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Response data from port 3000');
});