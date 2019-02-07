import React, { Component } from 'react';
import Input from '@material-ui/core/Input'
//import { Test } from './NameInsert.styles';


export class NameInsert extends Component { 


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

  handleChange = (event) => {
    console.log(event.target.value)
    const name = event.target.value;
    this.props.onChange(name)
  }

  render () {

    return (
      
      <div className="NameInsertWrapper">
        <Input type='text' className="name-input" placeholder="Enter a Name" value={this.props.name}
          onChange={this.handleChange}>
        </Input>
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


