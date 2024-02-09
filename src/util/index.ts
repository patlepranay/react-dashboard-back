export const generateRandomData = () => {
  // Function to generate random data for a company
function generateRandomCompanyData() {
    const revenue = Math.floor(Math.random() * (1000000 - 100000) + 100000); // Random revenue between 100,000 and 1,000,000
    const expenses = Math.floor(Math.random() * (800000 - 50000) + 50000); // Random expenses between 50,000 and 800,000
  
    const profitLoss = revenue - expenses;
  
    const percentProfit = ((profitLoss / revenue) * 100).toFixed(2);
  
    return {
      revenue,
      expenses,
      profitLoss,
     
      percentProfit,
    };
  }
  
  // Generate random data for 5 companies
  const companies = Array.from({ length: 5 }, (_, index) => ({
    name: `Company ${index + 1}`,
    data: generateRandomCompanyData(),
  }));
  
  
  
  // Display the generated object
  return companies;
};
