import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import UserCreate from './UserCreate';

class App extends React.Component {
  state = {
    language: 'english',
  };

  onLanguageChange = (language) => {
    this.setState({ language });
  }

  handleKeyUp = (language) => {
    this.onLanguageChange(language);
  }

  render() {
    const { language } = this.state;

    return (
      <div className="ui container">
        <div>
          Select a language :
          <i
            className="flag us"
            onClick={() => this.onLanguageChange('english')}
            onKeyUp={this.handleKeyUp}
            role="button"
            tabIndex="0"
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange('dutch')}
            onKeyUp={this.handleKeyUp}
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

export default App;
