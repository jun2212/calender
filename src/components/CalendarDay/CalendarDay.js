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
  dayButton: {},
  text: {
    lineHeight: 30,
    textAlign: "center",
  },
  otherMonthDate: {
    color: "#C9C9C9",
  },
  selectedDay: {
    width: "35px",
    border: "solid 2px blue",
    borderRadius: "50%",
  },
});

export { CalendarDay };
