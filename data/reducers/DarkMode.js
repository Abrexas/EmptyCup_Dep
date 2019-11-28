const DarkModeReducer = (state = false, action) => {
	switch(action.type){
		case 'TOGGLE_DARKMODE':
			return !state;
		default:
			return state;
	}
};

export default DarkModeReducer;
