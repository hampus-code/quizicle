import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export default function QuestionCard({
  category,
  question
}: {
  category: string;
  question: string;
}) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          titleVariant="titleLarge"
          titleStyle={styles.title}
          title={category}
        />
        <Card.Content>
          <View>
            <Text variant="bodyLarge" style={styles.question}>
              {question}
            </Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%"
  },
  card: {
    height: 250,
    backgroundColor: "white"
  },
  title: {
    textAlign: "center"
  },
  question: {
    textAlign: "center"
  }
});
