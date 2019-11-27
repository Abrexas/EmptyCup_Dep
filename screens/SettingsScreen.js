import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import HomeButton from '../components/HomeButton';
import OtherButton from '../components/OtherButton';
import TextBold from '../components/TextBold';

const Settings= props => {

	return (
		<ScrollView>
			<View style={styles.screen}>
				<View style={styles.buttonContainer}>
					<HomeButton style={{width: 150, height: 150}} onPress={() => {
						props.navigation.navigate({routeName: 'Home'})}}
					/>
				</View>
				<View style={styles.settingsContainer}>
					<OtherButton 
						style={{ width: '80%' }}
						title={"Dark Mode (on/off)"} 
						onPress={ () => { console.log('Click')  }}
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
	settingsContainer: {
		paddingTop: 80,
		alignItems: 'center',
		justifyContent: 'space-between'
	}
});

export default Settings;
