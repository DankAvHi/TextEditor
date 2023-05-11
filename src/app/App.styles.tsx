import { ColorSchemeName, StyleSheet } from "react-native";

export const useAppStyles = (colorScheme: ColorSchemeName) => {
  return StyleSheet.create({
    App: {
      backgroundColor: colorScheme === "dark" ? "black" : "white",

      height: "100%",
    },
  });
};
