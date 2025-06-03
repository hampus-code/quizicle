import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function CustomButton({ title }: { title: string }) {
  return (
    <View>
      <Button style={styles.button} mode="contained" textColor="white">
        {title}
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
