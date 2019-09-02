import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import FieldJsx from '../templates/Field';

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Name' : 'Naam';

    return FieldJsx(text);
  }
}

export default Field;
