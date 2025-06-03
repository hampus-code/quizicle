import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/button/CustomButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation.types";

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
