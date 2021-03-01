// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {

    // takes 2 props: onDelayed(funct) and delay(number)
    //create button, when clicked, pass event to onDelayedClick prop w/in setTimeout()
    //setTimeout should be set to this.props.delay
    handleClick = (event) => {
        event.persist();
        window.setTimeout(() => {
            this.props.onDelayedClick(event)}, this.props.delay)
    }

    render() {
        return (
            <button onClick={this.handleClick}>Button</button>
        )
    }
}