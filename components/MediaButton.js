import React from 'react';
import { TouchableOpacity } from 'react-native';
import propTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

const MediaButton = ({ iconName, onPress }) => (
	<TouchableOpacity onPressOut={onPress}>
		<FontAwesome name={iconName} size={60} color="#000000" />
	</TouchableOpacity>
);

MediaButton.propTypes = {
	iconName: propTypes.string.isRequired,
	onPress: propTypes.func.isRequired
};

export default MediaButton;
