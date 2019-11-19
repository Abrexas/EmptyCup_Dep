import React from 'react';
import { Dimensions, TouchableOpacity, View, Button, StyleSheet, ScrollView} from 'react-native';

import HomeButton from '../components/HomeButton';
import FuncButton from '../components/FuncButton';
import TextBold from '../components/TextBold';
import TextRegular from '../components/TextRegular';

import MiniKey from '../components/environments/MiniKey';

const MiniMeditations = props => {
	return (
		<ScrollView>
			<View style={styles.screen}>
				<View style={styles.buttonContainer}>
					<HomeButton style={{width: 150, height: 150}} onPress={() => {props.navigation.navigate({routeName: 'Home'})}}/>
				</View>
				<View style={styles.infoContainer}>
					<MiniKey navigation={props.navigation}/>
					
					<TextBold style={styles.titleFont}>WHAT IS A MINI MEDITATIONS</TextBold>
					<View style={styles.videoContainer}>
						<TextRegular style={{ textAlign: 'center', fontSize: 12 }}>VIDEO ABOUT MINI MEDITATION</TextRegular>
					</View>
					<View style={styles.descriptionContainer}>
						<TextRegular style={styles.bodyFont}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</TextRegular>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

var _width = Dimensions.get('window').width;

const styles = StyleSheet.create({
	screen: {
		flex: 1
	},
	buttonContainer: {
		margin: 20,
		alignItems: 'center',
	},
	miniMediContainer: {
	},
	infoContainer: {
		alignItems: 'center',
	},
	titleFont: {
		textAlign: 'center',
		fontSize: 22,
		padding: 20
	},
	bodyFont: {
		fontSize: 18, 
		textAlign: 'justify',
		padding: 20
	},
	videoContainer: {
		width: _width * 0.8,
		height: 200,
		borderWidth: 2,
		justifyContent: 'center'
	},
	descriptionContainer: {
		width: _width * 0.8,
	},
});

export default MiniMeditations;
