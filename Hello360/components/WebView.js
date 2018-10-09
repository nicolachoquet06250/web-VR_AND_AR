'use strict';
let React = require('react');
import axios from 'axios';
import { Text } from 'react-360';
import Parser from 'html-react-parser';

module.exports = class WebView extends require('Text') {
    constructor(props) {
        super(props);
        this.state = {
            html: ''
        }
    }

    render() {
        axios.get(this.props.Src).then(response => this.setState({ html: response.data }));
        return <Text>{this.state.html}</Text>;
    }
};