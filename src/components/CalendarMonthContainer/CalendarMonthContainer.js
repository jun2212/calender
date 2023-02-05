import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { CalendarDay } from "../CalendarDay/CalendarDay";
import { CalendarWeekContainer } from "../CalendarWeekContainer/CalendarWeekContainer";

import {
  getCurrentDate,
  getMonthStartDay,
  getMonthLastDate,
  getPreviousMonth,
  getWeekCount,
} from "../../utils/dateUtils";

const CalendarMonthContainer = ({ currentYear, currentMonth }) => {
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
