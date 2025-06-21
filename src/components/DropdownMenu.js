// components/DropdownMenu.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const DropdownMenu = () => {
	const menuItems = [
		"Dashboard",
		"Challenges",
		"Courses",
		"Community",
		"Achievements",
		"Settings",
		"Help Center",
	];

	return (
		<View style={styles.dropdown}>
			{menuItems.map((item, index) => (
				<TouchableOpacity key={index} style={styles.menuItem}>
					<Text style={styles.menuItemText}>{item}</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	dropdown: {
		backgroundColor: "#444",
		paddingVertical: 10,
		position: "absolute",
		top: 60,
		left: 0,
		right: 0,
		zIndex: 100,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 5,
	},
	menuItem: {
		padding: 15,
		borderBottomWidth: 1,
		borderBottomColor: "#555",
	},
	menuItemText: {
		color: "white",
		fontSize: 16,
	},
});

export default DropdownMenu;
