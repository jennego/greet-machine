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
  
  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    
    const wordList = this.state.word_def

    return (
      <div className="PhraseDisplayWrapper">
        {/* {wordList ? 
          Object.keys(wordList).map(type => {
            console.log('Type: ' + type)
            Object.keys(wordList[type]).map(syn => {
              console.log('Word list: ' + syn)
              wordList[type][syn].map(words => {
                console.log(words)
              })
            })
          })
          : 'Nothing here'}  */}
        
          ))}



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
