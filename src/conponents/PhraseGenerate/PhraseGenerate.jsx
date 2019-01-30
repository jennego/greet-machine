
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'

let allPhrases = []
let timeOfDay = ['Morning', 'Night', 'Evening']
let hellos = ['Hi', 'Hello']
let niceWord = ['Good', 'Lovely', 'Amazing']
let greetings = ['Greetings', 'Salutations']
let you = ['How Are You', 'Wuzzup','How Do You Do']
let dread = ['Oh God', "Uh oh", 'Oh No']

function random(items)  {
   return items[Math.floor(Math.random() * items.length)];
}


class PhraseGenerate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      phrases: []
    }
  }
  
  
  generate = () => {
    this.state.phrases.push(random(hellos) + ' {this.props.name}')
    this.state.phrases.push(random(you) + ' {this.props.name}')
  }

  
  // componentWillMount() {

  // }

  // componentDidMount() {
  
  // }

  // componentWillReceiveProps(nextProps) {

  // }

  // shouldComponentUpdate(nextProps, nextState) {

  // }

  // componentWillUpdate(nextProps, nextState) {

  // }

  // componentDidUpdate(prevProps, prevState) {

  // }

  // componentWillUnmount() {

  // }

  render() {
    return (

    <div className="PhraseGenerateWrapper">

        <MenuItem value="from child">from child</MenuItem>
        <MenuItem value="Greetings">Greeting</MenuItem>
    {/* {this.generate()}
    
      {this.state.phrases.map((phrase, k) =>
          <MenuItem key={k} value={phrase}> {phrase}</MenuItem>
        )} */}
    </div>
    )
  }
}






export default PhraseGenerate;
