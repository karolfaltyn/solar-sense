import { useState } from "react";
import { useApiContext } from "../services/ApiService";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { Input } from "../components/radix/Input";
import { Button } from "../components/Button";

export const LogInForm = () => {
  const { error, fetchData } = useApiContext();
  const [tokenId, setTokenId] = useState("");
  const [sn, setSn] = useState("");

  const handleFetchData = () => {
    if (tokenId && sn) {
      fetchData(tokenId, sn);
    }
  };

  const navigate = useNavigate();

  const goToProduction = () => {
    navigate("/production");
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="flex w-[90vw] flex-col xs:w-96">
        <div className="my-8 flex flex-col gap-2 rounded-md bg-background p-8 shadow-md md:mt-16">
          <h1 className="text-2xl font-semibold text-darkGray">
            {t("form.title")}
          </h1>
          <hr />
          <p className="mb-4 text-gray"> {t("form.desc")}</p>

          <div className="flex flex-col items-center gap-10">
            <div className="flex w-full flex-col items-end gap-4">
              <Input
                content="TokenID"
                id="tokenId"
                value={tokenId}
                placeholder={t("form.placeholder")}
                onChange={(e) => setTokenId(e.target.value)}
              />

              <Input
                content="SN"
                id="sn"
                value={sn}
                placeholder={t("form.placeholder2")}
                onChange={(e) => setSn(e.target.value)}
              />
            </div>

            <Button
              content={t("form.button")}
              variant="primary"
              onClick={() => {
                handleFetchData();
                goToProduction();
              }}
            />
          </div>

          {error && <p className="text-center text-red">{error}</p>}
        </div>
      </div>
    </>
  );
};
