import {
  createNativeStackNavigator,
  NativeStackScreenProps
} from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation.types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import HomeScreen from "../screens/Home/HomeScreen";
import GameScreen from "../screens/Game/GameScreen";

export type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function RootStack() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Game"
        component={GameScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
