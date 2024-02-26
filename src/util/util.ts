import { generateSlug } from "random-word-slugs";

export const generateRandomData = (length: number, companyArray?: string[]) => {
  // Function to generate random data for a company
  function generateRandomCompanyData() {
    const revenue = Math.floor(Math.random() * (1000000 - 100000) + 100000); // Random revenue between 100,000 and 1,000,000
    const expenses = Math.floor(Math.random() * (800000 - 50000) + 50000); // Random expenses between 50,000 and 800,000

    const profit = revenue - expenses;

    const profitPercentage = ((profit / revenue) * 100).toFixed(2);

    const lastTenYearData = Array.from({ length: 10 }, (_, index) => ({
      year: Number(new Date().getFullYear() - index),
      totalRevenueValue: Number(
        Math.floor(Math.random() * (100000 - 10000) + 10000)
      ),
      profitValue: Number(Math.floor(Math.random() * (10000 - 1000) + 1000)),
      employeeCount: Number(Math.floor(Math.random() * (1000 - 100) + 10)),
    }));

    return {
      revenue,
      expenses,
      profit,
      lastTenYearData,
      profitPercentage,
    };
  }

  // Generate random data for 5 companies
  const companies = Array.from({ length: length }, (_, index) => ({
    name: companyArray
      ? companyArray[index]
      : generateSlug(2, { format: "title" }),
    ...generateRandomCompanyData(),
  }));

  // Display the generated object
  return companies;
};
