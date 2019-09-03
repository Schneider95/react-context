import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

const FieldJsx = (text) => {
  return (
    <div className="ui field">
      <label>
        <LanguageContext.Consumer>
          {value => (
            value === 'english' ? 'Name' : 'Naam'
          )}
        </LanguageContext.Consumer>
      </label>
      <input />
    </div>
  );
};

export default FieldJsx;
