import { View, StyleSheet } from "react-native";
import QuestionCard from "../../components/card/QuestionCard";

export default function GameScreen() {
  return (
    <View style={styles.container}>
      <QuestionCard />
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
