import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/button/CustomButton";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <CustomButton title="Play Game" />
      <CustomButton title="Settings" />
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
