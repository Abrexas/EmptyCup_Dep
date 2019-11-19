import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import HomeButton from '../components/HomeButton';

const EducationScreen = props => {
	return (
		<View style={styles.screen}>
			<HomeButton style={{width: 150, height: 150}} onPress={() => {props.navigation.navigate({routeName: 'Home'})}}/>
			<Text>Education</Text>
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
