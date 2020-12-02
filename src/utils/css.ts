export const getRemValue = (): number => {
  return parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );
};

export const getRems = (amount: number): number => {
  return amount * getRemValue();
};
