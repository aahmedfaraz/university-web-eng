const http = require('http');

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/'){
        res.write('Greetings: Good Morning')
        res.end()
    } else if (req.method === 'GET' && req.url === '/posts'){
        console.log(['post1', 'post2', 'post3', 'post4']);
        console.log(JSON.stringify(['post1', 'post2', 'post3', 'post4']));
        res.write(JSON.stringify(['post1', 'post2', 'post3', 'post4']))
        res.end()
    } else if (req.method === 'GET' && req.url === '/credentials'){
        console.log({
            name: "ahmed faraz",
            email: "ahmedfaraz@gmail.com",
            password: "12345"
        });
        console.log(JSON.stringify({
            name: "ahmed faraz",
            email: "ahmedfaraz@gmail.com",
            password: "12345"
        }));
        res.write(JSON.stringify({
            name: "ahmed faraz",
            email: "ahmedfaraz@gmail.com",
            password: "12345"
        }))
        res.end()
    }
})

server.listen(8080, () => {
    console.log("Server has been started on http://localhost:8080/");
})