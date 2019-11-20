import React from 'react';
import { View, StyleSheet } from 'react-native';

import HomeButton from '../components/HomeButton';

import BinauralBeats from '../components/environments/BinauralBeats';

const BinauralBeatsScreen = props => {
	return (
		<View style={styles.screen}>
			<HomeButton style={{width: 150, height: 150}} onPress={() => {props.navigation.navigate({routeName: 'Home'})}}/>
			<BinauralBeats navigation={ props.navigation } />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default BinauralBeatsScreen;
