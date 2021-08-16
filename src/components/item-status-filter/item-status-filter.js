import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    buttons = [
        { filterName: 'all' , label : 'All'},
        { filterName: 'active' , label : 'Active'},
        { filterName: 'completed' , label : 'Completed'}
    ]

    render() {
        const { filter, onFilterChange } = this.props;

        const buttons = this.buttons.map(({filterName, label}) => {
            const isActive = filter === filterName;
            const styles = isActive ? 'btn-info' : 'btn-outline-secondary'

            return (
                <button key={filterName}
                        type="button"
                        className={`btn ${styles}`}
                        onClick={ () => onFilterChange(filterName) }>
                    {label}
                </button>
            )
        })

        return (
            <div className="btn-group">
                { buttons }
            </div>
        )
    }
}

