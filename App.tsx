import { Text, View } from "react-native";
import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import Routes from "./src/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from 'react-native-toast-message';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Toast />
      <Routes />
    </GestureHandlerRootView>
  );
}
