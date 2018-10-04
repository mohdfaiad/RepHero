import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// import {reducer as formReducer} from 'redux-form';
import practiceReducer from './reducers';


export default createStore( practiceReducer,applyMiddleware(thunk));
