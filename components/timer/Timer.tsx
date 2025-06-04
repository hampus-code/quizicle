import { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import { ProgressBar } from "react-native-paper";

export default function Timer() {
  const totalTime = 15;
  const [timer, setTimer] = useState(totalTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current!);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(intervalRef.current!);
    }
  }, [isRunning]);

  function handleStartTimer() {
    setTimer(totalTime);
    setIsRunning(true);
  }

  const progress = timer / totalTime;

  return (
    <View>
      <ProgressBar
        progress={progress}
        color="green"
        style={styles.progressbar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  progressbar: {
    width: 250,
    height: 15,
    borderRadius: 20,
    marginTop: 150
  }
});
