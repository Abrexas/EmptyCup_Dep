import React from 'react';
import {Text, View, StyleSheet, Image } from 'react-native';

import HomeButton from '../components/HomeButton';
import TextRegular from '../components/TextRegular';

const LoadingScreen = props => {
	return(
		<View style={styles.container}>
			<HomeButton onPress={() => {props.closeLoading()}} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		marginTop: 10
	}
});

export default LoadingScreen;
