import AWS from 'aws-sdk';
import config from './config';
import { JIGSAW_IMAGE_LIBRARY_BUCKET } from './s3_constants';

AWS.config = config;

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {
    Bucket: JIGSAW_IMAGE_LIBRARY_BUCKET,
    Prefix: 'image-library/images/',
    Delimiter: '/'
  }
});

export const getImageLibrary = () => {
  return new Promise((resolve, reject) => {
    s3.listObjects(function (err, data) {
      if (err) reject(err);

      const folderUrl = 'https://s3.eu-west-2.amazonaws.com/jigsaw-image-library/image-library/images/';
      const href = this.request.httpRequest.endpoint.href;
      const bucketUrl = `${href}${JIGSAW_IMAGE_LIBRARY_BUCKET}`;
      const images = data.Contents.map(image => {
        const imageKey = image.Key;
        const imageUrl = `${bucketUrl}/${imageKey}`;
        return { name: imageKey.slice(21), url: imageUrl };
      });
      // S3 returns the containing folder as one of the images.
      // This filters it out:
      const filteredImages = images.filter(image => image.url !== folderUrl);
      // Return Image URLS:
      resolve(filteredImages);
    });
  });
};