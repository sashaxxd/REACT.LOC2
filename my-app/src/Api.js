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
        const PLACES = [
            { name: "Palo Alto", zip: "94303" },
            { name: "San Jose", zip: "94088" },
            { name: "Santa Cruz", zip: "95062" },
            { name: "Honolulu", zip: "96803" }
        ];
        return <div><pre>{JSON.stringify(PLACES, null, 2) }</pre></div>;;
    }
}

export default Api;