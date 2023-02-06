import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { CalendarHeader } from "../../components/CalendarHeader/CalendarHeader";
import { DayOfTheWeekContainer } from "../../components/DayOfTheWeekContainer/DayOfTheWeekContainer";
import { CalendarMonthContainer } from "../../components/CalendarMonthContainer/CalendarMonthContainer";

import {
  getCurrentDate,
  getNextMonth,
  getPreviousMonth,
} from "../../utils/dateUtils";
import { MONTH_STRING } from "../../config/constants";

function CalendarScreen() {
  const [targetDate, setTargetDate] = useState({});
  const [selectedDate, setSelectedDate] = useState({});
  const currentMonthString = MONTH_STRING[targetDate.currentMonth];

  useState(() => {
    const currentDate = getCurrentDate();
    setTargetDate(currentDate);
    setSelectedDate(currentDate);
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
    <View style={styles.calender}>
      <CalendarHeader
        currentMonthString={currentMonthString}
        currentYear={targetDate.currentYear}
        onPressNextButton={onPressNextButton}
        onPressPrevious={onPressPreviousButton}
      />
      <DayOfTheWeekContainer />
      <CalendarMonthContainer
        currentYear={targetDate.currentYear}
        currentMonth={targetDate.currentMonth}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  calender: { backgroundColor: "white", height: "100%" },
});

export { CalendarScreen };
