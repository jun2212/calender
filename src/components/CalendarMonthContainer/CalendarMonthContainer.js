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

const CalendarMonthContainer = (props) => {
  const { currentYear, currentMonth, currentDay } = props;
  const monthStartDay = getMonthStartDay(currentYear, currentMonth);
  const monthLastDate = getMonthLastDate(currentYear, currentMonth);
  const previousMonth = getPreviousMonth(currentYear, currentMonth);
  const weekCount = getWeekCount(monthStartDay, monthLastDate);
  const previousMonthLastDate = getMonthLastDate(
    previousMonth.year,
    previousMonth.month,
  );

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
