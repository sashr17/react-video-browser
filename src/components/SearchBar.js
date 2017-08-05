import React, { Component } from 'react';

class SearchBar extends Component {
    constructor (props) {
        super(props);

        this.state = {
            'term': ''
        };
    }

    render () {
        return (
            <div className='search-bar'>
                <input
                    value={this.state.term}
                    onChange={evt => this.onInputChange(evt.target.value)}
                    onKeyUp={evt => this.onKeyChange(evt.keyCode)} />
            </div>
        );
    }

    onInputChange (term) {
        this.setState({ term });
    }

    onKeyChange (keyCode) {
        if (keyCode === 13) {
            this.props.onSearchTermChange(this.state.term);
        }
    }
};

export default SearchBar;
