import React from 'react';
import { connect } from 'react-redux';
import renderMainImageLibrary from './renderMainImageLibrary';
import renderUserImageLibrary from './renderUserImageLibrary';
import { getActiveImageBrowserTabName, getMenuIsOpen } from '../../redux/selectors/uiState';
import { getUserFavourites, getUserLibraryFavourites } from '../../redux/selectors/users';
import setActiveTab from '../../redux/actions/uiState/setActiveTab';
import toggleMenu from '../../redux/actions/uiState/toggleMenu';
import addFavouriteLibraryImage from '../../redux/actions/users/addFavouriteLibraryImage';
import deleteFavouriteLibraryImage from '../../redux/actions/users/deleteFavouriteLibraryImage';
import deleteFavouriteUserLibraryImage from '../../redux/actions/users/deleteFavouriteUserLibraryImage';
import addFavouriteUserLibraryImage from '../../redux/actions/users/addFavouriteUserLibraryImage';
import setActiveImageBrowserTab from '../../redux/actions/uiState/setActiveImageBrowserTab';
import '../../scss/bem/ImageBrowser.scss';
import { updateDatabase } from '../../aws/dynamodb_updateData';

const ImageBrowser = ({
  currentUserInfo, menuIsOpen, imageLibrary, userImageLibrary,
  activeImageBrowserTabName, setActiveImageBrowserTab, setActiveTab, toggleMenu,
  addFavouriteLibraryImage, deleteFavouriteLibraryImage, favourites, deleteFavouriteUserLibraryImage, addFavouriteUserLibraryImage, userLibraryFavourites, currentSelectedImage }) => {

  const userId = currentUserInfo.userId;

  const handleTabClick = e => setActiveImageBrowserTab(e.currentTarget.dataset.tabname);

  const handleUploadButtonClick = () => {
    if (!menuIsOpen) toggleMenu();
    setActiveTab('Upload');
  };

  const handleToggleLibraryFavourite = e => {
    const browserImageElement = e.currentTarget.parentNode
    const imageId = browserImageElement.dataset.id;
    const isFavourite = e.currentTarget.parentNode.classList.contains('js-favourite-true');

    if (isFavourite) {
      const filteredFavourites = favourites.filter(favourite => favourite.id !== imageId);

      // Transform filteredFavourites for DynamoDb into a new Object using reduce:
      const filteredFavouritesTransformed = filteredFavourites.reduce((accumulator, currentValue) => {
        accumulator[currentValue.id] = currentValue;
        return accumulator;
      }, {});

      // Update db:
      updateDatabase('deleteImageLibraryFavourite', userId, filteredFavouritesTransformed)
        .then(data => {
          console.log("UpdateItem succeeded: ", JSON.stringify(data, undefined, 2));
          // update redux store:
          deleteFavouriteLibraryImage(imageId);
        })
        .catch(err => {
          console.error("Unable to update item: ", JSON.stringify(err, undefined, 2))
        });

      return;
    }

    // else if image is !isFavourite:

    let newFavouriteData = imageLibrary.filter(image => image.id === imageId);

    const newFavourite = {
      name: newFavouriteData[0].name,
      rating: newFavouriteData[0].rating,
      id: newFavouriteData[0].id,
      url: newFavouriteData[0].url
    };

    const newFavourites = favourites.concat(newFavourite);

    // Transform newFavourite for DynamoDb into a new Object using reduce:
    let newFavouritesTransformed = newFavourites.reduce((accumulator, currentValue) => {
      accumulator[currentValue.id] = currentValue;
      return accumulator;
    }, {});

    // Update db:
    updateDatabase('addImageLibraryFavourite', userId, newFavouritesTransformed)
      .then(data => {
        console.log("UpdateItem succeeded: ", JSON.stringify(data, undefined, 2));
        //update redux store:
        addFavouriteLibraryImage(newFavourite);
      })
      .catch(err => {
        console.error("Unable to update item: ", JSON.stringify(err, undefined, 2))
      });
  };

  const handleToggleUserLibraryFavourite = e => {

    console.log('user fav triggers!!');

    const browserImageElement = e.currentTarget.parentNode
    const imageId = browserImageElement.dataset.id;
    const isUserFavourite = e.currentTarget.parentNode.classList.contains('js-favourite-true');

    if (isUserFavourite) {
      const filteredFavourites = userLibraryFavourites.filter(favourite => favourite.id !== imageId);

      // Transform filteredFavourites for DynamoDb into a new Object using reduce:
      const filteredFavouritesTransformed = filteredFavourites.reduce((accumulator, currentValue) => {
        accumulator[currentValue.id] = currentValue;
        return accumulator;
      }, {});

      // Update db:
      updateDatabase('deleteUserImageLibraryFavourite', userId, filteredFavouritesTransformed)
        .then(data => {
          console.log("UpdateItem succeeded: ", JSON.stringify(data, undefined, 2));
          // update redux store:
          deleteFavouriteUserLibraryImage(imageId);
        })
        .catch(err => {
          console.error("Unable to update item: ", JSON.stringify(err, undefined, 2))
        });

      return;
    }

    // else if image is !isUserFavourite:

    let newUserFavouriteData = userImageLibrary.filter(image => image.id === imageId);

    const newUserFavourite = {
      name: newUserFavouriteData[0].name,
      rating: newUserFavouriteData[0].rating,
      id: newUserFavouriteData[0].id,
      url: newUserFavouriteData[0].url
    };

    const newUserFavourites = userLibraryFavourites.concat(newUserFavourite);

    // Transform newFavourite for DynamoDb into a new Object using reduce:
    let newUserFavouritesTransformed = newUserFavourites.reduce((accumulator, currentValue) => {
      accumulator[currentValue.id] = currentValue;
      return accumulator;
    }, {});

    // Update db:
    updateDatabase('addUserImageLibraryFavourite', userId, newUserFavouritesTransformed)
      .then(data => {
        console.log("UpdateItem succeeded: ", JSON.stringify(data, undefined, 2));
        //update redux store:
        addFavouriteUserLibraryImage(newUserFavourite);
      })
      .catch(err => {
        console.error("Unable to update item: ", JSON.stringify(err, undefined, 2))
      });
  };


  return (
    <div className="image-browser">
      <div className="image-browser__tabs">
        <div
          className={activeImageBrowserTabName === 'mainLibrary' ? 'image-browser__tab image-browser__tab-active' : 'image-browser__tab'}
          data-tabname="mainLibrary"
          onClick={handleTabClick}
        >
          <p className="image-browser__tab-title">Main Library</p>
        </div>
        <div className="image-browser__tab-separator"></div>
        <div
          className={activeImageBrowserTabName === 'userLibrary' ? 'image-browser__tab image-browser__tab-active' : 'image-browser__tab'}
          data-tabname="userLibrary"
          onClick={handleTabClick}
        >
          <p className="image-browser__tab-title">User Library</p>
        </div>
      </div>
      {renderMainImageLibrary(activeImageBrowserTabName, imageLibrary, handleToggleLibraryFavourite, currentSelectedImage)}
      {renderUserImageLibrary(activeImageBrowserTabName, userImageLibrary, handleToggleUserLibraryFavourite, currentSelectedImage, handleUploadButtonClick)}
    </div>
  );
};

const mapStateToProps = state => {
  const menuIsOpen = getMenuIsOpen(state);
  const activeImageBrowserTabName = getActiveImageBrowserTabName(state);
  const favourites = getUserFavourites(state);
  const userLibraryFavourites = getUserLibraryFavourites(state);
  return { activeImageBrowserTabName, menuIsOpen, favourites, userLibraryFavourites };
};

export default connect(
  mapStateToProps,
  { setActiveImageBrowserTab, setActiveTab, toggleMenu, addFavouriteLibraryImage, deleteFavouriteLibraryImage, deleteFavouriteUserLibraryImage, addFavouriteUserLibraryImage }
)(ImageBrowser);