import { Text, TouchableOpacity, View } from "react-native";
import { useAppTopBarStyles } from "./AppTopBar.styles";
import { useAppContext } from "../../app/providers/AppProvider";
import { SaveIcon } from "../../shared";
import { useState } from "react";
import { PromptModal } from "../../shared/UI";

export const AppTopBar = () => {
  const { isFileHaveChanges, setIsFileHaveChanges, editableFileName } =
    useAppContext();

  const [saveModalVisible, setSaveModalVisible] = useState(false);

  const saveButtonOnPressHandler = () => {
    setIsFileHaveChanges((_prev) => false);
    setSaveModalVisible((_prev) => true);
  };

  const modalSaveButtonOnPressHandler = () =>
    setSaveModalVisible((_prev) => false);

  const { styles } = useAppTopBarStyles();
  return (
    <>
      <View style={styles.AppTopBar}>
        <Text style={styles.fileName}>{`${editableFileName}${
          isFileHaveChanges ? `*` : ``
        }`}</Text>

        <TouchableOpacity onPress={saveButtonOnPressHandler}>
          <SaveIcon width={32} height={32} />
        </TouchableOpacity>
      </View>
      <PromptModal
        visible={saveModalVisible}
        confirmButtonOnPress={modalSaveButtonOnPressHandler}
        confirmButtonTitle="Save"
        denyButtonTitle="Cancel"
        textInputPlaceholder="Enter file name..."
        headingText="Save file"
        denyButtonOnPress={() => setSaveModalVisible((_prev) => false)}
      />
    </>
  );
};
