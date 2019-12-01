// Index for Reducers

import { combineReducers } from 'redux';
import DarkModeReducer from './DarkMode';
import UserDataReducer from './UserData';

const rootReducer = combineReducers({
	darkMode: DarkModeReducer,
	userData: UserDataReducer
});

export default rootReducer;
