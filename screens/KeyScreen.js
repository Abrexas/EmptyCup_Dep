import React from 'react';
import { Dimensions, ScrollView, View, StyleSheet } from 'react-native';

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
	let keyID = props.navigation.getParam('id', 'N/A');
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

const FirstKeyScreen = props => {
	// Initalize Redux Variables
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
				<View style={{ paddingTop: 50 }}>
					{renderKeys(props)}	
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
		backgroundColor: Colors.primary_dm,
		width: width,
		minHeight: height,
		paddingBottom: 10
	}
});

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Colors.primary,
		width: width,
		minHeight: height,
		paddingBottom: 10
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
	}
});

export default FirstKeyScreen;
