export const daysAgo = (date: Date): number => {
  const nowInMilliseconds: number = new Date().getTime();
  const dateInMilliseconds: number = date.getTime();
  const millisecondsSinceDate = nowInMilliseconds - dateInMilliseconds;
  const secondsSinceDate = millisecondsSinceDate / 1000;
  const daysSinceDate = secondsSinceDate / 60 / 60 / 24;
  return Math.floor(daysSinceDate);
};

export const daysAgoPretty = (date?: Date): string => {
  const releaseDateToDisplay = date ? daysAgo(date) : null;
  const textToReturn =
    releaseDateToDisplay === null
      ? "unknown"
      : `${releaseDateToDisplay} days ago`;

  return textToReturn;
};
