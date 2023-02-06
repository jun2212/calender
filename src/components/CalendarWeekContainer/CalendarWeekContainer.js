import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { CalendarDay } from "../CalendarDay/CalendarDay";

import {
  getMonthStartDay,
  getMonthLastDate,
  getPreviousMonth,
} from "../../utils/dateUtils";

const CalendarWeekContainer = ({
  year,
  month,
  weekNumber,
  selectedDate,
  setSelectedDate,
}) => {
  const monthStartDay = getMonthStartDay(year, month);
  const monthLastDate = getMonthLastDate(year, month);
  const previousMonth = getPreviousMonth(year, month);
  const previousMonthLastDate = getMonthLastDate(
    previousMonth.year,
    previousMonth.month,
  );
  const { currentYear, currentMonth, currentDay } = selectedDate;

  const onSelectDay = (day) => {
    setSelectedDate({
      ...selectedDate,
      currentYear: year,
      currentMonth: month,
      currentDay: day,
    });
  };

  return (
    <View style={styles.weekContainer}>
      {new Array(7).fill("").map((_, index) => {
        const uniqueKey = "key_" + weekNumber + index;
        const day = weekNumber * 7 + index - monthStartDay + 1;
        let isSelected = false;

        if (
          year === currentYear &&
          month === currentMonth &&
          day === currentDay
        ) {
          isSelected = true;
        }

        if (weekNumber === 0) {
          if (index < monthStartDay) {
            return (
              <CalendarDay
                day={previousMonthLastDate - (monthStartDay - index)}
                isSelected={isSelected}
                onSelectDay={onSelectDay}
                otherMonthDate={true}
                key={uniqueKey}
              />
            );
          }

          return (
            <CalendarDay
              day={index - monthStartDay + 1}
              isSelected={isSelected}
              onSelectDay={onSelectDay}
              key={uniqueKey}
            />
          );
        }

        if (day > monthLastDate) {
          return (
            <CalendarDay
              day={day - monthLastDate}
              isSelected={isSelected}
              onSelectDay={onSelectDay}
              otherMonthDate={true}
              key={uniqueKey}
            />
          );
        }

        return (
          <CalendarDay
            day={day}
            isSelected={isSelected}
            onSelectDay={onSelectDay}
            key={uniqueKey}
          />
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
