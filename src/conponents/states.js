import React, { Component } from 'react';
import '../App.css';
import PhraseDisplay from './PhraseDisplay';
import { NameInsert } from './NameInsert/NameInsert.js';
import { PhraseSelect } from './phraseSelect.js'

class States extends Component {

    constructor(props) {
        super(props);

        this.state = {
            phrase: 'Hello',
            name: 'World'
        };

        this.changePhrase = this.changePhrase.bind(this);
        this.changeName = this.changeName.bind(this);
    }

    changePhrase(newPhrase) {
        this.setState({
            phrase: newPhrase
        });
    }

    changeName(newName) {
        this.setState({
            name: newName
        });
    }

    render() {
        return (
            <div className="App">
                <h2> Greeting Machine </h2>
                <p> Now you can sound like a socially awkward robot!</p>


                <PhraseDisplay phrase={this.state.phrase} name={this.state.name} ></PhraseDisplay>
                <PhraseSelect phrase={this.state.phrase} name={this.state.name} onChange={this.changePhrase}></PhraseSelect>
                <NameInsert onChange={this.changeName}></NameInsert> 
            </div>
        );
    }
}

export default States;