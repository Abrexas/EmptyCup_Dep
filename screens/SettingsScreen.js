import React from 'react';
import { Dimensions, ScrollView, View, StyleSheet } from 'react-native';

import HomeButton from '../components/HomeButton';
import OtherButton from '../components/OtherButton';
import TextBold from '../components/TextBold';
import Colors from '../constants/Colors';

// Redux Imports
import { useSelector, useDispatch } from 'react-redux';
import { toggle_DarkMode } from '../data/actions';

const Settings= props => {

	// Initalize Redux Variables
	const dispatch = useDispatch();
	const darkMode = useSelector(state => state.darkMode);
	let dm_Text = "Dark Mode (off)";
	if (darkMode) dm_Text = "Dark Mode (on)";

	return (
		<ScrollView>
			{/*
			<View style={styles.screen}>
			<View style={ darkMode ? {backgroundColor: 'black'} : {backgroundColor: 'white'} } >
			*/}
			<View style={ !darkMode ? styles.screen : styles_dm.screen }>
				<View style={styles.buttonContainer}>
					<HomeButton style={{width: 150, height: 150}} onPress={() => {
						props.navigation.navigate({routeName: 'Home'})}}
					/>
				</View>
				<View style={styles.settingsContainer}>
					<OtherButton 
						style={{ width: '80%' }}
						title={dm_Text} 
						onPress={ () => { dispatch(toggle_DarkMode()) }}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const styles_dm = StyleSheet.create({
	screen: {
		flex: 1,
		width: width,
		height: height,
		paddingBottom: 10,
		backgroundColor: Colors.primary_dm
	},
	buttonContainer: {
		marginTop: 20,
		alignItems: 'center',
	},
	settingsContainer: {
		paddingTop: 80,
		alignItems: 'center',
		justifyContent: 'space-between'
	}
});

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingBottom: 10,
		backgroundColor: Colors.primary
	},
	dm_screen: {
		flex: 1,
		paddingBottom: 10,
		backgroundColor: 'black'
	},
	buttonContainer: {
		marginTop: 20,
		alignItems: 'center',
	},
	settingsContainer: {
		paddingTop: 80,
		alignItems: 'center',
		justifyContent: 'space-between'
	}
});

export default Settings;
