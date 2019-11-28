import React from 'react';
import { Dimensions, ScrollView, View, StyleSheet } from 'react-native';

import HomeButton from '../components/HomeButton';
import OtherButton from '../components/OtherButton';
import TextBold from '../components/TextBold';
import Colors from '../constants/Colors';

import { useSelector, useDispatch } from 'react-redux';
import { toggle_DarkMode } from '../data/actions';

const Admin = props => {
	// Initialize Store Variabels
	const dispatch = useDispatch();
	const darkMode = useSelector(state => state.darkMode);

	return (
		<ScrollView>
			<View style={darkMode ? styles_dm.screen : styles.screen}>
				<View style={styles.buttonContainer}>
					<HomeButton style={{width: 150, height: 150}} onPress={() => {
						props.navigation.navigate({routeName: 'Home'})}}
					/>
				</View>
				<View style={styles.settingsContainer}>
					<OtherButton 
						title={"Upload"} 
						onPress={ () => { console.log('Click')  }}
					/>
				</View>
			</View>
		</ScrollView>
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
	},
	buttonContainer: {
		marginTop: 20,
		alignItems: 'center',
	},
	settingsContainer: {
		paddingTop: 80,
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
	},
	buttonContainer: {
		marginTop: 20,
		alignItems: 'center',
	},
	settingsContainer: {
		paddingTop: 80,
	}
});

export default Admin;
