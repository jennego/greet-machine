import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import PhraseDisplay from './NameInsert/PhraseDisplay';
import NameInsert from './NameInsert/NameInsert.js';
import { PhraseSelect } from './phraseSelect.js'

class States extends Component {

    constructor(props) {
        super(props);

        this.state = {
            phrase: 'hi',
            name: ''
        };

        this.changePhrase = this.changePhrase.bind(this);
    }

    changePhrase(newPhrase) {
        this.setState({
            phrase: newPhrase
        });
    }

    render() {
        return (
            <div className="App">
                <h2> Greeting Machine </h2>


                <PhraseDisplay phrase={this.state.phrase} name={this.state.name} ></PhraseDisplay>
                <NameInsert></NameInsert> 
                <PhraseSelect phrase={this.state.phrase} onChange={this.changePhrase}></PhraseSelect>
            </div>
        );
    }
}

export default States;