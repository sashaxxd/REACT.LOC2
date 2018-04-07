import React, { Component } from 'react';


class Dropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {isOpened: false};
        this.toggleState = this.toggleState.bind(this);
    }
    toggleState(){
        this.setState({isOpened: !this.state.isOpened});
    }


    render() {
        console.log(this.state.isOpened);
        return (
           <div onClick={this.toggleState}>sdfsdf</div>
    );
    }
}

export default Dropdown;