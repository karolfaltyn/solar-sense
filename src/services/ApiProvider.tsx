import React, { useState, ReactNode } from "react";
import ApiContext from "./ApiContext";
import { ApiDataType } from "../data/api-data-type";
import { isValidApiData } from "../utils/data-validation";

export const ApiProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<ApiDataType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (tokenId: string, sn: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://global.solaxcloud.com/proxyApp/proxy/api/getRealtimeInfo.do?tokenId=${encodeURIComponent(tokenId)}&sn=${encodeURIComponent(sn)}`,
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (!isValidApiData(result)) {
        throw new Error("Invalid data");
      }

      if (!result.success) {
        throw new Error("Invalid SN number.");
      }

      setData(result);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ApiContext.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </ApiContext.Provider>
  );
};
