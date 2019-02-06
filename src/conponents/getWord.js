import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import PhraseDisplay from './PhraseDisplay'

export default class GetWord extends Component {
    handleClickWord = (event) => {
        console.log(event.target.innerText)
    }
    render() {
        return (
            <div>

                <p onClick={this.handleClickWord}> Get this word! </p>
                <Button value="oh" onClick={this.handleClickWord}> button </Button>
                <span onClick={this.handleClickWord}> pony </span>
            </div>
        )
    }
}
