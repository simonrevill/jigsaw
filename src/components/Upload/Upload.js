import React from 'react';
import { ReactComponent as UploadDragAndDropIcon } from '../../icons/upload-drag-and-drop.svg';
import { handleFileUploadError, handleFileUploadSuccess, handleValidation } from './imageValidation';
import ButtonLabel from '../Button/ButtonLabel';
import '../../scss/bem/Upload.scss';

const Upload = ({ isActive }) => {

  const handleImageUpload = e => {
    // Firstly, convert imagesFiles from a FileList to an array and perform validation.
    // Then, for validation results, return a new array of objects indicating whether validation
    // has succeeded or failed for each particular image:
    const validationResults = handleValidation([...e.target.files]);

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

    // Proceed to next step - create or add to bucket, write to database etc...
    console.log('validation succeeded!');
    validFiles.forEach(file => handleFileUploadSuccess(file.name));

  };

  return (
    <div className={isActive ? "upload d-block" : "upload d-none"}>
      <div className="upload__inner">
        <div className="upload__center">
          <span className="upload__title">
            Make your own puzzles using custom images!
            <br />
            Jigsaw accepts .jpg & .png image files
          </span>
          <UploadDragAndDropIcon
            className="upload__icon"
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

export default Upload