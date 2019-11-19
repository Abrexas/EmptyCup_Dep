import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import EmptyCup_Navigator from './navigation/EmptyCup_Navigator';
import LoadingScreen from './screens/LoadingScreen';

const fetchFonts = () => {
	return Font.loadAsync({
		 'font-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
		 'font-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	});
};


export default function App() {

	// Setup Local States
	const [dataLoaded, setDataLoaded] = useState(false);
	const [loadingScreen, setLoadingScreen] = useState(true);
	const [currentKey, setCurrentKey] = useState(null);
	
	if (!dataLoaded) {
		return (
			<AppLoading 
				startAsync={fetchFonts} 
				onFinish={() => setDataLoaded(true)}
				onError={(err) => console.log(err)}
			/>
		);
	}

	closeLoadingHandler = () => {
		setLoadingScreen(false);
	};

	selectKeyHandler = (key) => {
		setCurrentKey(key);
		console.log('Selected Key: %s', key.toSting());
	};

	if (loadingScreen) {
		return (
			<LoadingScreen closeLoading={this.closeLoadingHandler}/>
		);
	}

	return <EmptyCup_Navigator />;
}

const styles = StyleSheet.create({
});
