import AWS from 'aws-sdk';
import config from './config';
import { JIGSAW_IMAGE_LIBRARY_BUCKET } from './s3_constants';

AWS.config = config;

export const uploadFile = (userId, file) => {
  return new Promise((resolve, reject) => {

    const imageKey = `${file.name}`;

    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: `${JIGSAW_IMAGE_LIBRARY_BUCKET}/image-library/users/${userId}`,
        Key: imageKey,
        Body: file,
        ACL: "public-read"
      }
    }).on('httpUploadProgress', progress => {
      // document.querySelector('.uploadProgress').textContent = `${progress.loaded} of ${progress.total} bytes.`;
      const progressBar = document.querySelector('.uploadProgress');
      function showProgress() {
        progressBar.max = progress.total;
        progressBar.value = progress.loaded;
        if (progressBar.value < progress.total) {
          setTimeout(showProgress, progress.total);
        }
      };
      showProgress();
    });

    upload.promise()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};