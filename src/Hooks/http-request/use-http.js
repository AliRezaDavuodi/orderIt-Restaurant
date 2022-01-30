import { useCallback, useState } from "react";

const useHttpRequest = () => {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(null);
  const [data, setData] = useState(null);

  const request = useCallback((requestConfig, convertData) => {
    setHasError(null);
    setLoading(true);
    fetch(requestConfig.url, {
      method: requestConfig.method ? requestConfig.method : "GET",
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      headers: requestConfig.headers ? requestConfig.headers : {},
    })
      .then((res) => {
        if (!res.ok) {
          setHasError(true);
          throw new Error(
            "something went wrong, we could't get data from server"
          );
        }
        return res.json();
      })
      .then((data) => {
        const covertedData = convertData(data);
        setData(covertedData);
      })
      .catch((err) => {
        console.log(err.message);
        setHasError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    hasError,
    loading,
    request,
    data,
  };
};

export default useHttpRequest;
