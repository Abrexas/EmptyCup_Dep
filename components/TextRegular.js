import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const TextRegular = props => <Text style={{ ...styles.text, ...props.style}}>{props.children}</Text>;

const styles = StyleSheet.create({
	text: {
		fontSize: 22,
		color: Colors.text_secondary,
		fontFamily: 'font-regular'
	}
});

export default TextRegular;
