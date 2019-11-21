import React from 'react';
import {View, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
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
		alignItems: 'center',
		backgroundColor: Colors.primary
	}
});

export default LoadingScreen;
