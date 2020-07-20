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
      document.querySelector('.upload-container__progress-text--file-name').innerHTML = `UPLOADING: ${file.name}`;
      document.querySelector('.upload-container__progress-text').innerHTML = `${progress.loaded} OF ${progress.total} BYTES`;
      const progressBar = document.querySelector('.upload-container__progress-bar');
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