import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import NewToMeditationScreen from '../screens/NewToMeditationScreen';
import MiniMeditationScreen from '../screens/MiniMeditationScreen';
import EnvironmentsScreen from '../screens/EnvironmentsScreen';
import EducationScreen from '../screens/EducationScreen';
import KeyScreen from '../screens/KeyScreen';
import PlayerScreen from '../screens/PlayerScreen';
import AdminScreen  from '../screens/AdminScreen';

import SettingsScreen from '../screens/SettingsScreen';

EmptyCup_Navigator = createStackNavigator(
	{
		Home: HomeScreen,
		NewToMedi: NewToMeditationScreen,
		MiniMedi: MiniMeditationScreen,
		Environments: EnvironmentsScreen,
		Education: EducationScreen,
		Meditations: KeyScreen,
		Player: PlayerScreen,
		Settings: SettingsScreen,
		Admin: AdminScreen
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
			},
			headerTransparent: 'true',
			headerTintColor: 'grey'
		}
	}
);

export default createAppContainer(EmptyCup_Navigator);
