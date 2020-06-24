import React from 'react';
import { connect } from 'react-redux';
import { getGridSetting } from '../../redux/selectors/uiState';
import setGridSetting from '../../redux/actions/uiState/setGridSetting';
import FileInfo from '../FileInfo/FileInfo';
import GridSetup from '../GridSetup/GridSetup';
import Button from '../Button/Button';
import '../../scss/bem/BoardSetup.scss';

const BoardSetup = ({ currentUserInfo, gridSetting, setGridSetting }) => {

  const handleGridSettingClick = e => {
    const gridSetting = parseInt(e.currentTarget.dataset.gridsetting);
    setGridSetting(gridSetting);
  };

  const handlePlayButtonClick = () => console.log('Play button clicked!');

  return (
    <div className="board-setup">
      <div className="board-setup__heading">
        <p className="board-setup__heading-text">Board Setup</p>
      </div>
      <div className="board-setup__config">
        <FileInfo />
        <GridSetup
          gridSetting={gridSetting}
          handleGridSettingClick={handleGridSettingClick}
        />
        <div className="board-setup__play">
          <Button
            buttonText="Play"
            onClick={handlePlayButtonClick}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const gridSetting = getGridSetting(state);
  return { gridSetting };
};

export default connect(
  mapStateToProps,
  { setGridSetting }
)(BoardSetup);