import { useState, useEffect } from "react";

function UseCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://currency-api.pages.dev/v1/currencies/${currency}.json`)
      .then((res) => res.json()) // Make sure to call res.json()
      .then((res) => setData(res[currency])) // Set the correct data
      .catch((error) => console.error("Error fetching data:", error)); // Optional: Add error handling
  }, [currency]);

  return data; // Return the fetched data
}

export default UseCurrencyInfo;
