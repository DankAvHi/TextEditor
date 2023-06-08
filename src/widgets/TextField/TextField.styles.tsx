import { StyleSheet, useColorScheme } from "react-native";

export const useTextFieldStyles = () => {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    TextField: {
      borderBottomWidth: 1,
      borderBottomColor: "white",

      padding: 12,

      fontSize: 18,
      lineHeight: 1.5,
    },
  });

  return { styles, colorScheme };
};
