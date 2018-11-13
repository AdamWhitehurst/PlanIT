import { createStore } from 'redux';
import reducers from './combine_reducer';

const store = createStore(reducers);

export default store;