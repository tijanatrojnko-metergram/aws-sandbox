require("dotenv").config();
import express from "express";
const app = express();
import {createS3} from "./s3-bucket-setup"
import {createDBTable} from "./ddb-table-create"

process.env.AWS_PROFILE = "internship"

async function setupS3(){
    await createS3();
}

async function setupDB(){
  await createDBTable();
}

setupS3();
setupDB();

// app.listen(3001, () => {
//   console.info("Express application started on port 3001");
// });
