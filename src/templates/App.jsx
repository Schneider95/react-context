import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class AppJsx extends React.Component {
  render() {
    const { handleKeyUp, language, onLanguageChange } = this.props;

    return (
      <div className="ui container">
        <div>
          Select a language :
          <i
            className="flag us"
            onClick={() => onLanguageChange('english')}
            onKeyUp={handleKeyUp}
            role="button"
            tabIndex="0"
          />
          <i
            className="flag nl"
            onClick={() => onLanguageChange('dutch')}
            onKeyUp={handleKeyUp}
            role="button"
            tabIndex="-1"
          />
        </div>

        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default AppJsx;
