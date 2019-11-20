import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

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
					<FuncButton title="FIRST KEY ENVIRONMENT" onPress={() => {
						props.navigation.navigate({routeName: 'Meditations'});}} 
					/>
					<FuncButton title="SECOND KEY ENVIRONMENT" onPress={() => {
						props.navigation.navigate({routeName: 'Meditations'});}} 
					/>
					<FuncButton title="THIRD KEY ENVIRONMENT" onPress={() => {
						props.navigation.navigate({routeName: 'Meditations'});}} 
					/>
					<FuncButton title="MINI MEDI ENVIRONMENT" onPress={() => {
						props.navigation.navigate({routeName: 'Meditations'});}} 
					/>
					<FuncButton title="RELEASE ENVIRONMENT" onPress={() => {
						props.navigation.navigate({routeName: 'Meditations'});}} 
					/>
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
	keyContainer: {
		padding: 20,
		justifyContent: 'space-between'
	}
});

export default MeditationKeysScreen;
