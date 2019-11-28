// Index for Reducers

import { combineReducers } from 'redux';
import DarkModeReducer from './DarkMode';

const rootReducer = combineReducers({
	darkMode: DarkModeReducer
});

export default rootReducer;
