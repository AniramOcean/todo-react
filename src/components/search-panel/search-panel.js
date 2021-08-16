import React, { Component } from 'react';

import './search-panel.css'

export class SearchPanel extends Component {
    state = {
        term: ''
    }

    onSearchItem = (e) => {
        const term = e.target.value;

        this.setState({ term });
        this.props.onSearchItem(term)
    }

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="type here to search"
                   value={ this.state.term }
                   onChange={ this.onSearchItem }
            />
        );
    }
}

export default SearchPanel;
