import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './PhraseGenerate.styles';

const allPhrases = []

let timeOfDay = ['Morning', 'Night', 'Evening']
let hellos = ['Hi', 'Hello']
let niceWord = ['Good', 'Lovely', 'Amazing']
let greetings = ['Greetings', 'Salutations']
let you = ['How Are You?', 'Wuzzup!','How Do You Do?']
let dread = ['Oh God', "Uh oh", '']

function random(items) {
   return items[Math.floor(Math.random() * items.length)];
}

const generate = () => {

}


const PhraseGenerate = (props) => (
  <div className="PhraseGenerateWrapper">
    <p> Words, Words, Words </p>
  </div>
);


export default PhraseGenerate;
