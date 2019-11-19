import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import NewToMeditationScreen from '../screens/NewToMeditationScreen';
import MiniMeditationScreen from '../screens/MiniMeditationScreen';
import EnvironmentsScreen from '../screens/EnvironmentsScreen';
import BinauralBeatsScreen from '../screens/BinauralBeatsScreen';
import EducationScreen from '../screens/EducationScreen';
import KeyScreen from '../screens/KeyScreen';
import PlayerScreen from '../screens/PlayerScreen';

EmptyCup_Navigator = createStackNavigator({
	Home: HomeScreen,
	NewToMedi: NewToMeditationScreen,
	MiniMedi: MiniMeditationScreen,
	Environments: EnvironmentsScreen,
	BinBeats: BinauralBeatsScreen,
	Education: EducationScreen,
	Meditations: KeyScreen,
	Player: PlayerScreen
});

export default createAppContainer(EmptyCup_Navigator);
