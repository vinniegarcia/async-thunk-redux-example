import {createStore, applyMiddleware} from 'redux';
import asyncAwait from 'redux-async-await';

let init = { 
    people: [],
    isFetching: false
 }
function reducer (state = init, action) {
  console.log('reducer', state, action)
  switch (action.type) {
    default:
      return {
        ...state,
        ...action.payload,
      }
  }
  return state
}

function update (payload) {
  return {
    type: 'UPDATE', 
    payload,
  }
}

function setFetching (isFetching) {
  return {
    type: 'SET_FETCHING',
    payload: {
      isFetching
    }
  }
}

async function asyncUpdate (payload) {

    const response = await fetch('http://localhost:3001/?total=1000', {
        method: 'GET',
        mode: 'CORS'
    })
    const people = await response.json();
    console.log('people', people);
    return {
        type: 'ASYNC_UPDATE',
        payload: {
            people
        }
    }
}

let store = applyMiddleware(asyncAwait)(createStore)(reducer);
export { store, update, asyncUpdate }