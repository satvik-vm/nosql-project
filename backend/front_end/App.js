import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import menu from "./menu"
import graph from "./graphs"
import debt_to_gdp from "./pie_charts/debt_to_gdp"
import fiscal_balance from "./pie_charts/fiscal_balance"
import gdp_growth from './pie_charts/gdp_growth.';
import inflation from './pie_charts/inflation';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
		  <Stack.Navigator initialRouteName="menu">
			<Stack.Screen name="Main Menu" component={menu}  />
			<Stack.Screen name="graph" component={graph} options={{ title: 'Country Details' }} />
			<Stack.Screen name="debt_to_gdp" component={debt_to_gdp} options={{ title: 'Debt to GDP' }} />
			<Stack.Screen name="fiscal_balance" component={fiscal_balance} options={{ title: 'Current Account Balance' }} />
			<Stack.Screen name="gdp_growth" component={gdp_growth} options={{ title: 'GDP Growth (annual percentage)' }} />
			<Stack.Screen name="inflation" component={inflation} options={{ title: 'Inflation, consumer price (annual percentage)' }} />
		  </Stack.Navigator>
		</NavigationContainer>
	);
}

export default App