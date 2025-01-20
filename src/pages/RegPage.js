import React, { useState } from "react";
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Dimensions,
    Alert
} from "react-native";

import { URL } from "../../config";

// Вычисляем исходные параметры приложения
// Задаем формулу вычисления размера блока авторизации при разных показателях ширины экрана
const { width } = Dimensions.get("window");
// размер блока авторизации
const inputButtonWidth = width < 400 ? '85%' : '34%';
// размер шрифта, магическое число 0.055 - это коэффициент, обозначающий 4,5%
const fontSize = width < 400 ? width * 0.055 : 18;

// 
export const RegScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        // Проверка на пустую строчку и на соответствие паролей
        if (password1 != password2 && password1 != "") {
            Alert.alert("Hello");
            return ;
        }

        setLoading(true);

        try {
            // отправка запроса на регистрацию
            const response = await fetch(`${URL}/reg`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password1,
                }),
            });
            // получаем ответ
            const data = await response.json();
            setLoading(false);
            
        } catch (error) {
            setLoading(false);
        }
    };

    const handleRegister = () => {
        navigation.navigate("Auth");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Регистрация</Text>

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
                value={password1}
                onChangeText={setPassword1}
            />

            <TextInput
                style={[styles.input, { width: inputButtonWidth }]}
                placeholder="Повторите пароль"
                secureTextEntry
                value={password2}
                onChangeText={setPassword2}
            />

            <TouchableOpacity
                style={[styles.button, { width: inputButtonWidth }]}
                onPress={handleLogin}
                disabled={loading}
            >
                <Text style={styles.buttonText}>
                    {loading ? "Загрузка..." : "Зарегистрироваться"}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.registerButton, { width: inputButtonWidth }]}
                onPress={handleRegister}
            >
                <Text style={styles.buttonText}>Войти</Text>
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
        backgroundColor: "#f9f9f9",
    },
    title: {
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
        fontSize: fontSize,
        fontWeight: "bold",
    },
});
