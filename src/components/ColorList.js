import React, { Component } from 'react';
import CreateColor from './CreateColor';
import Colors from './Colors';
// import PropTypes from 'prop-types';

export default class ColorList extends Component {

    state = {
        colors: [],
        newColor: {}
    }

    addColor = () => {
        event.preventDefault();

        function hexToRgb(hex) {
            var bigint = parseInt(hex, 16);
            var r = (bigint >> 16) & 255;
            var g = (bigint >> 8) & 255;
            var b = bigint & 255;
            return [r, g, b];
        }

        const newColor = {
            name: this.state.name,
            hex: this.state.hex,
            rgb: hexToRgb(this.state.hex.slice(1))
        };
        let colorList = this.state.colors;
        colorList.push(newColor);
        this.setState({ colors: colorList });
    }

    //handleChange is a method that destructures the event object to get the target object, then sets the state to 
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }

    render() {
        //if we don't have this if statement, it gets cranky that my array is empty
        if(this.state.colors.length > 0) {
            return (<> 
            {/* in CreateColor we pass it in props (addColor={this.addColor}, and our event handler prop which is also a method which is a function) */}
        <CreateColor addColor={this.addColor} handleChange={this.handleChange} />
        <Colors colors={this.state.colors} />
    </>);
        }
        else {
            return (<> <h1>Please add a color</h1>
                <CreateColor addColor={this.addColor} handleChange={this.handleChange} />
                </>);
            
        }
    }
}
