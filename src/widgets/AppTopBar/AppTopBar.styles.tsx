import { StyleSheet, useColorScheme } from "react-native";

export const useAppTopBarStyles = () => {
  const colorScheme = useColorScheme();

  return StyleSheet.create({
    AppTopBar: {
      padding: 12,

      backgroundColor: colorScheme === "dark" ? "white" : "black",
    },
    fileName: {
      color: colorScheme === "dark" ? "black" : "white",
      fontSize: 24,
    },
  });
};
