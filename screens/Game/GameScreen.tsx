import { View, StyleSheet, Alert } from "react-native";
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
  const [questionKey, setQuestionKey] = useState(0);
  const [stopTimer, setStopTimer] = useState(false);
  const [questionCount, setQuestionCount] = useState(1);
  const totalQuestions = 3;

  const decodeCharacters = (char: string) =>
    char
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&amp;/g, "&");

  const { data: questions } = useQuery({
    queryKey: ["questions", questionKey],
    queryFn: () => fetchTriviaQuestions()
  });

  const correctAnswer = questions?.correct_answer ?? "";

  function handleAnswerCard(answer: string) {
    setSelectedAnswer(answer);
    setStopTimer(true);
    setTimeout(() => {
      showNextQuestion();
    }, 1500);
  }

  function showNextQuestion() {
    if (questionCount < totalQuestions) {
      setQuestionKey((prev) => prev + 1);
      setQuestionCount((prev) => prev + 1);
      setSelectedAnswer(null);
      setStopTimer(false);
    } else {
      Alert.alert("Game Over!");
    }
  }

  function handleTimeUp() {
    setSelectedAnswer("");
    setStopTimer(true);
    setTimeout(() => {
      showNextQuestion();
    }, 1500);
  }

  useEffect(() => {
    if (questions) {
      const allAnswers = [
        ...questions.incorrect_answers,
        questions.correct_answer
      ];
      const shuffled = allAnswers.sort(() => Math.random() - 0.5);
      setShuffledAnswers(shuffled);
      setSelectedAnswer(null);
      setStopTimer(false);
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
        {!questions ? (
          <QuestionCard category="" question="Loading..." />
        ) : (
          <>
            <QuestionCard
              category={questions.category}
              question={decodeCharacters(questions.question)}
            />
            <View style={styles.answerCards}>
              {shuffledAnswers.map((answer, index) => (
                <AnswerCard
                  key={index}
                  answer={decodeCharacters(answer)}
                  onPress={
                    selectedAnswer === null
                      ? () => handleAnswerCard(answer)
                      : undefined
                  }
                  isSelectedAnswer={selectedAnswer === answer}
                  isCorrectAnswer={
                    selectedAnswer !== null && answer === correctAnswer
                  }
                />
              ))}
            </View>
          </>
        )}
        <Timer
          startTimer={questionKey}
          stopTimer={stopTimer}
          onTimeUp={handleTimeUp}
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
