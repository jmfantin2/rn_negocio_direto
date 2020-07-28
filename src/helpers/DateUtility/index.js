const makeDates = (daysActive) => {
  const original = new Date();
  const originalTime = original.getTime();

  const modified = new Date();
  modified.setDate(modified.getDate() + daysActive);
  const modifiedTime = modified.getTime();

  return {
    createdDate: originalTime,
    endDate: modifiedTime,
  };
};

export { makeDates };
