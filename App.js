//
// Основной файл разработки и запуска приложения
//

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { SettingsScreen } from "./src/pages/SettingsPage";
import { ProfileScreen } from "./src/pages/ProfilePage";
import { CursesScreen } from "./src/pages/Curses";
import { HomeScreen } from "./src/pages/HomePage";
import { AuthScreen } from "./src/pages/AuthPage";
import { StatScreen } from "./src/pages/StatPage";

// создаем экземпляр объекта навигатора состояний
const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Auth"
				screenOptions={{
					headerStyle: {
						backgroundColor: "#ffffff",
					},
				}}
			>
				<Stack.Screen
					name="Auth"
					component={AuthScreen}
					options={{
						headerShown: false,
					}}
				/>

				<Stack.Screen
					name="Home"
					component={HomeScreen}
				/>

        <Stack.Screen
					name="Stat"
					component={StatScreen}
				/>

      <Stack.Screen
					name="Curses"
					component={CursesScreen}
				/>

				<Stack.Screen
					name="Profile"
					component={ProfileScreen}
				/>

				<Stack.Screen
					name="Settings"
					component={SettingsScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
