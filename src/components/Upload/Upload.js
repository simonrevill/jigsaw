import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as UploadDragAndDropIcon } from '../../icons/upload-drag-and-drop.svg';
import { handleFileUploadError, handleFileUploadSuccess, handleValidation } from './imageValidation';
import { uploadFile } from '../../aws/s3_putObjects';
import { updateDatabase } from '../../aws/dynamodb_updateData';
import { v4 as uuidv4 } from 'uuid';
import setUserImageLibrary from '../../redux/actions/users/setUserImageLibrary';
import ButtonLabel from '../Button/ButtonLabel';
import '../../scss/bem/Upload.scss';

const Upload = ({ currentUserInfo, isActive, setUserImageLibrary }) => {

  const [dragOver, setDragOver] = useState(false);

  // // Check if current user has a bucket.
  // // If not, they'll need a new one creating before they can upload.
  // // This should be done behind the scenes as part of their first upload.
  const { userId } = currentUserInfo;

  const handleImageUpload = (e, dragged = false, files) => {
    //   // Firstly, store the image file/files:
    if (!dragged) var files = [...e.target.files];
    // Convert imagesFiles from a FileList to an array and perform validation.
    // Then, for validation results, return a new array of objects indicating whether validation
    // has succeeded or failed for each particular image:
    const validationResults = handleValidation(files);

    // Split this array into two new filtered arrays:
    const invalidFiles = validationResults.filter(result => !result.hasPassedValidation ? result : null);
    const validFiles = validationResults.filter(result => result.hasPassedValidation ? result : null);

    // Check for any errors:
    if (invalidFiles.length) {
      console.log('Validation errors occurred:');
      // Run a function here 'handleFileUploadError' to display an error message modal
      // prompting the user to retry uploding image. They will recieve a list
      // of files that were not validated:
      invalidFiles.forEach(file => handleFileUploadError(file.name));
      return;
    }

    validFiles.forEach(file => handleFileUploadSuccess(file.name));
    // Proceed to next step - create or add to bucket, write to database etc...

    console.log('validation succeeded!');
    // Check if user has a bucket already...

    if (!currentUserInfo.hasBucket) /* create a new bucket for the user... */ console.log('someone needs a new bucket!');

    files.forEach(file => {
      uploadFile(userId, file)
        .then(storageDataResponse => {
          // info to update database:
          // to work with dynamodb's update_list function,
          // the info object must be returned inside an array:
          const databaseInfo = [{
            id: uuidv4(),
            name: file.name,
            rating: 0,
            url: storageDataResponse.Location
          }];
          return databaseInfo;
        })
        .then(databaseInfo => {
          const [item] = databaseInfo;
          updateDatabase('userImageLibrary', userId, databaseInfo);
          setUserImageLibrary(item);
          const progressBar = document.querySelector('.uploadProgress');
          progressBar.setAttribute('max', '0');
          progressBar.setAttribute('value', '0');
        })
        .catch(err => console.log(err));
    });
  };

  const handleDragOver = e => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = e => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = e => {
    e.preventDefault();
    setDragOver(false);
    const dataTransfer = e.dataTransfer;
    const files = [...dataTransfer.files];
    handleImageUpload(undefined, true, files);
  };

  return (
    <div className={isActive ? "upload d-block" : "upload d-none"}>
      <div className="upload__inner">
        <div className="upload__center" >
          <span className="upload__title">
            Make your own puzzles using custom images!
            <br />
            Jigsaw accepts .jpg & .png image files
          </span>
          <UploadDragAndDropIcon
            className={dragOver ? "upload__icon upload__icon--drag-over" : "upload__icon"}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          />
          <span className="upload__title">
            Drag & drop your image files here to
            <br />
            add them to your user library
            <br />
            or
          </span>
          <ButtonLabel
            buttonText="Browse files"
            htmlFor="browseImages"
          />
          <input
            type="file"
            className="d-none"
            id="browseImages"
            name="browseImages"
            accept="image/png, image/jpeg"
            onChange={handleImageUpload}
            multiple
          />
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { setUserImageLibrary }
)(Upload);