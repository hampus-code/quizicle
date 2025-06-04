import { View, StyleSheet } from "react-native";
import QuestionCard from "../../components/card/QuestionCard";
import { useQuery } from "@tanstack/react-query";
import { fetchTriviaQuestions } from "../../api/APIMethods";
import AnswerCard from "../../components/card/AnswerCard";
import Timer from "../../components/timer/Timer";

export default function GameScreen() {
  const decodeCharacters = (char: string) =>
    char
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&amp;/g, "&");
  const { data: questions } = useQuery({
    queryKey: ["questions"],
    queryFn: () => fetchTriviaQuestions()
  });

  if (!questions) return null;

  const allAnswers = [...questions.incorrect_answers, questions.correct_answer];
  const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

  return (
    <View style={styles.container}>
      <QuestionCard
        category={questions.category}
        question={decodeCharacters(questions.question)}
      />
      <View style={styles.answerCards}>
        {shuffledAnswers.map((answer, index) => (
          <AnswerCard key={index} answer={answer} />
        ))}
      </View>
      <Timer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150
  },
  answerCardsContainer: {},
  answerCards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    marginTop: 20
  }
});
