/*
import { useSelector, useDispatch } from 'react-redux';
import { toggle_DarkMode } from '../data/actions';

export default () => {
	const dispatch = useDispatch();
	const darkMode = useSelector(state => state.toggle_DarkMode);

	console.log("ddd")
	return {
		primary: 'white',
		accent: 'black',
		text_primary: 'black',
		text_secondary: 'grey',
	}
}
*/

export default {
	primary: 'white',
	accent: 'black',
	border: 'black',
	text_primary: 'black',
	text_secondary: 'grey',

	primary_dm: 'black',
	border_dm: 'grey',
	text_primary_dm: 'darkgrey',
};
