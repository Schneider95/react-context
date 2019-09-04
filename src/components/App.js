import React from 'react';
import AppJsx from '../templates/App';

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

    const props = {
      handleKeyUp: this.handleKeyUp,
      language,
      onLanguageChange: this.onLanguageChange,
    };

    return new AppJsx(props).render();
  }
}

export default App;
