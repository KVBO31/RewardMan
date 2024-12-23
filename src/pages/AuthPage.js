import React, { useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	TextInput,
	TouchableOpacity,
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

	// функция отправки данных на сервер
	const sendDataToServer = () => {
		if (login != "" && password != "") {
			console.log(login, password);
		} else{
			console.log("Error: empty fields");
		}

		// сбрасываем значение для большей безопасности
		setLogin("");
		setPassword("");
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.mainBlock}>
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
						size={28}
						color="#aaa"
						style={styles.icon}
						onPress={() => setShowPassword(!showPassword)}
					/>
				</View>

				{/* Кнопка отправки данных на сервер */}
				<TouchableOpacity style={styles.button} onPressOut={sendDataToServer}>
					<Text style={styles.buttonText}>Войти</Text>
				</TouchableOpacity>
			</View>
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

	mainBlock: {
		width: "40%",
		flex: 1,
		alignContent: "center",
		justifyContent: "center",
	},

	blockTextInput: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#f3f3f3",
	},

	textInput: {
		justifyContent: "center",
		margin: "auto",
		padding: "7%",
		backgroundColor: "#f3f3f3",
		color: "black",
		width: "100%",
	},

	icon: {
		marginRight: "5%"
	},

	button: {
		width: "100%",
		height: "5%",
		backgroundColor: "#4CAF50",
	},

	buttonText: {
		display: "flex",
		justifyContent: "center",
		textAlign: "center",
		fontFamily: "Arial",
		fontWeight: "bold",
		margin: "auto"
	},
});
