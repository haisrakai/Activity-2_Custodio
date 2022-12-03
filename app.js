const http = require('http')
const server = http.createServer(function(req,res) {
    res.write('Hello World')
    res.end()
})

const port = 4001
server.listen(port, function(error){
    if(error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port' + port)
    }
})