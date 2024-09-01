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
      <div className="xs:w-96 container flex w-[90vw] flex-col">
        <div className="mt-16 flex flex-col gap-2 rounded-md bg-background p-8 shadow-md">
          <h1 className="text-2xl font-semibold text-darkGray">
            Check production
          </h1>
          <hr />
          <p className="mb-4 text-gray">Type data from Solax Cloud.</p>

          <div className="flex flex-col items-center gap-10">
            <div className="flex w-full flex-col items-end gap-4">
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
              variant="primary"
              onClick={handleFetchData}
            />
          </div>

          {loading && <p className="text-center">Loading...</p>}

          {error && <p className="text-center text-red">{error}</p>}

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
