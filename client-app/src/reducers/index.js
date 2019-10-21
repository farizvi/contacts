import { combineReducers } from 'redux';
import posts from './contactsReducer';

export default combineReducers({
    contacts: posts
});