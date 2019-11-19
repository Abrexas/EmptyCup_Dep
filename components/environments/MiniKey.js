import React from 'react';
import { StyleSheet, View } from 'react-native';

import FuncButton from '../FuncButton';
import TextBold from '../TextBold';
import TextReguar from '../TextRegular';

const	MiniKey = ({ navigation }) => {

	// Temporary Array of Names
	var keyArray = [ 
		"THE FLOATING ISLAND", 
		"THREE RINGS", 
		"OTHER MINI" ];

	createKeyFuncButtons = () => {
		let funcButtons = [];
		for (let i = 0; i < keyArray.length; i++) {
			funcButtons.push(<FuncButton key={i} title={keyArray[i]} onPress={() => {
				navigation.navigate('Player', { title: keyArray[i] })}}
			/>);

		}
		return funcButtons;
	}

	return (
		<View>
			<TextBold style={styles.titleFont}>MINI MEDITATIONS</TextBold>
			{this.createKeyFuncButtons()}
		</View>
	);
}

styles = StyleSheet.create({
	titleFont: {
		textAlign: 'center',
		fontSize: 32,
		paddingBottom: 20,
		paddingTop: 50
	}
});

export default MiniKey;
