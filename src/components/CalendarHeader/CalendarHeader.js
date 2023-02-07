import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CalendarHeader = ({
  currentMonthString,
  currentYear,
  setPreviousMonth,
  setNextMonth,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.headerButton} onPress={setPreviousMonth}>
        <Text style={styles.headerButtonText}>&lt;</Text>
      </TouchableOpacity>
      <Text
        style={styles.headerText}
      >{`${currentMonthString}  ${currentYear}`}</Text>
      <TouchableOpacity style={styles.headerButton} onPress={setNextMonth}>
        <Text style={styles.headerButtonText}>&gt;</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
  },
  headerButton: {
    alignItems: "center",
    width: "10%",
  },
  headerButtonText: {
    fontSize: 20,
    color: "blue",
  },
});

export { CalendarHeader };
