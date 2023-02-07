import { StyleSheet, Text, View } from "react-native";

function LibraryScreen() {
  return (
    <View style={styles.library}>
      <Text>Library</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  library: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

export { LibraryScreen };
