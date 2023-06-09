import { Modal, Pressable, TextInput, View, Text } from "react-native";
import { usePromptModalStyles } from "./PromptModal.styles";

type PromptModalPropsType = {
  visible?: boolean;
  textInputPlaceholder?: string;
  confirmButtonTitle?: string;
  confirmButtonOnPress?: () => void;
  denyButtonTitle?: string;
  denyButtonOnPress?: () => void;
  headingText?: string;
};

export const PromptModal = ({
  visible,
  textInputPlaceholder,
  confirmButtonOnPress,
  confirmButtonTitle,
  denyButtonOnPress,
  denyButtonTitle,
  headingText,
}: PromptModalPropsType) => {
  const { styles } = usePromptModalStyles();

  return (
    <Modal
      transparent
      animationType="fade"
      style={styles.PromptModal}
      {...{ visible }}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.heading}>{headingText}</Text>
          <TextInput
            style={styles.textInput}
            placeholder={textInputPlaceholder}
          />

          <View style={styles.actions}>
            <Pressable
              style={[styles.button, styles.confirmButton]}
              onPress={confirmButtonOnPress}>
              <Text style={styles.buttonText}>{confirmButtonTitle}</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.denyButton]}
              onPress={denyButtonOnPress}>
              <Text style={styles.buttonText}>{denyButtonTitle}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};
