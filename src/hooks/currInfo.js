import { useState, useEffect } from "react";

function useFetchData(currency) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://open.er-api.com/v6/latest/${currency}`
        );
        const jsonData = await response.json();
        setData(jsonData["rates"]);
        setLoading(false);
      } catch (error) {
        console.error("Fetching error:", error);
      }
    };

    fetchData();
  }, [currency]);

  return { data, loading };
}

export default useFetchData;
//
