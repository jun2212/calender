import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CalendarDay = ({ day, isSelected, onSelectDay, otherMonthDate = false }) => {
  return (
    <View style={styles.buttonWrapper}>
    <TouchableOpacity style={styles.dayButton} onPress={() => onSelectDay(day)} disabled={otherMonthDate}>
      <Text
        style={[
          styles.text,
          otherMonthDate && styles.otherMonthDate,
          isSelected && styles.selectedDay,
        ]}
      >
        {day}
      </Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {width: "14.2%", alignItems: "center"},
  dayButton: {width: "60%"},
  text: {
    lineHeight: 30,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "transparent",
  },
  otherMonthDate: {
    color: "#C9C9C9",
  },
  selectedDay: {
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 60,
  },
});

export { CalendarDay };
