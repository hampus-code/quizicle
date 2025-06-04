import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet } from "react-native";
import { TouchableRipple, Text } from "react-native-paper";
import { ButtonGradients } from "../../types/colors";

export default function CustomButton({
  label,
  onPress
}: {
  label: string;
  onPress: () => void;
}) {
  return (
    <View>
      <TouchableRipple
        onPress={onPress}
        rippleColor="rgba(255, 255, 255, 0.3)"
        borderless={false}
        style={styles.wrapper}
      >
        <LinearGradient
          colors={ButtonGradients.primary.colors}
          start={ButtonGradients.primary.start}
          end={ButtonGradients.primary.end}
          style={styles.gradient}
        >
          <Text>{label}</Text>
        </LinearGradient>
      </TouchableRipple>
      {/* 
      <Button
        style={styles.button}
        mode="contained"
        textColor="white"
        onPress={onPress}
      >
        {label}
      </Button>
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 20,
    overflow: "hidden",
    width: 150,
    marginBottom: 10
  },
  gradient: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center"
  },
  button: {
    backgroundColor: "orange",
    width: 150,
    marginBottom: 10
  }
});
