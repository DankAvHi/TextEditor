import { StyleSheet, useColorScheme } from "react-native";

export const useAppStyles = () => {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    App: {
      backgroundColor: colorScheme === "dark" ? "black" : "white",

      height: "100%",
    },
  });

  return {
    styles,
    colorScheme,
  };
};
