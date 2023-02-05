import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { CalendarHeader } from "../../components/CalendarHeader/CalendarHeader";
import { DayOfWeek } from "../../components/DayOfWeek/DayOfWeek";
import { CalendarMonthContainer } from "../../components/CalendarMonthContainer/CalendarMonthContainer";

import { getCurrentDate } from "../../utils/dateUtils";
import { MONTH_STRING } from "../../config/constants";

function CalendarScreen() {
  const [targetDate, setTargetDate] = useState({});
  const targetMonthString = MONTH_STRING[targetDate.currentMonth];
  const targetYear = targetDate.currentYear;
  const headerProps = {
    targetMonthString,
    targetYear,
  };

  useState(() => {
    setTargetDate(getCurrentDate());
  }, []);

  return (
    <View>
      <CalendarHeader {...headerProps} />
      <DayOfWeek />
      <CalendarMonthContainer {...targetDate} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerButton: { color: "blue" },
});

export { CalendarScreen };
