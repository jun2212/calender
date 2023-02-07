import { useState } from "react";
import { StyleSheet, View, Animated } from "react-native";
import { runOnJS } from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

import { MONTH_STRING } from "../../config/constants";

import { CalendarHeader } from "../../components/CalendarHeader/CalendarHeader";
import { DayOfTheWeekContainer } from "../../components/DayOfTheWeekContainer/DayOfTheWeekContainer";
import { CalendarMonthContainer } from "../../components/CalendarMonthContainer/CalendarMonthContainer";
import { CalendarWeekContainer } from "../../components/CalendarWeekContainer/CalendarWeekContainer";

import {
  getCurrentDate,
  getNextMonth,
  getPreviousMonth,
  getMonthStartDay,
  getMonthLastDate,
  getWeekCount,
} from "../../utils/dateUtils";

function CalendarScreen() {
  const [targetDate, setTargetDate] = useState({});
  const [selectedDate, setSelectedDate] = useState({});
  const [isMonth, setIsMonth] = useState(true);
  const [weekNumber, setWeekNumber] = useState(0);

  const currentMonthString = MONTH_STRING[targetDate.currentMonth];
  const monthStartDay = getMonthStartDay(
    targetDate.currentYear,
    targetDate.currentMonth,
  );
  const monthLastDate = getMonthLastDate(
    targetDate.currentYear,
    targetDate.currentMonth,
  );
  const weekCount = getWeekCount(monthStartDay, monthLastDate);

  const setToMonthState = () => {
    setIsMonth(true);
  };

  const setToWeekState = () => {
    setIsMonth(false);
  };

  const setPreviousMonth = () => {
    const { year, month } = getPreviousMonth(
      targetDate.currentYear,
      targetDate.currentMonth,
    );

    setTargetDate({
      ...targetDate,
      currentYear: year,
      currentMonth: month,
    });
    setWeekNumber(0);
  };

  const setNextMonth = () => {
    const { year, month } = getNextMonth(
      targetDate.currentYear,
      targetDate.currentMonth,
    );

    setTargetDate({
      ...targetDate,
      currentYear: year,
      currentMonth: month,
    });
    setWeekNumber(0);
  };

  const onDragLeft = () => {
    if (weekNumber === 0) {
      const { year, month } = getPreviousMonth(
        targetDate.currentYear,
        targetDate.currentMonth,
      );
      const previousMonthLastDate = getMonthLastDate(year, month);

      setTargetDate({
        ...targetDate,
        currentYear: year,
        currentMonth: month,
      });

      setWeekNumber(previousMonthLastDate);
      return;
    }

    setWeekNumber(weekNumber - 1);
  };

  const onDragRight = () => {
    if (weekNumber + 1 === weekCount) {
      setNextMonth();
      setWeekNumber(0);
      return;
    }

    setWeekNumber(weekNumber + 1);
  };

  const gesture = Gesture.Pan().onEnd((e) => {
    if (e.translationY < -15) {
      runOnJS(setToWeekState)();
      return;
    }
    if (e.translationY > 15) {
      runOnJS(setToMonthState)();
      return;
    }
    if (e.translationX < -10) {
      isMonth ? runOnJS(setPreviousMonth)() : runOnJS(onDragRight)();
      return;
    }
    if (e.translationX > 10) {
      isMonth ? runOnJS(setNextMonth)() : runOnJS(onDragLeft)();
    }
  });

  useState(() => {
    const currentDate = getCurrentDate();

    setTargetDate(currentDate);
    setSelectedDate(currentDate);
  }, []);

  return (
    <View style={styles.calendarScreen}>
      <CalendarHeader
        currentMonthString={currentMonthString}
        currentYear={targetDate.currentYear}
        setNextMonth={setNextMonth}
        setPreviousMonth={setPreviousMonth}
      />
      <DayOfTheWeekContainer />
      <GestureHandlerRootView>
        <GestureDetector gesture={gesture}>
          <Animated.View>
            {isMonth ? (
              <CalendarMonthContainer
                currentYear={targetDate.currentYear}
                currentMonth={targetDate.currentMonth}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                weekCount={weekCount}
              />
            ) : (
              <CalendarWeekContainer
                year={targetDate.currentYear}
                month={targetDate.currentMonth}
                weekNumber={weekNumber}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            )}
          </Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  calendarScreen: {
    paddingTop: "15%",
    flex: 1,
  },
});

export { CalendarScreen };
