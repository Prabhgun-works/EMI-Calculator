// Function to calculate EMI and provide a detailed breakdown
export  function calculateEMI({ principal, durationInMonths, annualInterestRate }) {
  const monthlyInterestRate = annualInterestRate / 12 / 100; // Convert annual rate to monthly rate
  const emi =
    (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, durationInMonths)) /
    (Math.pow(1 + monthlyInterestRate, durationInMonths) - 1);

  const emiBreakdown = [];
  let remainingPrincipal = principal;

  for (let i = 0; i < durationInMonths; i++) {
    const interestComponent = remainingPrincipal * monthlyInterestRate;
    const principalComponent = emi - interestComponent;
    remainingPrincipal -= principalComponent;

    emiBreakdown.push({
      month: i + 1, // Month identifier
      emi: emi, // Fixed EMI amount
      principalComponent: principalComponent, // Part of EMI that goes towards principal
      interestComponent: interestComponent, // Part of EMI that goes towards interest
      remainingPrincipal: Math.max(remainingPrincipal, 0), // Remaining principal after this month's payment
    });
  }

  return emiBreakdown;
}

// Example usage of Intl.NumberFormat for currency formatting
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
