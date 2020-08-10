import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LiveSearch from '../LiveSearch';
import search from './db.json';
import './Omnibox.sass'

class Omnibox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            search: search,
            term: 'Международное'
        }
        this.searchHandler = this.searchHandler.bind(this)
    }

    onFocusElement = (e) => {
        e.preventDefault();
        this.setState({ focused: true });
    }

    onBlur = (e) => {
        e.preventDefault();
        this.setState({ focused: !this.state.focused });
    }

    searchHandler(event) {
        this.setState({ term: event.target.value });
    }

    render() {
        return (
            <div onBlur={this.onBlur} onFocus={this.onFocusElement} onClick={this.onFocusElement} className={this.state.focused ? 'header__omnibox omnibox omnibox_default focused' : 'header__omnibox omnibox omnibox_default'}>
                <input onInput={this.searchHandler} name="omniboxInput" type="text" className="omnibox__input" />
                <div className="omnibox__controls">
                    <Link to="/advanced" className="omnibox__settings"><i className="fas fa-sliders-h"></i></Link>
                    <button className="omnibox__apply"><i className="fas fa-search"></i></button>
                </div>
                <LiveSearch focused={this.state.focused} term={this.state.term} search={this.state.search} />
            </div>
        );
    }
}

export default Omnibox;