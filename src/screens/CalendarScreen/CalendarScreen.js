import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { CalendarHeader } from "../../components/CalendarHeader/CalendarHeader";
import { DayOfWeek } from "../../components/DayOfWeek/DayOfWeek";
import { CalendarMonthContainer } from "../../components/CalendarMonthContainer/CalendarMonthContainer";

import { getCurrentDate, getNextMonth, getPreviousMonth } from "../../utils/dateUtils";
import { MONTH_STRING } from "../../config/constants";

function CalendarScreen() {
  const [targetDate, setTargetDate] = useState({});
  const currentMonthString = MONTH_STRING[targetDate.currentMonth];

  useState(() => {
    setTargetDate(getCurrentDate());
  }, []);

  const onPressPreviousButton = () => {
    const previousMonth = getPreviousMonth(
      targetDate.currentYear,
      targetDate.currentMonth,
    );

    setTargetDate({
      ...targetDate,
      currentYear: previousMonth.year,
      currentMonth: previousMonth.month,
    });
  };

  const onPressNextButton = () => {
    const nextMonth = getNextMonth(
      targetDate.currentYear,
      targetDate.currentMonth,
    );

    setTargetDate({
      ...targetDate,
      currentYear: nextMonth.year,
      currentMonth: nextMonth.month,
    });
  };

  return (
    <View>
      <CalendarHeader
        currentMonthString={currentMonthString}
        currentYear={targetDate.currentYear}
        onPressNextButton={onPressNextButton}
        onPressPrevious={onPressPreviousButton}
      />
      <DayOfWeek />
      <CalendarMonthContainer
        currentYear={targetDate.currentYear}
        currentMonth={targetDate.currentMonth}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerButton: { color: "blue" },
});

export { CalendarScreen };
