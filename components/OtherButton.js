import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TextRegular from './TextRegular';

const OtherButton = props => {
	return (
		<TouchableOpacity 
			style={props.style}
			activeOpacity={0.6} 
			onPress={ props.onPress } 
		> 
			<View style={styles.button}>
				<TextRegular style={styles.font}>{props.title}</TextRegular>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	font: {
		textAlign: 'center'
	},
	button: {
		height: 40,
		borderWidth: 2,
		borderRadius: 20
		//alignItems: 'center',
		//justifyContent: 'center'
	}
});

export default OtherButton;
