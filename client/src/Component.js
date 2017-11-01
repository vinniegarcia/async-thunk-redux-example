import React, { Component } from 'react';
import { connect } from 'react-redux'
import { update, asyncUpdate } from './store';

const Connector = ({ dispatch, state }) => (
    <div>
    <button 
        onClick={e => dispatch(update({ title: 'so minimal!' }))}
      >
        Give'r
      </button>
      <button onClick={e => dispatch(asyncUpdate())}>
        Get'r
      </button>
      <div>
        <h2>People</h2>
        <pre>{state && state.people && JSON.stringify(state.people, null, 2)}</pre>
      </div>
    </div>
);

export default connect(state => state)(Connector);