const multer = require('multer')
const path = require('path')


//configuration de multer
module.exports = multer ({
    storage: multer.diskStorage({}),
    fileFilter : (req, file ,cb)=>{
        let ext = path.extname(file.originalname)
        if (ext !== ".jpg" && ext !==".jpeg" && ext !==".png"){
            cb(new  Error("Type de fichier non supporté"),false)
            return;
        }
        cb(null,true)
    }
})