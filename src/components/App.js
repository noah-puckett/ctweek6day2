import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateColor from './CreateColor';
import ColorList from './ColorList';
import WaterTracker from './WaterTracker';
// import TextFormatter from './TextFormatter';
// import Photo from './Photo';
// import Photos from './Photos';
// import PhotoAlbum from './PhotoAlbum';
// import Colors from './Colors';



export default class App extends Component {

    render() {

        // const colors = [
        //     { name: 'red', hex: '#f54242', rgb: [245, 66, 66] },
        //     { name: 'blue', hex: '#4e42f5', rgb: [78, 66, 245] },
        //     { name: 'green', hex: '#66f542', rgb: [102, 245, 66] }
        // ];

        // const photos = [
        //     { src: './src/assets/acl.jpg' }, 
        //     { src: './src/assets/big_mood.jpg' }, 
        //     { src: './src/assets/flower.jpeg' }, 
        //     { src: './src/assets/heart.jpeg' }
        // ];

        return (<> 
        <Header header="Welcome to my feelings!" />
        {/* <Colors colors={colors} /> */}
        {/* <Photos photos={photos} /> */}
        {/* <PhotoAlbum photos={photos} title='I THINK IT IS VERY BRAVE AND SEXY OF ME TO KEEP TRYING'/> */}
        {/* <TextFormatter /> */}
        {/* <ColorList /> */}
        <WaterTracker />
        <Footer footer="goodnight" />
    </>);
    }
}
