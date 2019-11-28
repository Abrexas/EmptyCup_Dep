import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';

import HomeButton from '../components/HomeButton';
import TextRegular from '../components/TextRegular';
import Colors from '../constants/Colors';

import { useSelector, useDispatch } from 'react-redux';
import { toggle_DarkMode } from '../data/actions';

const EducationScreen = props => {
	// Initialize Store Variabels
	const dispatch = useDispatch();
	const darkMode = useSelector(state => state.darkMode);

	return (
		<View style={darkMode ? styles_dm.screen : styles.screen}>
			<HomeButton style={{width: 150, height: 150}} onPress={() => {props.navigation.navigate({routeName: 'Home'})}}/>
			<TextRegular>Education</TextRegular>
		</View>
	);
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles_dm = StyleSheet.create({
	screen: {
		flex: 1,
		width: width,
		minHeight: height,
		backgroundColor: Colors.primary_dm,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		width: width,
		minHeight: height,
		backgroundColor: Colors.primary,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default EducationScreen;
