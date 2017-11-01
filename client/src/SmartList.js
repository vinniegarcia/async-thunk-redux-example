import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { asyncUpdate } from './store';

class SmartList extends Component {

    static propTypes = {
        asyncUpdate: PropTypes.func,
        people: PropTypes.array
    }

    componentDidMount () {
        this.props.asyncUpdate();
    }

    render () {
        const { people } = this.props;
        if (people.length === 0) {
            return <div>spinner...</div>
        }
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        people && people.map((person) => {
                            return (<tr>
                                <td>{person.name}</td>
                                <td>{person.city}, {person.state}</td>
                                <td>{person.age}</td>
                            </tr>)
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export const mapStateToProps = (store, ownProps) => {
    console.log('mapStateToProps', store)
    return store;
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        asyncUpdate: () => {
            console.log('async update')
            dispatch(asyncUpdate())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartList);