import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './WordMenu.styles';

const WordMenu = (props) => (
  <div className="WordMenuWrapper">

    <Menu id="simple-menu" anchorEl={this.anchorEl} open={Boolean(this.anchorEl)} onClose={this.handleClose}>
      <MenuItem onClick={this.handleClose}>Profile</MenuItem>
      <MenuItem onClick={this.handleClose}>My account</MenuItem>
      <MenuItem onClick={this.handleClose}>Logout</MenuItem>
    </Menu>

  </div>
);

WordMenu.propTypes = {
  // bla: PropTypes.string,
};

WordMenu.defaultProps = {
  // bla: 'test',
};

export default WordMenu;
