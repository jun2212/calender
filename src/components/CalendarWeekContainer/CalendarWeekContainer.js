import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { CalendarDay } from "../CalendarDay/CalendarDay";

import {
  getCurrentDate,
  getMonthStartDay,
  getMonthLastDate,
  getPreviousMonth,
  getWeekCount,
} from "../../utils/dateUtils";

const CalendarWeekContainer = ({ year, month, weekNumber }) => {
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
        const uniqueKey = "key_" + weekNumber + index;

        if (weekNumber === 0) {
          if (index < monthStartDay) {
            return (
              <CalendarDay
                date={previousMonthLastDate - (monthStartDay - index)}
                key={uniqueKey}
              />
            );
          }

          return (
            <CalendarDay date={index - monthStartDay + 1} key={uniqueKey} />
          );
        }

        const currentDate = index + weekNumber * 7 - monthStartDay + 1;

        if (currentDate > monthLastDate) {
          return <Text style={styles.emptyText} key={uniqueKey}></Text>;
        }

        return <CalendarDay date={currentDate} key={uniqueKey} />;
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
