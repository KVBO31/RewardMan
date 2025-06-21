// components/InfoCard.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const InfoCard = ({ title, description, actionText }) => {
	return (
		<View style={styles.card}>
			<Text style={styles.cardTitle}>{title}</Text>
			<Text style={styles.cardDescription}>{description}</Text>
			<TouchableOpacity style={styles.cardButton}>
				<Text style={styles.cardButtonText}>{actionText}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#fff",
		borderRadius: 8,
		padding: 15,
		marginBottom: 15,
		borderLeftWidth: 4,
		borderLeftColor: "#FF5722",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 2,
	},
	cardTitle: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 8,
		color: "#333",
	},
	cardDescription: {
		fontSize: 14,
		color: "#666",
		marginBottom: 12,
	},
	cardButton: {
		alignSelf: "flex-start",
	},
	cardButtonText: {
		color: "#FF5722",
		fontWeight: "bold",
		fontSize: 14,
	},
});

export default InfoCard;
