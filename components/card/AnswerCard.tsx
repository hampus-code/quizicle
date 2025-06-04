import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export default function AnswerCard({
  answer,
  onPress,
  isSelectedAnswer,
  isCorrectAnswer
}: {
  answer: string;
  onPress: () => void;
  isSelectedAnswer: boolean;
  isCorrectAnswer: boolean;
}) {
  function getBackgroundColor() {
    if (isCorrectAnswer) return "#4BB04F";
    if (isSelectedAnswer) return "red";
    return "white";
  }

  return (
    <View style={styles.container}>
      <Card
        style={[styles.card, { backgroundColor: getBackgroundColor() }]}
        onPress={isSelectedAnswer || isCorrectAnswer ? undefined : onPress}
      >
        <Card.Content>
          <Text>{answer}</Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "44%"
  },
  card: {
    height: 100,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  }
});
