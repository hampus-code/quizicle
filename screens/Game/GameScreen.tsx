import { View, StyleSheet } from "react-native";
import QuestionCard from "../../components/card/QuestionCard";
import { useQuery } from "@tanstack/react-query";
import { fetchTriviaQuestions } from "../../api/APIMethods";
import AnswerCard from "../../components/card/AnswerCard";
import Timer from "../../components/timer/Timer";
import { LinearGradient } from "expo-linear-gradient";
import { BackgroundGradients } from "../../types/colors";
import { useEffect, useState } from "react";

export default function GameScreen() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);

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
  const correctAnswer = questions?.correct_answer;

  function handleAnswerCard(answer: string) {
    setSelectedAnswer(answer);
  }

  useEffect(() => {
    if (questions) {
      const allAnswers = [
        ...questions.incorrect_answers,
        questions.correct_answer
      ];
      const shuffled = allAnswers.sort(() => Math.random() - 0.5);
      setShuffledAnswers(shuffled);
    }
  }, [questions]);

  return (
    <LinearGradient
      style={styles.gradientContainer}
      colors={BackgroundGradients.primary.colors}
      start={BackgroundGradients.primary.start}
      end={BackgroundGradients.primary.end}
    >
      <View style={styles.container}>
        <QuestionCard
          category={questions.category}
          question={decodeCharacters(questions.question)}
        />
        <View style={styles.answerCards}>
          {shuffledAnswers.map((answer, index) => (
            <AnswerCard
              key={index}
              answer={decodeCharacters(answer)}
              onPress={() => handleAnswerCard(answer)}
              isSelectedAnswer={selectedAnswer === answer}
              isCorrectAnswer={
                selectedAnswer !== null && answer === correctAnswer
              }
            />
          ))}
        </View>
        <Timer />
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
