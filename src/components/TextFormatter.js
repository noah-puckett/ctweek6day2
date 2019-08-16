import React, { Component } from 'react';
// import PropTypes from 'prop-types';
const figlet = require('figlet');

export default class TextFormatter extends Component {

    state = {
        text: ''
    }

    //onChangeHandler is a method on our class,
    //it destructures target off of... our onClick event (inside our render)
    onChangeHandler = ({ target }) => {
        //this part is just figlet shenanigans
        let formattedText = '';

        figlet.text(target.value, {
            font: 'Ghost',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, function(err, data) {
            if(err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            formattedText = data;
        });
        // /end figlet shenanigans

        //[target.name] = 'text', target.value = the actual keystroke(s)
        this.setState({ [target.name]: formattedText });
    }

    render() {

        return (
            <>
                <input name='text' type='text' onChange={this.onChangeHandler} />
                <pre style={{ color: 'blue' }}>{this.state.text}</pre>
            </>
        );

    }

}
