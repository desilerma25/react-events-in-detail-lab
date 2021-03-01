// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {

    // takes in prop onReceiveCoor.
    //within it, render button
    //on click, create array w/ 2 elements(x, y coor)
    //x and y found with event
    //pass event data in as arg for onReceiveCoor.
    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }

    render() {
        return (
            <button onClick={this.handleClick}>Button</button>
        )
    }
}