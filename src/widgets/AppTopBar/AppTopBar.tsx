import { Text, View } from "react-native";
import { useAppTopBarStyles } from "./AppTopBar.styles";
import { useAppContext } from "../../app/providers/AppProvider";

export const AppTopBar = () => {
  const { isFileHaveChanges } = useAppContext();

  const { styles } = useAppTopBarStyles();
  return (
    <View style={styles.AppTopBar}>
      <Text style={styles.fileName}>{`Untitled ${
        isFileHaveChanges ? `*` : ``
      }`}</Text>
    </View>
  );
};
