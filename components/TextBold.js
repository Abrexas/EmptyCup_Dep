import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const TextBold = props => <Text style={{ ...styles.text, ...props.style}}>{props.children}</Text>;

const styles = StyleSheet.create({
	text: {
		fontSize: 32,
		color: Colors.text_primary,
		fontFamily: 'font-bold'
	}
});

export default TextBold;
