import React from 'react';
import { TouchableOpacity } from 'react-native';
import propTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux';
import { toggle_DarkMode } from '../data/actions';

const MediaButton = ({ iconName, onPress }) => {
	// Initialize Store Variables
	const dispatch = useDispatch();
	const darkMode = useSelector(state => state.darkMode);

	let buttonColor = darkMode ? 'grey' : 'black'
	return (
		<TouchableOpacity onPressOut={onPress}>
			<FontAwesome name={iconName} size={60} color={buttonColor} />
		</TouchableOpacity>
	);
};

MediaButton.propTypes = {
	iconName: propTypes.string.isRequired,
	onPress: propTypes.func.isRequired
};

export default MediaButton;
