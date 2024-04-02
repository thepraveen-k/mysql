const express = require('express')
const app = express()

const multer = require('multer')
const storageConfig = multer.diskStorage({           //storage config
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
const upload = multer({storage: storageConfig})


app.get('/', (req,res) => {

    res.send('node server working')
})

app.post('/api/upload',upload.single('file'), (req,res) => {
    res.json(req.file)
})


const port = process.env.PORT || 3000;

app.listen(port, (req,res)=> {
    console.log(`server is connected on port:${port} `)
})