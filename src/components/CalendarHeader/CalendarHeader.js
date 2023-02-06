import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CalendarHeader = ({
  currentMonthString,
  currentYear,
  onPressPrevious,
  onPressNextButton,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.headerButton} onPress={onPressPrevious}>
        <Text>&lt;</Text>
      </TouchableOpacity>
      <Text
        style={styles.headerText}
      >{`${currentMonthString}  ${currentYear}`}</Text>
      <TouchableOpacity style={styles.headerButton} onPress={onPressNextButton}>
        <Text>&gt;</Text>
      </TouchableOpacity>
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
