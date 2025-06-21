// components/ChallengeCard.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChallengeCard = ({ language, category, challenges }) => {
	return (
		<View style={styles.card}>
			<Text style={styles.language}>{language}</Text>
			<Text style={styles.category}>{category}</Text>
			<View style={styles.challengesContainer}>
				{challenges.map((challenge, index) => (
					<Text key={index} style={styles.challenge}>
						{challenge}
					</Text>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#f8f8f8",
		borderRadius: 6,
		padding: 12,
		borderLeftWidth: 4,
		borderLeftColor: "#2196F3",
	},
	language: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#2196F3",
		marginBottom: 4,
	},
	category: {
		fontSize: 14,
		color: "#666",
		marginBottom: 8,
	},
	challengesContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	challenge: {
		backgroundColor: "#e3f2fd",
		color: "#1976D2",
		paddingVertical: 4,
		paddingHorizontal: 8,
		borderRadius: 4,
		marginRight: 8,
		marginBottom: 8,
		fontSize: 12,
	},
});

export default ChallengeCard;
