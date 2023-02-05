const getCurrentDate = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const currentDay = date.getDate();

  return { currentYear, currentMonth, currentDay };
};

const getMonthStartDay = (year, month) => {
  const monthStartDay = new Date(year, month, 1);

  return monthStartDay.getDay();
};

const getMonthLastDate = (year, month) => {
  const monthLastDate = new Date(year, month, 0);

  return monthLastDate.getDate();
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

const getPrevDate = (date) => {
  if (date.month === 0) {
    return { year: date.year - 1, month: 11, day: date.day };
  }
  return { year: date.year, month: date.month - 1, day: date.day };
};

export {
  getCurrentDate,
  getMonthStartDay,
  getMonthLastDate,
  getNextMonth,
  getPreviousMonth,
  getWeekCount,
};
