import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CalendarHeader = (props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.headerButton}>&lt;</TouchableOpacity>
      <Text
        style={styles.headerText}
      >{`${props.targetMonthString}  ${props.targetYear}`}</Text>
      <TouchableOpacity style={styles.headerButton}>&gt;</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
  },
});

export { CalendarHeader };
