import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextRegular = props => <Text style={{ ...styles.text, ...props.style}}>{props.children}</Text>;

const styles = StyleSheet.create({
	text: {
		fontSize: 22,
		color: 'blue',
		fontFamily: 'font-regular'
	}
});

export default TextRegular;
