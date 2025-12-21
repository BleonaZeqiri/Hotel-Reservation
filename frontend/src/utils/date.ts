export const getNextDay = (date: Date | null) => {
  if (!date) return null;
  const nextDay = new Date(date);
  nextDay.setDate(date.getDate() + 1); // Move to the next day
  return nextDay;
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

export const getDayDifference = (from: string, to: string) => {
  return (
    Math.ceil(
      (new Date(to).getTime() - new Date(from).getTime()) / (24 * 60 * 60 * 1000)
    ) + 1
  );
};


