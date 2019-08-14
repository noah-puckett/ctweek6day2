import React, { Component } from 'react';
import Header from './Header';
// import PhotoAlbum from './PhotoAlbum';
// import Button from './Button';
import Footer from './Footer';
import RandomColor from './RandomColor';
// import Color from './Color';
// import ColorPicker from '../components/ColorPicker';
// import ColorDisplay from './ColorDisplay';
// import Incrementer from '../components/Incrementer';


const textProps = {
    header: 'Ryan\'s cool site',
    footer: 'Again, Ryan\'s Relentlessly Cool Site',
    photos: ['/src/assets/acl.jpg', '/src/assets/big_mood.jpg', '/src/assets/flower.jpeg', '/src/assets/heart.jpeg', '/src/assets/img_lights.jpg', '/src/assets/peony.jpeg'],
};

export default class App extends Component {

    // state = {
    //     color: ''
    // }
    
    // changeColor = color => {
    //     console.log(color);
    //     this.setState({ color });
    // }

    render() {

        // const { color } = this.state;

        return (<> 
        <Header header={textProps.header} />
        {/* <PhotoAlbum photos={textProps.photos} /> */}
        <RandomColor />
        <Footer footer={textProps.footer} />
        {/* <Color name="PANK" hex="#00aa00" rgb={[200, 10, 20]}/> */}
        {/* <ColorPicker changeColorHandler={this.changeColor} />
        <ColorDisplay color={color} /> */}
        {/* { <Incrementer /> } */}
    </>);
    }
}
