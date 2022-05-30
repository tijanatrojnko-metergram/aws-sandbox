require ("dotenv").config();
import express from "express";
const app = express();

import aws, { S3 } from "aws-sdk";
import multer from "multer";
import multers3 from "multer-s3";
const s3 = new S3();

process.env.AWS_PROFILE = "internship"
// aws.config.update({
//     secretAccessKey: process.env.ACCESS_SECRET,
//     accessKeyId: process.env.ACCESS_KEY,
//     region: process.env.REGION
// })

// const createBucket = (bucket, callback) => {
//     s3.createBucket({Bucket: bucket, ACL: "public-read"}, err => {
//       if (err) {
//         console.log(err)
//         callback(err)
//       } else {
//         console.log(`Created bucket ${bucket} successfully`)
//         callback(null, bucket)
//       }
//     })
//   }

  var params = {
    Bucket: 'tijana-test-bucket',
    ACL: "private",
  };
  s3.createBucket(params, function(err, data) {
    if(err)
        console.log(err, err.stack); 
    else
        console.log(data);           
  });

//const BUCKET = createBucket.prototype.bucket;

const upload = multer({
    storage: multers3({
        s3: s3,
        acl: "public-read",
        bucket: BUCKET,
        key: function (req, file, cb) {
            console.log(file);
            cb(null, file.originalname)
        }
    })
}) //put object od s3

app.get("/", async(req,res)=>{
    res.send('AWS S3 Playground Home Page')
})

app.post('/upload', upload.single('file'), async function (req, res, next) {

    res.send('Successfully uploaded ' + req.file.destination + ' destination!')

})

app.listen(3001, () => {
    console.info('Express application started on port 3001');
  });