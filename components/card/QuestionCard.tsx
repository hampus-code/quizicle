import { useQuery } from "@tanstack/react-query";
import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import { fetchTriviaQuestions } from "../../api/APIMethods";

export default function QuestionCard() {
  const { data: questions } = useQuery({
    queryKey: ["questions"],
    queryFn: () => fetchTriviaQuestions()
  });
  return (
    <View>
      <Card style={styles.card}>
        <Card.Title
          titleVariant="titleMedium"
          title={`${questions?.category}`}
        />
        <Card.Content>
          <Text>{questions?.question}</Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 250,
    backgroundColor: "white"
  }
});
