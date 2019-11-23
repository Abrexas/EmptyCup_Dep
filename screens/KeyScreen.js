import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import HomeButton from '../components/HomeButton';
import FuncButton from '../components/FuncButton';
import TextBold from '../components/TextBold';
import TextRegular from '../components/TextRegular';

import { KEY_MEDITATION } from '../data/dummy-data';

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
	
	return (
		<ScrollView>
			<View style={styles.screen}>
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

const styles = StyleSheet.create({
	screen: {
		flex: 1,
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
