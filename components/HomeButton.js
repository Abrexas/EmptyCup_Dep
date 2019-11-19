import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const HomeButton = props => {
	return (
		<View style={{...styles.buttonContainer, ...props.style}}>
			<TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
				<View style={styles.imageContainer}>
					<Image 
						style={styles.icon}
						source={require('../assets/images/HomeButton.png')}
						resizeMode="contain"
					/>
				</View>
			</TouchableOpacity>
			<View style={styles.logoContainer}>
					<Image 
						style={styles.logo}
						source={require('../assets/images/Logo_EmptyCup.png')}
						resizeMode="contain"
					/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		width: 200,
		height: 200,
		marginBottom: 30
	},
	imageContainer: {
		width: '100%',
		height: '100%',
		//borderRadius: 25,
		//borderWidth: 3,
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
