const multer = require('multer');

const mimetypes = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
}
const storage = multer.diskStorage(
  {
    destination: (req, file, callback) => {
      callback(null, 'images')
    },
    filename: (req, file, callback) => {
      const name = file.originalname.split(' ').join('_');

    }
  }
)