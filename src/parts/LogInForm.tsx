import { useState } from "react";
import { useApiContext } from "../services/ApiService";

import { Input } from "../components/radix/Input";
import { Button } from "../components/Button";

export const LogInForm = () => {
  const { data, loading, error, fetchData } = useApiContext();
  const [tokenId, setTokenId] = useState("");
  const [sn, setSn] = useState("");

  const handleFetchData = () => {
    if (tokenId && sn) {
      fetchData(tokenId, sn);
    }
  };

  return (
    <>
      <div className="container flex flex-col items-center">
        <div className="mt-16 flex flex-col gap-4 rounded-md bg-background p-8 shadow-md">
          <h1 className="text-center text-5xl">Solar Sense</h1>
          <p className="text-center sm:mb-6">
            Insert data from Solax Cloud. ?help
          </p>

          <div className="flex flex-col items-center gap-4">
            <div className="mb-4 flex flex-col items-end gap-4">
              <Input
                content="TokenID"
                id="tokenId"
                value={tokenId}
                placeholder="test"
                onChange={(e) => setTokenId(e.target.value)}
              />

              <Input
                content="SN"
                id="sn"
                value={sn}
                placeholder="test"
                onChange={(e) => setSn(e.target.value)}
              />
            </div>

            <Button
              content="Show data"
              variant="danger"
              onClick={handleFetchData}
            />
          </div>

          {loading && <p className="text-center">Loading...</p>}

          {error && <p className="text-center">{error}</p>}

          {data && (
            <div>
              {typeof data.result === "object" && data.result !== null ? (
                <>
                  <p>Inverter SN: {data.result.inverterSN}</p>
                  <p>Yield Today: {data.result.yieldtoday}</p>
                </>
              ) : (
                <p>Invalid data format</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
