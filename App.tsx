import { StatusBar } from "expo-status-bar";
import { MainNavigators } from "./src/navigates";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { DefaultTheme, PaperProvider } from "react-native-paper";
import FlashMessage from "react-native-flash-message";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-BlackItalic": require("./assets/fonts/Poppins-BlackItalic.ttf"),
    "Poppins-Italic": require("./assets/fonts/Poppins-Italic.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return <Text>Font loading...</Text>;
  }

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "tomato",
      secondary: "yellow",
    },
  };

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <MainNavigators />
        <FlashMessage position="bottom" />
        <StatusBar style="dark" />
      </PaperProvider>
    </Provider>
  );
}
