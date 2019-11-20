import React from 'react';
import { View, StyleSheet } from 'react-native';

import HomeButton from '../components/HomeButton';
import TextRegular from '../components/TextRegular';

const EducationScreen = props => {
	return (
		<View style={styles.screen}>
			<HomeButton style={{width: 150, height: 150}} onPress={() => {props.navigation.navigate({routeName: 'Home'})}}/>
			<TextRegular>Education</TextRegular>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default EducationScreen;
