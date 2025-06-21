// App.js
import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Image, SafeAreaView
} from "react-native";
import DropdownMenu from "../components/DropdownMenu";
import InfoCard from "../components/InfoCard";
import ChallengeCard from "../components/ChallengeCard";
import ProfileButton from "../components/ProfileButton";

export const HomeScreen = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [activeCourses, setActiveCourses] = useState([
		{ id: 1, title: "C++ Fundamentals", progress: 65 },
		{ id: 2, title: "JavaScript Advanced", progress: 40 },
		{ id: 3, title: "Python Data Science", progress: 80 },
	]);

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			{/* Header with profile button */}
			<View style={styles.header}>
				<TouchableOpacity onPress={toggleDropdown} style={styles.menuButton}>
					<Text style={styles.menuIcon}>☰</Text>
				</TouchableOpacity>
				<Text style={styles.headerTitle}>CodeWars</Text>
				<ProfileButton />
			</View>

			{/* Main content with dropdown */}
			<View style={styles.contentContainer}>
				{/* Dropdown menu */}
				{dropdownOpen && <DropdownMenu />}

				{/* Scrollable content */}
				<ScrollView
					style={styles.scrollView}
					contentContainerStyle={styles.scrollContent}
                    scrollEnabled={true}
				>
					{/* Current courses section */}
					<View style={styles.section}>
						<Text style={styles.sectionTitle}>Your Active Courses</Text>
						{activeCourses.map((course) => (
							<View key={course.id} style={styles.courseCard}>
								<Text style={styles.courseTitle}>{course.title}</Text>
								<View style={styles.progressBar}>
									<View
										style={[
											styles.progressFill,
											{ width: `${course.progress}%` },
										]}
									/>
								</View>
								<Text style={styles.progressText}>
									{course.progress}% completed
								</Text>
							</View>
						))}
					</View>

					{/* Suggested challenges */}
					<View style={styles.section}>
						<Text style={styles.sectionTitle}>Suggested Challenge</Text>
						<ChallengeCard
							language="C++"
							category="Fundamentals"
							challenges={["TRANSLAMP", "Search"]}
						/>
					</View>

					{/* Information cards */}
					<InfoCard
						title="Upgrade To Codewars Red!"
						description="Support Codewars and get some fancy upgrades like Pro Stats, Head-to-head comparisons, No ads and more."
						actionText="LOADS MORE"
					/>

					<InfoCard
						title="Earn extra honor and gain new allies!"
						description="Honor is earned for each new codewarr for who joins."
						actionText="LEARN MORE"
					/>

					{/* Challenge description */}
					<View style={[styles.section, styles.challengeSection]}>
						<Text style={styles.sectionTitle}>Count the Digit</Text>
						<Text style={styles.challengeText}>ущпщ3тщмтщтм</Text>
						<Text style={styles.extras}>EXTRONOMETRIALS</Text>
					</View>

					{/* Additional content */}
					<View style={styles.section}>
						<Text style={styles.sectionSubtitle}>
							Would You Pass the Google SQL Interview?
						</Text>
						<Text style={styles.sectionText}>
							Test Yourself with These 7 Concepts
						</Text>
						<Text style={styles.sectionSubtitle}>
							How many Kdata did you complete in 2024?
						</Text>
						<Text style={styles.sectionText}>
							Discover our top moments in 2024 and how you can live up in 2025.
						</Text>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
    safeArea:{
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
	container: {
		flex: 1,
		backgroundColor: "#f5f5f5",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 15,
		backgroundColor: "#333",
	},
    scrollView:{
        flex: 1,
        height: "200%"
    },
	menuButton: {
		padding: 5,
	},
	menuIcon: {
		color: "white",
		fontSize: 24,
	},
	headerTitle: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
	},
	content: {
		flex: 1,
		padding: 15,
	},
	section: {
		marginBottom: 20,
		backgroundColor: "white",
		borderRadius: 8,
		padding: 15,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 2,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
		color: "#333",
	},
	sectionSubtitle: {
		fontSize: 16,
		fontWeight: "bold",
		marginTop: 10,
		color: "#444",
	},
	sectionText: {
		fontSize: 14,
		color: "#666",
		marginBottom: 5,
	},
	courseCard: {
		marginBottom: 15,
	},
	courseTitle: {
		fontSize: 16,
		fontWeight: "600",
		marginBottom: 5,
	},
	progressBar: {
		height: 10,
		backgroundColor: "#e0e0e0",
		borderRadius: 5,
		marginBottom: 5,
		overflow: "hidden",
	},
	progressFill: {
		height: "100%",
		backgroundColor: "#4CAF50",
	},
	progressText: {
		fontSize: 12,
		color: "#666",
	},
	challengeSection: {
		backgroundColor: "#f0f7ff",
	},
	challengeText: {
		fontSize: 14,
		color: "#333",
		marginBottom: 10,
	},
	extras: {
		fontWeight: "bold",
		color: "#666",
		textAlign: "center",
	},
});
