export const isValidDate = (startDate, endDate) => {
  const [start_year, start_month, start_day] = startDate.split("-").map(Number);
  const [end_year, end_month, end_day] = endDate.split("-").map(Number);
  if (
    end_year >= start_year &&
    end_month >= start_month &&
    end_day >= start_day
  ) {
    let end = end_year + end_month + end_day;
    let start = start_year + start_month + start_day;
    return end - start > 0;
  }
  return false;
};
