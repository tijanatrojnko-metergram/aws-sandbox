import aws, { S3 } from "aws-sdk";

var bucketParams = {
  Bucket: "tijana-test-bucket",
  ACL: "public-read",
};

export async function createS3() {
  const s3 = new S3();
  s3.createBucket(bucketParams, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Bucket URL is ", data.Location);
    }
  });
}
