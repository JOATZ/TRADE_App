const jsonServer = require('json-server')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage }) // for parsing multipart/form-data

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json')) // replace 'db.json' with your JSON file

// Increase the limit
server.use(bodyParser.json({ limit: '50mb' }))
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

// Handle file upload
server.post('/upload', upload.single('file'), (req, res) => {
    console.log(
        `File received: ${req.file.originalname}, size: ${req.file.size} bytes`
    )
    res.send('File uploaded successfully')
})

server.use(jsonServer.defaults())

// Specify the port and delay
const port = 3001
const delay = 0

server.use(
    jsonServer.rewriter({
        '/api/*': '/$1'
    })
)

server.use((req, res, next) => {
    setTimeout(next, delay)
})

server.use(router)

server.listen(port, '0.0.0.0', () => {
    console.log(`JSON Server is running on http://0.0.0.0:${port}`)
})
