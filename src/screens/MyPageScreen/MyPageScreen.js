import { StyleSheet, Text, View } from "react-native";

function MyPageScreen() {
  return (
    <View style={styles.myPage}>
      <Text>MyPage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  myPage: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

export { MyPageScreen };
