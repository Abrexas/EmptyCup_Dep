import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import EmptyCup_Navigator from './navigation/EmptyCup_Navigator';
import LoadingScreen from './screens/LoadingScreen';

// Redux Imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './data/reducers';

const store = createStore(rootReducer);

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
	
	if (loadingScreen) {
		return (
			<Provider store={store}>
				<LoadingScreen closeLoading={this.closeLoadingHandler}/>
			</Provider>
		);
	}

	return (
		<Provider store={store}>
			<EmptyCup_Navigator />
		</Provider>
	)
}
