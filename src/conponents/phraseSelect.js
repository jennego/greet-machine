import React, { Component } from 'react';
import '../App.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PhraseGenerate from './PhraseGenerate/PhraseGenerate'
import Button from '@material-ui/core/Button'

let allPhrases = []
let timeOfDay = ['Morning,', 'Night,', 'Evening,']
let hellos = ['Hi', 'Hello']
let niceWord = ['Good', 'Lovely', 'Amazing']
let greetings = ['Greetings,', 'Salutations,']
let you = ['How Are You,', 'Wuzzup', 'How Do You Do,']
let dread = ['Oh God', "Uh oh", 'Oh No']

function random(items) {
    return items[Math.floor(Math.random() * items.length)];
}

export class PhraseSelect extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            phrases: []
        }
        this.buttonClick = this.buttonClick.bind(this)
    }


    generate = () => {
        console.log('phrases generated')
        this.state.phrases.push(random(hellos)) 
        this.state.phrases.push(random(you))
        this.state.phrases.push(random(greetings))
        this.state.phrases.push(random(niceWord) + ' ' + random(timeOfDay))
    }

    componentWillMount = () => {
        console.log('phrase select will mount')
        this.setState = this.generate()
    }

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

    buttonClick = (event) =>  {
        this.state.phrases = []
        this.generate()
        this.forceUpdate()     
    }

    render() {
        return (
            <form className='phrase-dropdown' autoComplete="off">
    
                <FormControl>
                    <InputLabel htmlFor="phrase-simple" >Change Phrase</InputLabel>
                    
                    <Select
                        className="phrase"
                        value={this.props.phrase}
                        onChange={this.handleChange}
                    >

                        {this.state.phrases.map((phrase, k) =>
                            <MenuItem key={k} value={phrase}> {phrase}</MenuItem>
                        )}
                
                        


                    </Select>
                    <Button onClick={this.buttonClick}> Refresh Phrase List </Button>
                </FormControl>
                </form>
        );
    }
}


