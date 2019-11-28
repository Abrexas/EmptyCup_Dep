import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

// Redux Imports
import { useSelector, useDispatch } from 'react-redux';
import { toggle_DarkMode } from '../data/actions';

const TextBold = props => {
	// Initalize Redux Variables
	const dispatch = useDispatch();
	const darkMode = useSelector(state => state.darkMode);
	
	if (darkMode) {
		return <Text style={{ ...styles_dm.text, ...props.style}}>{props.children}</Text>
	}
	else {
		return <Text style={{ ...styles.text, ...props.style}}>{props.children}</Text>
	}
};

const styles_dm = StyleSheet.create({
	text: {
		fontSize: 32,
		color: Colors.text_primary_dm,
		fontFamily: 'font-bold'
	}
});

const styles = StyleSheet.create({
	text: {
		fontSize: 32,
		color: Colors.text_primary,
		fontFamily: 'font-bold'
	}
});

export default TextBold;
