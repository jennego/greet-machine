import React, { PureComponent } from 'react';
//import { Test } from './PhraseDisplay.styles';
import { Words } from '../requests.js'

class PhraseDisplay extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      findWord: ' ',
      word_def: 'hi'
    };

    const wordList = this.state.word_def
  }
  
  handleClickWord = (event) => {
    let word = event.target.innerText
    console.log(word)
    this.setState({findWord: word})
    Words
    .getWord(word.trim())
    .then(data => { this.setState({ word_def: data}); })
  }


  
  componentWillMount = () => {
    console.log('PhraseDisplay will mount');
  }
  
  componentDidMount = () => {
    console.log('PhraseDisplay mounted');
  }
  
  componentWillReceiveProps = (nextProps) => {
    console.log('PhraseDisplay will receive props', nextProps);
  }
  
  componentWillUpdate = (nextProps, nextState) => {
    console.log('PhraseDisplay will update', nextProps, nextState);
  }
  
  componentDidUpdate = () => {
    console.log('PhraseDisplay did update');
  }
  
  componentWillUnmount = () => {
    console.log('PhraseDisplay will unmount');
  }

  showordList = () => {
    const wordList = this.state.word_def
    
    if (wordList !== undefined) {
  
      for (let type in wordList) {
        for (let words in wordList[type]) {
          wordList[type][words].toString() 
        }
      }
  
    } else {
      
      return 'Nothing?'
    }
  }
  
  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    
    const wordList = this.state.word_def

    return (
      <div className="PhraseDisplayWrapper">
      <div>
        
      </div>



        <h1 className="main-phrase"> {this.props.phrase.split(" ").map((word, k) =>
          <span className="wordClick" onClick={this.handleClickWord}> {word} </span>
          )}


        
      {this.props.name} </h1> 
      </div>
    );
  }
}

PhraseDisplay.propTypes = {
  // bla: PropTypes.string,
};

PhraseDisplay.defaultProps = {
  // bla: 'test',
};

export default PhraseDisplay;
