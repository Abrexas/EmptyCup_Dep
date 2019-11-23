import React from 'react';
import { View, StyleSheet } from 'react-native';

import HomeButton from '../components/HomeButton';

const BinauralBeatsScreen = props => {
	return (
		<View style={styles.screen}>
			<View>
				<HomeButton style={{width: 150, height: 150}} onPress={() => {props.navigation.navigate({routeName: 'Home'})}}/>
			</View>
			<View style={styles.beatsContainer}>
				{/* Update: Get from dummy-data
				<BinauralBeats navigation={ props.navigation } />
				*/}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center'
	},
	beatsContainer: {
		paddingTop: 100
	}
});

export default BinauralBeatsScreen;
