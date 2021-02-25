import { combineReducers } from 'redux';
import tabs from './tabs';
import todos from './todos';

export default combineReducers({
  tabs,
  todos
});