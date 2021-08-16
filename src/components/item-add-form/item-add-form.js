import React, { Component } from 'react';

import './item-add-form.css'

export default class ItemAddForm extends Component {

    render() {

        return (
            <form className="item-add-form">
                <input type="text"
                       className="form-control"/>
                <button className="btn btn-outline-secondary"
                        onClick={ () => this.props.onItemAdded('hello popka') }>
                    Add Item
                </button>
            </form>
        )
    }
}
