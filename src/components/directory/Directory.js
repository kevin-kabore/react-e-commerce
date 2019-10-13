import React, { Component } from 'react';
import { SECTIONS } from '../../data';
import MenuItem from '../menu-item/MenuItem';
import './directory.styles.scss';

class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: SECTIONS,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
