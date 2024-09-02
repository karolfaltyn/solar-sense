import { useApiContext } from "../services/ApiService";
import { Box } from "../components/Box";
import { formatDate } from "../utils/date-formating";

export const Production = () => {
  const { data } = useApiContext();

  return (
    <div className="container my-8 max-w-[1000px]">
      {data && (
        <div className="grid grid-cols-3 gap-4">
          {typeof data.result === "object" && data.result !== null ? (
            <>
              <Box
                massage="Date and time of data collection "
                context={formatDate(data.result.uploadTime)}
                variant="2xy"
              />

              <Box
                massage="PV Power"
                context={data.result.acpower}
                extraStyle="border border-2 border-yellow"
              />

              <Box
                massage="Yeld Today"
                context={data.result.yieldtoday}
                extraStyle="border border-2 border-darkYellow"
              />

              <Box
                massage="Yeld Total"
                context={data.result.yieldtotal}
                variant="2xy"
                extraStyle="border border-2 border-darkGreen"
              />

              <Box
                massage="Consume Energy"
                context={
                  data?.result?.consumeenergy === 0
                    ? "--"
                    : data?.result?.consumeenergy
                }
              />

              <Box
                massage="Feed in Energy"
                context={
                  data?.result?.feedinpower === 0
                    ? "--"
                    : data?.result?.feedinpower
                }
              />
            </>
          ) : (
            <p>Invalid data format</p>
          )}
        </div>
      )}
    </div>
  );
};
