import { Text, View } from "react-native";
import { useAppTopBarStyles } from "./AppTopBar.styles";

export const AppTopBar = () => {
  const { styles } = useAppTopBarStyles();
  return (
    <View style={styles.AppTopBar}>
      <Text style={styles.fileName}>{`Untitled`}</Text>
    </View>
  );
};
