import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/button/CustomButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation.types";
import { LinearGradient } from "expo-linear-gradient";
import { BackgroundGradients } from "../../types/colors";

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <LinearGradient
      style={styles.gradientContainer}
      colors={BackgroundGradients.primary.colors}
      start={BackgroundGradients.primary.start}
      end={BackgroundGradients.primary.end}
    >
      <View style={styles.container}>
        <CustomButton
          label="Play Game"
          onPress={() => navigation.navigate("Game")}
        />
        <CustomButton
          label="Settings"
          onPress={() => console.log("Navigate to SettingScreen")}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
