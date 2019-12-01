import React from 'react';
import { Dimensions, Button, View, StyleSheet } from 'react-native';

import HomeButton from '../components/HomeButton';
import FuncButton from '../components/FuncButton';
import Colors from '../constants/Colors';

// Redux Imports
import { useSelector, useDispatch } from 'react-redux';
import { UserData, toggle_DarkMode } from '../data/actions';

const HomeScreen = props => {
	// Initalize Redux Variables
	const dispatch = useDispatch();
	const darkMode = useSelector(state => state.darkMode);
	const userData = useSelector(state => state.userData);

	return (
		<View style={darkMode ? styles_dm.screen : styles.screen}>
			<View style={styles.homeButtonContainer}>
				<HomeButton onPress={() => console.log(userData)} />
			</View>
			<View style={styles.functionButtonContainer}>
				<FuncButton title="I AM NEW TO MEDITATION" onPress={() => {
					props.navigation.navigate({routeName: 'NewToMedi'});}} 
				/>
				<FuncButton
					title="MEDITATION KEYS" 
					onPress={() => {
						props.navigation.navigate(
							'Meditations',
							{ id: [0, 1, 2] }
						)
					}} 
				/>
				<FuncButton title="MINI MEDITATIONS" onPress={() => { 
					props.navigation.navigate({routeName: 'MiniMedi'});}} 
				/>
				<FuncButton title="MEDITATION ENVIRONMENTS" onPress={() => {
					props.navigation.navigate({routeName: 'Environments'});}} 
				/>
				<FuncButton
					title="BINAURAL BEATS" 
					onPress={() => {
						props.navigation.navigate(
							'Meditations',
							{ id: [6] }
						)
					}} 
				/>
				<FuncButton title="EDUCATION" onPress={() => {
					props.navigation.navigate({routeName: 'Education'});}} 
				/>
				<FuncButton title="SETTINGS" onPress={() => {
					props.navigation.navigate({routeName: 'Settings'});}} 
				/>
				<FuncButton title="UPLOAD (ADMIN)" onPress={() => {
					props.navigation.navigate({routeName: 'Admin'});}} 
				/>
			</View>
		</View>
	);
};

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const styles_dm = StyleSheet.create({
	screen: {
		flex: 1,
		width: width,
		height: height,
		backgroundColor: Colors.primary_dm,
		alignItems: 'center'
	},
	homeButtonContainer: {
		marginTop: 20,
		alignItems: 'center'
	},
	functionButtonContainer: {
		marginTop: 80,
		flex: 0.8,
		justifyContent: 'space-between'
	}
});
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		width: width,
		height: height,
		backgroundColor: Colors.primary,
		alignItems: 'center'
	},
	homeButtonContainer: {
		marginTop: 20,
		alignItems: 'center'
	},
	functionButtonContainer: {
		marginTop: 80,
		flex: 0.8,
		justifyContent: 'space-between'
	}
});

export default HomeScreen;
