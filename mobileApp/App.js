import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from './screens/LoginScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
	  <Navigator>
		<Screen name="Welcome" component={WelcomeScreen} />
		<Screen name="Login" component={LoginScreen} />
	  </Navigator>	
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});