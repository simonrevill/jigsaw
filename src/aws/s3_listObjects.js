import AWS from 'aws-sdk';
import config from './config';
import { JIGSAW_IMAGE_LIBRARY_BUCKET } from './s3_constants';

AWS.config = config;

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: JIGSAW_IMAGE_LIBRARY_BUCKET }
});

s3.listObjectsV2(function (err, data) {
  if (err) console.log('There was an error listing your objects: ' + err.message);
  // const href = this.request.httpRequest.endpoint.href;
  // const bucketUrl = `${href}${bucketName}/`;
  // const imagesFolderUrl = `${bucketUrl}images/`;
  console.log(data);
});