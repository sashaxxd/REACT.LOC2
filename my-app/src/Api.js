import React, { Component } from 'react';


class Api extends React.Component {

    constructor(props) {
        super(props);
        this.state = {books: []};
    }
    componentDidMount () {
        fetch('http://rest1/test?token=admin')
            .then(response => {
                if (!response.ok) {
                    throw Error('Network request failed.')
                }
                return response;
            })
            .then(data => data.json())
            .then(data => {
                this.setState({
                    content: data
                });
                console.log('parsed json', data);

            }, (ex) => {
                this.setState({
                    requestError : true
                });
                console.log('parsing failed', ex)
            })
    }
    render() {
        return <div></div>;
    }
}

export default Api;