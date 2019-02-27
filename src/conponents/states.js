import React, { Component } from 'react';
import '../App.css';
import PhraseDisplay from './PhraseDisplay';
import { NameInsert } from './NameInsert/NameInsert.js';
import { PhraseSelect } from './phraseSelect.js'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
        let fullPhrase = this.state.phrase + " " + this.state.name 
        return (
            <div className="App">
                <h2> Greeting Machine </h2>
                <p> Now you can sound like a socially awkward robot!</p>

                {fullPhrase}
                <Grid container justify='center' spacing={24}>
                    <Grid xs={6} className='main-phrase'>
                        <PhraseDisplay phrase={this.state.phrase} name={this.state.name} ></PhraseDisplay>
                        <CopyToClipboard  text={fullPhrase}>
                            <Button variant="contained" className="copy-btn">Copy Phrase</Button>
                        </CopyToClipboard>
                    </Grid>
                </Grid>
                <PhraseSelect phrase={this.state.phrase} name={this.state.name} onChange={this.changePhrase}></PhraseSelect>
                <NameInsert onChange={this.changeName}></NameInsert> 
            </div>
        );
    }
}

export default States;