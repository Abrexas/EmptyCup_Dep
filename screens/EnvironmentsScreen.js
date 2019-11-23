import React from 'react';
import { Dimensions, ScrollView, View, StyleSheet } from 'react-native';

import HomeButton from '../components/HomeButton';
import FuncButton from '../components/FuncButton';
import TextBold from '../components/TextBold';

const MeditationKeysScreen = props => {

	return (
		<ScrollView>
			<View style={styles.screen}>
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


const styles = StyleSheet.create({
	screen: {
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
