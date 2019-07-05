const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const testApi = (req, res) => {
    res.json({
        body: 'testApi'
    })
};
app.prepare()
    .then(() => {
        const server = express()

        /* here is for page routes 
        create a pages it will automatically create routes */
        server.get('*', (req, res) => {
            return handle(req, res)
        })

        /* this is post api to handle any type of controller */
        server.post('/api/test', testApi);

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })