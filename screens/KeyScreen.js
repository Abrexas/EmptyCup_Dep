import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import HomeButton from '../components/HomeButton';
import FuncButton from '../components/FuncButton';
import TextBold from '../components/TextBold';
import TextRegular from '../components/TextRegular';

import FirstKey from '../components/environments/FirstKey';
import SecondKey from '../components/environments/SecondKey';
import ThirdKey from '../components/environments/ThirdKey';
import MeditationKey from '../components/environments/MeditationKey';
import ReleaseKey from '../components/environments/ReleaseKey';

const FirstKeyScreen = props => {
	
	return (
		<ScrollView>
			<View style={styles.screen}>
				<View style={styles.buttonContainer}>
					<HomeButton style={{width: 150, height: 150}} onPress={() => {
						props.navigation.navigate({routeName: 'Home'})}}
					/>
				</View>
				<View>
					{/* SWITCH STATEMENT */}
						{/*   ...   */}
					<FirstKey navigation={props.navigation}/>
					<SecondKey navigation={props.navigation}/>
					<ThirdKey navigation={props.navigation}/>
					<MeditationKey navigation={props.navigation}/>
					<ReleaseKey navigation={props.navigation}/>
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
