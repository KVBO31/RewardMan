//
// Файл с кодом авторизации пользователя в системе
//

import React, { useState } from "react";
import {
	StyleSheet,
	View,
	TextInput,
	Text,
	TouchableOpacity,
	Dimensions,
} from "react-native";

import { URL } from "../../config";

// Вычисляем исходные параметры приложения
// Задаем формулу вычисления размера блока авторизации при разных показателях ширины экрана
const { width } = Dimensions.get("window");
// размер блока авторизации
const inputButtonWidth = width < 400 ? "85%" : "34%";
// размер шрифта, магическое число 0.045 - это коэффициент, обозначающий 4,5%
const fontSize = width * 0.055;

export const AuthScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const handleLogin = async () => {
		setLoading(true);

		try {
			const response = await fetch(`${URL}/auth`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
				}),
			});

			const data = await response.json();
			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	};

	const handleRegister = () => {
		navigation.navigate("Reg");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Вход</Text>

			<TextInput
				style={[styles.input, { width: inputButtonWidth }]}
				placeholder="Email"
				keyboardType="email-address"
				value={email}
				onChangeText={setEmail}
				autoCapitalize="none"
			/>

			<TextInput
				style={[styles.input, { width: inputButtonWidth }]}
				placeholder="Пароль"
				secureTextEntry
				value={password}
				onChangeText={setPassword}
			/>

			<TouchableOpacity
				style={[styles.button, { width: inputButtonWidth }]}
				onPress={handleLogin}
				disabled={loading}
			>
				<Text style={styles.buttonText}>
					{loading ? "Загрузка..." : "Войти"}
				</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={[styles.registerButton, { width: inputButtonWidth }]}
				onPress={handleRegister}
			>
				<Text style={styles.buttonText}>Регистрация</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,

		backgroundColor: "#181818",
	},
	title: {
		color: "f9f9f9",
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	input: {
		height: 40,
		borderColor: "#ccc",
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 15,
		backgroundColor: "#fff",
	},
	button: {
		backgroundColor: "#e64a19",
		paddingVertical: 10,
		borderRadius: 25,
		alignItems: "center",
		marginVertical: 10,
	},
	registerButton: {
		backgroundColor: "#6c757d",
		paddingVertical: 10,
		borderRadius: 25,
		alignItems: "center",
		marginVertical: 10,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});
