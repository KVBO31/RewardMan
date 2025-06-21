// components/ProfileButton.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ProfileButton = () => {
	return (
		<TouchableOpacity style={styles.button}>
			<View style={styles.profileIcon}>
				<Text style={styles.profileText}>JS</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		padding: 5,
	},
	profileIcon: {
		width: 32,
		height: 32,
		borderRadius: 16,
		backgroundColor: "#FF9800",
		alignItems: "center",
		justifyContent: "center",
	},
	profileText: {
		color: "white",
		fontWeight: "bold",
	},
});

export default ProfileButton;
