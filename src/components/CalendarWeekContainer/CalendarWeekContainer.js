import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { CalendarDay } from "../CalendarDay/CalendarDay";

import {
  getCurrentDate,
  getMonthStartDay,
  getMonthLastDate,
  getPreviousMonth,
  getWeekCount,
} from "../../utils/dateUtils";

const CalendarWeekContainer = (props) => {
  const { year, month, weekNumber } = props;
  const monthStartDay = getMonthStartDay(year, month);
  const monthLastDate = getMonthLastDate(year, month);
  const previousMonth = getPreviousMonth(year, month);
  const previousMonthLastDate = getMonthLastDate(
    previousMonth.year,
    previousMonth.month,
  );

  return (
    <View style={styles.weekContainer}>
      {new Array(7).fill("").map((_, index) => {
        if (weekNumber === 0) {
          if (index < monthStartDay) {
            return (
              <CalendarDay
                date={previousMonthLastDate - (monthStartDay - index)}
                key={"key_" + weekNumber + index}
              />
            );
          }

          return (
            <CalendarDay
              date={index - monthStartDay + 1}
              key={"key_" + weekNumber + index}
            />
          );
        }

        const currentIndex = index + weekNumber * 7 - monthStartDay + 1;

        if (currentIndex > monthLastDate) {
          return <Text style={styles.emptyText} key={"key_" + weekNumber + index}></Text>;
        }

        return (
          <CalendarDay date={currentIndex} key={"key_" + weekNumber + index} />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  weekContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  emptyText: { width: "14.2%" },
});

export { CalendarWeekContainer };
