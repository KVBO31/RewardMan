import React, { useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	TextInput,
	Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Экспортируемый экран авторизации
export const AuthScreen = () => {
	// переменные состояний
	// message - переменная текста над полями авторизации
	const [message, setMessage] = useState("ВВЕДИТЕ ЛОГИН И ПАРОЛЬ");
	// login - переменная логина пользователя (по умолчанию отсутствует)
	const [login, setLogin] = useState("");
	// password - переменная пароля пользователя (по умолчанию отсутствует)
	const [password, setPassword] = useState("");
	// showChangePassword - переменная для отображения кнопки смены пароля
	const [showPassword, setShowPassword] = useState(false);

	return (
		<SafeAreaView style={styles.container}>
                
                <View style={styles.blockTextInput}>
                        {/* Поле ввода значения ЛОГИНА пользователя */}
                        <TextInput
                            style={styles.textInput}
                            placeholder="Логин:"
                            autoFocus={true}
                            onChangeText={(login) => setLogin(login)}
                            value={login}
                        />
                </View>

				<View style={styles.blockTextInput}>
					{/* Поле ввода значения ПАРОЛЯ пользователя*/}
					<TextInput
						secureTextEntry={!showPassword}
						style={styles.textInput}
						placeholder="Пароль:"
						onChangeText={(passw) => setPassword(passw)}
						value={password}
					/>

					{/* Иконка - кнопка глаза, изменяющее состояние видимости пароля */}
					<MaterialCommunityIcons
						name={showPassword ? "eye-off" : "eye"}
						size={24}
						color="#aaa"
						style={styles.icon}
						onPress={() => setShowPassword(!showPassword)}
					/>
				</View>

				{/* Кнопка отправки данных на сервер */}
				<Button
					title="Войти"
					onPress={() => console.log("Отправлено:", login, password)}
				/>
		</SafeAreaView>
	);
};

// Конструктор стилей для экрана авторизации
const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		alignContent: "center",
		justifyContent: "center",
		flex: 1,

		backgroundColor: "#181818",
	},

	blockTextInput: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#f3f3f3",
		paddingHorizontal: 14,
		
	},

	textInput: {
		height: 40,
		borderColor: "black",
		borderWidth: 1,
		marginBottom: 10,
		padding: 10,
		backgroundColor: "#f3f3f3",
		color: "black",
		fontWeight: "bold",
	},
});
