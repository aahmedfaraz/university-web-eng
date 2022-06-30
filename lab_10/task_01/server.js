const http = require('http');

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/'){
        res.write('Greetings: Good Morning')
        res.end()
    }
})

server.listen(8080, () => {
    console.log("Server has been started on http://localhost:8080/");
})