import React, { useState } from 'react';
import { Dimensions, TouchableOpacity, View, StyleSheet } from 'react-native';
import Slider from 'react-native-slider';

import HomeButton from '../components/HomeButton';
import MediaButton from '../components/MediaButton';
import TextBold from '../components/TextBold';
import TextRegular from '../components/TextRegular';
import Colors from '../constants/Colors';

// Redux Imports
import { useSelector, useDispatch } from 'react-redux';
import {toggle_DarkMode } from '../data/actions';

const PlayerScreen = props => {

	// Import Redux Variables
	const dispatch = useDispatch();
	const darkMode = useSelector(state => state.darkMode);

	// Set Temporary State Variable
	const [ isPlaying, setIsPlaying ] = useState(false);
	const [ playPauseIcon, setPlayPauseIcon ] = useState("play-circle-o");

	// Toggle Play/Pause Icon
	const playPauseHandler = () => {
		if (isPlaying === false) {
			setIsPlaying(true);
			setPlayPauseIcon("pause-circle");
		}	
		else {
			setIsPlaying(false);
			setPlayPauseIcon("play-circle-o");
		}
	}

	return (
		<View style={darkMode ? styles_dm.screen : styles.screen}>
			<View style={styles.buttonContainer}>
				<HomeButton style={{width: 150, height: 150}} onPress={() => {props.navigation.navigate({routeName: 'Home'})}}/>
			</View>
			<View style={styles.playerContainer}>
				<TextBold style={styles.titleFont}>{props.navigation.getParam('title', 'NO-ID')}</TextBold>
				<View style={styles.mediaTimeline}>
					<Slider />
				</View>
				<View style={styles.mediaContainer}>
					<MediaButton iconName="step-backward" onPress={ () => console.log('BACK') } />
					<MediaButton iconName={playPauseIcon} onPress={ () => playPauseHandler() } />
					<MediaButton iconName="step-forward" onPress={ () => console.log('FORWARD') } />
				</View>
				<View style={{ paddingBottom: 10 }}>
					<TouchableOpacity>
						<TextRegular>Enable Binaural</TextRegular>
					</TouchableOpacity>
				</View>
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
		minHeight: height,
		backgroundColor: Colors.primary_dm,
		paddingBottom: 10,
		justifyContent: 'space-around'
	}
});

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		width: width,
		minHeight: height,
		backgroundColor: Colors.primary,
		paddingBottom: 10,
		justifyContent: 'space-around'
	},
	buttonContainer: {
		marginTop: 20,
		alignItems: 'center',
	},
	titleFont: {
		textAlign: 'center',
		fontSize: 32,
		paddingBottom: 20,
		paddingTop: 50
	},
	playerContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	mediaTimeline: {
		flex: 1,
		width: '80%',
		justifyContent: 'flex-end',
		alignItems: 'stretch'
	},
	mediaContainer: {
		flex: 1,
		width: '80%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
});

export default PlayerScreen;
