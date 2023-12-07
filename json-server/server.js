const jsonServer = require('json-server')
const bodyParser = require('body-parser')
const fs = require('fs')
const multer = require('multer')
const upload = multer() // for parsing multipart/form-data

const server = jsonServer.create()
const router = jsonServer.router('db.json') // replace 'db.json' with your JSON file

// Increase the limit
server.use(bodyParser.json({ limit: '50mb' }))
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

// Handle file upload
server.post('/upload', upload.single('file'), (req, res) => {
    const writeStream = fs.createWriteStream('./uploadedFile')

    req.file.stream.pipe(writeStream)

    writeStream.on('finish', () => {
        res.send('File uploaded successfully')
    })
})

server.use(jsonServer.defaults())
server.use(router)

// Specify the port and delay
const port = 3001
const delay = 50
server.use(
    jsonServer.rewriter({
        '/api/*': '/$1'
    })
)
server.use(jsonServer.defaults())
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    setTimeout(next, delay)
})
server.use(router)

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})
