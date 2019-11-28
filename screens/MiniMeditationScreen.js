import React from 'react';
import { Dimensions, TouchableOpacity, View, Button, StyleSheet, ScrollView } from 'react-native';

import HomeButton from '../components/HomeButton';
import FuncButton from '../components/FuncButton';
import TextBold from '../components/TextBold';
import TextRegular from '../components/TextRegular';
import Colors from '../constants/Colors';

import { KEY_MEDITATION } from '../data/dummy-data';

// Redux Imports
import { useSelector, useDispatch } from 'react-redux';
import { toggle_DarkMode } from '../data/actions';

const renderKeys = (props) => {
	let keyID = [5];//props.navigation.getParam('id', 'N/A');
	let keys = [];

	for ( let i = 0; i < keyID.length; i++ ) {
		keys.push(
			<View key={KEY_MEDITATION[keyID[i]].id}>
				<TextBold 
					style={styles.titleFont}
				>
					{ KEY_MEDITATION[keyID[i]].title }
				</TextBold>
				{ renderMeditations(props, keyID[i]) }
			</View>
		);
	}
	return ( keys );
}

const renderMeditations = (props, id) => {
	let funcButtons = [];
	for ( let i = 0; i < KEY_MEDITATION[id].medArray.length; i++ ){
		funcButtons.push(
			<FuncButton 
				key={ KEY_MEDITATION[id].id + KEY_MEDITATION[id].medArray[i].id }
				title={ KEY_MEDITATION[id].medArray[i].title } 
				onPress={() => {
					props.navigation.navigate('Player', { title: KEY_MEDITATION[id].medArray[i].title })
				}} 
			/>	
		);
	}
	return ( funcButtons )
}

const MiniMeditations = props => {
	// Initalize Redux Variables
	const dispatch = useDispatch();
	const darkMode = useSelector(state => state.darkMode);

	return (
		<ScrollView>
			<View style={darkMode ? styles_dm.screen : styles.screen}>
				<View style={styles.buttonContainer}>
					<HomeButton style={{width: 150, height: 150}} onPress={() => {props.navigation.navigate({routeName: 'Home'})}}/>
				</View>
				<View style={styles.infoContainer}>
					{ renderKeys(props) }
					{/* --- Update: Gather from dummy-data
					<MiniKey navigation={props.navigation}/>
					*/}

					<TextBold style={styles.titleFont}>WHAT IS A MINI MEDITATIONS</TextBold>
					<View style={darkMode ? styles_dm.videoContainer : styles.videoContainer}>
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

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const styles_dm = StyleSheet.create({
	screen: {
		flex: 1,
		width: width,
		minHeight: height,
		backgroundColor: Colors.primary_dm
	},
	videoContainer: {
		width: width * 0.8,
		height: 200,
		borderWidth: 2,
		borderColor: Colors.border_dm,
		justifyContent: 'center'
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
		width: width * 0.8,
		height: 200,
		borderWidth: 2,
		borderColor: Colors.border,
		justifyContent: 'center'
	},
	descriptionContainer: {
		width: width * 0.8,
	},
});

export default MiniMeditations;
