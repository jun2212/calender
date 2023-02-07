import { StyleSheet, View } from "react-native";

import { CalendarWeek } from "../CalendarWeek/CalendarWeek";

const CalendarMonthContainer = ({
  currentYear,
  currentMonth,
  selectedDate,
  setSelectedDate,
  weekCount,
}) => {
  return (
    <View style={styles.monthContent}>
      {new Array(weekCount).fill("").map((_, index) => {
        return (
          <CalendarWeek
            year={currentYear}
            month={currentMonth}
            weekNumber={index}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            key={"key_" + currentMonth + index}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  monthContent: {
    justifyContent: "space-around",
  },
});

export { CalendarMonthContainer };
