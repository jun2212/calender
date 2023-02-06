const getCurrentDate = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const currentDay = date.getDate();
  const currentDayOfTheWeek = date.getDay();

  return { currentYear, currentMonth, currentDay, currentDayOfTheWeek };
};

const getMonthStartDay = (year, month) => {
  const monthStartDay = new Date(year, month, 1);

  return monthStartDay.getDay();
};

const getMonthLastDate = (year, month) => {
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year % 400 == 0) {
    monthDays[1] = 29;
  } else if (year % 100 == 0) {
    monthDays[1] = 28;
  } else if (year % 4 == 0) {
    monthDays[1] = 29;
  }

  return monthDays[month];
};

const getNextMonth = (year, month) => {
  if (month === 11) {
    return { year: year + 1, month: 0 };
  }
  return { year: year, month: month + 1 };
};

const getPreviousMonth = (year, month) => {
  if (month === 0) {
    return { year: year - 1, month: 11 };
  }
  return { year: year, month: month - 1 };
};

const getWeekCount = (monthStartDay, monthLastDate) => {
  const WeekCount = Math.ceil((monthStartDay + monthLastDate) / 7);

  return WeekCount;
};

export {
  getCurrentDate,
  getMonthStartDay,
  getMonthLastDate,
  getNextMonth,
  getPreviousMonth,
  getWeekCount,
};
