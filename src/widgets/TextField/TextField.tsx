import { createRef } from "react";
import { TextInput } from "react-native";
import { useTextFieldStyles } from "./TextField.styles";

export const TextField = () => {
  const { styles } = useTextFieldStyles();

  const textInputRef = createRef<TextInput>();

  return (
    <TextInput
      ref={textInputRef}
      style={styles.TextField}
      multiline
      placeholder="Enter your text here..."
      placeholderTextColor={"gray"}
    />
  );
};
