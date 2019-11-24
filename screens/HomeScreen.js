import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

import HomeButton from '../components/HomeButton';
import FuncButton from '../components/FuncButton';

const HomeScreen = props => {
	return (
		<View style={styles.screen}>
			<View style={styles.homeButtonContainer}>
				<HomeButton onPress={() => console.log('Home')} />
			</View>
			<View style={styles.functionButtonContainer}>
				<FuncButton title="I AM NEW TO MEDITATION" onPress={() => {
					props.navigation.navigate({routeName: 'NewToMedi'});}} 
				/>
				<FuncButton
					title="MEDITATION KEYS" 
					onPress={() => {
						props.navigation.navigate(
							'Meditations',
							{ id: [0, 1, 2] }
						)
					}} 
				/>
				<FuncButton title="MINI MEDITATIONS" onPress={() => { 
					props.navigation.navigate({routeName: 'MiniMedi'});}} 
				/>
				<FuncButton title="MEDITATION ENVIRONMENTS" onPress={() => {
					props.navigation.navigate({routeName: 'Environments'});}} 
				/>
				<FuncButton
					title="BINAURAL BEATS" 
					onPress={() => {
						props.navigation.navigate(
							'Meditations',
							{ id: [6] }
						)
					}} 
				/>
				<FuncButton title="EDUCATION" onPress={() => {
					props.navigation.navigate({routeName: 'Education'});}} 
				/>
				<FuncButton title="SETTINGS" onPress={() => {
					props.navigation.navigate({routeName: 'Settings'});}} 
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center'
	},
	homeButtonContainer: {
		marginTop: 20,
		alignItems: 'center'
	},
	functionButtonContainer: {
		marginTop: 80,
		flex: 0.8,
		justifyContent: 'space-between'
	}
});

export default HomeScreen;
