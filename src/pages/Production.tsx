import { useApiContext } from "../services/ApiService";

export const Production = () => {
  const { data } = useApiContext();

  return (
    <div className="container">
      {data && (
        <div className="grid-container">
          {typeof data.result === "object" && data.result !== null ? (
            <>
              <div className="grid-item">{data.result.uploadTime}</div>

              <div className="grid-item">{data.result.acpower}</div>

              <div className="grid-item">{data.result.yieldtoday}</div>

              <div className="grid-item">{data.result.yieldtotal}</div>

              <div className="grid-item">
                {data?.result?.consumeenergy === 0
                  ? "--"
                  : data?.result?.consumeenergy}
              </div>

              <div className="grid-item">
                {data?.result?.feedinpower === 0
                  ? "--"
                  : data?.result?.feedinpower}
              </div>
            </>
          ) : (
            <p>Invalid data format</p>
          )}
        </div>
      )}
    </div>
  );
};
