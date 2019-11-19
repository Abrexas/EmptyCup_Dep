import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextBold = props => <Text style={{ ...styles.text, ...props.style}}>{props.children}</Text>;

const styles = StyleSheet.create({
	text: {
		fontSize: 32,
		color: 'red',
		fontFamily: 'font-bold'
	}
});

export default TextBold;
