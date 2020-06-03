import React from 'react';

import { ReactComponent as UploadDragAndDropIcon } from '../../icons/upload-drag-and-drop.svg';

import ButtonLabel from '../Button/ButtonLabel';

import '../../scss/bem/Upload.scss';

const Upload = ({ isActive }) => {

  const handleButtonClick = () => {
    console.log('Button clicked!');
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
          <input type="file" className="d-none" id="browseImages" name="browseImages" accept="image/png, image/jpeg" multiple></input>
        </div>
      </div>
    </div>
  );
};

export default Upload