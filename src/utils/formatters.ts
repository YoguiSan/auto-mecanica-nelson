export const formatMoney = (amount: number, currency: string = 'BRL'): string => {
  const Formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency,
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
  return Formatter.format(amount);
};
