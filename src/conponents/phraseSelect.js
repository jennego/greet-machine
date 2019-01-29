import React, { Component } from 'react';
import '../App.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PhraseGenerate from './PhraseGenerate/PhraseGenerate'


export class PhraseSelect extends Component {


    componentWillReceiveProps = (nextProps) => {
        console.log('PhraseSelect will receive props', nextProps);
    }

    componentWillUpdate = (nextProps, nextState) => {
        console.log('PhraseSelect will update', nextProps, nextState);
    }

    componentDidUpdate = () => {
        console.log('PhraseSelect did update');
    }

    handleChange = (event) => {
        console.log(event.target.value)
        const phrase = event.target.value;
        this.props.onChange(phrase)
    }

    render() {
        return (
            <form className='phrase-dropdown' autoComplete="off">
            {this.props.value}
                <FormControl>
                    <InputLabel htmlFor="phrase-simple" >Change Phrase</InputLabel>
                    
                    <Select
                        className="phrase"
                        value={this.props.phrase}
                        onChange={this.handleChange}
                    >
                        <MenuItem value='Hello'>Hello</MenuItem>
                        <MenuItem value='Good Morning'>Good Morning</MenuItem>
                        <MenuItem value="How Are You">How are you?</MenuItem>
                        <MenuItem value="Oh God">Oh God</MenuItem>
                        <MenuItem value="Greetings">Greeting</MenuItem>

                    </Select>
                </FormControl>
                </form>
        );
    }
}


