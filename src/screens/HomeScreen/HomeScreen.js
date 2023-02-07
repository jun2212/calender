import { StyleSheet, Text, View, Button  } from "react-native";

function HomeScreen() {
  return (
    <View style={styles.home}>
      <Text>home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  home: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

export { HomeScreen };
