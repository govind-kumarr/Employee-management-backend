export const isValidDate = (startDate, endDate) => {
  const [start_year, start_month, start_day] = startDate.split("-").map(Number);
  const [end_year, end_month, end_day] = endDate.split("-").map(Number);
  return (
    new Date(end_year, end_month, end_day) >
    new Date(start_year, start_month, start_day)
  );
};
