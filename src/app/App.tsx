import { SafeAreaView, StatusBar } from "react-native";
import { useAppStyles } from "./App.styles";
import { AppTopBar } from "../widgets";
import { AppProvider } from "./providers/AppProvider";
import { TextField } from "../widgets";

export const App = (): JSX.Element => {
  const { styles, colorScheme } = useAppStyles();

  return (
    <AppProvider>
      <SafeAreaView style={styles.App}>
        <StatusBar
          barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
          backgroundColor={colorScheme === "dark" ? "black" : "white"}
        />
        <AppTopBar />
        <TextField />
      </SafeAreaView>
    </AppProvider>
  );
};
