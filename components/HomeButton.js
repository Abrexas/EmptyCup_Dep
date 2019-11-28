import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { toggle_DarkMode } from '../data/actions';

const HomeButton = props => {

	// Initalize Redux Variables
	const dispatch = useDispatch();
	const darkMode = useSelector(state => state.darkMode);

	var EC_Button = !darkMode ?
		<Image 
			style={styles.icon}
			source={require('../assets/images/HomeButton.png')}
			resizeMode="contain"
		/>
		:
		<Image 
			style={styles.icon}
			source={require('../assets/images/HomeButton_DM.png')}
			resizeMode="contain"
		/>;

	var EC_Logo = darkMode ? 
			<Image 
				style={styles.logo}
				source={require('../assets/images/Logo_EmptyCup_DM.png')}
				resizeMode="contain"
			/>
		: 
			<Image 
				style={styles.logo}
				source={require('../assets/images/Logo_EmptyCup.png')}
				resizeMode="contain"
			/>;

	return (
		<View style={{...styles.buttonContainer, ...props.style}}>
			<TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
				<View style={styles.imageContainer}>
					{EC_Button}
				</View>
			</TouchableOpacity>
			<View style={styles.logoContainer}>
					{EC_Logo}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		width: 200,
		height: 200,
		marginTop: 40,
		marginBottom: 30
	},
	imageContainer: {
		width: '100%',
		height: '100%',
		overflow: 'hidden'
	},
	icon: {
		width: '100%',
		height: '100%'
	},
	logoContainer: {
		alignItems: 'center',
		marginTop: 2
	},
	logo: {
		width: '90%',
		height: '50%'
	}
});

export default HomeButton;
