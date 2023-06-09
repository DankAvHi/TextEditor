import { createRef } from "react";
import { TextInput } from "react-native";
import { useTextFieldStyles } from "./TextField.styles";
import { useAppContext } from "../../app/providers/AppProvider";

export const TextField = () => {
  const { styles } = useTextFieldStyles();
  const { setIsFileHaveChanges } = useAppContext();

  const textInputRef = createRef<TextInput>();

  const textInputOnChange = () => setIsFileHaveChanges((_prev) => true);

  return (
    <TextInput
      onChange={textInputOnChange}
      ref={textInputRef}
      style={styles.TextField}
      multiline
      placeholder="Enter your text here..."
      placeholderTextColor={"gray"}
    />
  );
};
