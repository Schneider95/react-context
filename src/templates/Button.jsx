import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const ButtonJsx = (props) => {

  return (
    <div>
      <ColorContext.Consumer>
        {(color) =>
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) => this.renderSubmit(value)}
            </LanguageContext.Consumer>
          </button>
        }
      </ColorContext.Consumer>
    </div>
  );
};

export default ButtonJsx;
