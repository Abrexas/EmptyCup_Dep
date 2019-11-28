import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import TextRegular from './TextRegular';

// Redux Imports
import { useSelector, useDispatch } from 'react-redux';
import { toggle_DarkMode } from '../data/actions';

const OtherButton = props => {
	// Initalize Redux Variables
	const dispatch = useDispatch();
	const darkMode = useSelector(state => state.darkMode);

	return (
		<TouchableOpacity 
			style={props.style}
			activeOpacity={0.6} 
			onPress={ props.onPress } 
		> 
			<View style={darkMode ? styles_dm.button : styles.button}>
				<TextRegular style={styles.font}>{props.title}</TextRegular>
			</View>
		</TouchableOpacity>
	);
};

const styles_dm = StyleSheet.create({
	font: {
		textAlign: 'center'
	},
	button: {
		height: 40,
		borderWidth: 2,
		borderColor: 'grey',
		borderRadius: 20
	}
});

const styles = StyleSheet.create({
	font: {
		textAlign: 'center'
	},
	button: {
		height: 40,
		borderWidth: 2,
		borderRadius: 20
	}
});

export default OtherButton;
