import { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Progressbar } from "../../types/colors";

export default function Timer({
  startTimer,
  stopTimer,
  onTimeUp
}: {
  startTimer: number;
  stopTimer?: boolean;
  onTimeUp?: () => void;
}) {
  const totalTime = 15;
  const [timer, setTimer] = useState(totalTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTimer(totalTime);
    setIsRunning(true);
  }, [startTimer]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 0) {
            clearInterval(intervalRef.current!);
            setIsRunning(false);
            if (onTimeUp) onTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(intervalRef.current!);
    }
  }, [isRunning]);

  useEffect(() => {
    if (stopTimer && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  }, [stopTimer]);

  const progress = timer / totalTime;

  return (
    <View style={styles.container}>
      <ProgressBar
        progress={progress}
        color={Progressbar.primary}
        style={styles.progressbar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 40
  },
  progressbar: {
    width: 250,
    height: 15,
    borderRadius: 20,
    backgroundColor: Progressbar.background
  }
});
