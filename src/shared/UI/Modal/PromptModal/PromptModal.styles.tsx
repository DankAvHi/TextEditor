import { StyleSheet, useColorScheme } from "react-native";

export const usePromptModalStyles = () => {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    PromptModal: {},

    wrapper: {
      backgroundColor: "#0009",

      width: "100%",
      height: "100%",

      justifyContent: "center",
      alignItems: "center",
    },

    container: {
      borderColor: "white",
      borderWidth: 1,

      padding: 12,

      gap: 12,
    },

    heading: {
      color: colorScheme === "dark" ? "white" : "black",
      fontSize: 24,
      textAlign: "center",
    },

    textInput: { minWidth: 240, fontSize: 18 },

    actions: {
      gap: 12,

      flexDirection: "row",
      justifyContent: "flex-end",
    },

    button: { paddingHorizontal: 12, paddingVertical: 6 },
    confirmButton: { backgroundColor: "green" },
    denyButton: { backgroundColor: "red" },
    buttonText: { color: colorScheme === "dark" ? "white" : "black" },
  });

  return { colorScheme, styles };
};
