import {
  SafeAreaView,
  StatusBar,
  TextInput,
  useColorScheme,
} from "react-native";
import { useAppStyles } from "./App.styles";
import { AppTopBar } from "../widgets";

export const App = (): JSX.Element => {
  const { styles, colorScheme } = useAppStyles();

  return (
    <SafeAreaView style={styles.App}>
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={colorScheme === "dark" ? "black" : "white"}
      />
      <AppTopBar />
      <TextInput
        style={{ padding: 12, fontSize: 18, lineHeight: 1.5 }}
        multiline
        placeholder="Enter your text here..."
        placeholderTextColor={"gray"}
      />
    </SafeAreaView>
  );
};
