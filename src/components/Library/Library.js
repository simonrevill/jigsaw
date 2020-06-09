import React, { useState, useEffect } from 'react';
import { getImageLibrary } from '../../aws/s3_listObjects';
import Preview from '../Preview/Preview';
import BoardSetup from '../BoardSetup/BoardSetup';
import '../../scss/bem/Library.scss';

const Library = ({ currentUserInfo, isActive }) => {
  const [imageLibrary, setImageLibrary] = useState([]);

  // Move this into App component. Create action 'setImageLibrary'
  // that puts the image data into the redux store.
  // Then the library can be passed down as props, instead of loading
  // it when this component mounts.
  // The same can be done for the userLibrary.

  useEffect(() => {
    getImageLibrary()
      .then(data => {
        setImageLibrary(data);
      })
      .catch(err => console.log(err));
  }, []);

  console.log('imageLibrary: ', imageLibrary);

  return (
    <div className={isActive ? 'library d-flex' : 'library d-none'}>
      <Preview
        currentUserInfo={currentUserInfo}
        imageLibrary={imageLibrary}
      />
      <BoardSetup
        currentUserInfo={currentUserInfo}
      />
    </div>
  );
};

export default Library;