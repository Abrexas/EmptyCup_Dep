import React from 'react';
import { Dimensions, ScrollView, View, StyleSheet } from 'react-native';

import HomeButton from '../components/HomeButton';
import FuncButton from '../components/FuncButton';
import TextBold from '../components/TextBold';
import Colors from '../constants/Colors';

// Redux Imports
import { useSelector, useDispatch } from 'react-redux';
import { toggle_DarkMode } from '../data/actions';

const MeditationKeysScreen = props => {
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

				<View style={styles.keyContainer}>
					<FuncButton
						title="FIRST KEY ENVIRONMENT" 
						onPress={() => {
							props.navigation.navigate(
								'Meditations',
								{ id: [0] }
							)
						}} 
					/>
					<FuncButton
						title="SECOND KEY ENVIRONMENT" 
						onPress={() => {
							props.navigation.navigate(
								'Meditations',
								{ id: [1] }
							)
						}} 
					/>
					<FuncButton
						title="THIRD KEY ENVIRONMENT" 
						onPress={() => {
							props.navigation.navigate(
								'Meditations',
								{ id: [2] }
							)
						}} 
					/>
					<FuncButton
						title="MINE MEDITATION ENVIRONMENT" 
						onPress={() => {
							props.navigation.navigate(
								'Meditations',
								{ id: [3] }
							)
						}} 
					/>
					<FuncButton
						title="RELEASE ENVIRONMENT" 
						onPress={() => {
							props.navigation.navigate(
								'Meditations',
								{ id: [4] }
							)
						}} 
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
		minHeight: height,
		backgroundColor: Colors.primary_dm
	},
	buttonContainer: {
		marginTop: 20,
		alignItems: 'center',
	},
	keyContainer: {
		padding: 20,
		paddingTop: 100
	}
});

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		width: width,
		minHeight: height,
		backgroundColor: Colors.primary
	},
	buttonContainer: {
		marginTop: 20,
		alignItems: 'center',
	},
	keyContainer: {
		padding: 20,
		paddingTop: 100
	}
});

export default MeditationKeysScreen;
