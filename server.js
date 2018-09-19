const restify = require('restify')
const server = restify.createServer()

server.get('/', (req, res, next) => {
    res.json({
        message: 'Hello Restify!!!'
    })
    next()
})

server.get('/:name', (req, res, next) => {
    const { name } = req.params
    res.json({ name })
    next()
})

server.listen(8080, 'localhost', () => {
    console.log('Server it\'s running at localhost:8080')
    console.log('Press CTRL+C to stop it')
})