import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const ButtonJsx = (text) => {
  return (
    <div>
      <ColorContext.Consumer>
        {color => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {value => (
                <div>{value === 'english' ? 'Submit' : 'Vorleggen'}</div>
              )}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    </div>
  );
};

export default ButtonJsx;
