import { StyleSheet, View } from "react-native";

import { CalendarWeekContainer } from "../CalendarWeekContainer/CalendarWeekContainer";

import {
  getMonthStartDay,
  getMonthLastDate,
  getWeekCount,
} from "../../utils/dateUtils";

const CalendarMonthContainer = ({ currentYear, currentMonth, selectedDate, setSelectedDate }) => {
  const monthStartDay = getMonthStartDay(currentYear, currentMonth);
  const monthLastDate = getMonthLastDate(currentYear, currentMonth);
  const weekCount = getWeekCount(monthStartDay, monthLastDate);

  return (
    <View style={styles.monthContent}>
      {new Array(weekCount).fill("").map((_, index) => {
        return (
          <CalendarWeekContainer
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
