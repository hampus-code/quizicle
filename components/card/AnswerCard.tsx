import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export default function AnswerCard({ answer }: { answer: string }) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
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
