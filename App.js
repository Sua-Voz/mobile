import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './components/Header/Header';
import Navigation from './Navigation';
import AppLoading from 'expo-app-loading';
import { theme } from './styles/theme';
// font
import {
	useFonts,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_600SemiBold,
	Poppins_700Bold,
	Poppins_800ExtraBold,
	Poppins_900Black,
} from '@expo-google-fonts/poppins';

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_600SemiBold,
		Poppins_800ExtraBold,
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<>
			<StatusBar translucent style='auto' backgroundColor='transparent' />
			<Header />
			<Navigation />
		</>
	);
}
