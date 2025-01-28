import React, {
	useState,
	useEffect,
	useRef,
	createContext,
	useContext,
} from "react";
import { View, Text, Animated, StyleSheet } from "react-native";

// Создаем контекст для уведомлений
const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
	const [alert, setAlert] = useState(null);
	const fadeAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		if (alert) {
			// Показываем уведомление
			Animated.timing(fadeAnim, {
				toValue: 1,
				duration: 300,
				useNativeDriver: true,
			}).start();

			// Скрываем через 3 секунды
			const timer = setTimeout(() => {
				Animated.timing(fadeAnim, {
					toValue: 0,
					duration: 300,
					useNativeDriver: true,
				}).start(() => setAlert(null));
			}, 3000);

			return () => clearTimeout(timer); // Очистка таймера при изменении alert
		}
	}, [alert]);

	return (
		<AlertContext.Provider value={setAlert}>
			{children}
			<Animated.View style={[styles.alertContainer, { opacity: fadeAnim }]}>
				<Text style={styles.alertText}>{alert}</Text>
			</Animated.View>
		</AlertContext.Provider>
	);
};

// Хук для использования уведомлений
export const useAlert = () => {
	return useContext(AlertContext);
};

// Стили
const styles = StyleSheet.create({
	alertContainer: {
		position: "absolute",
		top: 40,
		left: 20,
		right: 20,
		backgroundColor: "#ff5252",
		padding: 15,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOpacity: 0.2,
		shadowRadius: 5,
		elevation: 5,
		alignItems: "center",
		zIndex: 1000, // Убедимся, что поверх всего
	},
	alertText: {
		color: "#fff",
		fontWeight: "bold",
	},
});
