import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import TextRegular from './TextRegular';

const FuncButton = props => {
	return (
		<TouchableOpacity style={{padding: 5}} activeOpacity={0.6} onPress={props.onPress}>
			<TextRegular style={styles.font}>{props.title}</TextRegular>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	font: {
		textAlign: 'center'
	}
});

export default FuncButton;
