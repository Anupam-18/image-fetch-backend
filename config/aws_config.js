var AWS = require("aws-sdk");
require("dotenv").config();

var s3 = new AWS.S3({
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETACCESSKEY,
  region: process.env.region,
  signatureVersion: "v4",
});

module.exports = s3;
