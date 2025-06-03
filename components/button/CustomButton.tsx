import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function CustomButton({
  label,
  onPress
}: {
  label: string;
  onPress: () => void;
}) {
  return (
    <View>
      <Button
        style={styles.button}
        mode="contained"
        textColor="white"
        onPress={onPress}
      >
        {label}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    width: 150,
    marginBottom: 10
  }
});
