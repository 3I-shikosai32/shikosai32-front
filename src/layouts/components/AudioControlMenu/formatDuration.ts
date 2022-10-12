export const formatDuration = (duration: number): string => {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);
  const minutesString = minutes.toString().padStart(1, '0');
  const secondsString = seconds.toString().padStart(2, '0');
  return `${minutesString}:${secondsString}`;
};
