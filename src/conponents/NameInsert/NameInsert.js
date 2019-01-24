import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import {Input } from 'reactstrap';
//import { Test } from './NameInsert.styles';

class NameInsert extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      value: ' '
    };
  }



  componentWillMount = () => {
    console.log('NameInsert will mount');
  }

  componentDidMount = () => {
    console.log('NameInsert mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('NameInsert will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('NameInsert will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('NameInsert did update');
  }

  componentWillUnmount = () => {
    console.log('NameInsert will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }


    return (
      
      <div className="NameInsertWrapper">
        <Input type='text' label='Name' value={this.state.value}
          onChange={e => {
            this.setState({ value: e.target.value })
          }}>
        </Input>
        <Button name="Hi"> </Button>
      </div>
    );
  }
}

NameInsert.propTypes = {
  // bla: PropTypes.string,
};

NameInsert.defaultProps = {
  // bla: 'test',
};

export default NameInsert;
