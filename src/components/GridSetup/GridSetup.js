import React from 'react';
import '../../scss/bem/GridSetup.scss';

const GridSetup = ({ gridSetting, handleGridSettingClick }) => {

  return (
    <div className="grid-setup">
      <p className="grid-setup__grid-title">Grid</p>
      <div className="grid-setup__grid">
        <div
          className={gridSetting === 0 ? "grid-setup__grid-item grid-setup__grid-item--selected" : "grid-setup__grid-item"}
          data-gridsetting="0"
          onClick={handleGridSettingClick}
        >
          <p className="grid-setup__grid-item-text grid-setup__grid-item-text--none">None</p>
        </div>
        <div
          className={gridSetting === 4 ? "grid-setup__grid-item grid-setup__grid-item--selected" : "grid-setup__grid-item"}
          data-gridsetting="4"
          onClick={handleGridSettingClick}
        >
          <p className="grid-setup__grid-item-text">4 x 4</p>
        </div>
        <div
          className={gridSetting === 5 ? "grid-setup__grid-item grid-setup__grid-item--selected" : "grid-setup__grid-item"}
          data-gridsetting="5"
          onClick={handleGridSettingClick}
        >
          <p className="grid-setup__grid-item-text">5 x 5</p>
        </div>
        <div
          className={gridSetting === 6 ? "grid-setup__grid-item grid-setup__grid-item--selected" : "grid-setup__grid-item"}
          data-gridsetting="6"
          onClick={handleGridSettingClick}
        >
          <p className="grid-setup__grid-item-text">6 x 6</p>
        </div>
        <div
          className={gridSetting === 7 ? "grid-setup__grid-item grid-setup__grid-item--selected" : "grid-setup__grid-item"}
          data-gridsetting="7"
          onClick={handleGridSettingClick}
        >
          <p className="grid-setup__grid-item-text">7 x 7</p>
        </div>
        <div
          className={gridSetting === 8 ? "grid-setup__grid-item grid-setup__grid-item--selected" : "grid-setup__grid-item"}
          data-gridsetting="8"
          onClick={handleGridSettingClick}
        >
          <p className="grid-setup__grid-item-text">8 x 8</p>
        </div>
        <div
          className={gridSetting === 9 ? "grid-setup__grid-item grid-setup__grid-item--selected" : "grid-setup__grid-item"}
          data-gridsetting="9"
          onClick={handleGridSettingClick}
        >
          <p className="grid-setup__grid-item-text">9 x 9</p>
        </div>
        <div
          className={gridSetting === 10 ? "grid-setup__grid-item grid-setup__grid-item--selected" : "grid-setup__grid-item"}
          data-gridsetting="10"
          onClick={handleGridSettingClick}
        >
          <p className="grid-setup__grid-item-text">10 x 10</p>
        </div>
        <div
          className={gridSetting === 15 ? "grid-setup__grid-item grid-setup__grid-item--selected" : "grid-setup__grid-item"}
          data-gridsetting="15"
          onClick={handleGridSettingClick}
        >
          <p className="grid-setup__grid-item-text">15 x 15</p>
        </div>
        <div
          className={gridSetting === 20 ? "grid-setup__grid-item grid-setup__grid-item--selected" : "grid-setup__grid-item"}
          data-gridsetting="20"
          onClick={handleGridSettingClick}
        >
          <p className="grid-setup__grid-item-text">20 x 20</p>
        </div>
        <div
          className={gridSetting === 25 ? "grid-setup__grid-item grid-setup__grid-item--selected" : "grid-setup__grid-item"}
          data-gridsetting="25"
          onClick={handleGridSettingClick}
        >
          <p className="grid-setup__grid-item-text">25 x 25</p>
        </div>
        <div
          className={gridSetting === 30 ? "grid-setup__grid-item grid-setup__grid-item--selected" : "grid-setup__grid-item"}
          data-gridsetting="30"
          onClick={handleGridSettingClick}
        >
          <p className="grid-setup__grid-item-text">30 x 30</p>
        </div>
        <div
          className={gridSetting === 35 ? "grid-setup__grid-item grid-setup__grid-item--selected" : "grid-setup__grid-item"}
          data-gridsetting="35"
          onClick={handleGridSettingClick}
        >
          <p className="grid-setup__grid-item-text">35 x 35</p>
        </div>
        <div
          className={gridSetting === 40 ? "grid-setup__grid-item grid-setup__grid-item--selected" : "grid-setup__grid-item"}
          data-gridsetting="40"
          onClick={handleGridSettingClick}
        >
          <p className="grid-setup__grid-item-text">40 x 40</p>
        </div>
        <div
          className={gridSetting === 45 ? "grid-setup__grid-item grid-setup__grid-item--selected" : "grid-setup__grid-item"}
          data-gridsetting="45"
          onClick={handleGridSettingClick}
        >
          <p className="grid-setup__grid-item-text">45 x 45</p>
        </div>
        <div
          className={gridSetting === 50 ? "grid-setup__grid-item grid-setup__grid-item--selected" : "grid-setup__grid-item"}
          data-gridsetting="50"
          onClick={handleGridSettingClick}
        >
          <p className="grid-setup__grid-item-text">50 x 50</p>
        </div>
      </div>
    </div>
  );
};

export default GridSetup;