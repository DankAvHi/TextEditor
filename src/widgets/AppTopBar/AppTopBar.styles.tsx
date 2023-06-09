import { StyleSheet, useColorScheme } from "react-native";

export const useAppTopBarStyles = () => {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    AppTopBar: {
      padding: 12,

      backgroundColor: colorScheme === "dark" ? "white" : "black",

      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    fileName: {
      color: colorScheme === "dark" ? "black" : "white",
      fontSize: 24,
    },
  });

  return { styles };
};
